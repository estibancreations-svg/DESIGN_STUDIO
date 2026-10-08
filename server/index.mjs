import http from 'node:http';
import {VERSION} from '../src/model.js';
import {readFile} from 'node:fs/promises';
import {resolve,extname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {triage,productionGate,POLICY_VERSION} from './policy.mjs';
import {connectors} from './connectors.mjs';
const root=resolve(fileURLToPath(new URL('../dist/',import.meta.url)));
const UUID=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export function createApp(env=process.env,fetcher=fetch){
 const base=(env.SUPABASE_URL||'').replace(/\/$/,'');
 const key=env.SUPABASE_PUBLISHABLE_KEY||'';
 const ready=/^https:\/\/[a-z0-9.-]+$/.test(base)&&!!key;
 const origin=env.APP_ORIGIN||(env.VERCEL_URL?'https://'+env.VERCEL_URL:'http://localhost:4173');
 const limits=new Map();
 function reply(res,status,data){res.writeHead(status,{'Content-Type':'application/json'});res.end(JSON.stringify(data));}
 async function sb(path,token,method='GET',body){const r=await fetcher(base+path,{method,headers:{apikey:key,Authorization:`Bearer ${token}`,'Content-Type':'application/json',Prefer:'return=representation'},body:body?JSON.stringify(body):undefined,signal:AbortSignal.timeout(12000)});if(!r.ok){const e=Error('Database request denied or unavailable.');e.status=r.status===403?403:502;throw e;}return r.status===204?null:r.json();}
 async function authenticate(req){if(!ready){const e=Error('Cloud authentication is not configured.');e.status=503;throw e;}const match=/^Bearer ([A-Za-z0-9._-]+)$/.exec(req.headers.authorization||'');if(!match){const e=Error('A verified user access token is required.');e.status=401;throw e;}const token=match[1];let user;try{user=await sb('/auth/v1/user',token);}catch{const e=Error('Access token is invalid or expired.');e.status=401;throw e;}if(!user?.id||user.is_anonymous){const e=Error('A registered account is required.');e.status=403;throw e;}return {user,token};}
 async function body(req){if(Number(req.headers['content-length'])>65536){const e=Error('Request exceeds 64 KB.');e.status=413;throw e;}if(req.body!==undefined){const raw=typeof req.body==='string'?req.body:JSON.stringify(req.body);if(Buffer.byteLength(raw)>65536){const e=Error('Request exceeds 64 KB.');e.status=413;throw e;}try{return JSON.parse(raw);}catch{const e=Error('Valid JSON is required.');e.status=400;throw e;}}let bytes=0,s='';for await(const chunk of req){bytes+=chunk.length;if(bytes>65536){const e=Error('Request exceeds 64 KB.');e.status=413;throw e;}s+=chunk;}try{return JSON.parse(s);}catch{const e=Error('Valid JSON is required.');e.status=400;throw e;}}
 return async(req,res)=>{
 res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','no-referrer');res.setHeader('Cache-Control','no-store');res.setHeader('Content-Security-Policy',"default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self' "+(ready?base:'')+"; frame-ancestors 'self'; object-src 'none'; base-uri 'self'; form-action 'self'");
 try{
 const url=new URL(req.url,'http://localhost');const path=url.pathname;
 if(path.startsWith('/api/')||path==='/mcp'){
  if(req.headers.origin&&req.headers.origin!==origin){reply(res,403,{error:'Origin is not allowed.'});return;}
  const limitKey=createHash('sha256').update(req.headers.authorization||req.socket.remoteAddress||'unknown').digest('hex');
  const now=Date.now();if(limits.size>10000)for(const [k,v]of limits)if(v.reset<now)limits.delete(k);
  const b=limits.get(limitKey)||{count:0,reset:now+60000};if(b.reset<now){b.count=0;b.reset=now+60000;}b.count++;limits.set(limitKey,b);if(b.count>120){res.setHeader('Retry-After','60');reply(res,429,{error:'Too many requests.'});return;}
  if(path==='/api/config'&&req.method==='GET'){reply(res,200,{title:'VisionWeaver | Design Studio',version:VERSION,uiStandard:'1.2',commit:env.VERCEL_GIT_COMMIT_SHA||null,cloudConfigured:ready,supabaseUrl:ready?base:null,publishableKey:ready?key:null,oauthProviders:(env.OAUTH_PROVIDERS||'').split(',').filter(p=>['google','apple','github','azure'].includes(p)),policyVersion:POLICY_VERSION,production:productionGate()});return;}
  if(path==='/api/connectors'&&req.method==='GET'){reply(res,200,connectors);return;}
  const {user,token}=await authenticate(req);
  if(path==='/api/me'&&req.method==='GET'){reply(res,200,{id:user.id,email:user.email});return;}
  if(path==='/api/workspaces'&&req.method==='GET'){reply(res,200,await sb('/rest/v1/ds_workspaces?select=id,name,created_at&order=created_at.desc&limit=100',token));return;}
  if(path==='/api/workspaces'&&req.method==='POST'){const data=await body(req);if(typeof data.name!=='string'||!data.name.trim()||data.name.length>120){reply(res,400,{error:'Workspace name must contain 1 to 120 characters.'});return;}reply(res,201,await sb('/rest/v1/ds_workspaces',token,'POST',{name:data.name.trim(),owner_id:user.id}));return;}
  if(path==='/api/versions'&&req.method==='GET'){const workspace=url.searchParams.get('workspace');if(!UUID.test(workspace||'')){reply(res,400,{error:'Valid workspace ID required.'});return;}reply(res,200,await sb(`/rest/v1/ds_draft_versions?workspace_id=eq.${workspace}&select=id,workspace_id,kind,name,document,created_at&order=created_at.desc&limit=100`,token));return;}
  if(path==='/api/versions'&&req.method==='POST'){const data=await body(req);if(!UUID.test(data.workspace_id||'')||!['character','scene','project'].includes(data.kind)||typeof data.name!=='string'||!data.name.trim()||data.name.length>120||!data.document||typeof data.document!=='object'||Array.isArray(data.document)){reply(res,400,{error:'Invalid draft version.'});return;}const check=triage(JSON.stringify(data.document));if(check.decision==='BLOCK'){reply(res,422,{error:check.reason,policyVersion:POLICY_VERSION});return;}reply(res,201,await sb('/rest/v1/ds_draft_versions',token,'POST',{workspace_id:data.workspace_id,author_id:user.id,kind:data.kind,name:data.name,document:data.document}));return;}
  if(['/api/render','/api/publish','/api/uploads','/api/store/listings','/api/checkout'].includes(path)){reply(res,423,productionGate());return;}
  if(path==='/mcp'&&req.method==='POST'){
   const rpc=await body(req);if(rpc.jsonrpc!=='2.0'||typeof rpc.method!=='string'){reply(res,400,{error:'Invalid JSON-RPC request.'});return;}
   if(rpc.method==='notifications/initialized'){res.writeHead(202);res.end();return;}
   let result;
   if(rpc.method==='initialize')result={protocolVersion:'2025-03-26',capabilities:{tools:{}},serverInfo:{name:'visionweaver-design-studio',version:VERSION}};
   else if(rpc.method==='ping')result={};
   else if(rpc.method==='tools/list')result={tools:[{name:'list_workspaces',description:'Read accessible Design Studio workspaces. No generation or publication.',inputSchema:{type:'object',properties:{},additionalProperties:false}},{name:'list_draft_versions',description:'Read the newest 100 draft versions in an accessible workspace.',inputSchema:{type:'object',properties:{workspace_id:{type:'string',format:'uuid'}},required:['workspace_id'],additionalProperties:false}}]};
   else if(rpc.method==='tools/call'){
    let data;if(rpc.params?.name==='list_workspaces')data=await sb('/rest/v1/ds_workspaces?select=id,name&limit=100',token);
    else if(rpc.params?.name==='list_draft_versions'&&UUID.test(rpc.params?.arguments?.workspace_id||''))data=await sb(`/rest/v1/ds_draft_versions?workspace_id=eq.${rpc.params.arguments.workspace_id}&select=id,name,kind,document,created_at&limit=100&order=created_at.desc`,token);
    else{reply(res,200,{jsonrpc:'2.0',id:rpc.id??null,error:{code:-32602,message:'Unknown tool or invalid arguments.'}});return;}
    result={content:[{type:'text',text:JSON.stringify(data)}]};
   }else{reply(res,200,{jsonrpc:'2.0',id:rpc.id??null,error:{code:-32601,message:'Method not found.'}});return;}
   reply(res,200,{jsonrpc:'2.0',id:rpc.id??null,result});return;
  }
  reply(res,404,{error:'Unknown endpoint.'});return;
 }
 if(req.method!=='GET'&&req.method!=='HEAD'){reply(res,405,{error:'Method not allowed.'});return;}
 const director=path==='/'||path==='/director/index.html';
 // The canonical document's inline script is authorized by its content hash below.
 const filename=director?'director/index.html':/^\/design-studio\/?$/.test(path)?'design-studio/index.html':decodeURIComponent(path).replace(/^\//,'');
 const full=resolve(root,filename);if(!full.startsWith(root+'/')){reply(res,403,{error:'Forbidden.'});return;}
 try{const bytes=await readFile(full);if(director){const html=bytes.toString();const scripts=[...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(m=>m[1]);for(const m of html.matchAll(/atob\('([A-Za-z0-9+/=]+)'\)/g)){const embedded=Buffer.from(m[1],'base64').toString();scripts.push(...[...embedded.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(x=>x[1]));}const hashes=scripts.map(s=>"'sha256-"+createHash('sha256').update(s).digest('base64')+"'").join(' ');res.setHeader('Content-Security-Policy',"default-src 'self'; script-src 'self' "+hashes+"; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://raw.githubusercontent.com; connect-src 'self'; frame-src 'self'; frame-ancestors 'self'; object-src 'none'; base-uri 'self'; form-action 'self'");}res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.png':'image/png','.webp':'image/webp','.json':'application/json'})[extname(full)]||'application/octet-stream');res.writeHead(200);res.end(req.method==='HEAD'?undefined:bytes);}catch{reply(res,404,{error:'Not found.'});}
 }catch(e){reply(res,e.status||500,{error:e.status?e.message:'Request failed. No production action was performed.'});}
 };
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url))http.createServer(createApp()).listen(Number(process.env.PORT)||4173,'0.0.0.0',()=>console.log('VisionWeaver | Design Studio listening.'));
