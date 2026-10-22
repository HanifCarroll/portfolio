---
title: "How I Work"
description: "I've used coding agents for about three years, and over the last year they've written nearly all of my code. That changed what my job looks like. I spend less time typing code and more time deciding what should be built, checking whether it works, and noticing when the agent is solving the wrong problem."
---

Recently I had an agent read back through a year of my session logs, about 3,400 sessions across client work and my own products. The same habits kept showing up from project to project.

## I start by understanding the work

One of the things I type most often is "Don't change anything yet." Before an agent touches the code, I want it to explain the problem back to me. If its explanation is wrong, its fix will be too, and it's much easier to catch the mistake in its explanation than in its code.

I approach clients the same way. They usually come to me asking for a feature, and before building it I want to understand the work it's supposed to help with. While studying business process management, I worked through an example about digitizing a slow approval process. My answer was that it might not help. If the delay came from a reviewer with too much on their plate, moving the forms from paper to software wouldn't make the decisions any faster. The first step would be finding out why the wait was happening.

I've also learned to work out a workflow in a chat before building an interface for it. For my content system, I ran the whole process through an agent for a while before deciding what the app needed to do. I'd built a UI too early and it felt restrictive in a way I couldn't describe. Now I wait until I understand the workflow before designing the interface for it.

## I fix the cause

When the same bug keeps coming back, I stop asking for another fix and ask why it keeps happening. Sometimes the answer is that new code was added on top of old code that should have been removed.

Code is cheap now. With an agent, a proper fix takes about as long to write as a quick patch, and the patch usually costs more in the end because the problem comes back.

That doesn't mean building for scale I don't have. During load testing on [Genrupt](/projects/genrupt/), the agent's plan called for more infrastructure than we needed, and I pulled it back to one database and one storage service. One server can go a long way. Before adding more, I'd rather check whether something in our own code is slowing it down.

## I test in the real product

I have agents open the real app in a browser or simulator, click through the flow, and keep going until it actually succeeds. For a tool that processes video, I wanted it tested on real recordings of people talking, not generated samples.

I also check what the agent says it checked. When a summary sounds thorough, I ask how it got there. Once, a report on my own session history turned out to be based on the first message of each conversation.

## I test AI features against real failures

On [Palabruno](/projects/palabruno/), a Spanish reading app, the founder sent me a document full of examples where the reader grouped words incorrectly or translated them poorly. The fast response would have been to fix those examples. But if we only handled the cases he happened to find, the next text he tried would fail in a new way.

So we turned every example into a labeled test case, grouped the failures by the grammar pattern behind them, and fixed one whole pattern at a time. After each change we reran the full set, plus a set of messy real-world texts, to make sure we were getting closer to what he meant and not just to his exact examples.

That work changed the design. Originally, one large model call was responsible for word boundaries, grammar, explanations, and cleanup, and a growing pile of rules patched its output. Now the text is split into words, a grammar analyzer suggests structure, rules decide where each phrase starts and ends, a smaller model call writes one explanation at a time, and a validator checks the result. Each step can be tested on its own, and the model has one narrow job.

On [Casamo](/projects/casamo/), before switching to a different model for reviewing listing photos, we built a labeled set of real photos to test it against. I also add cost tracking to AI pipelines early, because I need to know what each user costs before I can set sensible limits or prices.

## How I run agents

Most of my larger changes follow the same shape:

- **A written plan.** The agent writes the plan to a file and updates it as it goes, so nothing gets lost when the conversation runs long.
- **Parallel work where it's safe.** Independent pieces go to separate agents that report back when they're done.
- **A reviewer that didn't write the code.** A fresh agent checks the work against the plan and returns specific problems with file and line references. If it finds issues, they get fixed and a new reviewer looks again.
- **A simplify pass before committing.** Separate passes look for code that duplicates something existing, code that's harder to read than it needs to be, and work that doesn't need to happen.

I match models to the job. Mechanical implementation can go to a faster, cheaper model, and the steps that need judgment, like planning and review, go to a stronger one.

When an agent works toward a goal for hours, I set up a recurring reminder for it to step back and ask whether it's still making progress, or whether it's busy building verification tooling that doesn't move the work forward.

My session logs also work as memory. I built tools to search them, so a new session can find what an earlier one decided or tried, and lessons from one project can carry into the next.

## I question what each part is for

A lot of my product feedback starts with asking whether something needs to be there at all. In a tool I built for my own job search, the morning screen had a row of buttons I didn't need. The searches were supposed to run before I woke up, so new leads would already be waiting when I opened the app. Reviewing leads and writing messages to them also needed to be separate steps. When I review leads, I want to move quickly: read one, accept it, and go to the next. Deciding what kind of message to send can wait until I'm writing it.

On Casamo, the product's job is to do the tedious checking a traveler would otherwise do by flipping through hundreds of listing photos. If the system can't confirm or rule something out, the traveler has to go check it themselves. Beta testers help me find these gaps. When one tester didn't understand what our labels meant, we added short definitions next to them. When several people thought Casamo was a real estate site, I went back to the homepage to make its purpose clearer.

More of my software is now used by agents as well as people. When I built an MCP server for Genrupt, I had an agent run three real workflows through it and then tell me how it was to use. When I design a tool, one of the first questions is whether an agent or a person will be driving it, because that changes what it should return and how much judgment it should leave to the user.

## What I'm learning

I'm most interested in how organizations actually work and where software fits into them. I'm working through a reading list that starts with systems thinking, moves through how people, processes, and data fit together, and ends at software architecture. I write [notes](/notes/) as I go.
