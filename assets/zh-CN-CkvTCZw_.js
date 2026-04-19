import{L as e,N as t,W as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as c}from"./_plugin-vue_export-helper-V-yks4gF.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`jie4shao4`},p={class:`card`},m={id:`tan2chu1wei4zhi4`},h={class:`card`},g={id:`zhe1zhao4ceng2yang4shi4`},_={class:`card`},v={id:`zhu4ce4shi4jian4`},y={class:`card`},b={id:`shu3xing4`},x={class:`card`},S={id:`shi4jian4`},C={class:`card`},w={id:`cha1cao2`},T={class:`card`},E={id:`yang4shi4bian4liang4`};function D(c,l,D,O,k,A){let j=e(`router-link`),M=e(`var-site-code-example`);return t(),i(`div`,u,[l[24]||=r(`h1`,null,`弹出层`,-1),r(`div`,d,[r(`h3`,f,[a(j,{to:`#jie4shao4`},{default:n(()=>[...l[0]||=[o(`#`,-1)]]),_:1}),l[1]||=o(`介绍`,-1)]),l[2]||=r(`p`,null,[o(`创建一个可以从上、下、左、右、中心弹出的容器，用于展示信息。默认使用 `),r(`code`,null,`teleport`),o(` 插入到 `),r(`code`,null,`body`),o(` 尾部。`)],-1)]),r(`div`,p,[r(`h3`,m,[a(j,{to:`#tan2chu1wei4zhi4`},{default:n(()=>[...l[3]||=[o(`#`,-1)]]),_:1}),l[4]||=o(`弹出位置`,-1)]),a(M,null,{default:n(()=>[...l[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` center = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` top = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` bottom = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` left = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` right = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-space`),o(),r(`span`,{class:`hljs-attr`},`direction`),o(`=`),r(`span`,{class:`hljs-string`},`"column"`),o(),r(`span`,{class:`hljs-attr`},`:size`),o(`=`),r(`span`,{class:`hljs-string`},`"[10, 0]"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"center = true"`),o(`>`)]),o(`
      居中弹出
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"bottom = true"`),o(`>`)]),o(`
      下方弹出
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"top = true"`),o(`>`)]),o(`
      上方弹出
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"left = true"`),o(`>`)]),o(`
      左侧弹出
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"right = true"`),o(`>`)]),o(`
      右侧弹出
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-space`),o(`>`)]),o(`

  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-popup`),o(),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"center"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"popup-example-block"`),o(`>`)]),o(`
      素胚勾勒出青花笔锋浓转淡,
      瓶身描绘的牡丹一如你初妆,
      冉冉檀香透过窗心事我了然,
      宣纸上走笔至此搁一半。
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-popup`),o(`>`)]),o(`

  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-popup`),o(),r(`span`,{class:`hljs-attr`},`position`),o(`=`),r(`span`,{class:`hljs-string`},`"bottom"`),o(),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"bottom"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"popup-example-block"`),o(`>`)]),o(`
      素胚勾勒出青花笔锋浓转淡,
      瓶身描绘的牡丹一如你初妆,
      冉冉檀香透过窗心事我了然,
      宣纸上走笔至此搁一半。
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-popup`),o(`>`)]),o(`

  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-popup`),o(),r(`span`,{class:`hljs-attr`},`position`),o(`=`),r(`span`,{class:`hljs-string`},`"top"`),o(),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"top"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"popup-example-block"`),o(`>`)]),o(`
      素胚勾勒出青花笔锋浓转淡,
      瓶身描绘的牡丹一如你初妆,
      冉冉檀香透过窗心事我了然,
      宣纸上走笔至此搁一半。
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-popup`),o(`>`)]),o(`

  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-popup`),o(),r(`span`,{class:`hljs-attr`},`position`),o(`=`),r(`span`,{class:`hljs-string`},`"left"`),o(),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"left"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"popup-example-block"`),o(`>`)]),o(`
      素胚勾勒出青花笔锋浓转淡,
      瓶身描绘的牡丹一如你初妆,
      冉冉檀香透过窗心事我了然,
      宣纸上走笔至此搁一半。
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-popup`),o(`>`)]),o(`

  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-popup`),o(),r(`span`,{class:`hljs-attr`},`position`),o(`=`),r(`span`,{class:`hljs-string`},`"right"`),o(),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"right"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"popup-example-block"`),o(`>`)]),o(`
      素胚勾勒出青花笔锋浓转淡,
      瓶身描绘的牡丹一如你初妆,
      冉冉檀香透过窗心事我了然,
      宣纸上走笔至此搁一半。
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-popup`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),r(`span`,{class:`css`},[o(`
`),r(`span`,{class:`hljs-selector-class`},`.popup-example-block`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`padding`),o(`: `),r(`span`,{class:`hljs-number`},`24px`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`width`),o(`: `),r(`span`,{class:`hljs-number`},`280px`),o(`;
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[a(j,{to:`#zhe1zhao4ceng2yang4shi4`},{default:n(()=>[...l[6]||=[o(`#`,-1)]]),_:1}),l[7]||=o(`遮罩层样式`,-1)]),a(M,null,{default:n(()=>[...l[8]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` overlayClass = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` overlayStyle = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-space`),o(),r(`span`,{class:`hljs-attr`},`direction`),o(`=`),r(`span`,{class:`hljs-string`},`"column"`),o(),r(`span`,{class:`hljs-attr`},`:size`),o(`=`),r(`span`,{class:`hljs-string`},`"[10, 0]"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"overlayClass = true"`),o(`>`)]),o(`
      遮罩层 class
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"overlayStyle = true"`),o(`>`)]),o(`
      遮罩层 style
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-space`),o(`>`)]),o(`

  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-popup`),o(`
    `),r(`span`,{class:`hljs-attr`},`overlay-class`),o(`=`),r(`span`,{class:`hljs-string`},`"popup-example-custom-overlay"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"overlayClass"`),o(`
  >`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"popup-example-block"`),o(`>`)]),o(`
      素胚勾勒出青花笔锋浓转淡,
      瓶身描绘的牡丹一如你初妆,
      冉冉檀香透过窗心事我了然,
      宣纸上走笔至此搁一半。
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-popup`),o(`>`)]),o(`

  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-popup`),o(`
    `),r(`span`,{class:`hljs-attr`},`:overlay-style`),o(`=`),r(`span`,{class:`hljs-string`},`"{backgroundColor: 'rgba(0, 0, 0, 0.3)'}"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"overlayStyle"`),o(`
  >`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"popup-example-block"`),o(`>`)]),o(`
      素胚勾勒出青花笔锋浓转淡,
      瓶身描绘的牡丹一如你初妆,
      冉冉檀香透过窗心事我了然,
      宣纸上走笔至此搁一半。
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-popup`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),r(`span`,{class:`css`},[o(`
`),r(`span`,{class:`hljs-selector-class`},`.popup-example-custom-overlay`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`background`),o(`: `),r(`span`,{class:`hljs-built_in`},`rgba`),o(`(`),r(`span`,{class:`hljs-number`},`0`),o(`, `),r(`span`,{class:`hljs-number`},`0`),o(`, `),r(`span`,{class:`hljs-number`},`0`),o(`, `),r(`span`,{class:`hljs-number`},`0.3`),o(`) `),r(`span`,{class:`hljs-meta`},`!important`),o(`;
}

