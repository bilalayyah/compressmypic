#!/usr/bin/env python3
"""Generate branded per-article OG images for the CompressMyPic blog.

Usage:
    python3 scripts/generate-blog-images.py --jobs /tmp/jobs.json --out public/blog-images
    python3 scripts/generate-blog-images.py --jobs /tmp/og-jobs.json --out public --og

Jobs JSON: a list of {"id": <article id>, "lang": <lang>, "title": <localized title>}.
Output: 1200x630 PNG files named <id>-<lang>.png, in the RED minimalist
house style (warm-white background, faint red blobs, red CompressMyPic
wordmark, centered bold title, privacy subline, red bottom bar).
With --og, output is named og-<id>.png instead (per-tool social cards,
title = tool name, same red style). Deterministic: same input ->
byte-identical output (PNG, no timestamps). $0 — uses only Pillow +
system fonts (Noto Sans).

Full batch driver (all 1,551 articles) is a separate step: it extracts titles
from src/data/blogArticles.ts + src/locales/<lang>/blog.ts and calls this
script in chunks. See scripts/generate-blog-images-driver.ts.
"""

import argparse
import json
import os
import sys

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG = (251, 251, 249)          # warm white #fbfbf9
RED = (220, 38, 38)           # #dc2626 brand red
RED_DEEP = (185, 28, 28)      # #b91c1c
RED_LIGHT = (252, 165, 165)   # #fca5a5
DARK = (17, 24, 39)           # #111827 title ink
MUTED = (102, 109, 122)       # #666d7a subline
SUN = (245, 158, 11)          # #f59e0b icon sun (kept: warm highlight)
CIRCLES = [
    # (cx, cy, r, rgb) — soft red-tint blobs, partly off-canvas
    (-40, -40, 260, (254, 226, 226)),    # red-100, top-left
    (60, 640, 300, (255, 241, 242)),     # rose-50, bottom-left
    (1230, -60, 280, (254, 242, 242)),   # red-50, top-right
    (1150, 660, 260, (254, 226, 226)),   # red-100, bottom-right
]
SUBLINE = "Free · No Signup · No Upload · 100% Private"

FONT_BOLD = "/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf"
FONT_REGULAR = "/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf"
# Arabic: Noto Sans Arabic (raqm shaping; see text_kwargs below).
FONT_AR_BOLD = "/usr/share/fonts/truetype/noto/NotoSansArabic-Bold.ttf"
# CJK fallback for ja/ko/zh titles (Noto Sans CJK if present, else Serif CJK).
CJK_BOLD_CANDIDATES = [
    "/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc",
    "/usr/share/fonts/truetype/noto/NotoSansCJK-Bold.ttc",
    "/usr/share/fonts/opentype/noto/NotoSerifCJK-Bold.ttc",
]


def text_kwargs(lang):
    """PIL kwargs for shaped text. Arabic needs raqm shaping + RTL direction;
    without them the letters render isolated and in the wrong order. All
    other languages render exactly as before (empty kwargs)."""
    if lang == "ar":
        return {"direction": "rtl", "language": "ar"}
    return {}


# Arabic script ranges (letters, marks, punctuation, presentation forms).
_AR_RANGES = [(0x0600, 0x06FF), (0x0750, 0x077F), (0x08A0, 0x08FF),
              (0xFB50, 0xFDFF), (0xFE70, 0xFEFF)]


def _is_ar_char(ch):
    o = ord(ch)
    return any(a <= o <= b for a, b in _AR_RANGES)


def _split_runs(text):
    """Split text into maximal same-script runs: (is_arabic, run), with each
    space as its own (None, ' ') run. Needed because Noto Sans Arabic has
    NO Latin glyphs: a Latin token (KB, JPG, WebP, 'وEXIF' -> 'و' + 'EXIF')
    inside an Arabic title would render as tofu boxes if drawn with the
    Arabic font, and an Arabic word would be tofu in the Latin font."""
    runs = []
    cur_ar = None
    cur = []
    for ch in text:
        if ch == ' ':
            if cur:
                runs.append((cur_ar, ''.join(cur)))
                cur = []
            runs.append((None, ' '))
            cur_ar = None
        else:
            ar = _is_ar_char(ch)
            if cur_ar is None:
                cur_ar, cur = ar, [ch]
            elif ar == cur_ar:
                cur.append(ch)
            else:
                runs.append((cur_ar, ''.join(cur)))
                cur_ar, cur = ar, [ch]
    if cur:
        runs.append((cur_ar, ''.join(cur)))
    return runs


