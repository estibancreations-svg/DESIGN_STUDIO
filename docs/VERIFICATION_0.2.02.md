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

## Hosted and repository evidence

- Tested application source: `e23c29e475dad5c50fd22aadcf0052d981676b2e` in DESIGN_STUDIO.
- Vercel deployment: `dpl_A3sqiCEsXQRdBkM7V1KQhLJjVd4Q`, reported **READY**, target **production**, exact source SHA above.
- Application: https://visionweaver-design-studio.vercel.app/
- HTTP verification: `/api/config` returned 200, version `0.2.02`, `cloudConfigured: false`, and `production.allowed: false`. Existing production execution gates are retained.
- VisionWeaver integration commit: `90372fd92282105889be78ae0955bc044126dcb7`. It is a source integration; no new hosted deployment of the complete VisionWeaver application is asserted.
- GitHub Quality Gate run: https://github.com/estibancreations-svg/DESIGN_STUDIO/actions/runs/37179063372 . The workflow did **not start its job**. GitHub’s annotation says: “The job was not started because your account is locked due to a billing issue.” There are no job-step results or test logs for that run. Local test success is not a green hosted Quality Gate.
- Full browser acceptance was performed locally. A live-browser attempt was blocked by the execution environment’s proxy certificate trust; the live HTTP configuration check succeeded. This is not evidence of a public-site TLS defect.
