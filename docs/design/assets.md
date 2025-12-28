# Design Assets Documentation

This document catalogs all design assets used in the LearnSlice website, their sources, and their intended usage.

## Asset Locations

All design assets are stored in `/docs/design/` directory.

## Image Assets

### Hero Section

#### `hero-background-img.jpg`
- **Usage**: Hero section background image
- **Description**: Industrial/learning theme showing a woman in white hard hat and man in yellow safety vest looking at a tablet, with industrial robotic arms in the background
- **Dimensions**: Optimize for 1440px width
- **Format**: JPG (convert to WebP for production)
- **Alt Text**: "Industrial workers using LearnSlice platform for training"

### Comparison Section Images

#### `getty-images-JWVHmFl5ve4-unsplash.jpg`
- **Usage**: "Companies Without LearnSlice" card image
- **Description**: Stressed person at computer (negative scenario)
- **Dimensions**: 512x240px (as per design)
- **Format**: JPG (convert to WebP for production)
- **Alt Text**: "Traditional training challenges"

#### `ahmed-FAxYHYnvbyQ-unsplash.jpg`
- **Usage**: "Companies With LearnSlice" card image (or similar positive scenario)
- **Description**: Happy/successful learning scenario
- **Dimensions**: 512x240px (as per design)
- **Format**: JPG (convert to WebP for production)
- **Alt Text**: "Successful learning with LearnSlice"

### Additional Stock Images

#### `ramses-cervantes-f0v-znYUFU0-unsplash.jpg`
- **Usage**: Potential use in testimonials or feature sections
- **Description**: Stock photo (verify usage in design)
- **Format**: JPG (convert to WebP for production)

### Design Exports

#### `learnslice-landingpage-en.jpg`
- **Usage**: Reference design for English version
- **Description**: Full-page design export (English)
- **Dimensions**: 1440px width (full page height)
- **Format**: JPG
- **Note**: Reference only, not used in production

#### `learnslice-landingpage-de.jpg`
- **Usage**: Reference design for German version
- **Description**: Full-page design export (German)
- **Dimensions**: 1440px width (full page height)
- **Format**: JPG
- **Note**: Reference only, not used in production

## Logo Assets

### Company Logos (Trusted By Section)

The following company logos are referenced in the design but need to be sourced separately:

1. **Draeger** - Logo image needed
2. **EMC** - Logo image needed
3. **tremona** - Logo image needed
4. **real digital** - Logo image needed
5. **Fachhochschule Dortmund** - Logo image needed
6. **Universität zu Köln** - Logo image needed
7. **DO** - Logo image needed

**Logo Requirements**:
- Format: SVG preferred, PNG fallback
- Dimensions: Variable (maintain aspect ratio)
- Background: Transparent or white
- Location: `/public/images/logos/`
- Naming: `{company-name}-logo.svg` or `{company-name}-logo.png`

## Screenshot Assets

### LearnSlice Platform Screenshots

#### `learnslice-copilot-04` (referenced in Figma)
- **Usage**: "How It Works" section and "Learning Built for Results" section
- **Description**: Screenshot of LearnSlice dashboard/interface
- **Dimensions**: 
  - Main display: 561x399px
  - Carousel items: 481x342px
  - Full width: 731x520px
- **Format**: PNG or JPG (convert to WebP for production)
- **Location**: `/public/images/screenshots/`
- **Alt Text**: "LearnSlice AI Mentor dashboard interface"

**Note**: These screenshots need to be exported from the actual LearnSlice platform or provided by the design team.

## Testimonial Images

### Customer Profile Photos

#### Testimonial 1: Lienne Julie Wolff
- **Source**: Referenced in Figma as `Lienne-Julie-Wolff`
- **Usage**: Testimonial card profile picture
- **Dimensions**: 120x120px (circular)
- **Format**: JPG or PNG (convert to WebP for production)
- **Location**: `/public/images/testimonials/lienne-julie-wolff.jpg`
- **Alt Text**: "Lienne Julie Wolff, Apprentice Industrial Clerk at Tremonia Mobility GmbH"

#### Testimonial 2: Kinga Patrycja Peters
- **Source**: Referenced in Figma as `Kinga-Patrycja-Peters`
- **Usage**: Testimonial card profile picture
- **Dimensions**: 120x120px (circular)
- **Format**: JPG or PNG (convert to WebP for production)
- **Location**: `/public/images/testimonials/kinga-patrycja-peters.jpg`
- **Alt Text**: "Kinga Patrycja Peters, Employment Promotion at Regional Agency Westphalian Ruhr Area"

#### Testimonial 3: Philipp Schulte
- **Source**: Referenced in Figma as `Philipp-Schulte`
- **Usage**: Testimonial card profile picture
- **Dimensions**: 120x120px (circular)
- **Format**: JPG or PNG (convert to WebP for production)
- **Location**: `/public/images/testimonials/philipp-schulte.jpg`
- **Alt Text**: "Philipp Schulte, Director of Studies at Carl-Severing Vocational College"

