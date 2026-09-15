---
version: anydesign-1
name: Melzayat Hub (hub-v3 → hub-v4)
source: https://melzayathub.com (+ /workspace/melzayathub-repo source)
captured_at: 2026-09-15
description: |
  Warm ink-and-paper editorial hub for a Cairo media founder. Not a SaaS product
  page and not a startup brochure. Belief: the site should feel like a studio
  ledger — type-led, copper-lit, sparse only where structure earns the silence.
  Hub-v3 kept copper/paper + Hub Frame + blunt voice. Hub-v4 densifies with REAL
  work proof (YouTube portfolio): Selected Work replaces Focus; named clients +
  talent; Showreel 2025 featured; Labs dropped for cinematic demos.

colors:
  ink: "#0c0b09"
  ink-2: "#141210"
  ink-3: "#1c1916"
  paper: "#f3eee4"
  paper-dim: "#cfc6b6"
  mute: "#8a8378"
  line: "color-mix(in oklab, #f3eee4 14%, transparent)"
  copper: "#d4843a"
  copper-bright: "#e9a05a"
  copper-dim: "#a36228"

typography:
  display:
    fontFamily: "Instrument Serif, Georgia, Times New Roman, serif"
    fontSize: "clamp(3.4rem, 12vw, 8.5rem)"
    fontWeight: 400
    letterSpacing: "-0.02em"
    lineHeight: 0.88
  section:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(2.5rem, 6vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 0.95
  body:
    fontFamily: "Syne, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Syne, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    letterSpacing: "0.22em"
    textTransform: uppercase

spacing:
  base: 4px
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]

rounded:
  none: 0px
  sm: 2px

components:
  button-primary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: 12px 20px
    border: "1px solid {colors.paper}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: 12px 20px
    border: "1px solid color-mix(in oklab, #f3eee4 25%, transparent)"
  button-copper:
    backgroundColor: transparent
    textColor: "{colors.copper}"
    border: "1px solid color-mix(in oklab, #d4843a 50%, transparent)"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: 8px 16px
  nav:
    backgroundColor: "transparent → {colors.ink}/90 + blur when scrolled"
    textColor: "{colors.mute}"
  chapter-rail:
    position: "fixed left, xl+"
    activeColor: "{colors.copper}"
  venture-row:
    backgroundColor: "{colors.ink-2}"
    border: "1px solid {colors.line}"
    hoverBackground: "{colors.ink-3}/60"
  contact-band:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  hub-frame:
    type: "custom SVG geometric composition"
    colors: "{colors.copper}, {colors.paper}, {colors.line}"
    role: "ONE brand thing — hero signature"
  mez-monogram:
    type: "SVG lettermark"
    colors: "{colors.copper}, {colors.paper}|{colors.ink}"
    role: "nav/footer/favicon mark"
  reveal:
    type: "IntersectionObserver fade-rise"
    motion: "18px / 0.7s cubic-bezier(0.22,1,0.36,1)"
    role: "section enter motion"
---

# Design Analysis — Melzayat Hub (hub-v2 diagnosis → hub-v3 reconstruction)

> Analysis generated with the `anydesign` skill.
> Date: 2026-09-15
> Analysis emphasis: reconstruction + design system

---

## Source

- **Source type**: URL + local Vite/React source (SPA)
- **Path / URL**: `https://melzayathub.com` · repo `/workspace/melzayathub-repo`
- **Capture method**: Playwright multi-viewport screenshots (desktop 1440×900, tablet 768×1024, mobile 375×812) + CSS custom properties from `src/index.css` + component inventory from `src/components/*`
- **Detected limitations**: Live HTML is empty without JS (Vite SPA). Tokens taken from source `@theme` block (✅ high). Screenshots confirm rendered presentation.

---

## TL;DR

