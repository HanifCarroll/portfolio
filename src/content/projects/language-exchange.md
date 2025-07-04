---
title: "Buenos Aires Language Connect"
description: "A complete product development cycle from user research to MVP, demonstrating how to identify market opportunities and build solutions people actually want to use. From user interviews to functional prototype, exploring how small-scale exchanges can create better learning experiences."
tags: ["Product Strategy", "User Research", "MVP Development", "Prototyping"]
image: "./language-exchange.jpeg"
imageAlt: "Buenos Aires Language Connect screenshot"
order: 1
toolsUsed:
    [
        "User Interviews",
        "Google Forms",
        "Figma",
        "AI-Assisted Prototyping (v0)",
        "Ruby on Rails (API)",
        "React Native",
    ]
role: "Product Engineer (Solo Project)"
figmaLink: "https://www.figma.com/design/qXhMH8P2ZuuoEhHRwykW5x/BA-Language-Connect?node-id=0-1&t=i7zRsP7Hcu2KsxSv-1"
prototypeLink: "https://v0-language-exchange-prototype-dp.vercel.app/"
isFeatured: true
---

## The Problem

Language learners in Buenos Aires face a frustrating paradox: while the city offers numerous language exchange opportunities, the existing solutions create more barriers than bridges. Large-scale events like Mundolingo become overwhelming social gatherings where meaningful practice gets lost in the noise. Meanwhile, existing apps like Tandem struggle with misaligned user intentions, often feeling more like dating platforms than serious learning tools.

The result is that language learners spend more time searching for quality practice partners than actually improving their skills, leading to frustration and abandoned language goals.

This represents a clear product opportunity: a local market with existing demand but poor product-market fit from current solutions. Rather than competing on features, there's an opportunity to compete on focused user experience and strategic positioning.

## User Research Process

To understand the real needs of language learners, I conducted primary research through two phases:

**Phase 1: In-depth User Interviews**

-   One small group interview (3 people) with active language learners in Buenos Aires
-   90 minute session exploring current habits, frustrations, and ideal scenarios

**Phase 2: Quantitative Validation**

-   Google Forms survey distributed to broader language learning community
-   11 responses providing demographic data and preference validation
-   Focused on specific feature prioritization and behavioral patterns

## Key User Insights

### Demographics & Preferences

-   **Target audience skews older**: 63.6% are 36-45 years old, suggesting users want mature, focused experiences over gamified approaches
-   **Geographic concentration**: Palermo leads, followed by Recoleta and Belgrano - validating neighborhood-based matching
-   **Strong in-person preference**: 63.6% prefer mainly in-person exchanges, with another 27.3% wanting hybrid options

### Core Pain Points Identified

**1. Overwhelming Large Events**

> "Mundolingo has too many people... it's noisy and intimidating"

Users consistently described large events as chaotic environments where:

-   Conversations remain superficial due to noise and distractions
-   Shy learners feel intimidated and left out
-   Quality practice time gets diluted across too many interactions

**2. Misaligned Partner Matching**

> "Finding the right people is the hardest part"

Current solutions fail at compatibility matching:

-   Difficulty finding partners with similar language goals
-   Repetitive, surface-level conversations
-   Apps like Tandem feeling like dating platforms rather than learning tools

**3. Lack of Structure for Meaningful Connection**

> "I want to avoid small talk and actually improve"

Users expressed frustration with:

-   Conversations that don't lead to language improvement
-   No guidance for breaking the ice or maintaining engaging dialogue
-   Inability to find partners interested in deeper cultural exchange

## User Personas

### Carolina (The Social Connector)

-   **Age:** 39
-   **Location:** Palermo
-   **Goal:** English fluency + social connections

Carolina prefers small group exchanges (3-4 people) where diverse perspectives create rich conversations. She's frustrated by the impersonal nature of large events and wants to build lasting connections through language practice.

**Key Needs:**

-   Easy group formation with compatible interests
-   Conversation topic suggestions
-   Ability to maintain connections with favorite partners

### David (The Focused Practitioner)

-   **Age:** 44
-   **Location:** Belgrano
-   **Goal:** Advanced Spanish refinement

David strictly prefers one-on-one exchanges for focused practice. As a financial analyst, he wants to improve professional terminology and make efficient use of his limited free time.

**Key Needs:**

-   Advanced filtering for serious language partners
-   Structured practice focused on specific skills
-   Clear indicators for one-on-one availability

## Product Development Philosophy

Rather than stopping at static wireframes, I believe in creating functional prototypes for meaningful user validation. My approach leverages AI-assisted development to rapidly bridge the gap between design concepts and testable experiences.

**Why AI-Assisted Prototyping?**

Traditional Figma prototypes, while useful for initial concepts, have limitations:

-   Simulated interactions don't reveal real usability issues
-   Users can't experience actual data flow and edge cases
-   Feedback tends to focus on visual design rather than user experience

By using AI tools like v0 to rapidly build functional prototypes, I can:

-   Test real user flows with actual data
-   Identify technical constraints early in the design process
-   Gather more meaningful feedback on interaction patterns
-   Validate core assumptions before committing to full development

