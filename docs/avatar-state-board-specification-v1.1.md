# VisionWeaver — The Avatar State

## Three-board implementation specification and world-anchor foundation

**Specification version:** 1.1  
**Prepared:** October 3, 2026, America/Chicago  
**Product baseline:** VisionWeaver v2.02; specification versions, product versions, board revisions, and provider task IDs are separate identifiers.  
**Authority:** The Architect / Estiban Creations.  
**Status:** Finalized implementation draft. Board contracts and validation behavior are defined below. Full-coverage calibration values and identified source gaps remain explicitly unresolved. This document is not evidence that the expanded boards, schema, or automation are deployed.

The Avatar State establishes the character as a persistent, versioned participant in a persistent world. It carries identity, appearance, voice, physical condition, performance, perception, position, and the consequences of prior events into every scene. The three character boards are its visible authoring and review surfaces. Location Necessities and World Anchors are linked production records, not replacements for those boards.

Begin with the Avatar State, then resume the paused World State / Boy and Red Balloon dissection. Preserve the existing successful clip, approved look, and saved references. Do not restart completed production merely because this specification expands future coverage.

### Evidence labels used in this document

| Label | Meaning |
|---|---|
| **Established** | Requirement present in a current source that was read. |
| **Current direction** | Requirement in the user's present request. |
| **Recovered context** | Earlier conversation material retrieved as contextual excerpts; not a complete verbatim transcript. |
| **Design decision** | Explicit implementation choice made in this specification to make the requested behavior implementable. It is not represented as a previous user statement or deployed feature. |
| **Unresolved** | Missing source, calibration value, factual evidence, or implementation mapping. No invented value is substituted. |

**Repository publication note (October 3, 2026):** The source register and statements about what current GitHub files contained describe the inspected snapshots before this synchronization. This specification is now published as the expanded design contract; the eight exact height presets, runtime enforcement and source gaps remain unresolved. The children's extension is maintained in the companion [animation and teaching standard](children-animation-production-standard-v1.md).

## 1. Source reconciliation and precedence

Apply this order: current Architect direction → latest explicit approval for the affected character/state → canonical VisionWeaver standard → synchronized system contracts → project records → historical examples. Within an approved appearance, the approved visual reference outranks descriptive shorthand. A newly generated candidate does not outrank an approved board. Conflicting authoritative visual sources require a recorded decision; do not resolve them by silently rewriting identity.

### 1.1 Final board names

Keep the exact visible titles established in both the VisionWeaver and CEO Dashboard contracts [S1, S2]. Technical profiles and revisions appear as secondary labels.

| Exact board title | Purpose | Scope and authority |
|---|---|---|
| **A Cast Board** | Shows who participates in a scene, their approved scene appearance, and the state carried into and out of its shots. Retains the multi-character scene-fallout function. | Scene usage; references character truth. It never becomes the sole identity source. |
| **Character Detail Specifications Board** | Defines the character's identity anchors and approved physical, visual, voice, and performance specifications. | Canonical character detail source; includes versioned state differences without silently changing the base identity. |
| **360 View Board** | Provides individual-character visual references across camera directions and heights, with detail views and exact reference lineage. | Generation anchoring and camera continuity. Profiles identify the coverage actually available. |

Do not rename the third board to “64 View Board.” Display **360 View Board** with a secondary label such as **Full height-and-angle coverage · 64 indexed views**. Preserve older titles as searchable aliases, including “360 View Storyboard,” while displaying the canonical name.

### 1.2 Reconciliation of 16, 24, 32, and full coverage

| Profile | Verified/recovered meaning | Final treatment |
|---|---|---|
| **16-view state** | Current contracts: eight eye-level views plus eight selected high/low oblique views. Prior user direction specifically selected 16 when only clothing changes [S1–S3, C1]. | Retain as the economical wardrobe-only default. It inherits identity from a pinned approved master and must name its actual sixteen coverage cells. It is not full elevation coverage. |
| **24-view study** | The current Marcus image has three rows of eight: eye level, high oblique, low oblique [I2]. Recovered context identifies it as a presented alternative [C1]. | Retain as an archived comparison or explicitly selected intermediate reference. No current written contract makes 24 the default. It cannot qualify as full coverage. |
| **32-view master** | Current canonical standard: eight eye-level, eight high-oblique, eight low-oblique, eight extreme-oblique views [S1–S3]. User selected it as the normal master/carousel standard [C1]. | Preserve approved masters, their identity authority, and the four-card carousel format. Record that they cover four elevation rows. Do not relabel 32 panels as eight complete height rows. |
| **Full height-and-angle coverage** | Current request restores full coverage. Recovered user context describes eight directions × eight heights, without direct head-top or underside views [C1]. | **Design decision:** represent the expansion as an eight-by-eight matrix of **64 required full-body reference slots**, plus separate detail insets. Existing valid views can fill compatible cells; additional cells are created only where missing. |

The 64-slot interpretation is the arithmetic consequence of the recovered eight-by-eight request combined with the current full-coverage direction. It is not described in the retrieved main-branch contracts; those still prescribe 32. This is a documented specification change, not a claim that GitHub already contains a 64-view standard.

**Unresolved calibration:** no source defines eight exact camera heights, pitch angles, distances, or a numerical meaning for “extreme-oblique.” Therefore the expanded profile must be configured before it can be accepted as complete. The specification fixes the number, indexing, required metadata, and verification rules; it does not guess those missing values. “Full” means the configured eight-by-eight coverage, not every possible continuous camera position or calibrated 3D reconstruction.

### 1.3 Existing-source conflicts to preserve visibly

| Conflict | Resolution in this specification |
|---|---|
| September 30 standard has four height rows; latest request asks full height-and-angle coverage. | Retain the 32-view master as an approved profile; add the expanded coverage profile. Require profile metadata and prohibit a false “full coverage” badge. |
| Earlier user wording reserves 16 for clothing; the written contract also permits accessories, props, controlled expression/posture. | Wardrobe-only is the default. Broader 16-view use remains a source-recorded permission, but requires an explicit production policy covering that change and camera range; it must never cover hair, face, injury, body, or skin changes [S1, S2, C1]. |
| October 3 world architecture and older integration checklist describe medium-brown skin/dark curls; October 1 representation lock requires dark brown skin, tightly coiled hair, full cheeks, and a fat body. | The explicit corrected appearance and linked approved references govern. Flag older descriptive records for reconciliation; do not lighten, slim, or replace the corrected boy [S5, S6, S11, L1]. |
| Crossroads registry has historical eight-view boards, legacy titles, and candidates under a “Locked boards” heading. | Preserve each asset and its actual approval status. Existing approved assets are grandfathered references; pending Desiree v2 is not made approved by the section heading. Do not declare any old eight-view sheet a compliant new 32/64 set [S4]. |
| A general shot rule says never name/copy real sources in art, while place-time direction requests recognizable real landmarks. | Distinguish a factual landmark pack from a fictional location inspired by research. Naming/branding treatment for a specific output is unresolved where these directives conflict; escalate that choice instead of deleting landmark identity or silently changing the location [S5, S7]. |

## 2. Shared records, identifiers, and invariants

These are logical contracts. They are not assertions that tables with these names already exist. Reconcile them with the live schema before writing migrations.

| Record | Required fields and constraints |
|---|---|
| **Character** | `character_id`, `workspace_id`, `universe_id`, canonical name, aliases, species/body plan where relevant, source classification, canonical detail version, provenance. Stable identity survives wardrobe, age, and scene changes. |
| **DetailVersion** | `detail_version_id`, `character_id`, version, identity anchors, baseline appearance, allowed/prohibited changes, linked visual and audio references, reviewer/approval record, parent revision. |
| **AppearanceState** | `appearance_state_id`, `character_id`, pinned detail version, parent master/state, changed-field list, wardrobe/hair/makeup/physical-condition data, canonical comparison references, validity interval, approval. |
| **VoiceVersion** | `voice_version_id`, character, language/accent/delivery fields, approved sample assets, pronunciation, provider mapping, provenance/rights, parent version, approval. Voice changes version separately from appearance. |
| **PerformanceVersion** | Approved movement/expression/perception rules and ranges, pose/gait references, constraints, parent version, approval. |
| **CoverageSet** | `coverage_set_id`, appearance state, profile and profile version, pinned master, required-cell manifest, completed view assets, missing cells, calibration status, approval. |
| **ViewAsset** | `view_asset_id`, immutable asset version and checksum, coverage cell, character/state/detail versions, camera metadata, image dimensions, source/derivation, provider task/model/prompt version if generated, QC/approval. |
| **CastVersion** | `cast_board_id`, revision, project/scene, shot/time ranges, pinned world/location/camera references, cast entries, continuity exceptions, approval. |
| **AvatarSceneState** | Character-instance ID, character/state/detail/voice/performance versions, world transform, pose/motion, sensory/attention/emotion/physical state, props/contacts, event-time interval, start/end continuity references. |
| **ChangeEvent** | Stable event ID, actor, timestamp, reason, source, before/after versions, changed fields, effective scene/shot/time, affected descendants, approval/policy, audit correlation ID. |
| **Approval** | Exact target ID/version and asset hashes, decision, approver, timestamp, evidence, permitted scope. Draft/save/generated/approved are distinct states. |

