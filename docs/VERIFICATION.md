# Verification record — 0.1.02

## Completed evidence

- Standalone bundle built using pinned @supabase/supabase-js 2.117.2 and esbuild 0.28.2; lockfile committed.
- Node tests: 10 passed for authentication, origin enforcement, verified-user forwarding, anonymous/expired token rejection, production gates, MCP allowlisting, forged approval fields, metadata triage, input URLs/ages, and scene timing.
- VisionWeaver's existing build succeeded with the new Design Studio navigation and generated embedded page. Existing production records remain in the build.
- Live Supabase migration `design_studio_foundation` applied to project `yqealeekngxooyoemfba` on October 4 UTC (October 3 America/Chicago). All 8 ds_* tables have RLS enabled.
- A rolled-back two-user live database test verified owner insert, automatic audit event, cross-tenant invisibility, owner spoof denial, self-age-verification denial, and unregistered delegated OAuth-client denial. All temporary users/data rolled back.
- Security advisor reported no ds_* findings. Existing unrelated project notices: 6 recovery tables with RLS/no policies (informational), mutable search path on public.agent_capability_is_active, and leaked-password protection disabled. Those existing resources were not modified. Remediation: https://supabase.com/docs/guides/database/database-linter?lint=0011_function_search_path_mutable and https://supabase.com/docs/guides/auth/password-security . They prevent a blanket project-wide security certification.

## Scope and remaining checks

No real-user OAuth/provider-console/callback run, authenticated cloud browser session, media moderation, billing, payment, commercial listing, independent legal review, deployment, or provider generation was certified. The live migration proves schema/access behavior, not an end-to-end deployed service. Browser verification status is recorded below when completed.

Database audit controls prevent ordinary users from editing history; they are not a claim of cryptographic tamper-proof storage against database administrators. Local draft history is capped at 100 entries and is user-editable browser data. In-memory rate limits are single-process only and must become distributed before scale-out.

The default runtime uses direct user tokens with no service-role bypass. API keys, personal access token issuance and automatic MCP OAuth registration remain planned; do not advertise them as working features.

## Browser verification

Chromium headless smoke run passed October 4, 2026: standalone navigation; character edit/save/reload persistence; scene save; timing preview reaching contact; 390-pixel mobile viewport without horizontal overflow; VisionWeaver welcome dismissal followed by embedded Design Studio navigation, draft save, and design-history images. No page JavaScript errors were reported. Evidence: [desktop](runtime-desktop.png) and [mobile](runtime-mobile.png). These are local runtime checks, not a hosted deployment or accessibility certification.
