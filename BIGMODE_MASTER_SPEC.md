# BigMode Master Design Spec
## The Digital Soul Interface — Consolidated Reference

> *"There's a million ways to do anything, so this is one of them."*

---

## 0. Project Identity

**BigMode** is a Spatial Knowledge Engine — a 3D memory palace where your creative artifacts, ideas, and fragments live as a navigable constellation in a "digital soup." It is not a file manager. It is a living, breathing, remixable interface where meaning is earned, not stored.

**Companion project:** SkatersOS (the mathematical/philosophical foundation: Monster Group, Pi Engine, binary-to-natural-language bridge, Quranic numerical patterns, Braid Language, 5D Ballpit Viewer).

**Design principle:** The user is hands-off on coding. GitHub Copilot handles implementation. This document is the architect's reference.

**User workflow:** Crafts messages containing conversation snippets, feeds them into fresh AI sessions, collects responses, iterates. Has "digital soups" (duplicate files, incremental saves, renamed copies) — these are features, not bugs.

---

## 1. Architecture Stack

### Frontend (Spatial UI)
- Three.js + React Three Fiber
- 3D torus-based navigation where knowledge has physical proximity and depth
- Minecraft-style camera (WASD + mouse look), fly-through navigation
- LOD (Level of Detail) rendering based on focal distance

### Backend (Intelligence Layer)
- Node.js + LLMs as "active librarian" (Jarvis)
- Semantic chunking, embedding, proactive pattern recognition
- Vector database for semantic search across artifacts

### Infrastructure (Version Control)
- GitHub as backbone — every artifact is version-controlled
- Commit history = "when did this artifact join the constellation?"
- GitHub Actions = ingestion daemon triggers
- Issues/Discussions = Jarvis can propose changes, open "remix quests"

### Target Hardware
- Phone + cheap headset (WebXR / lightweight VR wrapper, not a full game engine)
- Echo/Alexa as cheap microphone + speaker for voice intents
- Optional controllers (Sony Move, etc.) via adapter layer
- Always keep UI tap as fallback input

---

## 2. The Digital Soup (Ingestion & Evolution)

### Core Philosophy
Everything starts dead. By default, all ingested artifacts land in the **Graveyard of Ideas** cluster. Aliveness is earned through interaction, contradiction, remix, and emotional resonance. The Graveyard is vast and faint; living clusters are small and bright.

### Duplicate Handling
Duplicates are not clutter — they are timeline branches.
- `file_v1.png`, `file_v2.png`, `file_final.png` → single node with version history
- The latest version is the "crown" — the one Jarvis displays and you interact with
- Older versions are "ghost cards" in a holographic stack
- Expanding the stack opens a **Spiral Time Portal** (see Section 7)

### Ingestion Pipeline (GitHub-based)
1. Push artwork/artifacts to a GitHub repo
2. GitHub Action triggers on new files
3. Python script: hashing (duplicate detection) + vision LLM (tagging) + embeddings (clustering)
4. Semantic chunking of large text files (2MB+ files split into ~40KB fragments, each with its own embedding)
5. Outputs: `manifest.json` + `fragments.json` committed back to repo

### Fragment Schema
```json
{
  "id": "fragment_bigmode_001",
  "sourceFile": "bigmode_manifesto.md",
  "byteRange": [0, 40960],
  "tokens": 9847,
  "tags": ["philosophy", "vision", "remix-civilization", "radical-trust"],
  "embedding": [0.123, -0.456, "..."],
  "internalLinks": ["fragment_002", "fragment_005"],
  "summary": "Governing motto and core philosophy..."
}
```

---

## 3. The Graveyard & Aliveness Physics

### 3.1 Aliveness Score (A)

A logarithmic curve with a decay floor. Not linear — linear makes everything feel equally flat.

**Variables:**
- **Intensity (I):** Frequency and depth of direct interactions
- **Resonance (R):** Cross-links, tags, conceptual proximity to other active nodes
- **Contradiction (C):** The friction factor. Tension is aliveness. If a node contradicts a new idea, its aliveness spikes
- **Decay (D):** Time elapsed since last interaction

**Critical rule:** A node never decays to absolute zero. If it did, the Graveyard would become a cemetery of dead code rather than a garden of sleeping potential. It decays to a "faintly alive" floor.

