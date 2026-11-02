import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.date(),
		updatedDate: z.date().optional(),
		author: z.string().default('LearnSlice'),
		// authorRole: shown under the byline and used as jobTitle in the Person
		// schema. Defaults to the content-team role, so existing posts are
		// unchanged. Set it whenever the author is not on the content team.
		authorRole: z.string().optional(),
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
		// 'waitlist' = nav, sidebar and footer CTAs link to the in-post BerichtsheftWaitlist
		// (anchor from src/data/berichtsheft.mjs), no modal. The post must embed the waitlist;
		// scripts/check-waitlist.mjs fails the build otherwise.
		// 'guide' = links to the AI guides (now on ironum.com), no modal. For informational
		// posts whose reader wants to learn rather than buy.
		ctaVariant: z.enum(['demo', 'consultation', 'guide', 'waitlist']).default('demo'),
		// ctaFooter: optional per-post copy for the closing CTA block. Only used with
		// the 'demo' variant, for campaign posts whose reader needs a different promise
		// than the site-wide blog CTA. Button still opens the demo modal.
		ctaFooter: z.object({
			label: z.string().optional(),
			headline: z.string(),
			subheadline: z.string(),
			button: z.string(),
		}).optional(),
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
		// sources: primary sources the post relies on. Rendered as a visible
		// "Quellen"/"Sources" list under the article AND emitted as `citation` in the
		// BlogPosting JSON-LD, so AI engines and Google see the same sources a reader
		// does. `retrieved` is the date the source was checked (YYYY-MM-DD).
		sources: z.array(z.object({
			name: z.string(),
			url: z.string().url(),
			retrieved: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'retrieved must be YYYY-MM-DD').optional(),
		})).optional(),
		// about: the main entities the post is about (plain names), emitted as
		// schema.org `about` so engines can match the page to the topic.
		about: z.array(z.string()).optional(),
		faq: z.array(z.object({
			q: z.string(),
			a: z.string(),
		})).optional(),
	}),
});

export const collections = { blog };
