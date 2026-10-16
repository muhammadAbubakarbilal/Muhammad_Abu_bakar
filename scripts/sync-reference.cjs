/* Capture the public reference's rendered documents and browser runtime.
 * No account access, form submission, checkout or publishing is performed. */
const fs=require('node:fs/promises');
const path=require('node:path');
const crypto=require('node:crypto');
const origin='https://launchfolio.framer.website';
const output=path.resolve('public/_launchfolio');
const pages=new Map();
const resources=new Map();
const queue=['/'];
const localPath=url=>{
 const u=new URL(url);
 if(/\.(mjs|js|framercms)$/.test(u.pathname))return '/_launchfolio/runtime'+u.pathname;
 return '/_launchfolio/assets/'+crypto.createHash('sha256').update(url).digest('hex').slice(0,20)+(path.extname(u.pathname)||'.bin');
};
async function get(url){const response=await fetch(url,{signal:AbortSignal.timeout(60000)});if(!response.ok)throw Error(`${response.status} ${url}`);return response;}
function collect(text,base){
 for(const match of text.matchAll(/new URL\(["'`]([^"'`]+\.framercms)["'`],["'`](https:\/\/framerusercontent\.com\/[^"'`]+)["'`]\)/g)){const url=new URL(match[1],match[2]).href.replace('/modules/','/cms/');if(!resources.has(url))resources.set(url,{local:localPath(url)});}
 for(const match of text.matchAll(/https:\/\/framerusercontent\.com\/[^\s"'<>`\\)]+/g)){const url=match[0].replace(/&amp;/g,'&');if(!resources.has(url))resources.set(url,{local:localPath(url)});}
 for(const match of text.matchAll(/["'`]([^"'`\s]+\.mjs)["'`]/g)){try{const url=new URL(match[1],base).href;if(url.startsWith('https://framerusercontent.com/')&&!resources.has(url))resources.set(url,{local:localPath(url)});}catch{}}
}
(async()=>{
 await fs.mkdir(output,{recursive:true});
 while(queue.length){const route=queue.shift();if(pages.has(route))continue;const url=origin+route;const html=await(await get(url)).text();pages.set(route,html);collect(html,url);
  for(const m of html.matchAll(/href="([^"]+)"/g)){try{const u=new URL(m[1].replace(/&amp;/g,'&'),url);if(u.origin===origin&&!u.pathname.includes('.')&&!pages.has(u.pathname)&&!queue.includes(u.pathname))queue.push(u.pathname);}catch{}}
  console.log('Page',route);
 }
 // Traverse module imports before rewriting URLs so relative imports stay intact.
 let completed=0;
 while([...resources.values()].some(r=>!r.done)){
  const batch=[...resources.entries()].filter(([,r])=>!r.done).slice(0,8);
  await Promise.all(batch.map(async([url,r])=>{r.done=true;try{const response=await get(url);r.content=Buffer.from(await response.arrayBuffer());if(url.includes('.mjs'))collect(r.content.toString(),url);completed++;}catch(error){r.error=error.message;console.warn('Resource unavailable:',url)}}));
  if(completed%40<8)console.log('Resources',completed,'/',resources.size);
 }
 function rewrite(text){for(const [url,r]of resources){if(r.content)text=text.split(url).join(r.local).split(url.replace(/&/g,'&amp;')).join(r.local);}return text;}
 function rewriteModule(text){return rewrite(text).replace(/new URL\((["'`][^"'`]+["'`]),(["'`])(\/_launchfolio\/[^"'`]+)\2\)/g,(_,relative,quote,base)=>`new URL(${relative},new URL(${JSON.stringify(base)},import.meta.url))`);}
 for(const [url,r]of resources){if(!r.content)continue;const target=path.resolve('public'+r.local);await fs.mkdir(path.dirname(target),{recursive:true});await fs.writeFile(target,url.includes('.mjs')?rewriteModule(r.content.toString()):r.content);}
 const manifest=[];
 for(const [route,html]of pages){const file=route==='/'?'index.html':route.replace(/^\//,'')+'/index.html';const target=path.join(output,'pages',file);await fs.mkdir(path.dirname(target),{recursive:true});await fs.writeFile(target,rewrite(html).replace('</body>','<script src="/_launchfolio/contact-alias.js" defer></script></body>'));manifest.push({route,file});}
 await fs.writeFile(path.join(output,'manifest.json'),JSON.stringify({source:origin,captured:new Date().toISOString(),pages:manifest,resources:resources.size,failures:[...resources.entries()].filter(([,r])=>r.error).map(([url,r])=>({url,error:r.error}))},null,2));
 console.log('Saved',pages.size,'pages and',completed,'resources.');
})().catch(e=>{console.error(e);process.exitCode=1});
