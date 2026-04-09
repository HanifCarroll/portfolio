# Launch Editorial-Ledger Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild `/launch/` around the approved editorial-ledger system so the page reads as a coherent, high-trust service page without the current global grid and readability patchwork.

**Architecture:** Add a page-scoped layout hook in `BaseLayout`, introduce a small set of reusable ledger layout primitives in `global.css`, then rebuild the `/launch/` hero, proof, offer, process, objection, and CTA sections to use that system consistently. Treat the current `quiet-surface` experiments as temporary scaffolding to replace, not preserve.

**Tech Stack:** Astro 5, Tailwind CSS utilities inside `src/styles/global.css`, Astro page templates in `src/pages/launch.astro`, static build verification with `astro check && astro build`

---

## File Map

### Modify

- `src/layouts/BaseLayout.astro`
  Add a page-scoped `bodyClass` prop so `/launch/` can opt out of the global drafting-grid treatment without affecting the rest of the site.

- `src/styles/global.css`
  Add the editorial-ledger primitives used by `/launch/`, including:
  - page-specific background override for `body.page-launch`
  - split row layout
  - context rail
  - light section band
  - strong emphasis panel
  - launch-specific typography helpers

- `src/pages/launch.astro`
  Replace the current mixed system with the approved editorial-ledger layout:
  - hero split
  - proof row + testimonial rhythm
  - offer chooser entries
  - MVP detail section
  - Automation detail section
  - guarantee
  - objections
  - final CTA

### Do Not Modify

- `src/pages/index.astro`
  Homepage direction is out of scope for this plan.

- `src/styles/global.css` global body grid for other pages
  The page-wide background rule remains for now outside `/launch/`; only `/launch/` opts out.

### Verification

- `bun run build`
- manual browser verification on `/launch/` at desktop and mobile widths

### Current State Note

`src/pages/launch.astro` and `src/styles/global.css` currently contain exploratory readability edits (`quiet-surface`, darker copy, hero metadata patch). These should be treated as disposable scaffolding. The redesign should remove or stop using them where the new system replaces them.

---

### Task 1: Add a page-scoped layout hook and neutralize the `/launch/` background

**Files:**
- Modify: `src/layouts/BaseLayout.astro`
- Modify: `src/pages/launch.astro`
- Modify: `src/styles/global.css`
- Test: `bun run build`

- [ ] **Step 1: Add `bodyClass` support to `BaseLayout`**

Replace the prop destructuring and `<body>` class usage with:

```astro
const {
	title,
	description,
	image,
	flushTop = false,
	showFooterCta = true,
	footerLinksOnly = false,
	padContentBeforeFooter = true,
	bodyClass = '',
} = Astro.props;
```

```astro
<body class:list={['font-sans', bodyClass]}>
```

- [ ] **Step 2: Pass the launch-specific body class from `/launch/`**

Update the `BaseLayout` call in `src/pages/launch.astro`:

```astro
<BaseLayout
	title={`${title} · Hanif Carroll`}
	description={description}
	showFooterCta={false}
	footerLinksOnly
	bodyClass='page-launch'
>
```

- [ ] **Step 3: Override the global grid for `body.page-launch`**

Add this block near the existing base `body` rules in `src/styles/global.css`:

```css
body.page-launch {
	background-color: #f4ede1;
	background-image: none;
}

:is(.dark) body.page-launch {
	background-color: #0d0d0d;
	background-image: none;
}
```

- [ ] **Step 4: Run build to verify the new page hook compiles**

Run:

```bash
bun run build
```

Expected:

- `0 errors`
- static build completes successfully

- [ ] **Step 5: Commit the page hook**

Run:

```bash
git add src/layouts/BaseLayout.astro src/pages/launch.astro src/styles/global.css
git commit -m "feat: add launch page-specific body styling hook"
```

---

### Task 2: Add the editorial-ledger CSS primitives

**Files:**
- Modify: `src/styles/global.css`
- Test: `bun run build`

- [ ] **Step 1: Add reusable ledger layout primitives**

Append these classes in the components layer of `src/styles/global.css`, near the existing card/panel classes:

