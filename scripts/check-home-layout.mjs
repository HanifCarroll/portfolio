// Run against a fresh build served by `bun run preview`.
import assert from "node:assert/strict";
import { chromium } from "playwright-core";

const baseUrl = process.argv[2] ?? "http://localhost:4321";
const browser = await chromium.launch({ channel: "chrome", headless: true });
const errors = [];

try {
  const page = await browser.newPage({ reducedMotion: "reduce" });
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto(baseUrl);
  await page.evaluate(() => document.fonts.ready);
  assert.match(await page.title(), /Hanif Carroll/);

  // Resize the same page to cover both directions across the sticky threshold.
  for (const [width, height] of [
    [1440, 1100],
    [1440, 900],
    [1440, 720],
    [1280, 650],
    [1024, 768],
    [960, 540], // Equivalent CSS viewport to a 1920x1080 window at 200% zoom.
    [390, 844],
    [1440, 1100],
  ]) {
    await page.setViewportSize({ width, height });
    await page.evaluate(
      () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))),
    );
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.waitForFunction(() => {
      const header = document.querySelector(".hc-home-header");
      return (
        header.hasAttribute("data-fits-viewport") ===
        header.getBoundingClientRect().height <= window.innerHeight
      );
    });

    const before = await page.locator(".hc-home-header").evaluate((header) => ({
      height: header.getBoundingClientRect().height,
      top: header.getBoundingClientRect().top,
      position: getComputedStyle(header).position,
      overflow: getComputedStyle(header).overflowY,
      scrollHeight: header.scrollHeight,
      clientHeight: header.clientHeight,
    }));
    const shouldStick = width >= 1024 && before.height <= height;
    assert.equal(before.position, shouldStick ? "sticky" : "static");
    assert.equal(before.overflow, "visible", "rail never creates a scroll container");
    assert.ok(before.scrollHeight <= before.clientHeight + 1, "rail contains all its content");
    assert.ok(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
      "no horizontal overflow",
    );

    await page.evaluate(() => window.scrollTo({ top: 240, behavior: "instant" }));
    const after = await page.locator(".hc-home-header").boundingBox();
    assert.ok(
      Math.abs(after.y - (shouldStick ? 0 : before.top - 240)) < 1,
      "rail stays pinned only when it fits; otherwise it moves with the page",
    );
    await page.evaluate(() => document.activeElement?.blur());
    await page.locator(".hc-home-social a").last().focus();
    await page.waitForFunction(() => {
      const links = document.querySelectorAll(".hc-home-social a");
      const rect = links[links.length - 1].getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    });
    const footerLink = await page.locator(".hc-home-social a").last().boundingBox();
    assert.ok(
      footerLink.y >= 0 && footerLink.y + footerLink.height <= height,
      "footer links remain reachable with the keyboard",
    );
    console.log(`Homepage layout passed at ${width}x${height} (${before.position})`);
  }

  // Text growth must release the rail without a viewport resize.
  await page.locator(".hc-home-header__intro").evaluate((intro) => {
    intro.style.fontSize = "32px";
  });
  await page.waitForFunction(
    () => getComputedStyle(document.querySelector(".hc-home-header")).position === "static",
  );
  await page.locator(".hc-home-header__intro").evaluate((intro) => {
    intro.style.removeProperty("font-size");
  });
  await page.waitForFunction(
    () => getComputedStyle(document.querySelector(".hc-home-header")).position === "sticky",
  );

  await page.close();
  const noScript = await browser.newPage({
    javaScriptEnabled: false,
    viewport: { width: 1280, height: 650 },
  });
  await noScript.goto(baseUrl);
  assert.equal(
    await noScript
      .locator(".hc-home-header")
      .evaluate((header) => getComputedStyle(header).position),
    "static",
    "no-script fallback uses page scrolling",
  );
  await noScript.close();
  assert.deepEqual(errors, [], "no browser runtime errors");
} finally {
  await browser.close();
}
