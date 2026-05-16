# SEO Content Audit
## https://learnslice.com
### Date: 2026-05-16 (refresh of 2026-04-04 audit)

---

## SEO Health Score: 94/100 (was 91)

**Summary:** Since the 2026-04-04 audit, LearnSlice closed the largest structural gaps and added a full GEO (Generative Engine Optimization) layer. Sitemap now publishes 51 URLs with embedded `xhtml:link` hreflang for every paired page (144 alternates), `llms.txt` + `llms-full.txt` + `ai.txt` ship a 260 KB AI-ready corpus, FAQPage and HowTo schema render on key landing pages, and the homepage's duplicate H1 from the prior audit is resolved (now exactly one H1). The blog cluster grew to 23 posts (11 EN + 12 DE), all originals were refreshed for GSC-ranking phrases ("Track A"), and a new pillar — Ausbildungsplan — was added with 3 posts targeting BBiG/§14 queries.

What's left is almost entirely cosmetic: 7 meta descriptions overshoot the SERP truncation limit, /blog and /de/blog skip H2 in their heading tree, one blog title is 81 chars, and `ausbildungsrahmenplan-erklaert` is still DE-only (the EN counterpart is the next queued pair per the bilingual pipeline).

### Verified live (2026-05-16)
- Homepage: 1 H1, 11 H2s, FAQPage + HowTo + SoftwareApplication + Organization + WebSite + BreadcrumbList + AggregateRating schema, full OG/Twitter card set, self-canonical, 3-tag hreflang, `robots: index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`
- Sitemap: 51 URLs, 144 hreflang `xhtml:link` entries, no misleading lastmod (intentional)
- ai.txt → llms.txt (3.6 KB) → llms-full.txt (260 KB) chain is live
- 27/27 homepage images have alt text; 15 of 17 unique images are WebP/SVG; only `learnslice-copilot-02.jpg` and the partner PNG logos remain non-WebP

---

## On-Page SEO Checklist

### Title Tag

| Page | Title | Chars | Status |
|---|---|---:|---|
| `/` | `AI Apprenticeship Training \| IHK Exam Prep \| LearnSlice` | 54 | Pass |
| `/de` | `KI-Ausbildungsplattform \| IHK-Prüfungsvorbereitung \| LearnSlice` | 64 | Pass (slight overshoot, acceptable for DE) |
| `/companies` | `AI-Powered Apprenticeship Training for Companies \| LearnSlice` | 61 | Pass |
| `/schools` | `AI Learning Platform for Vocational Schools \| LearnSlice` | 56 | Pass |
| `/agencies` | `AI Training for IHK, HWK & Economic Development Agencies \| LearnSlice` | 73 | **Needs Work** — truncates around "Economic Devel..." in SERPs |
| `/apprenticeship-savings-calculator` | `Apprenticeship Cost Savings Calculator \| LearnSlice` | 51 | Pass |
| `/blog` | `Blog \| LearnSlice - AI-Powered Apprenticeship Training` | 54 | **Needs Work** — leads with the generic word "Blog"; the high-value phrase comes after the pipe |
| `/blog/apprenticeship-plan-template-free` | `Apprenticeship Plan Template (Free): Copy-Paste Sample for German BBiG Compliance` | 81 | **Needs Work** — "for German BBiG Compliance" gets cut |
| `/learnslice-vs-traditional-training` | `LearnSlice vs. Traditional Training Methods \| Comparison` | 56 | Pass |
| `/de/blog/ausbildungsrahmenplan-erklaert` | `Ausbildungsrahmenplan erklärt: Aufbau, Inhalte und Umsetzung im Betrieb` | 72 | **Needs Work** — DE truncates ~65 chars; "im Betrieb" cut |

