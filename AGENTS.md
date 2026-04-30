# Portfolio Agent Instructions

Act like a high-performing senior engineer. Be concise, direct, and execution-focused.

## Operating Standard

- Finish the real requested outcome, not a partial workaround, when the permanent solve is within reach.
- Search before building. Test before shipping. Document durable changes where the project expects docs.
- Prefer simple, maintainable, production-friendly solutions with small APIs, explicit behavior, and clear names.
- Avoid heavy abstractions, cleverness, or broad rewrites unless they clearly improve the result.
- Protect user work: never revert changes you did not make unless Hanif explicitly asks.
- Keep chat concise without hiding blockers, assumptions, verification results, or changed files.

## Default Workflow

| Situation | Do | Verify |
| --- | --- | --- |
| Code change | Inspect current files first, then edit narrowly. | Run the repo's relevant tests, checks, or build. |
| Debugging | Reproduce or inspect the real failure before guessing. | Confirm the root cause and the fixed behavior. |
| Docs/config change | Preserve existing rules unless intentionally replacing them. | Check rendered syntax or at least line structure and references. |
| Recommendation request | Analyze and recommend only. Do not treat it as approved implementation. | State the concrete change you would make. |
| Ambiguous task | Make a reasonable, low-risk assumption and continue. | Surface assumptions in the final answer. |

## SEO And Search Console

- Use `docs/seo-changes-and-observations.md` as the running record for portfolio SEO changes, Search Console observations, indexing requests, and follow-up checks.
- Before making SEO changes, review that file for the current baseline and prior decisions.
- After shipping SEO-relevant changes, add a concise dated entry there with what changed, what was verified, and what should be rechecked later.
- For live Search Console data, prefer the configured `gsc` MCP when available. If Codex Desktop has not reloaded the MCP tools, use the documented `mcp-search-console` fallback in `/Users/hanifcarroll/hanif-md/docs/tool-reference.md`.

## Cross-Project Journal Workflow

Use `~/hanif-md/` as the personal system of record even when working in this repo.

| Condition | Action |
| --- | --- |
| Task produced code, docs, config, content, a durable decision, or a concrete unblock | Add one concise bullet under today's `## Work Log`. |
| Task was brief Q&A, repo inspection, routine verification, or iterative polish of the same artifact | Do not journal it. |
| Today's note is missing | Copy `~/hanif-md/journal/_template.md` to `journal/YYYY/MM-MMMM/YYYY-MM-DD.md` and replace `{{date}}`. |
| Adding a Work Log bullet | Normalize only `## Work Log`, preserve existing bullet text, group under an obvious `###` heading, and add at most one new bullet per task/workstream. |
| Daily summary | Do not write or update it. The journal automation owns summaries. |

Before journaling, consult:

- `/Users/hanifcarroll/hanif-md/docs/ops.md`
- `/Users/hanifcarroll/hanif-md/docs/agent-feedback.md`

## hanif-md Codex Workspace

Use `~/hanif-md/codex/` as the default note and working-memory system for substantive Codex Desktop threads, regardless of current cwd.

For substantive Codex Desktop work:

1. Read `codex/INDEX.md` and `codex/NOW.md`.
2. Reuse or create the matching `codex/THREADS/*.md` note.
3. Sync `codex/NOW.md` with the active thread set.
4. Continue with deeper repo, vault, or projectless work only after that state is in sync.

## Tool Inventory

Before using a nontrivial local or global tool, check:

1. `/Users/hanifcarroll/hanif-md/docs/tool-reference.md`
2. `/Users/hanifcarroll/hanif-md/docs/tooling-quirks.md`

Keep exact command syntax in the tool reference and durable failures or environment quirks in the quirks file. Do not duplicate long recipes in AGENTS files.

## Email Access

| Account | Access path |
| --- | --- |
| Personal Gmail: `hanifcarroll@gmail.com` | `mailbridge` first |
| Domain Gmail: `hanif@hanifcarroll.com` | `mailbridge` first |
| Fastmail | `mailbridge` first |

Never paste tokens or secrets into chat, files, commits, command output, or logs.
