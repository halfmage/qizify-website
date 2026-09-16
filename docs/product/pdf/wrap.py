import sys, re, os
body = open(sys.argv[1]).read()
ROOT = os.path.abspath(os.path.join(os.path.dirname(sys.argv[2]), '..', '..', '..'))

# The first h1 becomes the cover title, the first strong paragraph the cover statement.
CSS = """
:root{
  --dark:#2a2622; --surface:#37322c; --border:#46402f; --border-light:#5a5249;
  --white:#faf8f4; --muted:#cfc7be; --gray:#a89e92;
  --accent:#f4a261; --accent-graphic:#e8b07a; --primary:#7c5cfc;
}
@page{ size:A4; margin:0; }
html,body{ -webkit-print-color-adjust:exact; print-color-adjust:exact; }
html,body{ background:var(--dark); }
/* Zero page margins so the dark ground reaches the paper edge, then the gutters
   come from padding that repeats on every fragment via box-decoration-break. */
.doc{ padding:19mm 41mm 21mm; -webkit-box-decoration-break:clone; box-decoration-break:clone; }
body{
  background:transparent; color:var(--muted); margin:0;
  font-family:"Inter Variable","Inter",system-ui,-apple-system,sans-serif;
  font-size:10.8pt; line-height:1.58; letter-spacing:0.002em;
}
/* Cover */
.cover-mask{
  position:absolute; left:-41mm; right:-41mm; bottom:-30mm; height:26mm;
  background:var(--dark); z-index:2;
}
.cover{
  page-break-after:always; box-sizing:border-box;
  position:relative; height:257mm;
  display:flex; flex-direction:column; justify-content:center;
  margin-left:-16mm;             /* claw back page margin: cover text starts at 25mm */
  padding-right:66mm;            /* text stops well clear of the image column */
}
/* A full-height column on the right, bleeding off three edges. The text sits to its
   left and is centred against it. */
.cover-img{
  max-width:none !important;
  position:absolute; z-index:3; top:-23mm; right:-22mm;
  width:78mm; height:297mm; max-width:none;
  object-fit:cover; object-position:center center;
}
.cover .eyebrow{
  font-size:8.5pt; letter-spacing:.14em; text-transform:uppercase;
  color:var(--accent); font-weight:600; margin-bottom:10mm;
}
.cover h1{
  font-size:31pt; line-height:1.04; letter-spacing:-0.025em; font-weight:500;
  color:var(--white); margin:0 0 8mm; max-width:none;
}
.cover .stat{
  font-size:13pt; line-height:1.45; color:var(--white); font-weight:500;
  border-left:2px solid var(--accent); padding-left:5mm; margin:0 0 8mm; max-width:none;
}
.cover .meta{ font-size:10.2pt; color:var(--muted); line-height:1.5; max-width:none; }
.cover .meta em{ font-style:normal; }
/* Running footer. Fixed elements repeat on every printed page in Chrome. */
.runner{
  position:fixed; bottom:9mm; left:41mm; right:41mm;
  font-size:7.6pt; letter-spacing:.09em; text-transform:uppercase;
  color:#6f6459; border-top:1px solid var(--border); padding-top:2mm;
}
/* The closing offer is the one page that must not split. */
.closing{ page-break-before:always; page-break-inside:avoid; }
.closing h2{ border-top:none; margin-top:0; padding-top:0; }
/* Table of contents */
.toc{ page-break-after:always; }
.toc h2{ border-top:none; margin-top:0; padding-top:0; }
.toc ol{ list-style:none; margin:4mm 0 0; padding:0; }
.toc > ol > li{ margin:0 0 1mm; }
.toc a{ color:var(--muted); text-decoration:none; display:block; }
.toc .l2{
  font-size:10.4pt; color:var(--white); font-weight:500;
  border-top:1px solid var(--border); padding:2mm 0 0.7mm;
}
.toc .l3{ font-size:9.2pt; color:var(--gray); padding:0.35mm 0 0.35mm 7mm; }
.toc ol ol{ margin:0 0 1mm; }
.cover .rule{ height:1px; background:var(--border); margin:9mm 0 6mm; }
/* Headings */
h1,h2,h3{ color:var(--white); font-weight:500; letter-spacing:-0.015em; }
h1{ font-size:20pt; margin:0 0 4mm; page-break-after:avoid; }
h2{
  font-size:15.5pt; margin:9mm 0 3mm; padding-top:3mm;
  border-top:1px solid var(--border); page-break-after:avoid;
}
h3{ font-size:11.8pt; margin:7mm 0 2mm; color:var(--white); page-break-after:avoid; }
/* Tool groupings in the prompt pack. Must not compete with the bold prompt labels
   beneath them, so they read as dividers rather than headings. */
h4{
  font-size:8.2pt; letter-spacing:.12em; text-transform:uppercase; font-weight:600;
  color:var(--accent); margin:8mm 0 3mm; padding-bottom:1.6mm;
  border-bottom:1px solid var(--border); page-break-after:avoid;
}
h2+h3{ margin-top:4mm; }
p{ margin:0 0 3.6mm; }
strong{ color:var(--white); font-weight:600; }
em{ color:var(--muted); }
a{ color:var(--accent); text-decoration:none; }
hr{ border:0; border-top:1px solid var(--border); margin:8mm 0; }
/* Lists */
ul,ol{ margin:0 0 3.8mm; padding-left:5.5mm; }
li{ margin-bottom:1.8mm; }
li::marker{ color:var(--accent); }
/* Tables */
table{
  width:100%; border-collapse:collapse; margin:4mm 0 5mm;
  font-size:9.2pt; page-break-inside:auto;
}
tr{ page-break-inside:avoid; }
thead{ display:table-header-group; }
th{
  text-align:left; color:var(--gray); font-weight:600; font-size:8pt;
  letter-spacing:.07em; text-transform:uppercase;
  border-bottom:1px solid var(--border-light); padding:2mm 3mm 2mm 0; vertical-align:bottom;
}
td{
  padding:2.4mm 3mm 2.4mm 0; border-bottom:1px solid var(--border);
  vertical-align:top; color:var(--muted);
}
td:first-child{ color:var(--white); }
tr:last-child td{ border-bottom:none; }
/* Prompts */
pre{
  background:var(--surface); border:1px solid var(--border); border-left:2px solid var(--accent);
  border-radius:3mm; padding:4mm 5mm; margin:3.5mm 0 5mm; overflow:visible;
  page-break-inside:avoid;
}
pre code{
  font-family:"JetBrains Mono","SF Mono",Menlo,Consolas,monospace;
  font-size:8.6pt; line-height:1.55; color:var(--muted); white-space:pre-wrap; word-break:break-word;
}
p code, li code, td code{
  font-family:"JetBrains Mono","SF Mono",Menlo,monospace;
  font-size:8.8pt; color:var(--accent); background:var(--surface);
  padding:0.4mm 1.2mm; border-radius:1mm;
}
/* Figures */
img{ display:block; width:100%; margin:4mm 0 5mm; page-break-inside:avoid; }
blockquote{
  margin:4mm 0; padding-left:5mm; border-left:2px solid var(--border-light); color:var(--gray);
}
/* Keep a heading with what follows it */
h2,h3,h4{ break-after:avoid-page; }
"""

