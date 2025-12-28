// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	site: 'https://learnslice.com',
	output: 'static',
	integrations: [
		tailwind(),
		sitemap({
			i18n: {
				defaultLocale: 'en',
				locales: {
					en: 'en',
					de: 'de',
				},
			},
		}),
		icon(),
	],
});
