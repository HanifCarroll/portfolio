---
title: "What Is Business Process Management? A SaaS Onboarding Example"
description: "Follow a SaaS onboarding example through the six BPM lifecycle phases, from identifying delays to testing a better process."
pubDate: "2026-10-08"
tags: ["business process management", "SaaS", "operations"]
---

Have you ever waited two full business days for a software tool to be set up, even though the actual work took less than two hours?

When handoffs between departments are unverified, invisible waiting periods pile up. <button type="button" class="definition-term" data-definition="The discipline of identifying, discovering, analyzing, redesigning, implementing, and monitoring business processes to improve how an organization delivers valuable outcomes.">Business Process Management (BPM)</button> is the discipline of mapping, analyzing, and transforming these end-to-end chains of events to consistently deliver value to the customer.

To see how BPM works in practice, let’s walk through a hypothetical scenario of a project-management SaaS company as it fixes its customer onboarding process. Here, customer onboarding is the specific <button type="button" class="definition-term" data-definition="A set of related events, activities, and decisions involving people or systems and physical or informational objects, which together produce an outcome of value to at least one customer.">business process</button> being managed, and BPM is the structured framework used to improve it.

<pre class="bpm-diagram">flowchart TD
    ID[&quot;1. Process Identification&quot;] --&gt; D[&quot;2. Process Discovery&quot;]
    D --&gt; A[&quot;3. Process Analysis&quot;]
    A &lt;--&gt; R[&quot;4. Process Redesign&quot;]
    R --&gt; I[&quot;5. Process Implementation&quot;]
    I --&gt; M[&quot;6. Process Monitoring&quot;]
    M --&gt; D</pre>

## 1. Process Identification: Selecting the Workflow and Assigning Ownership

Improving operational <button type="button" class="definition-term" data-definition="How well a process meets its objectives, measured through dimensions such as time, cost, quality, and flexibility.">performance</button> starts with process identification—selecting a target process from the company's broader <button type="button" class="definition-term" data-definition="A map of an organization’s business processes and the relationships between them, used to establish scope and prioritize improvement.">process architecture</button> and setting operational boundaries.

In our hypothetical SaaS company, new clients submit spreadsheets containing 50+ project tasks to be imported into their workspace. When client complaints about setup delays mounted, the company selected customer onboarding for investigation. Onboarding sits directly between Sales (which closes the deal) and Ongoing Support (which assists the customer long-term).

The company initially assumed onboarding ended the moment the technical specialist imported the spreadsheet. Stopping there created a blind spot: if tasks were assigned to ambiguous names, the import was technically complete, but the customer still couldn't use the workspace.

<figure>
  <img src="/blog/bpm-lifecycle-saas-onboarding/onboarding-boundaries.png" width="1536" height="1024" loading="lazy" alt="Customer onboarding starts with a request and spreadsheet and finishes when the customer successfully tests the setup and confirms the project is usable." />
</figure>

To manage the workflow, the team established three foundational rules:

* Defined Scope: Onboarding starts when a client submits a setup request and spreadsheet, and ends only when the client confirms they can successfully update a task in a working project.

* Appointed a <button type="button" class="definition-term" data-definition="The person accountable for the performance and ongoing improvement of an entire process, including handoffs across departments.">Process Owner</button>: Because onboarding crosses two departments—Customer Success and Technical Implementation—the Customer Success Lead was named the process owner. Without a single accountable owner, individual departments optimize their own micro-tasks while nobody takes responsibility for total customer wait time.

* Target Metrics: The team set a primary performance goal: reduce total <button type="button" class="definition-term" data-definition="The elapsed time from the start of a process instance to its completion, including time spent performing activities and waiting. This example counts agreed business hours.">cycle time</button> to an average target of 10 business hours or fewer, while keeping post-import setup errors low.

## 2. Process Discovery: Mapping How Work Really Happens

To uncover operational reality—the <button type="button" class="definition-term" data-definition="Gathering evidence about how a process currently operates and documenting it in an as-is process model.">process discovery</button> phase—the <button type="button" class="definition-term" data-definition="A person who investigates how a process operates, models it, analyzes problems, and helps design and evaluate improvements with the people involved.">process analyst</button> interviewed team members, checked audit logs, and shadowed handoffs between Customer Success and Implementation Specialists to build an accurate <button type="button" class="definition-term" data-definition="A representation of how a process currently operates in practice, including activities, decisions, handoffs, and exceptions.">as-is process model</button>.

Discovery revealed a recurring loop during the departmental handoff:

<pre class="bpm-diagram">flowchart TD
    A[&quot;Customer submits request &amp; spreadsheet&quot;] --&gt; B[&quot;Customer Success forwards details&quot;]
    B --&gt;|Waits in specialist queue| C[&quot;Specialist checks information&quot;]
    C --&gt; D{&quot;Information sufficient?&quot;}
    D --&gt;|No| E[&quot;Customer Success requests clarification&quot;]
    E --&gt; F[&quot;Customer supplies clarification&quot;]
    F --&gt;|Rejoins specialist queue| C
    D --&gt;|Yes| G[&quot;Specialist configures project &amp; imports tasks&quot;]
    G --&gt; H[&quot;Customer checks setup &amp; receives walkthrough&quot;]
    H --&gt; I[&quot;Task updated &amp; completion confirmed&quot;]</pre>

