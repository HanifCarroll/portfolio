---
title: "Visual regression testing"
section: tests
summary: "Catches unintended visual changes by comparing screenshots against a saved baseline."
---

## What it is

A visual regression test takes a screenshot of a page or component and compares it with an approved baseline. If pixels change, the test fails and shows you the difference. You approve intended changes and fix the rest.

## When you need it

- A CSS change in one place broke the layout somewhere else, and nobody noticed for a week.
- An agent "fixed" a component and quietly changed its spacing, colors or alignment.
- You have a design system and want every component to stay consistent.

Functional tests pass as long as the button works. They don't notice it moved off screen. Screenshot diffs catch what assertions miss.

## Popular choices

- **Playwright screenshots**: Built into Playwright with `toHaveScreenshot()`. Good for small projects.
- **Chromatic**: From the Storybook team. Every story becomes a baseline, reviewed on each pull request.
- **Argos**: Works across Playwright, Storybook, Vitest Browser Mode, Cypress and Puppeteer, with a review UI for diffs.

## What to tell your agent

> Add visual regression tests with [Playwright screenshots / Chromatic]. Cover [the main pages / every Storybook story] at desktop and mobile widths. Run them in CI. When a diff is intended, update the baseline in the same pull request and say why in the description.
