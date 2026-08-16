# Project Video Template System

This is the canonical production contract for portfolio videos. Every current project is driven by a structured `project-videos/<slug>/video.json` manifest. The bespoke per-project compositions were removed after migration; regenerate only from the manifest pipeline.

Current contract versions:

- Manifest version: `2`
- Template version: `2.0.0`
- Editorial profile: `silent-proof-v1`
- Editorial standard: `silent-designed-video-v1`
- Editorial tokenizer: `whitespace-v1`
- HyperFrames: `0.7.46`
- Generation model: `gpt-5.6-sol`
- Generation skill: `general-video` at revision `1aed9f4f68414a45`
- Output: `1920x1080`, `30fps`, silent MP4

## Architecture

```text
case study + brief + source review + safe assets
                        |
                        v
          project-videos/<slug>/video.json
                        |
       schema validation + editorial analysis
                   + shared generator
                        |
                        v
       project-videos/.generated/<slug>/
       index.html + modular scene compositions
                        |
           HyperFrames QA + snapshots
                        |
              human visual approval
                        |
                        v
      public/videos/projects/<slug>/
 overview + preview + posters + generation receipt
                        |
              project metadata sync
```

The ownership boundary is deliberate:

- The case study, `brief.md`, `project-video-source.md`, optional `design.md`, and `sources.md` establish what can be claimed and shown.
- `video.json` is the build source of truth for story, non-rendered intent, every viewer-facing word, theme, timing, assets, privacy, and version metadata.
- `project-videos/frame.md` and `scripts/project-video-lib.mjs` own shared layout, motion, modular composition generation, and output rules.
- `.generated/` is disposable build state. Never repair generated HTML by hand.
- `public/videos/projects/` contains the portfolio-facing deliverables.

Generation is local and offline after dependencies are installed. The generator copies pinned GSAP and Fontsource files from `node_modules` into each generated project; compositions do not load animation code or fonts from a CDN.

## Story Families

### `system-proof`

Use for operating systems, automation, audits, evidence pipelines, and engineering contributions. The normal arc is operating problem, concrete state, intervention, evidence or guardrail, durable result, held conclusion.

### `product-journey`

Use for products and MVPs where the viewer should follow a user problem into an action, decision, or output. The normal arc is user problem, entry or setup, core action, decision or result, shipped value, held conclusion.

### `visual-showcase`

Use when real visual work is the primary proof. The normal arc is need or opportunity, visual introduction, work or gallery, inquiry or validation path, held result. Copy stays minimal and screenshots remain dominant.

## Current Project Map

`bun run videos:list` is the live machine-readable inventory. The current 20 mappings are:

| Project                                                | Slug                               | Family            | Timing     | Duration |
| ------------------------------------------------------ | ---------------------------------- | ----------------- | ---------- | -------: |
| Acquire                                                | `acquire`                          | `system-proof`    | `standard` |      44s |
| Agent Recall                                           | `agent-recall`                     | `system-proof`    | `standard` |      44s |
| Apartment Finder                                       | `apartment-finder`                 | `product-journey` | `standard` |      38s |
| BA Eventos                                             | `ba-eventos`                       | `product-journey` | `short`    |      34s |
| Casa Elaria                                            | `casa-elaria`                      | `product-journey` | `loop`     |      23s |
| Casamo                                                 | `casamo`                           | `product-journey` | `standard` |      44s |
| Codex Telegram Bridge                                  | `codex-telegram-bridge`            | `system-proof`    | `standard` |      46s |
| Desarmadero Latorre                                    | `desarmadero-latorre`              | `product-journey` | `loop`     |      23s |
| Desarmadero Operations Prototype                       | `desarmadero-operations-prototype` | `system-proof`    | `standard` |      47s |
| Genrupt                                                | `genrupt`                          | `system-proof`    | `standard` |      47s |
| Helping a Health Services Startup Show Up in AI Search | `health-ai-search-audit`           | `system-proof`    | `standard` |      44s |
| Job Application Assistant                              | `job-application-assistant`        | `product-journey` | `standard` |      43s |
| HablaBA                                                | `language-exchange`                | `product-journey` | `short`    |      32s |
| LinkedIn Tools                                         | `linkedin-tools`                   | `system-proof`    | `standard` |      47s |
| Making a Skincare Store Easier to Shop                 | `online-store-conversion-review`   | `system-proof`    | `standard` |      44s |
| Maximo Interiorismo                                    | `maximo-interiorismo`              | `visual-showcase` | `loop`     |      20s |
| Mucho Hangouts                                         | `mucho-hangouts`                   | `system-proof`    | `short`    |      32s |
| Palabruno                                              | `palabruno`                        | `product-journey` | `standard` |      42s |
| Redwriter Comics                                       | `redwriter-comics`                 | `visual-showcase` | `loop`     |    18.5s |
| Vox Prismatic                                          | `vox-prismatic`                    | `product-journey` | `short`    |      35s |

