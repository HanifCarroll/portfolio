---
title: "Business Process Mapping Examples: One Service Workflow Before and After"
seoTitle: "Business Process Mapping Example: A Service Workflow Before and After"
description: "See one complete business process mapping example for a service company, from scattered requests and spreadsheet handoffs to one shared job record."
pubDate: "2026-07-27"
tags:
  - business process mapping
  - workflow mapping
  - business systems
  - service operations
ctaVariant: audit
---

A useful business process map shows how one piece of work moves from a clear trigger to a clear outcome. It names the people, tools, steps, decisions, handoffs, waits, and records involved. You map the current workflow as it actually runs, then design a better version around the smallest change that removes the most important source of friction.

This article works through one example from the first customer request to the weekly operations report. It is more detailed than a generic flowchart because the difficult parts of a growing service business usually sit between the boxes: a request copied from email into a spreadsheet, an approval waiting in chat, or a field update that never reaches the report.

To make the example concrete, I use a fictional service company called Meridian Facility Services—the same scenario used in the [One Tuesday workflow diagnostic](/case-studies/one-tuesday/).

<figure class="workflow-map workflow-editorial">
  <picture>
    <source media="(max-width: 768px)" srcset="/blog/business-process-mapping-examples/current-state-editorial-768.webp" width="768" height="1536" />
    <img src="/blog/business-process-mapping-examples/current-state-editorial.webp" width="1536" height="768" loading="eager" decoding="async" alt="Generated explanatory illustration of a modeled field-service workflow. Requests arrive by email, phone, or chat, then separate yellow job cards are copied through a spreadsheet, an approval wait, a dispatch board, a technician's field update, and a weekly report. Broken links mark each manual handoff." />
  </picture>
  <figcaption><strong>What this image shows:</strong> one request becomes several disconnected copies. The approval pauses in chat, each handoff breaks the information chain, and reporting requires one more manual transfer.</figcaption>
</figure>

## What should a useful business process map include?

A useful map includes enough detail to answer nine questions:

1. **Trigger:** What starts the workflow?
2. **Outcome:** What has to be true before the workflow is finished?
3. **People:** Who does the work, approves it, or needs the result?
4. **Tools:** Which inboxes, forms, chats, spreadsheets, and systems hold the work?
5. **Steps:** What happens, in order?
6. **Decisions:** Where can the work take a different path?
7. **Handoffs:** Where does responsibility or information move to someone else?
8. **Waits and failures:** Where can work pause, disappear, duplicate, or arrive incomplete?
9. **Record:** Where should someone look for the current owner, status, and next action?

