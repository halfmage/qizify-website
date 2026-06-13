# Landing Page CRO + Findability Analysis
## /solutions (EN) and /de/loesungen (DE)
### Analysis Date: 2026-06-13 (refresh; prior pass 2026-06-12 scored 63/100)

---

## Overall CRO Score: 72/100
## Page Type: Consultation Booking (primary goal: book a free strategy call / submit `project-inquiry` modal)
## Current Estimated Conversion Rate: 5-8% (B2B services, mixed-intent)
## Target Conversion Rate: 10-13%

**What improved since the last pass:** four use-case rows with real product screenshots (strong, specific proof of capability), a mid-page CTA (third touchpoint), a cleaner FH-Dortmund story, and a new human hero photo. **What got weaker:** removing the proof section (100% / 80% pilot stats + lecturer quote) stripped the page of almost all *quantified delivery proof* right when a buyer is deciding. The remaining conversion gaps are mechanics, proof alignment, and a nav that fights the page.

The two goals you named map cleanly:
- **"Convert people to get in touch"** = fix CTA conflicts, add buyer-relevant proof, reduce form friction, add risk reversal.
- **"Find us online"** = the technical SEO is already excellent; the gap is keyword-targeted copy/headings and service-level structured data.

---

## Section-by-Section

### 1. Hero [7/10] — Weight 25%
**Findings**
- Headline "Your learning software, engineered end to end" is clear but describes *what we do*, not the *outcome the buyer gets*. It is brand voice, not search/benefit voice.
- Primary CTA ("Book a strategy call" -> modal) is above the fold with good microcopy ("Free 30-minute call. No pitch, a concrete roadmap.").
- **Secondary CTA "See the research" sends high-intent visitors OFF this page** to /research — the exact narrative you just de-emphasized here. That is a conversion leak at the most valuable moment.
- **No social proof above the fold.** First impression carries zero logos, numbers, or names.
- New human hero photo is a real improvement over generic stock.

**Fixes**
- (HIGH) Replace the secondary CTA "See the research" with an on-page anchor like "See our work" -> `#selected-work`, or "Explore what we build" -> the catalog. Keep attention on this page.
- (HIGH) Surface one proof line + 2-3 client logos directly under the hero: e.g. "Trusted by universities, schools, and learning communities" with FH Dortmund / International School Stuttgart / a partner mark. You already use this exact line in the meta description.
- (MEDIUM) A/B a more outcome-led headline, e.g. "From idea to launched learning product — engineered end to end" or "Custom learning software, built and shipped for you."

