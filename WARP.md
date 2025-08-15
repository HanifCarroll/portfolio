# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Personal portfolio website for Hanif Carroll - a Technical Product Partner who helps bootstrapped SaaS founders with UX clarity audits and rapid prototypes. Built with Next.js 15.4.6 using the App Router, TypeScript, and Tailwind CSS v4 with a custom design system.

## Development Commands

```bash
# Install dependencies (uses pnpm as package manager)
pnpm install

# Start development server with Turbopack (localhost:3000)
pnpm dev

# Build production site
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## Architecture & Key Patterns

### Framework Stack
- **Next.js 15.4.6** with App Router architecture
- **TypeScript** with strict mode
- **Tailwind CSS v4** with custom theme system
- **pnpm** package manager
- **Turbopack** for fast development builds

### App Router Structure
```
src/app/
├── layout.tsx           # Root layout with fonts, metadata, header/footer
├── layout-client.tsx    # Client-side layout wrapper with structured data
├── page.tsx            # Homepage with service path selection
├── globals.css         # Tailwind config + custom theme + animations
├── fix/                # "Improve My Product" service path
├── build/              # "Build My Idea" service path  
└── about/              # About page
```

### Component Architecture
- **Server Components**: Layouts use server components by default
- **Client Components**: Interactive components marked with `'use client'`
- **Path Aliases**: `@/` points to `src/` directory
- **Modular Components**: Reusable components in `src/components/`

### Design System (Tailwind v4 Custom Theme)

The project uses a sophisticated custom theme defined in `globals.css`:

- **Custom Gray Scale**: `gray-50` through `gray-900` (Scandinavian-inspired)
- **Service-Specific Colors**: 
  - `fix-*` colors (sky blue palette) for "Fix/Improve" path
  - `build-*` colors (magenta/rose palette) for "Build" path
- **Typography**: Geist Sans and Geist Mono fonts from Google Fonts
- **Custom Utilities**: `.container`, `.section-padding-block` for consistent spacing
- **Animations**: Custom `fadeInUp`, `slideInLeft`, `pulse-soft` with delay utilities

### Business Logic Patterns

1. **Service Path Architecture**: Homepage presents two main paths:
   - `/fix` - UX clarity audits for existing products
   - `/build` - Rapid prototyping for new ideas

2. **Analytics Integration**: Custom `useAnalytics` hook for Plausible tracking
   - Path selection tracking
   - Booking interaction tracking
   - Cal.com integration for scheduling

3. **Responsive Design Strategy**:
   - Mobile-first approach with `sm:`, `md:`, `lg:` breakpoints
   - Animated mobile hamburger menu
   - Progressive enhancement for interactions

4. **SEO & Accessibility**:
   - Structured data injection via `StructuredData` component
   - Semantic HTML with proper headings and landmarks
   - Reduced motion support and high contrast mode
   - Focus management for keyboard navigation

### Theme System Implementation

The custom Tailwind theme uses `@theme` directive with CSS custom properties:
- **Dark mode**: Automatic via `prefers-color-scheme` or manual toggle
- **Custom animations**: Staggered entrance animations with delay classes
- **Utility classes**: Only essential ones (`.container`, `.section-padding-block`)
- **Pure utility approach**: All styling uses standard Tailwind classes

## Key Technologies

- **Cal.com Embed**: Booking widget integration (`@calcom/embed-react`)
- **Plausible Analytics**: Privacy-focused analytics
- **Next.js Image**: Optimized image loading with `next/image`
- **Theme Toggle**: Dark/light mode switching capability

## Business Context

- **Target Audience**: Bootstrapped SaaS founders seeking technical partnership
- **Service Model**: Two-path funnel (Fix existing vs Build new)
- **Conversion Focus**: Free discovery calls via Cal.com booking
- **Brand Voice**: Clear, direct, confidence-building
