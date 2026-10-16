const fs = require('fs');
const urls = {
500:'OYB4CXKJQXKTNSLJMTDQOIVUL2V5EL7S/WYO2P7DQVV5RNXGMCUO2HL4RJP4VFUAS/6XPIMU23OJVRY676OG5YVJMWEHWICATX',
600:'5SZVFDB7V52TI6ULVC6J3WQZQCIZVDV5/ODYPSTCUDMKSTYIPTV4CLQ7URIK7XYBJ/YS3VPNVO4B3TOJMEXDGFZQ4TLZGGSRZC',
700:'HBNTRIISA5MEXGL5WPYI7CV2HIWTDV3Q/YDPDINVT673XLXNSTMLG4JNCZZMVVNPN/Y7SCNZJOT2MW5ADSGOFLDGH4TNL4JCQY'};
(async()=>{for(const [weight,path] of Object.entries(urls)){const r=await fetch('https://framerusercontent.com/third-party-assets/fontshare/wf/'+path+'.woff2');if(!r.ok)throw Error(r.status);fs.writeFileSync('public/fonts/switzer-'+weight+'.woff2',Buffer.from(await r.arrayBuffer()));console.log(weight+' saved');}})();
