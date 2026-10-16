const fs=require('fs');
const {chromium}=require('../.qa/node_modules/playwright');
const manifest=require('../public/_launchfolio/portfolio-routes.json');
const model=JSON.parse(fs.readFileSync('public/_launchfolio/portfolio-content.js','utf8').split('\n')[0].replace('window.__portfolioContentData=','').replace(/;$/,''));
const normalize=s=>s.replace(/\s+/g,' ').trim();
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
 const result={pages:[],errors:[],failed:[],assertions:[]};
 const check=(name,passed)=>result.assertions.push({name,passed});
 try{
  const page=await browser.newPage();
  page.on('pageerror',e=>result.errors.push(e.message));
  page.on('console',m=>{if(m.type()==='error')result.errors.push(m.text());});
  page.on('response',r=>{if(r.status()>=400)result.failed.push({url:r.url(),status:r.status()});});
  const routes=[...manifest.pages.map(p=>p.route),'/work/knowledge-intelligence-rag','/work/multi-channel-crm-sync','/work/custom-ops-portal','/insights/website-chatbot-crm-architecture'];
  for(const width of [1440,390]){
   await page.setViewportSize({width,height:900});
   for(const route of routes){
    await page.goto('http://127.0.0.1:3201'+route,{waitUntil:'networkidle'});await page.waitForTimeout(route==='/'?4000:650);
    const state=await page.evaluate(()=>({text:document.body.innerText,title:document.title,description:document.querySelector('meta[name="description"]')?.content,canonical:document.querySelector('link[rel="canonical"]')?.href,overflow:document.documentElement.scrollWidth>innerWidth+1,brokenImages:[...document.images].filter(i=>i.complete&&i.naturalWidth===0).map(i=>i.src),headings:[...document.querySelectorAll('h1,h2')].map(e=>e.textContent)}));
    result.pages.push({route,width,...state});check(width+' '+route+' no horizontal overflow',!state.overflow);check(width+' '+route+' images loaded',!state.brokenImages.length);
    if(model.pages[route]){const copy=model.pages[route];check(width+' '+route+' metadata',state.description===copy.description&&state.canonical===model.siteURL+route);if(copy.body)copy.body.forEach((text,i)=>check(width+' '+route+' body '+i,normalize(state.text).includes(normalize(text))));}
    if(route==='/'){
     check(width+' home heading',normalize(state.text).includes("Visitors shouldn't have to guess. You shouldn't have to chase"));
     check(width+' about copy',normalize(state.text).includes('I build websites, AI assistants, and custom software. I start by understanding'));
     check(width+' pricing copy',normalize(state.text).includes('built around a clearly defined project scope.'));
     await page.screenshot({path:`docs/qa/content-pass/after-${width}.png`});
     for(let y=700;y<await page.evaluate(()=>document.body.scrollHeight);y+=700){await page.evaluate(y=>scrollTo(0,y),y);await page.waitForTimeout(60);}
     await page.waitForTimeout(700);await page.screenshot({path:`docs/qa/content-pass/after-full-${width}.png`,fullPage:true});
    }
    if(route.startsWith('/projects/'))await page.screenshot({path:`docs/qa/content-pass/${route.split('/').pop()}-${width}.png`});
    console.log(width,route);
   }
  }
  await page.setViewportSize({width:1440,height:900});
  await page.goto('http://127.0.0.1:3201/projects/personal-engineering-studio',{waitUntil:'networkidle'});
  const next=page.locator('a[href$="/agency-lead-operations"]').first();await next.click();await page.waitForTimeout(1500);
  check('project navigation retains unique body',normalize(await page.locator('body').innerText()).includes(normalize(model.pages['/projects/agency-lead-operations'].body[2])));
  await page.goto('http://127.0.0.1:3201/',{waitUntil:'networkidle'});
  await page.getByText('Can you work with my existing brand and designs?',{exact:true}).click();await page.waitForTimeout(500);
  check('FAQ expands',await page.getByText('Yes. I review your existing website, tools and APIs before proposing changes, so the solution fits your current setup.',{exact:true}).isVisible());
  await page.mouse.move(20,200);await page.mouse.wheel(0,1400);await page.waitForTimeout(1200);const down=await page.locator('nav').first().getAttribute('data-framer-name');await page.mouse.wheel(0,-500);await page.waitForTimeout(1200);const up=await page.locator('nav').first().getAttribute('data-framer-name');check('navbar contracts down / expands up',down==='Nav Closed'&&up==='Nav Default');result.nav={down,up};
  await page.goto('http://127.0.0.1:3201/?contact=1',{waitUntil:'networkidle'});await page.waitForTimeout(1500);
  const posts=[];page.on('request',r=>{if(r.method()==='POST')posts.push(r.url());});
  await page.locator('input[name=Name]').fill('Portfolio QA');await page.locator('input[name=Email]').fill('qa@example.com');await page.locator('textarea').fill('Local content verification only.');await page.locator('select').selectOption({index:1});await page.getByRole('button',{name:'Submit button',exact:true}).click();
  check('draft not sent',/has not been sent/.test(await page.locator('.portfolio-draft').innerText())&&posts.length===0);check('mailto retained',(await page.locator('.portfolio-draft a').getAttribute('href')).startsWith('mailto:abgakhar787@gmail.com'));
  await page.screenshot({path:'docs/qa/content-pass/contact-desktop.png'});
  await page.setViewportSize({width:390,height:844});await page.goto('http://127.0.0.1:3201/',{waitUntil:'networkidle'});await page.waitForTimeout(500);const nav=page.locator('nav').first();const rect=await nav.boundingBox();await nav.click({position:{x:rect.width-25,y:28}});await page.waitForTimeout(500);result.mobileNav=await nav.getAttribute('data-framer-name');check('mobile menu opens',/Open/.test(result.mobileNav));
 }finally{fs.writeFileSync('docs/qa/content-pass/results.json',JSON.stringify(result,null,2));await browser.close();}
 console.log(JSON.stringify({errors:result.errors,failed:result.failed,failedAssertions:result.assertions.filter(a=>!a.passed)},null,2));
 if(result.errors.length||result.failed.length||result.assertions.some(a=>!a.passed))process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1;});
