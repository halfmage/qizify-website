# SEO Content Audit
## /blog/ai-backlog-refinement-product-owners
### Date: 2026-09-17

---

## SEO Health Score: 84/100

The strongest SEO asset LearnSlice has on this subject. It is a well-built page
in a weakly-defended field, which is the combination that actually produces
rankings. The score is capped by the same thing capping /ai-guides: nothing
else on the domain supports it topically.

| Area | Score | Note |
|---|---|---|
| Technical hygiene | 10/10 | Canonical, robots, sitemap, EN_ONLY hreflang all correct |
| Title and meta | 10/10 | 56 and 139 characters, exact-match keyword first |
| Heading structure | 9/10 | Nine content H2s, query-shaped, no level skipped |
| Content depth | 9/10 | 3,004 words against a field of 800-word listicles |
| Keyword placement | 8/10 | Fixed this pass, was thin |
| Outbound authority | 9/10 | Fixed this pass, was zero |
| Schema | 9/10 | BlogPosting plus FAQPage, and the wrong entity removed this pass |
| E-E-A-T | 8/10 | Four named sources, now linked. Author is the team rather than a person |
| Topical authority | 2/10 | **The ceiling.** One post does not make a cluster |

---

## What this audit found and fixed

### 1. Four sources cited, none linked

The post named Microsoft's documentation, the Scrum Guide, the IAB panel and
the OECD, and linked to none of them. The only external links on the page were
Google Fonts and the company LinkedIn.

Citing an authority without linking it is the weakest form of citation. It asks
the reader to take the attribution on trust and gives a search engine nothing to
corroborate. Outbound links to primary sources are one of the few E-E-A-T
signals a small domain can simply choose to have.

The sources section now carries five links, all to the exact documents the
guides verified on 17 September 2026.

### 2. Primary keyword was thinner than the competition's

"AI backlog refinement" appeared twice in 2,886 words, roughly 0.07%. The target
range is 0.5% to 1%, and every competitor on page one uses it more.

It is now four uses plus five of "backlog refinement", added where the phrase
already belonged rather than sprinkled. "User stories" went from one mention to
two, which matters because the acceptance-criteria cluster is the reachable
long-tail identified in the keyword research.

### 3. Wrong entity in the structured data

Every page emitted a `SoftwareApplication` schema describing LearnSlice as an
AI platform for German apprenticeships and IHK exam preparation. On a post about
Scrum backlog refinement that actively contradicts the topical signal the rest
of the page sends.

`BlogLayout` now passes `softwareSchema={!isGuide}`, so guide-variant posts drop
it. Verified that demo and consultation posts still emit it.

---

## Keyword Analysis

| Target | Placement | Competition |
|---|---|---|
| AI backlog refinement | Title, H1, H2, 4 body uses | Weak. agilemania, premieragile, agileseekers |
| AI for product owners | H2 context, 12 body uses of "product owner" | Weak, same field |
| Copilot cannot read Jira | Title, H1, H2, 29 Copilot mentions | **Effectively open.** Medium posts and GitHub issues |
| AI user stories, acceptance criteria | Body, 2 and 4 uses | Moderate. Mountain Goat holds three of nine |

Search intent is informational and the page is informational. No mismatch.

---

## Technical SEO

No faults. Canonical self-references, robots allows full snippets, the post is
in the sitemap, hreflang is correctly absent, and the page carries BlogPosting
and FAQPage structured data.

The site also explicitly allows GPTBot, ClaudeBot, PerplexityBot and the rest in
robots.txt, which matters more than usual here: the FAQ block is written as
self-contained answers, which is exactly what answer engines extract.

---

## The one thing not fixed

Topical authority scores 2/10 and one post cannot move it. The related-posts
block underneath this article currently offers three posts about AI tutors and
custom AI development, because those are the nearest tagged neighbours on a
domain that is otherwise entirely about apprenticeships.

That is the honest state: this post is an island with a good bridge to
/ai-guides and nothing either side of it.

**Two or three more posts would change that.** The keyword research already
named the targets: AI for sprint planning and the sprint goal, AI in the sprint
review, and what to paste into Copilot at work. Each is in the same weakly
defended field, each links to the other two and to /ai-guides, and together they
would be a cluster rather than an island.

Without them, this post will rank on its own merits or not at all.

---

## Prioritized Recommendations

### Critical
1. **Open, needs a decision.** Write two more posts in this cluster, or accept
   that this one stands alone.

### High
2. **Open, needs a decision.** Consider a named author. "LearnSlice Team" is weaker than "Alesia Kunz, CEO,
   17+ years as a product manager and product owner" on a post whose whole
   argument is practitioner experience. The guides already carry that byline.

### Medium
3. ~~Add a second content image.~~ **Done.** The thirty-minute routine chart now
   sits in the section it illustrates.
4. Consider whether consultation posts should also drop the apprenticeship
   `SoftwareApplication` schema. The same argument applies, more weakly, and it
   would touch 11 posts. **Open, needs a decision.**

### Low
5. Revisit in 90 days with Search Console data rather than assumptions.
