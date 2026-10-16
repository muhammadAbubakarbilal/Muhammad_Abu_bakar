/* Content bindings for shared Framer CMS blocks; no layout or motion changes. */
(() => {
 const data=window.__portfolioContentData;
 const normalize=s=>s.replace(/\s+/g,' ').trim();
 const write=(element,value)=>{
  if(normalize(element.textContent)===normalize(value))return;
  const walker=document.createTreeWalker(element,NodeFilter.SHOW_TEXT);
  const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
  const words=value.split(' '),total=nodes.reduce((n,t)=>n+t.length,0);
  let used=0,length=0;
  nodes.forEach((node,i)=>{length+=node.length;const end=i===nodes.length-1?words.length:Math.round(words.length*length/total);node.nodeValue=words.slice(used,end).join(' ')+(end>used&&end<words.length?' ':'');used=end;});
 };
 const headings=['A closer look at the system.','The experience and the architecture.','Clear stages and human handoffs.'];
 window.__portfolioContent=root=>{
  // Rich-text runs can split this sentence across independently translated nodes.
  // Bind the complete authored sentence while preserving its existing elements.
  if(location.pathname==='/'){
   const paragraphs=[...(root.matches?.('p')?[root]:[]),...(root.querySelectorAll?.('p')||[])];
   for(const paragraph of paragraphs){
    const text=normalize(paragraph.textContent);
    if(text.startsWith('Websites, AI assistants, and connected systems')&&text.endsWith('defined project scope.')){
     write(paragraph,'Websites, AI assistants, and connected systems built around a clearly defined project scope.');
    }
   }
  }
  const page=data.pages[location.pathname];
  if(page?.body){
   const nodes=[...(root.matches?.('h2')?[root]:[]),...(root.querySelectorAll?.('h2')||[])];
   for(const heading of nodes){const index=headings.indexOf(normalize(heading.textContent));if(index<0)continue;const paragraph=heading.nextElementSibling;if(paragraph?.tagName==='P')write(paragraph,page.body[index]);}
  }
  const images=[...(root.matches?.('img')?[root]:[]),...(root.querySelectorAll?.('img')||[])];
  for(const img of images){const src=img.getAttribute('src')||'';const match=src.match(/\/project-(\d)\.svg/);if(match)img.alt=data.imageAlts[Number(match[1])];else if(src.includes('/abu_bakar.jpg'))img.alt='Muhammad Abu Bakar';else if(src.includes('/mark.svg'))img.alt='Muhammad Abu Bakar monogram';}
 };
 const metadata=()=>{
  const page=data.pages[location.pathname];if(!page)return;
  if(page.title&&document.title!==page.title)document.title=page.title;
  for(const selector of ['meta[name="description"]','meta[property="og:description"]','meta[name="twitter:description"]']){const el=document.querySelector(selector);if(el&&page.description&&el.content!==page.description)el.content=page.description;}
  for(const selector of ['meta[property="og:title"]','meta[name="twitter:title"]']){const el=document.querySelector(selector);if(el&&page.title&&el.content!==page.title)el.content=page.title;}
  for(const selector of ['link[rel="canonical"]','meta[property="og:url"]']){const el=document.querySelector(selector);const attr=selector.startsWith('link')?'href':'content';const url=data.siteURL+location.pathname;if(el&&el.getAttribute(attr)!==url)el.setAttribute(attr,url);}
 };
 metadata();new MutationObserver(metadata).observe(document.head,{childList:true,subtree:true,characterData:true});
 document.addEventListener('framer:pageview',()=>{metadata();window.__portfolioContent(document);});
})();