**Design decision — common lifecycle:** `DRAFT → GENERATED → QC_PENDING → APPROVED → LOCKED`. `NEEDS_REVISION`, `REJECTED`, and `SUPERSEDED` are explicit alternatives. `STALE` is a dependency flag, not an erasure of historical approval. Saving an item never automatically locks it; a completed provider task never automatically approves it.

Preserve the existing human-readable state pattern:

`<CHARACTER_ID>__<SCENE_OR_STATE>__v<NUMBER>`

Examples remain `MARCUS-REYNOLDS__MASTER__v01`, `MARCUS-REYNOLDS__BROWN-SUIT__v01`, and `MARCUS-REYNOLDS__BLACK-EYE__v01`. Use separate immutable internal version IDs where needed. Preserve existing aliases such as `FL-MR32` and `BOY-001 RAIN v02`; do not invent equivalence between these labels and database rows without a registry mapping.

All production references pin exact versions. A user-facing “latest” browser shortcut must resolve to an exact approved version when added to a scene. Locked prior scenes retain their pinned versions when a newer master is approved.

Unknown, unset, absent, not applicable, and intentionally withheld are distinct values. In particular, `voice_status=NO_DIALOGUE` differs from an unspecified voice. No dialogue in the balloon example requires no invented accent, speech, or synthesized voice.

### 2.1 Serialization and validation rules

**Design decision:** IDs are opaque nonempty strings; versions are positive integers or opaque immutable version IDs consistently within a record type. Store timestamps as ISO 8601 instants with timezone; store story-local time and timezone separately. Store measured distances/heights in meters, angles in degrees, and durations/offsets in seconds. Preserve original units and evidence when importing feet-based shot records. Anatomical side is `LEFT`, `RIGHT`, `BILATERAL`, or `NOT_APPLICABLE`.

Every asset reference contains `asset_id`, `asset_version_id`, `sha256`, `role`, and `approval_ref`. Every record reference contains record ID and exact version. Every sourced field can carry `value`, `status`, `evidence_class`, `evidence_refs`, and optional `confidence`; confidence is omitted when unassessed, not defaulted to a fabricated midpoint. Evidence classes are observed, source-documented, inferred, authored, simulated, or unknown. A confidence number never substitutes for a source.

Each appearance has exactly one character and one pinned detail version; each cast entry has exactly one character instance and one appearance for its validity interval. A coverage cell is unique within `(coverage_set_id, height_preset_id, azimuth_id)`. Every completed cell resolves to one approved primary full-body image; alternative takes remain candidates. Details have a different role and cannot satisfy that uniqueness/count rule. Additional view files may share storage with a parent only when the image and required appearance truly remain valid; derived provenance must retain the parent.

Write operations accept expected current revision and an idempotency key. Return the committed revision and the complete saved reference chain; partial success is not a usable cast activation. Treat missing reference, unauthorized reference, unapproved state, version conflict, identity conflict, incomplete coverage, unsupported provider reference, and unresolved required calibration as separate inspectable validation outcomes. These are proposed contract outcomes, not assertions that routes or error codes already exist.

## 3. A Cast Board contract

### 3.1 Board-level fields

| Field group | Required contents |
|---|---|
| Identification | Exact title, cast-board ID/revision, project/universe, scene ID/name, approval state, created/updated timestamps. |
| Temporal scope | Story date or period, local time/timezone, shot IDs, shot ranges, event-time start/end, editorial-timeline revision if assembled. Mark approximate values explicitly. |
| World/location | Location Necessities version, World Anchor pack/version, world-state version, set/plate asset version, continuity capsule. Unset sources remain visible. |
| Camera | Shot-contract references, camera pins/view cones, camera height/angle/lens/framing/move, light-lock version, coordinate-system reference. |
| Ensemble/fallout | Present participants, entry/exit points, blocking, screen direction, interactions, spatial relationships, carryover effects, approved exceptions. Retain multi-character support even for a one-character scene. |
| Governance | Board author, review/approval record, change history, reference completeness, unresolved conflicts and stale dependencies. |

### 3.2 One entry per character instance and time interval

Each entry contains stable character ID and canonical name; instance ID; approved scene avatar image and hash; detail version; active appearance state; master and selected coverage set; selected view assets; voice and performance versions; wardrobe components; hair/facial hair; makeup; injuries/physical marks; body/age state; accessories; props and handedness; expression/posture/gait; language/accent/delivery or explicit no-dialogue status; scene position/orientation; shot/time validity; continuity notes; and approval.

Use a participation role such as visible, off-screen dialogue, voice-over, or background participant. A visible-avatar image can be not applicable for an audio-only participant, while their voice and identity references remain mandatory. Do not confuse an unobserved off-screen sound source with a confirmed named cast member.

A Cast Board avatar is the **approved appearance used in that scene**, not an arbitrary default portrait. Marcus in a brown suit, blue suit, robe, unshaven, with a shadow beard, black eye, or broken nose must resolve to the appropriate state. Show the state name and version beside the image. Each character references its own individual detail and 360 boards; the group image never replaces them [S1, S2].

If a change occurs within a scene, split the entry by shot/time interval or attach a versioned state-transition event. Example: before injury → impact → injured state. If no impact is authored, an injury cannot suddenly appear on the next shot. The same applies to removing a coat, losing a balloon, becoming wet, or changing hand occupancy.

### 3.3 Cast Board acceptance

The cast roster matches the scene, with no accidental duplicate or missing participant. Every active reference resolves and matches its displayed avatar. All state changes have valid scope and cause or approved editorial discontinuity. Group layouts preserve individual identities, body scale, contacts, props, and eyelines. Reload retrieves the same versions. Board save and scene activation are separate actions; activation checks the whole reference chain atomically.

## 4. Character Detail Specifications Board contract

### 4.1 Required fields

| Domain | Fields and preservation rules |
|---|---|
| Identity/provenance | Character ID/name/aliases; universe/project applicability; source story/manuscript/history/portrait IDs; invented versus source-derived attributes; approved visuals; designer/editor; approval history. |
| Identity anchors | Facial geometry and asymmetry; permanent marks; stable silhouette/proportions; approved skin complexion and texture; distinct hairline/ear/eye/teeth traits; prohibited substitutions. |
| Face detail | Eyes/iris, brows, nose, lips, ears, teeth, jaw/cheeks, expression range; neutral and relevant close-up assets. |
| Skin/material | Tone/undertones, texture/pores, freckles, hyperpigmentation, scars, complexion regions; location on the body, side, extent, and reference. Lighting/grade is separate from complexion. |
| Hair/facial hair | Texture, color, hairline, length, density, cut/part, curl/coiling pattern, beard/mustache/stubble state, grooming, wetness effects, approved variations and changed-state references. |
| Body | Height with units/source or unset; body size/build, proportions, silhouette, limbs/hands/feet, posture, gait, handedness, physical/mobility constraints where authored. Preserve fat bodies as approved; no silent slimming. |
| Age/physical condition | Story age/date relationship where known; age-specific appearance; injuries, broken bones, bruising, swelling, wounds, black eyes, broken noses, scars, fatigue, recovery/healing, physical changes. Record affected anatomical side and temporal validity. |
| Wardrobe | Each garment's item ID, cut/fit/material/color, layers, seams/buttons/closures, condition, wetness/dirt/damage, shoes, pockets, approved combinations, and continuity references. |
| Accessories/props | Jewelry, glasses, earrings, signature objects; item/version, side or attachment point, scale, worn/held/stored state, interaction constraints. |
| Voice | Language(s), explicit accent/locale, vocal age/direction, timbre/pitch range, pace, speech patterns, emotional delivery, pronunciations, approved samples, provider/voice ID/version, authorized use and source. |
| Cultural/biographical fields | Race, ethnicity, nationality, culture, upbringing/residence, languages, story era. Keep these separate. Character appearance does not determine accent or personality [S5]. |
| Performance/perception | Approved pose/expression/gait ranges; visual and hearing constraints where specified; gaze/attention, startle/recovery, social response and interaction distances. Numerical values are unset until authored or supported. |
| State permissions | Locked anchors, approved variable fields/ranges, forbidden drift, known exceptions, scene-local versus persistent attributes, policy/approval scope. |
| Evidence/versioning | Detail revision, parent version, field-level source/uncertainty, approved image/audio hashes, generated asset provenance, changed fields, reviewer and approval date. |