Warm editorial founder hub: ink/paper surfaces, Instrument Serif display, Syne labels, single copper voltage. Distinctive vs purple-SaaS AI templates — but hub-v2 still reads sparse and brochure-adjacent: too much dead black, magazine costume ("Issue / Vol"), and copy with triad/aphorism residue. **Keep copper/paper.** Evolve density, add one custom geometric SVG signature ("Hub Frame"), rewrite all user-facing copy blunt CEO.

---

## 1. Visual identity

### 1.1 Surface description

**Personality**: editorial, warm-industrial, type-led, restrained, operator-serious

**Mood**: Quiet confidence with copper heat — studio ledger, not launch-week hype.

**Detectable stylistic references**: Magazine/agency reel (not Linear/Vercel). Closer to print editorial + boutique studio sites than product marketing. Instrument Serif + tracked Syne labels = deliberate anti-Inter stack.

**Information density**: Minimalist leaning empty on hub-v2 (hero void; sections airy). Hub-v3 target: balanced — still editorial, denser structure so silence feels intentional.

**Implicit positioning**: Personal hub for a Cairo media founder/CEO speaking to partners, operators, and serious collaborators — not consumers, not recruiters hunting soft vibes.

**Confidence**: ✅ high

### 1.2 Brand voice / Atmosphere

This site believes the audience already knows what a media company is. It refuses product-page theater (gradient meshes, fake metrics, stock founder photos). Authority comes from naming the work plainly and giving type room to carry status.

Cairo is not decoration. It is the operating context: Arabic line stays; location labels stay; no "global ambitious organizations" fog. Copper is the only chromatic voltage because warmth > tech-blue for a media studio that still ships systems (EMS).

Hub-v3 atmosphere rule: every decorative inch must earn its keep. If a gesture could sit on any AI portfolio, cut it. If a sentence could sit on any founder landing, rewrite it.

### 1.3 The "ONE brand thing"

- **hub-v2 thing**: Copper accent on ink/paper + Instrument Serif display name. Enough to differentiate from SaaS purple, not enough to feel ownable once you scroll past the hero.
- **hub-v3 thing**: **Hub Frame** — a custom geometric SVG composition (interlocking copper/paper/line rectangles + diagonal shear) anchoring the hero. Monogram remains for nav/favicon; Hub Frame is the page-scale brand gesture.
- **Why it carries the brand**: Removes the "large name on black void" AI-portfolio silhouette. Geometry reads built, not generated.
- **How everything else supports it**: Palette stays near-monochrome; copper reserved for Frame edges, labels, and CTAs; no second accent.
- **Where it appears**: Hero (large), optionally ghosted behind About at low opacity. Never as a repeating card chrome. Not in Contact paper band.

*Confidence*: ✅ high (prescriptive for reconstruction)

---

## 2. Design System (tokens)

### 2.1 Colors

| Token | Hex | Role | Where it appears | Confidence |
|---|---|---|---|---|
| `ink` | `#0c0b09` | Primary surface (dark) | Body, hero, about, focus | ✅ high |
| `ink-2` | `#141210` | Raised dark band | Ventures section | ✅ high |
| `ink-3` | `#1c1916` | Hover / deeper panel | Venture row hover | ✅ high |
| `paper` | `#f3eee4` | Light polarity surface + primary CTA fill | Contact, footer, primary button | ✅ high |
| `paper-dim` | `#cfc6b6` | Secondary light text on ink | Sub-name, body | ✅ high |
| `mute` | `#8a8378` | Tertiary / meta | Labels, captions | ✅ high |
| `line` | paper @ ~14% | Hairline borders | Rules, divides | ✅ high (evolved from 12% → 14% for readable structure) |
| `copper` | `#d4843a` | Sole chromatic voltage | Labels, Hub Frame, links | ✅ high |
| `copper-bright` | `#e9a05a` | Hover brighten | Link hover | ✅ high |
| `copper-dim` | `#a36228` | Copper on paper | Contact labels | ✅ high |

