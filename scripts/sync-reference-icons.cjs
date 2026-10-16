const fs = require('node:fs');
const names = ['Star','EnvelopeSimple','EnvelopeOpen','CalendarBlank','CalendarCheck','DribbbleLogo','BehanceLogo','CaretCircleDown','Check'];
(async()=>{
 fs.mkdirSync('public/_launchfolio/icons',{recursive:true});
 for(const name of names){
  const response=await fetch(`https://framer.com/m/phosphor-icons/${name}.js@0.0.57`);
  if(!response.ok)throw Error(`${name}: ${response.status}`);
  let body=await response.text();
  const target=body.match(/export \* from "([^"]+)"/)?.[1];
  if(target){const module=await fetch(target);if(!module.ok)throw Error(target);body=await module.text();}
  fs.writeFileSync(`public/_launchfolio/icons/${name}.mjs`,body);
 }
 console.log(`Saved ${names.length} original icon modules.`);
})().catch(e=>{console.error(e);process.exitCode=1});
