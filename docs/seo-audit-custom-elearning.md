# SEO Content Audit: "E-Learning entwickeln lassen" (DE) / "Custom E-Learning Development" (EN)

URLs: `/de/blog/e-learning-entwickeln-lassen` (primary), `/blog/custom-e-learning-development-costs` (mirror)
Date: 2026-07-01. Method: on-page extraction from local build + manual review (skill's analyze script not bundled).

## SEO Health Score: 88 / 100

Strong on-page fundamentals, keyword alignment, schema, and internal linking. Points off for slightly long meta descriptions, a CTA-intent mismatch injected by the shared layout, and thin author-level E-E-A-T.

---

## On-Page SEO Checklist

### Title Tag
- DE: "E-Learning entwickeln lassen: Kosten, Ablauf und Auswahl 2026" (61 chars) - **Pass (minor)**. Primary keyword front-loaded, cost intent + year present. 1 char over the 60 ideal; safe.
- EN: "Custom E-Learning Development: Costs, Process, and How to Choose" (64 chars) - **Needs Work**. Keyword front-loaded, but 64 chars risks truncation. Trim, e.g. "Custom E-Learning Development: Cost, Process & How to Choose" (58).
- No brand suffix (matches the blog's existing convention). Unique. Compelling.

### Meta Description
- DE: 167 chars - **Needs Work** (trim to ~150-155 to avoid truncation). Keyword at start; add a light CTA verb ("Jetzt vergleichen"/"So geht's").
- EN: 175 chars - **Needs Work** (will truncate; trim to ~155).
- Both keyword-rich and benefit-led; just too long.

### Heading Hierarchy
- Exactly one H1, contains the primary keyword. **Pass.**
- Logical H1 to H2/H3. Content H2s are keyword-rich and answer-first (AEO best practice): "Was kostet es, E-Learning entwickeln zu lassen?", "Selbst entwickeln, Standard-LMS kaufen oder entwickeln lassen?", "DSGVO, Souveraenitaet und Eigentum am Code".
- **Flag:** the shared BlogLayout injects extra H2s "Durchbrechen Sie den Kreislauf" and "Kostenlose Demo buchen" (Stop the Cycle / Book Your Free Demo). These are off-topic to the article and belong to the product-demo CTA (see Conversion mismatch below).
- H1 is identical to the title tag. Acceptable for blogs; optionally differentiate.

### Image Optimization - **Pass**
- 0 images without alt. Hero is an optimized WebP (1600px, 69KB), descriptive filename (`custom-elearning-consultation`), descriptive localized alt text.
- Minor: markdown `<img>` tags do not emit `srcset` (no responsive sizes) and are not run through Astro's Image component. Confirm the hero loads eagerly (LCP) and body images lazily.

### Internal Linking - **Pass (strong)**
- Healthy contextual in-body links with descriptive, deep anchors: DE links to `/de/loesungen` (2x incl. the `#project-inquiry` deep link), `/de/companies`, `/de/blog/ki-tools-ausbildung`, `/de/blog/dsgvo-konforme-ki-tools-fuer-ausbilder`. EN mirrors to EN targets.
- Hub-and-spoke to `/solutions` is correct. Count is appropriate for ~2,000 words.

### External Linking - **Pass**
- Authoritative outbound citations (BDVT/VBT honorar recommendation, Chapman Alliance/Brandon Hall study) support E-E-A-T. Confirm `rel="noopener"` and consider `target="_blank"` on citations.

### URL Structure - **Pass**
- Readable, keyword-rich, hyphenated, lowercase, no params, `trailingSlash: never` (consistent). Slugs avoid cannibalizing `/solutions`.

---

## Content Quality (E-E-A-T)
| Dimension | Score | Evidence |
|---|---|---|
| Experience | Present | Practitioner framing (process phases, "in advisory work with mid-sized companies") but no first-party case study, screenshots, or numbers from an actual LearnSlice build. |
| Expertise | Present/Strong | Real depth; correct terminology (AVV, EU AI Act, LMS); accurate, now-sourced cost figures. |
| Authoritativeness | Present | Organization + BlogPosting schema, cited third-party sources, links to `/solutions`. No author bio page; new domain (few backlinks yet). |
| Trustworthiness | Strong | HTTPS, imprint/privacy/terms, sourced claims, DSGVO emphasis, contact path. |

**Biggest E-E-A-T lever:** author-level signal. Byline is "LearnSlice Team" (Organization schema, no Person). For competitive commercial terms, a named, credentialed author with Person schema + bio is worth adding.

---

## Keyword Analysis
- Primary DE: "E-Learning entwickeln lassen" - in title, H1, first sentence, multiple H2s, meta, URL. **Excellent placement.**
- Cost secondary: "Was kostet E-Learning-Entwicklung" - own H2 + FAQ. Good.
- EN primary: "custom e-learning development (cost)" - title, H1, H2, URL. Good; ensure the cost H2 keeps the exact phrase.
- Search intent: commercial-investigation + informational (cost). Content type (buyer guide) matches; funnels to the transactional `/solutions`. **Aligned.**
- Secondary/LSI covered: individuelle Lernplattform/LMS entwickeln lassen, Serious Games, maßgeschneiderte Lernsoftware, DSGVO/EU-Hosting, build vs buy, Kosten pro Minute/Lernstunde.
- Density: natural, no stuffing.

---

## Technical SEO - **Pass**
- Canonical self-referencing; hreflang pair (en/de/x-default to German) verified.
- Schema: BlogPosting + FAQPage (7 Q&A) + BreadcrumbList + Organization + WebSite + SoftwareApplication + ImageObject. Rich and valid in build.
- In sitemap with fresh lastmod; IndexNow ping on prod deploy.
- Mobile viewport site-wide; hero WebP keeps LCP light.

---

## Featured Snippet / AEO Opportunities - **Strong**
- Cost table -> table snippet; build-vs-buy table -> table/comparison snippet; FAQ -> FAQ rich result; keyTakeaways box + answer-first H2s = AI-Overview citation surface.
- Tighten the opening answer under "Was kostet..." to a self-contained 40-60 word block to also win the paragraph snippet (currently answer + table).

---

## Conversion mismatch (SEO-adjacent, high impact)
The article's in-body CTAs correctly deep-link to the `/solutions` strategy-call booking, but the **shared BlogLayout still renders the product-demo CTA** ("Kostenlose Demo buchen" / DemoRequestModal) as the sidebar + footer CTA and as page H2s. For this custom-development audience that is the wrong offer and competes with the strategy-call intent. Recommend a per-post frontmatter flag (e.g. `ctaVariant: "consultation"`) so solutions-cluster posts render the strategy-call CTA + ConsultationModal instead.

---

## Prioritized Recommendations

### High Priority (this week)
1. Trim meta descriptions to ~150-155 chars (DE 167, EN 175) and add a soft CTA verb. 5-minute change, protects the snippet from truncation.
2. Resolve the CTA mismatch: switch the layout CTA for solutions-cluster posts to the strategy-call/ConsultationModal (per-post flag). Directly serves the stated goal of driving booked scoping calls.
3. Trim the EN title to <=60 chars to avoid SERP truncation.

### Medium Priority (this month)
4. Add author-level E-E-A-T: a named author with Person schema + short bio for these commercial posts.
5. Add one concrete example or a link to `/research` (FH Dortmund pilot) to lift the Experience signal.
6. Confirm hero loads eagerly (LCP) and body images lazily; consider Astro Image for `srcset`.
7. Tighten the cost-answer paragraph for a paragraph featured snippet.

### Low Priority (cluster build-out)
8. Add supporting spokes to own the cluster: "Serious Game entwickeln lassen", "Lernplattform/LMS entwickeln lassen Kosten", "KI-Tutor entwickeln lassen", each linking up to `/solutions`.
9. Optionally differentiate H1 from the title tag.
