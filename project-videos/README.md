# Portfolio Project Videos

Start with [the template-system documentation](../docs/project-videos/template-system.md).

The canonical build input for every project is:

```text
project-videos/<slug>/video.json
```

Supporting briefs, source records, design guidance, source lists, and selected/redacted assets establish what the manifest may claim and show. The shared generator turns the manifest into modular HyperFrames compositions under the ignored `.generated/` directory.

The current inventory has 21 version-2 manifests across the `system-proof`, `product-journey`, and `visual-showcase` families. Every manifest uses the executable `silent-proof-v1` editorial profile, which checks all rendered words against the post-entrance reading window. GSAP and the approved Fontsource files are copied locally into generated projects so compositions do not depend on CDN assets.

The bespoke per-project compositions were removed after migration. Regenerate videos only through the manifest pipeline; Git history preserves the old implementations.

Core commands:

```bash
bun run videos:list
bun run videos:test
bun run videos:validate -- <slug>
bun run videos:generate -- <slug>
bun run videos:qa -- <slug>
```

Inspect the generated snapshots and get visual approval before rendering:

```bash
bun run videos:render -- <slug> --approve-visuals --quality high
```

The flag is required for render commands and means the snapshots or Studio composition have already received human visual approval.

Evidence capture and redaction: [capture-and-production-workflow.md](../docs/project-videos/capture-and-production-workflow.md).
