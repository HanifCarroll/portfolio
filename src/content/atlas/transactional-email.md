---
title: "Transactional email"
section: production
summary: "Sends the emails your app triggers, like sign-in links, receipts and alerts, so they actually arrive."
---

## What it is

Transactional emails are the ones your app sends to one person because of something they did: verify your email, reset your password, here's your receipt, your report is ready. An email provider sends them, handles bounces and complaints, and gives you the DNS records (SPF, DKIM, DMARC) that keep them out of spam. Email template tools let you build these emails with components instead of hand-written HTML tables.

## When you need it

- Your app has sign-up, sign-in links, password resets, receipts or notifications.
- Your emails land in spam, or you can't tell whether they were delivered.

Keep transactional email separate from marketing email, on its own sending domain or subdomain, so a marketing campaign can't damage delivery of sign-in links.

## Popular choices

- **Resend**: A developer-focused email API with good TypeScript support. Made by the team behind React Email.
- **Postmark**: Known for fast, reliable delivery of transactional email specifically.
- **Amazon SES**: Very cheap at volume, with more setup.
- **Cloudflare Email Sending**: Send email from Cloudflare Workers.
- **React Email**: Build email templates as React components that render well in common email clients.

## What to tell your agent

> Set up transactional email with [Resend / Postmark] on a [mail.example.com] subdomain, and give me the SPF, DKIM and DMARC records to add. Build templates with [React Email] for [sign-in link, receipt, password reset]. Send email from a [background job](/atlas/background-jobs/) with retries, and in development, log emails instead of sending them.
