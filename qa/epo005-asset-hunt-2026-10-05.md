# EPO-005 / Figure-like CC0–CC-BY asset hunt — 2026-10-05 PT

## Decision
**NO Desktop sync.** No free-licensed GLB was both (a) clearly better than capsule/kit for adult industrial Figure-like look and (b) downloadable without Sketchfab login.

Current hero remains `public/models/industrial-humanoid/model.glb` (Epocharium original, ~104k tris, CC0).

## Thorough search covered
Sketchfab API (downloadable CC-BY / CC0, min face filters), Poly Pizza, OpenGameArt, itch.io (styloo), GitHub (free-humanoid-corpus = prior-art catalog only), downloadfree3d mirrors, GetGLB, CGTrader free listings, NASA/JPL/Unitree/Atlas (URDF/branded — unsuitable).

## Near-misses (do not sync)

| Asset | License | Faces | Why rejected |
|-------|---------|------:|--------------|
| **white robot** (MobStar1) Sketchfab `d6417b38…` | CC-BY | ~478k | **Best aesthetic match** (matte silver/grey, adult proportions, articulated hands). **Blocked:** Sketchfab auth required; no public GLB mirror. |
| **Humanoid robot AI realistic** (3dUVpro) `5d51b69c…` | CC-BY | ~426k | Strong Figure-like white/black panels + 5-finger hands. AI-generated (Mesha); Sketchfab auth; topology risk. |
| **Sci-Fi Humanoid Robot** (yur1_val) `12ad786e…` | CC-BY | ~436k | **Downloaded** 1K/4K GLB from downloadfree3d (~31MB / 129MB). High-poly hard-surface PBR — but **combat mecha** (red fighter, exposed ribcage), too gamey vs Figure F.02 industrial. Would likely fail Harinder look again. Files left at `/tmp/asset-hunt/scifi-dl/` only — **not vendored**. |
| **Robot humanoid A-003** (Blagodaryov) | CC-BY | ~66k + 4K PBR | Detailed hard-surface + fingers; red/white camo mecha, not matte industrial; Sketchfab/CGTrader auth. |
| **Yellow Heavy Robot** (adyatttt) | CC-BY | ~128k | Gatling-arm combat mech — wrong silhouette. |
| **styloo Robot character** (itch) | CC0 | n/a | Guns / game combat animations — reject per brief. |
| **3dassets.dev Humanoid Android/Worker** | CC0 | ~1.5k | Explicitly rejected kit. |
| **HR-OS5 Orion** (Interbotix) | CC-BY | high | Research robot but reads blocky/toy kitbash in thumb. |
| **Android 737C** | CC-BY | ~116k | Chrome capsule mannequin. |
| **GetGLB Service Robot Assistant** | CC-BY | ~6.6k | Wheeled service bot, not bipedal humanoid. |
| Atlas / Unitree G1 / Asimo mirrors | various / IP | — | Brand IP or non-CC museum-inappropriate. |

## Recommendations (Forge → Jack)
1. **Preferred free path:** User downloads Sketchfab **white robot** (MobStar1, CC-BY) → drop into `public/models/industrial-humanoid-hf/` → wire `HumanoidRobot.tsx` + credit. Closest free Figure-like look found.
2. **Alt free:** Sketchfab **Humanoid robot AI realistic** (3dUVpro) if white robot unavailable — verify mesh integrity first.
3. **Paid / commission:** Sketchfab Store or CGTrader industrial humanoid (RF commercial) with matte grey PBR; or commission hard-surface sculpt matching F.02-class proportions (no brand IP).
4. **Keep current** Epocharium original until stamp — do not push another capsule rebuild.

## No push / no Desktop sync of near-misses
