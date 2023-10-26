exports.id=488,exports.ids=[488],exports.modules={54193:(e,t,a)=>{Promise.resolve().then(a.bind(a,28080)),Promise.resolve().then(a.bind(a,1017)),Promise.resolve().then(a.bind(a,64092)),Promise.resolve().then(a.bind(a,52990)),Promise.resolve().then(a.bind(a,84102)),Promise.resolve().then(a.bind(a,54390))},28080:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>mobile_sidebar});var s=a(60080),l=a(7382),i=a(68384),r=a(9885),o=a(13761),d=a(91971),n=a(56206),c=a(23161);let m=o.fC,f=o.xz;o.x8;let SheetPortal=({className:e,...t})=>s.jsx(o.h_,{className:(0,c.cn)(e),...t});SheetPortal.displayName=o.h_.displayName;let x=r.forwardRef(({className:e,...t},a)=>s.jsx(o.aV,{className:(0,c.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:a}));x.displayName=o.aV.displayName;let h=(0,d.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),u=r.forwardRef(({side:e="right",className:t,children:a,...l},i)=>(0,s.jsxs)(SheetPortal,{children:[s.jsx(x,{}),(0,s.jsxs)(o.VY,{ref:i,className:(0,c.cn)(h({side:e}),t),...l,children:[a,(0,s.jsxs)(o.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[s.jsx(n.Z,{className:"h-4 w-4"}),s.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));u.displayName=o.VY.displayName;let b=r.forwardRef(({className:e,...t},a)=>s.jsx(o.Dx,{ref:a,className:(0,c.cn)("text-lg font-semibold text-foreground",e),...t}));b.displayName=o.Dx.displayName;let p=r.forwardRef(({className:e,...t},a)=>s.jsx(o.dk,{ref:a,className:(0,c.cn)("text-sm text-muted-foreground",e),...t}));p.displayName=o.dk.displayName;var g=a(1017);let mobile_sidebar=()=>{let[e,t]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{t(!0)},[]),e)?(0,s.jsxs)(m,{children:[s.jsx(f,{children:s.jsx(i.z,{variant:"ghost",size:"icon",className:"md:hidden",children:s.jsx(l.Z,{})})}),s.jsx(u,{side:"left",className:"p-0",children:s.jsx(g.default,{})})]}):null}},1017:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=a(60080),l=a(9049),i=a.n(l),r=a(11440),o=a.n(r),d=a(52451),n=a.n(d),c=a(57114),m=a(23161),f=a(97849),x=a(18310),h=a(80443),u=a(83104),b=a(34588),p=a(47634);let g=[{label:"Dashboard",icon:f.Z,href:"/dashboard",color:"text-sky-500"},{label:"Conversation",icon:x.Z,href:"/conversation",color:"text-violet-500"},{label:"Image Generation",icon:h.Z,color:"text-pink-700",href:"/image"},{label:"Video Generation",icon:u.Z,color:"text-orange-700",href:"/video"},{label:"Music Generation",icon:b.Z,color:"text-emerald-500",href:"/music"},{label:"Code Generation",icon:p.Z,color:"text-green-700",href:"/code"}],__WEBPACK_DEFAULT_EXPORT__=()=>{let e=(0,c.usePathname)();return s.jsx("div",{className:"space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white",children:(0,s.jsxs)("div",{className:"px-3 py-2 flex-1",children:[(0,s.jsxs)(o(),{href:"/dashboard",className:"flex item-center pl-3 mb-14",children:[s.jsx("div",{className:"relative w-9 h-9 mr-2",children:s.jsx(n(),{fill:!0,alt:"logo",src:"/logo.png"})}),s.jsx("h1",{className:(0,m.cn)("text-2xl font-bold mt-2",i().className),children:"birdAI"})]}),s.jsx("div",{className:"space-y-1",children:g.map(t=>s.jsx(o(),{href:t.href,className:(0,m.cn)("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",e===t.href?"text-white bg-white/10":"text-zinc-400"),children:(0,s.jsxs)("div",{className:"flex item-center flex-1",children:[s.jsx(t.icon,{className:(0,m.cn)("h-5 w-5 mr-5",t.color)}),t.label]})},t.href))})]})})}},88747:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>layout});var s=a(48144),l=a(75717),i=a(17536);let r=(0,i.createProxy)(String.raw`/home/adii/Bird-AI/bird-ai/components/mobile-sidebar.tsx`),{__esModule:o,$$typeof:d}=r,n=r.default,navbar=()=>(0,s.jsxs)("div",{className:"flex items-center p-4",children:[s.jsx(n,{}),s.jsx("div",{className:"flex w-full justify-end",children:s.jsx(l.l8,{afterSignOutUrl:"/"})})]}),c=(0,i.createProxy)(String.raw`/home/adii/Bird-AI/bird-ai/components/sidebar.tsx`),{__esModule:m,$$typeof:f}=c,x=c.default,layout=({children:e})=>(0,s.jsxs)("div",{className:"h-full relative",children:[s.jsx("div",{className:"hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900",children:s.jsx(x,{})}),(0,s.jsxs)("main",{className:"md:pl-72",children:[s.jsx(navbar,{}),e]})]})}};