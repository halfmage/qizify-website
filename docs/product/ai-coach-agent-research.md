# AI coaching agent: does the idea hold up?

**Status:** Research only. Nothing built, nothing decided.
**Date:** 2026-09-11
**Idea under test:** an agent that teaches employees how to use AI in their own job,
starting with small, easy recommendations.
**Assumption under test:** employees are being asked to use AI at work (Copilot and
similar) but do not know how.

Every figure below comes from the issuing body's own publication. Where a number
comes from an industry association rather than a statistical office, it is labelled.
Nothing here is estimated or inferred.

---

## 1. Verdict

The demand side of the assumption holds, but not in the shape it was stated.

**Confirmed:** there is a large and measurable gap between employees who use AI at
work and employees who were ever taught how. In Germany 48% of employed people use
AI at work, while 70% say their employer offers them no AI training at all. Among
establishments that already use generative AI, only 27% offer their staff any
training on it and only 21% have written internal rules.

**Not confirmed:** that employees are being *instructed* to use AI. No statistical
office or public research institute publishes that. What the data shows instead is
the opposite direction of travel: employees reach for AI on their own, mostly with
freely accessible tools, and the employer arrives late with rules and training. The
honest framing of the problem is **access without guidance**, not **an order without
instructions**. That distinction changes who buys and why, so it should be corrected
in any pitch before it hardens.

**On the international question (added 2026-09-11):** the professional surveys are
more direct than the enterprise statistics. Among product managers worldwide, 93% say
they want to learn more about AI tools and half of the non-users name "unsure how to
use it" as their reason. That is the assumption stated almost word for word by the
profession itself. See section 3b, which supersedes section 3 for MVP targeting.

**Unproven and untestable from public data:** that anyone will pay for this. Every
source below measures the absence of training. None measures willingness to buy a
coaching agent. That is the one thing worth probing directly, and section 6 says how.

---

## 2. The gap, measured

### Employees use AI. They were not taught.

| Finding | Figure | Source |
|---|---|---|
| Employed people in Germany using AI at work | 48% (8% daily, 18% weekly, 22% less often) | Bitkom Research, KW 8-11 2026 |
| Employed people using no AI at work | 48% | same |
| Employees trained on AI by their employer | 20% | Bitkom Research, KW 11-15 2025, 1,005 people aged 16+, 513 of them employed |
| Offered training, not yet used | 6% | same |
| Offered nothing | 70% | same |

Bitkom is the German digital industry association, not a statistical office. It
publishes its own method and sample, so the figures are usable, but it has an
interest in a large reported skills gap. Treat as directional, and do not build a
headline claim on a single Bitkom number alone.

### Employers are behind their own staff

The IAB, the research institute of the Federal Employment Agency, surveys
establishments rather than asking people. Its 2025 panel wave, published as
Kurzbericht 8|2026, found:

| Finding | Figure |
|---|---|
| Establishments using generative AI | 24% (a fivefold rise in two years) |
| Of those, offering staff training on it | 27%, a further 21% planning, 52% not |
| Of those, having written internal rules | 21%, a further 22% planning, 56% not |
| Of those, using freely accessible AI tools | 90% |
| Of those, using bought models trained on own data | 16% |

The 90% figure is the sharpest one in this whole file. Nine in ten AI-using
establishments run on tools anyone can open in a browser, which means the employer
controls neither the tool nor the prompt nor what gets pasted into it.

### Shadow AI is growing, and companies know it

From Bitkom's company survey of 604 German firms with 20 or more employees, fielded
KW 27-32 2025:

- 8% report widespread private AI tool use by staff, up from 4% in 2024
- 17% see isolated cases, up from 13%
- 17% suspect it but cannot confirm it
- 29% are confident it does not happen, down from 37%
- 26% give employees access to generative AI, rising by size: 23% at 20 to 99
  employees, 36% at 100 to 499, 43% at 500 and above
- 43% offer no AI training of any kind; 8% train everyone, 21% most staff, 25% a
  selected group

