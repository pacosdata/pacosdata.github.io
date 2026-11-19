# qwen

All three at once — toy, cast, world. That's the whole game, honestly 🚚✨ And timing-wise you're right on schedule: today is Phase 0 day 1 (16–20 Nov), with the cold-tester gate on Friday. So here's how I'd attack all three without breaking your own roadmap's "one subsystem at a time" rule: **juice the toy in the builder now, do characters and levels as paper design this week**, then feed them to the builder after Friday's gate passes.

## 1. The Toy: maximum "hehe truck" per pixel

Your §7 rule is the secret weapon here: **procedural adjustments cost 0 animation slots**. So almost all of this is free against your 50-slot budget.

**Fix the hands first.** Your 90-stage demo already told you SPACE+F is cramped. Go W = gas, S = brake/reverse, automatic transmission, mouse owns steering. Left hand = pedals, right hand = wheel, like a real body. Keep SPACE/F as remappable alternates. Shifting isn't the toy — reading, positioning, smoothness is. Cut it from the default.

**Then the juice pass, in cheap-to-expensive order:**

\- **Exhaust stacks that pop** — chunky pixel smoke rings on throttle, a big satisfying *braaap* puff on surge. Instantly alive.

\- **Body language** — you already specced the ±0.5 cab elastic margin; add 1–2px of body roll into turns and push `trailer_swing_gain` from 1.0 toward ~1.6 so lane changes visibly *articulate*. On a straight the truck is a rectangle; the swing is the drama.

\- **Sound is half the toy** — engine pitch tied to speed, blinker tick-tock (so satisfying people signal for fun), two-tone air horn with hold-duration expression (short toot = friendly, long blast = *excuse me*), Doppler whoosh on clean overtakes, soft thump on near-misses.

\- **Well feedback** — a tiny click as the cursor crosses each soft-well boundary, a thunk at lock, and the breakaway flick gets a release sound. The steering surface should feel *notched*, like a real wheel.

\- **Persistent skid marks** that scroll away behind you + tire squeal only past a slip threshold. Rubber earns noise.

\- **The groove state** — hold lane center for ~3s and the cab gets a tiny sparkle/hum. A micro-reward for the core verb, no cash (farm-proof). This is your coin trail.

\- **Diegetic 90s toys** — a radio with 3 stations + CB static, headlights at dusk, wipers. Idle fidgets that make the cab a *place*.

Keep everything in the one tuning file (AT-25), and A/B `trailer_swing_gain` and centering-spring strength with Friday's five strangers. Gate stays AT-01–07, untouched.

## 2. Characters: build them like Nintendo builds enemies

Your own log nailed it: Safe = Goomba, Reckless = Koopa, Tired = Boo, Late = Hammer Bro. So design each recurring driver as a **recognition stack** — four layers, all readable in ~3 seconds:

| Driver | Silhouette prop | Behavior tell | Sound signature |

|---|---|---|---|

| **Dolores** (teal sedan) | roof rack + casserole dish | signals 2.5s early, drifts right toward diner exits | polite double-toot |

| **Kit** (red hatchback) | spoiler + one mismatched hubcap | surge-and-swerve, 126.5% flow, gaps too tight | impatient triple-honk |

| **Hank** (classic semi) | chrome stacks, mud flaps | steady cruise, never surprises you | low CB drawl |

Rules I'd lock into the cast bible:

\- **Author their positions, don't spawn them.** Your persistence revelation is correct: Kit *always* overtakes you two-thirds into S3. Dolores *always* merges early in S3. That's what turns traffic into characters — "OH IT'S THIS GUY" only works if he's *placed*, like a Hammer Bro on its platform.

\- **One signature scene per run, one evolution on run 2.** Kit gets his S4 shoulder stop; on run 2 he's subdued (complied) or absent with his hatchback booted in the Stop 2 lot (fled). That absence is your Undertale memory.

\- **Four memory variants × 2–3 lines each** (Helped / Harmed / Ignored / Collided) for Lou, Tamsin, Rosa, Dolores, Kit, Hank. Small, writable this week. Flavor check:

\- *Rosa, Ignored:* "You missed pie night. Again. Dolores asked about you. I said you were probably dead in a ditch."

\- *Kit, after his stop:* "That cruiser came out of NOWHERE. …You saw that, right? Tell me you saw that."

\- *Hank, CB:* "Breaker one-nine. You got a shiny new rig and a heavy foot. One of those'll get you home."

\- Palette + params locked across runs (AT-21), success = 3/5 testers recognize someone unprompted (AT-22).

## 3. Level design: roads become places

Three upgrades, straight from your demo lessons:

**Curves are content.** Shape grammar per stage: *straight → gentle left → merge → gentle right → overpass → straight → exit*. Curves create anticipation ("I should move over *now*"), they change what each personality does, and they make the trailer matter. Gentle, arcade-era curves — not hairpins.

**Beat-sheet Zone 1 as SMB3 rhythm** — safe → hazard → safe → hazard → spectacle → reward:

\- **S1** teach the merge (safe) → **S2** open cruise, ≥30% of trip time, *breathe* (safe) → **S3** Dolores then Kit, psychology spike (hazard) → **S4** Kit's stop, everyone YIELDs (spectacle) → **S5** gantry choice (decision) → **S6A** dense finish vs **S6B** calm detour + speed trap (reward, two flavors).

**The overpass ritual — and one spec reconciliation.** Your flagpole revelation deserves a formal home: merge gates keep the in-flow T01/T02 flourish (zero control loss, per §6), but **T07's fade-to-black gets upgraded to the overpass micro-cutscene** — camera pulls back, truck small, curved ramp, sunset, 2–4 seconds, no text, no score. Occasionally Kit crosses a different ramp below. Per-zone variations: cozy trees, desert interchange, industrial spaghetti, night taillights. Same 50 slots, just rewrite T07's trigger context. That's your castle-entering moment, and it should end *every* stage.

Then the 8-zone world map writes itself as pattern families (your fractal idea): 1 farmland/merges → 2 desert + Carhenge tourist stop → 3 night/Tired-Boo world → 4 industrial interchange world → 5 mountain curves + runaway-truck ramps → 6 metro forced-flow congestion → 7 weird coastal tourist remix → 8 finale gauntlet. Each zone: one new family + one old family remixed, one overpass variant.

---

**This week:** juice pass + pedal fix in the builder (still Prompts 1–2 scope), cast bible + Zone 1 beat sheet on paper, five strangers Friday. Curves are the *first* Phase 1 prompt if the gate passes early — they're the single biggest toy-fun upgrade, but they change the road math, so don't smuggle them into the gate test.
