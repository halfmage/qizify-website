#!/usr/bin/env bash
# Renders the product manager guide to PDF in the LearnSlice website palette.
# Requires pandoc and Google Chrome. Run from the repo root.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../../.." && pwd)"
GUIDE="${1:-pm}"
if [ "$GUIDE" = "po" ]; then
  SRC="$ROOT/docs/product/guide-ai-for-product-owners.md"
  NAME="AI-for-Product-Owners"
else
  SRC="$ROOT/docs/product/guide-ai-for-product-managers.md"
  NAME="AI-for-Product-Managers"
fi
OUT="$ROOT/docs/product/pdf"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

# Strip internal-only HTML comments, then make image paths absolute for Chrome.
python3 - "$SRC" "$OUT/body.md" "$ROOT" <<'PY'
import re,sys
src,dst,root=sys.argv[1],sys.argv[2],sys.argv[3]
t=open(src).read()
t=re.sub(r'<!--.*?-->','',t,flags=re.S)
t=t.replace('(/images/blog/', '(file://'+root+'/public/images/blog/')
t=t.replace('[signup]','')
open(dst,'w').write(t.strip()+'\n')
PY

pandoc -f gfm -t html5 "$OUT/body.md" -o "$OUT/body.html"
python3 "$ROOT/docs/product/pdf/wrap.py" "$OUT/body.html" "$OUT/guide.html"
"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$OUT/$NAME.pdf" \
  "file://$OUT/guide.html" 2>/dev/null
rm -f "$OUT/body.md" "$OUT/body.html"
echo "built: $OUT/$NAME.pdf"
