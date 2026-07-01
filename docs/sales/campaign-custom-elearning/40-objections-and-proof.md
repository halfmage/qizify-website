# Objection handling and proof mapping

Formal Sie, honest framing. Never overclaim; where a feature is custom-built, say so. Never name
a competitor. No em or en dashes.

The core Bildungsträger objections live in `docs/sales/bildungstraeger/objections.md` (Moodle
already in place, budget, DSGVO, AZAV, BFSG, KI-Risiko, SaaS-vs-custom, timeline,
waiting-for-funding). Reuse them verbatim. This file adds the public-sector objections and maps
proof to committee roles.

---

## Bildungsträger: quick reference (full text in the source doc)
- **"Wir haben schon Moodle / ILIAS."** Wir lösen es nicht ab, sondern binden es an und ergänzen
  KI und fehlende Funktionen. Datensouveränität bleibt, keine Inhalte gehen verloren.
- **"Kein Budget / die Maßnahmenpauschale gibt das nicht her."** Festpreisprojekt plus optionaler
  gemanagter Betrieb als laufende Sachkosten; wo möglich ESF-Plus-Mitfinanzierung.
  _Intern: Sachkosten-Anrechenbarkeit vor der Aussage mit einer fachkundigen Stelle bestätigen._
- **"Ist das DSGVO-konform?"** In Deutschland oder der EU, auf Ihrer Infrastruktur, AVV inklusive,
  keine Nutzung von Lernerdaten zum Training von Dritt-Modellen.
- **"Erfüllt das die AZAV-Anforderungen?"** Wir liefern die technische Grundlage, AZAV-
  unterstützend, nicht zertifizierend.
- **"Ist das barrierefrei (BFSG)?"** Orientierung an WCAG 2.1 AA, Stand vor Start transparent.

---

## Public sector: added objections

### "Warum kein etablierter Hyperscaler oder ein großes Standardprodukt?"
Für öffentliche Daten ist die Verarbeitung in Deutschland durch geprüftes Personal inzwischen ein
Vergabekriterium, kein Komfortmerkmal. Wir hosten in Deutschland, ohne US-Cloud, und geben keine
Daten an Dritt-Modelle weiter. Genau dort scheitern Standardlösungen, die außerhalb der EU
verarbeiten.

### "Wir müssen das ausschreiben."
Verstanden. Unterhalb der EU-Schwelle von 216.000 Euro netto lassen viele Länder das
Verhandlungsverfahren zu, teils bis 50.000 Euro auch den Direktauftrag. Wir schneiden das Projekt
so zu, dass es in diesen Rahmen passt, oder treten als Unterauftragnehmer in einem bestehenden
Rahmenvertrag an. Wir liefern EVB-IT-fähige Vertragsunterlagen und einen AVV.

### "Können Sie als kleiner Anbieter die Anforderungen und Fristen tragen?"
Wir arbeiten founder-geführt und starten bewusst klein: ein Festpreis-Discovery von zwei bis drei
Wochen liefert einen belastbaren Umsetzungsplan, bevor Sie sich auf das Gesamtprojekt festlegen.
So bleibt das Risiko auf Ihrer Seite gering.

### "Ist KI in einem sensiblen Umfeld nicht heikel?"
Bildungs-KI gilt nach der EU-KI-Verordnung als hochriskant. Wir verankern Antworten in Ihrem
geprüften Material, belegen Quellen und integrieren menschliche Aufsicht, Transparenz und
Dokumentation. Nichts wird zum Training externer Modelle verwendet.

### "Wir haben gerade keinen Haushaltstitel dafür."
Nachvollziehbar. Deshalb dimensionieren wir den Einstieg so, dass er unterhalb der
Direktauftragsgrenze bleibt oder in einen laufenden Rahmen passt, statt auf den nächsten
Haushalt zu warten.

---

## Proof assets, mapped to the committee role they move

Do not add effectiveness or superiority claims beyond what these assets state. Sources:
`docs/evidence-brief.md`, learnslice.com/research, the site testimonials and case studies.

| Proof asset | Best for | Why it moves them |
|---|---|---|
| **BMWE KI-Preis 2025** (Bundesministerium) | Economic buyer, public sector | Federal recognition; a fast credibility signal |
| **FH Dortmund co-development + BMWE grant 16GM200302** | Compliance, technical, public sector | Publicly funded university research, not a vendor claim |
| **Pilot data:** 100% der Antworten quellenbelegt; 40 von 50 nahe vollständiger Beherrschung; 35 von 50 passendes Lerntempo | Champion, technical | Concrete, source-cited outcomes; honest about first-iteration limits |
| **Data-in-Germany + AVV + no third-party training** | Technical gate (DSB/IT), public sector | Clears the DSGVO and sovereignty gate directly |
| **Prof. Dr. Carsten Wolff testimonial (FH Dortmund IDiAL)** | Champion, economic buyer | Named academic reference on motivation and adaptivity |
| **Carl-Severing and Tremonia testimonials** | Champion | Peer voices from vocational training practice |
| **skillzUP branded Moodle case** | Champion, technical | Proof we extend Moodle rather than force a rip-and-replace |
| **FH Dortmund quiz/assessment platform case** | Champion | Proof of a managed, curriculum-aligned quiz build |
| **Evidence brief one-pager** | All roles as a leave-behind | Single approved artifact, honest about what is still in progress |

Rule for use: match the asset to the gate. Champion wants outcomes and peer proof; compliance and
technical want sovereignty and documentation; the economic buyer wants federal credibility plus a
funded, low-risk path.
