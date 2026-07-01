# Copy Analysis & Suggestions: "E-Learning entwickeln lassen" (DE) / "Custom E-Learning Development" (EN)
Date: 2026-07-01
Page type: Blog post (commercial-investigation buyer guide)
Copy score: 80/100

## Executive summary
The copy is clear, specific, and well-structured for a B2B buyer guide. It leads with intent, defines the content-vs-software distinction cleanly, answers the cost question with concrete, now-cited numbers, and handles the main objections (build vs buy, DSGVO, IP ownership, maintenance). The `Sie`-form voice is direct and expert without being salesy, which fits the DACH decision-maker audience.

The two weakest levers are **emotion/proof** and **conversion focus**. The piece persuades rationally but pulls little emotionally, and it carries no first-party proof (no case, quote, or result). On conversion, the in-body strategy-call CTAs are good, but they are plain text links competing with the shared layout's product-demo button. Turning the primary CTA into a real button to the consultation and adding one proof element would lift conversion the most.

## Voice & tone profile
- Formality: 4/5 (professional `Sie`, not stiff)
- Emotion: 2/5 (rational, low pain/desire amplification)
- Complexity: 3/5 (accessible, correct terminology)
- Humor: 1/5 (serious, appropriate)
- Authority: 4/5 (expert peer)
Consistent across DE and EN. Matches the existing LearnSlice blog voice. Keep it; only nudge emotion up slightly in the intro and CTAs.

## Score breakdown (x2 = /100)
| Dimension | Score | Note |
|---|---|---|
| Clarity | 9/10 | Plain language, strong structure, content-vs-software framing is excellent. |
| Persuasion | 8/10 | Objections handled well; lacks proof/social proof to close. |
| Specificity | 9/10 | Concrete, cited numbers (cost ranges, timelines, 80-300h ratio). |
| Emotion | 6/10 | Some pain framing in the intro; otherwise rational. Room to amplify the cost-of-getting-it-wrong. |
| Action | 8/10 | Clear mid + closing CTAs with risk reversal; hurt by plain-text links and the competing layout demo CTA. |
| **Total** | **40/50 (80/100)** | |

## Value proposition canvas
- Target customer: DACH B2B decision-makers (L&D, HR, ops, founders) whose off-the-shelf e-learning no longer fits.
- Problem: standard software does not match their processes; DSGVO constraints; want AI + ownership.
- Solution: custom e-learning software engineering (the `/solutions` offer).
- Unique mechanism: didactics + engineering in one team, EU-hosted/sovereign, "you own the code", AI-native.
- Key benefit: a solution that fits exactly, that you own, that grows with AI, without the data-protection risk.
- Proof: **GAP.** Only third-party market data is cited. No LearnSlice case, result, testimonial, or logo in the article. This is the biggest persuasion gap.

## Headline recommendations
Current H1/title (DE): "E-Learning entwickeln lassen: Kosten, Ablauf und Auswahl 2026" - strong, keep as primary. Alternatives for A/B (ranked):
1. "E-Learning entwickeln lassen: Was es kostet und worauf Sie achten" (4U, clarity)
2. "E-Learning entwickeln lassen: Kosten, Ablauf und Anbieterwahl 2026" (adds buyer term)
3. "Individuelle E-Learning-Software: Kosten, Ablauf und Auswahl" (software-fit angle)
4. "E-Learning entwickeln lassen: der Kosten- und Auswahl-Leitfaden 2026" (guide framing)
5. "Was kostet es, E-Learning entwickeln zu lassen? Der Leitfaden 2026" (cost-first)
EN current: "Custom E-Learning Development: Costs, Process, and How to Choose" - trim to <=60 chars: "Custom E-Learning Development: Cost, Process & How to Choose".

## Section-by-section notes
- Intro: good decision-framing. Nudge emotion: name the cost of a wrong buy (wasted budget, a tool nobody uses, a compliance headache) before pivoting to the guide.
- Content vs software: excellent, keep.
- Cost: the strongest section (table + drivers + sourced). Add a one-line "what this means for you" after the table to convert cost-shoppers.
- Build vs buy: good comparison + mid CTA. Keep.
- Selection criteria: solid; this is where a proof point (one LearnSlice example) would land best.
- DSGVO/sovereignty: on-brand differentiator; keep.
- Conclusion + CTA: good; strengthen to a button (see CTA section).