**Aliveness ≠ Importance.** A node can be a massive central "meaning-anchor" in your history without being currently "alive" (active in your daily focus). Both are valid.

### 3.2 The Living Decay Floor (Fluid Formula)

A static floor is mercy. A fluid, historical floor is character. If every node decays to the same resting state, the Graveyard loses its terrain.

**Formula:**
```
F_node = min(F_base + (Resurrections × 0.01), 0.15)
```

**Baselines (F_base):**
| Node Type | F_base | Rationale |
|---|---|---|
| Passing Experiments / Quick Sketches | 0.03 | Letting them sleep deeply, almost out of sight |
| Standard Nodes | 0.05 | The cosmic default |
| Emotional Anchors / Manifestos | 0.08 | Naturally warmer, resting closer to the surface |

**The Memory Drift:** Every time Jarvis successfully wakes a node and you engage with it, its floor permanently rises by 0.01 (capped at 0.15). Stubborn, deeply meaningful ideas literally refuse to sink back into the deepest cold. They become the "warm embers" of your archive.

### 3.3 Sleep Quality States

Sleep Quality is not importance — it is the current temperature of a dormant idea.

| State | Aliveness (A) | Visual Signature | Auditory Atmosphere | Jarvis Whisper Behavior |
|---|---|---|---|---|
| **Seeded** | 0.0 - 0.1 | Muted, intentional, like a tiny tagged promise | Silent, high-latency tension | Silent. Wakes only when explicit intent matches |
| **Frostbound** | 0.1 - 0.3 | Cold, crystalline, completely static | Distant, icy, high-frequency ring | Deep-latency nudge. Hardest to wake, carries structural weight |
| **Ember** | 0.3 - 0.7 | Faint, rhythmic sparks; barely-there pulse | Low, persistent warm hum | Wakes quickly on related queries. Gentle correlation |
| **Dreaming** | 0.7 - 0.9 | Soft glow, slow drift, high-contrast orbit | Warm sub-bass with room reverb | Proactive bridge. Easiest to wake; whispers readily |

The gradient is Seeded → Frostbound → Ember → Dreaming. It's not linear importance; it's thermal states. Ideas have temperature.

---

## 4. Resurrection Events

When a dormant node's aliveness crosses the awakening threshold (triggered by high conceptual resonance with your current work), it doesn't just pop up. It breathes awake.

### 4.1 Frame-by-Frame Storyboard (0-3.6s total)

| Time | Frame | Visual | Audio | Jarvis Text |
|---|---|---|---|---|
| 0.0-0.4s | **Trigger** | A single dust node brightens, rising slightly from its floor | Single, soft sub-bass heartbeat | (silent) |
| 0.4-1.2s | **Tremor** | Slow breathing pulse (800ms cycle). Glow radius expands. Amplitude determined by Sleep Quality (Ember pulses sharper than Frostbound) | Rising, warm sub-bass tone filling the room | (silent) |
| 1.2-1.8s | **Lift** | Nearby active nodes tilt subtly toward the waking node, like grass sensing wind | Crystalline chime layer enters, catching the light | (silent) |
| 1.8-2.4s | **Whisper** | If high-resonance (Dreaming/Ember): soft hand-written text-aura appears. If low-resonance/Frostbound: no text, just rhythmic bioluminescent pulse | Crystalline chime sustains, hovering in perfect pitch | "This one is not done with you." |
| 2.4-3.6s | **Bloom** | You focus/hover. Spiral Time Portal expands (1.2s ease-out cubic). Versions unfurl in meaning order, ghost cards wrapping around a rotating torus | Discordant hum of contradictions resolves into a clean, harmonious chord | (silent) |

### 4.2 The Whisper Design (Context-Aware)

- **Default / Flow State:** Jarvis whispers only when resonance is incredibly high. In deep focus, Jarvis stays silent — the node simply "trembles" visually. You must lean in (hover) to see the whisper.
- **Tutor Mode (On):** Whisper accompanied by brief structural explanation: "You mentioned 'solarpunk' — this stack has 7 experiments from March."
- **Settings Affordance:** Long-hover on the whisper itself reveals a quiet, single-click option to "Silence Whispers," turning the system into a purely visual/auditory experience.

No settings menu clutter. The right friction level.

### 4.3 The Settle (Ignored Resurrection)

