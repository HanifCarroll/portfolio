# Portfolio design system

The portfolio uses a small layered design system. Shared decisions live in one place; page-specific composition stays with the route that owns it.

## Sources of truth

- `src/styles/design-tokens.css` owns semantic color, type, spacing, radius, shadow, width, and measure tokens.
- `src/styles/global.css` owns the reset, accessibility defaults, shared layout and type primitives, buttons, navigation, footer, shared calls to action, proof blocks, FAQs, and transition behavior.
- Route stylesheets such as `home.css`, `services.css`, `projects.css`, and `blog-index.css` own only the layouts and visual treatments used by that route.
- Shared Astro components own reusable structure. The header, footer, service callout, and closing CTA must not be reimplemented inside individual pages.

## Styling rules

1. Use `--hc-*` semantic tokens instead of introducing route-local hex values for the core palette, text contrast, spacing, radii, or shadows.
2. Put shared component selectors in `global.css`; put route selectors in the route stylesheet. Do not import one route stylesheet from another.
3. Extend an existing shared primitive before creating a visually equivalent one with a new class name.
4. Keep light and dark text pairs explicit: `--hc-text` and `--hc-text-muted` on light surfaces, `--hc-proof-text` and `--hc-proof-text-muted` on dark surfaces.
5. Respect reduced-motion preferences. Navigation and page transitions may enhance orientation, but content and controls must remain usable with motion disabled.
6. Validate every durable layout change at desktop, tablet, and mobile widths, including horizontal overflow, focus visibility, menu behavior, and readable line lengths.

## Typography

Typography is role-based, with Helvetica Neue as the single site typeface. Use the semantic tokens in `design-tokens.css`; do not add raw font stacks or one-off font sizes to route stylesheets.

| Role          | Token                  | Size             | Use                                                 |
| ------------- | ---------------------- | ---------------- | --------------------------------------------------- |
| Caption       | `--hc-type-caption`    | 12px             | Nonessential metadata, indices, and proof labels    |
| Meta          | `--hc-type-meta`       | 14px             | Labels, dates, legal text, and secondary navigation |
| UI            | `--hc-type-ui`         | 16px             | Navigation, buttons, links, and controls            |
| Body          | `--hc-type-body`       | 18px             | Default prose and descriptions                      |
| Body large    | `--hc-type-body-large` | 20px             | Prominent supporting copy                           |
| Lead          | `--hc-type-lead`       | 24px             | Introductions and compact subheads                  |
| Heading       | `--hc-type-heading-*`  | 32px and 40px    | Fixed-size content headings                         |
| Display       | `--hc-type-display-*`  | Responsive clamp | Page titles and major editorial statements          |
| Section title | `--hc-type-section`    | Responsive clamp | Primary section headings                            |

The 12px caption role is reserved for short, nonessential text. Content a reader needs to understand or act on must be at least 14px; body copy defaults to 18px. Use `--hc-weight-regular`, `--hc-weight-semibold`, and `--hc-weight-bold` for the shared 400, 600, and 700 weights.

All proportional family roles resolve to the shared `--hc-font-sans` stack: Helvetica Neue, Helvetica, Arial, then sans-serif. The display, editorial, reading, technical, and case-study tokens remain semantic aliases so layouts can express their role without introducing another typeface. Only `--hc-font-mono` and `--hc-font-technical-mono` remain distinct for code and explicitly technical metadata.

Use the existing line-height tokens and keep prose between roughly 45ch and 76ch. A route can choose a declared family role or responsive display size, but it should not create another unnamed type system.

## Route stylesheet ownership

| File                 | Owner                                                      |
| -------------------- | ---------------------------------------------------------- |
| `home.css`           | Homepage sections and homepage-only comparison table       |
| `about.css`          | About page narrative, process, and experience sections     |
| `services.css`       | Services index sections                                    |
| `service-detail.css` | Individual service offer pages                             |
| `projects.css`       | Case studies index, filters, and reflowing project layouts |
| `case-study.css`     | Individual case study pages                                |
| `blog-index.css`     | Blog index and article list                                |
| `blog.css`           | Individual blog articles                                   |
| `newsletter.css`     | Newsletter route                                           |
| `now.css`            | Now page                                                   |
| `tools.css`          | Tools page                                                 |

When a selector is needed on more than one route, move the structure into a shared component first, then move its styling into `global.css`. This keeps reuse intentional and prevents page-specific rules from silently overriding one another.
