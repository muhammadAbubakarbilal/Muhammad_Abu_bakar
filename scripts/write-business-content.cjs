const fs=require('fs');
const staticFallback=require('./static-fallback.cjs');
module.exports=({root,source,data,business,siteURL,transform})=>{
 const pages={};
 source.forEach(p=>{
  const route=transform(p.route),index=data.PROJECTS_DATA.findIndex(d=>route==='/projects/'+d.slug);
  const article=data.INSIGHTS_DATA.find(d=>route==='/blog/'+d.slug);
  pages[route]={title:route==='/'?business.title:undefined,description:business.description};
  if(index>=0){pages[route]={title:business.projects[index][0],description:business.projects[index][1],body:business.projects[index].slice(2)};}
  if(article)pages[route]={title:article.title,description:article.excerpt};
 });
 const imageAlts=data.PROJECTS_DATA.map(p=>p.title+' — illustrative '+(p.badgeType==='INDEPENDENT BUILD'?'website overview':'system architecture'));
 const model={siteURL,pages,imageAlts};
 fs.writeFileSync(root+'/portfolio-content.js','window.__portfolioContentData='+JSON.stringify(model)+';\n'+fs.readFileSync('scripts/content-runtime.js','utf8'));
 const esc=s=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
 for(const p of source){const file=root+'/pages/'+p.file;let html=fs.readFileSync(file,'utf8');const page=pages[transform(p.route)];
  html=html.replace('<head>','<head><script src="/_launchfolio/portfolio-content.js" defer></script>');
  if(page.title){html=html.replace(/<title>[^<]*<\/title>/,'<title>'+esc(page.title)+'</title>');html=html.replace(/(<meta (?:name|property)="(?:og:title|twitter:title)" content=")[^"]*/g,(_,prefix)=>prefix+esc(page.title));}
  html=html.replace(/(<meta (?:name|property)="(?:description|og:description|twitter:description)" content=")[^"]*/g,(_,prefix)=>prefix+esc(page.description));
  html=html.replace(/<link[^>]*rel="canonical"[^>]*>/g,'');
  html=html.replace('</head>','<link rel="canonical" href="'+esc(siteURL+transform(p.route))+'"></head>');
  html=html.replace(/https?:\/\/mailto:abgakhar787@gmail\.com/g,'/?contact=1');
  if(transform(p.route)==='/')html=html.replace('Websites, AI assistants, and connected systems built <span','Websites, AI assistants, and connected systems built around <span');
  if(page.body){const headings=['A closer look at the system.','The experience and the architecture.','Clear stages and human handoffs.'];headings.forEach((heading,i)=>{html=html.replace(new RegExp('(<h2[^>]*>'+heading.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'</h2><p[^>]*>)([\\s\\S]*?)(</p>)','g'),(_,a,body,c)=>{let used=false;return a+body.replace(/(^|>)([^<]+)/g,(match,prefix,text)=>{if(!text.trim())return match;const value=used?'':esc(page.body[i]);used=true;return prefix+value})+c;});});}
  html=html.replace(/<img\b[^>]*>/g,tag=>{const m=tag.match(/\/project-(\d)\.svg/);return m?tag.replace(/alt="[^"]*"/,'alt="'+esc(imageAlts[Number(m[1])])+'"'):tag;});
  fs.writeFileSync(file,staticFallback(html,transform(p.route)));
 }
};
