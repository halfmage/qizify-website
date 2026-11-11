import { MANIFEST_URL, submitUrls } from '../../scripts/indexnow-client.mjs';

// Netlify runs this function after a deploy finishes (the file name is the trigger).
// It sends the URLs the build queued in the manifest to IndexNow. Which endpoint that
// is (currently Seznam, which passes submissions on to Bing) is decided in
// scripts/indexnow-client.mjs.
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

	const ok = await submitUrls(urls, 4000);
	if (!ok) console.warn(`[indexnow] no endpoint accepted the ${urls.length} URLs, the next deploy sends its own changes plus this deploy's again`);
	return new Response(ok ? 'done' : 'failed');
};
