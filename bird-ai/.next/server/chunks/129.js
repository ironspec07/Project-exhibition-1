"use strict";exports.id=129,exports.ids=[129],exports.modules={2129:(e,t,a)=>{a.d(t,{Ee:()=>v,NY:()=>A,fC:()=>w});var r=a(35108),o=a(9885),n=a(8718),d=a(32285),s=a(95852),u=a(43979);let l="Avatar",[i,c]=(0,n.b)(l),[g,f]=i(l),m=(0,o.forwardRef)((e,t)=>{let{__scopeAvatar:a,...n}=e,[d,s]=(0,o.useState)("idle");return(0,o.createElement)(g,{scope:a,imageLoadingStatus:d,onImageLoadingStatusChange:s},(0,o.createElement)(u.WV.span,(0,r.Z)({},n,{ref:t})))}),p=(0,o.forwardRef)((e,t)=>{let{__scopeAvatar:a,src:n,onLoadingStatusChange:l=()=>{},...i}=e,c=f("AvatarImage",a),g=function(e){let[t,a]=(0,o.useState)("idle");return(0,s.b)(()=>{if(!e){a("error");return}let t=!0,r=new window.Image,updateStatus=e=>()=>{t&&a(e)};return a("loading"),r.onload=updateStatus("loaded"),r.onerror=updateStatus("error"),r.src=e,()=>{t=!1}},[e]),t}(n),m=(0,d.W)(e=>{l(e),c.onImageLoadingStatusChange(e)});return(0,s.b)(()=>{"idle"!==g&&m(g)},[g,m]),"loaded"===g?(0,o.createElement)(u.WV.img,(0,r.Z)({},i,{ref:t,src:n})):null}),S=(0,o.forwardRef)((e,t)=>{let{__scopeAvatar:a,delayMs:n,...d}=e,s=f("AvatarFallback",a),[l,i]=(0,o.useState)(void 0===n);return(0,o.useEffect)(()=>{if(void 0!==n){let e=window.setTimeout(()=>i(!0),n);return()=>window.clearTimeout(e)}},[n]),l&&"loaded"!==s.imageLoadingStatus?(0,o.createElement)(u.WV.span,(0,r.Z)({},d,{ref:t})):null}),w=m,v=p,A=S}};