# SEO Content Audit
## https://learnslice.com/ai-guides
### Date: 2026-09-17 (re-run, current page state)

---

## SEO Health Score: 66/100

Up from 38 at the first audit. Everything that on-page work can fix is fixed.
The remaining 34 points are almost entirely one problem, and it is not on this
page.

| Area | Score | Change | Note |
|---|---|---|---|
| Technical hygiene | 9/10 | = | Canonical, robots, viewport, sitemap, hreflang all correct |
| Title and meta | 9/10 | +3 | 60 and 150 characters, both inside display limits |
| Heading structure | 8/10 | +5 | Five keyword-bearing H2s. Two interface labels remain |
| Indexable content | 7/10 | +5 | 1,240 words, up from 599. Still thin against the field |
| Internal linking | 6/10 | +6 | 37 inbound via footer. No contextual in-body links |
| Topical authority | 1/10 | = | **Unchanged and unchangeable from this page** |
| E-E-A-T | 8/10 | = | Strong on three dimensions, weak on authoritativeness |
| Featured snippets | 7/10 | +7 | FAQPage schema live with five questions |

---

## What changed since the first audit

| Fix | Before | Now |
|---|---|---|
| Inbound internal links | 0 pages | 37, via the English footer |
| Indexable words | 599, mostly form labels | 1,240 |
| Keyword-bearing H2s | 0 | 5 |
| FAQPage schema | Missing | Live, 5 questions |
| Title | 62 chars | 60 |
| Meta description | 173 chars | 150 |
| Keyword targeting | Merged, matched nothing | Split by role, targeting the winnable cluster |

---

## On-Page Checklist

### Title tag
**Pass.** `AI Guides for Product Managers & Product Owners | LearnSlice`, 60
characters, keyword first, brand last.

### Meta description
**Pass.** 150 characters, leads with the number pair, no truncation.

### Heading hierarchy
**Needs work, minor.** Five H2s now carry query language:

- AI for product managers: discovery, prioritisation, updates
- AI for product owners: refinement, ordering, sprint goals
- Why Copilot cannot see your backlog
- AI prompts for product managers and product owners
- Learn it here, then apply it

Two interface labels remain as H2s, "Get the guide" and "Here it is". Neither
helps and "Here it is" sits in the hidden success state, so it is indexed
while invisible. Demoting both to a non-heading element would be tidier. Low
impact.

### Images, URL, canonical
**Pass.** No issues found.

### Internal linking
**Partial.** 37 pages link in through the footer, which solved the orphan
problem. There are still no contextual in-body links from related content,
because no related content exists. See topical authority.

---

## Keyword Analysis

Targets after the strategy narrowed scope to informational intent only:

| Target | Placement | Competition |
|---|---|---|
| AI for product owners | H2, body, FAQ | Weak. agilemania, premieragile, agileseekers |
| AI backlog refinement | H2, body | Weak, same field |
| AI user stories and acceptance criteria | Body | Moderate. Mountain Goat holds three of nine |
| AI for product managers | Title, H1, H2 | **Not a target.** Atlassian, monday.com, Product School |
| AI prompts for product managers | H2, for readers | **Not a target.** Saturated |

Intent alignment is now correct. The page answers informational queries above
the ungated content, and the commercial routes appear once, late, after the
answers.

---

## Technical SEO

No faults. Canonical self-references, robots allows indexing with
`max-snippet:-1`, the page is in the sitemap, hreflang is correctly absent
since it is registered EN_ONLY, and `/guides/*` carries `X-Robots-Tag: noindex`
so the gated PDFs stay out of the index.

---

## Schema

| Type | Status |
|---|---|
| FAQPage | **Added**, 5 questions |
| Organization, WebSite, BreadcrumbList | Present, sitewide |
| SoftwareApplication | Present, sitewide, **not relevant to this page** and mildly confusing for entity understanding |
| ItemList for the two guides | Still missing, low value |

---

## The ceiling, stated plainly

Topical authority scores 1/10 and no amount of work on this URL moves it.

All 45 blog posts are about apprenticeships, vocational training, AZAV, IHK
exams and e-learning development. There is no product management content
anywhere on the domain. Google assesses topical relevance at site level, and a
single strong page in an unrelated subject does not establish it.

This page is now well built. It will still lose to a mediocre page on
scrum.org, because scrum.org is about that subject and learnslice.com is not.

### The only two honest options

1. **Build the cluster.** Three to five posts on AI for product owners:
   refinement, ordering, acceptance criteria, sprint goals. Target the weak
   field the research found, link each to this page. This is the only path that
   makes search work here.
2. **Accept that search is not the channel.** Treat LinkedIn, direct sharing
   and the weekly email as acquisition, and stop investing in this page's
   ranking. The page is already good enough to convert traffic that arrives by
   any route.

Either is defensible. Doing neither, and expecting rankings, is not.

---

## Prioritized Recommendations

### Critical
1. Choose between the cluster and the channel. Everything else is rounding.

### High
2. Resolve the header CTA contradiction. This is a conversion issue rather than
   a ranking one, and it is detailed in the copy report.

### Medium
3. Demote "Get the guide" and "Here it is" from H2 to a styled div.
4. Consider whether `SoftwareApplication` schema should be suppressed on pages
   where no software is the subject.

### Low
5. ItemList schema for the two guides.
6. A German counterpart, once the English page proves the concept, since DACH
   is where the domain actually has authority.

---

## Method note

No search volumes, difficulty scores or traffic projections appear in this
document. No keyword tool was available. Every competitive judgement comes from
live SERPs checked on 2026-09-17 and recorded in `COPY-SUGGESTIONS-ai-guides.md`.
Search Console holds the real impression data for this domain and should decide
the cluster question above.
