# Landing Page CRO Analysis
## `/companies` and `/de/companies`
### Analysis Date: 2026-05-26

---

## Overall CRO Score: 71/100

**Page type:** Consultation booking (demo request)
**Benchmark conversion rate:** Good 5-10%, Great 15%+
**Heuristic estimate of current conversion:** likely 2-5% (asynchronous demo loop, hidden trust signals, no self-serve calendar) — actual number requires Netlify Forms ÷ Simple Analytics pageviews
**Realistic target after fixes:** 6-9%

This audit is heuristic — code-grounded but not data-grounded. Where dashboard data would change the conclusion, that's flagged inline.

---

## Section-by-Section Analysis

### 1. Hero Section [Score: 6.5/10]

**What works:**
- H1 is benefit-driven and two-sided: *"Apprentices Productive Faster. Trainers Visibly Relieved."* — addresses both buyer (HR/CEO) and operator (Ausbilder).
- Primary CTA *"Book My Free Demo"* is strong, action-oriented, first-person framing.
- Secondary CTA *"See the ROI"* anchors to the savings section — good for users not yet ready to talk.
- `<span>` section-label *"For Companies"* gives micro-targeting before the H1.

**What hurts conversion:**
- **No hero visual.** The hero is text on a radial gradient background. No product screenshot, no dashboard preview, no animated learning path. B2B SaaS pages without a product visual underperform peers by 15-25% on time-on-page.
- **Em-dash in subheadline** breaks the no-long-dashes rule established across the recent SEO commits. *"From IHK exam prep to onboarding to upskilling — LearnSlice covers the full training cycle..."*
- **Trust signal hidden.** The line *"Join 30+ German companies already using LearnSlice"* exists inside the demo modal subhead but never surfaces on the page itself. That number should be visible above the fold.
- **Key metrics buried.** The 65% / €15K / 50% / 15% stats sit in their own section *below* the hero. They should run inline under the subhead or as a strip directly under the CTAs.
- **No risk-reversal microcopy** near the primary CTA. No "30-min call. No credit card. No pressure." line.

**Fixes (HIGH priority):**
1. Add inline trust line under the CTAs: *"Trusted by 30+ German Ausbildungsbetriebe"* + 4-5 customer logos.
2. Replace the em-dash with a colon or period.
3. Move the 4 stat-tiles directly under the subhead, not into a separate section.
4. Add a product visual to the right of the text (or as a background reveal) — even a static dashboard mockup beats an empty gradient.

---

### 2. Value Proposition [Score: 8/10]

**4U check:**
- **Useful:** ✓ Solves a concrete pain (slow time-to-productivity, trainer overload).
- **Urgent:** ✗ No "act now" element. No mention of cohort cycles, IHK exam dates, or budget timing.
- **Unique:** ✓ "IHK + onboarding + upskilling in one platform" differentiates from single-purpose tools.
- **Ultra-specific:** ✓ "6 months → 8 weeks", "€15K saved", "50% less trainer time" — all quantified.

**Fixes (MEDIUM):**
1. Add urgency tie-in: *"New cohorts start every Ausbildungsjahr — get set up before 1 August."*

---

### 3. Social Proof [Score: 5.5/10]

**Present:** LogosSlider component, Testimonials component, the hidden "30+ companies" line in the modal.

**Missing:**
- No specific result-tied testimonial above the fold.
- No case study links (audit also flagged this site-wide).
- No numerical outcomes paired with logos ("ACME GmbH: -40% trainer hours").
- No recent media mentions / "as seen in" strip if any exist.
- AggregateRating schema was removed in commit 1c03813 because it was unverified — no replacement.