## CTA optimization
Current CTAs (both correctly deep-link to the auto-opening consultation modal):
- Mid: "Unsicher, welcher Weg zu Ihnen passt? In einem kostenlosen Strategiegespraech umreissen wir Ihren Fall in 30 Minuten, ohne Pitch..." - strong (benefit + risk reversal). Keep.
- Closing: "Lassen Sie uns Ihr Projekt umreissen. Buchen Sie ein kostenloses Strategiegespraech: 30 Minuten, kein Pitch, am Ende eine konkrete Roadmap..." - strong.

Issues and fixes:
1. **Plain-text links, not buttons.** The primary action reads as body text. Recommend rendering the closing CTA as an actual button (via a component or the per-post `ctaVariant: "consultation"` layout flag) so it visually dominates.
2. **Competing layout CTA.** The shared BlogLayout still shows "Kostenlose Demo buchen" (product demo) in the sidebar/footer, splitting attention from the strategy call. Switch solutions-cluster posts to the consultation CTA.
3. **Add micro-proof next to the CTA** (2026 best practice): a one-line trust signal beside the button, e.g. "DSGVO-konform, EU-gehostet, Sie besitzen den Code." This lifts CTA conversion 10-20%.
4. Anchor text is good and value-laden; keep "kostenloses Strategiegespraech" over generic "hier klicken".

## Before / After examples

1) Intro emotional hook
BEFORE: "Most companies do not arrive at this question out of curiosity. They arrive because a finished tool is failing at a point that matters."
AFTER: "Most companies do not arrive here out of curiosity. They arrive after paying for a tool nobody uses, or after data protection killed the one they wanted. A wrong buy is expensive twice: the licence, and the year you lose."
WHY: names the cost of inaction (emotion + stakes) before the rational guide.

2) After the cost table
BEFORE: (table, then) "These are industry reference points, not quotes."
AFTER: add "For most mid-sized projects that means a five-figure investment that pays back in trainer time and licences avoided, not a six-figure gamble. A 30-minute call turns these ranges into a number for your case."
WHY: converts cost-anxiety into a next step; ties to the CTA.

3) Closing CTA (button copy)
BEFORE: text link "kostenloses Strategiegespraech"
AFTER: button "Strategiegespraech buchen (30 Min, kostenlos)" with sub-line "Kein Pitch. Am Ende eine konkrete Roadmap."
WHY: first-person value + risk reversal, visually a button.

4) Selection-criteria proof
BEFORE: "References and evidence. Proof over promises."
AFTER: add "For example, we built [X] for [client/sector]: [one concrete outcome]. See more on our solutions page."
WHY: turns an abstract criterion into first-party Experience/E-E-A-T.

5) Meta description (DE)
BEFORE: 167 chars, no CTA verb.
AFTER (~150): "E-Learning entwickeln lassen: Was es kostet, wie ein Projekt ablaeuft und worauf Sie achten. Mit Kostenrichtwerten, Checkliste und Anbieter-Kriterien."
WHY: shorter (no truncation), keeps keyword, adds a concrete promise.

## Swipe file
CTA button alternatives:
1. "Strategiegespraech buchen (30 Min, kostenlos)"
2. "Projekt in 30 Minuten umreissen"
3. "Kostenlose Roadmap-Session buchen"
4. "Machbarkeit kostenlos pruefen lassen"
5. "Erstgespraech buchen, ohne Pitch"

Micro-proof lines (place beside CTA):
1. "DSGVO-konform, EU-gehostet, Sie besitzen den Code."
2. "Kein Pitch. Am Ende eine konkrete Roadmap."
3. "30 Minuten. Kein Vertrieb, echte Einschaetzung."

EN CTA alternatives:
1. "Book a strategy call (30 min, free)"
2. "Outline your project in 30 minutes"
3. "Get a free roadmap session"

## Implementation priority
1. High: render the closing (and ideally mid) CTA as a real button + micro-proof line; switch the layout CTA for this cluster to the consultation modal.
2. High: add one first-party proof element (a mini example, result, or client logo) in the selection-criteria or cost section.
3. Medium: sharpen the intro hook and the post-cost-table "what this means for you" line for emotion/conversion.
4. Medium: trim meta descriptions (also in the SEO audit).
5. Low: A/B the headline variants above.
