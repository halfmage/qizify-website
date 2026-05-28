#!/usr/bin/env node
// Guards against reintroducing the legally risky comparison content that led to
// the simpleclub UWG complaint (see COMPARISON-CLAIMS.md).
//
//   HARD FAIL  — any named competitor (denylist) appears in shipped content.
//   WARN       — binary-negative / disparaging phrasing on comparison pages.
//
// Runs in prebuild after the llms feed is generated, so it also validates the
// generated AI feed. Extend COMPETITORS as new rivals come up.

import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join, relative } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

// Shipped, user-facing text. Note: public/_redirects is intentionally NOT scanned
// (it keeps the old competitor slugs alive as 301s).
const SCAN_DIRS = ['src/pages', 'src/content', 'src/components', 'src/layouts', 'src/utils'];
const SCAN_FILES = ['public/llms.txt', 'public/llms-full.txt'];
const TEXT_EXT = /\.(astro|md|mdx|json|ts|js|mjs|html)$/;

// Named competitors must never appear in shipped content. Hard rule.
const COMPETITORS = ['simpleclub', 'prozubi', 'vocanto', 'cornelsen', 'ecademy', 'studyflix'];
const COMPETITOR_RE = new RegExp(`\\b(${COMPETITORS.join('|')})\\b`, 'i');

// Phrasing that sank the simpleclub page — flag on comparison pages.
// Word-boundary regexes so positives like "unlimited" / "unbegrenzt" don't trip.
const RISKY = [/\bnot available\b/i, /\bnicht verfügbar\b/i, /\bnicht verfuegbar\b/i, /\bbasic\b/i, /\bbasis-/i, /\blimited\b/i, /\bbegrenzt\b/i];

async function walk(dir) {
	const out = [];
	let entries;
	try {
		entries = await readdir(dir, { withFileTypes: true });
	} catch {
		return out;
	}
	for (const e of entries) {
		const p = join(dir, e.name);
		if (e.isDirectory()) out.push(...(await walk(p)));
		else if (TEXT_EXT.test(e.name)) out.push(p);
	}
	return out;
}

const files = [];
for (const d of SCAN_DIRS) files.push(...(await walk(join(ROOT, d))));
for (const f of SCAN_FILES) files.push(join(ROOT, f));

const errors = [];
const warnings = [];

for (const file of files) {
	let text;
	try {
		text = await readFile(file, 'utf8');
	} catch {
		continue; // generated feeds may not exist on a clean checkout
	}
	const rel = relative(ROOT, file);
	const isComparison = /learnslice-vs-/.test(rel);
	text.split('\n').forEach((line, i) => {
		const m = line.match(COMPETITOR_RE);
		if (m) errors.push(`${rel}:${i + 1}: names competitor "${m[1]}" — remove (see COMPARISON-CLAIMS.md).`);
		if (isComparison) {
			for (const re of RISKY) {
				const rm = line.match(re);
				if (rm) warnings.push(`${rel}:${i + 1}: risky comparison phrase "${rm[0].trim()}".`);
			}
		}
	});
}

if (warnings.length) {
	console.warn('Comparison-claims warnings (review, not blocking):');
	for (const w of warnings) console.warn('  ! ' + w);
}

if (errors.length) {
	console.error('Comparison-claims check FAILED:');
	for (const e of errors) console.error('  - ' + e);
	process.exit(1);
}

console.log(`Comparison-claims check passed (${files.length} files scanned, ${warnings.length} warning(s)).`);
