# Project Video Template System

This is the canonical production contract for portfolio videos. Every current project is driven by a structured `project-videos/<slug>/video.json` manifest. The bespoke per-project compositions were removed after migration; regenerate only from the manifest pipeline.

Current contract versions:

- Manifest version: `1`
- Template version: `1.0.0`
- HyperFrames: `0.7.46`
- Generation model: `gpt-5.6-sol`
- Generation skill: `general-video` at revision `e26710c3537b3a07`
- Output: `1920x1080`, `30fps`, silent MP4

## Architecture

```text
case study + brief + source review + safe assets
                        |
                        v
          project-videos/<slug>/video.json
                        |
          schema validation + shared generator
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
- `video.json` is the build source of truth for story, theme, timing, assets, privacy, and version metadata.
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

`bun run videos:list` is the live machine-readable inventory. The current 21 mappings are:

| Project                                                | Slug                               | Family            | Timing     | Duration |
| ------------------------------------------------------ | ---------------------------------- | ----------------- | ---------- | -------: |
| Acquire                                                | `acquire`                          | `system-proof`    | `standard` |      42s |
| Agent Recall                                           | `agent-recall`                     | `system-proof`    | `standard` |      42s |
| Apartment Finder                                       | `apartment-finder`                 | `product-journey` | `standard` |      36s |
| BA Eventos                                             | `ba-eventos`                       | `product-journey` | `short`    |      32s |
| Casa Elaria                                            | `casa-elaria`                      | `product-journey` | `loop`     |      21s |
| Casamo                                                 | `casamo`                           | `product-journey` | `standard` |      42s |
| Client Feedback Evidence CLI                           | `client-feedback`                  | `system-proof`    | `short`    |    31.5s |
| Codex Telegram Bridge                                  | `codex-telegram-bridge`            | `system-proof`    | `standard` |      44s |
| Desarmadero Latorre                                    | `desarmadero-latorre`              | `product-journey` | `loop`     |      21s |
| Desarmadero Operations Prototype                       | `desarmadero-operations-prototype` | `system-proof`    | `standard` |      45s |
| Genrupt                                                | `genrupt`                          | `system-proof`    | `standard` |      45s |
| Helping a Health Services Startup Show Up in AI Search | `health-ai-search-audit`           | `system-proof`    | `standard` |      42s |
| Job Application Assistant                              | `job-application-assistant`        | `product-journey` | `standard` |      41s |
| Language Exchange Platform                             | `language-exchange`                | `product-journey` | `short`    |      30s |
| LinkedIn Tools                                         | `linkedin-tools`                   | `system-proof`    | `standard` |      45s |
| Making a Skincare Store Easier to Shop                 | `online-store-conversion-review`   | `system-proof`    | `standard` |      42s |
| Maximo Interiorismo                                    | `maximo-interiorismo`              | `visual-showcase` | `loop`     |      18s |
| Mucho Hangouts                                         | `mucho-hangouts`                   | `system-proof`    | `short`    |      30s |
| Palabruno                                              | `palabruno`                        | `product-journey` | `standard` |      40s |
| Redwriter Comics                                       | `redwriter-comics`                 | `visual-showcase` | `loop`     |    16.5s |
| Vox Prismatic                                          | `vox-prismatic`                    | `product-journey` | `short`    |      33s |

The two audit projects are full members of the system, not special-case pages. Their public evidence and privacy boundaries are declared in their manifests like every other project.

## Manifest Contract

Every manifest starts with:

```json
{
  "$schema": "../../docs/project-videos/video-manifest.schema.json",
  "version": 1
}
```

Top-level fields:

| Field                          | Contract                                                                                                                             |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `slug`, `title`                | Stable project identity. The slug must match the folder.                                                                             |
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

- `id` and `kind`: `problem`, `context`, `action`, `workflow`, `evidence`, `report`, `showcase`, `result`, or `end`.
- `eyebrow`, `headline`, and `body`: one idea, normally no more than 18 must-read words across headline and body. More than 28 is invalid.
- `duration` and `layout`: `copy-left`, `copy-right`, `full`, `stack`, `rail`, or `report`.
- Optional `asset`, `assetAlt`, `assetFit`, `assetPosition`, up to four `labels`, and one source-backed `stat`.
- `transition`: `push-left`, `push-up`, or `dissolve`.
- `motion`: `assemble`, `settle`, `scroll`, or `drift`.

Only the final scene can use `kind: "end"`. It holds for exactly 3 seconds in the current system, uses `motion: "settle"`, and introduces no new claim.

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
4. Create `project-videos/<slug>/video.json`. Copy the structure from a project in the same family, then replace every claim, asset, privacy rule, color, and font with source-backed project values.
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

8. Inspect every image under `project-videos/.generated/<slug>/snapshots/` and the generated `qa-report.json`. For Studio review:

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
- Distinct hierarchy across copy, proof surface, labels, and background.
- Expected transitions at every boundary.
- A clean final 3-second hold.
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

Treat `generation.json` as a render receipt. `sourceCommit` records the current `HEAD`, which can coexist with uncommitted source changes, and `sourceDirty` records that state. `sourceDigest` covers the manifest; normalized project metadata with its derived `videos` field removed; the engine and wrapper; manifest schema; `package.json` and `bun.lock`; `frame.md`; the expanded prompt; every listed source and scene asset; and the exact local GSAP and project font bytes. The receipt separately records the enforced model, template, HyperFrames, and `general-video` skill revision. Installed runtime or skill content outside that declared surface is not hashed, so review dependency and skill changes before publishing.

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

The wrapper creates a temporary copy, replaces its root with `inspection.entry`, disables transitions there, and inspects settled scene times. `qa-report.json` records that exact result. Running `inspect --at-transitions` against the normal root is a different diagnostic and can report expected overlap while two scenes are deliberately crossing.

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

Generation also enforces `general-video` revision `e26710c3537b3a07` before producing compositions. A skill update must be reviewed and accepted deliberately; do not bypass the mismatch.

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
