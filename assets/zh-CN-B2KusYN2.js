import{b as r,m as p,p as a,q as n,Q as s,w as l,$ as e,e as o,h}from"./index-DtCrA0ro.js";const i={components:{}},j={class:"varlet-site-doc"},m={class:"card"},g={id:"jie4shao4"},u={class:"card"},b={id:"ji1ben3shi3yong4"},k={class:"card"},v={id:"chui2zhi2pai2lie4"},f={class:"card"},y={id:"di3bu4xian3shi4"},w={class:"card"},S={id:"xian3shi4shi2chang2"},x={class:"card"},z={id:"zi4ding4yi4tu2biao1"},L={class:"card"},C={id:"jin4zhi3chuan1tou4dian3ji1"},N={class:"card"},V={id:"ji1ben3shi3yong4"},O={class:"card"},B={id:"xian3shi4shi2chang2"},T={class:"card"},$={id:"di3bu4xian3shi4"},M={class:"card"},I={id:"zi4ding4yi4"},P={class:"card"},D={id:"Sn0a0ckba0rlei4xing2"},R={class:"card"},q={id:"duo1li4mo2shi4"},A={class:"card"},E={id:"shu3xing4"},H={class:"card"},Q={id:"shi4jian4"},F={class:"card"},G={id:"cha1cao2"},J={class:"card"},K={id:"fang1fa3"},U={class:"card"},W={id:"SnackbarOptions"},X={class:"card"},Y={id:"yang4shi4bian4liang4"};function Z(_,t,ss,as,ts,ns){const d=o("router-link"),c=o("var-site-code-example");return h(),p("div",j,[t[63]||(t[63]=a("h1",null,"消息条",-1)),a("div",m,[a("h3",g,[n(d,{to:"#jie4shao4"},{default:l(()=>[...t[0]||(t[0]=[s("#",-1)])]),_:1}),t[1]||(t[1]=s("介绍",-1))]),t[2]||(t[2]=a("p",null,"用于向用户显示快速消息。",-1))]),t[64]||(t[64]=a("h2",null,"组件调用",-1)),a("div",u,[a("h3",b,[n(d,{to:"#ji1ben3shi3yong4"},{default:l(()=>[...t[3]||(t[3]=[s("#",-1)])]),_:1}),t[4]||(t[4]=s("基本使用",-1))]),n(c,null,{default:l(()=>[...t[5]||(t[5]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = !show"'),s(">")]),s("基本使用"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-snackbar"),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(">")]),s("这是一个消息条！！"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-snackbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",k,[a("h3",v,[n(d,{to:"#chui2zhi2pai2lie4"},{default:l(()=>[...t[6]||(t[6]=[s("#",-1)])]),_:1}),t[7]||(t[7]=s("垂直排列",-1))]),t[9]||(t[9]=a("p",null,[s("通过 "),a("code",null,"vertical"),s(" 属性改变 "),a("code",null,"snackbar"),s(" 排列方式，通过 "),a("code",null,"自定义插槽"),s(" 创建右边 action。")],-1)),n(c,null,{default:l(()=>[...t[8]||(t[8]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-snackbar"),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(),a("span",{class:"hljs-attr"},":vertical"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s(`
    这是一个消息条！！
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"action"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},":elevation"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = !show"'),s(">")]),s("关闭"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-snackbar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = !show"'),s(">")]),s("垂直排列"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",f,[a("h3",y,[n(d,{to:"#di3bu4xian3shi4"},{default:l(()=>[...t[10]||(t[10]=[s("#",-1)])]),_:1}),t[11]||(t[11]=s("底部显示",-1))]),t[13]||(t[13]=a("p",null,[s("通过 "),a("code",null,"position"),s(" 属性改变 "),a("code",null,"snackbar"),s(" 显示位置。")],-1)),n(c,null,{default:l(()=>[...t[12]||(t[12]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-snackbar"),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(),a("span",{class:"hljs-attr"},"position"),s("="),a("span",{class:"hljs-string"},'"bottom"'),s(">")]),s(`
    这是一个消息条！！
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"action"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},":elevation"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = false"'),s(">")]),s("关闭"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-snackbar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = !show"'),s(">")]),s("底部显示"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",w,[a("h3",S,[n(d,{to:"#xian3shi4shi2chang2"},{default:l(()=>[...t[14]||(t[14]=[s("#",-1)])]),_:1}),t[15]||(t[15]=s("显示时长",-1))]),t[17]||(t[17]=a("p",null,[s("通过 "),a("code",null,"duration"),s(" 属性改变 "),a("code",null,"snackbar"),s(" 显示时长。")],-1)),n(c,null,{default:l(()=>[...t[16]||(t[16]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-snackbar"),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(),a("span",{class:"hljs-attr"},":duration"),s("="),a("span",{class:"hljs-string"},'"1000"'),s(">")]),s(" 这是一个消息条！！"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-snackbar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = !show"'),s(">")]),s(`
    显示时长
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",x,[a("h3",z,[n(d,{to:"#zi4ding4yi4tu2biao1"},{default:l(()=>[...t[18]||(t[18]=[s("#",-1)])]),_:1}),t[19]||(t[19]=s("自定义图标",-1))]),t[21]||(t[21]=a("p",null,[s("通过 "),a("code",null,"icon"),s(" 插槽实现自定义图标。")],-1)),n(c,null,{default:l(()=>[...t[20]||(t[20]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-snackbar"),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(">")]),s(`
    这是一个消息条！！
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"heart-outline"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-snackbar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = !show"'),s(">")]),s(`
    自定义图标
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",L,[a("h3",C,[n(d,{to:"#jin4zhi3chuan1tou4dian3ji1"},{default:l(()=>[...t[22]||(t[22]=[s("#",-1)])]),_:1}),t[23]||(t[23]=s("禁止穿透点击",-1))]),t[25]||(t[25]=a("p",null,[s("使用 "),a("code",null,"forbid-click"),s(" 控制是否禁止穿透点击。")],-1)),n(c,null,{default:l(()=>[...t[24]||(t[24]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-snackbar"),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(),a("span",{class:"hljs-attr"},":forbid-click"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s(`
    这是一个消息条！！
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-snackbar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s(`
    禁止穿透
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t[65]||(t[65]=a("h2",null,"函数调用",-1)),a("div",N,[a("h3",V,[n(d,{to:"#ji1ben3shi3yong4"},{default:l(()=>[...t[26]||(t[26]=[s("#",-1)])]),_:1}),t[27]||(t[27]=s("基本使用",-1))]),n(c,null,{default:l(()=>[...t[28]||(t[28]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"Snackbar('这是一个消息条！！')"`),s(">")]),s("基本使用"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",O,[a("h3",B,[n(d,{to:"#xian3shi4shi2chang2"},{default:l(()=>[...t[29]||(t[29]=[s("#",-1)])]),_:1}),t[30]||(t[30]=s("显示时长",-1))]),n(c,null,{default:l(()=>[...t[31]||(t[31]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"createSnackbar"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  Snackbar({
    `),a("span",{class:"hljs-attr"},"content"),s(": "),a("span",{class:"hljs-string"},'"这是一个消息条！！"'),s(`,
    `),a("span",{class:"hljs-attr"},"duration"),s(": "),a("span",{class:"hljs-number"},"1000"),s(`,
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"createSnackbar"'),s(">")]),s("显示时长"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",T,[a("h3",$,[n(d,{to:"#di3bu4xian3shi4"},{default:l(()=>[...t[32]||(t[32]=[s("#",-1)])]),_:1}),t[33]||(t[33]=s("底部显示",-1))]),n(c,null,{default:l(()=>[...t[34]||(t[34]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"createSnackbar"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  Snackbar({
    `),a("span",{class:"hljs-attr"},"content"),s(": "),a("span",{class:"hljs-string"},'"这是一个消息条！！"'),s(`,
    `),a("span",{class:"hljs-attr"},"position"),s(": "),a("span",{class:"hljs-string"},"'bottom'"),s(`
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"createSnackbar"'),s(">")]),s("底部显示"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",M,[a("h3",I,[n(d,{to:"#zi4ding4yi4"},{default:l(()=>[...t[35]||(t[35]=[s("#",-1)])]),_:1}),t[36]||(t[36]=s("自定义",-1))]),n(c,null,{default:l(()=>[...t[37]||(t[37]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { h } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar, Icon, Button } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"createSnackbar"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"const"),s(` customSnackbar = Snackbar({
  `),a("span",{class:"hljs-attr"},"content"),s(": "),a("span",{class:"hljs-string"},"'Hello, Varlet'"),s(`,
  `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-function"},"() =>"),s(`
    h(Icon, {
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'heart'"),s(`,
      `),a("span",{class:"hljs-attr"},"style"),s(": { "),a("span",{class:"hljs-attr"},"paddingRight"),s(": "),a("span",{class:"hljs-string"},"'12px'"),s(` },
    }),
  `),a("span",{class:"hljs-attr"},"action"),s(": "),a("span",{class:"hljs-function"},"() =>"),s(`
    h(
      Button,
      {
        `),a("span",{class:"hljs-attr"},"size"),s(": "),a("span",{class:"hljs-string"},"'small'"),s(`,
        `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'primary'"),s(`,
        `),a("span",{class:"hljs-attr"},"onClick"),s(": "),a("span",{class:"hljs-function"},"() =>"),s(` customSnackbar.clear(),
      },
      { `),a("span",{class:"hljs-attr"},"default"),s(": "),a("span",{class:"hljs-function"},"() =>"),s(),a("span",{class:"hljs-string"},"'关闭'"),s(` }
    )
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"createSnackbar"'),s(">")]),s("自定义"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",P,[a("h3",D,[n(d,{to:"#Sn0a0ckba0rlei4xing2"},{default:l(()=>[...t[38]||(t[38]=[s("#",-1)])]),_:1}),t[39]||(t[39]=s("Snackbar 类型",-1))]),n(c,null,{default:l(()=>[...t[40]||(t[40]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"createSnackbar"),s("("),a("span",{class:"hljs-params"},"type"),s(") ")]),s(`{
  Snackbar[type](`),a("span",{class:"hljs-string"},'"这是一个消息条"'),s(`)
  `),a("span",{class:"hljs-keyword"},"if"),s(" (type === "),a("span",{class:"hljs-string"},"'loading'"),s(`) {
    `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
      Snackbar.success(`),a("span",{class:"hljs-string"},'"加载成功"'),s(`)
    }, `),a("span",{class:"hljs-number"},"2000"),s(`)
  }
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"large"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
      `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(` 
      `),a("span",{class:"hljs-attr"},"block"),s(` 
      @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"createSnackbar('success')"`),s(`
    >`)]),s(`
      成功
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
      `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(` 
      `),a("span",{class:"hljs-attr"},"block"),s(` 
      @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"createSnackbar('warning')"`),s(`
    >`)]),s(`
      警告
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
      `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(` 
      `),a("span",{class:"hljs-attr"},"block"),s(` 
      @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"createSnackbar('info')"`),s(`
    >`)]),s(`
      消息
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
      `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"danger"'),s(` 
      `),a("span",{class:"hljs-attr"},"block"),s(` 
      @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"createSnackbar('error')"`),s(`
    >`)]),s(`
      错误
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
      `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(` 
      `),a("span",{class:"hljs-attr"},"block"),s(` 
      @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"createSnackbar('loading')"`),s(`
    >`)]),s(`
      加载
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",R,[a("h3",q,[n(d,{to:"#duo1li4mo2shi4"},{default:l(()=>[...t[41]||(t[41]=[s("#",-1)])]),_:1}),t[42]||(t[42]=s("多例模式",-1))]),t[44]||(t[44]=a("p",null,"使用函数式调用时，Snackbar 默认采用单例模式，即同一时间只会存在一个 Snackbar，如果需要在同一时间弹出多个 Snackbar，可以参考下面的示例:",-1)),n(c,null,{default:l(()=>[...t[43]||(t[43]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"openMultiple"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  Snackbar.allowMultiple(`),a("span",{class:"hljs-literal"},"true"),s(`)

  `),a("span",{class:"hljs-keyword"},"const"),s(" snackbar1 = Snackbar("),a("span",{class:"hljs-string"},"'Snackbar 1'"),s(`);
  Snackbar.success(`),a("span",{class:"hljs-string"},"'Snackbar 2'"),s(`);

  `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
    snackbar1.clear()
  }, `),a("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"openMultiple"'),s(">")]),s("多例模式"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t[66]||(t[66]=a("h2",null,"API",-1)),a("div",A,[a("h3",E,[n(d,{to:"#shu3xing4"},{default:l(()=>[...t[45]||(t[45]=[s("#",-1)])]),_:1}),t[46]||(t[46]=s("属性",-1))]),t[47]||(t[47]=e("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>是否显示 <code>Snackbar</code></td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>type</code></td><td><code>Snackbar</code> 类型，可选值为 <code>success warning info error loading</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>position</code></td><td><code>Snackbar</code> 位置，可选值为 <code>top center bottom</code></td><td><em>string</em></td><td><code>top</code></td></tr><tr><td><code>duration</code></td><td>显示时长</td><td><em>number</em></td><td><code>3000</code></td></tr><tr><td><code>elevation</code> <em><strong>3.3.0</strong></em></td><td>海拔高度，可选值为 <code>true</code> <code>false</code> 和 <code>0-24</code> 的等级</td><td><em>string | number | boolean</em></td><td><code>true</code></td></tr><tr><td><code>content</code></td><td>自定义内容</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>content-class</code></td><td>自定义内容的类名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>vertical</code></td><td>是否启用竖直排列方式</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loading-type</code></td><td>Loading类型(见 <code>Loading</code> 组件)</td><td><em>string</em></td><td><code>circle</code></td></tr><tr><td><code>loading-size</code></td><td>Loading大小(见 <code>Loading</code> 组件)</td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>loading-color</code></td><td>loading颜色(见 <code>loading</code>组件)</td><td><em>string</em></td><td><code>currentColor</code></td></tr><tr><td><code>loading-radius</code></td><td>Loading半径大小(见 <code>Loading</code> 组件)</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>是否禁止滚动穿透</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>forbid-click</code></td><td>是否禁止穿透点击</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>teleport</code></td><td>弹出层挂载的位置</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>body</code></td></tr></tbody></table>",1))]),a("div",H,[a("h3",Q,[n(d,{to:"#shi4jian4"},{default:l(()=>[...t[48]||(t[48]=[s("#",-1)])]),_:1}),t[49]||(t[49]=s("事件",-1))]),t[50]||(t[50]=e("<table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>open</code></td><td>打开 <code>Snackbar</code> 时触发</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>打开 <code>Snackbar</code> 动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>关闭 <code>Snackbar</code> 时触发</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>关闭 <code>Snackbar</code> 动画结束时触发</td><td><code>-</code></td></tr></tbody></table>",1))]),a("div",F,[a("h3",G,[n(d,{to:"#cha1cao2"},{default:l(()=>[...t[51]||(t[51]=[s("#",-1)])]),_:1}),t[52]||(t[52]=s("插槽",-1))]),t[53]||(t[53]=e("<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td><code>Snackbar</code> 内容</td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td><code>Snackbar</code> 图标</td><td><code>-</code></td></tr><tr><td><code>action</code></td><td><code>Snackbar</code> 右边动作区</td><td><code>-</code></td></tr></tbody></table>",1))]),a("div",J,[a("h3",K,[n(d,{to:"#fang1fa3"},{default:l(()=>[...t[54]||(t[54]=[s("#",-1)])]),_:1}),t[55]||(t[55]=s("方法",-1))]),t[56]||(t[56]=e("<p>实例上的 <code>clear</code> 方法可关闭当前实例，全局 <code>clear</code> 方法可关闭所有的消息条。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>Snackbar</code></td><td>显示消息条</td><td><em>options | string</em></td><td><code>snackbar 实例</code></td></tr><tr><td><code>Snackbar.success</code></td><td>显示成功消息条</td><td><em>options | string</em></td><td><code>snackbar 实例</code></td></tr><tr><td><code>Snackbar.info</code></td><td>显示普通消息条</td><td><em>options | string</em></td><td><code>snackbar 实例</code></td></tr><tr><td><code>Snackbar.warning</code></td><td>显示警告消息条</td><td><em>options | string</em></td><td><code>snackbar 实例</code></td></tr><tr><td><code>Snackbar.error</code></td><td>显示错误消息条</td><td><em>options | string</em></td><td><code>snackbar 实例</code></td></tr><tr><td><code>Snackbar.loading</code></td><td>显示加载消息条</td><td><em>options | string</em></td><td><code>snackbar 实例</code></td></tr><tr><td><code>Snackbar.clear</code></td><td>关闭消息条</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>Snackbar.allowMultiple</code></td><td>是否允许多例模式</td><td><em>boolean</em></td><td><code>-</code></td></tr><tr><td><code>Snackbar.setDefaultOptions</code></td><td>设置默认的选项配置</td><td><em>options</em></td><td><code>-</code></td></tr><tr><td><code>Snackbar.resetDefaultOptions</code></td><td>重置默认的选项配置</td><td><em>-</em></td><td><code>-</code></td></tr></tbody></table>",2))]),a("div",U,[a("h3",W,[n(d,{to:"#SnackbarOptions"},{default:l(()=>[...t[57]||(t[57]=[s("#",-1)])]),_:1}),t[58]||(t[58]=s("Snackbar Options",-1))]),t[59]||(t[59]=e("<h4>函数式调用时传入的选项</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>type</code></td><td><code>Snackbar</code> 类型，可选值为 <code>success warning info error loading</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>position</code></td><td><code>Snackbar</code> 位置，可选值为 <code>top center bottom</code></td><td><em>string</em></td><td><code>top</code></td></tr><tr><td><code>duration</code></td><td>显示时长(当 <code>type</code> 属性为 <code>loading</code> 时，需要手动关闭)</td><td><em>number</em></td><td><code>3000</code></td></tr><tr><td><code>elevation</code> <em><strong>3.3.0</strong></em></td><td>海拔高度，可选值为 <code>true</code> <code>false</code> 和 <code>0-24</code> 的等级</td><td><em>string | number | boolean</em></td><td><code>true</code></td></tr><tr><td><code>content</code></td><td>自定义内容</td><td><em>string | VNode | (() =&gt; VNode)</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>自定义图标</td><td><em>string | VNode | (() =&gt; VNode)</em></td><td><code>-</code></td></tr><tr><td><code>action</code></td><td>自定义右边动作区</td><td><em>string | VNode | (() =&gt; VNode)</em></td><td><code>-</code></td></tr><tr><td><code>contentClass</code></td><td>自定义内容的类名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>vertical</code></td><td>是否启用竖直排列方式</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loadingType</code></td><td>Loading类型(见 <code>Loading</code> 组件)</td><td><em>string</em></td><td><code>circle</code></td></tr><tr><td><code>loadingSize</code></td><td>Loading大小(见 <code>Loading</code> 组件)</td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>loadingColor</code></td><td>Loading颜色(见 <code>Loading</code> 组件)</td><td><em>string</em></td><td><code>currentColor</code></td></tr><tr><td><code>loadingRadius</code></td><td>Loading半径大小(见 <code>Loading</code> 组件)</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>lockScroll</code></td><td>是否禁止滚动穿透</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>forbidClick</code></td><td>是否禁止穿透点击(当 <code>type</code> 属性为 <code>loading</code> 时，默认为 <code>true</code>)</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onOpen</code></td><td>打开 <code>Snackbar</code> 时触发</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>打开 <code>Snackbar</code> 动画结束时触发</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>关闭 <code>Snackbar</code> 时触发</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>关闭 <code>Snackbar</code> 动画结束时触发</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table>",2))]),a("div",X,[a("h3",Y,[n(d,{to:"#yang4shi4bian4liang4"},{default:l(()=>[...t[60]||(t[60]=[s("#",-1)])]),_:1}),t[61]||(t[61]=s("样式变量",-1))]),t[62]||(t[62]=e('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--snackbar-width</code></td><td><code>256px</code></td></tr><tr><td><code>--snackbar-color</code></td><td><code>rgba(255, 255, 255, .87)</code></td></tr><tr><td><code>--snackbar-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--snackbar-background</code></td><td><code>#333</code></td></tr><tr><td><code>--snackbar-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--snackbar-margin</code></td><td><code>6px 24px</code></td></tr><tr><td><code>--snackbar-border-color</code></td><td><code>currentColor</code></td></tr><tr><td><code>--snackbar-success-background</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--snackbar-info-background</code></td><td><code>var(--color-info)</code></td></tr><tr><td><code>--snackbar-error-background</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--snackbar-warning-background</code></td><td><code>var(--color-warning)</code></td></tr><tr><td><code>--snackbar-content-padding</code></td><td><code>14px 16px</code></td></tr><tr><td><code>--snackbar-action-margin</code></td><td><code>0 8px</code></td></tr><tr><td><code>--snackbar-icon-margin</code></td><td><code>0 8px</code></td></tr><tr><td><code>--snackbar-vertical-action-margin</code></td><td><code>0 8px 8px 0</code></td></tr></tbody></table>',2))])])}const ds=r(i,[["render",Z]]);export{ds as default};
