# Role Clarity and Delivery Reliability Check (Draft)

**Status:** PARKED 2026-09-11. Not built, and not next.

> **Why parked.** This probe and `ai-guide-probe.md` use the same component, the same
> audience, the same LinkedIn slot and the same weeks. Running both splits the signal
> and doubles the build. The AI probe won on evidence: the profession states its own
> demand directly (93% of product managers want to learn more about AI tools, and half
> of the non-users say the blocker is not knowing how), where this draft rests on an
> inferred need. The AI probe also tests the product we intend to build next.
>
> Nothing here is wasted. The benchmark source is the same survey, the page mechanics
> carry over unchanged, and question D10 on verifying AI output survives as Q4 of the
> AI probe. Revisit if the AI probe fails its thresholds and we still want an English
> audience outside DACH.

**Original status:** Draft for approval. Not built.
**Date:** 2026-09-09
**Language:** English first, international audience. No German counterpart planned yet.
**Pattern:** Same mechanics as `/de/digital-readiness-check` (component `ReadinessCheck.astro`).
**Supersedes:** `rollen-check-draft.md` (DACH-framed version, removed).

---

## 1. What this is, and what it is not

This is a **probe**, not a lead magnet. The distinction matters and should govern
every decision below.

A lead magnet feeds a sales motion. Our sales motion is DACH warm referrals for
custom engineering, and an English assessment aimed at product managers in other
markets feeds none of it. So the goal here is not pipeline. The goal is to find
out, cheaply, whether product people outside our home market engage with a problem
we think is real, before committing to anything larger.

The 2026-07-06 service ICP validation applies and is not overridden by this
document. Sovereignty and EU hosting are a procurement gate in DACH and close to
worthless elsewhere, so **this artifact makes no sovereignty claim at all.** It
competes on the quality of the insight or not at all.

### Success criteria

| Signal | Threshold to consider this worth continuing |
|---|---|
| Completion rate of people who start | Above 60% |
| Share who request the full report | Above 25% of completions |
| Unprompted replies or questions | Any at all is meaningful at this volume |
| Geography of completions | Majority outside DACH |

If completion is low, the problem is not real enough to build on. That is a useful
answer and it costs days, not quarters.

## 2. The hook

> Product teams with clearly defined responsibilities hit their deadlines 78% of
> the time. When roles are unclear, that drops to 48%.

Every figure in this check comes from the **Product Focus Survey of the Product
Management Profession 2026**: 677 respondents across 40 countries, fielded October
2025 to January 2026. No vendor statistics, no secondary sources. Attribution is
shown on the page, because the benchmark is the entire value of the thing.

## 3. Audience

Product managers, product owners and heads of product in organisations where the
product is hardware, software and services at once. Industrial, manufacturing,
medical devices, instrumentation, automotive supply.

From the same survey: Manufacturing and Engineering is the largest single industry
at 21%, ahead of Software and SaaS at 20%. 48% manage physical products, 43%
services, 13% all three at once. That group falls between PLM systems and Jira and
is served badly by both. This is a global segment, not a European one.

## 4. Entry question (unscored, branches)

**How are product decisions made in your organisation today?**

- A dedicated product function with defined roles → full path
- Product decisions are made with the executive team → full path
- Engineering and sales decide together, with no dedicated product role → early path
- We are building the product function right now → early path

The early path ends in an encouraging "foundation" result rather than a maturity
score that only discourages, matching the existing check.

## 5. The ten scored questions

Scored 0 to 3 each, maximum 30, reported as a percentage.

### D1 Role clarity
**Are responsibilities in your product work unambiguously defined?**
- 3 Every area has a named owner, written down
- 2 Clear at the core, negotiated at the edges
- 1 Depends on who is involved
- 0 Not defined, we work it out case by case

*Benchmark: 41% of respondents say their roles are not clearly defined.*

### D2 Primary metric
**Is there a single metric each product person is held accountable for?**
- 3 Yes, one per person, and everyone knows it
- 2 Yes, but several at once
- 1 Exists at company level, not per role
- 0 No

*Benchmark: 34% have no clear primary metric.*

### D3 Decision rights
**On a contested product decision, is it clear who decides and who is only consulted?**
- 3 Yes, the deciding person is named in advance
- 2 Usually, though larger questions escalate
- 1 Settled case by case, which costs time
- 0 No, decisions stall or get made twice

### D4 Strategy as a prioritisation test
**Can your teams prioritise requests against a clear company strategy?**
- 3 Yes, the strategy is concrete enough to say no with
- 2 It exists but is too general to decide with
- 1 It is known but never actually referenced
- 0 There is no usable strategy

*Benchmark: 33% report a weak or missing company strategy.*

### D5 Unplanned work
**How often does unplanned work disrupt your product plan?**
- 3 Rarely, interruptions follow a defined route
- 2 Sometimes, with a noticeable effect on dates
- 1 Frequently, the plan is more intention than plan
- 0 Constantly, we work reactively

*Benchmark: 60% are frequently disrupted by unplanned activity. Too much
firefighting is the most cited problem in the survey at 58%.*

### D6 Process fit
**Does your development approach match what you actually build?**
- 3 Hardware and software each have a fitting, interlocking model
- 2 Mostly, though the interfaces are rough
- 1 One model is imposed on every part
- 0 The approach is historical and has never been questioned

*Benchmark: 88% use a mixture of agile and waterfall. Waterfall teams hit
deadlines 44% of the time, agile teams 69%.*

