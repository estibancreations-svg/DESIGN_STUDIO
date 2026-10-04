import {build} from 'esbuild';
import {cp, mkdir, copyFile} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
await cp('public','dist',{recursive:true});
await build({entryPoints:['src/app.js'],bundle:true,format:'esm',outfile:'dist/app.js',minify:true});
await copyFile('src/app.css','dist/app.css');
console.log('Built standalone browser app in dist/. Start with npm start.');
