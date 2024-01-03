"use strict";(()=>{var e={};e.id=850,e.ids=[850],e.modules={72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},72254:e=>{e.exports=require("node:buffer")},6005:e=>{e.exports=require("node:crypto")},87561:e=>{e.exports=require("node:fs")},88849:e=>{e.exports=require("node:http")},22286:e=>{e.exports=require("node:https")},87503:e=>{e.exports=require("node:net")},49411:e=>{e.exports=require("node:path")},97742:e=>{e.exports=require("node:process")},84492:e=>{e.exports=require("node:stream")},72477:e=>{e.exports=require("node:stream/web")},41041:e=>{e.exports=require("node:url")},47261:e=>{e.exports=require("node:util")},65628:e=>{e.exports=require("node:zlib")},22037:e=>{e.exports=require("os")},71017:e=>{e.exports=require("path")},77282:e=>{e.exports=require("process")},12781:e=>{e.exports=require("stream")},76224:e=>{e.exports=require("tty")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},71267:e=>{e.exports=require("worker_threads")},59796:e=>{e.exports=require("zlib")},62252:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>h,originalPathname:()=>w,requestAsyncStorage:()=>l,routeModule:()=>q,serverHooks:()=>g,staticGenerationAsyncStorage:()=>m,staticGenerationBailout:()=>f});var o={};t.r(o),t.d(o,{POST:()=>POST}),t(95655);var s=t(83323),i=t(54647),n=t(98620),a=t(66886),p=t(79742);let u=new p.Configuration({apiKey:process.env.OPENAI_API_KEY}),d=new p.OpenAIApi(u),x={role:"system",content:"You are a code generator. You must answer only in markdown code snippets. Use code comments for explaination."};async function POST(e){try{let{userId:r}=(0,n.I8)(),t=await e.json(),{messages:o}=t;if(!r)return new a.Z("Unauthorized",{status:401});if(!u.apiKey)return new a.Z("API key not configured",{status:500});if(!o)return new a.Z("Messages are required",{status:400});let s=await d.createChatCompletion({model:"gpt-3.5-turbo",messages:[x,...o]});return a.Z.json(s.data.choices[0].message)}catch(e){return console.log("[CODE_ERROR]",e),new a.Z("internal error",{status:500})}}let c=s.AppRouteRouteModule,q=new c({definition:{kind:i.x.APP_ROUTE,page:"/api/code/route",pathname:"/api/code",filename:"route",bundlePath:"app/api/code/route"},resolvedPagePath:"/home/adii/Bird-AI/bird-ai/app/api/code/route.ts",nextConfigOutput:"",userland:o}),{requestAsyncStorage:l,staticGenerationAsyncStorage:m,serverHooks:g,headerHooks:h,staticGenerationBailout:f}=q,w="/api/code/route"}};var r=require("../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[651,727,742],()=>__webpack_exec__(62252));module.exports=t})();