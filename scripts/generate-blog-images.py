#!/usr/bin/env python3
"""Generate branded per-article OG images for the CompressMyPic blog.

Usage:
    python3 scripts/generate-blog-images.py --jobs /tmp/jobs.json --out public/blog-images

Jobs JSON: a list of {"id": <article id>, "lang": <lang>, "title": <localized title>}.
Output: 1200x630 PNG files named <id>-<lang>.png, matching the house style of
the existing per-tool cards in public/og-*.png (pastel background, soft
circles, purple CompressMyPic wordmark, centered bold title, privacy subline,
purple bottom bar). Deterministic: same input -> byte-identical output
(PNG, no timestamps). $0 — uses only Pillow + system fonts (Noto Sans).

Full batch driver (all 1,584 articles) is a separate step: it extracts titles
from src/data/blogArticles.ts + src/locales/<lang>/blog.ts and calls this
script in chunks. See ~/workspace/compressmypic/fix-2026-11-18/article-images-plan.md.
"""

import argparse
import json
import os
import sys

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG = (244, 241, 254)          # light lavender
PURPLE = (124, 58, 237)      # #7c3aed brand purple
DARK = (30, 27, 75)           # #1e1b4b title ink
MUTED = (100, 116, 139)       # #64748b subline
SUN = (245, 158, 11)          # #f59e0b icon sun
CIRCLES = [
    # (cx, cy, r, rgb) — soft pastel blobs, partly off-canvas
    (-40, -40, 260, (219, 234, 254)),    # light blue, top-left
    (60, 640, 300, (252, 231, 243)),     # pink, bottom-left
    (1230, -60, 280, (237, 233, 254)),   # lavender, top-right
    (1150, 660, 260, (220, 252, 231)),   # mint, bottom-right
]
SUBLINE = "Free · No Signup · No Upload · 100% Private"

FONT_BOLD = "/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf"
FONT_REGULAR = "/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf"
# CJK fallback for ja/ko/zh titles (Noto Sans CJK if present, else Serif CJK).
CJK_BOLD_CANDIDATES = [
    "/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc",
    "/usr/share/fonts/truetype/noto/NotoSansCJK-Bold.ttc",
    "/usr/share/fonts/opentype/noto/NotoSerifCJK-Bold.ttc",
]


def font_for(lang, size, bold=True):
    """Pick a font that can render the language; CJK needs a CJK font."""
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


def _split_point(draw, word, font, max_width):
    """Largest fitting character prefix (binary search), preferring not to
    split inside a Latin letter/digit run (keeps acronyms like 'PNG'
    together). Backs off to the run start when the prefix stays usable."""
    lo, hi = 1, len(word)
    while lo < hi:
        mid = (lo + hi + 1) // 2
        if draw.textlength(word[:mid], font=font) <= max_width:
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


def wrap_text(draw, text, font, max_width):
    """Greedy word wrap by pixel width; returns list of lines.
    A word wider than max_width is split by character — required for
    spaceless CJK titles (Japanese has no spaces, so the whole title is
    a single 'word'); CJK breaks anywhere without hyphenation."""
    words = text.split()
    lines, cur = [], ""
    for word in words:
        while draw.textlength(word, font=font) > max_width:
            cut = _split_point(draw, word, font, max_width)
            chunk, word = word[:cut], word[cut:]
            if cur:
                lines.append(cur)
                cur = ""
            lines.append(chunk)
        trial = f"{cur} {word}".strip()
        if draw.textlength(trial, font=font) <= max_width:
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
        lines = wrap_text(draw, title, font, max_width)
        if len(lines) <= max_lines and all(
            draw.textlength(line, font=font) <= max_width for line in lines
        ):
            return font, lines
    # Fallback: smallest size, allow overflow lines (should not happen for
    # real titles, which are <=60 chars after the metadata fix).
    font = font_for(lang, 44, bold=True)
    lines = wrap_text(draw, title, font, max_width)
    if len(lines) > max_lines or any(
        draw.textlength(line, font=font) > max_width for line in lines
    ):
        print(f"OVERFLOW title needs {len(lines)} lines at 44px: {title!r}", file=sys.stderr)
    return font, lines


def draw_icon(draw, cx, top, w=120, h=92):
    """Simple image glyph: rounded-rect outline, mountains, sun."""
    x0, y0, x1, y1 = cx - w // 2, top, cx + w // 2, top + h
    draw.rounded_rectangle([x0, y0, x1, y1], radius=18, outline=PURPLE, width=6)
    # sun
    draw.ellipse([x1 - 38, y0 + 14, x1 - 14, y0 + 38], fill=SUN)
    # mountains
    draw.polygon(
        [(x0 + 16, y1 - 8), (x0 + 52, y0 + 42), (x0 + 88, y1 - 8)],
        fill=(167, 139, 250),
    )
    draw.polygon(
        [(x0 + 48, y1 - 8), (x0 + 84, y0 + 50), (x1 - 8, y1 - 8)],
        fill=PURPLE,
    )


def render_card(title, lang):
    img = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(img, "RGBA")
    # soft circles (solid pastel; edges are off-canvas so no halo needed)
    for cx, cy, r, rgb in CIRCLES:
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=rgb + (255,))
    draw = ImageDraw.Draw(img, "RGB")

    # wordmark + tagline, top-left
    wm_font = font_for(lang, 44, bold=True)
    draw.text((60, 46), "CompressMyPic", font=wm_font, fill=PURPLE)
    tag_font = font_for(lang, 21, bold=False)
    draw.text((62, 102), "FREE ONLINE IMAGE TOOLS", font=tag_font, fill=MUTED)

    # icon, centered
    draw_icon(draw, W // 2, 168)

    # title, centered, auto-fit, max 3 lines
    title_font, lines = fit_title(draw, title, lang, max_width=1000, max_lines=3)
    line_h = int(title_font.size * 1.18)
    total_h = line_h * len(lines)
    y = 292
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

    # purple bottom bar
    draw.rectangle([0, H - 16, W, H], fill=PURPLE)
    return img


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--jobs", required=True, help="JSON list of {id, lang, title}")
    ap.add_argument("--out", required=True, help="output directory")
    args = ap.parse_args()

    with open(args.jobs, encoding="utf-8") as f:
        jobs = json.load(f)
    os.makedirs(args.out, exist_ok=True)

    for job in jobs:
        img = render_card(job["title"], job["lang"])
        name = f"{job['id']}-{job['lang']}.png"
        path = os.path.join(args.out, name)
        img.save(path, format="PNG", optimize=True)
        print(f"{name}: {os.path.getsize(path)} bytes")
    print(f"done: {len(jobs)} images -> {args.out}")


if __name__ == "__main__":
    main()
