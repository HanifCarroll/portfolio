# Design

## Style Prompt

Use a controlled local-bridge style that matches the portfolio's project-video system: quiet off-white canvas, deep terminal slate, ink text, restrained green and cyan accents, command rails, route cards, and explicit ownership boundaries. The video should feel like a practical product demo for a local workflow tool, not a generic chat-bot promo. The copy stays plain: problem, ownership, bridge, routing, approval, result.

## Colors

- Canvas: `#eef2ed`
- Panel: `#fbfcf8`
- Ink: `#14211c`
- Muted text: `#52625a`
- Border: `#d3ddd5`
- Deep slate: `#101820`
- Terminal slate: `#121c24`
- Accent green: `#1f6f55`
- Accent soft: `#dfeee7`
- Route cyan: `#18a7d8`
- Approval amber: `#c7862f`

## Typography

- Display: `Georgia`, serif
- Interface/body: `Avenir Next`, `Helvetica Neue`, sans-serif
- Command/data labels: `SF Mono`, `Menlo`, monospace

## Motion

- Six scenes, `44s` total.
- Use push transitions for related handoffs and one blur crossfade for the route-map reveal.
- Entrances use varied direction, opacity, scale, and rule reveals.
- Keep the public terminal surface readable whenever it appears.
- Keep route and approval labels synthetic and sparse.
- Hold the final end card for `2.8s` before the fade.

## What NOT to Do

- Do not show bot tokens, raw thread ids, private messages, real handles, local paths, database rows, or runtime state.
- Do not make Telegram or Discord look like the system of record.
- Do not use neon, purple-blue gradients, or generic dark SaaS styling.
- Do not make the video a title-card sequence only; the public terminal surface and routing diagram must carry proof.
- Do not use jump cuts between scenes.
- Do not introduce stack names, API payloads, WebSocket details, command output beyond public command names, or test output as main copy.
