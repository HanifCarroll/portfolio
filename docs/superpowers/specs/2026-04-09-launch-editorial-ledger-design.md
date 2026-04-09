# Launch Page Editorial-Ledger Redesign

Date: 2026-04-09
Page: `/launch/`
Status: Approved design direction, ready for implementation planning

## Goal

Redesign the services page so it reads as a commercially credible service business for nontechnical founders and founder-led teams, without the current conflict between:

- a global blueprint/grid background
- open editorial text sitting directly on that background
- heavy framed cards with brutalist weight

The new page should feel authored, precise, and trustworthy. It should keep personality, but remove the sensation that readability fixes are being layered on top of an incompatible visual system.

## Direction

The approved direction is an **editorial-ledger** system used across most major sections.

This means:

- the page stops using the global grid as a dominant reading plane
- the visual identity comes primarily from typography and layout rhythm
- most major sections use a split composition with a main narrative column and a narrower context column
- framing stays light and intentional
- strong containment is reserved for only a few high-emphasis moments

Working metaphor:

`A service page with editorial intelligence`, not a developer portfolio and not a magazine experiment for its own sake.

## Core Principles

1. **Typography does most of the work**
   Large uppercase display type carries the main argument.
   Reading copy must feel calmer, more literate, and easier to scan.

2. **Layout creates the personality**
   The page earns its identity through asymmetry, side context, and ledger-style rows rather than through decorative backgrounds or frequent heavy cards.

3. **Commercial clarity wins**
   Every section should help a buyer understand what is offered, whether it fits, why it is credible, and what happens next.

4. **Framing is light by default**
   Thin rules, quiet borders, and composed section bands replace thick shadows and default boxed-card treatment.

5. **Mono utility text becomes rare**
   Mono remains for section markers and sparse metadata. It is no longer the default style for support copy under important content.

## What Gets Removed

- page-wide drafting grid on `/launch/`
- the current patchwork of open text, quiet surfaces, and heavy cards competing on the same page
- repeated tiny uppercase mono support text under key content
- thick brutalist shadows or heavy boxed framing as the default section treatment

## What Stays

- strong uppercase headline language
- black / warm off-white / blue accent palette
- mono section labels such as `// Services` and offer markers
- a small number of stronger contained elements for commercial emphasis

## Visual Language

### Background

- warm, mostly flat page background
- no dominant global grid
- any texture must be extremely subtle and local, not structural

### Typography

- **Display**: large uppercase, compressed feel, assertive but controlled tracking
- **Body**: calmer reading face with more natural line rhythm
- **Mono**: only for labels, indexes, and sparse metadata moments

### Framing

- thin rules and light borders
- larger section bands or sheets instead of repeated heavy cards
- stronger containment only for pricing, guarantee, or one high-trust proof moment

### Color

- black for primary type
- warm off-white for page surfaces
- blue as accent for labels and a few emphasis moments
- contrast should come from hierarchy and composition first

## Page System

Most major sections should follow a ledger composition:

- **main column**: argument, narrative, core offer detail
- **context column**: price signal, fit note, trust note, commercial framing, or summary metadata

Not every section must be split identically, but the page should clearly repeat one compositional grammar instead of inventing a new pattern per block.

## Launch Page Structure

### 1. Header / Breadcrumb

- keep minimal
- lighter visual weight than now
- should not compete with the hero

### 2. Hero

Replace the current open hero with a ledger split.

Left column:

- `// Services`
- main headline
- one supporting paragraph
- primary and secondary CTA

Right column:

- timeline
- starting price points
- fit summary or who-it-is-for note

Design intent:

- the current metadata under the buttons becomes structured side context instead of weak post-CTA support text

### 3. Proof

Two layers:

1. short trust row
   - left: one concise trust statement
   - right: metrics and prior-company proof
2. testimonial row
   - one spacious founder quote block with editorial weight

The current `Previously at...` treatment should either move into the trust row or be cut.

### 4. Offer Chooser

Keep two offers only:

- The 4-Week Launch
- Workflow Automation & AI

Each should feel like an editorial commercial entry, not a generic promo card.

Each offer includes:

- label
- title
- one-sentence framing
- two to three bullets
- compact commercial note such as starting price or engagement model

### 5. MVP Detail Section

Structure:

1. intro row
   - left: offer marker and title
   - right: narrative explanation
2. structured scope row
   - best for
   - included
   - starting price
3. process row
   - numbered ledger entries for the 4-week flow

The section should feel like one composed system, not intro text followed by a separate heavy card and then a separate process panel.

### 6. Automation Detail Section

Use the same page grammar as MVP.

Structure:

1. intro row
2. audit / scope row
3. signals row
4. build tracks row
5. examples row
6. process row

The layout can vary, but it must still feel like one consistent editorial system.

### 7. Guarantee

Keep as one of the few stronger contained elements.

Reason:

- it behaves like a formal commitment
- stronger framing helps separate it as a contractual assurance

### 8. FAQ / Objections

Rebuild as repeated ledger rows:

- left: objection title
- right: answer

No accordion behavior and no extra heavy paneling by default.

### 9. Final CTA

Return to a strong split layout.

Left column:

- invitation
- direct commercial framing

Right column:

- booking details
- availability note
- optional timeline / fit reminder

The close should feel decisive and commercially confident.

## Component Guidance

### Use light framing for:

- proof rows
- offer chooser entries
- process rows
- FAQ rows
- side-context rails

### Use stronger framing for:

- one main pricing / scope block per offer
- guarantee
- possibly one testimonial block

### Avoid:

- introducing a new panel style for every section
- stacking multiple surface systems in one viewport
- placing dense support copy directly on decorative backgrounds

## Mood and Positioning Check

The resulting page should feel:

- authored
- commercially credible
- direct
- precise
- calmer than the current system

The resulting page should not feel:

- hacker-brutalist
- over-designed magazine art direction
- generic startup minimalism
- luxury branding

## Implementation Constraints

- prioritize `/launch/` first
- remove the global grid treatment from this page
- preserve current copy unless a later content pass changes it intentionally
- favor simple reusable layout patterns over custom section-by-section one-offs
- do not reintroduce readability patches that fight the new system

## Success Criteria

The redesign succeeds if:

- the page reads as one coherent visual system from hero to final CTA
- major sections feel related rather than stylistically switched
- support copy is easy to read without extra local patches
- the page still feels distinctive and authored
- the commercial path becomes clearer for nontechnical founders and founder-led teams

## Open Implementation Decision

The design direction is resolved.

The remaining implementation decision is tactical:

- whether to rebuild `/launch/` directly in one pass
- or first create a cleaner base set of page-level layout utilities that the page can compose from

That decision belongs in implementation planning, not in the design direction itself.
