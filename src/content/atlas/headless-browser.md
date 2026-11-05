---
title: "Headless browser and scraping"
section: code
summary: "Loads and controls real web pages from code, to collect data or complete tasks on sites without an API."
---

## What it is

A headless browser is a real browser engine your code controls: it opens pages, runs their JavaScript, clicks, fills forms and reads the result. It's how you get data from sites that have no API, or automate tasks on them. Hosted browser services run the browsers for you, with session recording, proxies and handling for bot checks. Newer tools let an AI model decide what to click, so a script copes better when a page changes.

## When you need it

- You need data from websites that don't offer an API: listings, prices, events, public records.
- Your product or agent has to complete steps on another site.
- A plain HTTP request returns an empty page because the content is built with JavaScript.

Scrapers break when sites change, so plan for it. Save the raw page alongside what you extracted, check the extracted data against a [schema](/atlas/schema-validation/), and alert when results suddenly drop. Respect each site's terms and rate limits. For agents working in your own signed-in browser, see [this comparison](/blog/browser-automation-tools-comparison-2026/).

## Popular choices

- **Playwright**: The standard library for controlling Chromium, Firefox and WebKit from code.
- **Crawlee**: A crawling framework on top of Playwright and Puppeteer, with queues, retries and proxy rotation.
- **Cheerio**: Fast HTML parsing without a browser, for pages that don't need JavaScript.
- **Browserbase**: Hosted headless browsers with session replays, proxies and stealth features.
- **Cloudflare Browser Rendering**: Headless Chrome available inside Cloudflare Workers.
- **Stagehand / Browser Use**: AI-driven browser automation, where a model works out what to click from a plain-language instruction.

## What to tell your agent

> Build a scraper for [site] using [Playwright / Crawlee]. Try a plain HTTP request with Cheerio first and only use a browser if the content needs JavaScript. Validate each extracted record with a schema, save the raw HTML for debugging, respect a rate limit of [N requests per minute], and run it as a [background job](/atlas/background-jobs/) with retries. Alert me if a run returns far fewer results than usual.
