(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[396],{5277:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return addLocale}}),r(474);let addLocale=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5468:function(e,t,r){"use strict";function getDomainLocale(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),r(474),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4724:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let n=r(1024),o=n._(r(2265)),a=r(7896),i=r(9357),l=r(7746),u=r(2337),s=r(5277),c=r(7650),f=r(1792),d=r(1013),p=r(5468),h=r(9207),g=r(2271),m=new Set;function prefetch(e,t,r,n,o,a){if(!a&&!(0,i.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,a=t+"%"+r+"%"+o;if(m.has(a))return;m.add(a)}let l=a?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(l).catch(e=>{})}function formatStringOrUrl(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let y=o.default.forwardRef(function(e,t){let r,n;let{href:l,as:m,children:y,prefetch:b=null,passHref:R,replace:P,shallow:v,scroll:O,locale:S,onClick:_,onMouseEnter:E,onTouchStart:N,legacyBehavior:j=!1,...x}=e;r=y,j&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let M=o.default.useContext(c.RouterContext),w=o.default.useContext(f.AppRouterContext),U=null!=M?M:w,C=!M,L=!1!==b,k=null===b?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:I,as:T}=o.default.useMemo(()=>{if(!M){let e=formatStringOrUrl(l);return{href:e,as:m?formatStringOrUrl(m):e}}let[e,t]=(0,a.resolveHref)(M,l,!0);return{href:e,as:m?(0,a.resolveHref)(M,m):t||e}},[M,l,m]),A=o.default.useRef(I),W=o.default.useRef(T);j&&(n=o.default.Children.only(r));let D=j?n&&"object"==typeof n&&n.ref:t,[z,F,K]=(0,d.useIntersection)({rootMargin:"200px"}),Q=o.default.useCallback(e=>{(W.current!==T||A.current!==I)&&(K(),W.current=T,A.current=I),z(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[T,D,I,K,z]);o.default.useEffect(()=>{U&&F&&L&&prefetch(U,I,T,{locale:S},{kind:k},C)},[T,I,F,S,L,null==M?void 0:M.locale,U,C,k]);let q={ref:Q,onClick(e){j||"function"!=typeof _||_(e),j&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),U&&!e.defaultPrevented&&function(e,t,r,n,a,l,u,s,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,i.isLocalURL)(r)))return;e.preventDefault();let navigate=()=>{let e=null==u||u;"beforePopState"in t?t[a?"replace":"push"](r,n,{shallow:l,locale:s,scroll:e}):t[a?"replace":"push"](n||r,{forceOptimisticNavigation:!f,scroll:e})};c?o.default.startTransition(navigate):navigate()}(e,U,I,T,P,v,O,S,C,L)},onMouseEnter(e){j||"function"!=typeof E||E(e),j&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),U&&(L||!C)&&prefetch(U,I,T,{locale:S,priority:!0,bypassPrefetchedCheck:!0},{kind:k},C)},onTouchStart(e){j||"function"!=typeof N||N(e),j&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),U&&(L||!C)&&prefetch(U,I,T,{locale:S,priority:!0,bypassPrefetchedCheck:!0},{kind:k},C)}};if((0,u.isAbsoluteUrl)(T))q.href=T;else if(!j||R||"a"===n.type&&!("href"in n.props)){let e=void 0!==S?S:null==M?void 0:M.locale,t=(null==M?void 0:M.isLocaleDomain)&&(0,p.getDomainLocale)(T,e,null==M?void 0:M.locales,null==M?void 0:M.domainLocales);q.href=t||(0,h.addBasePath)((0,s.addLocale)(T,e,null==M?void 0:M.defaultLocale))}return j?o.default.cloneElement(n,q):o.default.createElement("a",{...x,...q},r)}),b=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4913:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{requestIdleCallback:function(){return r},cancelIdleCallback:function(){return n}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7896:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return resolveHref}});let n=r(8888),o=r(7746),a=r(9946),i=r(2337),l=r(474),u=r(9357),s=r(1956),c=r(5125);function resolveHref(e,t,r){let f;let d="string"==typeof t?t:(0,o.formatWithValidation)(t),p=d.match(/^[a-zA-Z]{1,}:\/\//),h=p?d.slice(p[0].length):d,g=h.split("?");if((g[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,i.normalizeRepeatedSlashes)(h);d=(p?p[0]:"")+t}if(!(0,u.isLocalURL)(d))return r?[d]:d;try{f=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){f=new URL("/","http://n")}try{let e=new URL(d,f);e.pathname=(0,l.normalizePathTrailingSlash)(e.pathname);let t="";if((0,s.isDynamicRoute)(e.pathname)&&e.searchParams&&r){let r=(0,n.searchParamsToUrlQuery)(e.searchParams),{result:i,params:l}=(0,c.interpolateAs)(e.pathname,e.pathname,r);i&&(t=(0,o.formatWithValidation)({pathname:i,hash:e.hash,query:(0,a.omit)(r,l)}))}let i=e.origin===f.origin?e.href.slice(e.origin.length):e.href;return r?[i,t||i]:i}catch(e){return r?[d]:d}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1013:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let n=r(2265),o=r(4913),a="function"==typeof IntersectionObserver,i=new Map,l=[];function useIntersection(e){let{rootRef:t,rootMargin:r,disabled:u}=e,s=u||!a,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(a){if(s||c)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:a}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=l.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=i.get(n)))return t;let o=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:a,elements:o},l.push(r),i.set(r,t),t}(r);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),i.delete(n);let e=l.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,c,d.current]);let h=(0,n.useCallback)(()=>{f(!1)},[]);return[p,c,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2361:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return escapeStringRegexp}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function escapeStringRegexp(e){return r.test(e)?e.replace(n,"\\$&"):e}},7746:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return formatUrl},urlObjectKeys:function(){return i},formatWithValidation:function(){return formatWithValidation}});let n=r(8533),o=n._(r(8888)),a=/https?|ftp|gopher|file/;function formatUrl(e){let{auth:t,hostname:r}=e,n=e.protocol||"",i=e.pathname||"",l=e.hash||"",u=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:r&&(s=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(s+=":"+e.port)),u&&"object"==typeof u&&(u=String(o.urlQueryToSearchParams(u)));let c=e.search||u&&"?"+u||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||a.test(n))&&!1!==s?(s="//"+(s||""),i&&"/"!==i[0]&&(i="/"+i)):s||(s=""),l&&"#"!==l[0]&&(l="#"+l),c&&"?"!==c[0]&&(c="?"+c),""+n+s+(i=i.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+l}let i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function formatWithValidation(e){return formatUrl(e)}},1956:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getSortedRoutes:function(){return n.getSortedRoutes},isDynamicRoute:function(){return o.isDynamicRoute}});let n=r(3799),o=r(9731)},5125:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return interpolateAs}});let n=r(5366),o=r(5319);function interpolateAs(e,t,r){let a="",i=(0,o.getRouteRegex)(e),l=i.groups,u=(t!==e?(0,n.getRouteMatcher)(i)(t):"")||r;a=e;let s=Object.keys(l);return s.every(e=>{let t=u[e]||"",{repeat:r,optional:n}=l[e],o="["+(r?"...":"")+e+"]";return n&&(o=(t?"":"/")+"["+o+"]"),r&&!Array.isArray(t)&&(t=[t]),(n||e in u)&&(a=a.replace(o,r?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(a=""),{params:s,result:a}}},9731:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return isDynamicRoute}});let r=/\/\[[^/]+?\](?=\/|$)/;function isDynamicRoute(e){return r.test(e)}},9357:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return isLocalURL}});let n=r(2337),o=r(4561);function isLocalURL(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},9946:function(e,t){"use strict";function omit(e,t){let r={};return Object.keys(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return omit}})},8888:function(e,t){"use strict";function searchParamsToUrlQuery(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function stringifyUrlQueryParam(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function urlQueryToSearchParams(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,n]=e;Array.isArray(n)?n.forEach(e=>t.append(r,stringifyUrlQueryParam(e))):t.set(r,stringifyUrlQueryParam(n))}),t}function assign(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{searchParamsToUrlQuery:function(){return searchParamsToUrlQuery},urlQueryToSearchParams:function(){return urlQueryToSearchParams},assign:function(){return assign}})},5366:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return getRouteMatcher}});let n=r(2337);function getRouteMatcher(e){let{re:t,groups:r}=e;return e=>{let o=t.exec(e);if(!o)return!1;let decode=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},a={};return Object.keys(r).forEach(e=>{let t=r[e],n=o[t.pos];void 0!==n&&(a[e]=~n.indexOf("/")?n.split("/").map(e=>decode(e)):t.repeat?[decode(n)]:decode(n))}),a}}},5319:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getRouteRegex:function(){return getRouteRegex},getNamedRouteRegex:function(){return getNamedRouteRegex},getNamedMiddlewareRegex:function(){return getNamedMiddlewareRegex}});let n=r(4507),o=r(2361),a=r(993);function parseParameter(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function getParametrizedRoute(e){let t=(0,a.removeTrailingSlash)(e).slice(1).split("/"),r={},i=1;return{parameterizedRoute:t.map(e=>{let t=n.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),a=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&a){let{key:e,optional:n,repeat:l}=parseParameter(a[1]);return r[e]={pos:i++,repeat:l,optional:n},"/"+(0,o.escapeStringRegexp)(t)+"([^/]+?)"}if(!a)return"/"+(0,o.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:n}=parseParameter(a[1]);return r[e]={pos:i++,repeat:t,optional:n},t?n?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function getRouteRegex(e){let{parameterizedRoute:t,groups:r}=getParametrizedRoute(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function getSafeKeyFromSegment(e){let{getSafeRouteKey:t,segment:r,routeKeys:n,keyPrefix:o}=e,{key:a,optional:i,repeat:l}=parseParameter(r),u=a.replace(/\W/g,"");o&&(u=""+o+u);let s=!1;return(0===u.length||u.length>30)&&(s=!0),isNaN(parseInt(u.slice(0,1)))||(s=!0),s&&(u=t()),o?n[u]=""+o+a:n[u]=""+a,l?i?"(?:/(?<"+u+">.+?))?":"/(?<"+u+">.+?)":"/(?<"+u+">[^/]+?)"}function getNamedParametrizedRoute(e,t){let r;let i=(0,a.removeTrailingSlash)(e).slice(1).split("/"),l=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),u={};return{namedParameterizedRoute:i.map(e=>{let r=n.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),a=e.match(/\[((?:\[.*\])|.+)\]/);return r&&a?getSafeKeyFromSegment({getSafeRouteKey:l,segment:a[1],routeKeys:u,keyPrefix:t?"nxtI":void 0}):a?getSafeKeyFromSegment({getSafeRouteKey:l,segment:a[1],routeKeys:u,keyPrefix:t?"nxtP":void 0}):"/"+(0,o.escapeStringRegexp)(e)}).join(""),routeKeys:u}}function getNamedRouteRegex(e,t){let r=getNamedParametrizedRoute(e,t);return{...getRouteRegex(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function getNamedMiddlewareRegex(e,t){let{parameterizedRoute:r}=getParametrizedRoute(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:o}=getNamedParametrizedRoute(e,!1);return{namedRegex:"^"+o+(n?"(?:(/.*)?)":"")+"$"}}},3799:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSortedRoutes",{enumerable:!0,get:function(){return getSortedRoutes}});let UrlNode=class UrlNode{insert(e){this._insert(e.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(e){void 0===e&&(e="/");let t=[...this.children.keys()].sort();null!==this.slugName&&t.splice(t.indexOf("[]"),1),null!==this.restSlugName&&t.splice(t.indexOf("[...]"),1),null!==this.optionalRestSlugName&&t.splice(t.indexOf("[[...]]"),1);let r=t.map(t=>this.children.get(t)._smoosh(""+e+t+"/")).reduce((e,t)=>[...e,...t],[]);if(null!==this.slugName&&r.push(...this.children.get("[]")._smoosh(e+"["+this.slugName+"]/")),!this.placeholder){let t="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+t+'" and "'+t+"[[..."+this.optionalRestSlugName+']]").');r.unshift(t)}return null!==this.restSlugName&&r.push(...this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&r.push(...this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/")),r}_insert(e,t,r){if(0===e.length){this.placeholder=!1;return}if(r)throw Error("Catch-all must be the last part of the URL.");let n=e[0];if(n.startsWith("[")&&n.endsWith("]")){let o=n.slice(1,-1),a=!1;if(o.startsWith("[")&&o.endsWith("]")&&(o=o.slice(1,-1),a=!0),o.startsWith("...")&&(o=o.substring(3),r=!0),o.startsWith("[")||o.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+o+"').");if(o.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+o+"').");function handleSlug(e,r){if(null!==e&&e!==r)throw Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+r+"').");t.forEach(e=>{if(e===r)throw Error('You cannot have the same slug name "'+r+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===n.replace(/\W/g,""))throw Error('You cannot have the slug names "'+e+'" and "'+r+'" differ only by non-word symbols within a single dynamic path')}),t.push(r)}if(r){if(a){if(null!=this.restSlugName)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+e[0]+'" ).');handleSlug(this.optionalRestSlugName,o),this.optionalRestSlugName=o,n="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+e[0]+'").');handleSlug(this.restSlugName,o),this.restSlugName=o,n="[...]"}}else{if(a)throw Error('Optional route parameters are not yet supported ("'+e[0]+'").');handleSlug(this.slugName,o),this.slugName=o,n="[]"}}this.children.has(n)||this.children.set(n,new UrlNode),this.children.get(n)._insert(e.slice(1),t,r)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}};function getSortedRoutes(e){let t=new UrlNode;return e.forEach(e=>t.insert(e)),t.smoosh()}},2337:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{WEB_VITALS:function(){return r},execOnce:function(){return execOnce},isAbsoluteUrl:function(){return isAbsoluteUrl},getLocationOrigin:function(){return getLocationOrigin},getURL:function(){return getURL},getDisplayName:function(){return getDisplayName},isResSent:function(){return isResSent},normalizeRepeatedSlashes:function(){return normalizeRepeatedSlashes},loadGetInitialProps:function(){return loadGetInitialProps},SP:function(){return o},ST:function(){return a},DecodeError:function(){return DecodeError},NormalizeError:function(){return NormalizeError},PageNotFoundError:function(){return PageNotFoundError},MissingStaticPage:function(){return MissingStaticPage},MiddlewareNotFoundError:function(){return MiddlewareNotFoundError},stringifyError:function(){return stringifyError}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function execOnce(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return r||(r=!0,t=e(...o)),t}}let n=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,isAbsoluteUrl=e=>n.test(e);function getLocationOrigin(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function getURL(){let{href:e}=window.location,t=getLocationOrigin();return e.substring(t.length)}function getDisplayName(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function isResSent(e){return e.finished||e.headersSent}function normalizeRepeatedSlashes(e){let t=e.split("?"),r=t[0];return r.replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function loadGetInitialProps(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await loadGetInitialProps(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&isResSent(r))return n;if(!n){let t='"'+getDisplayName(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.';throw Error(t)}return n}let o="undefined"!=typeof performance,a=o&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);let DecodeError=class DecodeError extends Error{};let NormalizeError=class NormalizeError extends Error{};let PageNotFoundError=class PageNotFoundError extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}};let MissingStaticPage=class MissingStaticPage extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}};let MiddlewareNotFoundError=class MiddlewareNotFoundError extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}};function stringifyError(e){return JSON.stringify({message:e.message,stack:e.stack})}},1396:function(e,t,r){e.exports=r(4724)}}]);