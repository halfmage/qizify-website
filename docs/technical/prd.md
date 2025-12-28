# LearnSlice Website - Technical Product Requirements Document

## Technology Stack

### Core Framework
- **Astro** (v4.x or latest stable)
  - Static site generation
  - Component islands architecture
  - Built-in optimization

### Styling
- **TailwindCSS** (v3.x)
  - Utility-first CSS framework
  - Custom theme configuration
  - Responsive design utilities

### Typography
- **Poppins** (Google Fonts)
  - Weights: 400 (Regular), 600 (SemiBold), 700 (Bold)
  - Styles: Regular, Italic
  - Self-hosted or Google Fonts CDN

### Icons
- **astro-icon** (Icon component library)
  - Streamlined SVG icon management
  - Supports local SVG icons and Iconify icons
  - Type-safe icon components
  - Usage: `<Icon name="icon-name" />`
  
- **Hugeicons** (Free version)
  - SVG icons to be used with astro-icon
  - Icon set: sparkles, book-02, award-04, pencil-edit-02, circle-arrow-left-02, circle-arrow-right-02
  - Icons stored in `src/icons/` directory
  - Can also use Iconify collection if available

### Slider Library
- **Swiper.js** (v11.x)
  - Logo carousel (auto-play, infinite loop)
  - Testimonial slider (navigation arrows, dots, 3 slides)
  - Lightweight and performant

### Language
- **TypeScript** (v5.x)
  - Type safety
  - Better IDE support
  - Modern JavaScript features

### Build Tools
- **Node.js** (v18+)
- **npm** or **pnpm** (package manager)
- **Vite** (bundled with Astro)

### Astro Integrations
- **@astrojs/tailwind** (Official Tailwind CSS integration)
  - Automatic Tailwind setup and configuration
  - Optimized for Astro's build process
  - Install: `npx astro add tailwind`
  
- **@astrojs/sitemap** (Official sitemap generation)
  - Automatic sitemap.xml generation
  - Supports multiple routes (English `/` and German `/de`)
  - SEO optimization with hreflang tags
  - Install: `npx astro add sitemap`
  
- **astro-icon** (Icon component library)
  - Streamlined SVG icon usage
  - Supports local icons and Iconify icons
  - Type-safe icon components
  - Install: `npm install astro-icon`
  - Icons stored in `src/icons/` directory

## Architecture Decisions

### Project Structure

