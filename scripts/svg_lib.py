#!/usr/bin/env python3
"""Mobile-first SVG generator for LearnSlice blog graphics.

Canvas is 520 wide so the ~342px prose column on a 390px phone only scales it
to 0.66 (body text lands at ~10.5px, readable) while desktop scales it up 1.4x
losslessly. All layouts stack vertically; nothing sits side by side.
"""
import html, os, re

W       = 520          # canvas width
PAD     = 24           # outer padding
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


def wrap(text, size, max_w):
    """Greedy wrap using an Inter-ish average advance width."""
    limit = max(1, int(max_w / (size * 0.53)))
    words, lines, cur = text.split(), [], ""
    for wd in words:
        trial = (cur + " " + wd).strip()
        if len(trial) <= limit:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = wd
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
        h = 20 + 20 * len(lines)
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
        h = 30 + 22 + 19 * len(dl)
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
        h = 34
        if stats: h += 40 * len(stats)
        wrapped = [wrap(r, T_SMALL, inner) for r in rows]
        h += sum(20 * len(x) + 6 for x in wrapped)
        if pill: h += 46
        h += 22
        self.rect(PAD, self.y, CW, h, PANEL, ACCENT if accent else STROKE, sw=2 if accent else 1)
        yy = self.y + 26
        self.t(PAD + 20, yy, eyebrow.upper(), T_EYE, ACCENT_LT if accent else MUTED, 600, spacing="0.05em")
        yy += 20
        for big, lab in (stats or []):
            yy += 32
            self.t(PAD + 20, yy, big, T_BIG, ACCENT_LT if accent and lab.startswith("*") else INK, 600)
            self.t(PAD + 20 + 14 + len(str(big)) * 20, yy, lab.lstrip("*"), T_SMALL, SEC)
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
        x = PAD
        for col, lab in items:
            self.rect(x, self.y, 12, 12, col, None, rx=2)
            self.t(x + 20, self.y + 11, lab, T_NOTE, MUTED)
            x += 26 + len(lab) * 7.4
        self.y += 26

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