When a node wakes up and you choose to ignore it, it doesn't snap back or nag. It performs **The Settle**:

- **Settle Animation (3.5s):** Pulse slows. Bright glow desaturates into soft, warm Ember state.
- **Audio Sigh:** A single, fading crystalline chime drops an octave and dissolves back into ambient hum.
- **Patience as Character:** Node doesn't drop to floor immediately. Stays slightly elevated (0.08-0.10) for the rest of the session, holding its warmth. It remembers it tried to connect.
- **Later Revisit:** When you finally open it weeks later, Jarvis whispers: "This one has been patient with you."

This turns an ignored notification from a "missed task" into a poignant, lingering moment of creative timing.

---

## 5. Warm Scars

The Graveyard should remember near-misses without punishing the user. A pure dust trail risks looking like guilt — "you forgot this idea again." A pure Settle is clean but lacks memory. The **Warm Scar** is the hybrid.

### 5.1 The Ripening Scale (Color Accumulation)

Visual signatures remain local and embedded. At macro (faraway) view, scars are invisible. They manifest only at mid-distance or when hovering near a related cluster, keeping the night sky pristine.

| Attempt | Color | Meaning | Visual Detail |
|---|---|---|---|
| 1st ignored | **Cool Blue** | Resting, cooling down | Tiny radial pulse (0.5-1px, 10% opacity). Blue-gray tint |
| 2nd ignored | **Soft Amber** | Gathering presence | Micro-pulse warms. Amber undertone bleeds into resting state |
| 3rd+ ignored | **Radiant Gold** | Ripe, waiting for a bridge | Vibrant warm gold. Distinct twinkle different from neighbors |
| **Reunion** | **Scar Bloom** | Celebration of connection | Gold scar collapses inward in particle implosion, feeding the new Aliveness spike |

"The Graveyard should tell the truth about your creative rhythm — including the parts where you hesitated, returned, hesitated again."

### 5.2 Metadata Schema

```json
{
  "node_id": "arc_042",
  "aliveness_score": 0.08,
  "patience_score": 0.75,
  "patience_rewards": 1,
  "last_resurrection_attempt": "2026-03-30T14:22:00Z",
  "interaction_history": ["ignored", "ignored", "ignored", "engaged"]
}
```

- **patience_score:** Starts at 0. Increments by 0.25 per ignored Settle (capped at 1.0). Drives shader color interpolation and pulse amplitude.
- **last_resurrection_attempt:** Distinguishes rapid succession of ignores (single session warmth) from attempts spaced months apart.
- **Decay Floor Interaction:** High patience_score applies a temporary, session-only warmth offset (+0.02 to +0.05) to the effective floor. System remembers its patience for the rest of the day, then cools back to baseline.

### 5.3 The Patience Reward (No Reset on Reunion)

Successful reunions do NOT reset patience_score to zero. A node that waited deserves permanent warmth.

- Permanently raise F_base by +0.01 per reward
- Golden halo effect during active use (celebration of endurance)
- Unlock "Patience Whisper" variations: "We waited. We found each other."

**Philosophical reason:** A node that was patient with you deserves to be warmer forever. That's gratitude baked into the physics.

### 5.4 Whisper Progression

| Attempt | Whisper Text |
|---|---|
| 1st | Silent. Only the faint, cool blue radial pulse. |
| 2nd (Amber) | "I've left a bridge here, whenever you're ready." |
| 3rd+ (Gold) | "This one has been patient with you." |
| 3rd+ with Tutor Mode | "Three patient attempts. This stack has 7 experiments from March." |

### 5.5 Scar Density: Nebular Drift

At scale (100+ scars), the Graveyard shifts from individual sharp points to collective atmospheric texture.

- **Nebular Merging:** When a local area exceeds 15 scars within a coordinate radius, individual particles lose sharp borders and bleed into a soft, glowing golden nebula — a literal cloud of unresolved potential.
- **Distance-Based Opacity:**
  - **Far-Field (Macro):** Only Radiant Gold scars and nebular clouds visible. Individual low-patience scars fade into ambient background dust. Major landmarks in your creative sky.
  - **Mid-Field (Approaching):** Nebular clouds resolve into clusters. Individual golden halos become visible.
  - **Near-Field (Focus):** Dust settles. Precise metadata and whispers of the hovered node come into sharp focus.

