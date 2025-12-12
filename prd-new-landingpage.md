# Product Requirements for the new homepage (landingpage for AI Mentor)

**Product:** LearnSlice Enterprise AI Mentor Landing Page
**Document Type:** PRD – Marketing Website
**Status:** Ready for Implementation
**Owner:** LearnSlice
**Audience:** Enterprise HR, L&D, Talent, Operations
**Primary Goal:** Generate qualified **enterprise pilot requests**

---

## 1. Objective & Success Criteria

### 1.1 Primary Objective

Create a **high-conversion, enterprise-focused one-page landing page** that positions LearnSlice as an **AI Learning Mentor chatbot**, optimized for pilot requests.

### 1.2 Success Metrics (KPIs)

* Primary conversion: **Pilot requests submitted**
* Secondary engagement: **Demo video plays**
* Scroll depth ≥ 70%
* Time on page ≥ 90 seconds
* CTA click-through rate ≥ 3–5%

---

## 2. Scope

### In Scope

* One-pager enterprise landing page (`/en`)
* AI Mentor–first positioning
* Modal-based YouTube demo
* Motion-based animations
* SEO-optimized structure
* GDPR-compliant analytics

### Out of Scope

* Pricing
* Education / non-enterprise messaging
* Legacy learning platform content (moved to subpage)
* Authentication or backend logic

---

## 3. Target Audience

### Primary

* HR Directors
* Learning & Development Managers
* Talent & People Ops Leaders
* Enterprise Training Managers

### Buyer Intent

* Faster onboarding
* Scalable mentoring
* Reduced attrition
* Measurable learning ROI

---

## 4. Page Structure (One-Pager)

### Sections (in order)

1. Navbar (sticky)
2. Hero (AI Mentor positioning)
3. Enterprise Trust Signals
4. Problem Statement
5. AI Mentor Solution
6. How It Works
7. Enterprise Use Cases
8. Enterprise Features
9. Business Impact / ROI
10. Why LearnSlice
11. Vision
12. Primary CTA
13. FAQ
14. Footer

---

## 5. Navigation Requirements

### Navbar

* Sticky on scroll
* Minimal items (anchors):

  * AI Mentor
  * How It Works
  * Use Cases
  * Business Impact
  * Pilot Program
  * FAQ
* Secondary nav item:

  * **Learning Platform** → links to legacy subpage

### CTA Behavior

* **Primary CTA:**

  * Label: `Request Pilot`
  * Scrolls to CTA section or opens form
* **Secondary CTA:**

  * Label: `Watch Demo`
  * Opens modal with embedded YouTube video

---

## 6. CTA Requirements

### Primary CTA – Request Pilot

* Appears:

  * In navbar
  * Hero section
  * Final CTA section
* Visual priority:

  * Brand primary color (`#1DE1EE`)
* Action:

  * Scroll to form OR open external form (e.g. HubSpot / Typeform)

### Secondary CTA – Watch Demo

* Opens modal overlay
* YouTube iframe embed
* Autoplay enabled
* Close on:

  * ESC
  * Click outside
  * Close button

---

## 7. Demo Modal – Functional Requirements

### Modal Behavior

* Triggered via Alpine.js
* Accessible (focus trap, ESC close)
* Lazy-load iframe only when opened
* Stops video playback on close

### Technical Implementation (Example)

* Alpine.js state: `x-data="{ open: false }"`
* Conditional iframe render
* YouTube embed with `?autoplay=1`

---

## 8. Motion & Animation Requirements

### Library

* **Motion One (motion.dev)**

### Usage Principles

* Subtle, professional, enterprise-safe
* No excessive animation
* Respect `prefers-reduced-motion`

### Animations

* Hero text fade + slide on load
* Section reveal on scroll
* CTA hover micro-interactions
* Modal open/close animation

### Example Use Cases

* `motion.animate()` for hero entrance
* Scroll-triggered animations combined with `sal.js`
* Button hover scale (very subtle)

---

## 9. Tech Stack Constraints & Requirements

### Framework

* **Eleventy (11ty) v2.0.1**
* Nunjucks templates

### Styling

* Tailwind CSS v3.4.1
* Existing brand colors:

  * Primary: `#1DE1EE`
  * Secondary: `#E50CEA`
  * Accent: `#FFC129`
* Responsive by default (mobile → desktop)

### JavaScript

* Alpine.js (state, modal, interactions)
* Motion.dev (animations)
* Sal.js (scroll triggers, optional)

### Performance

* Static output only
* No heavy JS bundles
* Lighthouse score ≥ 90

---

## 10. Content Management

### Content Source

* Data-driven where possible via `_data/`
* Static copy in Nunjucks templates

### Multilingual

* English first (`/en`)
* German version optional later
* Language switch must persist page context

---

## 11. SEO Requirements

### Meta

* Unique title & description
* Open Graph + Twitter cards
* Structured headings (H1–H3)

### Keywords

* AI mentor
* AI learning assistant
* Enterprise onboarding AI
* AI chatbot for training
* Employee upskilling AI

---

## 12. Analytics & Tracking

### Tool

* Simple Analytics (existing)

### Events to Track

* `cta_request_pilot_click`
* `demo_video_open`
* `demo_video_play`
* Scroll depth (25 / 50 / 75%)

---

## 13. Accessibility & Compliance

* WCAG 2.1 AA
* Keyboard navigable modal
* ARIA labels for buttons
* GDPR-compliant by default
* No cookies required

---

## 14. Acceptance Criteria

### Functional

* One-pager loads < 2s
* CTA works across devices
* Demo modal opens/closes cleanly
* Animations do not block content

### UX

* Clear enterprise positioning within 5 seconds
* AI Mentor value proposition immediately visible
* No educational / non-enterprise messaging

### Technical

* Compatible with current 11ty pipeline
* Deployed via Netlify without config changes

---

## 15. Risks & Mitigations

| Risk                    | Mitigation                     |
| ----------------------- | ------------------------------ |
| Too much animation      | Keep motion subtle & optional  |
| Confusing product scope | Strict AI Mentor language only |
| CTA friction            | Minimal form fields            |

---

## 16. Future Enhancements (Not in Scope)

* ROI calculator
* Case studies page
* Role-based landing variants
* Demo personalization by industry