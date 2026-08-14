import puppeteer from "puppeteer";
import sharp from "sharp";
import { fileURLToPath } from "url";
import path from "path";
import { mkdirSync, writeFileSync } from "fs";

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
  writeFileSync(file, shot);
  console.log("wrote", file);
}

// PDF — one 1080x1080 page per slide (print rule in the source paginates)
const pdfPath = path.join(outDir, "product-usage-scoring-routing-carousel.pdf");
await page.pdf({
  path: pdfPath,
  width: "1080px",
  height: "1080px",
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});
console.log("wrote", pdfPath);

// Contact sheet — 4x2 grid of the slides on white (7 slides + empty cell)
const cell = 508;
const gutter = 16;
const cols = 4;
const rows = 2;
const W = cols * cell + (cols - 1) * gutter;
const H = rows * cell + (rows - 1) * gutter;
const composites = [];
for (let i = 1; i <= count; i++) {
  const col = (i - 1) % cols;
  const row = Math.floor((i - 1) / cols);
  composites.push({
    input: await sharp(path.join(outDir, `slide-${i}.png`))
      .resize(cell, cell)
      .toBuffer(),
    left: col * (cell + gutter),
    top: row * (cell + gutter),
  });
}
const sheetPath = path.join(outDir, "contact-sheet.jpg");
await sharp({ create: { width: W, height: H, channels: 3, background: "#ffffff" } })
  .composite(composites)
  .jpeg({ quality: 88 })
  .toFile(sheetPath);
console.log("wrote", sheetPath);

await browser.close();
console.log("done");