The two audit projects are full members of the system, not special-case pages. Their public evidence and privacy boundaries are declared in their manifests like every other project.

## Manifest Contract

Every manifest starts with:

```json
{
  "$schema": "../../docs/project-videos/video-manifest.schema.json",
  "version": 2,
  "editorialProfile": "silent-proof-v1"
}
```

Top-level fields:

| Field                          | Contract                                                                                                                             |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `slug`, `title`                | Stable project identity. The slug must match the folder.                                                                             |
| `editorialProfile`             | Executable copy and reading-time rules. Version 2 requires `silent-proof-v1`.                                                        |
| `family`                       | `system-proof`, `product-journey`, or `visual-showcase`.                                                                             |
| `timing`                       | `standard` for 36-60s, `short` for 24-40s, or `loop` for 14-28s.                                                                     |
| `viewer`, `takeaway`           | Plain audience and one remembered result.                                                                                            |
| `theme`                        | Nine hex colors, three supported local font stacks, and a motif of at most 32 characters. These are the exact project design tokens. |
| `scenes`                       | Four to six ordered scene objects. Durations sum to the final runtime.                                                               |
| `posterAt`                     | A settled, visually useful timestamp inside the composition.                                                                         |
| `privacy.hide`, `privacy.safe` | Explicit content boundary.                                                                                                           |
| `sources`                      | Files that support the claims, assets, and visual direction.                                                                         |
| `generation`                   | Model, template version, and HyperFrames version.                                                                                    |

Each scene declares:

- `id`, non-rendered `intent`, and `kind`: `problem`, `context`, `action`, `workflow`, `evidence`, `report`, `showcase`, `result`, or `end`.
- Required `headline`, with optional `eyebrow` and `body`. `textRoles` declares a canonical role for every copy field; the headline is the scene's single `primary` block.
- `duration` and `layout`: `copy-left`, `copy-right`, `full`, `stack`, `rail`, or `report`.
- Optional `asset`, `assetAlt`, `assetFit`, `assetPosition`, `assetText`, up to four semantic `labels`, and one source-backed `stat`. `assetText` declares readable words inside an image when comprehension depends on them; labels, stats, and asset-text elements carry their role inline.
- `transition`: `push-left`, `push-up`, or `dissolve`.
- `motion`: `assemble`, `settle`, `scroll`, or `drift`.

Only the final scene can use `kind: "end"`. It holds for at least 3 seconds, uses `motion: "settle"`, and introduces no new claim. The migrated manifests use 5-second endings so the explicitly declared project name and conclusion pass the reading check.

### Executable editorial analysis

`silent-proof-v1` counts every rendered manifest word in `eyebrow`, `headline`, `body`, label titles and bodies, `stat.value` plus `stat.label`, and declared `assetText`. It excludes `intent` and `assetAlt` because they do not render as on-screen copy.

Every viewer-facing element is reported with its manifest path, exact text, canonical role, and word count. The only roles are:

- `primary`: the scene's one main idea; exactly the manifest headline in this renderer.
- `supporting`: necessary clarification that the primary block cannot carry alone.
- `orientation`: the project, artifact, or step currently shown.
- `status`: a state or result needed to interpret the proof.

