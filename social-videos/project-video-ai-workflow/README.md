# LinkedIn Project Video Workflow Reel

Square HyperFrames proof reel for the LinkedIn post about rebuilding the portfolio video process around one shared template system.

## Contract

- `1080x1080`, 30fps, 39.5 seconds, silent MP4.
- Six public project examples cover all three story families.
- The story distinguishes AI judgment, deterministic software, and the required human visual/privacy gate.
- Project footage remains intact inside 16:9 proof windows.

## Commands

```bash
npm run check
npx --yes hyperframes@0.7.46 snapshot --at 2,6.25,11.25,17.25,21.4,23.25,25.1,26.9,28.75,30.6,33.5,37.5
npx --yes hyperframes@0.7.46 render --quality high --fps 30 --output ../../public/videos/social/project-video-ai-workflow-linkedin.mp4
```

Read `frame.md`, `STORYBOARD.md`, and `.hyperframes/expanded-prompt.md` before editing the composition.
