const { chromium } = require('../.qa/node_modules/playwright');
const fs = require('node:fs');
(async () => {
 fs.mkdirSync('docs/qa/launchfolio-reference',{recursive:true});
 const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
 const page=await browser.newPage();
 for(const width of [1440,768,390]){
  await page.setViewportSize({width,height:1000});
  await page.goto('https://launchfolio.framer.website/',{waitUntil:'networkidle',timeout:60000});
  await page.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=700){scrollTo({top:y,behavior:'instant'});await new Promise(r=>setTimeout(r,180));}scrollTo({top:0,behavior:'instant'});});
  await page.waitForTimeout(1500);
  await page.screenshot({path:`docs/qa/launchfolio-reference/full-${width}.png`,fullPage:true});
  await page.screenshot({path:`docs/qa/launchfolio-reference/hero-${width}.png`});
  if(width===1440){
   const data=await page.evaluate(()=>({fonts:[...document.styleSheets].flatMap(s=>{try{return [...s.cssRules].filter(r=>r.cssText.startsWith('@font-face')&&r.cssText.includes('Switzer')).map(r=>r.cssText)}catch{return []}}),images:[...document.images].map(i=>({src:i.currentSrc||i.src,alt:i.alt})),elements:[...document.querySelectorAll('h1,h2,nav,footer')].map(e=>({text:e.textContent.slice(0,100),css:getComputedStyle(e).cssText,rect:JSON.parse(JSON.stringify(e.getBoundingClientRect()))}))}));
   fs.writeFileSync('docs/qa/launchfolio-reference/details.json',JSON.stringify(data,null,2));
  }
  console.log('Reference captured',width);
 }
 await browser.close();
})().catch(e=>{console.error(e);process.exitCode=1});
