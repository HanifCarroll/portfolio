---
title: "Using diagrams to help AI agents find wasted work"
subtitle: "I had an agent draw Casamo's report workflow, then used the drawings to decide where to look for wasted work in the code."
description: "I had an agent draw Casamo's report workflow, then used the drawings to decide where to look for wasted work in the code."
pubDate: "2026-10-11"
tags: ["AI workflows", "Architecture", "Casamo"]
ctaVariant: systemsBuild
hidden: false
---

Casamo investigates several properties at once. When those investigations finish, it ranks the results, prepares a report for each pick, translates titles, adds optional walking routes, and publishes everything as one report. I wanted to know whether the steps after the investigations also ran in parallel, or whether they went one pick at a time.

To see the whole system before reading individual functions, I had an agent draw the report process in BPMN and Excalidraw, along with an architecture diagram. Comparing diagram formats was part of the reason, but the drawings turned out to be a good place to start an efficiency review. The agent's first review had gone straight to the code, so I had it start again from the drawings: look at the design, list the work that might be unnecessary, and check each suspicion against the implementation.

That review led to two changes. Final reports are now prepared in parallel, and the scan stopped re-reading stored evidence that hadn't changed. In an offline benchmark, the second change cut storage reads by 30% and database statements by 26%. Checking the code also ruled out a few changes the diagrams seemed to suggest.

## What the drawings showed

Casamo helps people compare furnished stays using listing details, photos, reviews, and other evidence. Someone submits a trip request in the public app, and a private Cloudflare Worker runs the scan. Inside the Worker, a coordinator manages the scan and starts a child Workflow to investigate each property.

The scan stores two kinds of data. D1, the database, tracks what's happening right now: which tasks are running, which run has claimed each one, what can be retried, and whether the report is published. R2, the object store, holds the evidence and finished reports, which are never changed after they're written. That split lets a later step trace where a conclusion came from and lets an interrupted scan pick up where it left off.

<figure class="workflow-map">
  <a href="/images/blog/using-diagrams-to-review-an-ai-report-workflow/architecture-before.svg" target="_blank" rel="noopener" data-image-link>
    <img src="/images/blog/using-diagrams-to-review-an-ai-report-workflow/architecture-before.svg" alt="Casamo architecture before the changes" loading="lazy" />
  </a>
  <figcaption>The architecture before these changes. Google Places handles title translation and Mapbox handles walking routes.</figcaption>
</figure>

The process drawing shows the parallel property investigations funneling into ranking, report preparation, and publishing. Once the picks are final, which of those steps depend on each other?

<figure class="workflow-map">
  <a href="/images/blog/using-diagrams-to-review-an-ai-report-workflow/report-process-before.svg" target="_blank" rel="noopener" data-image-link>
    <img src="/images/blog/using-diagrams-to-review-an-ai-report-workflow/report-process-before.svg" alt="Original Casamo report-generation process exported from bpmn.io" loading="lazy" />
  </a>
  <figcaption>The original BPMN export. “Prepare evidence-backed property reports” is a collapsed step, so it hides whatever happens inside.</figcaption>
</figure>

The architecture drawing raised a second question. It has a lot of arrows between the coordinator, the property Workflows, and D1/R2, which made data access worth a look. Arrows can't show how many reads happen or whether the data changed between them, though, so the agent had to answer that from the code.

## Final preparation ran one pick at a time

The code showed that report preparation handled one task at a time. A planner picked the next walking-route or report task, the coordinator ran it, and only after it finished did the planner pick another. So even when every property investigation finished at the same time, the reports were prepared one after another.

Some of that waiting is necessary. Casamo publishes one complete report from a fixed set of picks, so publishing has to wait for every pick. But preparing one pick's report never depended on another pick.

Now the coordinator starts independent tasks together, in waves capped by the scan's concurrency and resource limits. Each task saves its result as soon as it finishes, so after an interruption only the unfinished tasks run again. A task that's waiting to retry, or that another run has already claimed, doesn't hold up the rest of the wave.

