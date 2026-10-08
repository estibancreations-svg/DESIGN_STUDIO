# VisionWeaver UI runtime 0.4.02

Release scope: implement the approved October 7 UI shell in the deployed Design Studio application. This release supersedes the 0.2.02 interface, while preserving existing character/scene drafts and editors.

## Implemented
- Full persistent VisionWeaver navigation with active route and collapsible icon rail; mobile drawer uses the same toggle.
- Global search, Create, and real draft-review notifications.
- Architect account above THELMA in the sidebar; no duplicated header account.
- Neon cinematic Home and Design Studio overview using extracted approved board imagery. Design Studio defaults to V2; Design & Commercial defaults to V1; Worlds & Locations defaults to V2.
- Settings supports persistent per-page V1/V2/V3 composition and Neon/Midnight/Daylight color schemes. The notebook theme is excluded.
- All 26 October 7 board images are archived as optimized WebP references with original source names in APPROVED_UI_ASSETS.json. Illustrative board figures are not reported as runtime metrics.
- Existing avatar detail/voice/reference boards, scene staging, cues, atmosphere, effects, rights, connections, and review editors remain available.
- Additional workspace pages support real local production records (title, status, brief, source, timestamp), editing and export. They do not claim live specialized analytics, global map ingestion, billing, autonomous agents, or video rendering.
- THELMA prepares/export a production handoff; provider execution still requires separate connection work.
- Release version, UI standard and source SHA appear in the footer and API config to distinguish design-only updates from runtime releases.

## Verification
24 tests pass, including opening every navigation destination, retained avatar/scene forms, persisted layout/theme/navigation preferences, location-pack save/reload, draft migration, identity continuity, security and hosting tests. Build completes.

## Remaining production work
This is a working UI/authoring release, not pixel-identical implementation of every illustrated dashboard or provider execution. Deeper map, finance, analytics, agent and publishing integrations remain unverified. Separate catalog 0.3.02 work found in another checkout was preserved and not silently included in this release.

Future design changes must include runtime code plus visual verification; documentation-only commits are insufficient to declare the interface shipped.
