import{a as z,_ as F,e as o,m as r,p as m,d as O,X as G,Y as w,N as D,O as X,U as N,M as Z,P as V,f as j,w as U,R as P,x as H,b as C,L as J,r as p,c as f,o as K,E as Q,q as g,Z as W,t as ee,l as ae,H as te,g as R,n as ne}from"./index-XHkyQ4jX.js";import{_ as se,A as oe}from"./AppAd.vue_vue_type_style_index_0_lang-C2gFF8k5.js";const le={name:"AppMobile",props:{componentName:{type:String},language:{type:String},replace:{type:String},hash:{type:String}},setup(){return{getMobileIndex:z}}},ce={class:"varlet-site-mobile varlet-site-mobile--375"},re={class:"varlet-site-mobile-content"},ie=["src"];function ue(T,i,s,u,d,l){return o(),r("div",ce,[m("div",re,[m("iframe",{id:"mobile",src:`${u.getMobileIndex()}#/${s.componentName}?language=${s.language}&platform=pc&replace=${s.replace}${s.hash?`#${s.hash}`:""}`},null,8,ie)])])}const de=F(le,[["render",ue]]),_e={class:"varlet-site-sidebar var-elevation--3"},pe=["href"],me=m("span",{class:"varlet-site-sidebar__indicator"},null,-1),ve={key:0,class:"varlet-site-sidebar__item--title"},ge={key:1},he=O({__name:"AppSidebar",props:{menu:{},menuName:{},language:{}},emits:["change"],setup(T,{emit:i}){const s=T,u=i,d=G(w),l=a=>{a.type===w.TITLE||s.menuName===a.doc||u("change",a)};return(a,_)=>{const h=C("var-cell"),y=J("ripple");return o(),r("div",_e,[(o(!0),r(D,null,X(a.menu,(t,b)=>(o(),r("a",{class:"varlet-site-sidebar__link",key:b,href:t.type!==N(w).TITLE?`#/${a.language}/${t.doc}`:void 0,onClick:_[0]||(_[0]=Z(()=>{},["prevent"]))},[V((o(),j(h,{class:H(["varlet-site-sidebar__item",{"varlet-site-sidebar__item--active":t.doc===a.menuName,"varlet-site-sidebar__cell":t.type!==d.TITLE,"varlet-site-sidebar__title":t.type===d.TITLE}]),id:t.doc,onClick:$=>l(t)},{default:U(()=>[me,t.type===d.TITLE?(o(),r("span",ve,P(t.text[a.language]),1)):(o(),r("span",ge,P(t.text[a.language]),1))]),_:2},1032,["id","class","onClick"])),[[y,{disabled:t.type===d.TITLE}]])],8,pe))),128))])}}}),fe={class:"varlet-site"},ye={class:"varlet-site-content"},be={class:"varlet-site-playground-container"},we=["src"],Ce=O({__name:"Layout",setup(T){var E,L,I,M,S;const i=ae,s=p(((L=(E=f)==null?void 0:E.pc)==null?void 0:L.menu)??[]),u=p((I=f)==null?void 0:I.useMobile),d=(S=(M=f)==null?void 0:M.mobile)==null?void 0:S.redirect,l=p(""),a=p(),_=p(""),h=p(""),y=p(null),t=te(),b=e=>{const n=s.value.find(c=>c.doc===e);return(n==null?void 0:n.type)===w.COMPONENT?e:d.slice(1)},$=()=>{const{menuName:e}=R();ne(()=>{const n=document.querySelector(".varlet-site-sidebar").getElementsByClassName("var-cell"),c=s.value.findIndex(v=>v.doc===e);c!==-1&&n[c].scrollIntoView({block:"center",inline:"start"})})},q=e=>{y.value.scrollTop=0,a.value=b(e.doc),_.value=e.doc,h.value=""},k=()=>{const e="VARLET_UI_PLAYGROUND_HAS_BEEN_CLOSED";!localStorage.getItem(e)&&!window.confirm("The code will no longer be saved after closing. Are you sure you want to close?")||(localStorage.setItem(e,"true"),i.showPlayground=!1)};return K(()=>{$(),window.addEventListener("message",e=>{const{data:n}=e;n.action==="playground-close"&&k()})}),Q(()=>t.path,()=>{var v,x,A,B;const{language:e,menuName:n,hash:c}=R();!e||!n||(a.value=b(n),_.value=n,h.value=c,l.value=e,u.value=((v=s.value.find(Y=>Y.doc===n))==null?void 0:v.useMobile)??((x=f)==null?void 0:x.useMobile),document.title=(B=(A=f)==null?void 0:A.pc)==null?void 0:B.title[e])},{immediate:!0}),(e,n)=>{const c=C("router-view"),v=C("var-popup");return o(),r(D,null,[m("div",fe,[g(se,{language:l.value},null,8,["language"]),g(oe,{language:l.value},null,8,["language"]),m("div",ye,[g(he,{language:l.value,menu:s.value,"menu-name":_.value,onChange:q},null,8,["language","menu","menu-name"]),m("div",{class:H(["varlet-site-doc-container",[!u.value&&"varlet-site-doc-container--pc-only"]]),ref_key:"doc",ref:y},[g(c)],2),V(g(de,{"component-name":a.value,language:l.value,replace:_.value,hash:h.value},null,8,["component-name","language","replace","hash"]),[[W,u.value]])])]),g(v,{position:"right",show:N(i).showPlayground,onClickOverlay:k},{default:U(()=>[m("div",be,[N(i).showPlayground?(o(),r("iframe",{key:0,id:"playground",class:"varlet-site-playground-iframe",src:N(i).playgroundURL,allow:"clipboard-write"},null,8,we)):ee("v-if",!0)])]),_:1},8,["show"])],64)}}});export{Ce as default};