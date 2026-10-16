const {chromium}=require('../.qa/node_modules/playwright');
const AxeBuilder=require('../.qa/node_modules/@axe-core/playwright').default;
const fs=require('node:fs');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
 const result={};
 try{
  const context=await browser.newContext({viewport:{width:1440,height:900},reducedMotion:'reduce'});
  const page=await context.newPage();
  await page.goto('http://127.0.0.1:3201/',{waitUntil:'networkidle'});
  await page.waitForTimeout(4000);
  const audit=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
  result.violations=audit.violations.map(v=>({id:v.id,impact:v.impact,description:v.description,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary})).slice(0,6)}));
  result.malformedLinks=await page.locator('a[href^="https://mailto:"]').count();
  result.reducedMotion=await page.locator('h1').evaluate(e=>({text:e.textContent,opacity:getComputedStyle(e).opacity}));
  await page.screenshot({path:'docs/qa/continuation/reduced-motion.png'});
  const nojs=await browser.newPage({javaScriptEnabled:false,viewport:{width:390,height:844}});
  await nojs.goto('http://127.0.0.1:3201/',{waitUntil:'load'});
  result.noJavaScript=await nojs.locator('h1:visible').evaluate(e=>{const hidden=[];for(let n=e;n;n=n.parentElement)if(getComputedStyle(n).opacity==='0'||getComputedStyle(n).visibility==='hidden')hidden.push(n.tagName);return {text:e.textContent,hiddenAncestors:hidden}});
  await nojs.screenshot({path:'docs/qa/continuation/no-javascript.png'});
  result.staticPages=[];
  for(const {route} of require('../public/_launchfolio/portfolio-routes.json').pages){
   await nojs.goto('http://127.0.0.1:3201'+route,{waitUntil:'load'});
   result.staticPages.push({route,heading:await nojs.locator('h1:visible').innerText(),overflow:await nojs.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1)});
  }
 }finally{fs.writeFileSync('docs/qa/continuation/accessibility.json',JSON.stringify(result,null,2));await browser.close()}
 console.log(JSON.stringify(result,null,2));
 if(result.violations.length||result.malformedLinks||result.noJavaScript.hiddenAncestors.length||result.staticPages.some(page=>page.overflow||!page.heading))process.exitCode=1;
})();
