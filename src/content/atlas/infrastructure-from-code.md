---
title: "Infrastructure from code"
section: application
summary: "Declares databases, queues and services in code, so the same setup runs locally and in the cloud."
---

## What it is

Instead of clicking through a cloud console or writing separate config files, you declare infrastructure in your codebase: databases, queues, storage buckets, cron jobs, secrets. The tool provisions matching resources locally for development and in your cloud account on deploy.

## When you need it

- Your app needs more than a single server and a database.
- Local development doesn't match production, and bugs only appear after deploy.
- Setting up a new environment takes a day of manual work.

Agents can't click through cloud consoles reliably, but they can read and edit code. Putting infrastructure in code makes it something an agent can inspect, change and review like anything else.

## Popular choices

- **Encore**: Declares APIs, databases, Pub/Sub, caches, cron jobs and secrets as typed values in TypeScript or Go. Runs them locally and provisions them in your AWS or GCP account. Has a local MCP server so agents can inspect schemas, call endpoints and read traces.
- **SST**: Defines AWS and Cloudflare infrastructure in TypeScript next to your app, with a live local dev mode.
- **Pulumi**: General infrastructure as code in TypeScript, Python, Go and other languages, for any cloud.
- **Terraform / OpenTofu**: The established declarative standard, written in HCL.

## What to tell your agent

> Define our infrastructure with [Encore / SST] instead of manual setup. Declare the database, [queue, storage bucket, cron job] and secrets in code, make `[dev command]` start all of them locally, and document the deploy command in AGENTS.md. Don't put secret values in the repo.
