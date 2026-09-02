---
title: "What Are You Really Installing When You Install a Skill?"
seoTitle: "What Are You Really Installing When You Install a Skill?"
pubDate: "2026-09-02"
description: "Agent skills bundle practical capabilities with assumptions about good work. The doctrine behind a skill should be visible before installation."
ctaVariant: systemsBuild
tags:
  - AI agents
  - developer tools
  - software architecture
  - engineering workflow
---

Imagine you’re installing a code-review skill.

You want your agent to review code well.

But what does “well” mean?

One skill might expect tests for every changed behavior and favor organization-wide conventions.

Another might challenge unnecessary abstractions, treat reversible changes as lightweight, and avoid preparing for hypothetical future scale.

Which one is better?

The first might make perfect sense for an engineer at a Fortune 500 company, where many teams touch the same systems and a small change can have consequences long after the original author has moved on.

The second might be exactly what an indie hacker needs while building a personal project.

Neither approach is necessarily better. The circumstances are different, but so are the judgments being made within those circumstances.

And that creates a problem for the way we talk about agent skills.

## The Hidden Layer

So what are you actually getting?

More than a way to inspect a diff.

When you download someone else’s code-review skill, you may also be inheriting assumptions about what counts as enough testing or when additional complexity is justified.

Yet we tend to bundle those judgments together with the capability itself. We call the whole thing a skill.

I think it helps to give the other part a name: doctrine.

By doctrine, I mean the relatively stable beliefs and priorities that guide decisions across different situations.

For example:

> Complexity has a carrying cost. Prefer the simplest architecture that satisfies current requirements. Don’t introduce infrastructure for hypothetical future scale.

That isn’t a skill. You don’t “perform” it.

It’s a belief about how software should be built, and it shapes decisions far beyond code review.

The distinction is: a skill is the capability to do a kind of work. Doctrine shapes how that capability is exercised.

That distinction is conceptual. The skill files we use today often contain both.

A code-review skill might tell an agent to avoid speculative abstractions because its author believes complexity has a cost that must continually be paid. Another might favor consistent organization-wide patterns because its author believes coordination across teams matters more than local simplicity.

Those instructions aren’t neutral facts about code review. They’re expressions of different ideas about good software.

Doctrine also cuts across skills. If you believe complexity has a carrying cost, that belief won’t only affect code review. It will shape how you approach architecture, testing, and countless smaller engineering decisions.

A skill is therefore harder to understand in isolation than its name suggests.

## Marketing Makes This Distinction Harder to Ignore

This gets clearer outside software.

Take marketing.

Imagine downloading a skill called launch-product.

One version comes from a direct-response tradition and focuses on the offer, conversion, and testing ways to generate more demand.

Another comes from a brand-marketing tradition and cares more about distinctiveness, broad reach, and what buyers remember over time.

A third starts from the belief that marketing works best by earning the attention and trust of a smaller, well-defined audience.

All three could be written by excellent marketers, yet recommend radically different actions for the same product.

The difference isn’t that one of them “knows marketing” and the others don’t. They hold different beliefs about how markets work and what produces good outcomes.

If I install one of those skills, I’m adopting more than procedure.

I’m importing a school of thought.

What looked like a package of marketing techniques also carried a theory of how marketing works.

## Making the Hidden Layer Visible

We don’t need to settle where doctrine belongs before doing something useful with the distinction.

At minimum, the view behind a skill should be visible before someone installs it.

A code-review skill could say that it was written for a small team where most changes are reversible, and that it generally favors present simplicity over preparing for hypothetical future requirements.

That could eventually mean doctrinal dependencies, an agent-level doctrine that influences several skills, or even a different abstraction than skills altogether.

For now, the point is smaller. If a skill depends on a particular view of software, marketing, design, or any other domain, the person installing it should be able to see that view rather than mistake it for neutral technique.

Doctrine also has a boundary worth noting.

Doctrine captures what we can articulate about good work; taste helps us recognize quality that our principles don’t fully capture. Some of that may be transmitted better through examples and critique than through another set of instructions.

## What Comes With a Skill

A code-review skill may contain a theory of what good code is and what software is for. The same is true elsewhere: skills carry ideas about how their domains work and what good work within them looks like.

Those theories are already in the files we call skills.

We’re already installing doctrine. We should at least know which one.
