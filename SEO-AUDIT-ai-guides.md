# SEO Content Audit
## https://learnslice.com/ai-guides
### Date: 2026-09-17

---

## SEO Health Score: 38/100 at audit, 64/100 after the fixes below

The page is technically clean and editorially strong. It is also an orphan with
120 words of indexable prose, sitting on a domain with no topical authority for
anything it talks about. The technical marks are high and the discoverability
marks are near zero.

| Area | Score | Note |
|---|---|---|
| Technical hygiene | 9/10 | canonical, robots, viewport, sitemap, schema all correct |
| Title and meta | 6/10 | both slightly over length, title is descriptive not compelling |
| Heading structure | 3/10 | one H1, two H2s, both navigational labels |
| Indexable content | 2/10 | 344 words of which ~220 are form labels and a country list |
| Internal linking | 0/10 | zero inbound internal links from any of 75 pages |
| Topical authority | 1/10 | 45 blog posts, none about product management |
| E-E-A-T | 8/10 | named author, real credentials, sourced figures, privacy policy |
| Featured snippets | 0/10 | no question headings, no FAQ schema |

---

## What was fixed on 2026-09-17

| Fix | Before | After |
|---|---|---|
| Inbound internal links | 0 pages | 37 pages, via the English footer Product group |
| Indexable words | 599, mostly form labels | 1,231 |
| Keyword-bearing H2s | 0 | 5 |
| FAQPage schema | Missing | Present, 5 questions |
| Title length | 62 chars | 60 |
| Meta description length | 173 chars | 150 |
| Stale claim in body | "Nothing before the last page is an advertisement" | Corrected, that page no longer exists |

Still open: the topical cluster in the medium-priority section, and the decision
about whether anything should sit above the gate.

---

## The finding that outranks the rest

**Nothing links to this page.** All 75 built pages were checked for
`href="/ai-guides"`. The count is zero. Google reaches it only through the
sitemap, it receives no internal authority from anywhere on the site, and it
sits outside the site's link graph entirely.

**Nothing on the site supports it topically.** All 45 blog posts are about
apprenticeships, vocational training, AZAV, IHK exams and e-learning
development. A product management page on that domain has no cluster behind
it. Google evaluates topical relevance at site level, not just page level.

These two facts cap what on-page work can achieve here. Fix everything else on
this page perfectly and it will still not rank for "AI for product managers"
against Product School, Mind the Product, Atlassian or Lenny's Newsletter.

The project's own earlier research said the same thing and should be treated as
still true: roughly 90% of current search impressions are German apprenticeship
queries, there is no international domain authority, and the channel that
already exists is the weekly English LinkedIn post.

**No search volume figures appear anywhere in this audit.** No keyword tool was
run. Queries below are ranked by how exactly the guides already answer them,
not by traffic estimates. Pull the real numbers from Search Console before
committing effort.

---

## On-Page SEO Checklist

### Title tag
- **Status:** Needs Work
- **Current:** `AI guides for product managers and product owners | LearnSlice` (62 chars)
- **Recommended:** `AI Guides for Product Managers & Product Owners | LearnSlice` (60 chars)
- **Issues:** 62 characters truncates on most desktop SERPs. The title is
  accurate but describes the object rather than the benefit, and carries no
  reason to click over a competitor.

### Meta description
- **Status:** Needs Work
- **Current:** 173 characters, will truncate around "traced to its source"
- **Recommended:** `97% of product managers say AI made them faster. Only 64% say it made their
  product better. Two free guides on closing that gap, every figure sourced.` (152)
- **Issues:** Length only. The copy itself is the strongest asset on the page,
  a specific number pair that most competitors cannot match.

### Heading hierarchy
- **Status:** Fail
- **Current:** H1 (two statistics), H2 "Get the guide", H2 "Here it is", then
  four H4s in the footer.
- **Issues:** The two H2s are interface labels, not content. There is no H2
  that a search engine could match to a query. The H4s skip a level, since no
  H3 exists anywhere on the page.
- **Recommended:** keep the H1, which is genuinely good, and add an ungated
  section of question-shaped H2s below the form.

### Image optimization
- **Status:** Pass
- 2 images, both with alt text. No issues found.

### Internal linking
- **Status:** Fail
- **Outbound:** 18 unique internal links, all from the shared nav and footer.
  None from the page body.
- **Inbound:** zero, from 75 pages.

### URL structure
- **Status:** Pass
- `/ai-guides` is short, lowercase, hyphenated, readable, no parameters.

---

## Content Quality (E-E-A-T)

| Dimension | Score | Evidence |
|---|---|---|
| Experience | Strong | Named author with 17+ years as PM and PO; the guides carry 11 first-hand field notes |
| Expertise | Strong | Every figure traced to the issuing body: Product Focus, Scrum Guide, Microsoft docs, IAB, Eurostat, OECD |
| Authoritativeness | Weak | No inbound links, no press, no third-party citation of this page or these guides |
| Trustworthiness | Strong | HTTPS, privacy policy linked at the point of collection, explicit statement that the file is not emailed, imprint present |

