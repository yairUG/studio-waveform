# Waveform Studio | B2B Landing Page

## 1. Project Overview
**Brand Identity:** High-end architectural shelving. Pivot from Marketplace to B2B Luxury.
**Design Aesthetic:** "Quiet Luxury" — Minimalist, charcoal/off-white palette, asymmetric layouts, sophisticated serif headings.
**Target Audience:** Architects, Interior Designers, Law Firm Partners.

## 2. Project Structure
waveform-studio/
├── index.html       # Semantic structure & Tailwind implementation
├── style.css        # Custom typography & animation states
├── script.js        # Scroll-reveal logic & UI interactions
└── images/          # Assets (Source: ~/Desktop/personal-projects/)
    ├── shelf1.jpg   # Light Wood / Lobby Installation
    ├── shelf2.jpg   # High-tech Office Setting
    ├── shelf3.jpg   # Dark Walnut / Executive Suite
    ├── shelf4.jpg   # Minimalist CEO Office
    ├── shelf5.jpg   # Conference Room
    ├── shelf6.jpg   # Close-up Detail (Macro)
    └── shelf7.jpg   # Organic Flow (Hero Image)

## 3. Technical Specifications
- **CSS Framework:** Tailwind CSS (via CDN or local build).
- **Fonts:** - Headings: 'Playfair Display' (Serif, Italic).
  - Body: 'Inter' (Sans-serif, Light/300).
- **Key Features:**
  - Sticky navigation with `mix-blend-difference`.
  - Staggered grid for the "Collection" section.
  - IntersectionObserver for scroll-reveal animations.
  - B2B Lead Gen form (Name, Company, Email, Phone).

## 4. Design Guidelines (The Logic)
- **White Space:** Minimum section padding: `py-24` (mobile), `py-40` (desktop).
- **Asymmetry:** Mirror the product’s wave design in the UI. Avoid perfect center-alignment for images; use staggered heights.
- **Color Palette:**
  - Primary Background: `#F9F7F2` (Soft Parchment)
  - Dark Mode/B2B Section: `#1A1A1A` (Obsidian/Charcoal)
  - Text: `#1A1A1A`

## 5. Instructions for Implementation
1. **File Creation:** Initialize `index.html`, `style.css`, and `script.js`.
2. **Asset Migration:** Copy `shelf1.jpg` through `shelf7.jpg` from the local `personal-projects` folder into `/images`.
3. **HTML Construction:** - Use `shelf7.jpg` for the Hero background.
   - Use `shelf6.jpg` (Macro) and `shelf2.jpg` (Context) for the Philosophy section.
   - Use `shelf1.jpg` (Light) and `shelf3.jpg` (Dark) for the Collection grid.
4. **Interactive States:** Buttons should use `invert` or `scale` transitions. The nav should feel "weightless."