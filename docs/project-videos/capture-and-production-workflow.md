# Capture And Production Workflow

Goal: turn each portfolio case study into a short, repeatable proof asset using safe evidence, a structured `video.json` manifest, and the shared HyperFrames generator.

Start with [template-system.md](template-system.md). This document covers the evidence and asset work that happens before the manifest pipeline.

## Tool Roles

- Use Browser Use for web products, public portfolio pages, app flows, screenshots, page-state checks, and exploratory browser capture.
- Use scripted Playwright capture when a browser state must be repeatable from seed data.
- Use Computer Use for native Mac apps, local desktop workflows, app-store surfaces, terminal-adjacent UI, and states Browser Use cannot reach.
- Use the repository's `bun run videos:*` commands for manifest validation, composition generation, HyperFrames QA, rendering, media derivation, and verification.

Do not author a new bespoke per-project composition. The shared generator creates modular HyperFrames compositions from `video.json`.

## Folder Shape

```text
project-videos/
  <slug>/
    brief.md
    project-video-source.md
    design.md
    sources.md
    video.json
    assets/
      raw/
      selected/
      redacted/
```

The source roles are different:

- `brief.md`: audience, one-sentence job, plain problem/solution/result, initial scene arc, and privacy notes.
- `project-video-source.md`: claim inventory, scene reasoning, text lock, asset manifest, and evidence trail.
- `design.md`: project-specific visual direction retained from the original composition or written for a new case study.
- `sources.md`: source paths, URLs, capture provenance, and verification notes.
- `video.json`: the canonical renderer input.

Keep raw capture separate from approved assets. Manifest scenes should prefer `assets/redacted/`, then `assets/selected/`, then an explicit public repository asset.

## Source And Audience Gate

Choose the viewer and story family before capturing or writing scene copy:

| Viewer or proof need                                   | Default family    | Story job                                                                  |
| ------------------------------------------------------ | ----------------- | -------------------------------------------------------------------------- |
| Systems, automation, audits, technical operating proof | `system-proof`    | Show the real state, intervention, evidence boundary, and durable result.  |
| Product, MVP, customer, or general portfolio story     | `product-journey` | Show the user problem, core action, decision or output, and shipped value. |
| Site, artwork, interior, or visual portfolio work      | `visual-showcase` | Let the real visual work carry the story and keep copy minimal.            |

For general portfolio traffic, explain the problem, solution, and result in everyday language. Keep stack names, schemas, commands, and test output in the source record unless the viewer explicitly needs technical detail.

One scene should say one thing. Use one headline and one short sentence, normally no more than 18 must-read words total. The final scene is a settled 3-second hold and introduces no new claim.

## Evidence Selection

Before capturing, identify three to six proof moments that can be shown or inspected:

- Input entering the product or workflow
- Review or approval gate
- Core user action
- Generated or saved artifact
- Report, dashboard, row, file, receipt, or audit trail
- Verification result or warning
- Before and after as named concrete states
- System boundary or handoff
- Missing-data behavior or guardrail
- Real visual work and the inquiry or validation path around it

Every on-screen claim must map to a listed source. If evidence is missing, omit the claim or capture a safe artifact. Do not replace missing evidence with a guessed metric, generic card, or inferred page text.

## Capture Workflow

1. Open the source project, docs, public demo, or local app.
2. Prepare a clean state with public or synthetic data.
3. Set a consistent viewport, normally `1440x900` for source capture or `1920x1080` when capturing video-native framing.
4. Capture stable screenshots for inspectable states.
5. Capture short footage only when motion explains the product better than a still.
6. Save original material under `assets/raw/` with descriptive names.
7. Record the source URL or path, viewport, login state, seed data, and capture method in `sources.md`.
8. Copy the strongest public-safe assets into `assets/selected/`.
9. Redact before an asset reaches `assets/redacted/` or `video.json`.

Prefer deterministic synthetic seed data for anything involving users, applications, messages, transactions, reports, or account state.