`),r(`span`,{class:`hljs-selector-class`},`.popup-example-block`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`padding`),o(`: `),r(`span`,{class:`hljs-number`},`24px`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`width`),o(`: `),r(`span`,{class:`hljs-number`},`280px`),o(`;
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,_,[r(`h3`,v,[a(j,{to:`#zhu4ce4shi4jian4`},{default:n(()=>[...l[9]||=[o(`#`,-1)]]),_:1}),l[10]||=o(`注册事件`,-1)]),a(M,null,{default:n(()=>[...l[11]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` event = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"event = true"`),o(`>`)]),o(`
    注册事件
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`

  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-popup`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"event"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`open`),o(`=`),r(`span`,{class:`hljs-string`},`"Snackbar.info('open')"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`opened`),o(`=`),r(`span`,{class:`hljs-string`},`"Snackbar.success('opened')"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`close`),o(`=`),r(`span`,{class:`hljs-string`},`"Snackbar.warning('close')"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`closed`),o(`=`),r(`span`,{class:`hljs-string`},`"Snackbar.error('closed')"`),o(`
  >`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"popup-example-block"`),o(`>`)]),o(`
      素胚勾勒出青花笔锋浓转淡,
      瓶身描绘的牡丹一如你初妆,
      冉冉檀香透过窗心事我了然,
      宣纸上走笔至此搁一半。
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-popup`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),r(`span`,{class:`css`},[o(`
`),r(`span`,{class:`hljs-selector-class`},`.popup-example-block`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`padding`),o(`: `),r(`span`,{class:`hljs-number`},`24px`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`width`),o(`: `),r(`span`,{class:`hljs-number`},`280px`),o(`;
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),l[25]||=r(`h2`,null,`API`,-1),r(`div`,y,[r(`h3`,b,[a(j,{to:`#shu3xing4`},{default:n(()=>[...l[12]||=[o(`#`,-1)]]),_:1}),l[13]||=o(`属性`,-1)]),l[14]||=s(`<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>是否显示弹出层</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>position</code></td><td>弹出位置，可选值为 <code>top</code> <code>bottom</code> <code>right</code> <code>left</code> <code>center</code></td><td><em>string</em></td><td><code>center</code></td></tr><tr><td><code>overlay</code></td><td>是否显示遮罩层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlay-class</code></td><td>自定义遮罩层的 class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay-style</code></td><td>自定义遮罩层的 style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>default-style</code></td><td>是否启用默认样式</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>transition</code></td><td>过渡动画的名称</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>是否禁止滚动穿透，禁止时滚动弹出层不会引发 body 的滚动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-overlay</code></td><td>是否点击遮罩层关闭弹出层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-key-escape</code></td><td>是否支持键盘 ESC 关闭弹出层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>弹出层挂载的位置</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>body</code></td></tr><tr><td><code>safe-area</code></td><td>是否开启底部安全区适配</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>safe-area-top</code></td><td>是否开启顶部安全区适配</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>z-index</code> <em><strong>3.3.10</strong></em></td><td>元素 z-index</td><td><em>number</em></td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,x,[r(`h3`,S,[a(j,{to:`#shi4jian4`},{default:n(()=>[...l[15]||=[o(`#`,-1)]]),_:1}),l[16]||=o(`事件`,-1)]),l[17]||=s(`<table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>open</code></td><td>打开弹出层时触发</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>打开弹出层动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>关闭弹出层时触发</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>关闭弹出层动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>click-overlay</code></td><td>点击遮罩层时触发</td><td><code>-</code></td></tr><tr><td><code>key-escape</code></td><td>点击键盘 ESC 时触发</td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,C,[r(`h3`,w,[a(j,{to:`#cha1cao2`},{default:n(()=>[...l[18]||=[o(`#`,-1)]]),_:1}),l[19]||=o(`插槽`,-1)]),l[20]||=r(`table`,null,[r(`thead`,null,[r(`tr`,null,[r(`th`,null,`插槽名`),r(`th`,null,`说明`),r(`th`,null,`参数`)])]),r(`tbody`,null,[r(`tr`,null,[r(`td`,null,[r(`code`,null,`default`)]),r(`td`,null,`弹出层内容`),r(`td`,null,[r(`code`,null,`-`)])])])],-1)]),r(`div`,T,[r(`h3`,E,[a(j,{to:`#yang4shi4bian4liang4`},{default:n(()=>[...l[21]||=[o(`#`,-1)]]),_:1}),l[22]||=o(`样式变量`,-1)]),l[23]||=s(`<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--popup-overlay-background-color</code></td><td><code>rgba(0, 0, 0, .6)</code></td></tr><tr><td><code>--popup-content-background-color</code></td><td><code>var(--color-surface-container-low)</code></td></tr></tbody></table>`,2)])])}var O=c(l,[[`render`,D]]);export{O as default};