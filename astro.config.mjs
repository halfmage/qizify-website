// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { SITE, buildUrlPairs, EN_ONLY, DE_ONLY } from './src/utils/page-pairs.mjs';

const URL_TO_PAIR = buildUrlPairs(SITE);
const SOLO_URLS = new Set([
	...[...EN_ONLY].map((p) => SITE + p),
	...[...DE_ONLY].map((p) => SITE + p),
]);

// https://astro.build/config
export default defineConfig({
	site: SITE,
	output: 'static',
	trailingSlash: 'never',
	integrations: [
		tailwind(),
		icon(),
		mdx(),
		sitemap({
			i18n: {
				defaultLocale: 'en',
				locales: {
					en: 'en',
					de: 'de',
				},
			},
			serialize(item) {
				const normalized = item.url.replace(/\/$/, '');
				if (SOLO_URLS.has(normalized)) {
					// Solo-language page: drop any auto-generated alternates.
					item.links = undefined;
					return item;
				}
				const pair = URL_TO_PAIR.get(normalized) ?? URL_TO_PAIR.get(item.url);
				if (pair) {
					item.links = [
						{ lang: 'en', url: pair.enUrl },
						{ lang: 'de', url: pair.deUrl },
						{ lang: 'x-default', url: pair.enUrl },
					];
				}
				return item;
			},
		}),
	],
});
