# Customer Segmentation & Go-to-Market Strategy

Stand: 2026-06-23. Owner: LearnSlice (5 people). This is the working strategy doc; revisit when traction or funding programs shift.

## 1. The company in one paragraph

LearnSlice builds custom educational software: AI learning chatbots/tutors, custom LMS (or extensions to Moodle/ILIAS), and serious games. We sell **custom software projects** (capex builds, optionally followed by a managed run/maintenance contract), **founder-led**, as a **few larger deals** rather than high-volume self-serve. Market scope is **DACH** (Germany, Austria, Switzerland). Four strengths: low cost, fast implementation, data processing in Germany (sovereignty / GDPR / no third-party model training), and innovation.

Hard operating constraint: with 5 people and a project-based cash model, we **cannot absorb 12-to-18-month sales cycles**. Speed-to-cash is a selection criterion, not a nice-to-have.

## 2. The filter we segment by

A segment is attractive for us only if it scores on all four:

1. **Capex fit:** the buyer can fund a one-off custom build (not only per-head opex).
2. **Speed-to-cash:** realistic sales cycle under ~6 months; ideally 1-3.
3. **Founder-closable:** one identifiable economic buyer we can reach directly, not a tender committee.
4. **Strength leverage:** our low-cost / fast / data-in-Germany / innovation edge is decisive, not incidental.

## 3. Segment ranking (decision)

| Rank | Segment | Capex | Speed | Founder-closable | Verdict |
|---|---|---|---|---|---|
| **1** | **Corporate L&D / upper Mittelstand** (regulated sectors first) | Strong | 1-4 mo | Yes (no procurement law) | **Primary engine** |
| **2** | **Bildungsträger** (AZAV / Weiterbildung / reha) | Weak (opex funding) | 1-3 mo | Yes (private commissioning) | **Secondary, with funding-aware framing** |
| **3** | **Public-sector academies / Verwaltung** (incl. police, defense, healthcare academies) | Strong | 3-9 mo below threshold | Partly | **Selective, sovereignty-led, slow-burn** |
| - | **IHK / HWK chambers** | Modest | 6-12 mo | Committee | **Reference logos only, not pipeline** |
| OUT | **Universities / Hochschulen** | Strong (rich grants) | **12-18 mo** | Yes, but cycle too long | **Excluded: sales cycle starves cash** |
| OUT | **Vocational schools / K-12** | None at school level | Slow, state-controlled | No | **Excluded: no capex + free state chatbot (telli) crowds the market** |

### 3.1 Why universities are out (even though the money is there)

