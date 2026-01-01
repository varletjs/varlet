import{b as r,m as p,p as t,q as n,Q as s,w as l,$ as d,e as o,h as i}from"./index-DtCrA0ro.js";const h={components:{}},j={class:"varlet-site-doc"},m={class:"card"},g={id:"jie4shao4"},u={class:"card"},b={id:"ji1ben3shi3yong4"},y={class:"card"},k={id:"xiu1gai3biao1ti2"},f={class:"card"},w={id:"jin4yong4xuan3xiang4"},v={class:"card"},S={id:"jin4yong4dian3ji1xuan3xiang4shi2guan1bi4dong4zuo4mian4ban3"},x={class:"card"},A={id:"zi4ding4yi4xuan3xiang4yang4shi4"},I={class:"card"},C={id:"ji1ben3shi3yong4"},$={class:"card"},O={id:"xiu1gai3biao1ti2"},z={class:"card"},E={id:"jin4yong4xuan3xiang4"},N={class:"card"},B={id:"jin4yong4dian3ji1xuan3xiang4shi2guan1bi4dong4zuo4mian4ban3"},P={class:"card"},V={id:"zi4ding4yi4xuan3xiang4yang4shi4"},D={class:"card"},K={id:"shu3xing4"},T={class:"card"},q={id:"shi4jian4"},Q={class:"card"},F={id:"fang1fa3"},G={class:"card"},H={id:"ActionSheetOptions"},J={class:"card"},L={id:"ActionSheetAction"},M={class:"card"},R={id:"cha1cao2"},U={class:"card"},W={id:"yang4shi4bian4liang4"};function X(Y,a,Z,_,ss,ts){const c=o("router-link"),e=o("var-site-code-example");return i(),p("div",j,[a[57]||(a[57]=t("h1",null,"动作面板",-1)),t("div",m,[t("h3",g,[n(c,{to:"#jie4shao4"},{default:l(()=>[...a[0]||(a[0]=[s("#",-1)])]),_:1}),a[1]||(a[1]=s("介绍",-1))]),a[2]||(a[2]=t("p",null,[s("弹出一个动作面板提供用户选择选项的能力。 "),t("code",null,"ActionSheet"),s(" 提供了函数式和组件式两种使用方式，两种使用效果和参数并没有本质区别。 函数返回一个 "),t("code",null,"Promise"),s("，选择时返回 "),t("code",null,"当前选择的 action"),s("，点击遮罩层关闭返回 "),t("code",null,"close"),s("。")],-1))]),a[58]||(a[58]=t("h2",null,"函数调用",-1)),t("div",u,[t("h3",b,[n(c,{to:"#ji1ben3shi3yong4"},{default:l(()=>[...a[3]||(a[3]=[s("#",-1)])]),_:1}),a[4]||(a[4]=s("基本使用",-1))]),n(e,null,{default:l(()=>[...a[5]||(a[5]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar, ActionSheet } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"async"),s(),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"createBasic"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),t("span",{class:"hljs-keyword"},"const"),s(" action = "),t("span",{class:"hljs-keyword"},"await"),s(` ActionSheet({ 
    `),t("span",{class:"hljs-attr"},"actions"),s(`: [
      {
        `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 01'"),s(`,
        `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'account-circle'"),s(`,
      },
      {
        `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 02'"),s(`,
        `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'notebook'"),s(`,
      },
      {
        `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 03'"),s(`,
        `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'wifi'"),s(`,
      },
    ] 
  })
  
  action !== `),t("span",{class:"hljs-string"},"'close'"),s(" && Snackbar("),t("span",{class:"hljs-string"},[s("`您选择的是:"),t("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"createBasic"'),s(">")]),s("基本使用"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t("div",y,[t("h3",k,[n(c,{to:"#xiu1gai3biao1ti2"},{default:l(()=>[...a[6]||(a[6]=[s("#",-1)])]),_:1}),a[7]||(a[7]=s("修改标题",-1))]),n(e,null,{default:l(()=>[...a[8]||(a[8]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar, ActionSheet } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"async"),s(),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleSelect"),s("("),t("span",{class:"hljs-params"}),s(")")]),s(`{
  `),t("span",{class:"hljs-keyword"},"const"),s(" action = "),t("span",{class:"hljs-keyword"},"await"),s(` ActionSheet({ 
    `),t("span",{class:"hljs-attr"},"actions"),s(`: [
      {
        `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 01'"),s(`,
        `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'account-circle'"),s(`,
      },
      {
        `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 02'"),s(`,
        `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'notebook'"),s(`,
      },
      {
        `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 03'"),s(`,
        `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'wifi'"),s(`,
      },
    ],
    `),t("span",{class:"hljs-attr"},"title"),s(": "),t("span",{class:"hljs-string"},"'选择一个你喜欢的吧'"),s(` 
  })
  
  action !== `),t("span",{class:"hljs-string"},"'close'"),s(" && Snackbar("),t("span",{class:"hljs-string"},[s("`您选择的是:"),t("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"handleSelect"'),s(">")]),s("修改标题"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t("div",f,[t("h3",w,[n(c,{to:"#jin4yong4xuan3xiang4"},{default:l(()=>[...a[9]||(a[9]=[s("#",-1)])]),_:1}),a[10]||(a[10]=s("禁用选项",-1))]),a[12]||(a[12]=t("p",null,[s("选项传入 "),t("code",null,"disabled"),s(" 可以使选项处于禁用状态。")],-1)),n(e,null,{default:l(()=>[...a[11]||(a[11]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar, ActionSheet } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"async"),s(),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleSelect"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),t("span",{class:"hljs-keyword"},"const"),s(" action = "),t("span",{class:"hljs-keyword"},"await"),s(` ActionSheet({ 
    `),t("span",{class:"hljs-attr"},"actions"),s(`: [
      {
        `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 01'"),s(`,
        `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'account-circle'"),s(`,
      },
      {
        `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 02'"),s(`,
        `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'notebook'"),s(`,
      },
      {
        `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 03'"),s(`,
        `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'wifi'"),s(`,
        `),t("span",{class:"hljs-attr"},"disabled"),s(": "),t("span",{class:"hljs-literal"},"true"),s(`,
      },
    ] 
  })
  
  action !== `),t("span",{class:"hljs-string"},"'close'"),s(" && Snackbar("),t("span",{class:"hljs-string"},[s("`您选择的是:"),t("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"handleSelect"'),s(">")]),s("禁用选项"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t("div",v,[t("h3",S,[n(c,{to:"#jin4yong4dian3ji1xuan3xiang4shi2guan1bi4dong4zuo4mian4ban3"},{default:l(()=>[...a[13]||(a[13]=[s("#",-1)])]),_:1}),a[14]||(a[14]=s("禁用点击选项时关闭动作面板",-1))]),a[16]||(a[16]=t("p",null,[s("方法传入 "),t("code",null,"closeOnClickAction"),s(" 可以禁用在选择选项时 "),t("code",null,"ActionSheet"),s(" 自动关闭的行为，用户可以多次选择， 由于 "),t("code",null,"Promise"),s(" 只会被 "),t("code",null,"resolve"),s(" 一次，所以推荐使用 "),t("code",null,"onSelect"),s(" 监听用户选择行为。")],-1)),n(e,null,{default:l(()=>[...a[15]||(a[15]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar, ActionSheet } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"async"),s(),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleSelect"),s("("),t("span",{class:"hljs-params"}),s(")")]),s(`{
  `),t("span",{class:"hljs-keyword"},"await"),s(` ActionSheet({ 
    `),t("span",{class:"hljs-attr"},"actions"),s(`: [
      {
        `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 01'"),s(`,
        `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'account-circle'"),s(`,
      },
      {
        `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 02'"),s(`,
        `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'notebook'"),s(`,
      },
      {
        `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 03'"),s(`,
        `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'wifi'"),s(`,
      },
    ], 
    `),t("span",{class:"hljs-attr"},"closeOnClickAction"),s(": "),t("span",{class:"hljs-literal"},"false"),s(`,
    `),t("span",{class:"hljs-attr"},"onSelect"),s(": "),t("span",{class:"hljs-function"},[t("span",{class:"hljs-params"},"action"),s(" =>")]),s(" Snackbar("),t("span",{class:"hljs-string"},[s("`您选择的是:"),t("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`), 
  })
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"handleSelect"'),s(">")]),s("禁用关闭动作面板"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t("div",x,[t("h3",A,[n(c,{to:"#zi4ding4yi4xuan3xiang4yang4shi4"},{default:l(()=>[...a[17]||(a[17]=[s("#",-1)])]),_:1}),a[18]||(a[18]=s("自定义选项样式",-1))]),a[20]||(a[20]=t("p",null,[s("选项提供了可以配置样式的参数，具体选项的参数可选项见 "),t("code",null,"Action 的数据结构"),s("。")],-1)),n(e,null,{default:l(()=>[...a[19]||(a[19]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar, ActionSheet } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"async"),s(),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleSelect"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),t("span",{class:"hljs-keyword"},"const"),s(" action = "),t("span",{class:"hljs-keyword"},"await"),s(` ActionSheet({ 
    `),t("span",{class:"hljs-attr"},"actions"),s(`: [
      {
        `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 01'"),s(`,
        `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'account-circle'"),s(`,
        `),t("span",{class:"hljs-attr"},"color"),s(": "),t("span",{class:"hljs-string"},"'var(--color-success)'"),s(`,
      },
      {
        `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 02'"),s(`,
        `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'notebook'"),s(`,
        `),t("span",{class:"hljs-attr"},"color"),s(": "),t("span",{class:"hljs-string"},"'var(--color-warning)'"),s(`,
      },
      {
        `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 03'"),s(`,
        `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'wifi'"),s(`,
        `),t("span",{class:"hljs-attr"},"color"),s(": "),t("span",{class:"hljs-string"},"'var(--color-info)'"),s(`,
      },
    ] 
  })
  
  action !== `),t("span",{class:"hljs-string"},"'close'"),s(" && Snackbar("),t("span",{class:"hljs-string"},[s("`您选择的是:"),t("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"handleSelect"'),s(">")]),s("自定义选项样式"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a[59]||(a[59]=t("h2",null,"组件调用",-1)),t("div",I,[t("h3",C,[n(c,{to:"#ji1ben3shi3yong4"},{default:l(()=>[...a[21]||(a[21]=[s("#",-1)])]),_:1}),a[22]||(a[22]=s("基本使用",-1))]),n(e,null,{default:l(()=>[...a[23]||(a[23]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(` actions = ref([
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 01'"),s(`,
    `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'account-circle'"),s(`,
  },
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 02'"),s(`,
    `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'notebook'"),s(`,
  },
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 03'"),s(`,
    `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'wifi'"),s(`,
  },
])

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleSelect"),s("("),t("span",{class:"hljs-params"},"action"),s(")")]),s(`{
  Snackbar(`),t("span",{class:"hljs-string"},[s("`您选择的是:"),t("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("基本使用"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-action-sheet"),s(` 
    `),t("span",{class:"hljs-attr"},":actions"),s("="),t("span",{class:"hljs-string"},'"actions"'),s(`
    `),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(`
    @`),t("span",{class:"hljs-attr"},"select"),s("="),t("span",{class:"hljs-string"},'"handleSelect"'),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t("div",$,[t("h3",O,[n(c,{to:"#xiu1gai3biao1ti2"},{default:l(()=>[...a[24]||(a[24]=[s("#",-1)])]),_:1}),a[25]||(a[25]=s("修改标题",-1))]),n(e,null,{default:l(()=>[...a[26]||(a[26]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(` actions = ref([
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 01'"),s(`,
    `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'account-circle'"),s(`,
  },
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 02'"),s(`,
    `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'notebook'"),s(`,
  },
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 03'"),s(`,
    `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'wifi'"),s(`,
  },
])

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleSelect"),s("("),t("span",{class:"hljs-params"},"action"),s(")")]),s(`{
  Snackbar(`),t("span",{class:"hljs-string"},[s("`您选择的是:"),t("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("修改标题"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-action-sheet"),s(` 
    `),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"选择一个你喜欢的吧"'),s(`
    `),t("span",{class:"hljs-attr"},":actions"),s("="),t("span",{class:"hljs-string"},'"actions"'),s(`
    `),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(`
    @`),t("span",{class:"hljs-attr"},"select"),s("="),t("span",{class:"hljs-string"},'"handleSelect"'),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t("div",z,[t("h3",E,[n(c,{to:"#jin4yong4xuan3xiang4"},{default:l(()=>[...a[27]||(a[27]=[s("#",-1)])]),_:1}),a[28]||(a[28]=s("禁用选项",-1))]),n(e,null,{default:l(()=>[...a[29]||(a[29]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(` actions = ref([
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 01'"),s(`,
    `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'account-circle'"),s(`,
  },
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 02'"),s(`,
    `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'notebook'"),s(`,
  },
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 03'"),s(`,
    `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'wifi'"),s(`,
    `),t("span",{class:"hljs-attr"},"disabled"),s(": "),t("span",{class:"hljs-literal"},"true"),s(`,
  },
])

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleSelect"),s("("),t("span",{class:"hljs-params"},"action"),s(") ")]),s(`{
  Snackbar(`),t("span",{class:"hljs-string"},[s("`您选择的是:"),t("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("禁用选项"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-action-sheet"),s(` 
    `),t("span",{class:"hljs-attr"},":actions"),s("="),t("span",{class:"hljs-string"},'"actions"'),s(`
    `),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(`
    @`),t("span",{class:"hljs-attr"},"select"),s("="),t("span",{class:"hljs-string"},'"handleSelect"'),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t("div",N,[t("h3",B,[n(c,{to:"#jin4yong4dian3ji1xuan3xiang4shi2guan1bi4dong4zuo4mian4ban3"},{default:l(()=>[...a[30]||(a[30]=[s("#",-1)])]),_:1}),a[31]||(a[31]=s("禁用点击选项时关闭动作面板",-1))]),n(e,null,{default:l(()=>[...a[32]||(a[32]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(` actions = ref([
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 01'"),s(`,
    `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'account-circle'"),s(`,
  },
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 02'"),s(`,
    `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'notebook'"),s(`,
  },
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 03'"),s(`,
    `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'wifi'"),s(`,
  },
])

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleSelect"),s("("),t("span",{class:"hljs-params"},"action"),s(") ")]),s(`{
  Snackbar(`),t("span",{class:"hljs-string"},[s("`您选择的是:"),t("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("禁用点击选项时关闭动作面板"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-action-sheet"),s(` 
    `),t("span",{class:"hljs-attr"},":close-on-click-action"),s("="),t("span",{class:"hljs-string"},'"false"'),s(`
    `),t("span",{class:"hljs-attr"},":actions"),s("="),t("span",{class:"hljs-string"},'"actions"'),s(` 
    `),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(` 
    @`),t("span",{class:"hljs-attr"},"select"),s("="),t("span",{class:"hljs-string"},'"handleSelect"'),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t("div",P,[t("h3",V,[n(c,{to:"#zi4ding4yi4xuan3xiang4yang4shi4"},{default:l(()=>[...a[33]||(a[33]=[s("#",-1)])]),_:1}),a[34]||(a[34]=s("自定义选项样式",-1))]),n(e,null,{default:l(()=>[...a[35]||(a[35]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(` actions = ref([
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 01'"),s(`,
    `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'account-circle'"),s(`,
    `),t("span",{class:"hljs-attr"},"color"),s(": "),t("span",{class:"hljs-string"},"'var(--color-success)'"),s(`,
  },
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 02'"),s(`,
    `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'notebook'"),s(`,
    `),t("span",{class:"hljs-attr"},"color"),s(": "),t("span",{class:"hljs-string"},"'var(--color-warning)'"),s(`,
  },
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 03'"),s(`,
    `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'wifi'"),s(`,
    `),t("span",{class:"hljs-attr"},"color"),s(": "),t("span",{class:"hljs-string"},"'var(--color-info)'"),s(`,
  },
])

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleSelect"),s("("),t("span",{class:"hljs-params"},"action"),s(") ")]),s(`{
  Snackbar(`),t("span",{class:"hljs-string"},[s("`您选择的是:"),t("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("自定义选项样式"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-action-sheet"),s(` 
    `),t("span",{class:"hljs-attr"},":actions"),s("="),t("span",{class:"hljs-string"},'"actions"'),s(` 
    `),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(` 
    @`),t("span",{class:"hljs-attr"},"select"),s("="),t("span",{class:"hljs-string"},'"handleSelect"'),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a[60]||(a[60]=t("h2",null,"API",-1)),t("div",D,[t("h3",K,[n(c,{to:"#shu3xing4"},{default:l(()=>[...a[36]||(a[36]=[s("#",-1)])]),_:1}),a[37]||(a[37]=s("属性",-1))]),a[38]||(a[38]=d("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>是否显示动作面板</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>actions</code></td><td>选项列表</td><td><em>Actions</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>动作面板标题</td><td><em>string</em></td><td><code>请选择</code></td></tr><tr><td><code>overlay</code></td><td>是否显示遮罩层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlay-class</code></td><td>自定义遮罩层的 class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay-style</code></td><td>自定义遮罩层的 style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>是否禁止滚动穿透，禁止时滚动弹出层不会引发 body 的滚动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-action</code></td><td>是否点击选项时关闭动作面板</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-overlay</code></td><td>是否点击遮罩层关闭动作面板</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-key-escape</code></td><td>是否支持键盘 ESC 关闭动作面板</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>safe-area</code></td><td>是否开启底部安全区适配</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>teleport</code></td><td>动作面板挂载的位置</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>body</code></td></tr></tbody></table>",1))]),t("div",T,[t("h3",q,[n(c,{to:"#shi4jian4"},{default:l(()=>[...a[39]||(a[39]=[s("#",-1)])]),_:1}),a[40]||(a[40]=s("事件",-1))]),a[41]||(a[41]=d("<table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>select</code></td><td>选择选项时触发</td><td><code>action: Action</code></td></tr><tr><td><code>open</code></td><td>打开动作面板时触发</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>打开动作面板动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>关闭动作面板时触发</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>关闭动作面板动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>click-overlay</code></td><td>点击遮罩层时触发</td><td><code>-</code></td></tr><tr><td><code>key-escape</code></td><td>点击键盘 ESC 时触发</td><td><code>-</code></td></tr></tbody></table>",1))]),t("div",Q,[t("h3",F,[n(c,{to:"#fang1fa3"},{default:l(()=>[...a[42]||(a[42]=[s("#",-1)])]),_:1}),a[43]||(a[43]=s("方法",-1))]),a[44]||(a[44]=d("<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>ActionSheet</code></td><td>显示动作面板</td><td><em>options</em></td><td><code>-</code></td></tr><tr><td><code>ActionSheet.close</code></td><td>关闭动作面板</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>ActionSheet.setDefaultOptions</code></td><td>设置默认的选项配置</td><td><em>options</em></td><td><code>-</code></td></tr><tr><td><code>ActionSheet.resetDefaultOptions</code></td><td>重置默认的选项配置</td><td><em>-</em></td><td><code>-</code></td></tr></tbody></table>",1))]),t("div",G,[t("h3",H,[n(c,{to:"#ActionSheetOptions"},{default:l(()=>[...a[45]||(a[45]=[s("#",-1)])]),_:1}),a[46]||(a[46]=s("ActionSheet Options",-1))]),a[47]||(a[47]=d("<h4>函数式调用时传入的选项</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>actions</code></td><td>选项列表</td><td><em>Actions</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>动作面板标题</td><td><em>string</em></td><td><code>请选择</code></td></tr><tr><td><code>overlay</code></td><td>是否显示遮罩层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlayClass</code></td><td>自定义遮罩层的 class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlayStyle</code></td><td>自定义遮罩层的 style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>lockScroll</code></td><td>是否禁止滚动穿透，禁止时滚动弹出层不会引发 body 的滚动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnClickAction</code></td><td>是否点击选项时关闭动作面板</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnClickOverlay</code></td><td>是否点击遮罩层关闭弹出层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnKeyEscape</code></td><td>是否支持键盘 ESC 关闭动作面板</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>safe-area</code></td><td>是否开启底部安全区适配</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onOpen</code></td><td>动作面板开启回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>动作面板开启动画结束回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>动作面板关闭回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>动作面板关闭动画结束回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onSelect</code></td><td>选项选择时回调</td><td><em>(action: Action) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClickOverlay</code></td><td>遮罩层点击回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onKeyEscape</code></td><td>点击键盘 ESC 时触发</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table>",2))]),t("div",J,[t("h3",L,[n(c,{to:"#ActionSheetAction"},{default:l(()=>[...a[48]||(a[48]=[s("#",-1)])]),_:1}),a[49]||(a[49]=s("ActionSheet Action",-1))]),a[50]||(a[50]=d("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>name</code></td><td>选项名称</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>选项文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>icon 图标，支持网络图片地址</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>iconSize</code></td><td>图标尺寸</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>namespace</code></td><td>图标命名空间</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>className</code></td><td>选项附加类名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用选项</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>",1))]),t("div",M,[t("h3",R,[n(c,{to:"#cha1cao2"},{default:l(()=>[...a[51]||(a[51]=[s("#",-1)])]),_:1}),a[52]||(a[52]=s("插槽",-1))]),a[53]||(a[53]=d("<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>actions</code></td><td>选项列表</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>动作面板标题</td><td><code>-</code></td></tr></tbody></table>",1))]),t("div",U,[t("h3",W,[n(c,{to:"#yang4shi4bian4liang4"},{default:l(()=>[...a[54]||(a[54]=[s("#",-1)])]),_:1}),a[55]||(a[55]=s("样式变量",-1))]),a[56]||(a[56]=d('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--action-sheet-border-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--action-sheet-border-top</code></td><td><code>none</code></td></tr><tr><td><code>--action-sheet-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--action-sheet-title-color</code></td><td><code>#888</code></td></tr><tr><td><code>--action-sheet-title-padding</code></td><td><code>10px 16px</code></td></tr><tr><td><code>--action-sheet-title-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--action-sheet-action-item-height</code></td><td><code>48px</code></td></tr><tr><td><code>--action-sheet-action-item-padding</code></td><td><code>0px 18px</code></td></tr><tr><td><code>--action-sheet-action-item-color</code></td><td><code>#333</code></td></tr><tr><td><code>--action-sheet-action-item-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--action-sheet-icon-margin</code></td><td><code>0 0 20px 0</code></td></tr><tr><td><code>--action-sheet-icon-size</code></td><td><code>24px</code></td></tr></tbody></table>',2))])])}const ns=r(h,[["render",X]]);export{ns as default};
