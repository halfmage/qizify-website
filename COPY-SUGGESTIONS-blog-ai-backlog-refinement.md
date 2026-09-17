# Copy Analysis & Suggestions: /blog/ai-backlog-refinement-product-owners
**Date:** 2026-09-17
**Page Type:** Blog post (educate and capture)
**Copy Score:** 82/100

---

## Executive Summary

The post does the hard part well. It opens on a moment the reader has actually
had, reframes it in one line, and then rescues them from the obvious
conclusion. The reframe, "it is more likely that you are on a licence that
cannot read your work", is the strongest sentence on the page and it arrives in
the fourth line.

Three things hold it back, and two are structural rather than sentence-level.

The closing call to action is a bold markdown link after 2,900 words of
reading. The mid-article card is a proper card with a button; the one at the
end, where a reader who has read everything is most likely to act, is weaker
than the one they met halfway.

The sources section sits between the content and the ask, so the last thing
before the CTA is a dry attribution paragraph.

And the third paragraph is the article talking about itself.

---

## Voice & Tone Profile

| Dimension | Score | Note |
|---|---|---|
| Formality | 3/5 | Plain professional, matches the guides |
| Emotion | 3/5 | Recognition, used precisely and not repeated |
| Complexity | 3/5 | Technical where the subject demands it |
| Humour | 1/5 | None, correct |
| Authority | 4/5 | Peer to peer, never lecturing |

Consistent with /ai-guides and with both PDFs. No drift.

---

## Score Breakdown

| Dimension | Score | Why |
|---|---|---|
| Clarity | 9/10 | Every paragraph is decodable on one pass |
| Persuasion | 9/10 | PAS structure, objection handled, and it argues against itself in "What AI Cannot Do" |
| Specificity | 9/10 | Named tiers, named products, four sourced figures, two copyable prompts |
| Emotion | 7/10 | One recognition beat at the top, correctly not repeated |
| Action | 7/10 | Strong mid-article card, weak closing link, and a sidebar CTA pointing elsewhere |

**Total: 41/50 (82/100)**

---

## Headline Analysis

**Current:** AI Backlog Refinement When Copilot Cannot Read Your Jira

| Criterion | Score | Note |
|---|---|---|
| Clarity | 9 | No jargon, no ambiguity |
| Specificity | 8 | Names both the tool and the system |
| Relevance | 9 | States a problem the reader has had this month |
| Differentiation | 9 | Nobody on page one says this |
| Emotion | 7 | Recognition rather than urgency, which suits the audience |

**Keep it.** Alternatives for future posts in the cluster only:

1. Your Copilot Cannot Read Your Backlog. Here Is What To Paste Instead.
2. AI Backlog Refinement Without Giving Away Your Backlog
3. What AI Actually Does In Refinement, And What It Cannot

---

## Value Proposition Canvas

| Element | Status |
|---|---|
| Target customer | Clear from line one, sharpened in paragraph three |
| Problem | Clear and felt: the tool looks useless and you assume it is you |
| Solution | Clear: it is a licence fact, and everything here works on any tier |
| Unique mechanism | The enterprise tool reality, which no competitor on page one covers |
| Key benefit | Refinement reaches the questions worth having |
| Proof | Four sourced figures, a named attribution section, two copyable prompts |

Complete.

---

## Before / After

**1. The meta paragraph**
```
BEFORE: That distinction matters more than any prompt technique, because it
        decides which half of this article applies to you. This is written for
        product owners in organisations that have bought Microsoft 365, which
        is most of them, and it covers what AI backlog refinement actually
        looks like when the tool cannot reach your backlog by itself.

AFTER:  That distinction decides everything else, so it is worth two minutes
        before any prompt advice. This is for product owners in organisations
        running Microsoft 365, which is most of them.

WHY:    The original announces what the article will do. A reader who has got
        this far has already decided to read it. Cutting the announcement gets
        them to the tier table a screen sooner.
```

**2. The mid-article card**
```
BEFORE: The free guide for product owners carries the full tier table, the
        prompt pack, and the five accountabilities worked through one at a time.

AFTER:  The free guide for product owners settles it in one table, then gives
        you the prompt pack and works through all five accountabilities one at
        a time.

WHY:    "Carries" describes contents. "Settles it" answers the question the
        card's own headline just asked.
```

**3. The closing CTA**
```
BEFORE: **[Get the AI guides for product managers and product owners](/ai-guides)**

AFTER:  A card matching the mid-article one, with a button.

WHY:    A reader who reaches the end of 2,900 words is the most qualified
        reader the post will produce, and they currently get a weaker ask than
        someone who bailed at the third heading.
```

**4. Section order**
```
BEFORE: ... Thirty Minutes A Week -> Where This Came From -> CTA
AFTER:  ... Thirty Minutes A Week -> CTA -> Where This Came From
WHY:    Attribution is a trust asset, not a closing argument. Putting it last
        keeps it available without making it the final thing read before the ask.
```

---

## CTA Optimization

| CTA | Where | Assessment |
|---|---|---|
| Get the guide, free | Mid-article card | **Strong.** Placed immediately after the reader learns their licence is the problem |
| Get the AI guides... | Closing line | **Weak.** A bold link in prose. Fixed this pass |
| Get a project quote | Sidebar, follows the scroll | **Wrong ask.** See below |

### The sidebar problem

`ctaVariant` offers only `demo` or `consultation`. Consultation is the closer
fit, but neither matches a post whose job is to hand over a free guide, and the
sidebar is the most persistent CTA on the page.

A third variant pointing at /ai-guides would fix it. That means touching seven
places in a layout shared by 44 posts, so it is flagged rather than done. It is
the right change if this cluster grows past two posts.

---

## Implementation Priority

1. Closing CTA becomes a card with a button. **Done this pass.**
2. Move attribution after the CTA. **Done this pass.**
3. Cut the meta paragraph. **Done this pass.**
4. Card copy answers its own headline. **Done this pass.**
5. Add a `guide` ctaVariant. **Open, and worth doing before post three.**
