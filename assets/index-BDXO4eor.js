import{a8 as c,r as k,D as B,S as V,m as b,q as n,w as t,U as e,N as v,b as d,e as f,Q as a,R as s,O as D,f as N,M as I}from"./index-XHkyQ4jX.js";import{A as i}from"./appType-Bqc8B35L.js";const z={basicUsage:"基本使用",showIcon:"显示图标",showDesc:"显示描述",showBorder:"显示边框",content:"这是单元格",description:"描述",list:"用作列表项"},L={basicUsage:"Basic Usage",showIcon:"Show Icon",showDesc:"Show Description",showBorder:"Show Border",content:"This is Cell",description:"Description",list:"Use As List Item"},{add:U,use:T,t:o,merge:R}=c.useLocale(),y=u=>{c.use(u),T(u)};c.add("zh-CN",c.zhCN);c.add("en-US",c.enUS);U("zh-CN",z);U("en-US",L);const q={__name:"index",setup(u){const m=k([{name:"Vue2",icon:"star",enabled:!1},{name:"Vue3",icon:"heart",enabled:!1},{name:"React",icon:"close-circle",enabled:!1}]),C=p=>{p.enabled=!p.enabled};return B(y),V(),(p,h)=>{const l=d("var-cell"),_=d("var-icon"),x=d("var-switch"),g=d("var-paper");return f(),b(v,null,[n(e(i),null,{default:t(()=>[a(s(e(o)("basicUsage")),1)]),_:1}),n(l,null,{default:t(()=>[a(s(e(o)("content")),1)]),_:1}),n(l,null,{default:t(()=>[a(s(e(o)("content")),1)]),_:1}),n(e(i),null,{default:t(()=>[a(s(e(o)("showIcon")),1)]),_:1}),n(l,{icon:"fire",title:e(o)("content")},{extra:t(()=>[n(_,{name:"information"})]),_:1},8,["title"]),n(l,{icon:"fire",title:e(o)("content")},{extra:t(()=>[n(_,{name:"information"})]),_:1},8,["title"]),n(e(i),null,{default:t(()=>[a(s(e(o)("showDesc")),1)]),_:1}),n(l,{icon:"fire",title:e(o)("content"),description:e(o)("description")},{extra:t(()=>[n(_,{name:"information"})]),_:1},8,["title","description"]),n(l,{title:e(o)("content"),description:e(o)("description")},null,8,["title","description"]),n(e(i),null,{default:t(()=>[a(s(e(o)("showBorder")),1)]),_:1}),n(l,{border:""},{default:t(()=>[a(s(e(o)("content")),1)]),_:1}),n(l,{border:""},{default:t(()=>[a(s(e(o)("content")),1)]),_:1}),n(e(i),null,{default:t(()=>[a(s(e(o)("list")),1)]),_:1}),n(g,{elevation:2},{default:t(()=>[(f(!0),b(v,null,D(m.value,(r,S)=>(f(),N(l,{key:r.name,ripple:"",icon:r.icon,border:S!==m.value.length-1,"border-offset":0,onClick:w=>C(r)},{extra:t(()=>[n(x,{modelValue:r.enabled,"onUpdate:modelValue":w=>r.enabled=w,onClick:h[0]||(h[0]=I(()=>{},["stop"]))},null,8,["modelValue","onUpdate:modelValue"])]),default:t(()=>[a(s(r.name)+" ",1)]),_:2},1032,["icon","border","onClick"]))),128))]),_:1})],64)}}};export{q as default};