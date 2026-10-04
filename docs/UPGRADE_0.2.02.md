# Design Studio 0.2.02 — connected authoring expansion

Prepared October 4, 2026 UTC (October 3 in America/Chicago when this request began).

The Architect requested a much deeper redesign of every page and each section, with potential tier levels. “150x” is the creative ambition, not a measured performance claim. This release builds on the preserved 0.1.02 source and original V1/V2 concepts. The approved navy, charcoal, violet, and cyan direction remains. Original art and established character identity are not replaced.

## What is delivered

Eleven navigable pages share one project model, one visual system, one history, and one review process. Saves, reference links, cast placement, timing, and draft exports are functional. The interface describes actual authoring state. It does not simulate sales, provider connections, completed renders, or verified permissions.

| Page | Section changes | Working result |
|---|---|---|
| Studio | Project counts; scene collection; reusable character shelf; cast-aware stage; event timeline; scene inspector; next review item; compiled brief | Switch scenes, add a character instance, drag or keyboard-position cast, rehearse timing, export the project or brief |
| Avatars | Searchable catalog; identity form; identity editing lock; appearance state; voice origin/age/language/accent; exact dialogue; 360 reference matrix; calibration; Cast Board; rights; lineage | Save character revisions, create a linked 16-view wardrobe variant, author 16/24/32/64 coverage, record reference links and per-height calibration, inspect scene revision use |
| Scenes | Multi-scene collection; duplication; five space types; cast instances; props; world anchor/date/weather/ecology; camera lens/movement/frame shape/rate; incoming and outgoing continuity | Author multiple scenes, positions, roles, cast state, prop direction, and continuity; intentionally update pinned revisions |
| Performances | Reusable motion-direction starters; five-track timeline; exact cue sheet; assigned performer; prerequisite; dialogue; voice handoff | Create/edit/remove cues, reject out-of-range timing and broken prerequisites, preview active cue labels with a scrubber |
| Effects | Real time, time stretch, orbit freeze, selective time; interval/rate/sound treatment; subject notes; 11 environmental layers | Calculate time-stretch editorial duration; save atmosphere toggles/levels and place-specific ecology; retain story timing |
| Review | Derived issues; filter; changed-cast-revision warnings; reference/calibration gaps; world/continuity gaps; director notes; brief export | Recalculate from actual records, save decisions, export a review list, compile the selected scene’s direction brief |
| Store | Catalog overview; private package drafts; category; description; exact deliverables; compatibility; proposed license scope | Create and edit listing preparation records; no public listing or checkout |
| My licenses | Rights holder/source/scope/evidence/expiry; cloud account/workspace tools; portability; protection summary | Save unverified rights records, import/export complete drafts, use the existing authenticated cloud API when configured |
| Connections | Searchable provider cards; intended use; official documentation; setup notes; local API status; MCP description | Save non-secret setup notes and refresh the application API status; provider verification remains separate |
| Design history | Timestamped checkpoints; field comparison; restore as new draft; original concept gallery | Compare and restore revisions, retain the prior project during import, undo saved edits during the session |
| Plans & tiers | Creator, Studio, Enterprise concepts; common quality principles; remaining commercial work | Select a planning tier without billing, entitlements, or feature restrictions |

## The model improvements behind the screens

### Identity, appearance, voice, and references

A character has a stable ID, numeric revision, explicit source lineage, independent voice direction, and reference records. Wardrobe variants receive new IDs and link to their source identity. Body anchors, representation, and other identity fields are copied; references are cleared because a changed appearance needs its own evidence. Wardrobe variants default to 16 views. The canonical master defaults to 32. A 24-view study remains available; full coverage is 64 cells with eight independently recorded camera-height rows.

Reference cells contain an HTTPS link and notes. A linked cell does not mean an asset was fetched, rendered, reviewed, or approved. Calibration records height, pitch, and distance. Zero production-approved views is still the correct status until an actual asset verification pipeline exists. Changing the planning profile preserves reference records outside its active cell range, allowing a later return to the larger profile.

Identity lock is a local editing aid. It is not server authority, a biometric guarantee, or moderation. Production endpoints remain closed independently.

### Scene continuity

Each scene holds multiple cast instances with their requested character revision, blocking position, facing, role, incoming state, and outgoing state. A changed character revision creates a review item. Updating that revision is an explicit action. Current compiled briefs disclose both the requested revision and the present revision, preventing a silent claim that an old state was faithfully reproduced.

The application does not yet retain a server-normalized immutable asset graph for every character revision. Pinned revision numbers are discrepancy detectors, not a substitute for retrieving the exact historic generated asset. Connecting that retrieval is required before autonomous rendering.

Props carry positions and contact notes. Scene-level continuity captures held objects, wardrobe, injuries, off-screen causes, weather, lighting, and camera state. Location and ecology are authored fields; no geographic verification or species inference is claimed.

### One clock, explicit dependencies

Every cue declares a track, performer when relevant, start, duration, optional prerequisite, and direction notes. The editor rejects cues outside scene duration, missing prerequisites, cycles, and a dependent cue starting before its prerequisite finishes. Sound muting changes authored sound intent; it does not delete a causal event.

