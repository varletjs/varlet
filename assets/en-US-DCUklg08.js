import{b as c,m as p,p as t,q as e,Q as s,w as n,$ as o,e as r,h as i}from"./index-DtCrA0ro.js";const h={components:{}},j={class:"varlet-site-doc"},g={class:"card"},m={id:"Intro"},u={class:"card"},v={id:"FunctionCall"},w={class:"card"},b={id:"BasicUse"},f={class:"card"},k={id:"SpecifyInitialPosition"},y={class:"card"},x={id:"DisplayTheCloseButton"},S={class:"card"},P={id:"ListenForCloseEvent"},C={class:"card"},I={id:"ListenForLongPressEvent"},T={class:"card"},E={id:"ShowExtraSlots"},L={class:"card"},D={id:"Props"},B={class:"card"},O={id:"Events"},U={class:"card"},W={id:"Methods"},z={class:"card"},F={id:"Slots"},V={class:"card"},N={id:"ImagePreviewOptions"},R={class:"card"},$={id:"StyleVariables"};function M(A,a,q,H,K,Q){const l=r("router-link"),d=r("var-site-code-example");return i(),p("div",j,[a[46]||(a[46]=t("h1",null,"ImagePreview",-1)),t("div",g,[t("h3",m,[e(l,{to:"#Intro"},{default:n(()=>[...a[0]||(a[0]=[s("#",-1)])]),_:1}),a[1]||(a[1]=s("Intro",-1))]),a[2]||(a[2]=t("p",null,"Image-Preview, Support double-click magnification, Support function call and component call two ways.",-1))]),t("div",u,[t("h3",v,[e(l,{to:"#FunctionCall"},{default:n(()=>[...a[3]||(a[3]=[s("#",-1)])]),_:1}),a[4]||(a[4]=s("Function Call",-1))]),a[7]||(a[7]=t("h4",null,"Basic Usage",-1)),e(d,null,{default:n(()=>[...a[5]||(a[5]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ImagePreview } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"preview"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  ImagePreview(`),t("span",{class:"hljs-string"},"'https://varletjs.org/cat.jpg'"),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"preview"'),s(">")]),s("Basic Use"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1}),a[8]||(a[8]=t("h4",null,"Call Back",-1)),e(d,null,{default:n(()=>[...a[6]||(a[6]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ImagePreview, Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"preview"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  ImagePreview({
    `),t("span",{class:"hljs-attr"},"images"),s(`: [
      `),t("span",{class:"hljs-string"},"'https://varletjs.org/cat.jpg'"),s(`,
      `),t("span",{class:"hljs-string"},"'https://varletjs.org/cat2.jpg'"),s(`
    ],
    `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"onChange"),s("("),t("span",{class:"hljs-params"},"index"),s(")")]),s(` {
      Snackbar(`),t("span",{class:"hljs-built_in"},"String"),s(`(index))
    }
  })
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"preview"'),s(">")]),s("Handle callback function"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a[47]||(a[47]=t("h2",null,"Component Call",-1)),t("div",w,[t("h3",b,[e(l,{to:"#BasicUse"},{default:n(()=>[...a[9]||(a[9]=[s("#",-1)])]),_:1}),a[10]||(a[10]=s("Basic Use",-1))]),e(d,null,{default:n(()=>[...a[11]||(a[11]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),t("span",{class:"hljs-string"},"'https://varletjs.org/cat.jpg'"),s(`,
  `),t("span",{class:"hljs-string"},"'https://varletjs.org/cat2.jpg'"),s(`,
])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(`
    `),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(`
    `),t("span",{class:"hljs-attr"},"block"),s(`
    @`),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = true"'),s(`
  >`)]),s(`
    Basic Use
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-image-preview"),s(),t("span",{class:"hljs-attr"},":images"),s("="),t("span",{class:"hljs-string"},'"images"'),s(),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t("div",f,[t("h3",k,[e(l,{to:"#SpecifyInitialPosition"},{default:n(()=>[...a[12]||(a[12]=[s("#",-1)])]),_:1}),a[13]||(a[13]=s("Specify Initial Position",-1))]),e(d,null,{default:n(()=>[...a[14]||(a[14]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),t("span",{class:"hljs-string"},"'https://varletjs.org/cat.jpg'"),s(`,
  `),t("span",{class:"hljs-string"},"'https://varletjs.org/cat2.jpg'"),s(`,
])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
 `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(` 
    `),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(` 
    `),t("span",{class:"hljs-attr"},"block"),s(`
    @`),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = true"'),s(`
  >`)]),s(`
    Specify initial position
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-image-preview"),s(`
    `),t("span",{class:"hljs-attr"},":initial-index"),s("="),t("span",{class:"hljs-string"},'"1"'),s(`
    `),t("span",{class:"hljs-attr"},":images"),s("="),t("span",{class:"hljs-string"},'"images"'),s(`
    `),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(` 
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t("div",y,[t("h3",x,[e(l,{to:"#DisplayTheCloseButton"},{default:n(()=>[...a[15]||(a[15]=[s("#",-1)])]),_:1}),a[16]||(a[16]=s("Display The Close Button",-1))]),e(d,null,{default:n(()=>[...a[17]||(a[17]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),t("span",{class:"hljs-string"},"'https://varletjs.org/cat.jpg'"),s(`,
  `),t("span",{class:"hljs-string"},"'https://varletjs.org/cat2.jpg'"),s(`,
])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
   `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(` 
    `),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(` 
    `),t("span",{class:"hljs-attr"},"block"),s(` 
    @`),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = true"'),s(`
  >`)]),s(`
    Display the close button
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-image-preview"),s(`
    `),t("span",{class:"hljs-attr"},"closeable"),s(`
    `),t("span",{class:"hljs-attr"},":images"),s("="),t("span",{class:"hljs-string"},'"images"'),s(`
    `),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(` 
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t("div",S,[t("h3",P,[e(l,{to:"#ListenForCloseEvent"},{default:n(()=>[...a[18]||(a[18]=[s("#",-1)])]),_:1}),a[19]||(a[19]=s("Listen For Close Event",-1))]),e(d,null,{default:n(()=>[...a[20]||(a[20]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),t("span",{class:"hljs-string"},"'https://varletjs.org/cat.jpg'"),s(`,
  `),t("span",{class:"hljs-string"},"'https://varletjs.org/cat2.jpg'"),s(`,
])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(`
    `),t("span",{class:"hljs-attr"},"block"),s(`
    `),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(`
    @`),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = true"'),s(`
  >`)]),s(`
    Listen for close event
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-image-preview"),s(` 
    `),t("span",{class:"hljs-attr"},":images"),s("="),t("span",{class:"hljs-string"},'"images"'),s(`
    `),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(`
    @`),t("span",{class:"hljs-attr"},"close"),s("="),t("span",{class:"hljs-string"},`"Snackbar('The shutdown event was triggered.')"`),s(` 
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t("div",C,[t("h3",I,[e(l,{to:"#ListenForLongPressEvent"},{default:n(()=>[...a[21]||(a[21]=[s("#",-1)])]),_:1}),a[22]||(a[22]=s("Listen For Long Press Event",-1))]),a[24]||(a[24]=t("p",null,[s("The "),t("code",null,"image-prevent-default"),s(" attribute prohibits the default behavior of images, and the "),t("code",null,"long-press"),s(" event can be customized to achieve long press requirements.")],-1)),e(d,null,{default:n(()=>[...a[23]||(a[23]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),t("span",{class:"hljs-string"},"'https://varletjs.org/cat.jpg'"),s(`,
  `),t("span",{class:"hljs-string"},"'https://varletjs.org/cat2.jpg'"),s(`,
])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(`
    `),t("span",{class:"hljs-attr"},"block"),s(`
    `),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(`
    @`),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = true"'),s(`
  >`)]),s(`
    Listen for long press event
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-image-preview"),s(`
    `),t("span",{class:"hljs-attr"},"image-prevent-default"),s(`
    `),t("span",{class:"hljs-attr"},":images"),s("="),t("span",{class:"hljs-string"},'"images"'),s(`
    `),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(`
    @`),t("span",{class:"hljs-attr"},"long-press"),s("="),t("span",{class:"hljs-string"},`"Snackbar('Long press event is triggered')"`),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t("div",T,[t("h3",E,[e(l,{to:"#ShowExtraSlots"},{default:n(()=>[...a[25]||(a[25]=[s("#",-1)])]),_:1}),a[26]||(a[26]=s("Show Extra Slots",-1))]),e(d,null,{default:n(()=>[...a[27]||(a[27]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(" menuShow = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),t("span",{class:"hljs-string"},"'https://varletjs.org/cat.jpg'"),s(`,
  `),t("span",{class:"hljs-string"},"'https://varletjs.org/cat2.jpg'"),s(`,
])
`),t("span",{class:"hljs-keyword"},"const"),s(` actions = [
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'operate'"),s(`,
    `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'wrench'"),s(`
  },
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'operate'"),s(`,
    `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'wrench'"),s(`
  }
]
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
   `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(`
     `),t("span",{class:"hljs-attr"},"block"),s(`
     `),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(`
     @`),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = true"'),s(`
  >`)]),s(`
    Show extra slots
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-image-preview"),s(),t("span",{class:"hljs-attr"},":images"),s("="),t("span",{class:"hljs-string"},'"images"'),s(),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"extra"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(`
        `),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"menu"'),s(`
        `),t("span",{class:"hljs-attr"},":size"),s("="),t("span",{class:"hljs-string"},'"22"'),s(`
        `),t("span",{class:"hljs-attr"},"color"),s("="),t("span",{class:"hljs-string"},'"#fff"'),s(`
        @`),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"menuShow = true"'),s(`
      />`)]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-action-sheet"),s(),t("span",{class:"hljs-attr"},":actions"),s("="),t("span",{class:"hljs-string"},'"actions"'),s(),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"menuShow"'),s(" />")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-image-preview"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a[48]||(a[48]=t("h2",null,"API",-1)),t("div",L,[t("h3",D,[e(l,{to:"#Props"},{default:n(()=>[...a[28]||(a[28]=[s("#",-1)])]),_:1}),a[29]||(a[29]=s("Props",-1))]),a[30]||(a[30]=o("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>Whether or display</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>images</code></td><td>Need to preview the image URL</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td><code>initial-index</code></td><td>Index from which the image preview starts</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>zoom</code></td><td>Double-click to zoom in</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>Whether to show the close button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>close-on-key-escape</code></td><td>Whether to support keyboard ESC to close the image-preview</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>loop</code></td><td>Whether to open loop playback</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>Whether to show paging</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lock-scroll</code></td><td>Lock scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>The location of the pop-up layer to mount</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>body</code></td></tr><tr><td><code>image-prevent-default</code></td><td>Whether to disable the default behavior of images</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>",1))]),t("div",B,[t("h3",O,[e(l,{to:"#Events"},{default:n(()=>[...a[31]||(a[31]=[s("#",-1)])]),_:1}),a[32]||(a[32]=s("Events",-1))]),a[33]||(a[33]=o("<table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>The callback function when switching images, the callback parameter is the current index</td><td><code>index: number</code> Image indexing</td></tr><tr><td><code>open</code></td><td>Triggered when Image-Preview is turned on</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered at the end of the open image-preview animation</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Triggered when Image-Preview is off</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the animation that closes the image-preview ends</td><td><code>-</code></td></tr><tr><td><code>long-press</code></td><td>The callback function when long pressing an image, the callback parameter is the current index</td><td><code>index: number</code> Image indexing</td></tr><tr><td><code>key-escape</code></td><td>Triggered when click keyboard ESC</td><td><code>-</code></td></tr></tbody></table>",1))]),t("div",U,[t("h3",W,[e(l,{to:"#Methods"},{default:n(()=>[...a[34]||(a[34]=[s("#",-1)])]),_:1}),a[35]||(a[35]=s("Methods",-1))]),a[36]||(a[36]=o("<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>ImagePreview</code></td><td>Open image-preview</td><td><em>options | string | string[]</em></td><td><code>-</code></td></tr><tr><td><code>ImagePreview.close</code></td><td>Close image-preview</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>ImagePreview.setDefaultOptions</code></td><td>Set default option configuration</td><td><em>options</em></td><td><code>-</code></td></tr><tr><td><code>ImagePreview.resetDefaultOptions</code></td><td>Reset default option configuration</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>prev</code></td><td>Previous page</td><td><code>options?: SwipeToOptions</code></td><td><code>-</code></td></tr><tr><td><code>next</code></td><td>Next page</td><td><code>options?: SwipeToOptions</code></td><td><code>-</code></td></tr><tr><td><code>to</code></td><td>To index page</td><td><code>index: number, options?: SwipeToOptions</code></td><td><code>-</code></td></tr><tr><td><code>zoom</code></td><td>Enlarge or reduce the picture</td><td><code>ratio: number</code></td><td><code>-</code></td></tr></tbody></table>",1))]),t("div",z,[t("h3",F,[e(l,{to:"#Slots"},{default:n(()=>[...a[37]||(a[37]=[s("#",-1)])]),_:1}),a[38]||(a[38]=s("Slots",-1))]),a[39]||(a[39]=o("<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>indicator</code></td><td>Paging indicator</td><td><code>index: number</code> Image indexing <br> <code>length: number</code> Total number of image</td></tr><tr><td><code>close-icon</code></td><td>Close button</td><td><code>-</code></td></tr><tr><td><code>extra</code></td><td>Extra slots</td><td><code>-</code></td></tr></tbody></table>",1))]),t("div",V,[t("h3",N,[e(l,{to:"#ImagePreviewOptions"},{default:n(()=>[...a[40]||(a[40]=[s("#",-1)])]),_:1}),a[41]||(a[41]=s("ImagePreview Options",-1))]),a[42]||(a[42]=o("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>images</code></td><td>The image URL array or the URL of a single image to be previewed</td><td><em>string[] | string</em></td><td><code>[]</code></td></tr><tr><td><code>initialIndex</code></td><td>Index from which the image preview starts</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>zoom</code></td><td>Double-click to zoom in</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>Whether to show the close button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>closeOnKeyEscape</code></td><td>Whether to support keyboard ESC to close the image-preview</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>loop</code></td><td>Whether to open loop playback</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>Whether to show paging</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lockScroll</code></td><td>Lock scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>imagePreventDefault</code></td><td>Whether to disable the default behavior of images</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onChange</code></td><td>The callback function when switching images, the callback parameter is the current index</td><td><em>(index: number) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>Callback when image-preview is turned on</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Callback at the end of the animation that opened image-preview</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Callback when image-preview is closed</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Callback at the end of the animation that closes the image-preview</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onLongPress</code></td><td>The callback function when long pressing an image, the callback parameter is the current index</td><td><em>(index: number) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onKeyEscape</code></td><td>Triggered when click keyboard ESC</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table>",1))]),t("div",R,[t("h3",$,[e(l,{to:"#StyleVariables"},{default:n(()=>[...a[43]||(a[43]=[s("#",-1)])]),_:1}),a[44]||(a[44]=s("Style Variables",-1))]),a[45]||(a[45]=o('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--image-preview-swipe-indicators-text-color</code></td><td><code>#ddd</code></td></tr><tr><td><code>--image-preview-swipe-indicators-padding</code></td><td><code>16px 0</code></td></tr><tr><td><code>--image-preview-zoom-container-background</code></td><td><code>#000</code></td></tr><tr><td><code>--image-preview-close-icon-top</code></td><td><code>14px</code></td></tr><tr><td><code>--image-preview-close-icon-right</code></td><td><code>14px</code></td></tr><tr><td><code>--image-preview-close-icon-size</code></td><td><code>22px</code></td></tr><tr><td><code>--image-preview-close-icon-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--image-preview-extra-top</code></td><td><code>14px</code></td></tr><tr><td><code>--image-preview-extra-left</code></td><td><code>14px</code></td></tr></tbody></table>',2))])])}const J=c(h,[["render",M]]);export{J as default};
