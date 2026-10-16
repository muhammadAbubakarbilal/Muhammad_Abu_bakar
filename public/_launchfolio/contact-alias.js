// Open the reference's own contact overlay for the legacy /contact URL.
if (new URLSearchParams(location.search).get('contact') === '1') {
  let attempts=0;
  const timer=setInterval(()=>{
    const button=document.querySelector('button[aria-label="Contact Form"]');
    if(document.querySelector('form')){clearInterval(timer);history.replaceState(null,'',location.pathname);return;}
    if(button && attempts%4===3){for(const type of ['pointerdown','pointerup'])button.dispatchEvent(new PointerEvent(type,{bubbles:true,pointerId:1,pointerType:'mouse',button:0,isPrimary:true}));}
    if(++attempts>60)clearInterval(timer);
  },250);
}