```
qizify-website/
├── docs/
│   ├── business/
│   │   └── prd.md
│   ├── technical/
│   │   └── prd.md
│   └── design/
│       └── [design assets]
├── public/
│   ├── images/
│   │   ├── logos/
│   │   ├── hero/
│   │   ├── testimonials/
│   │   └── screenshots/
│   └── fonts/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── LogosSlider.astro
│   │   ├── SavingsComparison.astro
│   │   ├── HowItWorks.astro
│   │   ├── LearningResults.astro
│   │   ├── CompanySlider.astro
│   │   ├── Testimonials.astro
│   │   ├── WhyChooseUs.astro
│   │   ├── CTAFooter.astro
│   │   ├── LanguageSwitcher.astro
│   │   └── Button.astro
│   ├── icons/
│   │   └── [SVG icon files from Hugeicons]
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── content/
│   │   ├── en.json
│   │   └── de.json
│   ├── styles/
│   │   └── global.css
│   └── pages/
│       ├── index.astro (English - default route `/`)
│       └── de/
│           └── index.astro (German route `/de`)
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

### Component Architecture

#### Astro Components
- Server-side rendered by default
- Zero JavaScript unless explicitly needed
- Use `client:load` directive for interactive components

#### Interactive Components (Astro Islands)
- **LogosSlider**: Client-side slider with Swiper.js
- **CompanySlider**: Client-side slider with Swiper.js
- **LanguageSwitcher**: Navigation component for language routes

#### Static Components
- All other components are static (Header, Hero, etc.)
- Content injected from JSON files at build time
- No client-side JavaScript needed

### Content Management

#### JSON Structure
```json
{
  "nav": {
    "logo": "LearnSlice",
    "menu": ["AI Mentor", "How It Works", "Use Cases", "FAQ"],
    "cta": "Request Demo"
  },
  "hero": {
    "badge": "Exam Material + Company Data",
    "headline": "Automate mentoring. Save money now.",
    "subheadline": "Best of exam and job-specific learning paths...",
    "ctaPrimary": "Request Demo",
    "ctaSecondary": "How it works"
  },
  // ... more sections
}
```

#### Language Files
- `src/content/en.json` - English content (used for `/` route)
- `src/content/de.json` - German content (used for `/de` route)
- Identical structure for both files
- Imported at build time in respective page components
- Each route imports its corresponding language file

### Routing & Language Implementation

#### Approach
- **English**: Default route at `/` (root)
- **German**: Route at `/de`
- Separate Astro pages for each language
- Language switcher component in navigation
- Server-side rendering for each route

#### Route Structure
```
/                    → English version (index.astro)
/de                  → German version (de/index.astro)
```

#### Implementation Details
- Each route loads the appropriate content JSON file (`en.json` or `de.json`)
- Content is injected at build time (static generation)
- Language switcher provides navigation between routes
- No client-side JavaScript needed for language switching
- SEO-friendly URLs for each language

#### Language Switcher Component
- Displays current language
- Provides links to switch between `/` and `/de`
- Can be placed in header navigation
- Highlights active language

### Slider Implementation

#### Logo Slider (Trusted By Section)
```typescript
// Swiper configuration
{
  slidesPerView: 'auto',
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  breakpoints: {
    640: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 6 },
    1280: { slidesPerView: 8 }
  }
}
```

#### Company Slider (Made for Your Company)
```typescript
// Swiper configuration
{
  slidesPerView: 1,
  spaceBetween: 32,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  loop: false
}
```

### Styling Approach

#### Tailwind Configuration
```javascript
// tailwind.config.mjs
{
  theme: {
    extend: {
      colors: {
        primary: '#6665f1',
        dark: '#000000',
        gray: {
          DEFAULT: '#434354',
          light: '#666666'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      }
    }
  }
}
```

#### Custom CSS
- Global styles in `src/styles/global.css`
- Poppins font imports
- Base resets and utilities
- Custom animations if needed

### Astro Configuration

#### astro.config.mjs
```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://learnslice.com',
  integrations: [
    tailwind({
      // Tailwind integration automatically configured
      // Custom config in tailwind.config.mjs
    }),
    sitemap({
      // Automatically generates sitemap.xml
      // Includes all routes: / and /de
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          de: 'de',
        },
      },
    }),
  ],
  output: 'static',
  build: {
    assets: 'assets',
  },
});
```

#### Integration Setup Commands
```bash
# Install Tailwind CSS integration
npx astro add tailwind

# Install sitemap integration
npx astro add sitemap

# Install astro-icon (manual install)
npm install astro-icon
```

#### Icon Configuration
- Icons stored in `src/icons/` directory
- Use `<Icon>` component from `astro-icon`
- Example usage:
  ```astro
  ---
  import { Icon } from 'astro-icon/components';
  ---
  <Icon name="sparkles" />
  ```
- Supports both local SVG files and Iconify icons

#### Sitemap Configuration
- Automatically generates `sitemap.xml` during build
- Includes both routes:
  - `https://learnslice.com/` (English)
  - `https://learnslice.com/de/` (German)
- Properly configured with hreflang tags for SEO
- Updates automatically when routes are added

### Responsive Design

#### Breakpoints
- **sm**: 640px (mobile landscape)
- **md**: 768px (tablet)
- **lg**: 1024px (desktop)
- **xl**: 1280px (large desktop)
- **2xl**: 1536px (extra large)

#### Design Width
- Desktop: 1440px max-width
- Container padding: 128px (desktop), 24px (mobile)
- Mobile-first approach

