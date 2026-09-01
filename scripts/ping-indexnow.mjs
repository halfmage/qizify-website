import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const KEY = 'd8faa862193f366e91803f4a56f4c0a4';
const HOST = 'learnslice.com';
const SITEMAP = resolve('dist/sitemap-0.xml');

// Only ping IndexNow from a real production deploy: this runs from `postbuild`,
// so every preview deploy and every local `npm run build` reaches it, and each
// would otherwise submit the production sitemap.
//
// Supports Netlify (CONTEXT) and Vercel (VERCEL_ENV). Neither context variable is
// enough on its own: `netlify build` and `vercel build --prod` set them on a
// laptop too, defaulting to the production context. A deploy id exists only where
// there is an actual deploy, so that is what separates the hosted build from the
// local imitation. If a platform ever stops providing one the ping is skipped, not
// wrongly sent, and the log below names the variable to look at.
const vercelEnv = process.env.VERCEL_ENV; // 'production' | 'preview' | 'development'
const netlifyContext = process.env.CONTEXT; // 'production' | 'deploy-preview' | 'branch-deploy'
const isProd = vercelEnv === 'production' || netlifyContext === 'production';
const deployId = process.env.DEPLOY_ID || process.env.VERCEL_DEPLOYMENT_ID || '';
const hostedDeploy = deployId !== '' && deployId !== '0'; // the CLI stubs it as 0 locally

// The local override, for running the ping by hand. It deliberately does NOT reach
// the production check below: set as a project-level variable on the host it would
// otherwise apply to every environment, and every preview deploy would start
// pinging production URLs.
const force = !['', '0', 'false'].includes(String(process.env.INDEXNOW_FORCE ?? ''));

if (!hostedDeploy) {
	if (!force) {
		console.log(
			'[indexnow] not a hosted deploy (no DEPLOY_ID / VERCEL_DEPLOYMENT_ID), skipping (set INDEXNOW_FORCE=1 to override)',
		);
		process.exit(0);
	}
	console.log('[indexnow] INDEXNOW_FORCE set, pinging from a local build');
} else if (!isProd) {
	console.log(
		`[indexnow] non-production deploy (VERCEL_ENV=${vercelEnv ?? '-'}, CONTEXT=${netlifyContext ?? '-'}), skipping`,
	);
	process.exit(0);
}

try {
	if (!existsSync(SITEMAP)) {
		console.warn(`[indexnow] ${SITEMAP} not found, skipping`);
		process.exit(0);
	}

	const xml = readFileSync(SITEMAP, 'utf8');
	const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

	if (urls.length === 0) {
		console.warn('[indexnow] no URLs extracted, skipping');
		process.exit(0);
	}

	const body = {
		host: HOST,
		key: KEY,
		keyLocation: `https://${HOST}/${KEY}.txt`,
		urlList: urls,
	};

	const res = await fetch('https://api.indexnow.org/indexnow', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json; charset=utf-8' },
		body: JSON.stringify(body),
	});

	console.log(`[indexnow] submitted ${urls.length} URLs → HTTP ${res.status}`);

	if (res.status >= 400) {
		const text = await res.text();
		console.warn(`[indexnow] non-success response: ${text}`);
	}
} catch (err) {
	// IndexNow must never fail the deploy. Log and exit 0.
	console.warn(`[indexnow] skipped due to error: ${err.message}`);
	process.exit(0);
}
