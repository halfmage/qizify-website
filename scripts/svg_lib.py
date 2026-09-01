#!/usr/bin/env python3
"""Mobile-first SVG generator for LearnSlice blog graphics.

Canvas is 520 wide so the ~342px prose column on a 390px phone only scales it
to 0.66 (body text lands at ~10.5px, readable) while desktop scales it up 1.4x
losslessly. All layouts stack vertically; nothing sits side by side.
"""
import html, os, re

W       = 520          # canvas width
PAD     = 24           # outer padding
PAD_B   = 22           # panel floor, measured down from the last baseline inside it
CW      = W - 2 * PAD  # content width = 472

SURFACE, PANEL, STROKE = "#2a2622", "#37322c", "#46402f"
ACCENT, ACCENT_LT      = "#cc7a3e", "#e8b07a"
INK, MUTED, SEC        = "#faf8f4", "#a89e92", "#cfc7be"
BAR_CTX, INK_ON_ACC    = "#786d60", "#241f1b"
FONT  = "'Inter', system-ui, -apple-system, sans-serif"

T_TITLE, T_SUB, T_EYE, T_BODY, T_SMALL, T_NOTE, T_BIG = 23, 15, 14, 16, 14.5, 14, 34


def esc(s):
    # quote=True: esc() feeds the aria-label XML *attribute* as well as text
    # nodes, and a bare double quote would close the attribute and break the SVG.
    return html.escape(str(s), quote=True)


# Advance width per character as a fraction of the font size, measured as the
# widest of SF Pro, Arial and Helvetica at weights 400 and 600. These graphics are
# embedded with <img>, so they cannot load Inter and always render in whatever the
# reader's OS supplies for system-ui; the other common ones (Segoe UI, Roboto) set
# narrower than Arial, so wrapping against these keeps a line inside its panel.
ADV, ADV_DEF = {}, 0.75
for _cs, _w in ((" '.,Iijl/", 0.30), ("!:;\u00b7tf()[]{}r", 0.39), ("*-", 0.44),
                ('"z', 0.50), ("1Jaceksvxy\u00e47", 0.56),
                ("2?FLTbdghnopqu\u00df\u00f6\u00fc35\u00a7=Z#", 0.63), ("04689+<>", 0.65),
                ("EPSVYX", 0.67), ("ABCDHKNRU\u00c4\u00dc", 0.72), ("GOQw\u00d6", 0.78),
                ("Mm%\u2713", 0.90), ("W\u26a0", 1.00)):
    ADV.update(dict.fromkeys(_cs, _w))


def text_w(s, size):
    """Width of a string in px, summing advances. Kerning means a real run always
    sets slightly narrower than this, so the estimate is high by 1 to 8% and never
    low: wrapping against it cannot overrun a panel, and a column or legend laid
    out with it cannot collide."""
    return size * sum(ADV.get(c, ADV_DEF) for c in str(s))


def wrap(text, size, max_w):
    """Greedy wrap on estimated width, so a caps-heavy or umlaut-heavy German line
    breaks where it actually runs out of room rather than at a character count."""
    words, lines, cur = text.split(), [], ""
    for wd in words:
        trial = (cur + " " + wd).strip()
        if cur and text_w(trial, size) > max_w:
            lines.append(cur)
            cur = wd
        else:
            cur = trial
    if cur:
        lines.append(cur)
    return lines


