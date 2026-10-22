// Run against a fresh build served by `bun run preview`:
// node scripts/check-site-layout.mjs http://localhost:4321
import assert from "node:assert/strict";
import { chromium } from "playwright-core";

const baseUrl = process.argv[2] ?? "http://localhost:4321";
const routes = [
  "/",
  "/projects/",
  "/projects/casamo/",
  "/how-i-work/",
  "/blog/",
  "/blog/reliable-ai-workflows/",
  "/notes/",
  "/now/",
];
const browser = await chromium.launch({ channel: "chrome", headless: true });
const errors = [];

try {
  for (const [width, height] of [
    [1440, 900],
    [1024, 768],
    [390, 844],
  ]) {
    const page = await browser.newPage({ viewport: { width, height }, reducedMotion: "reduce" });
    page.on("pageerror", (error) => errors.push(error.message));
    const desktop = width >= 1024;

    for (const route of routes) {
      await page.goto(new URL(route, baseUrl).href);
      await page.evaluate(() => document.fonts.ready);

      const header = await page.locator("#siteHeader").evaluate((element) => ({
        position: getComputedStyle(element).position,
        top: element.getBoundingClientRect().top,
        visible: getComputedStyle(element).visibility !== "hidden",
      }));
      assert.equal(header.position, "sticky", `${route} header is sticky at ${width}px`);
      assert.ok(
        header.visible && Math.abs(header.top) < 1,
        `${route} header starts visible at ${width}px`,
      );
      assert.equal(
        await page.getByRole("navigation", { name: "Primary navigation" }).isVisible(),
        desktop,
        `${route} shows the desktop nav only on wide screens (${width}px)`,
      );
      assert.equal(
        await page.getByRole("button", { name: "Open navigation", exact: true }).isVisible(),
        !desktop,
        `${route} shows the menu button only on narrow screens (${width}px)`,
      );
      assert.ok(
        await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
        `${route} has no horizontal overflow at ${width}px`,
      );
      assert.ok(
        await page.locator("footer.hc-footer").isVisible(),
        `${route} shows the footer at ${width}px`,
      );
    }

    await page.close();
    console.log(`Site layout passed at ${width}x${height}`);
  }
  assert.deepEqual(errors, [], "no browser runtime errors");
} finally {
  await browser.close();
}
