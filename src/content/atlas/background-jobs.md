---
title: "Background jobs and durable workflows"
section: code
summary: "Runs slow or multi-step work outside the request, with retries, so it finishes even when something fails."
---

## What it is

Some work shouldn't happen while a user waits for a page: sending emails, processing uploads, scraping, calling slow AI models, charging a card and then provisioning an account. A job queue moves that work to the background and retries it when it fails. A durable workflow goes further. It breaks a long process into steps and saves progress after each one, so a crash or deploy resumes where it stopped instead of starting over or running a step twice.

## When you need it

- A request times out because it does too much.
- Work has to happen on a schedule, like nightly imports or reminder emails.
- A process has several steps that call outside services, and a failure halfway leaves things in a broken state.
- An AI agent run takes minutes, not seconds.

Most bugs here come from retries. Assume every step can run more than once, and make it safe to repeat (idempotent): check whether the email was sent or the charge was made before doing it again.

## Popular choices

- **Trigger.dev**: Open-source background jobs and long-running tasks in TypeScript, with retries, schedules and a dashboard.
- **Inngest**: Event-driven durable functions where each step is retried and saved, running on your existing serverless platform.
- **Cloudflare Workflows and Queues**: Durable multi-step workflows and message queues built into Cloudflare Workers.
- **Temporal**: The heavyweight for durable execution, used for complex, business-critical processes.
- **BullMQ**: A Redis-backed job queue for Node.js. Simple and well understood if you already run Redis.
- **Graphile Worker**: A job queue that runs on Postgres, so you don't need another service.

## What to tell your agent

> Move [sending welcome emails, processing uploads] out of the request into background jobs using [Trigger.dev / Inngest / Cloudflare Workflows]. Split each process into named steps, retry failed steps with backoff, and make every step safe to run twice. Add a scheduled job for [the nightly import]. Show me where to see failed runs.
