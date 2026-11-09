// Shared by the build step (scripts/ping-indexnow.mjs) and the post-deploy
// function (netlify/functions/deploy-succeeded.mjs).

export const KEY = 'd8faa862193f366e91803f4a56f4c0a4';
export const HOST = 'learnslice.com';
export const MANIFEST_NAME = 'indexnow-manifest.json';
export const MANIFEST_URL = `https://${HOST}/${MANIFEST_NAME}`;

const ENDPOINT = 'https://api.indexnow.org/indexnow';

// Never throws: IndexNow must not be able to fail a build or a deploy.
export async function submitUrls(urls, timeoutMs = 15000) {
	try {
		const res = await fetch(ENDPOINT, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json; charset=utf-8' },
			body: JSON.stringify({
				host: HOST,
				key: KEY,
				keyLocation: `https://${HOST}/${KEY}.txt`,
				urlList: urls,
			}),
			signal: AbortSignal.timeout(timeoutMs),
		});

		console.log(`[indexnow] submitted ${urls.length} URLs → HTTP ${res.status}`);

		if (!res.ok) console.warn(`[indexnow] non-success response: ${await res.text()}`);
		return res.ok;
	} catch (err) {
		console.warn(`[indexnow] submission failed: ${err.message}`);
		return false;
	}
}
