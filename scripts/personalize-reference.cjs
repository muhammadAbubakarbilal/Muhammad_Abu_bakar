/* Keep the captured renderer intact; customize its content before hydration and
 * at the CMS string-decoding boundary. Originals are retained outside public/. */
const fs=require('fs'),path=require('path'),crypto=require('crypto'),ts=require('typescript');
const root='public/_launchfolio',backup='.qa/reference-original';
if(!fs.existsSync(backup))fs.cpSync(root,backup,{recursive:true});
const data={};new Function('exports',ts.transpileModule(fs.readFileSync('lib/data.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText)(data);
const source=JSON.parse(fs.readFileSync('docs/qa/personalization/source-content.json','utf8'));
const replacements=new Map();const add=(a,b)=>{if(a&&a!==b)replacements.set(a,b)};
const exact=new Map();
const name='Muhammad Abu Bakar',email='abgakhar787@gmail.com';
const literal={
 'LaunchFolio Portfolio Framer Template':name+' — AI Systems & Automation Engineer',
 'Joseph Alexander':name,'JosephAlexWeb':'muhammadAbubakarbilal','JOSEPH':'ABUBAKAR','joseph@launchnow.design':email,
 "Available for August'25":'Discuss your next project','99+ Happy clients':'Websites · AI · Automation','1,214':'Let’s connect',
 'Full-stack Designer':'AI & Automation Engineer','Full-Stack Designer':'Independent Build','Staff Product Designer':'Demo Architecture','2012-2024':'Portfolio','2020-2022':'Demo system','2016-2020':'Concept study',
 'My work history':'Selected work','Hear from what my clients have to say.':'A thoughtful approach to every project.',
 'Trusted by many':'Built with modern tools','My tech stack':'My toolkit',
 'Framer Development':'Website Development','Brand Design':'AI Assistants','Motion Graphics':'Workflow Automation','3D Design':'CRM Integrations','UX / UI Consultation':'Software Consultation',
 'Framer development':'Website development','Shopify/Framer Development':'Custom Development','Photography':'Integrations','3D Graphics':'Workflow Architecture','Branding':'Interface Design',
 'Clear costs, no hidden fees. Select from monthly subscriptions or individual project rates.':'Clear scope, practical solutions. Discuss a website, AI assistant or connected business workflow.',
 'Subscribe via stripe & start requesting through my trello board.':'Share your goals, current tools and the problem you want to solve.',
 'Request whatever service I offer, from branding to web design.':'Agree the scope, technical approach and what a useful result looks like.',
 'Receive your design within 48 hours on average.':'Review the work in stages, then prepare the agreed handoff.',
 'Subscribe':'Discuss','Request':'Define','Receive':'Build',
 'Subscription design services for brands who move fast.':'Connected digital systems built around your business.',
 'Slots available':'Start a conversation','Unlimited Design':'Project Collaboration',
 'One flat monthly rate for unlimited design requests. Ideal for ongoing design requirements.':'Websites, AI assistants and automation. A focused scope shaped around your goals.',
 '$8,000':'Let’s talk','/ month':'/ project','No contracts or commitments':'Scope agreed before work begins','Pause or cancel anytime':'Clear milestones and reviews','Multiple Brands':'Your existing tools','Unlimited requests':'Defined deliverables','Avg 48 hour turnaround':'Agreed delivery schedule','3 revision rounds':'Agreed review stages','Fixed timeline':'Agreed timeline',
 'Skip the agency markup and work directly with an experienced designer.':'Work directly with the person designing and building your solution.',
 'Book a call with me':'Discuss a project with me','Book a free discovery call.':'Discuss your project.','Email or book a call':'Email or discuss a project',
 'View Live Site':'Discuss a similar project','Client':'Project','Year':'Study',
 'Follow me to keep in touch':'Explore more of my work','Where I share my creative journey, design experiments, and industry thoughts.':'Websites, AI assistants and automation: practical notes and documented project studies.',
 'Social':'Connect','Call Me':'Project','Book Now':'Get in touch',
 'Kora':'Portfolio Studio','KYMA':'Lead Operations','Mugen':'AI Receptionist','Axiom':'Onboarding',
 'Consulting Site':'Independent website','AI Agency':'Demo automation','Design studio':'Demo assistant','Ecommerce Site':'Demo workflow',
 'Building a better brand':'A focused engineering portfolio','Visualizing Next-Gen Server Architecture':'Connecting inquiries to the next step','Designing a Better Way to Work':'A clearer path for customer inquiries','Crafting a Revolutionary E-Commerce Presence for Architectural Menswear':'A connected customer onboarding workflow',
 'Project media is built from blocks.':'A closer look at the system.',
 'Full Width gives each image its own row.':'The experience and the architecture.',
 '2 Columns and 3 Columns place media side by side.':'Clear stages and human handoffs.',
 'Got a cool idea? This spot is waiting for your success story.':'Have a project in mind? Let’s explore what you need.',
 'Terms of service':'Working together',
 'Request a quote':'Discuss a project','Send Message':'Prepare Email',
 'By submitting this form, you agree to the Privacy Policy.':'Prepare a draft, then review and send it from your email app.',
 'Headshot of *Designer Name*':'Muhammad Abu Bakar',
 'Designer':'Concept Build',
};Object.entries(literal).forEach(([a,b])=>add(a,b));
const home=source.find(p=>p.route==='/');
const principles=[
 ['Clear scope','Start with the people, the problem and the outcome. Agree what needs to be built before choosing the tools.'],
 ['Connected thinking','Design the interface and the workflow together, with a clear place for information and a clear next step.'],
 ['People in the loop','Use AI where it helps, with defined limits and a handoff for important decisions and exceptions.'],
 ['Purposeful design','Every page and interaction should help someone understand, decide or take the next step.'],
 ['Reviewable progress','Share the work in stages so feedback can shape the solution while it is being built.'],
 ['Practical handoff','Agree the launch, documentation and maintenance needs before putting the system into use.']];
const testimonialTexts=home.texts.filter(t=>/support tickets|Working with Joseph|conversion rate|design approach|rebranding exceeded|redesign transformed/.test(t));
testimonialTexts.forEach((t,i)=>add(t,principles[i%6][1]));
['Martina Martinez','Thomas Weber','Ben Harper','Michael Wong','Natalie Rivera','Emma Kraft','Jake Mallard','David Kim','Robert Thompson'].forEach((t,i)=>add(t,principles[i%6][0]));
home.texts.filter(t=>/^(Customer Manager|Co-founder|CTO|Data Scientist|Brand Manager|CMO) /.test(t)).forEach(t=>add(t,'How I work'));
source.flatMap(p=>p.texts).filter(t=>/^".*(Joseph|conversion)/.test(t)).forEach(t=>add(t,'“A clear interface, a reliable workflow and a person in the loop when it matters.”'));
source.flatMap(p=>p.texts).filter(t=>/^(Marketing at|CTO of|Co-founder of) /.test(t)).forEach(t=>add(t,'Project approach'));
const about=home.texts.filter(t=>/^(I love turning|I focus on creating|I'm a bit of)/.test(t));
about.forEach((t,i)=>add(t,[
 'I build websites, AI assistants and connected business systems. My starting point is understanding the people, the problem and the outcome a business needs. Then I choose the interface and tools that fit the work.',
 'I focus on clear user experiences and practical integrations. From a website to a customer workflow, the interface and the information behind it should work together, with useful defaults and a clear next step.',
 'I care about the details that make software useful: readable interfaces, sensible error handling and clear handoffs. Scope, design, build and review happen in stages, with room for feedback along the way.'
 ][i]));
home.texts.filter(t=>/^(Project timelines|Absolutely!|My process stands|Yes, I provide|I take confidentiality)/.test(t)).forEach((t,i)=>add(t,[
 'Timing depends on the scope, integrations and material already available. We discuss the requirements before agreeing a delivery plan.',
 'Yes. I review your existing website, tools and APIs before proposing changes, so the solution fits your current setup.',
 'I map the interface and the workflow together. You review the work in stages, and important decisions stay with the people responsible for them.',
 'Handoff, maintenance and ongoing support are agreed for the specific project before launch.',
 'Access, storage and provider requirements are considered during scoping. Confidentiality and ownership terms are agreed in the project proposal.'
 ][i]));
const projectPages=source.filter(p=>p.route.startsWith('/projects/'));
projectPages.forEach((p,i)=>{
 const project=data.PROJECTS_DATA[i];
 add(p.route.split('/').pop(),project.slug);
 p.texts.filter(t=>t.length>160&&!home.texts.includes(t)).forEach((t,j)=>add(t,[project.systemSummary,project.problem,project.aiRole,project.humanHandoff,project.businessPurpose][j%5]));
});
// Replace every article's authored body rather than attributing another writer's
// claims and stories to the portfolio owner. Short articles keep their real length.
const articlePages=source.filter(p=>p.route.startsWith('/blog/'));
articlePages.forEach((p,i)=>{
 const article=data.INSIGHTS_DATA[i%data.INSIGHTS_DATA.length];
 add(p.route.split('/').pop(),article.slug);
 const start=p.texts.indexOf('By Joseph Alexander')+1,end=p.texts.indexOf('Follow me to keep in touch');
 const body=p.texts.slice(start,end);
 const own=[article.excerpt,article.content.intro,...article.content.sections.flatMap(s=>[s.heading,...s.body]),article.content.takeaway];
 body.forEach((t,j)=>add(t,own[j]||''));
 const title=p.texts[p.texts.indexOf('By Joseph Alexander')-2];add(title,article.title);
});
// Replace template policy claims with factual descriptions of this site's flow.
for(const route of ['/terms','/privacy-policy']){const p=source.find(p=>p.route===route);const start=p.texts.findIndex(t=>t.startsWith('Last Updated'));const end=p.texts.indexOf('Let’s');const body=p.texts.slice(start,end);const own=route==='/terms'?['Project information','Working together','This portfolio presents an independent build and documented demo or concept systems. Demo studies are not claims of client deployments.','Scope and proposals','Deliverables, timing, fees, review stages, ownership and support are agreed in a project proposal before work starts.','Getting in touch','The inquiry form prepares an email draft. It does not send your message automatically. Review the draft in your email app before sending it.','Contact',email]:['About this website','Information you enter','The inquiry form uses your entries to prepare an email draft in your browser. It does not submit those entries to the template provider.','Sending an inquiry','If you choose to send the draft, your email provider delivers it to '+email+'. Your email provider handles that delivery.','Portfolio content','Project images on this site are illustrations or portfolio material. No template client testimonials or performance results are presented as verified work.','Questions','For questions about an inquiry you sent, contact '+email+'.'];body.forEach((t,i)=>{if(!home.texts.includes(t))add(t,own[i]||'')});}
// Metadata and incidental author mentions are also covered.
add('Joseph',name);add('Launchfolio free portfolio Framer template hero section','Muhammad Abu Bakar portfolio');
const assets='public/assets/portfolio';fs.mkdirSync(assets,{recursive:true});
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
for(let i=0;i<7;i++){const p=data.PROJECTS_DATA[i];const palette=['#bfdadd','#c9c4e7','#c6d2bd','#d2bedc'];const nodes=p.workflow.slice(0,4);fs.writeFileSync(`${assets}/project-${i}.svg`,`<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1200" viewBox="0 0 1600 1200"><rect width="1600" height="1200" fill="${palette[i%4]}"/><rect x="100" y="140" width="1400" height="920" rx="24" fill="#101418"/><text x="160" y="220" fill="#aeb9c2" font-family="Arial" font-size="22">MUHAMMAD ABU BAKAR / ${esc(p.badgeType)}</text><text x="160" y="390" fill="white" font-family="Arial" font-size="64">${esc(p.title)}</text><text x="160" y="450" fill="#aeb9c2" font-family="Arial" font-size="27">${esc(p.category)}</text>${nodes.map((n,j)=>`<rect x="${160+j*325}" y="590" width="290" height="240" rx="16" fill="#1c242c" stroke="#35414d"/><text x="${185+j*325}" y="650" fill="#91b6b2" font-size="22" font-family="Arial">0${j+1}</text><text x="${185+j*325}" y="720" fill="white" font-size="20" font-family="Arial">${esc(n.title.slice(0,23))}</text>`).join('')}<text x="160" y="980" fill="#93a0ad" font-family="Arial" font-size="23">Illustrative architecture · documented project study</text></svg>`)}
fs.writeFileSync(`${assets}/mark.svg`,'<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" rx="40" fill="#141414"/><text x="40" y="49" text-anchor="middle" fill="white" font-family="Arial" font-size="26">AB</text></svg>');
const hash=u=>'/_launchfolio/assets/'+crypto.createHash('sha256').update(u).digest('hex').slice(0,20)+path.extname(new URL(u).pathname);
const identities=['pKKKvDTDIMbGXt4SKNGc5PEgrkU','qtdLa7QbKqPky8NoUcgNPzcmgCU'];
const heroIds=['wn56GiYIGN9okbMTZQ8fV2UQ0','tBF8hMQFxONWA4CXtHf3R4','AZe7hFsRlGAWp9spF25RMEwS0gA','q3ruKmoVYmFXP9EeyZlQPnTDuVw'];
// Get original remote image identifiers from unmodified local module metadata.
const allFiles=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?allFiles(path.join(dir,e.name)):[path.join(dir,e.name)]);
const rasterFiles=allFiles(backup).filter(f=>/\.(jpg|jpeg|png|webp|avif)$/i.test(f));
rasterFiles.forEach((f,i)=>add('/_launchfolio/'+path.relative(backup,f).replaceAll('\\','/'),`/assets/portfolio/project-${i%7}.svg`));
const remoteImageMap=new Map();
// Known source image URLs plus variants found in CMS binary payloads.
for(const f of allFiles(backup)){if(!/\.(html|mjs|framercms)$/.test(f))continue;const t=fs.readFileSync(f,'utf8');for(const m of t.matchAll(/https:\/\/framerusercontent\.com\/images\/([A-Za-z0-9_-]+)\.(jpg|jpeg|png|webp|avif)(?:\?[^\s"'<>`\\\x00-\x1f]*)?/g)){let u=m[0].replaceAll('&amp;','&');const id=m[1];let dest=identities.includes(id)?'/assets/abu_bakar.jpg':heroIds.includes(id)?`/assets/portfolio/project-${heroIds.indexOf(id)}.svg`:`/assets/portfolio/project-4.svg`;if(id==='bwCVICcrKWXkOTrVdIrYz2EsNc')continue;remoteImageMap.set(u,dest);add(u,dest);add(hash(u),dest)}}
// The HTML capture gives an unambiguous mapping for profile and main project media.
add('/_launchfolio/assets/2e8a3b05d987723bbcea.jpg','/assets/abu_bakar.jpg');
const homeHtml=fs.readFileSync(backup+'/pages/index.html','utf8');
for(const m of homeHtml.matchAll(/<img\b[^>]*>/g)){const tag=m[0],src=tag.match(/src="([^"]+)"/)?.[1];if(!src)continue;let dest;if(/Portrait of Joseph|Headshot of/.test(tag))dest='/assets/abu_bakar.jpg';else {const i=['Kora website','KYMA website','Mugen Studio','Axiom website'].findIndex(s=>tag.includes(s));if(i>=0)dest=`/assets/portfolio/project-${i}.svg`;else if(/width="76"/.test(tag))dest='/assets/portfolio/mark.svg';else if(/Lightning Bolt/.test(tag)){replacements.delete(src);continue;}}if(dest){add(src,dest);for(const v of (tag.match(/srcset="([^"]+)"/)?.[1]||'').split(',')){const u=v.trim().split(' ')[0];if(u)add(u,dest)}}}
// Preserve rich-text emphasis while changing the individual strings React owns.
for(const page of source)for(const block of page.blocks||[]){const replacement=replacements.get(block.text);if(replacement===undefined||block.runs.length<2)continue;const words=replacement?replacement.split(/\s+/):[];let consumed=0,characters=0;const length=block.runs.join('').length;for(let i=0;i<block.runs.length;i++){const run=block.runs[i];characters+=run.length;const end=i===block.runs.length-1?words.length:Math.round(words.length*characters/length);const value=words.slice(consumed,end).join(' ')+(end>consumed&&i<block.runs.length-1?' ':'');if(run.trim()){if(run.trim().length>25)add(run,value);else {}}consumed=end}}
// Explicit rich-text runs avoid redistributing words across emphasis boundaries.
for(const[a,b]of [
 ['Hear from what my ','A thoughtful approach, '],['clients have to say.','from start to finish.'],
 ['Trusted by ','Built with '],['many','modern tools'],
 ['The new UI design ','Start with '],['cut our customer support tickets in half.','the people, the problem and the outcome.'],[" It's been a game-changer for us.",' Agree the scope before choosing the tools.'],
 ['Our website ','Use AI '],['conversion rate improved significantly','where it helps, with defined limits'],[" thanks to Joseph's expertise.",' and a handoff for important decisions.'],
 ["We've seen a 30% increase in engagement",'Agree the launch, handoff and maintenance'],[' since launch.',' before putting the system into use.'],
 ['Strategic design that drives growth, not just looks good.','Websites, AI and systems that work together.'],
 [' I create everything your brand needs to attract customers and turn them into sales.',' I design interfaces and connect the tools that help your business serve customers and keep work moving.'],
 ['Subscription design services ','Connected digital systems '],
 ['The redesign transformed our brand image. ','A useful handoff starts before launch. '],
 ]){add(a,b);exact.set(a,b)}
for(const label of ['Work','Services','Pricing','Blog','Contact','Menu','Email','Design','You','View All','View Project'])replacements.delete(label);
for(const key of Object.keys(literal))exact.delete(key);
Object.entries(literal).forEach(([a,b])=>add(a,b));
const business=require('./business-content.cjs')({source,data,replacements,exact});
const siteURL=process.env.NEXT_PUBLIC_SITE_URL||'https://abubakarbilal.netlify.app';
add('https://launchfolio.framer.website',siteURL);
const map=[...replacements].sort((a,b)=>b[0].length-a[0].length);
for(const key of exact.keys()){if(key.trim().length<5||['Work','Services','Pricing','Blog','Contact','Menu','Email','Design','You','View All','View Project'].includes(key.trim()))exact.delete(key)}
exact.set(' '+String.fromCharCode(8211),' ');
const variants=new Map(map);for(const[a,b]of map){variants.set(esc(a),esc(b));let x=a,y=b;for(let i=0;i<3;i++){x=JSON.stringify(x).slice(1,-1);y=JSON.stringify(y).slice(1,-1);variants.set(x,y)}}
const pattern=new RegExp([...variants.keys()].sort((a,b)=>b.length-a.length).map(s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|'),'g');
function transform(text){if(exact.has(text))return exact.get(text);text=text.replace(pattern,match=>variants.get(match));for(const[a,b]of exact)text=text.split('>'+esc(a)+'<').join('>'+esc(b)+'<');return text}
fs.mkdirSync('docs/qa/content-pass',{recursive:true});
fs.writeFileSync('docs/qa/content-pass/change-map.json',JSON.stringify(business.changes,null,2));
fs.writeFileSync(root+'/portfolio-map.json',JSON.stringify(map));
fs.writeFileSync(root+'/portfolio-routes.json',JSON.stringify({pages:source.map(p=>({route:transform(p.route),file:p.file}))},null,2));
// HTML and module literals are already personalized at build time. Ship only
// mappings still needed by the binary CMS, instead of three duplicate tables.
const cmsSource=allFiles(backup).filter(f=>f.endsWith('.framercms')).map(f=>fs.readFileSync(f,'utf8')).join('\n');
const scopedVariants={};for(const [route,entries] of Object.entries(business.scoped)){const v={...entries};for(const [a,b] of Object.entries(entries)){let x=a,y=b;v[esc(a)]=esc(b);for(let i=0;i<3;i++){x=JSON.stringify(x).slice(1,-1);y=JSON.stringify(y).slice(1,-1);v[x]=y;}}scopedVariants[route]=v;}
const runtimeValues=Object.fromEntries([...variants].filter(([key])=>cmsSource.includes(key)));
const runtimeExact=Object.fromEntries([...exact].filter(([key])=>cmsSource.includes(key)));
fs.writeFileSync(root+'/portfolio-data.js','{const scoped='+JSON.stringify(scopedVariants)+';const exact='+JSON.stringify(runtimeExact)+';const values='+JSON.stringify(runtimeValues)+';const escape=s=>s.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");const pattern=new RegExp(Object.keys(values).sort((a,b)=>b.length-a.length).map(escape).join("|"),"g");const cache=new Map();window.__portfolioText=text=>{if(cache.has(text))return cache.get(text);const local=scoped[location.pathname];const localKeys=local&&Object.keys(local).sort((a,b)=>b.length-a.length);const original=text;if(localKeys){const localPattern=new RegExp(localKeys.map(escape).join("|"),"g");text=text.replace(localPattern,match=>local[match]);}const value=Object.hasOwn(exact,text)?exact[text]:text.replace(pattern,match=>values[match]);if(cache.size>=256)cache.delete(cache.keys().next().value);cache.set(text,value);return value;};}');
let changed=0;
for(const f of allFiles(backup)){if(!/\.(html|mjs)$/.test(f))continue;let t=fs.readFileSync(f,'utf8');if(f.endsWith('.mjs')){
 // Framework/vendor modules contain no portfolio copy. Avoid parsing them.
 if(/^(react\.|motion\.|framer\.|Lenis\.|rolldown-runtime)/.test(path.basename(f))){
  // Captured project lightboxes receive the existing local image paths.
  // Retain their URL resolution when regenerating from the remote originals.
  t=t.replace('new URL(t.src)','new URL(t.src,globalThis.location?.origin)');
  fs.writeFileSync(path.join(root,path.relative(backup,f)),t);continue}
 const tree=ts.createSourceFile(f,t,ts.ScriptTarget.Latest,true,ts.ScriptKind.JS),edits=[];
 function visit(n){if(ts.isPropertyAssignment(n)&&n.name.getText(tree)==='EditorBar'){edits.push({start:n.initializer.getStart(tree),end:n.initializer.end,text:'void 0'});return}if(ts.isStringLiteral(n)||ts.isNoSubstitutionTemplateLiteral(n)){if(ts.isPropertyAssignment(n.parent)&&n.parent.name.getText(tree)==='"data-framer-name"')return;const value=transform(n.text);if(value!==n.text)edits.push({start:n.getStart(tree),end:n.end,text:JSON.stringify(value)})}ts.forEachChild(n,visit)}visit(tree);
 for(const e of edits.sort((a,b)=>b.start-a.start))t=t.slice(0,e.start)+e.text+t.slice(e.end);
 t=t.replaceAll('return e.textDecoder.decode(n)','return globalThis.__portfolioText(e.textDecoder.decode(n))');
 // The static server returns complete CMS files; adapt the original byte-range reader.
 t=t.replaceAll('if(l.length!==i)throw Error("Define failed: Unexpected response length");','if(l.length!==i){const full=l;l=new Uint8Array(i);let at=0;for(const range of n){if(range.to>full.length)throw Error("CMS range exceeds file");l.set(full.subarray(range.from,range.to),at);at+=range.to-range.from;}}');
 t=t.replaceAll('https://framer.com/m/phosphor-icons/','/_launchfolio/icons/').replaceAll('${N}${x}.js@0.0.57','${N}${x}.mjs');
 t=t.replace('O.__framer_events=O.__framer_events||[],re();','O.__framer_events=[];');
 }else{const page=source.find(p=>('pages/'+p.file).replaceAll('\\','/')===path.relative(backup,f).replaceAll('\\','/'));const route=page&&transform(page.route);const local=scopedVariants[route];if(local){const localPattern=new RegExp(Object.keys(local).sort((a,b)=>b.length-a.length).map(s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\}else{t=transform(t);')).join('|'),'g');t=t.replace(localPattern,match=>local[match]);}t=transform(t);t=t.replace(/data-framer-hydrate-v2="[^"]*"/g,'');t=t.replace('<head>','<head><script src="/_launchfolio/portfolio-data.js"></script><link rel="stylesheet" href="/_launchfolio/portfolio.css">');t=t.replace('</body>','<script src="/_launchfolio/portfolio.js" defer></script></body>');t=t.replace(/<script[^>]*src="https:\/\/events\.framer\.com[^>]*><\/script>/g,'');t=t.replace(/<link[^>]*rel="canonical"[^>]*>/g,'');t=t.replaceAll('https://launchfolio.framer.website','');}const target=path.join(root,path.relative(backup,f));fs.writeFileSync(target,t);changed++}
require('./write-business-content.cjs')({root,source,data,business,siteURL,transform});
require('./reorder-homepage.cjs')(root);
console.log('Personalized',changed,'documents/modules;',map.length,'content and asset replacements.');
