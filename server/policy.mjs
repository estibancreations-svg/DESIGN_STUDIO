export const POLICY_VERSION='2026-10-03.1';
// Advisory text triage, NOT a media classifier or a production clearance service.
export function triage(text=''){
 const t=String(text).toLowerCase();
 const child=/\b(child|children|kid|kids|minor|underage|toddler|baby|babies)\b/.test(t);
 const nude=/\b(nudity|nude|naked|sexual|porn|sex)\b/.test(t);
 if(child&&nude)return {decision:'BLOCK',reason:'Child nudity and sexual content are prohibited.'};
 if(child&&/\b(illegal|traffick|exploit)\w*\b/.test(t))return {decision:'BLOCK',reason:'Child exploitation or unlawful child activity requires blocking and review.'};
 if(/\b(nonconsensual|revenge porn|impersonation fraud)\b/.test(t))return {decision:'BLOCK',reason:'Nonconsensual intimate content and fraudulent impersonation are prohibited.'};
 if(/\b(graphic|gore|sexual|nude|nudity|celebrity)\b/.test(t))return {decision:'REVIEW',reason:'Restricted-content or likeness review is required; external execution is unavailable.'};
 return {decision:'DRAFT_ONLY',reason:'Metadata triage is not production approval.'};
}
export function productionGate(){return {allowed:false,code:'RELEASE_GATES_OPEN',message:'Rendering, media uploads, public listing, payments, and external publishing remain disabled until moderation, rights, provider, and legal gates are verified.'};}
