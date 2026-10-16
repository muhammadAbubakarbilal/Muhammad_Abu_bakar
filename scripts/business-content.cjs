/* Authored content only. Original keys remain intact for reproducible captures. */
module.exports = ({source, data, replacements, exact}) => {
 const changes=[];
 const set=(old,value,route='shared',section='Copy')=>{
  changes.push({route,section,current:replacements.get(old)||old,proposed:value,source:'scripts/business-content.cjs',mechanism:'Original literal / rich-text run mapping',layout:'Existing nodes and emphasis retained; wording may reflow'});
  if(old.trim().length<5){if(old==='"')replacements.set(JSON.stringify([5,old]),JSON.stringify([5,value]));return;}
  replacements.set(old,value);exact.set(old,value);
 };
 const pairs={
  'Design that delivers results.':'Websites, AI & systems. Built for business.',
  'Design that ':'Websites, AI & systems. ',
  'delivers results.':'Built for business.',
  'Strategic design that drives growth, not just looks good.':'I design professional websites',
  'I create everything your brand needs to attract customers and turn them into sales.':'and build AI assistants, CRM workflows, and custom software that help businesses manage inquiries, connect their tools, and reduce repetitive work.',
  'Services that supercharge your business.':'What I build for businesses.',
  'Services that ':'What I build ',
  'supercharge your business.':'for businesses.',
  'Full-stack Designer':'AI Systems & Automation Engineer',
  'Full-Stack Designer':'Automation Demo',
  '2012-2024':'Demo system',
  'Staff Product Designer':'Assistant Demo',
  'Web Apps':'Custom Software',
  '3D Design':'CRM & Follow-up',
  'UX / UI Consultation':'Systems Consulting',
  'Designing experiences':'Building solutions',
  'that solve real problems.':'around real business needs.',
  'Simple pricing. ':'Clear scope. ',
  'Standout designs.':'Practical solutions.',
  'Clear costs, no hidden fees. Select from monthly subscriptions or individual project rates.':"Every project starts with what your business needs—whether that's a website, AI assistant, custom application, or connected workflow.",
  'One flat monthly rate for unlimited design requests. Ideal for ongoing design requirements.':'Websites, AI assistants, and connected systems built around a clearly defined project scope.',
  'Comprehensive design services for any project scope. Ideal for one-time design needs or individual tasks.':'A focused website, application, or automation project with agreed deliverables, timelines, and review stages.',
  'Subscription design services ':'Digital solutions ',
  'for brands who move fast.':'for your business.',
  'From my blog,':'Practical insights on',
  'design insights.':'websites, AI & systems.',
  'No fluff, just hard-hitting design projects.':"A selection of websites, AI assistants, and business systems I've worked on.",
  'My design insights & creative resources':'Practical notes on websites, AI & automation.',
  'A collection of articles sharing professional design expertise, creative processes, and strategic thinking. Browse these resources to elevate your brand and understand the impact thoughtful design can have on your business.':'Thoughts on building useful digital experiences, connecting business tools, and deciding where automation makes sense.',
  'Schedule Now':"Let's Talk",'Book a call':"Let's Talk",
  'Fill out the form below or book a call.':'Share a few details to prepare an email you can review and send.',
  'Fill out the form below or ':'Prepare an email you can review and send. ',
  'book a call.':'Or email me.',
  'cal.com':'mailto:abgakhar787@gmail.com',
  'By submitting this form, you agree to the ':'Before preparing your email, read the ',
  'Clear costs, no hidden fees.':'Every project starts with what your business needs—',
  'Select from monthly subscriptions or individual project rates.':"whether that's a website, AI assistant, custom application, or connected workflow.",
  'One flat monthly rate for unlimited design requests.':'Websites, AI assistants, and connected systems',
  'Ideal for ongoing design requirements.':'built around a clearly defined project scope.',
  'Comprehensive design services for any project scope.':'A focused website, application, or automation project',
  'Ideal for one-time design needs or individual tasks.':'with agreed deliverables, timelines, and review stages.',
  'Request a quote':'Tell me about your project.',
  'Consulting Site':'Independent website','AI Agency':'Automation demo','Design studio':'Assistant demo','Ecommerce Site':'Workflow concept',
  'Got a cool idea?':'Have a project',
  ' This spot is waiting for your success story.':' in mind? Let’s explore what you need.',
 };
 Object.entries(pairs).forEach(([a,b])=>set(a,b));
 const home=source.find(p=>p.route==='/');
 const about=[
  'I build websites, AI assistants, and custom software. I start by understanding what a business needs, who will use the solution, and what needs to work better.',
  "Sometimes that's a clearer website. Sometimes it's a connected CRM, better follow-up, or an automated workflow. The right solution depends on the actual process—not the latest tool.",
  "I focus on simple interfaces, reliable connections, and clear handoffs. You see the work in stages, understand what's being built, and stay involved in decisions that matter."
 ];
 home.texts.filter(t=>/^(I love turning|I focus on creating|I'm a bit of)/.test(t)).forEach((t,i)=>set(t,about[i],'/','About'));
 // Preserve each existing rich-text node, including short trailing punctuation.
 const split=(block,value,route)=>{
  set(block.text,value,route);
  if(block.runs.length<2)return;
  const words=value.split(' ');let previous=0,total=0;
  block.runs.forEach((run,i)=>{
   total+=run.length;
   const end=i===block.runs.length-1?words.length:Math.round(words.length*total/block.runs.join('').length);
   if(run.trim())set(run,words.slice(previous,end).join(' ')+(end>previous&&end<words.length?' ':''),route);
   previous=end;
  });
 };
 const principles=[
  ['The new UI design','Start with the business goal and the people using the solution. Define the work before choosing tools.'],
  ['Working with Joseph felt like having a seasoned design partner who truly understood our vision for Zazzle','Consider how the website, customer information, and everyday tools need to work together.'],
  ['Our website conversion','Use AI where it helps, while keeping important decisions with the people responsible.'],
  ["Joseph's design approach",'Make the experience clear for customers, staff, and anyone who needs to use it.'],
  ['The rebranding exceeded','Share work in stages so feedback can shape the solution before delivery.'],
  ['The redesign transformed','Agree on launch, documentation, maintenance, and next steps before the project is completed.']
 ];
 for(const [prefix,value] of principles){const b=home.blocks.find(b=>b.text.startsWith(prefix));if(b)split(b,value,'/');}
 home.blocks.filter(b=>/^(I love turning|I focus on creating|I'm a bit of)/.test(b.text)).forEach((b,i)=>split(b,about[i],'/'));
 const aboutStarts=['I build websites, AI assistants, and custom software.',"Sometimes that's a clearer website.",'I focus on simple interfaces, reliable connections, and clear handoffs.'];
 home.blocks.filter(b=>/^(I love turning|I focus on creating|I'm a bit of)/.test(b.text)).forEach((b,i)=>{
  set(b.runs[0],aboutStarts[i],'/','About');
  set(b.runs[b.runs.length-1],about[i].slice(aboutStarts[i].length).trimStart(),'/','About');
 });
 for(const b of home.blocks)if(pairs[b.text]&&b.runs.length>1&&b.runs.every(r=>!r.trim()||r.trim().length>25))split(b,pairs[b.text],'/');
 // This short dash is an authored text node, not punctuation to replace globally.
 exact.set(' –',' ');
 const principle='A clear interface, a reliable workflow and a person in the loop when it matters.';
 for(const p of source)for(const b of p.blocks||[])if(b.text.startsWith('"')&&/Joseph|conversion/.test(b.text))split(b,principle,p.route);
 // Shared testimonial fragments also occur in the approach cards. Restore their
 // unquoted mapping last; case-study quotes are separately scoped below.
 for(const [prefix,value] of principles){const b=home.blocks.find(b=>b.text.startsWith(prefix));if(b)split(b,value,'/');}
 const projects=[
  ['A personal portfolio built around the work.',
   'An independent website presenting my work in websites, AI assistants, and business systems. Responsive pages help visitors explore the services and clearly labeled project studies.',
   'The portfolio brings project summaries, service information, and an inquiry path into one place. Demo studies are identified separately from the independent website build.',
   'The interface adapts to desktop and mobile screens, with animated project previews and readable case studies. Each section helps visitors understand the work and decide what to explore next.',
   'The inquiry form prepares an email draft for the visitor to review and send. Scope, timing, and pricing are discussed directly before any project commitments.'],
  ['A clearer path from inquiry to follow-up.',
   'An automation demo exploring how an agency could organize incoming inquiries, assist with qualification, and keep follow-up information together. It is not a verified client deployment.',
   'The proposed workflow captures inquiry details and organizes them for review. A shared customer record gives the team context for the next conversation.',
   'AI can help summarize an inquiry and suggest a qualification category. Defined workflow rules would pass reviewed information to the CRM and support follow-up tasks.',
   'People review uncertain inquiries, approve important decisions, and handle the sales conversation. Delivery, integrations, and follow-up rules would be confirmed for the business.'],
  ['An AI receptionist with a human handoff.',
   'An assistant demo for routine service inquiries. The concept collects useful details and directs conversations to a person when the request needs judgment or confirmation.',
   'Customers could ask routine questions and explain what they need. The assistant would use approved business information and collect details for the team.',
   'The proposed workflow keeps the conversation and relevant customer details together. Appointment requests would be passed on for confirmation rather than treated as guaranteed bookings.',
   'A person handles exceptions, confirms availability and pricing, and takes over important conversations. This demo does not establish autonomous booking or service accuracy.'],
  ['A more organized start for every project.',
   'A workflow concept for business customer onboarding. It brings intake details, requested documents, and a readiness checklist into a clearer handoff for the team.',
   'The proposed intake gathers the information needed to begin a project. A checklist makes missing details and outstanding documents easier to identify.',
   'Document checks could flag incomplete information for review. Reminders and status updates would help customers and staff understand what is still needed.',
   'The responsible team reviews documents, resolves exceptions, and confirms readiness before kickoff. The concept describes a proposed workflow, not a deployed client system.']
 ];
 const scoped={};
 source.filter(p=>p.route.startsWith('/projects/')).forEach((p,i)=>{
  const values=projects[i],route='/projects/'+data.PROJECTS_DATA[i].slug;
  const headlines=['Building a better brand','Visualizing Next-Gen Server Architecture','Designing a Better Way to Work','Crafting a Revolutionary E-Commerce Presence for Architectural Menswear'];
  set(headlines[i],values[0],route,'Project headline');
  const intro=p.texts.filter(t=>t.length>160&&!home.texts.includes(t)&&!/^Each block|^Add as many|^Rows beyond/.test(t));
  intro.forEach((t,j)=>set(t,j===0?values[1]:values[2],route,'Project introduction'));
  const local=new Map();
  for(const [j,prefix] of ['Each block','Add as many','Rows beyond'].entries()){
   const b=p.blocks.find(b=>b.text.startsWith(prefix));
   if(!b)throw Error('Missing project block '+prefix);
   local.set(b.text,values[j+2]);
   let used=0,chars=0;const words=values[j+2].split(' ');
   b.runs.forEach((r,k)=>{chars+=r.length;const end=k===b.runs.length-1?words.length:Math.round(words.length*chars/b.runs.join('').length);local.set(r,words.slice(used,end).join(' ')+(end<words.length?' ':''));used=end;});
   changes.push({route,section:'Project section '+(j+1),current:replacements.get(b.text),proposed:values[j+2],source:'scripts/business-content.cjs',mechanism:'Route-scoped original CMS rich-text strings',layout:'Existing paragraph nodes retained'});
  }
  for(const b of p.blocks.filter(b=>b.text.startsWith('"')&&/Joseph|conversion/.test(b.text))){
   local.set(b.text,principle);b.runs.forEach((r,j)=>r.trim().length<5?local.set(JSON.stringify([5,r]),JSON.stringify([5,''])):local.set(r,j===0?principle:''));
  }
  scoped[route]=Object.fromEntries(local);
 });
 const description='I design professional websites and build AI assistants, CRM workflows, automation, and custom software to help businesses improve their digital operations.';
 set('LaunchFolio Portfolio Framer Template','Muhammad Abu Bakar | Websites, AI & Business Systems');
 set("Launch your design business in hours with this conversion-optimized portfolio template. Built with Framer's powerful CMS, it combines stunning project showcases with client management tools to help you land more clients and grow your business.",description);
 return {changes,scoped,description,title:'Muhammad Abu Bakar | Websites, AI & Business Systems',projects};
};
