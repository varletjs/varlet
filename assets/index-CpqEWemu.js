import{a8 as d,_ as b,D as x,S as U,m as r,q as l,w as s,U as e,N as h,b as w,e as m,Q as n,R as o,p as t,s as y,O as N,x as I,$ as L,a0 as k}from"./index-XHkyQ4jX.js";import{A as u}from"./appType-Bqc8B35L.js";const z={basicUsage:"基本使用",forbidLoop:"禁止循环轮播",autoplay:"开启自动播放",vertical:"垂直轮播",navigation:"导航",handleChange:"监听切换",customIndicator:"自定义指示器"},B={basicUsage:"Basic Usage",forbidLoop:"Forbid Loop",autoplay:"Autoplay",vertical:"Vertical Swipe",navigation:"Navigation",handleChange:"Handle Change",customIndicator:"Custom Indicator"},{add:j,use:V,t:_,merge:ms}=d.useLocale(),A=i=>{d.use(i),V(i)};d.add("zh-CN",d.zhCN);d.add("en-US",d.enUS);j("zh-CN",z);j("en-US",B);const T=i=>(L("data-v-b4d7ae3a"),i=i(),k(),i),$=["src"],D=["src"],F=["src"],q=["src"],E=["src"],H=["src"],O=["src"],Q=["src"],R=["src"],G=["src"],J=["src"],K=["src"],M=["src"],P=["src"],W=["src"],X=["src"],Y=["src"],Z=["src"],ss=["src"],ls=["src"],ts=["src"],as=["src"],es=["src"],cs=["src"],is={class:"swipe-indicators"},ns=["onClick"],os=T(()=>t("div",{class:"space"},null,-1)),us={__name:"index",setup(i){return x(A),U(),(_s,g)=>{const a=w("var-swipe-item"),c=w("var-swipe");return m(),r(h,null,[l(e(u),null,{default:s(()=>[n(o(e(_)("basicUsage")),1)]),_:1}),l(c,{class:"swipe"},{default:s(()=>[l(a,null,{default:s(()=>[t("img",{class:"swipe-item",src:"cat.jpg",alt:""},null,8,$)]),_:1}),l(a,null,{default:s(()=>[t("img",{class:"swipe-item",src:"cat2.jpg",alt:""},null,8,D)]),_:1}),l(a,null,{default:s(()=>[t("img",{class:"swipe-item",src:"cat3.jpg",alt:""},null,8,F)]),_:1})]),_:1}),l(e(u),null,{default:s(()=>[n(o(e(_)("forbidLoop")),1)]),_:1}),l(c,{class:"swipe",loop:!1},{default:s(()=>[l(a,null,{default:s(()=>[t("img",{class:"swipe-item",src:"cat.jpg",alt:""},null,8,q)]),_:1}),l(a,null,{default:s(()=>[t("img",{class:"swipe-item",src:"cat2.jpg",alt:""},null,8,E)]),_:1}),l(a,null,{default:s(()=>[t("img",{class:"swipe-item",src:"cat3.jpg",alt:""},null,8,H)]),_:1})]),_:1}),l(e(u),null,{default:s(()=>[n(o(e(_)("autoplay")),1)]),_:1}),l(c,{class:"swipe",autoplay:2e3},{default:s(()=>[l(a,null,{default:s(()=>[t("img",{class:"swipe-item",src:"cat.jpg",alt:""},null,8,O)]),_:1}),l(a,null,{default:s(()=>[t("img",{class:"swipe-item",src:"cat2.jpg",alt:""},null,8,Q)]),_:1}),l(a,null,{default:s(()=>[t("img",{class:"swipe-item",src:"cat3.jpg",alt:""},null,8,R)]),_:1})]),_:1}),l(e(u),null,{default:s(()=>[n(o(e(_)("vertical")),1)]),_:1}),l(c,{class:"swipe",vertical:""},{default:s(()=>[l(a,null,{default:s(()=>[t("img",{class:"swipe-item",src:"cat.jpg",alt:""},null,8,G)]),_:1}),l(a,null,{default:s(()=>[t("img",{class:"swipe-item",src:"cat2.jpg",alt:""},null,8,J)]),_:1}),l(a,null,{default:s(()=>[t("img",{class:"swipe-item",src:"cat3.jpg",alt:""},null,8,K)]),_:1})]),_:1}),l(e(u),null,{default:s(()=>[n(o(e(_)("navigation")),1)]),_:1}),l(c,{class:"swipe",navigation:""},{default:s(()=>[l(a,null,{default:s(()=>[t("img",{class:"swipe-item",src:"cat.jpg",alt:""},null,8,M)]),_:1}),l(a,null,{default:s(()=>[t("img",{class:"swipe-item",src:"cat2.jpg",alt:""},null,8,P)]),_:1}),l(a,null,{default:s(()=>[t("img",{class:"swipe-item",src:"cat3.jpg",alt:""},null,8,W)]),_:1})]),_:1}),l(c,{class:"swipe",style:{"margin-top":"12px"},navigation:"hover"},{default:s(()=>[l(a,null,{default:s(()=>[t("img",{class:"swipe-item",src:"cat.jpg",alt:""},null,8,X)]),_:1}),l(a,null,{default:s(()=>[t("img",{class:"swipe-item",src:"cat2.jpg",alt:""},null,8,Y)]),_:1}),l(a,null,{default:s(()=>[t("img",{class:"swipe-item",src:"cat3.jpg",alt:""},null,8,Z)]),_:1})]),_:1}),l(e(u),null,{default:s(()=>[n(o(e(_)("handleChange")),1)]),_:1}),l(c,{class:"swipe",onChange:g[0]||(g[0]=p=>e(y)(String(p)))},{default:s(()=>[l(a,null,{default:s(()=>[t("img",{class:"swipe-item",src:"cat.jpg",alt:""},null,8,ss)]),_:1}),l(a,null,{default:s(()=>[t("img",{class:"swipe-item",src:"cat2.jpg",alt:""},null,8,ls)]),_:1}),l(a,null,{default:s(()=>[t("img",{class:"swipe-item",src:"cat3.jpg",alt:""},null,8,ts)]),_:1})]),_:1}),l(e(u),null,{default:s(()=>[n(o(e(_)("customIndicator")),1)]),_:1}),l(c,{class:"swipe-example"},{indicator:s(({index:p,length:v,to:C})=>[t("div",is,[(m(!0),r(h,null,N(v,(S,f)=>(m(),r("div",{class:I(["swipe-indicator",{"swipe-active-indicator":f===p}]),key:S,onClick:ds=>C(f)},null,10,ns))),128))])]),default:s(()=>[l(a,null,{default:s(()=>[t("img",{class:"swipe-item",src:"cat.jpg"},null,8,as)]),_:1}),l(a,null,{default:s(()=>[t("img",{class:"swipe-item",src:"cat2.jpg"},null,8,es)]),_:1}),l(a,null,{default:s(()=>[t("img",{class:"swipe-item",src:"cat3.jpg"},null,8,cs)]),_:1})]),_:1}),os],64)}}},gs=b(us,[["__scopeId","data-v-b4d7ae3a"]]);export{gs as default};