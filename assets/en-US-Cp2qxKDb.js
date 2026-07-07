import{G as e,L as t,N as ee,c as n,d as te,g as r,h as i,m as a}from"./runtime-core.esm-bundler-5xw830oL.js";import{t as ne}from"./_plugin-vue_export-helper-DAAOZMkq.js";var o={components:{}},s={class:`varlet-site-doc`},c={class:`card`},l={id:`Intro`},u={class:`card`},d={id:`BasicUsage`},f={class:`card`},p={id:`FilePreview`},m={class:`card`},h={id:`CustomPreview`},g={class:`card`},_={id:`UploadState`},v={class:`card`},y={id:`UseProgress`},b={class:`card`},x={id:`FileMaxlength`},S={class:`card`},C={id:`FileSizeLimit`},w={class:`card`},T={id:`FileListFilter`},E={class:`card`},D={id:`UploadPreprocessing`},O={class:`card`},k={id:`UploadButtonClickEvent`},A={class:`card`},j={id:`Disabled`},M={class:`card`},N={id:`Readonly`},P={class:`card`},re={id:`RemovePreprocessing`},F={class:`card`},I={id:`CustomizeUploadStyles`},L={class:`card`},R={id:`Validate`},z={class:`card`},B={id:`ValidatewithZod`},V={class:`card`},H={id:`CustomRenderFileList`},U={class:`card`},W={id:`CustomRemoveButton`},G={class:`card`},K={id:`Props`},q={class:`card`},J={id:`VarFile`},Y={class:`card`},X={id:`VarFileUtils`},ie={class:`card`},ae={id:`Methods`},oe={class:`card`},se={id:`Events`},ce={class:`card`},Z={id:`Slots`},le={class:`card`},ue={id:`StyleVariables`};function de(ne,o,de,fe,pe,me){let Q=t(`router-link`),$=t(`var-site-code-example`);return ee(),te(`div`,s,[o[87]||=n(`h1`,null,`Uploader`,-1),n(`div`,c,[n(`h3`,l,[r(Q,{to:`#Intro`},{default:e(()=>[...o[0]||=[i(`#`,-1)]]),_:1}),o[1]||=i(`Intro`,-1)]),o[2]||=n(`p`,null,[i(`It provides the ability to read files and preview pictures and videos. Get the file upload server by listening for `),n(`code`,null,`after-read`),i(` events.`)],-1)]),n(`div`,u,[n(`h3`,d,[r(Q,{to:`#BasicUsage`},{default:e(()=>[...o[3]||=[i(`#`,-1)]]),_:1}),o[4]||=i(`Basic Usage`,-1)]),r($,null,{default:e(()=>[...o[5]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` files = ref([])

`),n(`span`,{class:`hljs-function`},[n(`span`,{class:`hljs-keyword`},`function`),i(),n(`span`,{class:`hljs-title`},`handleAfterRead`),i(`(`),n(`span`,{class:`hljs-params`},`file`),i(`) `)]),i(`{
  `),n(`span`,{class:`hljs-built_in`},`console`),i(`.log(file)
}
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-uploader`),i(),n(`span`,{class:`hljs-attr`},`v-model`),i(`=`),n(`span`,{class:`hljs-string`},`"files"`),i(` @`),n(`span`,{class:`hljs-attr`},`after-read`),i(`=`),n(`span`,{class:`hljs-string`},`"handleAfterRead"`),i(`/>`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,f,[n(`h3`,p,[r(Q,{to:`#FilePreview`},{default:e(()=>[...o[6]||=[i(`#`,-1)]]),_:1}),o[7]||=i(`File Preview`,-1)]),o[9]||=n(`p`,null,`By analyzing the file URL suffix name to determine the file type, support image and video preview.`,-1),r($,null,{default:e(()=>[...o[8]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` files = ref([
  {
    `),n(`span`,{class:`hljs-attr`},`url`),i(`: `),n(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`cover`),i(`: `),n(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),i(`
  },
  {
    `),n(`span`,{class:`hljs-attr`},`url`),i(`: `),n(`span`,{class:`hljs-string`},`'https://www.runoob.com/try/demo_source/mov_bbb.mp4'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`cover`),i(`: `),n(`span`,{class:`hljs-string`},`'https://varletjs.org/cover.jpg'`),i(`
  }
])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-uploader`),i(),n(`span`,{class:`hljs-attr`},`v-model`),i(`=`),n(`span`,{class:`hljs-string`},`"files"`),i(`/>`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,m,[n(`h3`,h,[r(Q,{to:`#CustomPreview`},{default:e(()=>[...o[10]||=[i(`#`,-1)]]),_:1}),o[11]||=i(`Custom Preview`,-1)]),r($,null,{default:e(()=>[...o[12]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { Dialog } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'@varlet/ui'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` files = ref([
  {
    `),n(`span`,{class:`hljs-attr`},`url`),i(`: `),n(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`cover`),i(`: `),n(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),i(`
  }
])

`),n(`span`,{class:`hljs-function`},[n(`span`,{class:`hljs-keyword`},`function`),i(),n(`span`,{class:`hljs-title`},`handlePreview`),i(`(`),n(`span`,{class:`hljs-params`},`file`),i(`) `)]),i(`{
  Dialog({
    `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Custom Preview'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`message`),i(`: file.url.slice(`),n(`span`,{class:`hljs-number`},`0`),i(`, `),n(`span`,{class:`hljs-number`},`100`),i(`),
  })
}
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-uploader`),i(),n(`span`,{class:`hljs-attr`},`v-model`),i(`=`),n(`span`,{class:`hljs-string`},`"files"`),i(),n(`span`,{class:`hljs-attr`},`prevent-default-preview`),i(` @`),n(`span`,{class:`hljs-attr`},`preview`),i(`=`),n(`span`,{class:`hljs-string`},`"handlePreview"`),i(`/>`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,g,[n(`h3`,_,[r(Q,{to:`#UploadState`},{default:e(()=>[...o[13]||=[i(`#`,-1)]]),_:1}),o[14]||=i(`Upload State`,-1)]),o[16]||=n(`p`,null,[i(`Three uploading states, `),n(`code`,null,`loading`),i(`, `),n(`code`,null,`success`),i(` and `),n(`code`,null,`error`),i(`, are provided, and tool functions are provided to quickly obtain files with corresponding states.`)],-1),r($,null,{default:e(()=>[...o[15]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` files = ref([
  {
    `),n(`span`,{class:`hljs-attr`},`url`),i(`: `),n(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`cover`),i(`: `),n(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`state`),i(`: `),n(`span`,{class:`hljs-string`},`'loading'`),i(`
  },
  {
    `),n(`span`,{class:`hljs-attr`},`url`),i(`: `),n(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`cover`),i(`: `),n(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`state`),i(`: `),n(`span`,{class:`hljs-string`},`'success'`),i(`
  },
  {
    `),n(`span`,{class:`hljs-attr`},`url`),i(`: `),n(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`cover`),i(`: `),n(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`state`),i(`: `),n(`span`,{class:`hljs-string`},`'error'`),i(`
  }
])

`),n(`span`,{class:`hljs-function`},[n(`span`,{class:`hljs-keyword`},`function`),i(),n(`span`,{class:`hljs-title`},`handleAfterRead`),i(`(`),n(`span`,{class:`hljs-params`},`file`),i(`) `)]),i(`{
  file.state = `),n(`span`,{class:`hljs-string`},`'loading'`),i(`

  `),n(`span`,{class:`hljs-built_in`},`setTimeout`),i(`(`),n(`span`,{class:`hljs-function`},`() =>`),i(` {
    file.state = `),n(`span`,{class:`hljs-string`},`'success'`),i(`
  }, `),n(`span`,{class:`hljs-number`},`1000`),i(`)
}
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-uploader`),i(),n(`span`,{class:`hljs-attr`},`v-model`),i(`=`),n(`span`,{class:`hljs-string`},`"files"`),i(` @`),n(`span`,{class:`hljs-attr`},`after-read`),i(`=`),n(`span`,{class:`hljs-string`},`"handleAfterRead"`),i(`/>`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,v,[n(`h3`,y,[r(Q,{to:`#UseProgress`},{default:e(()=>[...o[17]||=[i(`#`,-1)]]),_:1}),o[18]||=i(`Use Progress`,-1)]),r($,null,{default:e(()=>[...o[19]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref, onUnmounted } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` files = ref([])
`),n(`span`,{class:`hljs-keyword`},`let`),i(` timer

`),n(`span`,{class:`hljs-function`},[n(`span`,{class:`hljs-keyword`},`function`),i(),n(`span`,{class:`hljs-title`},`handleAfterRead`),i(`(`),n(`span`,{class:`hljs-params`},`file`),i(`) `)]),i(`{
  file.state = `),n(`span`,{class:`hljs-string`},`'loading'`),i(`

  timer = `),n(`span`,{class:`hljs-built_in`},`window`),i(`.setInterval(`),n(`span`,{class:`hljs-function`},`() =>`),i(` {
    `),n(`span`,{class:`hljs-keyword`},`if`),i(` (file.progress === `),n(`span`,{class:`hljs-number`},`100`),i(`) {
      `),n(`span`,{class:`hljs-built_in`},`window`),i(`.clearInterval(timer)
      file.state = `),n(`span`,{class:`hljs-string`},`'success'`),i(`
      `),n(`span`,{class:`hljs-keyword`},`return`),i(`
    }

    file.progress += `),n(`span`,{class:`hljs-number`},`10`),i(`
  }, `),n(`span`,{class:`hljs-number`},`250`),i(`)
}

onUnmounted(`),n(`span`,{class:`hljs-function`},`() =>`),i(` {
  `),n(`span`,{class:`hljs-built_in`},`window`),i(`.clearInterval(timer)
})
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-uploader`),i(),n(`span`,{class:`hljs-attr`},`v-model`),i(`=`),n(`span`,{class:`hljs-string`},`"files"`),i(` @`),n(`span`,{class:`hljs-attr`},`after-read`),i(`=`),n(`span`,{class:`hljs-string`},`"handleAfterRead"`),i(`/>`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,b,[n(`h3`,x,[r(Q,{to:`#FileMaxlength`},{default:e(()=>[...o[20]||=[i(`#`,-1)]]),_:1}),o[21]||=i(`File Maxlength`,-1)]),r($,null,{default:e(()=>[...o[22]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` files = ref([])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-uploader`),i(),n(`span`,{class:`hljs-attr`},`v-model`),i(`=`),n(`span`,{class:`hljs-string`},`"files"`),i(),n(`span`,{class:`hljs-attr`},`:maxlength`),i(`=`),n(`span`,{class:`hljs-string`},`"1"`),i(`/>`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,S,[n(`h3`,C,[r(Q,{to:`#FileSizeLimit`},{default:e(()=>[...o[23]||=[i(`#`,-1)]]),_:1}),o[24]||=i(`File Size Limit`,-1)]),o[26]||=n(`p`,null,[i(`If the limit is exceeded, the file will be blocked. You can get the file by listening for the `),n(`code`,null,`oversize`),i(` event.`)],-1),r($,null,{default:e(()=>[...o[25]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { Snackbar } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'@varlet/ui'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` files = ref([])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-uploader`),i(),n(`span`,{class:`hljs-attr`},`v-model`),i(`=`),n(`span`,{class:`hljs-string`},`"files"`),i(),n(`span`,{class:`hljs-attr`},`:maxsize`),i(`=`),n(`span`,{class:`hljs-string`},`"1024"`),i(` @`),n(`span`,{class:`hljs-attr`},`oversize`),i(`=`),n(`span`,{class:`hljs-string`},`"Snackbar.warning('file size exceeds limit')"`),i(` />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,w,[n(`h3`,T,[r(Q,{to:`#FileListFilter`},{default:e(()=>[...o[27]||=[i(`#`,-1)]]),_:1}),o[28]||=i(`File List Filter`,-1)]),o[30]||=n(`p`,null,[i(`Filter files through the `),n(`code`,null,`before-filter`),i(` event, and return a `),n(`code`,null,`VarFile`),i(` array after filtering.`)],-1),r($,null,{default:e(()=>[...o[29]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` files = ref([])

`),n(`span`,{class:`hljs-function`},[n(`span`,{class:`hljs-keyword`},`function`),i(),n(`span`,{class:`hljs-title`},`handleBeforeFilter`),i(`(`),n(`span`,{class:`hljs-params`},`files`),i(`) `)]),i(`{
  `),n(`span`,{class:`hljs-keyword`},`return`),i(` files.filter(`),n(`span`,{class:`hljs-function`},[n(`span`,{class:`hljs-params`},`file`),i(` =>`)]),i(` file.name.endsWith(`),n(`span`,{class:`hljs-string`},`'png'`),i(`))
}
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-uploader`),i(),n(`span`,{class:`hljs-attr`},`v-model`),i(`=`),n(`span`,{class:`hljs-string`},`"files"`),i(),n(`span`,{class:`hljs-attr`},`multiple`),i(` @`),n(`span`,{class:`hljs-attr`},`before-filter`),i(`=`),n(`span`,{class:`hljs-string`},`"handleBeforeFilter"`),i(` />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`

`)])],-1)]]),_:1})]),n(`div`,E,[n(`h3`,D,[r(Q,{to:`#UploadPreprocessing`},{default:e(()=>[...o[31]||=[i(`#`,-1)]]),_:1}),o[32]||=i(`Upload Preprocessing`,-1)]),o[34]||=n(`p`,null,[i(`Operate on a file by registering a `),n(`code`,null,`before-read`),i(` event that returns a false value to prevent the file from being read.`)],-1),r($,null,{default:e(()=>[...o[33]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { Snackbar } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'@varlet/ui'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` files = ref([])

`),n(`span`,{class:`hljs-function`},[n(`span`,{class:`hljs-keyword`},`function`),i(),n(`span`,{class:`hljs-title`},`handleBeforeRead`),i(`(`),n(`span`,{class:`hljs-params`},`file`),i(`) `)]),i(`{
  `),n(`span`,{class:`hljs-keyword`},`if`),i(` (file.file.size <= `),n(`span`,{class:`hljs-number`},`1`),i(` * `),n(`span`,{class:`hljs-number`},`1024`),i(` * `),n(`span`,{class:`hljs-number`},`1024`),i(`) {
    Snackbar.success(`),n(`span`,{class:`hljs-string`},`'the file is less than 1M, the upload is successful'`),i(`)
    `),n(`span`,{class:`hljs-keyword`},`return`),i(),n(`span`,{class:`hljs-literal`},`true`),i(`
  } `),n(`span`,{class:`hljs-keyword`},`else`),i(` {
    Snackbar.warning(`),n(`span`,{class:`hljs-string`},`'the file is larger than 1M and cannot be uploaded'`),i(`)
    `),n(`span`,{class:`hljs-keyword`},`return`),i(),n(`span`,{class:`hljs-literal`},`false`),i(`
  }
}
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-uploader`),i(),n(`span`,{class:`hljs-attr`},`v-model`),i(`=`),n(`span`,{class:`hljs-string`},`"files"`),i(` @`),n(`span`,{class:`hljs-attr`},`before-read`),i(`=`),n(`span`,{class:`hljs-string`},`"handleBeforeRead"`),i(`/>`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,O,[n(`h3`,k,[r(Q,{to:`#UploadButtonClickEvent`},{default:e(()=>[...o[35]||=[i(`#`,-1)]]),_:1}),o[36]||=i(`Upload Button Click Event`,-1)]),o[38]||=n(`p`,null,[i(`By listen the `),n(`code`,null,`click-action`),i(` event, you can intercept the click behavior of the upload button, and manually trigger the browser to select the file through the `),n(`code`,null,`chooseFile`),i(` method in the callback.`)],-1),r($,null,{default:e(()=>[...o[37]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { Snackbar } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'@varlet/ui'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` files = ref([])

`),n(`span`,{class:`hljs-function`},[n(`span`,{class:`hljs-keyword`},`function`),i(),n(`span`,{class:`hljs-title`},`handleClickAction`),i(`(`),n(`span`,{class:`hljs-params`},`chooseFile`),i(`) `)]),i(`{
  Snackbar.loading(`),n(`span`,{class:`hljs-string`},`'delay 1s'`),i(`)

  `),n(`span`,{class:`hljs-built_in`},`window`),i(`.setTimeout(`),n(`span`,{class:`hljs-function`},`() =>`),i(` {
    Snackbar.clear()
    chooseFile()
  }, `),n(`span`,{class:`hljs-number`},`1000`),i(`)
}
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-uploader`),i(),n(`span`,{class:`hljs-attr`},`v-model`),i(`=`),n(`span`,{class:`hljs-string`},`"files"`),i(` @`),n(`span`,{class:`hljs-attr`},`click-action`),i(`=`),n(`span`,{class:`hljs-string`},`"handleClickAction"`),i(` />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,A,[n(`h3`,j,[r(Q,{to:`#Disabled`},{default:e(()=>[...o[39]||=[i(`#`,-1)]]),_:1}),o[40]||=i(`Disabled`,-1)]),r($,null,{default:e(()=>[...o[41]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` files = ref([])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-uploader`),i(),n(`span`,{class:`hljs-attr`},`disabled`),i(),n(`span`,{class:`hljs-attr`},`v-model`),i(`=`),n(`span`,{class:`hljs-string`},`"files"`),i(`/>`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,M,[n(`h3`,N,[r(Q,{to:`#Readonly`},{default:e(()=>[...o[42]||=[i(`#`,-1)]]),_:1}),o[43]||=i(`Readonly`,-1)]),r($,null,{default:e(()=>[...o[44]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` files = ref([])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-uploader`),i(),n(`span`,{class:`hljs-attr`},`readonly`),i(),n(`span`,{class:`hljs-attr`},`v-model`),i(`=`),n(`span`,{class:`hljs-string`},`"files"`),i(`/>`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,P,[n(`h3`,re,[r(Q,{to:`#RemovePreprocessing`},{default:e(()=>[...o[45]||=[i(`#`,-1)]]),_:1}),o[46]||=i(`Remove Preprocessing`,-1)]),o[48]||=n(`p`,null,[i(`Before deleting the file, the `),n(`code`,null,`before-remove`),i(` event is triggered, and a falsy value is returned to prevent the delete operation.`)],-1),r($,null,{default:e(()=>[...o[47]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { Dialog } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'@varlet/ui'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` files = ref([
  {
    `),n(`span`,{class:`hljs-attr`},`url`),i(`: `),n(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`cover`),i(`: `),n(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),i(`
  }
])

`),n(`span`,{class:`hljs-keyword`},`async`),i(),n(`span`,{class:`hljs-function`},[n(`span`,{class:`hljs-keyword`},`function`),i(),n(`span`,{class:`hljs-title`},`handleBeforeRemove`),i(`(`),n(`span`,{class:`hljs-params`}),i(`) `)]),i(`{
  `),n(`span`,{class:`hljs-keyword`},`const`),i(` action = `),n(`span`,{class:`hljs-keyword`},`await`),i(` Dialog({
    `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Delete or not?'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`message`),i(`: `),n(`span`,{class:`hljs-string`},`'Cannot be withdrawn after deletion'`),i(`
  })

  `),n(`span`,{class:`hljs-keyword`},`return`),i(` action === `),n(`span`,{class:`hljs-string`},`'confirm'`),i(`
}
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-uploader`),i(),n(`span`,{class:`hljs-attr`},`v-model`),i(`=`),n(`span`,{class:`hljs-string`},`"files"`),i(` @`),n(`span`,{class:`hljs-attr`},`before-remove`),i(`=`),n(`span`,{class:`hljs-string`},`"handleBeforeRemove"`),i(` />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,F,[n(`h3`,I,[r(Q,{to:`#CustomizeUploadStyles`},{default:e(()=>[...o[49]||=[i(`#`,-1)]]),_:1}),o[50]||=i(`Customize Upload Styles`,-1)]),r($,null,{default:e(()=>[...o[51]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` files = ref()
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-uploader`),i(),n(`span`,{class:`hljs-attr`},`v-model`),i(`=`),n(`span`,{class:`hljs-string`},`"files"`),i(`>`)]),i(`
    `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-button`),i(),n(`span`,{class:`hljs-attr`},`type`),i(`=`),n(`span`,{class:`hljs-string`},`"primary"`),i(`>`)]),i(`Upload`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`var-button`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`var-uploader`),i(`>`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,L,[n(`h3`,R,[r(Q,{to:`#Validate`},{default:e(()=>[...o[52]||=[i(`#`,-1)]]),_:1}),o[53]||=i(`Validate`,-1)]),o[55]||=n(`p`,null,[i(`The values are validated by passing in an array of validator, If the validator returns `),n(`code`,null,`true`),i(`, the validation passes. Other values are converted to text as a user prompt. The second argument is a collection of utility functions that can quickly get a collection of files that match the state.`)],-1),r($,null,{default:e(()=>[...o[54]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` files = ref([
  {
    `),n(`span`,{class:`hljs-attr`},`url`),i(`: `),n(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`cover`),i(`: `),n(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`state`),i(`: `),n(`span`,{class:`hljs-string`},`'error'`),i(`,
  },
])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-uploader`),i(`
    `),n(`span`,{class:`hljs-attr`},`:rules`),i(`=`),n(`span`,{class:`hljs-string`},`"(v, u) => u.getError().length === 0 || 'There is a file that failed to upload'"`),i(`
    `),n(`span`,{class:`hljs-attr`},`v-model`),i(`=`),n(`span`,{class:`hljs-string`},`"files"`),i(`
  />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,z,[n(`h3`,B,[r(Q,{to:`#ValidatewithZod`},{default:e(()=>[...o[56]||=[i(`#`,-1)]]),_:1}),o[57]||=i(`Validate with Zod`,-1)]),r($,null,{default:e(()=>[...o[58]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { z } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'zod'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` files = ref([
  {
    `),n(`span`,{class:`hljs-attr`},`url`),i(`: `),n(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`cover`),i(`: `),n(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`state`),i(`: `),n(`span`,{class:`hljs-string`},`'error'`),i(`,
  },
])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-uploader`),i(`
    `),n(`span`,{class:`hljs-attr`},`:rules`),i(`=`),n(`span`,{class:`hljs-string`},`"
      z.array(z.any()).refine(v => v.filter(file => file.state === 'error').length === 0, 'There is a file that failed to upload')
    "`),i(`
    `),n(`span`,{class:`hljs-attr`},`v-model`),i(`=`),n(`span`,{class:`hljs-string`},`"files"`),i(`
  />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,V,[n(`h3`,H,[r(Q,{to:`#CustomRenderFileList`},{default:e(()=>[...o[59]||=[i(`#`,-1)]]),_:1}),o[60]||=i(`Custom Render File List`,-1)]),o[62]||=n(`p`,null,[i(`You can use the `),n(`code`,null,`hide-list`),i(` to hide component files list, then you can render this list by custom.`)],-1),r($,null,{default:e(()=>[...o[61]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` files = ref([
  {
    `),n(`span`,{class:`hljs-attr`},`url`),i(`: `),n(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`cover`),i(`: `),n(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`state`),i(`: `),n(`span`,{class:`hljs-string`},`'loading'`),i(`,
  },
  {
    `),n(`span`,{class:`hljs-attr`},`url`),i(`: `),n(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`cover`),i(`: `),n(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`state`),i(`: `),n(`span`,{class:`hljs-string`},`'success'`),i(`,
  },
  {
    `),n(`span`,{class:`hljs-attr`},`url`),i(`: `),n(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`cover`),i(`: `),n(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`state`),i(`: `),n(`span`,{class:`hljs-string`},`'error'`),i(`,
  },
])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-space`),i(`>`)]),i(`
    `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`img`),i(`
      `),n(`span`,{class:`hljs-attr`},`class`),i(`=`),n(`span`,{class:`hljs-string`},`"uploader-example-file"`),i(`
      `),n(`span`,{class:`hljs-attr`},`v-for`),i(`=`),n(`span`,{class:`hljs-string`},`"f in files"`),i(`
      `),n(`span`,{class:`hljs-attr`},`:key`),i(`=`),n(`span`,{class:`hljs-string`},`"f.id"`),i(`
      `),n(`span`,{class:`hljs-attr`},`:src`),i(`=`),n(`span`,{class:`hljs-string`},`"f.cover"`),i(`
    />`)]),i(`
    `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-uploader`),i(),n(`span`,{class:`hljs-attr`},`hide-list`),i(),n(`span`,{class:`hljs-attr`},`v-model`),i(`=`),n(`span`,{class:`hljs-string`},`"files"`),i(`>`)]),i(`
      `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-button`),i(),n(`span`,{class:`hljs-attr`},`round`),i(),n(`span`,{class:`hljs-attr`},`type`),i(`=`),n(`span`,{class:`hljs-string`},`"primary"`),i(`>`)]),i(`
        `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-icon`),i(),n(`span`,{class:`hljs-attr`},`:size`),i(`=`),n(`span`,{class:`hljs-string`},`"28"`),i(),n(`span`,{class:`hljs-attr`},`name`),i(`=`),n(`span`,{class:`hljs-string`},`"upload"`),i(` />`)]),i(`
      `),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`var-button`),i(`>`)]),i(`
    `),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`var-uploader`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`var-space`),i(`>`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`style`),i(`>`)]),n(`span`,{class:`css`},[i(`
`),n(`span`,{class:`hljs-selector-class`},`.uploader-example-file`),i(` {
  `),n(`span`,{class:`hljs-attribute`},`width`),i(`: `),n(`span`,{class:`hljs-number`},`40px`),i(`;
  `),n(`span`,{class:`hljs-attribute`},`height`),i(`: `),n(`span`,{class:`hljs-number`},`40px`),i(`;
  `),n(`span`,{class:`hljs-attribute`},`border-radius`),i(`: `),n(`span`,{class:`hljs-number`},`50%`),i(`;
  `),n(`span`,{class:`hljs-attribute`},`font-size`),i(`: `),n(`span`,{class:`hljs-number`},`12px`),i(`;
  `),n(`span`,{class:`hljs-attribute`},`object-fit`),i(`: cover;
}
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`style`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,U,[n(`h3`,W,[r(Q,{to:`#CustomRemoveButton`},{default:e(()=>[...o[63]||=[i(`#`,-1)]]),_:1}),o[64]||=i(`Custom Remove Button`,-1)]),r($,null,{default:e(()=>[...o[65]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` files = ref([
  {
    `),n(`span`,{class:`hljs-attr`},`url`),i(`: `),n(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`cover`),i(`: `),n(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),i(`
  },
  {
    `),n(`span`,{class:`hljs-attr`},`url`),i(`: `),n(`span`,{class:`hljs-string`},`'https://www.runoob.com/try/demo_source/mov_bbb.mp4'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`cover`),i(`: `),n(`span`,{class:`hljs-string`},`'https://varletjs.org/cover.jpg'`),i(`
  }
])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-uploader`),i(),n(`span`,{class:`hljs-attr`},`v-model`),i(`=`),n(`span`,{class:`hljs-string`},`"files"`),i(`>`)]),i(`
    `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(` #`),n(`span`,{class:`hljs-attr`},`remove-button`),i(`=`),n(`span`,{class:`hljs-string`},`"{ remove }"`),i(`>`)]),i(`
      `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`div`),i(),n(`span`,{class:`hljs-attr`},`class`),i(`=`),n(`span`,{class:`hljs-string`},`"custom-remove-button"`),i(`>`)]),i(`
        `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-icon`),i(),n(`span`,{class:`hljs-attr`},`color`),i(`=`),n(`span`,{class:`hljs-string`},`"#fff"`),i(),n(`span`,{class:`hljs-attr`},`name`),i(`=`),n(`span`,{class:`hljs-string`},`"window-close"`),i(` @`),n(`span`,{class:`hljs-attr`},`click.stop`),i(`=`),n(`span`,{class:`hljs-string`},`"remove"`),i(`>`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`var-icon`),i(`>`)]),i(`
      `),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`div`),i(`>`)]),i(`
    `),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`var-uploader`),i(`>`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`style`),i(`>`)]),n(`span`,{class:`css`},[i(`
`),n(`span`,{class:`hljs-selector-class`},`.custom-remove-button`),i(` {
  `),n(`span`,{class:`hljs-attribute`},`position`),i(`: absolute;
  `),n(`span`,{class:`hljs-attribute`},`top`),i(`: `),n(`span`,{class:`hljs-number`},`0`),i(`;
  `),n(`span`,{class:`hljs-attribute`},`right`),i(`: `),n(`span`,{class:`hljs-number`},`0`),i(`;
  `),n(`span`,{class:`hljs-attribute`},`z-index`),i(`: `),n(`span`,{class:`hljs-number`},`3`),i(`;
}
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`style`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),o[88]||=n(`h2`,null,`API`,-1),n(`div`,G,[n(`h3`,K,[r(Q,{to:`#Props`},{default:e(()=>[...o[66]||=[i(`#`,-1)]]),_:1}),o[67]||=i(`Props`,-1)]),o[68]||=a(`<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>File list</td><td><em>VarFile[]</em></td><td><code>[]</code></td></tr><tr><td><code>accept</code></td><td>Accepted file type, consistent with the native attribute</td><td><em>string</em></td><td><code>image/*</code></td></tr><tr><td><code>capture</code></td><td>Get the file, the same as the native property</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>multiple</code></td><td>Whether to select multiple files</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>elevation</code></td><td>Elevation level, options <code>true</code> <code>false</code> and level of <code>0-24</code>, not in simple mode</td><td><em>string | number | boolean</em></td><td><code>true</code></td></tr><tr><td><code>removable</code></td><td>Whether the removable</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>maxlength</code></td><td>Maximum number of files</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>maxsize</code></td><td>Maximum file size, the unit is <code>byte</code></td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>previewed</code></td><td>Whether to allow preview</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>prevent-default-preview</code></td><td>Prevent default preview behavior</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>Whether to open ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hide-list</code></td><td>Whether to hide the file list</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>resolve-type</code></td><td>The file preprocessing type, can be set to <code>default</code> <code>file</code> <code>data-url</code> (<code>default</code>, the image type contains dataURL and File object, other types contain only File object. <code>file</code>, which contains only File object. <code>data-url</code>, all file types contain dataURL and File object)</td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>validate-trigger</code></td><td>Timing to trigger validation. The optional value is <code>onChange</code> <code>onRemove</code></td><td><em>UploaderValidateTrigger[]</em></td><td><code>[&#39;onChange&#39;, &#39;onRemove&#39;]</code></td></tr><tr><td><code>rules</code></td><td>Validation rules, return <code>true</code> to indicate verification passes, other types of values ​​will be converted into text as user prompts. <a href="#/en-US/zodValidation">Zod validation</a> is supported since <code>3.5.0</code></td><td><em>((v: VarFile[]) =&gt; any) | ZodType | Array&lt;((v: VarFile[]) =&gt; any) | ZodType&gt;</em></td><td><code>-</code></td></tr></tbody></table>`,1)]),n(`div`,q,[n(`h3`,J,[r(Q,{to:`#VarFile`},{default:e(()=>[...o[69]||=[i(`#`,-1)]]),_:1}),o[70]||=i(`VarFile`,-1)]),o[71]||=a(`<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>file</code></td><td>Native file</td><td><em>File</em></td><td><code>-</code></td></tr><tr><td><code>name</code></td><td>File name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>url</code></td><td>File url</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cover</code></td><td>File cover image</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>fit</code></td><td>Cover image fill mode, Optional value is <code>fill</code> <code>contain</code> <code>cover</code> <code>none</code> <code>scale-down</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>state</code></td><td>File upload state, Optional value is <code>loading</code> <code>success</code> <code>error</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>state</code></td><td>File upload progress, range [0, 100]</td><td><em>number</em></td><td><code>-</code></td></tr></tbody></table>`,1)]),n(`div`,Y,[n(`h3`,X,[r(Q,{to:`#VarFileUtils`},{default:e(()=>[...o[72]||=[i(`#`,-1)]]),_:1}),o[73]||=i(`VarFileUtils`,-1)]),o[74]||=a(`<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>getLoading</code></td><td>Gets a collection of files for <code>state</code> is <code>loading</code></td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>Gets a collection of files for <code>state</code> is <code>success</code></td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>Gets a collection of files for <code>state</code> is <code>error</code></td><td><code>-</code></td><td><code>VarFile[]</code></td></tr></tbody></table>`,1)]),n(`div`,ie,[n(`h3`,ae,[r(Q,{to:`#Methods`},{default:e(()=>[...o[75]||=[i(`#`,-1)]]),_:1}),o[76]||=i(`Methods`,-1)]),o[77]||=a(`<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>chooseFile</code></td><td>Trigger the file selection action and display the file list</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>closePreview</code></td><td>Close preview file popup</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>getLoading</code></td><td>Gets a collection of files for <code>state</code> is <code>loading</code></td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>Gets a collection of files for <code>state</code> is <code>success</code></td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>Gets a collection of files for <code>state</code> is <code>error</code></td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clearing validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding(set to <code>[]</code>)and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>`,1)]),n(`div`,oe,[n(`h3`,se,[r(Q,{to:`#Events`},{default:e(()=>[...o[78]||=[i(`#`,-1)]]),_:1}),o[79]||=i(`Events`,-1)]),o[80]||=a(`<table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>before-filter</code></td><td>Triggered before the event <code>before-read</code> to filter the file list</td><td><code>files: VarFile[]</code></td></tr><tr><td><code>before-read</code></td><td>Triggered returns a false value before a file is read to prevent the file from being read(support promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>after-read</code></td><td>Triggered after the file is read</td><td><code>file: VarFile</code></td></tr><tr><td><code>oversize</code></td><td>Triggered when the file size limit is exceeded</td><td><code>file: VarFile</code></td></tr><tr><td><code>before-remove</code></td><td>Triggered before file deletion, return false value to prevent file deletion (support promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>remove</code></td><td>Triggered when deleting a file. There is a true value to prevent deleting a file (support promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>preview</code></td><td>Triggered when a file is previewed</td><td><code>file: VarFile</code></td></tr><tr><td><code>click-action</code></td><td>Intercept click behavior of upload button</td><td><code>chooseFile: () =&gt; void, event: Event</code></td></tr></tbody></table>`,1)]),n(`div`,ce,[n(`h3`,Z,[r(Q,{to:`#Slots`},{default:e(()=>[...o[81]||=[i(`#`,-1)]]),_:1}),o[82]||=i(`Slots`,-1)]),o[83]||=a(`<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Upload action content</td><td><code>-</code></td></tr><tr><td><code>extra-message</code></td><td>Extra message</td><td><code>-</code></td></tr><tr><td><code>remove-button</code> <em><strong>3.8.0</strong></em></td><td>Remove button</td><td><code>remove: () =&gt; void</code></td></tr></tbody></table>`,1)]),n(`div`,le,[n(`h3`,ue,[r(Q,{to:`#StyleVariables`},{default:e(()=>[...o[84]||=[i(`#`,-1)]]),_:1}),o[85]||=i(`Style Variables`,-1)]),o[86]||=a(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--uploader-action-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-action-icon-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-action-icon-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-action-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-size</code></td><td><code>80px</code></td></tr><tr><td><code>--uploader-file-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-name-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-file-name-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-file-name-font-size</code></td><td><code>12px</code></td></tr><tr><td><code>--uploader-file-name-padding</code></td><td><code>10px</code></td></tr><tr><td><code>--uploader-file-border-radius</code></td><td><code>0</code></td></tr><tr><td><code>--uploader-file-text-align</code></td><td><code>center</code></td></tr><tr><td><code>--uploader-file-close-background</code></td><td><code>rgba(0, 0, 0, 0.3)</code></td></tr><tr><td><code>--uploader-file-close-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-file-close-icon-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--uploader-file-close-icon-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--uploader-file-cover-fit</code></td><td><code>cover</code></td></tr><tr><td><code>--uploader-file-cover-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-preview-video-width</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-preview-video-height</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-file-indicator-height</code></td><td><code>4px</code></td></tr><tr><td><code>--uploader-file-indicator-normal-color</code></td><td><code>var(--color-disabled)</code></td></tr><tr><td><code>--uploader-file-indicator-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--uploader-file-indicator-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--uploader-file-progress-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--uploader-disabled-color</code></td><td><code>#ddd</code></td></tr><tr><td><code>--uploader-disabled-text-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--uploader-loading-background</code></td><td><code>linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))</code></td></tr></tbody></table>`,2)])])}var fe=ne(o,[[`render`,de]]);export{fe as default};