import{a8 as n,r as f,D as g,S as b,m as w,q as e,w as o,U as t,N as z,b as p,e as C,Q as r,R as s}from"./index-XHkyQ4jX.js";import{A as i}from"./appType-Bqc8B35L.js";const h={type:"类型",size:"大小",color:"颜色",wrap:"包裹内容",open:"打开",close:"关闭",cardTitle:"介绍",cardDesc:"Varlet 是一个基于Vue3开发的 Material 风格移动端组件库，全面拥抱Vue3生态，由社区的小伙伴开发和维护。"},x={type:"Type",size:"Size",color:"Color",wrap:"Wrap",open:"Open",close:"Close",cardTitle:"Intro",cardDesc:"Varlet is a Material design mobile component library developed based on Vue3, developed and maintained by partners in the community."},{add:_,use:N,t:l,merge:j}=n.useLocale(),S=d=>{n.use(d),N(d)};n.add("zh-CN",n.zhCN);n.add("en-US",n.enUS);_("zh-CN",h);_("en-US",x);const k={__name:"index",setup(d){const c=f(!1);return g(S),b(),(T,m)=>{const a=p("var-loading"),u=p("var-space"),y=p("var-button"),v=p("var-card");return C(),w(z,null,[e(t(i),null,{default:o(()=>[r(s(t(l)("type")),1)]),_:1}),e(u,{align:"center",justify:"space-between"},{default:o(()=>[e(a),e(a,{type:"cube"}),e(a,{type:"wave"}),e(a,{type:"rect"}),e(a,{type:"disappear"})]),_:1}),e(t(i),null,{default:o(()=>[r(s(t(l)("color")),1)]),_:1}),e(u,{align:"center",justify:"space-between"},{default:o(()=>[e(a,{color:"var(--color-info)"}),e(a,{type:"cube",color:"var(--color-success)"}),e(a,{type:"wave",color:"var(--color-warning)"}),e(a,{type:"rect",color:"var(--color-danger)"}),e(a,{type:"disappear",color:"var(--color-text-disabled)"})]),_:1}),e(t(i),null,{default:o(()=>[r(s(t(l)("size")),1)]),_:1}),e(u,{align:"center",justify:"space-between"},{default:o(()=>[e(a,{size:"small"}),e(a,{type:"cube",size:"small"}),e(a,{type:"wave",size:"small"}),e(a,{type:"rect",size:"small"}),e(a,{type:"disappear",size:"small"})]),_:1}),e(t(i),null,{default:o(()=>[r(s(t(l)("wrap")),1)]),_:1}),e(y,{onClick:m[0]||(m[0]=V=>c.value=!c.value),style:{"margin-bottom":"8px"}},{default:o(()=>[r(s(c.value?t(l)("close"):t(l)("open")),1)]),_:1}),e(a,{description:"LOADING",loading:c.value},{default:o(()=>[e(v,{title:t(l)("cardTitle"),description:t(l)("cardDesc")},null,8,["title","description"])]),_:1},8,["loading"])],64)}}};export{k as default};