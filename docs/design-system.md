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
