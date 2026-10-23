// Shared Tailwind class strings for controls used across Astro, MDX, and React.

const buttonBase =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border bg-canvas px-4 py-2 text-center text-base font-bold leading-[1.2] text-ink no-underline transition-colors duration-150 ease-out-soft hover:border-accent-ink hover:bg-surface-warm focus-visible:border-accent-ink focus-visible:bg-surface-warm";

/** Bordered button. Pass a border color class to vary it, e.g. "border-ink-muted". */
export const buttonClass = (border = "border-line") => `${buttonBase} ${border}`;

/** Bold text link with an animated arrow. */
export const textLinkClass =
  'inline-flex items-center gap-2 text-base font-bold leading-[1.45] text-ink no-underline after:text-accent-ink after:transition-transform after:duration-[240ms] after:ease-out-soft after:content-["→"] hover:after:translate-x-1 focus-visible:after:translate-x-1 active:after:translate-x-1';

/** Small rounded link used for repository and resource links in case studies. */
export const pillLinkClass =
  "inline-flex min-h-11 w-fit items-center gap-[0.4rem] rounded-full border border-line bg-canvas px-[1.1rem] py-2 font-sans text-[0.875rem] font-semibold leading-[1.2] text-ink no-underline transition-colors duration-[160ms] ease-out-soft hover:border-ink focus-visible:border-ink [&_span]:text-accent-ink";

/** Bordered screenshot used by case-study image plates. */
export const imagePlateClass = "mx-0 mt-1 mb-0";
export const imagePlateImageClass = "block h-auto w-full rounded-xl border border-line bg-canvas";

/** Plain link row inside case-study copy; overrides the copy column's underlined links. */
export const resourceLinksClass =
  "mt-5 flex flex-wrap gap-x-6 gap-y-[0.8rem] [&_a]:text-[0.95rem]! [&_a]:font-[650]! [&_a]:text-ink! [&_a]:no-underline! [&_a:is(:hover,:focus-visible)]:text-accent-ink!";