## Icon Assets

### Hugeicons Library

All icons are sourced from **Hugeicons** (free version). The following icons are used:

1. **sparkles** (`hugeicons:sparkles`)
   - Usage: Hero badge, feature cards, trust indicators
   - Size: 24px, 32px, 48px (various)

2. **book-02** (`hugeicons:book-02`)
   - Usage: "Bulletproof Assessments" feature card
   - Size: 32px

3. **award-04** (`hugeicons:award-04`)
   - Usage: "Executive Analytics" feature card
   - Size: 32px

4. **pencil-edit-02** (`hugeicons:pencil-edit-02`)
   - Usage: "Proven Gamification" feature card
   - Size: 32px

5. **circle-arrow-left-02** (`hugeicons:circle-arrow-left-02`)
   - Usage: Slider navigation (previous)
   - Size: 64px

6. **circle-arrow-right-02** (`hugeicons:circle-arrow-right-02`)
   - Usage: Slider navigation (next)
   - Size: 64px

**Icon Implementation**:
- Use SVG format from Hugeicons library
- Inline SVG or icon component
- Color: White (#FFFFFF) for most icons
- Location: `/src/components/icons/` or inline in components

## Decorative Elements

### Background Patterns

#### Vector/Pattern Elements (referenced in Figma)
- **Usage**: CTA section background decoration
- **Description**: Decorative vector patterns
- **Format**: SVG
- **Location**: `/public/images/decorative/`
- **Note**: These may be CSS gradients or SVG patterns instead of images

## Asset Optimization Guidelines

### Image Optimization

1. **Format Conversion**
   - Convert all JPG/PNG to WebP format
   - Provide fallback formats for older browsers
   - Use `<picture>` element with multiple sources

2. **Compression**
   - Optimize all images before deployment
   - Target file sizes:
     - Hero images: < 200KB
     - Card images: < 100KB
     - Logos: < 50KB
     - Screenshots: < 150KB

3. **Responsive Images**
   - Use `srcset` for different screen sizes
   - Provide multiple resolutions:
     - Mobile: 640px width
     - Tablet: 768px width
     - Desktop: 1440px width

4. **Lazy Loading**
   - Implement lazy loading for below-fold images
   - Use `loading="lazy"` attribute
   - Consider Intersection Observer for advanced lazy loading

### SVG Optimization

1. **Inline SVG**
   - Prefer inline SVG for icons
   - Remove unnecessary attributes
   - Optimize paths

2. **SVG Sprites**
   - Consider SVG sprite sheet for icons
   - Reduces HTTP requests

## Asset Organization

### Directory Structure

```
public/
├── images/
│   ├── logos/
│   │   ├── draeger-logo.svg
│   │   ├── emc-logo.svg
│   │   ├── tremona-logo.svg
│   │   ├── real-digital-logo.svg
│   │   ├── fh-dortmund-logo.svg
│   │   ├── uni-koeln-logo.svg
│   │   └── do-logo.svg
│   ├── hero/
│   │   └── hero-background.webp
│   ├── screenshots/
│   │   └── learnslice-dashboard.webp
│   ├── testimonials/
│   │   ├── lienne-julie-wolff.webp
│   │   ├── kinga-patrycja-peters.webp
│   │   └── philipp-schulte.webp
│   └── decorative/
│       └── [pattern files]
└── fonts/
    └── [font files if self-hosting]
```

## Missing Assets

The following assets need to be sourced or created:

1. **Company Logos** (7 logos for Trusted By section)
2. **LearnSlice Platform Screenshots** (dashboard/interface screenshots)
3. **Testimonial Profile Photos** (3 customer photos)
4. **Decorative Pattern Files** (if not using CSS)

## Asset Sources

### Figma Design Files
- **File**: LearnSlice Landing Page Design
- **Node ID**: 1249-2 (English), 1249-284 (German)
- **URL**: https://www.figma.com/design/kNvmlMevsCGaAtmpk4C8vp/Learnslice?node-id=1249-2

### Stock Photos
- Unsplash images (check licensing)
- Getty Images (check licensing)

### Icons
- **Source**: Hugeicons (free version)
- **URL**: https://hugeicons.com/
- **License**: Free for commercial use (verify license)

## Usage Notes

1. **Copyright**: Ensure all assets have proper licensing for commercial use
2. **Attribution**: Check if any assets require attribution
3. **Updates**: Logos and testimonials may need periodic updates
4. **Accessibility**: All images must have descriptive alt text
5. **Performance**: Monitor image loading performance and optimize as needed

## Asset Checklist

- [ ] All hero images optimized and converted to WebP
- [ ] Company logos sourced and optimized
- [ ] Platform screenshots exported and optimized
- [ ] Testimonial photos obtained and optimized
- [ ] Icons implemented from Hugeicons
- [ ] All images have proper alt text
- [ ] Responsive image sets created
- [ ] Lazy loading implemented
- [ ] Asset licenses verified
- [ ] Asset organization structure created

