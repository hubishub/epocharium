# Epocharium — Review Package

**Product name:** Epocharium — Tech Civilization Museum & Encyclopedia  
**Path:** `/workspace/epocharium`  
**Status:** Review-ready · Warm Marble Museum palette applied · `npm run build` SUCCESS  
**Dev:** `npm run dev` → http://127.0.0.1:3002  
**Git / deploy:** NONE — hold until Harinder stamp via Jack  
**QA:** Tess/Dex not assigned yet

## Visual refresh (liquid-glass)

### REJECTED — Abyssal Iridescence (do not restore)
Harinder rejected the prior abyssal / aurora look:

| Role | Dark | Light |
|------|------|-------|
| Background ink | `#070912` | `#eef2ff` pearl-lavender |
| Primary accent | `#5eead4` aurora teal | `#0d9488` teal-700 |
| Secondary | `#a78bfa` violet | `#7c3aed` violet-600 |
| Warm accent | `#fbbf24` amber | `#d97706` amber-600 |

Also do **not** revert to the original brass/gold-heavy hall.

### CURRENT — Warm Marble Museum (light-first)

| Role | Day (default) | Evening (charcoal gallery) |
|------|---------------|----------------------------|
| Soft stone ivory / hall wash | `#f7f3eb` | `#1c1917` charcoal ink bg |
| Deep charcoal ink (text/structure) | `#1c1917` | cream `#faf8f4` text |
| Museum bronze (accents only, sparingly) | `#b45309` | soft bronze `#d97706` |
| Cool slate glass panels | frosted slate-tint `rgba(248,250,252,0.62)` borders `#475569` | slate glass on charcoal + cream placard hint |
| Mist / muted body | `#57534e` | `#a8a29e` |

**Liquid-glass system (kept, restyled to marble/slate):**
- Soft frosted **glass panels** (`.placard` / `.glass-panel`): `backdrop-filter` blur, slate-tinted translucent fills, soft white/slate edge shimmer (no teal/violet aurora)
- **Glass nav / footer** (`.glass-nav`, `.glass-footer`): sticky frosted bars on ivory/charcoal
- **Flowing mesh hall** (`.museum-hall`): warm bronze + cool slate + stone mesh wash
- **Morphing liquid blobs** (`LiquidBackdrop`): bronze / slate / stone blobs — not teal/violet/cyan neon
- Liquid CTA pills + floor-line gradient (slate ↔ bronze sparing)
- **`prefers-reduced-motion`:** mesh + blob animations disabled
- Default theme is **light** (day marble); evening toggle remains as restrained charcoal gallery with optional cream placard tone

Routes, museum UX copy, R3F exhibit subjects, and content structure unchanged. Wing/timeline/gallery accent hexes retuned into slate/bronze/stone family so zero abyssal teal/violet leftovers remain in `src/`.

## UX bar applied

Museum language throughout: Entrance Hall, Wings, placards, wayfinding chips, Visitor Guide tours, sculpture court. About/builder note is on `/about` only — home is not a hire-me funnel.

## Full route list

- `/` Entrance Hall (hero atrium, wing gateways, featured exhibits, tour teasers)
- `/guide` Visitor Guide — 3 audience tours (US/EU recruiters, India hiring, students)
- `/timeline` Civilization timeline (20 events, multi-track)
- `/epochs` Wings index
- `/epochs/internet` · `/epochs/computers` · `/epochs/mobiles` · `/epochs/ai` · `/epochs/agi`
- `/exhibits` Exhibit floor index
- `/exhibits/early-pc` · `/exhibits/phone-generations` · `/exhibits/network-metaphor` · `/exhibits/ai-server-rack`
- `/articles` + 13 essay slugs under `/articles/[slug]`
- `/compare` Working filter + dual-select compare table
- `/glossary` Search + wing filter
- `/gallery` 10 original SVG pieces
- `/about` Museum + builder note (Harinder Sidhu · Mohali/Chandigarh + remote)

## 3D exhibits (R3F)

| Slug | Hall code | Notes |
|------|-----------|--------|
| early-pc | EX-01 | Case + CRT glow, OrbitControls |
| phone-generations | EX-02 | Feature → candybar → smartphone pedestals |
| network-metaphor | EX-03 | Nodes/links packet metaphor |
| ai-server-rack | EX-04 | Rack bays + neural lattice |

WebGL detection + static fallback placard if WebGL unavailable. Auto-rotate toggle on canvas chrome (glass pill styling). Exhibit accent lights retuned to cool slate (not cyan neon).

## Screenshots (refreshed after Warm Marble Museum)

Directory: `/workspace/epocharium/preview-shots/`

- `home.png`
- `guide.png`
- `timeline.png`
- `epochs.png`
- `exhibit-early-pc.png`
- `exhibit-network.png`
- `articles.png`
- `compare.png`
- `gallery.png`
- `glossary.png`
- `about.png`

## Build / Dev

```
npm run build  →  SUCCESS (36 static pages)
npm run dev    →  http://127.0.0.1:3002  (running)
```

## Known gaps / follow-ups

- 3D is low-poly interpretive (by design); no HDRI custom museum HDR yet beyond Drei `city` preset
- Articles are structured paragraphs (not MDX files) — still lengthy; MDX migration optional
- No i18n (English only)
- Accessibility: focus rings + labels present; deeper axe audit not run
- Check-Call Hub (#3 from prior queue) still separate from this museum project

## Blockers

None for local review. Awaiting Jack → Harinder stamp before any GitHub push.
