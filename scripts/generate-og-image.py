#!/usr/bin/env python3
"""Generate the CompressMyPic homepage social card (public/og-image.png).

Red minimalist theme (redesign 2026-11-21): dark-red gradient background,
white bold title, white image glyphs with amber sun, white "90% smaller"
pill with red text, light-red subline with the current tool count
("47 free image tools"). 1200x630 PNG, deterministic. $0 — Pillow +
system fonts (Noto Sans).

Usage:
    python3 scripts/generate-og-image.py --out public/og-image.png
"""
import argparse
import os

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
TOP = (153, 27, 27)       # #991b1b dark red, top of gradient
BOTTOM = (220, 38, 38)    # #dc2626 brand red, bottom of gradient
WHITE = (255, 255, 255)
SUBLINE = (254, 226, 226)  # #fee2e2 light red
SUN = (245, 158, 11)       # #f59e0b amber sun
RED_TEXT = (220, 38, 38)

FONT_BOLD = "/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf"
FONT_REGULAR = "/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf"


def vgrad(w, h, top, bottom):
    """Vertical gradient image (one rectangle per row — fast enough)."""
    img = Image.new("RGB", (w, h), top)
    d = ImageDraw.Draw(img)
    for y in range(h):
        t = y / max(h - 1, 1)
        c = tuple(round(top[i] + (bottom[i] - top[i]) * t) for i in range(3))
        d.line([(0, y), (w, y)], fill=c)
    return img


def draw_glyph(draw, x0, y0, w, h, outline_w=8):
    """White image glyph: rounded-rect outline, mountains, amber sun."""
    x1, y1 = x0 + w, y0 + h
    draw.rounded_rectangle([x0, y0, x1, y1], radius=28, outline=WHITE, width=outline_w)
    # sun
    sr = int(w * 0.08)
    draw.ellipse([x1 - int(w * 0.22), y0 + int(h * 0.10),
                  x1 - int(w * 0.22) + 2 * sr, y0 + int(h * 0.10) + 2 * sr], fill=SUN)
    # mountains
    draw.polygon(
        [(x0 + int(w * 0.06), y1 - 8), (x0 + int(w * 0.42), y0 + int(h * 0.48)),
         (x0 + int(w * 0.74), y1 - 8)],
        fill=WHITE,
    )
    draw.polygon(
        [(x0 + int(w * 0.38), y1 - 8), (x0 + int(w * 0.66), y0 + int(h * 0.55)),
         (x1 - int(w * 0.04), y1 - 8)],
        fill=(254, 226, 226),
    )


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", required=True, help="output PNG path")
    args = ap.parse_args()

    img = vgrad(W, H, TOP, BOTTOM)
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    # soft white blobs for depth (very low alpha, like the old card)
    od.ellipse([820, -160, 1340, 240], fill=(255, 255, 255, 18))
    od.ellipse([-120, 420, 320, 760], fill=(255, 255, 255, 12))
    img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")
    draw = ImageDraw.Draw(img, "RGBA")

    # title, left, white bold
    title_font = ImageFont.truetype(FONT_BOLD, 78)
    for i, line in enumerate(["CompressMyPic", "Free Image", "Compressor Online"]):
        draw.text((60, 92 + i * 92), line, font=title_font, fill=WHITE)

    # subline, two lines, light red
    sub_font = ImageFont.truetype(FONT_REGULAR, 32)
    draw.text((60, 400), "47 free image tools · JPG, PNG & WebP",
              font=sub_font, fill=SUBLINE)
    draw.text((60, 446), "No Signup, No Watermark, 100% Private",
              font=sub_font, fill=SUBLINE)

    # big glyph, top-right
    draw_glyph(draw, 730, 60, 330, 240)
    # down arrow
    ax = 895
    draw.line([(ax, 330), (ax, 380)], fill=WHITE, width=7)
    draw.polygon([(ax - 16, 364), (ax + 16, 364), (ax, 392)], fill=WHITE)
    # "90% smaller" pill, white bg, red text, right of the arrow
    pill_font = ImageFont.truetype(FONT_BOLD, 30)
    pill_text = "90% smaller"
    tw = draw.textlength(pill_text, font=pill_font)
    px0, py0, px1, py1 = 950, 322, int(950 + tw + 48), 378
    draw.rounded_rectangle([px0, py0, px1, py1], radius=28, fill=WHITE)
    draw.text((px0 + 24, py0 + 10), pill_text, font=pill_font, fill=RED_TEXT)
    # small glyph, bottom-right
    draw_glyph(draw, 760, 420, 210, 150, outline_w=6)

    os.makedirs(os.path.dirname(args.out) or ".", exist_ok=True)
    img.save(args.out, format="PNG", optimize=True)
    print(f"{args.out}: {os.path.getsize(args.out)} bytes")


if __name__ == "__main__":
    main()