BPM draws on <button type="button" class="definition-term" data-definition="Examining how the interactions between a system’s parts influence the behavior and outcomes of the system as a whole.">systems thinking</button>: examining how departments interact to understand the performance of the whole process. Customer Success forwarded spreadsheets without checking if task assignees (like "Alex") matched confirmed user accounts. The Implementation Specialist discovered these ambiguous details only after the request sat in their queue. Resolving missing details required sending a query back to the customer, and once answered, the request went straight to the back of the specialist’s queue for a second wait.

## 3. Process Analysis: Quantifying the Waste

With the as-is model mapped, the analyst evaluated historical performance data during <button type="button" class="definition-term" data-definition="Examining a process to identify and prioritize problems, investigate their causes, and assess their effects using qualitative and quantitative evidence.">process analysis</button> to determine which delays justified changing the workflow.

An audit of 20 typical onboarding requests revealed a stark imbalance between active work time and idle waiting time:

<figure class="onboarding-time" aria-label="Illustrative average cycle time: 16 business hours, comprising 2 hours of activity and 14 hours of waiting.">
  <div class="onboarding-time__total">16 business hours per request</div>
  <div class="onboarding-time__bar" aria-hidden="true"><span class="onboarding-time__active"></span><span class="onboarding-time__waiting"></span></div>
  <div class="onboarding-time__legend"><span><i class="onboarding-time__key onboarding-time__active" aria-hidden="true"></i>2 hours of activity</span><span><i class="onboarding-time__key onboarding-time__waiting" aria-hidden="true"></i>14 hours of waiting</span></div>
  <div class="onboarding-time__label">Where the 14 waiting hours go</div>
  <dl class="onboarding-time__breakdown">
    <div><dt>Waiting for initial specialist review</dt><dd>2 hours</dd></div>
    <div><dt>Delay before Customer Success relays the question</dt><dd>3 hours</dd></div>
    <div><dt>Waiting for the customer’s reply</dt><dd>3 hours</dd></div>
    <div><dt>Second wait in the specialist queue</dt><dd>6 hours</dd></div>
  </dl>
  <figcaption>Illustrative averages across 20 requests. Activity time includes staff and customer participation.</figcaption>
</figure>

The data yielded two critical insights:

1. The Primary Issue is Idle Time: Out of a 16-hour cycle time, 14 hours (87.5%) were spent sitting idle in queues or email chains.

2. Relays and Re-Queuing Drive Delays: Relaying questions (3 hours) plus the secondary queue wait (6 hours) accounted for 9 out of the 14 waiting hours.

Trying to speed up data import execution itself would yield negligible results because the vast majority of the delay occurred before technical setup even began. The analysis pointed to a clear priority: avoid the secondary specialist queue.

## 4. Process Redesign: Designing the "To-Be" Solution

During <button type="button" class="definition-term" data-definition="Developing and evaluating changes to a process to address identified problems and meet improvement objectives.">process redesign</button>, the team formulated improvements and captured them in a <button type="button" class="definition-term" data-definition="A representation of how a process is intended to operate after proposed improvements, including changed activities, responsibilities, and handoffs.">to-be process model</button>.

Rather than attempting to fix missing details after requests reach the specialist's queue, the team proposed moving verification upstream. Customer Success would perform an expanded check using a standardized checklist before forwarding the file.

Because each spreadsheet contains over 50 tasks with team-wide assignees, reps must match ambiguous names (like "Alex") against account invite emails and workspace roles. Customer Success spends about 75 minutes on this verification. However, after accounting for 15 minutes saved by eliminating repeated specialist reviews, the team estimates a net increase of 60 minutes of employee labor per request.

<pre class="bpm-diagram">flowchart TD
    A[&quot;Customer submits request &amp; spreadsheet&quot;] --&gt; B[&quot;Customer Success verifies details via checklist&quot;]
    B --&gt; C{&quot;Information sufficient?&quot;}
    C --&gt;|No| D[&quot;Customer Success clarifies details with customer&quot;]
    D --&gt; B
    C --&gt;|Yes| E[&quot;Customer Success forwards checked details&quot;]
    E --&gt;|Waits in specialist queue| F[&quot;Specialist configures project &amp; imports tasks&quot;]
    F --&gt; G[&quot;Customer checks setup &amp; receives walkthrough&quot;]
    G --&gt; H[&quot;Task updated &amp; completion confirmed&quot;]</pre>

### Evaluating the Tradeoffs: As-Is vs. To-Be

Redesign options involve tradeoffs between speed, cost, quality, and effort.

| Metric per Request | Current Process ("As-Is") | Proposed Process ("To-Be") | Net Impact |
| --- | --- | --- | --- |
| Active Work Time | 2 hours | 3 hours | Estimated net increase of +1 hour for upfront verification |
| Total Waiting Time | 14 hours | 5 hours | -9 hours of relay & secondary queue wait eliminated |
| Total Cycle Time | 16 business hours | 8 business hours | 50% estimated reduction in overall turnaround time |

