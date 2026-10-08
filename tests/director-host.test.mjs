import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {JSDOM} from 'jsdom';
function boot(hash=''){
 const d=new JSDOM(readFileSync('public/director/index.html','utf8'),{url:'https://visionweaver-design-studio.vercel.app/'+hash,runScripts:'outside-only',pretendToBeVisual:true});
 const w=d.window;w.matchMedia=()=>({matches:false,addEventListener(){},removeEventListener(){}});w.structuredClone=structuredClone;w.TextDecoder=TextDecoder;w.TextEncoder=TextEncoder;w.scrollTo=()=>{};
 w.eval(w.document.querySelector('script').textContent);return d;
}
test('canonical launcher renders complete shell and all locked destinations',()=>{
 const d=boot();const w=d.window;
 assert.match(w.document.querySelector('#main').textContent,/Vision|Production|Studio/i);
 assert.equal(w.document.querySelector('#main').dataset.hostRelease,'0.4.02');
 assert.ok(!w.document.body.textContent.includes('.vw-os-grid{'));assert.ok(w.document.querySelector('.topbar .brand').textContent.includes('BRING WORLDS TO LIFE'));assert.ok(w.document.querySelector('.host-account'));assert.ok(w.document.querySelector('.host-thelma'));
 for(const page of ['command','visionbuilder','strategy','initiatives','portfolio','copilot','cmi','guild','teamsops','source','avatarops','worldops','design','designops','commercial','sceneproduction','postproduction','distribution','qualityops','financeops','itops','resources','assets','reports','settings','thelma']){
  w.eval(`go(${JSON.stringify(page)})`);assert.ok(w.document.querySelector('#main').innerHTML.length>100,page);
 }
 w.eval("go('design')");assert.ok(w.document.querySelector('iframe'));assert.equal(w.document.querySelector('#main').dataset.visualView,'V2');
 w.eval("go('sceneproduction')");assert.equal(w.document.querySelector('#main').dataset.visualView,'V1');
 w.document.querySelector('#hostNavToggle').click();assert.equal(w.document.querySelector('#hostNavToggle').getAttribute('aria-expanded'),'false');d.window.close();
});

test('physical launch document equals the canonical hosted artifact',()=>{assert.equal(readFileSync('public/index.html','utf8'),readFileSync('public/director/index.html','utf8'));});
