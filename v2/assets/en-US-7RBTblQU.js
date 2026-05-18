import{_ as o,b as c,e as r,m as i,p as t,q as a,w as e,P as s,Z as d}from"./index-vwO9GBzB.js";const p={components:{}},h={class:"varlet-site-doc"},j=t("h1",null,"Uploader",-1),u={class:"card"},g={id:"Intro"},m=t("p",null,[s("It provides the ability to read files and preview pictures and videos. Get the file upload server by listening for "),t("code",null,"after-read"),s(" events.")],-1),f={class:"card"},v={id:"BasicUsage"},_=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([])

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleAfterRead"),s("("),t("span",{class:"hljs-params"},"file"),s(") ")]),s(`{
  `),t("span",{class:"hljs-built_in"},"console"),s(`.log(file)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(" @"),t("span",{class:"hljs-attr"},"after-read"),s("="),t("span",{class:"hljs-string"},'"handleAfterRead"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),b={class:"card"},y={id:"FilePreview"},w=t("p",null,"By analyzing the file URL suffix name to determine the file type, support image and video preview.",-1),k=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat.jpg'"),s(`
  },
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://www.runoob.com/try/demo_source/mov_bbb.mp4'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cover.jpg'"),s(`
  }
])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),F={class:"card"},x={id:"CustomPreview"},V=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Dialog } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat.jpg'"),s(`
  }
])

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handlePreview"),s("("),t("span",{class:"hljs-params"},"file"),s(") ")]),s(`{
  Dialog({
    `),t("span",{class:"hljs-attr"},"title"),s(": "),t("span",{class:"hljs-string"},"'Custom Preview'"),s(`,
    `),t("span",{class:"hljs-attr"},"message"),s(": file.url.slice("),t("span",{class:"hljs-number"},"0"),s(", "),t("span",{class:"hljs-number"},"100"),s(`),
  })
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(),t("span",{class:"hljs-attr"},"prevent-default-preview"),s(" @"),t("span",{class:"hljs-attr"},"preview"),s("="),t("span",{class:"hljs-string"},'"handlePreview"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),S={class:"card"},U={id:"UploadState"},P=t("p",null,[s("Three uploading states, "),t("code",null,"loading"),s(", "),t("code",null,"success"),s(" and "),t("code",null,"error"),s(", are provided, and tool functions are provided to quickly obtain files with corresponding states.")],-1),R=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"state"),s(": "),t("span",{class:"hljs-string"},"'loading'"),s(`
  },
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"state"),s(": "),t("span",{class:"hljs-string"},"'success'"),s(`
  },
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"state"),s(": "),t("span",{class:"hljs-string"},"'error'"),s(`
  }
])

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleAfterRead"),s("("),t("span",{class:"hljs-params"},"file"),s(") ")]),s(`{
  file.state = `),t("span",{class:"hljs-string"},"'loading'"),s(`

  `),t("span",{class:"hljs-built_in"},"setTimeout"),s("("),t("span",{class:"hljs-function"},"() =>"),s(` {
    file.state = `),t("span",{class:"hljs-string"},"'success'"),s(`
  }, `),t("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(" @"),t("span",{class:"hljs-attr"},"after-read"),s("="),t("span",{class:"hljs-string"},'"handleAfterRead"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),C={class:"card"},T={id:"UseProgress"},z=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref, onUnmounted } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([])
`),t("span",{class:"hljs-keyword"},"let"),s(` timer

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleAfterRead"),s("("),t("span",{class:"hljs-params"},"file"),s(") ")]),s(`{
  file.state = `),t("span",{class:"hljs-string"},"'loading'"),s(`

  timer = `),t("span",{class:"hljs-built_in"},"window"),s(".setInterval("),t("span",{class:"hljs-function"},"() =>"),s(` {
    `),t("span",{class:"hljs-keyword"},"if"),s(" (file.progress === "),t("span",{class:"hljs-number"},"100"),s(`) {
      `),t("span",{class:"hljs-built_in"},"window"),s(`.clearInterval(timer)
      file.state = `),t("span",{class:"hljs-string"},"'success'"),s(`
      `),t("span",{class:"hljs-keyword"},"return"),s(`
    }

    file.progress += `),t("span",{class:"hljs-number"},"10"),s(`
  }, `),t("span",{class:"hljs-number"},"250"),s(`)
}

