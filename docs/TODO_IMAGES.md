# TODO: Project Images

You need to create hero and feature images for the new projects. Place them in:
`src/assets/img/projects/`

## Required Images

### Language Exchange
- `language-exchange-hero.png` (1200x630px recommended)
- `language-exchange-feature.png` (1200x630px recommended)

**Suggestions for screenshots:**
- Hero: Explore page showing event discovery with filters
- Feature: Real-time chat interface or profile setup flow

### Mucho Hangouts
- `mucho-hangouts-hero.png`
- `mucho-hangouts-feature.png`

**Suggestions for screenshots:**
- Hero: Home feed with event cards and location-based discovery
- Feature: Event detail page with RSVP system or Squad interface

### Vox Prismatic
- `vox-prismatic-hero.png`
- `vox-prismatic-feature.png`

**Suggestions for screenshots:**
- Hero: Project dashboard showing generated posts
- Feature: Hook workbench or storyboard editor

### Genrupt
- `genrupt-hero.png`
- `genrupt-feature.png`

**Suggestions for screenshots:**
- Hero: 4-step workflow overview or storyboard page
- Feature: AI image generation interface with quality tiers

## After Adding Images

### 1. Update PortfolioShowcase Component
File: `/Users/hanifcarroll/projects/portfolio/src/components/PortfolioShowcase.astro`

Uncomment the image imports (lines 7-10):
```typescript
import languageExchangeHero from '@src/assets/img/projects/language-exchange-hero.png';
import muchoHangoutsHero from '@src/assets/img/projects/mucho-hangouts-hero.png';
import voxPrismaticHero from '@src/assets/img/projects/vox-prismatic-hero.png';
import genruptHero from '@src/assets/img/projects/genrupt-hero.png';
```

Uncomment the imageMap entries (lines 21-24):
```typescript
'language-exchange': languageExchangeHero,
'mucho-hangouts': muchoHangoutsHero,
'vox-prismatic': voxPrismaticHero,
'genrupt': genruptHero,
```

### 2. Update Project Detail Page
File: `/Users/hanifcarroll/projects/portfolio/src/pages/projects/[slug].astro`

Add these imports (around line 8-15):
```typescript
import languageExchangeHero from "@src/assets/img/projects/language-exchange-hero.png";
import languageExchangeFeature from "@src/assets/img/projects/language-exchange-feature.png";
import muchoHangoutsHero from "@src/assets/img/projects/mucho-hangouts-hero.png";
import muchoHangoutsFeature from "@src/assets/img/projects/mucho-hangouts-feature.png";
import voxPrismaticHero from "@src/assets/img/projects/vox-prismatic-hero.png";
import voxPrismaticFeature from "@src/assets/img/projects/vox-prismatic-feature.png";
import genruptHero from "@src/assets/img/projects/genrupt-hero.png";
import genruptFeature from "@src/assets/img/projects/genrupt-feature.png";
```

Add to the imageMap (around line 30-42):
```typescript
"language-exchange": { hero: languageExchangeHero, feature: languageExchangeFeature },
"mucho-hangouts": { hero: muchoHangoutsHero, feature: muchoHangoutsFeature },
"vox-prismatic": { hero: voxPrismaticHero, feature: voxPrismaticFeature },
"genrupt": { hero: genruptHero, feature: genruptFeature },
```
