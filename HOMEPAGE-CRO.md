# Homepage CRO Analysis
## `/` and `/de`
### Analysis Date: 2026-05-26

---

## Overall CRO Score: 72/100

**Page type:** Mixed-audience marketing landing (companies + schools + agencies)
**Primary conversion:** Demo request via `#demo-request` modal (same as `/companies`)
**Secondary conversion:** Savings calculator → `/apprenticeship-savings-calculator`
**Benchmark conversion rate:** 5-10% good, 15%+ great (consultation booking)
**Heuristic estimate of current rate:** likely 1-3% (untracked) given multi-audience funnel and weak above-fold trust
**Realistic target after fixes:** 4-6%

Heuristic-only audit, no dashboard data. Findings below are de-duplicated against the `/companies` audit (LANDING-CRO.md) so fixes don't overlap.

---

## Section-by-Section Analysis

### 1. Hero Section [Score: 7/10]

**What works:**
- Problem-statement H1 with a gradient-coloured resolution line: *"Apprentices Without Direction. Trainers at Their Limit. **This Has to Change.**"* The two-sided framing (Azubi + Ausbilder) plus the imperative resolution lands hard.
- DE version is even sharper: *"Azubis ohne Plan. Ausbilder am Limit. **So geht Ausbildung nicht weiter.**"* — direct German register.
- Three-stat strip directly under the CTAs: `€15K · 50% · IHK & GDPR compliant`. Concrete proof above the fold.
- Two-CTA pattern: primary `Book My Free Demo` → modal; secondary `Calculate My Savings` → calculator. Captures both buyer-ready and ROI-curious visitors.
- **`AppMockup` component above the fold** — interactive in-page mockup of the LearnSlice app (IHK exam categories, chat sidebar, AI greeting). This is what `/companies` had to be retrofitted to; the homepage has had it all along. Strong.