**Decision — keep copper/paper:** System already escapes generic AI look better than cool neutrals. Evolving tokens (slightly stronger `line`, Hub Frame allocation of copper) is cheaper and more honest than a palette reset.

**Color voltage rule:** Copper appears on labels, Hub Frame strokes/fills, CTA accents, active chapter rail. Forbidden as large background washes and as decorative gradients.

### 2.2 Typography

- **Detected family**: Instrument Serif (display) + Syne (UI) — loaded via Google Fonts ✅
- **Suggested fallback**: `Georgia, "Times New Roman", serif` / `ui-sans-serif, system-ui, sans-serif`

**Observed scale:**

| Token | Size | Weight | Line-height | Use |
|---|---|---|---|---|
| `display` | clamp 3.4rem–8.5rem | 400 | 0.88 | Hero name |
| `section` | ~3–3.75rem / clamp | 400 | 0.95 | Section H2 |
| `lede` | ~1.5–1.85rem | 400 | snug | Hero claim |
| `body` | 1.125–1.25rem | 400 | relaxed | About/venture blurbs |
| `label` | 11px | 500–600 | — | Eyebrows, nav, CTA |

**Notable tracking**: `-0.02em` on display; `0.22em` on labels (`.tracking-label`). Weight ceiling: display stays 400 (serif); UI never exceeds 800 and rarely needs it — prefer 500–600.

### 2.3 Spacing

- **Inferred base unit**: 4px (Tailwind)
- **Observable multiples**: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128
- **hub-v3 tweak**: Reduce section py from 24/32 → 20/28 where void was decorative only; keep contact band generous.

### 2.4 Radii

- System is **square by design**: `0` on buttons, rows, frames.
- `sm: 2px` only if needed for focus rings — do not introduce pills.
- **Pill scale coexistence**: absent by choice. Do not add marketing pills.

### 2.5 Elevation system

| Level | Name | Treatment | Use |
|---|---|---|---|
| 0 | Flat ink | No shadow | Hero, About, Focus |
| 1 | Surface shift | `ink-2` / `ink-3` fills | Ventures band, row hover |
| 2 | Polarity flip | Full `paper` band | Contact + Footer |
| 3 | Glass nav | `ink/90` + `backdrop-blur-md` | Scrolled header |

No drop shadows. Depth = surface tone + polarity flip + hairlines.

#### Decorative depth

- **Polarity flips**: ink → ink-2 → ink → paper (Contact). Keep.
- **Grain**: fixed SVG noise overlay @ ~0.045 opacity, `mix-blend-mode: overlay`. Keep subtle; do not raise.
- **Hub Frame**: geometric composition, hero-scoped (NEW).
- **No atmospheric mesh gradients.**

### 2.6 Borders

- Base: `1px solid {colors.line}` on dark; `border-ink/10` on paper.
- Buttons: hard 1px edges, square.
- Focus: browser default acceptable; copper outline preferred if customized.

### 2.7 Accessibility quick-check

- `paper` `#f3eee4` on `ink` `#0c0b09`: ~14.8:1 — AAA ✅
- `mute` `#8a8378` on `ink`: ~4.6:1 — AA for large/UI labels; avoid for long body
- `copper` `#d4843a` on `ink`: ~5.5:1 — AA large ✅; use for labels/CTA not dense paragraphs
- `ink` on `paper`: ~14.8:1 — AAA ✅

---

## 3. Components Inventory

### 3.1 Generic components

#### button-primary
- **Variants**: paper fill on ink; hover → copper fill
- **Observed sizes**: ~44px tall via py-3 + label
- **Padding**: 12×20
- **Radius**: 0
- **Confidence**: ✅ high

#### button-ghost
- Transparent + paper/25 border; hover copper border/text
- **Confidence**: ✅ high

#### button-copper
- Nav "Write" — copper outline; hover copper fill + ink text
- **Confidence**: ✅ high

#### nav
- Fixed; transparent → blurred ink on scroll; mobile Menu/Close text toggle (no icon hamburger)
- **Confidence**: ✅ high

