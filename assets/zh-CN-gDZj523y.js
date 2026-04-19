import{L as e,N as t,W as n,c as r,d as ee,g as i,h as a,m as o}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as te}from"./_plugin-vue_export-helper-V-yks4gF.js";var s={components:{}},ne={class:`varlet-site-doc`},c={class:`card`},l={id:`jie4shao4`},u={class:`card`},d={id:`ji1ben3shi3yong4`},f={class:`card`},p={id:`wen2jian4yu4lan3`},m={class:`card`},h={id:`zi4ding4yi4yu4lan3`},g={class:`card`},_={id:`shang4chuan2zhuang4tai4`},v={class:`card`},y={id:`shi3yong4jin4du4tiao2`},b={class:`card`},x={id:`wen2jian4shu4liang4xian4zhi4`},S={class:`card`},C={id:`wen2jian4da4xiao3xian4zhi4`},w={class:`card`},T={id:`wen2jian4lie4biao3guo4lü4`},E={class:`card`},D={id:`shang4chuan2yu4chu3li3`},O={class:`card`},k={id:`shang4chuan2an4niu3dian3ji1shi4jian4`},A={class:`card`},j={id:`jin4yong4`},M={class:`card`},N={id:`zhi1du2`},P={class:`card`},re={id:`shan1chu2qian2chu3li3`},F={class:`card`},I={id:`zi4ding4yi4shang4chuan2yang4shi4`},L={class:`card`},R={id:`zi4duan4jiao4yan4`},z={class:`card`},B={id:`shi3yong4Zo0djin4xing2jiao4yan4`},V={class:`card`},H={id:`zi4ding4yi4xuan4ran3`},U={class:`card`},W={id:`zi4ding4yi4shan1chu2an4niu3`},G={class:`card`},K={id:`shu3xing4`},q={class:`card`},J={id:`VarFile`},Y={class:`card`},X={id:`VarFileUtils`},ie={class:`card`},ae={id:`fang1fa3`},oe={class:`card`},se={id:`shi4jian4`},ce={class:`card`},Z={id:`cha1cao2`},le={class:`card`},ue={id:`yang4shi4bian4liang4`};function de(te,s,de,fe,pe,me){let Q=e(`router-link`),$=e(`var-site-code-example`);return t(),ee(`div`,ne,[s[87]||=r(`h1`,null,`文件上传`,-1),r(`div`,c,[r(`h3`,l,[i(Q,{to:`#jie4shao4`},{default:n(()=>[...s[0]||=[a(`#`,-1)]]),_:1}),s[1]||=a(`介绍`,-1)]),s[2]||=r(`p`,null,[a(`提供了文件读取、图片/视频预览能力。通过监听 `),r(`code`,null,`after-read`),a(` 事件获取文件上传服务器。`)],-1)]),r(`div`,u,[r(`h3`,d,[i(Q,{to:`#ji1ben3shi3yong4`},{default:n(()=>[...s[3]||=[a(`#`,-1)]]),_:1}),s[4]||=a(`基本使用`,-1)]),i($,null,{default:n(()=>[...s[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` files = ref([])

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),a(),r(`span`,{class:`hljs-title`},`handleAfterRead`),a(`(`),r(`span`,{class:`hljs-params`},`file`),a(`) `)]),a(`{ 
  `),r(`span`,{class:`hljs-built_in`},`console`),a(`.log(file)
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-uploader`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"files"`),a(` @`),r(`span`,{class:`hljs-attr`},`after-read`),a(`=`),r(`span`,{class:`hljs-string`},`"handleAfterRead"`),a(`/>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,f,[r(`h3`,p,[i(Q,{to:`#wen2jian4yu4lan3`},{default:n(()=>[...s[6]||=[a(`#`,-1)]]),_:1}),s[7]||=a(`文件预览`,-1)]),s[9]||=r(`p`,null,`通过分析文件的 url 后缀名判断文件类型，支持图片和视频预览。`,-1),i($,null,{default:n(()=>[...s[8]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
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
`)])],-1)]]),_:1})]),r(`div`,m,[r(`h3`,h,[i(Q,{to:`#zi4ding4yi4yu4lan3`},{default:n(()=>[...s[10]||=[a(`#`,-1)]]),_:1}),s[11]||=a(`自定义预览`,-1)]),i($,null,{default:n(()=>[...s[12]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
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
    `),r(`span`,{class:`hljs-attr`},`title`),a(`: `),r(`span`,{class:`hljs-string`},`'自定义预览'`),a(`,
    `),r(`span`,{class:`hljs-attr`},`message`),a(`: file.url.slice(`),r(`span`,{class:`hljs-number`},`0`),a(`, `),r(`span`,{class:`hljs-number`},`100`),a(`)
  })
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-uploader`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"files"`),a(),r(`span`,{class:`hljs-attr`},`prevent-default-preview`),a(` @`),r(`span`,{class:`hljs-attr`},`preview`),a(`=`),r(`span`,{class:`hljs-string`},`"handlePreview"`),a(`/>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,g,[r(`h3`,_,[i(Q,{to:`#shang4chuan2zhuang4tai4`},{default:n(()=>[...s[13]||=[a(`#`,-1)]]),_:1}),s[14]||=a(`上传状态`,-1)]),s[16]||=r(`p`,null,[a(`提供了 `),r(`code`,null,`loading`),a(`、 `),r(`code`,null,`success`),a(`、 `),r(`code`,null,`error`),a(` 三种上传状态，并提供了工具函数快速获取对应状态的文件。`)],-1),i($,null,{default:n(()=>[...s[15]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
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
`)])],-1)]]),_:1})]),r(`div`,v,[r(`h3`,y,[i(Q,{to:`#shi3yong4jin4du4tiao2`},{default:n(()=>[...s[17]||=[a(`#`,-1)]]),_:1}),s[18]||=a(`使用进度条`,-1)]),i($,null,{default:n(()=>[...s[19]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
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
`)])],-1)]]),_:1})]),r(`div`,b,[r(`h3`,x,[i(Q,{to:`#wen2jian4shu4liang4xian4zhi4`},{default:n(()=>[...s[20]||=[a(`#`,-1)]]),_:1}),s[21]||=a(`文件数量限制`,-1)]),i($,null,{default:n(()=>[...s[22]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` files = ref([])
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-uploader`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"files"`),a(),r(`span`,{class:`hljs-attr`},`:maxlength`),a(`=`),r(`span`,{class:`hljs-string`},`"1"`),a(`/>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,S,[r(`h3`,C,[i(Q,{to:`#wen2jian4da4xiao3xian4zhi4`},{default:n(()=>[...s[23]||=[a(`#`,-1)]]),_:1}),s[24]||=a(`文件大小限制`,-1)]),s[26]||=r(`p`,null,[a(`超过限制会被阻止读取，可以通过监听 `),r(`code`,null,`oversize`),a(` 事件获取文件。`)],-1),i($,null,{default:n(()=>[...s[25]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` files = ref([])
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-uploader`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"files"`),a(),r(`span`,{class:`hljs-attr`},`:maxsize`),a(`=`),r(`span`,{class:`hljs-string`},`"1024"`),a(` @`),r(`span`,{class:`hljs-attr`},`oversize`),a(`=`),r(`span`,{class:`hljs-string`},`"Snackbar.warning('文件大小超出限制')"`),a(` />`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,w,[r(`h3`,T,[i(Q,{to:`#wen2jian4lie4biao3guo4lü4`},{default:n(()=>[...s[27]||=[a(`#`,-1)]]),_:1}),s[28]||=a(`文件列表过滤`,-1)]),s[30]||=r(`p`,null,[a(`通过 `),r(`code`,null,`before-filter`),a(` 事件对文件进行过滤，返回一个被过滤之后的 `),r(`code`,null,`VarFile`),a(` 数组。`)],-1),i($,null,{default:n(()=>[...s[29]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` files = ref([])

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),a(),r(`span`,{class:`hljs-title`},`handleBeforeFilter`),a(`(`),r(`span`,{class:`hljs-params`},`files`),a(`) `)]),a(`{
  `),r(`span`,{class:`hljs-keyword`},`return`),a(` files.filter(`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-params`},`file`),a(` =>`)]),a(` file.name.endsWith(`),r(`span`,{class:`hljs-string`},`'png'`),a(`))
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-uploader`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"files"`),a(),r(`span`,{class:`hljs-attr`},`multiple`),a(` @`),r(`span`,{class:`hljs-attr`},`before-filter`),a(`=`),r(`span`,{class:`hljs-string`},`"handleBeforeFilter"`),a(` />`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`

`)])],-1)]]),_:1})]),r(`div`,E,[r(`h3`,D,[i(Q,{to:`#shang4chuan2yu4chu3li3`},{default:n(()=>[...s[31]||=[a(`#`,-1)]]),_:1}),s[32]||=a(`上传预处理`,-1)]),s[34]||=r(`p`,null,[a(`通过注册 `),r(`code`,null,`before-read`),a(` 事件对文件进行操作，返回假值阻止文件读取。`)],-1),i($,null,{default:n(()=>[...s[33]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` files = ref([])

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),a(),r(`span`,{class:`hljs-title`},`handleBeforeRead`),a(`(`),r(`span`,{class:`hljs-params`},`file`),a(`) `)]),a(`{
  `),r(`span`,{class:`hljs-keyword`},`if`),a(` (file.file.size <= `),r(`span`,{class:`hljs-number`},`1`),a(` * `),r(`span`,{class:`hljs-number`},`1024`),a(` * `),r(`span`,{class:`hljs-number`},`1024`),a(`) {
    Snackbar.success(`),r(`span`,{class:`hljs-string`},`'文件小于1M，上传成功'`),a(`)
    `),r(`span`,{class:`hljs-keyword`},`return`),a(),r(`span`,{class:`hljs-literal`},`true`),a(`
  } `),r(`span`,{class:`hljs-keyword`},`else`),a(` {
    Snackbar.warning(`),r(`span`,{class:`hljs-string`},`'文件大于1M，不能上传'`),a(`)
    `),r(`span`,{class:`hljs-keyword`},`return`),a(),r(`span`,{class:`hljs-literal`},`false`),a(`
  }
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-uploader`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"files"`),a(` @`),r(`span`,{class:`hljs-attr`},`before-read`),a(`=`),r(`span`,{class:`hljs-string`},`"handleBeforeRead"`),a(`/>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,O,[r(`h3`,k,[i(Q,{to:`#shang4chuan2an4niu3dian3ji1shi4jian4`},{default:n(()=>[...s[35]||=[a(`#`,-1)]]),_:1}),s[36]||=a(`上传按钮点击事件`,-1)]),s[38]||=r(`p`,null,[a(`通过注册 `),r(`code`,null,`click-action`),a(` 事件可以拦截上传按钮的点击行为，通过回调中的 `),r(`code`,null,`chooseFile`),a(` 方法进行手动触发浏览器选择文件操作。`)],-1),i($,null,{default:n(()=>[...s[37]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
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
`)])],-1)]]),_:1})]),r(`div`,A,[r(`h3`,j,[i(Q,{to:`#jin4yong4`},{default:n(()=>[...s[39]||=[a(`#`,-1)]]),_:1}),s[40]||=a(`禁用`,-1)]),i($,null,{default:n(()=>[...s[41]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` files = ref([])
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-uploader`),a(),r(`span`,{class:`hljs-attr`},`disabled`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"files"`),a(`/>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,M,[r(`h3`,N,[i(Q,{to:`#zhi1du2`},{default:n(()=>[...s[42]||=[a(`#`,-1)]]),_:1}),s[43]||=a(`只读`,-1)]),i($,null,{default:n(()=>[...s[44]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` files = ref([])
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-uploader`),a(),r(`span`,{class:`hljs-attr`},`readonly`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"files"`),a(`/>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,P,[r(`h3`,re,[i(Q,{to:`#shan1chu2qian2chu3li3`},{default:n(()=>[...s[45]||=[a(`#`,-1)]]),_:1}),s[46]||=a(`删除前处理`,-1)]),s[48]||=r(`p`,null,[a(`删除文件之前会触发 `),r(`code`,null,`before-remove`),a(` 事件，返回假值阻止删除操作。`)],-1),i($,null,{default:n(()=>[...s[47]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
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
    `),r(`span`,{class:`hljs-attr`},`title`),a(`: `),r(`span`,{class:`hljs-string`},`'是否删除?'`),a(`,
    `),r(`span`,{class:`hljs-attr`},`message`),a(`: `),r(`span`,{class:`hljs-string`},`'删除后无法撤回'`),a(`
  })

  `),r(`span`,{class:`hljs-keyword`},`return`),a(` action === `),r(`span`,{class:`hljs-string`},`'confirm'`),a(`
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-uploader`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"files"`),a(` @`),r(`span`,{class:`hljs-attr`},`before-remove`),a(`=`),r(`span`,{class:`hljs-string`},`"handleBeforeRemove"`),a(` />`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,F,[r(`h3`,I,[i(Q,{to:`#zi4ding4yi4shang4chuan2yang4shi4`},{default:n(()=>[...s[49]||=[a(`#`,-1)]]),_:1}),s[50]||=a(`自定义上传样式`,-1)]),i($,null,{default:n(()=>[...s[51]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` files = ref()
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-uploader`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"files"`),a(`>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"primary"`),a(`>`)]),a(`上传`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-uploader`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,L,[r(`h3`,R,[i(Q,{to:`#zi4duan4jiao4yan4`},{default:n(()=>[...s[52]||=[a(`#`,-1)]]),_:1}),s[53]||=a(`字段校验`,-1)]),s[55]||=r(`p`,null,[a(`通过传入一个校验器数组可以对值进行校验，校验器返回 `),r(`code`,null,`true`),a(` 则为校验通过。 以外的值将转换为文本作为用户提示。 第二个参数是一个工具函数集合，可以快速获取符合状态的文件集合。`)],-1),i($,null,{default:n(()=>[...s[54]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
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
    `),r(`span`,{class:`hljs-attr`},`:rules`),a(`=`),r(`span`,{class:`hljs-string`},`"(v, u) => u.getError().length === 0 || '存在上传失败的文件'"`),a(`
    `),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"files"`),a(`
  />`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,z,[r(`h3`,B,[i(Q,{to:`#shi3yong4Zo0djin4xing2jiao4yan4`},{default:n(()=>[...s[56]||=[a(`#`,-1)]]),_:1}),s[57]||=a(`使用 Zod 进行校验`,-1)]),i($,null,{default:n(()=>[...s[58]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
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
      z.array(z.any()).refine(v => v.filter(file => file.state === 'error').length === 0, '存在上传失败的文件')
    "`),a(`
    `),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"files"`),a(`
  />`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,V,[r(`h3`,H,[i(Q,{to:`#zi4ding4yi4xuan4ran3`},{default:n(()=>[...s[59]||=[a(`#`,-1)]]),_:1}),s[60]||=a(`自定义渲染`,-1)]),s[62]||=r(`p`,null,[a(`通过 `),r(`code`,null,`hide-list`),a(` 隐藏组件的文件列表，自定义文件列表的渲染逻辑。`)],-1),i($,null,{default:n(()=>[...s[61]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
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
`)])],-1)]]),_:1})]),r(`div`,U,[r(`h3`,W,[i(Q,{to:`#zi4ding4yi4shan1chu2an4niu3`},{default:n(()=>[...s[63]||=[a(`#`,-1)]]),_:1}),s[64]||=a(`自定义删除按钮`,-1)]),i($,null,{default:n(()=>[...s[65]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
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
`)])],-1)]]),_:1})]),s[88]||=r(`h2`,null,`API`,-1),r(`div`,G,[r(`h3`,K,[i(Q,{to:`#shu3xing4`},{default:n(()=>[...s[66]||=[a(`#`,-1)]]),_:1}),s[67]||=a(`属性`,-1)]),s[68]||=o(`<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>文件列表</td><td><em>VarFile[]</em></td><td><code>[]</code></td></tr><tr><td><code>accept</code></td><td>接受的文件类型，与原生属性一致</td><td><em>string</em></td><td><code>image/*</code></td></tr><tr><td><code>capture</code></td><td>获取文件方式，与原生属性一致</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>multiple</code></td><td>是否多选文件</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>readonly</code></td><td>是否只读</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>elevation</code></td><td>海拔高度，可选值为 <code>true</code> <code>false</code> 和 <code>0-24</code> 的等级, 不为简单模式时生效</td><td><em>string | number | boolean</em></td><td><code>true</code></td></tr><tr><td><code>removable</code></td><td>是否可以删除</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>maxlength</code></td><td>最大文件个数</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>maxsize</code></td><td>最大文件大小，单位为 <code>byte</code></td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>previewed</code></td><td>是否允许预览</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>prevent-default-preview</code></td><td>阻止默认预览行为</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>是否开启水波纹</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hide-list</code></td><td>是否隐藏文件列表</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>resolve-type</code></td><td>文件预处理类型，可选值为 <code>default</code> <code>file</code> <code>data-url</code>（<code>default</code>，图片文件包含 dataURL 编码和 File 对象，其他类型仅包含 File 对象。<code>file</code>，仅包含 File 对象。<code>data-url</code>，所有文件类型都包含 dataURL 编码和 File 对象）</td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>validate-trigger</code></td><td>触发验证的时机， 可选值为 <code>onChange</code> <code>onRemove</code></td><td><em>UploaderValidateTrigger[]</em></td><td><code>[&#39;onChange&#39;, &#39;onRemove&#39;]</code></td></tr><tr><td><code>rules</code></td><td>验证规则，返回 <code>true</code> 表示验证通过，其它类型的值将转换为文本作为用户提示。自 <code>3.5.0</code> 开始支持 <a href="#/zh-CN/zodValidation">Zod 验证</a></td><td><em>((v: VarFile[]) =&gt; any) | ZodType | Array&lt;((v: VarFile[]) =&gt; any) | ZodType&gt;</em></td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,q,[r(`h3`,J,[i(Q,{to:`#VarFile`},{default:n(()=>[...s[69]||=[a(`#`,-1)]]),_:1}),s[70]||=a(`VarFile`,-1)]),s[71]||=o(`<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>file</code></td><td>原生文件</td><td><em>File</em></td><td><code>-</code></td></tr><tr><td><code>name</code></td><td>文件名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>url</code></td><td>文件地址</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cover</code></td><td>封面图</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>fit</code></td><td>封面图填充模式，可选值为 <code>fill</code> <code>contain</code> <code>cover</code> <code>none</code> <code>scale-down</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>state</code></td><td>文件上传状态，可选值为 <code>loading</code> <code>success</code> <code>error</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>progress</code></td><td>文件上传进度，范围 [0, 100]</td><td><em>number</em></td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,Y,[r(`h3`,X,[i(Q,{to:`#VarFileUtils`},{default:n(()=>[...s[72]||=[a(`#`,-1)]]),_:1}),s[73]||=a(`VarFileUtils`,-1)]),s[74]||=o(`<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>getLoading</code></td><td>获取 <code>state</code> 等于 <code>loading</code> 的文件集合</td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>获取 <code>state</code> 等于 <code>success</code> 的文件集合</td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>获取 <code>state</code> 等于 <code>error</code> 的文件集合</td><td><code>-</code></td><td><code>VarFile[]</code></td></tr></tbody></table>`,1)]),r(`div`,ie,[r(`h3`,ae,[i(Q,{to:`#fang1fa3`},{default:n(()=>[...s[75]||=[a(`#`,-1)]]),_:1}),s[76]||=a(`方法`,-1)]),s[77]||=o(`<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>chooseFile</code></td><td>触发选择文件动作，显示文件列表</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>closePreview</code></td><td>关闭预览文件弹出层</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>getLoading</code></td><td>获取 <code>state</code> 等于 <code>loading</code> 的文件集合</td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>获取 <code>state</code> 等于 <code>success</code> 的文件集合</td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>获取 <code>state</code> 等于 <code>error</code> 的文件集合</td><td><code>-</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>validate</code></td><td>触发校验</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>清空校验信息</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>清空绑定的值(设置为 <code>[]</code>)和校验信息</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,oe,[r(`h3`,se,[i(Q,{to:`#shi4jian4`},{default:n(()=>[...s[78]||=[a(`#`,-1)]]),_:1}),s[79]||=a(`事件`,-1)]),s[80]||=o(`<table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>before-filter</code></td><td><code>before-read</code> 前触发，对文件列表进行过滤</td><td><code>files: VarFile[]</code></td></tr><tr><td><code>before-read</code></td><td>文件读取前触发，返回假值阻止文件读取(支持 promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>after-read</code></td><td>文件读取后触发</td><td><code>file: VarFile</code></td></tr><tr><td><code>oversize</code></td><td>文件超过限制大小时触发</td><td><code>file: VarFile</code></td></tr><tr><td><code>before-remove</code></td><td>文件删除前触发，返回假值阻止文件删除(支持 promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>remove</code></td><td>文件删除时触发</td><td><code>file: VarFile</code></td></tr><tr><td><code>preview</code></td><td>文件预览时触发</td><td><code>file: VarFile</code></td></tr><tr><td><code>click-action</code></td><td>拦截上传按钮的点击行为</td><td><code>chooseFile: () =&gt; void, event: Event</code></td></tr></tbody></table>`,1)]),r(`div`,ce,[r(`h3`,Z,[i(Q,{to:`#cha1cao2`},{default:n(()=>[...s[81]||=[a(`#`,-1)]]),_:1}),s[82]||=a(`插槽`,-1)]),s[83]||=o(`<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>上传按钮内容</td><td><code>-</code></td></tr><tr><td><code>extra-message</code></td><td>附加信息</td><td><code>-</code></td></tr><tr><td><code>remove-button</code> <em><strong>3.8.0</strong></em></td><td>删除按钮</td><td><code>remove: () =&gt; void</code></td></tr></tbody></table>`,1)]),r(`div`,le,[r(`h3`,ue,[i(Q,{to:`#yang4shi4bian4liang4`},{default:n(()=>[...s[84]||=[a(`#`,-1)]]),_:1}),s[85]||=a(`样式变量`,-1)]),s[86]||=o(`<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--uploader-action-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-action-icon-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-action-icon-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-action-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-size</code></td><td><code>80px</code></td></tr><tr><td><code>--uploader-file-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-name-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-file-name-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-file-name-font-size</code></td><td><code>12px</code></td></tr><tr><td><code>--uploader-file-name-padding</code></td><td><code>10px</code></td></tr><tr><td><code>--uploader-file-border-radius</code></td><td><code>0</code></td></tr><tr><td><code>--uploader-file-text-align</code></td><td><code>center</code></td></tr><tr><td><code>--uploader-file-close-background</code></td><td><code>rgba(0, 0, 0, 0.3)</code></td></tr><tr><td><code>--uploader-file-close-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-file-close-icon-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--uploader-file-close-icon-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--uploader-file-cover-fit</code></td><td><code>cover</code></td></tr><tr><td><code>--uploader-file-cover-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-preview-video-width</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-preview-video-height</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-file-indicator-height</code></td><td><code>4px</code></td></tr><tr><td><code>--uploader-file-indicator-normal-color</code></td><td><code>var(--color-disabled)</code></td></tr><tr><td><code>--uploader-file-indicator-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--uploader-file-indicator-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--uploader-file-progress-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--uploader-disabled-color</code></td><td><code>#ddd</code></td></tr><tr><td><code>--uploader-disabled-text-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--uploader-loading-background</code></td><td><code>linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))</code></td></tr></tbody></table>`,2)])])}var fe=te(s,[[`render`,de]]);export{fe as default};