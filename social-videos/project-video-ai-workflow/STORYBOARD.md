# Storyboard: Project Video AI Workflow

The reel shows that practical AI work comes from combining judgment with deterministic tools and useful abstractions.

Format: `1080x1080`, `30fps`, `45.5s`, silent MP4.

| Scene                  |       Time | Intent                                                        | Viewer text                                                                  |
| ---------------------- | ---------: | ------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 01 - Outcome           |   0.0-4.0s | Open with the scale and shared-system result.                 | `21 projects. One video system.`                                             |
| 02 - Manual burden     |  4.0-10.0s | Make the former maintenance cost concrete.                    | `One style change meant editing 19 separate videos.`                         |
| 03 - Abstraction       | 10.0-16.5s | Explain the recipe and shared engine.                         | `Each project supplies a recipe. One engine builds the video.`               |
| 04 - Division of labor | 16.5-24.5s | Separate AI judgment, repeatable execution, and human review. | `AI decides what matters. Software repeats it reliably.` plus `Human review` |
| 05 - Proof             | 24.5-35.5s | Let six public project clips demonstrate range.               | `Six projects. One shared system.`                                           |
| 06 - Maintainability   | 35.5-40.5s | Resolve the original styling problem.                         | `Change one shared file. Every video updates.`                               |
| 07 - Practical close   | 40.5-45.5s | Close on the useful result, not the technology.               | `AI judgment. Reliable tools. Practical results.` plus `hanifcarroll.com`    |

`editorial.json` is the machine-readable text lock. It declares scene intent, every renderer-created text element and canonical role, entrance timing, and the scene-local reading-window end. Every text element repeats its entrance as `data-text-start` and `data-text-duration`, and its GSAP call reads those attributes. `npm run check:editorial` rejects timing drift and verifies the actual outgoing transition start before calculating safety margins.

## Source clips

| Project                | Family          | Source range used |
| ---------------------- | --------------- | ----------------: |
| Agent Recall           | System proof    |    16.200-18.033s |
| Health AI Search Audit | System proof    |    15.800-17.633s |
| Palabruno              | Product journey |    12.800-14.633s |
| Casamo                 | Product journey |    22.800-24.633s |
| Maximo Interiorismo    | Visual showcase |      5.500-7.333s |
| Redwriter Comics       | Visual showcase |     9.400-11.235s |

Only public portfolio assets are used. The frozen excerpts under `assets/clips/` are silent H.264 files at 30fps.

## Visual review

- Read each sentence once at normal speed without pausing.
- Confirm that the sentence remains the clear focal point after it settles.
- Confirm that graphical chrome contains no undeclared words.
- Confirm that the outgoing transition does not cover the scene before its declared reading-window end.
- Check the six proof cuts for intact 16:9 framing and recognizable evidence.
- Check every transition boundary and the final five-second hold.
- Confirm no private data, unsupported claim, missing asset, clipped text, or interface overlap appears.
