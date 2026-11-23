# Renders meme/age-check.html to meme/age-check.png at 1024 x 1024 with Playwright's Chromium,
# plus a 480 x 480 preview of what the judge sees (the house shrinks the picture to fit 480 x 480).
#   python tools/render.py [name]        (default: age-check)
import pathlib
import sys

from PIL import Image
from playwright.sync_api import sync_playwright

name = sys.argv[1] if len(sys.argv) > 1 else "age-check"
meme = pathlib.Path(__file__).resolve().parent.parent / "meme"
page_file = meme / f"{name}.html"
png = meme / f"{name}.png"

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1024, "height": 1024}, device_scale_factor=1)
    page.goto(page_file.as_uri())
    page.wait_for_load_state("networkidle")  # Google Fonts
    page.evaluate("document.fonts.ready")
    page.wait_for_timeout(400)  # the headline fit script runs after the fonts load
    page.screenshot(path=str(png))
    browser.close()

preview = meme.parent / "out" / f"{name}_480.png"
preview.parent.mkdir(exist_ok=True)
Image.open(png).convert("RGB").resize((480, 480), Image.LANCZOS).save(preview)
print("wrote", png, "and", preview)
