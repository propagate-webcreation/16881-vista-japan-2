#!/usr/bin/env python3
"""Generate professional placeholder images from image-manifest.json using Pillow."""

import json
from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
MANIFEST = ROOT / "docs" / "image-manifest.json"
PUBLIC = ROOT / "public"

# Color palette matching the site design
PRIMARY = (37, 99, 235)      # #2563EB
PRIMARY_DARK = (29, 78, 216) # #1D4ED8
DARK = (15, 23, 42)          # #0F172A
SURFACE = (248, 250, 252)    # #F8FAFC
ACCENT = (249, 115, 22)      # #F97316

RATIO_SIZES = {
    "16:9": (1920, 1080),
    "4:3":  (1200, 900),
    "3:4":  (900, 1200),
    "1:1":  (1200, 1200),
}


def gradient_image(w, h, c1, c2):
    """Create a vertical gradient image."""
    img = Image.new("RGB", (w, h))
    draw = ImageDraw.Draw(img)
    for y in range(h):
        r = int(c1[0] + (c2[0] - c1[0]) * y / h)
        g = int(c1[1] + (c2[1] - c1[1]) * y / h)
        b = int(c1[2] + (c2[2] - c1[2]) * y / h)
        draw.line([(0, y), (w, y)], fill=(r, g, b))
    return img


def add_design_elements(img, entry_id):
    """Add minimal geometric design elements."""
    draw = ImageDraw.Draw(img)
    w, h = img.size

    # Add subtle grid/dot pattern
    for x in range(0, w, 40):
        for y in range(0, h, 40):
            if (x + y) % 80 == 0:
                r, g, b = img.getpixel((min(x, w-1), min(y, h-1)))
                overlay = (min(r + 15, 255), min(g + 15, 255), min(b + 15, 255))
                draw.ellipse([x-2, y-2, x+2, y+2], fill=overlay)

    # Add a subtle accent line
    accent_y = int(h * 0.7)
    draw.rectangle([int(w * 0.1), accent_y, int(w * 0.3), accent_y + 3], fill=ACCENT)

    return img


def main():
    entries = json.loads(MANIFEST.read_text("utf-8"))
    ok = 0

    for entry in entries:
        eid = entry.get("id", "?")
        path_val = entry.get("path", "")
        ratio = entry.get("ratio", "1:1")
        if not path_val:
            continue

        out_path = PUBLIC / path_val.lstrip("/")
        out_path.parent.mkdir(parents=True, exist_ok=True)

        w, h = RATIO_SIZES.get(ratio, (1200, 1200))

        # Choose gradient based on image type
        if "hero" in eid or "cta" in eid:
            img = gradient_image(w, h, DARK, PRIMARY_DARK)
        elif "product" in eid:
            img = gradient_image(w, h, SURFACE, (230, 235, 245))
        elif "ceo" in eid:
            img = gradient_image(w, h, (220, 225, 235), SURFACE)
        elif "case" in eid:
            img = gradient_image(w, h, (200, 210, 230), (240, 245, 250))
        else:
            img = gradient_image(w, h, PRIMARY, PRIMARY_DARK)

        img = add_design_elements(img, eid)
        img.save(out_path, "WEBP", quality=90)
        print(f"  [ok] {eid} -> {out_path} ({w}x{h})")
        ok += 1

    print(f"Done: {ok}/{len(entries)} images.")


if __name__ == "__main__":
    main()
