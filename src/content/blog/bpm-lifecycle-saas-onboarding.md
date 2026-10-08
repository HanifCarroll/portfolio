---
title: "What Is Business Process Management? A SaaS Onboarding Example"
description: "Follow a SaaS onboarding example through the six BPM lifecycle phases, from identifying delays to testing a better process."
pubDate: "2026-10-08"
tags: ["business process management", "SaaS", "operations"]
---

Have you ever waited over a week for a software tool to be set up, even though the actual work took less than two hours?

Behind almost every frustrating delay in modern business lies an unoptimized sequence of steps—a <button type="button" class="definition-term" data-definition="A set of related events, activities, and decisions involving people or systems and physical or informational objects, which together produce an outcome of value to at least one customer.">business process</button>. When handoffs between departments are messy or undocumented, invisible waiting periods pile up, leaving customers frustrated and staff burnt out.

<button type="button" class="definition-term" data-definition="The discipline of identifying, discovering, analyzing, redesigning, implementing, and monitoring business processes to improve how an organization delivers valuable outcomes.">Business Process Management (BPM)</button> is the discipline of mapping, analyzing, and transforming these end-to-end chains of events to consistently deliver value to the customer. To see how this works in practice, let's walk through the six core phases of the <button type="button" class="definition-term" data-definition="The repeating sequence of process identification, discovery, analysis, redesign, implementation, and monitoring used to manage and improve business processes.">BPM lifecycle</button> using a hypothetical example of a SaaS company working to fix its customer onboarding.

<pre class="bpm-diagram">flowchart TD
    ID[&quot;1. Process Identification&quot;] --&gt; D[&quot;2. Process Discovery&quot;]
    D --&gt; A[&quot;3. Process Analysis&quot;]
    A &lt;--&gt; R[&quot;4. Process Redesign&quot;]
    R --&gt; I[&quot;5. Process Implementation&quot;]
    I --&gt; M[&quot;6. Process Monitoring&quot;]
    M --&gt; D</pre>


## 1. Process Identification: Setting the Boundaries and Owning the Outcome

Before you can fix a broken process, you have to know precisely where it begins, where it ends, and who is responsible for its success. This structural groundwork fits into a company's overall <button type="button" class="definition-term" data-definition="A map of an organization’s business processes and the relationships between them, used to establish scope and prioritize improvement.">process architecture</button>—the blueprint mapping how all processes inside an organization connect and relate to one another.

In our SaaS example, multiple customers complained about long onboarding wait times. The company initially assumed the onboarding process ended the moment the technical specialist imported the data spreadsheet. However, stopping there created a dangerous blind spot: if tasks were assigned to the wrong people or set up incorrectly, the system was technically "done," but the customer was still stuck waiting for a working setup.

<figure>
  <img src="/blog/bpm-lifecycle-saas-onboarding/onboarding-boundaries.png" width="1536" height="1024" loading="lazy" alt="Customer onboarding starts with a request and spreadsheet and finishes when the customer successfully tests the setup and confirms the project is usable." />
</figure>

To establish true end-to-end control, the company took three foundational steps:

* Defined End-to-End Scope: The team established that onboarding starts when a customer submits a setup request and only ends when the customer confirms the workspace is usable.

* Appointed a <button type="button" class="definition-term" data-definition="The person accountable for the performance and ongoing improvement of an entire process, including handoffs across departments.">Process Owner</button>: Because onboarding crosses two departments—Customer Success and Technical Implementation—the company appointed the Customer Success Lead as the process owner. Without a single process owner, individual departments tend to optimize their own micro-tasks while nobody takes responsibility for the customer's total wait time.

* Balanced Core Metrics: To measure success, the team selected <button type="button" class="definition-term" data-definition="The elapsed time from the start of a process instance to its completion, including time spent performing activities and waiting. This example counts agreed business hours.">cycle time</button> (the total elapsed business hours from request to confirmation) as the primary metric, balanced against the <button type="button" class="definition-term" data-definition="The proportion of process instances with a defined error. Here it is the percentage of setups requiring correction after the first import.">error rate</button> (the percentage of setups requiring post-import corrections).


## 2. Process Discovery: Mapping How Work *Really* Happens

Once boundaries are drawn, a <button type="button" class="definition-term" data-definition="A person who investigates how a process operates, models it, analyzes problems, and helps design and evaluate improvements with the people involved.">process analyst</button> steps in to uncover the current operational reality—a phase called <button type="button" class="definition-term" data-definition="Gathering evidence about how a process currently operates and documenting it in an as-is process model.">process discovery</button>. The goal here is to interview team members, audit email logs, and observe daily workflows to build an accurate <button type="button" class="definition-term" data-definition="A representation of how a process currently operates in practice, including activities, decisions, handoffs, and exceptions.">as-is process model</button>.