#### Responsive Patterns
- Grid layouts: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Typography: Fluid scaling with clamp()
- Images: Responsive with srcset
- Navigation: Mobile hamburger menu (if needed)

### Performance Requirements

#### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

#### Optimization Strategies

1. **Images**
   - WebP format with fallbacks
   - Lazy loading for below-fold images
   - Responsive images with srcset
   - Optimize all images from design folder

2. **JavaScript**
   - Minimal JavaScript (only for sliders)
   - Code splitting with Astro islands
   - Tree shaking for unused code

3. **CSS**
   - Tailwind purging (remove unused styles)
   - Critical CSS inlined
   - Defer non-critical CSS

4. **Fonts**
   - Preload Poppins font
   - Font-display: swap
   - Subset fonts (only needed characters)

5. **Assets**
   - Compress images (TinyPNG, ImageOptim)
   - SVG optimization
   - CDN for static assets (if applicable)
   - See `docs/design/assets.md` for complete asset inventory and usage guidelines

### Accessibility Requirements

#### WCAG 2.1 AA Compliance
- **Color Contrast**: Minimum 4.5:1 for text
- **Keyboard Navigation**: All interactive elements accessible
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Focus Indicators**: Visible focus states
- **Alt Text**: All images have descriptive alt text

#### Implementation
- Semantic HTML5 elements
- ARIA labels for icons and buttons
- Skip links for navigation
- Proper heading hierarchy (h1 → h2 → h3)
- Form labels and error messages

### SEO Requirements

#### Meta Tags
- Title tag: "LearnSlice - AI-Powered Learning Platform | Automate Mentoring"
- Meta description: Compelling description with keywords
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URLs (one per route)
- Hreflang tags for language alternates:
  - `<link rel="alternate" hreflang="en" href="https://learnslice.com/" />`
  - `<link rel="alternate" hreflang="de" href="https://learnslice.com/de/" />`
  - `<link rel="alternate" hreflang="x-default" href="https://learnslice.com/" />`

#### Sitemap
- Automatically generated by `@astrojs/sitemap` integration
- Located at `/sitemap.xml`
- Includes all routes with proper language tags
- Submitted to search engines for indexing

#### Structured Data
- Organization schema
- Product schema (if applicable)
- Review schema (for testimonials)
- Breadcrumb schema

#### Content
- Semantic HTML structure
- Proper heading hierarchy
- Descriptive alt text for images
- Internal linking structure

### Browser Support

#### Target Browsers
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

#### Polyfills
- Modern JavaScript features (if needed)
- CSS Grid and Flexbox (widely supported)
- Intersection Observer (for lazy loading)

### Development Workflow

#### Initial Setup
```bash
# Create new Astro project (if starting from scratch)
npm create astro@latest

# Install Astro integrations
npx astro add tailwind
npx astro add sitemap

# Install additional dependencies
npm install astro-icon swiper

# Install all dependencies
npm install
```

#### Local Development
```bash
npm run dev  # Start dev server on localhost:4321
```

#### Build Process
```bash
npm run build  # Build for production (generates sitemap.xml automatically)
npm run preview  # Preview production build
```

#### Code Quality
- ESLint for JavaScript/TypeScript
- Prettier for code formatting
- Type checking with TypeScript
- Pre-commit hooks (optional)

### Deployment Strategy

#### Hosting Options
- **Vercel** (recommended for Astro)
- **Netlify** (alternative)
- **Cloudflare Pages** (alternative)
- **Self-hosted** (if required)

#### Build Output
- Static HTML, CSS, JS files
- No server required
- CDN-friendly

#### Environment Variables
- Analytics IDs (if needed)
- API keys (if needed)
- Feature flags (if needed)

### Component Specifications

#### Header Component
- **Props**: None (reads from content JSON)
- **Features**: Logo, navigation menu, language switcher, CTA button
- **Responsive**: Mobile hamburger menu (if needed)
- **Interactive**: Language switcher (navigation links), navigation links