Require fields to be populated or explicitly marked unknown/not applicable according to the character's role. A current scene may lack an accent because there is no dialogue; it must not receive a guessed accent from ethnicity or city.

### 4.2 Detail and state authority

The base detail version defines stable identity. Scene appearance differences are versioned overlays with their own assets and validity. Temporary injuries do not become permanent identity anchors by accident; permanent scars can be promoted only through a recorded canon decision. Age variants preserve established anchors and change only approved age differences [S7]. Clothing and voice may version independently; neither silently changes the face.

Physical sides are anatomical: a mark on the character's left cheek stays on that cheek. Mirroring a reference must not switch the mark, handedness, jewelry, or injury side. The Crossroads records expressly demonstrate this need for Elijah's left-cheek mole [S7 and project search evidence].

### 4.3 Detail Board acceptance

Reviewers can identify every locked trait and its source. Close-ups agree with the approved full-body state. Missing evidence is visible. The same complexion, hair texture, body size, facial geometry, anatomical marks, and voice identity survive neutral and intended production conditions. Current approval targets the exact version; conflicting text is corrected through a new revision with history preserved.

## 5. 360 View Board contract

### 5.1 Coverage matrix and coordinate rules

**Design decision:** index azimuth relative to the character's locked neutral orientation. `A0=0°` is front; positive rotation proceeds toward the character's anatomical right. The view label describes the side seen, not the character turning their head. Store that convention explicitly so adapters cannot reverse left and right.

| Azimuth ID | Angle | View label |
|---|---:|---|
| A0 | 0° | Front |
| A1 | 45° | Front-right |
| A2 | 90° | Right |
| A3 | 135° | Back-right |
| A4 | 180° | Back |
| A5 | 225° | Back-left |
| A6 | 270° | Left |
| A7 | 315° | Front-left |

For full coverage, configure eight distinct height presets, `H01` through `H08`, and create every combination `Hnn-Aj`. These identifiers do not assert numerical heights. Each preset must record camera height above the common ground plane, aim target and target height, pitch, horizontal radius/distance, lens/projection, framing, and rationale. Include eye-level and appropriate elevated/lowered oblique coverage. Upper and lower views remain oblique; no direct crown-only overhead or sole-only underside panel is substituted for a full-body view.

**Profile acceptance precondition:** a director-approved configuration supplies all eight presets with distinct, meaningful camera coverage. A row cannot be approved because its name merely says “high.” Heights may be character-relative presets, but instantiated views must retain actual numeric camera geometry or explicitly state that it is authored/estimated, not measured.

The historical 32 profile has four named rows and eight directions each. Its “extreme” row remains as originally approved; its actual direction/pitch is unknown unless documented. The historical 16 profile's second row is a selection of elevated/lowered views, not eight directions at both elevations. The 24 profile has three rows. Do not infer missing cells from labels or image duplication.

### 5.2 Board and view fields

| Object | Required fields |
|---|---|
| Board header | Exact title; character; state ID/version; detail version; canonical master; coverage profile/version; approval; view count excluding insets; required/completed/missing cells. |
| Calibration | Coordinate convention; units; ground/pivot/aim target; camera presets; pose; backdrop; neutral light configuration; character scale and reference method; geometry evidence status. |
| Each full-body view | Unique cell ID, azimuth/height preset, actual or authored camera transform, lens/projection, aim point, framing, image asset/version/hash, state IDs, generation prompt/model/task/source references, QC findings, approval. |
| Each detail inset | Region/side, purpose, crop/source asset, state version, resolution, reviewer; classify as detail, never as a missing full-body panel. |
| Exports | Full sheet; separate view files; row carousel cards; detail cards; machine-readable coverage manifest; exact text labels; source versions. |

All views in one coverage set use the same appearance snapshot, neutral pose and expression, backdrop, fixed world lighting, and physical scale. Perspective may change with camera placement; anatomy must not change to fit it. Framing adjustments must be recorded rather than silently altering character height. Preserve head-to-toe coverage, including hands and footwear where visible; an object-only panel fails the count.

Include detail references for face, eyes, skin texture, hair/facial hair, both hands where needed, injuries/marks, garments, accessories, and signature props. Insets are additional assets. Never claim close-ups prove an unseen body region.

### 5.3 Camera anchoring

Production cameras use the world coordinate system and shot map. Character coverage uses the neutral character frame. Each character instance supplies the transform between them. If the world fixture uses x-right/y-up/z-forward, record its orientation and map it explicitly to the north-up production map; do not silently swap units or axes [S7, S8].

For each shot retain pin, position, yaw/pitch/roll, camera height, distance, lens, view cone/framing, move path, focal target, light lock, and character position/orientation/eyeline. When selecting a reference, record the requested camera range and the actual view assets chosen. A nearest reference is not automatically exact coverage; mark approximation and require review where the shot exceeds approved coverage.

A 360 image board anchors identity; it is not automatically a rig, mesh, depth map, or calibrated 3D asset. Use separate geometry evidence status such as `REFERENCE_ONLY`, `AUTHORED_GEOMETRY`, or `CALIBRATED_GEOMETRY` (design decision). Do not fabricate measured camera values from a montage. A new camera reveals the same established world, including off-screen entities, rather than inventing a new background [S6, S9].

### 5.4 Visual inspection of the current examples

The three Marcus image files were opened as pixels, not assessed from filenames alone [I1–I3]. They preserve useful layout examples: 16 has eight primary directions plus selected high/low views; 24 has three rows of eight; 32 has four rows of eight plus details. None includes a machine-readable height/calibration manifest. Some illustrated row distinctions are weak, and the 32 sheet contains an inconsistent detail label. Treat these as reasons for per-cell and label QC, not a declaration that all existing locked imagery is invalid.

Board labels must be rendered from approved metadata and proofread. Generated lettering never determines the character name, side, cell ID, or camera geometry. Preserve the Five Stations exact-text/letter-lock rule in outsourced board creation [S12].

## 6. Avatar-reference and provider handoff rules

The production chain is:

**Scene/shot → Cast version → Character instance → active AppearanceState + VoiceVersion + PerformanceVersion → pinned DetailVersion and canonical master → selected CoverageSet/ViewAssets.**

The runtime also pins World State, Location Necessities, World Anchor pack, camera/light state, props, and continuity capsule. A text description supplements the approved assets; it does not replace them.

1. Resolve references on the server for the authorized workspace/project. Reject broken, unauthorized, unapproved, or stale-for-this-new-render references before spending credits.
2. Preserve stable asset IDs and immutable checksums. Temporary provider URLs are transport locations, not durable identity; refresh them through the authorized asset resolver without changing the chosen asset/version.
3. Transmit exact approved reference files supported by the selected provider. Log each reference's role, order, ID/version/hash, and provider-resolved input. Do not silently drop a reference to meet provider limits.
4. Keep a manifest of requested versus transmitted references. If a provider cannot consume the required set, fail preflight or use an explicitly supported method that retains the constraints. A successful model call is not proof of board consumption.
5. Generate keyframes and motion only after the relevant reference state is locked. Retain the last approved face/skin/hair/injury close-ups for comparison [S1].
6. For continuation, preserve the approved source clip, edited endpoint, terminal frame, and motion/audio tail. A new-shot pivot keeps character/world truth while selecting references for the new camera. Do not blindly use the last frontal image for a different camera angle.
7. Store source clip/trim/timeline versions and offsets. If the endpoint changes, derived capsules and continuation jobs become stale. Retain the familiar last-two-seconds workflow where it fits; longer context may be needed for an action [S9].
8. Record model/version, prompt version and verbatim prompt, provider task/attempt, input assets, output checksum, review result, costs where available, and handoff receipt. Never embed credentials in board records.

**Provider input acceptance:** a reviewer can verify which approved individual references were actually loaded and compare the output with them. A collage, a thumbnail, or text saying “use the board” is insufficient evidence.

## 7. Change tracking and continuity

### 7.1 Change policy

