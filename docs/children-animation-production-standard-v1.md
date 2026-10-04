# Children's Animation, Teaching, and Avatar State Production Standard

**Version:** 1.0 · October 3, 2026 (America/Chicago)  
**Authority:** The Architect / Estiban Creations  
**Status:** Implementation specification and reference assessment; documentation does not certify deployed functionality, completed episodes or learning outcomes.  
**Scope:** Original children's series and shared VisionWeaver animation/camera/world production.  
**Companion:** [Avatar State three-board specification v1.1](avatar-state-board-specification-v1.1.md).

## 1. What these references contribute

The current request adds CoComelon, SUPER WHY!, The Magic School Bus, PAW Patrol, a supplied family adventure movie and an AI cartoon workflow tutorial. They serve different purposes: performance clarity, viewer participation, scientific investigation, ensemble action, sustained story stakes and asset production. They are reference inputs for original productions, not canonical character designs or promises about provider capabilities.

**Evidence labels:** `SOURCE` = inspected current document or primary page; `AUTO` = automated video descriptor, needing review; `DESIGN` = original implementable production choice here; `UNKNOWN` = unavailable/unverified. Analysis completion does not mean every frame or the full runtime was assessed. No frame rate, camera lens, reaction latency, material measurement or learning-effectiveness score was measured in this review.

