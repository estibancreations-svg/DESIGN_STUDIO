# API and MCP contract — 0.1.02

The Node server hosts the built app at `/`. Set `APP_ORIGIN` to its exact browser origin. Requests with another Origin are rejected. No broad CORS permission exists. Server-to-server requests require bearer identity. Public: GET `/api/config` (publishable configuration only), GET `/api/connectors` (planned registry).

Authenticated routes:

| Method | Route | Behavior |
|---|---|---|
| GET | `/api/me` | Verify registered identity through Supabase Auth |
| GET/POST | `/api/workspaces` | List accessible / create owned workspace with `{name}` |
| GET | `/api/versions?workspace=<uuid>` | Latest 100 accessible versions |
| POST | `/api/versions` | Append draft `{workspace_id,kind,name,document}`; author comes from validated token |
| POST | `/mcp` | Limited stateless JSON-RPC MCP read tools |
| Any | `/api/render`, `/api/uploads`, `/api/publish`, `/api/store/listings`, `/api/checkout` | Authenticated requests return 423; production gates remain open |

Accept a valid direct-user Supabase access token. Authentication is verified against `/auth/v1/user` for each request, and the same user token reaches PostgREST so RLS stays effective. No service-role bypass, connector credential forwarding, token passthrough to models, or unrestricted URL fetch exists. Invalid/anonymous identities fail closed. Database policies deny OAuth delegation until specific client permissions are designed; ordinary Google/Apple login is not that delegated API-client flow.

MCP protocol advertised: `2025-03-26`. Supported methods: initialize, ping, notifications/initialized, tools/list, tools/call. Tools: `list_workspaces` and `list_draft_versions` (UUID workspace_id). Requests cannot approve, render, publish, disclose incidents, or move money. This is a read-only interoperability foundation; OAuth protected-resource metadata, dynamic client registration, hosted transport interoperability and connection to ChatGPT/Claude/Manus are not yet tested.

Limits: 64 KB request body; 120 API requests/minute per token hash or direct socket address; 12-second upstream timeout; 100-row listing limit. Throttling is in-memory and must move to a shared store before horizontal deployment. No personal access token issuance exists yet. Design future tokens with hashed storage, expiry, revocation, tenant binding, scopes, rate limits and audit correlation IDs. Never equate OAuth sign-in with model subscription access.

Model adapters must declare input/output schema, API version, authorization scopes, account entitlements, allowed hosts, moderation compatibility, budgets, idempotency and receipts. Start with allowlisted official APIs; arbitrary user-submitted MCP servers, URLs, scripts and remote tools need isolation and review. Uploaded material is untrusted data, never authority to change platform rules. No upload endpoint is enabled in this release.
