(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[642],{998:function(e,t,a){Promise.resolve().then(a.bind(a,9519)),Promise.resolve().then(a.bind(a,7560)),Promise.resolve().then(a.bind(a,7303)),Promise.resolve().then(a.bind(a,3530)),Promise.resolve().then(a.bind(a,1507)),Promise.resolve().then(a.bind(a,1726))},9519:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return mobile_sidebar}});var r=a(7437),s=a(8004),n=a(3023),o=a(2265),i=a(4227),l=a(6061),d=a(2549),c=a(9311);let f=i.fC,u=i.xz;i.x8;let SheetPortal=e=>{let{className:t,...a}=e;return(0,r.jsx)(i.h_,{className:(0,c.cn)(t),...a})};SheetPortal.displayName=i.h_.displayName;let m=o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(i.aV,{className:(0,c.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...s,ref:t})});m.displayName=i.aV.displayName;let h=(0,l.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),x=o.forwardRef((e,t)=>{let{side:a="right",className:s,children:n,...o}=e;return(0,r.jsxs)(SheetPortal,{children:[(0,r.jsx)(m,{}),(0,r.jsxs)(i.VY,{ref:t,className:(0,c.cn)(h({side:a}),s),...o,children:[n,(0,r.jsxs)(i.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,r.jsx)(d.Z,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});x.displayName=i.VY.displayName;let b=o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(i.Dx,{ref:t,className:(0,c.cn)("text-lg font-semibold text-foreground",a),...s})});b.displayName=i.Dx.displayName;let g=o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(i.dk,{ref:t,className:(0,c.cn)("text-sm text-muted-foreground",a),...s})});g.displayName=i.dk.displayName;var p=a(7560),mobile_sidebar=()=>{let[e,t]=(0,o.useState)(!1);return((0,o.useEffect)(()=>{t(!0)},[]),e)?(0,r.jsxs)(f,{children:[(0,r.jsx)(u,{children:(0,r.jsx)(n.z,{variant:"ghost",size:"icon",className:"md:hidden",children:(0,r.jsx)(s.Z,{})})}),(0,r.jsx)(x,{side:"left",className:"p-0",children:(0,r.jsx)(p.default,{})})]}):null}},7560:function(e,t,a){"use strict";a.r(t);var r=a(7437),s=a(5745),n=a.n(s),o=a(1396),i=a.n(o),l=a(6691),d=a.n(l),c=a(4033),f=a(9311),u=a(5119),m=a(2882),h=a(8438),x=a(8339),b=a(7187),g=a(2455);let p=[{label:"Dashboard",icon:u.Z,href:"/dashboard",color:"text-sky-500"},{label:"Conversation",icon:m.Z,href:"/conversation",color:"text-violet-500"},{label:"Image Generation",icon:h.Z,color:"text-pink-700",href:"/image"},{label:"Video Generation",icon:x.Z,color:"text-orange-700",href:"/video"},{label:"Music Generation",icon:b.Z,color:"text-emerald-500",href:"/music"},{label:"Code Generation",icon:g.Z,color:"text-green-700",href:"/code"}];t.default=()=>{let e=(0,c.usePathname)();return(0,r.jsx)("div",{className:"space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white",children:(0,r.jsxs)("div",{className:"px-3 py-2 flex-1",children:[(0,r.jsxs)(i(),{href:"/dashboard",className:"flex item-center pl-3 mb-14",children:[(0,r.jsx)("div",{className:"relative w-9 h-9 mr-2",children:(0,r.jsx)(d(),{fill:!0,alt:"logo",src:"/logo.png"})}),(0,r.jsx)("h1",{className:(0,f.cn)("text-2xl font-bold mt-2",n().className),children:"birdAI"})]}),(0,r.jsx)("div",{className:"space-y-1",children:p.map(t=>(0,r.jsx)(i(),{href:t.href,className:(0,f.cn)("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",e===t.href?"text-white bg-white/10":"text-zinc-400"),children:(0,r.jsxs)("div",{className:"flex item-center flex-1",children:[(0,r.jsx)(t.icon,{className:(0,f.cn)("h-5 w-5 mr-5",t.color)}),t.label]})},t.href))})]})})}},3023:function(e,t,a){"use strict";a.d(t,{z:function(){return d}});var r=a(7437),s=a(2265),n=a(7256),o=a(6061),i=a(9311);let l=(0,o.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:a,variant:s,size:o,asChild:d=!1,...c}=e,f=d?n.g7:"button";return(0,r.jsx)(f,{className:(0,i.cn)(l({variant:s,size:o,className:a})),ref:t,...c})});d.displayName="Button"},9311:function(e,t,a){"use strict";a.d(t,{cn:function(){return cn}});var r=a(7042),s=a(3986);function cn(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,s.m)((0,r.W)(t))}}},function(e){e.O(0,[677,431,765,396,199,164,971,864,744],function(){return e(e.s=998)}),_N_E=e.O()}]);