| Change | Required treatment | Reference coverage impact |
|---|---|---|
| Clothing only | New appearance state; item-level wardrobe diff; preserve all identity/physical anchors. | 16-view variant permitted within its documented shot coverage; extend needed cells for cameras outside it. |
| Accessory/prop/expression/posture only | New state or performance event; preserve identity. | Existing contract permits limited 16 use, but require policy and coverage fit. Prop motion can be an event rather than a freshly generated board. |
| Hair, beard, makeup that alters appearance, skin/texture, injury, body or face | New materially changed appearance state; explicit approval; preserve parent identity anchors except the authorized changed fields. | Revised 32-view master at minimum under existing contract; for a state certified for full coverage, complete its required 64-cell coverage before that certification. |
| Age/physical development | Versioned age appearance linked to the same character and story date; approved differences. | Material-change rules; no unrelated replacement identity. |
| Voice/accent/language | New voice version and sample/pronunciation review. Never infer it from face or geography. | Visual boards remain valid if appearance is unchanged; dependent audio/performance renders are reviewed. |
| Scene placement/camera | New scene/camera revision and cast usage interval. | Reuse valid appearance views; fill uncovered angles/heights; mark affected shots/capsules stale. |
| Weather/wetness/dirt/damage | Dynamic physical/material state with cause and timing. | Do not regenerate a canonical face for every raindrop. Create appearance references where a persistent visible change requires them, then track progression in scene state. |
| Landmark, historical period, community pack | New location/world revision with sourced changes. | Review affected plates, lighting, background cast, props, sound, camera paths and shots. |

### 7.2 Every change record

Capture actor, timestamp, reason, source evidence, change category, changed field paths, before/after values and versions, effective story time/scene/shots, approval or authorized policy, affected cast/shot/audio/export IDs, retained prior reference assets, validation results, and audit correlation ID. Differentiate persistent changes, scene-local changes, transient performance, optional atmosphere, and forbidden drift.

Changing a working state creates a new revision. Approving it does not overwrite a locked predecessor. Advancing a scene's active state updates the cast reference and dependent previews atomically; partial writes must not leave the portrait at one version and render inputs at another. Use optimistic version checks; a stale edit returns a conflict and preserves both the stored revision and the unsaved draft.

Dependencies mark affected descendants stale without rewriting past approved work. Unchanged material is cached/reused. Rollback selects a prior approved version and logs the action. Never delete old boards merely to make a count look current.

### 7.3 Physical and performance continuity

Track injury side/severity and healing interval; hair growth/grooming; clothing changes; wetness/dirt; body/age changes; prop possession; attention/gaze; posture/locomotion; emotional recovery; and distances/contacts. Each transition records prior state, cause/event, expected consequence, and resulting state. An intentionally discontinuous montage or time jump must be authored as such.

## 8. Location Necessities and World Anchors

These names come from the current direction. Owner-wide GitHub searches returned no files containing these exact phrases. The underlying requirements are present in the place-time and world-physics standards [S5, S6, S9, S14–S17]. This section names and structures them as implementation records; it does not claim a complete historical location library already exists.

### 8.1 Location Necessities record

| Domain | Required contents |
|---|---|
| Place/time | Stable location ID, country/region/city/neighborhood/site, real/fictional/inspired status, geographic coordinates where supported, story date/era, local clock/timezone, season and precision/uncertainty. |
| Spatial foundation | Map/version, origin/units/axis/north relation, terrain, buildings/rooms/roads/sidewalks, fixed/movable objects, entrances/exits, occlusion, accessible camera paths, scale/geometry evidence. |
| Historical state | What existed at the selected date; construction/renaming/demolition/renovation periods, period-correct architecture/materials, signage, transport, clothing and technology. |
| People/community | Neighborhood/era evidence, population/context scope, crowd density/roles, languages, cultural practices relevant to the story, individual casting decisions and confidence. |
| Environment | Light direction/temperature/practicals, weather/rain/wind/temperature/humidity, water/runoff, haze, shadows/reflections, progression and uncertainty. |
| Ecology | Species candidates, local range/season/time/weather plausibility, behavior and density, visual/audible relevance, evidence. |
| Ambient events | Traffic, pedestrians, phone users, baby cries, garbage trucks, splashes, birds/insects and other local activity; unique entity/event IDs, paths, timing, sources and consequences. |
| Production | Plate/reference versions, camera/light locks, permitted variants, scene uses, review/approval, cost/reuse policy, unresolved requirements. |
| Evidence | URL/document/asset, source date, historical period supported, supported facts, observational/inferred/authored classification, uncertainty, review date. |

A city name is not a sufficient location specification. A current photograph is not evidence of a historic site appearance. A historic reconstruction with unresolved details cannot receive factual-location approval. Fictional choices are allowed when labeled and approved; they must not masquerade as verified historical data.

### 8.2 World Anchor pack

A World Anchor is a persistent, recognizable place or spatial feature that locates the story in the audience's mind and the production world. Famous landmarks, district architecture, streetscapes, shoreline, skyline, transit structures, and local sites may qualify when verified for the time and placement.

Each anchor includes ID/name/aliases; location/site relationship; geographic/world transform; dimensions or uncertainty; era validity; period-specific appearance reference; compass/lighting relationship; visible faces and views; occlusion/sightline limits; distance/orientation to scene/camera; source evidence; real/fictional status; naming/branding decision where relevant; approval; and linked scene/shot uses.

Keep the landmark at its established coordinate even when it leaves frame. Camera orbit does not move a landmark to remain decoratively visible. Sound and shadows from off-screen elements retain their relationship to the same world. Cloud Gate/Chicago, Louvre/France, and Taj Mahal/India are existing **research targets**, not verified location packs [S5]. This specification creates no factual pack for them or for Bucharest. The word “Bucharest” in the current message is ambiguous and is not treated as a confirmed production location.

### 8.3 Communities, ethnicity, culture, and era

Include the communities prevalent in the selected neighborhood and period where supported by evidence, while keeping individual character choices explicit. Record race, ethnicity, nationality, culture, language and accent separately. Region-wide data must not be presented as precise street-level demographics. Distinguish residents, visitors, workers and incidental participants when relevant.

Do not derive personality, gait, class, occupation, accent, hair or body size from ethnicity. Canonical protagonists may be atypical of an area's majority; local population evidence does not override a locked individual identity. Cultural clothing, speech and practices require character-specific story direction or evidence. Approved Black and fat characters remain ordinary protagonists and supporting figures; preserve the representation standard [S5].

### 8.4 Surrounding effects and Avatar Conditioning

Represent every meaningful event with an ID, participants/source, start/end story time, path/position, preconditions, visual contribution, audio source/stem, physical consequences, avatar detectability, reaction, camera relevance, dependencies and evidence classification.

Avatar Conditioning carries visual field/hearing constraints where supported; gaze/attention; startle; posture/orientation; locomotion; interaction distance; social response; recovery; and whether a stimulus is ignored, noticed, or escalated. Store author-directed reaction choices separately from inferred observations. No universal numerical sensory range or reaction latency is established by the sources.

Preserve the governing sequence: world geometry → weather/light → physical disturbance → event motion → sound propagation → avatar perception/reaction → camera response → continuity update [S6, S14–S16]. Sound is spatial: source, listener, distance/direction, motion, occlusion and reverb. An audible horn can remain an unresolved vehicle source; it must not automatically become a truck.

The ordinary editing controls include rain, puddles/splashes, traffic, pedestrians, birds, insects, city ambience, dialogue and music. Keep three meanings distinct: mute audio; hide a visual layer; remove an event and review/recompute its consequences. Removing a truck affects its engine sound, shadow/reflection, splashes, wake and any authored reactions. Flat generated footage may require regeneration/inpainting; toggles must not promise independent layers that do not exist [S9].

Camera framing follows narrative salience. The balloon may become the focus as it departs; preserve boy gaze, string state, balloon position and camera intent. A tilt or reaction cut must still reveal the established location.

## 9. Current implementation mapping and boundaries

Current source code includes owner-scoped `vw_characters` save/retrieve, asset-reference validation, optimistic version checks, a voice profile in the character bible, and server-created character snapshots during generation [S18, S19]. The scene form records location, story date, timezone/time of day, terrain, weather, lighting, camera direction, action, ending state and evidence; environment plans include eight visible/audible event categories [S19, S20]. This is useful existing foundation and should be extended rather than replaced blindly.

