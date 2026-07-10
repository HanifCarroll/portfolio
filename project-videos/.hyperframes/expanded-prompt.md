# Expanded Production Prompt: Portfolio Project Video System

## Title And Style

Build a reusable 16:9 HyperFrames system for portfolio proof videos. Use the exact per-project colors and fonts declared in `project-videos/<slug>/video.json`, governed by `project-videos/frame.md`. The visual world is an editorial evidence cabinet: real screens and artifacts are mounted, labeled, connected by rails, and held long enough to inspect.

## Rhythm

- Standard: `problem-build-build-PROOF-result-hold`.
- Short: `hook-build-PROOF-result-hold`.
- Loop: `reveal-showcase-action-hold`.

## Global Direction

- Canvas: project theme color with grid texture and edge framing.
- Typography: project display font for claims, body font for explanation, mono font for manifest-declared labels.
- Density: background texture, primary proof, secondary structural proof, and graphical chrome in every scene. Chrome must not introduce viewer-facing vocabulary.
- Primary transition: horizontal push, `0.5s`, `power3.inOut`.
- Accent transition: scale dissolve, `0.5s`, `power2.inOut`, at the proof or result shift.
- Motion is deterministic and seekable. Use explicit `fromTo()` entrances and finite ambient movement.
- Screenshots enter within the first second, settle, and remain readable for the breathe phase.

## Scene Beats

### Problem

Concept: Show the messy starting state as a real operational tension rather than an abstract slogan. Copy anchors one side; labeled fragments, the public product surface, or an evidence card occupies the other.

Depth: BG grid, ghost motif, edge panels. MG copy and proof fragments. FG nonverbal rule and optional manifest-declared labels.

Choreography: headline SLIDES, rule DRAWS, fragments ASSEMBLE from mixed directions, background DRIFTS. Transition with a push.

### Context

Concept: Make the practical cost or decision visible. The frame feels like a case file opening: one concrete question, state, or user need becomes the focus.

Depth: BG paper/grid texture and one offset color panel. MG screenshot or report crop with supporting copy. FG registration marks plus an optional manifest-declared orientation label.

Choreography: proof surface SETTLES with a slight perspective change; any manifest-declared labels LOCK IN; one edge panel FLOATS. Push or vertical push into the next action.

### Action Or Workflow

Concept: Show what the product or system actually does. Use a rail, steps, screens, or compact evidence cards so the viewer can name the transformation.

Depth: BG route/grid. MG proof surface and action nodes. FG nonverbal rule and only manifest-declared labels.

Choreography: rail DRAWS, nodes STEP in under 500ms total stagger, product surface SLIDES and settles, one accent PULSES. Push to related work; dissolve if the next beat changes register.

### Evidence Or Report

Concept: Move from claim to inspectable proof. The artifact should feel mounted for review, with a clear callout to the result, guardrail, finding, or report.

Depth: BG deep proof panel and subtle grid. MG large artifact frame. FG only manifest-declared labels or a source-backed stat.

Choreography: frame EXPANDS, image CLARIFIES, any declared evidence LOCKS IN, background rail BREATHES. Scale-dissolve into the result.

### Result

Concept: Hold the saved state or outcome and state why it matters in plain language. Use the strongest safe proof asset with minimal supporting labels.

Depth: BG project canvas and motif. MG result artifact plus conclusion copy. FG border marks and only essential manifest-declared evidence.

Choreography: result surface SETTLES, conclusion ASSEMBLES, ambient motion slows. Gentle push or dissolve into the ending.

### End

Concept: A clean cabinet card for the project. Its explicit manifest fields state the project name and one short result line; it makes no new claim.

Depth: BG project canvas and family motif. MG explicit manifest eyebrow, headline, and optional safe project image. FG rule and registration marks.

Choreography: name SLIDES, rule DRAWS, result FLOATS into place. Settle within 0.5 seconds, then hold through the end.

## Recurring Motifs

- Nonverbal rule in the upper-left.
- Registration marks at opposite corners.
- One rule that grows from the copy toward the proof surface.
- Family motif geometry behind the content: rails for system proof, a path for product journey, and a gallery frame for visual showcase.
- Manifest-declared labels use the project mono font and full-strength accent color.

## Editorial Contract

Use `silent-proof-v1`, implementing editorial standard `silent-designed-video-v1` with tokenizer `whitespace-v1`. `intent` guides the scene but never renders. Give every text element one canonical role: `primary`, `supporting`, `orientation`, or `status`. Count rendered text by trimming each field, splitting on one or more whitespace characters, and removing punctuation-only tokens. Hold copy long enough after the final text entrance and before the outgoing transition starts: at least `2s` settled hold, `0.75s` reading margin for story scenes, and `0.5s` for the ending at `140 WPM`. Never synthesize scene numbers, family names, scene kinds, proof-header text, fallback steps, or end-card copy.

## Negative Prompt

Avoid centered web-hero layouts, identical card grids, tiny UI, flat backgrounds, generic gradients, decorative-only motion, title-card sequences, invented metrics, private data, and technical implementation language that a hiring manager cannot parse quickly.

## Approval

The user explicitly requested the full build and regeneration, so construction may proceed from this production breakdown without an additional approval stop.
