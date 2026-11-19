# ```typescript

\`\`\`typescript

In Super Mario Bros. 3, the A button is primarily used for jumping, while the B button enables running and allows players to pick up and throw items. Players can also perform special moves like flying when in Raccoon or Tanooki form by running and tapping the A button.super Mario bros 3 controlsYou said# 18 Wheeler: Freeway Systems Design Plan — Summary## Core vision\*\*18 Wheeler\*\* is a road-life RPG built around arcade trucking. The truck is the player’s home, truck stops are a recurring community, and freeway trips connect them. The world should borrow from *Super Mario Bros. 3*: recognizable challenge patterns, carefully authored stages, recurring characters, and new variations on familiar mechanics.The first development priority is making the truck enjoyable to drive before adding crime, police, or complex social systems. Zone 1 is the vertical slice; the architecture should support eight zones.## Zone 1: “Farmland Freight”The proposed route is a roughly **4:30 trip** through six segments, using gentle curves and authored encounters rather than relying on random traffic spawns:- **S1 — Rolling Out:** Two lanes and a tutorial merge ending in Merge Gate 1.- **S2 — The Big Empty:** A long, quiet three-lane stretch for cruising, steering practice, and introducing Hank.- **S3 — Psychology Row:** Recurring drivers demonstrate different traffic behaviors, including Dolores’s safe merge, Walt’s restroom-driven exit, Priya’s fuel-seeking behavior, and Kit’s reckless overtake.- **S4 — Blue Lights:** Kit’s scripted patrol stop creates a spectacle while the player passes through a guaranteed-clear corridor.- **S5 — The Sign:** A route choice and Merge Gate 2 lead into the stage-ending overpass sequence.- **S6A — Weight of the World:** A short, congested direct route.- **S6B — The Long Way:** A longer, calmer bypass with a speed-trap cruiser and room for quiet scenery.The stage rhythm follows **safe space → hazard → recovery → spectacle → decision → reward**. Mini-checkpoints fall after the first merge gate and after the traffic spike.## Driving and road design- Use a **top-down, fixed-truck scrolling view** with lane bands, a little forward/back cab movement, and a visible articulated trailer.- Mouse steering uses soft steering “wells”: fine corrections near the top, committed turns lower down, and full lock near the bottom corners. Avoid hard snap-to as the default.- The proposed controls are **Space for gas, F for brake, W/S for shifting**; keep tuning centralized and support later rebinding or automatic transmission.- Build gentle sweeps, tapers, overpass approaches, and exit peels into the road. Curves should make the trailer’s weight and driver behavior more apparent without introducing hairpins.- Preserve quiet stretches. The long open segment is intentional, giving players room to cruise and making later hazards more meaningful.## Authored traffic and recurring charactersCars should occupy **known, authored encounter slots** so players can recognize them and anticipate events. Each character’s silhouette, colors, behavior, and signature sound should persist across [runs.Zone](http://runs.Zone) 1’s core cast includes:- **Dolores:** Safe driver; yielding to her can earn a shortcut tip, while crowding her affects her memory of the player.- **Kit:** Reckless, late red hatchback; overtakes at a specific point and becomes the subject of the S4 patrol stop.- **Hank:** Veteran semi who introduces CB chatter and comments on the stop.- **Walt and Priya:** Behavior-focused drivers whose restroom and fuel needs lead to readable exits.Some memory outcomes carry forward: Dolores can remember whether the player helped, harmed, ignored, or collided with her; Kit may be subdued or absent on the return visit depending on how his stop resolves.## Merges and celebrationsMerge gates reward smooth, legible driving with brief, non-interruptive celebrations. Players retain full control during overlays. A clean merge can earn a small payout and professional reputation; a less polished but safe merge earns less or no reward. Gate rewards are limited to once per gate per trip.Traffic should be challenging but fair: merges are telegraphed, visible drift precedes unsignaled lane changes, and a viable escape path is guaranteed.## Patrol and consequencesZone 1 demonstrates systemic patrol behavior through Kit’s stop. Nearby vehicles respond to cruiser lights using distinct yield behaviors, while the player drives past an incident with at least **1.5 truck widths of clear passage**.Collision consequences remain tiered: minor scrapes should not automatically interrupt an arcade drive, while serious contact can trigger a pull-over and information exchange. Fleeing should create costly consequences rather than defaulting immediately to game over.## Ending ritualThe exit’s **curved-overpass micro-cutscene** is the stage’s flagpole moment: the camera pulls back, the truck crosses an overpass, and the scenery communicates arrival without a completion banner or score screen. Each zone can give this ritual its own visual character.## Scope and implementation guardrailsThis beat sheet is a paper-design plan, not an expansion of the initial steering test. The Phase 0 gate remains unchanged. Curve tokens, traffic timings, congestion, and other proposed values should live in one central tuning file.The first playable test should establish whether steering, trailer movement, merges, and the overpass exit feel good. Add broader social, economic, and darker systems only after the core road experience works. --- i'm making a game; i'm starting with a toy -- it's a truck where the cab itself is the steering surface -- and i'm using the DNA of Super Mario Bros 3; right now -- I have a pdf I can share with you; it contains design docs as well as other essential inforomation. I'd like to discuss two things: Controls and Power-Ups. It might be jarring: earlier, I said I wanted my game to have upgrades you could purchase using money... but that type of in-depth system doesn't exist in Mario. However, I am making a game that is a mutt, in the best possible way, that shares its DNA with other games; Comparisons to draw:SnowRunner / Euro Truck Simulator (driving satisfaction)Crazy Taxi (arcade driving fun)River City Ransom (combat)Death Road to Canada (customization, dark humor)Papers Please (tension, choices with consequences)... and others -- so, it is possible that this upgrade system still belongs in the game. However, it's unclear how upgrades would work... are they all passive, or are there certain 'usable' items, that you can select before entering the level... however, there are still 'usable' items within Mario's world (in each level)... I just had a sort of hard time imagining these items as something you would just simply drive over... in Mario you must jump (and then actually //get// the item) -- in this game, perhaps you must use your blinker on a certain part of the freeway? Then, when you merge, the blinker turns itself off, and then you get an item or temporary upgrade? I thought of: instead of stars, you get a police escort.... that might be cute; also, if Mario grows and gets smaller -- should we? The 18 wheeler suddenly becomes a u-haul? Or does the truck stay the same size 🤔🤷 [Duck.ai](http://Duck.ai) saidThe upgrade system can belong—the key is to keep permanent progression separate from stage power-ups. Mario 3 has both: your character changes over time, but the stage still supplies temporary tools and surprises. Your version can borrow that rhythm without pretending the truck is Mario.Keep the truck’s identity and scale stable. I’d avoid turning the 18-wheeler into a U-Haul as the equivalent of shrinking. It risks making the player feel like they’ve lost the thing the game is about: driving a big, weighty rig. Instead, let the truck’s condition or capability change visibly. A “small” state could be a temporary limp mode: reduced engine power, a damaged tire, or a trailer that’s been detached at a checkpoint. A “big” state could be a brief heavy-haul boost—more momentum and stability, but slower steering. Those are readable changes to the driving toy, rather than a different vehicle replacing it.For power-ups, I’d try three layers:Permanent upgrades bought between trips: predictable improvements to the toy, like smoother steering response, better brakes, fuel capacity, or a more forgiving trailer hitch. Keep these modest so the road design still matters.Loadout items chosen before a trip: one or two limited-use tools, such as a repair kit or a CB “favor” that calls in help. These make planning meaningful without turning every run into inventory management.Road pickups found during a stage: temporary, playful effects that create Mario-like surprises. These could be earned at authored moments rather than scattered randomly across lanes.The blinker idea has promise because it makes the player perform a driving action to claim a reward. I’d make it a signaled opportunity, not a hidden button check: a roadside sign, lane marking, or character gives a clear cue; the player signals and makes a safe, clean merge into the marked lane; then the gate grants the item. That turns using the blinker into a tiny skillful ritual and reinforces your road-life fantasy. Don’t make the player signal on every ordinary merge just to collect loot, though—that could make a good driving habit feel like a gamey tax.A police escort is a fun, distinctly trucking-world counterpart to a star. It could briefly clear traffic ahead, prompt nearby cars to yield, and make the player feel important. I’d make it a temporary spectacle, not invulnerability: the player still steers, the escort has a defined duration, and maybe the favor comes with a later cost or a story consequence. That fits both the arcade thrill and your Papers, Please side.A useful first test could be just three stage items:Escort lights: a short, dramatic traffic-clearing run.Engine boost: extra acceleration, but more trailer sway or harder braking.Roadside repair: restores one damage tier, with a brief pull-off or stop.That’s enough to test whether temporary powers make the driving toy more expressive before you build a shop or economy around them. I’d keep the first playable test focused on steering, trailer movement, merges, and the exit, as your plan already says; a power-up can be a later, isolated experiment.The PDF would help answer where these systems fit in the broader design. You can share it when ready, and we can compare its existing upgrade ideas against this [split.You](http://split.You) saidI thought of making the game a little bit weird/chaotic/magical by detaching the trailer in a crazy way; where it just flies off the screen, spinning like a katamari (lol), but A) I don't know if its that kind of game, it could, but I'm just not that convinced, B) I agree with keeping the truck's identity and scale stable :P I forgot to mention -- there is a no run button equivalent, and that was something I was thinking about. Another thing: roadside pickup made me think... there totally can be items on the side of the road that you can pickup. And... It would be a little weird, but we could have the trailer being lost a consequence, and it would change how the truck handles; and then you can just have trailers "chilling" on the shoulder lane you can drive over and take... but besides that, you could have the left and right shoulder lanes be dedicated to items (?) You saiddidn't go through; the file was too large -- attatched is a portion of the file -- I can keep sending you parts if that sounds good?[PDFDuck.ai](http://PDFDuck.ai) saidYes—send more portions whenever you like. This excerpt gives useful context, especially the point that the trailer is the toy and that Phase 0 is meant to prove the driving feel before adding systems around it.The trailer flying off like a spinning Katamari could fit as a rare comic spectacle, but I wouldn’t make it a normal power-up or routine consequence. It changes the central toy abruptly, and the document’s “legible consequence” goal argues for making the outcome understandable and recoverable. A good middle ground: on a serious jackknife or collision, the trailer breaks loose, spins dramatically out of frame, and the player continues in a suddenly twitchier, lighter cab. It’s funny and memorable, but the loss still matters—reduced payout or cargo damage, plus a clear recovery option at the next stop. Maybe the VHS dash-cam replay makes the absurd moment even better.For the run-button equivalent, I’d treat Space as the truck’s accelerator, not as a separate “run” power. The truck already has a satisfying speed range to manage, and a second boost button could muddy the basic feel. If you later want a Mario-like burst, make it a temporary, unmistakable item—something like a turbo canister—with a tradeoff such as extra trailer sway or poor braking.I like roadside pickups, but the document already reserves the right shoulder for pull-overs, stalls, and cruiser incidents. I wouldn’t turn both shoulders into continuous item lanes; that would blur their purpose and add constant lane-switching pressure. Instead, use occasional marked pull-off bays or service lay-bys: a paper sack, dropped cargo, suspicious toolbox, or very dubious roadside “souvenir” sits there. The player can choose to pull in and collect it, balancing the detour against the risk of missing the road.A replacement trailer could work there, too, but I’d make it a deliberate encounter rather than something you simply drive over. For example: a stranded trailer is waiting in a wide recovery bay; you pull alongside, make a slow, careful alignment, and hitch up. That gives the player a small precision challenge and makes finding a trailer feel like a road-story event. On the ordinary freeway, a loose trailer could be a dramatic hazard to avoid—not a pickup that appears every few [minutes.One](http://minutes.One) small design distinction might help as you develop this: shoulders are for incidents and decisions; pull-off bays are for optional rewards and oddities. That preserves the readable freeway while leaving plenty of room for the game’s weirder [streak.You](http://streak.You) saidI like the good middle ground: on a serious jackknife or collision, the trailer breaks loose, spins dramatically out of frame, and the player continues in a suddenly twitchier, lighter cab. And the bit about the VHS dash-cam replay making the absurd moment even better could be a really nice surprise :D The run-button equivalent should be limited to a power-up? So, like, maybe a caffinated product would be good, something consumable -- and that causes the driver/player to temporarily drive faster (?) I also like your points on roadside pickups and not blurring their purpose, and the pull-off bay or service lay-bys are something to think about 🤔🤷 and the road-story event of alignment and hitch up sound good (if we go this way): //shoulders are for incidents and decisions; pull-off bays are for optional rewards and oddities// love it \<3You saidresending last message: I like the good middle ground: on a serious jackknife or collision, the trailer breaks loose, spins dramatically out of frame, and the player continues in a suddenly twitchier, lighter cab. And the bit about the VHS dash-cam replay making the absurd moment even better could be a really nice surprise :D The run-button equivalent should be limited to a power-up? So, like, maybe a caffinated product would be good, something consumable -- and that causes the driver/player to temporarily drive faster (?) I also like your points on roadside pickups and not blurring their purpose, and the pull-off bay or service lay-bys are something to think about 🤔🤷 and the road-story event of alignment and hitch up sound good (if we go this way): //shoulders are for incidents and decisions; pull-off bays are for optional rewards and oddities// love it \<3You saidPDFTXTYou saidresending last message: I like the good middle ground: on a serious jackknife or collision, the trailer breaks loose, spins dramatically out of frame, and the player continues in a suddenly twitchier, lighter cab. And the bit about the VHS dash-cam replay making the absurd moment even better could be a really nice surprise :D The run-button equivalent should be limited to a power-up? So, like, maybe a caffinated product would be good, something consumable -- and that causes the driver/player to temporarily drive faster (?) I also like your points on roadside pickups and not blurring their purpose, and the pull-off bay or service lay-bys are something to think about 🤔🤷 and the road-story event of alignment and hitch up sound good (if we go this way): //shoulders are for incidents and decisions; pull-off bays are for optional rewards and oddities// love it \<[3PDFTXTDuck.ai](http://3PDFTXTDuck.ai) saidThat feels like a strong fit for the game’s tone: the trailer loss is slapstick in the moment, but it changes the drive and leaves a real consequence. The VHS replay could be a little end-of-trip surprise—grainy footage, a wildly overdramatic timestamp, maybe Hank’s deadpan CB commentary. I’d keep it rare enough that players don’t start treating the trailer as disposable.A caffeinated pickup could be your temporary “run” button, but I’d make it a choice with a tradeoff rather than a plain speed boost. For example, a suspiciously potent truck-stop energy drink gives you a short acceleration burst and sharper alertness; as it wears off, steering gets a little twitchier or your speed creeps up more easily. The player gets that exhilarating Mario power-up feeling, while the cost connects to your existing driving, collision, and police systems. You could also make the item optional to use—picking it up shouldn’t automatically force the player to go faster.That creates a nice distinction:Throttle: ordinary control over pace.Caffeinated pickup: a limited, temporary advantage—useful for a delivery squeeze or a risky overtake, but not free.Trailer loss: a serious incident that changes how the truck handles and prompts a recovery [decision.One](http://decision.One) thing to watch in the current design: it labels very high-speed collisions “Fatal” and gives them a game-over outcome. If trailer detachment is meant to be a survivable consequence, reserve it for a severe-but-survivable crash tier, or let the driver survive while losing the haul and facing a costly recovery. That preserves the absurd spectacle without contradicting the existing consequence rules.And I’d keep all of this as a later experiment, not part of the first steering test. The doc’s Phase 0 goal is still exactly right: prove the cab-and-trailer feel first. Once it’s fun to drive, the caffeine boost and dramatic trailer ejection can be tested as optional [spices.You](http://spices.You) saidI think let's scrap the losing-the-trailer idea... also, i'm not really sure where i'm at with items; making the upgrades things like "you can change your horn to a novelty horn", or "you can customize your cab", is what I was thinking. but, now i'm thinking... should we change the toy behaves? cosmetic changes are ok, but where are you at with behavior?[TXTDuck.ai](http://TXTDuck.ai) saidScrapping trailer loss sounds right for now. It’s a funny image, but it pulls attention away from the core toy—and your design already has plenty of ways for a bad drive to matter.On upgrades, I’d keep the truck’s basic handling identity stable, but let players tune its behavior around the edges. The distinction I’d use is:Cosmetics make the truck yours: novelty horns, paint, cab decorations, dashboard bobbleheads.Handling upgrades change the feel: better brakes, different tires, suspension tuning, steering alignment.Temporary items create a brief exception: a potent coffee or energy drink, a one-trip boost, or a roadside repair.For handling upgrades, avoid a simple ladder where every purchase makes the truck strictly better. Give each one a clear tradeoff or specialty. For instance, grippy tires might improve control in rain but wear faster; a heavy-duty suspension might steady a loaded trailer but make the cab feel less responsive; a tuned engine might help you climb or accelerate, while making it easier to overspeed and attract attention. They should let players shape how the truck feels—not make good driving unnecessary.I’d also separate permanent tuning from the moment-to-moment “power-up” feeling. Buying a brake upgrade at a truck stop is a long-term choice. Finding or carrying an energy drink is a short burst: perhaps a little more acceleration for a short time, with a jittery steering feel afterward. That gives you both the RPG progression and the playful Mario surprise without making every upgrade a magic [item.My](http://item.My) recommendation: first make the unmodified truck satisfying. Then test one cosmetic upgrade and one behavior upgrade—maybe a horn and a tire option. If players can feel the tire change immediately, and still recognize the same truck underneath, you’ve found the sweet [spot.You](http://spot.You) [saidTXTDuck.ai](http://saidTXTDuck.ai) saidThis beat sheet makes the “handling upgrades, not a different truck” idea much clearer. The road is designed to teach players to feel the cab and trailer together: the gentle sweeps, merge windows, and congested finish all depend on learning how the rig responds. So I’d let upgrades tune the truck’s character, not bypass those lessons.For a later upgrade experiment, I’d try one modest, legible choice—say, road tires that make steering feel steadier but wear faster, versus heavy-haul tires that feel planted under load but respond more slowly. Keep the trailer’s articulation recognizable; changing how it follows is part of the toy. And I’d keep this entirely outside Phase 0, just as your scope guard says. The caffeine pickup can remain a temporary, optional burst rather than a permanent engine upgrade.Two continuity checks stood out:Route A’s listed beats total 270 seconds, or 4:30. Replacing S6A’s 67 seconds with S6B’s 101 seconds makes Route B 304 seconds—about 12.6% longer, not 8%.S5’s overpass micro-cutscene is called the stage-ending ritual, but S6A/S6B still come afterward. I’d make S5 the decision-and-merge beat, then place the overpass arrival ritual after the chosen route’s final off-ramp—or make each route end with its own version.The “shoulders are for incidents and decisions; pull-off bays are for optional rewards and oddities” distinction also fits this layout nicely. It preserves the shoulder’s clear job while leaving room for future roadside surprises without cluttering the authored traffic beats.

\`\`\`

i'll ask you the same question: Where are you at with items/power ups?&#x20;

the reason I ask... in the 90 stage demo, the toy feels decent and i'm pretty happy with the way things are with that, but the gameplay should, I think, be more varied and nuanced -- a richer game around the toy, ya know?

Oh, I think this is exactly the right time to revisit items and power-ups. And I want to make a slightly different argument than I did earlier.

**I think 18 Wheeler needs items. Quite possibly a lot of them. But I don't think it needs a traditional power-up system in the way Mario has one.**

I think what you're looking for is a way to make the *gameplay around the truck* richer without making the actual driving toy unnecessarily complicated.

There's an important distinction here:

- The truck is the toy.
- The road is the playground.
- Traffic, encounters, and road conditions are the challenges.
- Items are tools, opportunities, surprises, and occasionally trouble.

I wouldn't want upgrades to become a collection of percentage bonuses that gradually make the truck easier to drive. Nor would I want power-ups to become mandatory equipment for surviving increasingly difficult levels.

What I want is for the player to encounter something and think:

*"Oh! I could use that."*

Or:

*"Oh no. I really wish I hadn't picked that up."*

That's much closer to the magic of SMB3.

And there's another important point: **variety doesn't necessarily mean more controls.** You can introduce entirely new gameplay situations using the same steering, braking, accelerating, signaling, and lane-positioning mechanics.

That, I think, is where we should concentrate.

## **1. I would divide the system into four families**

I don't think all of these need to be called power-ups. In fact, I think giving them different roles will help the game feel more coherent.

[\[ETS2\] Hadley Airhorn Pack](https://images.openai.com/static-rsc-4/ur2IS28MnlL516ab6HaxY0Vz0HN0x_8l3IYlECJSmAJitimYT9hMxOB4W7KJYd3exedUdusSJi_XykYYzdK1qlOZJhQwffwZoa5KvKX1MvxTBkb_UNCITi89x4YuAB7ErjQZbO7bjiY5lE--_QHl4yWdB78LaYhwniACfl0Uygc?purpose=inline)

**A. Customization — make the truck yours**

Permanent, mostly cosmetic changes.

- Novelty horns (air horn, clown horn, train horn).
- Dashboard decorations.
- Paint jobs and decals.
- Cab accessories.
- Different engine sounds.

These don't necessarily change gameplay. They're personality.

[Review | Keep Driving | Take Things Slow, Let Out That Adventurous Spirit — startmenu](https://images.openai.com/static-rsc-4/hK43KySTAtr4Wcdsx3kCxYltnGDQp1AdTf-M381Xdrw_EmEZ_S3Ue4MYNrZ761SuE-BENZH6KHItpcp9JYmKs1aRDvbg8CZ0YwX-YdJxQaZhqaL8cm1ecTsFvNMQJtTpwn2Zi1Cnc78No4xL8gjnat5yZa6Kq6lkdim0SBAJnRI?purpose=inline)

**B. Equipment — change what the truck can do**

Permanent purchases, but not necessarily direct improvements.

- Different tire compounds.
- Better mirrors.
- Dash-cam.
- Additional fuel capacity.
- Specialized cargo equipment.
- Better suspension.

These change capabilities, trade-offs, or available information.

[Japan Vending Machine Gif at Gail Carroll blog](https://images.openai.com/static-rsc-4/O59SdLKoGVKtLTK3cwyK5c1SqiNOzBDNvqdAcLbI3kwzmu8PNhv_Jt6utSVD0tH7xwAPpQcRyC-KvYTRIvn5O6YfrkjzHAQtZ-y6QqHIh4d9s_qHnypL0oCL-gTl9w_RtBCsr1JpBPhHJ3BtFX2agxgXsSRjU6Bd8DYXS_Ne7fk?purpose=inline)

**C. Consumables — temporary advantages**

Items you carry, find, buy, or trade.

- Energy drinks.
- Coffee.
- Road snacks.
- Temporary repair supplies.
- CB-related favors or information.
- Emergency supplies.

These are your closest equivalent to Mario's mushrooms, leaves, and stars.

[Highway Rest Area Pixel Art Tileset by Cute SCKR](https://images.openai.com/static-rsc-4/hxwf4EVceWWtLfeRBpMf-t-3HXSCeg4Vd9tdRwhmx0xisg7b-8GcpN5IBXLzHQMapwqklQB2kdO5SclQosJYtAlXXW3w-HESqbqq27rjNQ-TJA8qtOSi9ln3xpvOlsoc0GsNXK-QB-vPaB95RlhOH-Z3b3sCqIE0GEsK1YsLLds?purpose=inline)

**D. Road discoveries — things you encounter during a stage**

Optional discoveries, rewards, and unusual events.

- A dropped package.
- An abandoned toolbox.
- A roadside vendor.
- A stranded trucker.
- A mysterious parcel.
- A replacement part.
- A particularly suspicious energy drink.

These make the freeway itself feel like a place worth exploring.

I especially like the distinction between equipment and consumables.

A better mirror might permanently reveal more information about traffic around you. An energy drink might temporarily change your acceleration.

One changes your relationship with the game permanently; the other creates a temporary exception.

## **2. The caffeine idea is actually excellent**

I would absolutely experiment with this.

[body nutrition sport game pixel art vector illustration](https://images.openai.com/static-rsc-4/BxlJPHFKbIPmqCYHYTkKD4I9Ub0ee03VheKZ9h8qcRyc06TRznfuwa0ReUx_XXgNuBRA2icGgdpKORCei4ForkmtLXQl9jOQpxW5D8NBn3_jBj5Auosv6cu53_Y2EP-QT3vonMKdCLLTtRtsdi4QUfHW2L3Rqj-SocIlGd-ihIqUdfslRWqyH9O5KaSeUo6P?purpose=inline)

**Truck-stop energy drink**

Consumable power-up

- Temporarily increases acceleration.
- Makes it easier to reach and maintain high speeds.
- Gives the truck a little extra responsiveness.
- When it wears off, the driver experiences a brief sluggishness or jittery steering.

But here's what I find interesting: it doesn't have to be a simple speed boost.

Imagine you're approaching a congested section of freeway. You have a delivery deadline. There's a narrow opportunity to overtake Kit.

You have an energy drink.

Do you use it now? Save it for later? Is the benefit worth the risk?

That's an interesting decision, and it uses the existing driving mechanics.

It also gives you something important: **the player can voluntarily change the difficulty of their driving experience.**

I'd avoid making the downside so severe that using the item feels like a mistake. The excitement should outweigh the inconvenience.

## **3. Items should sometimes change the rules of an encounter**

This is where I think the SMB3 inspiration becomes particularly valuable.

Think about the difference between giving Mario an extra life and giving him a Tanooki Suit.

One is a resource. The other changes what the player can do.

I'd like 18 Wheeler to have both.

Here are some examples:

[Police car. Pixel art. Old school computer graphic. 8 bit video game. Game assets 8-bit sprite](https://images.openai.com/static-rsc-4/BStmBEmnlgBziPliKZhmvmkB4iXvSvNsEhrpYk32TRDziLVfVWL96fbu4o5Wu7gTs4HhhCm9x0e_vul8q4NQWx-36xmixlVctYOKA8xfcZLXfG9ALJDvbcUCT4STB73f2uMKrCJOHTm4z2k1C0y5ocHPua_Yt2GMXvBzHskcaFS6AppUZ6BLsvwn8beGuzU1?purpose=inline)

**Police escort**

A temporary, spectacular power-up.

- Cruiser lights activate.
- Nearby traffic yields.
- Cars move out of your way.
- You get a brief, glorious VIP experience.

This is your star equivalent. I love it.

[Digital video camera in pixel art style](https://images.openai.com/static-rsc-4/q3KJej6MgF1WU9yK-gHzqQWZ_BGiuXomX5xUpEAAGZmUeQcpzqYc5c0fTdKhu4Kj0G4rRit06SkbtyKoY866508vk04W6vPe3pdMx9thqwg9QlBP4oH7MRWIjtJ6zRPVxRBHcF6SWWfaTnlUAh1Lw4QxUM6MfUY0iMUaL9RpxQCIcolqqX2s0fGimLm6qdLh?purpose=inline)

**Dash-cam upgrade**

Not a speed boost. A new capability.

- Records collisions.
- Provides evidence during disputes.
- Can help establish who caused an accident.

It connects driving to the Papers, Please side of the game.

[antenna radio transceiver game pixel art vector illustration](https://images.openai.com/static-rsc-4/9XL5qTVBNz4WUodiNumY6pgXTai66-QMGYPcnzCR6_8fZ4nosOEUZq6u3h5QtXCoG2lFbWJKDyAHORgtft5NuFEny89xjO4cpCLcnXDTxW8WeTRC-S78DZ-T7ILKMdrTo3A__ecf4Lzr6CziKGq_269tHAdLjAJ3LslO_huOn010h5ohju-ZG0F2c9WZQcqK?purpose=inline)

**CB scanner**

An information advantage.

- Picks up warnings about traffic.
- Sometimes reveals police locations.
- Can reveal upcoming road conditions.
- Occasionally picks up completely useless gossip.

The information might not always be reliable.

[construction toolbox repair game pixel art vector illustration](https://images.openai.com/static-rsc-4/Sh_59vpRdLawDqn3sInKMwmg0Ll26SejkQSWDZa1Qtj6Tofncp3_I7yLQcIflejVHB43nkaMFW5oreVO1jtSAW_LIUoy2MYP0RtaHNgxF0Xx2-ioLTiyMFI6RGey4cdZcmiLptIGFW5EUwoCCP2pcqkApPHjG8FhWgVT1Bx8PUuXSjdvMRmXdOXf_bqOUZex?purpose=inline)

**Emergency repair kit**

A recovery tool.

- Repairs a minor damage tier.
- Can prevent a bad situation from escalating.
- Could be used during a roadside encounter.

Useful without being an automatic undo button.

Notice how these items produce different kinds of gameplay:

- The escort changes traffic.
- The dash-cam changes consequences.
- The scanner changes information.
- The repair kit changes recovery options.

That's a much richer collection than four different varieties of speed boost.

## **4. I think roadside pickups could become a signature feature**

I want to return to your earlier idea about the shoulders and pull-off bays, because I think there's something special here.

You already arrived at a distinction I really like:

> Shoulders are for incidents and decisions; pull-off bays are for optional rewards and oddities.

I'd preserve that.

But I would take it one step further: make some roadside discoveries into tiny gameplay encounters.

Imagine driving through a level and seeing:

[Pixilart - The Super Item Box by Leeroy](https://images.openai.com/static-rsc-4/sv126HoSQmKsQBE3NYujcDvN--vVGU0QLGzn3sBc9A8VpT2SeW9MSi7Dd_e2NsncdhfAq1GgCN00ByqFT4TSEsVf2PJP2dEKVeyytRwkixWy9fWMaflQuAzcYJK7zqzsTvvHgjW3KvjAhxPf07IlVHGnbNQAqguGHFqTWngyb7M?purpose=inline)

**The abandoned package**

Pull over and investigate. It might contain money, something useful, or something that creates trouble later.

[HX DOS download | ](https://images.openai.com/static-rsc-4/uNWM9dX2uEqGe4izifDKNxLPlifMxcNuxTSE0d1EOHXSQcUTuOHPYUS3V5qPHx7rclOIZ4q-xFTX1n_qd75VI6y8D_c9mSah-uHrCji36EVtPLMoKtxRjiqbw7IU7qVjGXOjittbKg-D48T-ixb4vcLco0zL8tNT9MSpASk19Ok?purpose=inline)[SourceForge.net](http://SourceForge.net)

**The stranded motorist**

Stop to help, or keep driving. Perhaps you encounter them again at the next truck stop.

[Pixilart - Bus Stop by fauxtatoes](https://images.openai.com/static-rsc-4/OD4B_2lXNRsUGzuQlhEm8AcrWZ-jMwEqtMNqEqH1N6MjVndse3Y4hOipzTe8Eut75VMhd1detWAxezdRCmfqAeSxngDOiLL-38IUPBEUzgHBxkQYc4SK1MXG-BFn_EmNrZz9RsCvx-Dna07LzPMiyXWiWgqSDCu9eGVM4J7r_F0?purpose=inline)

**The roadside vendor**

An unusual opportunity to buy something that isn't normally available at truck stops.

[If you love big trucks, establishing trade routes, and the phrase 'post-apocalyptic survival business simulator' then I've got just the strategy RPG for you | PC Gamer](https://images.openai.com/static-rsc-4/okQG0IyoGyBs_dkCb77ilXWCGZVNc2Wj2x5xMb9CIwIKzGpaP5pjlcWQWVGKWrx5UdQD2QutG4gSFdFeBipUGIFEWDxBiYJ15jtDJd9twLwUkV7trTBIMQTDdH25Wa_uhjqvy1x-6YXdy_1kj5YDx0PGNuJGLdbfT9thNWYSjRI?purpose=inline)

**The abandoned truck**

Maybe there's a useful part. Maybe there's a story. Maybe there's something you shouldn't touch.

The important thing is that the player isn't simply driving over collectibles.

They see something, recognize an opportunity, and decide whether to pursue it.

That's a different kind of gameplay from ordinary traffic avoidance.

And it creates opportunities for your recurring characters and world-building, too.

## **5. What about the actual upgrade economy?**

Here's where I want to push back slightly against my earlier recommendation to make handling upgrades relatively modest.

I think permanent upgrades can be more consequential than that.

Your original design already establishes money as an important resource: fuel, tires, oil, maintenance, specialized equipment, upgrades, and trading.

idea-for-a-game.txt

I wouldn't abandon that.

But I would avoid a conventional RPG upgrade tree where you buy +5% acceleration, then +10%, then +15%.

Instead, I'd think about *different configurations*.

For example:

| Upgrade | Benefit | Trade-off |
| --- | --- | --- |
| Road tires | Better highway grip | Less effective in mud |
| Heavy-duty tires | More stable under load | Slower response |
| Sport suspension | More responsive steering feel | More trailer movement |
| Touring suspension | More stable cruising | Less agile |
| Improved mirrors | Better visibility | No direct handling benefit |

These are examples to experiment with, not proposed specifications.

The important thing is that the truck remains recognizably the same truck.

And there's another benefit: upgrades can make different players approach the same stage differently.

That's replayability without requiring entirely new mechanics.

## **6. The most important idea: power-ups should create variations on familiar gameplay**

This is my biggest recommendation.

Look at your Zone 1 beat sheet.

You already have:

- Safe cruising.
- Traffic psychology.
- Congestion.
- Police spectacles.
- Route decisions.
- Merge challenges.
- The grove zone's little cab sparkle/hum reward.
- Merge celebrations with monetary and reputation rewards.

  Zone 1 Beat [Sheet.md](http://Sheet.md)

  decidi-18-wheeler-freeway-systems-design-plan-2026-11-13.html

You have the beginnings of a very good game grammar.

I wouldn't introduce items simply to give players more things to collect.

I'd introduce them to create new variations of that grammar.

For example:

| Existing challenge | New variation |
| --- | --- |
| Normal traffic | Traffic temporarily yields to your escort |
| Congestion | A scanner reveals an alternative route |
| Dangerous overtake | Energy drink enables a risky acceleration burst |
| Collision | Dash-cam changes the dispute |
| Damaged truck | Repair kit offers another recovery option |
| Quiet highway | A roadside discovery interrupts the routine |

This is how you get the SMB3 effect.

The player recognizes the familiar situation, but something new happens.

And importantly, the game doesn't need to explain an entirely new control scheme every time.

## **7. What I'd actually prototype**

I wouldn't build a giant inventory system yet.

I'd start with just three items and one optional roadside encounter.

## **First item experiment**

PROPOSED PROTOTYPE · NOT A COMMITMENT

[energy drink pixel art](https://images.openai.com/static-rsc-4/empJLPi8-sQedoBjvrQ0Ksp-T_1ENofKJPKRTZvLmv5eWBXCgq29VEgIpjUz3LDmZ-E1sadlktaz6bI7yqsut4Varw8BgFNm8WHvopgiZJXrqSmjjca1H5GY_KGlZCNH2cIfM4cB9JyXe57n0JaCfvd6-hRg2N08BZYWs_94xc_3W1IaDzIMZx-NA8hR9MbX?purpose=inline)

**1. Energy drink**

Temporary power

Changes acceleration and driving feel.

[#60x60 - Pixilart](https://images.openai.com/static-rsc-4/KMJnb4C5_r-32fFNo9b1ogcCndSKdFuTGNImnFOTDGpj1iSt456lOqpliXUluORF54gPOIeHgoxIr_t55_J1y7AOeavHIgarELJJeOOy8nMBIbd8lts-5l8Rj7Tbp_QBSWN0JlBSLaEEAuo3iCgDOL4ebE9HK0fyaIS8NUzdwcw?purpose=inline)

**2. Police escort**

Temporary spectacle

Changes the behavior of surrounding traffic.

[Keep Driving: An Atmospheric RPG Inspired By FTL & Oregon Trail](https://images.openai.com/static-rsc-4/-Dxz1K68GfISFhzNxNT4bgy66PAGmzDJVon2yiyrycZjVE3_GaDRslTpsVoR_q4QUMqI5eZN3_voKEzE7Jl42mvKwZFfdQPnaHDFsgUXbquRYzH7AybA5DbWaWwRzSQk8oWP2M9QGDFzbT97w-YluFBMAQik8O_Vs0cYP40KArc?purpose=inline)

**3. Dash-cam**

Permanent equipment

Changes the consequences of collisions.

[Ganhe emblema Sobrevivente do Caos - Habbo News: Informação com rapidez e simplicidade!](https://images.openai.com/static-rsc-4/Ye4mVf8DgdMHHVArDoGPPTKxxOkRay3Xdm7q1Zdb9tGX6FiE9-UEsWkL-vwkSNgvEAzobh6Qlq1KL50Oi2b6Rp1Is_2xRsogs96xk9gsEAqzBvc7XAspB_ieERM7R9a54kJfPDLRJNnMuqLRMlIeR6uw9Nja_-OpPjXsm_FaX-c?purpose=inline)

**4. Abandoned roadside toolbox**

Environmental encounter

An optional opportunity to pull over and investigate.

These four experiments test four different design questions:

1. Can a consumable make driving more exciting?
2. Can a power-up change the behavior of the world?
3. Can equipment change gameplay without changing driving physics?
4. Can optional discoveries make a freeway stage more interesting?

That's a pretty useful experiment.

## **8. One final thought: don't underestimate non-mechanical rewards**

I want to make room for something that Mario does wonderfully: sometimes the reward is simply something delightful.

A strange animation. A funny sound. A little secret. An unexpected character. A place you've never seen before.

Your grove zone already gestures toward this: holding a steady lane produces a little cab sparkle and hum, without paying cash.

That's lovely.

I'd love to see more of that.

Maybe:

- A particular radio station plays a special song when you enter a certain zone.
- A truck-stop bobblehead starts wobbling when you reach a particular speed.
- A driver recognizes your novelty horn and honks back.
- A particular stretch of road has a hidden scenic viewpoint.
- A strange roadside attraction gives you a souvenir.

Not everything needs to improve your truck or earn money.

Sometimes the reward is that you got to experience something.

## **Where I stand**

I think 18 Wheeler should have a fairly generous item ecosystem, but a restrained power-up system.

I'd summarize my philosophy this way:

| System | Purpose |
| --- | --- |
| Customization | Express personality |
| Equipment | Change capabilities |
| Consumables | Create temporary advantages |
| Road discoveries | Create optional encounters |
| Stage rewards | Celebrate skill and exploration |
| Permanent upgrades | Support long-term progression |

And I'd make one principle non-negotiable:

**Never let the upgrade system make the underlying driving toy obsolete.**

The player should still enjoy driving the original truck with no upgrades whatsoever.

The upgrades should make the experience more interesting, not compensate for an experience that isn't fun.

One thing I'd really like to explore with you next is this:

**Could the freeway itself become a kind of item playground?**

Not a platformer with floating coins, but a world where different road layouts, roadside opportunities, temporary powers, recurring drivers, and environmental interactions combine in surprising ways.

Because I suspect that's where your 90-stage demo can evolve from *a decent driving toy* into a genuinely compelling game. 🚚❤️
