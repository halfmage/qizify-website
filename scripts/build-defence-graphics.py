#!/usr/bin/env python3
"""Charts for the defence campaign pillar post (/de/blog/ausbildung-ruestungsindustrie).

Every number comes from the sources cited in the post: Index Research (26 Aug 2026),
IG Metall Ausbildungsbilanz (5 Mar 2026), BIBB DAZUBI data sheets (reporting year
2024), BIBB Datenreport 2026 table A5.6-1, BIBB cost-benefit survey 2022/23.
Run: python3 scripts/build-defence-graphics.py
"""
import os, re
from svg_lib import *   # resolved from this script's own directory (sys.path[0])

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                   "..", "public", "images", "blog") + os.sep
DOWN = "#a1a1aa"


def render(d, name):
    """svg_lib renders a viewBox only; add the intrinsic size so the browser can
    reserve space before the file arrives (see commit 154d8d6)."""
    path = d.render(OUT + name)
    s = open(path).read()
    vb = re.search(r'viewBox="0 0 (\d+) (\d+)"', s)
    s = s.replace('<svg xmlns="http://www.w3.org/2000/svg" viewBox',
                  f'<svg xmlns="http://www.w3.org/2000/svg" width="{vb[1]}" height="{vb[2]}" viewBox', 1)
    open(path, "w").write(s)
    return path


# ------------------------------------------------------------- 1. the squeeze
def squeeze():
    d = Doc("Gegenüberstellung: Die Rüstungsindustrie hat im ersten Halbjahr 2026 22 Prozent mehr Stellen "
            "ausgeschrieben als im Vorjahr, rund 4.700. In den klassischen Metall- und Elektroberufen wurden 2025 "
            "9,1 Prozent weniger Ausbildungsverträge geschlossen als 2024, rund 25.800. Quellen: Index Research, "
            "IG Metall Ausbildungsbilanz.")
    d.head("Mehr Bedarf, weniger Nachwuchs",
           "Stellen in der Rüstungsindustrie und neue Ausbildungsverträge in Metall- und Elektroberufen")
    for big, col, title, sub in (
            ("+22 %", ACCENT_LT, "Stellenanzeigen der Rüstungsindustrie",
             "rund 4.700 im ersten Halbjahr 2026, im Vergleich zum Vorjahr"),
            ("−9,1 %", DOWN, "Neue Ausbildungsverträge Metall und Elektro",
             "rund 25.800 im Jahr 2025, im Vergleich zu 2024")):
        top, tx = d.y, PAD + 190
        lines = wrap(title, T_SMALL, CW - 190 - 16)
        subs = wrap(sub, T_NOTE, CW - 190 - 16)
        h = max(96, 30 + len(lines) * 19 + 4 + len(subs) * 18 + 14)
        d.rect(PAD, top, CW, h)
        d.t(PAD + 20, top + h / 2 + 14, big, 40, col, 600)
        for i, ln in enumerate(lines):
            d.t(tx, top + 32 + i * 19, ln, T_SMALL, INK, 600)
        for i, ln in enumerate(subs):
            d.t(tx, top + 32 + len(lines) * 19 + 4 + i * 18, ln, T_NOTE, MUTED)
        d.y = top + h + 12
    d.note("Quellen: Index Research (26.08.2026), IG Metall Ausbildungsbilanz auf Basis von BIBB-Daten (05.03.2026).")
    return render(d, "ruestung-bedarf-nachwuchs-de.svg")


# ------------------------------------------------- 2. cancellations 2022 -> 2024
TRADES = [("Konstruktionsmechaniker/in", 26.8, 27.8),
          ("Zerspanungsmechaniker/in", 21.8, 26.0),
          ("Elektroniker/in Geräte und Systeme", 16.3, 19.8),
          ("Elektroniker/in Betriebstechnik", 14.3, 18.6),
          ("Industriemechaniker/in", 12.3, 16.2),
          ("Mechatroniker/in", 10.5, 14.5),
          ("Elektroniker/in Automatisierungstechnik", 10.6, 13.0),
          ("Fluggerätmechaniker/in", 13.7, 12.3)]


