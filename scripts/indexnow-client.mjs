// Shared by the build step (scripts/ping-indexnow.mjs) and the post-deploy
// function (netlify/functions/deploy-succeeded.mjs).

export const KEY = 'd8faa862193f366e91803f4a56f4c0a4';
export const HOST = 'learnslice.com';
export const MANIFEST_NAME = 'indexnow-manifest.json';
export const MANIFEST_URL = `https://${HOST}/${MANIFEST_NAME}`;

// Tried in order, the first success wins. Engines in the IndexNow network pass
// submissions on to each other, so one accepted call reaches Bing as well.
// Bing's own endpoints (api.indexnow.org, bing.com) answer 403
// "UserForbiddedToAccessSite" for this host although the key file is valid, and Bing
// Webmaster Tools showed no submission ever arriving. Submissions through Seznam do
// show up there (checked 2026-11-11), so Seznam goes first and Bing stays as fallback.
const ENDPOINTS = ['https://search.seznam.cz/indexnow', 'https://api.indexnow.org/indexnow'];

// Never throws: IndexNow must not be able to fail a build or a deploy.
export async function submitUrls(urls, timeoutMs = 15000) {
	const body = JSON.stringify({
		host: HOST,
		key: KEY,
		keyLocation: `https://${HOST}/${KEY}.txt`,
		urlList: urls,
	});

	for (const endpoint of ENDPOINTS) {
		const name = new URL(endpoint).host;
		try {
			const res = await fetch(endpoint, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json; charset=utf-8' },
				body,
				signal: AbortSignal.timeout(timeoutMs),
			});

			console.log(`[indexnow] submitted ${urls.length} URLs to ${name} → HTTP ${res.status}`);

			if (res.ok) return true;
			console.warn(`[indexnow] non-success response from ${name}: ${await res.text()}`);
		} catch (err) {
			console.warn(`[indexnow] submission to ${name} failed: ${err.message}`);
		}
	}
	return false;
}
