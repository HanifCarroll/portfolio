---
title: "Buenos Aires Language Connect"
description: "A user research-driven approach to solving language exchange UX challenges in Buenos Aires. From user interviews to functional prototype, exploring how small-scale exchanges can create better learning experiences."
tags: ["UX Research", "Product Design", "Prototyping"]
image: "./language-exchange.jpeg"
imageAlt: "Buenos Aires Language Connect screenshot"
order: 1
toolsUsed:
    [
        "User Interviews",
        "Google Forms",
        "Figma",
        "AI-Assisted Prototyping (v0)",
        "React Native",
    ]
role: "UX Engineer (Solo Project)"
figmaLink: "https://www.figma.com/design/qXhMH8P2ZuuoEhHRwykW5x/BA-Language-Connect?node-id=0-1&t=i7zRsP7Hcu2KsxSv-1"
siteLink: "https://v0-language-exchange-prototype-dp.vercel.app/"
isFeatured: true
---

## The Problem

Language learners in Buenos Aires face a frustrating paradox: while the city offers numerous language exchange opportunities, the existing solutions create more barriers than bridges. Large-scale events like Mundolingo become overwhelming social gatherings where meaningful practice gets lost in the noise. Meanwhile, existing apps like Tandem struggle with misaligned user intentions, often feeling more like dating platforms than serious learning tools.

The result is that language learners spend more time searching for quality practice partners than actually improving their skills, leading to frustration and abandoned language goals.

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

**Age:** 39 | **Location:** Palermo | **Goal:** English fluency + social connections

Carolina prefers small group exchanges (3-4 people) where diverse perspectives create rich conversations. She's frustrated by the impersonal nature of large events and wants to build lasting connections through language practice.

**Key Needs:**

-   Easy group formation with compatible interests
-   Conversation topic suggestions
-   Ability to maintain connections with favorite partners

### David (The Focused Practitioner)

**Age:** 44 | **Location:** Belgrano | **Goal:** Advanced Spanish refinement

David strictly prefers one-on-one exchanges for focused practice. As a financial analyst, he wants to improve professional terminology and make efficient use of his limited free time.

**Key Needs:**

-   Advanced filtering for serious language partners
-   Structured practice focused on specific skills
-   Clear indicators for one-on-one availability

## Design & Prototyping Philosophy

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

### Key Design Decisions

**1. Auto-Generated Avatars**

-   Eliminates dating app associations
-   Reduces appearance-based judgments
-   Focuses attention on language goals and interests

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

## MVP Feature Set

Based on user research insights, the initial version focuses on core functionality:

### Essential Features

-   **Basic User Profiles**: Auto-generated avatars, languages, neighborhood, interests, and learning goals
-   **Exchange Creation**: Simple posting of 1-on-1 or small group requests
-   **Exchange Discovery**: Browse and filter available opportunities
-   **Coordination Messaging**: Basic chat functionality for meetup planning only

### Intentionally Excluded (For Now)

-   Complex matching algorithms
-   Social features (likes, follows, feeds)
-   In-app video calling
-   Extensive user profiles

This lean approach allows for rapid user testing and iteration based on real usage patterns rather than assumed needs.

## Technical Implementation

## Technical Implementation

**Technology Stack:** React Native

**Why React Native for MVP?**

-   Cross-platform development for both iOS and Android from a single codebase
-   Large component ecosystem accelerates development
-   Hot reloading enables rapid iteration and testing
-   Native performance for smooth user experience
-   JavaScript familiarity makes onboarding new developers easier

The technical architecture focuses on maximum platform reach with minimal development overhead, allowing for quick feature iteration based on user feedback.

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

**Phase 3: React Native MVP Development**

-   Converting learnings from prototype into production-ready code
-   Adding data persistence and user authentication
-   Preparing for real user testing

## Next Steps & Validation Plan

### Immediate User Testing (Next 2 weeks)

-   5-8 user testing sessions with prototype
-   Focus on core flow: profile creation → exchange discovery → meetup coordination

### Key Questions to Validate

1. **Do users understand the exchange-first model?**
2. **Are filtering options necessary for a minimally useful product?**
3. **Does the simplified messaging achieve coordination without becoming social media?**
4. **How effective are auto-generated avatars at reducing dating app associations while giving users confidence?**

### Success Metrics

-   **Task completion rate** for creating and joining exchanges
-   **User satisfaction** with matching quality
-   **Conversion rate** from exchange creation to actual meetups
-   **User retention** after first exchange experience

### Iteration Plan

Based on testing results, priority improvements may include:

-   Enhanced filtering options
-   Meeting spot suggestions
-   Calendar integration
-   Basic rating/feedback system

## Learnings & Reflection

This project reinforced several key principles for product development:

**1. User Research Drives Everything**
The insight about users preferring smaller exchanges over large events became the core differentiator, and it's something I wouldn't have discovered without direct user feedback.

**2. Prototype Early and Often**
AI-assisted prototyping allowed me to test assumptions quickly rather than building based on untested designs.

**3. Constraints Spark Creativity**
Limiting the MVP scope forced creative solutions and prevented feature creep that could dilute the core value proposition.

**4. Technical Decisions Impact UX**
Choosing React Native for multi-platform deployment was as much a UX decision as a technical one - more user feedback means more confidence that I'm developing the right features.

## Project Links

-   **Live Prototype**: https://v0-language-exchange-prototype-dp.vercel.app/
-   **Figma Wireframes**: https://www.figma.com/design/qXhMH8P2ZuuoEhHRwykW5x/BA-Language-Connect?node-id=0-1&t=i7zRsP7Hcu2KsxSv-1
