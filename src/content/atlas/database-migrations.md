---
title: "Database and migrations"
section: code
summary: "Stores your app's data and changes its structure safely as the app grows."
---

## What it is

The database holds your app's permanent data. Migrations are small, versioned files that change its structure, like adding a column or a table, in a set order. They're committed with the code, so every environment, from your laptop to production, ends up with the same schema. An ORM or query builder lets your code read and write data with types that match that schema.

## When you need it

- Your app stores anything that has to survive a restart.
- More than one environment or person works on the same database.
- You've changed a table by hand in production and couldn't remember what you did.

Agents write migrations quickly, and a bad one can destroy data. Review them like any other risky change. Prefer changes that add before they remove, and back up before running anything that drops or rewrites data.

## Popular choices

- **Postgres**: The default relational database. Hosted by Supabase, Neon and many others.
- **SQLite / Cloudflare D1 / Turso**: SQLite in production. Simple, fast and cheap, especially at the edge.
- **Supabase**: Hosted Postgres with auth, storage, realtime and its own migration CLI.
- **Drizzle ORM**: A lightweight TypeScript ORM with SQL-like queries and generated migrations.
- **Prisma**: A popular TypeScript ORM with a schema file, generated client and migrations.
- **Atlas**: Declarative schema migrations for many databases, with linting that flags destructive changes.
- **PGlite**: Postgres compiled to WebAssembly. Runs in-process, which makes fast, real-database tests easy.

## What to tell your agent

> Set up [Postgres] with [Drizzle] and versioned migrations committed to the repo. Generate a migration for every schema change instead of editing the database by hand, and never change a migration that has already run. Make schema changes backward compatible: add first, migrate data, remove later. Run tests against a real database, using [PGlite / a test container], not mocks.