During discovery, the analyst uncovered a hidden <button type="button" class="definition-term" data-definition="A step or resource whose limited capacity constrains the throughput of a process and can cause requests to accumulate.">bottleneck</button> between Customer Success and the Implementation Specialist:

<pre class="bpm-diagram">flowchart TD
    A[&quot;Customer submits onboarding request&quot;] --&gt; B[&quot;Customer Success forwards details&quot;]
    B --&gt;|Waits in queue| C[&quot;Specialist checks information&quot;]
    C --&gt; D{&quot;Information sufficient?&quot;}
    D --&gt;|No| E[&quot;Customer Success requests clarification&quot;]
    E --&gt; F[&quot;Customer supplies clarification&quot;]
    F --&gt;|Rejoins specialist queue| C
    D --&gt;|Yes| G[&quot;Specialist configures project&quot;]
    G --&gt; H[&quot;Customer checks setup&quot;]
    H --&gt; I[&quot;Task updated &amp; completion confirmed&quot;]</pre>

By applying <button type="button" class="definition-term" data-definition="Examining how the interactions between a system’s parts influence the behavior and outcomes of the system as a whole.">systems thinking</button>, the analyst traced the delay to the handoff between Customer Success and the Implementation Specialist:

Customer Success handed off spreadsheets without verifying whether task owner names matched real system user accounts. The Implementation Specialist discovered missing details *only after* the request had already sat in the implementation queue. Resolving those missing details kicked the request back to the customer, and once resolved, it went straight back to the end of the specialist's queue for a second wait.


## 3. Process Analysis: Quantifying the Waste

With the as-is model mapped out, the team transitions into <button type="button" class="definition-term" data-definition="Examining a process to identify and prioritize problems, investigate their causes, and assess their effects using qualitative and quantitative evidence.">process analysis</button>. This phase moves beyond qualitative observations to calculate exactly how much time, effort, and money individual issues cost the business.

Suppose an audit of 20 typical onboarding requests revealed a stark contrast between work time and wait time:

<figure class="onboarding-time" aria-label="Illustrative average cycle time: 16 business hours, comprising 2 hours of activity and 14 hours of waiting.">
  <div class="onboarding-time__total">16 business hours per request</div>
  <div class="onboarding-time__bar" aria-hidden="true"><span class="onboarding-time__active"></span><span class="onboarding-time__waiting"></span></div>
  <div class="onboarding-time__legend"><span><i class="onboarding-time__key onboarding-time__active" aria-hidden="true"></i>2 hours of activity</span><span><i class="onboarding-time__key onboarding-time__waiting" aria-hidden="true"></i>14 hours of waiting</span></div>
  <div class="onboarding-time__label">Where the 14 waiting hours go</div>
  <dl class="onboarding-time__breakdown">
    <div><dt>Initial specialist review</dt><dd>2 hours</dd></div>
    <div><dt>Customer Success relays the question</dt><dd>3 hours</dd></div>
    <div><dt>Customer replies</dt><dd>3 hours</dd></div>
    <div><dt>Second wait in the specialist queue</dt><dd>6 hours</dd></div>
  </dl>
  <figcaption>Illustrative averages across 20 requests. Activity time includes staff and customer participation.</figcaption>
</figure>

The data yielded two critical insights:

1. The Core Delay is Idle Time: Out of a 16-hour cycle time, 14 hours (87.5%) were spent sitting idle in queues or email chains.

2. The Clarification Loop Causes Most Waste: The delay in relaying questions (3 hours) plus the secondary queue wait (6 hours) accounted for 9 out of the 14 idle hours.

Trying to speed up the data import itself would yield negligible results because the majority of the delay happened before the import even started. The analysis pointed to a clear priority: eliminate the clarification loop.


## 4. Process Redesign: Designing the "To-Be" Solution

During <button type="button" class="definition-term" data-definition="Developing and evaluating changes to a process to address identified problems and meet improvement objectives.">process redesign</button>, analysts and process participants evaluate creative solutions to address the root causes identified during analysis.

Rather than attempting to fix missing information *after* it reaches the specialist, the team proposed shifting the verification check upstream. Customer Success would use a simple, standardized checklist to match every spreadsheet name to a confirmed user account *before* forwarding the file.

<pre class="bpm-diagram">flowchart TD
    A[&quot;Customer submits request&quot;] --&gt; B[&quot;Customer Success checks details via checklist&quot;]
    B --&gt; C{&quot;Information sufficient?&quot;}
    C --&gt;|No| D[&quot;Clarify details with customer upfront&quot;]
    D --&gt; B
    C --&gt;|Yes| E[&quot;Forward checked setup details&quot;]
    E --&gt;|Waits in queue| F[&quot;Specialist configures project&quot;]
    F --&gt; G[&quot;Customer checks setup&quot;]
    G --&gt; H[&quot;Task updated &amp; completion confirmed&quot;]</pre>

