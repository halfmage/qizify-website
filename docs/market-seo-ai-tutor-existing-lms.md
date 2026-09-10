# SEO keyword analysis: AI tutor on an existing LMS (feeds /solutions)

Stand: 2026-09-10. Owner: LearnSlice. Companion to `market-seo-custom-elearning.md`.

Goal: one bilingual blog pair (DE primary, EN mirror) that catches the buyer whose LMS is already
in place and whose built-in AI does not do what their learners actually need. Funnels to
`/solutions` (`/de/loesungen`), specifically the "Moodle setup and customisation" and "AI tutors
and chatbots" blocks.

Angle confirmed with stakeholder: **customisation because the existing tool does not work**. The
searcher is not shopping for a platform. They have Moodle or ILIAS, they switched on the AI
feature, and it summarises text instead of answering questions about their courses.

Method note: research is SERP-based (live DACH + US results, competitor titles, intent) plus
primary-source verification of the LMS AI feature sets. WebSearch is US-based, so DACH rankings
are directional and volumes are qualitative, not tool-verified. If you paste Ahrefs/SEMrush data
later, re-rank on real numbers.

---

## 0. Source status (read before writing)

**Verified at the issuing source, safe to state as fact:**

- Moodle's AI subsystem defines exactly three actions: `generate_image`, `generate_text`,
  `summarise_text` (Moodle Developer Resources, AI subsystem, 4.5/5.0).
- The Course Assistant placement "allows users to gain access to the Course Assistant. This AI
  tool enables users to have information within their course summarised by the integrated AI"
  (same source). Summarisation of what is on the page, not retrieval across a course library.
- All AI placements are disabled by default and are switched on per placement, with access
  controlled by administrator-configured permissions assigned by role (MoodleDocs, AI placements).
- Supported providers include OpenAI, Azure AI, Google Gemini, AWS Bedrock, Groq, and the
  self-hostable options Ollama, LiteLLM and LocalAI (MoodleDocs, AI providers).
- Moodle's own documentation does not describe retrieval over an institution's own course corpus.
  State this as "the documented feature set does not include it", never as "Moodle cannot do it".

**Vendor marketing, do NOT cite as fact:**

- "LTI 1.3 setup takes under 30 minutes" and similar (LearnWise, TutorFlow, iTutor, AristAI,
  Criterium product pages). Use as competitor-positioning intelligence only.
- Any AI-tutor pricing found on provider blogs. We have no validated integration cost benchmark
  for this article yet. See section 6 (open items).

**Needs verification before it goes in the copy:**

- ILIAS AI feature scope. The Gießen pilot page describes chat, text generation, question
  generation, keyword suggestions and translation, i.e. authoring assistance. Confirm against
  docu.ilias.de before naming ILIAS explicitly.
- LTI 1.3 Advantage capability names (Deep Linking, Names and Role Provisioning, Assignment and
  Grade Services). Verify at 1EdTech, not at a vendor.

---

## 1. The core strategic finding: the wedge is a documented feature gap

Every other article in the custom development cluster argues from the buyer's ambition (build vs
buy, what it costs, how to pick a vendor). This one argues from a fact the reader can check in
their own admin panel in sixty seconds.

The native AI in the major open-source LMS platforms is **authoring and summarisation
assistance**. It helps a course author write faster and lets a learner shorten a page. It is not
a tutor. It does not know the other forty courses in the catalogue, it does not remember the
learner between sessions, it does not assess against a syllabus, and it cannot cite a source in
the institution's own material.

So the reader's experience ("we turned on the AI and it was useless for learners") is not a
configuration mistake and not a bad-vendor story. It is the product working as documented. That
reframing is the whole article, and it converts because it ends on a build decision rather than a
switch-platforms decision, which is the cheaper and more likely next step for a Bildungsträger
sitting on years of Moodle content.

**Second finding: the DACH SERP is contested but only by small players.** lern.link (KI-Tutor für
Moodle), alphabees (AI-Tutor comparison listicle), ccb21 (Clara chatbot), LearnWise (Moodle and
Canvas integrations), plus the community `block_ai_chat` plugin in the Moodle directory. No
authority site owns this. Compare with the custom e-learning cost SERP, where entrenched agencies
made the head term a slog. This one is winnable.

