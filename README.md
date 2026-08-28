# manav-ar.github.io

Static portfolio. Next.js 15 App Router, exported to plain HTML — no server, no runtime cost.

```bash
npm install && npm run dev     # localhost:3000
npm run build                  # static export → ./out
```

Deploy: push to `main`. One-time: **Settings → Pages → Source → GitHub Actions**.

## Structure

| File | What |
|---|---|
| `lib/content.ts` | Copy, archive entries, tier colours. Edit here first. |
| `app/globals.css` | Tokens, type scale, motion, every component style. |
| `components/Rail.tsx` | Fixed left nav + permanent CV/email/github. Scroll-spy via IntersectionObserver. |
| `components/Memo.tsx` | HERALD review UI, rebuilt in HTML. Claims live in the `claims` object. |
| `components/WmataMap.tsx` | DC map + PPO/DQN toggle, SVG. Positions in `AGENTS`. |
| `components/VibeSearch.tsx` | VibeCheck search UI. Queries and results in `QUERIES` / `RESULTS`. |
| `components/Reveal.tsx` | Scroll reveal wrapper. `delay` in ms. |

## Design rules

- Two fonts: Instrument Serif (display/prose), JetBrains Mono (labels/metadata).
- One accent `--mark` `#C4622D`. One easing `--ease`. Reveals move 14px, fire once.
- `prefers-reduced-motion` disables motion; `<noscript>` keeps content visible without JS.
- Sections alternate `--paper` / `.bleed` (`--paper-2`) to break rhythm.

## To do

- [ ] `public/cv.pdf` — the rail links to it
- [ ] Replace the illustrative memo claims with a real verified example, or keep the caption
- [ ] Export real DC boundary + candidate lat/lons as GeoJSON to replace the hand-drawn map
- [ ] Point archive links at specific artifact files, not repo roots
- [ ] Self-host fonts (`public/fonts/`, swap the `@import` for `@font-face`)
- [ ] Delete stale `visualizations/station_placements.png` in RL-WMATA
