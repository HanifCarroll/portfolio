---
title: "Product analytics"
section: product
summary: "Shows what people actually do in your product, so you can tell what's working."
---

## What it is

Product analytics records what people do in your app: which pages they visit, which buttons they click, where they drop out of a signup flow. Some tools also record sessions so you can watch a replay of a real visit.

## When you need it

- You've shipped something and can't tell whether anyone uses the new feature.
- People sign up but don't come back, and you don't know where they get stuck.
- You're arguing about what to build next based on opinion instead of behavior.

When agents make building cheap, deciding what to build becomes the expensive part. Analytics tells you which experiments to keep.

## Popular choices

- **PostHog**: One open-source platform for event analytics, session replay, feature flags, experiments and surveys. Generous free tier, self-hostable.
- **Plausible**: Lightweight, privacy-friendly page analytics without cookies. Good when you only need traffic and referrers.
- **Google Analytics 4**: Free and widely known. Better for marketing traffic than for in-app behavior.
- **Microsoft Clarity**: Free heatmaps and session recordings.

## What to tell your agent

> Add product analytics with [PostHog]. Track page views automatically, then add named events for the key steps in our main flow: [signup started, signup completed, first project created]. Keep event names in one constants file, and don't send personal data like emails in event properties.
