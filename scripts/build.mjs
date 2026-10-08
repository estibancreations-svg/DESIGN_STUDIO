import {build} from 'esbuild';
import {execFileSync} from 'node:child_process';
let commit=process.env.VERCEL_GIT_COMMIT_SHA||'';
if(!commit)try{commit=execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim();}catch{commit='local';}

import {cp, mkdir, copyFile} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
await cp('public','dist',{recursive:true});
await build({entryPoints:['src/app.js'],bundle:true,format:'esm',outfile:'dist/app.js',minify:true,define:{__BUILD_SHA__:JSON.stringify(commit)}});
await copyFile('src/app.css','dist/app.css');
console.log('Built standalone browser app in dist/. Start with npm start.');
