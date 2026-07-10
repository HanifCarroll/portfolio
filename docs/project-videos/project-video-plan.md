# Project Video Plan

Every current portfolio case study has a manifest-driven video. The active plan is to maintain one shared template system, keep each project's evidence and design tokens explicit in `video.json`, and regenerate through the repository scripts.

Canonical documentation: [template-system.md](template-system.md).

## Editorial Rule

Broad portfolio videos explain the problem, solution, and result in everyday language. Real screenshots, reports, product states, and safe artifacts carry the proof. Stack names, schemas, commands, and test output stay off-screen unless the chosen viewer is explicitly technical.

Use one story family:

- `system-proof`: automation, operating systems, audits, evidence pipelines, and engineering contributions.
- `product-journey`: products and MVPs where a user takes an action and reaches a decision or output.
- `visual-showcase`: visual sites and portfolios where the real imagery is the primary evidence.

The complete 21-project family, timing, and duration map is maintained in [template-system.md](template-system.md#current-project-map) and is printed by:

```bash
bun run videos:list
```

The inventory includes the two audit case studies:

- `health-ai-search-audit`: `system-proof`, `standard`, 42 seconds.
- `online-store-conversion-review`: `system-proof`, `standard`, 42 seconds.

## Source Rule

For every project:

1. Use the case study, project metadata, `brief.md`, `project-video-source.md`, `sources.md`, and approved assets as the evidence record.
2. Use `project-videos/<slug>/video.json` as the build source of truth.
3. Use `project-videos/frame.md` and the shared generator for layout and motion.
4. Treat `project-videos/.generated/` as disposable output.
5. Treat the removed bespoke compositions as superseded historical work, not regeneration inputs.

## Change Paths

### New case study

Capture safe proof, create the source record and manifest, then validate, generate, and review that project before rendering.

```bash
bun run videos:validate -- <slug>
bun run videos:generate -- <slug>
bun run videos:qa -- <slug>
```

### Project-specific copy, timing, theme, or asset change

Edit only the source record and `video.json`. Do not patch generated HTML. Regenerate and visually review the affected project.

### Shared template, schema, frame, or HyperFrames upgrade

Run the automated tests, then review one pilot from every family:

```bash
bun run videos:test
bun run videos:qa -- acquire job-application-assistant redwriter-comics
```

Only after those pilots are approved should the complete set be rendered.

## Acceptance Gate

A project is ready to render when:

- The viewer can explain the problem, product or intervention, and result without opening the case study.
- Every claim and number maps to a listed source.
- Every visual is public, synthetic, selected, or redacted.
- Each scene says one thing and normally stays within 18 must-read words.
- Screenshots remain readable after motion settles.
- HyperFrames lint, runtime validation, transition inspection, and snapshots pass.
- Every sampled frame passes visual and privacy review.
- The final scene holds cleanly for 3 seconds without introducing new evidence.
- The user has approved the generated preview.

After approval:

```bash
bun run videos:render -- <slug> --approve-visuals --quality high
```

For an approved full regeneration:

```bash
bun run videos:all -- --approve-visuals --quality high
```
