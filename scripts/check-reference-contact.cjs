const {chromium}=require('../.qa/node_modules/playwright');
(async()=>{
 const b=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
 try{
  const p=await b.newPage({viewport:{width:1440,height:1000}});
  const failures=[];p.on('requestfailed',r=>failures.push(r.url()));p.on('pageerror',e=>failures.push(e.message));
  const submissions=[];p.on('request',r=>{if(r.method()==='POST')submissions.push(r.url())});
  await p.goto('http://127.0.0.1:3201/?contact=1');await p.waitForTimeout(4500);
  await p.locator('input[name=Name]').fill('Portfolio QA');
  await p.locator('input[name=Email]').fill('qa@example.com');
  await p.locator('textarea').fill('Local form validation only.');
  await p.locator('select').selectOption({index:1});
  await p.getByRole('button',{name:'Submit button',exact:true}).click();
  console.log(JSON.stringify({draft:await p.locator('.portfolio-draft').innerText(),mailto:await p.locator('.portfolio-draft a').getAttribute('href'),submissions,failures},null,2));
  await p.screenshot({path:'docs/qa/personalization/contact.png'});
 }finally{await b.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
