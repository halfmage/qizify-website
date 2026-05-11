#!/usr/bin/env node
// Verifies that every blog post under src/content/blog/ is accounted for in
// the EN ↔ DE pair table (or explicitly marked solo). Catches the silent
// failure where a new translated post ships without hreflang wiring.

import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { EN_TO_DE, EN_ONLY, DE_ONLY } from '../src/utils/page-pairs.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BLOG_DIR = join(ROOT, 'src/content/blog');

const DE_TO_EN = Object.fromEntries(Object.entries(EN_TO_DE).map(([en, de]) => [de, en]));

async function readLang(file) {
	const text = await readFile(join(BLOG_DIR, file), 'utf8');
	const match = text.match(/^---\s*\n([\s\S]*?)\n---/);
	if (!match) return null;
	const langLine = match[1].split('\n').find((l) => /^lang:\s*/.test(l));
	if (!langLine) return null;
	return langLine.replace(/^lang:\s*/, '').replace(/['"]/g, '').trim();
}

const files = (await readdir(BLOG_DIR)).filter((f) => f.endsWith('.mdx'));
const errors = [];

for (const file of files) {
	const slug = file.replace(/\.mdx$/, '');
	const lang = await readLang(file);
	if (!lang) {
		errors.push(`${file}: missing or unparseable "lang" frontmatter`);
		continue;
	}
	const path = lang === 'en' ? `/blog/${slug}` : `/de/blog/${slug}`;
	const inPairs = lang === 'en' ? path in EN_TO_DE : path in DE_TO_EN;
	const inSolo = lang === 'en' ? EN_ONLY.has(path) : DE_ONLY.has(path);
	if (!inPairs && !inSolo) {
		errors.push(
			`${path} (${lang}): not in EN_TO_DE pair table and not in ${lang === 'en' ? 'EN_ONLY' : 'DE_ONLY'}. ` +
				`Add it to src/utils/page-pairs.mjs.`,
		);
	}
}

// Catch dangling entries: pair table references a slug that no longer exists.
const existingPaths = new Set(
	files.flatMap((f) => {
		const slug = f.replace(/\.mdx$/, '');
		return [`/blog/${slug}`, `/de/blog/${slug}`];
	}),
);
for (const [en, de] of Object.entries(EN_TO_DE)) {
	if (en.startsWith('/blog/') && !existingPaths.has(en)) {
		errors.push(`EN_TO_DE references ${en} but no matching .mdx exists.`);
	}
	if (de.startsWith('/de/blog/') && !existingPaths.has(de)) {
		errors.push(`EN_TO_DE references ${de} but no matching .mdx exists.`);
	}
}
for (const p of EN_ONLY) {
	if (p.startsWith('/blog/') && !existingPaths.has(p)) {
		errors.push(`EN_ONLY references ${p} but no matching .mdx exists.`);
	}
}
for (const p of DE_ONLY) {
	if (p.startsWith('/de/blog/') && !existingPaths.has(p)) {
		errors.push(`DE_ONLY references ${p} but no matching .mdx exists.`);
	}
}

if (errors.length > 0) {
	console.error('Pair-table check failed:');
	for (const e of errors) console.error('  - ' + e);
	process.exit(1);
}

console.log(`Pair-table check passed (${files.length} blog files).`);
