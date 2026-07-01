# Sources

## Source Material

- Portfolio case study: `src/content/case-studies/vox-prismatic.mdx`
- Project metadata: `src/lib/projects/vox-prismatic.json`
- Public product hero image: `src/assets/img/projects/vox-prismatic-hero.png`
- Public product feature image: `src/assets/img/projects/vox-prismatic-feature.png`

## Production Basis

- Repo video workflow: `docs/project-videos/capture-and-production-workflow.md`
- Source template: `docs/project-videos/project-video-source-template.md`
- Video plan: `docs/project-videos/project-video-plan.md`
- Prior pilot structure: `project-videos/job-application-assistant/`
- Completed video patterns: `project-videos/acquire/` and `project-videos/palabruno/`
- HyperFrames composition, creative, animation, and CLI guidance

## Captured Assets

- `assets/redacted/vox-prismatic-posts-crop.png`: cropped from `src/assets/img/projects/vox-prismatic-hero.png` to avoid sidebar account footer text and focus the posts workflow.
- `assets/redacted/vox-prismatic-hook-workbench.png`: cropped from `src/assets/img/projects/vox-prismatic-feature.png` to focus the hook workbench modal.
- `hyperframes/assets/vox-prismatic-posts-crop.png`: root-contained copy used by the HyperFrames CLI renderer.
- `hyperframes/assets/vox-prismatic-posts-result.png`: HyperFrames-local alias of the cropped posts screenshot for repeated result-scene use.
- `hyperframes/assets/vox-prismatic-hook-workbench.png`: root-contained copy used by the HyperFrames CLI renderer.

## Redaction Notes

The video uses cropped public portfolio screenshots and native synthetic HyperFrames cards only. It does not use the full screenshot containing account footer text, private email, unpublished transcript data, provider credentials, local paths, tokens, cookies, command output, or real runtime account details.

## Final Verification

- `npx hyperframes lint --json`: passed with `0` errors and `0` warnings.
- `npx hyperframes validate --json`: passed with `0` errors, `0` warnings, and `0` contrast failures.
- `npx hyperframes inspect --json`: passed with `0` errors and `0` warnings; remaining findings were info-level off-canvas text during intentional push transitions.
- `npx hyperframes snapshot --at 1.8,6.8,12.8,20.2,27.5,31.2`: generated and visually reviewed six frames.
- `npx hyperframes render --quality high --strict --output ../../../public/videos/projects/vox-prismatic/overview.mp4`: rendered the final MP4.
- `ffprobe`: `overview.mp4` is `1920x1080`, `30fps`, `33.000000s`; `preview.mp4` is `1920x1080`, `30fps`, `12.000000s`.
- `sips`: `poster.png` is `1920x1080`.
- `bun run check:projects`: validated `19` project metadata files.
- `bun run build`: Astro check passed with `0` errors, `0` warnings, and `0` hints; build completed with `42` pages.
- `npx hyperframes feedback`: submitted successfully.
