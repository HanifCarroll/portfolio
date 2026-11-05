---
title: "Secret scanning"
section: guardrails
summary: "Catches API keys, passwords and tokens before they get committed or pushed."
---

## What it is

A secret scanner looks through your code and git history for things that look like credentials: API keys, database passwords, private keys, access tokens. Run as a pre-commit hook, it stops the commit. Run in CI, it fails the build. Run across the whole history, it finds secrets that were committed and "removed" but are still in the repo.

## When you need it

- Always, for any repo with access to real services.
- Agents work in your repo. They read `.env` files and can paste a real key into a test, a fixture or a log.
- A repo is about to become public, or move to a new team.

If a secret leaks, deleting the line isn't enough. It stays in git history and may already be copied. Rotate the key first, then clean up.

## Popular choices

- **Gitleaks**: A fast open-source scanner for git repos and history. Easy to run as a pre-commit hook or in CI.
- **TruffleHog**: Scans git, cloud storage and more, and can check whether a found key still works.
- **GitHub secret scanning and push protection**: Built into GitHub. Blocks pushes that contain known token formats.
- **detect-secrets**: Yelp's scanner, which keeps a baseline file so you only review new findings.

## What to tell your agent

> Add [Gitleaks] to this repo as a pre-commit hook and a CI step that scans the full git history. Report any findings without printing the secret values. Make sure `.env` and similar files are gitignored, add a `.env.example` with placeholder values, and use only fake credentials in tests and fixtures.
