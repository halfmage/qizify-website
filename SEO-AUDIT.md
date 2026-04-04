# SEO Content Audit
## https://learnslice.com
### Date: 2026-04-04

---

## SEO Health Score: 86/100 (up from 78)

**Summary:** LearnSlice has made significant SEO progress in a single session. The site now has 48 indexed pages (up from 28), with 18 blog posts (9 EN + 9 DE) covering a strong topic cluster. Schema is clean, meta descriptions are keyword-rich and conversion-oriented, internal linking is solid across the blog network, and all statistics are properly qualified. The main remaining gaps are: content length on some posts (aim for 1,500+ words), missing case study pages, and no author bio pages.

### Changes since initial audit (2026-04-04):
- **Schema fixed:** Removed misleading `price: "0"`, removed duplicate AggregateRating
- **12 new blog posts published** (6 EN + 6 DE), fact-checked, DACH-localized
- **Image optimization:** 15 WebP images, all with descriptive alt text
- **Internal linking:** Cross-links between all blog posts, calculator, and comparison pages
- **Headlines rewritten:** Dual-problem angle ("Azubis ohne Plan. Ausbilder am Limit.")
- **Full-cycle differentiator** now in all subheadlines and meta descriptions
- **Numbers aligned to calculator:** €15K/apprentice consistently (was contradictory €4K/€32K)
- **CTAs unified:** "Book My Free Demo" / "Kostenlose Demo buchen" everywhere
- **FAQ answers enhanced** with benefit endings and soft CTAs
- **Problem section added** to homepage (pain amplification before ROI)
- **"AI Performance Catalyst" jargon removed** → plain language
- **Vocational Professions moved higher** on page (from #9 to #6)
- **Redundant LeadCapture section removed** from homepage
- **Sitemap grew from 28 → 48 URLs**

---

## On-Page SEO Checklist

### Title Tag
- **Status: Pass**
- Current: `"AI Apprenticeship Training | IHK Exam Prep | LearnSlice"`
- Length: 55 characters — within the 50-60 sweet spot
- Primary keyword "Apprenticeship Training" is present
- Brand name included at the end
- **Issue:** "AI Apprenticeship Training" is a niche query. Consider testing `"AI-Powered Apprenticeship Training Platform | LearnSlice"` to capture more search intent variations.
- **/companies page:** `"AI-Powered Apprenticeship Training for Companies | LearnSlice"` — **Pass** (58 chars, well-targeted)
- **/blog page:** `"Blog | LearnSlice - AI-Powered Apprenticeship Training"` — **Needs Work** — generic "Blog" lead wastes the most valuable position. Recommend: `"Apprenticeship Training Insights & AI Learning Guides | LearnSlice Blog"`

### Meta Description
- **Status: Needs Work / Fail**
- **Homepage:** Not detected in fetch. The Organization schema has a description, but the actual `<meta name="description">` may not be rendering on the homepage. **Verify in source — if missing, this is critical.**
- **/companies page:** `"AI-powered learning platform for apprenticeships. Automate mentoring and save money with LearnSlice."` — 103 chars. **Needs Work.** Too short (aim for 150-160). Missing differentiation. Recommend: `"Get apprentices job-ready in 8 weeks instead of 6 months. LearnSlice combines IHK exam prep with AI coaching to save €32K per apprentice and cut trainer time by 50%."`
- **/blog page:** Missing entirely. **Fail.**
- **/calculator page:** Missing. **Fail.**
- **Blog posts:** Properly set via frontmatter. **Pass.**

### Heading Hierarchy
- **Status: Needs Work**
- **Homepage has 2 H1 tags:** `"AI-Powered Apprenticeship Training"` and `"Your Apprentices Job-Ready in 8 Weeks, Not 6 Months."` — Should be **exactly 1 H1**. The second should be a `<p>` or `<span>` subtitle.
- Section labels like "ROI", "How it works", "Use Cases" appear as H2s alongside their descriptive H2 counterparts (e.g., both `"ROI"` and `"€32K–€41K saved..."` are H2). This doubles up headings. Use the short label as an eyebrow `<span>` and keep only the descriptive H2.
- H3 headings are well-structured under their parent H2s.
- No H4-H6 abuse detected.

### Image Optimization
- **Status: Pass**
- All images have descriptive alt text
- Blog images use descriptive filenames (pexels attribution names)
- Images recently compressed (commit a4fb6c7: 8.2MB → 913KB) — good
- **Minor issue:** Image filenames like `pexels-yankrukov-7794078.jpg` are not keyword-rich. Ideally rename to something like `ai-vocational-training-workshop.jpg` for marginal SEO benefit. Low priority.
- WebP format used for testimonial/slider images. JPGs still used for blog hero images — consider converting to WebP.

### Internal Linking
- **Status: Needs Work**
- Homepage links well to key pages (/companies, /schools, /agencies, /calculator, /blog)
- Blog posts link to each other and to product pages — good
- **Gap:** New blog posts (8 EN + 8 DE) are not yet linked from the homepage or blog index
- **Gap:** No cross-links between /companies, /schools, and /agencies pages
- **Gap:** Comparison pages (/learnslice-vs-traditional-training, /learnslice-vs-simpleclub) are only linked from the footer — should be linked contextually from blog content and landing pages
- Blog articles have only 2-3 internal links each — aim for 5-8 per 1,000 words

### URL Structure
- **Status: Pass**
- Clean, readable URLs: `/blog/ai-in-vocational-training`, `/companies`, `/apprenticeship-savings-calculator`
- Hyphens used correctly, all lowercase
- German URLs also clean: `/de/blog/ki-in-der-ausbildung`
- `/apprenticeship-savings-calculator` is long (37 chars path) but descriptive — acceptable

---

## Content Quality (E-E-A-T)

| Dimension | Score | Evidence |
|---|---|---|
| **Experience** | Present | Testimonials from real customers (Tremonia GmbH, Carl-Severing Berufskolleg). Product screenshots shown. Specific metrics cited (65% faster, €32K saved). Could strengthen with case study pages. |
| **Expertise** | Present | Partnership with FH Dortmund (didactics), IHK-aligned curriculum. Blog content demonstrates domain knowledge. Missing: individual author bios with credentials. |
| **Authoritativeness** | Present | BMWE AI Prize 2025, 30+ company customers, university partnerships. Could strengthen with press mentions, guest posts, or industry publications. |
| **Trustworthiness** | Strong | HTTPS, GDPR-compliant, hosted in Germany, privacy/terms/imprint pages present, physical address (Düsseldorf), real contact info (phone, email), aggregate rating (4.8/5). |

**Key E-E-A-T improvements:**
1. Add individual author pages with bio, credentials, and photo for blog posts
2. Create 2-3 detailed case study pages (e.g., "How Tremonia reduced onboarding time by 65%")
3. Add a press/awards section on the About or homepage

---

## Keyword Analysis

### Primary Keywords by Page

| Page | Primary Keyword | Search Intent | Status |
|---|---|---|---|
| Homepage | "AI apprenticeship training" | Commercial | Aligned |
| /companies | "apprenticeship training platform" | Commercial | Aligned |
| /schools | "vocational school learning platform" | Commercial | Likely aligned |
| /agencies | "IHK training platform" | Commercial | Likely aligned |
| /calculator | "apprenticeship costs calculator" | Commercial | Aligned |
| /blog/ai-in-vocational-training | "AI in vocational training" | Informational | Aligned |
| /blog/reduce-training-costs | "reduce apprenticeship training costs" | Informational | Aligned |
| /blog/ihk-exam-preparation-digital | "IHK exam preparation digital" | Informational | Aligned |

### Keyword Placement — Homepage
| Element | Present? |
|---|---|
| Title tag | Yes — "AI Apprenticeship Training" |
| H1 | Yes — "AI-Powered Apprenticeship Training" |
| First 100 words | Yes — "IHK exam prep", "AI learning paths", "apprentices" |
| Meta description | Unknown — may be missing |
| URL | N/A (root) |
| Subheadings | Yes — scattered through H2s and H3s |

### Secondary Keywords (EN)
These should be naturally woven into content across the site:
- "IHK exam preparation" / "IHK Prüfungsvorbereitung"
- "apprentice onboarding"
- "trainer workload reduction"
- "digital training logbook" / "Berichtsheft"
- "vocational training platform Germany"
- "apprenticeship dropout rate"
- "AI coaching for apprentices"
- "Ausbildung digitalisieren"

### Search Intent Alignment
All pages align well with their target intent. The blog targets informational queries, landing pages target commercial intent, and the calculator targets comparison/commercial intent. **No misalignment detected.**

---

## Technical SEO

### Robots.txt
- **Status: Pass**
- Exists and allows all crawlers
- Explicitly allows AI crawlers (ChatGPT, Claude, Perplexity, etc.) — forward-thinking
- Points to sitemap at `/sitemap-index.xml`

### XML Sitemap
- **Status: Needs Work**
- Sitemap index exists at `/sitemap-index.xml` → references `/sitemap-0.xml`
- **Issue:** `/sitemap.xml` returns 404. Some crawlers check this default path. Add a redirect or second reference.
- **Issue:** No `changefreq` or `priority` values set for any URL
- **Issue:** All 28 URLs have identical `lastmod` timestamps (`2026-04-03T21:21:57.799Z`). This looks auto-generated at build time rather than reflecting actual content changes. Google may ignore lastmod if it's not meaningful.
- **Issue:** New blog posts (8 EN + 8 DE) not yet in sitemap — they'll appear after deployment
- **Total indexed pages:** 28 (14 EN + 14 DE) — appropriate for current site size

### Canonical Tags
- **Status: Pass (in code)**
- `<link rel="canonical">` implemented in BaseLayout.astro:200
- Self-referencing canonical tags on all pages
- Verify in rendered HTML that canonicals are correct, especially for `/de` pages

### Hreflang Implementation
- **Status: Pass (in code)**
- Proper implementation in BaseLayout.astro:203-205:
  - `hreflang="en"` → English path
  - `hreflang="de"` → German path
  - `hreflang="x-default"` → English path
- Implementation confirmed in source code — correct 3-tag pattern

### Page Speed (Estimated)
- **Status: Likely Good**
- Astro static site generator — pre-rendered HTML, minimal JavaScript
- Images recently optimized (913KB total for blog images)
- WebP used for some images
- No heavy third-party scripts detected (no analytics/chat widgets visible)
- **Recommendation:** Run Google PageSpeed Insights for actual Core Web Vitals data

### Mobile-Friendliness
- **Status: Pass**
- Viewport meta tag present (standard Astro setup)
- Responsive navigation with mobile hamburger menu
- Skip-to-content link for accessibility

---

## Content Gap Analysis

### Currently Published (Live)
| Topic | EN | DE |
|---|---|---|
| AI in vocational training | Yes | Yes |
| Reduce training costs | Yes | Yes |
| IHK exam preparation digital | Yes | Yes |

### In Pipeline (Branch: feat/seo-round-2)
| Topic | EN | DE |
|---|---|---|
| Apprentice onboarding checklist | Yes | Yes |
| Reduce trainer workload | Yes | Yes |
| IHK exam tips | Yes | Yes |
| Digitize apprenticeship training | Yes | Yes |
| Digital training logbook | Yes | Yes |
| AI tools for training | No | Yes |

### Missing High-Value Topics

| Missing Topic | Volume Potential | Competition | Content Type | Priority |
|---|---|---|---|---|
| "Ausbildungsplan erstellen" (create training plan) | High | Medium | Guide | 1 |
| "Ausbildung Generation Z" / "Gen Z apprenticeship" | Medium | Low | Blog | 2 |
| "Ausbildungsnachweis digital" (digital training records) | Medium | Medium | Guide | 3 |
| Case studies (customer success stories) | N/A (trust) | Low | Case study page | 1 |
| "Ausbildereignungsprüfung" (trainer certification) | High (DE) | Medium | Blog | 3 |
| "Lernmethoden Ausbildung" (learning methods) | Medium | Medium | Blog | 4 |
| "Ausbildung 4.0" / "Training 4.0" | Medium | Low | Blog | 2 |
| ROI of apprenticeship training | Medium | Low | Blog + Calculator | 2 |
| Comparison: LearnSlice vs. Prozubi / Cornelsen | Medium | Low | Landing page | 3 |

---

## Featured Snippet Opportunities

1. **"How long does apprenticeship onboarding take?"** — The homepage already states "8 weeks, not 6 months." Create a dedicated FAQ or blog section with a clear 40-60 word answer.

2. **"How much does an apprentice cost per year?"** — The calculator page and blog reference €20K-€35K. Format as a table snippet.

3. **"IHK exam preparation tips"** — The upcoming `ihk-exam-tips` post targets this. Use a numbered list immediately after the H2 for list snippet potential.

4. **"Was kostet ein Azubi pro Jahr?"** — High-volume German query. Create a table with cost breakdown.

5. **"Ausbildung digitalisieren Checkliste"** — The `digitize-apprenticeship-training` post should include a checklist formatted as an ordered list.

---

## Schema Markup

| Schema Type | Status | Notes |
|---|---|---|
| Organization | **Present** | Good — includes rating, contact, social links |
| SoftwareApplication | **Present** | Good — appropriate for SaaS product |
| BreadcrumbList | **Present** | Implemented on all pages |
| HowTo | **Present** | 3-step process on homepage — smart |
| FAQPage | **Present** | 12 Q&As on homepage |
| BlogPosting | **Present** | On blog article pages |
| LocalBusiness | Missing | Consider adding — you have a German address |
| Product | N/A | SoftwareApplication covers this |
| Review | Missing | Individual review schema could supplement AggregateRating |

**Issue:** The `AggregateRating` (4.8/5, 30 reviews) appears on both Organization AND SoftwareApplication schema. Google may flag this as duplicate. Keep it on SoftwareApplication only, or ensure reviews are verifiable.

**Issue:** `SoftwareApplication` has `"price": "0"` with description "Contact for pricing." This is misleading — either remove the price field or use a valid price. Google's guidelines require accurate pricing in Offer schema.

---

## Internal Linking Opportunities

### High-Priority Link Additions

1. **Blog → Comparison pages:** Each blog post about AI training or costs should link to `/learnslice-vs-traditional-training` with contextual anchor text like "how LearnSlice compares to traditional training."

2. **Blog → Calculator:** Every cost-related blog post should link to `/apprenticeship-savings-calculator`. Currently only 1 of 3 live posts does this.

3. **Cross-link new blog posts:** The 8 new EN posts should link to each other where topically relevant:
   - `apprentice-onboarding` ↔ `digitize-apprenticeship-training`
   - `reduce-trainer-workload` ↔ `reduce-training-costs`
   - `ihk-exam-tips` ↔ `ihk-exam-preparation-digital`
   - `digital-training-logbook` ↔ `digitize-apprenticeship-training`

4. **Homepage blog section:** Currently shows only 2 blog posts. After publishing the new batch, show 3-4 and rotate featured posts.

5. **Pillar-cluster model:**
   - **Pillar:** `/blog/digitize-apprenticeship-training` (comprehensive guide)
   - **Clusters:** onboarding, logbook, trainer workload, IHK exam prep, AI tools
   - Each cluster post links back to the pillar with consistent anchor text

### Orphan Page Risk
- `/learnslice-vs-traditional-training` and `/learnslice-vs-simpleclub` are only linked from the footer. Add contextual links from blog posts and landing pages.

---

## Core Web Vitals (Estimated Impact)

| Metric | Estimated Status | Reasoning |
|---|---|---|
| LCP | Likely Good (<2.5s) | Static site, optimized images, no heavy JS |
| FID/INP | Likely Good (<100ms) | Minimal JavaScript, no complex interactivity |
| CLS | Likely Good (<0.1) | Static layout, images appear to have dimensions set |

**Action:** Run actual PageSpeed Insights test to confirm. Static Astro sites typically score 90+ on mobile.

---

## Content Strategy Recommendations

### Publishing Cadence
- **Current:** 18 live posts (9 EN + 9 DE) — up from 6
- **Recommended:** 1 bilingual post per week to maintain content velocity
- **Rationale:** Good topic cluster foundation now exists. Focus shifts to expanding pillar posts and filling content gaps.

### Content Length
- Current blog posts: ~1,800-2,400 words (new posts), ~900-1,100 words (original 3)
- **Recommendation:** Expand the original 3 posts to 1,500+ words. New posts are already at good length.

### Content Priorities

| Content | Volume | Competition | Business Value | Priority |
|---|---|---|---|---|
| Customer case studies (2-3) | N/A | Low | High | **10/10** |
| "Ausbildungsplan erstellen" guide | High | Medium | High | **9/10** |
| Comparison pages (vs. Prozubi, Cornelsen) | Medium | Low | High | **8/10** |
| "Training 4.0" / future of apprenticeships | Medium | Low | Medium | **7/10** |
| Gen Z apprenticeship engagement | Medium | Low | Medium | **6/10** |
| Trainer certification (AEVO) guide | High | Medium | Medium | **6/10** |

### Content Update Strategy
- Refresh existing 3 live blog posts quarterly with updated stats and new internal links
- After new posts go live, add cross-links within 1 week
- Monitor which posts rank on page 2 and expand them by 30-50%

---

## Prioritized Recommendations

### Completed (2026-04-04)
1. ~~Schema pricing fixed~~ — Removed `"price": "0"` and duplicate AggregateRating
2. ~~12 new blog posts published~~ — 6 EN + 6 DE, fact-checked, DACH-localized, cross-linked
3. ~~Meta descriptions on all pages~~ — Keyword-rich, conversion-oriented
4. ~~AggregateRating deduplicated~~ — Removed from Organization, kept on SoftwareApplication only
5. ~~Headlines rewritten~~ — Dual-problem angle with full-cycle differentiator
6. ~~Numbers aligned to calculator~~ — €15K/apprentice consistently
7. ~~CTAs unified~~ — "Book My Free Demo" / "Kostenlose Demo buchen"
8. ~~FAQ answers enhanced~~ — Benefit endings and soft CTAs
9. ~~Problem section added~~ — Pain amplification before ROI
10. ~~Jargon removed~~ — "AI Performance Catalyst" → plain language
11. ~~Vocational Professions repositioned~~ — Moved from #9 to #6
12. ~~Redundant section removed~~ — LeadCapture calculator card

### High Priority (This Month)
1. **Expand original 3 blog posts to 1,500+ words** — `ai-in-vocational-training`, `reduce-training-costs`, `ihk-exam-preparation-digital` are ~1,000 words (thin for competitive queries).
2. **Add contextual links to comparison pages** from blog posts — `/learnslice-vs-traditional-training` and `/learnslice-vs-simpleclub` are still footer-only.
3. **Create a `/sitemap.xml` redirect** to `/sitemap-index.xml` — some crawlers check the default path.

### Medium Priority (This Quarter)
4. **Create 2-3 customer case study pages** — Tremonia, Carl-Severing, and one more. Massive E-E-A-T signal.
5. **Add author bios to blog posts** — Real name, photo, credentials. Signals expertise to Google.
6. **Write "Ausbildungsplan erstellen" pillar content** — high-volume German keyword with direct product tie-in.
7. **Add comparison pages** for Prozubi, Cornelsen, and other competitors.
8. **Ensure `lastmod` in sitemap reflects actual content modification dates** (currently all same timestamp).

### Low Priority (When Resources Allow)
9. **Rename blog image files** to keyword-rich names.
10. **Add LocalBusiness schema** alongside Organization schema.
11. **Create a press/awards page** listing BMWE AI Prize and media mentions.
12. **Implement individual Review schema** for each testimonial.
