/* Portfolio integrations. No copied form submission or checkout is used. */
(()=>{
 // Keep the introductory card stack proportional while its grid becomes fluid.
 let previewFrame=0,lastScale='',lastOffset='';
 const fitPreview=()=>{previewFrame=0;const progress=Math.min(1,Math.max(0,scrollY/650));const extra=Math.max(0,innerWidth-1080);const scale=String(1-(1-Math.min(1,1080/innerWidth))*(1-progress));const lift=innerWidth>=1200?Math.min(260,innerWidth*.15):0;const offset=(-(extra*.22+lift)*(1-progress))+'px';if(scale!==lastScale){document.documentElement.style.setProperty('--portfolio-preview-scale',scale);lastScale=scale}if(offset!==lastOffset){document.documentElement.style.setProperty('--portfolio-preview-offset',offset);lastOffset=offset}};
 const schedulePreview=()=>{if(!previewFrame)previewFrame=requestAnimationFrame(fitPreview)};
 if(document.querySelector('.framer-13kxl6w')){fitPreview();addEventListener('scroll',schedulePreview,{passive:true});addEventListener('resize',schedulePreview);}
 const email='abgakhar787@gmail.com';
 const openContact=()=>{if(document.querySelector('form'))return;const trigger=document.querySelector('button[aria-label="Contact Form"]');if(trigger){for(const type of ['pointerdown','pointerup'])trigger.dispatchEvent(new PointerEvent(type,{bubbles:true,pointerId:1,pointerType:'mouse',button:0,isPrimary:true}));}else location.href='mailto:'+email};
 document.addEventListener('click',event=>{
   const a=event.target.closest('a');if(!a)return;
   const href=a.getAttribute('href')||'';
   if(href==='/?contact=1'){event.preventDefault();event.stopImmediatePropagation();openContact();return;}
   if(/^https?:\/\/mailto:/i.test(href)){event.preventDefault();event.stopImmediatePropagation();openContact();return;}
   // Captured CMS identifiers are scoped to their original page runtime.
   // Let the browser load another local document instead of asking Framer's
   // client router to resolve a renamed portfolio slug in a stale CMS cache.
   if(href){
    const destination=new URL(href,location.href);
    if(destination.origin===location.origin&&destination.pathname!==location.pathname){event.stopImmediatePropagation();return;}
   }
   if(/^https?:/.test(href)&&!/127\.0\.0\.1|localhost/.test(href)){
     event.preventDefault();event.stopImmediatePropagation();
     if(/github\.com/.test(href))location.href='https://github.com/muhammadAbubakarbilal';else openContact();
   }
 },true);
 document.addEventListener('submit',event=>{
   const form=event.target;if(!(form instanceof HTMLFormElement))return;
   event.preventDefault();event.stopImmediatePropagation();
   if(!form.reportValidity())return;
   const fields=[...new FormData(form)].filter(([key,value])=>typeof value==='string'&&value.trim()&&!/token|captcha|honeypot/i.test(key));
   const body=fields.map(([key,value])=>key+': '+value).join('\n');
   let result=form.querySelector('.portfolio-draft');if(!result){result=document.createElement('div');result.className='portfolio-draft';result.setAttribute('role','status');form.append(result)}
   result.replaceChildren();const p=document.createElement('p');p.textContent='Your email draft is ready. Your message has not been sent. Review and send it from your email app.';
   const a=document.createElement('a');a.href='mailto:'+email+'?subject='+encodeURIComponent('Portfolio project inquiry')+'&body='+encodeURIComponent(body);a.textContent='Open email draft';result.append(p,a);result.scrollIntoView({block:'nearest',behavior:'smooth'});
 },true);
 // Hydrated CMS media may carry source-host URLs not present in captured HTML.
 // Transform their attributes, never their DOM structure or animation styles.
 const update=root=>{
  window.__portfolioContent?.(root);
  const nodes=[...(root.matches?.('img,video,source,a')?[root]:[]),...(root.querySelectorAll?.('img,video,source,a')||[])];
  for(const el of nodes){for(const attribute of ['src','srcset','poster','alt','href']){const before=el.getAttribute(attribute);if(!before)continue;let after=window.__portfolioText(before);if(attribute==='href'){
    if(/https:\/\/(cal\.com|stripe\.com|dribbble\.com|www\.behance\.net|x\.com)/.test(after))after='/?contact=1';
    if(/^https?:\/\/mailto:/i.test(after))after='/?contact=1';
    if(after.includes('mailto:joseph'))after='mailto:'+email;
   }if(after!==before)el.setAttribute(attribute,after)}
  }
 };
 const pendingRoots=new Set();let updateFrame=0;
 const observer=new MutationObserver(records=>{for(const record of records)for(const node of record.addedNodes)if(node.nodeType===1)pendingRoots.add(node);if(pendingRoots.size&&!updateFrame)updateFrame=requestAnimationFrame(()=>{updateFrame=0;const roots=[...pendingRoots];pendingRoots.clear();for(const root of roots){if(!root.isConnected)continue;let parent=root.parentElement;while(parent&&!roots.includes(parent))parent=parent.parentElement;if(!parent)update(root)}})});
 update(document);observer.observe(document.body,{childList:true,subtree:true});
})();