### 2. Value Proposition [7/10] — Weight 20%
**Findings**
- Clear *what* and *for whom*. Differentiators exist (sovereign, German-hosted, EU AI Act, end-to-end, builds on Moodle, university-validated) but are scattered across the page rather than stated as a crisp "why us" near a decision point.
- 4U check: **Useful** yes, **Unique** yes (sovereignty/compliance angle), **Ultra-specific** partial (services aren't quantified), **Urgent** no.

**Fixes**
- (MEDIUM) Add a compact "Why teams choose us" strip (3-4 differentiators) just before or after "Selected work": Sovereign & EU-AI-Act-ready · German-hosted · You own the IP · From idea to pilot fast.
- (LOW) Pull the strongest differentiator into the hero subhead.

### 3. Social Proof [5/10] — Weight 15% — biggest lever
**Findings**
- Logos band ("You are in good company") is good, but it sits low on the page.
- **Testimonials are off-target and have no photos.** They are product/apprenticeship voices (Apprentice Industrial Clerk, Employment Promotion, Director of Studies) — none speak to a buyer commissioning *custom software*. A services buyer needs to hear from someone who *had something built*.
- Quantified delivery proof was removed with the proof section; the only numbers left are industry market stats (not your results).

**Fixes**
- (HIGH) Add 1-2 client/partner testimonials about the *build experience* — skillzUP (Moodle), the FH Dortmund deployment, or a B2B buyer — with name, role, company, and photo. Photos + company lift testimonial persuasion materially.
- (HIGH) Add 1-2 honest delivery metrics if true: products shipped, time-from-idea-to-pilot, platforms live, users served. Even "3 products shipped with partners" beats zero.
- (MEDIUM) Move the logos band higher (under hero) or duplicate a slim version near the top.

### 4. Features & Benefits [8/10] — Weight 15%
**Findings**
- The 12-card "What we build" catalog + four alternating use-case rows with real screenshots is the strongest part of the page: scannable, specific, benefit-oriented, and now grid-balanced.

**Fixes**
- (LOW) Each use-case row could end with a soft inline CTA ("Talk to us about a build like this") to convert at the point of interest.

### 5. Objection Handling [6/10] — Weight 10%
**Findings**
- FAQ (10 Q, with FAQPage schema) covers cost, timeline, engagement models, compliance — good.
- Sovereignty/compliance section addresses the data-safety objection well.
- **Missing the two biggest B2B services objections near the CTA:** "Is my IP/idea safe?" and "Will this actually ship?" No risk reversal anywhere (no NDA mention, no no-obligation, no delivery guarantee).

**Fixes**
- (HIGH) Add a risk-reversal line under each CTA: "No obligation. NDA on request. We reply within 1 business day." (The footer already promises 1-day reply — promote it to the hero and mid CTA.)

### 6. Call-to-Action [7/10] — Weight 10%
**Findings**
- Three touchpoints now (hero, mid-page, footer) — good distribution.
- Copy is value-led ("Book a strategy call") with strong microcopy.
- **Conflict:** the global header CTA is "Book Free Demo" (a *different* offer/flow) while the page's own CTA is "Book a strategy call" -> `project-inquiry`. Two competing primary actions split intent. The mega-nav (Product / Customers / Blog / FAQ, many off-page links) also pulls attention away.

**Fixes**
- (HIGH) Make the action consistent on this page: either align the header CTA to the same `project-inquiry` action, or accept the demo CTA but ensure the page body funnels to ONE offer. Don't present "demo" and "strategy call" as rival primaries.
- (MEDIUM) Add a fourth CTA after "Industries we build for" / before FAQ, or a sticky mini-CTA on scroll for mobile.

### 7. Footer & Secondary [7/10] — Weight 5%
**Findings**
- Strong closing CTA with risk-reduction note and legal links.
- Global nav remains a leak on a page meant to convert.

**Fixes**
- (LOW) Consider a lighter header on this page (logo + single CTA) — common for dedicated landing pages.

---

## Copy Score: 64/100
| Dimension | Score | Notes |
|---|---|---|
| Clarity | 8/10 | Offer is understandable in 5s. |
| Urgency | 4/10 | No reason to act now. Market stats hint at it but don't push. |
| Specificity | 6/10 | Services not quantified; proof numbers are industry-level, not yours. |
| Proof | 6/10 | Use-case screenshots strong; testimonials/metrics weak after proof-section removal. |
| Action Orientation | 8/10 | Clear next step, good microcopy, 3 CTAs. |

---

## Form Audit (`project-inquiry` modal)
- Fields: name, organisation, email, project-type, timeline, message, consent (~6 + consent). Higher than the 3-5 ideal; each extra field ~ -7%.
- **Fixes:** require only name + email + message; mark project-type and timeline **optional** (keep them for qualification). Ensure `type="email"`/`tel` inputs for mobile keyboards. Inline validation, don't clear the form on error.
- Good: honeypot, consent with linked privacy/terms, Calendly fallback link inside the modal.

## Mobile
- Astro static + WebP + lazy-loading + explicit width/height (no CLS) = fast. Hero is `fetchpriority=high`. Likely < 2s.
- **Fix:** add a sticky bottom CTA bar on mobile (thumb-reachable) — high impact on long pages.

## Page Speed
- Strong. WebP everywhere, lazy below the fold, eager hero. No obvious render-blocking. Keep an eye on total hero weight (new hero 160 KB is fine).

---

## Findability (be found online) — technical foundation is excellent
**Already in place (good):** title, meta description, canonical, OG + Twitter cards, hreflang (en / de / x-default), and rich JSON-LD — Organization, SoftwareApplication, WebSite, BreadcrumbList, **FAQPage**, ContactPoint, PostalAddress. Sitemap + IndexNow. This is better than most competitors.

**Gaps / opportunities:**
- (HIGH) **Keyword-targeted H1 + title.** H1 "Your learning software, engineered end to end" has no commercial search terms. People search "custom LMS development", "Moodle development company", "e-learning software development", "AI tutor development". Work these into the H1/H2s and the `<title>` (e.g. "Custom Learning Software Development: LMS, Moodle, AI Tutors | LearnSlice").
- (MEDIUM) **Service / OfferCatalog JSON-LD** enumerating the 12 services (Moodle setup, LMS development, AI tutors, etc.) — strengthens entity coverage for service queries.
- (MEDIUM) **More indexable body copy.** The page is card/image-heavy; search needs text. Each catalog/use-case section can carry 1-2 more sentences of keyword-natural prose.
- (STRATEGIC) **Per-service landing pages** for long-tail (e.g. /solutions/moodle-development, /solutions/custom-lms) — strongest organic lever, bigger build.
- (OFF-PAGE) Google Business Profile, LinkedIn company page, relevant German ed-tech/agency directories, and internal links from the blog posts into /solutions for topical authority.

---

## Prioritized Fix List

### Quick Wins (this week) — biggest conversion impact, low effort
1. **Swap the secondary hero CTA** from "See the research" (off-page) to "See our work" -> `#selected-work`. Stops leaking high-intent clicks.
2. **Add risk reversal** under the hero + mid CTAs: "No obligation. NDA on request. Reply within 1 business day."
3. **Surface proof above the fold:** "Trusted by universities, schools, and learning communities" + 2-3 logos under the hero.
4. **Make project-type / timeline optional** in the form; require only name, email, message.
5. **Resolve the CTA conflict** between the page ("strategy call") and the nav ("Book Free Demo").

### Medium-Term (this month)
1. Replace/augment testimonials with 1-2 **client/partner build testimonials + photos** (skillzUP, FH Dortmund, a B2B buyer).
2. Add 1-2 **honest delivery metrics** (products shipped, idea-to-pilot time).
3. Add a **"Why teams choose us"** differentiator strip near "Selected work".
4. Add a **sticky mobile CTA** bar.
5. **Keyword-optimize H1 + `<title>`** for commercial intent.

### Strategic (this quarter)
1. Per-service SEO landing pages (Moodle, custom LMS, AI tutor).
2. Service/OfferCatalog structured data.
3. Off-page presence (GBP, LinkedIn, directories, blog->solutions internal links).

---

## A/B Test Hypotheses
1. If we replace the secondary hero CTA with an on-page anchor, then primary-CTA clicks will rise because we stop diverting high-intent visitors off-page.
2. If we add a proof line + logos above the fold, then form-open rate will rise because trust is established before the ask.
3. If we add "NDA on request / reply within 1 business day" near the CTA, then submission rate will rise because the top B2B objection (IP risk + ghosting) is pre-empted.
4. If we make 2 form fields optional, then form-completion rate will rise ~10-15% because friction drops.
5. If we add a client testimonial with a photo near the mid CTA, then mid-CTA conversion will rise because peer proof sits at the decision point.