| Reference | Assessed material | Useful contribution and evidence boundary |
|---|---|---|
| [CoComelon — Bath Song](https://www.youtube.com/watch?v=WRVsOCh907o) | Official channel page/title; automated descriptors cover roughly 0:00–2:51. | `AUTO`: repeated action-and-song units, readable object manipulation, medium views and detail inserts. Use gesture/word/action coordination and repeated demonstrations. Exact contact/beat frames remain unverified. |
| [SUPER WHY! — The Three Little Pigs](https://www.youtube.com/watch?v=PfgJJ2Sst6A) | Verified PBS KIDS upload. Automated output covers only approximately the first 1:04 despite its full-episode title. PBS's episode and game transcripts supplement story/literacy assessment. | `SOURCE`: word choices change the authored story, spelling errors are corrected, viewer participation is explicit. `AUTO`: introduction/transformation/ensemble imagery only. Do not claim a complete visual episode review. |
| [The Magic School Bus — Going Cellular](https://www.youtube.com/watch?v=ApsXNL-PMTM) | Official-channel upload identified; initial and retry results cover only introduction/setup. Supplemental Scholastic output also covers its introduction. | Science exploration is verified by the primary series description; scene-specific results and scope are recorded in section 12. The fictional journey is a presentation mechanism; scientific claims require independent lesson evidence. |
| [PAW Patrol — official site-selected short](https://www.youtube.com/watch?v=6tLcbMsltmQ) | Linked from the official watch page. Automated output covers approximately 0:00–0:57 and identifies a dinosaur movie promotional/interview montage. | Useful for silhouette, scale contrasts, eye lines, dramatic inserts and affectionate reactions. It is not evidence of a full rescue episode or classroom lesson structure. |
| [PAW Patrol — Muddy Rescue Missions & Adventures](https://www.youtube.com/watch?v=j2Sa-DKIJaQ) | Nick Jr. YouTube rescue compilation; automated descriptors returned. | Automated descriptors cover roughly 0:00–9:45 with changing conditions, communication, task briefing and tool contact; precise details remain provisional. |
| [Supplied family adventure movie](https://youtu.be/2cDivDEN6FY) | YouTube synopsis describes children defending their town; automated output reports live-action material and the title Little Heroes, with approximate segments through 23:15. | Provisional reference for community geography, ensemble tasks and room/outdoor staging. It appears live-action in the descriptors; full film identity/runtime and detailed plot are unverified. |
| [Supplied AI cartoon tutorial](https://youtu.be/BnquzIGVuKc) | Automated output covers roughly 0:00–12:47; title identifies an AI cartoon workflow tutorial. | `AUTO`: script/scene breakdown, character references, scene images, image-to-video, narration and edit assembly. Its consistency/performance/monetization claims are presenter claims, not independent validation. Model names and UI settings are historical demonstration details, not recommended production defaults. |

Supplemental primary pages: [PBS episode transcript](https://www.pbs.org/video/super-why-the-three-little-pigs/), [PBS spelling clip](https://www.pbs.org/video/super-why-the-three-little-pigs-princess-presto-game/), [PBS word-choice clip](https://www.pbs.org/video/super-why-the-three-little-pigs-super-why-game/), [PAW Patrol official watch page](https://www.pawpatrol.com/watch), [official train-rescue synopsis](https://dev.pawpatrol.com/episode/pups-save-the-train). The PBS full-episode page reports expired playback availability; its transcript remains readable. No unavailable playback is represented as watched.

## 2. Assessment and creative direction

**DESIGN:** Combine a consistent visual language with rigorous lesson causality. A viewer must understand what the character noticed, what the character tried, what changed, and why the explanation follows from the evidence. Appeal, bright rendering and fast cutting alone are not acceptance criteria.

CoComelon suggests an action-first presentation layer: familiar objects, readable faces, specific gestures and repeated action units. For our second–fourth-grade work, retain that clarity while increasing explanatory depth. A chorus can recall a process, but the experiment, comparison or reading demonstration must establish the lesson.

SUPER WHY!'s primary transcripts connect a visible choice to a story change and show correction. Our adaptation is a predictable learner-participation cycle: pose a question, show relevant evidence/options, allow an authored response interval, demonstrate the decision, explain it and apply it in a new context. Broadcast dialogue can invite participation but cannot certify that a particular child answered. The companion app can record an actual response with a separate interaction ID.

The Magic School Bus is useful as a science-adventure reference. Our lesson staging must maintain two simultaneous layers: an authored journey or scale change, and an accurately reviewed explanation of the real system. Use questions, plausible misconceptions, comparisons and revised explanations; do not treat a magical event as evidence of physical causation.

PAW Patrol's official rescue descriptions support cooperative, role-based problem solving. Our motion design should make the obstacle, routes, tools, task assignments and changing conditions legible. The promotional sample contributes presentation detail, while the rescue sample provides the stronger activity reference. A team member's action should alter another member's available choices.

The supplied tutorial demonstrates a useful asset pipeline. Extend it with pinned boards, start/end states, contact and reaction timelines, exact text, phoneme alignment, lesson review, provider receipts and continuation capsules. A new project need not have a villain: an environmental puzzle, misconception, failed design, social misunderstanding or competing need can carry the story. Narration timing should enter the animatic before final shot generation; dialogue and singing need performance alignment beyond placing voiceover over finished clips.

The family-movie link is a broader story reference. Do not transfer inferred live-action or feature-film traits into our animation without checking them. The useful design target is a persistent community whose activities and consequences remain visible beyond the main characters.

## 3. Audience and series profiles

**Current direction retained:** the primary children’s development goal is second–fourth grade, with substantial science, bodily functions, geometry, language, systems and social topics. Preschool reference programs do not silently reset this goal. Existing Five Stations records also describe gentler/early-elementary profiles and examples for ages 5–8; that source mismatch requires a per-series/episode grade decision, not a universal age inferred from a reference.

Each `SeriesStyleProfile` contains:

`profile_id · revision · series_id · audience/grade band · learning depth · visual medium · silhouette/palette/material language · camera grammar · pacing/hold policy · expression/motion limits · musical strategy · fantasy rules · world/scale rules · sound policy · approved examples · prohibited drift · review/approval`

Approval fixes the original look and feel. Avoid using another studio's name as a substitute for a reproducible style definition. Document concrete shape, shading, palette, lighting, motion and composition traits. A style profile can support 2D, 3D or mixed presentation while preserving identity rules. Non-human characters require species/body-plan fields and appropriate ears, tails, wings, paws or other appendages.

| Existing series (current repository naming) | Production emphasis proposed here | Required on-screen learning action |
|---|---|---|
| Momo & the Moonbeans | Quiet inquiry, language/sound and space exploration; retain Momo/Luna/Twinkle/Phono/Orbit panel order. | Observe a cue; form a prediction; listen/compare or demonstrate a reviewed concept. |
| Rocket & Rivet | Cooperative engineering with visible tool/contact/mechanism states. | Design, test, measure, diagnose and revise; preserve force/distance/energy distinctions from current editorial corrections. |
| Yum Yum Yetis | Food, quantities and sensory investigation; persistent ingredients/utensils/results. | Compare quantities or a reviewed process using a controlled demonstration. |
| Doodle & the Dreamers | Representation through drawing, music, patterns and geometry. | Draw/label/compare/record evidence; exact shapes, counts and terminology use controlled overlays. |
| Power Pals: Code Crew | Team reasoning, reading, sequences and debugging. | Read or model the rule, execute a sequence, detect an error and explain the correction. |

This mapping proposes production behavior; it does not replace approved characters, silently rename a series, certify curriculum alignment, or claim the existing catalog has full scripts or animation.

## 4. Animated Avatar State and the three boards

Preserve the exact board names and existing contracts:

- **A Cast Board:** scene roster, active appearance/voice/performance versions, zone and transform, attention/task, cue/event IDs, character relationships, props/contacts, learning role and incoming/outgoing continuity states.
- **Character Detail Specifications Board:** stable identity, silhouette/body plan, palette, face/hair/fur/appendages, anatomy and proportions, wardrobe components, physical changes and injuries, voice/accent/pronunciation, expression/gesture ranges, locomotion and transformation rules, approved references and prohibited drift.
- **360 View Board:** individual state and indexed angle/height coverage with detail views. Preserve 32-view masters, 16-view wardrobe-only default and archived 24-view studies; full height-and-angle coverage is the configured eight-by-eight/64-slot expansion, with exact height/pitch/lens calibration still unresolved. Never declare an unconfigured grid complete.

Animation adds linked `PerformanceReferenceSet` records: neutral pose, expression key poses, gaze/head turns, reach/grasp/release, gait, anticipation/contact/follow-through/recovery, speaking/singing mouth shapes, costume/equipment transitions and species-specific motion. These references supplement coverage boards; they do not become a fourth board or change the view count.

Store `rig_or_generation_method · pose_id · pivot/joint constraints · deformation limits · foot/paw contacts · prop attachment points · allowed exaggeration · mouth-shape/phoneme map · reference hash`. If no rig, camera solve or phoneme controls exist in the selected provider, mark the control unsupported and route to appropriate generation, animation or compositing work. Do not pretend text prompts give deterministic rig control.

Add scene-level knowledge/intent fields: prior belief, current hypothesis, evidence noticed, revised understanding, uncertainty and learning role. These are authored story states, not inferred scores of a real child's understanding. Preserve what each character has learned across subsequent dialogue and actions.

Separate rendering/style changes from identity changes. A turn from a camera angle is not a new appearance. Wetness, mud, soot, torn clothing, hair/fur disturbance, injuries and costume changes create scoped scene-state revisions and revised coverage under the existing rules. Preserve body size, complexion, ethnicity, accent and approved physical differences through stylization. Locale does not infer personality or overwrite voice.

## 5. Event timing and animated performance

The shared causal clock from Avatar State v1.1 remains authoritative. An animated performance can make a response easier to read, but every exception has a declared scope and rule.

`Stimulus → available cue → perception/attention → response → contact/consequence → recovery/continuity`

Record multiple cues/paths concurrently; the arrow notation does not require every effect to wait for every other effect. Contact-driven motion, sound arrival and deliberate decisions have distinct times.

For each `ActionBeat`, store event ID, causal parents, scene clock/timebase, anticipation interval, cue arrival, detection, gaze change, action onset, contact, follow-through, secondary motion, settle/recovery and persistent changes. Include target/obstacle IDs, body/prop contact points, source direction, screen direction, reference frames, authored timing tolerance and reviewer evidence.

A squash/stretch pose, smear, oversized expression, held reaction or exaggerated bounce is an authored motion rule. Its limits preserve recognizable silhouette, appendages, attachment points and task-relevant geometry. Do not distort an instructional measuring object, letter, diagram or quantity to achieve a comic effect. A fantasy transformation must declare which parts change and what persists.

Background characters have tasks and attention. They may hear a clatter, notice a splash, yield to a moving object, assist, miss a cue or continue their work for an explicit reason. They are not all given identical reactions. Perception and camera salience remain separate: the camera can reveal a fact before the protagonist notices it.

For songs, store beat/phrase markers and choreographic cues. For dialogue, store exact line, speaker/voice revision, phoneme/viseme sequence where supported, gaze, gesture and emphasis intervals. Sound effects attach to contact or a documented cinematic accent. Do not rely on a music beat to prove physical contact or lesson correctness.

## 6. Teaching beats, text and camera

Each `LearningBeat` contains:

`beat_id · objective_id · claim_id/source · prerequisite · story question · misconception · evidence/demo · variable/control/comparison · prompt · response interval · expected response · explanation · transfer example · assessment rubric · text/phoneme IDs · animation event IDs · factual/fantasy label · reviewer`

A response interval is configurable and tested in the animatic. No fixed number of seconds is prescribed by these references. A question must be understandable before its answer is revealed. Avoid cutting away from the evidence a learner needs to answer.

Keep exact words, phonemes, numbers, units, formulas, labels and diagrams in controlled layers under the current letter-lock protocol. Generated backgrounds supply blank surfaces where useful. A voice revision, translated script or text change invalidates dependent captions, read-along highlights, mouth alignment, gesture timing and assessment keys for that scope.

**DESIGN camera grammar:** establish the setting and spatial relationships; frame the actor and relevant object; insert an explanatory detail; show the result and reaction; re-establish geography when direction or scale changes. A medium view should retain hands/paws and the manipulated object when the contact matters. A close view isolates the evidence, not decorative activity that hides it. Use camera motion to reveal, follow or compare an established relationship.

Each `CameraLearningCue` has target claim/action, reveal order, world transform, framing/aim point, movement/hold interval, overlay safe region, occlusion check, next-shot continuity and reason. Letter/diagram views need legibility checks on actual delivery sizes; do not assign universal lens or duration values from stylized footage.

Scale changes preserve anchor relationships and declare magnification/unit systems. Record actual-scale, enlarged-for-explanation and symbolic representations distinctly. A journey into a fictional internal world cannot silently turn arbitrary set geometry into anatomically measured truth. Scientific claim review is independent of visual/reference review.

## 7. Surrounding world, rooms, outdoors and vehicles

Use Location Necessities and World Anchors for geography, period, recognizable features, community context, ecology, activities, architecture and sound. Fictional locations have their own approved landmark/route packs. Real locations need date/placement evidence. Preserve intentional diversity and varied families; ethnicity does not determine accent or behavior.

Room records include layout, fixtures, doors/openings, materials/evidence, ambient sources, lights, ventilation and available routes. Open atmospheric settings include terrain, wind, weather, vegetation, insects/birds and reflecting structures. A cave/tunnel/hangar can be outside a vehicle while still enclosed. Vacuum is a separate medium with explicitly labeled cinematic exterior sound. Local steam, dust, bubbles, mud, splashes and wind have sources and scope.

Vehicles and large props use stable exterior/interior asset IDs, silhouette/components, relative transforms, operational states, routes and damage. Register hatch/door/window and cockpit/station placement; connect controls to machinery changes, motion, effects and occupant responses. Transformation states carry identity/provenance and cannot rearrange access routes arbitrarily.

For an animation event such as a wet landing, contact, splash, hair/clothing response, prop movement, gaze, nearby subject response, camera framing and wetness state belong to a common cause. A later shot retains the resulting wetness/mud. Timing is approved against the animatic and generated output; it is not inferred from an approximate automated scene boundary.

## 8. Episode workflow and autonomous reuse

Preserve the current evidence-based workflow:

`objective/curriculum → script → pinned character/world states → storyboard start/end frames → approved animatic → shot generation/animation → voice/music/effects/text/edit → continuity/factual/accessibility QC → owner approval → delivery/publication under configured policy`

The narration/dialogue scratch track and learner response holds inform the animatic before expensive final motion. Each shot handoff includes actual selected references, source IDs/hashes, incoming/outgoing state, events/timing, camera intent, exact text/audio, model capability/preflight, provider task/receipt, output hash, usable intervals and retry/cost history. A package acknowledgment must mean the selected provider inputs were actually attached, not merely stored in a generic snapshot.

Use existing approved frames and clips first. Generate missing views or rejected segments only; preserve the accepted balloon clip and paused continuation work. End-state capsules contain last approved frame/tail offsets, avatar/world/camera/prop/effect state, audio tail, continuing action and uncertainties.

After look/feel calibration is accepted, automate routine stages within the configured approval, cost, factual, identity and publication policy. Existing Five Stations pause gates remain: new identity/location/major prop, exact text/factual claims when review is required, failed continuity, rights, cost/safety/platform holds and final owner approval. Reuse an approved factual/text decision only when its scope/version/context matches; a reusable review is not blanket approval for a different claim.

An educational episode is accepted for its demonstrated learning action and coherent story. Prompt counts, model task completion, beautiful stills, presenter claims or nominal runtime do not establish that outcome. Six episodes per week remains a requested throughput goal, not a verified production rate; do not substitute the older 25/week grid or invent a capacity claim.

## 9. Change tracking and contract fields

Pin `series_style_version · curriculum/claim_version · detail/appearance/voice/performance_version · coverage_set_id · cast_version · world/location_version · camera_version · event_timeline_version · exact_text_revision · animatic_revision · provider_capability_version` with every shot/package.

Edits create immutable versions and dependency diffs. Changes in:
- identity invalidate affected keyframes/motion references;
- voice/text/language invalidate scoped alignment/captions/read-along;
- timing invalidate dependent reactions/contact/effects/camera/edit;
- geometry/boundary/operational state invalidate sound paths, routes, sightlines and responses;
- claim/lesson objective invalidate demonstrations, explanations, answer keys and transfer tasks.

The audit record includes who/when/why, old/new IDs, changed fields, source evidence, affected shots/descendants, approval scope, cost/retry impact and rollback target. Preserve approved historical outputs; mark dependency staleness visibly. Audio mute, visual hide and removal of a physical cause remain distinct operations.

## 10. Acceptance criteria

| ID | Requirement | Evidence needed |
|---|---|---|
| CA-01 | Original approved style and explicit grade profile; source conflicts visible. | Profile/version, approved examples and per-episode grade decision. |
| CA-02 | All three boards resolve to actual pinned assets with correct appearance/voice/performance scope. | Manifest, reference handoff receipt and identity comparisons; expanded grid acceptance retains its calibration hold. |
| CA-03 | Learning objective has a question, demonstration/evidence, explanation and transfer opportunity. | Reviewed script/animatic and actual rendered learning action. |
| CA-04 | Viewer prompt and authored response hold precede answer reveal. | Animatic/edited timeline; app interaction separate from broadcast invitation. |
| CA-05 | Exact text, phonemes, quantities, symbols and captions agree. | Controlled-layer source, proofread render and pronunciation/alignment review. |
| CA-06 | Anticipation, contact, follow-through, gaze and recovery agree with their cues. | Reviewed frames/timebase and timing targets; no universal human-reaction delay asserted. |
| CA-07 | Hair/clothing/appendages/props remain attached and respond coherently. | Motion review at contact and through alternate-angle/continuation shots. |
| CA-08 | World/camera movement preserves geography, occlusion, scale and established anchors. | World pack, camera cues and comparisons across cuts. |
| CA-09 | Local effects, surrounding activity and room/open/vacuum behavior have causal scope. | Event/source/boundary map and persistent aftermath evidence. |
| CA-10 | Vehicles/mechanisms retain component identity and operational continuity. | Exterior/interior pack and control-to-response trace. |
| CA-11 | Fantasy/exaggeration is declared and does not corrupt factual explanation or measurement. | Rule profile and independent claim review. |
| CA-12 | Spoken/sung performance, sound perspective and readable lesson imagery synchronize. | Audio/beat/phoneme and event timelines; intelligibility/legibility review. |
| CA-13 | Changes invalidate only affected descendants and preserve history. | Dependency diff, version conflict/rollback and re-review evidence. |
| CA-14 | Reuse/retries respect quality, budget and configured gates; no false finished status. | Ledger, receipts, usable duration and holds/approval log. |
| CA-15 | Final episode/handoff includes reproducible assets, review evidence and truthful status. | Hashes, package ID, script/text/audio/edit/continuity/Q&A manifests and owner decision. |

These are implementation acceptance requirements, not claims that runtime tests were executed during this documentation update. No paid animation or new episode generation was initiated here.

## 11. Repository ownership and synchronization

Canonical full documents live in VisionWeaver. The applicable repositories receive versioned integration notes and README links; project canon and operational telemetry stay owned by their respective systems.

| Repository | Scope of this update |
|---|---|
| VisionWeaver | Full Avatar State v1.1 and this animation/teaching standard; existing board/world documentation cross-links and precedence note. |
| -Five-Stations-Learning-Serie | Series/lesson/animation mapping, board/letter/pilot/Q&A acceptance links and current evidence limits. |
| MASTER_CEO_DASHBOARD | UI and persisted-version contract: boards, profiles, timelines, dependencies, actual reference handoff and evidence/approval status. |
| Master-System-Buildout | System ownership, specification registry and shared integration/validation mapping. |
| -THELMA-AI | Governed job types, versioned inputs, policy/retry/cost/QC/evidence and handoff. |
| Higgsfield-Integration-Layer | Provider adapter/preflight/input receipts, unsupported controls, asset lineage and analysis scope. No new provider API capabilities asserted. |
| Crossroads-of-Identity | Shared character/world/camera/causal continuity; children's style/grade profile is not applied to its literary canon. |
| This-Is-Your-Life | Shared character/world/camera/causal continuity; children's style/grade profile is not applied to its anthology canon. |
| THELMA-Global-Link-Logistics | Shared environmental/vehicle/perception concepts as design references only; no cinematic exaggeration or unmeasured video descriptor promoted to operational telemetry. |

Other accessible repositories did not show direct ownership of this production contract in the discovery/source review. No unrelated application code, book canon, database migrations, deployments or channel publications are changed by this synchronization.

## 12. Analysis scope, provenance and missing evidence

All requested analysis jobs completed, but their returned scopes differ materially. The ranges below are approximate tool output, not verified source runtime or exact shot counts.

| Analysis | Job ID | Returned scope and finding |
|---|---|---|
| CoComelon | `13f9d0ed-0f07-49cc-8154-840acb5b8d7c` | Approx. 0:00–2:51. Describes repeated washing/rinsing/play actions, object inserts and coordinated gestures. |
| SUPER WHY! | `3669bb42-f0df-4f50-8f4b-39f1672a58d2` | Approx. 0:00–1:04, introduction only. Full teaching-cycle discussion uses the separately inspected PBS transcripts. |
| Magic School Bus, initial | `72011635-1cee-4179-91fc-68c23af09514` | Approx. 0:00–0:10 only; inadequate for a scene-level science lesson assessment. |
| Magic School Bus, short-link retry | `cdf28c54-bc0b-4140-8256-7ea8ba524a87` | Approx. 0:00–0:49: exterior establishing view, interior display hall and ensemble concern. Still not a full lesson review. |
| [Scholastic supplemental: We're Inside Ralphie](https://youtu.be/pgaUtZMn8WA) | `15ef9c1f-b632-4017-bd9a-8dc65574951a` | Approx. 0:00–1:04, theme/introduction. Reported transformations and setting transitions illustrate authored exceptions, not verified internal-body teaching scenes. |
| PAW Patrol site-selected short | `ab6b3404-a9f1-475a-b2a3-2ea30fb295dc` | Approx. 0:00–0:57 promotional montage; no full episode claim. |
| PAW Patrol muddy rescue sample | `a3fc22d7-8a4c-45a1-937e-cc01e4f609c6` | Approx. 0:00–9:45. Describes condition/report/briefing/deployment/contact sequences, including roughly 7:21–7:43 cable attachment and vehicle recovery. Character names, costume details and precise mechanics need verification. |
| Supplied family movie | `42e8dc73-f1ea-497e-9baa-5338fca28020` | Tool reports approximate segments through 23:15 with live-action town/bicycle/clubhouse/factory imagery and the title Little Heroes. Full runtime, title attribution and later plot details were not independently verified. Use broad staging observations provisionally. |
| Supplied cartoon tutorial | `af494b9f-35fd-4ed4-9b2b-bdd327dc27ce` | Approx. 0:00–12:47; historical scripting/reference/image/motion/audio/edit demonstration. Presenter success claims and settings are not certified. |

**Provisional camera/activity observations:** The family-movie descriptors suggest town-establishing views, travel through repeated sites, parallel off-screen communication and close reaction views within smaller rooms. The muddy-rescue descriptors connect changing ground conditions to a call, briefing, arrival and physical tool contact. Our design response is persistent routes/zones, available cues, task assignments, contact/prop state and aftermath—not an assumption that the tools measured these events.

**Explicit limitation:** Magic School Bus's automated outputs never reached the substantive body/cell lesson. Its science-adventure assessment is based on the identified primary descriptions and introduction-level staging. Frame-level lesson/camera analysis of those episodes remains open. This does not block adopting the independently stated lesson/performance contracts here.


Source-backed current written requirements also come from the inspected Five Stations README, character-board/pilot lock, letter-lock protocol and Assistant Director QC protocol, plus VisionWeaver character-board and world-state contracts. The Avatar State companion contains the full prior source register and 16/24/32/full-coverage reconciliation.

Unresolved: calibrated eight-height grid; exact video frame/contact/reaction annotations; verified story/shot details outside returned analysis scope; full film identity/medium if not established by evidence; approved per-series grade profiles where records conflict; actual deployed schema/provider controls; multi-shot motion and final pilot approval; missing Season 1 episode source; curriculum/claim evidence for each new lesson. Preserve all holds rather than guessing.

The analysis/model tools can misidentify names, counts, ages, appearances, mechanisms or events. Such descriptors are review suggestions, never identity locks or measured physics. Source videos remain linked references; no source dialogue, lyrics, complete transcript, copied character art or video bytes are deposited in the repositories.
