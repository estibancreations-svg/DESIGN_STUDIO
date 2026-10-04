# Avatar Catalog — VisionWeaver product specification v1

**Date:** October 3, 2026 (America/Chicago)  
**Status:** Implementation-ready catalog design; no catalog runtime or item listing is asserted to be deployed.  
**Owner:** VisionWeaver. **Related contracts:** [Avatar State three-board specification](avatar-state-board-specification-v1.1.md), [children's animation production standard](children-animation-production-standard-v1.md), [character board legacy contract](character-board-system-v1.md).

## Purpose and navigation

Add **Avatar Catalog** as a separate top-level section of VisionWeaver, linked from Cast & avatars and the scene editor. It is the searchable library and lifecycle workspace for reusable people, animated characters, creatures, voice and performance profiles, appearances, reference sets, and product-linked wardrobe. The three named boards remain the editing and review surfaces for each character. The Catalog indexes their approved versions and dependencies across projects; it does not silently replace their authority.

A director can search an avatar, inspect a clear identity card, compare approved and candidate versions, see where it appears, choose an approved state for a scene, and inspect a linked wardrobe item. Entry points: **Catalog → Character → Detail / 360 / Appearances / Voice & Performance / Scenes / Products / History**; **Scene → A Cast Board → selected Catalog character and pinned state**. Search and filters include universe/project, role, medium/style profile, lifecycle status, coverage profile, source/rights status, garment and product, date/story period, voice/language, and changed/stale uses. Virtualize large grids and page history; do not load every asset for every character into one view. Authorized users see only projects and assets within their access scope.

## Ownership and record boundaries

| Record | Required information | Relationship |
|---|---|---|
| `CatalogCharacter` | Stable `character_id`, display name/working label, aliases, universe and project scope, character type/species/body plan, role, provenance, source classification, rights/consent status if applicable, owner, timestamps, approval state, active detail version, thumbnail asset ID | One identity, many independently versioned states and uses. Search aliases never merge identities automatically. |
| `IdentityDetailVersion` | Exact Character Detail Specifications Board version; physical anchors, dimensions with units and source, skin/face/hair/facial hair, eyewear, distinguishing marks, baseline wardrobe, permitted changes, voice/accent source, approved reference assets and hashes, approvals | Canonical detail authority. A catalog card summarizes this version. |
| `AppearanceState` | Parent detail/master, changed fields, wardrobe items and variants, grooming, accessories, injuries, physical changes, temporal validity, source assets, status, approver | Can be reused only within its approved scope. Scene-specific states and transitions are explicit. |
| `CoverageSet` | Exact 360 View Board version and 16/24/32/full-64 profile, cell manifest, actual assets, camera geometry, calibration, missing/approved cells | A count is never a full-coverage claim. 24 stays historical/intermediate; 16 is wardrobe-only default; 32 is the approved master profile; 64 means eight configured heights × eight angles. |
| `VoicePerformance` | Voice version, language and authored accent/delivery, sample/rights, pronunciation, rig/expression/locomotion references, motion constraints, version and approval | Accent is never inferred from race or origin. |
| `SceneUse` | Project/scene/shot/time, instance ID, pinned Cast Board and state versions, selected camera references, world anchor, event reactions, continuity in/out | Each use links back to immutable catalog versions. |
| `WardrobeItem` | Item ID, type, visual specification, color/material/fit, state and coverage uses, source, version, approval, product relationship | Visual specification and merchant listing remain separate. |
| `ProductLink` | Product ID, merchant, user-supplied URL, normalized destination, marketplace/region, product identifier/variant if verified, exact selected size/color if verified, title provenance, visual-match status, availability/checked-at, commercial relationship/disclosure status, link owner, rights/review status, version | A purchase link can exist before a visual match is approved. Do not claim affiliation, price, stock, or a specific variant without evidence. |
| `ChangeEvent` | Actor/time, reason, source, before/after IDs and hashes, changed fields, approval, affected board/scene/render/product links, invalidation and rollback | Append-only audit trail for every consequential change. |

Only the exact approved versions can become production inputs. Search indexes and thumbnails are derived views, never new sources of truth. A state must retain identity, detail, coverage, voice/performance and product provenance as independent pinned references. Record display ages separately from story dates and actual biographical claims. Do not infer a person's likeness or speech from demographic text alone.

## First Catalog example — working record, pending visual approval

| Field | Supplied value or explicit status |
|---|---|
| Catalog label | `AA-CHICAGO-M47-01` (provisional identifier; no personal name supplied) |
| Representation | African American man; age 47; originally from Chicago, Illinois |
| Body | 5 ft 11 in (180.34 cm); 302 lb (about 137 kg). Preserve an adult fat body and the approved silhouette across all angles; these numbers alone do not determine body geometry. |
| Head and face | Trimmed haircut and beard; glasses. Hair texture, exact cut/line, beard outline, facial geometry, complexion, skin detail, glasses model and prescription are **unset**, pending approved visual references. |
| Clothing | Sweat suit (color, cut, fabric, logos, sizing and layers **unset**); white active shoes. |
| Footwear product candidate | User-supplied label: “Poramea Unisex Loafers Walking…”; URL: https://www.amazon.com/dp/B0BGLDDZ9N?ref=ppx_pop_mob_ap_share ; normalized destination: https://www.amazon.com/dp/B0BGLDDZ9N ; ASIN string `B0BGLDDZ9N` from the URL. Exact variant, image, color, size, price, seller, stock and compatibility with “white active shoes” **unverified**. |
| Voice and behavior | No accent, voice sample, gait, personality, dialogue, injury, scars or scene assignment provided. “Originally from Chicago” is biographical context, not an automatic accent directive. |
| Reference and approval | Text-only intake; no licensed/approved portrait, voice sample, 32-view master, configured 64-view expansion, or scene state supplied. **DRAFT — cannot be rendered as an exact real person's likeness or used as an approved anchor yet.** |

The example is a representation brief, not a claim that a particular named individual was identified. If the intended person is real, add a likeness/voice source, scope and authorization before creating/reusing identifiable references. If fictional, record that classification and approve an original design. Capture fit and drape on a broad body without slimming, genericizing the face, lightening skin, removing glasses, or changing beard/hair after approval. Review front, sides, back and oblique views in full-body scale, plus glasses, beard, garment seams and footwear details. The shoes must be modeled from an approved item reference or a clearly labeled original approximation; a URL alone supplies no reliable visual geometry.

## Product placement and direct purchase path

1. **Register:** Store the original URL exactly and a normalized merchant destination separately, retaining the submitter and date. A merchant URL is a destination and provenance lead, not a downloaded product image or visual proof.
2. **Verify:** Resolve the merchant listing and selected variant with evidence and checked-at time. Record merchant, product title, white color, shape, size and material only if actually observed; mark mismatches between the listing and the character brief. A link that is inaccessible stays `UNVERIFIED`, and the visual item stays pending.
3. **Connect:** Attach `WardrobeItem → ProductLink` and pin both versions to the appearance state; photograph/asset use requires its own source and rights record. If the product changes, keep the historical shot's item/version rather than replacing it in old scenes.
4. **Show:** The viewer-facing product card opens the direct merchant URL, with accurate product name, the variant actually depicted, clear commercial disclosure when applicable, and an availability caveat sourced to the last check. The creative frame must work without the link. Product cards, captions or a companion shopping panel can carry the destination; never present an unchecked match as “shop this exact look.”
5. **Measure:** Record click destination, campaign/scene/shot and product-link version with privacy controls. Purchase or commission attribution requires actual merchant/affiliate reporting; clicks alone are not sales. Keep referral/affiliate parameters only when supplied and authorized. No affiliate account, commission relationship or tracking integration is evidenced by the supplied link.

The supplied Amazon page could not be opened by the research tool and exact-ASIN searches yielded no reliable matching listing during this draft. The link is therefore captured as user-provided and **unverified**. Do not substitute a different Poramea listing or infer that the linked item is currently white.

## Workflow and change propagation

1. Create a draft Catalog entry and classify fictional/source-derived/real-person status. Record the user's supplied details and unknowns separately.
2. Build and approve the Character Detail Specifications Board, visual/voice sources, and rights scope. The face/body, glasses, grooming and voice become locked only when a specific revision is approved.
3. Build the 360 View Board: approved 32-view master for a new appearance; add the full 64-cell profile once all eight camera-height presets have been configured and approved. Generate selected shots from valid coverage; a 16-view wardrobe variant may inherit the pinned master. 24 is not a full profile.
4. Create versioned appearances and attach wardrobe items and product links. When the sweat suit or shoes change alone, make a garment diff/state; hair/beard, face, body, injury or other physical changes trigger a revised master and dependent coverage review. Accent or voice changes version voice separately.
5. Add character instance(s) to A Cast Board for the particular scene/shot, with location and camera pin, chosen reference cells, clothing, physical condition, actions and reaction timing. An impact or explosion changes knowledge/posture/injury only after the authored stimulus/contact event, with sound propagation and visibility checked against world geometry.
6. Before rendering, validate the complete shot→cast→appearance→detail/master→view chain, reference and rights scope, item variants, and world/camera anchors. Preserve provider task receipts and exact transmitted references. Changing a product URL updates its link version and product card; it does not silently alter locked pixels. Changing visible footwear marks relevant appearance coverage and scenes stale for review. Rollback restores exact prior versions.

Approval and lock are explicit transitions. A candidate image, imported page, listing screenshot, or completed render cannot promote itself to approved identity. Existing approved output remains historically valid but dependent uses are flagged stale when source versions change. Resolve conflicts at the smallest affected scope and preserve audit history.

## Acceptance criteria

- The top-level **Avatar Catalog** is separately navigable, searchable at scale, access-scoped, and deep-links to the three named boards, state history, scenes and products. Reloading a saved entry returns the same pinned versions.
- The example entry displays every supplied attribute exactly, labels missing facial/voice/garment details as unknown, and cannot pass a production approval gate with only text and an unverified product URL.
- Selecting an approved state in a scene records the exact Cast Board, Detail, CoverageSet, ViewAsset, VoicePerformance and product versions used; output records actual provider inputs.
- Wardrobe-only changes permit a scoped 16-view variant; hair/beard, body, face and injury changes invalidate affected master/coverage uses. A 32-cell board does not show a 64-complete badge; 64 acceptance awaits calibrated height definitions and all approved cells.
- A product card retains the submitted and normalized URLs, reports verification/variant state, opens the merchant destination, and does not assert sales or affiliation from clicks. A swapped or dead listing raises a link issue while preserving historical scene provenance.
- A shot with a different camera height/angle chooses an approved matching cell or records an approximation for review. Clothing, glasses and shoes remain visually consistent across approved views and cuts.
- A timed scene event produces only the appropriate subsequent reactions, physical states, audio and effects; a room's occlusion and an open space's propagation are evaluated against the same world record.
- Unauthorized use, mismatched person/reference, stale item/image dependencies, missing approval, incomplete coverage, and unverified product variants return distinct actionable validation outcomes.

## Open decisions and source limitations

The intended man's name, real-person versus fictional classification, likeness rights, approved reference photograph, skin tone/face/hair texture, glasses and suit details, voice/accent, shoe size and exact white product variant were not supplied. The exact eight camera heights/lenses remain unresolved in the existing board specification. The supplied Amazon link was not independently verified; there is no evidenced affiliate or sales integration. The earlier children's-reference work assessed limited excerpts for several videos, including the Magic School Bus opening, and should not be treated as frame-verified full episodes. The October 3 repository synchronization was documentation across nine repositories, not a deployed Catalog, schema, purchase-card experience or finished animation. These gaps are visible gates, not guessed defaults.