This approach represents the future of UX engineering - using AI as a powerful tool for rapid iteration while maintaining human oversight for user-centered design decisions.

## Solution Design

### Core Value Proposition

**Small-scale, intentional language exchanges** that prioritize quality connections over quantity of interactions.

### Key Product Decisions

**1. Real Photos, not Generated Avatars**

Initial prototype testing revealed a critical insight: while auto-generated avatars reduce dating app associations, they create significant trust barriers for small group meetups. Users consistently expressed that for 1-on-1 or small group exchanges, seeing the person builds essential confidence and safety.

-   Real photos increase user comfort and trust
-   Exchange-first architecture still differentiates from dating apps
-   Verification system can be added post-launch to enhance safety

**2. Exchange-First Architecture**

-   Users create or join specific exchange requests
-   Clear expectations set upfront (1-on-1 vs. group, topics, location)
-   Prevents aimless browsing and mismatched intentions

**3. Neighborhood-Based Matching**

-   Leverages Buenos Aires' distinct neighborhood cultures
-   Reduces commute barriers to meeting
-   Creates local community connections

**4. Minimal Viable Communication**

-   Single message thread per exchange
-   Prevents platform from becoming a social network
-   Keeps focus on coordinating meetups, not endless chatting

## Prototype Testing Results

### What Users Loved

-    Exchange-First Model: Multiple users noted that browsing exchanges rather than profiles made the app feel clearly focused on language learning, not dating.
-    Intuitive Interface: Users consistently described the interface as "minimalist" and "easy to use" - even non-technical users could navigate without confusion.
-    Clear Value Proposition: The small-scale approach resonated strongly with users frustrated by large, overwhelming events.

### Critical Improvements Identified

**Navigation & User Flow**

-   Need clear back navigation from profile pages
-   Messaging CTA unclear ("View Exchange Messages" vs. "Send Message")
-   Home page needs context explaining app purpose

**Exchange Creation Flow**

-   Language learning should link to language options in dropdown
-   "1-on-1" vs "group" labels need better visual distinction
-   Need clearer participant count labeling

**Trust & Safety Considerations**

-    Users want real photos for small group safety
-    Verification system desired but not blocking for MVP
-    Clear anti-dating messaging needed

## MVP Feature Set

Based on user research insights, the initial version focuses on core functionality:

### Essential Features (MVP v1)

-   **Basic User Profiles**: Real profile photo, languages, neighborhood, interests, and learning goals
-   **Exchange Creation**: Simple posting of 1-on-1 or small group requests
-   **Exchange Discovery**: Browse and filter available opportunities with clear labeling
-   **Coordination Messaging**: Basic chat functionality for meetup planning only
-   **Home Page Context**: Clear explanation of app purpose and value proposition


### Intentionally Excluded (For Now)

-   User verification system (can be added post-launch)
-   Complex matching algorithms
-   Social features (likes, follows, feeds)
-   In-app video calling
-   Extensive user profiles
-   Advanced features (maps view, friend system, custom event categories)

This lean approach allows for rapid user testing and iteration based on real usage patterns rather than assumed needs.

## Technical Implementation

**Technology Stack**: React Native Frontend + Ruby on Rails API

**Why React Native + Rails API for the MVP?**

The initial PWA approach was reconsidered after identifying critical iOS limitations that would significantly impact user experience:

-   **iOS PWA Push Notification Restrictions**: iOS requires users to manually add PWAs to their home screen before they can receive push notifications, creating a major UX friction point that would reduce engagement and exchange completion rates
-   **Native App Store Distribution**: App store presence provides better discoverability and trust for a local community app
-   **Rails API Backend**: Maintains rapid development capabilities while providing a clean separation between frontend and backend
-   **Cross-Platform Consistency**: React Native ensures consistent experience across iOS and Android while leveraging native capabilities

This architecture balances development speed with user experience requirements, ensuring the app can effectively support real-time coordination for language exchanges without the PWA limitations.

## Prototype Development

### Wireframe to Prototype Progression

**Phase 1: Figma Wireframes**

-   Core user flows mapped out
-   Basic information architecture established
-   Visual hierarchy and interaction patterns defined

**Phase 2: AI-Assisted Functional Prototype**

-   Used v0 to rapidly build interactive version
-   Real form submissions and data flow
-   Testable user interactions with actual feedback

**Phase 3: React Native + Rails API MVP Development**

-   Converting learnings from prototype and user testing into production-ready code
-   Implementing identified improvements from user feedback
-   Adding data persistence and user authentication
-   Leveraging native push notifications for better user engagement

## Prototype Development Journey

### Wireframe to Prototype to MVP

**Phase 1: Figma Wireframes**

-   Core user flows mapped out
-   Basic information architecture established
-   Visual hierarchy and interaction patterns defined

**Phase 2: AI-Assisted Functional Prototype**

-   Used v0 to rapidly build interactive version
-   Real form submissions and data flow
-   Testable user interactions with actual feedback

**Phase 3: User Testing & Validation**

