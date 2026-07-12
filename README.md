# BIGMODE ⚡

### The Digital Soul Interface

A spatial knowledge engine where your creative artifacts live as a navigable 3D constellation. Everything starts dead in the Graveyard. Aliveness is earned.

## What is this?

BigMode is not a file manager. It is a living, breathing, remixable interface where meaning is earned, not stored. Artifacts land in a Graveyard cluster — faint and sleeping — and wake through interaction, contradiction, remix, and emotional resonance.

This repository is the live prototype, hosted on GitHub Pages. It runs entirely client-side.

## Features

- **3D Constellation** — Three.js scene with bloom postprocessing, orbit camera, and LOD-style depth
- **Aliveness Physics** — Logarithmic decay with a fluid floor. Nodes breathe based on their score
- **Sleep Quality States** — Seeded → Frostbound → Ember → Dreaming. Ideas have temperature
- **Warm Scars** — Ignored nodes accumulate color: Cool Blue → Soft Amber → Radiant Gold
- **Holo-Herald Ring** — A glowing 360° torus rotating at eye level with headline particles
- **Spiral Time Portal Sort Modes** — Explore, Compare, Propose, Reminisce (v2). Press `1`–`4`
- **Semantic Connections** — Faint lines between related concepts, forming a visible knowledge graph
- **Jarvis Whispers** — Contextual text appears when you hover over sleeping nodes

## Controls

| Input | Action |
|---|---|
| Drag | Orbit camera |
| Scroll | Zoom |
| Click node | Focus + info panel |
| `1` | Explore mode |
| `2` | Compare mode |
| `3` | Propose mode |
| `4` | Reminisce mode (v2 preview) |
| `Esc` | Unfocus |

## The Recursive Bootstrap

The first artifacts in the Graveyard are BigMode's own design elements. The spec, the formulas, the storyboards — they are the nodes. The hand drawing the hand.

## Architecture

```
├── index.html              Entry point + Three.js import map
├── css/style.css           UI styling (glass morphism, dark theme)
├── js/data.js              Recursive mock data (BigMode's own artifacts)
├── js/bigmode.js           Three.js engine (nodes, ring, physics, interaction)
├── BIGMODE_MASTER_SPEC.md  The full architect's reference (526 lines)
└── README.md               This file
```

## License

Honest Pirate License — steal for everyone, not for profit.

## Links

- **Live site:** [pacosdata.github.io](https://pacosdata.github.io)
- **Full spec:** [BIGMODE_MASTER_SPEC.md](BIGMODE_MASTER_SPEC.md)

---

*The soup is warm. The ring is spinning. The scars are glowing.*
