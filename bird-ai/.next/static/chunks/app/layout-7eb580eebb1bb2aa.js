(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{7303:function(e,n,r){"use strict";r.r(n),r.d(n,{ClientClerkProvider:function(){return ClientClerkProvider}});var t=r(7431),i=r(4033),o=r(2265),u=r(5791);let s="undefined"!=typeof window?o.useLayoutEffect:o.useEffect,useAwaitableNavigate=()=>{let{push:e}=(0,i.useRouter)(),n=(0,i.usePathname)(),r=(0,i.useSearchParams)(),t=n+r.toString();return(0,o.useEffect)(()=>{window.__clerk_nav_ref=n=>n===window.location.href.replace(window.location.origin,"")?(e(n),Promise.resolve()):new Promise(r=>{window.__clerk_nav_resolves_ref?window.__clerk_nav_resolves_ref.push(r):window.__clerk_nav_resolves_ref=[r],e(n)})},[t]),(0,o.useEffect)(()=>{window.__clerk_nav_resolves_ref&&window.__clerk_nav_resolves_ref.length&&window.__clerk_nav_resolves_ref.forEach(e=>e()),window.__clerk_nav_resolves_ref=[]}),(0,o.useCallback)(e=>window.__clerk_nav_ref(e),[])},ClientClerkProvider=e=>{let{__unstable_invokeMiddlewareOnAuthStateChange:n=!0}=e,r=(0,i.useRouter)(),c=useAwaitableNavigate();s(()=>{window.__unstable__onBeforeSetActive=()=>{n&&(r.refresh(),r.push(window.location.href))},window.__unstable__onAfterSetActive=()=>{r.refresh()}},[]);let f={...e,navigate:c};return o.createElement(u.f,{options:f},o.createElement(t.El,{...f}))}},5791:function(e,n,r){"use strict";r.d(n,{f:function(){return ClerkNextOptionsProvider},k:function(){return useClerkNextOptions}});var t=r(2265);let i=t.createContext(void 0);i.displayName="ClerkNextOptionsCtx";let useClerkNextOptions=()=>{let e=t.useContext(i);return e.value},ClerkNextOptionsProvider=e=>{let{children:n,options:r}=e;return t.createElement(i.Provider,{value:{value:r}},n)}},3530:function(e,n,r){"use strict";r.r(n),r.d(n,{AuthenticateWithRedirectCallback:function(){return t.vn},ClerkLoaded:function(){return t.a7},ClerkLoading:function(){return t.qI},MultisessionAppSupport:function(){return t.KM},RedirectToCreateOrganization:function(){return t.gM},RedirectToOrganizationProfile:function(){return t.yB},RedirectToSignIn:function(){return t.N1},RedirectToSignUp:function(){return t.C2},RedirectToUserProfile:function(){return t.sO},SignedIn:function(){return t.CH},SignedOut:function(){return t.tj}});var t=r(7431)},1507:function(e,n,r){"use strict";r.r(n),r.d(n,{MagicLinkErrorCode:function(){return t.X1},WithClerk:function(){return t._E},WithSession:function(){return t.CJ},WithUser:function(){return t.Gi},isClerkAPIResponseError:function(){return t.kD},isKnownError:function(){return t.sZ},isMagicLinkError:function(){return t.V9},isMetamaskError:function(){return t.ZC},useAuth:function(){return t.aC},useClerk:function(){return t.ll},useMagicLink:function(){return t.jS},useOrganization:function(){return t.o8},useOrganizationList:function(){return t.eW},useOrganizations:function(){return t.qi},useSession:function(){return t.kP},useSessionList:function(){return t.xo},useSignIn:function(){return t.zq},useSignUp:function(){return t.QS},useUser:function(){return t.aF},withClerk:function(){return t.r0},withSession:function(){return t.NA},withUser:function(){return t.ns}});var t=r(7431)},1726:function(e,n,r){"use strict";r.r(n),r.d(n,{CreateOrganization:function(){return t.Gp},OrganizationProfile:function(){return t.A},OrganizationSwitcher:function(){return t.Li},SignIn:function(){return SignIn},SignInButton:function(){return t.$d},SignOutButton:function(){return t.AM},SignUp:function(){return SignUp},SignUpButton:function(){return t.gX},UserButton:function(){return t.l8},UserProfile:function(){return t.Iw}});var t=r(7431),i=r(2265),o=r(5791);let SignIn=e=>{let{signInUrl:n}=(0,o.k)();return n?i.createElement(t.cL,{routing:"path",path:n,...e}):i.createElement(t.cL,{...e})},SignUp=e=>{let{signUpUrl:n}=(0,o.k)();return n?i.createElement(t.Mo,{routing:"path",path:n,...e}):i.createElement(t.Mo,{...e})}},9343:function(e,n,r){Promise.resolve().then(r.t.bind(r,8877,23)),Promise.resolve().then(r.bind(r,7303)),Promise.resolve().then(r.bind(r,3530)),Promise.resolve().then(r.bind(r,1507)),Promise.resolve().then(r.bind(r,1726)),Promise.resolve().then(r.t.bind(r,3247,23))},8877:function(){},3247:function(e){e.exports={style:{fontFamily:"'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",fontStyle:"normal"},className:"__className_e66fe9"}},4033:function(e,n,r){e.exports=r(290)}},function(e){e.O(0,[431,971,864,744],function(){return e(e.s=9343)}),_N_E=e.O()}]);