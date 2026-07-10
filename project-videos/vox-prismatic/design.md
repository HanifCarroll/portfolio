# Design

## Style Prompt

Use a crisp content-operations product style that matches Vox Prismatic's black-and-white interface while making the video frame feel intentional: white work surfaces, ink text, bright review green, clear blue proof highlights, and operational rails. The copy should stay short, plain, and nontechnical. Structure the video as a short workflow demo: problem, manual bottleneck, product workflow, review step, useful result, and held ending.

## Concept Angle

Long transcripts are treated like raw material moving through a content operations line: extract useful moments, shape them into drafts, review hooks, and schedule only the pieces a person approves.

## Colors

- Canvas: `#f3f7f6`
- Surface: `#ffffff`
- Ink: `#15171d`
- Muted text: `#5f6470`
- Border: `#d9dee7`
- Review green: `#00a871`
- Review soft: `#e9f8f2`
- Proof blue: `#0b72b9`
- Proof soft: `#e8f4fd`
- Deep frame: `#17181f`
- Warning amber: `#c78320`

## Typography

- Display: `Archivo Black`, sans-serif
- Interface/body: `Montserrat`, sans-serif
- Data/labels: `Space Mono`, monospace

## Motion

- 33 seconds total.
- Medium-energy workflow-demo pacing.
- Use push slides between adjacent story points and a blur crossfade into the result.
- Build each scene as a finished static layout first, then animate elements in with explicit `fromTo()` tweens.
- Keep product screenshots steady after entry so the viewer can inspect them.
- Use subtle ambient motion on background rails, transcript strips, and proof chips so the video does not feel like static slides.
- Hold the ending beat for the final `3s`; fade only near the very end.

## What NOT to Do

- Do not show stack names, provider names, schema names, API names, command output, or test counts on screen.
- Do not show account footer text, private email, local paths, credentials, tokens, cookies, or unpublished transcript data.
- Do not make the video a title-card sequence only; the product screenshots must carry proof.
- Do not use neon, purple-blue gradients, or generic dark SaaS styling.
- Do not use jump cuts between scenes.
