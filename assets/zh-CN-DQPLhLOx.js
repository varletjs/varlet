import{G as e,L as t,N as ee,c as n,d as te,g as r,h as i,m as a}from"./runtime-core.esm-bundler-5xw830oL.js";import{t as ne}from"./_plugin-vue_export-helper-V-yks4gF.js";var o={components:{}},s={class:`varlet-site-doc`},c={class:`card`},l={id:`jie4shao4`},u={class:`card`},d={id:`ji1ben3shi3yong4`},f={class:`card`},p={id:`wen2jian4yu4lan3`},m={class:`card`},h={id:`zi4ding4yi4yu4lan3`},g={class:`card`},_={id:`shang4chuan2zhuang4tai4`},v={class:`card`},y={id:`shi3yong4jin4du4tiao2`},b={class:`card`},x={id:`wen2jian4shu4liang4xian4zhi4`},S={class:`card`},C={id:`wen2jian4da4xiao3xian4zhi4`},w={class:`card`},T={id:`wen2jian4lie4biao3guo4lü4`},E={class:`card`},D={id:`shang4chuan2yu4chu3li3`},O={class:`card`},k={id:`shang4chuan2an4niu3dian3ji1shi4jian4`},A={class:`card`},j={id:`jin4yong4`},M={class:`card`},N={id:`zhi1du2`},P={class:`card`},re={id:`shan1chu2qian2chu3li3`},F={class:`card`},I={id:`zi4ding4yi4shang4chuan2yang4shi4`},L={class:`card`},R={id:`zi4duan4jiao4yan4`},z={class:`card`},B={id:`shi3yong4Zo0djin4xing2jiao4yan4`},V={class:`card`},H={id:`zi4ding4yi4xuan4ran3`},U={class:`card`},W={id:`zi4ding4yi4shan1chu2an4niu3`},G={class:`card`},K={id:`shu3xing4`},q={class:`card`},J={id:`VarFile`},Y={class:`card`},X={id:`VarFileUtils`},ie={class:`card`},ae={id:`fang1fa3`},oe={class:`card`},se={id:`shi4jian4`},ce={class:`card`},Z={id:`cha1cao2`},le={class:`card`},ue={id:`yang4shi4bian4liang4`};function de(ne,o,de,fe,pe,me){let Q=t(`router-link`),$=t(`var-site-code-example`);return ee(),te(`div`,s,[o[87]||=n(`h1`,null,`文件上传`,-1),n(`div`,c,[n(`h3`,l,[r(Q,{to:`#jie4shao4`},{default:e(()=>[...o[0]||=[i(`#`,-1)]]),_:1}),o[1]||=i(`介绍`,-1)]),o[2]||=n(`p`,null,[i(`提供了文件读取、图片/视频预览能力。通过监听 `),n(`code`,null,`after-read`),i(` 事件获取文件上传服务器。`)],-1)]),n(`div`,u,[n(`h3`,d,[r(Q,{to:`#ji1ben3shi3yong4`},{default:e(()=>[...o[3]||=[i(`#`,-1)]]),_:1}),o[4]||=i(`基本使用`,-1)]),r($,null,{default:e(()=>[...o[5]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` files = ref([])

`),n(`span`,{class:`hljs-function`},[n(`span`,{class:`hljs-keyword`},`function`),i(),n(`span`,{class:`hljs-title`},`handleAfterRead`),i(`(`),n(`span`,{class:`hljs-params`},`file`),i(`) `)]),i(`{ 
  `),n(`span`,{class:`hljs-built_in`},`console`),i(`.log(file)
}
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-uploader`),i(),n(`span`,{class:`hljs-attr`},`v-model`),i(`=`),n(`span`,{class:`hljs-string`},`"files"`),i(` @`),n(`span`,{class:`hljs-attr`},`after-read`),i(`=`),n(`span`,{class:`hljs-string`},`"handleAfterRead"`),i(`/>`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,f,[n(`h3`,p,[r(Q,{to:`#wen2jian4yu4lan3`},{default:e(()=>[...o[6]||=[i(`#`,-1)]]),_:1}),o[7]||=i(`文件预览`,-1)]),o[9]||=n(`p`,null,`通过分析文件的 url 后缀名判断文件类型，支持图片和视频预览。`,-1),r($,null,{default:e(()=>[...o[8]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
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
`)])],-1)]]),_:1})]),n(`div`,m,[n(`h3`,h,[r(Q,{to:`#zi4ding4yi4yu4lan3`},{default:e(()=>[...o[10]||=[i(`#`,-1)]]),_:1}),o[11]||=i(`自定义预览`,-1)]),r($,null,{default:e(()=>[...o[12]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
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
    `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'自定义预览'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`message`),i(`: file.url.slice(`),n(`span`,{class:`hljs-number`},`0`),i(`, `),n(`span`,{class:`hljs-number`},`100`),i(`)
  })
}
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-uploader`),i(),n(`span`,{class:`hljs-attr`},`v-model`),i(`=`),n(`span`,{class:`hljs-string`},`"files"`),i(),n(`span`,{class:`hljs-attr`},`prevent-default-preview`),i(` @`),n(`span`,{class:`hljs-attr`},`preview`),i(`=`),n(`span`,{class:`hljs-string`},`"handlePreview"`),i(`/>`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,g,[n(`h3`,_,[r(Q,{to:`#shang4chuan2zhuang4tai4`},{default:e(()=>[...o[13]||=[i(`#`,-1)]]),_:1}),o[14]||=i(`上传状态`,-1)]),o[16]||=n(`p`,null,[i(`提供了 `),n(`code`,null,`loading`),i(`、 `),n(`code`,null,`success`),i(`、 `),n(`code`,null,`error`),i(` 三种上传状态，并提供了工具函数快速获取对应状态的文件。`)],-1),r($,null,{default:e(()=>[...o[15]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
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
`)])],-1)]]),_:1})]),n(`div`,v,[n(`h3`,y,[r(Q,{to:`#shi3yong4jin4du4tiao2`},{default:e(()=>[...o[17]||=[i(`#`,-1)]]),_:1}),o[18]||=i(`使用进度条`,-1)]),r($,null,{default:e(()=>[...o[19]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
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
`)])],-1)]]),_:1})]),n(`div`,b,[n(`h3`,x,[r(Q,{to:`#wen2jian4shu4liang4xian4zhi4`},{default:e(()=>[...o[20]||=[i(`#`,-1)]]),_:1}),o[21]||=i(`文件数量限制`,-1)]),r($,null,{default:e(()=>[...o[22]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` files = ref([])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-uploader`),i(),n(`span`,{class:`hljs-attr`},`v-model`),i(`=`),n(`span`,{class:`hljs-string`},`"files"`),i(),n(`span`,{class:`hljs-attr`},`:maxlength`),i(`=`),n(`span`,{class:`hljs-string`},`"1"`),i(`/>`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,S,[n(`h3`,C,[r(Q,{to:`#wen2jian4da4xiao3xian4zhi4`},{default:e(()=>[...o[23]||=[i(`#`,-1)]]),_:1}),o[24]||=i(`文件大小限制`,-1)]),o[26]||=n(`p`,null,[i(`超过限制会被阻止读取，可以通过监听 `),n(`code`,null,`oversize`),i(` 事件获取文件。`)],-1),r($,null,{default:e(()=>[...o[25]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { Snackbar } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'@varlet/ui'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` files = ref([])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-uploader`),i(),n(`span`,{class:`hljs-attr`},`v-model`),i(`=`),n(`span`,{class:`hljs-string`},`"files"`),i(),n(`span`,{class:`hljs-attr`},`:maxsize`),i(`=`),n(`span`,{class:`hljs-string`},`"1024"`),i(` @`),n(`span`,{class:`hljs-attr`},`oversize`),i(`=`),n(`span`,{class:`hljs-string`},`"Snackbar.warning('文件大小超出限制')"`),i(` />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,w,[n(`h3`,T,[r(Q,{to:`#wen2jian4lie4biao3guo4lü4`},{default:e(()=>[...o[27]||=[i(`#`,-1)]]),_:1}),o[28]||=i(`文件列表过滤`,-1)]),o[30]||=n(`p`,null,[i(`通过 `),n(`code`,null,`before-filter`),i(` 事件对文件进行过滤，返回一个被过滤之后的 `),n(`code`,null,`VarFile`),i(` 数组。`)],-1),r($,null,{default:e(()=>[...o[29]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` files = ref([])

`),n(`span`,{class:`hljs-function`},[n(`span`,{class:`hljs-keyword`},`function`),i(),n(`span`,{class:`hljs-title`},`handleBeforeFilter`),i(`(`),n(`span`,{class:`hljs-params`},`files`),i(`) `)]),i(`{
  `),n(`span`,{class:`hljs-keyword`},`return`),i(` files.filter(`),n(`span`,{class:`hljs-function`},[n(`span`,{class:`hljs-params`},`file`),i(` =>`)]),i(` file.name.endsWith(`),n(`span`,{class:`hljs-string`},`'png'`),i(`))
}
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-uploader`),i(),n(`span`,{class:`hljs-attr`},`v-model`),i(`=`),n(`span`,{class:`hljs-string`},`"files"`),i(),n(`span`,{class:`hljs-attr`},`multiple`),i(` @`),n(`span`,{class:`hljs-attr`},`before-filter`),i(`=`),n(`span`,{class:`hljs-string`},`"handleBeforeFilter"`),i(` />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`

`)])],-1)]]),_:1})]),n(`div`,E,[n(`h3`,D,[r(Q,{to:`#shang4chuan2yu4chu3li3`},{default:e(()=>[...o[31]||=[i(`#`,-1)]]),_:1}),o[32]||=i(`上传预处理`,-1)]),o[34]||=n(`p`,null,[i(`通过注册 `),n(`code`,null,`before-read`),i(` 事件对文件进行操作，返回假值阻止文件读取。`)],-1),r($,null,{default:e(()=>[...o[33]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { Snackbar } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'@varlet/ui'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` files = ref([])

`),n(`span`,{class:`hljs-function`},[n(`span`,{class:`hljs-keyword`},`function`),i(),n(`span`,{class:`hljs-title`},`handleBeforeRead`),i(`(`),n(`span`,{class:`hljs-params`},`file`),i(`) `)]),i(`{
  `),n(`span`,{class:`hljs-keyword`},`if`),i(` (file.file.size <= `),n(`span`,{class:`hljs-number`},`1`),i(` * `),n(`span`,{class:`hljs-number`},`1024`),i(` * `),n(`span`,{class:`hljs-number`},`1024`),i(`) {
    Snackbar.success(`),n(`span`,{class:`hljs-string`},`'文件小于1M，上传成功'`),i(`)
    `),n(`span`,{class:`hljs-keyword`},`return`),i(),n(`span`,{class:`hljs-literal`},`true`),i(`
  } `),n(`span`,{class:`hljs-keyword`},`else`),i(` {
    Snackbar.warning(`),n(`span`,{class:`hljs-string`},`'文件大于1M，不能上传'`),i(`)
    `),n(`span`,{class:`hljs-keyword`},`return`),i(),n(`span`,{class:`hljs-literal`},`false`),i(`
  }
}
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-uploader`),i(),n(`span`,{class:`hljs-attr`},`v-model`),i(`=`),n(`span`,{class:`hljs-string`},`"files"`),i(` @`),n(`span`,{class:`hljs-attr`},`before-read`),i(`=`),n(`span`,{class:`hljs-string`},`"handleBeforeRead"`),i(`/>`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,O,[n(`h3`,k,[r(Q,{to:`#shang4chuan2an4niu3dian3ji1shi4jian4`},{default:e(()=>[...o[35]||=[i(`#`,-1)]]),_:1}),o[36]||=i(`上传按钮点击事件`,-1)]),o[38]||=n(`p`,null,[i(`通过注册 `),n(`code`,null,`click-action`),i(` 事件可以拦截上传按钮的点击行为，通过回调中的 `),n(`code`,null,`chooseFile`),i(` 方法进行手动触发浏览器选择文件操作。`)],-1),r($,null,{default:e(()=>[...o[37]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
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
`)])],-1)]]),_:1})]),n(`div`,A,[n(`h3`,j,[r(Q,{to:`#jin4yong4`},{default:e(()=>[...o[39]||=[i(`#`,-1)]]),_:1}),o[40]||=i(`禁用`,-1)]),r($,null,{default:e(()=>[...o[41]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` files = ref([])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-uploader`),i(),n(`span`,{class:`hljs-attr`},`disabled`),i(),n(`span`,{class:`hljs-attr`},`v-model`),i(`=`),n(`span`,{class:`hljs-string`},`"files"`),i(`/>`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,M,[n(`h3`,N,[r(Q,{to:`#zhi1du2`},{default:e(()=>[...o[42]||=[i(`#`,-1)]]),_:1}),o[43]||=i(`只读`,-1)]),r($,null,{default:e(()=>[...o[44]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` files = ref([])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-uploader`),i(),n(`span`,{class:`hljs-attr`},`readonly`),i(),n(`span`,{class:`hljs-attr`},`v-model`),i(`=`),n(`span`,{class:`hljs-string`},`"files"`),i(`/>`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,P,[n(`h3`,re,[r(Q,{to:`#shan1chu2qian2chu3li3`},{default:e(()=>[...o[45]||=[i(`#`,-1)]]),_:1}),o[46]||=i(`删除前处理`,-1)]),o[48]||=n(`p`,null,[i(`删除文件之前会触发 `),n(`code`,null,`before-remove`),i(` 事件，返回假值阻止删除操作。`)],-1),r($,null,{default:e(()=>[...o[47]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
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
    `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'是否删除?'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`message`),i(`: `),n(`span`,{class:`hljs-string`},`'删除后无法撤回'`),i(`
  })

  `),n(`span`,{class:`hljs-keyword`},`return`),i(` action === `),n(`span`,{class:`hljs-string`},`'confirm'`),i(`
}
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-uploader`),i(),n(`span`,{class:`hljs-attr`},`v-model`),i(`=`),n(`span`,{class:`hljs-string`},`"files"`),i(` @`),n(`span`,{class:`hljs-attr`},`before-remove`),i(`=`),n(`span`,{class:`hljs-string`},`"handleBeforeRemove"`),i(` />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,F,[n(`h3`,I,[r(Q,{to:`#zi4ding4yi4shang4chuan2yang4shi4`},{default:e(()=>[...o[49]||=[i(`#`,-1)]]),_:1}),o[50]||=i(`自定义上传样式`,-1)]),r($,null,{default:e(()=>[...o[51]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` files = ref()
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-uploader`),i(),n(`span`,{class:`hljs-attr`},`v-model`),i(`=`),n(`span`,{class:`hljs-string`},`"files"`),i(`>`)]),i(`
    `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-button`),i(),n(`span`,{class:`hljs-attr`},`type`),i(`=`),n(`span`,{class:`hljs-string`},`"primary"`),i(`>`)]),i(`上传`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`var-button`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`var-uploader`),i(`>`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,L,[n(`h3`,R,[r(Q,{to:`#zi4duan4jiao4yan4`},{default:e(()=>[...o[52]||=[i(`#`,-1)]]),_:1}),o[53]||=i(`字段校验`,-1)]),o[55]||=n(`p`,null,[i(`通过传入一个校验器数组可以对值进行校验，校验器返回 `),n(`code`,null,`true`),i(` 则为校验通过。 以外的值将转换为文本作为用户提示。 第二个参数是一个工具函数集合，可以快速获取符合状态的文件集合。`)],-1),r($,null,{default:e(()=>[...o[54]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
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
    `),n(`span`,{class:`hljs-attr`},`:rules`),i(`=`),n(`span`,{class:`hljs-string`},`"(v, u) => u.getError().length === 0 || '存在上传失败的文件'"`),i(`
    `),n(`span`,{class:`hljs-attr`},`v-model`),i(`=`),n(`span`,{class:`hljs-string`},`"files"`),i(`
  />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,z,[n(`h3`,B,[r(Q,{to:`#shi3yong4Zo0djin4xing2jiao4yan4`},{default:e(()=>[...o[56]||=[i(`#`,-1)]]),_:1}),o[57]||=i(`使用 Zod 进行校验`,-1)]),r($,null,{default:e(()=>[...o[58]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
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
      z.array(z.any()).refine(v => v.filter(file => file.state === 'error').length === 0, '存在上传失败的文件')
    "`),i(`
    `),n(`span`,{class:`hljs-attr`},`v-model`),i(`=`),n(`span`,{class:`hljs-string`},`"files"`),i(`
  />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,V,[n(`h3`,H,[r(Q,{to:`#zi4ding4yi4xuan4ran3`},{default:e(()=>[...o[59]||=[i(`#`,-1)]]),_:1}),o[60]||=i(`自定义渲染`,-1)]),o[62]||=n(`p`,null,[i(`通过 `),n(`code`,null,`hide-list`),i(` 隐藏组件的文件列表，自定义文件列表的渲染逻辑。`)],-1),r($,null,{default:e(()=>[...o[61]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
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
`)])],-1)]]),_:1})]),n(`div`,U,[n(`h3`,W,[r(Q,{to:`#zi4ding4yi4shan1chu2an4niu3`},{default:e(()=>[...o[63]||=[i(`#`,-1)]]),_:1}),o[64]||=i(`自定义删除按钮`,-1)]),r($,null,{default:e(()=>[...o[65]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
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
`)])],-1)]]),_:1})]),o[88]||=n(`h2`,null,`API`,-1),n(`div`,G,[n(`h3`,K,[r(Q,{to:`#shu3xing4`},{default:e(()=>[...o[66]||=[i(`#`,-1)]]),_:1}),o[67]||=i(`属性`,-1)]),o[68]||=a(`<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>文件列表</td><td><em>VarFile[]</em></td><td><code>[]</code></td></tr><tr><td><code>accept</code></td><td>接受的文件类型，与原生属性一致</td><td><em>string</em></td><td><code>image/*</code></td></tr><tr><td><code>capture</code></td><td>获取文件方式，与原生属性一致</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>multiple</code></td><td>是否多选文件</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>readonly</code></td><td>是否只读</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>elevation</code></td><td>海拔高度，可选值为 <code>true</code> <code>false</code> 和 <code>0-24</code> 的等级, 不为简单模式时生效</td><td><em>string | number | boolean</em></td><td><code>true</code></td></tr><tr><td><code>removable</code></td><td>是否可以删除</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>maxlength</code></td><td>最大文件个数</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>maxsize</code></td><td>最大文件大小，单位为 <code>byte</code></td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>previewed</code></td><td>是否允许预览</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>prevent-default-preview</code></td><td>阻止默认预览行为</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>是否开启水波纹</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hide-list</code></td><td>是否隐藏文件列表</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>resolve-type</code></td><td>文件预处理类型，可选值为 <code>default</code> <code>file</code> <code>data-url</code>（<code>default</code>，图片文件包含 dataURL 编码和 File 对象，其他类型仅包含 File 对象。<code>file</code>，仅包含 File 对象。<code>data-url</code>，所有文件类型都包含 dataURL 编码和 File 对象）</td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>validate-trigger</code></td><td>触发验证的时机， 可选值为 <code>onChange</code> <code>onRemove</code></td><td><em>UploaderValidateTrigger[]</em></td><td><code>[&#39;onChange&#39;, &#39;onRemove&#39;]</code></td></tr><tr><td><code>rules</code></td><td>验证规则，返回 <code>true</code> 表示验证通过，其它类型的值将转换为文本作为用户提示。自 <code>3.5.0</code> 开始支持 <a href="#/zh-CN/zodValidation">Zod 验证</a></td><td><em>((v: VarFile[]) =&gt; any) | ZodType | Array&lt;((v: VarFile[]) =&gt; any) | ZodType&gt;</em></td><td><code>-</code></td></tr></tbody></table>`,1)]),n(`div`,q,[n(`h3`,J,[r(Q,{to:`#VarFile`},{default:e(()=>[...o[69]||=[i(`#`,-1)]]),_:1}),o[70]||=i(`VarFile`,-1)]),o[71]||=a(`<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>file</code></td><td>原生文件</td><td><em>File</em></td><td><code>-</code></td></tr><tr><td><code>name</code></td><td>文件名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>url</code></td><td>文件地址</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cover</code></td><td>封面图</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>fit</code></td><td>封面图填充模式，可选值为 <code>fill</code> <code>contain</code> <code>cover</code> <code>none</code> <code>scale-down</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>state</code></td><td>文件上传状态，可选值为 <code>loading</code> <code>success</code> <code>error</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>progress</code></td><td>文件上传进度，范围 [0, 100]</td><td><em>number</em></td><td><code>-</code></td></tr></tbody></table>`,1)]),n(`div`,Y,[n(`h3`,X,[r(Q,{to:`#VarFileUtils`},{default:e(()=>[...o[72]||=[i(`#`,-1)]]),_:1}),o[73]||=i(`VarFileUtils`,-1)]),o[74]||=a(`<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>getLoading</code></td><td>获取 <code>state</code> 等于 <code>loading</code> 的文件集合</td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>获取 <code>state</code> 等于 <code>success</code> 的文件集合</td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>获取 <code>state</code> 等于 <code>error</code> 的文件集合</td><td><code>-</code></td><td><code>VarFile[]</code></td></tr></tbody></table>`,1)]),n(`div`,ie,[n(`h3`,ae,[r(Q,{to:`#fang1fa3`},{default:e(()=>[...o[75]||=[i(`#`,-1)]]),_:1}),o[76]||=i(`方法`,-1)]),o[77]||=a(`<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>chooseFile</code></td><td>触发选择文件动作，显示文件列表</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>closePreview</code></td><td>关闭预览文件弹出层</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>getLoading</code></td><td>获取 <code>state</code> 等于 <code>loading</code> 的文件集合</td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>获取 <code>state</code> 等于 <code>success</code> 的文件集合</td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>获取 <code>state</code> 等于 <code>error</code> 的文件集合</td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>validate</code></td><td>触发校验</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>清空校验信息</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>清空绑定的值(设置为 <code>[]</code>)和校验信息</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>`,1)]),n(`div`,oe,[n(`h3`,se,[r(Q,{to:`#shi4jian4`},{default:e(()=>[...o[78]||=[i(`#`,-1)]]),_:1}),o[79]||=i(`事件`,-1)]),o[80]||=a(`<table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>before-filter</code></td><td><code>before-read</code> 前触发，对文件列表进行过滤</td><td><code>files: VarFile[]</code></td></tr><tr><td><code>before-read</code></td><td>文件读取前触发，返回假值阻止文件读取(支持 promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>after-read</code></td><td>文件读取后触发</td><td><code>file: VarFile</code></td></tr><tr><td><code>oversize</code></td><td>文件超过限制大小时触发</td><td><code>file: VarFile</code></td></tr><tr><td><code>before-remove</code></td><td>文件删除前触发，返回假值阻止文件删除(支持 promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>remove</code></td><td>文件删除时触发</td><td><code>file: VarFile</code></td></tr><tr><td><code>preview</code></td><td>文件预览时触发</td><td><code>file: VarFile</code></td></tr><tr><td><code>click-action</code></td><td>拦截上传按钮的点击行为</td><td><code>chooseFile: () =&gt; void, event: Event</code></td></tr></tbody></table>`,1)]),n(`div`,ce,[n(`h3`,Z,[r(Q,{to:`#cha1cao2`},{default:e(()=>[...o[81]||=[i(`#`,-1)]]),_:1}),o[82]||=i(`插槽`,-1)]),o[83]||=a(`<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>上传按钮内容</td><td><code>-</code></td></tr><tr><td><code>extra-message</code></td><td>附加信息</td><td><code>-</code></td></tr><tr><td><code>remove-button</code> <em><strong>3.8.0</strong></em></td><td>删除按钮</td><td><code>remove: () =&gt; void</code></td></tr></tbody></table>`,1)]),n(`div`,le,[n(`h3`,ue,[r(Q,{to:`#yang4shi4bian4liang4`},{default:e(()=>[...o[84]||=[i(`#`,-1)]]),_:1}),o[85]||=i(`样式变量`,-1)]),o[86]||=a(`<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--uploader-action-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-action-icon-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-action-icon-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-action-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-size</code></td><td><code>80px</code></td></tr><tr><td><code>--uploader-file-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-name-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-file-name-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-file-name-font-size</code></td><td><code>12px</code></td></tr><tr><td><code>--uploader-file-name-padding</code></td><td><code>10px</code></td></tr><tr><td><code>--uploader-file-border-radius</code></td><td><code>0</code></td></tr><tr><td><code>--uploader-file-text-align</code></td><td><code>center</code></td></tr><tr><td><code>--uploader-file-close-background</code></td><td><code>rgba(0, 0, 0, 0.3)</code></td></tr><tr><td><code>--uploader-file-close-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-file-close-icon-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--uploader-file-close-icon-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--uploader-file-cover-fit</code></td><td><code>cover</code></td></tr><tr><td><code>--uploader-file-cover-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-preview-video-width</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-preview-video-height</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-file-indicator-height</code></td><td><code>4px</code></td></tr><tr><td><code>--uploader-file-indicator-normal-color</code></td><td><code>var(--color-disabled)</code></td></tr><tr><td><code>--uploader-file-indicator-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--uploader-file-indicator-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--uploader-file-progress-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--uploader-disabled-color</code></td><td><code>#ddd</code></td></tr><tr><td><code>--uploader-disabled-text-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--uploader-loading-background</code></td><td><code>linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))</code></td></tr></tbody></table>`,2)])])}var fe=ne(o,[[`render`,de]]);export{fe as default};