class Doc:
    def __init__(self, aria):
        self.aria, self.parts, self.y = aria, [], 0
        self.defs = []

    def t(self, x, y, s, size=T_BODY, fill=SEC, weight=None, anchor=None,
          style=None, spacing=None):
        a = f' font-family="{FONT}" font-size="{size}" fill="{fill}"'
        if weight:  a += f' font-weight="{weight}"'
        if anchor:  a += f' text-anchor="{anchor}"'
        if style:   a += f' font-style="{style}"'
        if spacing: a += f' letter-spacing="{spacing}"'
        self.parts.append(f'  <text x="{x}" y="{y}"{a}>{esc(s)}</text>')

    def rect(self, x, y, w, h, fill=PANEL, stroke=STROKE, rx=10, sw=1):
        s = f' stroke="{stroke}" stroke-width="{sw}"' if stroke else ""
        self.parts.append(f'  <rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fill}"{s}/>')

    # ---- blocks -------------------------------------------------------
    def head(self, title, sub=None):
        self.y += 34
        for i, ln in enumerate(wrap(title, T_TITLE, CW)):
            self.t(PAD, self.y + i * 29, ln, T_TITLE, INK, 600)
        self.y += 29 * (len(wrap(title, T_TITLE, CW)) - 1)
        if sub:
            self.y += 24
            for i, ln in enumerate(wrap(sub, T_SUB, CW)):
                self.t(PAD, self.y + i * 20, ln, T_SUB, MUTED)
            self.y += 20 * (len(wrap(sub, T_SUB, CW)) - 1)
        self.y += 22

    def band(self, text, accent=False):
        lines = wrap(text, T_SMALL, CW - 32)
        h = 6 + 20 * len(lines) + PAD_B
        self.rect(PAD, self.y, CW, h, PANEL, ACCENT if accent else STROKE, sw=2 if accent else 1)
        for i, ln in enumerate(lines):
            self.t(PAD + 16, self.y + 26 + i * 20, ln, T_SMALL, SEC)
        self.y += h + 12

    def arrow(self, label=None):
        cx = W // 2
        self.parts.append(f'  <path d="M{cx},{self.y} L{cx},{self.y+16}" stroke="{MUTED}" stroke-width="1.5" marker-end="url(#ar)"/>')
        self.y += 26
        if label:
            self.t(cx, self.y + 10, label, T_NOTE, MUTED, anchor="middle")
            self.y += 22

    def step(self, n, title, desc, accent=False):
        dl = wrap(desc, T_SMALL, CW - 76)
        h = 30 + 19 * len(dl) + PAD_B
        self.rect(PAD, self.y, CW, h, PANEL, ACCENT if accent else STROKE, sw=2 if accent else 1)
        self.parts.append(f'  <circle cx="{PAD+28}" cy="{self.y+30}" r="16" fill="{STROKE}"/>')
        self.t(PAD + 28, self.y + 36, n, T_BODY, ACCENT_LT, 600, "middle")
        self.t(PAD + 56, self.y + 27, title, T_BODY, INK, 600)
        for i, ln in enumerate(dl):
            self.t(PAD + 56, self.y + 49 + i * 19, ln, T_SMALL, MUTED)
        self.y += h + 10

    def block(self, eyebrow, rows, accent=False, pill=None, stats=None):
        """rows: list[str] plain lines. stats: list[(big, label)]. pill: closing line."""
        inner = CW - 40
        wrapped = [wrap(r, T_SMALL, inner) for r in rows]
        # A 34px figure needs air under the eyebrow; a line of body text belongs
        # close to the label that introduces it.
        lead = 20 if stats else 6
        h = 26 + lead + 40 * len(stats or []) + sum(20 * len(x) + 6 for x in wrapped)
        # a pill ends in a rect edge, which needs no allowance for descenders
        h += (46 + PAD_B - 6) if pill else PAD_B
        self.rect(PAD, self.y, CW, h, PANEL, ACCENT if accent else STROKE, sw=2 if accent else 1)
        yy = self.y + 26
        self.t(PAD + 20, yy, eyebrow.upper(), T_EYE, ACCENT_LT if accent else MUTED, 600, spacing="0.05em")
        yy += lead
        # Labels share one column, sized to the widest figure in the block, so a
        # three-digit number cannot shunt its label out of line with the one- and
        # two-digit rows.
        num_w = max([text_w(b, T_BIG) for b, _ in (stats or [])] or [0])
        for big, lab in (stats or []):
            yy += 32
            self.t(PAD + 20, yy, big, T_BIG,
                   ACCENT_LT if accent and lab.startswith("*") else INK, 600)
            self.t(PAD + 34 + num_w, yy - 7, lab.lstrip("*"), T_SMALL, SEC)
            yy += 8
        for wl in wrapped:
            yy += 6
            for ln in wl:
                yy += 20
                self.t(PAD + 20, yy, ln, T_SMALL, SEC)
        if pill:
            yy += 14
            self.rect(PAD + 20, yy, CW - 40, 32, STROKE if accent else SURFACE, None, rx=8)
            self.t(PAD + 34, yy + 21, pill, T_SMALL, ACCENT_LT if accent else MUTED, style="italic")
        self.y += h + 12

    def bar_row(self, label, right, segs):
        """segs: list of (fraction, colour, in-bar label, ink)."""
        self.t(PAD, self.y + 12, label, T_SMALL, SEC)
        if right:
            self.t(W - PAD, self.y + 12, right, T_NOTE, MUTED, anchor="end")
        self.y += 22
        gap, avail = 2, CW - 2 * (len(segs) - 1)
        x = PAD
        for frac, col, lab, ink in segs:
            bw = avail * frac
            self.rect(x, self.y, round(bw, 1), 34, col, None, rx=4)
            if lab:
                self.t(x + bw / 2, self.y + 23, lab, T_SMALL, ink, 600, "middle")
            x += bw + gap
        self.y += 34 + 16

    def hbar(self, label, value, vmax, accent=False, label_w=118):
        bx = PAD + label_w
        bw = (CW - label_w - 46) * (value / vmax)
        self.t(PAD, self.y + 13, label, T_SMALL, ACCENT_LT if accent else SEC, 600 if accent else None)
        self.rect(bx, self.y, max(round(bw, 1), 3), 18, ACCENT if accent else BAR_CTX, None, rx=4)
        self.t(bx + bw + 8, self.y + 13, value, T_NOTE, ACCENT_LT if accent else MUTED, 600 if accent else None)
        self.y += 26

    def legend(self, items):
        self.y += 6
        x = PAD
        for col, lab in items:
            self.rect(x, self.y, 12, 12, col, None, rx=2)
            self.t(x + 20, self.y + 11, lab, T_NOTE, MUTED)
            x += 20 + text_w(lab, T_NOTE) + 16
        self.y += 30

    def note(self, text):
        self.y += 8
        for ln in wrap(text, T_NOTE, CW):
            self.y += 18
            self.t(PAD, self.y, ln, T_NOTE, MUTED)

    def render(self, path):
        h = self.y + PAD
        head = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {round(h)}" '
                f'role="img" aria-label="{esc(self.aria)}">\n'
                f'  <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" '
                f'orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="{MUTED}"/></marker></defs>\n'
                f'  <rect x="0" y="0" width="{W}" height="{round(h)}" rx="16" fill="{SURFACE}"/>\n')
        open(path, "w").write(head + "\n".join(self.parts) + "\n</svg>\n")
        return path
