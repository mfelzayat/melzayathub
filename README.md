# Melzayat Hub — melzayathub.com

Personal hub for **Mohamed El Zayat**, Founder & CEO of Strike Media (Cairo).

Copper/paper editorial system, Instrument Serif + Syne, custom Hub Frame SVG. Blunt operator copy — not a SaaS template.

See `design.md` for the design diagnosis and reconstruction notes (hub-v3).

## Stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- IntersectionObserver scroll reveals (no Framer)
- Static output for **Cloudflare Pages** / Caddy

## Scripts

```bash
npm install
npm run dev      # local development
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Deploy

| Setting | Value |
|--------|--------|
| Framework preset | Vite |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` (repo root) |
| Node version | 20+ recommended |

SPA fallback: `public/_redirects` (`/* → /index.html` 200).

## Archive

Previous site content (`alayaa/`, `projects/`) lives under `archive/`.
