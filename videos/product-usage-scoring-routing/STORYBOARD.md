---
format: 1080x1080
duration: 41s
message: "A transparent routing system can turn noisy product and intent signals into an inspectable weekly action queue without hiding policy decisions."
arc: "BAB + Demo Loop (value-first): hook → outcome → compare → inspect → control → CTA"
audience: prospective B2B SaaS consulting clients
mode: autonomous
music: "restrained minimal tech underscore; low, unobtrusive"
---

# Video direction (whole-project invariants — load-bearing)

- **Palette system (exact frame.md tokens, never invented):** universal ground `{colors.bg}` `#F6F7F9`; surfaces `{colors.card-bg}` white `#FFFFFF` with `{colors.border}` `#E3E6EB` 1–1.5px borders, 6px radius, **no shadows**; ink text `{colors.text}` `#1E2430`; secondary `{colors.text-muted}` `#576071`; the single accent `{colors.primary}` cobalt `#2F5BD9` reserved for eyebrows, numerals, CTAs, bar fills, progress bar, 4px rules — never headlines. `{colors.cobalt-strong}` `#2447AD` hover/active only; `{colors.cobalt-soft}` `#EAF0FD` selected rows / soft fills; `{colors.positive}` `#1F7A43` / `{colors.negative}` `#B42318` inline directional chips only, never fills. Atmosphere (diagonal panel, dot grid, concentric rings) on the hook and CTA frames **only**.
- **Typography roles (frame.md ramp):** display/numerals Inter 600–700 ink near-black, −0.02em; eyebrows `h4-eyebrow` (0.8cqw, 600, 0.08em tracking, uppercase, cobalt); numerals `metric-value`/`stat-num` cobalt; body Inter 400 secondary `#576071`, line 1.6, ≥1.4cqw legibility floor on any load-bearing line. Headlines ink, never cobalt; numerals scale to card size.
- **Components:** `card-tinted`/`metric-card` flat white 6px cards; `tag-pill` cobalt text on `accent-light` `rgba(47,91,217,0.08)`; the one solid `cta-button` cobalt; `accent-line` 60×4; `bar-track` cobalt fill on `accent-light` 28px track; `split-highlight` cobalt-soft with 4px cobalt left rule; 3px cobalt `progress-bar` bottom edge. Container law: every frame root `container-type: size`; sizes in `cqw`/`cqh`, never `vw`.
- **Motion grammar + reveal model:** long-tail eases — `power3` default, smooth over bouncy; **VO-paced sequential reveal** — at `t=0` only what the spoken line is saying enters, and every further piece (a line, a card, a numeral, a control) reveals **on its spoken cue across the back ~50%**; never front-load. Holds end on stillness — at most **subtle jitter** (`sine-wave-loop`, low amplitude); no lazy breathing, no back-half pan/push. All motion seek-safe: `fromTo` entrances, no `Math.random`/`Date.now`, no `repeat:-1`.
- **Rhythm / held-frame allocation:** Frames 3 and 5 are the **held reads** — after their reveals resolve, each lands still so the routing numbers (F3) and the control semantics (F5) read clean against the intervening motion; frames 1, 2, 4 keep reveal-driven energy. Frame 4 is the densest (decision packet inspect); frame 6 is the calm end-card.
- **Negative list:** no second accent, no cobalt headlines, no shadows, no uppercase body, no Inter substitute; no forward-declared metrics — every numeral traces to the script or renders `— figure —`; no invented "business impact" claims (all routing figures are the product's **synthetic demonstration** data and render as such). **Failure modes to avoid:** slideshow (everything dumped in the first ~25% then frozen) and screensaver (elements floating independently / lazy breathing).
- **Caption keep-out:** the bottom ~17% of the 1080×1080 canvas (≈ first 184px from bottom) is reserved for the caption pill; plan all load-bearing content into the **top ~83%** on every frame. Holds even when captions are off — bottom-edge consistency.

---

## Frame 1 — Noisy signals, missed action

- scene: Signal words pile up alone on a light canvas, then the queue line reads the pain
- voiceover: "These signals pile up — product usage, intent, noise. The weekly queue arrives late, or unexplained."
- duration: 6.997s
- transition_in: cut
- status: animated
- src: compositions/frames/01-noise-to-queue.html
- type: hook
- persuasion: Pain validation
- beat: frustration + overwhelm
- blueprint: kinetic-type-beats
- asset_candidates: assets/live-full-page.png — dim whole-interface reference, backdrop only

narrativeRole: Names the viewer's everyday reality in their own language — scattered product-usage and intent signals, a queue that arrives late or without explanation — so the promise (beat 2) has something to resolve.
keyMessage: Raw signals alone don't produce action; a queue that is late, noisy, or unexplained is the real cost.

Blueprint-shape note: 3–5 short pain statements landing solo on a bare canvas, resolve on the queue line (Adapt keeps the kinetic-type word-swap signature; no product surface yet — live-full-page is a dimed atmosphere backdrop only).
Scene 1 (0.0–4.0s): light-gray ground (`#F6F7F9`) with the clipped diagonal cobalt-tint panel on the right + a 3×3 cobalt dot grid (cover atmosphere, cover treatment on 1:1 = title upper, dots corner). As the VO names each, three ink near-black `h3` words land alone, center-left, via **per-word staggered reveal** (`discrete-text-sequence`) on a smooth `power3` settle — "product usage" (≈1.4s), "intent" (≈2.4s), "noise" (≈3.0s) each on its own spoken beat. Still holds between the word swaps; sparse, upper-third hierarchy.
Scene 2 (4.0–5.9s): as the VO pivots to the queue, a `split-highlight` block (cobalt-soft, 4px cobalt left rule) slides in lower-left with "late · noisy · unexplained" — a **in-place token cycle** (`discrete-text-sequence`) swaps the three words as each is spoken; the live-full-page backdrop dims to ~30% behind it. Ink words dominate; cobalt only on the 4px rule.
Scene 3 (5.9–6.997s): the highlight block settles and holds **still** — no drift, no breathing; the single cobalt progress bar advances through the line's close ("or unexplained"). This is a deliberate lead-in read: the pain lands and the frame exits via the cut.

## Frame 2 — One surface: the weekly Work Queue

- scene: The Work Queue surface appears; a cursor sweeps to the routed row
- voiceover: "One transparent surface — a weekly work queue. 120 accounts, routed to the right owner."
- duration: 6.528s
- transition_in: crossfade
- status: animated
- src: compositions/frames/02-work-queue.html
- type: feature_showcase
- persuasion: Friction reduction
- beat: relief + control
- blueprint: cursor-ui-demo
- asset_candidates: assets/queue.png — weekly Sales & CS action queue screenshot, hero surface

narrativeRole: Delivers the video's promise (an inspectable weekly action queue) by putting the one outcome-surface on screen — the noise from Frame 1, now one decided list.
keyMessage: A single transparent Work Queue turns scattered signals into concrete, routed weekly actions.

Blueprint-shape note: cursor sweeps in to introduce the surface (Adapt keeps the surface-demo signature; no typed workflow — the queue is a settled view). Focal: `assets/queue.png` as the hero surface.
Scene 1 (0.0–1.8s): slide-header rhythm (cobalt eyebrow "WEEKLY WORK QUEUE" + a `tag-pill` right labelled "northfield_v1"); below it the Work Queue screenshot `assets/queue.png` enters as a flat white 6px card with a simple smooth opacity-and-scale entrance (fade in while easing to final scale, `power3`) at ~55% width, left-anchored. Only what the VO names first — the surface ("one transparent surface") — enters here; nothing else yet.
Scene 2 (1.8–5.1s): as the VO says "120 accounts, routed", a **value-scaled counter** (`counting-dynamic-scale`) ticks 0→120 in a cobalt `metric-value` chip over the card's table header, and the caption line "1–10 of 120 accounts" becomes the visible evidence. A custom **cursor click + ripple** (`cursor-click-ripple`) travels from the left to the routed row and, as part of that cursor click, selects it with a cobalt-soft `#EAF0FD` fill — the row highlight is the mid-shot cue.
Scene 3 (5.1–6.2s): the selected account row (e.g. VexNal Cloud, route "Hand raiser", owner "Commercial AE", SLA "1 business hour") is held and reads; a `split-highlight` callout (4px cobalt rule) beside the card restates "routed · SLA · owner" as the VO closes ("the right owner"). Reveal lands in the back half, not at t=0.
Scene 4 (6.2–6.528s): **held read** — the queue card, callout, and selected row hold fully still; the progress bar advances. Exits via crossfade. (Queue surface continues into Frame 3 — see `handoff_out`.)

handoff_out: queue card `assets/queue.png` — x 4cqw (left edge), y 14cqh, scale 0.72, opacity 1.00; direction 0 (stationary); selected account row VexNal Cloud highlighted cobalt-soft `#EAF0FD` at row y ≈ 46cqh; speed 0 — held static at the cut.

## Frame 3 — Gated policy vs naive score

- scene: Two routing labels side by side with their counts; gated defers 13
- voiceover: "Same capacity. The gated policy qualifies 25, routes 12, defers 13. No gates."
- duration: 7.168s
- transition_in: crossfade
- status: animated
- src: compositions/frames/03-policy-vs-naive.html
- type: feature_showcase
- persuasion: Negative contrast
- beat: clarity
- blueprint: comparison-split
- asset_candidates: assets/policy.png — routing/rating policy view, gated-policy visuals; assets/queue.png — the same weekly queue at the same capacity
- focal: assets/policy.png

narrativeRole: Shows the thing that makes this transparent — a gated policy vs a naive combined score at identical capacity — so the viewer sees gating is what produces the decided, deferred, explainable queue.
keyMessage: A gated policy holds 25 qualified, routes 12, defers 13 — with gates named; the naive score offers no explicit gates to explain its calls.

Blueprint-shape note: two paired items of equal weight enter from opposite wings with mirrored book-open tilts and hold side-by-side, each punctuated by a badge (Adapt keeps the paired comparison + badge-punctuation signature; one pair, not a >2 grid). Enter from the same queue surface that closed Frame 2.
Scene 1 (0.0–2.0s): the Work Queue card `assets/queue.png` from Frame 2 resolves into Frame 3's stage — a `split-tilt-card` **split-screen 50/50** with "GATED POLICY" (left) vs "NAIVE SCORE" (right): two flat white 6px cards enter from opposite wings with mirrored book-open tilts (`split-tilt-cards`, `power3`), heads in thin `tag-pill`s — left tag "northfield_v1 · gated", right tag "combined_score_naive_v1". Only the two heads enter at t=0.
Scene 2 (2.0–4.9s): as the VO names each figure, the left card builds **25 → 12** as labelled `stat-num` cobalt numerals (qualified · routed · deferred) via **per-word staggered reveal** (`dynamic-content-sequencing`) with a **bars/progress fill** (`stat-bars-and-fills`) capacity bar pinned at the same width on both sides — the "same capacity" cue. Keep the reveal sparse: each numeral arrives on its spoken cue ("qualifies 25" ≈3.4s, "routes 12" ≈4.5s).
Scene 3 (4.9–7.0s): right card contrasts: a 100% routed-yield fill and a "no gates" line; a cobalt `split-highlight` band (4px left rule) underlines "deferred 13" on the left as the difference ("defers 13" ≈5.0s, "No gates" ≈6.5s). A muted one-to-two-line note ("100% yield: all 12 routed carry synthetic positives — small-sample artifact") lands under the naive card's capacity bar (revealed ≈6.35s) so the naive yield cannot be misread as the recommended winner. The comparison holds.
Scene 4 (7.0–7.168s): **held read** — both cards settle and read still (subtle jitter only); the 25/12/13 numerals are the enduring visual. This is a designated held frame for the routing math. Exits via crossfade into the decision packet. (`handoff_out` hands the account row → decision packet.)

handoff_in: queue card `assets/queue.png` from Frame 2 — arrives at x 4cqw, y 14cqh, scale 0.72, opacity 1.00; selected row VexNal Cloud, cobalt-soft fill, at row y ≈ 46cqh; enters stationary then splits into the two comparison cards.
handoff_out: the selected account row (VexNal Cloud · route "Hand raiser") at x ≈ 46cqw, y ≈ 46cqh, scale 1.0, opacity 1.00; cobalt-soft `#EAF0FD` selected fill; speed 0 — the row handoff is a cut-stitch seam into the decision packet.

## Frame 4 — Inspect a decision packet

- scene: A decision packet opens; evidence, gates, and the rejected naive alternative read
- voiceover: "Why this route? Intent explicit — a hand raiser. The naive score: 47, and said no."
- duration: 6.229s
- transition_in: push-slide LEFT
- status: animated
- src: compositions/frames/04-decision-packet.html
- type: feature_showcase
- persuasion: Show-don't-tell proof
- beat: trust
- blueprint: cursor-ui-demo
- asset_candidates: assets/decision-packet.png — scoring/routing rationale screenshot, hero
- focal: assets/decision-packet.png

narrativeRole: Proves the "explainable" claim by letting the viewer read an actual decision's rationale — the gates, the decisive evidence, and the rejected alternative — rather than asserting it.
keyMessage: Every route is inspectable: the fit/usage/intent gates, the decisive evidence, and the alternative the naive score got wrong.

Blueprint-shape note: cursor opens into and reads a real product surface (Adapt keeps the surface-demobetween-wings feel; the "response" here is the packet's evidence rows). Focal: `assets/decision-packet.png` as the hero.
Scene 1 (0.0–1.4s): the frame enter is the queue-to-packet seam: the account row selected in Frame 3 hands off, and the decision-packet screenshot `assets/decision-packet.png` reveals with a simple smooth scale-and-opacity entrance (fade in while easing to final scale, `power3`) as a flat white 6px card at ~60% width, left-anchored, header eyebrow "ROUTING DECISION" + tag-pill "northfield_v1". A **cursor click + ripple** (`cursor-click-ripple`) presses the account row into the open packet on "Why this route?" — the seam reads as one continuous inspect.
Scene 2 (1.4–3.5s): as the VO names the gates, three score cells reveal sequentially as timed reveals — Fit (ICP) **Medium**, Product usage **Low**, Buying intent **High** — each a `tag-pill` on accent-light; the "Buying intent — High" cell is **highlighted** with a cobalt `asr-keyword-glow` style emphasis (glow+scale on the accent) exactly as "intent explicit — a hand raiser" is spoken (≈1.5–3.5s).
Scene 3 (3.5–6.0s): the "Routing decision" block lands: Route **Hand raiser**, SLA 1 business hour, and the reason line "In-window explicit sales request prompts human review" as a `split-highlight` callout (4px cobalt rule). Then the rejected alternative — a muted `split-highlight` (border-left, muted text) reads "naive combined score 47 < 60 — did not qualify", revealing on "The naive score: 47, and said no." (≈3.7–6.0s).
Scene 4 (6.0–6.229s): **held read** — the packet with its decisive-evidence callout and the muted rejected line holds still; trust is carried by stillness, not motion. Exits via push-slide into the scenario controls. (`handoff_out` keeps the policy surface → Frame 5's controls.)

handoff_in: from Frame 3 — the selected account row (VexNal Cloud · route "Hand raiser") arrives at x ≈ 46cqw, y ≈ 46cqh, scale 1.0, opacity 1.00 with its cobalt-soft `#EAF0FD` fill intact, then depresses into the decision-packet card at x 20cqw, y 16cqh, scale 0.70, opacity 1.00; the row→packet morph is a cut-stitch seam (row depresses into the open packet).
handoff_out: decision-packet card → the policy surface `assets/policy.png` resolves at x 20cqw, y 16cqh, scale 0.70, opacity 1.00; speed 0 — the surface holds still and Frame 5 reveals the controls on it.

## Frame 5 — Scenario controls, not universal answers

- scene: Two controls adjust the queue live; overflow stays deferred
- voiceover: "An intent minimum, a weekly capacity — bounded scenario controls. Overflow stays visibly deferred."
- duration: 7.36s
- transition_in: zoom-through
- status: animated
- src: compositions/frames/05-scenario-controls.html
- type: feature_showcase
- persuasion: Risk reversal
- beat: control + ease
- blueprint: panel-edit-live-sync
- asset_candidates: assets/policy.png — policy view carrying the intent-minimum and capacity controls
- focal: assets/policy.png

narrativeRole: Frames the intent minimum and weekly capacity as honest, bounded scenario controls — not universal thresholds — so the system is usable without over-claiming what it proves.
keyMessage: The intent minimum and weekly capacity are adjustable scenario controls; capacity changes prioritization only, and overspill stays visibly deferred.

Blueprint-shape note: a control panel bound to a target surface updates live with the drag (Adapt keeps the live couple — "change this, watch the queue change"; no universal-threshold claim). Focal: `assets/policy.png` carrying both controls.
Scene 1 (0.0–2.0s): the policy surface `assets/policy.png` resolves from Frame 4's seam as a flat white 6px card at ~60% width; slide-header eyebrow "SCENARIO CONTROLS" + tag-pill "autonomous". A `panel-edit-live-sync` couple frames: the two labelled controls — "Acquisition intent minimum" and "Weekly human-action capacity" — seat left as bent sliders as the VO names them (~0.2–2.7s), only the headers entering at t=0.
Scene 2 (2.0–4.9s): as the VO says "bounded scenario controls" (≈2.8–4.9s), an **in-place token cycle** (`discrete-text-sequence`) swaps the capacity value (e.g. 120) and the intent-minimum value; a **cursor drag** (`cursor-drag`) scrubs the capacity slider and the coupled queue readout on the surface updates **live in the same beat** (`control-target-sync`) — the "bounded scenario controls" message.
Scene 3 (4.9–6.3s): the payoff — a cobalt `split-highlight` (4px left rule) beside the surface reads "capacity changes prioritization only"; the overflow renders as a visibly **deferred** chip (`tag-pill` on accent-light) that does not disappear — "overflow stays visibly deferred" (≈5.1–6.3s). No universal-threshold claim is made; the copy is scoped to the two controls.
Scene 4 (6.3–7.36s): **held read** — the controls and the deferred-overspill chip settle and read still (subtle jitter only); this is the second designated held frame, giving the control semantics room. Exits via crossfade into the close.

handoff_in: from Frame 4 — the policy surface `assets/policy.png` arrives at x 20cqw, y 16cqh, scale 0.70, opacity 1.00; Frame 5 reveals the intent-minimum and capacity controls on it (no position change).

## Frame 6 — Open it

- scene: A calm closing card: case study and live demo CTAs
- voiceover: "Open the full case study. Explore the live demo. Watch the routing, decision by decision."
- duration: 6.357s
- transition_in: crossfade
- status: animated
- src: compositions/frames/06-cta.html
- type: cta
- persuasion: Future pacing
- beat: urgency-to-act + clarity
- blueprint: titlecard-reveal
- asset_candidates: assets/live-full-page.png — dim whole-interface reference, backdrop only
- focal: assets/live-full-page.png

narrativeRole: Closes the loop with two concrete, low-hype next actions — read the case study, run the live demo — inviting inspection rather than selling a result.
keyMessage: The transparent routing system is open for inspection: read the case study or explore the live demo.

Blueprint-shape note: a calm end-card — 2–3 near-still closing phrases hard-cut in sequence, terminating on the held ask (Adapt keeps the restrained card-chain signature; low motion is the confidence). Closing treatment: centered, concentric rings, one cobalt CTA.
Scene 1 (0.0–1.6s): light-gray ground with faint **concentric closing-rings** (closing atmosphere, centered) + a thin cobalt `accent-line` (60×4) above an ink `h2` — "Routing you can open." — via **waterfall-entry** (`waterfall-entry`, smooth `power3`). Only the headline enters at t=0; nothing else yet.
Scene 2 (1.6–3.8s): as the VO names the actions, two flat white 6px cards stack center — "Open the case study" (anchored by `assets/policy.png` thumbnail + the `decision-packet` evidence, on "case study" ≈2.0s) and "Explore the live demo" (anchored by `assets/live-full-page.png` thumbnail, on "live demo" ≈2.9s) — each entering via **spring-pop entrance** (`spring-pop-entrance`) on its own spoken cue, staggered.
Scene 3 (3.8–6.357s): the two action cards resolve and hold as the still end-card; one solid cobalt `cta-button` sits centered beneath on the last cue ("decision by decision" ≈4.9–6.2s) carrying the readable case-study URL — `hanifcarroll.com/case-studies/product-usage-scoring-routing/` (not a bare unclickable label; the actual URL is legible on the final frame); at most **subtle jitter** (`sine-wave-loop`) keeps the rings ambient. Final frame — the only frame with a true exit hold. Progress bar reaches full.