def _ar_textlength(draw, text, font_ar, font_lat):
    """Width of a mixed-script Arabic title line: each run measured with
    the font that can actually render it."""
    total = 0.0
    for is_ar, run in _split_runs(text):
        if is_ar is None:
            total += draw.textlength(' ', font=font_ar)
        elif is_ar:
            total += draw.textlength(run, font=font_ar, direction='rtl', language='ar')
        else:
            total += draw.textlength(run, font=font_lat)
    return total


def _textlength(draw, text, font, lang):
    """textlength that is mixed-script aware for Arabic (else the plain call)."""
    if lang != 'ar':
        return draw.textlength(text, font=font, **text_kwargs(lang))
    return _ar_textlength(draw, text, font, font_for('en', font.size, bold=True))


def _draw_ar_line(draw, line, y, font_ar, font_lat):
    """Draw one mixed-script Arabic title line, centered: runs are laid out
    right-to-left in logical order (Arabic runs shaped with raqm, Latin
    runs in the Latin font), each right-anchored at the running edge.
    All runs share ONE baseline (anchor 's' at y + the Arabic font's
    ascent) — anchoring on the ascender instead would misalign the runs,
    because the two fonts have different ascender metrics (a small Arabic
    glyph like 'و' would sit visibly lower than a Latin run)."""
    total = _ar_textlength(draw, line, font_ar, font_lat)
    x_right = (W + total) / 2
    baseline = y + font_ar.getmetrics()[0]
    space_w = draw.textlength(' ', font=font_ar)
    for is_ar, run in _split_runs(line):
        if is_ar is None:
            x_right -= space_w
        elif is_ar:
            w = draw.textlength(run, font=font_ar, direction='rtl', language='ar')
            draw.text((x_right, baseline), run, font=font_ar, fill=DARK, anchor='rs',
                      direction='rtl', language='ar')
            x_right -= w
        else:
            w = draw.textlength(run, font=font_lat)
            draw.text((x_right, baseline), run, font=font_lat, fill=DARK, anchor='rs')
            x_right -= w


def font_for(lang, size, bold=True):
    """Pick a font that can render the language; CJK needs a CJK font."""
    if lang == "ar" and bold:
        return ImageFont.truetype(FONT_AR_BOLD, size)
    if lang in ("ja", "ko", "zh"):
        if bold:
            for path in CJK_BOLD_CANDIDATES:
                if os.path.exists(path):
                    return ImageFont.truetype(path, size)
            # Fall through to Noto Sans: it lacks CJK glyphs (tofu boxes).
            # The full-batch driver must fail loudly here instead of shipping tofu.
            raise RuntimeError(
                f"No CJK bold font found for lang={lang}; refusing to render. "
                f"Checked: {CJK_BOLD_CANDIDATES}"
            )
        # Regular weight is only ever used for Latin-only strings (the
        # "FREE ONLINE IMAGE TOOLS" tagline and the privacy subline), so
        # Noto Sans Regular is correct here.
        return ImageFont.truetype(FONT_REGULAR, size)
    path = FONT_BOLD if bold else FONT_REGULAR
    return ImageFont.truetype(path, size)


def _split_point(draw, word, font, max_width, lang="en"):
    """Largest fitting character prefix (binary search), preferring not to
    split inside a Latin letter/digit run (keeps acronyms like 'PNG'
    together). Backs off to the run start when the prefix stays usable."""
    lo, hi = 1, len(word)
    while lo < hi:
        mid = (lo + hi + 1) // 2
        if _textlength(draw, word[:mid], font, lang) <= max_width:
            lo = mid
        else:
            hi = mid - 1
    while (
        lo > 4
        and lo < len(word)
        and word[lo - 1].isascii()
        and word[lo - 1].isalnum()
        and word[lo].isascii()
        and word[lo].isalnum()
    ):
        lo -= 1
    return lo


def wrap_text(draw, text, font, max_width, lang="en"):
    """Greedy word wrap by pixel width; returns list of lines.
    A word wider than max_width is split by character — required for
    spaceless CJK titles (Japanese has no spaces, so the whole title is
    a single 'word'); CJK breaks anywhere without hyphenation."""
    words = text.split()
    lines, cur = [], ""
    for word in words:
        while _textlength(draw, word, font, lang) > max_width:
            cut = _split_point(draw, word, font, max_width, lang)
            chunk, word = word[:cut], word[cut:]
            if cur:
                lines.append(cur)
                cur = ""
            lines.append(chunk)
        trial = f"{cur} {word}".strip()
        if _textlength(draw, trial, font, lang) <= max_width:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    return lines


