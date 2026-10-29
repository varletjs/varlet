import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s}from"./runtime-core.esm-bundler-DUghkl6b.js";var c={components:{}},l={class:`varlet-site-doc`},u={class:`card`},d={id:`jie4shao4`},f={class:`card`},p={id:`yang4shi4bang3ding4`},m={class:`card`},h={id:`han2shu4bang3ding4`},g={class:`card`},_={id:`zhen1dui4bu4tong2she4bei4xuan3ze2xing4qi3yong4`};function v(e,c,v,y,b,x){let S=n(`router-link`),C=n(`var-site-code-example`);return r(),a(`div`,l,[c[18]||=i(`h1`,null,`悬停指令`,-1),i(`div`,u,[i(`h3`,d,[o(S,{to:`#jie4shao4`},{default:t(()=>[...c[0]||=[s(`#`,-1)]]),_:1}),c[1]||=s(`介绍`,-1)]),c[2]||=i(`p`,null,`指针悬停在绑定元素上时进行样式绑定，也可以通过函数获得当前悬停的状态，支持在桌面端或移动端中选择性启用。`,-1)]),i(`div`,f,[i(`h3`,p,[o(S,{to:`#yang4shi4bang3ding4`},{default:t(()=>[...c[3]||=[s(`#`,-1)]]),_:1}),c[4]||=s(`样式绑定`,-1)]),c[6]||=i(`p`,null,`指针悬停在绑定元素上时进行样式绑定, 离开元素时取消样式绑定。`,-1),o(C,null,{default:t(()=>[...c[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-paper`),s(`
    `),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"paper"`),s(`
    `),i(`span`,{class:`hljs-attr`},`ripple`),s(`
    `),i(`span`,{class:`hljs-attr`},`:elevation`),s(`=`),i(`span`,{class:`hljs-string`},`"2"`),s(`
    `),i(`span`,{class:`hljs-attr`},`:width`),s(`=`),i(`span`,{class:`hljs-string`},`"100"`),s(`
    `),i(`span`,{class:`hljs-attr`},`:height`),s(`=`),i(`span`,{class:`hljs-string`},`"100"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-hover`),s(`=`),i(`span`,{class:`hljs-string`},`"{ color: 'var(--color-on-primary)', background: 'var(--color-primary)' }"`),s(`
  >`)]),s(`
    HOVER
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-paper`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.paper`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`display`),s(`: flex;
  `),i(`span`,{class:`hljs-attribute`},`align-items`),s(`: center;
  `),i(`span`,{class:`hljs-attribute`},`justify-content`),s(`: center;
  `),i(`span`,{class:`hljs-attribute`},`cursor`),s(`: pointer;
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,m,[i(`h3`,h,[o(S,{to:`#han2shu4bang3ding4`},{default:t(()=>[...c[7]||=[s(`#`,-1)]]),_:1}),c[8]||=s(`函数绑定`,-1)]),c[10]||=i(`p`,null,`指针悬停和离开时会触发函数，并携带当前的悬停状态。`,-1),o(C,null,{default:t(()=>[...c[9]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` translateY = ref(`),i(`span`,{class:`hljs-string`},`'100%'`),s(`)

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`handleHover`),s(`(`),i(`span`,{class:`hljs-params`},`hovering`),s(`) `)]),s(`{
  translateY.value = hovering ? `),i(`span`,{class:`hljs-string`},`'0'`),s(` : `),i(`span`,{class:`hljs-string`},`'100%'`),s(`
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"image-container"`),s(),i(`span`,{class:`hljs-attr`},`v-hover`),s(`=`),i(`span`,{class:`hljs-string`},`"handleHover"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-image`),s(),i(`span`,{class:`hljs-attr`},`src`),s(`=`),i(`span`,{class:`hljs-string`},`"https://varletjs.org/tree.jpeg"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"image-mask"`),s(),i(`span`,{class:`hljs-attr`},`:style`),s(`=`),i(`span`,{class:`hljs-string`},'"{ transform: `translateY(${translateY})` }"'),s(`>`)]),s(`HOVER`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.image-container`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`position`),s(`: relative;
  `),i(`span`,{class:`hljs-attribute`},`overflow`),s(`: hidden;
  `),i(`span`,{class:`hljs-attribute`},`cursor`),s(`: pointer;
  `),i(`span`,{class:`hljs-attribute`},`border-radius`),s(`: `),i(`span`,{class:`hljs-number`},`6px`),s(`;
}

`),i(`span`,{class:`hljs-selector-class`},`.image-mask`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`display`),s(`: flex;
  `),i(`span`,{class:`hljs-attribute`},`align-items`),s(`: center;
  `),i(`span`,{class:`hljs-attribute`},`justify-content`),s(`: center;
  `),i(`span`,{class:`hljs-attribute`},`position`),s(`: absolute;
  `),i(`span`,{class:`hljs-attribute`},`top`),s(`: `),i(`span`,{class:`hljs-number`},`0`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`left`),s(`: `),i(`span`,{class:`hljs-number`},`0`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`width`),s(`: `),i(`span`,{class:`hljs-number`},`100%`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`height`),s(`: `),i(`span`,{class:`hljs-number`},`100%`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`transition`),s(`: all `),i(`span`,{class:`hljs-number`},`0.3s`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`color`),s(`: `),i(`span`,{class:`hljs-built_in`},`var`),s(`(--color-on-primary);
  `),i(`span`,{class:`hljs-attribute`},`background-color`),s(`: `),i(`span`,{class:`hljs-built_in`},`var`),s(`(--color-primary);
  `),i(`span`,{class:`hljs-attribute`},`font-size`),s(`: `),i(`span`,{class:`hljs-number`},`50px`),s(`;
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,g,[i(`h3`,_,[o(S,{to:`#zhen1dui4bu4tong2she4bei4xuan3ze2xing4qi3yong4`},{default:t(()=>[...c[11]||=[s(`#`,-1)]]),_:1}),c[12]||=s(`针对不同设备选择性启用`,-1)]),c[15]||=i(`p`,null,[s(`考虑到在不同平台的 `),i(`code`,null,`hover`),s(` 效果的差异性，悬停指令可以只启用于特定的平台。`)],-1),c[16]||=i(`h4`,null,`只在桌面端启用`,-1),o(C,{"playground-ignore":``},{default:t(()=>[...c[13]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-paper`),s(),i(`span`,{class:`hljs-attr`},`v-hover:desktop`),s(`=`),i(`span`,{class:`hljs-string`},`"{ color: '#fff' }"`),s(`">`)]),s(`HOVER`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-paper`),s(`>`)]),s(`
`)])],-1)]]),_:1}),c[17]||=i(`h4`,null,`只在移动端启用`,-1),o(C,{"playground-ignore":``},{default:t(()=>[...c[14]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-paper`),s(),i(`span`,{class:`hljs-attr`},`v-hover:mobile`),s(`=`),i(`span`,{class:`hljs-string`},`"{ color: '#fff' }"`),s(`">`)]),s(`HOVER`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-paper`),s(`>`)]),s(`
`)])],-1)]]),_:1})])])}var y=e(c,[[`render`,v]]);export{y as default};