Timing playback highlights the active cues and supports scrubbing. It does not animate a rig or synthesize audio. Time Stretch computes editorial duration from a selected interval and rate while preserving story cue positions. Orbit Freeze and Selective Time retain the required shot direction without pretending to execute unsupported temporal physics.

### Saving and recovery

The previous local storage key is preserved. Legacy single-scene projects are migrated to the new multi-scene schema. Changes use an atomic serialize/store/assign pattern: if browser storage rejects a save, the live project is not replaced with a falsely saved version. A corrupt legacy draft receives a recovery path before replacement.

Up to 30 complete local checkpoints are retained; the session undo stack retains 20 prior states. Export excludes recursive history. Imports are limited to 2 MB, require the Design Studio format, reject missing/duplicate identity references, and keep a pre-import checkpoint. Browser persistence is device/origin specific. Standalone and embedded origins do not automatically synchronize.

The existing cloud database has a 64 KB draft-document limit and remains unchanged. Oversized cloud saves are rejected with an explicit export fallback. All eight existing `ds_*` tables and their RLS policies are preserved. This release does not certify OAuth provider-console configuration or a newly authenticated cloud deployment.

## Product tiers: a proposal with a coherent core

| Tier | Primary customer and outcome | Intended differentiation |
|---|---|---|
| Creator | Individual storytellers defining a reusable cast and first scenes | Focused creation, manageable catalog/usage quotas, transparent provider-credit options |
| Studio | Small teams and ongoing productions managing multiple scenes | Shared review, production collaboration, higher measured usage, reusable production packages |
| Enterprise | Agencies, schools, production companies, and licensees | Organization controls, reviewed white-label options, deployment choices, SSO, audit export, API orchestration, support agreements |

All current local authoring tools remain available for evaluation. The selection is only a planning preference. Pricing requires measured storage, rendering, moderation, support, and provider costs. Do not invent margins, conversion claims, revenue, or paying customers. Safeguards, provenance clarity, and export portability belong in every tier.

Standalone subscriptions, hosted service leases, implementation/support, and asset licensing are distinct products. Preserve the repository’s existing MIT license; private assets and hosted services need their own reviewed terms. No existing code rights are revoked by choosing a tier.

## Next production depth, by section

These are explicit integration work, not part of the completed browser authoring claim.

1. **Avatar identity:** persist immutable normalized identity revisions; bind approved images to exact revisions; expose a visible identity-change diff before generation.
2. **Appearance:** approved source-image upload, carryover snapshots, wardrobe-specific comparison, body/complexion drift review, and exact product variant verification.
3. **Voice:** consented voice binding, provider voice ID, measured sample, pronunciation lexicon, immutable exact dialogue, aligned transcript, and a reusable approved profile.
4. **Reference boards:** calibrated capture/generation jobs, per-cell receipts, visual inspection, rejection reasons, missing-cell retry budgets, and multi-view consistency evaluation.
5. **Cast Board:** frozen revision/asset retrieval; automatic outgoing-to-incoming comparison; scene fallout; explicit prop ownership; injury and wardrobe carryover.
6. **World:** sourced place/time, actual room/ship geometry, enclosure/acoustic distinctions, local birds and insects, weather/light evidence, and off-screen activity.
7. **Camera:** actual pose calibration, framing checks, collision/occlusion review, camera-focus changes when important events occur, and provider-specific camera translation.
8. **Performance:** licensed motion packages, rig/body-plan compatibility, physical contact evidence, stimulus arrival/perception/reaction measurements, and approved repeatable movements.
9. **Effects:** provider-tested editorial retiming, depth-aware orbit, selective subject-rate dependencies, motion/audio treatment, and recovery-state verification.
10. **Review:** assigned reviewers, actual media comparisons, measurable acceptance criteria, signed decisions, exact tested asset/commit linkage, and evidence retention.
11. **Store:** asset ingestion and moderation, verified redistribution rights, signed file manifests, delivery tests, checkout, entitlements, refunds, seller onboarding, and payouts.
12. **Connections:** account scopes, secret-reference storage, capability probes, provider receipts, retry/timeout budgets, and cost capture.
13. **Enterprise:** tenant role administration, trusted immutable audit export, quota enforcement, monitoring, backup recovery evidence, and contract-specific release approval.
14. **Autonomy:** approve look and feel; lock permissible inputs and spend; automate only within that scope; route identity drift, missing rights, untested effects, or repeat failures back to review.

Avatar State remains the active foundation. The approved balloon clip and paused world-state dissection/extension workflow remain intact. Once Avatar State is validated, resume world, sound, weather/light, off-screen entities, camera causality, and clip continuation from the existing successful output.

## Verification

See [VERIFICATION_0.2.02.md](VERIFICATION_0.2.02.md). Browser checks cover actual interactions, not only HTML presence. Tests retain the existing authentication and production gates while adding migration, cue causality, revision warnings, export round trips, import validation, and hosting routing.
