---
title: "Reliable AI Workflows Are Learned Through Failure"
description: "A reliable AI workflow becomes clearer when a failed run reveals which decision, approval, or stop condition came too late."
subject: "You can't write the perfect AI workflow upfront"
preview: "I let an AI workflow keep producing videos before I had decided whether the first one was worth repeating."
pubDate: 2026-07-16T00:00:00.000000-03:00
issueNumber: 1
coverImage: "/images/newsletter/reliable-ai-workflows/production-before-approval.webp"
coverAlt: "One source recording expands into five finished video clips and many downstream packages before approval."
tags:
  - "AI workflows"
  - "Judgment"
  - "Evaluation"
sourcePackageDigest: "sha256:664e27570d82f3ed6656dde5ca4792b62841552dd9ce58342d26c1680bd40b87"
---

I let an AI video workflow keep producing work before I had decided whether the first result was worth repeating.

It started with a twenty-one-minute recording I wanted to turn into short clips. The tools could identify possible moments, add captions, and prepare files for different platforms, so the process kept moving.

By the time I stopped it, it had produced five captioned videos and twenty sets of files for different platforms. There was plenty of finished-looking work to review and no agreed example to judge it against.

Nothing had been published. The files were preserved and held. But the workflow had already spent time multiplying an idea that I hadn't accepted yet.

The tools had done what the procedure allowed them to do. The failure was in the order of decisions.

<figure class="awt-issue-figure">
  <img src="/images/newsletter/reliable-ai-workflows/production-before-approval.webp" alt="One source recording expands into five finished video clips and many downstream packages before any representative output is approved." />
  <figcaption>The workflow multiplied finished-looking outputs before one example had been approved.</figcaption>
</figure>

### Move approval before production

The workflow should have stopped after one complete video. I needed to decide whether the story worked, whether the pacing felt right, whether the captions were readable, and whether the overall treatment was worth repeating. Only then did it make sense to produce the remaining clips or prepare anything for multiple platforms.

The replacement procedure is much simpler.

AI reviews the complete recording and recommends a small set of self-contained stories. I choose the stories and name one pilot. The system produces that pilot and stops. I review the exact finished video. If I approve it, its general editing and caption style becomes the starting point for the remaining clips. If I don't, we revise one video instead of revising a batch.

I couldn't have written that procedure perfectly at the beginning because I hadn't yet felt the cost of putting the approval too late.

### Context and procedure solve different problems

I've been thinking about two parts of agent performance that I can directly improve: context and procedure. They aren't the only reasons a system can fail, but they're the parts I keep changing as I learn a task.

Context is what the agent can see: the source material, goals, previous decisions, examples, constraints, and current state that should inform what it does.

Procedure is the order in which the work happens: what the agent can do, what it must return, what gets checked, where the process stops, and which decisions still belong to a person.

In the video workflow, more context wouldn't have fixed the main problem. The system could have understood the recording perfectly and still produced too much before I had made the decision that mattered.

The first procedure treated a review as something that happened after production. The failed run showed that approval had to control production. That is a different kind of correction from adding more instructions to a prompt.

The difficulty is that you often can't see the right order before you've done the task enough times.

### Find the first material failure

At the beginning, you give the AI the best procedure you have, run it, and inspect what happens. Some parts work. Other parts fail in ways you didn't anticipate. A failed run can show that the model lacked context, but it can also show that the task was too large, a decision came too late, or a stop condition didn't exist.

I'm experimenting with a simple way to review these runs. Before testing, define what a pass looks like for each stage that matters. Then, if a run fails in several ways, record the earliest stage that made the dependent work unreliable or premature.

In this case, the first material failure happened when the process moved beyond one representative video without an approval. The later files weren't separate mysteries to diagnose. They were consequences of the same missing gate.

<figure class="awt-issue-figure">
  <img src="/images/newsletter/reliable-ai-workflows/pilot-approval-gate.webp" alt="One selected pilot reaches an approval checkpoint while four future clips remain empty and held behind it." />
  <figcaption>One approved pilot becomes the gate for repeated production.</figcaption>
</figure>

Then change one part of the procedure. Add the missing source. Split one step into two. Make the model return something you can verify. Move a decision back to a person. Add a stop condition.

### Add one gate, then test again

This is still a working theory. I don't think every failure should become another rule, and I don't think every bad result means the procedure needs another gate. A process can become too rigid when it tries to anticipate every exception.

What I want to know is whether the failure exposed something stable about the task. For this workflow, it did: one approved example should come before repeated production.

When an AI-assisted process disappoints you, do you change the prompt, or do you change the procedure around it?
