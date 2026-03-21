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
	}),
});

export const collections = { blog };