### The training market has not filled the gap

The OECD, in "Bridging the AI skills gap: Is training keeping up?" (24 April 2025):

- Between **0.3% and 5.5%** of analysed training courses deliver any AI content
- One in three job vacancies has high AI exposure, but only about 1% of those jobs
  require specific, complex AI skills
- "The vast majority of workers exposed to AI will not require specialised AI
  skills. Most workers across the OECD only require a general understanding of AI."
- The majority of programmes that do carry AI content focus on advanced AI skills

This is the strongest single argument for the idea. The supply that exists is aimed
at the 1% who need to build models, not the majority who need to use them. Small,
easy, job-specific recommendations sit exactly where the supply is thinnest.

### Lack of knowledge is the number one blocker, not cost

| Source | Top reason for not using AI |
|---|---|
| Destatis, German enterprises 2025, published 24 Nov 2025 | fehlendes Wissen 72%, ahead of unclear legal consequences 62% and data protection 60%; cost is far down at 32% |
| Eurostat, EU enterprises 2025 | lack of relevant expertise 70.89%, ahead of legal clarity 52.52% and data protection 48.83%; "not useful for us" only 20.68% |

Both readings agree: the binding constraint on AI in European firms is knowledge,
and it is not close.

---

## 3. Which industries are the ICP (DACH enterprise lens)

**Superseded for MVP targeting by section 3b.** Keep for the DACH enterprise sale.

Three surveys measure adoption on three different populations, so the headline rates
differ and should not be mixed: Destatis covers enterprises with 10 or more employees
(26%), IAB covers establishments of any size (24%), DIHK covers self-selected chamber
member firms (35% in use, 34% planned). Use each within its own series.

For sector choice the IAB panel is the most useful because it breaks Germany down by
branch. Share of establishments using generative AI, 2025:

| Branch | In use | Planned | Not planned |
|---|---|---|---|
| Information and communication | 59% | 12% | 30% |
| Finance and insurance | 50% | 13% | 37% |
| Business-related services | 37% | 11% | 52% |
| Education and teaching | 34% | 7% | 59% |
| Public administration | 28% | 8% | 64% |
| Social services | 22% | 13% | 65% |
| Personal services | 22% | 5% | 73% |
| Manufacturing | 21% | 10% | 69% |
| Trade | 21% | 8% | 71% |
| Health | 15% | 10% | 75% |
| Construction | 14% | 8% | 78% |
| Transport and storage | 13% | 8% | 79% |
| Hospitality | 13% | 4% | 82% |
| Primary sector | 9% | 7% | 84% |

Eurostat confirms the same shape EU-wide for 2025: information and communication
62.52%, professional, scientific and technical services 40.43%, every other branch
below 25%, construction lowest at 10.79%.

Size matters more than most people expect. IAB: 21% of establishments with 1 to 9
staff, 28% at 10 to 49, 38% at 50 to 199, **48% at 200 and above**. Destatis on
enterprises: 23% at 10 to 49, 36% at 50 to 249, **57% at 250 and above**.

### The ICP filter that follows from this

An employee-coaching agent needs three things at once: the tools are already in
people's hands, the workforce is not technical, and someone owns a budget for
staff capability. That rules out both ends of the adoption table.

**1. Finance and insurance, DACH, 250 or more employees. Best fit.**
Adoption is 50%, the highest outside the tech sector, so the tools are deployed. The
workforce is not made of engineers, so self-teaching is weaker than in the ICT
branch. The sector already runs mandatory, documented, recurring staff training as a
matter of routine, which means both a budget line and a delivery habit exist. The
AI Act Article 4 literacy duty applies to them as deployers and has applied since
2 February 2025.

**2. Public administration and Verwaltungsakademien. Strong strategic fit, slow.**
28% adoption, above manufacturing and trade. This is the one segment where the
existing sovereignty position is a procurement gate rather than a preference, which
the 2026-06 segmentation already established. The cost is the sales cycle and the
procurement mechanics: sub-central buyers tender above EUR 216k, central government
above EUR 140k, so the winnable shape stays a sub-threshold negotiated award.

