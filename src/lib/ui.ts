// Shared Tailwind class strings for the editorial system, used across Astro, MDX, and React.
// The homepage (src/styles/home.css) is the reference these follow.

/** Page content box. Matches the header and footer rows so the edges line up. */
export const shellClass = "mx-auto w-full max-w-page px-6 md:px-12";

/** Page title (h1). */
export const pageTitleClass =
  "m-0 font-editorial text-[clamp(3rem,7vw,5.25rem)] font-normal leading-none tracking-[-0.045em] text-ink text-balance";

/** Title of a long-form article, which can run to several lines. */
export const articleTitleClass =
  "m-0 font-editorial text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.02] tracking-[-0.035em] text-ink text-balance";

/** Section heading (h2). */
export const sectionHeadingClass =
  "m-0 font-editorial text-[clamp(2.25rem,4.4vw,3.5rem)] font-normal leading-none tracking-[-0.04em] text-ink text-balance";

/** Card, row, and list item title. */
export const itemTitleClass =
  "m-0 font-editorial text-[clamp(1.5rem,2.4vw,1.875rem)] font-normal leading-[1.18] tracking-normal text-ink";

/** Lead paragraph under a page title. */
export const deckClass =
  "mb-0 max-w-[38rem] text-[clamp(1.125rem,2vw,1.25rem)] leading-[1.55] text-ink-muted text-pretty";

/** Small tracked uppercase label. Use sparingly. */
export const metaClass = "m-0 text-base uppercase leading-[1.3] tracking-[0.12em] text-ink-muted";

/** Underline for text links on white: dark gold at rest, yellow on hover. */
export const underlineClass =
  "underline decoration-accent-ink decoration-2 underline-offset-[0.18em] hover:decoration-accent focus-visible:decoration-accent";

/** Solid ink button, the one primary action. */
export const buttonClass = () =>
  "inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-lg bg-ink px-[1.625rem] py-3 text-center text-base font-medium leading-[1.2] text-canvas no-underline transition-colors duration-150 ease-out-soft hover:bg-ink-muted focus-visible:bg-ink-muted disabled:opacity-60";

/** Underlined text link that sits beside a button. */
export const textLinkClass = `inline-flex min-h-11 items-center gap-[0.4rem] text-base text-ink ${underlineClass}`;

/** Screenshot used by case-study image plates. It sits on the canvas with no frame. */
export const imagePlateClass = "mx-0 mt-1 mb-0";
export const imagePlateImageClass = "block h-auto w-full";

/** Link row inside case-study copy. */
export const resourceLinksClass =
  "mt-5 flex flex-wrap gap-x-6 gap-y-[0.8rem] font-sans [&_a]:text-base! [&_a]:font-normal!";

/** Put on a title inside a link with `group`: the title takes the yellow underline on hover. */
export const titleHoverClass =
  "decoration-accent decoration-2 underline-offset-[0.18em] group-hover:underline group-focus-visible:underline";

/** Focus ring for links on white, where the site's yellow ring is too faint. */
export const focusClass =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

/** A title shown as a heading drops its closing period; metadata keeps the original. */
export const headingText = (title: string) => title.replace(/\.$/, "");