def pct(v):
    return f"{v:.1f}".replace(".", ",") + " %"


def dumbbell():
    d = Doc("Punktdiagramm: Anteil vorzeitig gelöster Ausbildungsverträge 2022 und 2024 in acht Metall- und "
            "Elektroberufen. Gestiegen bei Konstruktionsmechaniker von 26,8 auf 27,8 Prozent, Zerspanungsmechaniker "
            "von 21,8 auf 26,0, Elektroniker Geräte und Systeme von 16,3 auf 19,8, Elektroniker Betriebstechnik von "
            "14,3 auf 18,6, Industriemechaniker von 12,3 auf 16,2, Mechatroniker von 10,5 auf 14,5, Elektroniker "
            "Automatisierungstechnik von 10,6 auf 13,0. Gesunken bei Fluggerätmechaniker von 13,7 auf 12,3 Prozent. "
            "Quelle: BIBB, bundesweit, alle Branchen.")
    d.head("In 7 von 8 Berufen enden mehr Verträge vorzeitig",
           "Anteil vorzeitig gelöster Ausbildungsverträge, 2022 und 2024")
    x0, x1, vmax = PAD, W - PAD - 64, 30.0
    sx = lambda v: x0 + (x1 - x0) * v / vmax
    for name, a, b in TRADES:
        up = b > a
        d.t(PAD, d.y + 12, name, T_SMALL, SEC)
        cy = d.y + 30
        d.parts.append(f'  <line x1="{x0}" y1="{cy}" x2="{x1}" y2="{cy}" stroke="{STROKE}" stroke-width="2"/>')
        lo, hi = sorted((sx(a), sx(b)))
        col = ACCENT if up else DOWN
        d.parts.append(f'  <line x1="{lo:.1f}" y1="{cy}" x2="{hi:.1f}" y2="{cy}" stroke="{col}" stroke-width="6" stroke-linecap="round"/>')
        d.parts.append(f'  <circle cx="{sx(a):.1f}" cy="{cy}" r="6" fill="{SURFACE}" stroke="{MUTED}" stroke-width="2.5"/>')
        d.parts.append(f'  <circle cx="{sx(b):.1f}" cy="{cy}" r="7" fill="{col}"/>')
        d.t(W - PAD, cy + 5, pct(b), T_SMALL, ACCENT_LT if up else MUTED, 600, "end")
        d.y += 50
    # axis
    for v in (0, 10, 20, 30):
        d.t(sx(v), d.y + 8, f"{v} %", 12.5, MUTED, anchor="middle")
    d.y += 22
    d.parts.append(f'  <circle cx="{PAD + 6}" cy="{d.y + 6}" r="5" fill="{SURFACE}" stroke="{MUTED}" stroke-width="2.5"/>')
    d.t(PAD + 18, d.y + 11, "2022", T_NOTE, MUTED)
    d.parts.append(f'  <circle cx="{PAD + 76}" cy="{d.y + 6}" r="6" fill="{ACCENT}"/>')
    d.t(PAD + 88, d.y + 11, "2024, gestiegen", T_NOTE, MUTED)
    d.parts.append(f'  <circle cx="{PAD + 222}" cy="{d.y + 6}" r="6" fill="{DOWN}"/>')
    d.t(PAD + 234, d.y + 11, "2024, gesunken", T_NOTE, MUTED)
    d.y += 22
    d.note("Quelle: BIBB-Datenblätter, Berichtsjahr 2024. Lösungsquote nach Schichtenmodell, bundesweit, "
           "alle Branchen. Keine Abbruchquote.")
    return render(d, "ruestung-loesungsquote-2022-2024-de.svg")