While Customer Success spends extra time verifying accounts, avoiding the 9-hour relay and repeat queue wait aims to cut overall estimated cycle time in half.

## 5. Process Implementation: Executing Organizational & Technical Change

A process model on paper doesn’t change business outcomes on its own. The <button type="button" class="definition-term" data-definition="Putting a redesigned process into use through changes to responsibilities, practices, and supporting technology.">process implementation</button> phase turns the "to-be" design into active daily practice through two pillars:

1. <button type="button" class="definition-term" data-definition="Preparing and supporting people to adopt new responsibilities, practices, and ways of working.">Organizational Change Management</button>: Process changes disrupt established routines. The process owner must train Customer Success on the new checklist, explain why early verification matters, and guide staff through the transition.

2. <button type="button" class="definition-term" data-definition="Using software to perform or coordinate process activities, such as validating information, assigning tasks, or sending notifications.">Process Automation</button> & Infrastructure: Updating software tools to support the new workflow. The company added mandatory checklist fields directly into their shared workspace, preventing reps from handing off a setup task until all account matches were confirmed.

> Note on Automation: Automating a flawed sequence simply speeds up inefficiency. The team corrected the handoff order first, then configured software to enforce the new rules.
> 
> 

## 6. Process Monitoring: Tracking Results and Testing Conformance

Once the redesigned workflow goes live, <button type="button" class="definition-term" data-definition="Collecting and analyzing data from an operating process to assess performance and conformance and identify further improvement needs.">process monitoring</button> begins. The process owner collects operational data to evaluate two key areas:

* <button type="button" class="definition-term" data-definition="The extent to which the process as carried out follows its intended design or agreed procedure.">Conformance</button>: Are team members actually following the agreed procedure?

* Performance: Is the process meeting its targets for speed, effort, and quality?

### Pilot Results Across 20 Requests

The company tested the redesigned process on a pilot batch of 20 comparable onboarding requests:

| Performance Metric | Pre-Change Baseline | Pilot Results | Operational Finding |
| --- | --- | --- | --- |
| Average Cycle Time | 16 business hours | 9 business hours | Met the 10-hour average target; 18 of 20 requests finished under 10 hrs. |
| Total Waiting Time | 14 business hours | 6 business hours | Secondary queue wait eliminated. |
| Setups Needing Correction | 2 out of 20 | 1 out of 20 | Fewer setup corrections in this pilot batch. |
| Staff Labor Effort | 90 minutes | 150 minutes | Net paid employee labor increased by 60 minutes. |

Note on Labor Effort vs. Active Work Time: "Staff Labor Effort" (150 minutes) measures paid employee time. Total "Active Work Time" (3 hours) includes an additional 30 minutes of independent customer verification (e.g., verifying workspace login and testing task updates).

### Evaluating the Business Tradeoff

Audit logs confirmed reps completed the software checklist for 20 out of 20 pilot requests, and a spot-check of 5 setups verified that user accounts were correctly matched.

The pilot presented a clear operational tradeoff: average cycle time fell from 16 to 9 hours, but required 75 minutes of additional checking from Customer Success (resulting in a net company labor increase of 60 minutes per setup).

Because Customer Success had sufficient existing capacity to absorb its 75 minutes of added verification work without hiring extra staff, the process owner determined that reducing average cycle time from sixteen to nine hours justified the additional labor. The owner kept the redesigned process live while initiating a follow-up iteration of the <button type="button" class="definition-term" data-definition="The repeating sequence of process identification, discovery, analysis, redesign, implementation, and monitoring used to manage and improve business processes.">BPM lifecycle</button> to streamline the checklist—proving that BPM is an ongoing cycle of continuous improvement.

## Look at Your Own Processes

To apply the BPM lifecycle to a workflow in your own organization, start with three simple questions:

1. Boundaries: Where does the customer's request actually start, and what is the true final signal that they received usable value?

2. Handoffs: Which handoff between teams causes requests to sit idle or travel backward for clarification?

3. Tradeoffs: What change could reduce delay in your workflow, and what additional effort or risk would it introduce?

## BPM Lifecycle Reference

This walkthrough follows the six-phase lifecycle described in [Fundamentals of Business Process Management](https://doi.org/10.1007/978-3-662-56509-4_1).

| Phase | Core Inputs | Primary Outputs | Key Focus |
| --- | --- | --- | --- |
| 1. Identification | Strategic goals & operational issues | Process architecture, boundaries, owner, & metrics | Scope, selection, & governance |
| 2. Discovery | Stakeholder interviews, logs, & observation | As-Is Process Model | Mapping current operational reality |
| 3. Analysis | As-Is model & performance data | Prioritized issue list & quantified delays | Identifying root causes of waste |
| 4. Redesign | Issue list & performance targets | To-Be Process Model | Designing streamlined workflows |
| 5. Implementation | To-Be model & operational rules | Executable process, trained staff, & configured tools | Change management & IT setup |
| 6. Monitoring | Execution data & audit logs | Performance & conformance findings | Continuous evaluation & iteration |
