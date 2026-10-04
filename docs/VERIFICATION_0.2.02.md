# Verification — 0.2.02

## Local evidence, October 4, 2026 UTC

- `npm run check`: 20 tests pass and the standalone browser bundle builds.
- All 11 pages opened in Chromium at desktop 1512×982 and phone 390×844; zero page JavaScript errors.
- Character identity save, 16-view wardrobe variant, saved clothing change, linked reference cell, location editing, continuity editing, added cue, time-stretch duration, listing draft, and rights record were exercised through the interface.
- An 8-second scene at 0.5× across its full interval showed 16 seconds of editorial duration while preserving story timing.
- Revision comparison and the compiled direction brief opened successfully; the brief reflected the edited location.
- Reload preserved the edited master character and its wardrobe variant.
- Phone horizontal overflow found in the performance starter cards was corrected and retested. No full-page overflow remained in the 11-page sweep.
- Multi-form save handling was corrected so navigating away from Effects preserves edited atmosphere and time-treatment fields together.
- The existing authentication, tenant-token forwarding, origin rejection, anonymous rejection, production endpoint lock, MCP allowlist, forged-approval stripping, URL safety, and metadata policy tests continue to pass.

## Deliberate verification limits

The browser pass uses headless Chromium, not a physical iPad/iPhone or Safari. It does not establish full accessibility conformance. No real provider rendering, rig simulation, generated reference images, synthesized voice, marketplace purchase, or external publishing was performed. Browser storage is local to the device/origin. Cloud OAuth and tenant saving require deployment configuration and a signed-in acceptance run. Automated local tests do not replace the GitHub Quality Gate on the committed SHA.

## Hosting

The repository includes static frontend output plus a Vercel API adapter that retains the existing authenticated server routes. Unconfigured cloud access fails closed. The deployment result and source SHA must be recorded after publication; a configured build is not proof of a running deployment.

## Additional acceptance checks

- Two simultaneously edited Effects forms were saved correctly on navigation: time-treatment notes and ecology notes both survived.
- Restoring an earlier character snapshot created a new draft revision with the original name restored and later history retained.
- VisionWeaver embedding required suppressing standalone hash routing in the `srcdoc` frame. The generated module uses in-frame navigation and retains the parent production navigation.
- VisionWeaver embedded acceptance passed after allowing local form submissions in the frame sandbox: character name changed to `Embedded check`, the saved draft was present in browser storage, scene navigation worked, and no page JavaScript errors occurred.
