import{an as m,_ as B,W as D,ar as T,E,a6 as P,ao as R,b as v,e as L,m as q,q as a,w as t,S as e,as as r,p as y,O as l,N as F,P as n,$ as O,a0 as W}from"./index-vwO9GBzB.js";import{A as c}from"./appType-fkxN3UmL.js";const j={basicUsage:"基本使用",currentValue:"当前的值:",setState:"设置状态值",setStyle:"修改图标和颜色",disabled:"禁用",readonly:"只读",eat:"吃饭",sleep:"睡觉",checkAll:"全选",inverseAll:"反选",checkboxGroup:"复选框组",vertical:"垂直布局",checkboxValidate:"复选框字段校验",checkboxGroupValidate:"复选框组字段校验",checkboxValidateMessage:"请勾选",checkboxGroupValidateMessage:"请全选",indeterminate:"不确定状态",indeterminateValue:"不确定状态的值:",toggle:"切换"},H={basicUsage:"Basic Usage",currentValue:"Current value:",setState:"Set State Value",setStyle:"Modify The Icon And Color",disabled:"Disabled",readonly:"Readonly",eat:"Eat",sleep:"Sleep",checkAll:"Check All",inverseAll:"Inverse All",checkboxGroup:"CheckboxGroup",vertical:"Vertical Direction",checkboxValidate:"Checkbox Validation",checkboxGroupValidate:"CheckboxGroup Validate",checkboxValidateMessage:"Please check your choices",checkboxGroupValidateMessage:"Please check all",indeterminate:"Indeterminate",indeterminateValue:"Current value:",toggle:"Toggle"},{add:N,use:J,pack:u,packs:ue,merge:oe}=m.useLocale(),K=i=>{m.use(i),J(i)};m.add("zh-CN",m.zhCN);m.add("en-US",m.enUS);N("zh-CN",j);N("en-US",H);const Q=i=>(O("data-v-b1524d44"),i=i(),W(),i),X={class:"relation"},Y={class:"relation"},Z={class:"relation"},ee=Q(()=>y("div",{class:"space"},null,-1)),le={__name:"index",setup(i){const I=D({value:!1,value2:0,value3:!1,value4:!1,value5:!1,value6:[],value7:!1,value8:[],value9:[],value10:!1,group:null,indeterminate:!0}),{value:V,value2:f,value3:k,value4:_,value5:b,value6:h,value7:x,value8:g,value9:U,group:$,value10:S,indeterminate:p}=T(I);return E(K),P(R.dark),(G,o)=>{const s=v("var-checkbox"),z=v("var-icon"),C=v("var-button"),M=v("var-space"),A=v("var-checkbox-group"),w=v("var-divider");return L(),q(F,null,[a(e(c),null,{default:t(()=>[n(l(e(u).basicUsage),1)]),_:1}),a(s,{modelValue:e(V),"onUpdate:modelValue":o[0]||(o[0]=d=>r(V)?V.value=d:null)},{default:t(()=>[n(l(e(u).currentValue)+" "+l(e(V)),1)]),_:1},8,["modelValue"]),a(e(c),null,{default:t(()=>[n(l(e(u).setState),1)]),_:1}),a(s,{"unchecked-value":0,"checked-value":1,modelValue:e(f),"onUpdate:modelValue":o[1]||(o[1]=d=>r(f)?f.value=d:null)},{default:t(()=>[n(l(e(u).currentValue)+" "+l(e(f)),1)]),_:1},8,["modelValue"]),a(e(c),null,{default:t(()=>[n(l(e(u).setStyle),1)]),_:1}),a(s,{"unchecked-color":"#e99eb4","checked-color":"#f44336",modelValue:e(k),"onUpdate:modelValue":o[2]||(o[2]=d=>r(k)?k.value=d:null)},{"unchecked-icon":t(()=>[a(z,{name:"heart-half-full",size:"24px"})]),"checked-icon":t(()=>[a(z,{name:"heart",size:"24px"})]),default:t(()=>[n(l(e(u).currentValue)+" "+l(e(k)),1)]),_:1},8,["modelValue"]),a(e(c),null,{default:t(()=>[n(l(e(u).disabled),1)]),_:1}),a(s,{disabled:"",modelValue:e(_),"onUpdate:modelValue":o[3]||(o[3]=d=>r(_)?_.value=d:null)},{default:t(()=>[n(l(e(u).currentValue)+" "+l(e(_)),1)]),_:1},8,["modelValue"]),a(e(c),null,{default:t(()=>[n(l(e(u).readonly),1)]),_:1}),a(s,{readonly:"",modelValue:e(b),"onUpdate:modelValue":o[4]||(o[4]=d=>r(b)?b.value=d:null)},{default:t(()=>[n(l(e(u).currentValue)+" "+l(e(b)),1)]),_:1},8,["modelValue"]),a(e(c),null,{default:t(()=>[n(l(e(u).indeterminate),1)]),_:1}),a(M,{size:[0,10]},{default:t(()=>[a(s,{modelValue:e(S),"onUpdate:modelValue":o[5]||(o[5]=d=>r(S)?S.value=d:null),indeterminate:e(p),"onUpdate:indeterminate":o[6]||(o[6]=d=>r(p)?p.value=d:null)},{default:t(()=>[n(l(e(u).indeterminateValue)+" "+l(e(p)),1)]),_:1},8,["modelValue","indeterminate"]),a(C,{type:"primary",onClick:o[7]||(o[7]=d=>p.value=!e(p))},{default:t(()=>[n(l(e(u).toggle),1)]),_:1})]),_:1}),a(e(c),null,{default:t(()=>[n(l(e(u).checkboxGroup),1)]),_:1}),a(A,{ref_key:"group",ref:$,modelValue:e(h),"onUpdate:modelValue":o[8]||(o[8]=d=>r(h)?h.value=d:null)},{default:t(()=>[a(s,{"checked-value":0},{default:t(()=>[n(l(e(u).eat),1)]),_:1}),a(s,{"checked-value":1},{default:t(()=>[n(l(e(u).sleep),1)]),_:1})]),_:1},8,["modelValue"]),y("div",X,l(e(u).currentValue)+" "+l(e(h)),1),a(w,{margin:"14px 0"}),a(M,{size:[0,10]},{default:t(()=>[a(C,{type:"primary",onClick:o[9]||(o[9]=d=>G.$refs.group.checkAll())},{default:t(()=>[n(l(e(u).checkAll),1)]),_:1}),a(C,{type:"primary",onClick:o[10]||(o[10]=d=>G.$refs.group.inverseAll())},{default:t(()=>[n(l(e(u).inverseAll),1)]),_:1})]),_:1}),a(e(c),null,{default:t(()=>[n(l(e(u).vertical),1)]),_:1}),a(A,{modelValue:e(U),"onUpdate:modelValue":o[11]||(o[11]=d=>r(U)?U.value=d:null),direction:"vertical"},{default:t(()=>[a(s,{"checked-value":0},{default:t(()=>[n(l(e(u).eat),1)]),_:1}),a(s,{"checked-value":1},{default:t(()=>[n(l(e(u).sleep),1)]),_:1})]),_:1},8,["modelValue"]),y("div",Y,l(e(u).currentValue)+" "+l(e(U)),1),a(e(c),null,{default:t(()=>[n(l(e(u).checkboxValidate),1)]),_:1}),a(s,{modelValue:e(x),"onUpdate:modelValue":o[12]||(o[12]=d=>r(x)?x.value=d:null),rules:[d=>d||e(u).checkboxValidateMessage]},{default:t(()=>[n(l(e(u).currentValue)+" "+l(e(x)),1)]),_:1},8,["modelValue","rules"]),a(e(c),null,{default:t(()=>[n(l(e(u).checkboxGroupValidate),1)]),_:1}),a(A,{modelValue:e(g),"onUpdate:modelValue":o[13]||(o[13]=d=>r(g)?g.value=d:null),rules:[d=>d.length===2||e(u).checkboxGroupValidateMessage]},{default:t(()=>[a(s,{"checked-value":0},{default:t(()=>[n(l(e(u).eat),1)]),_:1}),a(s,{"checked-value":1},{default:t(()=>[n(l(e(u).sleep),1)]),_:1})]),_:1},8,["modelValue","rules"]),y("div",Z,l(e(u).currentValue)+" "+l(e(g)),1),ee],64)}}},de=B(le,[["__scopeId","data-v-b1524d44"]]);export{de as default};