**3. Education and training providers as a channel, not as the end customer.**
34% adoption, above the national average, and this is the audience already known and
already reachable. The AI Act literacy duty is pushing AZAV providers toward AI
upskilling content, which is recorded in the segmentation work. Selling them
something they can put in front of their own learners is a warm motion, and warm
DACH motions are what the ICP validation found actually works.

### What the data argues against

**Manufacturing first.** It is the largest branch and the temptation is obvious, but
adoption is only 21% and 69% have no plans. The blocker there is company-level
("we have no expertise", 72% in Destatis), not individual-level ("I have a Copilot
licence and no idea what to do with it"). That is a different product.

**Information and communication.** 59% adoption, the highest of any branch, and
precisely the population least likely to pay someone to teach them prompting.

**Health, construction, transport, hospitality, primary sector.** All between 9% and
15%. The need may be real but the tools are not deployed, so there is nothing to
coach yet.

## 3b. International ICP by profession

**Scope correction, 2026-09-11.** Section 3 answers an industry question inside
Germany. The market is international, and for a tool an individual uses at their desk
the buying unit is a **profession**, not a branch of the economy. This section
supersedes section 3 for MVP targeting. Section 3 remains valid for the DACH
enterprise sale.

### 1. Product managers and product owners. Build the MVP here.

Product Focus, *2026 Survey of the Product Management Profession*: 677 respondents
across 40 countries, fielded October 2025 to January 2026, 83% Europe, 8% US.

| Finding | Figure |
|---|---|
| Use AI frequently or very frequently | 69%, up from 49% the year before |
| Report some personal productivity gain | 97% (32% "significantly improved") |
| Report improved *product outcomes* | 64% |
| Want to learn more about AI tools | 93% (57% very interested, 36% somewhat) |
| Of non-users: reason is "unsure how to use it" | 50% |
| Of non-users: do not trust it | 33% |
| Of non-users: legal or security reasons | 17% |
| Validate AI output with their own expertise | 85% |
| Still rely more on own expertise than on AI | 76% |
| AI users who regularly use ChatGPT | 66%, Copilot second, 22% use three or more tools |

This is the best-evidenced profession in the file, and the evidence is unusually
direct. Half of the non-users name the exact problem the agent solves, and 93% of the
whole sample say they want to learn. The 97% against 64% split is the second useful
finding: they already feel faster, but the gain is not reaching the product. That is
a coaching problem, not a tooling problem.

Project managers point the same way but on a weaker citation. PMI reports that only
about 20% of project managers have extensive or good practical experience with AI
tools and 49% have little to none. PMI attributes this to unpublished internal
customer-experience research and gives no sample size, so use it as corroboration
only, never as a headline number.

### 2. QA and testing. A strong second, and a separate build.

*State of Testing 2025*, published by PractiTest, a test-management vendor, from a
self-selected community survey. Label it as such in anything public.

- 37% report the tester skill requirement has shifted toward AI literacy
- Barriers to AI in QA teams: data privacy and security 56%, lack of skilled
  personnel 33%, uncertainty about benefits 29%, cost and ROI 25%, tool complexity 19%
- Machine learning and AI testing rose from 7% in 2023 to 16% in 2025
- Benefits reported: test automation efficiency 45.6%, realistic test data generation
  34.7%, shift toward overseeing AI processes 23%

The independent signal matters more than the vendor survey: ISTQB approved a Certified
Tester syllabus for **Testing with Generative AI** on 25 July 2025, alongside its
existing AI Testing certification. A certification body writes a syllabus when its
market asks for one, and QA is a profession that buys certification as career routine.
That makes testers unusually willing to pay for structured learning. It also means the
comparison is an established certification, not a free chatbot, which is a harder
benchmark but a real budget. Note the barrier ranking: privacy first, skills second.
A QA product has to lead on where the data goes.

### 3. Business analysts. Credible, not yet proven.

IIBA, *Global State of Business Analysis 2025*: 2,120 professionals across 122
countries, the most genuinely international sample here. 74% say AI is positively
impacting their careers, up from 63% the year before. Positive sentiment is
documented. A skills gap is not, because the detail sits behind membership. Candidate
for profession two or three, not a launch target.

### 4. Software developers. Do not build for them.

Stack Overflow Developer Survey 2025: more than 84% use or plan to use AI tools, but
trust fell to 29%, down 11 points year on year, and 46% actively distrust the accuracy
of AI tools against 33% who trust it. Only 3% highly trust the output. Usage is
highest among front-end 69%, mobile 65% and full-stack 65% developers. Positive
sentiment fell from over 70% in 2023 and 2024 to 60%.

Saturated, self-teaching, and getting more sceptical every year. This is the worst
available first customer for an agent that offers easy AI wins, and it is the audience
a technical founder will drift toward by default. Say no on purpose.

### Cross-check against observed usage, not stated usage

Anthropic Economic Index, February 2026 sample, roughly 1 million conversations:
computer and mathematical tasks account for 35% of Claude.ai conversations, management
occupations rose from 3% to 5% of traffic, and about 49% of jobs now show at least a
quarter of their tasks being performed with the tool, up from 36% in January 2025.
This is one vendor's platform traffic rather than a workforce survey, so it shows
where usage already concentrates, not where need is greatest. Read next to the
surveys it tells the same story: developers are the saturated core, the non-developer
knowledge roles are the growing edge.

ILO Working Paper 140, *Generative AI and Jobs: A Refined Global Index of Occupational
Exposure*, May 2025, with NASK: clerical occupations remain the most exposed of all;
one in four workers globally is in an occupation with some generative AI exposure;
3.3% of global employment sits in the highest exposure band, 4.7% of female employment
against 2.4% of male. Clerical and administrative support is therefore the largest
genuinely underserved population in the world. It is also the one with the least
individual buying power and no professional body to sell through, so it is a later
enterprise play, not an MVP.

### Where in the world

Anthropic's geographic analysis, December 2024 to September 2025: the United States is
21.6% of global usage with India second, while per-capita usage leads in Israel,
Singapore, Australia, New Zealand and South Korea. A 1% higher GDP per capita is
associated with a 0.7% higher usage index.

For an English MVP with no domain authority and no US sales motion, the small
high-adoption English-speaking markets, Australia, New Zealand and Singapore, are a
more realistic first beachhead than the United States. This is consistent with the
2026-07-06 ICP validation, which demoted the US white-label plan.

### What travels internationally and what does not

The two strongest DACH arguments do not cross the border. The AI Act Article 4
literacy duty is an EU obligation, and works council co-determination is German. For
an international product-manager audience, neither the compliance wedge nor the
sovereignty claim applies, and the product competes on the quality of the coaching
alone. That is the same conclusion `role-clarity-probe.md` reached for the same
audience, and it should be stated plainly rather than discovered later.

### MVP recommendation

**Build for product managers and product owners. One profession, English, one
workflow.** The reasons, in order of weight:

1. 93% stated appetite to learn, and 50% of non-users blocked by exactly "unsure how".
2. A published, citable benchmark exists for the profession, so progress is measurable
   against something external rather than against our own opinion.
3. The profession is reachable through communities and the CEO's weekly English
   LinkedIn post without paid acquisition.
4. An asset aimed at this exact audience is already drafted in `role-clarity-probe.md`.

Treat QA as profession two and as a separate build rather than a variant, because its
first barrier is privacy and its buying habit is certification. Treat business analysts
as a watch item. Do not start with developers.

---

## 4. Two things that shape the product before a line is written

**Works council co-determination.** § 87 Abs. 1 Nr. 6 BetrVG gives the Betriebsrat a
co-determination right over "Einführung und Anwendung von technischen Einrichtungen,
die dazu bestimmt sind, das Verhalten oder die Leistung der Arbeitnehmer zu
überwachen". An agent that observes how an employee works in order to recommend
improvements is squarely inside that wording. In any German company large enough to
be worth selling to, that is a negotiation before a rollout, not after. The design
consequence is concrete: a version that never reads individual work content, or that
reports only at group level, is not a privacy nicety. It is what makes the thing
sellable in Germany at all. The group-level-only approach is already the stated
design in the ARTINNA facilitator view, so this is consistent with existing work.

**The German funding route does not fit.** § 82 SGB III funds continuing education
for employed people, with the state covering course costs and part of wages on a
sliding scale by company size. But the measure must run **more than 120 hours** and
be **AZAV-approved**. An agent that gives small daily recommendations is disqualified
on both counts. That closes the funding-aware framing that works for the
Bildungsträger offer. Either the product is sold as a plain software purchase, or a
certified long-form course wraps around it. Do not assume the existing funding story
carries over.

---

## 5. Where the idea is weak

**No moat is visible in the data.** Microsoft ships its own Copilot guidance with the
licence, and the freely accessible tools that 90% of firms use are free. Nothing in
these sources suggests a buyer prefers a third-party coach. The defensible ground, if
there is any, is the part the platform vendors structurally cannot offer in DACH:
German processing, works-council-compatible design, and a documented Article 4
evidence trail. That is the same asset the segmentation work already identified as
the sharpest USP.

**"Start small with easy recommendations" is both the strength and the risk.** The
OECD gap is real and sits exactly there. But a small, easy recommendation is also the
thing most easily copied and hardest to charge for. The value has to come from the
recommendation being specific to that person's actual job, in that sector, under that
company's rules. Generic prompting tips are a blog post, not a product.

**Compliance is the likelier wedge than productivity.** Article 4 has applied since
2 February 2025 and was not postponed by the Digital Omnibus, unlike the Annex III
high-risk duties which moved to 2 December 2027. A compliance duty with a date
attached produces budget. A productivity promise has to be proven first.

---

## 6. What to test, and how cheaply

The public data has taken this as far as it goes. Three questions remain and none of
them can be answered by more desk research.

1. **Who owns the budget:** L&D, IT, or compliance. The answer changes the entire
   pitch. Ask five people in the DACH network, not a survey.
2. **Whether Article 4 is felt as a real duty or ignored.** If finance and insurance
   compliance officers are already being asked to evidence AI literacy, that is the
   whole go-to-market. If they shrug, the compliance wedge is gone.
3. **Whether anyone pays.** The existing readiness-check pattern is the cheapest
   instrument available and is already built. A short self-assessment aimed at the
   ICP in section 3, ending in a real recommendation, would measure engagement
   against a benchmark within weeks.

Resolved 2026-09-11: `role-clarity-probe.md` is parked and the probe that runs is
specified in `ai-guide-probe.md`, aimed at product managers and product owners.

---

## 7. Sources

All figures verified at the issuing body's own publication.

- Eurostat, *Use of artificial intelligence in enterprises*, 2025 data, published
  December 2025. Dataset isoc_eb_ai and isoc_eb_ain2. 157,000 of 1.53 million EU
  enterprises surveyed.
  https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Use_of_artificial_intelligence_in_enterprises
- Statistisches Bundesamt, IKT-Nutzung in Unternehmen, table on AI use by employee
  size class, as of 24 November 2025, and the companion table on reasons against use.
  https://www.destatis.de/DE/Themen/Branchen-Unternehmen/Unternehmen/IKT-in-Unternehmen-IKT-Branche/Tabellen/ikti-unternehmen-kuenstliche-intelligenz.html
- IAB, *Künstliche Intelligenz in deutschen Betrieben*, IAB-Kurzbericht 8|2026, based
  on IAB-Betriebspanel 2025. Branch, size and training tables.
  https://doku.iab.de/kurzber/2026/kb2026-08.pdf
- OECD, *Bridging the AI skills gap: Is training keeping up?*, 24 April 2025.
  https://www.oecd.org/en/publications/bridging-the-ai-skills-gap_66d0702e-en.html
- DIHK, *Digitalisierungsumfrage 2026: Künstliche Intelligenz, Souveränität und
  Resilienz*. Use rates, AI applications, obstacles.
  https://www.dihk.de/resource/blob/163540/486d8384c94a630d9aa0eaa978f0a786/dihk-digitalisierungsumfrage-2026-data.pdf
- Bitkom Research, employee training survey, KW 11-15 2025, 1,005 respondents aged
  16+ of whom 513 employed.
  https://www.bitkom.org/Presse/Presseinformation/Ein-Fuenftel-im-Job-zu-KI-geschult
- Bitkom Research, company survey on shadow AI and AI access, 604 German companies
  with 20+ employees, KW 27-32 2025.
  https://www.bitkom.org/Presse/Presseinformation/Beschaeftigte-nutzen-Schatten-KI
- Bitkom Research, population survey on AI use at work, KW 8-11 2026.
  https://www.bitkom.org/Presse/Presseinformation/Ein-Drittel-nutzt-KI-mindestens-einmal-pro-Woche
- EU AI Act Article 4, AI literacy, applicable since 2 February 2025. Commission AI
  literacy Q&A and the AI Office repository of AI literacy practices.
  https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers
- § 87 Abs. 1 Nr. 6 BetrVG, co-determination on technical monitoring devices.
  https://www.gesetze-im-internet.de/betrvg/__87.html
- § 82 SGB III, funding of continuing education for employed people, 120-hour and
  AZAV conditions. https://www.gesetze-im-internet.de/sgb_3/__82.html

Profession-level sources added 2026-09-11:

- Product Focus, *2026 Survey of the Product Management Profession*, 677 respondents,
  40 countries, fielded October 2025 to January 2026.
  https://cdn.productfocus.com/wp/wp-content/uploads/2026/03/Product-Focus-Industry-Survey-Report-2026.pdf
- PMI, *Shaping the Future of Project Management With AI*. The 20% and 49% AI
  experience figures are attributed to unpublished PMI customer-experience research
  with no stated sample.
  https://www.pmi.org/learning/thought-leadership/shaping-the-future-of-project-management-with-ai
- PractiTest, *State of Testing Report 2025*. Vendor-published, self-selected sample.
  https://www.practitest.com/assets/pdf/stot-2025.pdf
- ISTQB, Certified Tester Specialist Level, Testing with Generative AI (CT-GenAI),
  syllabus approved 25 July 2025.
  https://istqb.org/certifications/gen-ai/
- IIBA, *Global State of Business Analysis 2025*, 2,120 professionals, 122 countries.
  https://www.iiba.org/career-resources/the-global-state-of-business-analysis/the-global-state-of-business-analysis-reports-and-surveys/the-global-state-of-business-analysis-2025/
- Stack Overflow, *2025 Developer Survey*, AI section.
  https://survey.stackoverflow.co/2025/ai
- Anthropic Economic Index, March 2026 report (February 2026 data) and the geographic
  analysis (December 2024 to September 2025). Platform traffic from one vendor, not a
  workforce survey.
  https://www.anthropic.com/research/economic-index-march-2026-report
  https://www.anthropic.com/research/economic-index-geography
- ILO and NASK, *Generative AI and Jobs: A Refined Global Index of Occupational
  Exposure*, Working Paper 140, May 2025.
  https://www.ilo.org/publications/generative-ai-and-jobs-refined-global-index-occupational-exposure

Internal documents referenced, not re-verified here:
`docs/strategy/service-icp-and-market.md`, `docs/strategy/customer-segmentation.md`,
`docs/grants/women-techeu-verification.md` (Digital Omnibus timing),
`docs/product/role-clarity-probe.md`.
