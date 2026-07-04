# Lead magnet: "BFSG- und AZAV-Digitalcheck für Bildungsträger"

The gated inbound asset that powers the no-cold-email motion. Gate by email + role; download triggers a B-lane nurture and qualifies via `qualification.md`. Formal Sie, no em/en dashes, no competitor names. Frame as a practical self-check, not a sales pitch.

> Disclaimer to print on the asset: Praxisorientierte Orientierung, keine Rechtsberatung. Stand der gesetzlichen Angaben vor Veröffentlichung mit Primärquellen prüfen (siehe Plan Teil 7).

## Title
Der 12-Punkte-Digitalcheck für Bildungsträger: BFSG, AZAV und KI im Griff

## Intro (≈3 Sätze)
Drei Entwicklungen setzen Bildungsträger gerade unter Zugzwang: das Barrierefreiheitsstärkungsgesetz, die AZAV-Vorgaben zu digitalen Maßnahmen und der wachsende Anspruch an KI-gestütztes Lernen. Dieser Check zeigt Ihnen in zwölf Punkten, wo Ihr digitales Angebot heute steht und wo Handlungsbedarf besteht. Pro Punkt: kurze Frage, warum es zählt, und was ein gutes Ergebnis ausmacht.

## Abschnitt A: Barrierefreiheit (BFSG)
1. Erfüllt Ihre Lernplattform WCAG 2.1 AA (Tastaturbedienung, Kontraste, Screenreader)?
2. Haben Sie einen Plan für die Übergangsfrist bis 2030 für bestehende Angebote?
3. Sind Ihre Lerninhalte (PDF, Video, Quiz) barrierearm aufbereitet?
4. Ist Barrierefreiheit Teil Ihrer Beschaffungs- und Vergabekriterien?

## Abschnitt B: AZAV-Dokumentation
5. Weisen Sie synchrone Unterrichtszeit getrennt von Selbstlernzeit nach?
6. Erfassen Sie Anwesenheit und Lernfortschritt prüfsicher und exportierbar?
7. Ist die Erfolgskontrolle (inkl. Verbleib) systematisch dokumentiert?
8. Sind digitale Formate in Ihrer Maßnahmezulassung abgedeckt?

## Abschnitt C: KI und Datensouveränität
9. Setzen Sie KI-Lernbegleitung ein, die auf Ihren geprüften Inhalten basiert?
10. Werden Lernerdaten in Deutschland oder der EU verarbeitet, mit AVV?
11. Ist sichergestellt, dass keine Lernerdaten in das Training von Dritt-Modellen fließen?
12. Erfüllt Ihr KI-Einsatz die Anforderungen der EU-KI-Verordnung (Aufsicht, Transparenz)?

## Auswertung
- 10 bis 12 Ja: gut aufgestellt, Feinschliff genügt.
- 6 bis 9 Ja: erkennbare Lücken, vor allem bei Dokumentation und Barrierefreiheit.
- 0 bis 5 Ja: deutlicher Handlungsbedarf, bevor Fristen greifen.

## CTA
Möchten Sie die offenen Punkte in eine konkrete Roadmap übersetzen? Buchen Sie ein kostenloses 30-Minuten-Strategiegespräch. Kein Pitch, eine konkrete Roadmap. Antwort innerhalb von 1 Werktag.

## Production notes
- EN mirror for `/training-providers`: "The 12-point digital check for training providers: BFSG, AZAV, and AI".

## Implementation status (built)
- Shipped as the interactive AZAV/BFSG Digital-Readiness-Check on `/de/digital-readiness-check`, component `src/components/ReadinessCheck.astro`. (The earlier `#digitalcheck` prototype, `LeadMagnetForm.astro`, was never wired into a page and has been removed.)
- Capture form (name, email, organisation, role, score, category, per-dimension answers, ausgangslage, source, consent) wired to Netlify Forms under the form name `readiness-check`. On submit it reveals the personalised Maßnahmenplan inline (with PDF export) and shows a "book a strategy call" upsell.
- Optional follow-ups: add a Netlify autoresponder to email the plan; tag submissions as lead lane B and route to `qualification.md`.