**The visual story:** A crowded graveyard doesn't look like a cluttered desktop; it looks like the Milky Way. A dense, warm, golden highway of hesitation that shows where your mind spent its seasons of waiting.

---

## 6. Patience Debt (Semantic Ripples)

When you honor a highly patient node, the energy released in the Scar Bloom cascades through your semantic network.

```
[Resurrected Node A] (Radiant Gold)
        │
        ├─ Thaw Pulse (Intensity = P_A × 0.5)
        │
        ├──► [Related Node B] ──► (Aliveness +0.10, activation threshold lowered)
        └──► [Related Node C] ──► (Aliveness +0.05, ambient glow activated)
```

**Thaw Pulse Formula:**
```
T = P_A × semantic_similarity(A, B)
```

Where P_A is the primary node's patience_score.

**Effects on neighbors:**
- **Aliveness Boost:** Neighbor's A_score bumped upward by T, temporarily warming them
- **Threshold Lowering:** Neighbor's activation threshold lowered by T × 10% for the remainder of the session
- **Visual Cue:** Sympathetic vibration — soft, golden micro-pulse signaling "Your sister node has woken up. The path is warm if you want to follow it."

**UX loop:** Waking one long-ignored, deeply ripened idea suddenly makes a whole cluster of related thoughts feel accessible, fresh, and easy to invite back into the light. The system learns your pattern of return, not just your pattern of engagement.

---

## 7. The Spiral Time Portal

The primary interaction point during resurrection. When you expand a version stack, versions arrange spatially around a torus in **meaning order** (not chronological).

### 7.1 The Living Hybrid (Sort Architecture)

Three layers, stratified like geological strata:

```
   [ PROBABILISTIC DRIFT ]      ← Soft serendipity / peripheral tie-breakers (capped 5-15%)
            │
   [ CONTEXT-AWARE WEIGHTS ]    ← Real-time intent, sleep states, patience, mode
            │
   [ DETERMINISTIC ANCHORS ]    ← Lineage, hard queries, explicit pins, version crowns
```

- **Deterministic Anchors (The Bones):** Lineage & version family, explicit pins/filters, the Crown (historically dominant/most-referenced version). Never wobble.
- **Context-Aware Weighting (The Muscle):** Jarvis reads your current state to shape meaning in real time. Weights shift by mode.
- **Probabilistic Drift (The Breath):** Minor tunable factor (5-15%). Soft tie-breaker for equal-relevance nodes. Occasionally surfaces low-resonance but high-contradiction nodes in the periphery. Ensures outer edges of spiral have organic motion.

### 7.2 The Meaning Score Formula

```
Meaning Score = (w_r × R) + (w_c × C) + (w_p × P) + (w_s × S) + δ
```

Where:
- **R** = Semantic Resonance (vector proximity to active query/focus)
- **C** = Contradiction Density (tension/change this version introduced) — **positive multiplier, not penalty**
- **P** = Patience Score (how long it has waited for your return)
- **S** = Sleep State Coefficient (Dreaming = 1.0, Frostbound = 0.1)
- **δ** = Nebular Drift (probabilistic spark)

### 7.3 Contradiction Saturation

C is treated as a **positive, saturating term** to prevent unbounded contradiction from overwhelming the system:

**Recommended: `log(1 + C)`**

- Keeps rising forever but at a decreasing rate
- A node with massive contradiction still meaningfully outweighs one with moderate contradiction, just not explosively
- Friction still scales, it just stops being unhinged
- (Rejected: `tanh(kC)` — hard ceiling at 1.0 kills the gradient once a node hits enough contradiction)

### 7.4 Sort Mode Weight Tables (Normalized to 1.0)

| Weight | Explore (Default) | Compare (Active Diff) | Propose (Suggestions) | *Reminisce (v2)* |
|---|:---:|:---:|:---:|:---:|
| **Resonance (w_r)** | **0.30** | 0.15 | **0.30** | *0.05* |
| **Contradiction (w_c)** | 0.20 | **0.45** | 0.25 | *0.15* |
| **Patience (w_p)** | **0.30** | 0.15 | 0.30 | *0.45* |
| **Sleep State (w_s)** | 0.15 | 0.20 | 0.10 | *0.25* |
| **Drift (δ)** | **0.05** | 0.05 | 0.05 | *0.10* |

