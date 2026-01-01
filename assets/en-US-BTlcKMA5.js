import{b as r,m as p,p as a,q as n,Q as s,w as l,$ as d,e as c,h as i}from"./index-DtCrA0ro.js";const h={components:{}},j={class:"varlet-site-doc"},m={class:"card"},g={id:"Intro"},u={class:"card"},b={id:"BasicUsage"},k={class:"card"},f={id:"Multi-Line"},v={class:"card"},y={id:"BottomDisplay"},w={class:"card"},S={id:"DisplayDuration"},D={class:"card"},C={id:"CustomIcon"},B={class:"card"},I={id:"ForbidClick"},L={class:"card"},T={id:"BasicUsage"},x={class:"card"},U={id:"DisplayDuration"},M={class:"card"},V={id:"BottomDisplay"},O={class:"card"},z={id:"Custom"},H={class:"card"},N={id:"SnackbarType"},P={class:"card"},W={id:"Multiple"},E={class:"card"},$={id:"Props"},F={class:"card"},R={id:"Events"},q={class:"card"},A={id:"Slots"},Q={class:"card"},G={id:"Methods"},J={class:"card"},K={id:"SnackbarOptions"},X={class:"card"},Y={id:"StyleVariables"};function Z(_,t,ss,as,ts,ns){const e=c("router-link"),o=c("var-site-code-example");return i(),p("div",j,[t[63]||(t[63]=a("h1",null,"Snackbar",-1)),a("div",m,[a("h3",g,[n(e,{to:"#Intro"},{default:l(()=>[...t[0]||(t[0]=[s("#",-1)])]),_:1}),t[1]||(t[1]=s("Intro",-1))]),t[2]||(t[2]=a("p",null,"Used to display a quick message to a user.",-1))]),t[64]||(t[64]=a("h2",null,"Component Call",-1)),a("div",u,[a("h3",b,[n(e,{to:"#BasicUsage"},{default:l(()=>[...t[3]||(t[3]=[s("#",-1)])]),_:1}),t[4]||(t[4]=s("Basic Usage",-1))]),n(o,null,{default:l(()=>[...t[5]||(t[5]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = !show"'),s(">")]),s("Basic Usage"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-snackbar"),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(">")]),s(" Hello, I'm a snackbar "),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-snackbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",k,[a("h3",f,[n(e,{to:"#Multi-Line"},{default:l(()=>[...t[6]||(t[6]=[s("#",-1)])]),_:1}),t[7]||(t[7]=s("Multi-Line",-1))]),t[9]||(t[9]=a("p",null,[s("Use "),a("code",null,"vertical"),s(" prop to change arrangement of "),a("code",null,"snackbar"),s(". Use "),a("code",null,"Custom slot"),s(" create action of right.")],-1)),n(o,null,{default:l(()=>[...t[8]||(t[8]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-snackbar"),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(),a("span",{class:"hljs-attr"},":vertical"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s(`
    Hello, I'm a snackbar
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"action"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},":elevation"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = !show"'),s(">")]),s("Close"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-snackbar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = !show"'),s(">")]),s("Multi-Line"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",v,[a("h3",y,[n(e,{to:"#BottomDisplay"},{default:l(()=>[...t[10]||(t[10]=[s("#",-1)])]),_:1}),t[11]||(t[11]=s("Bottom Display",-1))]),t[13]||(t[13]=a("p",null,[s("Use "),a("code",null,"position"),s(" prop to change position of "),a("code",null,"snackbar"),s(".")],-1)),n(o,null,{default:l(()=>[...t[12]||(t[12]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-snackbar"),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(),a("span",{class:"hljs-attr"},"position"),s("="),a("span",{class:"hljs-string"},'"bottom"'),s(">")]),s(`
    Hello, I'm a snackbar
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"action"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},":elevation"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = false"'),s(">")]),s("Close"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-snackbar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = !show"'),s(">")]),s("Bottom Display"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",w,[a("h3",S,[n(e,{to:"#DisplayDuration"},{default:l(()=>[...t[14]||(t[14]=[s("#",-1)])]),_:1}),t[15]||(t[15]=s("Display Duration",-1))]),t[17]||(t[17]=a("p",null,[s("Use "),a("code",null,"duration"),s(" prop to change display duration of "),a("code",null,"snackbar"),s(".")],-1)),n(o,null,{default:l(()=>[...t[16]||(t[16]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-snackbar"),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(),a("span",{class:"hljs-attr"},":duration"),s("="),a("span",{class:"hljs-string"},'"10000"'),s(">")]),s(`
    Hello, I'm a snackbar
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-snackbar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = !show"'),s(">")]),s(`
    Display Duration
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",D,[a("h3",C,[n(e,{to:"#CustomIcon"},{default:l(()=>[...t[18]||(t[18]=[s("#",-1)])]),_:1}),t[19]||(t[19]=s("Custom Icon",-1))]),t[21]||(t[21]=a("p",null,[s("Use "),a("code",null,"icon"),s(" slot realization custom icons.")],-1)),n(o,null,{default:l(()=>[...t[20]||(t[20]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-snackbar"),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(">")]),s(`
    Hello, I'm a snackbar
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"heart-outline"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-snackbar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = !show"'),s(">")]),s(`
    Custom Icon
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",B,[a("h3",I,[n(e,{to:"#ForbidClick"},{default:l(()=>[...t[22]||(t[22]=[s("#",-1)])]),_:1}),t[23]||(t[23]=s("Forbid Click",-1))]),t[25]||(t[25]=a("p",null,[s("Use "),a("code",null,"forbid-click"),s(" prop to control whether penetrating clicks are forbidden.")],-1)),n(o,null,{default:l(()=>[...t[24]||(t[24]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-snackbar"),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(),a("span",{class:"hljs-attr"},":forbid-click"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s(`
    Hello, I'm a snackbar
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-snackbar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s(`
    Display Duration
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t[65]||(t[65]=a("h2",null,"Function Call",-1)),a("div",L,[a("h3",T,[n(e,{to:"#BasicUsage"},{default:l(()=>[...t[26]||(t[26]=[s("#",-1)])]),_:1}),t[27]||(t[27]=s("Basic Usage",-1))]),n(o,null,{default:l(()=>[...t[28]||(t[28]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"Snackbar('Hello, I\\'m a snackbar')"`),s(">")]),s("Basic Usage"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",x,[a("h3",U,[n(e,{to:"#DisplayDuration"},{default:l(()=>[...t[29]||(t[29]=[s("#",-1)])]),_:1}),t[30]||(t[30]=s("Display Duration",-1))]),n(o,null,{default:l(()=>[...t[31]||(t[31]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"createSnackbar"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  Snackbar({
    `),a("span",{class:"hljs-attr"},"content"),s(": "),a("span",{class:"hljs-string"},`"Hello, I'm a snackbar"`),s(`,
    `),a("span",{class:"hljs-attr"},"duration"),s(": "),a("span",{class:"hljs-number"},"1000"),s(`
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"createSnackbar"'),s(">")]),s("Display Duration"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",M,[a("h3",V,[n(e,{to:"#BottomDisplay"},{default:l(()=>[...t[32]||(t[32]=[s("#",-1)])]),_:1}),t[33]||(t[33]=s("Bottom Display",-1))]),n(o,null,{default:l(()=>[...t[34]||(t[34]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"createSnackbar"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  Snackbar({
    `),a("span",{class:"hljs-attr"},"content"),s(": "),a("span",{class:"hljs-string"},`"Hello, I'm a snackbar"`),s(`,
    `),a("span",{class:"hljs-attr"},"position"),s(": "),a("span",{class:"hljs-string"},"'bottom'"),s(`
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"createSnackbar"'),s(">")]),s("Bottom Display"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",O,[a("h3",z,[n(e,{to:"#Custom"},{default:l(()=>[...t[35]||(t[35]=[s("#",-1)])]),_:1}),t[36]||(t[36]=s("Custom",-1))]),n(o,null,{default:l(()=>[...t[37]||(t[37]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
      { `),a("span",{class:"hljs-attr"},"default"),s(": "),a("span",{class:"hljs-function"},"() =>"),s(),a("span",{class:"hljs-string"},"'Close'"),s(` }
    )
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"createSnackbar"'),s(">")]),s("Custom"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",H,[a("h3",N,[n(e,{to:"#SnackbarType"},{default:l(()=>[...t[38]||(t[38]=[s("#",-1)])]),_:1}),t[39]||(t[39]=s("Snackbar Type",-1))]),n(o,null,{default:l(()=>[...t[40]||(t[40]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"createSnackbar"),s("("),a("span",{class:"hljs-params"},"type"),s(") ")]),s(`{
  Snackbar[type](`),a("span",{class:"hljs-string"},`"Hello, I'm a snackbar"`),s(`)
  `),a("span",{class:"hljs-keyword"},"if"),s(" (type === "),a("span",{class:"hljs-string"},"'loading'"),s(`) {
    `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
      Snackbar.success(`),a("span",{class:"hljs-string"},'"loading success"'),s(`)
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
      success
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
      `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(` 
      `),a("span",{class:"hljs-attr"},"block"),s(` 
      @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"createSnackbar('warning')"`),s(`
    >`)]),s(`
      warning
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
      `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(` 
      `),a("span",{class:"hljs-attr"},"block"),s(` 
      @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"createSnackbar('info')"`),s(`
    >`)]),s(`
      info
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
      `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"danger"'),s(` 
      `),a("span",{class:"hljs-attr"},"block"),s(` 
      @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"createSnackbar('error')"`),s(`
    >`)]),s(`
      error
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
      `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(` 
      `),a("span",{class:"hljs-attr"},"block"),s(` 
      @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"createSnackbar('loading')"`),s(`
    >`)]),s(`
      loading
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",P,[a("h3",W,[n(e,{to:"#Multiple"},{default:l(()=>[...t[41]||(t[41]=[s("#",-1)])]),_:1}),t[42]||(t[42]=s("Multiple",-1))]),t[44]||(t[44]=a("p",null,"When using functional calls, Snackbar use singleton mode by default, if you need to pop multiple Snackbar at the same time, you can refer to the following example:",-1)),n(o,null,{default:l(()=>[...t[43]||(t[43]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"openMultiple"'),s(">")]),s("Multiple"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t[66]||(t[66]=a("h2",null,"API",-1)),a("div",E,[a("h3",$,[n(e,{to:"#Props"},{default:l(()=>[...t[45]||(t[45]=[s("#",-1)])]),_:1}),t[46]||(t[46]=s("Props",-1))]),t[47]||(t[47]=d("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>Whether to show <code>Snackbar</code></td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>type</code></td><td><code>Snackbar</code> type, Optional value is one of <code>success, warning, info, error, loading</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>position</code></td><td><code>Snackbar</code> position, Optional value is one of <code>top, center, bottom</code></td><td><em>string</em></td><td><code>top</code></td></tr><tr><td><code>duration</code></td><td>Display duration</td><td><em>number</em></td><td><code>3000</code></td></tr><tr><td><code>elevation</code> <em><strong>3.3.0</strong></em></td><td>Elevation level, options <code>true</code> <code>false</code> and level of <code>0-24</code></td><td><em>string | number | boolean</em></td><td><code>true</code></td></tr><tr><td><code>content</code></td><td>Custom content</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>content-class</code></td><td>Class of custom content</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>vertical</code></td><td>Whether to use multi-line</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loading-type</code></td><td>Loading type (see <code>Loading</code> component)</td><td><em>string</em></td><td><code>circle</code></td></tr><tr><td><code>loading-size</code></td><td>Loading size (see <code>Loading</code> component)</td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>loading-color</code></td><td>Loading color (see <code>Loading</code> component)</td><td><em>string</em></td><td><code>currentColor</code></td></tr><tr><td><code>loading-radius</code></td><td>Loading radius (see <code>Loading</code> component)</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>Whether to disable rolling penetration</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>forbid-click</code></td><td>Whether to penetrating clicks are forbidden</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>teleport</code></td><td>The location of the Snackbar to mount</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>body</code></td></tr></tbody></table>",1))]),a("div",F,[a("h3",R,[n(e,{to:"#Events"},{default:l(()=>[...t[48]||(t[48]=[s("#",-1)])]),_:1}),t[49]||(t[49]=s("Events",-1))]),t[50]||(t[50]=d("<table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>open</code></td><td>Triggered when the <code>Snackbar</code> is open</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered when the <code>Snackbar</code> open-animation ends</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Triggered when the <code>Snackbar</code> is close</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the <code>Snackbar</code> close-animation ends</td><td><code>-</code></td></tr></tbody></table>",1))]),a("div",q,[a("h3",A,[n(e,{to:"#Slots"},{default:l(()=>[...t[51]||(t[51]=[s("#",-1)])]),_:1}),t[52]||(t[52]=s("Slots",-1))]),t[53]||(t[53]=d("<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td><code>Snackbar</code> content message</td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td><code>Snackbar</code> icon</td><td><code>-</code></td></tr><tr><td><code>action</code></td><td><code>Snackbar</code> action of right</td><td><code>-</code></td></tr></tbody></table>",1))]),a("div",Q,[a("h3",G,[n(e,{to:"#Methods"},{default:l(()=>[...t[54]||(t[54]=[s("#",-1)])]),_:1}),t[55]||(t[55]=s("Methods",-1))]),t[56]||(t[56]=d("<p>The <code>clear</code> method on the instance can close the current instance, and the <code>clear</code> method on the Snackbar can close all message bars.</p><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>Snackbar</code></td><td>Show snackbar</td><td><em>options | string</em></td><td><code>snackbar instance</code></td></tr><tr><td><code>Snackbar.success</code></td><td>Show success snackbar</td><td><em>options | string</em></td><td><code>snackbar instance</code></td></tr><tr><td><code>Snackbar.info</code></td><td>Show info snackbar</td><td><em>options | string</em></td><td><code>snackbar instance</code></td></tr><tr><td><code>Snackbar.warning</code></td><td>Show warning snackbar</td><td><em>options | string</em></td><td><code>snackbar instance</code></td></tr><tr><td><code>Snackbar.error</code></td><td>Show error snackbar</td><td><em>options | string</em></td><td><code>snackbar instance</code></td></tr><tr><td><code>Snackbar.loading</code></td><td>Show loading snackbar</td><td><em>options | string</em></td><td><code>snackbar instance</code></td></tr><tr><td><code>Snackbar.clear</code></td><td>Close snackbar</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>Snackbar.allowMultiple</code></td><td>Whether to allow multi instance patterns</td><td><em>boolean</em></td><td><code>-</code></td></tr><tr><td><code>Snackbar.setDefaultOptions</code></td><td>Set default option configuration</td><td><em>options</em></td><td><code>-</code></td></tr><tr><td><code>Snackbar.resetDefaultOptions</code></td><td>Reset default option configuration</td><td><em>-</em></td><td><code>-</code></td></tr></tbody></table>",2))]),a("div",J,[a("h3",K,[n(e,{to:"#SnackbarOptions"},{default:l(()=>[...t[57]||(t[57]=[s("#",-1)])]),_:1}),t[58]||(t[58]=s("Snackbar Options",-1))]),t[59]||(t[59]=d("<h4>Options passed in for a functional call</h4><table><thead><tr><th>Option</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>type</code></td><td><code>Snackbar</code> type, Optional value is one of <code>success, warning, info, error, loading</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>position</code></td><td><code>Snackbar</code> position, Optional value is one of <code>top, center, bottom</code></td><td><em>string</em></td><td><code>top</code></td></tr><tr><td><code>duration</code></td><td>Display duration (Need to be closed manually when the <code>type</code> prop is <code>loading</code>)</td><td><em>number</em></td><td><code>3000</code></td></tr><tr><td><code>elevation</code> <em><strong>3.3.0</strong></em></td><td>Elevation level, options <code>true</code> <code>false</code> and level of <code>0-24</code></td><td><em>string | number | boolean</em></td><td><code>true</code></td></tr><tr><td><code>content</code></td><td>Custom content</td><td><em>string | VNode | (() =&gt; VNode)</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Custom icon</td><td><em>string | VNode | (() =&gt; VNode)</em></td><td><code>-</code></td></tr><tr><td><code>action</code></td><td>Custom action of right</td><td><em>string | VNode | (() =&gt; VNode)</em></td><td><code>-</code></td></tr><tr><td><code>contentClass</code></td><td>Class of custom content</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>vertical</code></td><td>Whether to use multi-line</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loadingType</code></td><td>Loading type (see <code>Loading</code> component)</td><td><em>string</em></td><td><code>circle</code></td></tr><tr><td><code>loadingSize</code></td><td>Loading size (see <code>Loading</code> component)</td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>loadingColor</code></td><td>Loading color (see <code>Loading</code> component)</td><td><em>string</em></td><td><code>currentColor</code></td></tr><tr><td><code>loadingRadius</code></td><td>Loading radius (see <code>Loading</code> component)</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>lockScroll</code></td><td>Whether to disable rolling penetration</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>forbidClick</code></td><td>whether to penetrating clicks are forbidden (Value is <code>true</code> when the <code>type</code> prop is <code>loading</code>)</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onOpen</code></td><td>Triggered when the <code>Snackbar</code> is open</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Triggered when the <code>Snackbar</code> open-animation ends</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Triggered when the <code>Snackbar</code> is close</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Triggered when the <code>Snackbar</code> close-animation ends</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table>",2))]),a("div",X,[a("h3",Y,[n(e,{to:"#StyleVariables"},{default:l(()=>[...t[60]||(t[60]=[s("#",-1)])]),_:1}),t[61]||(t[61]=s("Style Variables",-1))]),t[62]||(t[62]=d('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--snackbar-width</code></td><td><code>256px</code></td></tr><tr><td><code>--snackbar-color</code></td><td><code>rgba(255, 255, 255, .87)</code></td></tr><tr><td><code>--snackbar-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--snackbar-background</code></td><td><code>#333</code></td></tr><tr><td><code>--snackbar-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--snackbar-margin</code></td><td><code>6px 24px</code></td></tr><tr><td><code>--snackbar-border-color</code></td><td><code>currentColor</code></td></tr><tr><td><code>--snackbar-success-background</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--snackbar-info-background</code></td><td><code>var(--color-info)</code></td></tr><tr><td><code>--snackbar-error-background</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--snackbar-warning-background</code></td><td><code>var(--color-warning)</code></td></tr><tr><td><code>--snackbar-content-padding</code></td><td><code>14px 16px</code></td></tr><tr><td><code>--snackbar-action-margin</code></td><td><code>0 8px</code></td></tr><tr><td><code>--snackbar-icon-margin</code></td><td><code>0 8px</code></td></tr><tr><td><code>--snackbar-vertical-action-margin</code></td><td><code>0 8px 8px 0</code></td></tr></tbody></table>',2))])])}const es=r(h,[["render",Z]]);export{es as default};