### Evaluating the Tradeoffs: As-Is vs. To-Be

Redesign options almost always involve tradeoffs between time, cost, quality, and effort. To evaluate the proposed change, the team calculated estimated averages:

| Metric per Request | Current Process ("As-Is") | Proposed Process ("To-Be") | Net Impact |
| --- | --- | --- | --- |
| Active Work Time | 2 hours | 3 hours | +1 hour of upfront check effort |
| Idle Queue Wait Time | 14 hours | 5 hours | -9 hours eliminated |
| Total Cycle Time | 16 business hours | 8 business hours | 50% shorter cycle time |

While Customer Success spends an extra hour per request verifying data, catching errors early is expected to eliminate the 9 hours spent relaying questions and waiting in the secondary queue, cutting the estimated overall turnaround time in half.


## 5. Process Implementation: Executing Organizational & Technical Change

A process model on paper doesn't change business outcomes on its own. The <button type="button" class="definition-term" data-definition="Putting a redesigned process into use through changes to responsibilities, practices, and supporting technology.">process implementation</button> phase turns the "to-be" design into active daily practice through two main pillars:

1. <button type="button" class="definition-term" data-definition="Preparing and supporting people to adopt new responsibilities, practices, and ways of working.">Organizational Change Management</button>: Process changes disrupt established routines. The process owner must explain *why* the change is happening, train Customer Success on the new checklist, and support employees through the transition.

2. <button type="button" class="definition-term" data-definition="Using software to perform or coordinate process activities, such as validating information, assigning tasks, or sending notifications.">Process Automation</button> & Infrastructure: Updating or configuring IT systems to support the new workflow. In our SaaS scenario, this meant embedding the checklist directly into the shared onboarding software so reps couldn't hand off a task until all fields were verified.

> Automation Warning: Automating a bad workflow simply speeds up inefficiency. The team corrected the handoff sequence *first*, then configured their software to enforce the new rules.
> 
> 


## 6. Process Monitoring: Tracking Results and Ensuring Conformance

Once the redesigned workflow is live, <button type="button" class="definition-term" data-definition="Collecting and analyzing data from an operating process to assess performance and conformance and identify further improvement needs.">process monitoring</button> begins. The process owner collects real-time operational data to answer two key questions:

* <button type="button" class="definition-term" data-definition="The extent to which the process as carried out follows its intended design or agreed procedure.">Conformance</button>: Are team members actually following the new checklist procedure?

* <button type="button" class="definition-term" data-definition="How well a process meets its objectives, measured through dimensions such as time, cost, quality, and flexibility.">Performance</button>: Is the process hitting its target objectives for speed, cost, and quality?

### Pilot Results Across 20 Requests

Suppose the company tests the new process on another 20 comparable requests. These numbers illustrate the tradeoff.

| Performance Indicator | Pre-Change Baseline | Pilot Results | Illustrative Finding |
| --- | --- | --- | --- |
| Average Cycle Time | 16 business hours | 9 business hours | Down significantly, close to 8-hr target |
| Idle Wait Time | 14 business hours | 6 business hours | Secondary queue delay eliminated |
| Error / Correction Rate | 2 out of 20 | 1 out of 20 | Fewer corrections in this small pilot |
| Staff Effort (Cost) | 90 minutes | 150 minutes | Higher labor cost per setup |

Monitoring revealed a classic operational tradeoff: customer wait times dropped by nearly half, but operational staff costs rose due to the detailed checklist work.

This finding gave the process owner a concrete objective for the next iteration: refine the checklist to make it faster without losing accuracy. Because business environments, technologies, and customer expectations constantly shift, the BPM lifecycle operates as an ongoing cycle of continuous improvement.


## Quick-Reference: The 6 BPM Lifecycle Phases

<p class="source-note">Based on Chapter 1 of <a href="https://doi.org/10.1007/978-3-662-56509-4_1">Fundamentals of Business Process Management</a>.</p>

| Phase | Core Inputs | Primary Outputs | Key Focus |
| --- | --- | --- | --- |
| 1. Identification | Business problem & strategic priorities | Process architecture, owner, & boundaries | Scope and governance |
| 2. Discovery | Stakeholder evidence & operational data | As-Is Process Model | Mapping current reality |
| 3. Analysis | As-Is model & performance logs | Prioritized issue list & cost/time delays | Quantifying root causes |
| 4. Redesign | Issue list & performance targets | <button type="button" class="definition-term" data-definition="A representation of how a process is intended to operate after proposed improvements, including changed activities, responsibilities, and handoffs.">To-Be Process Model</button> | Designing improvements |
| 5. Implementation | To-Be model & operational guidelines | Trained staff, updated tools, live process | Change management & IT setup |
| 6. Monitoring | Execution data & performance logs | Performance & conformance findings | Continuous measurement |