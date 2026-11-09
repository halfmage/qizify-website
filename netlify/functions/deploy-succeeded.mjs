import { MANIFEST_URL, submitUrls } from '../../scripts/indexnow-client.mjs';

// Netlify runs this function after a deploy finishes (the file name is the trigger).
// It sends the URLs the build queued in the manifest.
//
// "Finished" does not guarantee "live": a deploy can finish without being published.
// So only submit once the live manifest carries this deploy's id. Otherwise Bing could
// crawl the old version and never be told again. If the check or the submission fails,
// the next build queues these URLs once more.
const ATTEMPTS = 4;
const WAIT_MS = 2000;

async function readLiveManifest() {
	try {
		const res = await fetch(MANIFEST_URL, { cache: 'no-store', signal: AbortSignal.timeout(2500) });
		return res.ok ? await res.json() : null;
	} catch {
		return null;
	}
}

export default async (req) => {
	const { payload } = await req.json();

	if (payload.context && payload.context !== 'production') {
		return new Response('not production');
	}

	let live = null;
	for (let attempt = 1; attempt <= ATTEMPTS; attempt++) {
		live = await readLiveManifest();
		if (live?.deployId === payload.id) break;
		if (attempt < ATTEMPTS) await new Promise((done) => setTimeout(done, WAIT_MS));
	}

	if (live?.deployId !== payload.id) {
		console.warn(`[indexnow] deploy ${payload.id} is not live (manifest has ${live?.deployId ?? 'none'}), nothing submitted`);
		return new Response('not live');
	}

	const urls = Array.isArray(live.pending) ? live.pending : [];
	if (urls.length === 0) {
		console.log('[indexnow] nothing queued for this deploy');
		return new Response('nothing queued');
	}

	await submitUrls(urls, 4000);
	return new Response('done');
};