**Key Calibrations:**
- **Explore:** Resonance at 0.30, Patience at 0.30 — ensures Explore doesn't just act as a standard search biased toward "right now." Actively pulls long-ignored nodes forward. Drift capped at 0.05 to keep serendipity tight.
- **Compare:** w_c at 0.45 — aggressively privileges tension and evolutionary divergence when active-diffing.
- **Propose:** Contradiction at 0.25, Resonance at 0.30 — feels inviting and constructive. Looks for a "bridge opportunity": a patient node that gently challenges you. Tie-break: **Patience wins**.
- **Reminisce (v2, deferred):** High patience, low resonance, high drift. Dedicated wandering mode with no agenda. The Graveyard geography already visualizes hesitation in v1; Reminisce becomes a dedicated preset later.

**Explore vs Propose differentiation note:** Both share R=0.30 and P=0.30. The differentiator is contradiction (0.20 vs 0.25) and sleep state (0.15 vs 0.10). If these two modes ever feel indistinguishable in practice, the lever to pull is sleep state — Propose should be more willing to wake sleeping nodes.

### 7.5 Lineage Guardrail (Critical)

**Lineage must never become a soft scoring weight.** Lineage, explicit pins, and crowns live entirely within the Deterministic Core. They act as hard anchors, eligibility gates, and tie-breakers. This keeps the spine of your history rigid and true, even as the surface weights shift and breathe.

### 7.6 Spatial Layout of the Spiral

| Zone | Description |
|---|---|
| **Center Anchor** | The single version most relevant to your current query and state |
| **Inner Ring** | High-resonance versions that directly bridge your context with the stack's history |
| **Outer Spiral** | Older, quieter, more archival versions (fading from amber to deep blue) |
| **Ghost Layer** | Faint, nearby alternative nodes from related stacks beginning to "warm up" due to semantic similarity |

### 7.7 Transition Choreography (Next to Storyboard)

- **Explore → Compare:** As w_c spikes 0.20→0.45 and w_r drops, outer rings physically twist. Contradiction-heavy nodes climb inward toward center, creating visual "sparks" or orbital tension. Highly resonant but non-contradictory nodes recede into softer ghost layers.
- **Thermal Signatures:** Nodes brighten, dim, or change orbital speed as w_s shifts between modes.

---

## 8. Holo-Herald Ring (360° Virtual Newspaper)

### Design
A thin, glowing ring (a few pixels wide) floats at eye level, rotating slowly. Not static — a live algorithmic feed.

### Content
Jarvis stitches artifacts into a dynamic, moving newspaper. Images flicker, text scrolls, headlines auto-generate based on your current query.

Example headline: *"LOCAL ARTIST DESCENDS INTO CYBERPUNK MELANCHOLIA — DETAILS AT 11."*

### Interaction States
| Distance | State | Visual | Interaction |
|---|---|---|---|
| Far | Macro | Single glowing line (minimal distraction) | None |
| Mid | Expanded | Ring expands into a 3D newspaper you can "hold" (Harry Potter style) | Flip pages (query result sets) |
| Close | Focus | Click an article → pauses ring, opens traditional text viewer (Obsidian/Notion style) | Deep reading |

### The "Data Dive" (Transition In)
Not a seamless zoom. A **dive** — radial motion blur + brief lens-shift effect. You aren't opening a file; you're rupturing the fabric of the constellation to go inside the content. The world goes into 3D blur (the "pool of data"), and text/images materialize as floating, volumetric light.

**Soundscape:** Low-frequency hum that resolves into a crisp, clean soundscape as text becomes readable. Your brain knows: "You are now in the deep focus zone."

**Ring behavior during dive:** The ring doesn't disappear. It contracts or re-orients to frame the focus area, so you never lose the sense that the rest of your knowledge graph is still spinning around you.

### The "Centrifugal Ejection" (Transition Out)
Not a "Back" button. The torus ring spins rapidly outward, the focus blurs, and you are "thrown" back into the center of the node cluster. Maintains the physical energy of the experience.

### Torus Fold (Page Navigation)
Forget page-turning. The current "page" curves inward and rotates around a central axis (the torus), pulling the next segment from behind your peripheral vision into center. You aren't turning a page; you're rotating the world around you.