onUnmounted(`),t("span",{class:"hljs-function"},"() =>"),s(` {
  `),t("span",{class:"hljs-built_in"},"window"),s(`.clearInterval(timer)
})
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(" @"),t("span",{class:"hljs-attr"},"after-read"),s("="),t("span",{class:"hljs-string"},'"handleAfterRead"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),B={class:"card"},D={id:"FileMaxlength"},A=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(),t("span",{class:"hljs-attr"},":maxlength"),s("="),t("span",{class:"hljs-string"},'"1"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),E={class:"card"},L={id:"FileSizeLimit"},M=t("p",null,[s("If the limit is exceeded, the file will be blocked. You can get the file by listening for the "),t("code",null,"oversize"),s(" event.")],-1),I=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(),t("span",{class:"hljs-attr"},":maxsize"),s("="),t("span",{class:"hljs-string"},'"1024"'),s(" @"),t("span",{class:"hljs-attr"},"oversize"),s("="),t("span",{class:"hljs-string"},`"Snackbar.warning('file size exceeds limit')"`),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),G={class:"card"},W={id:"FileListFilter"},N=t("p",null,[s("Filter files through the "),t("code",null,"before-filter"),s(" event, and return a "),t("code",null,"VarFile"),s(" array after filtering.")],-1),O=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([])

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleBeforeFilter"),s("("),t("span",{class:"hljs-params"},"files"),s(") ")]),s(`{
  `),t("span",{class:"hljs-keyword"},"return"),s(" files.filter("),t("span",{class:"hljs-function"},[t("span",{class:"hljs-params"},"file"),s(" =>")]),s(" file.name.endsWith("),t("span",{class:"hljs-string"},"'png'"),s(`))
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(),t("span",{class:"hljs-attr"},"multiple"),s(" @"),t("span",{class:"hljs-attr"},"before-filter"),s("="),t("span",{class:"hljs-string"},'"handleBeforeFilter"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`

`)])],-1),$={class:"card"},q={id:"UploadPreprocessing"},Y=t("p",null,[s("Operate on a file by registering a "),t("code",null,"before-read"),s(" event that returns a false value to prevent the file from being read.")],-1),H=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([])

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleBeforeRead"),s("("),t("span",{class:"hljs-params"},"file"),s(") ")]),s(`{
  `),t("span",{class:"hljs-keyword"},"if"),s(" (file.file.size <= "),t("span",{class:"hljs-number"},"1"),s(" * "),t("span",{class:"hljs-number"},"1024"),s(" * "),t("span",{class:"hljs-number"},"1024"),s(`) {
    Snackbar.success(`),t("span",{class:"hljs-string"},"'the file is less than 1M, the upload is successful'"),s(`)
    `),t("span",{class:"hljs-keyword"},"return"),s(),t("span",{class:"hljs-literal"},"true"),s(`
  } `),t("span",{class:"hljs-keyword"},"else"),s(` {
    Snackbar.warning(`),t("span",{class:"hljs-string"},"'the file is larger than 1M and cannot be uploaded'"),s(`)
    `),t("span",{class:"hljs-keyword"},"return"),s(),t("span",{class:"hljs-literal"},"false"),s(`
  }
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(" @"),t("span",{class:"hljs-attr"},"before-read"),s("="),t("span",{class:"hljs-string"},'"handleBeforeRead"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),Z={class:"card"},J={id:"UploadButtonClickEvent"},K=t("p",null,[s("By listen the "),t("code",null,"click-action"),s(" event, you can intercept the click behavior of the upload button, and manually trigger the browser to select the file through the "),t("code",null,"chooseFile"),s(" method in the callback.")],-1),Q=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([])

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleClickAction"),s("("),t("span",{class:"hljs-params"},"chooseFile"),s(") ")]),s(`{
  Snackbar.loading(`),t("span",{class:"hljs-string"},"'delay 1s'"),s(`)

  `),t("span",{class:"hljs-built_in"},"window"),s(".setTimeout("),t("span",{class:"hljs-function"},"() =>"),s(` {
    Snackbar.clear()
    chooseFile()
  }, `),t("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(" @"),t("span",{class:"hljs-attr"},"click-action"),s("="),t("span",{class:"hljs-string"},'"handleClickAction"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),X={class:"card"},ss={id:"Disabled"},ts=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"disabled"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),as={class:"card"},es={id:"Readonly"},ls=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"readonly"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),ns={class:"card"},ds={id:"RemovePreprocessing"},cs=t("p",null,[s("Before deleting the file, the "),t("code",null,"before-remove"),s(" event is triggered, and a falsy value is returned to prevent the delete operation.")],-1),os=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Dialog } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat.jpg'"),s(`
  }
])

