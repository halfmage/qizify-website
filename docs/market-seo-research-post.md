# SEO Brief: "Lohnt sich KI in der Ausbildung?" (research-proof post)

Applies the market-seo framework to a *new* bilingual post (no live URL to audit yet).
Anchored to the validated DACH keyword research (2026-06-12).

## Keyword analysis

| Element | DE | EN |
|---|---|---|
| Primary keyword | lohnt sich KI in der Ausbildung | does AI help apprentices learn |
| Search intent | Commercial investigation / decision-stage | Commercial investigation |
| Secondaries | KI Ausbildung Erfahrungen, KI-Lernplattform Ergebnisse, bringt KI in der Ausbildung etwas, KI Ausbildung Studie | AI learning platform results, does AI learning work, AI apprenticeship study |
| Why this gap | Head terms (KI in der Ausbildung, KI-Tools, Ausbildung digitalisieren) already covered by existing posts. SERP for head terms owned by BIBB/Fraunhofer/KI-Campus/IHK. Decision-stage "lohnt sich / Erfahrungen / Ergebnisse" query has no LearnSlice page and is directly answerable with pilot data. |

Search intent match: the reader is an Ausbilder/Ausbildungsleiter weighing whether to adopt.
Content type = evidence-backed decision guide (not a sales page, not a generic how-to). The
pilot numbers are the differentiator and the E-E-A-T / AI-search signal.

## On-page targets

**DE**
- URL: `/de/blog/lohnt-sich-ki-in-der-ausbildung` (readable, keyword-rich, hyphens, lowercase: Pass)
- Title tag (<=60 chars): `Lohnt sich KI in der Ausbildung? Was eine Studie zeigt` (54)
- Meta (<=160): `Bringt eine KI-Lernplattform in der Ausbildung wirklich etwas? Was ein Uni-Pilot mit 50 Studierenden zu Lernerfolg und Quellen zeigt.` (143)
- H1 (differs from title): `Lohnt sich KI in der Ausbildung? Was der erste Uni-Pilot zeigt`

**EN**
- URL: `/blog/does-ai-learning-help-apprentices`
- Title tag: `Does AI Learning Actually Help Apprentices? Pilot Data` (54)
- Meta: `Does an AI learning platform actually help apprentices reach their goals? What a German university pilot with 50 students found about results and sources.` (156)
- H1: `Does an AI Learning Platform Actually Help Apprentices Learn?`

## Heading hierarchy (one H1, logical H2s carrying secondaries)

1. H1: the decision question
2. H2: Die kurze Antwort / The short answer (lead with the stat block for featured-snippet capture)
3. H2: Woran Lernen in der Ausbildung oft scheitert (reported gaps)
4. H2: Was der Uni-Pilot konkret gezeigt hat (results table: 100% / 40 of 50 / 35 of 50)
5. H2: Warum es funktioniert: nachvollziehbare, lehrplan-nahe Antworten (mechanism + lecturer quote)
6. H2: Wo KI (noch) nicht alles loest (limitations, honesty)
7. H2: Lohnt es sich fuer Ihren Betrieb? (decision checklist + soft CTA)
8. H2: FAQ (maps to FAQPage schema)

## Featured-snippet plays
- "Die kurze Antwort" H2 followed by a 40-60 word answer = paragraph snippet for "lohnt sich KI in der Ausbildung".
- Results table (property / Pilot-Ergebnis) = table snippet.
- FAQ Q/A = People-Also-Ask + FAQPage rich result (already wired in BlogLayout).

## Internal linking plan (5-8, descriptive anchors, deep links)
- `/research` <-> `/de/forschung` (the evidence hub): primary trust link
- `ki-in-der-ausbildung` <-> `ai-in-vocational-training`
- `ki-lernplattform-azubis` <-> `ai-learning-platform-apprentices` (buyer's guide)
- `ihk-pruefungsvorbereitung-digital` <-> `ihk-exam-preparation-digital`
- `ausbildung-digitalisieren` <-> `digitize-apprenticeship-training`
- `/companies` (conversion page): passes the research trust signal to a money page

## Schema / technical (handled by BlogLayout/BaseLayout)
- BlogPosting + FAQPage JSON-LD auto-emitted; keyTakeaways card for AI citation.
- hreflang en/de/x-default via page-pairs.mjs (must register the pair).
- Canonical self-referencing; robots index,follow; OG/Twitter inherited.

## Guardrails
- Do NOT name any competitor (denylist enforced by check-claims.mjs): simpleclub, prozubi,
  vocanto, cornelsen, ecademy, studyflix. Refer to "general AI tools" / "allgemeine KI-Tools".
- No em/en dashes anywhere.
- No effectiveness/superiority claim beyond docs/evidence-brief.md.
