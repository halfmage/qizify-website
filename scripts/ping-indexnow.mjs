import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const KEY = 'd8faa862193f366e91803f4a56f4c0a4';
const HOST = 'learnslice.com';
const SITEMAP = resolve('dist/sitemap-0.xml');

// Only ping IndexNow from production builds. Preview deploys and local
// `npm run build` runs would otherwise submit prod URLs from non-prod contexts.
const vercelEnv = process.env.VERCEL_ENV;
if (vercelEnv && vercelEnv !== 'production') {
	console.log(`[indexnow] VERCEL_ENV=${vercelEnv}, skipping (production-only)`);
	process.exit(0);
}
if (!vercelEnv && !process.env.INDEXNOW_FORCE) {
	console.log('[indexnow] not a Vercel build, skipping (set INDEXNOW_FORCE=1 to override)');
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