That list is close to the practical definition used by the [American Society for Quality](https://asq.org/quality-resources/process-analysis-tools), which says a flowchart can include inputs and outputs, decisions, people, time, and measurements. IBM likewise recommends showing task owners and expected timelines, then validating the map with the people who do the work before proposing changes in its [process-mapping guide](https://www.ibm.com/think/topics/process-mapping).

The map doesn't need full Business Process Model and Notation to be useful. Rectangles for work, diamonds for decisions, arrows for flow, and lanes for responsibility are enough for most operational conversations. The purpose is to make the work discussable, not to impress people with notation.

## When should you map a workflow?

Map a workflow when the same operational problem keeps returning but the cause is still unclear. Common signals include:

- Customers ask for updates because nobody can see a reliable status.
- A spreadsheet works as the list, but chat and memory carry the actual decisions.
- Staff retype the same information between forms, inboxes, and reports.
- Approvals depend on reminders from one experienced person.
- Weekly reporting takes a separate round of chasing and reconciliation.
- The team is considering automation or custom software before agreeing on how the process should work.

Instead of starting with the whole company, pick one recurring workflow with a visible trigger and outcome: request to scheduled job, lead to signed proposal, purchase request to approved order, or completed work to invoice.

[Atlassian's current process-mapping guidance](https://www.atlassian.com/work-management/project-management/process-mapping) recommends interviewing the people who actually perform the work so the map reflects the real process rather than the official version. That distinction is important. A map of the written procedure will not expose the private spreadsheet, chat message, or memory-based exception that keeps the operation moving.

## Business process mapping example: the current service workflow

The modeled company handles about 45 field jobs in a typical week. Requests can begin by email, phone, WhatsApp, or a website form. A coordinator turns each request into a spreadsheet row. The owner approves larger quotes, a dispatcher assigns the work, and a field crew reports completion.

The workflow starts when a customer makes a request. It ends when the job is complete, the evidence is recorded, and the job appears correctly in the weekly report.

<figure class="workflow-map">
  <picture>
    <source media="(max-width: 640px)" srcset="/blog/business-process-mapping-examples/current-state-workflow-mobile.svg" />
    <img src="/blog/business-process-mapping-examples/current-state-workflow.svg" width="1200" height="900" loading="lazy" decoding="async" alt="Modeled current-state service workflow. Requests arrive through email, phone, WhatsApp, or a website form. A coordinator retypes them into a spreadsheet and chases missing details. Large quotes wait for owner approval in chat. A dispatcher assigns work using the spreadsheet and memory. The field crew sends completion evidence in chat, and the coordinator manually updates the spreadsheet and weekly report." />
  </picture>
  <figcaption><strong>Current-state workflow.</strong> The map shows where requests wait, split across tools, and get copied into reporting.</figcaption>
</figure>

### The steps behind the map

1. **A request arrives in one of four places.** The source channel contains the original customer message, but each channel asks for different information.
2. **The coordinator creates a spreadsheet row.** They interpret the request, copy the useful details, and decide how to describe the job.
3. **Missing information goes back through the source channel.** The spreadsheet row exists, but the work waits while the coordinator and customer exchange messages.
4. **Large quotes move to the owner in chat.** The decision and its context now sit outside the spreadsheet. There is no explicit timer or fallback owner in the modeled workflow.
5. **The dispatcher assigns the job.** They combine the spreadsheet with their memory of zones, skills, current workload, and exceptions.
6. **The crew reports completion in chat.** Photos and notes arrive as messages rather than updates to the job record.
7. **The coordinator updates the spreadsheet and prepares the weekly report.** Reporting becomes another manual copy of the workflow instead of a view of its current state.

The spreadsheet isn't necessarily the problem—it can be a reasonable first shared record. The problem is that the spreadsheet doesn't contain all the decisions needed to trust its status. The team has to compare it with inboxes, chat, and memory.

## How to find the bottleneck in a process map

Look for places where one of these conditions is true:

- **The work waits without an owner or deadline.** In this example, a quote can sit in chat until the coordinator asks again.
- **Information is copied between tools.** The request, approval, completion evidence, and report each require a manual status transfer.
- **One person repairs the process from memory.** The dispatcher knows which technician can handle the job, but the rule is not available to anyone else.
- **The same question is answered repeatedly.** “Who owns this?” and “What is the current status?” both require a message instead of a record lookup.
- **The report is built separately from the work.** If the team has to recreate the week every Friday, the operational record is incomplete.

Then ask which problem has the largest consequence for the business. A five-minute copy step may be annoying but harmless. An approval with no owner can hold up revenue, customer communication, and every downstream step. The map helps separate visible effort from uncertainty.

For this modeled workflow, the central problem is not intake volume. It is the absence of one trusted job record with an owner, status, and next action. That gap causes the approval chase, memory-based dispatch, repeated status questions, and manual reporting.

## The improved workflow

The main change is one record per job. Every person reads and updates that record rather than maintaining a separate version of the truth.

<figure class="workflow-map">
  <picture>
    <source media="(max-width: 640px)" srcset="/blog/business-process-mapping-examples/workflow-changes-mobile.svg" />
    <img src="/blog/business-process-mapping-examples/workflow-changes.svg" width="1200" height="900" loading="lazy" decoding="async" alt="Four current-to-improved workflow changes. Different request channels adopt one intake format. Status split across a spreadsheet, chat, and memory moves into one shared job record. Approval waiting in chat gains a named owner and timer. A manually rebuilt weekly report becomes a view of the job record's status." />
  </picture>
  <figcaption><strong>What changes.</strong> The improved workflow reduces four sources of uncertainty without requiring every step to be automated.</figcaption>
</figure>

The redesigned flow works like this:

1. **Keep the existing request channels at first.** A form or coordinator captures the same required fields regardless of where the request began.
2. **Validate before the work moves forward.** Missing location, service type, timing, or contact details are visible at intake instead of becoming a half-created job.
3. **Create one job record.** The record carries a stable ID, current owner, status, next action, due time, approval state, and completion evidence.
4. **Route only exceptions for approval.** Standard work continues. Quotes above the agreed threshold go to a named approver with a visible time and fallback.
5. **Make assignment rules explicit.** Zone and skill rules can suggest an owner. The dispatcher keeps control of workload and unusual cases.
6. **Record completion in the shared record.** The crew changes the status and attaches the required evidence to the same record.
7. **Read the report from operational status.** Completed, waiting, late, and unassigned jobs are already visible. The report no longer needs a second round of status collection.

You could support this workflow with a work-management tool, a structured spreadsheet with forms and rules, a lightweight database, or custom software. The map doesn't decide the tool, but rather the behavior the tool needs to support.

## Choose the smallest useful change

For this example, the smallest useful change is one shared job record with four required fields:

- current owner
- current status
- next action
- when that action is due

Agree on the allowed statuses and who can change them. Run the workflow that way for a short trial. The team will quickly expose missing states, unclear ownership, and exceptions that the diagram didn't capture.

Then, consider adding:

- intake validation
- approval reminders and escalation
- assignment suggestions
- customer status messages
- automatic reporting

This order matters because automation makes a rule run faster, but it can't fix a rule the team hasn't agreed on. In its [process-mapping methodology](https://www.ibm.com/think/topics/process-mapping), IBM recommends testing process changes with a smaller group before scaling them. The same approach keeps a growing business from buying or building around an untested assumption.

## A process-mapping template you can use

Use the free [process-mapping worksheet](/resources/process-mapping-worksheet/) on screen or print a blank copy. You can also map a workflow on paper, a whiteboard, or a shared document. Start with these questions before drawing boxes:

<figure class="workflow-map">
  <picture>
    <source media="(max-width: 640px)" srcset="/blog/business-process-mapping-examples/meridian-worksheet-preview-mobile.webp" width="720" height="1280" />
    <img src="/blog/business-process-mapping-examples/meridian-worksheet-preview.webp" width="1400" height="900" loading="lazy" decoding="async" alt="Completed process-mapping worksheet for the modeled Meridian Facility Services workflow. It defines the request-to-report boundary, lists the people and tools, identifies the lack of one trusted status as the main bottleneck, and proposes one shared job record as the first useful change." />
  </picture>
  <figcaption><strong>Completed worksheet example.</strong> The Meridian scenario turns the workflow boundary, people, tools, bottleneck, and first useful change into one page.</figcaption>
</figure>

1. **Name the workflow:** Use a trigger-to-outcome name, such as “customer request to completed field job.”
2. **Set the boundary:** Write the exact first event and the exact condition that means the process is finished.
3. **List the roles:** Include everyone who creates, changes, approves, receives, or reports on the work.
4. **List the tools and records:** Include unofficial spreadsheets, private notes, inboxes, and chat channels.
5. **Walk one recent example:** Ask what happened next, who acted, what they needed, and where they recorded it.
6. **Add decisions and exception paths:** Mark what happens when information is missing, an approval is late, or the usual owner is unavailable.
7. **Mark each handoff and wait:** Write the owner, expected time, and evidence that the handoff is complete.
8. **Find the trusted status:** Ask where a new team member would look to know the current owner and next action. If there is no reliable answer, mark the gap.
9. **Choose one change:** State the smallest change, the assumption it tests, and what you will inspect after the trial.
10. **Validate the map:** Review it with the people who actually perform each part of the workflow.

Keep the current-state and future-state maps separate. If you mix them, the team will quietly replace “what happens” with “what should happen,” and the reasons for changing the process disappear.

## How this connects to real consulting work

In the [Desarmadero Operations Prototype](/case-studies/desarmadero-operations-prototype/), one discovery call described an auto-dismantling yard operating across paper budget sheets, WhatsApp, Excel, and memory. I turned that material into a product requirements document, functional specification, and role-based clickable prototype covering sales, payment release, dismantle assignment, and yard search.

The prototype gave the client something concrete to review before deciding the scope of a full build.

If you want to feel the difference between the two workflows, [run the One Tuesday diagnostic](/case-studies/one-tuesday/). It puts the fictional company through the same demand under its old and redesigned workflows.

If your own operation has a recurring workflow spread across spreadsheets, inboxes, chat, and memory, the [Business Systems Audit](/services/business-systems-audit/) is designed to map that workflow, find the bottleneck, and recommend the first useful change. The recommendation may be a process change, better use of existing software, an automation, an integration, or a focused build.