```css
.ledger-section {
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	padding-block: 3rem;
}

.ledger-band {
	border: 1px solid rgba(0, 0, 0, 0.08);
	background: rgba(255, 255, 255, 0.36);
	padding: 1.5rem;
}

.ledger-split {
	display: grid;
	gap: 1.5rem;
}

.ledger-rail {
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	padding-top: 1rem;
}

.ledger-strong-panel {
	border: 1px solid rgba(0, 0, 0, 0.18);
	background: #fbf8f1;
	padding: 1.5rem;
}

.launch-display {
	font-family: var(--font-display, 'Syne', sans-serif);
	font-size: clamp(3.25rem, 8vw, 6.25rem);
	font-weight: 700;
	line-height: 0.9;
	letter-spacing: -0.075em;
	text-transform: uppercase;
	text-wrap: balance;
}

.launch-body {
	font-size: 1.125rem;
	line-height: 1.8;
	color: rgba(17, 17, 17, 0.78);
}

.launch-meta {
	font-family: 'IBM Plex Mono', ui-monospace, monospace;
	font-size: 0.75rem;
	line-height: 1.6;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: rgba(17, 17, 17, 0.64);
}

@media (min-width: 1024px) {
	.ledger-split {
		grid-template-columns: minmax(0, 1.08fr) minmax(16rem, 0.92fr);
		gap: 2rem;
	}

	.ledger-rail {
		border-top: 0;
		border-left: 1px solid rgba(0, 0, 0, 0.1);
		padding-top: 0;
		padding-left: 1.25rem;
	}
}

:is(.dark) .ledger-section {
	border-top-color: rgba(255, 255, 255, 0.12);
}

:is(.dark) .ledger-band {
	border-color: rgba(255, 255, 255, 0.1);
	background: rgba(255, 255, 255, 0.03);
}

:is(.dark) .ledger-rail {
	border-top-color: rgba(255, 255, 255, 0.12);
}

@media (min-width: 1024px) {
	:is(.dark) .ledger-rail {
		border-left-color: rgba(255, 255, 255, 0.12);
	}
}

:is(.dark) .ledger-strong-panel {
	border-color: rgba(255, 255, 255, 0.16);
	background: rgba(255, 255, 255, 0.04);
}

:is(.dark) .launch-body {
	color: rgba(255, 255, 255, 0.8);
}

:is(.dark) .launch-meta {
	color: rgba(255, 255, 255, 0.66);
}
```

- [ ] **Step 2: Add a utility for repeated ledger entries**

Add one more helper block for numbered/process and FAQ rows:

```css
.ledger-entry {
	display: grid;
	gap: 0.75rem;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	padding-block: 1rem;
}

@media (min-width: 768px) {
	.ledger-entry--process {
		grid-template-columns: 72px minmax(0, 1fr);
	}

	.ledger-entry--faq {
		grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
	}
}

:is(.dark) .ledger-entry {
	border-top-color: rgba(255, 255, 255, 0.12);
}
```

- [ ] **Step 3: Run build after adding the CSS primitives**

Run:

```bash
bun run build
```

Expected:

- build succeeds
- no Tailwind `@apply` errors

- [ ] **Step 4: Commit the ledger primitives**

Run:

```bash
git add src/styles/global.css
git commit -m "feat: add launch editorial-ledger layout primitives"
```

---

### Task 3: Rebuild the hero and proof sections around the ledger system

**Files:**
- Modify: `src/pages/launch.astro`
- Test: `bun run build`

- [ ] **Step 1: Replace the current hero with a ledger split**

Replace the existing `<header class='space-y-8'>...</header>` block with:

```astro
<header class='ledger-section border-t-0 pt-0'>
	<div class='ledger-split'>
		<div class='space-y-8'>
			<span class='section-label'>// Services</span>
			<h1 class='launch-display max-w-[10ch]'>Launch the product or fix the workflow.</h1>
			<p class='launch-body max-w-3xl'>
				I help nontechnical founders ship focused MVPs, and I help founder-led teams turn manual bottlenecks into internal tools,
				automation, and bounded AI systems.
			</p>
			<div class='flex flex-wrap gap-4'>
				<a
					href={calUrl}
					target='_blank'
					rel='noopener noreferrer'
					class='btn-primary'
					data-track-event='book_call_clicked'
					data-track-location='launch_hero'
				>
					Book a Roadmap Call
				</a>
				<a href='/projects/' class='btn-secondary'>View Case Studies</a>
			</div>
		</div>

		<aside class='ledger-rail space-y-6'>
			<div class='space-y-2'>
				<p class='launch-meta text-primary'>Timeline</p>
				<p class='text-base leading-7 text-black dark:text-white'>30-minute roadmap call. Clear scope, budget signal, and next step.</p>
			</div>
			<div class='space-y-2'>
				<p class='launch-meta text-primary'>Starting points</p>
				<p class='text-base leading-7 text-black dark:text-white'>The 4-Week Launch starts at $10,000. Workflow audits start at $2,000.</p>
			</div>
			<div class='space-y-2'>
				<p class='launch-meta text-primary'>Best fit</p>
				<p class='text-base leading-7 text-black dark:text-white'>Nontechnical founders and founder-led teams who need a smaller first useful system, not a giant custom program.</p>
			</div>
		</aside>
	</div>
</header>
```

- [ ] **Step 2: Rebuild the proof section as trust row plus testimonial**

Replace the block beginning at the first post-hero section with:

```astro
<section class='ledger-section space-y-10'>
	<div class='ledger-split items-start'>
		<div class='space-y-4'>
			<p class='launch-meta text-primary'>Why this works</p>
			<p class='text-2xl font-semibold leading-tight text-black dark:text-white'>
				One person handles the scope, build, and tradeoffs, so the first useful version gets clearer faster.
			</p>
		</div>

		<div class='ledger-rail'>
			<div class='grid gap-0 border-t border-black/10 dark:border-white/12 md:grid-cols-3'>
				{
					proofStats.map((stat, index) => (
						<div class:list={[
							'border-b border-black/10 py-5 dark:border-white/12 md:border-b-0',
							index < proofStats.length - 1 && 'md:border-r md:border-black/10 md:dark:border-white/12',
							index === 0 && 'md:pr-5',
							index === 1 && 'md:px-5',
							index === 2 && 'md:pl-5',
						]}>
							<p class='inline-metric text-primary' style='font-variant-numeric: tabular-nums'>{stat.value}</p>
							<p class='launch-meta mt-2'>{stat.label}</p>
						</div>
					))
				}
			</div>
			<p class='launch-meta mt-5'>Previously at Capgemini &amp; LeagueApps</p>
		</div>
	</div>

	{
		spotlightTestimonial && (
			<TestimonialBillboard
				quote={spotlightTestimonial.billboardText ?? spotlightTestimonial.text}
				name={spotlightTestimonial.name}
				role={spotlightTestimonial.role}
				company={spotlightTestimonial.company}
				image={monicaPhoto}
				label='Founder note'
			/>
		)
	}
</section>
```

- [ ] **Step 3: Remove the old hero metadata patchwork**

Delete these patterns if they still exist after the hero rewrite:

```astro
<div class='quiet-surface ...'>
```

```astro
<div class='space-y-2'>
	<p class='font-mono ...'>
```

The new side rail replaces them.

- [ ] **Step 4: Run build and spot-check the hero rhythm**

Run:

```bash
bun run build
```

Then run:

```bash
bun dev
```

Manual checks on `/launch/`:

- hero no longer uses below-button metadata
- right rail reads as commercial context, not decoration
- proof row feels integrated with the testimonial

- [ ] **Step 5: Commit the hero and proof rewrite**

Run:

```bash
git add src/pages/launch.astro
git commit -m "feat: rebuild launch hero and proof in ledger layout"
```

---

### Task 4: Rebuild the offer chooser and MVP section

**Files:**
- Modify: `src/pages/launch.astro`
- Test: `bun run build`

- [ ] **Step 1: Convert the offer chooser into editorial entries**

Replace the current two-card offer chooser with:

