import puppeteer from "puppeteer";
import { fileURLToPath } from "url";
import path from "path";
import { mkdirSync } from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const sourceHtml = path.join(root, "source", "carousel.html");
const outDir = path.join(root, "output");
mkdirSync(outDir, { recursive: true });

const fileUrl = "file://" + sourceHtml;

const browser = await puppeteer.launch({
  headless: "shell",
  args: ["--no-sandbox", "--force-color-profile=srgb", "--hide-scrollbars"],
});

const page = await browser.newPage();
await page.setViewport({ width: 1100, height: 1100, deviceScaleFactor: 1 });
await page.goto(fileUrl, { waitUntil: "networkidle0", timeout: 60000 });
// Wait for fonts
await page.evaluateHandle(async () => {
  try {
    await document.fonts.ready;
  } catch {}
});
await new Promise((r) => setTimeout(r, 600));

const count = await page.evaluate(() => document.querySelectorAll(".slide").length);
console.log("slides found:", count);

for (let i = 1; i <= count; i++) {
  const sel = `.slide.s${i}`;
  const el = await page.$(sel);
  if (!el) {
    console.error("missing", sel);
    continue;
  }
  // clip to the slide's own bounding box for crisp 1080x1080
  const box = await el.boundingBox();
  const shot = await page.screenshot({
    clip: { x: box.x, y: box.y, width: 1080, height: 1080 },
  });
  const file = path.join(outDir, `slide-${i}.png`);
  const { writeFileSync } = await import("fs");
  writeFileSync(file, shot);
  console.log("wrote", file);
}

await browser.close();
console.log("done");
