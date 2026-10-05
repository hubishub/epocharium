# Epocharium — Tech Civilization Museum & Encyclopedia

Cinematic multi-wing Next.js museum covering how major tech stacks developed: **Internet**, **Computers & Laptops**, **Mobiles**, **AI**, and **AGI** (careful, non-hype). Built as a portfolio exhibition for Harinder Sidhu — museum language throughout (halls, placards, wayfinding, tours), not a SaaS landing page.

## Run locally

```bash
cd /workspace/epocharium
npm install
npm run dev    # http://localhost:3002
npm run build  # production build
npm run shots  # Playwright preview screenshots → preview-shots/
```

**Public portfolio repo:** [github.com/hubishub/epocharium](https://github.com/hubishub/epocharium)

Live local: `npm run dev` → http://localhost:3002

## Stack

- Next.js 14 App Router · TypeScript · Tailwind
- React Three Fiber + Drei (OrbitControls, Environment)
- next-themes (evening / daylight gallery lighting)
- Original SVG gallery art (no scraped photos)

## Museum map (routes)

| Route | Hall |
|-------|------|
| `/` | Entrance Hall |
| `/guide` | Visitor Guide (US/EU recruiters, India hiring, students) |
| `/timeline` | Civilization Timeline |
| `/epochs` | Wings directory |
| `/epochs/[slug]` | internet · computers · mobiles · ai · agi |
| `/exhibits` | 3D sculpture court |
| `/exhibits/[slug]` | early-pc · phone-generations · network-metaphor · ai-server-rack |
| `/articles` · `/articles/[slug]` | Archive essays (13) |
| `/compare` | Side-by-side compare desk |
| `/glossary` | Searchable lexicon |
| `/gallery` | Illustration gallery |
| `/about` | About + builder note (kept off the entrance funnel) |

## UX direction

Entrance hall, wing navigation, exhibit placards, “You are here” wayfinding, recommended tour paths, cinematic dark-first lighting — **not** product CTAs or SaaS feature grids.

## License / assets

Interpretive SVG diagrams and museum pedestal geometry are original to this project. Not affiliated with any hardware brand or movie franchise.

### Hero humanoid (entrance hall)

| Field | Detail |
|-------|--------|
| Asset | Industrial Humanoid (Epocharium original sculpture) |
| File | `public/models/industrial-humanoid/model.glb` |
| License | [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/) |
| Notes | Original museum figure — matte grey/black industrial panels, sensor head, articulated hands. Aesthetic inspired by modern industrial humanoids in general; **not** Figure AI or any brand. See `public/models/industrial-humanoid/LICENSE.md`. Pedestal original.

## Ops note (stale `.next`)

If routes 500 after mid-session code changes under `next start`, wipe and rebuild: `rm -rf .next && npm run build && npm start`. Dev (`npm run dev`) usually recovers without that.