Universities have the richest named funding pots in the market (Stiftung Innovation in der Hochschullehre up to EUR 3.5M/project; BMBF "KI in der Hochschulbildung" EUR 133M; Austria's EUR 50M Hochschul-Digitalisierung pot; the Swiss swissuniversities program). But the path from first contact to signed money runs through grant calls, committees, and academic budget cycles, typically 12-18 months. For a 5-person, cash-sensitive shop that is disqualifying. We **park** this segment: if we later have runway to carry a long pipeline, the grant-winner lists are the warmest re-entry point. Until then, no investment.

## 4. Priority segment playbooks

### Priority 1: Corporate L&D / upper Mittelstand

The cleanest fit on every axis. Private buyers means **no procurement law**, real capex budgets, and the fastest decisions. We already have proven traction here.

- **Sub-targeting:** lead with **regulated sectors** (banking, insurance, pharma, healthcare, energy) where data-in-Germany is a binary buying filter and where works councils (Betriebsrat) scrutinize employee-data tools. Avoid the DAX top tier (owned by imc / youknow / Scheer IMC); target the upper Mittelstand that is too small for enterprise LMS sales motions but large enough to fund a custom build.
- **Hot use cases (demand-validated 2025-2026):** serious games for **safety/compliance training** (Arbeitssicherheit, Brandschutz, VR safety; live at RheinEnergie, Fraunhofer IFF + BG RCI), onboarding/upskilling AI tutors, and custom LMS for first-time adopters in the Mittelstand.
- **Deal sizes (market reference):** custom serious games from ~EUR 7k to six figures; custom e-learning modules EUR 1,365-5,300+ each.

### Priority 2: Bildungsträger (repositioned to custom project)

Private commissioning means **fast** cycles, and our low-cost positioning fits their price sensitivity. The catch is funding: Bildungsträger revenue is **per-participant opex** (Bildungsgutschein / AZAV, settled against Bundesdurchschnittskostensätze), so a one-off capex build does not map onto a natural budget line.

- **Decision (this supersedes the prior page positioning):** reposition from "managed per-seat subscription" to **"custom project + optional managed run."** See the exact copy spec in section 7.
- **Funding-aware framing is the unlock:** position the build cost as recoverable inside Maßnahmekosten / Sachkosten where the accreditation allows, and offer the optional managed-run contract as the opex piece that fits their settlement model. Validate Sachkosten recoverability with a real provider before scaling the claim (already flagged in the existing sales kit README).
- **Active demand driver:** the EU AI Act KI-Kompetenz duty (in force since Feb 2025) is pushing AZAV providers toward AI upskilling content; IU already brought an AI assistant into Bildungsgutschein-funded continuing education.

### Priority 3: Public-sector academies / Verwaltung (selective, sovereignty-led)

This is the segment where our **single sharpest USP (data processing in Germany) is a mandatory procurement gate**, not a preference. Post the June 2025 Microsoft CLOUD-Act admission, German public data must be processed on German soil by vetted staff (Deutsche Verwaltungscloud live since April 2025; Bundeswehr/police on STACKIT; BfDI guidance). US hyperscalers are structurally disqualified, which is rare leverage for a small shop.

- **The catch:** procurement. Full EU tender kicks in above EUR 216k net; below that, many states allow **negotiated/invited award (Verhandlungsvergabe)**, and Direktauftrag is rising toward EUR 50k. So the winnable shape is a **build priced EUR 50k-216k, awarded by negotiation, no EU-wide tender**, or entering as a **subcontractor** to a larger framework holder.
- **Treatment:** slow-burn, not the cash engine. Pursue 1-2 lighthouse deals where sovereignty closes it for us automatically. Do not staff the pipeline as if it were the primary motion.

### IHK / HWK: reference logos, not pipeline

79 IHKs + 53 HWKs. Too few and too procurement-bound to be a volume channel, but each is a hub touching thousands of Ausbildungsbetriebe. Pursue selectively for the **reference value**; ideal route is DIHK-level shared tooling to win many chambers through one relationship.

## 5. Positioning and differentiation

No DACH vendor credibly bundles all three of our offerings. The market is three non-overlapping silos: SaaS AI-tutor startups (fobizz, Knowunity), slow legacy-LMS integrators (Moodle/ILIAS partners), and bespoke serious-games studios (the Good Evil, Pfeffermind). Buyers stitch three suppliers together. Custom WBT is sold at ~10-12 weeks per learning-hour, and pricing is hidden behind demos almost everywhere.

**Core positioning line:**
> The German-hosted shop that ships your custom AI tutor, lightweight LMS, and serious game as one integrated, EU-AI-Act-ready project, in weeks, at a fixed transparent price.

Four wedges competitors leave open, each mapping to one of our strengths:
- **Integration:** one vendor for tutor + LMS + game vs today's three-supplier stitch.
- **Sovereignty by default:** German/EU hosting, no US cloud, no third-party model training; now a procurement filter, not a feature.
- **Speed:** weeks vs the WBT norm.
- **Price transparency:** published, fixed pricing in a market that hides behind demos.

## 6. Go-to-market motion (built for 5 people, founder-led)

The model is **account-based, not volume inbound.** SEO and lead magnets support; they are not the engine.

1. **Tiered target lists per priority segment.** Corporate: regulated-sector upper Mittelstand adjacent to current customers. Bildungsträger: multi-site AZAV providers with a digital signal. Public sector: Verwaltungsakademien, Studieninstitute, police/healthcare academies.
2. **Funding-aware selling.** For Bildungsträger, frame cost recovery inside Maßnahmekosten. For public sector, scope to fit under the EUR 216k negotiated-award threshold. Turn "can we afford it?" into "this is the funded deliverable."
3. **Land small, expand.** Open every deal with a fixed-price discovery/prototype (2-3 weeks). De-risks the buyer, fits founder-led selling, converts to the full build, and resolves the project-vs-recurring tension: project to land, optional managed run to retain.
4. **Proof over reach.** Three assets matter more than any traffic push: (a) named case studies from current corporate + IHK/HWK wins, (b) a one-page data-sovereignty + EU AI Act trust sheet (gate-clearer for regulated corporate and public sector), (c) an ROI / cost comparison vs the three-supplier stitch.
5. **Channels:** founder LinkedIn 1:1 (UWG-compliant, no cold mass mail), LEARNTEC Karlsruhe, public-sector digitalization events, and partnerships with Moodle/ILIAS integrators (we become their AI / serious-games layer).
6. **DACH nuance:** German regulatory hooks (BFSG, AZAV) do not travel to Austria/Switzerland. For AT/CH, lead with sovereignty + innovation (Austrian Hochschul-Digitalisierung context; Swiss Apertus sovereign LLM, swissuniversities). Do not paste German law onto AT/CH pages.

## 7. Action items on existing assets

### 7.1 Reposition the Bildungsträger page to custom project (approved)

File: `src/content/en.json` and `src/content/de.json`, `trainingProviders` section (and FAQ funding answer).

- Change the pricing headline from "Planned as a subscription, not a large investment" to a custom-project framing, e.g. "A custom build that fits how you are funded."
- Change the body from "managed per-seat subscription / ongoing operating expense" to: fixed-price custom project, with an optional managed-run contract, and cost recovery framed inside Maßnahmekosten where accreditation allows.
- Update the FAQ "How is this funded?" answer the same way.
- Keep BFSG/AZAV hooks for the German page only; do not extend them to AT/CH.

### 7.2 Fix the EU AI Act claims sitewide (accuracy)

Appears in `src/content/en.json` (and likely the general/companies pages, not only training-providers):
- The "Up to EUR 35M or 7%" figure (`en.json:609`) is the ceiling for **prohibited** practices (Art. 5). For **high-risk** obligations (which is what educational AI is) the ceiling is **EUR 15M or 3%** (Art. 99). Correct the figure or relabel which tier it cites.
- Timeline: the **Digital Omnibus (provisional agreement May 2026) postponed high-risk Annex III obligations to 2 Dec 2027.** Only transparency duties (Art. 50) land 2 Dec 2026; AI-literacy has applied since Feb 2025. Update any copy implying high-risk obligations bite in 2026.

### 7.3 Do not build yet

Universities and dedicated public-sector pages are **not** priorities given the cash/cycle constraint. Hold. The corporate segment already has `/companies`; verify it leads with regulated-sector + serious-games-for-compliance messaging, which is our fastest path.

## 7a. Two businesses, one website (information architecture)

The site runs two distinct businesses that must stay legible as separate offerings while sharing one domain and brand:

- **Business A: SaaS / Ausbildung (the product).** Homepage (`/`), `/companies`, `/schools`, `/agencies`, the savings calculator, the `learnslice-vs-*` comparison pages, and the apprenticeship blog cluster. Motion: product demo (Calendly, DemoRequestModal). Buyer: Ausbildungsbetriebe. **Leave this lane as-is.** Do not broaden `/companies` into corporate L&D.
- **Business B: Software engineering (custom projects).** Hub at `/solutions` (DE `/loesungen`), "Custom development, engineered end to end," with the correct "Book a strategy call" / project-inquiry motion. Segment page: `/training-providers` (Bildungsträger). Buyer: the priority segments in section 3 (corporate L&D/compliance first).

### Current problems (audit findings, 2026-06-23)
1. **Nav blends the two.** `/training-providers` (Business B) sits inside the "Customers" mega-menu next to SaaS segments (Business A). "Solutions" is a lone top-level link with no children.
2. **`/solutions` is an orphan hub.** No internal links anywhere in page bodies or blog point to `/solutions` or `/training-providers`; they are reachable only from nav. No SEO roots.
3. **Hub is disconnected from its segment.** `/solutions` "Sectors we build for" does not link to `/training-providers`.
4. **Hub audiences list is off-strategy.** It still lists "Higher education" (dropped: 18-month cycle) and overlaps Business A ("Vocational training and schools"). Should foreground corporate L&D/compliance, Bildungsträger, public sector.

### How to build Business B organically (no separate microsite)
1. **Separate the businesses in nav.** "Customers" = Ausbildung only (Companies, Schools, Agencies, Testimonials). Promote the software-engineering business to its own mega-menu (label TBD: "Solutions" / "Custom Software" / "Software Engineering") containing the hub + its segments. Move `/training-providers` here.
2. **Make `/solutions` a real hub.** Link "Sectors we build for" to live segment pages; align the audiences list to the section-3 priorities.
3. **Grow roots via internal links.** Cross-link from relevant SaaS pages and blog posts into `/solutions` and its segments (organic = grown through links + content, not bolted on). Register every new bilingual page in `src/utils/page-pairs.mjs`.
4. **Add segment pages by priority, only when ready:** corporate L&D / compliance + serious games (Priority 1) next; public sector later (Priority 3, selective). Bildungsträger exists. No universities page.
5. **Feed it with a Business-B blog cluster** (serious games, custom LMS, sovereign AI, compliance training) distinct from the Ausbildung cluster, each post internal-linking into `/solutions`.

### Shipped 2026-06-23
- **Nav separated.** "Customers" mega = Ausbildung only (Companies, Schools, Agencies, Testimonials). New "Custom Software" mega (DE "Individualsoftware") = Custom development (`/solutions`), Compliance & Safety Training (`/compliance-training`), For Training Providers (`/training-providers`). `/training-providers` moved out of "Customers".
- **Priority-1 segment page built:** `/compliance-training` + `/de/compliance-schulungen` (content key `complianceTraining`, registered in `page-pairs.mjs`). Lead use case: serious games + AI for compliance/safety in regulated companies; "Book a strategy call" motion; no funding/subscription block.
- **Hub wired to segments.** `/solutions` "Sectors we build for" now links to `/compliance-training` and `/training-providers`; off-strategy "Higher education" card removed.
- Build + `check:pairs` pass (65 pages).

### Still open (next, not yet built)
- Public-sector page (Priority 3, selective) — hold until a lighthouse deal justifies it.
- Business-B blog cluster (serious games, custom LMS, sovereign AI, compliance) internal-linking into `/solutions`.
- Cross-links from SaaS pages/blog into Business B for deeper organic roots.

## 8. Key sources

- Procurement thresholds 2026: BHO-Legal, CMS, Optiso-Consult (EUR 216k EU threshold; Direktauftrag rising to EUR 50k via Vergabebeschleunigungsgesetz).
- Funding pots: stiftung-hochschullehre.de; e-teaching.org (BMBF EUR 133M); BMFWF (Austria EUR 50M); swissuniversities (CH).
- Sovereignty as procurement gate: Bitkom "Digitale Souveränität 2025"; Deutsche Verwaltungscloud; cosinex; KPMG sovereign cloud.
- Demand signals: OneTutor (TUM, 30 universities); Syntea (IU, 80k students); serious-games safety training (RheinEnergie, Fraunhofer IFF, B.A.D); Mordor serious-games market.
- Competitive landscape: imc/Scheer IMC, youknow, inside Gruppe (custom WBT); fobizz, Knowunity (SaaS tutors); the Good Evil, Pfeffermind (serious games); eLeDia, Databay, qualitus (Moodle/ILIAS).
- EU AI Act: Regulation (EU) 2024/1689 Art. 50/99, Annex III; Digital Omnibus provisional agreement May 2026.
