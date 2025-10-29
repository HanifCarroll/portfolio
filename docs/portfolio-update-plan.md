# Portfolio Update Plan

## Goal
Transition portfolio from showcasing freelance web development work to demonstrating fullstack product engineering capabilities suitable for early-stage startups (pre-seed to Series B).

## Profile Summary
**Target Role:** Full-stack Product Engineer at early-stage startup (10-50 people)
**Key Differentiator:** Product-minded engineer who goes beyond the "engineering box" - cares about UX, product strategy, user personas, and delivering exceptional products that empower users

**Professional Experience:**
- Capgemini (2019-2021): Cruise ship management software
- LeagueApps (2021-2023): Sports scheduling tools for 3,000+ organizers
- Nearsure (2023-2024): Enhanced LeagueApps tools as contractor
- Freelance (2024-Current): Fractional CTO for social events platform

## Current Projects (Freelance Work)
Located in: `src/lib/projects/`
1. redwriter-comics.json - Comic book artist portfolio
2. maximo-interiorismo.json - Interior designer portfolio
3. desarmadero-latorre.json - Auto salvage yard catalog
4. casa-elaria.json - Real estate/property site

**Storage Plan:** Move to `src/lib/projects/archived/` to preserve but exclude from build

## New Projects to Add

### 1. Language Exchange (Combined Web + Mobile)
- **Web repo:** `/Users/hanifcarroll/projects/language-exchange`
- **Mobile repo:** `/Users/hanifcarroll/projects/language_exchange_flutter`
- **Approach:** Create a single project showcase that highlights both platforms
- **Emphasis:** Cross-platform product development, user-centric design, real-world problem solving

### 2. Mucho Hangouts
- **Repo:** `/Users/hanifcarroll/projects/mucho-hangouts`
- **Role:** Fractional CTO (mentioned in experience section)
- **Emphasis:** Social/community building, leadership, early-stage startup experience

### 3. Vox Prismatic
- **Repo:** `/Users/hanifcarroll/projects/vox-prismatic`

### 4. Genrupt
- **Repo:** `/Users/hanifcarroll/projects/genrupt`

## Project Format Decision

### Current Format Analysis
The existing project structure uses:
- **Data:** JSON files in `src/lib/projects/`
- **Template:** Dynamic `[slug].astro` page
- **Fields:**
  - slug, title, description
  - client, service, role, teamSize
  - year, timeline
  - technologies[]
  - liveUrl
  - problem, solution, result
  - outcomes[], constraints[]
  - images {hero, feature}

### Recommended Format for New Projects

**Decision: ADAPT the existing format but with modified emphasis**

**Why this format works:**
1. ✅ Professional case study structure already in place
2. ✅ Showcases problem-solving and impact (problem/solution/result)
3. ✅ Highlights technical skills (technologies)
4. ✅ Demonstrates product thinking (outcomes, constraints)

**Key Modifications for Product Engineering Focus:**

#### Replace/Reframe These Fields:
- **client** → Use "Personal Project" or "Side Project" or specific context (e.g., "Community Platform")
- **service** → Change to **type** with values like:
  - "Full-stack Product Development"
  - "Mobile & Web Application"
  - "Social Platform Engineering"
- **role** → Emphasize: "Solo Full-stack Engineer", "Technical Lead", "Architect & Developer"

#### Enhance These Sections:
- **problem**: Focus on user pain points and market gaps (not just client needs)
- **solution**: Emphasize product decisions, architecture choices, and technical tradeoffs
- **result**: Include metrics, user adoption, learning outcomes
- **outcomes**: Add product-focused outcomes:
  - User engagement metrics
  - Technical achievements (scalability, performance)
  - Product evolution insights
- **constraints**: Include real-world constraints that demonstrate problem-solving:
  - Time/resource limitations
  - Technical challenges
  - User feedback incorporation

#### Special Handling for Language Exchange:
Create a **combined project** showing both platforms:
- **technologies**: List both web and mobile stacks
- **Additional field idea**: Consider adding `platforms: ["Web", "iOS", "Android"]`
- **problem/solution/result**: Tell unified story across both platforms
- **Emphasize**: Cross-platform consistency, shared business logic, platform-specific optimizations

## Project Presentation Strategy

### Homepage Featured Projects
Display **3 most impressive projects** that demonstrate:
1. **Full-stack capability** (Language Exchange - shows web + mobile)
2. **Product leadership** (Mucho Hangouts - fractional CTO role)
3. **Technical depth** (Choose between Vox Prismatic or Genrupt based on complexity/impact)

### Visual Differentiation
- Keep hero/feature images but ensure they show **product in action** rather than marketing sites
- Consider screenshots of:
  - Key features/interactions
  - Mobile + desktop views
  - User flows/interfaces
  - Architecture diagrams (optional, for technical depth)

## Implementation Checklist

### Phase 1: Preparation
- [ ] Create `src/lib/projects/archived/` directory
- [ ] Move current 4 freelance projects to archived folder
- [ ] Update `src/lib/projects.ts` to exclude archived projects from build
- [ ] Verify existing projects no longer appear on site

### Phase 2: Project Analysis (Next Step - PAUSE HERE)
- [ ] Analyze Language Exchange (web) codebase
- [ ] Analyze Language Exchange (mobile) codebase
- [ ] Analyze Mucho Hangouts codebase
- [ ] Analyze Vox Prismatic codebase
- [ ] Analyze Genrupt codebase
- [ ] Document key features, tech stack, and impact for each project

### Phase 3: Content Creation
- [ ] Draft Language Exchange project (combined web + mobile)
- [ ] Draft Mucho Hangouts project
- [ ] Draft Vox Prismatic project
- [ ] Draft Genrupt project
- [ ] Gather/create screenshots for each project
- [ ] Review and refine all project descriptions

### Phase 4: Integration
- [ ] Create JSON files for new projects
- [ ] Update project imports in `src/lib/projects.ts`
- [ ] Add image imports to `[slug].astro`
- [ ] Test all project pages render correctly
- [ ] Update featured projects selection on homepage
- [ ] Final review and polish

## Success Criteria
Portfolio should demonstrate:
- ✅ Full-stack technical capability (both web and mobile)
- ✅ Product thinking and user-centric approach
- ✅ Leadership/ownership mindset
- ✅ Real-world problem solving with constraints
- ✅ Impact and outcomes focus (not just features delivered)
- ✅ Alignment with early-stage startup needs

---

**Status:** Plan complete. Ready for Phase 2 (project analysis) upon approval.
