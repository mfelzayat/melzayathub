---
version: anydesign-1
name: Melzayat Hub (hub-v5)
source: https://melzayathub.com (+ /workspace/melzayathub-repo source)
captured_at: 2026-09-16
description: |
  Full redesign of the Cairo media-founder hub into a Strike cinema/agency
  personal site. Black/red/white identity sampled from Strike Media logo and
  Strike Studio splash (2026-09-15). Drops copper/paper editorial (hub-v3/v4)
  for a sharp cinematic dark agency look with WebGL ambience and Motion scroll
  reveals. Substance preserved: showreel + 12 selected pieces, About, Ventures
  (no Labs), Contact.

colors:
  void: "#050505"
  ink: "#0A0A0A"
  ink-2: "#141414"
  ink-3: "#1A1A1A"
  paper: "#FFFFFF"
  paper-soft: "#F2F2F2"
  mute: "#8C8C8C"
  line: "#2A2A2A"
  strike: "#E8282C"
  strike-deep: "#D7272A"
  strike-bright: "#FF3236"
  strike-glow: "color-mix(in oklab, #E8282C 35%, transparent)"

typography:
  display:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 9vw, 6.5rem)"
    fontWeight: 700
    letterSpacing: "-0.03em"
    lineHeight: 0.92
  section:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.75rem)"
    fontWeight: 700
    letterSpacing: "-0.025em"
    lineHeight: 0.98
  body:
    fontFamily: "Syne, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Syne, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    letterSpacing: "0.2em"
    textTransform: uppercase

spacing:
  base: 4px
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]

rounded:
  none: 0px
  sm: 2px

components:
  button-primary:
    backgroundColor: "{colors.strike}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 12px 24px
    border: "1px solid {colors.strike}"
    glow: "{colors.strike-glow}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 12px 24px
    border: "1px solid {colors.line}"
  button-strike-outline:
    backgroundColor: "color-mix(in oklab, #E8282C 10%, transparent)"
    textColor: "{colors.strike}"
    border: "1px solid color-mix(in oklab, #E8282C 60%, transparent)"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 8px 16px
  nav:
    backgroundColor: "transparent → {colors.void}/85 + blur when scrolled"
    textColor: "{colors.mute}"
    accent: "{colors.strike}"
  work-card:
    backgroundColor: "{colors.ink}"
    border: "1px solid {colors.line}"
    hoverBorder: "color-mix(in oklab, #E8282C 50%, transparent)"
    hoverBackground: "{colors.ink-2}"
  venture-card:
    backgroundColor: "{colors.ink-2}"
    border: "1px solid {colors.line}"
    hoverGlow: "soft red ambient"
  contact-panel:
    backgroundColor: "{colors.ink-2}"
    border: "1px solid {colors.line}"
    layout: "split panel — mark + headline | link list"
  strike-mark:
    type: "SVG lightning S in red/black oval"
    colors: "{colors.strike}, {colors.ink}, {colors.strike-bright}"
    role: "signature mark — nav, hero, about ghost, contact, footer, favicon"
  cinematic-backdrop:
    type: "React Three Fiber WebGL"
    elements: "additive red particles, soft volumetric sphere glow, point lights"
    a11y: "CSS radial fallback; paused/skipped when prefers-reduced-motion"
    performance: "deferred via requestIdleCallback; dpr capped 1–1.5; low-power GL"

layout:
  maxWidth: 1400px
  sections: [Hero, Work, About, Ventures, Contact]
  hero: "full-viewport cinematic; Strike mark right; CTAs Work/Contact"
  work: "featured nocookie embed + 11 thumbnail cards (showreel + 12 pieces)"
  about: "Producer. CEO. Same desk. — systems + EMS + taste line"
  ventures: "2×2 card grid — Strike Media, EMS, DARAK V2, Strike 3D Demo"
  contact: "dark split panel (not inverted paper band)"

tech:
  stack:
    - Vite 8
    - React 19.2
    - Tailwind CSS 4
    - TypeScript
    - "@react-three/fiber + @react-three/drei + three"
    - "motion (Framer Motion)"
    - lenis
  build: "npm run build → dist/ (Cloudflare Pages static export)"
  motion: "Motion whileInView reveals + hero entrance; Lenis smooth scroll off under reduced-motion"
  css: "color-mix, fluid type clamp, container queries on work cards, backdrop-blur nav"

voice:
  tone: "blunt, cinematic, operational — no brochure filler"
  bilingual: "Arabic maxim as secondary (طعم في زمن الـ AI، مش كمية)"
  avoid: "AI brochure clichés; copper magazine editorial; ink-and-paper magazine feel"

identity_vs_prior:
  hub-v3/v4: "copper #d4843a + paper #f3eee4 + Instrument Serif + Hub Frame"
  hub-v5: "Strike red #E8282C + void black + Space Grotesk + StrikeMark + WebGL"
---

# Melzayat Hub — hub-v5 design notes

## Intent

Personal front door for Mohamed El Zayat that feels like **Strike cinema/agency**,
not an ink-and-paper magazine. Full visual rewrite from hub-v4 — layout rhythm,
components, hovers, work cards, contact panel — not a palette swap.

## Palette (sampled Strike Media 2026-09-15)

| Token | Hex | Role |
|-------|-----|------|
| void | `#050505` | page ground |
| ink / ink-2 / ink-3 | `#0A0A0A` / `#141414` / `#1A1A1A` | panels |
| paper / paper-soft | `#FFFFFF` / `#F2F2F2` | primary type |
| mute | `#8C8C8C` | secondary |
| line | `#2A2A2A` | borders |
| strike | `#E8282C` | brand red (logo S) |
| strike-deep / bright | `#D7272A` / `#FF3236` | hover / highlight |

Soft red ambient glow allowed (Strike Studio splash language).

## Typography

- **Display:** Space Grotesk bold — tight grotesque, agency-sharp
- **UI / labels:** Syne — tracked uppercase labels
- Dropped Instrument Serif copper-editorial look

## Signature

`StrikeMark.tsx` — stylized lightning **S** in red/black oval. Used in nav, hero,
about watermark, contact panel, footer, favicon, OG.

## Technology

- Keep Vite 8 + React 19 + Tailwind 4
- Three.js via R3F + Drei for deferred cinematic backdrop
- `motion` for scroll reveals + hero entrance
- `lenis` for smooth scroll (disabled under `prefers-reduced-motion`)
- YouTube privacy-enhanced embed for Showreel 2025 only; other work as thumbnail cards
- Static `dist/` for Cloudflare Pages

## IA (substance unchanged)

1. Hero — name, role, taste line + Arabic secondary, Work / Contact CTAs
2. Selected Work — showreel featured + 11 cards (12 pieces total inventory)
3. About — Producer / CEO / Same desk; systems; EMS
4. Ventures — Strike Media, EMS, DARAK V2, Strike 3D Demo
5. Contact — email, WhatsApp, YouTube, Facebook

## Do not

- Reintroduce copper / paper contact band as the primary identity
- Touch EMS codebase
- Use Replit