#### chapter-rail
- Fixed left section index (xl+); active = copper bar + number
- **Confidence**: ✅ high

#### venture-row
- Full-bleed list rows in 12-col grid; linked rows hover ink-3
- **Confidence**: ✅ high

#### contact-band
- Paper polarity section; oversized email link with underline
- **Confidence**: ✅ high

### 3.2 Signature components

#### Hub Frame (NEW — hub-v3)
- **What it is**: Custom SVG geometric composition — overlapping rectangles, a copper shear diagonal, and a paper/line lattice suggesting studio frames / media crop marks.
- **Why it's signature**: Hand-authored geometry tied to MEZ palette; not a stock blob, mesh, or Lottie.
- **Composition**: SVG paths using `{colors.copper}`, `{colors.paper}`, `{colors.line}`; subtle CSS drift on one plane (`transform` + reduced-motion safe).
- **Where it appears**: Hero right column (desktop), condensed above CTAs (mobile). Optional 6% opacity echo in About.
- **Confidence**: ✅ high (prescribed)

#### MEZ Monogram
- Geometric M (copper) + E stem (paper/ink depending on surface)
- Nav, footer, favicon, OG — keep; do not enlarge into hero hero-art (Hub Frame owns that role now)

#### Reveal
- IntersectionObserver fade/rise 18px, 0.7s cubic-bezier; no Framer
- Keep; tighten delay steps (70–100ms)

---

## 4. Layout & Composition

### 4.1 Grid & containers

- Max width: `1400px`
- Horizontal padding: `px-5` / `md:px-10` / `lg:px-14`
- Vertical: section `py-20 md:py-28` (hub-v3; was 24/32)
- Hero: min-h-dvh, content end-aligned mobile / center-aligned md+

### 4.2 Composition patterns

- Asymmetric split hero (8/4) with Hub Frame in right column
- Two-column About (4 + 7 starting at 6)
- Venture list (not cards)
- Focus as horizontal strip (not 4 identical cards)
- Contact polarity band
- Chapter rail only at xl+

### 4.3 Responsive behavior

#### Breakpoints

| Name | Width | Key changes |
|---|---|---|
| Mobile | < 768px | Menu overlay; hero stacks; Hub Frame shrinks above CTAs; focus strip stacks |
| Tablet | 768–1023px | Horizontal nav; hero split softens; focus row |
| Desktop | 1024–1279px | Full 12-col grids |
| Wide | ≥ 1280px | Chapter rail appears |

#### Touch targets

- CTAs and Menu ≥ 44px ✅
- Chapter rail links small but xl-only (pointer, not primary mobile nav)

#### Collapsing strategy

- Nav → text Menu/Close overlay
- Venture 12-col → stacked blocks
- Focus 4-up → vertical list with bottom borders
- Hub Frame → reduced height, still present (never drop the signature on mobile)

### 4.4 Image behavior

- No photography by design (no fake headshots/clients).
- Assets: custom SVG only (monogram, Hub Frame, favicon, OG).
- Grain is CSS data-URI, not an image file.

---

## 5. Reconstruction Notes

### Suggested stack

**Vite + React 19 + TypeScript + Tailwind CSS v4** (keep current). No Framer. No Replit.

Justification: Already matches repo; tokens live in `@theme`; motion via IO + CSS.

### Quick wins

- Keep palette + type pairing (80% of non-generic feel)
- Keep polarity Contact band + venture list pattern
- Rewrite copy blunt (largest perceived quality jump)

### Tricky bits

- Hub Frame must feel architectural, not "AI geometric wallpaper" — limit to ≤12 shapes, clear crop-mark logic, copper used sparingly inside the SVG
- Avoid reintroducing magazine costume ("Issue / Vol. 2026") — cut it
- Labs venture: no hollow experiment theater; one honest line or cut the card fluff

### Confidence map