```astro
<section class='ledger-section space-y-0'>
	<a href='#mvp' class='ledger-entry md:grid-cols-[180px_1fr] md:items-start'>
		<div class='space-y-2'>
			<p class='launch-meta text-primary'>Offer 01</p>
			<p class='launch-meta'>Starts at $10,000</p>
		</div>
		<div class='space-y-4'>
			<h2 class='heading-display text-2xl md:text-3xl'>The 4-Week Launch</h2>
			<p class='text-base leading-7 text-zinc-700 dark:text-zinc-200'>
				A fixed-scope MVP for nontechnical founders who need more than a developer. I help define the product, make the key UX and pricing decisions, build it, and get it live.
			</p>
			<ul class='space-y-2 text-sm leading-6 text-zinc-700 dark:text-zinc-200'>
				<li>Cut the scope to the first useful version.</li>
				<li>Build and launch in 4 weeks.</li>
				<li>Work directly with the person shipping it.</li>
			</ul>
			<span class='arrow-link inline-flex'>See the MVP path</span>
		</div>
	</a>

	<a href='#automation' class='ledger-entry md:grid-cols-[180px_1fr] md:items-start'>
		<div class='space-y-2'>
			<p class='launch-meta text-primary'>Offer 02</p>
			<p class='launch-meta'>Workflow audit from $2,000</p>
		</div>
		<div class='space-y-4'>
			<h2 class='heading-display text-2xl md:text-3xl'>Workflow Automation &amp; AI</h2>
			<p class='text-base leading-7 text-zinc-700 dark:text-zinc-200'>
				For founder-led teams and SMBs with operational bottlenecks. I map the workflow, find the real constraint, and define the first useful system before quoting implementation.
			</p>
			<ul class='space-y-2 text-sm leading-6 text-zinc-700 dark:text-zinc-200'>
				<li>Find the manual step that is actually slowing the business down.</li>
				<li>Decide whether software, automation, or AI is the right fix.</li>
				<li>Credit the audit toward implementation if we move forward.</li>
			</ul>
			<span class='arrow-link inline-flex'>See the automation path</span>
		</div>
	</a>
</section>
```

- [ ] **Step 2: Rewrite the MVP intro and scope block as one ledger system**

Inside `#mvp`, replace the intro plus scope card with:

```astro
<section id='mvp' class='ledger-section space-y-10'>
	<div class='ledger-split items-start'>
		<div class='space-y-3'>
			<p class='launch-meta text-primary'>Offer 01</p>
			<h2 class='heading-display text-4xl md:text-5xl'>A focused MVP live in 4 weeks.</h2>
		</div>
		<div class='ledger-rail'>
			<p class='launch-body'>
				I help you figure out what the MVP should be, advise on pricing and positioning, design the UX, build the product, and set up the launch. Best for nontechnical founders who need a product partner, not just a pair of hands.
			</p>
		</div>
	</div>

	<div class='ledger-strong-panel'>
		<div class='grid gap-8 lg:grid-cols-[0.9fr_1.2fr_0.8fr]'>
			<!-- Keep existing best-for, included, and starting-price lists here -->
		</div>
	</div>
```

- [ ] **Step 3: Convert the MVP process into repeated ledger entries**

Replace the current “How the four weeks are used” block with:

```astro
<div class='space-y-6'>
	<h3 class='heading-display text-3xl md:text-4xl'>How the four weeks are used.</h3>
	<div class='space-y-0'>
		{
			mvpProcessSteps.map((step) => (
				<div class='ledger-entry ledger-entry--process'>
					<p class='launch-meta text-primary'>{step.num}</p>
					<div class='space-y-1'>
						<h4 class='text-sm font-semibold uppercase tracking-wide text-black dark:text-white'>{step.title}</h4>
						<p class='text-sm leading-6 text-zinc-700 dark:text-zinc-200'>{step.body}</p>
					</div>
				</div>
			))
		}
	</div>
</div>
```

- [ ] **Step 4: Run build and inspect offer / MVP consistency**

Run:

```bash
bun run build
```

Manual checks on `/launch/`:

- offer chooser no longer feels like generic cards
- MVP intro, scope, and process read as one system
- the stronger scope panel feels earned, not default

- [ ] **Step 5: Commit the offer chooser and MVP rewrite**

