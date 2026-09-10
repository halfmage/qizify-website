# ICP and target accounts (two segments, Germany)

Consolidated ICP for the campaign. For the full Bildungsträger tier logic, see the source doc
`docs/sales/bildungstraeger/icp.md`; this file condenses it and adds the public-sector segment
plus a seed list of named starter accounts.

---

## How targeting works (read this first)

There are three separate jobs. Do not mix them up: the tools for each are different.

1. **Find the accounts** (which organizations to target): use directories and portals, never
   LinkedIn. This is where your list of 40 to 60 companies comes from.
2. **Find the person** (who to contact inside a chosen account): use LinkedIn plus the account's
   own website. LinkedIn is a people-finder, not a company-finder. You only open it after an
   account is already on your scored list.
3. **Close the deal** (the contract mechanism): a direct sale for Segment 1, and for Segment 2 a
   negotiated award or, only above the EU threshold, a formal tender.

Tendering is not how you find customers. It is only one of the two closing mechanics, and only in
the public sector. The two segments run different playbooks:

**Segment 1 (Bildungsträger): a normal outbound sales motion. No tendering.**
1. List companies from `mein-now.de` and the association member lists (see List-building sources).
2. Score each on the four axes; keep the top 15 to 20.
3. Find the champion on LinkedIn and the provider website.
4. Sell directly. They buy with their own budget (foundation funds, capex, ESF+ co-finance).

**Segment 2 (Verwaltung academies): sovereignty-led, contract shape depends on deal size.**
1. Build the account list two ways: proactively from Länder academy directories, and reactively
   from saved-search alerts on the tender portals (an alert fires when an academy publishes a
   live measure you can bid on).
2. Find the champion on LinkedIn and the academy website.
3. Close by the size rule. For sub-central buyers (Laender, municipalities, most academies) the
   line is EUR 216k: under it, a negotiated award (Verhandlungsvergabe) or slotting in as a
   subcontractor; above it, a formal EU tender. For a federal (Bund) buyer the line is EUR 140k.
   Prefer the sub-threshold route. Confirm which authority type you are dealing with first.

---

## Segment 1: Bildungsträger / Weiterbildung

### Need drivers (the forces creating demand now)
- **AZAV digital-format rule (since 1 Jul 2025):** digital measures must document synchronous
  instruction; self-learning is logged separately. Forces re-tooling of tracking and Nachweise.
- **BFSG (Barrierefreiheitsstärkungsgesetz):** in force since 28 Jun 2025; WCAG 2.1 AA; anyone
  selling courses electronically is in scope; hard rebuild cliff 2030.
- **SGB IX:** reha providers must offer barrier-free digital learning; learner groups need
  adaptive, individualized paths.
- **EU AI Act KI-Kompetenz duty (since Feb 2025):** pushes providers toward AI upskilling content
  and toward AI-literate tooling.
- **Funding tailwinds:** ESF Plus 2026/27 prioritizes AI and digitalization Weiterbildung; the BA
  2026 Weiterbildung budget is up roughly 20 percent.

### Tiers (need intensity, matched to a funding path)
- **Tier 1a: Large reha providers (BFW / BBW / RPK).** Very high need (SGB IX + BFSG). Funding:
  institutional, DRV-funded foundations that self-fund. Lead offer: accessible, adaptive, managed
  AI learning platform.
- **Tier 1b: Established multi-site AZAV Umschulung / Weiterbildung.** High need (Jul 2025 rule,
  reporting gap, AI). Funding: per-seat opex as Sachkosten, ESF+ co-finance. Lead offer:
  AZAV-supporting AI platform (synchronous logging, attendance and Verbleib reporting, AI tutor
  on their content).
- **Tier 2: Corporate academies / big branded training groups.** Medium need, cleaner capex; they
  sometimes build in-house. Offer: engineering partner (AI layer, integrations, staff-aug).

### Disqualifiers
Single-site micro providers (high cost per logo, thin IT spend); open-market providers living on
capped per-head rates with no scale.

---

## Segment 2: Public sector / Verwaltung academies

### Why we win here
Since the 2025 CLOUD-Act developments and the launch of the Deutsche Verwaltungscloud, German
public-sector data must be processed on German soil by vetted staff. US hyperscalers are
structurally disqualified. Our single sharpest USP, data-processing in Germany, becomes a
**mandatory procurement gate**, not a preference. Rare leverage for a small shop.

### Targets
Verwaltungsakademien, Studieninstitute für kommunale Verwaltung, Landesakademien, plus police,
Bundeswehr, and public-health academies. Prefer bodies with a stated digitalization or KI
initiative and an identifiable Referat or Akademieleitung.

### Procurement reality (the deal shape that is winnable)
- Full EU tender kicks in above **EUR 216k net** for sub-central contracting authorities, and
  above **EUR 140k** for central government (Bund). Thresholds for 2026-2027 per Commission
  Delegated Regulation (EU) 2025/2152. Below the line, many states allow negotiated or
  invited award (**Verhandlungsvergabe**); Direktauftrag is rising toward EUR 50k.
- Winnable shape: a build priced **EUR 50k to 216k** awarded by negotiation, no EU-wide tender;
  or entering as a **subcontractor** under a larger framework holder.
- Prepare EVB-IT contract terms and a DPA (AVV). Target Rahmenverträge (multi-year frameworks) so
  authorities can call off without re-tendering. DSGVO is an explicit award criterion.

