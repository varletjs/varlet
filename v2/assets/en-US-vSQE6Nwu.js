import{_ as o,b as d,e as r,m as h,p as t,q as a,w as e,P as s,Z as c}from"./index-vwO9GBzB.js";const i={components:{}},p={class:"varlet-site-doc"},j=t("h1",null,"ImagePreview",-1),g={class:"card"},m={id:"Intro"},u=t("p",null,"Image-Preview, Support double-click magnification, Support function call and component call two ways.",-1),v={class:"card"},w={id:"FunctionCall"},_=t("h4",null,"Basic Usage",-1),b=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ImagePreview } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"preview"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  ImagePreview(`),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat.jpg'"),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"preview"'),s(">")]),s("Basic Use"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),f=t("h4",null,"Call Back",-1),k=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ImagePreview } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"preview"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  ImagePreview({
    `),t("span",{class:"hljs-attr"},"images"),s(`: [
      `),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat.jpg'"),s(`,
      `),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat2.jpg'"),s(`
    ],
    `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"onChange"),s("("),t("span",{class:"hljs-params"},"index"),s(")")]),s(` {
      `),t("span",{class:"hljs-built_in"},"console"),s(`.log(index)
    }
  })
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"preview"'),s(">")]),s("Handle callback function"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y=t("h2",null,"Component Call",-1),x={class:"card"},S={id:"BasicUse"},P=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat.jpg'"),s(`,
  `),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat2.jpg'"),s(`,
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
`)])],-1),I={class:"card"},C={id:"SpecifyInitialPosition"},T=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat.jpg'"),s(`,
  `),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat2.jpg'"),s(`,
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
`)])],-1),L={class:"card"},D={id:"DisplayTheCloseButton"},E=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat.jpg'"),s(`,
  `),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat2.jpg'"),s(`,
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
`)])],-1),B={class:"card"},O={id:"ListenForCloseEvent"},U=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat.jpg'"),s(`,
  `),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat2.jpg'"),s(`,
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
`)])],-1),z={class:"card"},F={id:"ListenForLongPressEvent"},W=t("p",null,[s("The "),t("code",null,"image-prevent-default"),s(" attribute prohibits the default behavior of images, and the "),t("code",null,"long-press"),s(" event can be customized to achieve long press requirements.")],-1),V=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat.jpg'"),s(`,
  `),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat2.jpg'"),s(`,
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
`)])],-1),N={class:"card"},R={id:"ShowExtraSlots"},M=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(" menuShow = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat.jpg'"),s(`,
  `),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat2.jpg'"),s(`,
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
`)])],-1),$=t("h2",null,"API",-1),A={class:"card"},q={id:"Props"},H=c("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>show</code></td><td>Whether or display</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>images</code></td><td>Need to preview the image URL</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td><code>initial-index</code></td><td>Index from which the image preview starts</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>zoom</code></td><td>Double-click to zoom in</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>Whether to show the close button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loop</code></td><td>Whether to open loop playback</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>Whether to show paging</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lock-scroll</code></td><td>Lock scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>The location of the pop-up layer to mount</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>body</code></td></tr><tr><td><code>image-prevent-default</code></td><td>Whether to disable the default behavior of images</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>",1),Z={class:"card"},G={id:"Events"},J=c("<table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>The callback function when switching images, the callback parameter is the current index</td><td><code>index: number</code> Image indexing</td></tr><tr><td><code>open</code></td><td>Triggered when Image-Preview is turned on</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered at the end of the open image-preview animation</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Triggered when Image-Preview is off</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the animation that closes the image-preview ends</td><td><code>-</code></td></tr><tr><td><code>long-press</code></td><td>The callback function when long pressing an image, the callback parameter is the current index</td><td><code>index: number</code> Image indexing</td></tr></tbody></table>",1),K={class:"card"},Q={id:"Methods"},X=c("<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>ImagePreview</code></td><td>Open image-preview</td><td><em>options | string | string[]</em></td><td><code>-</code></td></tr><tr><td><code>ImagePreview.close</code></td><td>Close image-preview</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>ImagePreview.setDefaultOptions</code></td><td>Set default option configuration</td><td><em>options</em></td><td><code>-</code></td></tr><tr><td><code>ImagePreview.resetDefaultOptions</code></td><td>Reset default option configuration</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>prev</code></td><td>Previous page</td><td><code>options?: SwipeToOptions</code></td><td><code>-</code></td></tr><tr><td><code>next</code></td><td>Next page</td><td><code>options?: SwipeToOptions</code></td><td><code>-</code></td></tr><tr><td><code>to</code></td><td>To index page</td><td><code>index: number, options?: SwipeToOptions</code></td><td><code>-</code></td></tr><tr><td><code>zoom</code></td><td>Enlarge or reduce the picture</td><td><code>ratio: number</code></td><td><code>-</code></td></tr></tbody></table>",1),Y={class:"card"},ss={id:"Slots"},ts=c("<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>indicator</code></td><td>Paging indicator</td><td><code>index: number</code> Image indexing <br> <code>length: number</code> Total number of image</td></tr><tr><td><code>close-icon</code></td><td>Close button</td><td><code>-</code></td></tr><tr><td><code>extra</code></td><td>Extra slots</td><td><code>-</code></td></tr></tbody></table>",1),as={class:"card"},es={id:"ImagePreviewOptions"},ns=c("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>images</code></td><td>The image URL array or the URL of a single image to be previewed</td><td><em>string[] | string</em></td><td><code>[]</code></td></tr><tr><td><code>initialIndex</code></td><td>Index from which the image preview starts</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>zoom</code></td><td>Double-click to zoom in</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>Whether to show the close button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loop</code></td><td>Whether to open loop playback</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>Whether to show paging</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lockScroll</code></td><td>Lock scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>imagePreventDefault</code></td><td>Whether to disable the default behavior of images</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onChange</code></td><td>The callback function when switching images, the callback parameter is the current index</td><td><em>(index: number) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>Callback when image-preview is turned on</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Callback at the end of the animation that opened image-preview</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Callback when image-preview is closed</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Callback at the end of the animation that closes the image-preview</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onLongPress</code></td><td>The callback function when long pressing an image, the callback parameter is the current index</td><td><em>(index: number) =&gt; void</em></td><td><code>-</code></td></tr></tbody></table>",1),ls={class:"card"},cs={id:"StyleVariables"},ds=c('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--image-preview-swipe-indicators-text-color</code></td><td><code>#ddd</code></td></tr><tr><td><code>--image-preview-swipe-indicators-padding</code></td><td><code>16px 0</code></td></tr><tr><td><code>--image-preview-zoom-container-background</code></td><td><code>#000</code></td></tr><tr><td><code>--image-preview-close-icon-top</code></td><td><code>14px</code></td></tr><tr><td><code>--image-preview-close-icon-right</code></td><td><code>14px</code></td></tr><tr><td><code>--image-preview-close-icon-size</code></td><td><code>22px</code></td></tr><tr><td><code>--image-preview-close-icon-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--image-preview-extra-top</code></td><td><code>14px</code></td></tr><tr><td><code>--image-preview-extra-left</code></td><td><code>14px</code></td></tr></tbody></table>',2);function os(rs,hs,is,ps,js,gs){const n=d("router-link"),l=d("var-site-code-example");return r(),h("div",p,[j,t("div",g,[t("h3",m,[a(n,{to:"#Intro"},{default:e(()=>[s("#")]),_:1}),s("Intro")]),u]),t("div",v,[t("h3",w,[a(n,{to:"#FunctionCall"},{default:e(()=>[s("#")]),_:1}),s("Function Call")]),_,a(l,null,{default:e(()=>[b]),_:1}),f,a(l,null,{default:e(()=>[k]),_:1})]),y,t("div",x,[t("h3",S,[a(n,{to:"#BasicUse"},{default:e(()=>[s("#")]),_:1}),s("Basic Use")]),a(l,null,{default:e(()=>[P]),_:1})]),t("div",I,[t("h3",C,[a(n,{to:"#SpecifyInitialPosition"},{default:e(()=>[s("#")]),_:1}),s("Specify Initial Position")]),a(l,null,{default:e(()=>[T]),_:1})]),t("div",L,[t("h3",D,[a(n,{to:"#DisplayTheCloseButton"},{default:e(()=>[s("#")]),_:1}),s("Display The Close Button")]),a(l,null,{default:e(()=>[E]),_:1})]),t("div",B,[t("h3",O,[a(n,{to:"#ListenForCloseEvent"},{default:e(()=>[s("#")]),_:1}),s("Listen For Close Event")]),a(l,null,{default:e(()=>[U]),_:1})]),t("div",z,[t("h3",F,[a(n,{to:"#ListenForLongPressEvent"},{default:e(()=>[s("#")]),_:1}),s("Listen For Long Press Event")]),W,a(l,null,{default:e(()=>[V]),_:1})]),t("div",N,[t("h3",R,[a(n,{to:"#ShowExtraSlots"},{default:e(()=>[s("#")]),_:1}),s("Show Extra Slots")]),a(l,null,{default:e(()=>[M]),_:1})]),$,t("div",A,[t("h3",q,[a(n,{to:"#Props"},{default:e(()=>[s("#")]),_:1}),s("Props")]),H]),t("div",Z,[t("h3",G,[a(n,{to:"#Events"},{default:e(()=>[s("#")]),_:1}),s("Events")]),J]),t("div",K,[t("h3",Q,[a(n,{to:"#Methods"},{default:e(()=>[s("#")]),_:1}),s("Methods")]),X]),t("div",Y,[t("h3",ss,[a(n,{to:"#Slots"},{default:e(()=>[s("#")]),_:1}),s("Slots")]),ts]),t("div",as,[t("h3",es,[a(n,{to:"#ImagePreviewOptions"},{default:e(()=>[s("#")]),_:1}),s("ImagePreview Options")]),ns]),t("div",ls,[t("h3",cs,[a(n,{to:"#StyleVariables"},{default:e(()=>[s("#")]),_:1}),s("Style Variables")]),ds])])}const us=o(i,[["render",os]]);export{us as default};
