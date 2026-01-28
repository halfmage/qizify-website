import type { APIRoute } from 'astro';

const site = 'https://learnslice.com';

const pages = [
	{ url: '/', hreflang: { en: '/', de: '/de/' } },
	{ url: '/de/', hreflang: { en: '/', de: '/de/' } },
	{ url: '/imprint/', hreflang: { en: '/imprint/', de: '/de/imprint/' } },
	{ url: '/de/imprint/', hreflang: { en: '/imprint/', de: '/de/imprint/' } },
	{ url: '/privacy/', hreflang: { en: '/privacy/', de: '/de/privacy/' } },
	{ url: '/de/privacy/', hreflang: { en: '/privacy/', de: '/de/privacy/' } },
	{ url: '/terms/', hreflang: { en: '/terms/', de: '/de/terms/' } },
	{ url: '/de/terms/', hreflang: { en: '/terms/', de: '/de/terms/' } },
];

export const GET: APIRoute = () => {
	const urls = pages
		.map(
			(page) => `  <url>
    <loc>${site}${page.url}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${site}${page.hreflang.en}"/>
    <xhtml:link rel="alternate" hreflang="de" href="${site}${page.hreflang.de}"/>
  </url>`
		)
		.join('\n');

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
		},
	});
};