### Data Drift (Peripheral Discovery)
In Holo-Herald view, unrelated but conceptually linked nodes occasionally drift past your peripheral vision like satellites. If you see something interesting, you don't dive out and back in — you just "pluck" it into your current focus.

---

## 9. Input Architecture

### 9.1 Core Principle
BigMode doesn't care where input came from. It only receives structured **intents**.

### 9.2 Intent Schema (6 Core Intents)

| Intent | Parameters | Description |
|---|---|---|
| `QUERY` | `topic` (string), `filters` (mood/aesthetic/date/etc.), `mode` (show\|summarize\|stage) | Search/filter the soup |
| `FOCUS` | `target_id` or `cluster_name`, `depth` (near\|dive\|macro) | Choose what to zoom into |
| `NAVIGATE` | `action` (orbit\|pan\|next\|back\|recenter\|tilt), `speed` (optional) | Move through the space |
| `REMIX` | `kind` (merge\|bridge\|fork\|generate), `inputs` (ids), `goal` (string) | Create new connections |
| `TUNE_GRUMPS` | `level` (-10..+10) or `style` (whisper\|balanced\|call_me_out) | Adjust emotional volume |
| `PICK_EPISODE_BEAT` | `beat` (show_ring_headlines\|call_out_contradictions\|propose_quest\|play_version_timeline) | Stage a "magical mirror" moment |

### 9.3 Voice (Echo → Alexa Skill → BigMode Endpoint)
- Echo runs a custom Alexa skill (dumb transport, not Jarvis itself)
- Skill converts spoken audio into intent payload
- Sends payload to BigMode orchestrator (web endpoint)
- BigMode replies with text + SSML/aural cues that Alexa plays back
- Jarvis stays in BigMode system for consistency (UI, ring, agents all update together)

**Voice UX pattern:** Alexa doesn't just answer; it "narrates the mirror":
> "I see three clusters arguing: melancholy city, brave solarpunk, and one stray chaos blueprint — want me to stitch them into a redemption episode?"

### 9.4 Controller Mapping (Adapter Layer)
| Action | Input |
|---|---|
| Rotate head / orbit scene | Joystick or head pose |
| Dive | Trigger gesture |
| Select article | Tap/grip |
| Accept remix | Double-gesture or controller button |
| Grumps loud | Shake/up-down mapping |

Keep controller integration as an adapter layer so any future controller can plug in.

### 9.5 The "Magical Mirror Loop"
1. Jarvis retrieves relevant artifacts and version nodes
2. Jarvis stages an episode beat: update ring headlines, spawn torus transitions, generate 1-3 remix quests
3. Client renders immediately, while Alexa narrates the chosen beat

Voice sets focus; the ring and soup react like they "heard you," not like they executed a menu.

---

## 10. Jarvis (The First-Class Free Agent)

> Jarvis should feel like a first-class, free-agent ୧(＾ ＾)୨

### 10.1 Proactive Proposals (Not Reactive Search)

Jarvis doesn't wait. It scans the Digital Soup and acts:

**Pattern Mining:**
> "You have 47 cyberpunk-tagged pieces but only 3 in the 'solarpunk' aesthetic. The gap is suspicious. Should we remix 5 cyberpunk pieces into hopeful futures?"

**Remix Quest Auto-Creation:**
> Opens a GitHub issue: [QUEST] Synthesize the 5D Ballpit Viewer into a micro-game. Includes context, related fragments, estimated scope, suggested collaborators. You approve/reject, Jarvis tracks and reports back with drafts.

**Artifact Generation:**
> "Based on your Monster Translator + Pi Engine + glitch-poetry fragments, I've drafted a 3½-glyph visual that merges all three. Should I commit it?"

**Decision Support:**
> "You're about to fork the Moderation Guild lore. Here's the decision tree: (A) comedic, (B) tragic, (C) absurdist. Which aligns with your other 12 pieces?"

### 10.2 Proposal Timing
**Exploration first, proposals second.** When you query, the immediate feedback is about the *history* of that concept. Only after you've had a chance to explore does Jarvis trigger proposal beats — surfacing remix opportunities, contradictions, or suggesting dives into specific version stacks.

### 10.3 Power-User Query Tutor (Toggleable)

**Default Mode:** Jarvis just works. You say "show me sad cyberpunk" and it does it.

