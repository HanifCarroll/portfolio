// Run against a fresh build served by `bun run preview`:
// node scripts/check-page-interactions.mjs http://localhost:4321
import assert from "node:assert/strict";
import { chromium } from "playwright-core";

const baseUrl = process.argv[2] ?? "http://localhost:4321";
const browser = await chromium.launch({ channel: "chrome", headless: true });
const errors = [];

try {
  for (const width of [1440, 390]) {
    const context = await browser.newContext({
      viewport: { width, height: 900 },
      reducedMotion: "no-preference",
    });
    const page = await context.newPage();
    page.on("pageerror", (error) => errors.push(error.message));

    for (const [route, section] of [
      ["/", "#projects"],
      ["/projects/", "#client-product-work"],
      ["/notes/", "#building-products"],
    ]) {
      await page.goto(new URL(route, baseUrl).href);
      await page.waitForFunction(() => document.querySelector('a[aria-current="location"]'));
      assert.equal(
        await page.locator('a[aria-current="location"]').getAttribute("href"),
        section,
        `${route} initializes section highlighting at ${width}px`,
      );
      const nextSection = page.locator("main section[id]").nth(1);
      const nextId = await nextSection.getAttribute("id");
      await nextSection.scrollIntoViewIfNeeded();
      await page.waitForFunction(
        (id) =>
          document.querySelector('a[aria-current="location"]')?.getAttribute("href") === `#${id}`,
        nextId,
      );
      await page.goto(new URL("/blog/", baseUrl).href);
      await page.goBack();
      await page.waitForFunction(
        (id) =>
          document.querySelector('a[aria-current="location"]')?.getAttribute("href") === `#${id}`,
        nextId,
      );
    }

    await page.goto(new URL("/blog/choosing-a-professional-identity/", baseUrl).href);
    // Start a first visit even after the preceding full-page navigations.
    await page.evaluate(() => sessionStorage.clear());
    await page.reload();
    await page.waitForFunction(() => document.querySelector("h1 .hc-motion-line"));
    assert.ok(
      await page.locator("h1").getAttribute("aria-label"),
      "headline keeps its accessible name",
    );

    // Changing the preference must revert SplitText and reveal content immediately.
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.waitForFunction(() => !document.querySelector(".hc-motion-line"));
    assert.equal(await page.locator("h1").isVisible(), true);
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await page.waitForFunction(() => document.querySelector("h1 .hc-motion-line"));
    assert.equal(await page.locator(".hc-motion-line .hc-motion-line").count(), 0);

    // A subsequent page load uses the simpler repeat-visit entrance.
    await page.reload();
    assert.equal(await page.locator(".hc-motion-line").count(), 0);
    await page.waitForFunction(
      () => getComputedStyle(document.querySelector("h1")).opacity === "1",
    );

    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(new URL("/", baseUrl).href);
    const next = page.getByRole("button", { name: "Next testimonial", exact: true });
    await next.focus();
    await page.keyboard.press("ArrowRight");
    assert.equal(await page.locator("[data-testimonial-position]").textContent(), "2 / 4");

    if (width === 390) {
      // The retained group animation must reveal the mobile footer when it enters view.
      await page.emulateMedia({ reducedMotion: "no-preference" });
      const footer = page.locator("[data-motion-item]");
      await footer.scrollIntoViewIfNeeded();
      await page.waitForFunction(() => {
        const style = getComputedStyle(document.querySelector("[data-motion-item]"));
        return style.opacity === "1" && style.visibility === "visible";
      });
      await page.goto(new URL("/notes/", baseUrl).href);
      await page.getByRole("button", { name: "Open navigation", exact: true }).click();
      await page.waitForFunction(() =>
        document.activeElement?.classList.contains("hc-mobile-nav__link"),
      );
      await page.keyboard.press("Escape");
      await page.waitForFunction(() =>
        document.querySelector("#mobileNavigation").hasAttribute("inert"),
      );
      assert.equal(
        await page.evaluate(() => document.activeElement?.getAttribute("aria-label")),
        "Open navigation",
      );
    }

    await context.close();
    console.log(`Page interactions passed at ${width}px`);
  }
  assert.deepEqual(errors, [], "no browser runtime errors");
} finally {
  await browser.close();
}
