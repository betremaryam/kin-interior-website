#!/usr/bin/env python3
"""Fetch and optimize interior-design imagery for the portfolio.

Downloads curated Unsplash photos, then writes a wide hero variant and a
gallery-card variant as compressed JPEGs to keep page weight low.
"""
import io
import os
import sys
import urllib.request

from PIL import Image

OUT = os.path.join(os.path.dirname(__file__), "..", "public", "projects")
os.makedirs(OUT, exist_ok=True)

# slug -> unsplash photo id
PHOTOS = {
    "serene-residence-living": "1586023492125-27b2c045efd7",
    "nordic-kitchen": "1556912167670-9a4b3c6c9c0a",
    "atelier-bedroom": "1505693416388-ac5ce068fe85",
    "studio-workspace": "1497366754035-f200968a6e72",
    "boutique-retail": "1604014237800-1c9102c219da",
    "harvest-restaurant": "1517248135467-4c7edcad34c4",
    "azure-hotel-lobby": "1564501049412-61c2a3083791",
    "lumen-spa": "1600334129128-685c5582fd35",
    "verdant-courtyard": "1600210492493-0946911123ea",
    "monochrome-bath": "1600566753190-17f0baa2a6c3",
    "skyline-penthouse": "1600585154340-be6161a56a0c",
    "warm-minimal-dining": "1617806118233-18e1de247200",
}

# fallbacks if a primary id 404s (all real interior ids)
FALLBACKS = [
    "1618221195710-dd6b41faaea6",
    "1567016376408-0226e4d0c1ea",
    "1493809842364-78817add7ffb",
    "1502005229762-cf1b2da7c5d6",
    "1524758631624-e2822e304c36",
    "1560448204-e02f11c3d0e2",
    "1616137466211-f939a420be84",
    "1616486338812-3dadae4b4ace",
    "1583847268964-b28dc8f51f92",
    "1631679706909-1844bbd07221",
    "1615875605825-5eb9bb5d52ac",
    "1598928506311-c55ded91a20c",
]


def fetch(photo_id, w=1600, q=80):
    url = (
        f"https://images.unsplash.com/photo-{photo_id}"
        f"?w={w}&q={q}&auto=format&fit=crop"
    )
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()


def save_variants(slug, data):
    img = Image.open(io.BytesIO(data)).convert("RGB")
    # gallery card: 1200 wide, 4:3
    card = crop_to_ratio(img, 4 / 3)
    card.thumbnail((1200, 1200))
    card.save(os.path.join(OUT, f"{slug}.jpg"), "JPEG", quality=78, optimize=True, progressive=True)
    # wide hero/detail: 2000 wide, 16:9
    wide = crop_to_ratio(img, 16 / 9)
    wide.thumbnail((2000, 2000))
    wide.save(os.path.join(OUT, f"{slug}-wide.jpg"), "JPEG", quality=80, optimize=True, progressive=True)
    return card.size, wide.size


def crop_to_ratio(img, ratio):
    w, h = img.size
    cur = w / h
    if cur > ratio:
        nw = int(h * ratio)
        x = (w - nw) // 2
        return img.crop((x, 0, x + nw, h))
    nh = int(w / ratio)
    y = (h - nh) // 2
    return img.crop((0, y, w, y + nh))


def main():
    fb = list(FALLBACKS)
    for slug, pid in PHOTOS.items():
        ids = [pid] + fb
        ok = False
        for cand in ids:
            try:
                data = fetch(cand)
                if len(data) < 5000:
                    continue
                csize, wsize = save_variants(slug, data)
                print(f"OK   {slug:24s} <- {cand}  card={csize} wide={wsize}")
                if cand in fb:
                    fb.remove(cand)
                ok = True
                break
            except Exception as e:  # noqa: BLE001
                print(f"miss {slug:24s} id={cand} ({e})", file=sys.stderr)
        if not ok:
            print(f"FAIL {slug}", file=sys.stderr)
            sys.exit(1)


if __name__ == "__main__":
    main()