**Recommended fixes:**
- `/agencies` → `AI Apprenticeship Training for IHK & HWK Agencies | LearnSlice` (60 chars)
- `/blog` → `Apprenticeship Training Insights | LearnSlice Blog` (50 chars)
- `/blog/apprenticeship-plan-template-free` → `Free Apprenticeship Plan Template (§14 BBiG, Copy-Paste)` (56 chars; tighter and front-loads §14 BBiG)
- `/de/blog/ausbildungsrahmenplan-erklaert` → `Ausbildungsrahmenplan: Aufbau, Inhalte & Umsetzung` (50 chars)

### Meta Description

Every audited page now ships a meta description (regression vs. the 2026-04-04 audit, where homepage/blog/calculator were missing — that's fixed). The new issue is **length overshoot** on 7 of 10 audited pages.

| Page | Length | Status |
|---|---:|---|
| `/` | 174 | **Needs Work** (cap at 160) |
| `/de` | 176 | **Needs Work** |
| `/companies` | 184 | **Needs Work** |
| `/schools` | 171 | **Needs Work** |
| `/agencies` | 159 | Pass |
| `/apprenticeship-savings-calculator` | 179 | **Needs Work** |
| `/blog` | 109 | Pass (could expand slightly toward 150) |
| `/de/blog` | 207 | **Fail** — significantly truncated by Google |
| `/blog/apprenticeship-plan-template-free` | 172 | **Needs Work** |
| `/learnslice-vs-traditional-training` | 185 | **Needs Work** |
| `/de/blog/ausbildungsrahmenplan-erklaert` | 144 | Pass |

**Why it matters:** Google truncates around 155-160 chars on desktop and ~120 on mobile. Pages with 170-200 char descriptions are silently losing the closing benefit + CTA. Trim each to ≤160 chars, keeping the front-load (primary benefit + keyword) intact.

**Example rewrite — `/companies` (cut 24 chars):**
- Before (184): "Reduce apprentice onboarding from 6 months to 8 weeks. Save up to €15K per apprentice with AI coaching, IHK exam prep, and company knowledge integration. Free up 50% of trainer time."
- After (158): "Cut apprentice onboarding from 6 months to 8 weeks. AI coaching + IHK exam prep + company knowledge in one platform. Save up to €15K per apprentice."

### Heading Hierarchy

| Page | H1 | H2 | H3 | H4 | Status |
|---|---:|---:|---:|---:|---|
| `/` | 1 | 11 | 16 | 5 | **Pass** (prior audit's 2-H1 bug fixed) |
| `/de` | 1 | 11 | — | — | Pass |
| `/companies` | 1 | 6 | — | — | Pass |
| `/blog` | 1 | 1 | 11 | 4 | **Needs Work** — the only H2 is the modal title; 11 post cards use H3 directly under H1 |
| `/de/blog` | 1 | 1 | 12 | 4 | **Needs Work** — same pattern |
| `/blog/apprenticeship-plan-template-free` | 1 | 14 | — | — | Pass (article uses H2 for sections, H3 for sub-points — exemplary) |
| `/de/blog/ausbildungsrahmenplan-erklaert` | 1 | 16 | — | — | Pass |
| `/learnslice-vs-traditional-training` | 1 | 4 | — | — | Pass |

**Fix for /blog and /de/blog:** Wrap the card grid in an H2 (e.g., `<h2>Latest Posts</h2>` / `<h2>Neueste Artikel</h2>`) so cards become H3 *under an H2 section* instead of orphaned H3s directly under H1. Optional but stronger: split into two H2 sections ("Featured" + "All posts") to add a keyword-rich subheading.

### Image Optimization
- **Status: Pass.** 27/27 homepage images have alt text. WebP is used for testimonials, slider, and hero photos. Logos are PNG (acceptable for transparent marks). The single remaining JPG on the homepage is `/images/screenshots/learnslice-copilot-02.jpg` — converting to WebP would shave ~30-50% off that asset.
- Blog post hero images: spot-checked `apprenticeship-plan-template-free` — uses optimized WebP via the BlogPosting `ImageObject` schema.

### Internal Linking
- **Status: Pass.** A single new pillar post (`/blog/apprenticeship-plan-template-free`) ships **32 unique internal links** including the calculator, 3 comparison pages, 4 sibling blog posts, the DE counterpart, and all 3 audience landing pages. That's a major lift over the prior audit's "2-3 internal links per post" finding.
- Header dropdown surfaces the 2 newest blog posts + "View all posts" — gives the freshest content prime navigation real estate.
- Footer surfaces all 5 comparison pages.

**Remaining gap:** Static featured-post slots in the header. Rotating them by `pubDate`/`updatedDate` automatically would keep the nav fresh without manual edits each launch.

### URL Structure
- **Status: Pass.** All URLs are lowercase, hyphen-separated, descriptive, and free of query parameters. The longest production URL is `/de/blog/ausbildungsplan-vorlage-kostenlos` (45 chars) — well under any threshold.

---

## Content Quality (E-E-A-T)

| Dimension | Score | Evidence |
|---|---|---|
| **Experience** | Present (unchanged) | Testimonials with attributed names + photos; specific outcome metrics (€15K, 8 weeks, 50% trainer time). Still no published case study pages. |
| **Expertise** | Present → Improving | FH Dortmund partnership, IHK-aligned curriculum, blog content now demonstrates depth (2,300+ words on pillar posts). Author byline updated to "LearnSlice Team" but no individual bios. Adding 1-2 named subject-matter authors (e.g., a learning-design lead) would lift E-E-A-T meaningfully. |
| **Authoritativeness** | Present | BMWE AI Prize 2025, 30+ customers, university partnerships. New BBiG content quotes specific statute paragraphs (deep-linked URLs per recent geo fixes) — strong signal. |
| **Trustworthiness** | Strong | HTTPS, GDPR, Germany-hosted, full privacy/terms/imprint, physical Düsseldorf address, AggregateRating 4.8/5 from 30 reviews. **Watch:** the rating value (4.8/30) hasn't moved in 6 weeks. Either refresh with current data or remove `aggregateRating` until it can be sourced from a verifiable widget (Trustpilot, Google Business, ProvenExpert) — Google has been hand-penalizing static AggregateRating schema. |

**Highest-leverage E-E-A-T moves (unchanged from last audit):**
1. Publish 2-3 customer case study pages (Tremonia, Carl-Severing, Jaeger Gruppe) with quantified outcomes
2. Add author bio pages with credentials/photo for blog posts (currently all "LearnSlice Team")
3. Link customer-logo strip to actual case studies or testimonials instead of being decorative

---

## Keyword Analysis

### Primary Keywords by Page (no changes since 2026-04-04 — all aligned)
| Page | Primary Keyword | Intent | Status |
|---|---|---|---|
| `/` | "AI apprenticeship training" | Commercial | Aligned |
| `/companies` | "apprenticeship training platform" | Commercial | Aligned |
| `/calculator` | "apprenticeship cost calculator" | Commercial | Aligned |
| `/blog/apprenticeship-plan-template-free` | "apprenticeship plan template" | Informational + downloadable | **Strong** — title, H1, BBiG anchor, and copy-block all reinforce the query |
| `/de/blog/ausbildungsrahmenplan-erklaert` | "Ausbildungsrahmenplan" | Informational | **Strong** — pillar-quality coverage of the legal framework |
| `/de/blog/ausbildungsplan-vorlage-kostenlos` | "Ausbildungsplan Vorlage kostenlos" | Informational + downloadable | Aligned |

### Newly Covered Keyword Clusters
- **Ausbildungsplan cluster** (new since April): 3 posts cover "Ausbildungsplan erstellen KI", "Ausbildungsplan Vorlage kostenlos", "Ausbildungsrahmenplan erklärt" + 1 EN pillar — directly serves the highest-intent BBiG queries.
- **Private/secure AI onboarding** (new): `private-ai-employee-onboarding` targets the US "secure ChatGPT alternative" angle. Verify whether this stays English-only or gets a DE counterpart — current sitemap correctly flags it as solo via `page-pairs.mjs`.

### Remaining Gaps (carried over)
- "Ausbildereignungsprüfung" / AEVO (high DE volume, no coverage)
- "Ausbildung Generation Z" / Gen Z engagement (medium volume, low competition)
- Comparison: "Ausbildung 4.0" / future of vocational training

---

## Technical SEO

### Robots.txt
- **Status: Pass.** Permits all crawlers including the full AI agent set (GPTBot, ChatGPT-User, Google-Extended, anthropic-ai, ClaudeBot, PerplexityBot, Applebot-Extended, Bytespider, CCBot, cohere-ai, FacebookBot). Points to `/sitemap-index.xml`.

### XML Sitemap
- **Status: Pass (major improvement).** 51 URLs (up from 28 → 54 in April → 51 stable now). 144 `xhtml:link` hreflang alternates embedded (48 paired pages × 3 lang entries). 3 solo pages (`/blog/private-ai-employee-onboarding`, `/de/blog/ausbildungsplan-erstellen-ki`, `/de/blog/ausbildungsrahmenplan-erklaert`) correctly omit alternates via the `serialize` callback.
- **No misleading lastmod values** — intentional fix from prior audit. Crawlers now use last-modified headers instead of an inaccurate per-build timestamp.

### Hreflang
- **Status: Pass.** Implemented in two complementary layers: per-page `<link rel="alternate">` in the head **and** `xhtml:link` in the sitemap. `page-pairs.mjs` registry + `npm run check:pairs` prebuild check enforces parity. Verified 3-tag pattern (en, de, x-default) on every paired page; solo pages correctly emit only the canonical alternate.

### Canonical Tags
- **Status: Pass.** Self-referencing on every page audited.

### Page Speed
- **Status: Not directly measured this session.** PSI API returned a 429 quota error. Architectural indicators remain favorable: Astro static-site output, no client-side framework hydration on landing pages, WebP-dominant image diet, fonts loaded via `rsms.me` (could be self-hosted to cut 1 round-trip), no analytics or chat widgets on the homepage.
- **Action:** Run PSI manually at https://pagespeed.web.dev/?url=https%3A%2F%2Flearnslice.com%2F and validate Core Web Vitals before any major launch.

### Mobile-Friendliness
- **Status: Pass.** Viewport meta present (`width=device-width, initial-scale=1.0`), theme-color set (`#2a2a32`), responsive nav with mobile menu, no horizontal scroll triggers found.

---

## GEO / AI Search Readiness (NEW SECTION)

LearnSlice is unusually well-positioned for Google AI Overviews, Perplexity, and ChatGPT search — and the 2026-05 session shipped most of the infrastructure.

| Asset | Status | Notes |
|---|---|---|
| `/ai.txt` (Spawning AI convention) | Live | References `Sitemap`, `LLM-Content`, `LLM-Full-Content` |
| `/llms.txt` | Live | 3.6 KB curated index of pages + key facts |
| `/llms-full.txt` | Live | 260 KB full corpus including keyTakeaways + FAQ frontmatter |
| FAQPage schema | Present on `/`, `/de`, `/schools`, `/agencies`, `/de/blog/ausbildungsrahmenplan-erklaert` | Drives "People Also Ask" + AI Overview citation |
| HowTo schema | Present on `/` and `/de` | 3-step "How it works" |
| keyTakeaways frontmatter | Present on newest posts | Used by `llms-full.txt` builder |
| BBiG/IHK deep-link citations | Present on `ausbildungsrahmenplan-erklaert` (per recent commits) | Specific paragraph URLs — strong factual provenance for AI engines |

**To strengthen further:**
1. Backfill `keyTakeaways` + `faq` frontmatter to the original 11 blog posts so `llms-full.txt` covers the full corpus uniformly.
2. Add `Author` JSON-LD (`@type: Person`) once individual author bios exist — AI engines weight author identity in citation decisions.
3. Add a `lastReviewed` date field to high-traffic posts (Google has started surfacing "Reviewed on …" in AI Overviews).

---

## Content Gap Analysis

### Currently Live (23 posts: 11 EN + 12 DE)

EN: ai-in-vocational-training, ai-tools-vocational-training, apprentice-onboarding, apprenticeship-plan-template-free, digital-training-logbook, digitize-apprenticeship-training, ihk-exam-preparation-digital, ihk-exam-tips, private-ai-employee-onboarding, reduce-trainer-workload, reduce-training-costs

DE: ausbilder-entlasten, ausbildung-digitalisieren, ausbildungskosten-senken, ausbildungsplan-erstellen-ki, ausbildungsplan-vorlage-kostenlos, ausbildungsrahmenplan-erklaert, azubi-onboarding, berichtsheft-digital, ihk-pruefung-tipps, ihk-pruefungsvorbereitung-digital, ki-in-der-ausbildung, ki-tools-ausbildung

### Bilingual Parity
- 11 EN ↔ 11 DE pairs ✅
- 1 DE-only (`ausbildungsrahmenplan-erklaert`) — EN pair is the **next queued slug** per the bilingual pipeline memory
- 1 EN-only (`private-ai-employee-onboarding`) — intentional US-targeted post; verify registered in `EN_ONLY` (no `de/` counterpart in sitemap suggests it is)

### Remaining High-Value Gaps

| Missing Topic | Volume | Competition | Priority | Type |
|---|---|---|---|---|
| Ausbildungsrahmenplan (EN) — pair for the new DE post | Med | Low | **1** | Blog (queued) |
| Customer case studies (Tremonia, Jaeger Gruppe) | N/A (trust) | Low | **1** | Case study pages |
| "Ausbildereignungsprüfung" / AEVO trainer cert | High (DE) | Med | 2 | Pillar |
| Author bio pages | N/A (E-E-A-T) | — | 2 | Static pages |
| "Ausbildung Generation Z" | Med | Low | 3 | Blog |
| Ausbildung 4.0 / Training 4.0 | Med | Low | 3 | Blog |
| "Lernmethoden Ausbildung" | Med | Med | 4 | Blog |

---

## Featured Snippet Opportunities (re-evaluated)

1. **"Was ist ein Ausbildungsrahmenplan?"** — `ausbildungsrahmenplan-erklaert` already targets this. Confirm the first paragraph under H1 is a 40-60-word definition (paragraph-snippet pattern) and the H2 "Aufbau" section uses an ordered list (list-snippet pattern).
2. **"How long does apprenticeship onboarding take?"** — Homepage and `apprentice-onboarding` post both answer "8 weeks." Add a `<dl>` or 40-60-word paragraph immediately under an H2 titled exactly "How long does apprentice onboarding take?" for paragraph-snippet capture.
3. **"Was kostet ein Azubi pro Jahr?"** — Strong DE query; `/de/ausbildungskosten-rechner` is the ideal landing page. Add a cost-breakdown HTML `<table>` (Year 1 / Year 2 / Year 3 / Total) above the calculator UI for table-snippet potential.
4. **"§ 14 BBiG einfach erklärt"** — Add a 50-word definition box near the top of `ausbildungsrahmenplan-erklaert` and `ausbildungsplan-vorlage-kostenlos`. BBiG-related queries are growing post-2025 reform.
5. **"Apprenticeship plan template free"** — `apprenticeship-plan-template-free` already targets it; the CopyBlock component (recent feature) preserves table/list HTML on paste — that's a unique snippet-friendly UX worth surfacing in copy ("Copy the table below — formatting included").

---

## Schema Markup

| Schema | Status | Notes |
|---|---|---|
| Organization | Present (homepage + every page) | Clean — includes AggregateRating, ContactPoint, PostalAddress |
| SoftwareApplication | Present | `price: "0"` issue from prior audit was fixed (commit `5917f1c`) |
| WebSite | Present | Includes SearchAction-ready structure |
| BreadcrumbList | Present site-wide | Good |
| FAQPage | **Present** on `/`, `/de`, `/schools`, `/agencies`, `/de/blog/ausbildungsrahmenplan-erklaert` | Major lift since April — was homepage-only |
| HowTo | Present on `/` and `/de` | 3 steps |
| BlogPosting | Present on every blog post | Plus `WebPage`, `Person`, `ImageObject` — best-in-class |
| AggregateRating | Present (4.8 / 30 reviews) | **Watch** — static for 6+ weeks; verify provenance |
| LocalBusiness | Still missing | Düsseldorf address is in Organization schema — adding LocalBusiness would unlock Google Maps surface for "Ausbildungssoftware Düsseldorf" type queries |
| Review (individual) | Missing | Optional supplement to AggregateRating |

---

## Internal Linking Opportunities

### Resolved since April
- ✅ New blog posts cross-link to comparison pages, calculator, and sibling posts (`apprenticeship-plan-template-free` ships 32 unique internal links)
- ✅ DE counterpart links from EN posts (and vice versa)
- ✅ Top 2 newest blog posts surfaced in header dropdown

### Still Open
1. **Listing-page H2 fix** (see Heading Hierarchy section) — wrap card grids in an H2 to give crawlers a section anchor and reclaim a keyword slot.
2. **Auto-rotation of header featured posts** — currently hardcoded to 2 specific slugs. Sort by `pubDate desc` and slice 2 to keep nav fresh.
3. **Comparison pages → blog cross-links** — comparison pages link out to other comparisons but only thinly back to relevant blog posts (e.g., `/learnslice-vs-traditional-training` should link to `apprenticeship-plan-template-free` and `digitize-apprenticeship-training`).
4. **Customer-logo strip** — currently decorative. Each logo should link to a future case study page.

---

## Core Web Vitals (Estimated — not directly measured this session)

PSI API quota exhausted. Architectural estimate based on dist output and prior measurements:

| Metric | Estimate | Reasoning |
|---|---|---|
| LCP | Likely <2.5s | Static HTML, WebP hero images, no JS framework on first paint |
| INP | Likely <100ms | Minimal interactive surface; modal is the only JS-driven interaction on most pages |
| CLS | Likely <0.1 | Images appear to have width/height set; no late-loading ads or third-party iframes |
| TTFB | Depends on host | Verify CDN/edge config |

**Action:** Run https://pagespeed.web.dev/?url=https%3A%2F%2Flearnslice.com%2F manually before the next quarterly review.

---

## Content Strategy Recommendations

### Publishing Cadence
- Current: 23 posts live, up from 18 in April (+5 in 6 weeks ≈ 1 post/8 days)
- Per the [[project_blog_pipeline]] memory: 9 bilingual pairs remain across 3 clusters; next slug = `ausbildungsrahmenplan-erklaert` (EN side)
- Recommended: maintain ~1 bilingual pair / 2 weeks until the 9 queued pairs are shipped, then pivot to case studies + AEVO cluster

### Content Length
- New pillar posts are at 2,000-2,400 words — strong. The "Track A refresh" commit (`5a87fa4`) confirms the original posts were expanded for GSC-ranking phrases.
- No further length action needed; focus shifts to depth (citations, BBiG paragraph deep-links — already started) and freshness (lastReviewed date).

### Content Priority Matrix

| Item | Volume | Competition | Business Value | Priority |
|---|---|---|---|---|
| Customer case studies (Tremonia, Jaeger, Carl-Severing) | N/A (trust + E-E-A-T) | Low | High | **10/10** |
| Ausbildungsrahmenplan (EN pair) | Med | Low | High | **9/10** |
| AEVO / trainer certification pillar (DE) | High | Med | Med | **8/10** |
| Author bio pages | N/A (E-E-A-T) | — | Med | **7/10** |
| Ausbildung 4.0 / Generation Z posts | Med | Low | Med | 6/10 |
| LocalBusiness schema + Maps optimization | Low-Med | Low | Med | 6/10 |

---

## Prioritized Recommendations

### Critical (Fix This Week)
1. **Trim 7 over-length meta descriptions to ≤160 chars.** Cheapest, highest-impact SEO win. Affected: `/`, `/de`, `/companies`, `/schools`, `/apprenticeship-savings-calculator`, `/de/blog` (worst at 207), `/learnslice-vs-traditional-training`, `/blog/apprenticeship-plan-template-free`. Expected impact: +5-15% SERP CTR on pages where the CTA was being truncated.

### High Priority (This Month)
2. **Fix /blog and /de/blog heading hierarchy.** Wrap the post-card grid in an `<h2>Latest Posts</h2>` / `<h2>Neueste Artikel</h2>`. Currently H1 → H3 skip leaves crawlers without a section anchor. ~5 min edit.
3. **Tighten 3 over-length titles** (`/agencies`, `/blog`, `/blog/apprenticeship-plan-template-free`). See proposed rewrites above. Expected impact: full title rendering in SERPs instead of truncation.
4. **Ship the EN counterpart for `ausbildungsrahmenplan-erklaert`** (already next in the pipeline). Unlocks the en/de hreflang pair and removes the sole DE-only post.
5. **Verify or refresh AggregateRating.** If 4.8/30 isn't backed by a current external source, either update with real numbers or remove the schema until a Trustpilot/ProvenExpert widget is integrated.

### Medium Priority (This Quarter)
6. **Publish 2-3 customer case study pages** with quantified outcomes. Strongest remaining E-E-A-T move.
7. **Add author bio pages** (start with 1-2 named subject-matter authors). Migrate blog post `author` away from "LearnSlice Team" where applicable.
8. **Backfill `keyTakeaways` + `faq` frontmatter** on the original 11 blog posts to give `llms-full.txt` uniform AI-citation surfaces.
9. **Auto-rotate the 2 featured posts in the header dropdown** by `pubDate desc`.
10. **Convert `learnslice-copilot-02.jpg` to WebP.** Single remaining JPG hero asset.
11. **Add LocalBusiness schema** for the Düsseldorf address (unlocks "Ausbildungssoftware Düsseldorf" Maps presence).

### Low Priority (When Resources Allow)
12. **Self-host Inter font** (currently loaded from rsms.me) to remove a third-party preconnect.
13. **Add `lastReviewed` date** to high-traffic blog posts for AI Overview freshness signal.
14. **Re-run PSI** and capture a Core Web Vitals baseline (PSI API was rate-limited this session).
15. **Open the AEVO cluster** with a pillar post + 2-3 supporting articles.

---

## Changelog vs. 2026-04-04 Audit

**Closed:**
- Homepage 2-H1 bug → fixed (now exactly 1 H1)
- Missing meta descriptions on `/`, `/companies`, `/blog`, `/calculator` → all present
- Sitemap had identical lastmod values across all URLs → removed (cleaner crawl signal)
- `/sitemap.xml` 404 → still 404 but `/sitemap-index.xml` is the canonical entry referenced from robots.txt (acceptable)
- Comparison pages orphaned (footer-only) → now linked from pillar blog posts
- BlogPosting schema → enhanced with `WebPage`, `Person`, `ImageObject`
- Hreflang in sitemap → added via `xhtml:link` (was head-only)
- FAQPage schema → expanded from homepage-only to 5 pages
- AI/LLM infrastructure → added (`ai.txt`, `llms.txt`, `llms-full.txt`, AI crawler allowlist)

**New since April:**
- 5 new blog posts (3 DE + 1 EN + 1 EN-only US-targeted)
- Track A refresh expanded original posts for GSC-ranking phrases
- BBiG paragraph-level deep-link citations
- CopyBlock component (rich HTML copy)
- Header featured-posts dropdown

**Still open:**
- 7 over-length meta descriptions (NEW finding)
- /blog and /de/blog H2 hierarchy skip (NEW finding — listing pages weren't audited in April)
- 3 over-length titles (NEW finding for `/blog/apprenticeship-plan-template-free`; carried-over for `/agencies` and `/blog`)
- AggregateRating freshness (carried)
- Case studies (carried)
- Author bios (carried)
