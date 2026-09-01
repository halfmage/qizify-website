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
TINT, GHOST            = "#3a3128", "#6f6459"   # the living column, and an absence in it
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

    def steps(self, items, accent_n=None):
        """A numbered sequence with a rail running through the numbers. Drawn before the
        cards so it shows only in the gaps between them: the five stages are one pipeline,
        not five unrelated cards. items: [(n, title, desc)]."""
        hs = [30 + 19 * len(wrap(d, T_SMALL, CW - 76)) + PAD_B for _, _, d in items]
        cy, y = [], self.y
        for h in hs:
            cy.append(y + 30)
            y += h + 10
        self.parts.append(f'  <path d="M{PAD+28},{cy[0]} L{PAD+28},{cy[-1]}" '
                          f'stroke="{BAR_CTX}" stroke-width="2.5"/>')
        for n, title, desc in items:
            self.step(n, title, desc, accent=(n == accent_n))

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

    def matrix(self, heads, rows, foot=None, absent="nothing"):
        """Two columns answering the same question on every row, so the reader compares
        across a shared line instead of reading two unrelated lists. The right column is
        tinted its whole height: the contrast is the column, not a border on it.
        heads: (left, right). rows: [(label, left | None, right)]. foot: (left, right).
        A left cell of None draws as `absent`, which is the point of that row."""
        colw = (CW - 20) // 2
        lx, rx = PAD, PAD + colw + 20
        laid = [(lab, wrap(l, T_SMALL, colw - 24) if l else None, wrap(r, T_SMALL, colw - 24))
                for lab, l, r in rows]
        body_h = sum(32 + 20 * max(len(wl) if wl else 1, len(wr)) for _, wl, wr in laid)

        self.y += 12
        head = self.y
        # tint first, so every mark below sits on top of it
        self.rect(rx - 12, head - 16, colw + 24, body_h + (66 if foot else 30), TINT, None, rx=12)
        self.t(lx, head, heads[0], T_NOTE - 1, MUTED, 600, spacing="0.06em")
        self.t(rx, head, heads[1], T_NOTE - 1, ACCENT_LT, 600, spacing="0.06em")
        self.y = head + 10

        for label, wl, wr in laid:
            self.parts.append(f'  <path d="M{PAD},{self.y} L{W-PAD},{self.y}" stroke="{STROKE}" stroke-width="1"/>')
            self.t(PAD, self.y + 20, label.upper(), 11.5, MUTED, 600, spacing="0.08em")
            base = self.y + 38
            if wl:
                for i, ln in enumerate(wl):
                    self.t(lx, base + i * 20, ln, T_SMALL, SEC)
            else:
                self.t(lx, base, absent, T_SMALL, GHOST, style="italic")
            for i, ln in enumerate(wr):
                self.t(rx, base + i * 20, ln, T_SMALL, INK)
            self.y += 32 + 20 * max(len(wl) if wl else 1, len(wr))

        if foot:
            self.parts.append(f'  <path d="M{PAD},{self.y} L{W-PAD},{self.y}" stroke="{STROKE}" stroke-width="1"/>')
            self.t(lx, self.y + 26, foot[0], T_SMALL, MUTED, 600)
            self.t(rx, self.y + 26, foot[1], T_SMALL, ACCENT_LT, 600)
            self.y += 34
        self.y += 12

    def table(self, heads, rows, widths, accent_col=None, bars=None):
        """Columns of aligned text on shared rows. `accent_col` is tinted its whole
        height, so the column the reader is being pointed at reads as one thing rather
        than as a colour repeated per cell. `bars` draws a proportional rule under the
        first cell of each row, for a column whose values escalate."""
        gap = 12
        xs, x = [], PAD
        for wd in widths:
            xs.append(x)
            x += wd + gap
        wrapped = [[wrap(c, T_SMALL, w - (24 if i == accent_col else 0))
                    for i, (c, w) in enumerate(zip(r, widths))] for r in rows]
        heights = [22 + 20 * max(len(c) for c in r) + (10 if bars else 0) for r in wrapped]

        # Headers are set in spaced caps, which German blows straight through: wrap them
        # against their own column so a long one can never run into the next.
        def caps_w(t):
            return text_w(t, 11.5) + 0.08 * 11.5 * len(t)

        heads_l = []
        for hd, wd_ in zip(heads, widths):
            words, lines, cur = hd.upper().split(), [], ""
            for word in words:
                trial = (cur + " " + word).strip()
                if cur and caps_w(trial) > wd_ + gap:
                    lines.append(cur)
                    cur = word
                else:
                    cur = trial
            if cur:
                lines.append(cur)
            heads_l.append(lines)
        head_h = 15 * (max(len(l) for l in heads_l) - 1)

        self.y += 12
        head = self.y
        if accent_col is not None:
            self.rect(xs[accent_col] - 12, head - 16, widths[accent_col] + 24,
                      sum(heights) + head_h + 30, TINT, None, rx=12)
        for i, (lines, x) in enumerate(zip(heads_l, xs)):
            for j, ln in enumerate(lines):
                self.t(x, head + j * 15, ln, 11.5, ACCENT_LT if i == accent_col else MUTED,
                       600, spacing="0.08em")
        self.y = head + head_h + 10

        for r, cells, h in zip(rows, wrapped, heights):
            self.parts.append(f'  <path d="M{PAD},{self.y} L{W-PAD},{self.y}" stroke="{STROKE}" stroke-width="1"/>')
            base = self.y + 26
            for i, (lines, x) in enumerate(zip(cells, xs)):
                for j, ln in enumerate(lines):
                    self.t(x, base + j * 20, ln, T_SMALL,
                           INK if i == accent_col else (INK if i == 0 else SEC),
                           600 if i == 0 else None)
            if bars:
                # under the first cell's own lines, not the tallest cell in the row,
                # so the bar stays tied to the value it measures
                frac = bars[rows.index(r)]
                self.rect(xs[0], base + 20 * len(cells[0]) - 6,
                          round(widths[0] * frac, 1), 4, ACCENT if frac == max(bars) else BAR_CTX,
                          None, rx=2)
            self.y += h
        self.parts.append(f'  <path d="M{PAD},{self.y} L{W-PAD},{self.y}" stroke="{STROKE}" stroke-width="1"/>')
        self.y += 14

    def stack(self, layers, base, out=None):
        """Layers drawn as one contiguous slab resting on a wider base, with each layer's
        input arriving from the left. Two separate cards would say these are alternatives;
        sharing an edge and a foundation says they stack, which is the actual mechanism.
        layers: [(title, [lines], input_label)]. base: (title, sub). out: closing line."""
        sx = PAD + 146
        sw = W - PAD - sx
        laid = []
        for title, lines, inp in layers:
            wl = [wrap(l, T_SMALL, sw - 32) for l in lines]
            laid.append((title, wl, inp, 28 + 20 * sum(len(x) for x in wl) + 16))

        top = self.y
        total = sum(l[3] for l in laid)
        self.rect(sx, top, sw, total, PANEL, STROKE, rx=10)

        y = top
        for i, (title, wl, inp, h) in enumerate(laid):
            if i:
                self.parts.append(f'  <path d="M{sx},{y} L{sx+sw},{y}" stroke="{STROKE}" stroke-width="1"/>')
            self.t(sx + 16, y + 28, title, T_BODY, INK, 600)
            yy = y + 28
            for grp in wl:
                for ln in grp:
                    yy += 20
                    self.t(sx + 16, yy, ln, T_SMALL, SEC)
            # the input this layer consumes, arriving from the left
            mid = y + h / 2
            il = wrap(inp, T_NOTE, 126)
            for j, ln in enumerate(il):
                self.t(PAD, mid - 6 - (len(il) - 1) * 8.5 + j * 17, ln, T_NOTE, MUTED)
            self.parts.append(f'  <path d="M{PAD+132},{mid} L{sx-6},{mid}" stroke="{MUTED}" '
                              f'stroke-width="1.5" marker-end="url(#ar)"/>')
            y += h

        # the base is wider than what sits on it, so the stack reads as resting on it
        bt, bh = top + total, 52
        self.rect(sx - 10, bt, sw + 20, bh, TINT, ACCENT, rx=10, sw=1.5)
        self.t(sx + 6, bt + 22, base[0], T_BODY, ACCENT_LT, 600)
        self.t(sx + 6, bt + 41, base[1], T_NOTE, MUTED)
        self.y = bt + bh

        if out:
            self.arrow()
            self.band(out, accent=True)

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