It does **not** establish the complete normalized board hierarchy, a 64-view calibration manifest, an approved per-view camera registry, full persistent spatial geometry, synthesized character voice, layered acoustic editing, or complete Avatar State acceptance. The simple world model stores generic avatar arrays and checks structural fields, not the detailed contracts specified here [S8, S9, S18–S20]. No live schema or signed-in end-to-end test was performed for this specification.

Two concrete adapter limits require attention during implementation. `saveCharacter` currently applies `orderedUnique(..., 6)` to reference IDs, which can silently clip additional images; a coverage manifest must hold the entire 32/64-view set independently of the small provider input selection. The server-created character snapshot and appended identity text do not themselves prove that the approved board images were transmitted. Also, `compileScene` currently emits visible event directions but does not compile the saved audible flags into a spatial audio plan [S18, S19]. Preserve the existing saves while adding explicit reference-limit validation, actual input receipts, and audio/event compilation; do not label these behaviors complete from snapshots or checkboxes alone.

Implementation responsibilities:

| System | Responsibility |
|---|---|
| VisionWeaver | Canonical boards, Avatar State, world/location/anchor truth, reference compilation, creative and continuity review, assets and receipts. |
| MASTER_CEO_DASHBOARD | Displays the pinned board chain, active scene states, approval/evidence/coverage status; routes users into the workspace. Does not become a competing identity authority. |
| T.H.E.L.M.A. | Orchestrates authorized jobs, validates required versions, routes specialist work, tracks attempts/costs, handles exceptions and audit. |
| EC Integration Fabric | Durable authorization, queueing, idempotent retries, state transitions, dead letters and handoff evidence. |
| Crossroads of Identity and Five Stations | Consume the shared standard while preserving their project canon, approval records, old assets, and exact-text/voice handoffs. |
| Global Link Logistics | Shares environmental/causal concepts for its own operational domain. Creative estimates must not become verified real-world hazard data. |
| Runway/other visual providers | Consume supported approved references and return traceable candidate assets. They do not decide character canon. |
| ElevenLabs/other voice providers | Consume approved voice version, exact dialogue and pronunciation. They do not choose accent, script or character identity. |
| Directors Guild / Quality Control Agency / Architect | Existing creative authority and independent acceptance structure. Routine work runs within an approved policy; consequential exceptions follow that authority [S6, S9, S12, S14]. |

The .02 product lineage continues. Bounded autonomy remains the intended outcome after look/feel calibration: reuse approved state, render within policy, verify, update continuity, assemble, and report exceptions. Do not require a new approval for every ordinary raindrop or unchanged wardrobe reference; do require a policy exception for unauthorized identity/canon change, unresolved required source, exhausted retries, or unsupported hard constraints.

## 10. Acceptance criteria and required evidence

All results target an exact specification/profile version, code SHA where implementation is tested, board/state versions, and immutable asset hashes. Acceptance is evidence-based; this document lists pass conditions, not passed results.

| ID | Pass condition | Evidence required |
|---|---|---|
| AS-01 Names and authority | All three visible titles match Section 1; cast usage never replaces canonical detail/master. | UI inspection and exported manifest/reference chain. |
| AS-02 Required fields | Applicable fields populated; unknown/absent/not-applicable distinguishable; no invented source facts. | Serialized records and missing-field preflight results. |
| AS-03 Reference integrity | Cast → state → detail/master → individual assets resolves to the displayed scene avatar and exact versions. | Database/API readback, hashes and scene snapshot. |
| AS-04 32 profile | Exactly 32 full-body views with its four named rows and eight directions; insets excluded from count. | Per-cell manifest and visual inspection. |
| AS-05 16 profile | Exactly 16 documented views; allowed change and inherited master proven; camera limitations visible. | Before/after field diff, manifest, policy if beyond clothing, and output comparison. |
| AS-06 Full coverage | Eight approved distinct height presets × eight azimuths = 64 unique full-body cells, plus separate details. | Completed camera configuration, asset manifest, per-cell review. **Blocked until height configuration is supplied.** |
| AS-07 Camera truth | Views match their intended directions/heights; no duplicate images relabeled as different coverage; head-to-toe visible where required. | Camera metadata or authored reconstruction status, visual QC and rejected example. |
| AS-08 Identity preservation | Face, complexion/texture, hair, body size, anatomical marks, handedness and proportions match approved state across views and representative motion. | Comparison against golden references under intended lighting; reviewer findings. No unsupported universal face-score threshold. |
| AS-09 State changes | Clothing-only, hair/beard, injury, age/body and accent changes follow the correct separate revision/coverage rules. | At least wardrobe, hair/facial hair, injury-side, physical/age and voice-only test cases with history. |
| AS-10 Scene fallout | Multi-character and single-character boards call correct individual states; entries/exits, contacts, scale and prop possession remain coherent. | One single-character and one ensemble test with approved scene roster. |
| AS-11 History/locking | Locked versions immutable; stale concurrent edits conflict; rollback and targeted stale marking preserve prior approved scenes. | Version-conflict, change-impact and rollback evidence. |
| AS-12 Provider handoff | Actual transmitted reference inputs match approved manifest; unsupported/excess references produce an explicit preflight outcome. | Sanitized request/receipt and output QC; negative missing-reference test. |
| AS-13 Continuation/pivot | Uses the approved edited endpoint and carryover; a new camera preserves the same character/world rather than regenerating geography. | Terminal frame/tail offsets, capsule, continuation and alternate-angle comparisons. |
| AS-14 Location/time | Site/landmark valid for story date, place and sightline; historical uncertainties visible. | Period-specific evidence and negative anachronism case. No landmark pack certified from a current photo alone. |
| AS-15 Representation/localization | Approved Black/fat appearance preserved; ethnicity/language/accent separate; locale does not overwrite character identity. | Field separation and visual/audio review cases. |
| AS-16 Causality/acoustics | Off-screen sources persist with uncertainty; reactions agree with source direction/timing and authored intent; environmental consequences carry forward. | Event/source map and reviewed reaction/camera sequence. |
| AS-17 Editing controls | Mute/hide/remove have distinct effects; baked-media limitations and regeneration costs shown accurately. | One event removal with dependency review, one audio-only mute, one layer-capability case. |
| AS-18 Persistence/access | Boards, voice and scene links survive reload; unauthorized workspace/asset access denied; expired transport URLs re-resolve the same asset. | Signed-in save/reload/edit, ownership isolation and resolver tests. |
| AS-19 Exact lettering | Names, sides, view labels and IDs agree with metadata; no generated typo alters the source record. | Proofread export and manifest. |
| AS-20 Calibrated autonomy | Repeat known production automatically within approved look/feel, quality/budget/retry policy; real exceptions are reported without false completion. | Routine run, retry/restart case and one policy exception with audit trail. |

Board acceptance does not require an entire two-minute film. Production certification separately includes assembled runtime, disclosure, delivery and publication requirements for the selected project. Preserve its AI-CREATED requirement; do not confuse successful board generation with final-film completion.

### Initial acceptance fixtures

Use existing assets first to conserve credits. For Marcus, exercise brown suit → blue suit, robe, unshaven/shadow beard, black eye and broken nose as distinct approved states. For the balloon boy, preserve the corrected Black African American seven-year-old, dark brown skin, coiled black hair, full cheeks and fat body; yellow coat, navy trousers, black boots, one red balloon and white string [S5, S11]. Inspect actual approved assets before assigning a database ID or final physical measurements.

The old world fixture contains illustrative coordinates, confidence values and sensory settings, with `source_asset_id=null`. They are not measurements extracted from the actual clip. It also repeats `AVATAR-BOY-001` in visible entities and avatars while the current validator rejects duplicate IDs across those arrays [S8]. Implementation must either store one entity and reference it from avatar state, or explicitly change that validation contract; this specification chooses one entity with typed references. Do not reuse its numbers as approved Avatar State calibration.

## 11. Missing sources, ambiguity, and explicit holds

