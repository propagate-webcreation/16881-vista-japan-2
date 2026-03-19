#!/usr/bin/env python3
"""Gemini native image generation via generate_content (no Imagen paid plan needed)."""

import json
import os
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MANIFEST = ROOT / "docs" / "image-manifest.json"
PUBLIC = ROOT / "public"


def main():
    api_key = os.environ.get("GEMINI_API_KEY") or os.environ.get("GOOGLE_API_KEY")
    if not api_key:
        print("Error: GEMINI_API_KEY not set", file=sys.stderr)
        return 1

    from google import genai
    from google.genai import types

    client = genai.Client(api_key=api_key)

    entries = json.loads(MANIFEST.read_text("utf-8"))
    ok = 0

    for entry in entries:
        eid = entry.get("id", "?")
        prompt = entry.get("prompt", "")
        neg = entry.get("negative_prompt", "")
        path_val = entry.get("path", "")
        if not prompt or not path_val:
            continue

        out_path = PUBLIC / path_val.lstrip("/")
        out_path.parent.mkdir(parents=True, exist_ok=True)

        if out_path.exists():
            print(f"  [skip] {eid}: already exists")
            ok += 1
            continue

        full_prompt = f"{prompt}. Avoid: {neg}" if neg else prompt

        print(f"  [gen] {eid} ...")
        try:
            response = client.models.generate_content(
                model="gemini-2.5-flash-image",
                contents=full_prompt,
                config=types.GenerateContentConfig(
                    response_modalities=["IMAGE", "TEXT"],
                ),
            )

            saved = False
            for part in response.candidates[0].content.parts:
                if part.inline_data and part.inline_data.data:
                    raw = part.inline_data.data
                    mime = part.inline_data.mime_type or "image/png"

                    if out_path.suffix.lower() == ".webp" or "png" in mime or "jpeg" in mime:
                        from PIL import Image
                        import io
                        img = Image.open(io.BytesIO(raw))
                        if img.mode in ("RGBA", "P"):
                            img = img.convert("RGB")
                        img.save(out_path, "WEBP", quality=90)
                    else:
                        out_path.write_bytes(raw)
                    saved = True
                    break

            if saved:
                print(f"  [ok] {eid} -> {out_path}")
                ok += 1
            else:
                print(f"  [error] {eid}: no image in response", file=sys.stderr)

        except Exception as e:
            print(f"  [error] {eid}: {e}", file=sys.stderr)

        time.sleep(2)

    print(f"Done: {ok}/{len(entries)} images.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
