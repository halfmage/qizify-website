# Campaign runbook: custom e-learning engineering (Business B)

Stand: 2026-07-01. Owner: LearnSlice (5 people, founder-led). Scope: outbound pipeline in
**Germany** for the custom software-engineering business (the `/solutions` offering), targeting
two segments: **Bildungsträger / Weiterbildung** and **Public-sector / Verwaltung academies**.

This file is the spine. The other files (10-50) are the assets it drives.

---

## 1. Compliance stance (read first)

**§7 UWG risk box.** Unsolicited B2B cold email in Germany requires prior consent. There is no
safe statutory basis for pure prospecting email, so every cold email carries Abmahnung and fine
risk (ceiling up to EUR 300k). The owner has decided to run targeted cold email anyway. This
campaign therefore treats email as a **low-volume, high-personalization** channel, not a blast.
Guardrails, mandatory on every send:

- Personalize to one documented mandate (AZAV synchronous-time rule, BFSG, SGB IX, a live
  Vergabe). If you cannot personalize, do not send.
- Impressum reference + one-click opt-out (Abmeldung) in every email.
- One follow-up maximum, then stop. Never a third touch to a non-responder.
- Keep a suppression list. An opt-out is permanent and applies across channels.
- Low daily volume (see section 5). Low volume is both the legal guardrail and the deliverability
  guardrail.

LinkedIn 1:1 (connect first, then a personal note) is the lower-risk primary channel and carries
most of the pipeline. Public-sector officials are the most exposed and least email-reachable, so
that segment leans LinkedIn + tender-monitoring, with email as a rare exception.

---

## 2. Strategy in one page

We sell **custom software projects** (AI tutor, lightweight or Moodle-based LMS,
quiz/assessment, serious game), founded on four wedges: one vendor instead of three,
sovereignty by default (German hosting, no US cloud, no third-party model training),
speed (weeks), and transparent fixed pricing.

**Segment 1: Bildungsträger / Weiterbildung** (Priority 2, secondary). Fast cycles (1 to 3
months) because commissioning is private, but the budget is per-participant opex, not capex.
**Funding-aware framing is the whole unlock:** position the build as recoverable inside
Maßnahmekosten / Sachkosten where the accreditation allows, plus an optional managed-run
contract as the opex piece, plus ESF Plus 2026/27 co-finance. Demand is driven by the AZAV
synchronous-instruction documentation rule (since 1 Jul 2025), BFSG (in force since 28 Jun 2025,
hard cliff 2030), SGB IX accessibility duties for reha, and the EU AI Act KI-Kompetenz duty.

**Segment 2: Public sector / Verwaltung academies** (Priority 3, slow-burn). Cycles 3 to 9
months, tender-bound. We only win where **data-in-Germany is a mandatory procurement gate**,
which since the 2025 CLOUD-Act developments and the Deutsche Verwaltungscloud it now is. Winnable
deal shape: a build priced EUR 50k to 216k awarded by Verhandlungsvergabe (below the EU-tender
threshold), or a subcontract under a framework holder. Pursue one or two lighthouse deals; do not
staff this as the primary motion.

**Land small, expand.** Open every account with a fixed-price 2 to 3 week discovery or prototype.
It de-risks the buyer, fits founder-led selling, converts to the full build, and resolves the
project-versus-recurring tension: project to land, optional managed run to retain.

**Scope note.** Both segments are driven by German law, so this campaign is **Germany-only**. Do
not build Austria or Switzerland lists here; the legal hooks do not travel. Corporate L&D /
regulated Mittelstand (Priority 1, faster cash) is the natural third lane later; the kit is
structured so it can be added without rework.

---

## 3. Sequencing model (applied to every account)

1. Research and score the account (see `10-icp-and-targets.md`).
2. LinkedIn-first where the contact has a presence: connect the champion, engage with their
   content, then a personalized value-first note.
3. Where no usable LinkedIn presence (common in public sector): one targeted, personalized email
   to the single most relevant contact, anchored to their specific mandate, opt-out included.
4. Deliver the value asset (lead magnet or evidence brief) before asking for the call.
5. Soft CTA: a free 30-minute Strategiegespräch, kein Pitch, eine konkrete Roadmap.
6. One follow-up after 5 to 7 business days, then stop or move to content nurture.
7. Multi-thread the buying committee as engagement builds: champion, then compliance, then
   economic buyer.
8. Log every touch and honor the suppression list.

Buying committee (engage in this order): champion (E-Learning / Pädagogische Leitung) ->
compliance gate (QMB / AZAV-Beauftragte) -> technical gate (IT-Leitung / Datenschutzbeauftragte)
-> economic buyer (Geschäftsführung / Kaufmännische Leitung).

---

## 4. KPIs and realistic benchmarks

Track weekly (see `50-tracking-and-cadence.md` for the schema):

- Accounts sourced and scored
- LinkedIn connects sent / accepted
- Replies (LinkedIn + email)
- Value assets delivered
- Strategiegespräche booked
- Discovery / prototype projects closed

Plan against these ranges. They are planning aids, not promises, and they let you spot a broken
step early:

- LinkedIn connect-accept: ~25 to 40 percent
- Reply on a personalized value-first note: ~15 to 30 percent
- Cold email reply (personalized, low volume): ~5 to 12 percent
- Call booked from an engaged thread: ~10 to 20 percent

Work ~15 to 20 accounts at a time from a rolling list of 40 to 60. If a step falls well below
range, fix that step before adding volume.

---

## 5. Weekly operating rhythm (5-person, founder-led)

- Monday: re-score the list, pick the 15 to 20 active accounts, prep personalization notes.
- Tue to Thu: send LinkedIn connects and value-first notes; send the day's small batch of
  personalized emails (keep the daily email count low); reply within one business day.
- Friday: follow-ups due (5 to 7 business days after first touch), update the tracker, move
  non-responders to nurture, refresh the suppression list.
- Continuous: tender-monitoring alerts (service.bund.de, evergabe-online.de, TED) reviewed for
  the public-sector segment.

---

## 6. v1 prerequisites (confirm before first send)

- **Value asset live?** The sequences offer the BFSG/AZAV Digitalcheck, which today exists only
  as a spec (`docs/sales/bildungstraeger/lead-magnet-bfsg-azav-checklist.md`). If it is not a
  live, gated asset, fall back to the approved `docs/evidence-brief.md` as the value offer.
- **Sending domain ready?** For cold email, set up a separate sending domain with SPF, DKIM,
  DMARC, and a short warm-up. See `30-email-sequences.md`.
- **Sachkosten claim verified?** Before stating that the build is recoverable inside
  Maßnahmekosten as fact, confirm with an AZAV fachkundige Stelle (CERTQUA / TÜV / DEKRA /
  GUTcert). Until then, phrase it as "prüfen wir gemeinsam."
- **Impressum + opt-out block ready** and pasted into the email footer.

## 7. Fast follow (not required for v1)

Draft a public-sector lead magnet, a "Souveränitäts- und Vergabe-Checkliste," as the companion
to the BFSG/AZAV Digitalcheck. Recommended once the first public-sector conversations validate
the angle.