| ID | Missing/ambiguous item | What remains unresolved; permitted progress |
|---|---|---|
| GAP-01 | Complete “Review And Update Systems List” transcript | Retrieved relevant contextual excerpts and current world contracts, not a full verbatim export. Earlier assistant statements are not deployment evidence. The Avatar State pivot and world/perception/camera requirements are carried forward; no claim of reading every turn. |
| GAP-02 | Eight exact camera height presets | Numeric heights, pitches, distances, aim targets and lens configuration missing. Build the grid, metadata, authoring and validators; withhold full-coverage acceptance until configured. |
| GAP-03 | 64-view contract in current GitHub | Current files still define 32/16; 24 is an example. This specification supplies the expansion as a design decision. Synchronization would be a subsequent documentation/implementation change. |
| GAP-04 | Original Localized Avatar + Historical Space Framework | September 30 review explicitly says it was not found in GitHub [S21]. No original was located in this retrieval. Current place-time/world contracts partially cover it; missing original details are not reconstructed as fact. |
| GAP-05 | Full source recording contents | Stock review/readiness sources still identify two M4As as untranscribed [L2, L3]. No recording-derived board/location requirement is asserted here. |
| GAP-06 | Live normalized schema and deployed board enforcement | Current source foundation exists; live columns/policies, full hierarchy, provider payloads and authenticated runtime not inspected. Audit/migrate the real schema before treating proposed entities as existing tables. |
| GAP-07 | Latest saved boy board/state registry | Older checklist pending; later run records successful corrected master and open label QC; recovered context reports user completion. Preserve that accepted work, but exact durable saved row/asset mapping and final QC cannot be independently certified from these records. No restart required. |
| GAP-08 | Verified location, landmark and community packs | Examples are research targets. No full era-specific landmark geometry or neighborhood demographic/accent pack was read. Implement fields/evidence workflow; do not populate factual packs by guessing. |
| GAP-09 | Real landmark depiction versus fictional inspiration rule | General shot and newer recognizable-landmark directions require a project-level distinction. Exact naming/branding/output choice remains unresolved where applicable. |
| GAP-10 | Historical character-board physical details | Desiree's trousers/sandals were production additions; height carried from an earlier board; v2 visual approval remains pending in current registry [S4]. Keep source classification and pending status. |
| GAP-11 | Broad repository/history completeness | Listed 17 accessible owner repositories; performed owner-wide default-branch searches and read relevant matching sources. No certification of every file, branch, private repository outside access, or full commit history. |
| GAP-12 | “Bucharest” reference | Ambiguous in the present wording. Not enough evidence to create a city pack or relocate a scene. |

These gaps do not prevent implementing the record model, UI hierarchy, versioning, asset selection, coverage manifest, source tracking or negative validation. They do prevent claiming completed historical location packs, calibrated full coverage, live enforcement, or a verbatim reconstruction of unseen conversations.

## 12. Build sequence and return point

1. Register the three exact board names, source/approval hierarchy and 16/24/32/full profiles. Map existing assets and saved characters without overwriting them.
2. Reconcile live schema; implement immutable detail/state/voice/coverage records and scoped reference resolution. Extend existing character save/retrieve and scene snapshots.
3. Implement Detail Board and Cast Board authoring, state diffs, previous-state retrieval, scene intervals, approval display and bottom Save action after the complete visual/voice/reference fields.
4. Implement the 360 board as view assets plus coverage manifest and carousel. Configure eight heights; reuse approved compatible cells, generate only missing cells, and run per-view identity/camera/label QC.
5. Compile pinned reference manifests into actual provider inputs. Verify a single-character and ensemble case, change tracking, reload and ownership, continuation and camera pivot.
6. Connect Location Necessities, World Anchors, event/acoustic/physics/perception state and camera transforms. Use explicit evidence/uncertainty; preserve separate visual/audio controls and causal consequences.
7. Calibrate look/feel and bounded repeatable execution. Then resume the paused Boy and Red Balloon World State dissection: visible/off-screen/acoustic maps, horn uncertainty, rain/wind/light/water effects, avatar perception/reaction, camera continuity, causality and continuation capsule. Use the existing accepted clip and saved references.

## 13. Source register and retrieval boundaries

Current file contents were read on October 3, 2026. GitHub URLs below identify the inspected repository snapshots where available. Main-branch source reads matched the repository/search snapshot context; this was not a runtime certification.