`evidence` is a story concept, not a text role. Decorative text is not allowed. The renderer no longer adds scene numbers or other readable metadata, so all renderer-created on-canvas text comes from the manifest and appears in the editorial report. Readable logo words are declared in `assetText`; omit screenshot words only when the scene does not depend on reading them.

The profile implements the canonical `silent-designed-video-v1` standard with the pinned `whitespace-v1` tokenizer. `whitespace-v1` trims each rendered string, splits it on one or more whitespace characters, removes empty and punctuation-only tokens, and sums the remaining tokens across fields. Punctuation attached to a word stays attached; numbers, URLs, handles, contractions, and hyphenated terms count as one token. The tokenizer does not infer language or syllable complexity. Pinning both versions makes historical receipts interpretable if either the editorial policy or tokenization rule changes later.

The analyzer uses the real entrance schedule instead of total scene duration:

- Normal copy baseline settles at `1.1s`.
- End copy settles at `0.5s`.
- A label cascade settles at `0.74 + 0.42 + 0.09 × (label count - 1)` seconds when that is later than the baseline.
- `textSettledAt` is the latest viewer-facing text entrance completion.
- `readingWindowEnd` is the outgoing transition start, or the scene end when there is no outgoing transition.
- `usableSettledHold = readingWindowEnd - textSettledAt`.
- `requiredReadingTime = viewerFacingWordCount / (140 / 60)`.
- `readingMargin = usableSettledHold - requiredReadingTime`.

In this composition model, each non-final scene's declared duration is the local start time of its outgoing `0.5s` transition; the transition tail is render overlap, not reading time. Final scenes use their scene end. Validation fails when settled hold is less than `2s`, or when reading margin is less than `0.75s` for story scenes and `0.5s` for the ending.

`generation-plan.json`, `qa-report.json`, and the public `generation.json` receipt record the scene intent, every text element and role, all timing and reading metrics, pass/fail state, and findings.

All three artifacts also record `editorialStandardVersion: "silent-designed-video-v1"` and `editorialTokenizerVersion: "whitespace-v1"` beside the repository profile, so a result can be traced to the exact policy and counting contract.

### Local font contract

The first family in each `fontDisplay`, `fontBody`, and `fontMono` stack must be one of these nine bundled families:

- `Archivo Black`
- `EB Garamond`
- `IBM Plex Mono`
- `Inter`
- `JetBrains Mono`
- `League Gothic`
- `Montserrat`
- `Oswald`
- `Space Mono`

Only the generic `serif`, `sans-serif`, or `monospace` fallback may follow the primary family. Named host-font fallbacks are rejected because HyperFrames can otherwise resolve them over the network and change layout across machines. To add another primary family, add its exact-version `@fontsource/<package>` package as a direct pinned dependency, then register the family, package name, and every required weight in `fontRegistry` in `scripts/project-video-lib.mjs`. Validate that the corresponding Latin WOFF2 files exist, then run the tests and three-family visual gate. Font files are included in `sourceDigest`, so a font byte change invalidates the render receipt.

## New Case Study Workflow

1. Read the case study, project metadata, repo evidence, and any existing project docs. Write or update `brief.md`, `project-video-source.md`, optional `design.md`, and `sources.md` before choosing on-screen claims.
2. Identify three to six inspectable proof moments. Capture them using [capture-and-production-workflow.md](capture-and-production-workflow.md).
3. Save raw captures under `assets/raw/`. Put approved public-safe images in `assets/selected/`, and use `assets/redacted/` whenever redaction is needed.
4. Create `project-videos/<slug>/video.json`. Copy the structure from a project in the same family, then replace every claim, intent, rendered word and role, asset, privacy rule, color, and font with source-backed project values. Start with one `primary` headline per scene and add optional copy only when it earns `supporting`, `orientation`, or `status`.
5. Validate the manifest:

   ```bash
   bun run videos:validate -- <slug>
   ```

