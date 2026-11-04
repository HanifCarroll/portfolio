---
title: "Feature flags"
section: product
summary: "Turn features on and off without redeploying, and release to a few users first."
---

## What it is

A feature flag is a switch your code checks at runtime: `if (flags.newCheckout) { ... }`. You flip it from a dashboard or config file instead of shipping new code. Flags can target specific users, a percentage of traffic, or an internal team.

## When you need it

- You want to merge unfinished work without exposing it to users.
- You want to try a change on 5% of users before everyone sees it.
- A risky feature needs an off switch you can hit without a deploy.
- You want to run an A/B test.

Flags pair well with agents that ship many small changes. Each change can go out dark, get checked in production, then be turned on.

## Popular choices

- **PostHog**: Flags and experiments built into the same tool as your analytics.
- **GrowthBook**: Open-source flags with a strong experimentation and statistics engine.
- **Unleash**: Open-source, self-hostable flag server with a long track record.
- **LaunchDarkly**: The hosted enterprise standard.
- **OpenFeature**: A vendor-neutral flag API. Write your code against it and swap providers later.

## What to tell your agent

> Add feature flags using [PostHog / GrowthBook]. Create one helper for checking flags so the provider is only referenced in one place. Put [the new checkout flow] behind a flag called `new-checkout`, defaulting to off. When a flag is fully rolled out, remove it and the old code path.