Run:

```bash
git add src/pages/launch.astro
git commit -m "feat: rebuild launch offers and MVP section"
```

---

### Task 5: Rebuild the automation section, objections, and final CTA

**Files:**
- Modify: `src/pages/launch.astro`
- Modify: `src/styles/global.css`
- Test: `bun run build`

- [ ] **Step 1: Rewrite the automation intro and scope to match the MVP grammar**

Inside `#automation`, use:

```astro
<section id='automation' class='ledger-section space-y-10'>
	<div class='ledger-split items-start'>
		<div class='space-y-3'>
			<p class='launch-meta text-primary'>Offer 02</p>
			<h2 class='heading-display text-4xl md:text-5xl'>Replace repetitive work with software that fits the business.</h2>
		</div>
		<div class='ledger-rail'>
			<p class='launch-body'>
				For founder-led teams and business owners whose operations are slowing down because too much knowledge lives in people, tabs, and manual workarounds.
			</p>
		</div>
	</div>

	<div class='ledger-strong-panel'>
		<div class='grid gap-8 lg:grid-cols-[0.9fr_1.2fr_0.8fr]'>
			<!-- Keep existing best-for, workflow-audit-includes, and audit-price blocks here -->
		</div>
	</div>
```

- [ ] **Step 2: Convert signals, build tracks, and process into ledger rows**

Use these replacements:

```astro
<div class='ledger-band'>
	<div class='grid gap-0 md:grid-cols-2'>
		{
			painSignals.map((signal) => (
				<div class='ledger-entry py-4 md:odd:pr-8'>
					<p class='launch-meta text-primary'>Signal</p>
					<p class='text-base leading-7 text-zinc-700 dark:text-zinc-200'>{signal}</p>
				</div>
			))
		}
	</div>
</div>
```

```astro
<div class='space-y-6'>
	<h3 class='heading-display text-3xl md:text-4xl'>What gets built after the audit.</h3>
	<p class='text-base leading-7 text-zinc-700 dark:text-zinc-200 max-w-2xl'>
		Most automation problems are operations problems first. The audit keeps the scope honest, then the implementation can be cut to the first useful system.
	</p>
	<div class='space-y-0'>
		{
			buildTracks.map((track) => (
				<div class='ledger-entry ledger-entry--process'>
					<p class='launch-meta text-primary'>{track.label}</p>
					<div class='space-y-1'>
						<h4 class='heading-display text-xl md:text-2xl'>{track.title}</h4>
						<p class='text-sm leading-6 text-zinc-700 dark:text-zinc-200'>{track.body}</p>
					</div>
				</div>
			))
		}
	</div>
</div>
```

```astro
<div class='space-y-6'>
	<h3 class='heading-display text-3xl md:text-4xl'>How automation projects work.</h3>
	<div class='space-y-0'>
		{
			automationProcessSteps.map((step, index) => (
				<div class='ledger-entry ledger-entry--process'>
					<p class='launch-meta text-primary'>{String(index + 1).padStart(2, '0')}</p>
					<p class='text-sm leading-6 text-zinc-700 dark:text-zinc-200'>{step}</p>
				</div>
			))
		}
	</div>
</div>
```

- [ ] **Step 3: Rebuild FAQ and final CTA with the ledger split**

Replace the current FAQ and final CTA blocks with:

```astro
<section class='ledger-section space-y-8'>
	<span class='section-label'>// Common Concerns</span>
	<div class='space-y-0'>
		{
			faqItems.map((item) => (
				<div class='ledger-entry ledger-entry--faq'>
					<h3 class='launch-meta text-black dark:text-white'>{item.title}</h3>
					<p class='text-sm leading-6 text-zinc-700 dark:text-zinc-200'>{item.body}</p>
				</div>
			))
		}
	</div>
</section>
```

