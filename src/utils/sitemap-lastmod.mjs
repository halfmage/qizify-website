// Builds a URL → lastmod map for the sitemap.
//
// Bing flags sitemaps without <lastmod> as stale ("sitemaps should be updated
// at least once a day"). Blog posts carry an accurate date from their
// frontmatter (updatedDate, falling back to publishDate); every other page
// gets the build date, so each deploy refreshes their freshness signal.
//
// Paths are keyed without trailing slash to match trailingSlash: 'never'.

import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const BLOG_DIR = fileURLToPath(new URL('../content/blog', import.meta.url));

/**
 * @param {string} site - Site origin, no trailing slash
 * @returns {{ map: Map<string, string>, buildDate: string }}
 */
export function buildLastmodMap(site) {
	const map = new Map();
	for (const file of readdirSync(BLOG_DIR)) {
		if (!file.endsWith('.mdx')) continue;
		const text = readFileSync(`${BLOG_DIR}/${file}`, 'utf8');
		const fm = text.match(/^---\s*\n([\s\S]*?)\n---/);
		if (!fm) continue;
		const lang = (fm[1].match(/^lang:\s*['"]?(\w+)/m) || [])[1];
		const date = (fm[1].match(/^updatedDate:\s*([0-9-]+)/m) || [])[1]
			?? (fm[1].match(/^publishDate:\s*([0-9-]+)/m) || [])[1];
		if (!lang || !date) continue;
		const slug = file.replace(/\.mdx$/, '');
		const path = lang === 'en' ? `/blog/${slug}` : `/de/blog/${slug}`;
		map.set(site + path, new Date(date).toISOString());
	}
	return { map, buildDate: new Date().toISOString() };
}