| ID | Source | Evidence role |
|---|---|---|
| S1 | [VisionWeaver character-board-system-v1.md](https://github.com/estibancreations-svg/VisionWeaver/blob/b705cc01fffe8bdd0ffdded0231de30903491af6/standards/character-board-system-v1.md) | Canonical names, fields, 32/16 hierarchy, versioning, camera/carousel and approval rules. |
| S2 | [Dashboard character board contract](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/blob/4fc302b0523c42aa2577d66219e534c5ef248972/docs/architecture/VISIONWEAVER-CHARACTER-BOARD-SYSTEM.md) | Matching cross-system board contract. |
| S3 | [360-view-storyboard.md](https://github.com/estibancreations-svg/VisionWeaver/blob/b705cc01fffe8bdd0ffdded0231de30903491af6/standards/360-view-storyboard.md) | Redirect to canonical three-board standard; 32/16 profiles. |
| S4 | [Crossroads board registry](https://github.com/estibancreations-svg/VisionWeaver/blob/b705cc01fffe8bdd0ffdded0231de30903491af6/projects/creative-ip/crossroads-of-identity/boards/README.md) | Face locks, approved source asset IDs, legacy eight-view board, explicit pending/source-invented details. |
| S5 | [Representation and place-time standard](https://github.com/estibancreations-svg/VisionWeaver/blob/b705cc01fffe8bdd0ffdded0231de30903491af6/standards/representation-and-place-time-v1.md) | Corrected boy appearance, representation, ethnicity/accent separation, period-accurate landmarks/evidence. |
| S6 | [World physics and scene dissection](https://github.com/estibancreations-svg/VisionWeaver/blob/b705cc01fffe8bdd0ffdded0231de30903491af6/docs/architecture/WORLD-PHYSICS-AND-SCENE-DISSECTION.md) | Persistent world, acoustics, Avatar Conditioning, camera/physics/causality; outdated boy description flagged. |
| S7 | [Shot standard v1](https://github.com/estibancreations-svg/VisionWeaver/blob/b705cc01fffe8bdd0ffdded0231de30903491af6/standards/shot-standard-v1.md) | Pins, camera height/lens/angle, face/light/plate locks, age variants, source rules. |
| S8 | [world-model.js](https://github.com/estibancreations-svg/VisionWeaver/blob/b705cc01fffe8bdd0ffdded0231de30903491af6/apps/director-studio/src/world-model.js) and [balloon-world-state fixture](https://github.com/estibancreations-svg/VisionWeaver/blob/b705cc01fffe8bdd0ffdded0231de30903491af6/fixtures/balloon-world-state.v0.1.json) | Existing structural source and illustrative fixture, including null source asset and duplicate-ID mismatch. |
| S9 | [Production design v2](https://github.com/estibancreations-svg/VisionWeaver/blob/b705cc01fffe8bdd0ffdded0231de30903491af6/strategy/VISIONWEAVER-PRODUCTION-DESIGN-v2.md) | Appearance/voice/performance separation, events/toggles, continuity, calibration/autonomy; proposal status. |
| S10 | [v2.02 checkpoint](https://github.com/estibancreations-svg/VisionWeaver/blob/b705cc01fffe8bdd0ffdded0231de30903491af6/docs/releases/VISIONWEAVER-v2.02.md) | Existing implementation foundation and open acceptance boundaries. Test/deployment claims are recorded source statements, not rerun here. |
| S11 | [Corrected balloon production run](https://github.com/estibancreations-svg/VisionWeaver/blob/b705cc01fffe8bdd0ffdded0231de30903491af6/research/2026-10-01-balloon-representation-run.md) | Corrected reference lineage, master replacement, label/QC and handoff boundaries. |
| S12 | [Five Stations board and pilot lock](https://github.com/estibancreations-svg/-Five-Stations-Learning-Serie/blob/57df194d022718f56d40303dc03652f01809c369/projects/creative-ip/five-stations/docs/production/character-board-and-pilot-lock.md) | Reference locks, exact labels/text, calibration, provider/voice handoffs. |
| S13 | [Five Stations first-run QC](https://github.com/estibancreations-svg/-Five-Stations-Learning-Serie/blob/57df194d022718f56d40303dc03652f01809c369/projects/creative-ip/five-stations/docs/production/character-board-first-run-qc.md) | Approval for calibration versus remaining turnaround/scene acceptance. |
| S14 | [THELMA world physics contract](https://github.com/estibancreations-svg/-THELMA-AI/blob/7f929b7702e284604e1d3460330ed5f4a510b807/docs/integration/VISIONWEAVER-WORLD-PHYSICS-CONTRACT.md) | Versioned job inputs, ownership, orchestration, audit and uncertainty. |
| S15 | [Master cross-system specification](https://github.com/estibancreations-svg/Master-System-Buildout/blob/b698a9d1d260d268410a4378f2a8dd6444c6f1f5/02-SYSTEM-SPECIFICATIONS/VisionWeaver/WORLD-PHYSICS-AND-DISSECTION-CROSS-SYSTEM-SPEC.md) | Shared world domains and system boundaries. |
| S16 | [Logistics environmental/hazard model](https://github.com/estibancreations-svg/THELMA-Global-Link-Logistics/blob/69e32725b00fc7e1dcbd06b6a9509a489e4bc174/docs/architecture/ENVIRONMENTAL-PHYSICS-AND-HAZARD-MODEL.md) | Environmental fields, local disturbances, operational evidence boundary. |
| S17 | [Crossroads world integration](https://github.com/estibancreations-svg/Crossroads-of-Identity/blob/a4baf2e4b21a18da8859c2b9c2886655425f36a6/docs/VISIONWEAVER-WORLD-MODEL-INTEGRATION.md) | Project consumes canonical character/world/camera/causal state. |
| S18 | [Studio backend](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/blob/4fc302b0523c42aa2577d66219e534c5ef248972/supabase/functions/visionweaver-studio/index.ts) | Existing save_character, ownership/reference/version checks and generation snapshots. |
| S19 | [production-state.js](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/blob/4fc302b0523c42aa2577d66219e534c5ef248972/supabase/functions/visionweaver-studio/production-state.js) | Existing voice/scene field normalization and eight visible/audible categories. |
| S20 | [Scene setup UI](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/blob/4fc302b0523c42aa2577d66219e534c5ef248972/src/components/VisionWeaverSceneSetup.tsx) | Existing location/date/time/weather/camera/action/evidence authoring. |
| S21 | [September 30 v7 review](https://github.com/estibancreations-svg/VisionWeaver/blob/b705cc01fffe8bdd0ffdded0231de30903491af6/research/2026-09-30-v7-github-review.md) | Explicit missing original localized-avatar framework; other historical defects not treated as current. |
| S22 | [Dashboard world integration](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/blob/4fc302b0523c42aa2577d66219e534c5ef248972/docs/architecture/VISIONWEAVER-WORLD-PHYSICS-INTEGRATION.md) | Defined → implemented → connected → runtime verified → production certified evidence states. |

Current saved-file sources read:

| ID | Filename and exact file identity | Evidence role |
|---|---|---|
| L1 | `BOY_BOARD_INTEGRATION_TEST.md` — `libfile_16acef3632a88191851219377e8e5f61` | Older pending integration checklist; 32 rows, details, cast and actual runtime reference requirement. |
| L2 | `VISIONWEAVER_STOCK_AND_PRODUCTION_BUILDOUT_REVIEW_2026-09-27.md` — `libfile_05542a4368b08191bfaa1162b2775adb` | Persistent creative core, assets, scene continuation and untranscribed recordings; provisional assessment. |
| L3 | `VISIONWEAVER_STOCK_IMPLEMENTATION_READINESS_AUDIT_2026-09-30.md` — `libfile_c3bcc84b62088191be46c4f317da7aba` | Historical schema/validation boundaries and untranscribed-source status. Not current proof that older runtime defects remain. |
| I1 | `Marcus Reynolds 32-view 360 character board.png` — `libfile_5adf097094808191a86e6dcdc15db761` | Four-by-eight illustrated layout and details; visually inspected. |
| I2 | `Marcus Reynolds 24-view 360 board.png` — `libfile_2acc5493e70481918820e27f1c94dac6` | Three-by-eight illustrated alternative; visually inspected. |
| I3 | `Marcus Reynolds — 16-view 360 board.png` — `libfile_c122bb8bc0b88191a57baafc9a6ce1c7` | Eight eye-level plus selected elevated/lowered example; visually inspected. |

**C1 — recovered board conversation:** contextual retrieval places the board-name/eight-by-eight discussion and 16/24/32 proposals on September 30, 2026, followed by the user's 32-master/16-clothing selection. The conversation-title breadcrumbs show related material under September 22. A verbatim transcript resolving the timestamp/title mismatch was not retrieved. Requirements agree across the current contracts and retrieved selection; exact historical timestamps are not asserted as authoritative here.

**C2 — recovered Review And Update Systems List context:** October 3 discussion describes persistent geography/zones, visible/off-screen/acoustic entities, camera movement through an established world, environmental causality and the switch to Avatar State first. Retrieved excerpts also include earlier user completion reports and assistant descriptions. They do not establish independent deployment verification or a full transcript.

**Repository discovery scope:** 17 accessible repositories under `estibancreations-svg`: Master-dashboard-, Master-System-Buildout, MASTER_CEO_DASHBOARD, -HisMajesty0225-CEO-Dashboard, -THELMA-AI, reunion-os, VisionWeaver, content-that-builds, This-Is-Your-Life, Crossroads-of-Identity, Higgsfield-Integration-Layer, The-Arc, 52-Books-in-52-Weeks, OSIRIS, THELMA-Global-Link-Logistics, motive-next-deployment, and -Five-Stations-Learning-Serie. Owner-wide searches covered character boards, 360, avatar, World Physics, Location Necessities and World Anchors. Relevant contracts were read across seven repositories; search matches alone were not treated as full-file authority.

## 14. Stimulus, reaction, spacecraft, and enclosure extension — revision 1.1

**Current direction:** explicitly preserve split-second responses to explosions and hits; synchronize subjects, surrounding activity, effects and camera; attend to starship exterior detail and the differences between enclosed rooms and open spaces. This extension adds requirements to the existing three boards and their linked world records. It does not alter the board names or the coverage reconciliation.

### 14.1 Reference evidence and limits

The three supplied links were processed by automated scene analysis. The returned scene descriptions and timestamps are approximate review aids, not manually verified frame annotations, measured reaction times, camera solves, blueprints, or material identification. No universal reaction latency is inferred. Reported late events in the third clip, including hull cutting and intrusion, need direct frame verification before becoming acceptance fixtures.

| Reference | Reported sequence useful to this specification | Review status |
|---|---|---|
| [V1 — Matrix lobby material](https://youtu.be/iuslUzbJEaw) | Approximately 1:36–1:49: detector alert, guard approach, visible threat and reaction. Approximately 2:29–4:22: actors and guards use pillars; damage/debris accumulate; movement, reloads and close combat lead into quieter breathing and departure. | Automated descriptors; these broad intervals do not establish exact contact or reaction frames. |
| [V2 — Vader / Pinhead reference](https://youtu.be/Km91UtrSWx8) | Approximately 0:00–0:07: large geometric ship, luminous engines, smaller craft and background structure. Approximately 1:10–2:07: controls, doors, vent discharge, chamber operation and helmet removal. Later room combat reports sparks, panels, debris and extraordinary powers. | Exterior component counts, dimensions, mechanisms and physical pathways unverified. Fictional powers require authored rules. |
| [V3 — red-dress / ship material](https://youtu.be/YgJ5ZEn67tk) | Approximately 0:35–0:50: attention captured by a salient person, turn and threat reveal. Approximately 2:40–3:58: ship exterior in a rocky enclosure, cockpit activity, vibration, screens, landing and power-state changes. | An exterior shot here is in a tunnel/chamber; it must not automatically receive vacuum behavior. Crowd freeze is an authored exception. |

Analysis provenance: V1 job `fe0f2b56-4e52-4821-8ce6-a9efc9479593`; V2 successful job `06101aaf-934a-4d47-a863-86e3894ccffb`; V3 job `83fb1920-2837-43f6-9747-79b7bb343140`. Preserve original link, analysis version/result, reviewer corrections and observation confidence with each derived requirement. These references illustrate behavior; they do not supply canonical character identities or replace approved Avatar State assets.

### 14.2 One causal event, separate arrival and response times

**Design decision:** use a common scene clock with explicit source-media time and edit/playback mapping. Each event can have several paths to a subject. Store unavailable times as unknown; distinguish unknown from a pathway that is absent.

| Record/field group | Required content |
|---|---|
| Event origin | Event ID, cause/parent IDs, source entity, world position and direction, event type, start/end scene times, physical or authored rule version, evidence and confidence. |
| Emission and contact | Separate visual emission, sound emission, direct-contact time, affected body/prop part, contact point/normal, incoming direction and mechanical displacement onset. Pressure or structural effects have their own arrival times when relevant. Do not collapse everything into one explosion timestamp. |
| Propagation | Subject/listener ID, source-to-subject path, medium, distance or explicit unknown, occluding boundaries and their states, acoustic arrival, structural transmission/pressure arrival where modeled, attenuation/filtering and uncertainty. |
| Perception | Available visual/auditory/tactile cues, visibility/hearing conditions, attention target, detection time, recognition/interpretation time if authored, expectation and reason a cue was missed. Camera visibility does not prove subject awareness. |
| Response | Mechanical motion, protective reflex, gaze/head turn, startle, balance correction, deliberate action, vocal response and recovery have separate onset/duration fields. Identify the triggering cue/event for each response. Pain behavior is authored performance; it is not established by contact alone. |
| Secondary effects | Clothing/hair motion, prop release, debris, dust, localized vapor, light flashes, alarms, crowd responses, damage, injuries and persistent state deltas, each linked to its cause and affected entities. |
| Camera and mix | Camera position/orientation, tracking target, trigger and movement interval; camera shake source or declared editorial effect; diegetic sound versus score/editorial accent, mix listener and perspective. |
| Timing evidence | Source clip/version, frame rate/timebase or unknown, reference frame range, observed interval, authored target interval, timing tolerance and reviewer decision. Slow motion, time freeze and cuts require an explicit time mapping and entity scope. |

Contact-driven displacement starts from the contact event in the physical model; protective anticipation can precede it if triggered by an earlier cue. Hearing-driven responses must depend on sound arriving and being perceived, not merely on an off-screen source starting. Do not force every subject to react together: attention, position, obstruction, training, ongoing task and authored performance can differ. Do not invent a fixed millisecond delay for all people.

A hit must connect the incoming trajectory, contact point, body displacement, clothing response, contact sound, released objects and subsequent condition. Preserve anatomical side across angles. An explosion can produce visual, acoustic, pressure and debris effects with different arrival paths. A character can see a flash before hearing it, feel transmitted vibration, fail to notice it, or continue acting under an approved fictional rule. Each choice must have a causal explanation or a declared cinematic exception.

### 14.3 Enclosed rooms, open atmosphere and vacuum

| Spatial domain | Required world state and continuity |
|---|---|
| Enclosed room / compartment | Geometry, walls/floors/ceiling and material evidence, openings/door states, air/pressure regime, ventilation sources, gravity rule, fixtures, lighting, sound paths and reflective/absorptive treatment. Track restricted movement, cover, collision and routes. Local vapor has an emitter, start/stop and dispersion policy; it is not generic fog that appears everywhere. |
| Open atmospheric exterior | Ground and landmarks, skyline/sightlines, weather/wind, available movement space, shelter/occlusion, sound paths and reflecting structures. Hair/clothing, airborne debris and smoke use the same local wind/state. “Open” does not mean silent or reflection-free. |
| Vacuum exterior | Declare medium as vacuum. Do not create an airborne acoustic path across it; separately label audience-facing engine/explosion sounds as cinematic sound design. Interior noise, structural vibration and communications remain separate pathways. Apply declared gravity/propulsion rules rather than Earth defaults. |
| Tunnel, hangar or large chamber | Classify by actual enclosure, openings and medium, not by whether the camera is outside the ship. Store clearances, potential contact surfaces, connected spaces, lights and acoustic paths. |
| Door/window/breach transition | Pin connected zones and boundary versions. Changes can affect visibility, movement, lighting and sound; pressure/airflow consequences require known initial conditions and an explicit model. An explosion alone does not establish a hull breach. |

Sound requires a propagation medium and does not travel through a vacuum; see [NASA, Anatomy of an Electromagnetic Wave](https://science.nasa.gov/ems/02_anatomy/). This physical constraint is separate from the soundtrack choice. Exact reverberation, pressure, temperature and propagation values remain unresolved until measured, researched or explicitly authored. Do not assign them from visual mood.

### 14.4 Starship exterior and activity continuity

**Design decision:** register the ship as a persistent world entity with a versioned exterior reference pack, interior zone graph and operational state. Require hull silhouette/proportions, orientation axes, surface regions, visible panel/seam layout, windows/lights, engines/thrusters, openings and damage where evidenced. Record observed versus authored component identity, counts, scale, materials and function; unavailable blueprint details remain unknown.

Use ship-relative transforms for hull components and interior fixtures, world-relative transforms for ship travel, and separate camera transforms. Apparent screen movement must resolve into camera movement, ship movement and other craft movement. Escort/nearby craft and background stations have their own IDs, trajectories, relative separation and occlusion; they cannot drift as decorative textures or change scale between cuts without a supported perspective change.

Thruster illumination/effects, maneuvering, cockpit actions, monitor changes, engine shutdown, landing and cabin vibration link through an operational event graph. Synchronize them to declared machinery behavior without assuming an exterior engine flash immediately shakes every room. Establish which compartment contains each action; preserve crew stations, hand/control contacts, access routes, door operation and fixture positions across camera reversals.

Localized flashes illuminate nearby surfaces/avatars according to the authored light state; damage persists into later exterior and interior shots when causally connected. Debris and small craft paths must respect hull geometry. Surface detail cannot regenerate differently merely because the shot changes height or angle. The ship reference pack is linked world infrastructure, not a fourth character board.

### 14.5 Board mapping and change tracking

- **Character Detail Specifications Board:** add approved perception/response ranges and movement constraints, bodily injury/condition consequences, suit/helmet/equipment effects on sensory access, breathing and voice processing, and authored exceptions. Preserve accent and voice identity separately from room acoustics, radio/helmet processing and momentary delivery.
- **A Cast Board:** each scene entry pins its incoming state, zone/transform, task/attention, available cues, response event IDs, contact/prop state and outgoing injuries, clothing/hair changes and physical condition. Surrounding entities need individual or explicitly grouped reaction policies; foreground and background remain on the common clock.
- **360 View Board:** pins the same appearance and anatomical details during camera changes. Coverage imagery anchors identity; it does not prove reaction timing, mechanics or geometry. Scene damage creates the required revised appearance/coverage state under existing 16/32/full rules.
- **History:** edits to an event, contact, boundary, path, attention cue or operational rule create scoped revisions and mark dependent reactions, audio, effects, camera moves and continuation capsules stale. Preserve prior approved scenes. Muting a soundtrack layer does not remove physical stimulus; removing a world sound source can invalidate hearing-driven responses. Removing a hit/explosion requires reviewing resulting injury and damage.

### 14.6 Additional acceptance criteria and unresolved evidence

| ID | Acceptance criterion | Required evidence |
|---|---|---|
| AS-21 Event synchronization | All reviewed action/reaction/effect/camera records use one scene clock with explicit edit/slow-motion mapping. | Event timeline and frame annotations for a hit and an explosion; approved tolerances for the actual frame rate. |
| AS-22 Perception causality | Hearing-driven reactions follow arrival/perception; early protective motion identifies an anticipatory cue. Subjects can respond differently with recorded reasons. | Near/far or occluded listener case, visual anticipation case and attention/missed-cue case. |
| AS-23 Contact coherence | Trajectory/contact, body motion, sound perspective, hair/clothing, released props and injuries agree through alternate angles and continuation. | Reviewed contact frames and before/after state versions; no mirrored injury side. |
| AS-24 Spatial domains | Enclosed, open atmospheric, vacuum and tunnel/large-room cases resolve by medium and boundaries. | Boundary/zone manifest, explicit vacuum audio treatment and one door-state dependency test. |
| AS-25 Ship continuity | Exterior silhouette/components, interior fixtures and other craft persist across camera changes. | Approved ship pack, relative transforms/trajectory references and interior/exterior comparison; unknown measurements flagged. |
| AS-26 Operational response | Controls, machinery states, lights, ventilation, motion and crew reactions follow approved causal links. | One control-to-machine-to-crew event trace; a local effect must not appear globally without a modeled path. |
| AS-27 Persistent aftermath | Damage, injuries, debris, dust, prop possession and operational state carry into subsequent shots. | Approved endpoint/capsule and next-shot comparison, including quieter aftermath. |
| AS-28 Event revision | Changing a cause or boundary identifies affected reactions/effects/mix/camera while retaining historical approvals. | Scoped dependency diff and regenerated/re-reviewed affected outputs; audio-only mute leaves physical cause intact. |

**GAP-13 — precise video timing:** no decoded frames, verified frame rates, contact/awareness annotations or measured reaction latency are available from the automated results. Exact split-second acceptance requires that evidence; broad scene timestamps cannot certify it.

**GAP-14 — ship and enclosure calibration:** ship class/blueprints, measured component counts/dimensions, interior-to-exterior mapping, acoustic material properties, pressure/airflow states and extraordinary-power limits were not verified. Implement the fields and authored-rule controls; withhold physical/calibration certification until evidence or explicit approved design values exist.

Revision 1.1 adds this extension while preserving the existing board contracts, representation requirements, coverage holds, source boundaries and completed production work.