# Comparison & Claims Policy

Internal policy for any comparative or superiority claim on the LearnSlice site. Written after the
simpleclub GmbH UWG complaint (May 2026) over false statements on a competitor comparison page.
This file is internal — it is **not** deployed (only `src/pages` and `public/` are served).

Enforced automatically by `scripts/check-claims.mjs` (runs in `prebuild`).

## Rules

1. **Do not name a competitor** anywhere in shipped content (pages, blog, feeds, nav) without prior
   legal sign-off. Comparisons must be framed by **category** ("video-based IHK tools", "publisher /
   enterprise LMS", "animated-video platforms", "traditional training"), not by company name.
2. **No binary negatives about others** ("not available" / "nicht verfügbar", "no X", "only X"). If a
   competitor/category capability can't be substantiated, write "varies by provider" or omit the row.
3. **No disparaging adjectives** ("basic", "limited", "begrenzt", "Basis-…") about others.
4. **Every superiority / quantified claim about LearnSlice needs a dated source** (study, internal
   data, customer result). Unsourced numbers must be framed as illustrative estimates or removed.
5. **EN and DE must match.** Never let one language state more or less than the other (the simpleclub
   page said less in German than English — that inconsistency was used against us).

## Competitor denylist (hard-fail in the scanner)

`simpleclub`, `prozubi`, `vocanto`, `cornelsen`, `ecademy`, `studyflix`. Add new rivals here as they
come up. The scanner fails the build if any appears in `src/` or the generated `public/llms*.txt`.
(`public/_redirects` is intentionally exempt — it keeps the old competitor URLs alive as 301s.)

## Risky phrases (warn in the scanner, on comparison pages)

`not available`, `nicht verfügbar`, `basic `, `basis-`, `limited`, `begrenzt`. Warnings don't block
the build but should be reviewed before shipping.

## How it runs

- `npm run check:claims` — run the scanner directly.
- `prebuild`: `check-pairs && generate-llms-full && check-claims` — generation happens first so the
  scanner also validates the freshly generated AI feed.

## Claims register

Every public superiority/quantified claim and its evidence. **`NEEDS SOURCE`** = currently
unsubstantiated; attach a source or reframe/remove before relying on it. Update "Last verified" when
checked.

| Claim | Where it appears | Source / basis | Last verified |
|---|---|---|---|
| "65% faster" / "8 weeks to productivity" | traditional-training (EN+DE), homepage | Cost-calculator model (6 → 2 months ≈ 67%) | Mai 2026 |
| "50% less trainer time" / "€9K saved" | traditional-training, homepage | Calculator (200 of 400 h × €45) | Mai 2026 |
| Dropout "30% → 15% (halved)" | traditional-training, calculator | Calculator default; 30% = German market (BIBB) average | Mai 2026 |
| Savings "up to €15K / apprentice / yr" | traditional-training, homepage | Calculator (~€17K at default inputs; site uses conservative €15K) | Mai 2026 |
| "Up to €75K / yr (5 apprentices)" | homepage | Calculator (€15K × 5; conservative vs model ~€87K) | Mai 2026 |
| ~~"€37,000+" cost / "save €21K+"~~ | (removed) | REMOVED — replaced with calculator-based "up to €15K" savings framing | Mai 2026 |
| External IHK prep "€500–€2,000" | traditional-training | NEEDS SOURCE (typical external course range) | — |
| "4.8/5 rating", "30+ companies" | homepage | NEEDS SOURCE (internal data) | — |
| "BMWE AI Prize 2025", "FH Dortmund partnership" | homepage | Verifiable (award/partner) — attach proof | — |
| LearnSlice "Germany only" data hosting | comparison pages, homepage | Confirm current infra | — |

> The traditional-training pages cite the cost calculator (BIBB averages) as the basis and link to
> it; figures use "up to" framing. The calculator is the single source of truth — keep page numbers
> consistent with it (currently a conservative €15K/apprentice vs the model's ~€17K at defaults).
> Remaining `NEEDS SOURCE` rows still need a real source or a clear "typical estimate" label.
