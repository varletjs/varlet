import{aa as f,ab as o,r as l,a5 as d}from"./index-vwO9GBzB.js";function g(t,r){return Array.isArray(r)?r.reduce((e,n)=>(e[n]=t[n],e),{}):t[r]}function h(t,r){const e=r??t;return e.install=function(n){const{name:a}=t;a&&n.component(a,t)},e}function A(t,r){t.setPropsDefaults=function(e){Object.entries(e).forEach(([n,a])=>{const i=r[n];if(i!=null){if(f(i)){r[n]={...i,default:a};return}r[n]={type:i,default:a}}})}}function v(){const t=l(""),r=async(a,i,u)=>!d(a)||!a.length?!0:!(await Promise.all(a.map(s=>s(i,u)))).some(s=>s!==!0?(t.value=String(s),!0):!1);return{errorMessage:t,validate:r,resetValidation:()=>{t.value=""},validateWithTrigger:async(a,i,u,c,s)=>{a.includes(i)&&await r(u,c,s)&&(t.value="")}}}const w=o("var");function P(t){return{type:[Function,Array],default:t}}function b(t,r){return t===!1?null:(t===!0&&r&&(t=r),`var-elevation--${t}`)}export{A as a,w as c,P as d,b as f,g as p,v as u,h as w};