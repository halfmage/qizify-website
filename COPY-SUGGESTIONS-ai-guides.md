# Copy Analysis & Suggestions: /ai-guides
**Date:** 2026-09-17 (re-run, current page state)
**Page Type:** Landing page, gated lead magnet, learning-led
**Copy Score:** 80/100

---

## Executive Summary

The copy is now doing what the strategy asks of it. It opens on a number pair
nobody else in this category can match, gives the knowledge away without
conditions, and states the three commercial routes once, late, and only as
facts. The voice is restrained and evidence-led throughout, which is correct
for an audience that discounts marketing language by reflex.

Two things hold it back, and only one is inside the page body.

The first is a live contradiction. The body says a conversation is yours to
start. The site header, visible on the same screen, carries **Book Free Demo**
three times. The claim was reworded this run so it is at least accurate, but
the header still pulls against the whole position.

The second is that the page asks for the weekly email as a checkbox inside a
form about something else. The strategy names the weekly as the conversion that
matters. The copy does not treat it that way.

---

## Voice & Tone Profile

| Dimension | Score | Note |
|---|---|---|
| Formality | 3/5 | Plain professional. No corporate register, no slang |
| Emotion | 3/5 | Up from 2. Recognition plus a stated motive |
| Complexity | 3/5 | Technical only where the subject demands it |
| Humour | 1/5 | None. Correct for the audience |
| Authority | 4/5 | Expert, peer to peer, never lecturing |

Unchanged and worth protecting. Every rewrite below stays inside it.

---

## Score Breakdown

| Dimension | Score | Why |
|---|---|---|
| Clarity | 9/10 | Learning-first opening, plain sentences, nothing unexplained |
| Persuasion | 8/10 | Indirect and well-structured. Costs a point to the header contradiction |
| Specificity | 9/10 | 97 and 64, named sources, named author, page counts, real address |
| Emotion | 7/10 | The motive is now stated once, which was the gap. Still a restrained page by choice |
| Action | 7/10 | One honest CTA in first person, but a competing nav CTA and an under-sold weekly |

**Total: 40/50 (80/100)**

---

## Value Proposition Canvas

| Element | Status |
|---|---|
| Target customer | Clear. Product managers and product owners, split by role in the body |
| Problem | Clear. AI made me faster, not better |
| Solution | Clear. Two role-specific guides built to be applied |
| Unique mechanism | **Now stated.** A learning company, every figure traced, a practice routine rather than a prompt list |
| Key benefit | Clear |
| Proof | Named author, named sources, no testimonials. Correct for this audience |

The canvas is complete for the first time. The mechanism was the gap and the
learning-first rewrite closed it.

---

## Headline Recommendations

Current H1 is strong and should stay: a 4U headline carrying two specific
numbers, an implied problem and no adjective. Alternatives for testing only.

| # | Headline | Framework |
|---|---|---|
| 1 | 97% of product managers say AI made them faster. Only 64% say it made their product better. | 4U *(current, keep)* |
| 2 | Faster is not better. The gap is 33 points wide. | PAS |
| 3 | Your Copilot cannot read your backlog. That is a licence, not a skill problem. | PAS |
| 4 | Learn it in an evening. Apply it in thirty minutes a week. | Before-After-Bridge |
| 5 | Two AI guides for product roles, every figure traced to its source. | Useful, plain |

---

## Section-by-Section

### Hero
Working. No change recommended.

### Role sections
Working, and now carrying their keyword phrases. No change.

### "Learn it here, then apply it"
The strongest section on the page, and correctly placed after everything has
been given away. No change.

### The weekly opt-in
**The weak point.** It is one checkbox inside a form about downloading a PDF,
described in a single line. The strategy says it is the conversion that
compounds. Nothing in the copy reflects that.

```
BEFORE: Send me the weekly update: one change that matters, one prompt,
        one thing worth reading. Five minutes, unsubscribe whenever.

AFTER:  Send me the weekly. One change that matters, one prompt, one thing
        worth reading, and one line on what we got wrong last week. Five
        minutes, unsubscribe whenever.

WHY:    "What we got wrong last week" is already promised inside both
        guides and is the most disarming line available. It is missing
        from the page, which is where the decision is actually made.
```

---

## CTA Optimization

| CTA | Location | Assessment |
|---|---|---|
| Get my guide, free | Form submit | Good. First person, names the object, removes the price objection at the click |
| Download the PDF | Success state | Good. Plain and unambiguous |
| **Book Free Demo** | Site header, 3 instances | **Works against the page.** See below |

### The header problem

This page's entire position is that the reader moves first. The header offers a
booked demo before the reader has read a sentence. A visitor who reaches the
closing section sees the honest claim and the demo button at the same time.

Three options, in order of preference:

1. **Override the header CTA on this page** to point at the form, for example
   "Get the guides". The Header component already accepts a `cta` prop, so this
   is a small change, though the modal trigger needs matching behaviour.
2. **Suppress the header CTA here.** Cleanest for the position, largest
   deviation from the rest of the site.
3. **Leave it and accept the mismatch.** Defensible if the nav is judged more
   valuable sitewide than this page's positioning.

This is a judgement call about site consistency, so it is flagged rather than
changed.

---

## Before / After from this run

**1. The no-sales claim**
```
BEFORE: No call to book, no sales sequence. Nothing is emailed to you that
        you did not ask for.
AFTER:  Downloading starts no sales sequence, and nothing is emailed to you
        that you did not ask for. If you want a conversation, you start it.
WHY:    The old line was contradicted by the header three times over. The
        new one is true whatever the nav does, and keeps the position.
```

**2. Section heading**
```
BEFORE: Who makes these, and what else we do
AFTER:  Learn it here, then apply it
WHY:    Carries the through-line instead of describing the section.
```

**3. Opening of that section**
```
BEFORE: LearnSlice builds AI systems that run on an organisation's own material
AFTER:  LearnSlice is a learning company that builds with AI
WHY:    The old line described an engineering shop that happens to publish.
        The new one explains why the guides are free.
```

---

## Implementation Priority

1. **Decide the header CTA question.** Largest single copy issue on the page and
   the only one that undermines a claim. Open.
2. **Give the weekly its missing line.** One sentence, and it is the conversion
   the strategy cares about most. Open.
3. Everything else: done this session.
