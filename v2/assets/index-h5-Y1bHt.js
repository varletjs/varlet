import{_ as p,r as n,a6 as v,ao as h,b as u,e as s,f as c,w as d,m as k,R as x,P as w,O as y,N as I}from"./index-vwO9GBzB.js";const L={__name:"index",setup(V){const r=Array(30).fill("List Item"),_=Array(30).fill("This is new List Item"),e=n(!1),a=n(r);function f(){setTimeout(()=>{a.value=a.value[0]==="List Item"?_:r,e.value=!1},2e3)}return v(h.dark),(B,l)=>{const i=u("var-cell"),m=u("var-pull-refresh");return s(),c(m,{onRefresh:f,modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),"success-duration":"2000"},{default:d(()=>[(s(!0),k(I,null,x(a.value,(t,o)=>(s(),c(i,{key:o,border:""},{default:d(()=>[w(y(t+" "+(o+1)),1)]),_:2},1024))),128))]),_:1},8,["modelValue"])}}},T=p(L,[["__scopeId","data-v-6d755248"]]);export{T as default};