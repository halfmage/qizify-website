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

// Hand-rolled YAML subset parser. Handles single-line scalars and two
// multi-line array shapes used by our blog schema:
//   key:
//     - "bullet string"
// and:
//   key:
//     - q: "question"
//       a: "answer"
// If the schema ever needs anchors, refs, or nested objects, switch to js-yaml.

function unquote(s) {
	s = s.trim();
	if (s.startsWith('"') && s.endsWith('"')) return s.slice(1, -1);
	if (s.startsWith("'") && s.endsWith("'")) return s.slice(1, -1);
	return s;
}

function parseBulletArray(lines) {
	const items = [];
	let i = 0;
	while (i < lines.length) {
		const bullet = lines[i].match(/^(\s+)-\s*(.*)$/);
		if (!bullet) { i++; continue; }
		const indent = bullet[1].length;
		const inline = bullet[2].trim();
		i++;
		const objKey = inline.match(/^(\w+):\s*(.*)$/);
		if (objKey) {
			const obj = { [objKey[1]]: unquote(objKey[2]) };
			while (i < lines.length) {
				const next = lines[i];
				const nextIndentMatch = next.match(/^(\s*)/);
				const nextIndent = nextIndentMatch ? nextIndentMatch[1].length : 0;
				if (nextIndent <= indent) break;
				const km = next.trim().match(/^(\w+):\s*(.*)$/);
				if (km) obj[km[1]] = unquote(km[2]);
				i++;
			}
			items.push(obj);
		} else if (inline) {
			items.push(unquote(inline));
		}
	}
	return items;
}

function parseFrontmatter(text) {
	const match = text.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
	if (!match) return { fm: {}, body: text };
	const fm = {};
	const lines = match[1].split('\n');
	let i = 0;
	while (i < lines.length) {
		const km = lines[i].match(/^(\w+):\s*(.*)$/);
		if (!km) { i++; continue; }
		const key = km[1];
		const inlineValue = km[2].trim();
		i++;
		if (inlineValue) {
			fm[key] = unquote(inlineValue);
			continue;
		}
		// No inline value — collect subsequent indented lines as a block
		const block = [];
		while (i < lines.length && /^\s+/.test(lines[i])) {
			block.push(lines[i]);
			i++;
		}
		if (block.some(l => /^\s+-/.test(l))) {
			fm[key] = parseBulletArray(block);
		}
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
		keyTakeaways: Array.isArray(fm.keyTakeaways) ? fm.keyTakeaways : [],
		faq: Array.isArray(fm.faq) ? fm.faq : [],
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

	const takeawaysHeading = p.lang === 'en' ? 'Key Takeaways' : 'Auf einen Blick';
	const faqHeading = p.lang === 'en' ? 'Frequently Asked Questions' : 'Häufig gestellte Fragen';

	const takeawaysBlock = p.keyTakeaways.length > 0
		? `## ${takeawaysHeading}\n\n${p.keyTakeaways.map(t => `- ${t}`).join('\n')}\n\n`
		: '';

	const faqBlock = p.faq.length > 0
		? `## ${faqHeading}\n\n${p.faq.map(({ q, a }) => `### ${q}\n\n${a}`).join('\n\n')}\n\n`
		: '';

	return `# ${p.title}

${meta}

${p.description}

${takeawaysBlock}${p.body}

${faqBlock}---
`;
}).join('\n');

await writeFile(OUTPUT, header + sections, 'utf8');

const sizeKB = ((header.length + sections.length) / 1024).toFixed(1);
const enriched = posts.filter(p => p.keyTakeaways.length > 0 || p.faq.length > 0).length;
console.log(`llms-full.txt written: ${posts.length} posts (${enriched} with takeaways/FAQ), ${sizeKB} KB → ${OUTPUT}`);
