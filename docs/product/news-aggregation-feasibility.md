# AI news aggregation for product managers: feasibility

**Date:** 2026-09-15
**Question:** can we pull a few news sources and publish an AI news overview aimed at
product managers and product owners, and would it be easy to build.
**Short answer:** the plumbing is easy and mostly free. The editorial judgment is the
hard part, and it is also the only part that would make the thing worth reading.
**Recommendation:** build it as an internal editor's queue that feeds the weekly
update, not as a public auto-updating news page. Reasoning in section 4.

---

## 1. What is actually available

Tested from the command line on 2026-09-15. Item counts are what each feed returned on
the day.

### Works today

| Source | Endpoint | Items |
|---|---|---|
| OpenAI news | `https://openai.com/news/rss.xml` | 1193 |
| Google DeepMind blog | `https://deepmind.google/blog/rss.xml` | 100 |
| Google Workspace updates | `https://workspaceupdates.googleblog.com/feeds/posts/default` | 25 |
| Microsoft Learn, Copilot docs | `https://learn.microsoft.com/api/search/rss?search=...&locale=en-us` | 100 |
| GitHub changelog | `https://github.blog/changelog/feed/` | 10 |
| European Commission, digital | `https://digital-strategy.ec.europa.eu/en/rss.xml` | 10 |
| Lenny's Newsletter | `https://www.lennysnewsletter.com/feed` | 20 |
| Product Focus | `https://www.productfocus.com/feed/` | 10 |

The Microsoft Learn search RSS is the useful discovery here. It takes an arbitrary
query and returns matching documentation updates as a feed, which covers Copilot
release notes and privacy pages without needing a dedicated feed to exist.

### Blocked, missing, or needs work

| Source | What happened |
|---|---|
| Microsoft 365 roadmap API | 403 from this machine, with and without a JSON accept header. Bot protection rather than absence. Retest from the build environment before writing it off |
| Anthropic news | No feed at `/rss.xml` or `/news/rss.xml`, both 404. The status page has an RSS feed but that is incidents, not product news |
| Microsoft corporate blog | 403 on `/feed/` |
| Microsoft Tech Community Copilot blog | The board RSS pattern works, but the board id has to be looked up. The guessed id returned "Resource Not Found" |
| Mind the Product | `/feed/` returns JSON, not RSS. Needs a different endpoint or a parser |
| Atlassian blog | `/feed` returns HTML |

Worth noting: the two sources most relevant to this audience, the Microsoft 365
roadmap and Anthropic, are the two that do not simply hand over a feed. That is the
usual shape of this problem.

## 2. Build effort, honestly

In the current stack, Astro building to Netlify, this is small.

| Piece | Effort |
|---|---|
| Fetch and parse the feeds at build time, filter, dedupe, sort | Half a day to a day |
| Scheduled rebuild so it stays fresh, Netlify build hook plus a cron trigger | About an hour |
| Render an internal review page from the collected items | A few hours |
| Deciding what is relevant to a product manager | **This is the whole job, and it does not automate** |

The first three are ordinary work. The fourth is where the effort actually sits.

## 3. Why the filter is the hard part

Nothing in any of these feeds is tagged "relevant to a product manager". OpenAI's feed
alone returned 1193 items and most of them are company news. A keyword filter over
these sources produces a page of vendor announcements, which is precisely the material
our own sourcing policy tells readers not to trust.

We have just committed, in `ai-guide-structure.md`, to a rule that no vendor blog or
news aggregator counts as a primary source, and that every number has to be traceable
to the body that published it. An unattended aggregator publishing vendor headlines
would contradict that in public, on our own domain.

There is a second risk in the same direction. A page that auto-summarises news with a
model will eventually state something false with our name on it. Given that the entire
positioning rests on sourcing discipline, that is an expensive way to save an hour a
week.

## 4. Recommendation

**Build the collector, do not publish the collection.**

1. A build-time job pulls the working feeds into a single internal list, filtered by
   keyword and deduplicated.
2. It renders an **unlisted review page**: title, source, date, link, nothing else.
3. A person picks one item per week, reads the primary source, and writes the take.
4. That becomes item one of the weekly update, which already has this exact slot in
   its fixed format.

This gets the value, which is never missing something important, without taking on the
editorial liability of a public feed. It also directly serves the commitment already
made: the weekly needs a content queue, and this is the queue.

**What not to do.** Do not publish a public AI news page for search traffic. It would
be duplicate headlines competing with hundreds of free aggregators, it would rank for
nothing, and it would dilute a domain whose impressions are currently about 90% German
apprenticeship queries.

## 5. The legal position

Relevant because we would be reproducing other people's headlines.

Under § 87g UrhG, the German press publishers' right explicitly does **not** cover
setting hyperlinks to a press publication, nor "die Nutzung einzelner Wörter oder sehr
kurzer Auszüge", nor the factual information contained in a publication.

So the safe pattern, which is also the better editorial pattern:

- Link to the original, always.
- Headline plus at most a very short extract.
- The summary and the take are written by us, in our own words.
- Never reproduce paragraphs of someone else's article.

A curated weekly that links out and adds its own judgment sits comfortably inside
that. A page that republishes feed descriptions in bulk does not.

## 6. Suggested first version

If this goes ahead, the smallest useful build is:

- Six feeds: Microsoft Learn Copilot query, OpenAI, Google Workspace updates, GitHub
  changelog, European Commission digital, Product Focus.
- One daily scheduled fetch, results written to a JSON file in the repo or to the
  build output.
- One unlisted page listing the last fourteen days, newest first, grouped by source.
- No summarisation, no scoring, no public URL.

Anthropic and the Microsoft 365 roadmap get added when someone works out the access.
Until then they are checked by hand, which is once a week and takes two minutes.