| Area | Confidence |
|---|---|
| Colors / type from source | ✅ high |
| Layout patterns | ✅ high |
| Hub Frame art direction | ✅ high (prescriptive) |
| Exact Arabic calligraphy rendering across OS | ⚠️ medium (system fonts) |
| Live deploy CDN cache after PR | ❓ ops |

### hub-v3 build checklist

1. Commit this `design.md`
2. Add `HubFrame.tsx` (signature SVG)
3. Rewrite Hero/About/Ventures/Focus/Contact/Footer + `index.html` meta
4. Drop Issue/Vol costume; tighten spacing; optional Frame echo
5. `npm run build` → leave `dist/`
6. Push `hub-v3`, open PR → `main`

---

## 6. Do's and Don'ts

### Do

- Do keep copper as the only chromatic accent on ink.
- Do use Instrument Serif for names and section titles; Syne for UI/labels.
- Do prefer square edges and hairline rules over shadows and pills.
- Do allocate copper voltage to Hub Frame + labels + CTAs, then stop.
- Do write like a Cairo CEO: short claims, named products, no triad sermons.
- Do polarity-flip Contact/Footer to paper for rhythm.

### Don't

- Don't introduce cool blue/purple gradients, glassmorphism blobs, or stock founder photos.
- Don't use rule-of-three headlines ("Clarity / Substance / Long games", "Cairo. Companies. Infrastructure.").
- Don't write "intersection", "ambitious organizations", "thoughtful collaborations", or Labs fluff about "product probes".
- Don't invent metrics, clients, awards, or photography.
- Don't add Framer Motion unless a specific interaction cannot be done with CSS/IO.
- Don't miniaturize Hub Frame into every card — hero (and optional About ghost) only.
- Don't round buttons into pills; the system is square.

---

## 7. Open Questions

- Arabic line ("بناء ما يستحق أن يدوم") — keep as-is; confirm with founder if wording should change for hub-v3 voice. Default: keep.
- Labs destination URL — none today; leave unlinked until a real URL exists.
- Whether Strike Studio vs Strike Media naming on the public CTA should prefer `strikestudio.net` (current) — keep current live links.
- Material otherwise sufficient for reconstruction; no further capture required.

---

## 8. hub-v4 — Work-proof reconstruction (2026-09-15)

**Why:** hub-v3 still read as a generic "Operator from Cairo" brochure. Mohamed
rejected it. Rebuild on the real portrait: Co-Founder & CEO / Producer, Strike
Media; YouTube `@mfelzayat` (~117 videos) is the proof.

**Keep:** copper/paper tokens, Instrument Serif + Syne, HubFrame, Reveal, square
edges, Contact polarity band, blunt Cairo voice.

**Change:**
- **Selected Work** (new `#work`) replaces Focus sectors. Featured privacy-friendly
  embed for Strike Media Showreel 2025 (`r0xWUfp7TOg`); 11 thumbnail cards link out
  (Restart, Wael Jassar/Moment, Nile Unforgettable Night, Golden View GEM, Capital
  Hills × Karim Afifi, ARQA Ritz × Elwakil, Xiaomi × Tamer Hosny, Horus fire show,
  Khaled El-Enany UNESCO, Sphinx Helwa Ya Baladi, FORTHING launch).
- Hero: Co-Founder & CEO · Producer; CTAs Work / Contact; Arabic line طعم في زمن الـ AI.
- About: producer/CEO hybrid; systems language; refuse/taste; EMS; Ex Professor brief.
- Ventures: Strike Media (strikemedia.net), EMS, DARAK V2, Strike 3D Demo — drop Labs.
- Contact: email + WhatsApp/phone + YouTube + Facebook Strike.
- Nav / ChapterIndex / Footer / OG meta updated; Focus.tsx removed.

**Voice rule:** named clients + talent above the fold / first Work scroll. No
triads, no "passionate about", no Labs fluff, no Issue/Vol costume.
