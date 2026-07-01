# SEO Content Audit (re-audit): "E-Learning entwickeln lassen" (DE) / "Custom E-Learning Development" (EN)

URLs: `/de/blog/e-learning-entwickeln-lassen` (primary), `/blog/custom-e-learning-development-costs` (mirror)
Re-audit date: 2026-07-01 (post-improvements). Method: on-page extraction from the current build + manual review.

## SEO Health Score: 93 / 100  (was 88)

The prior audit's high-priority items are fixed. What remains is largely off-page/E-E-A-T and minor performance polish.

---

## Resolved since the last audit
- Meta descriptions trimmed: DE 150, EN 157 chars (were 167 / 175). No more truncation. **Pass.**
- EN title shortened to 60 chars (was 64). **Pass.**
- CTA-intent mismatch fixed: consultation `ctaVariant` renders the strategy-call + **quote** path (header, sidebar, footer, in-body, modal) instead of the product demo. Biggest conversion fix.
- First-party proof added: link to `/research` (`/de/forschung`) from the selection criteria. Experience signal up.
- Chatbot / AI-chat intent added (keyTakeaway, software list, criterion, a new FAQ, tag). FAQ schema now **8 Q&A** (was 7).
- Total-cost-of-ownership argument + audience targeting (Bildungstraeger, Hochschulen, Kursanbieter).
- Source citations (BDVT/VBT, Chapman Alliance/Brandon Hall) added; German wording pass.

---

## On-Page (current state)
- **Title:** DE 61 / EN 60 chars, primary keyword front-loaded, cost intent + year. **Pass.**
- **Meta:** DE 150 / EN 157, keyword-led. **Pass.**
- **Headings:** 1 H1 (keyword), 9 content H2s, all answer-first (AEO). **Pass.** (Layout also injects the keyTakeaways/FAQ/related/CTA H2s; harmless.)
- **Images:** 0 without alt; optimized WebP hero (69KB), descriptive filename + alt. **Pass** except the LCP note below.
- **Internal linking:** ~22 unique internal links, descriptive/deep anchors, hub-and-spoke to `/solutions`. **Pass.**
- **External citations:** 6-7 authority links (BDVT, Chapman study). Good for E-E-A-T. **Pass.**
- **URL / canonical / hreflang:** clean slugs, self-referencing canonical, en/de/x-default(de) pair. **Pass.**
- **Schema:** BlogPosting + FAQPage(8) + BreadcrumbList + Organization + WebSite + SoftwareApplication + ImageObject. **Pass.**

## E-E-A-T (current)
| Dimension | Score | Change |
|---|---|---|
| Experience | Present (up) | Now links to the FH Dortmund research; still no in-article case study/screenshot. |
| Expertise | Strong | Sourced figures, correct terminology, depth. |
| Authoritativeness | Present | Org schema + citations; still no named author, new domain. |
| Trustworthiness | Strong | HTTPS, imprint/privacy/terms, sourced claims, DSGVO emphasis. |

---

## Remaining improvements (prioritized)

### Medium
1. **Hero LCP preload.** The hero is the Largest Contentful Paint element but has no `fetchpriority="high"` / preload (markdown `<img>`, and BlogLayout does not pass `heroImage` to BaseLayout, which already supports a preload `<link>`). Passing the hero to BaseLayout's `heroImage` prop would preload it and improve LCP. Small change, real Core Web Vitals win.
2. **Author-level E-E-A-T.** Byline is "LearnSlice Team" (Organization schema). For competitive commercial terms, a named author with Person schema + bio helps. Deferred: conflicts with the "LearnSlice Team" house rule and needs a real person.
3. **Cluster spokes.** Add supporting articles to own the topic cluster and feed `/solutions`: "Serious Game entwickeln lassen", "Lernplattform / LMS entwickeln lassen Kosten", "KI-Chatbot / KI-Tutor entwickeln lassen". Each links up to the pillar and this article.

### Low
4. **Responsive images (`srcset`).** Markdown `<img>` emits no `srcset`. Site-wide limitation; single above-fold hero here, so low ROI. Would need Astro's Image component or a rehype step.
5. **H1 vs title.** H1 is identical to the title tag. Optional to differentiate; not a real ranking issue for blog posts.
6. **Featured snippet.** The "Was kostet..." section now opens with a self-contained "Kurz gesagt" answer block (good). Monitor whether Google lifts the table vs paragraph; no action needed now.

### Not needed
- Meta length, EN title, CTA mismatch, first-party proof, chatbot coverage: all resolved.

---

## Verdict
On-page SEO is essentially maxed for a single article. The only in-repo lever left with measurable impact is the **hero LCP preload** (Medium, quick). The rest is off-page (author identity, backlinks) and content-strategy (cluster spokes), which pay off over time rather than through this one page.