When one task fails, the others in its wave finish before the failure is reported, and the retry reuses whatever results they saved. Before publishing, the coordinator checks that no other run has taken over the scan and that every pick is complete.

## Translation and walking routes can overlap

Walking routes used to run before report preparation, which includes title translation. Routes are a presentation detail and don't affect whether a property makes the list, and translation only needs the evidence already collected for the property, so neither has to wait for the other.

Now walking routes and report preparation run at the same time. When both finish, each pick's route is matched with its report, and the picks appear in their ranked order. Route timing works as before: routes that finish before the cutoff are used, no new route requests start after it, and a property without a route shows the straight-line distance instead.

I also considered publishing the report right away and adding routes in an update. But a Casamo report is meant to be complete when it's published, so it still waits until every pick is ready.

<figure class="workflow-map">
  <a href="/images/blog/using-diagrams-to-review-an-ai-report-workflow/finalization-before-after.svg" target="_blank" rel="noopener" data-image-link>
    <img src="/images/blog/using-diagrams-to-review-an-ai-report-workflow/finalization-before-after.svg" alt="Final report preparation before and after the changes" loading="lazy" />
  </a>
  <figcaption>Final report preparation before and after, expanding the step the original BPMN collapsed.</figcaption>
</figure>

The change also had to handle scans interrupted under the old routes-first order. A report prepared under the old order is reused as long as the pick, its rank, its assessment, and its evidence haven't changed, so a resumed scan doesn't redo finished work.

## Reading the same evidence once

The arrows to D1/R2 led to the second change. Each time the scan planned the next step for a property, it loaded every property's record to find the one it needed, re-read task records and completed results, and rebuilt evidence that hadn't changed. Even saving a file that already existed could trigger another read and decompression to check it.

Planning now looks up the property's record directly and points to the evidence already saved instead of rebuilding it. Each planning pass or task also gets a small cache that holds at most 128 entries and 2 MiB. When the same evidence is requested twice during that pass, the second request gets the copy that was already read and validated. Each caller gets its own decoded copy, so one caller changing its copy can't affect another. When the pass ends, the cache is thrown away, and the next pass reads from D1/R2 again.

Only evidence that never changes is cached. Anything that can change, like which run has claimed a task or when it can retry, comes from the database on every read, because a claim that held a moment ago might have expired.

## What didn't turn into a fix

Checking the code ruled out some changes the drawings seemed to call for. The coordination loop in the process drawing looks like constant polling, but the coordinator waits for child Workflows to report completion and only checks in periodically to catch lost notifications. There was no polling to remove.

The collapsed property-investigation box made it look like every property gets a full audit before any quick check could rule it out. In the code, Casamo already decides which evidence to collect for each property based on what it has found so far. How it handles properties whose prices can't be compared yet is worth a separate look.

Email delivery was already separate from report publishing. The separate Workers, child Workflows, database, and object store each have a clear job, and nothing in the code suggested merging them or that the database was the bottleneck.

## The offline benchmark

The benchmark tested the evidence-reuse change on one made-up Airbnb property with four photos, its first investigation step already done, and two batches of photos waiting to be analyzed. Each version ran five planning passes after a warm-up, using local Cloudflare D1/R2 and no external services or models.

| Measure                  | Before |  After | Reduction |
| ------------------------ | -----: | -----: | --------: |
| R2 GETs                  |    115 |     80 |    30.43% |
| Compressed R2 bytes read | 56,660 | 33,505 |    40.87% |
| D1 prepared statements   |    310 |    230 |    25.81% |

Both versions ended with the same evidence and task records, so the savings didn't change the results.

## Starting from the drawings

Starting from the drawings changed the questions the review asked. A code-first review reads one function at a time, and neither problem showed up inside a single function. The serial preparation only appears when you follow the work from the investigations to publishing, and the repeated reads only appear when you notice how often the same evidence crosses the same arrow.

The drawings were also easy to over-read. Several changes they seemed to suggest fell apart once the agent checked the code, and some of the waits and fresh reads that looked wasteful were there for a reason: publishing has to wait for every pick, and a task's claim has to be checked on every read. The drawings decided what to look for, and the code decided what to change.
