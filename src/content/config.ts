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
		draft: z.boolean().default(false),
		// keyTakeaways: 3–5 bullets, rendered as a card above the article body
		// and used by AI engines as a verbatim-citation target. Plain text only.
		keyTakeaways: z.array(z.string()).optional(),
		// faq: rendered above Related Posts AND emitted as FAQPage JSON-LD for
		// AI snippet extraction. IMPORTANT: q and a are plain text — markdown
		// will not render (no links, no bold). Keep answers self-contained.
		faq: z.array(z.object({
			q: z.string(),
			a: z.string(),
		})).optional(),
	}),
});

export const collections = { blog };