`),t("span",{class:"hljs-keyword"},"async"),s(),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleBeforeRemove"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),t("span",{class:"hljs-keyword"},"const"),s(" action = "),t("span",{class:"hljs-keyword"},"await"),s(` Dialog({
    `),t("span",{class:"hljs-attr"},"title"),s(": "),t("span",{class:"hljs-string"},"'Delete or not?'"),s(`,
    `),t("span",{class:"hljs-attr"},"message"),s(": "),t("span",{class:"hljs-string"},"'Cannot be withdrawn after deletion'"),s(`
  })

  `),t("span",{class:"hljs-keyword"},"return"),s(" action === "),t("span",{class:"hljs-string"},"'confirm'"),s(`
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(" @"),t("span",{class:"hljs-attr"},"before-remove"),s("="),t("span",{class:"hljs-string"},'"handleBeforeRemove"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),rs={class:"card"},is={id:"CustomizeUploadStyles"},ps=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref()
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("Upload"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-uploader"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),hs={class:"card"},js={id:"Validate"},us=t("p",null,[s("The values are validated by passing in an array of validator, If the validator returns "),t("code",null,"true"),s(", the validation passes. Other values are converted to text as a user prompt. The second argument is a collection of utility functions that can quickly get a collection of files that match the state.")],-1),gs=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"state"),s(": "),t("span",{class:"hljs-string"},"'error'"),s(`,
  },
])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(`
    `),t("span",{class:"hljs-attr"},":rules"),s("="),t("span",{class:"hljs-string"},`"[(v, u) => u.getError().length === 0 || 'There is a file that failed to upload']"`),s(`
    `),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),ms={class:"card"},fs={id:"CustomRenderFileList"},vs=t("p",null,[s("You can use the "),t("code",null,"hide-list"),s(" to hide component files list, then you can render this list by custom.")],-1),_s=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` files = ref([
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"state"),s(": "),t("span",{class:"hljs-string"},"'loading'"),s(`,
  },
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"state"),s(": "),t("span",{class:"hljs-string"},"'success'"),s(`,
  },
  {
    `),t("span",{class:"hljs-attr"},"url"),s(": "),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"cover"),s(": "),t("span",{class:"hljs-string"},"'https://varletjs.github.io/varlet/cat.jpg'"),s(`,
    `),t("span",{class:"hljs-attr"},"state"),s(": "),t("span",{class:"hljs-string"},"'error'"),s(`,
  },
])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"img"),s(`
      `),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"uploader-example-file"'),s(`
      `),t("span",{class:"hljs-attr"},"v-for"),s("="),t("span",{class:"hljs-string"},'"f in files"'),s(`
      `),t("span",{class:"hljs-attr"},":key"),s("="),t("span",{class:"hljs-string"},'"f.id"'),s(`
      `),t("span",{class:"hljs-attr"},":src"),s("="),t("span",{class:"hljs-string"},'"f.cover"'),s(`
    />`)]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-uploader"),s(),t("span",{class:"hljs-attr"},"hide-list"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"files"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"round"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},":size"),s("="),t("span",{class:"hljs-string"},'"28"'),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"upload"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-uploader"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"style"),s(">")]),t("span",{class:"css"},[s(`
`),t("span",{class:"hljs-selector-class"},".uploader-example-file"),s(` {
  `),t("span",{class:"hljs-attribute"},"width"),s(": "),t("span",{class:"hljs-number"},"40px"),s(`;
  `),t("span",{class:"hljs-attribute"},"height"),s(": "),t("span",{class:"hljs-number"},"40px"),s(`;
  `),t("span",{class:"hljs-attribute"},"border-radius"),s(": "),t("span",{class:"hljs-number"},"50%"),s(`;
  `),t("span",{class:"hljs-attribute"},"font-size"),s(": "),t("span",{class:"hljs-number"},"12px"),s(`;
  `),t("span",{class:"hljs-attribute"},"object-fit"),s(`: cover;
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),bs=t("h2",null,"API",-1),ys={class:"card"},ws={id:"Props"},ks=d("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>File list</td><td><em>VarFile[]</em></td><td><code>[]</code></td></tr><tr><td><code>accept</code></td><td>Accepted file type, consistent with the native attribute</td><td><em>string</em></td><td><code>image/*</code></td></tr><tr><td><code>capture</code></td><td>Get the file, the same as the native property</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>multiple</code></td><td>Whether to select multiple files</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>elevation</code></td><td>Elevation level, options <code>true</code> <code>false</code> and level of <code>0-24</code>, not in simple mode</td><td><em>string | number | boolean</em></td><td><code>true</code></td></tr><tr><td><code>removable</code></td><td>Whether the removable</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>maxlength</code></td><td>Maximum number of files</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>maxsize</code></td><td>Maximum file size</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>previewed</code></td><td>Whether to allow preview</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>prevent-default-preview</code></td><td>Prevent default preview behavior</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>Whether to open ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hide-list</code></td><td>Whether to hide the file list</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>resolve-type</code></td><td>The file preprocessing type, can be set to <code>default</code> <code>file</code> <code>data-url</code> (<code>default</code>, the image type contains dataURL and File object, other types contain only File object. <code>file</code>, which contains only File object. <code>data-url</code>, all file types contain dataURL and File object)</td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>validate-trigger</code></td><td>Timing to trigger validation. The optional value is <code>onChange</code> <code>onRemove</code></td><td><em>ValidateTriggers[]</em></td><td><code>[&#39;onChange&#39;, &#39;onRemove&#39;]</code></td></tr><tr><td><code>rules</code></td><td>The validation rules, return <code>true</code> to indicate that the validation passed. The remaining values are converted to text as user prompts</td><td><em>Array&lt;(v: VarFile, u: VarFileUtils) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table>",1),Fs={class:"card"},xs={id:"VarFile"},Vs=d("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>file</code></td><td>Native file</td><td><em>File</em></td><td><code>-</code></td></tr><tr><td><code>name</code></td><td>File name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>url</code></td><td>File url</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cover</code></td><td>File cover image</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>fit</code></td><td>Cover image fill mode, Optional value is <code>fill</code> <code>contain</code> <code>cover</code> <code>none</code> <code>scale-down</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>state</code></td><td>File upload state, Optional value is <code>loading</code> <code>success</code> <code>error</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>state</code></td><td>File upload progress, range [0, 100]</td><td><em>number</em></td><td><code>-</code></td></tr></tbody></table>",1),Ss={class:"card"},Us={id:"VarFileUtils"},Ps=d("<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>getLoading</code></td><td>Gets a collection of files for <code>state</code> is <code>loading</code></td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>Gets a collection of files for <code>state</code> is <code>success</code></td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>Gets a collection of files for <code>state</code> is <code>error</code></td><td><code>-</code></td><td><code>VarFile[]</code></td></tr></tbody></table>",1),Rs={class:"card"},Cs={id:"Methods"},Ts=d("<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>chooseFile</code></td><td>Trigger the file selection action and display the file list</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>closePreview</code></td><td>Close preview file popup</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>getLoading</code></td><td>Gets a collection of files for <code>state</code> is <code>loading</code></td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>Gets a collection of files for <code>state</code> is <code>success</code></td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>Gets a collection of files for <code>state</code> is <code>error</code></td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clearing validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding(set to <code>[]</code>)and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>",1),zs={class:"card"},Bs={id:"Events"},Ds=d("<table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>before-filter</code></td><td>Triggered before the event <code>before-read</code> to filter the file list</td><td><code>files: VarFile[]</code></td></tr><tr><td><code>before-read</code></td><td>Triggered returns a false value before a file is read to prevent the file from being read(support promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>after-read</code></td><td>Triggered after the file is read</td><td><code>file: VarFile</code></td></tr><tr><td><code>oversize</code></td><td>Triggered when the file size limit is exceeded</td><td><code>file: VarFile</code></td></tr><tr><td><code>before-remove</code></td><td>Triggered before file deletion, return false value to prevent file deletion (support promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>remove</code></td><td>Triggered when deleting a file. There is a true value to prevent deleting a file (support promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>preview</code></td><td>Triggered when a file is previewed</td><td><code>file: VarFile</code></td></tr><tr><td><code>click-action</code></td><td>Intercept click behavior of upload button</td><td><code>chooseFile: () =&gt; void, event: Event</code></td></tr></tbody></table>",1),As={class:"card"},Es={id:"Slots"},Ls=d("<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Upload action content</td><td><code>-</code></td></tr><tr><td><code>extra-message</code></td><td>Extra message</td><td><code>-</code></td></tr></tbody></table>",1),Ms={class:"card"},Is={id:"StyleVariables"},Gs=d('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--uploader-action-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-action-icon-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-action-icon-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-action-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-size</code></td><td><code>80px</code></td></tr><tr><td><code>--uploader-file-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-name-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-file-name-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-file-name-font-size</code></td><td><code>12px</code></td></tr><tr><td><code>--uploader-file-name-padding</code></td><td><code>10px</code></td></tr><tr><td><code>--uploader-file-text-align</code></td><td><code>center</code></td></tr><tr><td><code>--uploader-file-close-background</code></td><td><code>rgba(0, 0, 0, 0.3)</code></td></tr><tr><td><code>--uploader-file-close-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-file-close-icon-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--uploader-file-close-icon-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--uploader-file-cover-fit</code></td><td><code>cover</code></td></tr><tr><td><code>--uploader-file-cover-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-preview-video-width</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-preview-video-height</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-file-indicator-height</code></td><td><code>4px</code></td></tr><tr><td><code>--uploader-file-indicator-normal-color</code></td><td><code>var(--color-disabled)</code></td></tr><tr><td><code>--uploader-file-indicator-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--uploader-file-indicator-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--uploader-file-progress-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--uploader-disabled-color</code></td><td><code>#ddd</code></td></tr><tr><td><code>--uploader-disabled-text-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--uploader-loading-background</code></td><td><code>linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))</code></td></tr></tbody></table>',2);function Ws(Ns,Os,$s,qs,Ys,Hs){const l=c("router-link"),n=c("var-site-code-example");return r(),i("div",h,[j,t("div",u,[t("h3",g,[a(l,{to:"#Intro"},{default:e(()=>[s("#")]),_:1}),s("Intro")]),m]),t("div",f,[t("h3",v,[a(l,{to:"#BasicUsage"},{default:e(()=>[s("#")]),_:1}),s("Basic Usage")]),a(n,null,{default:e(()=>[_]),_:1})]),t("div",b,[t("h3",y,[a(l,{to:"#FilePreview"},{default:e(()=>[s("#")]),_:1}),s("File Preview")]),w,a(n,null,{default:e(()=>[k]),_:1})]),t("div",F,[t("h3",x,[a(l,{to:"#CustomPreview"},{default:e(()=>[s("#")]),_:1}),s("Custom Preview")]),a(n,null,{default:e(()=>[V]),_:1})]),t("div",S,[t("h3",U,[a(l,{to:"#UploadState"},{default:e(()=>[s("#")]),_:1}),s("Upload State")]),P,a(n,null,{default:e(()=>[R]),_:1})]),t("div",C,[t("h3",T,[a(l,{to:"#UseProgress"},{default:e(()=>[s("#")]),_:1}),s("Use Progress")]),a(n,null,{default:e(()=>[z]),_:1})]),t("div",B,[t("h3",D,[a(l,{to:"#FileMaxlength"},{default:e(()=>[s("#")]),_:1}),s("File Maxlength")]),a(n,null,{default:e(()=>[A]),_:1})]),t("div",E,[t("h3",L,[a(l,{to:"#FileSizeLimit"},{default:e(()=>[s("#")]),_:1}),s("File Size Limit")]),M,a(n,null,{default:e(()=>[I]),_:1})]),t("div",G,[t("h3",W,[a(l,{to:"#FileListFilter"},{default:e(()=>[s("#")]),_:1}),s("File List Filter")]),N,a(n,null,{default:e(()=>[O]),_:1})]),t("div",$,[t("h3",q,[a(l,{to:"#UploadPreprocessing"},{default:e(()=>[s("#")]),_:1}),s("Upload Preprocessing")]),Y,a(n,null,{default:e(()=>[H]),_:1})]),t("div",Z,[t("h3",J,[a(l,{to:"#UploadButtonClickEvent"},{default:e(()=>[s("#")]),_:1}),s("Upload Button Click Event")]),K,a(n,null,{default:e(()=>[Q]),_:1})]),t("div",X,[t("h3",ss,[a(l,{to:"#Disabled"},{default:e(()=>[s("#")]),_:1}),s("Disabled")]),a(n,null,{default:e(()=>[ts]),_:1})]),t("div",as,[t("h3",es,[a(l,{to:"#Readonly"},{default:e(()=>[s("#")]),_:1}),s("Readonly")]),a(n,null,{default:e(()=>[ls]),_:1})]),t("div",ns,[t("h3",ds,[a(l,{to:"#RemovePreprocessing"},{default:e(()=>[s("#")]),_:1}),s("Remove Preprocessing")]),cs,a(n,null,{default:e(()=>[os]),_:1})]),t("div",rs,[t("h3",is,[a(l,{to:"#CustomizeUploadStyles"},{default:e(()=>[s("#")]),_:1}),s("Customize Upload Styles")]),a(n,null,{default:e(()=>[ps]),_:1})]),t("div",hs,[t("h3",js,[a(l,{to:"#Validate"},{default:e(()=>[s("#")]),_:1}),s("Validate")]),us,a(n,null,{default:e(()=>[gs]),_:1})]),t("div",ms,[t("h3",fs,[a(l,{to:"#CustomRenderFileList"},{default:e(()=>[s("#")]),_:1}),s("Custom Render File List")]),vs,a(n,null,{default:e(()=>[_s]),_:1})]),bs,t("div",ys,[t("h3",ws,[a(l,{to:"#Props"},{default:e(()=>[s("#")]),_:1}),s("Props")]),ks]),t("div",Fs,[t("h3",xs,[a(l,{to:"#VarFile"},{default:e(()=>[s("#")]),_:1}),s("VarFile")]),Vs]),t("div",Ss,[t("h3",Us,[a(l,{to:"#VarFileUtils"},{default:e(()=>[s("#")]),_:1}),s("VarFileUtils")]),Ps]),t("div",Rs,[t("h3",Cs,[a(l,{to:"#Methods"},{default:e(()=>[s("#")]),_:1}),s("Methods")]),Ts]),t("div",zs,[t("h3",Bs,[a(l,{to:"#Events"},{default:e(()=>[s("#")]),_:1}),s("Events")]),Ds]),t("div",As,[t("h3",Es,[a(l,{to:"#Slots"},{default:e(()=>[s("#")]),_:1}),s("Slots")]),Ls]),t("div",Ms,[t("h3",Is,[a(l,{to:"#StyleVariables"},{default:e(()=>[s("#")]),_:1}),s("Style Variables")]),Gs])])}const Js=o(p,[["render",Ws]]);export{Js as default};