### Where to find these accounts (step 1: build the list)
Two feeds, both for finding accounts (not people):
- **Proactive (academy directories):** Länder academy directories and the individual academy
  websites (their digitalization pages) to name the bodies to pursue.
- **Reactive (saved-search alerts on tender portals):** an alert fires when an academy publishes a
  live measure to bid on.
  - **service.bund.de** and **evergabe-online.de** (federal and public tenders)
  - **TED** (EU tenders above threshold; watch for framework calls)

### Treatment
Slow-burn. Pursue one or two lighthouse deals where sovereignty closes it automatically. Do not
staff the pipeline as if it were the primary motion.

---

## Shared scoring model (score before outreach)

Score each account 1 to 3 on four axes; prioritize totals of 10 or higher.

1. **Need trigger:** under AZAV / BFSG / SGB IX pressure, a live Vergabe, first-time
   digitization, or a stated AI initiative?
2. **Scale:** multi-site or large cohorts (justifies a build, spreads cost)?
3. **Funding path:** self-funding foundation, corporate capex, ESF+ candidate, or a
   sub-threshold negotiated public award?
4. **Digital signal:** has commissioned external software, has an E-Learning role, or has a weak
   incumbent platform?

Build a rolling list of 40 to 60 scored accounts; work the top 15 to 20. Re-score on new
triggers (Vergabe wins, AZAV recertification windows, funding deadlines).

---

## List-building sources (step 1: find accounts, not people)
These build the account list. None of them find contacts.
- **mein-now.de** (Bundesagentur für Arbeit provider portal): filter by AZAV, Umschulung, reha,
  region, size. Primary discovery engine for Bildungsträger.
- **Arbeitsgemeinschaft Deutscher Berufsförderungswerke:** the finite BFW reha list (Tier 1a).
- **BBB (Bundesverband der Träger beruflicher Bildung):** core VET providers, also a channel and
  credibility play.
- **Wuppertaler Kreis:** commercial training leaders, well-funded.
- **service.bund.de / evergabe-online.de / TED:** public-sector discovery.

## Finding the person (step 2: only after an account is scored and short-listed)
Contact discovery is a manual per-account step: LinkedIn, the account's own website, and published
business contacts. Use the "Likely champion" column in the seed list to know which role to look
for. This kit gives the account list and where to find the people, not scraped personal data.

---

## Seed list: named starter accounts (pre-scored, begin here)

Scores below are first-pass estimates to prioritize research, not final. Verify each account's
current triggers before outreach. "Likely champion" is the first committee role to approach.

### Bildungsträger / Weiterbildung

| Account | Tier | Score | Trigger to lead with | Likely champion |
|---|---|---|---|---|
| Teutloff Technische Akademie | 1b | ~11 | Runs an externally commissioned e-learning portal; extend with AI + AZAV docs | E-Learning / Päd. Leitung |
| bfw (Berufsfortbildungswerk) | 1b | ~11 | Multi-site AZAV, Jul 2025 synchronous-time documentation | Päd. Leitung / QMB |
| Grone-Bildungszentren | 1b | ~10 | Multi-site AZAV Umschulung, BFSG accessibility | Päd. Leitung |
| GFN AG | 1b | ~10 | IT-Umschulung at scale, AI-content demand | E-Learning-Verantwortliche |
| bbw (Bildungswerk der Bayerischen Wirtschaft) | 2 | ~10 | Large, corporate-adjacent, capex available | Bereichsleitung Digitales |
| Large BFW (e.g. Dortmund / München / Nürnberg) | 1a | ~11 | SGB IX + BFSG accessible adaptive paths | Reha-/Päd. Leitung |
| Annedore-Leber-Berufsbildungswerk (or peer BBW) | 1a | ~10 | Youth reha, accessibility, individualized paths | Päd. Leitung |
| RPK network provider | 1a | ~10 | Psych-reha, adaptive individualized learning | Reha-Leitung |

Add named multi-site AZAV providers from mein-now.de and Wuppertaler-Kreis / BBB member lists
until the segment holds 15 to 20 scored accounts.

### Public sector / Verwaltung academies

| Account | Score | Trigger to lead with | Likely champion |
|---|---|---|---|
| Bayerische Verwaltungsschule (BVS) | ~10 | Large kommunale Aus- und Fortbildung, digitalization push | Referat Digitales / Akademieleitung |
| Verwaltungsakademie Berlin | ~10 | Landes-/kommunale Fortbildung, sovereignty gate | Akademieleitung |
| Studieninstitut für kommunale Verwaltung Köln | ~9 | Kommunale Ausbildung, AI/e-learning initiative | Fachbereichsleitung |
| Studieninstitut Ruhr | ~9 | Multi-Kommunen, shared tooling potential | Institutsleitung |
| Bundesakademie für öffentliche Verwaltung (BAköV) | ~9 | Federal Fortbildung, Verwaltungscloud alignment | Referatsleitung Digitalisierung |
| Akademie für öffentliches Gesundheitswesen (Düsseldorf) | ~9 | Public-health training, sovereignty + accessibility | Akademieleitung |
| A Landespolizei Fortbildungsinstitut | ~9 | Sovereign hosting is a hard gate; sensitive data | Referat Aus-/Fortbildung |

Expand via Länder academy directories and saved tender searches; prioritize any body with a live
sub-EUR-216k digitalization measure or a framework call.
