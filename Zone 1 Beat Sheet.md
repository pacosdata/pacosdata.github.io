# Zone 1 Beat Sheet — "Farmland Freight"
**Curve grammar + SMB3 rhythm + authored encounter slots**

Companion to 18-Wheeler.txt §§5.2, 5.3, 6, 8–10. Grounded in the existing cast (R1 Dolores, R2 Kit, R3 Walt, R4 Priya, R6 Hank), the merge-gate celebration system, and the police state machine. Everything marked *(tunable)* belongs in the single AT-25 tuning file.

> **Scope guard:** Curves change the road math. This sheet is **paper design now, Phase 1 builder prompt later** — it does NOT smuggle into this week's Phase 0 gate test (AT-01–07 stay untouched).

---

## 0) The Curve Grammar (shape tokens)

Zone 1 is farmland: gentle, readable, arcade-era curves. No hairpins. Define six reusable tokens, each specified as total heading change and curve radius in lane widths *(tunable)*:

| Token | Name | Heading change | Radius | Feel / purpose |
|---|---|---|---|---|
| `STR` | Straight | 0° | — | Rest, reading traffic, groove state |
| `SW-L` / `SW-R` | Sweep | 15–20° | ~12 LW | Breathing curve; trailer becomes visible weight |
| `MERGE` | Taper | 3–5° | ~20 LW | On-ramp funnel; the "commit" shape |
| `OVR` | Overpass approach | 25–30° | ~10 LW | Elevation climb + the T07 micro-cutscene |
| `EXIT` | Peel-off | 12–15° | ~8 LW | Ramp divergence; decision shape |

Segment shapes are written as comma-joined strings of tokens, e.g. `S2 = STR, SW-L, STR, SW-R, STR`. Two construction rules:

1. **Never stack two non-STR tokens back-to-back except MERGE→OVR.** The trailer needs recovery room; that's where the skill lives.
2. **Every SW- changes what each personality does** (per §8): Safe drivers hug the inside center, Reckless drivers surge on the exit (D06) and their unsignaled drift is MORE visible on curves — the curve makes Kit legible instead of cheap.

Zone 1 zone-shape (the whole route as one melody):

`STR(S1) → STR,SW-L,STR,SW-R,STR(S2) → SW-R,MERGE(EXIT),STR,SW-L,STR(S3) → STR(S4) → SW-R,OVR(S5) → MERGE,STR(S6A/B)`

---

## 1) The Rhythm Strip (SMB3 map)

Total run time target *(tunable)*: **4:30 baseline flow.** Route A split:

| Beat | Seg | % of trip | ~Time | Rhythm role |
|---|---|---|---|---|
| Teach | S1 | 10% | ~27s | SAFE — first merge, flag flourish |
| Breathe | S2 | 32% | ~86s | SAFE — cruise, groove state, ≥30% spec floor |
| Spike | S3 | 18% | ~49s | HAZARD — psychology cluster |
| Spectacle | S4 | 8% | ~22s | SPECTACLE — Kit's stop, everyone YIELDs |
| Decide | S5 | 7% | ~19s | DECISION — gantry + Gate 2 |
| Reward | S6A | 25% | ~67s | REWARD (dense flavor) |

Route B substitutes S6B at 1.5× segment length (~101s), making the whole trip ~8% longer — that's the price of calm, and the time difference IS the choice.

Checkpoints *(tunable placement)*: **CP1** immediately after Merge Gate 1 (first pattern family complete); **CP2** after the S3 psychology spike, entering S4.

---

## 2) Segment-by-Segment Beat Sheet

### S1 — "Rolling Out" (2 lanes + ramp, ~27s)
**Shape:** `STR, MERGE` → **Merge Gate 1** at taper end.

| Slot | Encounter | Authored behavior |
|---|---|---|
| S1-E1 | Ambient Normal traffic | 2–3 stable cruisers in lane band; establishes flow speed. Zero threats. |
| S1-E2 | On-ramp merge car (Normal) | Spawns offscreen ≥6 lengths (§5.3), signal 1.8s lead, visible headlights ≥2.0s prior. The tutorial merge. Exactly one clean gap is guaranteed (AT-10). |

