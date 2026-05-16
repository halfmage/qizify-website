#!/usr/bin/env node
// Generates public/llms-full.txt — the homepage marketing copy plus the full
// content of every blog post, concatenated as markdown per the emerging
// llms-full.txt convention. AI crawlers respecting the spec consume this as a
// single ingestion-friendly feed alongside the structured llms.txt index.

import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BLOG_DIR = join(ROOT, 'src/content/blog');
const CONTENT_DIR = join(ROOT, 'src/content');
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

// ---- Homepage corpus ---------------------------------------------------------
// Homepage marketing copy lives in src/content/{en,de}.json. Pulling it into
// llms-full.txt means AI crawlers see the same value-prop, proof points, and
// FAQ answers visitors see — not just the blog. Sections covered: hero, problem,
// savings comparison, how-it-works, features, vocational professions, audience
// tabs, testimonials, trust pillars, FAQ, final CTA. Nav/footer are skipped.

const HOMEPAGE_LABELS = {
	en: { type: 'Marketing homepage', proof: 'Proof points' },
	de: { type: 'Marketing-Homepage', proof: 'Beweispunkte' },
};

const flatten = (s) => (s || '').replace(/\n/g, ' ');

function buildHomepageSection(c, lang) {
	const url = `${SITE}${lang === 'de' ? '/de' : ''}`;
	const labels = HOMEPAGE_LABELS[lang];
	const parts = [];

	parts.push(`# ${flatten(c.hero.headline)}`);
	parts.push('');
	parts.push(`Source: ${url}\nLanguage: ${lang}\nType: ${labels.type}`);
	parts.push('');
	parts.push(`${c.hero.badge}\n\n${c.hero.subheadline}`);
	if (Array.isArray(c.hero.stats) && c.hero.stats.length) {
		const proof = c.hero.stats.map((s) => `${s.value} — ${s.label}`).join(' · ');
		parts.push('');
		parts.push(`**${labels.proof}:** ${proof}`);
	}

	if (c.problem) {
		parts.push('');
		parts.push(`## ${c.problem.headline}\n\n${c.problem.body}`);
	}

	if (c.savingsComparison) {
		const sc = c.savingsComparison;
		parts.push('');
		parts.push(`## ${flatten(sc.headline)}`);
		parts.push('');
		parts.push(`### ${flatten(sc.without.title)}\n\n${sc.without.points.map((p) => `- ${p}`).join('\n')}`);
		parts.push('');
		parts.push(`### ${flatten(sc.with.title)}\n\n${sc.with.points.map((p) => `- ${p}`).join('\n')}`);
	}

	if (c.howItWorks) {
		parts.push('');
		parts.push(`## ${c.howItWorks.headline}`);
		for (const step of c.howItWorks.steps) {
			parts.push('');
			parts.push(`### ${step.number}. ${step.title}\n\n${step.description}`);
		}
	}

	if (c.learningResults) {
		parts.push('');
		parts.push(`## ${c.learningResults.headline}`);
		for (const f of c.learningResults.features) {
			parts.push('');
			parts.push(`### ${f.title}\n\n${f.description}`);
		}
		if (c.learningResults.compliance) {
			parts.push('');
			parts.push(c.learningResults.compliance);
		}
	}

	if (c.vocationalProfessions) {
		parts.push('');
		parts.push(`## ${c.vocationalProfessions.headline}`);
		for (const item of c.vocationalProfessions.items) {
			parts.push('');
			const profs = (item.professions || []).map((p) => `- ${p}`).join('\n');
			parts.push(`### ${item.title}\n\n${profs}`);
		}
	}

	if (c.madeForCompany) {
		parts.push('');
		parts.push(`## ${c.madeForCompany.headline}`);
		for (const tab of c.madeForCompany.tabs) {
			parts.push('');
			const heading = tab.audience ? `${tab.tabLabel} (${tab.audience})` : tab.tabLabel;
			const pts = (tab.points || []).map((p) => `- ${p.text || p}`).join('\n');
			let body = `### ${heading}\n\n${pts}`;
			if (tab.note) body += `\n\n${tab.note}`;
			parts.push(body);
		}
	}

	if (c.testimonials) {
		parts.push('');
		parts.push(`## ${c.testimonials.headline}`);
		for (const t of c.testimonials.items) {
			parts.push('');
			parts.push(`> ${t.quote}\n>\n> — ${t.name}, ${t.title}, ${t.company}`);
		}
	}

	if (c.whyChooseUs) {
		parts.push('');
		parts.push(`## ${c.whyChooseUs.headline}`);
		for (const item of c.whyChooseUs.items) {
			parts.push('');
			parts.push(`### ${flatten(item.title)}\n\n${item.description}`);
		}
	}

	if (c.faq) {
		parts.push('');
		parts.push(`## ${c.faq.headline}`);
		for (const item of c.faq.items) {
			parts.push('');
			parts.push(`### ${item.question}\n\n${item.answer}`);
		}
	}

	if (c.cta) {
		parts.push('');
		parts.push(`## ${c.cta.headline}\n\n${c.cta.subheadline}`);
	}

	parts.push('');
	parts.push('---');
	return parts.join('\n') + '\n';
}

const enContent = JSON.parse(await readFile(join(CONTENT_DIR, 'en.json'), 'utf8'));
const deContent = JSON.parse(await readFile(join(CONTENT_DIR, 'de.json'), 'utf8'));
const homepageSections = buildHomepageSection(enContent, 'en') + '\n' + buildHomepageSection(deContent, 'de');

// ---- Blog corpus -------------------------------------------------------------

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

> Full marketing homepage copy plus every LearnSlice blog post, intended for
> ingestion by AI systems and LLMs.
> See https://learnslice.com/llms.txt for the structured site index.
> Documents are delimited by level-1 headings and include canonical URLs.

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

const corpus = header + homepageSections + '\n' + sections;
await writeFile(OUTPUT, corpus, 'utf8');

const sizeKB = (corpus.length / 1024).toFixed(1);
const enriched = posts.filter(p => p.keyTakeaways.length > 0 || p.faq.length > 0).length;
console.log(`llms-full.txt written: 2 homepages + ${posts.length} posts (${enriched} with takeaways/FAQ), ${sizeKB} KB → ${OUTPUT}`);
