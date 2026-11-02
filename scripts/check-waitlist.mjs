#!/usr/bin/env node
// Posts with ctaVariant "waitlist" link every CTA (nav, sidebar, footer) to the
// in-post BerichtsheftWaitlist anchor. If the component is missing, those links
// jump nowhere, so fail the build. Also flag the component used without the
// variant, which would leave the page's CTAs pointing at the demo instead.

import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const BLOG_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'src/content/blog');
const errors = [];

for (const file of (await readdir(BLOG_DIR)).filter((f) => f.endsWith('.mdx'))) {
	const text = await readFile(join(BLOG_DIR, file), 'utf8');
	const fm = text.match(/^---\s*\n([\s\S]*?)\n---/)?.[1] ?? '';
	const isWaitlist = /^ctaVariant:\s*["']?waitlist["']?\s*$/m.test(fm);
	const uses = (text.match(/<BerichtsheftWaitlist\b/g) || []).length;
	if (isWaitlist && uses !== 1) {
		errors.push(`${file}: ctaVariant "waitlist" needs exactly one <BerichtsheftWaitlist /> in the body (found ${uses}).`);
	}
	if (!isWaitlist && /<BerichtsheftTeaser\b/.test(text)) {
		errors.push(`${file}: uses <BerichtsheftTeaser /> but ctaVariant is not "waitlist", so its link would jump nowhere.`);
	}
	if (!isWaitlist && uses > 0) {
		errors.push(`${file}: embeds <BerichtsheftWaitlist /> but ctaVariant is not "waitlist".`);
	}
}

if (errors.length) {
	console.error(`Waitlist check failed:\n- ${errors.join('\n- ')}`);
	process.exit(1);
}
console.log('Waitlist check passed.');
