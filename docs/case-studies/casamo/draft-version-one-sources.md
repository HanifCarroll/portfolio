# Sources and editorial boundaries for draft version one

This draft follows the interview and alternative outline approved in the current conversation. It does not replace the portfolio MDX. The existing qualification incident is not used. Research searched 864 Codex session files whose recorded workspace was the Casamo repository, then examined relevant original messages, repository history, and verification records. This is targeted retrieval, not a claim to have read every session in full; sessions under other workspace paths may not be represented.

## Writer-confirmed material

The current interview is the primary source for the personal laundry problem, expansion into more filters, audience, breadth of responsibility, interface discomfort, comparison-view reasoning, housing-decision feedback, and evolution to five-to-ten results with credits restored below five. Hanif confirmed the reflection of those points and selected whole-product responsibility with elements of personal origin as the thesis.

No precise date or invented launch event is assigned to the personal-tool-to-product transition. No direct tester quotations, customer identities, traction, bookings, or measured usability improvements are claimed. SEO is omitted because it is not necessary to this narrative. A journal search surfaced related private reflections, but none of that additional personal material is used in the draft.

## Feedback and waiting experience

Original Codex source: `/Users/hanifcarroll/.codex/archived_sessions/rollout-2026-07-09T21-36-41-019f4974-875b-7cc2-b810-37e999fc24ce.jsonl`, line 406, user message. Hanif describes replacing one recommendation plus two backups with six-to-ten choices after feedback. In the same message, he explains that users complained about duration, and that he preferred email completion because a progress screen could encourage waiting. The draft attributes this interpretation to him rather than claiming measured behavior change.

## Comparison view

Commit `501c55e8caec9794f8f619393c76901f473177ec`, August 29, 2026, introduces a dedicated comparison route and removes the lower-page comparison. Its `openspec/changes/dedicated-report-comparison/proposal.md` explains the loss of shortlist context and need for a focused comparison view. That is historical implementation evidence; the current interview supplies the account of list/map/comparison having equal prominence. Later interface changes mean the original route should not be described as today's route.

## Background execution and queue timing

Current architecture reference: `/Users/hanifcarroll/projects/casamo/docs/architecture/scan-workflow.md`. Persisted stages and evidence, separate workflow execution, D1 state, R2 artifacts, and queued completion email support the general description.

Design record: `/Users/hanifcarroll/projects/casamo/docs/plans/2026-09-06-native-workflow-queue-plan.md`. Acceptance had initialized the execution deadline before actual admission. The change separates queue wait from execution and uses native scheduling, preserving atomic admission/expiry and credit handling.

Original implementation session: `/Users/hanifcarroll/.codex/archived_sessions/rollout-2026-09-06T06-56-33-01a07625-f3e9-7333-ad44-ba25a6001da6.jsonl`. Line 11 authorizes implementation, testing, staging verification, and rollout; lines 764 and 836 report queued state and automatic admission; lines 1138 and 1148 record completion and verification limits.

Receipt: `/Users/hanifcarroll/projects/casamo/docs/ops/native-workflow-queue-rollout.md`. The second staging scan waited 156.688 seconds, then received its full 1,200,000 ms execution budget. Both reports saved ten properties, each had one debit and no refund, and completion email ledgers showed sent. The draft rounds the wait to two minutes and 37 seconds and does not expose historical time-budget values as current product promises.

The staging canary proved initial queueing and admission, not remote sleep/resume behavior. Deadline handling across later waits and admission/expiry races were tested deterministically. Email receipts establish provider acceptance, not recipient reading. Historical tests and deployment receipts were inspected, not rerun in this writing task.

## Before publication

- Review the prose and chosen engineering example with Hanif.
- Select current screenshots that support comparison and the saved report; none were captured or edited for this draft.
- Check current product behavior and links when integrating the approved draft.
- Preserve existing uncommitted portfolio edits; no live MDX or metadata was changed by this drafting pass.