**Beat note:** Merge Gate 1 evaluation at taper exit → T01/T02 flourish, zero control interruption, H-key camaraderie honk (+$2). First-time players should hit **Good** without knowing the grading exists; **Perfect** should require noticing the signal early. Cut the S1 shot: no radio chatter yet, engine hum only. Silence is the tutorial.

### S2 — "The Big Empty" (3 lanes, ~86s)
**Shape:** `STR, SW-L, STR, SW-R, STR` — two sweeps placed at 35% and 70% of the segment.

| Slot | Encounter | Authored behavior |
|---|---|---|
| S2-E1 | **Hank (R6)** passes left | Steady 100%-flow cruise, never surprises. Sets up his CB voice before the S3 chaos. |
| S2-E2 | Ambient spread | Wide 2.0s+ follow gaps everywhere. This segment should feel almost lonely. |
| S2-E3 | Grove zone | Lane-center hold ~3s → cab sparkle/hum micro-reward (no cash, farm-proof). Sweeps make holding center a *steering* act, not an idle one. |

**Beat note:** This is the "breathe" — the SMB cloud level. The two sweeps exist only so the trailer swings and the world isn't dead air. Optional ambient radio debut here: DJ voice, 3 stations. Nothing merges in S2. The *absence* of merges builds the tension that pays off in S3.

### S3 — "Psychology Row" (3 lanes, ~49s)
**Shape:** `SW-R, MERGE(EXIT), STR, SW-L, STR` — Fuel Exit peels off at ~45%; sweep-left at ~75%.

| Slot | % of S3 | Encounter | Authored behavior |
|---|---|---|---|
| S3-E1 | 15% | **Dolores (R1)** merges in front of player | Safe profile: 2.5s signal lead, 4-length accepted gap, polite double-toot after merge. **Yielding sets the Helped flag → her Stop 2 shortcut tip.** Clipping or crowding her sets Collided/Harmed → she remembers it coldly. |
| S3-E2 | 30% | Walt (R3) 2-lane sweep | Needs-restroom panic: sudden D05 hard brake → 2-lane sweep toward Fuel Exit (T06). Telegraphed with hazards + brake lights ≥2.0s. Teaches "cars have somewhere to BE." |
| S3-E3 | 45% | Fuel Exit cluster | Priya (R4) drifts right with hesitant micro-braking (Needs Gas). Both peel off — traffic visibly *has lives*. |
| S3-E4 | **66%** | **KIT (R2) OVERTAKE** | Surge-and-swerve from rear: D06 accelerate surge, unsignaled lane entry with ≥0.6s visible lateral drift (AT-09 compliant — fair but rude), gaps 1.5 lengths, triple-honk if player brakes. Runs 126.5% flow — precisely above minor speeding, below major (AT-27). He's loud, red, and wrong, and the player should feel *outraged*, not ambushed. |
| S3-E5 | 85% | Early + late ambient merges | One signaled Normal merge left-to-right, one Reckless unsignaled squeeze ≤15s later. The spike's crescendo: the player must *read*, not react. Escape route guaranteed (AT-10). |

**Beat note:** This is the stage the whole game is about. Five slots, each teaching a different read: predictable-safe, panicked-but-decent, goal-driven-distracted, arrogant-reckless, and finally *pure traffic*. Dolores in front of the player, Kit behind them, and the player is trapped between patience and fury — that's the design. The SW-L at 75% forces Kit to overtake *on a curve*, making his drift readable as sin.

### S4 — "Blue Lights" (3 lanes, ~22s)
**Shape:** `STR` — deliberately straight. The drama is systemic, not geometric.

| Slot | Encounter | Authored behavior |
|---|---|---|
| S4-E1 | Cruiser dispatch | Kit's accumulated speeding (started S3-E4) logs minor violations → cruiser spawns offscreen, P1→P2→P3 within the segment. |
| S4-E2 | **Kit's scripted stop** | Cruiser LIGHTS on → Kit bolts-or-complies roll (25% flee per §10.4). Stop: T03 pull-over, T04 settle, hazards on. |
| S4-E3 | Universal YIELD wave | All ambient traffic: Safe drift right + hazards, Normal vacate adjacent lane, Distracted delayed-panic-brake (D09). Player is *inside* the wave — one of many, which is the point. |
| S4-E4 | Corridor guarantee | ≥1.5 truck widths unblocked around Kit's stop, 100% of scenes (AT-19). The player drives PAST the spectacle, doesn't stop for it. |

