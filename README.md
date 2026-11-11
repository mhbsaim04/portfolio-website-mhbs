# mhbs.portfolio

Personal portfolio website of **Mazharul Hoq Bhuiyan Saim** — AI-driven full-stack web engineer, built with a modern dark terminal-inspired design featuring a monospace aesthetic, vivid green accent, and smooth page transitions.

## Technologies Used

| Category | Technologies |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack, SSG) |
| UI Library | [React 19](https://react.dev) |
| Language | TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Fonts | Geist Mono (via `next/font`) |
| Icons | [lucide-react](https://lucide.dev), [react-icons](https://react-icons.github.io/react-icons) (Simple Icons / Tabler / Feather) |
| Images | `next/image` optimization |
| Hosting | Vercel |

## Main Features

- **Interactive hero section** — circular profile photo with animated dashed orbit rings, designation, bio, and one-click resume download.
- **Multi-page experience** — dedicated routes for Home, Expertise, About me (tabs: About / Experience / Education / Skills / Achievements), Projects, and Contact.
- **Expertise showcase** — 6 numbered skill cards with real skill tags, split into 4 web-engineering areas + 2 specialized strengths.
- **Categorized skills grid** — dark icon-tile grid with real brand logos (react-icons), proficiency bars, grouped by Frontend / Backend & Data / Tools & Platforms.
- **Projects gallery** — 5 live projects with screenshots, tech stacks, categories, and counters.
- **Project detail pages** — statically generated (`SSG`) per-project pages with descriptions, challenges, and future improvements, fully SEO-tagged via `generateMetadata`.
- **AI chatbot widget** — floating assistant ("?") that answers questions about projects, skills, experience, and contact info.
- **Page transition animation** — staggered panel veil that sweeps on every route change (with `prefers-reduced-motion` fallback).
- **Scroll reveal animations** — staggered content entrances across all pages.
- **Fully responsive** — mobile drawer navigation, adaptive hero, and responsive grids throughout.
- **One-click resume download** — available in the navbar, hero section, and mobile drawer.


---

© 2026 Mazharul Hoq Bhuiyan Saim. All rights reserved.
