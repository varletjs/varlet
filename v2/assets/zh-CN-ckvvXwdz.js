import{_ as o,b as e,e as r,m as h,p as a,q as t,w as n,P as s,Z as d}from"./index-vwO9GBzB.js";const p={components:{}},i={class:"varlet-site-doc"},j=a("h1",null,"消息条",-1),m={class:"card"},g={id:"jie4shao4"},u=a("p",null,"用于向用户显示快速消息。",-1),b=a("h2",null,"组件调用",-1),k={class:"card"},_={id:"ji1ben3shi3yong4"},v=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = !show"'),s(">")]),s("基本使用"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-snackbar"),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(">")]),s("这是一个消息条！！"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-snackbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),f={class:"card"},y={id:"chui2zhi2pai2lie4"},w=a("p",null,[s("通过 "),a("code",null,"vertical"),s(" 属性改变 "),a("code",null,"snackbar"),s(" 排列方式，通过 "),a("code",null,"自定义插槽"),s(" 创建右边 action。")],-1),S=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-snackbar"),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(),a("span",{class:"hljs-attr"},":vertical"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s(`
    这是一个消息条！！
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"action"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = !show"'),s(">")]),s("关闭"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-snackbar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = !show"'),s(">")]),s("垂直排列"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),x={class:"card"},z={id:"di3bu4xian3shi4"},L=a("p",null,[s("通过 "),a("code",null,"position"),s(" 属性改变 "),a("code",null,"snackbar"),s(" 显示位置。")],-1),C=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-snackbar"),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(),a("span",{class:"hljs-attr"},"position"),s("="),a("span",{class:"hljs-string"},'"bottom"'),s(">")]),s(`
    这是一个消息条！！
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"action"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = false"'),s(">")]),s("关闭"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-snackbar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = !show"'),s(">")]),s("底部显示"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),N={class:"card"},V={id:"xian3shi4shi2chang2"},O=a("p",null,[s("通过 "),a("code",null,"duration"),s(" 属性改变 "),a("code",null,"snackbar"),s(" 显示时长。")],-1),B=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-snackbar"),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(),a("span",{class:"hljs-attr"},":duration"),s("="),a("span",{class:"hljs-string"},'"1000"'),s(">")]),s(" 这是一个消息条！！"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-snackbar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = !show"'),s(">")]),s(`
    显示时长
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),T={class:"card"},M={id:"zi4ding4yi4tu2biao1"},P=a("p",null,[s("通过 "),a("code",null,"icon"),s(" 插槽实现自定义图标。")],-1),$=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1),I={class:"card"},D={id:"jin4zhi3chuan1tou4dian3ji1"},R=a("p",null,[s("使用 "),a("code",null,"forbid-click"),s(" 控制是否禁止穿透点击。")],-1),q=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1),A=a("h2",null,"函数调用",-1),E={class:"card"},H={id:"ji1ben3shi3yong4"},Z=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"Snackbar("'),s('这是一个消息条！！")">')]),s("基本使用"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),F={class:"card"},G={id:"xian3shi4shi2chang2"},J=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1),K={class:"card"},Q={id:"di3bu4xian3shi4"},U=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1),W={class:"card"},X={id:"zi4ding4yi4"},Y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1),ss={class:"card"},as={id:"Sn0a0ckba0rlei4xing2"},ts=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1),ns={class:"card"},ls={id:"duo1li4mo2shi4"},cs=a("p",null,"使用函数式调用时，Snackbar 默认采用单例模式，即同一时间只会存在一个 Snackbar，如果需要在同一时间弹出多个 Snackbar，可以参考下面的示例:",-1),ds=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1),es=a("h2",null,"API",-1),os={class:"card"},rs={id:"shu3xing4"},hs=d("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>是否显示 <code>Snackbar</code></td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>type</code></td><td><code>Snackbar</code> 类型，可选值为 <code>success warning info error loading</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>position</code></td><td><code>Snackbar</code> 位置，可选值为 <code>top center bottom</code></td><td><em>string</em></td><td><code>top</code></td></tr><tr><td><code>duration</code></td><td>显示时长</td><td><em>number</em></td><td><code>3000</code></td></tr><tr><td><code>content</code></td><td>自定义内容</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>content-class</code></td><td>自定义内容的类名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>vertical</code></td><td>是否启用竖直排列方式</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loading-type</code></td><td>Loading类型(见 <code>Loading</code> 组件)</td><td><em>string</em></td><td><code>circle</code></td></tr><tr><td><code>loading-size</code></td><td>Loading大小(见 <code>Loading</code> 组件)</td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>loading-color</code></td><td>loading颜色(见 <code>loading</code>组件)</td><td><em>string</em></td><td><code>currentColor</code></td></tr><tr><td><code>loading-radius</code></td><td>Loading半径大小(见 <code>Loading</code> 组件)</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>是否禁止滚动穿透</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>forbid-click</code></td><td>是否禁止穿透点击</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>teleport</code></td><td>弹出层挂载的位置</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>body</code></td></tr></tbody></table>",1),ps={class:"card"},is={id:"shi4jian4"},js=d("<table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>open</code></td><td>打开 <code>Snackbar</code> 时触发</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>打开 <code>Snackbar</code> 动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>关闭 <code>Snackbar</code> 时触发</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>关闭 <code>Snackbar</code> 动画结束时触发</td><td><code>-</code></td></tr></tbody></table>",1),ms={class:"card"},gs={id:"cha1cao2"},us=d("<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td><code>Snackbar</code> 内容</td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td><code>Snackbar</code> 图标</td><td><code>-</code></td></tr><tr><td><code>action</code></td><td><code>Snackbar</code> 右边动作区</td><td><code>-</code></td></tr></tbody></table>",1),bs={class:"card"},ks={id:"fang1fa3"},_s=d("<p>实例上的 <code>clear</code> 方法可关闭当前实例，全局 <code>clear</code> 方法可关闭所有的消息条。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>Snackbar</code></td><td>显示消息条</td><td><em>options | string</em></td><td><code>snackbar 实例</code></td></tr><tr><td><code>Snackbar.success</code></td><td>显示成功消息条</td><td><em>options | string</em></td><td><code>snackbar 实例</code></td></tr><tr><td><code>Snackbar.info</code></td><td>显示普通消息条</td><td><em>options | string</em></td><td><code>snackbar 实例</code></td></tr><tr><td><code>Snackbar.warning</code></td><td>显示警告消息条</td><td><em>options | string</em></td><td><code>snackbar 实例</code></td></tr><tr><td><code>Snackbar.error</code></td><td>显示错误消息条</td><td><em>options | string</em></td><td><code>snackbar 实例</code></td></tr><tr><td><code>Snackbar.loading</code></td><td>显示加载消息条</td><td><em>options | string</em></td><td><code>snackbar 实例</code></td></tr><tr><td><code>Snackbar.clear</code></td><td>关闭消息条</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>Snackbar.allowMultiple</code></td><td>是否允许多例模式</td><td><em>boolean</em></td><td><code>-</code></td></tr><tr><td><code>Snackbar.setDefaultOptions</code></td><td>设置默认的选项配置</td><td><em>options</em></td><td><code>-</code></td></tr><tr><td><code>Snackbar.resetDefaultOptions</code></td><td>重置默认的选项配置</td><td><em>-</em></td><td><code>-</code></td></tr></tbody></table>",2),vs={class:"card"},fs={id:"SnackbarOptions"},ys=d("<h4>函数式调用时传入的选项</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>type</code></td><td><code>Snackbar</code> 类型，可选值为 <code>success warning info error loading</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>position</code></td><td><code>Snackbar</code> 位置，可选值为 <code>top center bottom</code></td><td><em>string</em></td><td><code>top</code></td></tr><tr><td><code>duration</code></td><td>显示时长(当 <code>type</code> 属性为 <code>loading</code> 时，需要手动关闭)</td><td><em>number</em></td><td><code>3000</code></td></tr><tr><td><code>content</code></td><td>自定义内容</td><td><em>string | VNode | (() =&gt; VNode)</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>自定义图标</td><td><em>string | VNode | (() =&gt; VNode)</em></td><td><code>-</code></td></tr><tr><td><code>action</code></td><td>自定义右边动作区</td><td><em>string | VNode | (() =&gt; VNode)</em></td><td><code>-</code></td></tr><tr><td><code>contentClass</code></td><td>自定义内容的类名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>vertical</code></td><td>是否启用竖直排列方式</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loadingType</code></td><td>Loading类型(见 <code>Loading</code> 组件)</td><td><em>string</em></td><td><code>circle</code></td></tr><tr><td><code>loadingSize</code></td><td>Loading大小(见 <code>Loading</code> 组件)</td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>loadingColor</code></td><td>Loading颜色(见 <code>Loading</code> 组件)</td><td><em>string</em></td><td><code>currentColor</code></td></tr><tr><td><code>loadingRadius</code></td><td>Loading半径大小(见 <code>Loading</code> 组件)</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>lockScroll</code></td><td>是否禁止滚动穿透</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>forbidClick</code></td><td>是否禁止穿透点击(当 <code>type</code> 属性为 <code>loading</code> 时，默认为 <code>true</code>)</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onOpen</code></td><td>打开 <code>Snackbar</code> 时触发</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>打开 <code>Snackbar</code> 动画结束时触发</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>关闭 <code>Snackbar</code> 时触发</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>关闭 <code>Snackbar</code> 动画结束时触发</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table>",2),ws={class:"card"},Ss={id:"yang4shi4bian4liang4"},xs=d('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--snackbar-width</code></td><td><code>256px</code></td></tr><tr><td><code>--snackbar-color</code></td><td><code>rgba(255, 255, 255, .87)</code></td></tr><tr><td><code>--snackbar-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--snackbar-background</code></td><td><code>#333</code></td></tr><tr><td><code>--snackbar-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--snackbar-margin</code></td><td><code>6px 24px</code></td></tr><tr><td><code>--snackbar-border-color</code></td><td><code>currentColor</code></td></tr><tr><td><code>--snackbar-success-background</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--snackbar-info-background</code></td><td><code>var(--color-info)</code></td></tr><tr><td><code>--snackbar-error-background</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--snackbar-warning-background</code></td><td><code>var(--color-warning)</code></td></tr><tr><td><code>--snackbar-content-padding</code></td><td><code>14px 16px</code></td></tr><tr><td><code>--snackbar-action-margin</code></td><td><code>0 8px</code></td></tr><tr><td><code>--snackbar-icon-margin</code></td><td><code>0 8px</code></td></tr><tr><td><code>--snackbar-vertical-action-margin</code></td><td><code>0 8px 8px 0</code></td></tr></tbody></table>',2);function zs(Ls,Cs,Ns,Vs,Os,Bs){const l=e("router-link"),c=e("var-site-code-example");return r(),h("div",i,[j,a("div",m,[a("h3",g,[t(l,{to:"#jie4shao4"},{default:n(()=>[s("#")]),_:1}),s("介绍")]),u]),b,a("div",k,[a("h3",_,[t(l,{to:"#ji1ben3shi3yong4"},{default:n(()=>[s("#")]),_:1}),s("基本使用")]),t(c,null,{default:n(()=>[v]),_:1})]),a("div",f,[a("h3",y,[t(l,{to:"#chui2zhi2pai2lie4"},{default:n(()=>[s("#")]),_:1}),s("垂直排列")]),w,t(c,null,{default:n(()=>[S]),_:1})]),a("div",x,[a("h3",z,[t(l,{to:"#di3bu4xian3shi4"},{default:n(()=>[s("#")]),_:1}),s("底部显示")]),L,t(c,null,{default:n(()=>[C]),_:1})]),a("div",N,[a("h3",V,[t(l,{to:"#xian3shi4shi2chang2"},{default:n(()=>[s("#")]),_:1}),s("显示时长")]),O,t(c,null,{default:n(()=>[B]),_:1})]),a("div",T,[a("h3",M,[t(l,{to:"#zi4ding4yi4tu2biao1"},{default:n(()=>[s("#")]),_:1}),s("自定义图标")]),P,t(c,null,{default:n(()=>[$]),_:1})]),a("div",I,[a("h3",D,[t(l,{to:"#jin4zhi3chuan1tou4dian3ji1"},{default:n(()=>[s("#")]),_:1}),s("禁止穿透点击")]),R,t(c,null,{default:n(()=>[q]),_:1})]),A,a("div",E,[a("h3",H,[t(l,{to:"#ji1ben3shi3yong4"},{default:n(()=>[s("#")]),_:1}),s("基本使用")]),t(c,null,{default:n(()=>[Z]),_:1})]),a("div",F,[a("h3",G,[t(l,{to:"#xian3shi4shi2chang2"},{default:n(()=>[s("#")]),_:1}),s("显示时长")]),t(c,null,{default:n(()=>[J]),_:1})]),a("div",K,[a("h3",Q,[t(l,{to:"#di3bu4xian3shi4"},{default:n(()=>[s("#")]),_:1}),s("底部显示")]),t(c,null,{default:n(()=>[U]),_:1})]),a("div",W,[a("h3",X,[t(l,{to:"#zi4ding4yi4"},{default:n(()=>[s("#")]),_:1}),s("自定义")]),t(c,null,{default:n(()=>[Y]),_:1})]),a("div",ss,[a("h3",as,[t(l,{to:"#Sn0a0ckba0rlei4xing2"},{default:n(()=>[s("#")]),_:1}),s("Snackbar 类型")]),t(c,null,{default:n(()=>[ts]),_:1})]),a("div",ns,[a("h3",ls,[t(l,{to:"#duo1li4mo2shi4"},{default:n(()=>[s("#")]),_:1}),s("多例模式")]),cs,t(c,null,{default:n(()=>[ds]),_:1})]),es,a("div",os,[a("h3",rs,[t(l,{to:"#shu3xing4"},{default:n(()=>[s("#")]),_:1}),s("属性")]),hs]),a("div",ps,[a("h3",is,[t(l,{to:"#shi4jian4"},{default:n(()=>[s("#")]),_:1}),s("事件")]),js]),a("div",ms,[a("h3",gs,[t(l,{to:"#cha1cao2"},{default:n(()=>[s("#")]),_:1}),s("插槽")]),us]),a("div",bs,[a("h3",ks,[t(l,{to:"#fang1fa3"},{default:n(()=>[s("#")]),_:1}),s("方法")]),_s]),a("div",vs,[a("h3",fs,[t(l,{to:"#SnackbarOptions"},{default:n(()=>[s("#")]),_:1}),s("Snackbar Options")]),ys]),a("div",ws,[a("h3",Ss,[t(l,{to:"#yang4shi4bian4liang4"},{default:n(()=>[s("#")]),_:1}),s("样式变量")]),xs])])}const Ms=o(p,[["render",zs]]);export{Ms as default};
