---
title: "Telemetry (traces, metrics, logs)"
section: production
summary: "Records what your running system is doing, so people and agents can see why something went wrong."
---

## What it is

Telemetry is the data your running app produces about itself. Logs record events. Metrics count things over time, like request rates or error rates. Traces follow one request as it moves through your services and show where the time went. Error tracking groups crashes and attaches the stack trace.

## When you need it

- Something is slow or broken in production and you can't tell where.
- You're debugging by adding `console.log`, redeploying and waiting.
- You want an agent to diagnose problems on its own.

An agent that can read logs and traces can find the cause of a bug in one pass. Without them, you become the go-between, copying output back and forth. [More on giving agents tools to check their own work](/blog/give-ai-agents-tools-to-verify-their-own-work/).

## Popular choices

- **OpenTelemetry SDK + Grafana Cloud**: OpenTelemetry is the vendor-neutral standard for collecting traces, metrics, and logs. Grafana Cloud hosts that data and has a free tier.
- **Sentry**: Error tracking with stack traces and releases, plus performance tracing.
- **Honeycomb**: Strong for exploring traces and high-detail events.
- **Structured log files**: For local work, JSON logs written to a file the agent can `tail` go a long way.

## What to tell your agent

> Add OpenTelemetry tracing and structured logging to this app, exporting to [Grafana Cloud]. Trace incoming requests, database queries and outgoing API calls. In development, also write logs to `logs/app.log` so you can read them while debugging. Never log secrets or personal data.
