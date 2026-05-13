#!/usr/bin/env node
// Generates public/llms-full.txt — the full content corpus of all blog posts
// concatenated as markdown, per the emerging llms-full.txt convention.
// AI crawlers respecting the spec consume this as a single ingestion-friendly
// feed alongside the structured llms.txt index.

import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BLOG_DIR = join(ROOT, 'src/content/blog');
const OUTPUT = join(ROOT, 'public/llms-full.txt');
const SITE = 'https://learnslice.com';

function parseFrontmatter(text) {
	const match = text.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
	if (!match) return { fm: {}, body: text };
	const fm = {};
	for (const line of match[1].split('\n')) {
		const m = line.match(/^(\w+):\s*(.*)$/);
		if (!m) continue;
		let value = m[2].trim();
		if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
		else if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
		fm[m[1]] = value;
	}
	return { fm, body: match[2] };
}

function cleanBody(body) {
	return body
		.replace(/^import\s+.*?from\s+['"][^'"]+['"];?\s*$/gm, '')
		.replace(/^\s*\n+/, '');
}

const files = (await readdir(BLOG_DIR)).filter((f) => f.endsWith('.mdx')).sort();

const posts = [];
for (const file of files) {
	const slug = file.replace(/\.mdx$/, '');
	const raw = await readFile(join(BLOG_DIR, file), 'utf8');
	const { fm, body } = parseFrontmatter(raw);
	if (!fm.lang || !fm.title) continue;
	const url = `${SITE}${fm.lang === 'de' ? '/de' : ''}/blog/${slug}`;
	posts.push({
		slug,
		lang: fm.lang,
		title: fm.title,
		description: fm.description || '',
		publishDate: fm.publishDate || '',
		updatedDate: fm.updatedDate || '',
		url,
		body: cleanBody(body),
	});
}

posts.sort((a, b) => {
	if (a.lang !== b.lang) return a.lang === 'en' ? -1 : 1;
	return b.publishDate.localeCompare(a.publishDate);
});

const header = `# LearnSlice — Full Content Corpus

> Full text of all LearnSlice blog posts, intended for ingestion by AI systems and LLMs.
> See https://learnslice.com/llms.txt for the structured site index.
> Posts are delimited by level-1 headings and include canonical URLs.

`;

const sections = posts.map((p) => {
	const meta = [
		`Source: ${p.url}`,
		`Language: ${p.lang}`,
		p.publishDate && `Published: ${p.publishDate}`,
		p.updatedDate && `Updated: ${p.updatedDate}`,
	].filter(Boolean).join('\n');
	return `# ${p.title}

${meta}

${p.description}

${p.body}

---
`;
}).join('\n');

await writeFile(OUTPUT, header + sections, 'utf8');

const sizeKB = ((header.length + sections.length) / 1024).toFixed(1);
console.log(`llms-full.txt written: ${posts.length} posts, ${sizeKB} KB → ${OUTPUT}`);
