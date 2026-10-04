# Character Identity Board System v1

**Expanded contract — October 3, 2026:** [Avatar State v1.1](avatar-state-board-specification-v1.1.md) governs the latest full height-and-angle request and adds 64 indexed slots (eight directions × eight configured heights), scene/performance/world/camera/event fields, reference lineage, scoped change tracking and AS-01–AS-28. Exact eight-height calibration is unresolved. Existing approved 32 masters remain usable; 16 is the wardrobe-only default; 24 is an archived study. The historical 32/16 rules below must not label incomplete coverage as full. The [children's animation standard](children-animation-production-standard-v1.md) adds performance/teaching contracts and CA-01–CA-15.

**Approved by Sire on 2026-09-30. Applies to VisionWeaver, connected production records, Runway reference generation, and the CEO Dashboard character workspace.**

This system separates canonical character identity from scene-specific cast usage and production-state changes.

## The three boards

### 1. A Cast Board

The Cast Board is the **multi-character scene board**. It remains the board used for scene fallout and production assembly.

For each scene, it shows:

- every character present in the scene;
- the approved avatar image used for that scene;
- character name and stable character ID;
- reference to the Character Detail Specifications Board;
- reference to the active 32-view master or 16-view state board;
- wardrobe, hair, makeup, injury, prop, expression, and voice/accent state;
- the scene ID, shot range, time period, location, and continuity notes;
- any approved deviation from the character's canonical identity.

Examples of scene-specific cast states:

- Marcus Reynolds — brown suit;
- Marcus Reynolds — blue suit;
- Marcus Reynolds — unshaven;
- Marcus Reynolds — robe;
- Marcus Reynolds — black eye;
- Marcus Reynolds — broken nose;
- Marcus Reynolds — shadow beard or other approved facial-hair state.

The Cast Board is allowed to change from scene to scene. It must never become the only source of truth for a character's identity.

### 2. Character Detail Specifications Board

The Character Detail Specifications Board is the **canonical detail source** used to build the character's avatar boards.

It records:

- identity anchors and facial geometry;
- skin tone, pores, texture, and complexion;
- eyes, brows, nose, lips, ears, teeth, and facial hair;
- hairline, haircut, beard state, and allowed variations;
- body build, height, proportions, hands, posture, and gait;
- scars, tattoos, moles, broken bones, injuries, and other continuity marks;
- default wardrobe and individual clothing components;
- accessories, jewelry, glasses, shoes, and signature props;
- voice, accent, speech pattern, and performance notes;
- prohibited drift and details that must not be invented;
- approved reference images and provenance;
- revision history and approval status.

This board is the anchor. Text describes the character, but the approved visual reference outranks descriptive shorthand.

### 3. 360 View Board

The 360 View Board is the individual character reference board used for camera placement, continuity, and generation anchoring.

#### Default: 32-view master

Every new canonical character appearance is created as a **32-view master**:

| Row | Coverage | Purpose |
|---|---|---|
| Row 1 | 8 eye-level azimuth views | Standard rotation: front, front-right, right, back-right, back, back-left, left, front-left |
| Row 2 | 8 high-oblique views | Shows the character from elevated camera positions without a direct overhead view |
| Row 3 | 8 low-oblique views | Shows the character from lowered camera positions without a direct underside view |
| Row 4 | 8 extreme-oblique views | Provides additional camera and body-continuity detail while remaining oblique |

All 32 panels use the same character state, scale, lighting, backdrop, wardrobe, and identity. The board includes close details for face, eyes, skin texture, hands, hair, facial hair, injuries, wardrobe, accessories, and signature props.

The 32-view master is the default source for:

- new character creation;
- major visual changes;
- injury and physical-continuity changes;
- hair, beard, makeup, or facial-texture changes;
- difficult camera coverage;
- carousel and reference-sheet production.

#### Controlled variant: 16-view state board

A 16-view state board is used when the character's canonical identity and physical features are unchanged and the production change is limited, such as:

- clothing or wardrobe;
- an approved accessory;
- a scene-specific prop;
- a controlled expression or posture;
- a minor look adjustment that does not change identity anchors.

The 16-view state board contains:

- 8 eye-level azimuth views;
- 8 controlled high/low oblique views;
- the changed wardrobe or state clearly identified;
- links back to the canonical Detail Specifications Board and 32-view master.

If a change affects the face, hair, facial hair, skin texture, injury, body, or any identity anchor, create or revise the 32-view master instead of using only a 16-view state board.

## Versioning and references

Never overwrite a locked board silently. Use a stable state identifier:

    <CHARACTER_ID>__<SCENE_OR_STATE>__v<NUMBER>

Examples:

- MARCUS-REYNOLDS__MASTER__v01
- MARCUS-REYNOLDS__BROWN-SUIT__v01
- MARCUS-REYNOLDS__BLACK-EYE__v01
- MARCUS-REYNOLDS__UNSHAVEN__v01

The Cast Board references the active state. The active state references the Detail Specifications Board and either the 32-view master or the 16-view variant. Previous approved states remain available for continuity and rollback.

## Generation and approval rules

1. Build from the Detail Specifications Board.
2. Use the approved 32-view master for new or materially changed identities.
3. Use a 16-view state board only for clothing-only or limited non-identity changes.
4. Add the state to the Cast Board for the scene where it is used.
5. Lock the generated reference before using it for key frames or motion.
6. Preserve the last approved face, skin, hair, and injury close-ups as the comparison reference.
7. Record the change type, scene, shots affected, approver, date, and source asset IDs.
8. Never let a prompt silently change a locked identity anchor.

## Camera and carousel use

The 32 panels are deliberately suitable for carousel publication and production review. The board may be exported as:

- a full 32-panel master sheet;
- four 8-panel carousel cards by elevation row;
- detail cards for face, texture, hands, wardrobe, and injuries;
- a scene-specific Cast Board card with only the active state.

## Naming

Use these exact user-facing names:

- **A Cast Board**
- **Character Detail Specifications Board**
- **360 View Board**

The filename may retain technical qualifiers such as v1, master, state, or scene, but the visible title must use the names above.