# ------------------------------------------------------- 3. when contracts end
def timing():
    d = Doc("Gestapelte Balken: Zeitpunkt vorzeitiger Vertragslösungen 2024. Alle Berufe: 34,7 Prozent in der "
            "Probezeit, 32,9 Prozent später im ersten Jahr, 23,1 Prozent im zweiten Jahr, 9,3 Prozent später. "
            "Industrie und Handel: 36,5, 33,9, 22,3 und 7,3 Prozent. Quelle: BIBB-Datenreport 2026, Tabelle A5.6-1.")
    d.head("Zwei Drittel gehen im ersten Jahr",
           "Wann vorzeitig gelöste Ausbildungsverträge 2024 endeten")
    LATER = "#52525b"
    d.bar_row("Industrie und Handel", None,
              [(0.365, ACCENT, "36,5 %", INK_ON_ACC), (0.339, ACCENT_LT, "33,9 %", INK_ON_ACC),
               (0.223, BAR_CTX, "22,3 %", INK), (0.073, LATER, None, INK)])
    d.bar_row("Alle Berufe", None,
              [(0.347, ACCENT, "34,7 %", INK_ON_ACC), (0.329, ACCENT_LT, "32,9 %", INK_ON_ACC),
               (0.231, BAR_CTX, "23,1 %", INK), (0.093, LATER, None, INK)])
    # legend on two lines so it fits a phone
    d.y += 4
    for row in ([(ACCENT, "Probezeit (bis 4 Monate)"), (ACCENT_LT, "Rest des 1. Jahres")],
                [(BAR_CTX, "2. Jahr"), (LATER, "später (7,3 % bzw. 9,3 %)")]):
        x = PAD
        for col, lab in row:
            d.rect(x, d.y, 12, 12, col, None, rx=2)
            d.t(x + 20, d.y + 11, lab, T_NOTE, MUTED)
            x += 20 + text_w(lab, T_NOTE) + 20
        d.y += 24
    d.note("Quelle: BIBB-Datenreport 2026, Tabelle A5.6-1. Anteil an allen vorzeitigen Vertragslösungen "
           "des Jahres 2024, bundesweit.")
    return render(d, "ruestung-zeitpunkt-vertragsloesung-de.svg")


# --------------------------------------------------------------- 4. the costs
def costs():
    d = Doc("Balkendiagramm: Ein Azubi kostet im Schnitt rund 26.200 Euro brutto pro Jahr, netto nach den Erträgen "
            "seiner Mitarbeit rund 8.100 Euro. Eine Fachkraft extern zu gewinnen kostet rund 13.700 Euro. "
            "Quelle: BIBB-Kosten-Nutzen-Erhebung 2022/23.")
    d.head("Was Ausbildung kostet, und was die Alternative kostet",
           "Durchschnitt pro Person, alle Berufe, Ausbildungsjahr 2022/23")
    vmax = 26200
    for label, val, txt, accent in (
            ("Ausbildung, brutto pro Jahr", 26200, "26.200 €", False),
            ("Ausbildung, netto pro Jahr (nach Mitarbeit)", 8100, "8.100 €", False),
            ("Fachkraft extern gewinnen, einmalig", 13700, "13.700 €", True)):
        d.t(PAD, d.y + 12, label, T_SMALL, ACCENT_LT if accent else SEC, 600 if accent else None)
        d.y += 20
        bw = (CW - 84) * val / vmax
        d.rect(PAD, d.y, round(bw, 1), 24, ACCENT if accent else BAR_CTX, None, rx=4)
        d.t(PAD + bw + 10, d.y + 18, txt, T_SMALL, ACCENT_LT if accent else INK, 600)
        d.y += 24 + 18
    d.note("Quelle: BIBB-Kosten-Nutzen-Erhebung 2022/23 (Pressemitteilung 31.07.2025). Personalgewinnungskosten "
           "stiegen gegenüber früheren Erhebungen um 65 %, die Nettokosten der Ausbildung um 28 %.")
    return render(d, "ruestung-kosten-ausbildung-vs-extern-de.svg")


if __name__ == "__main__":
    for f in (squeeze, dumbbell, timing, costs):
        print(f())