m = re.search(r'<h1[^>]*>(.*?)</h1>', body, re.S)
title = m.group(1) if m else "AI for product managers"
body = body.replace(m.group(0), "", 1) if m else body

# Pull the opening bold statement and the sourcing paragraph onto the cover.
stat = re.search(r'<p><strong>(.*?)</strong></p>', body, re.S)
stat_html = stat.group(1) if stat else ""
if stat: body = body.replace(stat.group(0), "", 1)
meta = re.search(r'<p><em>Inside:.*?</p>', body, re.S)
meta_html = meta.group(0) if meta else ""
if meta: body = body.replace(meta_html, "", 1)
body = re.sub(r'^\s*<hr\s*/?>', '', body.strip(), count=1)

# Keep the closing offer whole, on its own page.
ix = body.find('<h2 id="what-we-do"')
if ix != -1:
    body = body[:ix] + '<section class="closing">' + body[ix:] + '</section>'

# Table of contents, built from the body's own headings. Entries are internal links,
# which survive into the PDF; Chrome cannot render page numbers in print.
items=re.findall(r'<(h2|h3)[^>]*id="([^"]+)"[^>]*>(.*?)</\1>', body, re.S)
toc_html=""
if items:
    rows=[]
    open_sub=False
    for tag,hid,txt in items:
        label=re.sub(r'\s+',' ',re.sub(r'<[^>]+>','',txt)).strip()
        if tag=='h2':
            if open_sub: rows.append('</ol></li>'); open_sub=False
            rows.append(f'<li><a class="l2" href="#{hid}">{label}</a>')
            rows.append('<ol>'); open_sub=True
        else:
            rows.append(f'<li><a class="l3" href="#{hid}">{label}</a></li>')
    if open_sub: rows.append('</ol></li>')
    toc_html='<section class="toc"><h2>Contents</h2><ol>'+''.join(rows)+'</ol></section>'

cover = f"""<section class="cover">
  <div class="eyebrow">LearnSlice guide</div>
  <h1>{title}</h1>
  <p class="stat">{stat_html}</p>
  {'<div class="rule"></div>' if meta_html else ''}
  <div class="meta">{meta_html}</div>
  <div class="cover-mask"></div>
  <img class="cover-img" src="file://{ROOT}/public/images/blog/guide-cover-vertical.jpg" alt="Two colleagues working together at a desk with a tablet and notes">
</section>"""

html = f"""<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>{title}</title><style>{CSS}</style></head>
<body><div class="runner">{title}</div><div class="doc">{cover}{toc_html}{body}</div></body></html>"""
open(sys.argv[2],'w').write(html)
print("wrapped:", sys.argv[2])