## Browser Capture Rail

Use this for web apps and browser-visible product flows:

1. Launch the exact route or local app state.
2. Remove browser chrome, unrelated tabs, notifications, and overlays.
3. Navigate to the state named in the source document.
4. Capture the smallest useful surface: element, viewport, or full page.
5. Repeat only for distinct proof moments.
6. Verify that the capture still makes sense without the live app open.

Browser capture is normally appropriate for Palabruno, Genrupt, Acquire, Job Application Assistant extension screens, Casamo, BA Eventos, Apartment Finder, Vox Prismatic, audit report previews, and launch-site or portfolio loops.

## Computer Use Capture Rail

Use this when the proof sits outside a browser-friendly surface:

1. Open the local or native app.
2. Prepare the smallest useful state manually or with a documented local command.
3. Crop away unrelated desktop content.
4. Avoid menu bars, notifications, inboxes, or personal windows unless they are the approved proof.
5. Save the raw capture immediately and record how to reproduce it.
6. Redact before manifest use.

This rail is appropriate for menu-bar tools, Telegram or Discord routing views, app-store surfaces, terminal products, and local-only outputs.

## Redaction Checklist

Check every pixel for:

- Names, emails, phone numbers, handles, profile photos, and usernames
- Client-sensitive records or private correspondence
- LinkedIn messages, connection lists, or private profiles
- Job applications, company-specific drafts, resumes, and employment data
- Gmail, WhatsApp, Telegram, Discord, and notification content
- Customer, student, listing, inventory, transaction, or account data
- Analytics, billing, revenue, and payment details not already public
- API keys, tokens, cookies, session IDs, environment values, and secret-bearing paths
- Admin, CMS, database, or local runtime surfaces not approved for publication

Crop tightly or mask the data. Do not rely on the generated template to hide it. Record what is hidden and what is safe in both the source document and `video.json.privacy`.

## Manifest Handoff

After evidence review:

1. Create `video.json` using the schema at `docs/project-videos/video-manifest.schema.json`.
2. Copy the exact audience, takeaway, plain-language claims, approved assets, privacy rules, and sources from the source record.
3. Choose `system-proof`, `product-journey`, or `visual-showcase`.
4. Choose `standard`, `short`, or `loop` based on the summed scene duration.
5. Use four to six scenes. The final scene is `kind: "end"`, `motion: "settle"`, and `duration: 3`.
6. Set `posterAt` to a settled frame with readable proof and useful portfolio-card composition.
7. Keep generation metadata aligned with the shared template and installed HyperFrames versions.

Then run:

```bash
bun run videos:validate -- <slug>
bun run videos:generate -- <slug>
bun run videos:qa -- <slug>
```

## Visual Review And Render Gate

Review every generated snapshot under `project-videos/.generated/<slug>/snapshots/`. Check copy, asset legibility, scene hierarchy, transitions, privacy, and the final hold.

Open Studio when a still frame is not enough:

```bash
bunx hyperframes preview project-videos/.generated/<slug> --port 3017
```

Rendering is user-gated. After approval:

```bash
bun run videos:render -- <slug> --approve-visuals --quality high
```

The explicit flag records that visual approval happened. The wrapper renders into a staging release, derives the preview and posters, verifies the media, writes a generation receipt, and atomically promotes the release with synchronized project metadata.

## Deliverables

Tracked public outputs live under `public/videos/projects/<slug>/`:

- `overview.mp4`
- `preview.mp4`
- `poster.png`
- `poster-480.webp`
- `poster-960.webp`
- `poster-1440.webp`
- `generation.json`

Generated source under `project-videos/.generated/` is disposable and ignored. The bespoke per-project compositions were removed after migration and are available only through Git history.

## Final Checks

```bash
bun run videos:test
bun run check:projects
bun run format:check
bun run lint
bun run build
git diff --check
```

See [template-system.md](template-system.md) for batch commands, failure recovery, family pilots, tracked-output rules, and version upgrades.
