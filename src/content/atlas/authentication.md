---
title: "Authentication"
section: application
summary: "Signs users in, keeps them signed in, and controls what they can access."
---

## What it is

Authentication confirms who a user is: passwords, magic links, social login, passkeys, two-factor codes. It usually comes bundled with sessions, password resets, email verification, and organization or role management.

## When you need it

- Your app has user accounts.
- You need teams, roles or invitations.
- Your product exposes an API or MCP server that other apps or agents sign in to.

Don't let an agent write auth from scratch. It's easy to get subtly wrong and costly when it is. Pick a library and have the agent wire it in.

## Popular choices

- **Better Auth**: Framework-agnostic TypeScript auth library with 50+ plugins, including passkeys, 2FA, organizations, OAuth provider, and MCP auth. Runs in your app with your own database.
- **Clerk**: Hosted auth with prebuilt sign-in UI and user management. Fastest to set up, paid as you grow.
- **Auth.js**: The long-standing open-source option, formerly NextAuth.
- **Supabase Auth**: Comes built into Supabase if that's your backend.

## What to tell your agent

> Add authentication with [Better Auth] using our existing database. Support [email and password, Google login, and passkeys]. Protect every route under [/app] on the server, not just in the UI. Write tests that check an unauthenticated request and a request from the wrong user are both rejected.