-   6 comprehensive user testing sessions
-   Identified critical improvements and validated core concept
-   Resolved major architectural decisions (photos vs. avatars)

**Phase 4: React Native + Rails API MVP Development** *(Current Phase)*

-   Converting learnings from prototype and user testing into production-ready code
-   Implementing identified improvements from user feedback
-   Adding data persistence and user authentication
-   Leveraging native push notifications for better user engagement

## Development & Launch Plan

### Current Status: Moving to MVP Development

Based on successful prototype validation, the next phase focuses on building and launching the MVP with identified improvements.

### Immediate Development Priorities

**Core MVP with User Testing Improvements**
-   Implement navigation improvements and clearer CTAs
-   Add home page context and explanation
-   Enhanced exchange creation flow with language linking
-   Improved messaging interface

**Beta Testing with Real Users**
-   Deploy MVP to 10-15 Buenos Aires language learners
-   Monitor actual exchange creation and completion rates
-   Gather feedback on real-world usage patterns

**Iteration and Public Launch**
-   Address critical issues identified in beta testing
-   Launch to broader Buenos Aires language learning community
-   Begin tracking key success metrics

### Success Metrics

-   **Exchange Completion Rate**: Percentage of created exchanges that result in actual meetups
-   **User Retention**: Users who create or join multiple exchanges
-   **Anti-Dating Effectiveness**: User feedback confirming language-focused positioning
-   **User Satisfaction**: Qualitative feedback on exchange quality vs. alternatives

### Post-Launch Iteration Plan

Based on real usage data, priority improvements may include:

-   User verification system for enhanced trust
-   Enhanced filtering and discovery options
-   Meeting spot suggestions and location features
-   Basic rating/feedback system for exchanges
-   Friend/connection features for repeat partners

## Business Impact & Market Opportunity

This project validates a significant market opportunity in the language exchange space, particularly for geographically-focused solutions that prioritize quality over scale.

### Market Size & Validation

Buenos Aires represents an ideal test market for this product approach:

- **Large expat population**: Over 200,000 English-speaking expats and digital nomads, creating consistent demand for Spanish practice
- **Active language learning culture**: Existing events like Mundolingo regularly draw 100+ participants, demonstrating strong market demand
- **Underserved user segment**: Our research revealed that 63.6% of users prefer small-group exchanges, but no existing products specifically serve this preference

### Competitive Advantage & Positioning

Rather than competing with global apps like Tandem on features, this approach creates competitive advantage through strategic focus:

- **Local network effects**: Neighborhood-based matching creates stronger community ties and higher retention
- **Quality-first positioning**: Small-scale exchanges command premium positioning compared to large, unfocused events
- **Clear product differentiation**: Exchange-first architecture eliminates confusion with social/dating platforms

### Business Model Potential

The validated user preferences suggest multiple monetization opportunities:

- **Freemium model**: Basic exchanges free, premium features (advanced filtering, verified profiles) paid
- **Community partnerships**: Revenue sharing with local language schools, co-working spaces, and cultural organizations
- **Geographic expansion**: Proven model could scale to other expat-heavy cities (Mexico City, Lisbon, Berlin)

### Validation Roadmap

The MVP launch will provide critical data points for assessing product-market fit:

- **Exchange completion rates**: Measuring how many created exchanges result in actual meetups
- **User retention patterns**: Tracking repeat usage and community formation over time
- **Monetization validation**: Testing willingness to pay for premium features through user interviews

This represents the type of focused, community-driven product opportunity that can achieve sustainable growth without requiring massive scale to succeed.

## Learnings & Reflection

This project reinforced several key principles for product development:

**1. User Research Drives Everything**

The insight about users preferring smaller exchanges over large events became the core differentiator, and the photos vs. avatars tension required direct user feedback to resolve properly.

**2. Prototype Early and Often**

AI-assisted prototyping allowed me to test assumptions quickly, and the 6 user testing sessions revealed critical navigation and trust issues that would have been expensive to fix post-launch.

**3. Validate Before Building**

The decision to resolve the photos/verification question through user testing before MVP development saved significant architectural rework and ensures the core trust model aligns with user needs.

**4. Start Lean, Iterate Fast**

Focusing the MVP on core functionality while planning post-launch iterations based on real usage prevents feature creep and ensures rapid time-to-market for validation.

**4. Technical Decisions Are Product Decisions**

The switch from PWA to React Native was driven by iOS push notification limitations that would have created significant UX friction. This technical decision directly impacts product success - users need seamless notifications to coordinate language exchanges effectively. Choosing React Native for cross-platform development was as much a product decision as a technical one - writing once for both iOS and Android ensures consistent user experience while maintaining development efficiency.

## Project Links

-   **Live Prototype**: https://v0-language-exchange-prototype-dp.vercel.app/
-   **Figma Wireframes**: https://www.figma.com/design/qXhMH8P2ZuuoEhHRwykW5x/BA-Language-Connect?node-id=0-1&t=i7zRsP7Hcu2KsxSv-1
-   **MVP Launch**: _(Coming Soon)_