```astro
<section class='ledger-section'>
	<div class='ledger-split items-end'>
		<div class='space-y-5'>
			<p class='launch-meta text-primary'>Availability</p>
			<h2 class='heading-display text-3xl md:text-4xl'>Bring the scope. I&apos;ll tell you whether it needs an MVP, a workflow audit, or a smaller first step.</h2>
			<p class='launch-body max-w-2xl'>
				Book a 30-minute roadmap call. You&apos;ll leave with a clearer scope, the likely budget range, and a direct answer on fit.
			</p>
			<a
				href={calUrl}
				target='_blank'
				rel='noopener noreferrer'
				class='btn-primary inline-block py-3 px-6'
				data-track-event='book_call_clicked'
				data-track-location='launch_final'
			>
				Book a Roadmap Call
			</a>
		</div>

		<aside class='ledger-rail space-y-4'>
			<p class='launch-meta'>I only take on 2 projects at a time.</p>
			<p class='text-base leading-7 text-black dark:text-white'>Use the call to narrow the problem, decide which engagement fits, and leave with a concrete next step.</p>
		</aside>
	</div>
</section>
```

- [ ] **Step 4: Remove unused readability patch classes if they are no longer referenced**

Delete `.quiet-surface` from `src/styles/global.css` if `rg -n "quiet-surface" src` returns no matches.

Run:

```bash
rg -n "quiet-surface" src
```

Expected:

- no matches before deletion

- [ ] **Step 5: Run full verification and commit**

Run:

```bash
bun run build
```

Then manually verify in the browser:

- no global grid on `/launch/`
- most major sections use the ledger logic
- FAQ reads cleanly without extra panels
- guarantee remains one of the few stronger-contained moments

Commit:

```bash
git add src/pages/launch.astro src/styles/global.css
git commit -m "feat: complete launch editorial-ledger redesign"
```

---

### Task 6: Final QA pass for hierarchy, spacing, and dark mode

**Files:**
- Modify: `src/pages/launch.astro`
- Modify: `src/styles/global.css`
- Test: `bun run build`

- [ ] **Step 1: Tighten section spacing after the structural rewrite**

Adjust only if needed after visual review:

```css
.ledger-section {
	padding-block: 3.5rem;
}

@media (min-width: 1024px) {
	.ledger-section {
		padding-block: 4rem;
	}
}
```

Keep this change only if the final page feels cramped.

- [ ] **Step 2: Normalize text color and line-height on any remaining old blocks**

Search for leftover service-page text styles that still use the old muted gray patterns:

```bash
rg -n "text-zinc-500|text-zinc-400|font-mono text-xs uppercase" src/pages/launch.astro
```

Replace remaining support-copy usage with:

```astro
class='text-sm leading-6 text-zinc-700 dark:text-zinc-200'
```

or, for sparse metadata only:

```astro
class='launch-meta'
```

- [ ] **Step 3: Run final build and dark-mode check**

Run:

```bash
bun run build
```

Manual checks:

- desktop `/launch/`
- narrow mobile `/launch/`
- dark mode `/launch/`

Expected:

- split sections collapse cleanly on small screens
- context rails become top/bottom stacked blocks without awkward borders
- dark mode remains legible even if it is not the primary design focus

- [ ] **Step 4: Commit the final polish pass**

Run:

```bash
git add src/pages/launch.astro src/styles/global.css
git commit -m "style: polish launch editorial-ledger spacing and hierarchy"
```

---

## Self-Review

### Spec coverage

- remove global grid from `/launch/` -> Task 1
- introduce editorial-ledger system -> Tasks 2 through 5
- rebuild hero, proof, offer chooser, MVP, automation, objections, final CTA -> Tasks 3 through 5
- keep guarantee as stronger emphasis panel -> Task 5
- avoid preserving readability patchwork -> Tasks 1, 5, and 6

No coverage gaps found.

### Placeholder scan

- no `TBD`
- no `TODO`
- no undefined “handle appropriately” steps
- commands and replacement snippets are included for each code-changing task

### Type / naming consistency

The plan uses a consistent naming set:

- `bodyClass`
- `page-launch`
- `ledger-section`
- `ledger-band`
- `ledger-split`
- `ledger-rail`
- `ledger-strong-panel`
- `ledger-entry`
- `ledger-entry--process`
- `ledger-entry--faq`
- `launch-display`
- `launch-body`
- `launch-meta`

No naming contradictions found.