#### Hero Component
- **Props**: None (reads from content JSON)
- **Features**: Background image, badge, headline, subheadline, CTAs
- **Responsive**: Stack on mobile, side-by-side on desktop
- **Interactive**: CTA buttons

#### LogosSlider Component
- **Props**: `logos: string[]` (logo image URLs)
- **Features**: Auto-playing carousel, infinite loop
- **Responsive**: Adjust slides per view by breakpoint
- **Interactive**: Swiper.js slider

#### SavingsComparison Component
- **Props**: None (reads from content JSON)
- **Features**: Two side-by-side cards, images, bullet points
- **Responsive**: Stack on mobile, side-by-side on desktop
- **Interactive**: None (static)

#### HowItWorks Component
- **Props**: None (reads from content JSON)
- **Features**: Badge, headline, 3-step process, screenshot
- **Responsive**: Stack on mobile, side-by-side on desktop
- **Interactive**: None (static)

#### LearningResults Component
- **Props**: None (reads from content JSON)
- **Features**: Badge, headline, screenshot carousel, 4 feature cards
- **Responsive**: Grid layout adjusts by breakpoint
- **Interactive**: Screenshot carousel (if implemented)

#### CompanySlider Component
- **Props**: None (reads from content JSON)
- **Features**: Headline, slider with 3 slides, navigation arrows, dots
- **Responsive**: Single slide on mobile, adjust spacing
- **Interactive**: Swiper.js slider with navigation

#### Testimonials Component
- **Props**: None (reads from content JSON)
- **Features**: Headline, 3 testimonial cards with images
- **Responsive**: Stack on mobile, grid on desktop
- **Interactive**: None (static)

#### WhyChooseUs Component
- **Props**: None (reads from content JSON)
- **Features**: Headline, 4 trust indicator cards
- **Responsive**: Grid layout adjusts by breakpoint
- **Interactive**: None (static)

#### CTAFooter Component
- **Props**: None (reads from content JSON)
- **Features**: Headline, subheadline, CTA button, background pattern
- **Responsive**: Centered layout, adjust padding
- **Interactive**: CTA button

### Data Flow

```
Content JSON Files (en.json or de.json)
    ↓
Astro Page Component (index.astro or de/index.astro)
    ↓
Astro Components (Server-side)
    ↓
HTML Output (Static)
    ↓
Browser (Route: / or /de)
```

### Error Handling

#### Content Loading
- Fallback to English if language file fails to load
- Graceful degradation if JSON structure is invalid
- Console warnings for missing content keys

#### Slider Errors
- Fallback to static display if Swiper fails to initialize
- Error boundaries for component failures
- User-friendly error messages

### Testing Strategy

#### Unit Tests
- Component rendering tests
- Route rendering (English and German)
- Content loading tests

#### Integration Tests
- Slider functionality
- Language route navigation
- Navigation interactions

#### E2E Tests
- Full page flow
- Form submissions (if applicable)
- Cross-browser testing

#### Performance Tests
- Lighthouse audits
- Core Web Vitals monitoring
- Load time testing

### Security Considerations

#### Content Security Policy
- Restrict inline scripts
- Allow only trusted sources for fonts and images
- Prevent XSS attacks

#### Data Privacy
- No user data collection without consent
- GDPR-compliant analytics (if implemented)
- Cookie consent (if needed)

### Monitoring & Analytics

#### Analytics Integration
- Google Analytics 4 (if applicable)
- Event tracking for CTAs
- Language preference tracking
- Scroll depth tracking

#### Error Monitoring
- Sentry or similar (if applicable)
- Console error logging
- User feedback collection

### Future Enhancements

#### Phase 2 Features
- Multi-language support beyond EN/DE
- A/B testing framework
- Advanced analytics dashboard
- CMS integration for content updates
- Blog section
- Case studies page

#### Technical Debt
- Consider migrating to Astro Content Collections
- Evaluate icon library alternatives
- Optimize bundle size further
- Implement service worker for offline support

