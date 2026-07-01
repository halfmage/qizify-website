import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.date(),
		updatedDate: z.date().optional(),
		author: z.string().default('LearnSlice'),
		tags: z.array(z.string()).default([]),
		lang: z.enum(['en', 'de']),
		translationSlug: z.string().optional(),
		ogImage: z.string().optional(),
		// heroImage: the in-body hero image path (the .webp actually rendered at the
		// top of the post). Passed to BaseLayout to emit a high-priority preload for
		// the LCP element. Distinct from ogImage (the .jpg social-share card).
		heroImage: z.string().optional(),
		draft: z.boolean().default(false),
		// ctaVariant: which conversion path the shared BlogLayout renders.
		// 'demo' (default) = product-demo CTA + DemoRequestModal (Azubi platform posts).
		// 'consultation' = strategy-call CTA + ConsultationModal (solutions / custom-dev posts).
		ctaVariant: z.enum(['demo', 'consultation']).default('demo'),
		// keyTakeaways: 3–5 bullets, rendered as a card above the article body
		// and used by AI engines as a verbatim-citation target. Plain text only.
		keyTakeaways: z.array(z.string()).optional(),
		// faq: rendered above Related Posts AND emitted as FAQPage JSON-LD for
		// AI snippet extraction. IMPORTANT: q and a are plain text — markdown
		// will not render (no links, no bold). Keep answers self-contained.
		// YAML quoting tip: wrap answers in single quotes if they contain
		// embedded double quotes (German "Anführungszeichen"); embedded single
		// quotes must be doubled ('') per YAML spec, or use double-quoted YAML
		// with \" for embedded doubles.
		faq: z.array(z.object({
			q: z.string(),
			a: z.string(),
		})).optional(),
	}),
});

export const collections = { blog };
