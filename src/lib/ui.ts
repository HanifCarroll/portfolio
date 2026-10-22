// Shared Tailwind class strings for controls used across Astro, MDX, and React.

const buttonBase =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border bg-canvas px-4 py-2 text-center text-base font-bold leading-[1.2] text-ink no-underline transition-colors duration-150 ease-out-soft hover:border-accent-ink hover:bg-surface-warm focus-visible:border-accent-ink focus-visible:bg-surface-warm";

/** Bordered button. Pass a border color class to vary it, e.g. "border-ink-muted". */
export const buttonClass = (border = "border-line") => `${buttonBase} ${border}`;

/** Bold text link with an animated arrow. */
export const textLinkClass =
  'inline-flex items-center gap-2 text-base font-bold leading-[1.45] text-ink no-underline after:text-accent-ink after:transition-transform after:duration-[240ms] after:ease-out-soft after:content-["→"] hover:after:translate-x-1 focus-visible:after:translate-x-1 active:after:translate-x-1';
