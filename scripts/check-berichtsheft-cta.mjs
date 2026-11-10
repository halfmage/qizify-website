#!/usr/bin/env node
// Posts with ctaVariant "berichtsheft" link the nav CTA to the in-post
// BerichtsheftSignup anchor. If the block is missing, that link jumps nowhere, so
// fail the build. BerichtsheftTeaser links to the same anchor, so it needs the block
// on the page too. Other posts may embed the block (e.g. high-traffic posts that keep
// their demo CTAs), but at most once, because the anchor id must be unique.

import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { FREE_AUSBILDER_LIMIT, FREE_AZUBI_LIMIT } from '../src/data/berichtsheft.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BLOG_DIR = join(ROOT, 'src/content/blog');
const errors = [];

for (const file of (await readdir(BLOG_DIR)).filter((f) => f.endsWith('.mdx'))) {
	const text = await readFile(join(BLOG_DIR, file), 'utf8');
	const fm = text.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
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

// Free-plan limits typed as plain text (landing copy, posts, AI feeds) must match the
// constants in src/data/berichtsheft.mjs, which mirror learnslice-sme lib/plan.ts.
const LIMIT_FILES = [
	'src/content/berichtsheft.json',
	'src/content/blog/berichtsheft-digital.mdx',
	'src/content/blog/digital-training-logbook.mdx',
	'src/content/blog/ihk-berichtsheft-alternative.mdx',
	'public/llms.txt',
];
const LIMIT_PATTERNS = [
	[/bis (?:zu )?(\d+) Azubis/g, FREE_AZUBI_LIMIT],
	[/up to (\d+) apprentices/g, FREE_AZUBI_LIMIT],
	[/(\d+) Ausbilder(?:in)? und bis/g, FREE_AUSBILDER_LIMIT],
	[/(\d+) trainers? and up to/g, FREE_AUSBILDER_LIMIT],
];
for (const rel of LIMIT_FILES) {
	const text = await readFile(join(ROOT, rel), 'utf8');
	for (const [re, expected] of LIMIT_PATTERNS) {
		for (const m of text.matchAll(re)) {
			if (Number(m[1]) !== expected) errors.push(`${rel}: "${m[0]}" does not match the free-plan limit ${expected} (src/data/berichtsheft.mjs).`);
		}
	}
}

if (errors.length) {
	console.error(`Berichtsheft CTA check failed:\n- ${errors.join('\n- ')}`);
	process.exit(1);
}
console.log('Berichtsheft CTA check passed.');