**What hurts conversion:**
- **No "30+ German Ausbildungsbetriebe" trust line above the fold.** Same gap we just closed on `/companies`. The logo strip (`LogosSlider`) is the very next section, but a one-line numeric trust signal directly under the CTAs lifts CTR before the user has to scroll.
- **No Calendly fallback link.** `/companies` got one added; the homepage didn't. Same 1.5-2× demo-loop lift opportunity is sitting on the table here.
- **No risk-reversal microcopy** under the demo CTA (`30-min call · no pitch · reply within 1 business day`). Pattern already used in the modal; not surfaced at the hero CTA.
- **The "IHK & GDPR compliant" stat is a trust badge masquerading as a stat.** It sits in the same `value · label` strip as `€15K saved per apprentice` and `50% less trainer time` but conveys a category (compliance) not a measurement. Inconsistent rhetorical mode.
- **Headline at 11 words exceeds the ≤10 benchmark.** Both EN and DE versions. Land hard but tip slightly verbose for fast scanning.
- **Hero is `min-h-[90vh]`** (even taller than `/companies`' 75vh). On a 13" laptop that is the entire viewport — visitor sees no proof, no testimonial, no logos until they scroll. Tradeoff: forces attention on the H1, but starves the page of credibility above fold.

**Fixes (HIGH priority):**
1. Surface "Trusted by 30+ German Ausbildungsbetriebe" under the CTAs, above the stats strip.
2. Add the Calendly link as a third CTA (text-only, subtle): *"Or pick a 30-min slot directly →"*.
3. Add risk-reversal microcopy under the primary CTA.
4. Move "IHK & GDPR compliant" out of the stats strip (it is not a stat). Could become a small badge cluster *next to* the trust line, e.g., `✓ DSGVO · ✓ EU-hosted · ✓ IHK-aligned`.

---

### 2. Value Proposition [Score: 8/10]

**4U check:**
- **Useful:** ✓ Three concrete pains named in the stats strip (savings, trainer time, compliance).
- **Urgent:** ✗ No deadline, no cohort cycle, no "before Ausbildungsjahr-Start" hook.
- **Unique:** ✓ "AI learning paths + your company knowledge" is the differentiator; explicitly stated in the subhead.
- **Ultra-specific:** ✓ for `€15K` and `50%`, ✗ for `IHK & GDPR compliant` which is a yes/no claim.

**Subhead specifics:**
- EN at 21 words is long. Pulling apart the two ideas — *"From onboarding to IHK exam: AI learning paths + your company knowledge"* — would land each beat harder.
- DE at 17 words mirrors the EN structure. Same issue.

**Fixes (MEDIUM):**
1. Trim subhead to ≤15 words. Lead with what LearnSlice DOES (full apprenticeship cycle), then the differentiator (company knowledge), then drop the connector verbiage.
2. Add an urgency hook somewhere on the page — *"Set up before 1 August Ausbildungsjahr"* or *"New cohort onboarding starts every month"* — at least once near a CTA.

---

### 3. Social Proof [Score: 6/10]

**Present (below fold):**
- `LogosSlider` with 8 named entities including FH Dortmund, Universität zu Köln, Carl-Severing-Berufskolleg, Jäger Gruppe — strong, recognizable for the audience.
- `Testimonials` block with three named-person quotes (Tremonia, Wirtschaftsförderung Dortmund, Carl-Severing).
- `WhyChooseUs` carries the BMWE KI-Preis 2025 award and the FH Dortmund didactics partnership.

**Missing (above fold):**
- No "30+ companies" number visible.
- No award badge above fold — the BMWE KI-Preis 2025 win is buried in `WhyChooseUs` section ~7 sections down.
- No named-customer testimonial above the fold.
- No specific outcome-tied logo callout (e.g., "Jäger Gruppe: -40% trainer hours").

**Fixes (HIGH):**
1. Lift the BMWE KI-Preis 2025 badge into the hero area as a small "award badge" element. Real federal-government award = strong B2B trust signal for German Mittelstand.
2. (Covered by Section 1) Surface "30+ companies" line.

**Fixes (MEDIUM):**
3. Add a one-line testimonial under the hero with named person + company. Same playbook as `/companies` now uses.

---

### 4. Features and Benefits [Score: 8/10]

The homepage is unusually rich here — `HowItWorks`, `LearningResults`, `VocationalProfessions`, `CompanySlider` together cover the breadth. Pass.

**Minor gap:**
- `CompanySlider` segments three audiences (Companies / Schools / Agencies) with audience-specific bullets. But the segmentation only happens at section ~7 of the page; the hero CTAs above are generic. A visitor self-identifying as a school might bounce before reaching the relevant tab.

**Fixes (LOW):**
1. Optional: add a three-link audience selector immediately under the hero CTAs ("For Companies · For Schools · For Agencies") that jumps to the `CompanySlider` section or to `/companies`, `/schools`, `/agencies`. Lets visitors self-route.

---

### 5. Objection Handling [Score: 7/10]

**Strong:**
- `ProblemStatement` section follows the hero and quantifies the cost of inaction ("€20,000-€35,000 per failed apprenticeship"). Excellent agitation.
- `SavingsComparison` mirrors `/companies` and answers "what does this cost vs not". 
- FAQ section addresses standard objections.

**Gaps:**
- No risk-reversal microcopy at any CTA.
- Pricing transparency: no on-page price anchor. Buyers who want to know "is this €5k or €50k" leave to search. Acceptable for B2B custom-pricing but worth noting.
- "What if our trainer can't adopt it?" / "Will Azubis actually use it?" not addressed in FAQ — same gap flagged on `/companies`.

**Fixes (MEDIUM):**
1. Add risk-reversal microcopy near each major CTA. Same one used in modal: *"30-min call · no pitch · reply within 1 business day"*.
2. Audit FAQ content for trainer-adoption and azubi-engagement objections (covered once on `/companies` audit, applies here too).

---

### 6. Call-to-Action [Score: 7/10]

**Strong:**
- Primary CTA copy is strong, action-oriented, first-person framing.
- Secondary CTA splits intent — calculator vs demo — and the calculator is a real ROI tool, not a placeholder.
- CTAFooter at end of page repeats the primary CTA.

**Gaps:**
- No Calendly fallback (HIGH).
- No microcopy under primary CTA (MEDIUM).
- The final CTAFooter is the same component used on `/companies`; same generic copy. The closing CTA on the homepage could carry stronger ROI framing ("See your €15K savings in 30 minutes") than the current generic "Stop the Cycle".

**Fixes (HIGH):**
1. Add Calendly link as third CTA in hero (same code-pattern as `/companies`).

**Fixes (MEDIUM):**
2. Differentiate `CTAFooter` copy on the homepage from `/companies` — they currently share the same `cta` block in JSON. Consider lifting it from the `cta` key into per-page overrides.

---

### 7. Footer and Secondary Elements [Score: 7/10]

`CTAFooter` repeats the demo CTA. `Footer` carries imprint, privacy, terms. Standard.

**Missing:**
- No trust-badge cluster near `CTAFooter` (same as `/companies`).
- Header nav potentially competes with the hero CTA — common on marketing homepages, acceptable tradeoff because users need site navigation.

**Fixes (LOW):**
1. Add "DSGVO-konform · EU-hosted · IHK-aligned" badge strip in `CTAFooter` (same recommendation carries from `/companies`).

---

## Copy Score: 70/100

| Dimension | Score | Notes |
|---|---|---|
| Clarity | 9/10 | The offer is clear in <5 seconds. Two-sided problem framing lands. |
| Urgency | 4/10 | No deadline, cohort cycle, or scarcity element. Same gap as `/companies`. |
| Specificity | 8/10 | `€15K`, `50%`, `30%`, `12h/week` all present — among the stat strip and ProblemStatement. |
| Proof | 6/10 | Strong proof exists but buried below the fold. Above-fold has zero proof element. |
| Action Orientation | 8/10 | Primary CTA copy is strong. Multi-CTA path. Lose 2 points for no Calendly fallback and no microcopy. |

---

## Form Audit

Same `DemoRequestModal` used as on `/companies`. Already audited and polished in commits `62b7fa5` and `a9c4d44`. No homepage-specific form changes needed.

---

## Mobile Audit

**Pass:**
- Hero is `text-center` with stacked buttons (`flex-col sm:flex-row`). Works on small screens.
- `AppMockup` uses a CSS scale-transform on `<md:` to shrink the desktop mockup to fit mobile: `width: 180%; transform: scale(0.555); margin-bottom: -45%`. Clever, ships a desktop layout on mobile without rebuilding the mockup.
- All section components render responsively.

**Gaps:**
- **No sticky mobile CTA bar.** `/companies` got one in commit `3026f8b`. Homepage didn't. A visitor scrolling the long page on mobile loses the CTA after the hero.
- The `AppMockup` scale-transform creates a `margin-bottom: -45%` which can cause visual quirks on edge-case viewports (e.g., very wide tablets). Minor.

**Fixes (HIGH):**
1. Add the same sticky mobile CTA bar (with iOS safe-area padding) to `/` and `/de`.

---

## Page Speed Considerations

`AppMockup` is a complex inline component — many DOM nodes (chat sidebar, message bubbles, suggestion chips, etc.). Acceptable on desktop, but adds first-paint cost on mobile. Worth checking Largest Contentful Paint via Lighthouse on the live deploy. Not audit-blocking.

---

## A/B Test Recommendations

1. **Above-fold trust line.** *If we add "Trusted by 30+ German Ausbildungsbetriebe" + a 5-logo strip under the hero CTAs, then demo CTA CTR will rise ≥15% because pre-CTA social proof reduces the "is this legit" cognitive load.*

2. **Calendly third CTA.** *If we add a Calendly link as a third CTA in the homepage hero, then total demo flow conversions will rise 30-60% because calendar-confident buyers complete in seconds vs form-then-email latency.* This is the single biggest expected lift; same mechanism as the `/companies` change.

3. **Award badge above fold.** *If we lift the BMWE KI-Preis 2025 badge into the hero (small icon + text), then bounce drops 5-10% on the German Mittelstand audience because federal-government award is a category-leader trust signal.*

4. **Audience selector under CTAs.** *If we add three small chips (For Companies · For Schools · For Agencies) under the hero CTAs, then bounce drops on the non-company segments because they get a clear next step without scrolling 7 sections.*

5. **Headline brevity.** *If we cut the H1 from 11 words to 8 words while preserving the problem→resolution structure, then scan completion on mobile lifts because 8-word headlines fit one line at md and don't truncate.*

---

## Prioritized Fix List

### Quick wins (this week, ~2 hrs total)
1. **Add Calendly link as third CTA in homepage hero** (~10 min). Highest-impact single change. Pattern already exists in `/companies` — copy-paste.
2. **Surface "Trusted by 30+ German Ausbildungsbetriebe" line under the hero CTAs** (~10 min). Pattern exists.
3. **Add risk-reversal microcopy under primary hero CTA** (~5 min).
4. **Add sticky mobile CTA bar with iOS safe-area padding** (~15 min). Pattern exists.
5. **Move "IHK & GDPR compliant" out of the stats strip** into a badge cluster next to the trust line (~10 min). Mixed-mode-rhetoric fix.
6. **Lift BMWE KI-Preis 2025 award badge into the hero** as a small icon + text element above the trust line (~15 min).
7. **Trim subhead from 21 → ≤15 words** (~5 min).
8. **Audit `/de/companies` and `/companies` for parity** — these fixes should land identically on EN and DE (~the work above already does this).

### Medium-term (this month)
1. Differentiate `CTAFooter` copy between homepage and `/companies` (currently shares the same `cta` JSON block).
2. Add a one-line testimonial under the hero with named person + company.
3. Add audience-selector chips ("For Companies · For Schools · For Agencies") under hero CTAs.
4. Audit FAQ for the two missing objections (trainer adoption, azubi engagement).

### Strategic (this quarter)
1. Different headlines per audience-segmented variant — A/B test.
2. Lighthouse pass on mobile to check the `AppMockup` rendering cost.
3. Add price anchor or "Pricing" section if business model permits.
4. Replace the current `cta` JSON block with per-page overrides for marketing copy variety.

---

## Wireframe sketch — recommended hero rearrangement

**Current (vertical centred):**
```
[ section-label: AI-Powered Apprenticeship Training ]
[ H1: 3-line, with gradient on resolution ]
[ Subhead: 21 words ]
[ CTA primary ] [ CTA secondary ]
[ stats: €15K · 50% · IHK & GDPR compliant ]

[ AppMockup ]
```

**Recommended:**
```
[ section-label: AI-Powered Apprenticeship Training ]
[ ★ BMWE KI-Preis 2025 Winner ]    ← award badge added
[ H1: 8 words, problem→resolution ]
[ Subhead: ≤15 words ]
[ Trusted by 30+ German Ausbildungsbetriebe ]   ← trust line added
[ ✓ DSGVO · ✓ EU-hosted · ✓ IHK-aligned ]      ← compliance moved out of stats
[ CTA primary ] [ CTA secondary ] [ Calendly link ]
[ microcopy: 30-min call · no pitch · 1 biz day ]
[ stats: €15K · 50% · (one more numeric stat) ]

[ AppMockup ]
```

---

## Cross-reference notes

- Fixes 1-4 above duplicate patterns already shipped on `/companies` (commits `74b57f4`, `b8f5403`, `62b7fa5`, `3026f8b`). Implementation is mechanical.
- The unique homepage-only finding is the **BMWE KI-Preis 2025 promotion above the fold** — currently buried, easy lift, no equivalent on `/companies`.
- The `IHK & GDPR compliant` mixed-mode-rhetoric issue is a homepage-only call.
- All other gaps mirror what `/companies` had before its recent CRO pass.

## What dashboard data would sharpen this

Same caveat as the `/companies` audit. At ~56 organic clicks/week site-wide, no analytics tool will yield statistically significant conversion lift data for 4-8 weeks. The right move is to ship the Quick Wins and revisit measurement when traffic crosses ~500 weekly clicks.
