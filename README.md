# Aarti Gems Mine - Frontend Showcase

This repository contains the premium frontend UI implementation for **Aarti Gems Mine**, a modern, luxurious e-commerce experience for buying certified gemstones and custom jewellery.

## Design Highlights
- **Vibrant & Luxurious Color Palette:** 
  - Primary: `#3f0d12`
  - Secondary: `#a71d31`
  - Accents: `#f1f0cc`, `#d5bf86`, `#8d775f`
- **Typography:**
  - Modern Headings: **Hatolie**
  - Crisp Body Text: **Poppins (Black)**
- **Smooth Animations:** 
  - Framer Motion integrated across all elements with soothing <500ms bounds.
  - Hover effects on customized directional buttons.
  - Scroll-triggered parallax and border-radius rendering on the premium hero block.

## Feature Breakdown
- **Data-Driven Core:** All content is seamlessly fed through a centralized `src/data/content.json` dataset for ease of content management.
- **Dynamic Asset Integration:** Component collections, blogs, and certified stones dynamically map and render distinct, unique, keyword-based images stored in `src/assets/Images/`.
- **Lazy Loading:** React.lazy + Suspense for an optimized user experience alongside an elegant Gem spinner.
- **Hero & Search Engine:** Scroll-tied animations shrinking margins and displaying custom form options.
- **Masonry/Bento Product Grids:** Variable-size rendering for bestselling jewellery and customized collection arrays.
- **Custom Design Workflow:** Horizontal stepper guiding the user through the exclusive booking process.

## Tech Stack
- **Framework & Libraries:** React 19 + Vite, React Router DOM
- **Styling Backend:** Tailwind CSS v4 + Local Fonts (.ttf)
- **Animation Hub:** Framer Motion
- **Icons Toolkit:** Lucide React

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run carefully optimized dev server:**
   ```bash
   npm run dev
   ```

3. **Build optimized bundle:**
   ```bash
   npm run build
   ```

## Folder Architecture

```text
src/
 ├── assets/          # Contains local images & bespoke fonts (.ttf)
 ├── components/      # Lazy loaded isolated chunks (Hero, Bestselling, Header)
 ├── data/            # contains content.json
 ├── index.css        # Tailwind v4 configuration and @font-face handling
 └── main.jsx         # Entrypoint
```

---
