import{_ as d,b as o,e as r,m as h,p as t,q as a,w as n,P as s,Z as c}from"./index-vwO9GBzB.js";const i={components:{}},p={class:"varlet-site-doc"},j=t("h1",null,"ActionSheet",-1),m={class:"card"},g={id:"Intro"},u=t("p",null,[s("An action sheet pops up to give the user the ability to select options. "),t("code",null,"ActionSheet"),s(" Functional and component use methods are provided, and there is no essential difference between the two effects and parameters. The function returns a "),t("code",null,"Promise"),s(", on selection return "),t("code",null,"action"),s(". Click modal close to return "),t("code",null,"close"),s(".")],-1),_=t("h2",null,"Functional",-1),b={class:"card"},y={id:"BasicUse"},f=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
  
  action !== `),t("span",{class:"hljs-string"},"'close'"),s(" && Snackbar("),t("span",{class:"hljs-string"},[s("`Your selected is:"),t("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"createBasic"'),s(">")]),s("Basic Use"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),k={class:"card"},w={id:"ModifyTitle"},v=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
      },
    ], 
    `),t("span",{class:"hljs-attr"},"title"),s(": "),t("span",{class:"hljs-string"},"'Choose whichever you like'"),s(`
  })
  
  action !== `),t("span",{class:"hljs-string"},"'close'"),s(" && Snackbar("),t("span",{class:"hljs-string"},[s("`Your selected is:"),t("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"handleSelect"'),s(">")]),s("Modify Title"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),S={class:"card"},A={id:"ActionDisabled"},C=t("p",null,[s("The option is passed "),t("code",null,"disabled"),s(" to leave the action in the disabled state.")],-1),I=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
  
  action !== `),t("span",{class:"hljs-string"},"'close'"),s(" && Snackbar("),t("span",{class:"hljs-string"},[s("`Your selected is:"),t("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"handleSelect"'),s(">")]),s("Action Disabled"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),D={class:"card"},O={id:"DisableCloseOnClickAction"},T=t("p",null,[s("Passing in "),t("code",null,"CloseOnClickAction"),s(" disallows the action of "),t("code",null,"ActionSheet"),s(" closing automatically when the option is selected. The user can select the action multiple times. Because "),t("code",null,"Promise"),s(" is only resolved once, it is recommended to use "),t("code",null,"onSelect"),s(" to listen for the action of the user.")],-1),x=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar, ActionSheet } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"async"),s(),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleSelect"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
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
    `),t("span",{class:"hljs-attr"},"onSelect"),s(": "),t("span",{class:"hljs-function"},[t("span",{class:"hljs-params"},"action"),s(" =>")]),s(" Snackbar("),t("span",{class:"hljs-string"},[s("`Your selected is:"),t("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`), 
  })
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"handleSelect"'),s(">")]),s("Disable Close On Click Action"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),B={class:"card"},$={id:"CustomActionStyles"},P=t("p",null,[s("Options provide parameters to configure the style. See the "),t("code",null,"Action"),s(" data structure for options.")],-1),M=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar, ActionSheet } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"async"),s(),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleSelect"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),t("span",{class:"hljs-keyword"},"const"),s(" action = "),t("span",{class:"hljs-keyword"},"await"),s(` ActionSheet({ 
    `),t("span",{class:"hljs-attr"},"actions"),s(`: [
      {
        `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 01'"),s(`,
        `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'account-circle'"),s(`,
        `),t("span",{class:"hljs-attr"},"color"),s(": "),t("span",{class:"hljs-string"},"'#00c48f'"),s(`,
      },
      {
        `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 02'"),s(`,
        `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'notebook'"),s(`,
        `),t("span",{class:"hljs-attr"},"color"),s(": "),t("span",{class:"hljs-string"},"'#ff9800'"),s(`,
      },
      {
        `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 03'"),s(`,
        `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'wifi'"),s(`,
        `),t("span",{class:"hljs-attr"},"color"),s(": "),t("span",{class:"hljs-string"},"'#00afef'"),s(`,
      },
    ]
  })
  
  action !== `),t("span",{class:"hljs-string"},"'close'"),s(" && Snackbar("),t("span",{class:"hljs-string"},[s("`Your selected is:"),t("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"handleSelect"'),s(">")]),s("Custom Action Styles"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),U=t("h2",null,"Component Call",-1),W={class:"card"},Y={id:"BasicUsage"},V=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
  Snackbar(`),t("span",{class:"hljs-string"},[s("`Your selected is:"),t("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("Basic Usage"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-action-sheet"),s(` 
    `),t("span",{class:"hljs-attr"},":actions"),s("="),t("span",{class:"hljs-string"},'"actions"'),s(`
    `),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(`
    @`),t("span",{class:"hljs-attr"},"select"),s("="),t("span",{class:"hljs-string"},'"handleSelect"'),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),z={class:"card"},N={id:"ModifyTitle"},E=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
  Snackbar(`),t("span",{class:"hljs-string"},[s("`Your selected is:"),t("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("Modify Title"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-action-sheet"),s(` 
    `),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"Choose whichever you like"'),s(` 
    `),t("span",{class:"hljs-attr"},":actions"),s("="),t("span",{class:"hljs-string"},'"actions"'),s(`
    `),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(`
    @`),t("span",{class:"hljs-attr"},"select"),s("="),t("span",{class:"hljs-string"},'"handleSelect"'),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),F={class:"card"},R={id:"ActionDisabled"},q=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
  Snackbar(`),t("span",{class:"hljs-string"},[s("`Your selected is:"),t("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("Action Disabled"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-action-sheet"),s(` 
    `),t("span",{class:"hljs-attr"},":actions"),s("="),t("span",{class:"hljs-string"},'"actions"'),s(`
    `),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(`
    @`),t("span",{class:"hljs-attr"},"select"),s("="),t("span",{class:"hljs-string"},'"handleSelect"'),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),H={class:"card"},Z={id:"DisableCloseOnClickAction"},G=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
  Snackbar(`),t("span",{class:"hljs-string"},[s("`Your selected is:"),t("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("Disable close on click action"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-action-sheet"),s(` 
    `),t("span",{class:"hljs-attr"},":close-on-click-action"),s("="),t("span",{class:"hljs-string"},'"false"'),s(`
    `),t("span",{class:"hljs-attr"},":actions"),s("="),t("span",{class:"hljs-string"},'"actions"'),s(` 
    `),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(` 
    @`),t("span",{class:"hljs-attr"},"select"),s("="),t("span",{class:"hljs-string"},'"handleSelect"'),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),J={class:"card"},K={id:"CustomActionStyles"},L=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(` actions = ref([
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 01'"),s(`,
    `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'account-circle'"),s(`,
    `),t("span",{class:"hljs-attr"},"color"),s(": "),t("span",{class:"hljs-string"},"'#00c48f'"),s(`,
  },
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 02'"),s(`,
    `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'notebook'"),s(`,
    `),t("span",{class:"hljs-attr"},"color"),s(": "),t("span",{class:"hljs-string"},"'#ff9800'"),s(`,
  },
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Item 03'"),s(`,
    `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'wifi'"),s(`,
    `),t("span",{class:"hljs-attr"},"color"),s(": "),t("span",{class:"hljs-string"},"'#00afef'"),s(`,
  },
])

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleSelect"),s("("),t("span",{class:"hljs-params"},"action"),s(") ")]),s(`{
  Snackbar(`),t("span",{class:"hljs-string"},[s("`Your selected is:"),t("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("Custom Action Styles"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-action-sheet"),s(` 
    `),t("span",{class:"hljs-attr"},":actions"),s("="),t("span",{class:"hljs-string"},'"actions"'),s(` 
    `),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(` 
    @`),t("span",{class:"hljs-attr"},"select"),s("="),t("span",{class:"hljs-string"},'"handleSelect"'),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),Q=t("h2",null,"API",-1),X={class:"card"},ss={id:"Props"},ts=c("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>Whether to display the action sheet</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>actions</code></td><td>Action list</td><td><em>Actions</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>Action sheet title</td><td><em>string</em></td><td><code>Select One</code></td></tr><tr><td><code>overlay</code></td><td>Whether to display the overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlay-class</code></td><td>Custom overlay class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay-style</code></td><td>Custom overlay style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>Whether to disable scrolling penetration, scrolling the Dialog when disabled will not cause the body to scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-action</code></td><td>Whether to close the actions sheet when clicking action</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-overlay</code></td><td>Whether to click the overlay to close the action sheet</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>safe-area</code></td><td>Whether to enable bottom safety zone adaptation</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>teleport</code></td><td>The location of the action sheet to mount</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>body</code></td></tr></tbody></table>",1),as={class:"card"},ns={id:"Events"},ls=c("<table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>select</code></td><td>Triggered when selecting an action sheet</td><td><code>action: Action</code></td></tr><tr><td><code>open</code></td><td>Triggered when opening an action sheet</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered when an action sheet open-animation ends</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Triggered when closing an action sheet</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when an action sheet close-animation ends</td><td><code>-</code></td></tr><tr><td><code>click-overlay</code></td><td>Triggered when clicking on overlay</td><td><code>-</code></td></tr></tbody></table>",1),es={class:"card"},cs={id:"Methods"},os=c("<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>ActionSheet</code></td><td>Show action sheet</td><td><em>options | string</em></td><td><code>-</code></td></tr><tr><td><code>ActionSheet.close</code></td><td>Close action sheet</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>ActionSheet.setDefaultOptions</code></td><td>Set default option configuration</td><td><em>options</em></td><td><code>-</code></td></tr><tr><td><code>ActionSheet.resetDefaultOptions</code></td><td>Reset default option configuration</td><td><em>-</em></td><td><code>-</code></td></tr></tbody></table>",1),ds={class:"card"},rs={id:"ActionSheetOptions"},hs=c("<h4>Options passed in for a functional call</h4><table><thead><tr><th>Option</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>title</code></td><td>Action sheet title</td><td><em>string</em></td><td><code>Select One</code></td></tr><tr><td><code>overlay</code></td><td>Whether to display the overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlayClass</code></td><td>Custom overlay class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlayStyle</code></td><td>Custom overlay style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>lockScroll</code></td><td>Whether to disable scrolling penetration, scrolling the action sheet when disabled will not cause the body to scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnClickOverlay</code></td><td>Whether to click the overlay to close the action sheet</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>safe-area</code></td><td>Whether to enable bottom safety zone adaptation</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onOpen</code></td><td>Action sheet open callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Action sheet open-animation ends callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Action sheet close callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Action sheet close-animation ends callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onSelect</code></td><td>Action sheet click action callback</td><td><em>(action: Action) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClickOverlay</code></td><td>Click overlay callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table>",2),is={class:"card"},ps={id:"ActionSheetAction"},js=c("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name</code></td><td>Action name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>Action text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Icon, support network image address</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>iconSize</code></td><td>Icon size</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>namespace</code></td><td>Icon namespace</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>className</code></td><td>Class name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>Disable or not option</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>",1),ms={class:"card"},gs={id:"Slots"},us=c("<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>actions</code></td><td>Action list</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>Action sheet title</td><td><code>-</code></td></tr></tbody></table>",1),_s={class:"card"},bs={id:"StyleVariables"},ys=c('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--action-sheet-border-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--action-sheet-border-top</code></td><td><code>none</code></td></tr><tr><td><code>--action-sheet-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--action-sheet-title-color</code></td><td><code>#888</code></td></tr><tr><td><code>--action-sheet-title-padding</code></td><td><code>10px 16px</code></td></tr><tr><td><code>--action-sheet-title-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--action-sheet-action-item-height</code></td><td><code>48px</code></td></tr><tr><td><code>--action-sheet-action-item-padding</code></td><td><code>0px 18px</code></td></tr><tr><td><code>--action-sheet-action-item-color</code></td><td><code>#333</code></td></tr><tr><td><code>--action-sheet-action-item-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--action-sheet-icon-margin</code></td><td><code>0 0 20px 0</code></td></tr><tr><td><code>--action-sheet-icon-size</code></td><td><code>24px</code></td></tr></tbody></table>',2);function fs(ks,ws,vs,Ss,As,Cs){const l=o("router-link"),e=o("var-site-code-example");return r(),h("div",p,[j,t("div",m,[t("h3",g,[a(l,{to:"#Intro"},{default:n(()=>[s("#")]),_:1}),s("Intro")]),u]),_,t("div",b,[t("h3",y,[a(l,{to:"#BasicUse"},{default:n(()=>[s("#")]),_:1}),s("Basic Use")]),a(e,null,{default:n(()=>[f]),_:1})]),t("div",k,[t("h3",w,[a(l,{to:"#ModifyTitle"},{default:n(()=>[s("#")]),_:1}),s("Modify Title")]),a(e,null,{default:n(()=>[v]),_:1})]),t("div",S,[t("h3",A,[a(l,{to:"#ActionDisabled"},{default:n(()=>[s("#")]),_:1}),s("Action Disabled")]),C,a(e,null,{default:n(()=>[I]),_:1})]),t("div",D,[t("h3",O,[a(l,{to:"#DisableCloseOnClickAction"},{default:n(()=>[s("#")]),_:1}),s("Disable Close On Click Action")]),T,a(e,null,{default:n(()=>[x]),_:1})]),t("div",B,[t("h3",$,[a(l,{to:"#CustomActionStyles"},{default:n(()=>[s("#")]),_:1}),s("Custom Action Styles")]),P,a(e,null,{default:n(()=>[M]),_:1})]),U,t("div",W,[t("h3",Y,[a(l,{to:"#BasicUsage"},{default:n(()=>[s("#")]),_:1}),s("Basic Usage")]),a(e,null,{default:n(()=>[V]),_:1})]),t("div",z,[t("h3",N,[a(l,{to:"#ModifyTitle"},{default:n(()=>[s("#")]),_:1}),s("Modify Title")]),a(e,null,{default:n(()=>[E]),_:1})]),t("div",F,[t("h3",R,[a(l,{to:"#ActionDisabled"},{default:n(()=>[s("#")]),_:1}),s("Action Disabled")]),a(e,null,{default:n(()=>[q]),_:1})]),t("div",H,[t("h3",Z,[a(l,{to:"#DisableCloseOnClickAction"},{default:n(()=>[s("#")]),_:1}),s("Disable Close On Click Action")]),a(e,null,{default:n(()=>[G]),_:1})]),t("div",J,[t("h3",K,[a(l,{to:"#CustomActionStyles"},{default:n(()=>[s("#")]),_:1}),s("Custom Action Styles")]),a(e,null,{default:n(()=>[L]),_:1})]),Q,t("div",X,[t("h3",ss,[a(l,{to:"#Props"},{default:n(()=>[s("#")]),_:1}),s("Props")]),ts]),t("div",as,[t("h3",ns,[a(l,{to:"#Events"},{default:n(()=>[s("#")]),_:1}),s("Events")]),ls]),t("div",es,[t("h3",cs,[a(l,{to:"#Methods"},{default:n(()=>[s("#")]),_:1}),s("Methods")]),os]),t("div",ds,[t("h3",rs,[a(l,{to:"#ActionSheetOptions"},{default:n(()=>[s("#")]),_:1}),s("ActionSheet Options")]),hs]),t("div",is,[t("h3",ps,[a(l,{to:"#ActionSheetAction"},{default:n(()=>[s("#")]),_:1}),s("ActionSheet Action")]),js]),t("div",ms,[t("h3",gs,[a(l,{to:"#Slots"},{default:n(()=>[s("#")]),_:1}),s("Slots")]),us]),t("div",_s,[t("h3",bs,[a(l,{to:"#StyleVariables"},{default:n(()=>[s("#")]),_:1}),s("Style Variables")]),ys])])}const Ds=d(i,[["render",fs]]);export{Ds as default};
