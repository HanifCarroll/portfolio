---
title: "Accessibility checker"
section: testing
summary: "Automatically finds accessibility problems like missing labels, low contrast and broken keyboard access."
---

## What it is

An accessibility checker scans a rendered page or component for problems that make it hard to use with a screen reader, a keyboard or low vision. It flags things like images without alt text, buttons without labels, poor color contrast and invalid ARIA.

## When you need it

- Always, if real people use your product. It's also a legal requirement for many businesses.
- Your UI is generated quickly by agents, who often skip labels and focus states unless something checks for them.

Automated checks catch a good share of problems, not all. Keyboard navigation and screen reader flow still need a human look.

## Popular choices

- **axe-core**: Deque's engine for automated web accessibility checks. Run it in CI with Playwright, Jest, or similar tools. Most other tools are built on it.
- **Storybook a11y addon**: Runs axe on every story, so each component gets checked in each state.
- **Pa11y**: A command-line tool that checks a list of URLs. Good for a quick CI gate on a site.
- **Lighthouse**: Chrome's built-in audit, which includes an accessibility score.

## What to tell your agent

> Add automated accessibility checks with axe-core. Run it in our Playwright tests on [each main page] and through the Storybook a11y addon on every story. Fail CI on serious or critical violations. Fix existing violations, and make sure every interactive element can be reached and used with the keyboard.
