# AI in Product Management Check: online demand probe

**Status:** Draft for approval. Not built.
**Date:** 2026-09-11
**Purpose:** find out whether product managers and product owners want an AI guide
from us, before any agent is built.
**Pattern:** same mechanics as `/de/digital-readiness-check` (component
`ReadinessCheck.astro`).
**Evidence base:** `docs/product/ai-coach-agent-research.md`, section 3b.
**Scheduling conflict:** resolved 2026-09-11. `role-clarity-probe.md` is parked. See section 12.

---

## 1. What this tests, precisely

Three claims, in order of how much they matter.

1. **Demand.** Will a product manager give an email address for an AI guide from a
   vendor they have never heard of, in a market where the tool makers give away their
   own guidance for free.
2. **Shape.** Which part of their AI practice they want help with first. This decides
   what the guide, and later the agent, is actually about.
3. **Agent appetite.** Whether they want something recurring or a one-off read.

It does not test price or whether an agent can deliver any of it. Retention it does
test, indirectly, through the weekly update the guide ends with. That is deliberate:
retention on a weekly recommendation is the nearest thing to evidence that a recurring
assistant has a market.

**The probe offers a guide, not an agent.** The agent appears once, as a single
question after the email is given. That ordering keeps the primary signal clean and
avoids promising something that does not exist.

## 2. Why probe at all

The research already establishes appetite in the profession: 93% of product managers
say they want to learn more about AI tools, and half of those not using AI say the
reason is that they are unsure how. What no public survey can establish is whether
that appetite converts **against us**. That is the whole question, and it costs weeks
rather than quarters to answer.

## 3. The hook

> 97% of product managers say AI made them faster. Only 64% say it made their product
> better.

Every figure in this check comes from the **Product Focus 2026 Survey of the Product
Management Profession**: 677 respondents across 40 countries, fielded October 2025 to
January 2026. Attribution is shown on the page, because the benchmark is the value of
the thing. Note the sample is 83% Europe and 8% US, and say so if anyone asks.

No other source is quoted in the check itself. Mixing surveys weakens it.

## 4. Audience

Product managers, product owners and heads of product. Any industry, any country,
English only.

Deliberately **not** narrowed to hardware plus software organisations the way the
role-clarity draft was. That narrowing served a different question. Here it only cuts
reach, and the AI gap is not specific to physical products.

**No sovereignty claim, no EU hosting claim, no German law anywhere on the page.** The
2026-07-06 ICP validation applies: those arguments are a procurement gate in DACH and
close to worthless elsewhere. This competes on the quality of the insight or not at all.

## 5. Entry question (unscored, branches)

**How often do you use AI in your product work?**

- Daily → full path
- A few times a week → full path
- Occasionally → full path
- Not yet → short path, three questions, ends with a starter guide rather than a score

*Benchmark: 69% of product managers now use AI frequently or very frequently, up from
49% a year earlier.*

The short path matters. People who do not yet use AI are the group whose problem we
most directly claim to solve, and half of them say the blocker is not knowing how.
They must not be bounced out with a score that only discourages.

## 6. The eight scored questions

Scored 0 to 3 each, maximum 24, reported as a percentage. Eight, not ten. Completion
rate is the first success criterion and every extra question costs some of it.

### Q1 Breadth
**Where does AI actually show up in your product work?**
- 3 Discovery, analysis and writing, in several places every week
- 2 Two or three recurring tasks
- 1 Mostly drafting text
- 0 Nowhere yet

### Q2 Depth
**When the first answer is not good enough, what do you do?**
- 3 I iterate using a prompt pattern I have saved and reuse
- 2 I rewrite the prompt until it works
- 1 I try once more, then do it by hand
- 0 I give up on it

*Benchmark: 22% of AI users regularly use three or more different tools.*

### Q3 Context
**What do you give the model to work with?**
- 3 My own research, tickets and data, with a clear rule on what must not go in
- 2 My own material, decided case by case
- 1 A short description from memory
- 0 The question on its own