6. Generate the modular HyperFrames project:

   ```bash
   bun run videos:generate -- <slug>
   ```

7. Run QA with scene snapshots:

   ```bash
   bun run videos:qa -- <slug>
   ```

8. Inspect every image under `project-videos/.generated/<slug>/snapshots/` and the generated `qa-report.json`. Confirm every scene's editorial metrics pass with useful room, then use Studio when needed:

   ```bash
   bunx hyperframes preview project-videos/.generated/<slug> --port 3017
   ```

9. Stop at the visual review gate. Render only after the user approves the generated composition.
10. Render and verify the approved project:

    ```bash
    bun run videos:render -- <slug> --approve-visuals --quality high
    ```

11. Run portfolio checks and review the public asset diff:

    ```bash
    bun run check:projects
    bun run format:check
    bun run lint
    bun run build
    ```

## Command Reference

```bash
# Inventory and tests
bun run videos:list
bun run videos:test

# One or more slugs; omit slugs to process every manifest
bun run videos:validate -- <slug ...>
bun run videos:generate -- <slug ...>
bun run videos:qa -- <slug ...>
bun run videos:qa -- <slug ...> --no-snapshots

# Render quality: draft, standard, or high
bun run videos:render -- <slug ...> --approve-visuals --quality high

# Full pipeline for every manifest
bun run videos:all -- --approve-visuals --quality high
```

The wrapper processes slugs sequentially. With no slugs, every inventory-aware command, including `videos:list`, selects all manifests. `videos:test` runs the pipeline test suite and does not take slugs.

| Command           | Pipeline                                                                                                |
| ----------------- | ------------------------------------------------------------------------------------------------------- |
| `videos:validate` | Validate the selected manifests.                                                                        |
| `videos:generate` | Validate, then replace the selected `.generated/` projects.                                             |
| `videos:qa`       | Validate, regenerate, then run lint, runtime validation, transition inspection, and optional snapshots. |
| `videos:render`   | Validate, regenerate, run QA, render, derive media, verify it, and synchronize project metadata.        |
| `videos:all`      | Currently identical to `videos:render`; the name signals the normal no-slug, full-inventory batch.      |

Render quality defaults to `high`; supported values are `draft`, `standard`, and `high`. Both render commands require the explicit `--approve-visuals` flag after snapshot or Studio review; the flag records that the human gate happened but does not perform that review. QA fails on any lint, runtime, or layout-inspection warning or error, and on any contrast failure. When the HyperFrames checks return their JSON results, the wrapper writes `qa-report.json` before reporting a counted failure. Snapshots are created only after those automated checks pass. `--no-snapshots` skips image generation, not the human approval requirement.

## Pilot And Visual Review Gate

Any change to `project-videos/frame.md`, the schema, generator, shared CSS/motion, or a template version must pass one representative pilot from each family before a batch render:

```bash
bun run videos:test
bun run videos:qa -- acquire job-application-assistant redwriter-comics
```

Review all pilot snapshots for:

- Correct source-backed copy and one idea per scene.
- Readable screenshots after motion settles.
- No clipped or overlapping text.
- Distinct hierarchy across copy, proof surface, any essential labels, and background.
- Expected transitions at every boundary.
- A clean final hold whose explicit copy passes the end-scene reading margin.
- No private data or unsupported claim visible at any sampled frame.

Open each pilot in Studio when a snapshot is ambiguous. The wrapper creates snapshots but does not judge their pixels. Do not run `videos:all` or publish final MP4s until the user approves the pilot direction. Passing QA is not visual approval.

## Evidence And Privacy Rules

- Prefer structured project sources, public case-study evidence, and real product assets. Do not infer claims from generic page text.
- Prefer `assets/redacted/`, then `assets/selected/`, then an explicit public repo asset path.
- Do not use private runtime state, messages, profile data, account details, customer records, drafts, analytics, tokens, cookies, environment values, or secret-bearing paths.
- Every number in `stat` must appear in a listed source. Do not invent metrics, outcomes, rankings, revenue, or usage.
- Technical evidence can support the source record without becoming general-audience copy.
- If required evidence is missing, omit the claim or capture a safe artifact. Do not fill the gap with a heuristic label.
- The `privacy` block is part of the build contract, but visual review remains responsible for checking the pixels.

