# LinkedIn Project Video Workflow Reel

Square HyperFrames proof reel for the LinkedIn post about rebuilding the portfolio video process around one shared template system.

## Contract

- `1080x1080`, 30fps, 45.5 seconds, silent MP4.
- Six public project examples cover all three story families.
- The story distinguishes AI judgment, deterministic software, and the required human visual/privacy gate.
- Project footage remains intact inside 16:9 proof windows.
- `editorial.json` declares each scene intent, every renderer-created text element and canonical role, every text entrance, and the reading-window end. The local checker verifies the window against the actual outgoing transition before enforcing the `silent-proof-v1` reading budget.
- Text timing is executable: declared elements carry `data-text-start` and `data-text-duration`, their GSAP entrances read those attributes, and the checker compares them with the editorial lock.
- EB Garamond, IBM Plex Mono, and Inter are bundled under `assets/fonts/` with unique internal family names, Fontsource provenance, and OFL-1.1 license files. Their exact bytes are part of the render source digest.
- A fresh render receipt leaves visual and publication review pending. A passed review can only be imported from explicit evidence whose reviewer, timestamp, source digest, and output digest match that exact revision.

## Commands

```bash
npm run check
npm run snapshot
npm run render:final
```

After reviewing the exact render at actual speed, create a review-evidence JSON file outside the render source and rerun the receipt writer:

```json
{
  "agentSnapshotReview": {
    "status": "passed",
    "reviewer": "reviewer name or agent ID",
    "reviewedAt": "2026-07-10T15:00:00.000Z",
    "revision": {
      "sourceDigest": "copy from render-receipt.json",
      "outputDigest": "copy from render-receipt.json"
    }
  },
  "humanPublicationReview": { "status": "pending" }
}
```

```bash
node scripts/write-render-receipt.mjs --review-file /absolute/path/to/review-evidence.json
```

The writer rejects passed or failed evidence without a reviewer and date, or when either digest differs. When evidence updates the same source/output revision, it preserves `renderedAt` and changes only `receiptUpdatedAt`. Keep human publication review pending until Hanif watches the exact output at destination size.

Read `frame.md`, `STORYBOARD.md`, `.hyperframes/expanded-prompt.md`, and `editorial.json` before editing the composition. Any copy or text-timing change must pass `npm run check:editorial`.