**Third finding: the comparison listicle already exists** (alphabees, "Die besten KI-Tutoren für
Moodle im Vergleich"). Do not write a second one. Write the decision layer above it: what the
native AI actually does, why grounding is the thing that breaks, and when you stop buying a
plugin and commission a layer you own.

---

## 2. DACH keyword clusters (PRIORITY)

**Cluster 1 - Integration intent (primary, commercial):**
- KI in Moodle integrieren
- KI-Tutor Moodle / KI-Tutor für Moodle
- Moodle KI Plugin / Moodle Chatbot
- LMS mit KI erweitern
- KI-Lernassistent LMS
- bestehendes LMS um KI erweitern

**Cluster 2 - Problem-aware / failure (secondary, highest article-market fit):**
- Moodle KI funktioniert nicht / bringt nichts
- KI-Assistent kennt unsere Kursinhalte nicht
- Standard-LMS KI Grenzen
- KI-Chatbot antwortet falsch Lerninhalte
- warum Moodle KI keine Fragen beantwortet
Lower and more scattered volume than cluster 1, but this is the exact intent the stakeholder
asked for. Capture it in H2 phrasing and FAQ questions rather than in the title.

**Cluster 3 - Compliance and sovereignty (differentiator, we own this):**
- Moodle KI DSGVO / DSGVO-konformer KI-Tutor
- KI-Tutor EU-Hosting / KI im LMS ohne US-Cloud
- Moodle Ollama / LMS KI selbst hosten
Note the strong tie-in: Moodle's documented provider list already includes Ollama, LiteLLM and
LocalAI, so "self-hosted model behind your LMS" is a supported architecture, not an exotic ask.
This is the cleanest bridge to `individuelle-ki-open-source-modelle`.

**Cluster 4 - Platform long tail (cheap incremental reach):**
- ILIAS KI-Assistent, Open edX KI, Canvas KI-Tutor, Blackboard KI
Handle in one comparison table row each, not in dedicated sections.

---

## 3. US keyword clusters (MID priority)

- add AI tutor to existing LMS
- Moodle AI integration / Canvas AI tutor
- LTI 1.3 AI tutor
- AI layer for LMS
- why LMS AI does not answer course questions

SERP reality: dominated by AI-tutor SaaS product pages (LearnWise, AristAI, TutorFlow, iTutor)
and their comparison content. These are products, not agencies, so they all end at "subscribe to
our tutor". None of them ends at "own the layer, host the model, keep the data".

Recommendation for EN: same call as the cost article. Treat the EN mirror as long-tail catch and
support for `/solutions`, lean on the ownership and sovereignty ending that the SaaS pages
structurally cannot write, and do not fight for the head term.

---

## 4. Recommended target + article

**Primary DE keyword:** "KI in Moodle integrieren", reinforced by "KI-Tutor Moodle" and
"bestehendes LMS um KI erweitern".

**Primary EN keyword:** "add AI tutor to existing LMS", reinforced by "Moodle AI integration".

**Slugs:**
- DE: `/de/blog/ki-tutor-in-lms-integrieren`
- EN: `/blog/ai-tutor-for-existing-lms`

Alternative DE slug if we want the platform name in the URL: `ki-tutor-moodle-integrieren`.
Rejected as the default because it costs us the ILIAS, Open edX and Canvas long tail for one
platform's volume.

**Working titles (no em/en dashes, keep under about 60 characters):**
- DE: "KI-Tutor ins bestehende LMS integrieren"
- EN: "Add an AI Tutor to the LMS You Already Have"

**Proposed H2 outline:**

1. Intro: you switched on the AI in your LMS and the learners stopped using it after a week
2. Was die eingebaute KI Ihres LMS wirklich kann (the verified feature set: three actions,
   Course Assistant summarisation, placements off by default, the provider list; this is the
   article's proof section and its snippet magnet)
3. Die fünf Dinge, die ein Lernbegleiter zusätzlich können muss (grounding in your own corpus
   with citations, learner state across sessions, assessment against the syllabus, adaptivity,
   guardrails against confident wrong answers; each one named as the reason the built-in tool
   felt useless)
4. Warum "der Chatbot kennt unsere Inhalte nicht" kein Konfigurationsfehler ist (RAG explained in
   buyer language, links up to `individuelle-ki-open-source-modelle`)
5. Drei Wege: Plugin, SaaS-Tutor per LTI, oder eigene Schicht (the decision table; this replaces
   a build-vs-buy section and is the anti-cannibalisation move, see guardrail below)
6. Wie die Anbindung technisch läuft (LTI 1.3, SSO, Ergebnisrückgabe per xAPI oder Grade
   Services, was im LMS bleibt und was daneben steht; keep it short and concrete)
7. DSGVO, EU-Hosting und wem die Konversationen gehören (the sovereignty close; note that the
   LMS's own provider list already supports self-hosted models)
8. Was das kostet und wie lange es dauert (see open items, section 6)
9. Fazit + CTA to `/de/loesungen`

**Copyable artifact (cluster precedent, matches the vendor scorecard in the cost guide):**
"LMS AI readiness check". Roughly twelve yes/no questions the reader can run against their own
installation and their plugin or SaaS shortlist: does it answer from our own material, does it
cite the source document, does it remember the learner, can we see and export the conversations,
where does the model run, can we swap the model, do we keep the data if we stop paying. Grounded
entirely in sections 2 and 3 above it. No new claims.

**keyTakeaways (4 to 5)** and **FAQ (6 to 8)** for FAQPage schema. FAQ candidates:
- Kann Moodle von sich aus Fragen zu unseren Kursinhalten beantworten?
- Was ist der Unterschied zwischen einem KI-Chatbot und einem KI-Lernbegleiter?
- Müssen wir unser LMS ablösen, um einen KI-Tutor zu bekommen?
- Wie wird ein externer KI-Tutor an Moodle oder ILIAS angebunden?
- Ist ein KI-Tutor im LMS DSGVO-konform?
- Können wir ein eigenes Modell hinter unser LMS hängen?
- Wem gehören die Gespräche zwischen Lernenden und der KI?
- Was kostet die Anbindung?

**Internal links:**
- Up to `/de/loesungen` (hub, 2 to 3 times), `/de/companies`
- `/de/blog/individuelle-ki-open-source-modelle` (self-hosting the model behind the LMS)
- `/de/blog/ki-lernbegleiter-entwickeln-lassen` (once the reader decides to commission the layer)
- `/de/blog/dsgvo-konforme-ki-tools-fuer-ausbilder` (compliance section)
- `/de/blog/lernplattform-bildungstraeger` (only from the "when the LMS itself is the problem" aside)
- EN mirror to the same set plus `/solutions` and `/companies`
- Register the pair in `src/utils/page-pairs.mjs` and run `npm run check:pairs`

**House rules:** no em or en dashes; never mention the competitor named in the standing rule;
author "LearnSlice Team"; keyTakeaways and faq plain text only; `ctaVariant: "consultation"`.

---

## 5. Cannibalisation guardrail

Four existing pages sit close to this one. The separation must be enforced in the copy, not just
assumed:

- `custom-ai-tutor-development` / `ki-lernbegleiter-entwickeln-lassen` owns **build, buy or
  white-label a tutor, and what it costs**. The new article must not re-run that comparison. When
  the reader reaches "commission your own layer", link out and stop.
- `custom-e-learning-development-costs` / `e-learning-entwickeln-lassen` owns **build vs buy and
  vendor selection**, and now carries the vendor scorecard. Section 5 of the new article is a
  three-way integration-route table (plugin, SaaS via LTI, own layer), not a build-vs-buy section.
- `lernplattform-bildungstraeger` / `learning-platform-training-providers` already has an H2
  titled "Warum Standard-LMS an dieser Aufgabe scheitern". That post argues **replace the
  platform** for regulated exam prep. This one argues **keep the platform, add the layer**. Make
  the difference explicit in one sentence so both pages read as deliberate.
- `/solutions` and `/de/loesungen` own the head terms. The article links up, never competes.

---

## 6. Open items before drafting

1. **No validated cost anchor yet.** Every number found so far is vendor marketing. Either derive
   the range from our own delivered integrations, or write section 8 qualitatively (what drives
   the number: corpus size and cleanliness, number of courses, SSO, whether results flow back to
   the gradebook) and leave the figure to the call. Do not borrow a number from a provider blog.
2. **Verify ILIAS scope** at docu.ilias.de before naming it.
3. **Verify LTI 1.3 Advantage service names** at 1EdTech before section 6 goes in.
4. **Confirm Moodle version wording.** The AI subsystem arrived in 4.5 and the docs cited are
   4.5 and 5.0. Say "Moodle 4.5 and later" rather than a bare version number.
5. **Hero image** needed. Cluster convention is a jpg for `ogImage` plus a webp for `heroImage`
   under `/images/blog/`.

## 7. Open fork for stakeholder

Which platform gets top billing in the title and H1?
- (A) **Moodle named** ("KI-Tutor in Moodle integrieren"). Highest DACH volume, strongest match
  to the Bildungsträger install base, but narrows the page.
- (B) **Platform-neutral** ("KI-Tutor ins bestehende LMS integrieren"). Catches ILIAS, Open edX,
  Canvas and Blackboard long tail and ages better, at the cost of some head volume.
- Recommended: (B) in the title and slug, with Moodle named in the H1's first paragraph, in the
  proof section and in the comparison table. We get the neutral URL and the Moodle relevance.