**Fixes (HIGH):**
1. Surface the "30+ companies" number above the fold (currently only in modal).
2. Add a one-line testimonial under the hero with named person + company + outcome (real, not aspirational).
3. (Strategic) Pilot 1-2 customer case studies (matches the SEO audit's open E-E-A-T item).

---

### 4. Features and Benefits [Score: 7/10]

`HowItWorks` and `WhyChooseUs` components carry this well — three-step learning path frames the product clearly. `SavingsComparison` provides a before/after.

**Gaps:**
- Feature copy in `en.json` includes some "innovative", "revolutionary", "ganzheitlich"-flavour adjectives (per the banned-phrase list applied to blog content). Worth a sweep.
- No screenshot/GIF of the platform itself in any feature section.

**Fixes (MEDIUM):**
1. Add 2-3 product screenshots to `HowItWorks` (one per step).
2. Strip the marketing-adjective filler from `en.json` / `de.json` (apply the banned-phrase list used in the recent blog work).

---

### 5. Objection Handling [Score: 6/10]

`FAQ` component is present but I did not inspect its content (audit scope). Common objections that should be addressed:

| Likely objection | Currently addressed? |
|---|---|
| "Too expensive" | Partial — `SavingsComparison` and the calculator at `/apprenticeship-savings-calculator` |
| "Data sovereignty / GDPR" | Implicit (DSGVO-konform claim) — should be explicit "EU-hosted, AVV included" |
| "Not sure it fits our occupation" | Not addressed on /companies — IHK / craft / commercial fit not called out |
| "What if our trainer can't adopt it?" | Not addressed — no onboarding promise |
| "Will Azubis actually use it?" | Not addressed — no engagement stat ("85% of Azubis log in weekly") |

**Fixes (MEDIUM):**
1. Audit FAQ section content for these 5 objections.
2. Add a 2-line "GDPR-compliant + EU-hosted + AVV included" strip near the form.

---

### 6. Call-to-Action [Score: 7.5/10]

**Strengths:**
- CTA copy is strong: *"Book My Free Demo"* / *"Get My Free Demo"* (modal submit).
- Multiple conversion paths: hero, header nav, `LeadCapture` component, `CTAFooter`, modal.
- Modal flow uses URL hash (`#demo-request`) — bookmarkable, allows direct deeplinks from blog post CTAs.
- Submit button uses first-person framing.

**Friction:**
- **No self-serve calendar.** Every demo request is async: user fills the form → email reply → schedule. This is the single largest unforced conversion loss. Embedding Cal.com or Calendly as a third CTA ("Or pick a slot directly →") removes the latency tax. For comparison, calendar-self-serve B2B demo flows typically convert 1.5-2× the form-then-email variant.
- **No urgency or scarcity** at the CTA itself. Even *"Demos this week: 3 slots available"* (rotated, honest) lifts CTR.
- **No "what happens next" microcopy.** Under the submit button, add: *"We will respond within 1 business day with calendar options."*

**Fixes (HIGH):**
1. Add Cal.com / Calendly embed as a third CTA option. Single biggest demo-loop fix on the page.
2. Add "30-min call · no pitch · no credit card" microcopy below the submit button.

---

### 7. Footer and Secondary Elements [Score: 7/10]

`CTAFooter` repeats the primary CTA, `Footer` carries imprint/privacy/terms. Good.

**Missing:**
- No trust-badge cluster (compliance/security/EU-host) near the final CTA.
- No "Have a question? Email founder@..." direct-contact alternative for buyers who refuse forms.

**Fixes (LOW):**
1. Add a 3-badge strip near `CTAFooter`: "DSGVO-konform · EU-hosted · IHK-aligned".

---

## Copy Score: 72/100

| Dimension | Score | Notes |
|---|---|---|
| Clarity | 8/10 | A reader gets the offer in <5 seconds. Two-sided promise lands. |
| Urgency | 4/10 | No deadline, no scarcity, no cohort hook. |
| Specificity | 9/10 | Numbers are concrete and well-placed (65%, €15K, 50%, 15%). |
| Proof | 6/10 | Logos + testimonials exist, but "30+ companies" never surfaces; no named results. |
| Action Orientation | 9/10 | CTA copy is strong and first-person. Multiple conversion paths. |

---

## Form Audit (`DemoRequestModal.astro`)

**Structure:** 4 required fields (Name, Company, Email, Consent checkbox) + 1 optional (Message textarea, 3 rows).

| Item | Best practice | Current state | Verdict |
|---|---|---|---|
| Field count | 3-5 max | 4 required + 1 optional | OK |
| Labels | Sentence-case, visible | UPPERCASE, mono, tracking-wider | **Needs Work** — harder to scan on mobile |
| Submit button copy | Value-driven, first-person | "Get My Free Demo" / "Kostenlose Demo sichern" | Strong |
| Inline validation | Per field | HTML5 `required` only, no realtime feedback | OK for now |
| Error messaging | Specific | Generic — same message for any failure | **Needs Work** |
| Success messaging | Sets expectation | "Thank you! We will contact you soon." | **Needs Work** — no timing, no next-step |
| Risk reversal | Microcopy under CTA | None | **Needs Work** |
| Privacy/Terms | Linked | Yes, in consent line | Pass |
| Honeypot | Yes | `bot-field` present | Pass |
| Accessibility | Labels, ARIA | `aria-required`, focus trap on open | Pass |

**Top form fixes (effort/impact):**
1. **Switch labels to sentence-case** (`text-sm text-white`, not uppercase mono). 5-min change. Mobile readability lift.
2. **Add 1-line microcopy under submit:** *"30-min call · no pitch · we reply within 1 business day."* Reduces drop-off at hover.
3. **Improve success message** to *"Thanks. We will email calendar options within 1 business day from our team."*

---

## Mobile Audit

**Pass:**
- Buttons stack vertically (`flex-col sm:flex-row`).
- 16px+ body text via Tailwind defaults.
- Modal is `max-w-[520px]` + `max-h-[90vh] overflow-y-auto` — usable on small viewports.

**Gaps:**
- **No sticky CTA bar on mobile.** Long page; once user scrolls past the hero, no persistent way to convert without scroll-up.
- Hero `min-h-[75vh]` works on desktop but on small mobile (e.g. iPhone SE) eats the entire first screen with text only — exacerbated by no visual.

**Fix (MEDIUM):**
1. Add a sticky bottom CTA bar on mobile (visible after scroll past hero), styled as `position: sticky` with "Book Demo" button.

---

## A/B Test Recommendations

Format: *If [change], then [metric] will [direction] because [reason].*

1. **Hero with above-fold trust strip vs without.** *If we add a 30+ companies + logo strip directly under the hero CTAs, then demo CTA click-through will increase ≥15% because pre-CTA social proof reduces the "is this legit" cognitive load.*

2. **Calendar-self-serve vs form-only.** *If we add Cal.com embed as a third CTA option, then total demo submissions will increase 50-100% because we capture both calendar-confident users (who prefer self-serve) and form-confident users (who prefer async).* This is the single biggest expected lift.

3. **Hero with product screenshot vs gradient-only.** *If we add a static dashboard screenshot to the hero, then time-on-page increases ≥20% and CTA click-through ≥10% because B2B SaaS visitors expect to see the product before they request a call.*

4. **Move stats into hero vs separate section.** *If we surface the 4 stats (65%/€15K/50%/15%) directly under the subhead, then bounce rate drops ≥10% because the proof is co-located with the promise.*

5. **Form labels uppercase vs sentence-case.** *If we switch labels to sentence-case, then form completion rate increases 3-5% because lowercase labels are 1.4× faster to read.*

---

## Prioritized Fix List

### Quick wins (this week — total ~3 hrs of work)
1. **Replace em-dash in hero subhead.** 1 min. Consistent with the no-long-dashes rule across recent commits.
2. **Surface "30+ German companies" trust line above the fold.** 15 min. Hidden in modal today.
3. **Add risk-reversal microcopy under demo submit button** (*"30-min call · no pitch · reply within 1 business day"*). 5 min.
4. **Switch form labels from uppercase mono to sentence-case.** 10 min. Mobile readability.
5. **Improve success message** to specify timing and next step. 5 min.
6. **Move the 4 stat-tiles into the hero** (or right under it). 30 min layout change.
7. **Strip marketing-adjective filler** ("innovative", "ganzheitlich", etc.) from `en.json` / `de.json`. 30 min sweep — same banned-phrase list used in the recent blog work.

### Medium-term (this month — total ~1-2 days)
1. **Embed Cal.com / Calendly as a third CTA option** ("Or pick a slot directly →"). Highest-impact single change on the page.
2. **Add a hero product visual** — static screenshot or short loop.
3. **Add a sticky mobile CTA bar.**
4. **Add a one-line named-customer testimonial under the hero.**
5. **Add explicit GDPR / EU-hosted / AVV badge cluster** near the form.

### Strategic (this quarter)
1. **Publish 2-3 customer case studies** with named companies and outcomes. Carries over from the SEO audit's open E-E-A-T item.
2. **Add named author/expert bios** for the blog (also from SEO audit), increasing trust on the upstream traffic source.
3. **Build a comparison-on-page section** (e.g. vs. Prozubi) embedded on `/companies` rather than only on dedicated `/learnslice-vs-*` pages.
4. **Test long-form vs short-form `/companies`** variant.

---

## Wireframe sketch — recommended hero rearrangement

**Current (vertical):**
```
[ section-label: For Companies ]
[ H1 — 2 lines, benefit ]
[ subhead — 3 lines, em-dash, savings figure at end ]
[ CTA primary ] [ CTA secondary ]

(scroll)
[ stats: 65% | €15K | 50% | 15% ]
```

**Recommended:**
```
[ section-label: For Companies ]                  [ product visual ]
[ H1 — 2 lines, benefit ]                         [ static screenshot ]
[ subhead — colon-separated, no em-dash ]         [ or short loop ]
[ CTA primary ] [ CTA secondary ] [ Cal.com link ]
[ microcopy: 30-min call · no pitch · 1 biz day ]
[ stats strip: 65% | €15K | 50% | 15% ]
[ trust line: Trusted by 30+ German Ausbildungsbetriebe ]
[ 5-logo strip ]
```

---

## What dashboard data would sharpen this

If you can share these later, the analysis tightens significantly:
- **Simple Analytics:** top pages by visits last 30 days, bounce rate on `/companies` and `/de/companies`, referrer breakdown
- **Netlify Forms:** total `demo-request` submissions last 30 days, time-series
- **Together:** the actual conversion rate (submissions ÷ /companies pageviews), which tells us whether the issue is upstream traffic, the landing page itself, or the form

---

# Homepage Hero CRO Addendum
### Analysis Date: 2026-05-28 — `/` and `/de`

**Hero verdict: ~7.5/10.** Strong fundamentals (clear ICP, BMWE award badge, compliance
trust line DSGVO/Server-DE/IHK, quantified outcome strip, premium dark/purple design, product
"peek" inviting scroll). Gaps below.

## Findings
1. **Headline is 100% problem, 0% payoff.** "Azubis ohne Plan. Ausbilder am Limit. So geht
   Ausbildung nicht weiter." — the largest element conveys only pain, and the **negative** line
   is highlighted in brand purple (usually you highlight the transformation). The value prop lives
   only in the subhead. Works for pain-aware traffic; risky for colder visitors. → A/B test below.
2. **Unqualified savings stat** — hero stat said "€15K Ersparnis pro Azubi" while the rest of the
   site (and the calculator basis) now says "Bis zu €15K". §5 consistency gap. **FIXED** →
   `en.json`/`de.json` hero stat now "Up to €15K" / "Bis zu €15K".
3. **No risk-reversal microcopy** under the primary demo CTA. **FIXED** → added "Unverbindlich ·
   30 Minuten · keine Vorbereitung nötig" / "No-obligation · 30 minutes · no prep needed" under
   the CTA group in `Hero.astro`.
4. **Thin social proof in-slot** — "30+ Unternehmen" is modest; surface a recognizable logo or the
   named-customer (Tremonia) testimonial in the hero. (Open.)
5. **Loose vertical rhythm** — empty band above the H1 pushes CTAs ~60% down the viewport; tighten
   top spacing so the CTA sits higher (esp. laptop/mobile fold). (Open.)

## A/B test — headline (highest upside)
"If we make the highlighted line the *outcome* instead of the *problem*, demo-CTA click-through
rises, because the largest element finally answers 'what do I get'."

- **A (control):** "Azubis ohne Plan. Ausbilder am Limit. So geht Ausbildung nicht weiter."
- **B (hybrid, pain hook → outcome):** "Azubis ohne Plan? Ausbilder am Limit? **Vom ersten Tag bis
  zur IHK-Prüfung — alles in einer Plattform.**" (purple = the outcome line)
- **C (outcome-led):** "**Azubis, die in Wochen Leistung bringen — nicht in Monaten.**"
- **D (value + mechanism):** "**KI-Lernpfade + Ihr Unternehmenswissen — Azubis schneller
  einsatzbereit.**"

## Prioritized
- **Quick wins (done):** "Bis zu €15K" stat; CTA risk-reversal microcopy.
- **High upside (next):** headline A/B test (B/C/D vs control).
- **Medium:** surface a client logo / Tremonia testimonial in the hero; tighten hero top spacing.
- **Needs live page:** mobile CTA fold position, page speed, below-fold flow.
