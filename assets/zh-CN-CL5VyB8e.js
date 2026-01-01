import{b as p,m as r,p as a,q as l,Q as s,w as n,$ as c,e as o,h}from"./index-DtCrA0ro.js";const j={components:{}},m={class:"varlet-site-doc"},i={class:"card"},g={id:"jie4shao4"},u={class:"card"},v={id:"ji1ben3shi3yong4"},f={class:"card"},b={id:"tan2chu1wei4zhi4"},y={class:"card"},k={id:"pian1yi2liang2"},w={class:"card"},x={id:"yu3chu4fa1yuan2su4tong2kuan1"},M={class:"card"},z={id:"chu4fa1fang1shi4"},S={class:"card"},P={id:"zhu4ce4shi4jian4"},N={class:"card"},C={id:"jin4yong4"},E={class:"card"},$={id:"shuang1xiang4bang3ding4"},T={class:"card"},V={id:"zhu4yi4"},B={class:"card"},H={id:"shu3xing4"},L={class:"card"},O={id:"Placement"},q={class:"card"},A={id:"fang1fa3"},I={class:"card"},Q={id:"shi4jian4"},R={class:"card"},D={id:"cha1cao2"},F={class:"card"},G={id:"yang4shi4bian4liang4"};function J(K,t,U,W,X,Y){const e=o("router-link"),d=o("var-site-code-example");return h(),r("div",m,[t[53]||(t[53]=a("h1",null,"菜单",-1)),a("div",i,[a("h3",g,[l(e,{to:"#jie4shao4"},{default:n(()=>[...t[0]||(t[0]=[s("#",-1)])]),_:1}),t[1]||(t[1]=s("介绍",-1))]),t[2]||(t[2]=a("p",null,"当元素点击时显示一个菜单，通过控制弹出位置和偏移量改变菜单的显示位置。",-1))]),a("div",u,[a("h3",v,[l(e,{to:"#ji1ben3shi3yong4"},{default:n(()=>[...t[3]||(t[3]=[s("#",-1)])]),_:1}),t[4]||(t[4]=s("基本使用",-1))]),l(d,null,{default:n(()=>[...t[5]||(t[5]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("基本使用"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"menu"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("菜单项"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("菜单项"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("菜单项"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",f,[a("h3",b,[l(e,{to:"#tan2chu1wei4zhi4"},{default:n(()=>[...t[6]||(t[6]=[s("#",-1)])]),_:1}),t[7]||(t[7]=s("弹出位置",-1))]),l(d,null,{default:n(()=>[...t[8]||(t[8]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" placement = ref("),a("span",{class:"hljs-string"},"'cover-top-start'"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` placementOptions = [
  `),a("span",{class:"hljs-string"},"'top'"),s(`,
  `),a("span",{class:"hljs-string"},"'top-start'"),s(`,
  `),a("span",{class:"hljs-string"},"'top-end'"),s(`,
  `),a("span",{class:"hljs-string"},"'bottom'"),s(`,
  `),a("span",{class:"hljs-string"},"'bottom-start'"),s(`,
  `),a("span",{class:"hljs-string"},"'bottom-end'"),s(`,
  `),a("span",{class:"hljs-string"},"'right'"),s(`,
  `),a("span",{class:"hljs-string"},"'right-start'"),s(`,
  `),a("span",{class:"hljs-string"},"'right-end'"),s(`,
  `),a("span",{class:"hljs-string"},"'left'"),s(`,
  `),a("span",{class:"hljs-string"},"'left-start'"),s(`,
  `),a("span",{class:"hljs-string"},"'left-end'"),s(`,
  `),a("span",{class:"hljs-string"},"'cover-top'"),s(`,
  `),a("span",{class:"hljs-string"},"'cover-top-start'"),s(`,
  `),a("span",{class:"hljs-string"},"'cover-top-end'"),s(`,
  `),a("span",{class:"hljs-string"},"'cover-bottom'"),s(`,
  `),a("span",{class:"hljs-string"},"'cover-bottom-start'"),s(`,
  `),a("span",{class:"hljs-string"},"'cover-bottom-end'"),s(`,
  `),a("span",{class:"hljs-string"},"'cover-left'"),s(`,
  `),a("span",{class:"hljs-string"},"'cover-right'"),s(`,
]
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(),a("span",{class:"hljs-attr"},":hint"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"placement"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(` 
      `),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"(item, index) in placementOptions"'),s(` 
      `),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"index"'),s(`
      `),a("span",{class:"hljs-attr"},":label"),s("="),a("span",{class:"hljs-string"},'"item"'),s(` 
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
  
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"placement-container"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu"),s(),a("span",{class:"hljs-attr"},":placement"),s("="),a("span",{class:"hljs-string"},'"placement"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"star"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"menu"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("菜单项"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("菜单项"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("菜单项"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".placement-container"),s(` {
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"250px"),s(`;
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",y,[a("h3",k,[l(e,{to:"#pian1yi2liang2"},{default:n(()=>[...t[9]||(t[9]=[s("#",-1)])]),_:1}),t[10]||(t[10]=s("偏移量",-1))]),t[12]||(t[12]=a("p",null,[s("通过 "),a("code",null,"offset-x"),s(" 和 "),a("code",null,"offset-y"),s(" 设置 Menu 弹出的偏移量。")],-1)),l(d,null,{default:n(()=>[...t[11]||(t[11]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu"),s(),a("span",{class:"hljs-attr"},"offset-x"),s("="),a("span",{class:"hljs-string"},'"36px"'),s(),a("span",{class:"hljs-attr"},"offset-y"),s("="),a("span",{class:"hljs-string"},'"18px"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("偏移量"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"menu"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("菜单项"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("菜单项"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("菜单项"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",w,[a("h3",x,[l(e,{to:"#yu3chu4fa1yuan2su4tong2kuan1"},{default:n(()=>[...t[13]||(t[13]=[s("#",-1)])]),_:1}),t[14]||(t[14]=s("与触发元素同宽",-1))]),t[16]||(t[16]=a("p",null,[s("通过 "),a("code",null,"same-width"),s(" 使弹出的菜单和触发元素的宽度相同。")],-1)),l(d,null,{default:n(()=>[...t[15]||(t[15]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu"),s(),a("span",{class:"hljs-attr"},"same-width"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("与触发元素同宽"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"menu"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("菜单项"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("菜单项"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("菜单项"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",M,[a("h3",z,[l(e,{to:"#chu4fa1fang1shi4"},{default:n(()=>[...t[17]||(t[17]=[s("#",-1)])]),_:1}),t[18]||(t[18]=s("触发方式",-1))]),t[20]||(t[20]=a("p",null,[s("通过 "),a("code",null,"trigger"),s(" 改变菜单显示的触发方式，可选值为 "),a("code",null,"click"),s(" 和 "),a("code",null,"hover"),s("。")],-1)),l(d,null,{default:n(()=>[...t[19]||(t[19]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu"),s(),a("span",{class:"hljs-attr"},"trigger"),s("="),a("span",{class:"hljs-string"},'"hover"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("触发方式"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"menu"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("菜单项"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("菜单项"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("菜单项"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",S,[a("h3",P,[l(e,{to:"#zhu4ce4shi4jian4"},{default:n(()=>[...t[21]||(t[21]=[s("#",-1)])]),_:1}),t[22]||(t[22]=s("注册事件",-1))]),l(d,null,{default:n(()=>[...t[23]||(t[23]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu"),s(`
    @`),a("span",{class:"hljs-attr"},"open"),s("="),a("span",{class:"hljs-string"},`"Snackbar.info('open')"`),s(`
    @`),a("span",{class:"hljs-attr"},"opened"),s("="),a("span",{class:"hljs-string"},`"Snackbar.success('opened')"`),s(`
    @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},`"Snackbar.warning('close')"`),s(`
    @`),a("span",{class:"hljs-attr"},"closed"),s("="),a("span",{class:"hljs-string"},`"Snackbar.error('closed')"`),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("注册事件"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"menu"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("菜单项"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("菜单项"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("菜单项"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",N,[a("h3",C,[l(e,{to:"#jin4yong4"},{default:n(()=>[...t[24]||(t[24]=[s("#",-1)])]),_:1}),t[25]||(t[25]=s("禁用",-1))]),t[27]||(t[27]=a("p",null,[s("在 "),a("code",null,"disabled"),s(" 状态下，菜单将不再被打开。")],-1)),l(d,null,{default:n(()=>[...t[26]||(t[26]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu"),s(),a("span",{class:"hljs-attr"},"disabled"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"disabled"),s(">")]),s("禁用"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"menu"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("菜单项"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("菜单项"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("菜单项"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",E,[a("h3",$,[l(e,{to:"#shuang1xiang4bang3ding4"},{default:n(()=>[...t[28]||(t[28]=[s("#",-1)])]),_:1}),t[29]||(t[29]=s("双向绑定",-1))]),t[31]||(t[31]=a("p",null,[s("通过 "),a("code",null,"v-model:show"),s(" 进行双向绑定控制菜单的显示和隐藏。")],-1)),l(d,null,{default:n(()=>[...t[30]||(t[30]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"closeMenu"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  show.value = `),a("span",{class:"hljs-literal"},"false"),s(`
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu"),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("双向绑定"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"menu"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"closeMenu"'),s(">")]),s("菜单项"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"closeMenu"'),s(">")]),s("菜单项"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"closeMenu"'),s(">")]),s("菜单项"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",T,[a("h3",V,[l(e,{to:"#zhu4yi4"},{default:n(()=>[...t[32]||(t[32]=[s("#",-1)])]),_:1}),t[33]||(t[33]=s("注意",-1))]),t[34]||(t[34]=a("p",null,[s("Menu 是一个 "),a("code",null,"inline-block"),s(" 元素，通过默认插槽点击时显示菜单，如果希望 Menu 独占一行推荐包裹一个 "),a("code",null,"block"),s(" 元素。")],-1))]),t[54]||(t[54]=a("h2",null,"API",-1)),a("div",B,[a("h3",H,[l(e,{to:"#shu3xing4"},{default:n(()=>[...t[35]||(t[35]=[s("#",-1)])]),_:1}),t[36]||(t[36]=s("属性",-1))]),t[37]||(t[37]=c("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>是否显示菜单</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>placement</code></td><td>菜单弹出位置</td><td><em>Placement</em></td><td><code>cover-top-start</code></td></tr><tr><td><code>strategy</code></td><td>菜单定位方式，可选值为 <code>absolute</code> <code>fixed</code></td><td><em>string</em></td><td><code>absolute</code></td></tr><tr><td><code>offset-x</code></td><td>x 轴偏移量， 相对于菜单对齐后的位置</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>offset-y</code></td><td>y 轴偏移量， 相对于菜单对齐后的位置</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>teleport</code></td><td>菜单挂载的位置</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>body</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用菜单</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>trigger</code></td><td>菜单触发方式，可选值为 <code>click</code> <code>hover</code> <code>manual</code></td><td><em>string</em></td><td><code>click</code></td></tr><tr><td><code>reference</code></td><td>菜单关联的触发元素，<code>string</code> 类型为菜单组件的子孙元素选择器， <code>HTMLElement</code> 类型为任意指定的元素节点</td><td><em>string | HTMLElement</em></td><td><code>-</code></td></tr><tr><td><code>elevation</code></td><td>海拔高度，可选值为 <code>true</code> <code>false</code> 和 <code>0-24</code> 的等级</td><td><em>string | number | boolean</em></td><td><code>true</code></td></tr><tr><td><code>same-width</code></td><td>是否与触发元素同宽</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>default-style</code></td><td>是否启用默认样式</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>popover-class</code></td><td>弹出层的 class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>close-on-click-reference</code></td><td>是否在点击菜单触发元素后关闭菜单</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>close-on-key-escape</code></td><td>是否支持键盘 ESC 菜单</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table>",1))]),a("div",L,[a("h3",O,[l(e,{to:"#Placement"},{default:n(()=>[...t[38]||(t[38]=[s("#",-1)])]),_:1}),t[39]||(t[39]=s("Placement",-1))]),t[40]||(t[40]=c("<table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td><code>top</code></td><td>顶部中心位置</td></tr><tr><td><code>top-start</code></td><td>顶部左侧位置</td></tr><tr><td><code>top-end</code></td><td>顶部右侧位置</td></tr><tr><td><code>bottom</code></td><td>底部中心位置</td></tr><tr><td><code>bottom-start</code></td><td>底部左侧位置</td></tr><tr><td><code>bottom-end</code></td><td>底部右侧位置</td></tr><tr><td><code>right</code></td><td>右侧中心位置</td></tr><tr><td><code>right-start</code></td><td>右侧上方位置</td></tr><tr><td><code>right-end</code></td><td>右侧下方位置</td></tr><tr><td><code>left</code></td><td>左侧中心位置</td></tr><tr><td><code>left-start</code></td><td>左侧上方位置</td></tr><tr><td><code>left-end</code></td><td>左侧下方位置</td></tr><tr><td><code>cover-top</code></td><td>顶部中心位置, 覆盖触发器</td></tr><tr><td><code>cover-top-start</code></td><td>顶部左侧位置, 覆盖触发器</td></tr><tr><td><code>cover-top-end</code></td><td>顶部右侧位置, 覆盖触发器</td></tr><tr><td><code>cover-bottom</code></td><td>底部中心位置, 覆盖触发器</td></tr><tr><td><code>cover-bottom-start</code></td><td>底部左侧位置, 覆盖触发器</td></tr><tr><td><code>cover-bottom-end</code></td><td>底部右侧位置, 覆盖触发器</td></tr><tr><td><code>cover-left</code></td><td>左侧位置, 覆盖触发器</td></tr><tr><td><code>cover-right</code></td><td>右侧位置, 覆盖触发器</td></tr></tbody></table>",1))]),a("div",q,[a("h3",A,[l(e,{to:"#fang1fa3"},{default:n(()=>[...t[41]||(t[41]=[s("#",-1)])]),_:1}),t[42]||(t[42]=s("方法",-1))]),t[43]||(t[43]=c("<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>open</code></td><td>打开 Menu</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>关闭 Menu</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>resize</code></td><td>Menu 默认插槽元素产生位置大小变化时可以调用此方法进行重绘</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>setReference</code> <em><strong>3.7.2</strong></em></td><td>设置菜单关联的触发元素</td><td><code>reference: 与组件属性的 reference 一致</code></td><td><code>-</code></td></tr></tbody></table>",1))]),a("div",I,[a("h3",Q,[l(e,{to:"#shi4jian4"},{default:n(()=>[...t[44]||(t[44]=[s("#",-1)])]),_:1}),t[45]||(t[45]=s("事件",-1))]),t[46]||(t[46]=c("<table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>open</code></td><td>打开菜单时触发</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>打开菜单动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>关闭菜单时触发</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>关闭菜单动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>click-outside</code></td><td>点击菜单外部时触发</td><td><code>event: Event</code></td></tr></tbody></table>",1))]),a("div",R,[a("h3",D,[l(e,{to:"#cha1cao2"},{default:n(()=>[...t[47]||(t[47]=[s("#",-1)])]),_:1}),t[48]||(t[48]=s("插槽",-1))]),t[49]||(t[49]=c("<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>菜单关联的触发元素</td><td><code>-</code></td></tr><tr><td><code>menu</code></td><td>菜单内容</td><td><code>-</code></td></tr></tbody></table>",1))]),a("div",F,[a("h3",G,[l(e,{to:"#yang4shi4bian4liang4"},{default:n(()=>[...t[50]||(t[50]=[s("#",-1)])]),_:1}),t[51]||(t[51]=s("样式变量",-1))]),t[52]||(t[52]=c('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--menu-background-color</code></td><td><code>var(--color-surface-container-high)</code></td></tr><tr><td><code>--menu-border-radius</code></td><td><code>2px</code></td></tr></tbody></table>',2))])])}const _=p(j,[["render",J]]);export{_ as default};