**Beat note:** The spectacle beat — SMB flagpole energy, but diegetic. Player passes the scene with full control; nearby Safe drivers give the player a solidarity nod/honk. CB line from Hank lands here ("breaker one-nine… that feller's lucky it warn't *him*"). Run-2 mutation *(tunable)*: Kit subdued and quiet at Stop 2 (complied) or absent, hatchback booted in the Stop 2 lot (fled). His absence is the memory.

### S5 — "The Sign" (3 → 2 lanes, ~19s)
**Shape:** `SW-R, OVR` — gantry at crest, connector ramp dives to Gate 2.

| Slot | Encounter | Authored behavior |
|---|---|---|
| S5-E1 | Overhead sign gantry | Route A "STOP 2 DIRECT — CONGESTED" / Route B "SCENIC BYPASS — SLOW." Full readability ≥6s before commit (1.5× the §5.3 warning standard — decisions get more warning than hazards). |
| S5-E2 | Merge Gate 2 | Connector-ramp taper; second and final gate evaluation → last T01/T02 flourish. |
| S5-E3 | **Overpass micro-cutscene (T07 rewritten)** | Camera pulls back: truck small, curved ramp, farmland sunset, 2–4s, no text, no score, zero control loss. Occasionally Kit crosses a different ramp below. **This ends every stage. It's the flagpole.** |

**Beat note:** The decision must be legible as a *values* choice, not a math choice the first time: "direct" sounds better, and finding out it's 0.6-congestion pain is a lesson. B's reward is beauty and calm — plus the trap below.

### S6A — "Weight of the World" (3 lanes, congested 0.6, ~67s)
**Shape:** `MERGE, STR`.

Dense finish: 0.6 congestion *(tunable)*, short merge windows (forced-flow lite), Stop 2 off-ramp gore point at the end. No authored cast slots — ambient traffic only, because the *crowd* is the antagonist here. Reward flavor: arrive fast, arrive tense.

### S6B — "The Long Way" (2 lanes, congested 0.25, ~101s)
**Shape:** `MERGE, STR, SW-R, STR`.

Calm detour at 1.5× length. Two authored elements: the **static speed-trap cruiser** (radar on a bend, telegraphed by Hank's CB warning at ~70% reliability — the *systemic* way to learn traps), and one wide-open straight where the radio and the sunset get to breathe. Reward flavor: arrive slow, arrive human. If the player was flagged High-LA on route A sins, the trap stings; otherwise it's scenery.

---

## 3) Handoff Contract → Cast Bible

Slots that set memory flags (write these dialogue variants FIRST — they anchor to fixed positions):

- **S3-E1 Dolores:** Helped (yielded) / Harmed (crowded) / Ignored / Collided — 4 variants, spoken at Stop 2.
- **S3-E4 Kit:** pre-stop bravado, 1 line during pass. **S4-E2:** the "tell me you saw that" line lands immediately after his stop via window-roll or at Stop 2.
- **S4-E3 Hank:** CB reactions to the stop — 2 variants (Kit complied / fled).
- **S2-E1 Hank:** intro CB chatter, 2–3 lines, same seed every run (recognition anchor for AT-22).
- **Walt/Priya:** no dialogue this slice — they're behavior-only characters (that IS their character).

Recognition-stack requirements carried forward: silhouette prop visible at zoom (roof rack, spoiler+hubcap, chrome stacks), one signature sound each, palette + params locked across runs (AT-21). Success gate: 3/5 testers identify someone unprompted (AT-22).

---

## 4) What This Sheet Delays / Doesn't

- **In scope this week (paper):** all of the above. Zero builder dependency.
- **Phase 1 prompt 1 (post-gate):** `SW` token implementation + S1–S3 as authored slots, replacing generic spawner placement for R1/R2. One subsystem at a time per §18.
- **Deliberately NOT in Zone 1:** Bo (R5) is night-only/Tired — he's Zone 3's native. Zone 1 stays daytime; save him.

*Tuning values (percentages, congestion, times, curve radii) are proposals, all isolatable in the AT-25 config file. Nothing here overrides the spec's numbers without an explicit note.*