def fit_title(draw, title, lang, max_width, max_lines=3):
    """Largest bold size (76..44) whose wrapped title fits in max_lines."""
    for size in range(76, 43, -4):
        font = font_for(lang, size, bold=True)
        lines = wrap_text(draw, title, font, max_width, lang)
        if len(lines) <= max_lines and all(
            _textlength(draw, line, font, lang) <= max_width for line in lines
        ):
            return font, lines
    # Fallback: smallest size, allow overflow lines (should not happen for
    # real titles, which are <=60 chars after the metadata fix).
    font = font_for(lang, 44, bold=True)
    lines = wrap_text(draw, title, font, max_width, lang)
    if len(lines) > max_lines or any(
        _textlength(draw, line, font, lang) > max_width for line in lines
    ):
        print(f"OVERFLOW title needs {len(lines)} lines at 44px: {title!r}", file=sys.stderr)
    return font, lines


def draw_icon(draw, cx, top, w=120, h=92):
    """Simple image glyph: rounded-rect outline, mountains, sun."""
    x0, y0, x1, y1 = cx - w // 2, top, cx + w // 2, top + h
    draw.rounded_rectangle([x0, y0, x1, y1], radius=18, outline=RED, width=6)
    # sun
    draw.ellipse([x1 - 38, y0 + 14, x1 - 14, y0 + 38], fill=SUN)
    # mountains
    draw.polygon(
        [(x0 + 16, y1 - 8), (x0 + 52, y0 + 42), (x0 + 88, y1 - 8)],
        fill=RED_LIGHT,
    )
    draw.polygon(
        [(x0 + 48, y1 - 8), (x0 + 84, y0 + 50), (x1 - 8, y1 - 8)],
        fill=RED,
    )


def render_card(title, lang):
    img = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(img, "RGBA")
    # soft circles (solid pastel; edges are off-canvas so no halo needed)
    for cx, cy, r, rgb in CIRCLES:
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=rgb + (255,))
    draw = ImageDraw.Draw(img, "RGB")

    # wordmark + tagline, top-left — Latin brand strings: always the Latin
    # font (Noto Sans Arabic has no Latin glyphs, so font_for('ar') would
    # render the wordmark as tofu boxes).
    wm_font = font_for('en', 44, bold=True)
    draw.text((60, 46), "CompressMyPic", font=wm_font, fill=RED)
    tag_font = font_for(lang, 21, bold=False)
    draw.text((62, 102), "FREE ONLINE IMAGE TOOLS", font=tag_font, fill=MUTED)

    # icon, centered
    draw_icon(draw, W // 2, 168)

    # title, centered, auto-fit, max 3 lines
    title_font, lines = fit_title(draw, title, lang, max_width=1000, max_lines=3)
    line_h = int(title_font.size * 1.18)
    total_h = line_h * len(lines)
    y = 292
    if lang == "ar":
        # Mixed-script RTL: draw each line run-by-run (Arabic runs in the
        # Arabic font, Latin runs in the Latin font) so nothing is tofu.
        lat_font = font_for('en', title_font.size, bold=True)
        for line in lines:
            _draw_ar_line(draw, line, y, title_font, lat_font)
            y += line_h
    else:
        for line in lines:
            lw = draw.textlength(line, font=title_font)
            draw.text(((W - lw) / 2, y), line, font=title_font, fill=DARK)
            y += line_h
    _ = total_h

    # subline, centered below title
    sub_font = font_for(lang, 26, bold=False)
    sub = SUBLINE
    sw = draw.textlength(sub, font=sub_font)
    draw.text(((W - sw) / 2, 292 + total_h + 22), sub, font=sub_font, fill=MUTED)

    # red bottom bar
    draw.rectangle([0, H - 16, W, H], fill=RED)
    return img


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--jobs", required=True, help="JSON list of {id, lang, title}")
    ap.add_argument("--out", required=True, help="output directory")
    ap.add_argument("--og", action="store_true",
                    help="per-tool social cards: output og-<id>.png (lang ignored)")
    args = ap.parse_args()

    with open(args.jobs, encoding="utf-8") as f:
        jobs = json.load(f)
    os.makedirs(args.out, exist_ok=True)

    for job in jobs:
        img = render_card(job["title"], job["lang"])
        name = f"og-{job['id']}.png" if args.og else f"{job['id']}-{job['lang']}.png"
        path = os.path.join(args.out, name)
        img.save(path, format="PNG", optimize=True)
        print(f"{name}: {os.path.getsize(path)} bytes")
    print(f"done: {len(jobs)} images -> {args.out}")


if __name__ == "__main__":
    main()
