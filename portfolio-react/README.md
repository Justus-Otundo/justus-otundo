# Justus Otundo Portfolio

Personal portfolio and freelance site for Justus Otundo, System Architect & Technology Lead. Built with React, Vite, and Tailwind CSS.

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS v4
- Framer Motion
- React Scroll
- Heroicons

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Build & Deploy

```bash
npm run build     # output to dist/
npm run preview   # preview the production build
npm run deploy    # build and push to gh-pages
```

## Project Structure

- `src/data/` - all site content (profile, projects, experience, services, testimonials). Edit these files to update the site.
- `src/components/sections/` - page sections (Hero, About, Projects, Experience, Services, Testimonials, Contact).
- `src/components/layout/` - Navbar and Footer.
- `src/components/ui/` - shared UI primitives.
- `public/` - resume.html, cover-letter.html, and images.

## Customization

All copy is stored in `src/data/`. The color theme is defined once in `src/index.css` under the `@theme` block, so restyling the whole site is a single palette change.
