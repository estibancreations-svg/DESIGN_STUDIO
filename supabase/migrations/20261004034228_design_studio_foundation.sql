create table public.ds_workspaces (
 id uuid primary key default gen_random_uuid(),
 owner_id uuid not null references auth.users(id),
 name text not null check (length(name) between 1 and 120),
 created_at timestamptz not null default now()
);
create index ds_workspaces_owner on public.ds_workspaces(owner_id);
create table public.ds_memberships (
 workspace_id uuid not null references public.ds_workspaces(id),
 user_id uuid not null references auth.users(id),
 role text not null check(role in ('viewer','editor','admin')),
 created_at timestamptz not null default now(),
 primary key(workspace_id,user_id)
);
create index ds_memberships_user on public.ds_memberships(user_id);
create table public.ds_draft_versions (
 id uuid primary key default gen_random_uuid(),
 workspace_id uuid not null references public.ds_workspaces(id),
 author_id uuid not null references auth.users(id),
 kind text not null check(kind in ('character','scene','project')),
 name text not null check(length(name) between 1 and 120),
 document jsonb not null check(jsonb_typeof(document)='object' and octet_length(document::text)<=65536),
 review_state text not null default 'draft' check(review_state='draft'),
 created_at timestamptz not null default now()
);
create index ds_drafts_workspace_time on public.ds_draft_versions(workspace_id,created_at desc);
create index ds_drafts_author on public.ds_draft_versions(author_id);
create table public.ds_account_verifications (
 user_id uuid primary key references auth.users(id),
 age_status text not null default 'unverified' check(age_status in ('unverified','adult_verified','restricted')),
 verification_ref text, verified_at timestamptz, expires_at timestamptz
);
create table public.ds_entitlements (
 id uuid primary key default gen_random_uuid(), workspace_id uuid not null references public.ds_workspaces(id),
 plan text not null, status text not null check(status in ('trial','active','suspended','expired')),
 valid_until timestamptz, receipt_ref text, created_at timestamptz not null default now()
);
create index ds_entitlements_workspace on public.ds_entitlements(workspace_id);
create table public.ds_connector_accounts (
 id uuid primary key default gen_random_uuid(), workspace_id uuid not null references public.ds_workspaces(id),
 provider text not null, status text not null default 'unconfigured',
 scopes text[] not null default '{}', secret_ref text, verified_at timestamptz,
 unique(workspace_id,provider)
);
create table public.ds_safety_cases (
 id uuid primary key default gen_random_uuid(), workspace_id uuid references public.ds_workspaces(id),
 category text not null, status text not null default 'pending',
 restricted_evidence_ref text, legal_basis text, retention_until timestamptz, created_at timestamptz not null default now()
);
create index ds_safety_workspace on public.ds_safety_cases(workspace_id);
create table public.ds_audit_events (
 id uuid primary key default gen_random_uuid(), workspace_id uuid not null references public.ds_workspaces(id),
 actor_id uuid not null references auth.users(id), record_id uuid not null,
 action text not null, created_at timestamptz not null default now()
);
create index ds_audit_workspace on public.ds_audit_events(workspace_id,created_at desc);
create index ds_audit_actor on public.ds_audit_events(actor_id);
alter table public.ds_workspaces enable row level security;
alter table public.ds_memberships enable row level security;
alter table public.ds_draft_versions enable row level security;
alter table public.ds_account_verifications enable row level security;
alter table public.ds_entitlements enable row level security;
alter table public.ds_connector_accounts enable row level security;
alter table public.ds_safety_cases enable row level security;
alter table public.ds_audit_events enable row level security;
revoke all on public.ds_workspaces,public.ds_memberships,public.ds_draft_versions,public.ds_account_verifications,public.ds_entitlements,public.ds_connector_accounts,public.ds_safety_cases,public.ds_audit_events from anon,authenticated;
grant select on public.ds_workspaces,public.ds_memberships,public.ds_draft_versions,public.ds_account_verifications,public.ds_entitlements,public.ds_audit_events to authenticated;
grant insert(owner_id,name) on public.ds_workspaces to authenticated;
grant insert(workspace_id,author_id,kind,name,document) on public.ds_draft_versions to authenticated;
grant select(id,workspace_id,provider,status,scopes,verified_at) on public.ds_connector_accounts to authenticated;
grant all on public.ds_workspaces,public.ds_memberships,public.ds_draft_versions,public.ds_account_verifications,public.ds_entitlements,public.ds_connector_accounts,public.ds_safety_cases,public.ds_audit_events to service_role;
create policy ds_membership_read on public.ds_memberships for select to authenticated using(user_id=(select auth.uid()));
create policy ds_workspace_read on public.ds_workspaces for select to authenticated using(owner_id=(select auth.uid()) or id in(select workspace_id from public.ds_memberships where user_id=(select auth.uid())));
create policy ds_workspace_create on public.ds_workspaces for insert to authenticated with check(owner_id=(select auth.uid()) and coalesce((select auth.jwt())->>'is_anonymous','false')='false');
create policy ds_draft_read on public.ds_draft_versions for select to authenticated using(workspace_id in(select id from public.ds_workspaces));
create policy ds_draft_create on public.ds_draft_versions for insert to authenticated with check(
 author_id=(select auth.uid()) and
 (workspace_id in(select id from public.ds_workspaces where owner_id=(select auth.uid())) or
 workspace_id in(select workspace_id from public.ds_memberships where user_id=(select auth.uid()) and role in('editor','admin')))
);
create policy ds_verification_read on public.ds_account_verifications for select to authenticated using(user_id=(select auth.uid()));
create policy ds_entitlement_read on public.ds_entitlements for select to authenticated using(workspace_id in(select id from public.ds_workspaces));
create policy ds_connector_read on public.ds_connector_accounts for select to authenticated using(workspace_id in(select id from public.ds_workspaces where owner_id=(select auth.uid())));
create policy ds_audit_read on public.ds_audit_events for select to authenticated using(workspace_id in(select id from public.ds_workspaces));
-- Safety cases are intentionally service-only: no user or anonymous read policy.
do $block$
declare t text;
begin
 foreach t in array array['ds_workspaces','ds_memberships','ds_draft_versions','ds_account_verifications','ds_entitlements','ds_connector_accounts','ds_safety_cases','ds_audit_events'] loop
 execute format('create policy ds_direct_session_only on public.%I as restrictive for all to authenticated using ((select auth.jwt())->>''client_id'' is null and coalesce((select auth.jwt())->>''is_anonymous'',''false'')=''false'') with check ((select auth.jwt())->>''client_id'' is null and coalesce((select auth.jwt())->>''is_anonymous'',''false'')=''false'')', t);
 end loop;
end
$block$;
create schema if not exists ds_private;
revoke all on schema ds_private from public,anon,authenticated;
create function ds_private.audit_draft_insert() returns trigger language plpgsql security definer set search_path='' as $fn$
begin
 if auth.uid() is null or auth.uid()<>new.author_id then raise exception 'Verified actor required'; end if;
 insert into public.ds_audit_events(workspace_id,actor_id,record_id,action) values(new.workspace_id,new.author_id,new.id,'draft.created');
 return new;
end;
$fn$;
revoke all on function ds_private.audit_draft_insert() from public,anon,authenticated;
create trigger ds_draft_insert_audit after insert on public.ds_draft_versions for each row execute function ds_private.audit_draft_insert();