### Q4 Validation
**Before AI output reaches a stakeholder, what happens to it?**
- 3 A defined check that is written down
- 2 I check it against my own expertise every time
- 1 Only when something looks wrong
- 0 It goes out as it came

*Benchmark: 85% of product managers validate AI output with their own expertise.*

### Q5 From output to outcome
**Has AI changed anything a stakeholder would notice?**
- 3 Yes, and I can name the change
- 2 Faster internally, unclear outside the team
- 1 It saves me time and nothing else
- 0 No

*Benchmark: 97% report better personal productivity, but only 64% report better
product outcomes. This is the gap the whole check is built around.*

### Q6 Boundaries
**Do you know what you are allowed to put into which tool?**
- 3 There are written rules and I follow them
- 2 There is an informal understanding
- 1 I guess, and stay cautious
- 0 No idea

*Benchmark: 17% of product managers who avoid AI name legal or security reasons.*

### Q7 Tool fit
**How did you end up with the tools you use?**
- 3 Chosen per task, because I know where they differ
- 2 One main tool, a second for specific jobs
- 1 Whatever the company provided
- 0 Whatever happened to be open in a tab

*Benchmark: 66% of AI users use ChatGPT regularly, with Copilot second.*

### Q8 Learning routine
**How do you keep up?**
- 3 A regular habit, and I pass it on to my team
- 2 I follow a few sources
- 1 When something crosses my feed
- 0 Not at all

*Benchmark: 93% of product managers say they want to learn more about AI tools.*

## 7. Context questions (unscored)

- **Role:** Head of Product / Product Manager / Product Owner / Other. This also
  decides which of the two guides the gate delivers, so it is not optional
- **Country:** free select. Not optional. Without it the international question cannot
  be answered at all.
- **Company size:** 1 to 50 / 51 to 500 / 501 to 5,000 / more than 5,000
- **Who provides your AI tools:** the company / I use my own / both / none

## 8. Result bands

| Points | Percent | Band | Message |
|---|---|---|---|
| 20 to 24 | 83 to 100 | Compounding | Your practice is ahead of the benchmark. The gap is your team, not you. |
| 14 to 19 | 58 to 79 | Productive | You are faster. Turning that into product outcomes is the step only 64% of your peers have made. |
| 8 to 13 | 33 to 54 | Ad hoc | Real use, no method. This is where the largest gain sits. |
| 0 to 7 | 0 to 29 | Starting out | You are in the half of non-users who say they are unsure how. That is the most common answer in the profession, not a failure. |

The percentage and the band are shown **ungated**, along with the two weakest
dimensions named. Only the guide asks for an email. This matches the existing check
and is what makes the completion number trustworthy.

## 9. The gate, which is the actual measurement

Revised 2026-09-15. The guide downloads instantly after a short form. The yield is a
required question, not a required consent. Full reasoning in
`docs/product/ai-guide-conversion-design.md`, section 4.

| Step | What it measures |
|---|---|
| Score shown, no form | Completion rate |
| Form: work email, role, country | Who they are, and which offer is even applicable |
| Form: "which of these would actually help you?", three options | **The primary yield.** Academy demand against custom build demand, on every download |
| Optional tick: send me the weekly update | Sustained attention, the closest proxy for whether a recurring assistant has a market |
| One free text: "What is the first thing you would want help with?" | What to build, in their words |

Do not make a contact consent mandatory. Advertising email to a business contact in
Germany needs prior express consent, and a tick nobody can decline is the weakest form
of it. The required question gets you more: it is an ordinary form field, and the two
non-neutral answers are inbound requests rather than cold contacts.

## 10. The guide has to exist before launch

If the page asks for an email in exchange for a guide, the guide ships. There are now
**two guides**, one for product managers and one for product owners, sharing about 60%
of their content. The gate routes by the role already captured in the context
questions, and which role converts better is a finding worth having in itself.

