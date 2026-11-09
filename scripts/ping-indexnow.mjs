import { createHash } from 'node:crypto';
import { readFileSync, existsSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { MANIFEST_NAME, MANIFEST_URL, submitUrls } from './indexnow-client.mjs';

const SITEMAP = resolve('dist/sitemap-0.xml');
const MANIFEST_PATH = resolve('dist', MANIFEST_NAME);

// Only a real production deploy may queue URLs: this runs from `postbuild`, so every
// preview deploy and every local `npm run build` reaches it.
//
// Neither context variable is enough on its own: `netlify build` and `vercel build
// --prod` set them on a laptop too, defaulting to the production context. A deploy id
// exists only where there is an actual deploy, so that is what separates the hosted
// build from the local imitation.
const vercelEnv = process.env.VERCEL_ENV; // 'production' | 'preview' | 'development'
const netlifyContext = process.env.CONTEXT; // 'production' | 'deploy-preview' | 'branch-deploy'
const isProd = vercelEnv === 'production' || netlifyContext === 'production';
const deployId = process.env.DEPLOY_ID || process.env.VERCEL_DEPLOYMENT_ID || '';
const hostedDeploy = deployId !== '' && deployId !== '0'; // the CLI stubs it as 0 locally
const productionDeploy = hostedDeploy && isProd;

// The local override, for resending the whole sitemap by hand. It deliberately has no
// effect on a hosted build: set as a project-level variable on the host it would
// otherwise apply to every environment.
const force = !['', '0', 'false'].includes(String(process.env.INDEXNOW_FORCE ?? ''));
const manualResend = !hostedDeploy && force;

// Submit only what changed: Bing asks for changed URLs, not the whole site on every
// deploy. Each build publishes a manifest of page hashes, and the next production build
// compares against the live copy. This step only queues the URLs in the manifest;
// netlify/functions/deploy-succeeded.mjs submits them once the deploy is live.
//
// Every build writes a manifest, on every path, because a deploy without one would
// delete the baseline the next deploy depends on.

function distFile(url) {
	const path = decodeURIComponent(new URL(url).pathname).replace(/\/$/, '');
	return resolve('dist', path === '' ? 'index.html' : `${path.slice(1)}.html`);
}

// Hash what a search engine reads: the snippet, the indexing signals and the main
// content. Scripts, styles, Astro's scoped attributes and the build hashes in /_astro/
// file names are removed, otherwise one CSS tweak would mark every page as changed.
function contentHash(html) {
	const pick = (re) => html.match(re)?.[0] ?? '';
	const pickAll = (re) => [...html.matchAll(re)].map((m) => m[0]).join('\n');
	const main = pick(/<main[\s\S]*<\/main>/)
		.replace(/<script[\s\S]*?<\/script>/g, '')
		.replace(/<style[\s\S]*?<\/style>/g, '');
	const stable = [
		pick(/<title>[\s\S]*?<\/title>/),
		pick(/<meta name="description"[^>]*>/),
		pick(/<meta name="robots"[^>]*>/),
		pickAll(/<link[^>]*rel="(?:canonical|alternate)"[^>]*>/g),
		pickAll(/<script[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/g),
		main,
	]
		.join('\n')
		.replace(/ data-astro-[a-z0-9-]+(="[^"]*")?/g, '')
		.replace(/(\/_astro\/[^"'\s)]*?)\.[\w-]{8,}(\.\w+)/g, '$1$2');
	return createHash('sha256').update(stable).digest('hex').slice(0, 16);
}

function readSitemapUrls() {
	if (!existsSync(SITEMAP)) throw new Error(`${SITEMAP} not found`);
	const xml = readFileSync(SITEMAP, 'utf8');
	const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
	if (urls.length === 0) throw new Error('no URLs in the sitemap');
	return urls;
}

function hashPages(urls) {
	const pages = {};
	for (const url of urls) {
		const file = distFile(url);
		if (existsSync(file)) pages[url] = contentHash(readFileSync(file, 'utf8'));
		else console.warn(`[indexnow] no built file for ${url}`);
	}
	return pages;
}

// Only a real 404 means "no baseline yet". Any other failure is unknown state.
async function fetchLiveManifest() {
	try {
		const res = await fetch(MANIFEST_URL, { signal: AbortSignal.timeout(15000) });
		if (res.status === 404) return { status: 'none' };
		if (!res.ok) throw new Error(`HTTP ${res.status}`);
		const { pages, fresh } = await res.json();
		if (!pages || typeof pages !== 'object') throw new Error('no pages in the manifest');
		return { status: 'ok', pages, fresh: Array.isArray(fresh) ? fresh : [] };
	} catch (err) {
		console.warn(`[indexnow] could not read the live manifest: ${err.message}`);
		return { status: 'error' };
	}
}

// `fresh` is what changed in this deploy. `pending` is what gets submitted: fresh plus
// the previous deploy's fresh URLs, sent once more in case that submission failed or
// the deploy was not live yet.
function plan(pages, sitemapUrls, live) {
	if (!live || live.status === 'none') return { pending: [], fresh: [] };
	if (live.status === 'error') return { pending: sitemapUrls, fresh: sitemapUrls };

	const changed = Object.keys(pages).filter((url) => pages[url] !== live.pages[url]);
	// IndexNow also wants removed pages, so Bing drops them sooner.
	const removed = Object.keys(live.pages).filter((url) => pages[url] === undefined);
	const fresh = [...changed, ...removed];
	return { pending: [...new Set([...fresh, ...live.fresh])], fresh };
}

function writeManifest(manifest) {
	writeFileSync(MANIFEST_PATH, JSON.stringify(manifest));
}

async function main() {
	const id = productionDeploy ? deployId : '';
	const live = productionDeploy ? await fetchLiveManifest() : null;

	if (hostedDeploy && !isProd) {
		console.log(`[indexnow] non-production deploy (VERCEL_ENV=${vercelEnv ?? '-'}, CONTEXT=${netlifyContext ?? '-'}), nothing queued`);
	} else if (!hostedDeploy && !force) {
		console.log('[indexnow] not a hosted deploy (no DEPLOY_ID / VERCEL_DEPLOYMENT_ID), nothing queued (set INDEXNOW_FORCE=1 to resend the sitemap)');
	}

	try {
		const sitemapUrls = readSitemapUrls();

		if (manualResend) {
			console.log('[indexnow] INDEXNOW_FORCE set, sending the whole sitemap');
			await submitUrls(sitemapUrls);
		}

		const pages = hashPages(sitemapUrls);
		const { pending, fresh } = plan(pages, sitemapUrls, live);
		writeManifest({ deployId: id, pages, pending, fresh });
		if (productionDeploy) console.log(`[indexnow] ${pending.length} URLs queued for after the deploy (baseline: ${live.status})`);
	} catch (err) {
		// Keep the old baseline so the next deploy can still compare.
		console.warn(`[indexnow] nothing queued: ${err.message}`);
		writeManifest({ deployId: id, pages: live?.pages ?? {}, pending: [], fresh: live?.fresh ?? [] });
	}
}

// IndexNow must never fail the deploy. Log and exit 0.
await main().catch((err) => console.warn(`[indexnow] skipped due to error: ${err.message}`));
