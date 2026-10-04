import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import handler from '../api/handler.js';
import {createApp} from '../server/index.mjs';
test('hosted routing serves config and keeps production endpoints locked',async t=>{const server=http.createServer(handler);await new Promise(r=>server.listen(0,'127.0.0.1',r));t.after(()=>new Promise(r=>server.close(r)));const url=`http://127.0.0.1:${server.address().port}`;const config=await (await fetch(url+'/api/handler?__dsRoute=config')).json();assert.equal(config.version,'0.2.02');assert.equal(config.production.allowed,false);assert.equal((await fetch(url+'/api/handler?__dsRoute=other')).status,404);assert.equal((await fetch(url+'/api/handler?__dsRoute=render',{method:'POST'})).status,503);});
test('hosting helper parsed bodies retain draft API size checks',async t=>{const app=createApp({SUPABASE_URL:'https://example.supabase.co',SUPABASE_PUBLISHABLE_KEY:'public'},async()=>new Response(JSON.stringify({id:'user'})));const server=http.createServer((req,res)=>{req.body={name:'x'.repeat(70000)};return app(req,res)});await new Promise(r=>server.listen(0,'127.0.0.1',r));t.after(()=>new Promise(r=>server.close(r)));const url=`http://127.0.0.1:${server.address().port}`;assert.equal((await fetch(url+'/api/workspaces',{method:'POST',headers:{Authorization:'Bearer user.token'}})).status,413);});