Authoritativeness is the only weak dimension and it is the one that on-page
work cannot fix.

---

## Keyword Analysis

- **Primary keyword, as built:** "AI guides for product managers"
- **Search intent:** informational. A searcher wants to learn, not to buy.
- **Intent alignment:** partial. The page is a form, which is transactional in
  shape. A searcher arriving on an informational query meets a gate before any
  information. That mismatch raises bounce, and Google reads bounce.

### Placement
| Element | Status |
|---|---|
| Keyword in title | Pass |
| Keyword in H1 | Partial, "product managers" appears, "AI" appears, but not as a phrase describing the offer |
| Keyword in first 100 words | Pass |
| Keyword in an H2 | Fail |
| Keyword in meta description | Partial |
| Keyword in URL | Pass |

### Realistic long-tail targets

Ranked by how completely the guides already answer them. These are specific,
low-competition, and the answer is already written and sourced.

| Query shape | Already answered in | Currently on the page |
|---|---|---|
| can copilot see my jira tickets | PO guide, Part 0 item 2 | No |
| difference between copilot chat and microsoft 365 copilot | Both guides, tier table | No |
| why does copilot give different answers to the same prompt | Both guides, Part 0 item 1 | No |
| what should you not paste into copilot | Both guides, Rule 2 | No |
| ai prompts for product managers | PM guide, Part 3 | No |
| how to write acceptance criteria with ai | PO guide, Chapter 2 | No |
| copilot cannot find my files | Both guides, Part 0 item 4 | No |

Every one of these is a question the guides answer with a cited source, and
none of them appears on the page in any form.

---

## Technical SEO

| Check | Result |
|---|---|
| Canonical | Pass, self-referencing |
| Robots meta | Pass, index, follow with max-snippet:-1 |
| Sitemap | Pass, present |
| Viewport | Pass |
| HTTPS | Pass |
| hreflang | Absent, correct: the page is registered EN_ONLY in page-pairs.mjs |
| Gated PDFs | Correct, `/guides/*` carries X-Robots-Tag noindex in netlify.toml |

No technical faults found. This part of the page is in good order.

---

## Schema Markup

| Type | Status | Note |
|---|---|---|
| Organization | Present | Sitewide |
| WebSite | Present | Sitewide |
| BreadcrumbList | Present | Sitewide |
| SoftwareApplication | Present | Sitewide, and not relevant to this page |
| FAQPage | **Missing** | The single biggest schema opportunity here |
| ItemList | Missing | Would describe the two guides as a set |

---

## Featured Snippet Opportunities

All currently unavailable, because the page has no question headings. Each of
the long-tail queries above is a paragraph-snippet candidate: an H2 phrased as
the question, followed immediately by a 40 to 60 word answer.

The tier question is a table-snippet candidate. The guides already contain the
three-row Copilot tier table, and tables win those snippets.

---

## Content Gap Analysis

| Missing | Why it matters | Type needed |
|---|---|---|
| Any ungated answer on this page | Informational searchers hit a gate and leave | On-page section, 600 to 900 words |
| Any product management content on the site | No topical cluster supports the page | 3 to 5 blog posts |
| Any inbound internal link | Page is outside the site's link graph | Contextual links |

---

## Prioritized Recommendations

### Critical
1. **Link to the page from somewhere.** Zero inbound internal links is the
   largest single defect and the cheapest to fix. Start with `/solutions` and
   the two English AI posts, which are the only topically adjacent pages that
   exist.
2. **Add an ungated section below the form**, built from question-shaped H2s
   drawn from the long-tail table. This is the only change that gives a search
   engine something to match. Answer the question fully, then point to the
   guide for the depth.
3. **Add FAQPage schema** covering those same questions.

### High priority
4. Trim the meta description to 152 characters and the title to 60.
5. Fix a stale claim in the page body. It says "Nothing before the last page is
   an advertisement." The last page was removed from both guides on 2026-09-17,
   so there is now no advertisement page at all and the sentence is false.
6. Decide whether the form should gate the whole page. A visible answer above
   the gate serves search; a gate above everything serves conversion. Right now
   search loses entirely.

### Medium priority
7. **Build the cluster or accept the channel.** Three to five posts on AI for
   product roles would give the page topical support. Without them, treat
   LinkedIn and direct sharing as the acquisition channel and stop investing in
   search for this page.
8. Add an ItemList schema describing the two guides.

### Low priority
9. Consider a German counterpart once the English page proves the concept,
   since DACH is where the domain actually has authority.

---

## What this audit deliberately does not claim

No search volumes, no difficulty scores, no traffic projections. None were
measured, and the project rule is that unverified numbers do not get written
down. Search Console has the real impression data for this domain and should be
the input to any decision about whether to build the cluster in step 7.