## Generated And Tracked Files

Track:

- `project-videos/<slug>/video.json`
- The supporting brief, source record, optional design guidance, source list, and approved `assets/selected/` or `assets/redacted/` files
- Shared schema, frame, generator, tests, and documentation
- `public/videos/projects/<slug>/overview.mp4`
- `public/videos/projects/<slug>/preview.mp4`
- `poster.png`, `poster-480.webp`, `poster-960.webp`, and `poster-1440.webp`
- `public/videos/projects/<slug>/generation.json`
- The synchronized `src/lib/projects/<slug>.json` video metadata

Do not track `project-videos/.generated/`. It contains copied assets, modular compositions, generated `index.html`, a manifest copy, `generation-plan.json`, `qa-report.json`, and scene snapshots. It is ignored and can be rebuilt.

The bespoke per-project compositions were removed after the manifest migration. Git history preserves them if an old implementation ever needs to be inspected.

Treat `generation.json` as a render receipt. `sourceCommit` records the current `HEAD`, which can coexist with uncommitted source changes, and `sourceDirty` records that state. `sourceDigest` covers the manifest; normalized project metadata with its derived `videos` field removed; the engine and wrapper; manifest schema; `package.json` and `bun.lock`; `frame.md`; the expanded prompt; every listed source and scene asset; and the exact local GSAP and project font bytes. The receipt separately records the enforced model, editorial profile, editorial standard and tokenizer versions, per-scene reading metrics, template, HyperFrames, and `general-video` skill revision. Installed runtime or skill content outside that declared surface is not hashed, so review dependency and skill changes before publishing.

## Failure Recovery

### Manifest validation fails

Fix `video.json`, not generated HTML. Typical causes are a folder/slug mismatch, invalid family or timing, an unsupported scene value, too many scenes, a missing asset, an out-of-range duration, or version drift.

### An asset is missing or unsafe

Capture or redact it, place the approved file under `assets/redacted/` or `assets/selected/`, update the manifest path and `sources`, then regenerate.

### Generated output is stale or damaged

Generation uses a per-slug lock, writes a hidden sibling staging directory, verifies its required files and composition count, and only then atomically promotes it. The previous generated directory is restored if promotion fails. A live lock fails loudly; a dead-process lock, or a malformed lock older than the recovery threshold, is reclaimed automatically on the next run.

It is safe to remove only that ignored build folder and regenerate when no generation process for the slug is active:

```bash
rm -rf project-videos/.generated/<slug>
bun run videos:generate -- <slug>
```

Use the repository wrapper. Do not call `generateProject()` with an arbitrary output directory or manually delete an active lock.

### HyperFrames QA fails

Use the wrapper first:

```bash
bun run videos:qa -- <slug>
```

For narrower diagnostics:

```bash
bunx hyperframes lint project-videos/.generated/<slug> --json
bunx hyperframes validate project-videos/.generated/<slug> --json
jq '.inspect' project-videos/.generated/<slug>/qa-report.json
```

The wrapper creates a temporary copy, replaces its root with `inspection.entry`, disables transitions there, and inspects settled scene times. `qa-report.json` records that exact result plus the deterministic editorial analysis for every scene. Running `inspect --at-transitions` against the normal root is a different diagnostic and can report expected overlap while two scenes are deliberately crossing.

If checks pass but snapshots look wrong, stop and fix the manifest or shared template. Do not render around a visual failure.

QA command success is not approval. The human review of snapshots or Studio is a separate required checkpoint.

### The environment or render fails

HyperFrames requires Node 22+, FFmpeg, FFprobe, and Chrome. Restore dependencies with `bun install`, then require the named video checks rather than gating on the doctor's overall `.ok` field:

