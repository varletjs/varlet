import{L as e,N as t,W as n,c as r,d as ee,g as i,h as a,m as o}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as te}from"./_plugin-vue_export-helper-V-yks4gF.js";var s={components:{}},ne={class:`varlet-site-doc`},c={class:`card`},l={id:`Intro`},u={class:`card`},d={id:`BasicUsage`},f={class:`card`},p={id:`FilePreview`},m={class:`card`},h={id:`CustomPreview`},g={class:`card`},_={id:`UploadState`},v={class:`card`},y={id:`UseProgress`},b={class:`card`},x={id:`FileMaxlength`},S={class:`card`},C={id:`FileSizeLimit`},w={class:`card`},T={id:`FileListFilter`},E={class:`card`},D={id:`UploadPreprocessing`},O={class:`card`},k={id:`UploadButtonClickEvent`},A={class:`card`},j={id:`Disabled`},M={class:`card`},N={id:`Readonly`},P={class:`card`},re={id:`RemovePreprocessing`},F={class:`card`},I={id:`CustomizeUploadStyles`},L={class:`card`},R={id:`Validate`},z={class:`card`},B={id:`ValidatewithZod`},V={class:`card`},H={id:`CustomRenderFileList`},U={class:`card`},W={id:`CustomRemoveButton`},G={class:`card`},K={id:`Props`},q={class:`card`},J={id:`VarFile`},Y={class:`card`},X={id:`VarFileUtils`},ie={class:`card`},ae={id:`Methods`},oe={class:`card`},se={id:`Events`},ce={class:`card`},Z={id:`Slots`},le={class:`card`},ue={id:`StyleVariables`};function de(te,s,de,fe,pe,me){let Q=e(`router-link`),$=e(`var-site-code-example`);return t(),ee(`div`,ne,[s[87]||=r(`h1`,null,`Uploader`,-1),r(`div`,c,[r(`h3`,l,[i(Q,{to:`#Intro`},{default:n(()=>[...s[0]||=[a(`#`,-1)]]),_:1}),s[1]||=a(`Intro`,-1)]),s[2]||=r(`p`,null,[a(`It provides the ability to read files and preview pictures and videos. Get the file upload server by listening for `),r(`code`,null,`after-read`),a(` events.`)],-1)]),r(`div`,u,[r(`h3`,d,[i(Q,{to:`#BasicUsage`},{default:n(()=>[...s[3]||=[a(`#`,-1)]]),_:1}),s[4]||=a(`Basic Usage`,-1)]),i($,null,{default:n(()=>[...s[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` files = ref([])

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),a(),r(`span`,{class:`hljs-title`},`handleAfterRead`),a(`(`),r(`span`,{class:`hljs-params`},`file`),a(`) `)]),a(`{
  `),r(`span`,{class:`hljs-built_in`},`console`),a(`.log(file)
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-uploader`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"files"`),a(` @`),r(`span`,{class:`hljs-attr`},`after-read`),a(`=`),r(`span`,{class:`hljs-string`},`"handleAfterRead"`),a(`/>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,f,[r(`h3`,p,[i(Q,{to:`#FilePreview`},{default:n(()=>[...s[6]||=[a(`#`,-1)]]),_:1}),s[7]||=a(`File Preview`,-1)]),s[9]||=r(`p`,null,`By analyzing the file URL suffix name to determine the file type, support image and video preview.`,-1),i($,null,{default:n(()=>[...s[8]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` files = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`url`),a(`: `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),a(`,
    `),r(`span`,{class:`hljs-attr`},`cover`),a(`: `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),a(`
  },
  {
    `),r(`span`,{class:`hljs-attr`},`url`),a(`: `),r(`span`,{class:`hljs-string`},`'https://www.runoob.com/try/demo_source/mov_bbb.mp4'`),a(`,
    `),r(`span`,{class:`hljs-attr`},`cover`),a(`: `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cover.jpg'`),a(`
  }
])
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-uploader`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"files"`),a(`/>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,m,[r(`h3`,h,[i(Q,{to:`#CustomPreview`},{default:n(()=>[...s[10]||=[a(`#`,-1)]]),_:1}),s[11]||=a(`Custom Preview`,-1)]),i($,null,{default:n(()=>[...s[12]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { Dialog } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` files = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`url`),a(`: `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),a(`,
    `),r(`span`,{class:`hljs-attr`},`cover`),a(`: `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),a(`
  }
])

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),a(),r(`span`,{class:`hljs-title`},`handlePreview`),a(`(`),r(`span`,{class:`hljs-params`},`file`),a(`) `)]),a(`{
  Dialog({
    `),r(`span`,{class:`hljs-attr`},`title`),a(`: `),r(`span`,{class:`hljs-string`},`'Custom Preview'`),a(`,
    `),r(`span`,{class:`hljs-attr`},`message`),a(`: file.url.slice(`),r(`span`,{class:`hljs-number`},`0`),a(`, `),r(`span`,{class:`hljs-number`},`100`),a(`),
  })
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-uploader`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"files"`),a(),r(`span`,{class:`hljs-attr`},`prevent-default-preview`),a(` @`),r(`span`,{class:`hljs-attr`},`preview`),a(`=`),r(`span`,{class:`hljs-string`},`"handlePreview"`),a(`/>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,g,[r(`h3`,_,[i(Q,{to:`#UploadState`},{default:n(()=>[...s[13]||=[a(`#`,-1)]]),_:1}),s[14]||=a(`Upload State`,-1)]),s[16]||=r(`p`,null,[a(`Three uploading states, `),r(`code`,null,`loading`),a(`, `),r(`code`,null,`success`),a(` and `),r(`code`,null,`error`),a(`, are provided, and tool functions are provided to quickly obtain files with corresponding states.`)],-1),i($,null,{default:n(()=>[...s[15]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` files = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`url`),a(`: `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),a(`,
    `),r(`span`,{class:`hljs-attr`},`cover`),a(`: `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),a(`,
    `),r(`span`,{class:`hljs-attr`},`state`),a(`: `),r(`span`,{class:`hljs-string`},`'loading'`),a(`
  },
  {
    `),r(`span`,{class:`hljs-attr`},`url`),a(`: `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),a(`,
    `),r(`span`,{class:`hljs-attr`},`cover`),a(`: `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),a(`,
    `),r(`span`,{class:`hljs-attr`},`state`),a(`: `),r(`span`,{class:`hljs-string`},`'success'`),a(`
  },
  {
    `),r(`span`,{class:`hljs-attr`},`url`),a(`: `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),a(`,
    `),r(`span`,{class:`hljs-attr`},`cover`),a(`: `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),a(`,
    `),r(`span`,{class:`hljs-attr`},`state`),a(`: `),r(`span`,{class:`hljs-string`},`'error'`),a(`
  }
])

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),a(),r(`span`,{class:`hljs-title`},`handleAfterRead`),a(`(`),r(`span`,{class:`hljs-params`},`file`),a(`) `)]),a(`{
  file.state = `),r(`span`,{class:`hljs-string`},`'loading'`),a(`

  `),r(`span`,{class:`hljs-built_in`},`setTimeout`),a(`(`),r(`span`,{class:`hljs-function`},`() =>`),a(` {
    file.state = `),r(`span`,{class:`hljs-string`},`'success'`),a(`
  }, `),r(`span`,{class:`hljs-number`},`1000`),a(`)
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-uploader`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"files"`),a(` @`),r(`span`,{class:`hljs-attr`},`after-read`),a(`=`),r(`span`,{class:`hljs-string`},`"handleAfterRead"`),a(`/>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,v,[r(`h3`,y,[i(Q,{to:`#UseProgress`},{default:n(()=>[...s[17]||=[a(`#`,-1)]]),_:1}),s[18]||=a(`Use Progress`,-1)]),i($,null,{default:n(()=>[...s[19]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref, onUnmounted } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` files = ref([])
`),r(`span`,{class:`hljs-keyword`},`let`),a(` timer

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),a(),r(`span`,{class:`hljs-title`},`handleAfterRead`),a(`(`),r(`span`,{class:`hljs-params`},`file`),a(`) `)]),a(`{
  file.state = `),r(`span`,{class:`hljs-string`},`'loading'`),a(`

  timer = `),r(`span`,{class:`hljs-built_in`},`window`),a(`.setInterval(`),r(`span`,{class:`hljs-function`},`() =>`),a(` {
    `),r(`span`,{class:`hljs-keyword`},`if`),a(` (file.progress === `),r(`span`,{class:`hljs-number`},`100`),a(`) {
      `),r(`span`,{class:`hljs-built_in`},`window`),a(`.clearInterval(timer)
      file.state = `),r(`span`,{class:`hljs-string`},`'success'`),a(`
      `),r(`span`,{class:`hljs-keyword`},`return`),a(`
    }

    file.progress += `),r(`span`,{class:`hljs-number`},`10`),a(`
  }, `),r(`span`,{class:`hljs-number`},`250`),a(`)
}

onUnmounted(`),r(`span`,{class:`hljs-function`},`() =>`),a(` {
  `),r(`span`,{class:`hljs-built_in`},`window`),a(`.clearInterval(timer)
})
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-uploader`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"files"`),a(` @`),r(`span`,{class:`hljs-attr`},`after-read`),a(`=`),r(`span`,{class:`hljs-string`},`"handleAfterRead"`),a(`/>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,b,[r(`h3`,x,[i(Q,{to:`#FileMaxlength`},{default:n(()=>[...s[20]||=[a(`#`,-1)]]),_:1}),s[21]||=a(`File Maxlength`,-1)]),i($,null,{default:n(()=>[...s[22]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` files = ref([])
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-uploader`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"files"`),a(),r(`span`,{class:`hljs-attr`},`:maxlength`),a(`=`),r(`span`,{class:`hljs-string`},`"1"`),a(`/>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,S,[r(`h3`,C,[i(Q,{to:`#FileSizeLimit`},{default:n(()=>[...s[23]||=[a(`#`,-1)]]),_:1}),s[24]||=a(`File Size Limit`,-1)]),s[26]||=r(`p`,null,[a(`If the limit is exceeded, the file will be blocked. You can get the file by listening for the `),r(`code`,null,`oversize`),a(` event.`)],-1),i($,null,{default:n(()=>[...s[25]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` files = ref([])
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-uploader`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"files"`),a(),r(`span`,{class:`hljs-attr`},`:maxsize`),a(`=`),r(`span`,{class:`hljs-string`},`"1024"`),a(` @`),r(`span`,{class:`hljs-attr`},`oversize`),a(`=`),r(`span`,{class:`hljs-string`},`"Snackbar.warning('file size exceeds limit')"`),a(` />`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,w,[r(`h3`,T,[i(Q,{to:`#FileListFilter`},{default:n(()=>[...s[27]||=[a(`#`,-1)]]),_:1}),s[28]||=a(`File List Filter`,-1)]),s[30]||=r(`p`,null,[a(`Filter files through the `),r(`code`,null,`before-filter`),a(` event, and return a `),r(`code`,null,`VarFile`),a(` array after filtering.`)],-1),i($,null,{default:n(()=>[...s[29]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` files = ref([])

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),a(),r(`span`,{class:`hljs-title`},`handleBeforeFilter`),a(`(`),r(`span`,{class:`hljs-params`},`files`),a(`) `)]),a(`{
  `),r(`span`,{class:`hljs-keyword`},`return`),a(` files.filter(`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-params`},`file`),a(` =>`)]),a(` file.name.endsWith(`),r(`span`,{class:`hljs-string`},`'png'`),a(`))
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-uploader`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"files"`),a(),r(`span`,{class:`hljs-attr`},`multiple`),a(` @`),r(`span`,{class:`hljs-attr`},`before-filter`),a(`=`),r(`span`,{class:`hljs-string`},`"handleBeforeFilter"`),a(` />`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`

`)])],-1)]]),_:1})]),r(`div`,E,[r(`h3`,D,[i(Q,{to:`#UploadPreprocessing`},{default:n(()=>[...s[31]||=[a(`#`,-1)]]),_:1}),s[32]||=a(`Upload Preprocessing`,-1)]),s[34]||=r(`p`,null,[a(`Operate on a file by registering a `),r(`code`,null,`before-read`),a(` event that returns a false value to prevent the file from being read.`)],-1),i($,null,{default:n(()=>[...s[33]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` files = ref([])

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),a(),r(`span`,{class:`hljs-title`},`handleBeforeRead`),a(`(`),r(`span`,{class:`hljs-params`},`file`),a(`) `)]),a(`{
  `),r(`span`,{class:`hljs-keyword`},`if`),a(` (file.file.size <= `),r(`span`,{class:`hljs-number`},`1`),a(` * `),r(`span`,{class:`hljs-number`},`1024`),a(` * `),r(`span`,{class:`hljs-number`},`1024`),a(`) {
    Snackbar.success(`),r(`span`,{class:`hljs-string`},`'the file is less than 1M, the upload is successful'`),a(`)
    `),r(`span`,{class:`hljs-keyword`},`return`),a(),r(`span`,{class:`hljs-literal`},`true`),a(`
  } `),r(`span`,{class:`hljs-keyword`},`else`),a(` {
    Snackbar.warning(`),r(`span`,{class:`hljs-string`},`'the file is larger than 1M and cannot be uploaded'`),a(`)
    `),r(`span`,{class:`hljs-keyword`},`return`),a(),r(`span`,{class:`hljs-literal`},`false`),a(`
  }
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-uploader`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"files"`),a(` @`),r(`span`,{class:`hljs-attr`},`before-read`),a(`=`),r(`span`,{class:`hljs-string`},`"handleBeforeRead"`),a(`/>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,O,[r(`h3`,k,[i(Q,{to:`#UploadButtonClickEvent`},{default:n(()=>[...s[35]||=[a(`#`,-1)]]),_:1}),s[36]||=a(`Upload Button Click Event`,-1)]),s[38]||=r(`p`,null,[a(`By listen the `),r(`code`,null,`click-action`),a(` event, you can intercept the click behavior of the upload button, and manually trigger the browser to select the file through the `),r(`code`,null,`chooseFile`),a(` method in the callback.`)],-1),i($,null,{default:n(()=>[...s[37]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` files = ref([])

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),a(),r(`span`,{class:`hljs-title`},`handleClickAction`),a(`(`),r(`span`,{class:`hljs-params`},`chooseFile`),a(`) `)]),a(`{
  Snackbar.loading(`),r(`span`,{class:`hljs-string`},`'delay 1s'`),a(`)

  `),r(`span`,{class:`hljs-built_in`},`window`),a(`.setTimeout(`),r(`span`,{class:`hljs-function`},`() =>`),a(` {
    Snackbar.clear()
    chooseFile()
  }, `),r(`span`,{class:`hljs-number`},`1000`),a(`)
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-uploader`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"files"`),a(` @`),r(`span`,{class:`hljs-attr`},`click-action`),a(`=`),r(`span`,{class:`hljs-string`},`"handleClickAction"`),a(` />`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,A,[r(`h3`,j,[i(Q,{to:`#Disabled`},{default:n(()=>[...s[39]||=[a(`#`,-1)]]),_:1}),s[40]||=a(`Disabled`,-1)]),i($,null,{default:n(()=>[...s[41]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` files = ref([])
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-uploader`),a(),r(`span`,{class:`hljs-attr`},`disabled`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"files"`),a(`/>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,M,[r(`h3`,N,[i(Q,{to:`#Readonly`},{default:n(()=>[...s[42]||=[a(`#`,-1)]]),_:1}),s[43]||=a(`Readonly`,-1)]),i($,null,{default:n(()=>[...s[44]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` files = ref([])
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-uploader`),a(),r(`span`,{class:`hljs-attr`},`readonly`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"files"`),a(`/>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,P,[r(`h3`,re,[i(Q,{to:`#RemovePreprocessing`},{default:n(()=>[...s[45]||=[a(`#`,-1)]]),_:1}),s[46]||=a(`Remove Preprocessing`,-1)]),s[48]||=r(`p`,null,[a(`Before deleting the file, the `),r(`code`,null,`before-remove`),a(` event is triggered, and a falsy value is returned to prevent the delete operation.`)],-1),i($,null,{default:n(()=>[...s[47]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { Dialog } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` files = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`url`),a(`: `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),a(`,
    `),r(`span`,{class:`hljs-attr`},`cover`),a(`: `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),a(`
  }
])

`),r(`span`,{class:`hljs-keyword`},`async`),a(),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),a(),r(`span`,{class:`hljs-title`},`handleBeforeRemove`),a(`(`),r(`span`,{class:`hljs-params`}),a(`) `)]),a(`{
  `),r(`span`,{class:`hljs-keyword`},`const`),a(` action = `),r(`span`,{class:`hljs-keyword`},`await`),a(` Dialog({
    `),r(`span`,{class:`hljs-attr`},`title`),a(`: `),r(`span`,{class:`hljs-string`},`'Delete or not?'`),a(`,
    `),r(`span`,{class:`hljs-attr`},`message`),a(`: `),r(`span`,{class:`hljs-string`},`'Cannot be withdrawn after deletion'`),a(`
  })

  `),r(`span`,{class:`hljs-keyword`},`return`),a(` action === `),r(`span`,{class:`hljs-string`},`'confirm'`),a(`
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-uploader`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"files"`),a(` @`),r(`span`,{class:`hljs-attr`},`before-remove`),a(`=`),r(`span`,{class:`hljs-string`},`"handleBeforeRemove"`),a(` />`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,F,[r(`h3`,I,[i(Q,{to:`#CustomizeUploadStyles`},{default:n(()=>[...s[49]||=[a(`#`,-1)]]),_:1}),s[50]||=a(`Customize Upload Styles`,-1)]),i($,null,{default:n(()=>[...s[51]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` files = ref()
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-uploader`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"files"`),a(`>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"primary"`),a(`>`)]),a(`Upload`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-uploader`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,L,[r(`h3`,R,[i(Q,{to:`#Validate`},{default:n(()=>[...s[52]||=[a(`#`,-1)]]),_:1}),s[53]||=a(`Validate`,-1)]),s[55]||=r(`p`,null,[a(`The values are validated by passing in an array of validator, If the validator returns `),r(`code`,null,`true`),a(`, the validation passes. Other values are converted to text as a user prompt. The second argument is a collection of utility functions that can quickly get a collection of files that match the state.`)],-1),i($,null,{default:n(()=>[...s[54]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` files = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`url`),a(`: `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),a(`,
    `),r(`span`,{class:`hljs-attr`},`cover`),a(`: `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),a(`,
    `),r(`span`,{class:`hljs-attr`},`state`),a(`: `),r(`span`,{class:`hljs-string`},`'error'`),a(`,
  },
])
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-uploader`),a(`
    `),r(`span`,{class:`hljs-attr`},`:rules`),a(`=`),r(`span`,{class:`hljs-string`},`"(v, u) => u.getError().length === 0 || 'There is a file that failed to upload'"`),a(`
    `),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"files"`),a(`
  />`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,z,[r(`h3`,B,[i(Q,{to:`#ValidatewithZod`},{default:n(()=>[...s[56]||=[a(`#`,-1)]]),_:1}),s[57]||=a(`Validate with Zod`,-1)]),i($,null,{default:n(()=>[...s[58]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { z } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'zod'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` files = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`url`),a(`: `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),a(`,
    `),r(`span`,{class:`hljs-attr`},`cover`),a(`: `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),a(`,
    `),r(`span`,{class:`hljs-attr`},`state`),a(`: `),r(`span`,{class:`hljs-string`},`'error'`),a(`,
  },
])
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-uploader`),a(`
    `),r(`span`,{class:`hljs-attr`},`:rules`),a(`=`),r(`span`,{class:`hljs-string`},`"
      z.array(z.any()).refine(v => v.filter(file => file.state === 'error').length === 0, 'There is a file that failed to upload')
    "`),a(`
    `),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"files"`),a(`
  />`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,V,[r(`h3`,H,[i(Q,{to:`#CustomRenderFileList`},{default:n(()=>[...s[59]||=[a(`#`,-1)]]),_:1}),s[60]||=a(`Custom Render File List`,-1)]),s[62]||=r(`p`,null,[a(`You can use the `),r(`code`,null,`hide-list`),a(` to hide component files list, then you can render this list by custom.`)],-1),i($,null,{default:n(()=>[...s[61]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` files = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`url`),a(`: `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),a(`,
    `),r(`span`,{class:`hljs-attr`},`cover`),a(`: `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),a(`,
    `),r(`span`,{class:`hljs-attr`},`state`),a(`: `),r(`span`,{class:`hljs-string`},`'loading'`),a(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`url`),a(`: `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),a(`,
    `),r(`span`,{class:`hljs-attr`},`cover`),a(`: `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),a(`,
    `),r(`span`,{class:`hljs-attr`},`state`),a(`: `),r(`span`,{class:`hljs-string`},`'success'`),a(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`url`),a(`: `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),a(`,
    `),r(`span`,{class:`hljs-attr`},`cover`),a(`: `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),a(`,
    `),r(`span`,{class:`hljs-attr`},`state`),a(`: `),r(`span`,{class:`hljs-string`},`'error'`),a(`,
  },
])
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-space`),a(`>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`img`),a(`
      `),r(`span`,{class:`hljs-attr`},`class`),a(`=`),r(`span`,{class:`hljs-string`},`"uploader-example-file"`),a(`
      `),r(`span`,{class:`hljs-attr`},`v-for`),a(`=`),r(`span`,{class:`hljs-string`},`"f in files"`),a(`
      `),r(`span`,{class:`hljs-attr`},`:key`),a(`=`),r(`span`,{class:`hljs-string`},`"f.id"`),a(`
      `),r(`span`,{class:`hljs-attr`},`:src`),a(`=`),r(`span`,{class:`hljs-string`},`"f.cover"`),a(`
    />`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-uploader`),a(),r(`span`,{class:`hljs-attr`},`hide-list`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"files"`),a(`>`)]),a(`
      `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`round`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"primary"`),a(`>`)]),a(`
        `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-icon`),a(),r(`span`,{class:`hljs-attr`},`:size`),a(`=`),r(`span`,{class:`hljs-string`},`"28"`),a(),r(`span`,{class:`hljs-attr`},`name`),a(`=`),r(`span`,{class:`hljs-string`},`"upload"`),a(` />`)]),a(`
      `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-uploader`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-space`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`style`),a(`>`)]),r(`span`,{class:`css`},[a(`
`),r(`span`,{class:`hljs-selector-class`},`.uploader-example-file`),a(` {
  `),r(`span`,{class:`hljs-attribute`},`width`),a(`: `),r(`span`,{class:`hljs-number`},`40px`),a(`;
  `),r(`span`,{class:`hljs-attribute`},`height`),a(`: `),r(`span`,{class:`hljs-number`},`40px`),a(`;
  `),r(`span`,{class:`hljs-attribute`},`border-radius`),a(`: `),r(`span`,{class:`hljs-number`},`50%`),a(`;
  `),r(`span`,{class:`hljs-attribute`},`font-size`),a(`: `),r(`span`,{class:`hljs-number`},`12px`),a(`;
  `),r(`span`,{class:`hljs-attribute`},`object-fit`),a(`: cover;
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`style`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,U,[r(`h3`,W,[i(Q,{to:`#CustomRemoveButton`},{default:n(()=>[...s[63]||=[a(`#`,-1)]]),_:1}),s[64]||=a(`Custom Remove Button`,-1)]),i($,null,{default:n(()=>[...s[65]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` files = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`url`),a(`: `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),a(`,
    `),r(`span`,{class:`hljs-attr`},`cover`),a(`: `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),a(`
  },
  {
    `),r(`span`,{class:`hljs-attr`},`url`),a(`: `),r(`span`,{class:`hljs-string`},`'https://www.runoob.com/try/demo_source/mov_bbb.mp4'`),a(`,
    `),r(`span`,{class:`hljs-attr`},`cover`),a(`: `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cover.jpg'`),a(`
  }
])
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-uploader`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"files"`),a(`>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(` #`),r(`span`,{class:`hljs-attr`},`remove-button`),a(`=`),r(`span`,{class:`hljs-string`},`"{ remove }"`),a(`>`)]),a(`
      `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`div`),a(),r(`span`,{class:`hljs-attr`},`class`),a(`=`),r(`span`,{class:`hljs-string`},`"custom-remove-button"`),a(`>`)]),a(`
        `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-icon`),a(),r(`span`,{class:`hljs-attr`},`color`),a(`=`),r(`span`,{class:`hljs-string`},`"#fff"`),a(),r(`span`,{class:`hljs-attr`},`name`),a(`=`),r(`span`,{class:`hljs-string`},`"window-close"`),a(` @`),r(`span`,{class:`hljs-attr`},`click.stop`),a(`=`),r(`span`,{class:`hljs-string`},`"remove"`),a(`>`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-icon`),a(`>`)]),a(`
      `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`div`),a(`>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-uploader`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`style`),a(`>`)]),r(`span`,{class:`css`},[a(`
`),r(`span`,{class:`hljs-selector-class`},`.custom-remove-button`),a(` {
  `),r(`span`,{class:`hljs-attribute`},`position`),a(`: absolute;
  `),r(`span`,{class:`hljs-attribute`},`top`),a(`: `),r(`span`,{class:`hljs-number`},`0`),a(`;
  `),r(`span`,{class:`hljs-attribute`},`right`),a(`: `),r(`span`,{class:`hljs-number`},`0`),a(`;
  `),r(`span`,{class:`hljs-attribute`},`z-index`),a(`: `),r(`span`,{class:`hljs-number`},`3`),a(`;
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`style`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),s[88]||=r(`h2`,null,`API`,-1),r(`div`,G,[r(`h3`,K,[i(Q,{to:`#Props`},{default:n(()=>[...s[66]||=[a(`#`,-1)]]),_:1}),s[67]||=a(`Props`,-1)]),s[68]||=o(`<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>File list</td><td><em>VarFile[]</em></td><td><code>[]</code></td></tr><tr><td><code>accept</code></td><td>Accepted file type, consistent with the native attribute</td><td><em>string</em></td><td><code>image/*</code></td></tr><tr><td><code>capture</code></td><td>Get the file, the same as the native property</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>multiple</code></td><td>Whether to select multiple files</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>elevation</code></td><td>Elevation level, options <code>true</code> <code>false</code> and level of <code>0-24</code>, not in simple mode</td><td><em>string | number | boolean</em></td><td><code>true</code></td></tr><tr><td><code>removable</code></td><td>Whether the removable</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>maxlength</code></td><td>Maximum number of files</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>maxsize</code></td><td>Maximum file size, the unit is <code>byte</code></td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>previewed</code></td><td>Whether to allow preview</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>prevent-default-preview</code></td><td>Prevent default preview behavior</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>Whether to open ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hide-list</code></td><td>Whether to hide the file list</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>resolve-type</code></td><td>The file preprocessing type, can be set to <code>default</code> <code>file</code> <code>data-url</code> (<code>default</code>, the image type contains dataURL and File object, other types contain only File object. <code>file</code>, which contains only File object. <code>data-url</code>, all file types contain dataURL and File object)</td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>validate-trigger</code></td><td>Timing to trigger validation. The optional value is <code>onChange</code> <code>onRemove</code></td><td><em>UploaderValidateTrigger[]</em></td><td><code>[&#39;onChange&#39;, &#39;onRemove&#39;]</code></td></tr><tr><td><code>rules</code></td><td>Validation rules, return <code>true</code> to indicate verification passes, other types of values ​​will be converted into text as user prompts. <a href="#/en-US/zodValidation">Zod validation</a> is supported since <code>3.5.0</code></td><td><em>((v: VarFile[]) =&gt; any) | ZodType | Array&lt;((v: VarFile[]) =&gt; any) | ZodType&gt;</em></td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,q,[r(`h3`,J,[i(Q,{to:`#VarFile`},{default:n(()=>[...s[69]||=[a(`#`,-1)]]),_:1}),s[70]||=a(`VarFile`,-1)]),s[71]||=o(`<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>file</code></td><td>Native file</td><td><em>File</em></td><td><code>-</code></td></tr><tr><td><code>name</code></td><td>File name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>url</code></td><td>File url</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cover</code></td><td>File cover image</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>fit</code></td><td>Cover image fill mode, Optional value is <code>fill</code> <code>contain</code> <code>cover</code> <code>none</code> <code>scale-down</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>state</code></td><td>File upload state, Optional value is <code>loading</code> <code>success</code> <code>error</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>state</code></td><td>File upload progress, range [0, 100]</td><td><em>number</em></td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,Y,[r(`h3`,X,[i(Q,{to:`#VarFileUtils`},{default:n(()=>[...s[72]||=[a(`#`,-1)]]),_:1}),s[73]||=a(`VarFileUtils`,-1)]),s[74]||=o(`<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>getLoading</code></td><td>Gets a collection of files for <code>state</code> is <code>loading</code></td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>Gets a collection of files for <code>state</code> is <code>success</code></td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>Gets a collection of files for <code>state</code> is <code>error</code></td><td><code>-</code></td><td><code>VarFile[]</code></td></tr></tbody></table>`,1)]),r(`div`,ie,[r(`h3`,ae,[i(Q,{to:`#Methods`},{default:n(()=>[...s[75]||=[a(`#`,-1)]]),_:1}),s[76]||=a(`Methods`,-1)]),s[77]||=o(`<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>chooseFile</code></td><td>Trigger the file selection action and display the file list</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>closePreview</code></td><td>Close preview file popup</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>getLoading</code></td><td>Gets a collection of files for <code>state</code> is <code>loading</code></td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>Gets a collection of files for <code>state</code> is <code>success</code></td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>Gets a collection of files for <code>state</code> is <code>error</code></td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clearing validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding(set to <code>[]</code>)and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,oe,[r(`h3`,se,[i(Q,{to:`#Events`},{default:n(()=>[...s[78]||=[a(`#`,-1)]]),_:1}),s[79]||=a(`Events`,-1)]),s[80]||=o(`<table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>before-filter</code></td><td>Triggered before the event <code>before-read</code> to filter the file list</td><td><code>files: VarFile[]</code></td></tr><tr><td><code>before-read</code></td><td>Triggered returns a false value before a file is read to prevent the file from being read(support promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>after-read</code></td><td>Triggered after the file is read</td><td><code>file: VarFile</code></td></tr><tr><td><code>oversize</code></td><td>Triggered when the file size limit is exceeded</td><td><code>file: VarFile</code></td></tr><tr><td><code>before-remove</code></td><td>Triggered before file deletion, return false value to prevent file deletion (support promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>remove</code></td><td>Triggered when deleting a file. There is a true value to prevent deleting a file (support promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>preview</code></td><td>Triggered when a file is previewed</td><td><code>file: VarFile</code></td></tr><tr><td><code>click-action</code></td><td>Intercept click behavior of upload button</td><td><code>chooseFile: () =&gt; void, event: Event</code></td></tr></tbody></table>`,1)]),r(`div`,ce,[r(`h3`,Z,[i(Q,{to:`#Slots`},{default:n(()=>[...s[81]||=[a(`#`,-1)]]),_:1}),s[82]||=a(`Slots`,-1)]),s[83]||=o(`<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Upload action content</td><td><code>-</code></td></tr><tr><td><code>extra-message</code></td><td>Extra message</td><td><code>-</code></td></tr><tr><td><code>remove-button</code> <em><strong>3.8.0</strong></em></td><td>Remove button</td><td><code>remove: () =&gt; void</code></td></tr></tbody></table>`,1)]),r(`div`,le,[r(`h3`,ue,[i(Q,{to:`#StyleVariables`},{default:n(()=>[...s[84]||=[a(`#`,-1)]]),_:1}),s[85]||=a(`Style Variables`,-1)]),s[86]||=o(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--uploader-action-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-action-icon-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-action-icon-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-action-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-size</code></td><td><code>80px</code></td></tr><tr><td><code>--uploader-file-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-name-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-file-name-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-file-name-font-size</code></td><td><code>12px</code></td></tr><tr><td><code>--uploader-file-name-padding</code></td><td><code>10px</code></td></tr><tr><td><code>--uploader-file-border-radius</code></td><td><code>0</code></td></tr><tr><td><code>--uploader-file-text-align</code></td><td><code>center</code></td></tr><tr><td><code>--uploader-file-close-background</code></td><td><code>rgba(0, 0, 0, 0.3)</code></td></tr><tr><td><code>--uploader-file-close-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-file-close-icon-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--uploader-file-close-icon-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--uploader-file-cover-fit</code></td><td><code>cover</code></td></tr><tr><td><code>--uploader-file-cover-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-preview-video-width</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-preview-video-height</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-file-indicator-height</code></td><td><code>4px</code></td></tr><tr><td><code>--uploader-file-indicator-normal-color</code></td><td><code>var(--color-disabled)</code></td></tr><tr><td><code>--uploader-file-indicator-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--uploader-file-indicator-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--uploader-file-progress-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--uploader-disabled-color</code></td><td><code>#ddd</code></td></tr><tr><td><code>--uploader-disabled-text-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--uploader-loading-background</code></td><td><code>linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))</code></td></tr></tbody></table>`,2)])])}var fe=te(s,[[`render`,de]]);export{fe as default};