---
title: "Payments and billing"
section: code
summary: "Takes money, manages subscriptions and keeps your app in sync with what each customer has paid for."
---

## What it is

A payments provider handles cards, checkout pages, invoices, taxes and subscriptions. Your app's job is to react to what happens there. The provider sends webhooks, events like "checkout completed" or "subscription cancelled," and your app updates who has access to what. Some providers act as a merchant of record and also take on sales tax and VAT for you.

## When you need it

- You're charging for your product: one-off purchases, subscriptions, credits or usage.
- Customers can upgrade, downgrade, cancel or have a card fail, and your app has to stay correct through all of it.

The hard part is the webhooks, not the checkout page. Events can arrive twice, late or out of order. Verify each webhook's signature, store the event ID so a repeat does nothing, and decide access from the latest state, not from whichever event arrived last. Never trust a price or plan sent from the browser.

## Popular choices

- **Stripe**: The default. Checkout, Billing for subscriptions, usage-based pricing, and the Stripe CLI for testing webhooks locally.
- **Paddle**: A merchant of record that handles global sales tax and VAT for software sales.
- **Lemon Squeezy**: A merchant of record aimed at indie developers and digital products. Now part of Stripe.
- **Polar**: An open-source merchant of record for developers selling software, subscriptions and usage-based plans.

## What to tell your agent

> Add [subscription] billing with [Stripe] using hosted Checkout. Handle these webhooks: [checkout completed, invoice paid, subscription updated, subscription deleted]. Verify every webhook signature, store processed event IDs so duplicates are ignored, and set each customer's access from their current subscription state. Write tests that replay duplicate and out-of-order events. Use the Stripe CLI to forward webhooks in development.
