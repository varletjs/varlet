import{b as r,m as i,p as s,q as e,Q as t,w as d,$ as l,e as c,h as p}from"./index-DtCrA0ro.js";const h={components:{}},m={class:"varlet-site-doc"},g={class:"card"},j={id:"Intro"},u={class:"card"},b={id:"BasicUsage"},f={class:"card"},y={id:"ModifyTitle"},v={class:"card"},k={id:"HideButton"},D={class:"card"},w={id:"HandlerUserBehavior"},B={class:"card"},C={id:"AsynchronousClosing"},S={class:"card"},x={id:"BasicUsage"},A={class:"card"},M={id:"AsynchronousClosing"},T={class:"card"},W={id:"CustomSlots"},N={class:"card"},O={id:"Props"},U={class:"card"},E={id:"Events"},H={class:"card"},P={id:"Methods"},I={class:"card"},L={id:"DialogOptions"},V={class:"card"},z={id:"Slots"},$={class:"card"},F={id:"StyleVariables"};function K(R,a,Y,q,Q,_){const o=c("router-link"),n=c("var-site-code-example");return p(),i("div",m,[a[47]||(a[47]=s("h1",null,"Dialog",-1)),s("div",g,[s("h3",j,[e(o,{to:"#Intro"},{default:d(()=>[...a[0]||(a[0]=[t("#",-1)])]),_:1}),a[1]||(a[1]=t("Intro",-1))]),a[2]||(a[2]=s("p",null,[t("A dialog pops up to display the content and handle the user interaction. "),s("code",null,"Dialog"),t(" have provided functional and component usage, and there is no essential difference between the two usage effects and parameters.")],-1))]),a[48]||(a[48]=s("h2",null,"Function Call",-1)),s("div",u,[s("h3",b,[e(o,{to:"#BasicUsage"},{default:d(()=>[...a[3]||(a[3]=[t("#",-1)])]),_:1}),a[4]||(a[4]=t("Basic Usage",-1))]),e(n,null,{default:d(()=>[...a[5]||(a[5]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Dialog } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"primary"'),t(),s("span",{class:"hljs-attr"},"block"),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},`"Dialog('Don\\'t Wanna See No Blood, Don\\'t Be A Macho Man')"`),t(">")]),t("Basic Use"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1)])]),_:1})]),s("div",f,[s("h3",y,[e(o,{to:"#ModifyTitle"},{default:d(()=>[...a[6]||(a[6]=[t("#",-1)])]),_:1}),a[7]||(a[7]=t("Modify Title",-1))]),e(n,null,{default:d(()=>[...a[8]||(a[8]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Dialog } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),t(),s("span",{class:"hljs-title"},"modifyTitle"),t("("),s("span",{class:"hljs-params"}),t(") ")]),t(`{
  Dialog({
    `),s("span",{class:"hljs-attr"},"title"),t(": "),s("span",{class:"hljs-string"},"'Beat It'"),t(`,
    `),s("span",{class:"hljs-attr"},"message"),t(": "),s("span",{class:"hljs-string"},"'Don\\'t Wanna See No Blood, Don\\'t Be A Macho Man'"),t(`,
  })
}
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"primary"'),t(),s("span",{class:"hljs-attr"},"block"),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"modifyTitle"'),t(">")]),t("Modify Title"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1)])]),_:1})]),s("div",v,[s("h3",k,[e(o,{to:"#HideButton"},{default:d(()=>[...a[9]||(a[9]=[t("#",-1)])]),_:1}),a[10]||(a[10]=t("Hide Button",-1))]),e(n,null,{default:d(()=>[...a[11]||(a[11]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Dialog } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),t(),s("span",{class:"hljs-title"},"hideButton"),t("("),s("span",{class:"hljs-params"}),t(") ")]),t(`{
  Dialog({
    `),s("span",{class:"hljs-attr"},"message"),t(": "),s("span",{class:"hljs-string"},"'Don\\'t Wanna See No Blood, Don\\'t Be A Macho Man'"),t(`,
    `),s("span",{class:"hljs-attr"},"confirmButton"),t(": "),s("span",{class:"hljs-literal"},"false"),t(`,
    `),s("span",{class:"hljs-attr"},"cancelButton"),t(": "),s("span",{class:"hljs-literal"},"false"),t(`,
  })
}
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"primary"'),t(),s("span",{class:"hljs-attr"},"block"),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"hideButton"'),t(">")]),t("Hide Button"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1)])]),_:1})]),s("div",D,[s("h3",w,[e(o,{to:"#HandlerUserBehavior"},{default:d(()=>[...a[12]||(a[12]=[t("#",-1)])]),_:1}),a[13]||(a[13]=t("Handler User Behavior",-1))]),a[15]||(a[15]=s("p",null,[t("You can get user behavior from the method's return value, which is a "),s("code",null,"Promise"),t(". Includes "),s("code",null,"confirm"),t(", "),s("code",null,"cancel"),t(", and "),s("code",null,"close(click the overlay to trigger closure)"),t(".")],-1)),e(n,null,{default:d(()=>[...a[14]||(a[14]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Dialog, Snackbar } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(` actions = {
  `),s("span",{class:"hljs-attr"},"confirm"),t(": "),s("span",{class:"hljs-function"},"() =>"),t(" Snackbar.success("),s("span",{class:"hljs-string"},"'confirm'"),t(`),
  `),s("span",{class:"hljs-attr"},"cancel"),t(": "),s("span",{class:"hljs-function"},"() =>"),t(" Snackbar.error("),s("span",{class:"hljs-string"},"'cancel'"),t(`),
  `),s("span",{class:"hljs-attr"},"close"),t(": "),s("span",{class:"hljs-function"},"() =>"),t(" Snackbar.info("),s("span",{class:"hljs-string"},"'close'"),t(`),
}

`),s("span",{class:"hljs-keyword"},"async"),t(),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),t(),s("span",{class:"hljs-title"},"createAction"),t("("),s("span",{class:"hljs-params"}),t(") ")]),t(`{
  actions[`),s("span",{class:"hljs-keyword"},"await"),t(" Dialog("),s("span",{class:"hljs-string"},"'Don\\'t Wanna See No Blood, Don\\'t Be A Macho Man'"),t(`)]()
}
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"primary"'),t(),s("span",{class:"hljs-attr"},"block"),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"createAction"'),t(">")]),t("Handling user behavior"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1)])]),_:1})]),s("div",B,[s("h3",C,[e(o,{to:"#AsynchronousClosing"},{default:d(()=>[...a[16]||(a[16]=[t("#",-1)])]),_:1}),a[17]||(a[17]=t("Asynchronous Closing",-1))]),a[19]||(a[19]=s("p",null,[t("You can use "),s("code",null,"onBeforeClose"),t(" to intercept before closing, and you can get the user behavior from the parameters, and the callback function that triggers the shutdown.")],-1)),e(n,null,{default:d(()=>[...a[18]||(a[18]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Dialog, Snackbar } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(` actions = {
  `),s("span",{class:"hljs-attr"},"confirm"),t(": "),s("span",{class:"hljs-function"},"() =>"),t(" Snackbar.success("),s("span",{class:"hljs-string"},"'confirm'"),t(`),
  `),s("span",{class:"hljs-attr"},"cancel"),t(": "),s("span",{class:"hljs-function"},"() =>"),t(" Snackbar.error("),s("span",{class:"hljs-string"},"'cancel'"),t(`),
  `),s("span",{class:"hljs-attr"},"close"),t(": "),s("span",{class:"hljs-function"},"() =>"),t(" Snackbar.info("),s("span",{class:"hljs-string"},"'close'"),t(`),
}

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),t(),s("span",{class:"hljs-title"},"onBeforeClose"),t("("),s("span",{class:"hljs-params"},"action, done"),t(") ")]),t(`{
  Snackbar.loading(`),s("span",{class:"hljs-string"},"'Asynchronous shutdown in progress'"),t(`)

  `),s("span",{class:"hljs-built_in"},"setTimeout"),t("("),s("span",{class:"hljs-function"},"() =>"),t(` {
    actions[action]()
    done()
  }, `),s("span",{class:"hljs-number"},"1000"),t(`)
}

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),t(),s("span",{class:"hljs-title"},"createAction"),t("("),s("span",{class:"hljs-params"}),t(") ")]),t(`{
  Dialog({
    `),s("span",{class:"hljs-attr"},"message"),t(": "),s("span",{class:"hljs-string"},"'Don\\'t Wanna See No Blood, Don\\'t Be A Macho Man'"),t(`,
    onBeforeClose
  })
}
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"primary"'),t(),s("span",{class:"hljs-attr"},"block"),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"createAction"'),t(">")]),t("Asynchronous closing"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1)])]),_:1})]),a[49]||(a[49]=s("h2",null,"Component Call",-1)),s("div",S,[s("h3",x,[e(o,{to:"#BasicUsage"},{default:d(()=>[...a[20]||(a[20]=[t("#",-1)])]),_:1}),a[21]||(a[21]=t("Basic Usage",-1))]),e(n,null,{default:d(()=>[...a[22]||(a[22]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Snackbar } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`
   
`),s("span",{class:"hljs-keyword"},"const"),t(" show = ref("),s("span",{class:"hljs-literal"},"false"),t(`)
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"warning"'),t(),s("span",{class:"hljs-attr"},"block"),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"show = true"'),t(">")]),t("Basic Use"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-dialog"),t(`
    `),s("span",{class:"hljs-attr"},"title"),t("="),s("span",{class:"hljs-string"},'"Beat It"'),t(`
    `),s("span",{class:"hljs-attr"},"message"),t("="),s("span",{class:"hljs-string"},`"Don't Wanna See No Blood, Don't Be A Macho Man"`),t(`
    `),s("span",{class:"hljs-attr"},"v-model:show"),t("="),s("span",{class:"hljs-string"},'"show"'),t(`
    @`),s("span",{class:"hljs-attr"},"confirm"),t("="),s("span",{class:"hljs-string"},`"Snackbar.success('confirm')"`),t(`
    @`),s("span",{class:"hljs-attr"},"cancel"),t("="),s("span",{class:"hljs-string"},`"Snackbar.error('cancel')"`),t(`
    @`),s("span",{class:"hljs-attr"},"closed"),t("="),s("span",{class:"hljs-string"},`"Snackbar.info('closed')"`),t(`
  />`)]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1)])]),_:1})]),s("div",A,[s("h3",M,[e(o,{to:"#AsynchronousClosing"},{default:d(()=>[...a[23]||(a[23]=[t("#",-1)])]),_:1}),a[24]||(a[24]=t("Asynchronous Closing",-1))]),e(n,null,{default:d(()=>[...a[25]||(a[25]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Snackbar } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" show = ref("),s("span",{class:"hljs-literal"},"false"),t(`)

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),t(),s("span",{class:"hljs-title"},"onBeforeClose"),t("("),s("span",{class:"hljs-params"},`action, done, { 
  confirmButtonLoading, 
  cancelButtonLoading, 
  confirmButtonDisabled, 
  cancelButtonDisabled 
}`),t(") ")]),t(`{
  `),s("span",{class:"hljs-keyword"},"if"),t(" (action === "),s("span",{class:"hljs-string"},"'confirm'"),t(`) {
    confirmButtonLoading.value = `),s("span",{class:"hljs-literal"},"true"),t(`
    cancelButtonDisabled.value = `),s("span",{class:"hljs-literal"},"true"),t(`
  }

  `),s("span",{class:"hljs-keyword"},"if"),t(" (action === "),s("span",{class:"hljs-string"},"'cancel'"),t(`) {
    cancelButtonLoading.value = `),s("span",{class:"hljs-literal"},"true"),t(`
    confirmButtonDisabled.value = `),s("span",{class:"hljs-literal"},"true"),t(`
  }

  `),s("span",{class:"hljs-built_in"},"setTimeout"),t("("),s("span",{class:"hljs-function"},"() =>"),t(` {
    confirmButtonLoading.value = `),s("span",{class:"hljs-literal"},"false"),t(`
    cancelButtonLoading.value = `),s("span",{class:"hljs-literal"},"false"),t(`
    confirmButtonDisabled.value = `),s("span",{class:"hljs-literal"},"false"),t(`
    cancelButtonDisabled.value = `),s("span",{class:"hljs-literal"},"false"),t(`

    `),s("span",{class:"hljs-keyword"},"if"),t(" (action === "),s("span",{class:"hljs-string"},"'confirm'"),t(`) {
      Snackbar.success(`),s("span",{class:"hljs-string"},"'confirm'"),t(`)
    }

    `),s("span",{class:"hljs-keyword"},"if"),t(" (action === "),s("span",{class:"hljs-string"},"'cancel'"),t(`) {
      Snackbar.error(`),s("span",{class:"hljs-string"},"'cancel'"),t(`)
    }

    `),s("span",{class:"hljs-keyword"},"if"),t(" (action === "),s("span",{class:"hljs-string"},"'close'"),t(`) {
      Snackbar.info(`),s("span",{class:"hljs-string"},"'close'"),t(`)
    }

    done()
   }, `),s("span",{class:"hljs-number"},"1000"),t(`)
}
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"warning"'),t(),s("span",{class:"hljs-attr"},"block"),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"show = true"'),t(">")]),t("Asynchronous closing"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-dialog"),t(`
    `),s("span",{class:"hljs-attr"},"title"),t("="),s("span",{class:"hljs-string"},'"Beat It"'),t(`
    `),s("span",{class:"hljs-attr"},"message"),t("="),s("span",{class:"hljs-string"},`"Don't Wanna See No Blood, Don't Be A Macho Man"`),t(`
    `),s("span",{class:"hljs-attr"},"v-model:show"),t("="),s("span",{class:"hljs-string"},'"show"'),t(`
    @`),s("span",{class:"hljs-attr"},"before-close"),t("="),s("span",{class:"hljs-string"},'"onBeforeClose"'),t(`
  />`)]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1)])]),_:1})]),s("div",T,[s("h3",W,[e(o,{to:"#CustomSlots"},{default:d(()=>[...a[26]||(a[26]=[t("#",-1)])]),_:1}),a[27]||(a[27]=t("Custom Slots",-1))]),e(n,null,{default:d(()=>[...a[28]||(a[28]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" show = ref("),s("span",{class:"hljs-literal"},"false"),t(`)
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"warning"'),t(),s("span",{class:"hljs-attr"},"block"),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"show = true"'),t(">")]),t("Custom Slots"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-dialog"),t(),s("span",{class:"hljs-attr"},"v-model:show"),t("="),s("span",{class:"hljs-string"},'"show"'),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(" #"),s("span",{class:"hljs-attr"},"title"),t(">")]),t(`
      `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-icon"),t(),s("span",{class:"hljs-attr"},"name"),t("="),s("span",{class:"hljs-string"},'"information"'),t(),s("span",{class:"hljs-attr"},"color"),t("="),s("span",{class:"hljs-string"},'"#2979ff"'),t(" />")]),t(`
    `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`

    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t("Don't Wanna See No Blood, Don't Be A Macho Man"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t("Don't Wanna See No Blood, Don't Be A Macho Man"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t("Don't Wanna See No Blood, Don't Be A Macho Man"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-dialog"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1)])]),_:1})]),a[50]||(a[50]=s("h2",null,"API",-1)),s("div",N,[s("h3",O,[e(o,{to:"#Props"},{default:d(()=>[...a[29]||(a[29]=[t("#",-1)])]),_:1}),a[30]||(a[30]=t("Props",-1))]),a[31]||(a[31]=l("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>Whether to display a Dialog</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>title</code></td><td>Dialog title</td><td><em>string</em></td><td><code>Hint</code></td></tr><tr><td><code>width</code></td><td>Dialog width</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>message</code></td><td>Dialog message content</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>message-align</code></td><td>Dialog message content text alignment, optional values <code>center</code>, <code>left</code>, <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td><code>confirm-button</code></td><td>Whether to display the confirm button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cancel-button</code></td><td>Whether to display the cancel button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>confirm-button-text</code></td><td>Confirm button text</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td><code>cancel-button-text</code></td><td>Cancel button text</td><td><em>string</em></td><td><code>Cancel</code></td></tr><tr><td><code>confirm-button-text-color</code></td><td>Confirm button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-text-color</code></td><td>Cancel button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>confirm-button-color</code></td><td>Confirm button background color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-color</code></td><td>Cancel button background color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>confirm-button-loading</code> <em><strong>3.12.0</strong></em></td><td>Confirm button loading state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>cancel-button-loading</code> <em><strong>3.12.0</strong></em></td><td>Cancel button loading state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>confirm-button-disabled</code> <em><strong>3.12.0</strong></em></td><td>Confirm button disabled state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>cancel-button-disabled</code> <em><strong>3.12.0</strong></em></td><td>Cancel button disabled state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>dialog-class</code></td><td>Dialog body class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>dialog-style</code></td><td>Dialog body style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>overlay</code></td><td>Whether to display the overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlay-class</code></td><td>Custom overlay class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay-style</code></td><td>Custom overlay style</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>Whether to disable scrolling penetration, scrolling the Dialog when disabled will not cause the body to scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-overlay</code></td><td>Whether to click the overlay to close the Dialog</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-key-escape</code></td><td>Whether to support keyboard ESC to close the dialog</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>The location of the Dialog to mount</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>body</code></td></tr></tbody></table>",1))]),s("div",U,[s("h3",E,[e(o,{to:"#Events"},{default:d(()=>[...a[32]||(a[32]=[t("#",-1)])]),_:1}),a[33]||(a[33]=t("Events",-1))]),a[34]||(a[34]=l("<table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>open</code></td><td>Triggered when the Dialog is open</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered when the Dialog open-animation ends</td><td><code>-</code></td></tr><tr><td><code>before-close</code></td><td>Triggering before the Dialog closes prevents closure</td><td><code>action: confirm | cancel | close</code> <br> <code>done: Function</code></td></tr><tr><td><code>close</code></td><td>Triggered when the Dialog is close</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the Dialog close-animation ends</td><td><code>-</code></td></tr><tr><td><code>confirm</code></td><td>Triggered on confirm</td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>Triggered on cancel</td><td><code>-</code></td></tr><tr><td><code>click-overlay</code></td><td>Triggered when clicking on overlay</td><td><code>-</code></td></tr><tr><td><code>key-escape</code></td><td>Triggered when click keyboard ESC</td><td><code>-</code></td></tr></tbody></table>",1))]),s("div",H,[s("h3",P,[e(o,{to:"#Methods"},{default:d(()=>[...a[35]||(a[35]=[t("#",-1)])]),_:1}),a[36]||(a[36]=t("Methods",-1))]),a[37]||(a[37]=l("<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>Dialog</code></td><td>Show dialog</td><td><em>options | string</em></td><td><code>-</code></td></tr><tr><td><code>Dialog.close</code></td><td>Close dialog</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>Dialog.setDefaultOptions</code></td><td>Set default option configuration</td><td><em>options</em></td><td><code>-</code></td></tr><tr><td><code>Dialog.resetDefaultOptions</code></td><td>Reset default option configuration</td><td><em>-</em></td><td><code>-</code></td></tr></tbody></table>",1))]),s("div",I,[s("h3",L,[e(o,{to:"#DialogOptions"},{default:d(()=>[...a[38]||(a[38]=[t("#",-1)])]),_:1}),a[39]||(a[39]=t("Dialog Options",-1))]),a[40]||(a[40]=l("<h4>Options passed in for a functional call</h4><table><thead><tr><th>Option</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>title</code></td><td>Dialog title</td><td><em>string</em></td><td><code>Hint</code></td></tr><tr><td><code>width</code></td><td>Dialog width</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>message</code></td><td>Dialog message content</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>messageAlign</code></td><td>Dialog message content text alignment, optional values <code>center</code> <code>left</code> <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td><code>confirmButton</code></td><td>Whether to display the confirm button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cancelButton</code></td><td>Whether to display the cancel button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>confirmButtonText</code></td><td>Confirm button text</td><td><em>string</em></td><td><code>确认</code></td></tr><tr><td><code>cancelButtonText</code></td><td>Cancel button text</td><td><em>string</em></td><td><code>取消</code></td></tr><tr><td><code>confirmButtonTextColor</code></td><td>Confirm button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonTextColor</code></td><td>Cancel button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>confirmButtonColor</code></td><td>Confirm button background color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonColor</code></td><td>Cancel button background color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>confirmButtonLoading</code> <em><strong>3.12.0</strong></em></td><td>Confirm button loading state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>cancelButtonLoading</code> <em><strong>3.12.0</strong></em></td><td>Cancel button loading state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>confirmButtonDisabled</code> <em><strong>3.12.0</strong></em></td><td>Confirm button disabled state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>cancelButtonDisabled</code> <em><strong>3.12.0</strong></em></td><td>Cancel button disabled state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>dialogClass</code></td><td>Dialog body class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>dialogStyle</code></td><td>Dialog body style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>overlay</code></td><td>Whether to display the overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlayClass</code></td><td>Custom overlay class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlayStyle</code></td><td>Custom overlay style</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>lockScroll</code></td><td>Whether to disable scrolling penetration, scrolling the Dialog when disabled will not cause the body to scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnClickOverlay</code></td><td>Whether to click the overlay to close the Dialog</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnKeyEscape</code></td><td>Whether to support keyboard ESC to close the dialog</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>onOpen</code></td><td>Dialog open callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Dialog open-animation ends callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onBeforeClose</code></td><td>Callbacks prevent closure before the Dialog closes</td><td><em>(action: confirm | cancel | close, done: Function) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Dialog close callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Dialog close-animation ends callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onConfirm</code></td><td>Confirm callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onCancel</code></td><td>Cancel callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClickOverlay</code></td><td>Click overlay callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onKeyEscape</code></td><td>Triggered when click keyboard ESC</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table>",2))]),s("div",V,[s("h3",z,[e(o,{to:"#Slots"},{default:d(()=>[...a[41]||(a[41]=[t("#",-1)])]),_:1}),a[42]||(a[42]=t("Slots",-1))]),a[43]||(a[43]=l("<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Dialog content message</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>Dialog title</td><td><code>-</code></td></tr><tr><td><code>actions</code> <em><strong>3.3.3</strong></em></td><td>Dialog actions</td><td><code>slotClass: string</code> the class of actions container <br> <code>cancel: () =&gt; void</code> cancel callback function <br> <code>confirm: () =&gt; void</code> confirm callback function</td></tr></tbody></table>",1))]),s("div",$,[s("h3",F,[e(o,{to:"#StyleVariables"},{default:d(()=>[...a[44]||(a[44]=[t("#",-1)])]),_:1}),a[45]||(a[45]=t("Style Variables",-1))]),a[46]||(a[46]=l('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--dialog-width</code></td><td><code>280px</code></td></tr><tr><td><code>--dialog-background</code></td><td><code>var(--color-surface-container-low)</code></td></tr><tr><td><code>--dialog-border-radius</code></td><td><code>3px</code></td></tr><tr><td><code>--dialog-title-padding</code></td><td><code>20px 20px 0</code></td></tr><tr><td><code>--dialog-title-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--dialog-message-color</code></td><td><code>#888</code></td></tr><tr><td><code>--dialog-message-padding</code></td><td><code>12px 20px</code></td></tr><tr><td><code>--dialog-message-line-height</code></td><td><code>24px</code></td></tr><tr><td><code>--dialog-message-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--dialog-actions-padding</code></td><td><code>0 12px 12px</code></td></tr><tr><td><code>--dialog-button-margin-left</code></td><td><code>6px</code></td></tr><tr><td><code>--dialog-title-color</code></td><td><code>#555</code></td></tr><tr><td><code>--dialog-confirm-button-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--dialog-cancel-button-color</code></td><td><code>var(--color-primary)</code></td></tr></tbody></table>',2))])])}const J=r(h,[["render",K]]);export{J as default};