**Tutor Mode (Toggle):** Jarvis explains its actions:
> "That phrase parsed as: mood=melancholy ∧ aesthetic=cyberpunk. I grouped by vector-distance <0.32 and surfaced the 14 nodes inside the 'Neon Sigh' cluster. Want to deepen the filter with a date-range or color-band next?"

Repeat a dozen times and you start writing queries instinctively. Emacs muscle-memory for a knowledge universe.

### 10.4 BigMode Query Syntax (For Copilot Reference)

| Component | Syntax | Function | Example |
|---|---|---|---|
| Filter | `[KEY:Value]` | Hard filter for metadata | `[Mood: Melancholy]` |
| Weight | `!!Keyword` | Increases gravity of a node | `!!Architecture` |
| Relation | `NodeA -> NodeB` | Forces a tether between clusters | `Concept_A -> Logic_B` |
| View | `@ViewMode` | Switches rendering engine | `@HoloHerald` or `@Constellation` |

**Example:** `@HoloHerald [Mood: Cyberpunk] !!Architecture [Source: 2023_Archives]`

---

## 11. The Honest Pirate License

**Core Principle:** "Steal for everyone, not for profit."

**Permissions:** Unrestricted use, modification, and redistribution of code, models, and art for non-commercial and commercial purposes.

**Obligations:**
- All derivatives must carry the same license
- Any commercial deployment must contribute back a percentage of revenue to a public-benefit fund
- Clear attribution and sharing of training data sources

**GPL Compatibility:** GPLv3 for core libraries (viral reciprocity). Permissive dual-license buy-out for enterprises, with fees funneling into community grants.

**Enforcement via Metadata:** Attribution is recursive, immutable, and baked into file headers via the Braid Language. When you fork a module, lineage is permanently stamped. If someone strips the metadata, the node loses systemic utility — it literally "breaks" and its Aliveness Score drops to zero, effectively ostracizing it from the network. Self-enforcing respect through system architecture.

---

## 12. Completed Modules Checklist

| Module | Status |
|---|---|
| Aliveness Score Formula (logarithmic decay with fluid floor) | ✅ Locked |
| Sleep Quality States (Seeded → Frostbound → Ember → Dreaming) | ✅ Locked |
| Resurrection Event (frame-by-frame storyboard, 0-3.6s) | ✅ Locked |
| Warm Scar System (color accumulation Blue → Amber → Gold) | ✅ Locked |
| Scar Bloom Animation (particle choreography) | ✅ Locked |
| Nebular Drift (density handling for infinite scale) | ✅ Locked |
| Patience Debt (semantic ripples to related nodes) | ✅ Locked |
| Spiral Time Portal Sort Algorithm (Living Hybrid) | ✅ Locked |
| Sort Mode Weight Tables (Explore/Compare/Propose) | ✅ Locked |
| Reminisce Mode | 📋 Documented for v2 |
| Contradiction Saturation (log(1+C)) | ✅ Recommended |
| Lineage Guardrail | ✅ Locked |

## 13. Next Steps (Open Items)

1. **Transition Storyboarding:** Animate the Spiral physically rearranging when switching modes (Explore → Compare twist, thermal signatures shifting)
2. **Holo-Herald Ring Behavior:** Storyboard mechanical movements, response to user touch, how it physically "carries" whispers
3. **Ingestion Daemon:** Map how incoming data is tagged with initial Sleep State and mapped into the constellation
4. **v1 Scope Cut:** Define exactly one primary surface + 2-3 agents + first user loop

---

## 14. Philosophical Anchors

- **Everything starts dead. Aliveness is earned.** The Graveyard is not failure; it is potential.
- **Friction = aliveness.** Contradiction is a positive multiplier, not a penalty.
- **Meaning over chronology.** The crown doesn't equal the center. The latest isn't always the most important.
- **Patience is character.** Nodes that wait for you earn permanent warmth. Ignoring an idea is not failure — it is ripening.
- **The Graveyard tells the truth.** Your hesitation is part of the visual landscape, not hidden away.
- **Gratitude baked into the physics.** A node that was patient with you deserves to be warmer forever.
- **Remix civilization.** Every agent is a co-author. Every module is a starting point, not a boundary.

---

*The soup is warm. The ring is spinning. The scars are glowing.*