### D7 One plan across hardware, software and services
**Do the hardware, software and service parts of your product share one plan?**
- 3 Yes, one view across all three, with dependencies
- 2 Two of the three are connected
- 1 Separate systems, reconciled by hand
- 0 Separate systems, reconciled by nobody

*This is the gap between PLM and Jira. No vendor currently spans it.*

### D8 Customer and market time
**Do your product people spend enough time with customers and the market?**
- 3 Yes, regular and scheduled contact
- 2 Irregular, usually driven by events
- 1 Rarely, sales reports on their behalf
- 0 Effectively none

*Benchmark: 71% say they do not spend enough time with customers. Among heads and
directors it is worse, at 75%.*

### D9 Reporting line
**Where does your product function report?**
- 3 To the executive team or a dedicated product leader
- 2 To a commercial unit
- 1 To engineering or IT
- 0 To sales

*Benchmark: where product reports to a product leader, 80% see it as a leadership
function. Under engineering or sales that falls to around 50%.*

### D10 Verification step for AI output
**Is there a defined check before an AI draft becomes a requirement?**
- 3 Yes, defined and documented
- 2 Yes, but informal and person-dependent
- 1 Only when someone remembers
- 0 No, drafts pass through unchecked

*Benchmark: 97% report higher personal productivity from AI, but only 64% report
better product outcomes. 85% validate AI output with their own expertise, and every
documented failure in the survey involved unverified output.*

## 6. Context questions (unscored)

- **Role:** Executive / Head of Product / Product Manager / Product Owner / Engineering / Other
- **Product type:** mostly hardware / mostly software / hardware and software / plus services
- **Size of product function:** 1 to 2 / 3 to 10 / 11 to 50 / more than 50
- **Region:** free select, needed to test whether reach goes beyond DACH
- **Biggest obstacle:** roles / prioritisation / tooling / capacity / strategy

## 7. Result bands

| Points | Percent | Band | Message |
|---|---|---|---|
| 24 to 30 | 80 to 100 | Reliable | Roles and metrics hold. Focus on scale. |
| 17 to 23 | 57 to 79 | Solid with gaps | One or two dimensions are costing you dates. |
| 10 to 16 | 33 to 56 | Inconsistent | Delivery depends on specific individuals. |
| 0 to 9 | 0 to 32 | High delivery risk | No tool will help until roles are settled. |

The percentage is shown **ungated**, as on the existing check. Only the full report
asks for an email.

## 8. The gated report

1. **The two weakest dimensions**, named, each with its benchmark figure, so the
   verdict reads as data rather than opinion.
2. **One first step per dimension** that needs no budget. For D1: name an owner for
   the five most contested current topics and write it down.
3. **Where the respondent sits against the benchmark** for each dimension.
4. **One question back to them**, not a pitch. Something like: which of these would
   you actually want help with? At probe stage, replies are worth more than leads.

Point 4 is deliberate. A sales call to an international stranger is the motion our
own validation found to be weak. A question is cheap and generates the learning
this exercise exists for.

## 9. Page

- **URL:** `/product-delivery-check`, English, registered in `EN_ONLY` in
  `src/utils/page-pairs.mjs` since there is no German counterpart yet.
- **Title:** Product Delivery Check: Why Teams Miss Dates
- **Description:** See how clear the roles, metrics and decision paths are in your
  product organisation, in three minutes. Benchmarked against a survey of 677
  product professionals across 40 countries.
- **H1:** Clear roles hit deadlines 78% of the time. Unclear roles hit 48%.
- **Static, ungated SEO body**, H2 outline:
  1. What the survey shows about role clarity and hitting dates
  2. Why the primary metric is missing more often than you would expect
  3. Hardware, software and services in one plan
  4. Agile, waterfall, or both: what the numbers say
  5. AI made product managers faster, not better
- **FAQ** with FAQPage schema, five or six questions
- **Disclaimer:** orientation, not organisational consulting
- **No sovereignty or EU hosting claim anywhere on the page.**

## 10. Distribution

This is the part that decides whether the probe works, and we have no international
domain authority. Roughly 90% of current search impressions are German
apprenticeship queries, so search will deliver nothing here for a long time.

The channel that already exists is the CEO's weekly English LinkedIn post. The
78 against 48 finding fits that format exactly: a real number, an honest limit, a
prediction, and a question. Publishing the finding and linking the check in the
first comment costs nothing and reaches the right audience in the right language.

Secondary, in rough order of effort: product management communities such as Mind
the Product and the relevant subreddit, then Product Hunt if the check stands on
its own as a tool. Paid acquisition makes no sense at probe stage.

## 11. Build notes

- Copy `ReadinessCheck.astro`, do not extend it. The existing component is shaped
  around AZAV and BFSG and should stay that way.
- New Netlify form name, `delivery-check`, so leads stay separate.
- Result tables at five columns maximum. The prose CSS silently clips wider tables
  on narrow screens.
- No em or en dashes in the copy, house rule.
- Capture region in the context questions. Without it we cannot evaluate the one
  success criterion that matters most.

## 12. Open questions

1. Keep D9 (reporting line)? It is the sharpest predictor in the data and also the
   most uncomfortable question if the person answering is the reporting line.
2. Is the industrial and manufacturing framing right, or should the check address
   all product organisations? Broader reach, weaker signal.
3. Are we willing to publish this without a sales call attached? The probe only
   produces clean learning if we do.
