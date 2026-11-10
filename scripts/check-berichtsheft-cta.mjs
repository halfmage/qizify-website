#!/usr/bin/env node
// Posts with ctaVariant "berichtsheft" link the nav CTA to the in-post
// BerichtsheftSignup anchor. If the block is missing, that link jumps nowhere, so
// fail the build. BerichtsheftTeaser links to the same anchor, so it needs the block
// on the page too. Other posts may embed the block (e.g. high-traffic posts that keep
// their demo CTAs), but at most once, because the anchor id must be unique.

import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const BLOG_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'src/content/blog');
const errors = [];

for (const file of (await readdir(BLOG_DIR)).filter((f) => f.endsWith('.mdx'))) {
	const text = await readFile(join(BLOG_DIR, file), 'utf8');
	const fm = text.match(/^---\s*\n([\s\S]*?)\n---/)?.[1] ?? '';
	if (/^ctaVariant:\s*["']?waitlist["']?\s*$/m.test(fm)) {
		errors.push(`${file}: ctaVariant "waitlist" was renamed to "berichtsheft" at the free-tier launch.`);
	}
	if (/<BerichtsheftWaitlist\b/.test(text)) {
		errors.push(`${file}: <BerichtsheftWaitlist /> was replaced by <BerichtsheftSignup />.`);
	}
	const isBerichtsheft = /^ctaVariant:\s*["']?berichtsheft["']?\s*$/m.test(fm);
	const uses = (text.match(/<BerichtsheftSignup\b/g) || []).length;
	if (isBerichtsheft && uses !== 1) {
		errors.push(`${file}: ctaVariant "berichtsheft" needs exactly one <BerichtsheftSignup /> in the body (found ${uses}).`);
	}
	if (uses > 1) {
		errors.push(`${file}: <BerichtsheftSignup /> appears ${uses} times; its anchor id must be unique.`);
	}
	if (uses === 0 && /<BerichtsheftTeaser\b/.test(text)) {
		errors.push(`${file}: uses <BerichtsheftTeaser /> without <BerichtsheftSignup />, so its link would jump nowhere.`);
	}
}

if (errors.length) {
	console.error(`Berichtsheft CTA check failed:\n- ${errors.join('\n- ')}`);
	process.exit(1);
}
console.log('Berichtsheft CTA check passed.');
