# Tracking and cadence

A simple, no-backend system that matches the site's Netlify-Forms reality. Use one Google Sheet
or CSV. No CRM required to start.

---

## Sheet schema (one row per contact)

| Column | Values / notes |
|---|---|
| Account | Organization name |
| Segment | Bildungsträger / Public sector |
| Tier | 1a / 1b / 2 (Bildungsträger) or n/a |
| Score | Sum of the 4-axis scoring (see `10-icp-and-targets.md`) |
| Trigger | The one documented mandate you are leading with |
| Contact | Person name |
| Role | Champion / Compliance / Technical / Economic |
| Channel | LinkedIn / Email |
| Touch 1 date | First outreach date |
| Touch 1 type | Connect note / First message / Cold email |
| Value asset sent | Digitalcheck / Evidence brief / none |
| Follow-up date | Touch 1 + 5 to 7 business days |
| Reply | Yes / No / Opt-out |
| Status | Sourced / Contacted / Engaged / Call booked / Discovery / Won / Nurture / Dead |
| Opt-out | Yes / No (permanent, applies across all channels) |
| Next action | Free text |
| Notes | Free text |

---

## Suppression discipline
- An **opt-out is permanent** and applies across LinkedIn and email. Set Opt-out = Yes and never
  contact again.
- Keep a separate, simple suppression tab (email address + date) so an opt-out survives even if
  the main row is edited or archived.
- Before any new send, check the address against the suppression tab.

---

## Cadence rules
- One follow-up maximum per contact, 5 to 7 business days after the first touch. Then stop or move
  to nurture.
- Multi-thread the committee as engagement builds: champion first, then compliance, then economic
  buyer. Do not open all roles at once on a cold account.
- Move non-responders (after the single follow-up) to Status = Nurture and revisit only on a new
  trigger (a Vergabe, an AZAV recertification window, a funding deadline).
- Keep the daily email count low (deliverability and §7 guardrail).

---

## Weekly rhythm (mirror of the runbook)
- **Monday:** re-score, pick the 15 to 20 active accounts, prep personalization.
- **Tue to Thu:** send LinkedIn connects and value-first notes; send the small daily email batch;
  reply within one business day.
- **Friday:** follow-ups due; update the tracker; move non-responders to nurture; refresh the
  suppression tab.
- **Continuous:** review tender-monitoring alerts for the public-sector segment.

---

## KPI dashboard (weekly totals from the sheet)

| Metric | Source column | Benchmark range |
|---|---|---|
| Accounts sourced and scored | Status = Sourced+ | build to a rolling 40 to 60 |
| LinkedIn connects accepted | Channel = LinkedIn, accepted | ~25 to 40% of sent |
| Replies (value-first note) | Reply = Yes | ~15 to 30% |
| Cold email replies | Channel = Email, Reply = Yes | ~5 to 12% |
| Calls booked | Status = Call booked | ~10 to 20% of engaged threads |
| Discovery projects | Status = Discovery+ | the real pipeline number |

If a step falls well below range, fix that step before adding volume. The two segments will run at
different speeds: Bildungsträger should show replies and calls faster; public sector is slow-burn,
measured in a couple of lighthouse conversations, not weekly reply volume.
