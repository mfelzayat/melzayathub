# Melzayat Hub — melzayathub.com

Premium personal hub for **Mohamed El Zayat**, Founder & CEO of Strike Media (Cairo).

## Stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Framer Motion** (subtle scroll / entrance motion)
- Static output suitable for **Cloudflare Pages**

## Scripts

```bash
npm install
npm run dev      # local development
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Cloudflare Pages deploy

| Setting | Value |
|--------|--------|
| Framework preset | Vite |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` (repo root) |
| Node version | 20+ recommended |

### Connect the repo

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → Connect to Git.
2. Select `mfelzayat/melzayathub`, branch **`main`** (after merging `hub-v1`).
3. Use the build settings above.
4. Custom domain: attach **melzayathub.com** in Pages → Custom domains.

SPA fallback is included at `public/_redirects` (`/* → /index.html` 200) for client-side routes.

## Archive

Previous site content (`alayaa/`, `projects/`) lives under `archive/` so nothing is lost.
