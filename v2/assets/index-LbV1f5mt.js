import{an as n,r as v,E as b,a6 as g,ao as w,b as p,e as z,m as C,q as e,w as l,S as t,N,P as s,O as r}from"./index-vwO9GBzB.js";import{A as i}from"./appType-fkxN3UmL.js";const h={type:"类型",size:"大小",color:"颜色",wrap:"包裹内容",open:"打开",close:"关闭",cardTitle:"介绍",cardDesc:"Varlet 是一个基于Vue3开发的 Material 风格移动端组件库，全面拥抱Vue3生态，由社区的小伙伴开发和维护。"},k={type:"Type",size:"Size",color:"Color",wrap:"Wrap",open:"Open",close:"Close",cardTitle:"Intro",cardDesc:"Varlet is a Material design mobile component library developed based on Vue3, developed and maintained by partners in the community."},{add:f,use:x,pack:o,packs:j,merge:A}=n.useLocale(),S=d=>{n.use(d),x(d)};n.add("zh-CN",n.zhCN);n.add("en-US",n.enUS);f("zh-CN",h);f("en-US",k);const L={__name:"index",setup(d){const c=v(!1);return b(S),g(w.dark),(V,_)=>{const a=p("var-loading"),u=p("var-space"),m=p("var-button"),y=p("var-card");return z(),C(N,null,[e(t(i),null,{default:l(()=>[s(r(t(o).type),1)]),_:1}),e(u,{align:"center",justify:"space-between"},{default:l(()=>[e(a,{type:"circle"}),e(a,{type:"cube"}),e(a,{type:"wave"}),e(a,{type:"rect"}),e(a,{type:"disappear"})]),_:1}),e(t(i),null,{default:l(()=>[s(r(t(o).color),1)]),_:1}),e(u,{align:"center",justify:"space-between"},{default:l(()=>[e(a,{type:"circle",color:"#00afef"}),e(a,{type:"cube",color:"#00c48f"}),e(a,{type:"wave",color:"#ff9f00"}),e(a,{type:"rect",color:"#f44336"}),e(a,{type:"disappear",color:"#aaa"})]),_:1}),e(t(i),null,{default:l(()=>[s(r(t(o).size),1)]),_:1}),e(u,{align:"center",justify:"space-between"},{default:l(()=>[e(a,{type:"circle",size:"small"}),e(a,{type:"cube",size:"small"}),e(a,{type:"wave",size:"small"}),e(a,{type:"rect",size:"small"}),e(a,{type:"disappear",size:"small"})]),_:1}),e(t(i),null,{default:l(()=>[s(r(t(o).wrap),1)]),_:1}),e(m,{onClick:_[0]||(_[0]=D=>c.value=!c.value),style:{"margin-bottom":"8px"}},{default:l(()=>[s(r(c.value?t(o).close:t(o).open),1)]),_:1}),e(a,{description:"LOADING",loading:c.value},{default:l(()=>[e(y,{title:t(o).cardTitle,description:t(o).cardDesc},null,8,["title","description"])]),_:1},8,["loading"])],64)}}};export{L as default};