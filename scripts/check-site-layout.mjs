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
  "/atlas/",
  "/atlas/agent-instructions-file/",
  "/now/",
];
const headerLinks = [
  { href: "/projects/", label: "Projects" },
  { href: "/how-i-work/", label: "How I work" },
  { href: "/blog/", label: "Blog" },
  { href: "/notes/", label: "Notes" },
  { href: "/atlas/", label: "Build Atlas" },
  { href: "https://cal.com/hanifcarroll/forward-deployed-engineering-intro", label: "Book a call" },
];
const browser = await chromium.launch({ channel: "chrome", headless: true });
const errors = [];

try {
  for (const [width, height] of [
    [1440, 900],
    [1024, 768],
    [390, 844],
    [320, 740],
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
        height: element.querySelector(".hc-header").getBoundingClientRect().height,
        visible: getComputedStyle(element).visibility !== "hidden",
      }));
      assert.equal(header.position, "sticky", `${route} header is sticky at ${width}px`);
      assert.equal(header.height, desktop ? 80 : 64, `${route} header height at ${width}px`);
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
      const navigation = page.locator(
        desktop ? 'nav[aria-label="Primary navigation"]' : 'nav[aria-label="Mobile navigation"]',
      );
      assert.deepEqual(
        await navigation.locator("a").evaluateAll((links) =>
          links.map((link) => ({
            href: link.getAttribute("href"),
            label: link.textContent.trim(),
          })),
        ),
        desktop ? headerLinks : [{ href: "/", label: "Home" }, ...headerLinks],
        `${route} preserves all header destinations at ${width}px`,
      );
      const activeHref =
        route === "/"
          ? desktop
            ? null
            : "/"
          : (headerLinks.find(({ href }) => route.startsWith(href))?.href ?? null);
      assert.deepEqual(
        await navigation
          .locator('a[aria-current="page"]')
          .evaluateAll((links) => links.map((link) => link.getAttribute("href"))),
        activeHref ? [activeHref] : [],
        `${route} highlights the current destination at ${width}px`,
      );
      if (desktop) {
        const boxes = await navigation.locator("a").evaluateAll((links) =>
          links.map((link) => {
            const { left, right, top, bottom } = link.getBoundingClientRect();
            return { left, right, top, bottom };
          }),
        );
        const brand = await page.locator('a[aria-label="Hanif Carroll home"]').boundingBox();
        assert.ok(brand.x + brand.width < boxes[0].left, "brand and navigation do not overlap");
        assert.ok(boxes.at(-1).right <= width, "contact button stays inside the viewport");
        assert.equal(boxes.at(-1).top - header.top, 18, "contact button has 18px above it");
        assert.equal(
          header.top + header.height - boxes.at(-1).bottom,
          18,
          "contact button has 18px below it",
        );
        assert.ok(
          boxes[2].left - boxes[1].right > boxes[1].left - boxes[0].right,
          "professional pages are separated from reading and reference links",
        );
        assert.ok(
          boxes[5].left - boxes[4].right > boxes[4].left - boxes[3].right,
          "contact button has its own separation",
        );
      }
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
