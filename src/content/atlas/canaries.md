---
title: "Canaries and synthetic checks"
section: production
summary: "Scripted checks that keep testing your real app after it's deployed, so you hear about breakage before users do."
---

## What it is

A synthetic check is a script that uses your deployed app the way a user would: it signs in, runs a search, completes a checkout. It runs on a schedule or after every deploy, against staging or production, and alerts you when it fails. A canary release is a related idea: send a new version to a small share of traffic first and watch for errors before rolling it out to everyone.

## When you need it

- Tests pass in CI, but production still breaks because of config, secrets, a third-party service or data that only exists there.
- Important flows, like sign-in, payment or an AI agent run, fail silently for hours before anyone notices.
- You deploy often, and especially when agents ship many small changes.

Keep synthetic checks to a few critical journeys, and give them their own test accounts and data so they never touch real customers.

## Popular choices

- **Checkly**: Runs Playwright scripts and API checks on a schedule from many regions, defined as code in your repo.
- **Playwright on a schedule**: Your existing end-to-end tests run against staging or production from CI on a cron.
- **Datadog Synthetic Monitoring / Grafana Synthetic Monitoring**: Synthetic checks next to the rest of your [telemetry](/atlas/telemetry/).
- **Uptime Kuma**: Self-hosted uptime monitoring for endpoints and simple checks.
- **Gradual rollouts**: Use [feature flags](/atlas/feature-flags/) or your platform's percentage deploys to release to a small group first.

## What to tell your agent

> Add synthetic checks for [sign-in, checkout and the main dashboard] using [Checkly / Playwright on a schedule]. Run them after every deploy to staging and every [15 minutes] in production, using dedicated test accounts. Alert [channel] when a check fails twice in a row, and include a screenshot and trace in the alert.
