# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Hanif Carroll - a Fractional CTO & Product Partner who helps bootstrapped nontechnical founders turn ambitious ideas into software that users love. Built with Astro 5.12.6, the site uses static site generation with a component-based architecture to showcase project case studies, professional work, and service offerings.

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server (localhost:4321)
pnpm dev

# Build production site to ./dist/
pnpm build

# Preview built site locally
pnpm preview

# Run Astro CLI commands
pnpm astro <command>
```

## Architecture

### Core Technologies
- **Framework**: Astro 5.12.6 (static site generator)
- **Language**: TypeScript with ES modules
- **Package Manager**: pnpm
- **Styling**: Tailwind CSS v4 with custom design system
- **Build Output**: Static HTML/CSS/JS in `./dist/`

### Project Structure
```
src/
├── components/       # Reusable Astro components
│   ├── home/        # Homepage-specific components
│   └── icons/       # Icon components
├── content/         # Content collections
│   └── projects/    # Project case studies (Markdown + frontmatter)
├── layouts/         # Page layouts (BaseLayout, MarkdownLayout)
├── pages/           # File-based routing
└── utils/           # Utility functions (siteConfig.ts)
```

### Key Architectural Patterns

1. **Content Collections**: Projects are managed through Astro's content collections with a typed schema defined in `src/content/config.ts`. Each project includes metadata like title, description, tags, tools used, and links.

2. **Layout System**: 
   - `BaseLayout.astro`: Main layout wrapper with header/footer
   - `MarkdownLayout.astro`: Extended layout for content pages
   - All layouts accept `title` and `description` props

3. **Component Architecture**: Components use Astro's `.astro` format with Tailwind utility classes. Components are organized by feature (home, icons) and follow a modular approach.

4. **Styling Strategy**:
   - **Tailwind CSS v4**: Utility-first CSS framework with custom theme configuration
   - Design system defined in `src/styles/global.css` using `@theme` directive
   - Custom color palette: Scandinavian-inspired grays (gray-50 to gray-900) and magenta accent colors (accent-50 to accent-900)
   - Typography scale: Standard Tailwind font sizes (text-base, text-lg, text-xl through text-6xl)
   - Custom spacing utilities: Section padding, container widths, and component spacing
   - Mobile-first responsive design (breakpoints: sm:, md:, lg:)
   - Utility classes for common patterns: `.container`, `.section-padding-block`, `.btn`, etc.

5. **Routing**: File-based routing through `src/pages/` directory. Each `.astro` file becomes a route.

## Code Style

- **Indentation**: 4 spaces (configured in `.prettierrc.json`)
- **TypeScript**: Strict mode enabled (extends `astro/tsconfigs/strict`)
- **Components**: Use Astro components (`.astro` files) with Tailwind utility classes
- **File naming**: kebab-case for files, PascalCase for components

## Content Management

Project content uses frontmatter with this schema:
```typescript
{
    title: string
    description: string
    tags: string[]
    image: ImageMetadata
    imageAlt?: string
    isFeatured?: boolean
    order?: number
    toolsUsed: string[]
    role: string
    figmaLink?: string
    siteLink?: string
    prototypeLink?: string
}
```

## Site Configuration

Site-wide configuration is centralized in `src/utils/siteConfig.ts`:
- Site title suffix: "Hanif Carroll - Fractional CTO & Product Partner"
- Page titles use format: `{Page Title} | {Site Title Suffix}`

## Tailwind Configuration

The project uses Tailwind CSS v4 with a custom theme defined in `src/styles/global.css`:

### Custom Design System
- **Colors**: Custom gray scale (50-900) and magenta accent colors (50-900)
- **Typography**: Standard Tailwind font scale (text-base through text-6xl)
- **Spacing**: Custom section padding and container utilities only
- **Approach**: Pure utility-first methodology using standard Tailwind classes

### Key Utility Classes
```css
.container          # Max-width container with padding
.section-padding-block  # Responsive section padding
```

**Note**: The project follows pure utility-first Tailwind approach. All typography and component styling uses standard Tailwind classes directly (e.g., `text-lg`, `text-6xl`, `bg-gray-800`, etc.) rather than custom utility classes.

### Responsive Breakpoints
- `sm:` - 640px and up
- `md:` - 768px and up  
- `lg:` - 1024px and up

## Business Context

### Brand Positioning
- **Tagline**: Clarify. Launch. Grow.
- **Target Audience**: Bootstrapped nontechnical founders and domain experts with ambitious product ideas
- **Core Values**: Clarity, Momentum, Candor, Craft, Resourcefulness, Risk-Free Partnership

### Service Offerings
The site presents three main service packages:
1. **Clarify (Get Unstuck)**: Discovery & research sprint, MVP blueprint, positioning framework
2. **Launch (Ship Fast)**: Prototype sprint (7 days), live product build (4-6 weeks), handoff kit
3. **Grow (Scale Smart)**: Fractional CTO services (1-3 days/week, month-to-month)

### Content Strategy
- **Newsletter**: "The Bootstrapped Founder's Field Guide" - weekly publication
- **Social**: Active on LinkedIn with educational content

### SEO Focus Areas
Primary keywords: fractional CTO, mvp development, bootstrapped mvp development, startup consultant
Secondary keywords include: nontechnical founder help, prototype development services, lean mvp development
