---
title: "Expensive Tokens Reward Good Architecture"
seoTitle: "Expensive Tokens Reward Good Architecture"
pubDate: "2026-05-27"
description: "As AI token subsidies fade, engineers with modular systems, fast feedback loops, and swappable model components will have a cost advantage."
ctaVariant: fractional
tags:
  - AI agents
  - software architecture
  - engineering workflow
---

Tokens are getting more expensive. That's good news for engineers who built their systems right.

Recently, I started A/B testing models across the agents in my workflow: different reasoning levels for the planner, smaller models for the mechanical steps, and frontier models for the parts that actually need them.

It started as a cost exercise. Pretty quickly, it turned into something else: a stress test of how well my system was designed in the first place.

Anthropic's pricing has tightened. The Codex 2x promos are ending. The math on what a serious day of agentic coding costs at list price is enough to make your jaw drop. Even Uber's COO has said it is getting harder to justify the money spent on AI "tokenmaxxing."

The subsidies that made the last year feel free are running out.

Everyone is starting to ask, "Can I still afford this?" I think that's the wrong question.

The question I'd ask is whether your workflow treats models as components or as the whole system.

If one frontier model is doing the heavy lifting end to end, you're exposed. You're at the mercy of price increases, deprecations, rate limits, or whatever comes next. If models are interchangeable parts inside a system you actually control, the cost of any individual one matters a lot less because you can route around it.

## Architecture Is Cost Control

A tangled codebase forces you to use the smartest possible model on every task, because every task touches everything.

A well-architected one gives you options.

Clear interfaces, real modularity, strong typing, and tests that run in seconds on every commit let a smaller, cheaper model edit a small module behind a clear boundary. The blast radius is contained. When the model gets it wrong, you know in seconds.

That fast signal takes pressure off the model to get it right the first time.

Which is to say SOLID, good types, and clean interfaces matter again in a way they didn't when you were the only one writing the code. The principles that let you onboard a junior engineer onto a codebase are the same ones that let a smaller open model handle a ticket.

## Planning Only Works When Boundaries Exist

I don't write big specs upfront. I'm a prototyper. But I do invest in good architecture.

A planning agent decomposing a task is itself a kind of lightweight spec, and it only works if the plan it produces lands on real boundaries in your code.

No planner is going to invent boundaries that aren't there.

If your codebase is one big implicit dependency graph, model routing does not buy you much. The planner can split the work on paper, but every worker still needs global context to avoid breaking something unrelated. At that point, you're back to paying for the strongest model everywhere.

If the system has seams, the planner can route work to them. Mechanical edits can go to smaller models. Ambiguous design calls can go to heavier reasoning. Review can be separate from implementation. The system starts to look less like a single expensive conversation and more like an engineering pipeline.

## Measure Instead of Guessing

Some of what I've found from the A/B tests has been genuinely surprising.

Tasks I'd been sending to a frontier model didn't need one. A couple of things I assumed were easy got noticeably better with heavier reasoning. I would not have guessed either ahead of time.

The only way to know is to measure, and the only way to measure is to have a system in place that allows you to swap models at all.

That means treating model choice as a runtime decision, not a belief system. Planner, implementer, reviewer, scout, and mechanical editor do not all need the same model. They need the model that is good enough for that role, with enough feedback around it to catch mistakes quickly.

## Premium Tokens Still Matter

None of this is a finished playbook. Frontier models still matter for the hard reasoning, and I'm not pretending swapping in an open model is free.

You'll still pay for premium tokens. You'll just pay for them on the steps that need them, instead of by default on every keystroke.

Even if frontier models continue to get smarter, the engineers who will do well over the next few years will be the ones whose systems treat model choice as a tuning parameter.

If rising prices are making you nervous, hold off on asking which model to switch to.

Ask whether your code is structured well enough to let you switch at all.