The structure is specified in `docs/product/ai-guide-structure.md`: four short rules plus eight
chapters organised by the product manager's recurring needs, each with the benchmark
figure, an honest limit, a paste-ready prompt and one first step that needs no budget.
Each guide maps every probe question to the chapter it routes to, so the gated report
can name a weak dimension and send the reader straight to the fix. Q7 on tool fit
routes to the foundation, Q8 on learning to the keeping-up part.

This is the real cost of the probe and it is larger than the page. Do not launch the
check before the guide is written. A probe that burns the first hundred product
managers is worse than no probe.

## 11. Success criteria

Read nothing until **150 people have started the check.** Below that there is no
signal, only noise.

| Signal | Threshold to continue |
|---|---|
| Completion rate of people who start | Above 60% |
| Completions requesting the guide | Above 25% |
| Guide requesters opting into the weekly update | Above 40% |
| Guide requesters ticking the recurring-assistant box | Above 40% |
| Weekly open rate, sustained to issue eight | Set the target after issue four against our own numbers |
| Completions from outside DACH | Above 50% |
| Unprompted replies or questions | Any at all is meaningful at this volume |

If completion is low, the questions are wrong. If completion is high and the guide
request is low, the audience is interested in a mirror but not in our help, and that
is the answer that saves the most money.

## 12. Decision needed: the role-clarity probe

`role-clarity-probe.md` and this one use the same component, the same audience, the
same single channel and the same weeks. Running both splits the signal and doubles the
build.

**Decided 2026-09-11: the role-clarity probe is parked and this one runs.** Its problem
statement rests on an inferred need, while this one rests on the profession saying
directly that 93% want to learn and half of the non-users are blocked on not knowing
how. This probe also tests the product we actually want to build next. Keep the
role-clarity draft on file. Its AI verification question survives here as Q4.

## 13. Page

- **URL:** `/ai-product-management-check`, English, registered in `EN_ONLY` in
  `src/utils/page-pairs.mjs`. No German counterpart.
- **Title:** AI in Product Management Check
- **Description:** See how your AI practice compares with 677 product professionals in
  40 countries, in three minutes.
- **H1:** 97% of product managers got faster with AI. Only 64% got a better product.
- **Static, ungated SEO body**, H2 outline:
  1. What the survey shows about AI use in product management
  2. Why personal productivity is not reaching the product
  3. What separates a saved prompt from a lucky one
  4. Validation is the habit that scales
  5. What product managers say they still want to learn
- **FAQ** with FAQPage schema, five or six questions
- **Disclaimer:** orientation, not consulting

## 14. Distribution

Search will deliver nothing here for a long time. Roughly 90% of current impressions
are German apprenticeship queries and there is no international authority to trade on.

1. **The CEO's weekly English LinkedIn post.** The 97% against 64% finding fits the
   house formula exactly: a real number, an honest limit, a prediction, a question.
   Link in the first comment.
2. **Product management communities.** Mind the Product, the product management
   subreddit, product Slack groups. Read each community's self-promotion rules before
   posting, and lead with the finding rather than the link.
3. **Product Hunt**, only if the check stands on its own as a tool.
4. **No paid acquisition.** At probe stage it buys traffic, not learning.

## 15. Build notes

- Copy `ReadinessCheck.astro`, do not extend it. The existing component is shaped
  around AZAV and BFSG and should stay that way.
- New Netlify form name, `ai-pm-check`, so these leads stay separate.
- Result tables at five columns maximum. The prose CSS silently clips wider tables on
  narrow screens.
- No em or en dashes in the copy, house rule.
- Submit stays muted until the consent box is ticked, as on the existing check.
- Register the path in `EN_ONLY` and run `npm run check:pairs` before the build.

## 16. What this does not answer

Price beyond a single self-reported question. Retention. Whether an agent can produce
recommendations worth having. Whether QA is the better second profession. All of those
wait for a yes on demand.