```bash
bunx hyperframes doctor --json | jq -e '
  [.checks[] | select(
    .name == "Version" or .name == "Node.js" or .name == "FFmpeg" or
    .name == "FFprobe" or .name == "Chrome"
  )]
  | length == 5 and all(.ok)
' > /dev/null
```

`TTS (Kokoro)` and `BGM (MusicGen)` are optional and can legitimately make overall `.ok` false for these silent videos. Require `Docker` and `Docker running` in the same named-check style only when the selected render workflow uses Docker.

On this machine, Sharp must ignore Homebrew/global libvips so it uses its prebuilt binary. Confirm `SHARP_IGNORE_GLOBAL_LIBVIPS=1` is present in the shell environment before reinstalling if Sharp attempts a source build.

Rendering writes all media and `generation.json` into a hidden sibling release directory. The wrapper probes the overview and preview, verifies codec, pixel format, dimensions, frame rate, duration, audio absence, and file size, and verifies every poster before promotion. It then atomically promotes the verified directory and synchronized project metadata; if promotion fails, it restores the prior public release and removes the temporary metadata. Fix an interrupted or failed render, rerun the complete wrapper, and confirm the new receipt and metadata were promoted together.

Multi-project batches stop at the first failed slug and do not roll back projects that already finished. There is no resume checkpoint. Record the failed slug, fix it, then rerun that slug and any unprocessed slugs explicitly. Review the resulting public diff before committing.

Do not hand-edit `overview.mp4`, derived previews, posters, or `generation.json`. The wrapper verifies 1920x1080, 30fps, duration, file size, and poster dimensions before reporting success.

## Version Upgrades

Keep `hyperframes` and `@hyperframes/producer` pinned to the same version.

Generation also enforces `general-video` revision `1aed9f4f68414a45` before producing compositions. A skill update must be reviewed and accepted deliberately; do not bypass the mismatch.

The `1aed9f4f68414a45` revision replaces the skill's separate `lint`, `validate`, and `inspect` checklist commands with `hyperframes check` (`heygen-com/hyperframes@758a6d21`). It does not alter this repository's manifest generator or renderer, so adopting it did not require a template-version change.

`hyperframes skills check --json` exits `1` when any installed skill has an update available. The project wrapper accepts that status only long enough to parse the report, then still requires the installed `general-video` hash to match the repository pin above. Unrelated update notices must not block reproducible generation, and a mismatched generation skill must still fail.

1. Check package and skill state:

   ```bash
   bunx hyperframes upgrade --check --json
   bunx hyperframes skills check --json
   ```

2. Update both packages together and refresh skills:

   ```bash
   bun add -d hyperframes@<version> @hyperframes/producer@<version>
   bunx hyperframes skills update
   ```

3. Read the updated `general-video` skill and inspect its installed hash:

   ```bash
   bunx hyperframes skills check --json \
     | jq -r '.skills[] | select(.name == "general-video") | .installedHash'
   ```

   If the reviewed revision is intentional, update `generationSkillRevision` in `scripts/project-video-lib.mjs` and this document in the same change. If it can alter generated behavior, increment the template version and run the visual upgrade path below.

4. Update `hyperframesVersion` in `scripts/project-video-lib.mjs` and every manifest's `generation.hyperframesVersion` in the same change.
5. If shared rendering behavior changes, increment `templateVersion` in `scripts/project-video-lib.mjs`, `project-videos/frame.md`, and every manifest. Use semantic versioning: patch for compatible visual fixes, minor for additive manifest/template behavior, major for incompatible manifest output.
6. Run the full non-rendering gate and three-family pilots:

   ```bash
   bun run videos:test
   bun run videos:validate
   bun run videos:qa -- acquire job-application-assistant redwriter-comics
   ```

7. Visually approve the pilots, render those three, and only then regenerate the complete set:

   ```bash
   bun run videos:render -- acquire job-application-assistant redwriter-comics --approve-visuals --quality high
   bun run videos:all -- --approve-visuals --quality high
   ```

8. Finish with portfolio checks and review every changed generation receipt and public asset before committing.
