import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`jie4shao4`},p={class:`card`},m={id:`tan2chu1wei4zhi4`},h={class:`card`},g={id:`zhe1zhao4ceng2yang4shi4`},_={class:`card`},v={id:`zhu4ce4shi4jian4`},y={class:`card`},b={id:`shu3xing4`},x={class:`card`},S={id:`shi4jian4`},C={class:`card`},w={id:`cha1cao2`},T={class:`card`},E={id:`yang4shi4bian4liang4`};function D(e,l,D,O,k,A){let j=n(`router-link`),M=n(`var-site-code-example`);return r(),a(`div`,u,[l[24]||=i(`h1`,null,`弹出层`,-1),i(`div`,d,[i(`h3`,f,[o(j,{to:`#jie4shao4`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`介绍`,-1)]),l[2]||=i(`p`,null,[s(`创建一个可以从上、下、左、右、中心弹出的容器，用于展示信息。默认使用 `),i(`code`,null,`teleport`),s(` 插入到 `),i(`code`,null,`body`),s(` 尾部。`)],-1)]),i(`div`,p,[i(`h3`,m,[o(j,{to:`#tan2chu1wei4zhi4`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`弹出位置`,-1)]),o(M,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` center = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` top = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` bottom = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` left = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` right = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(),i(`span`,{class:`hljs-attr`},`direction`),s(`=`),i(`span`,{class:`hljs-string`},`"column"`),s(),i(`span`,{class:`hljs-attr`},`:size`),s(`=`),i(`span`,{class:`hljs-string`},`"[10, 0]"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"center = true"`),s(`>`)]),s(`
      居中弹出
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"bottom = true"`),s(`>`)]),s(`
      下方弹出
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"top = true"`),s(`>`)]),s(`
      上方弹出
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"left = true"`),s(`>`)]),s(`
      左侧弹出
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"right = true"`),s(`>`)]),s(`
      右侧弹出
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`

  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-popup`),s(),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"center"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"popup-example-block"`),s(`>`)]),s(`
      素胚勾勒出青花笔锋浓转淡,
      瓶身描绘的牡丹一如你初妆,
      冉冉檀香透过窗心事我了然,
      宣纸上走笔至此搁一半。
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-popup`),s(`>`)]),s(`

  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-popup`),s(),i(`span`,{class:`hljs-attr`},`position`),s(`=`),i(`span`,{class:`hljs-string`},`"bottom"`),s(),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"bottom"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"popup-example-block"`),s(`>`)]),s(`
      素胚勾勒出青花笔锋浓转淡,
      瓶身描绘的牡丹一如你初妆,
      冉冉檀香透过窗心事我了然,
      宣纸上走笔至此搁一半。
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-popup`),s(`>`)]),s(`

  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-popup`),s(),i(`span`,{class:`hljs-attr`},`position`),s(`=`),i(`span`,{class:`hljs-string`},`"top"`),s(),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"top"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"popup-example-block"`),s(`>`)]),s(`
      素胚勾勒出青花笔锋浓转淡,
      瓶身描绘的牡丹一如你初妆,
      冉冉檀香透过窗心事我了然,
      宣纸上走笔至此搁一半。
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-popup`),s(`>`)]),s(`

  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-popup`),s(),i(`span`,{class:`hljs-attr`},`position`),s(`=`),i(`span`,{class:`hljs-string`},`"left"`),s(),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"left"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"popup-example-block"`),s(`>`)]),s(`
      素胚勾勒出青花笔锋浓转淡,
      瓶身描绘的牡丹一如你初妆,
      冉冉檀香透过窗心事我了然,
      宣纸上走笔至此搁一半。
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-popup`),s(`>`)]),s(`

  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-popup`),s(),i(`span`,{class:`hljs-attr`},`position`),s(`=`),i(`span`,{class:`hljs-string`},`"right"`),s(),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"right"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"popup-example-block"`),s(`>`)]),s(`
      素胚勾勒出青花笔锋浓转淡,
      瓶身描绘的牡丹一如你初妆,
      冉冉檀香透过窗心事我了然,
      宣纸上走笔至此搁一半。
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-popup`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.popup-example-block`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`padding`),s(`: `),i(`span`,{class:`hljs-number`},`24px`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`width`),s(`: `),i(`span`,{class:`hljs-number`},`280px`),s(`;
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(j,{to:`#zhe1zhao4ceng2yang4shi4`},{default:t(()=>[...l[6]||=[s(`#`,-1)]]),_:1}),l[7]||=s(`遮罩层样式`,-1)]),o(M,null,{default:t(()=>[...l[8]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` overlayClass = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` overlayStyle = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(),i(`span`,{class:`hljs-attr`},`direction`),s(`=`),i(`span`,{class:`hljs-string`},`"column"`),s(),i(`span`,{class:`hljs-attr`},`:size`),s(`=`),i(`span`,{class:`hljs-string`},`"[10, 0]"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"overlayClass = true"`),s(`>`)]),s(`
      遮罩层 class
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"overlayStyle = true"`),s(`>`)]),s(`
      遮罩层 style
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`

  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-popup`),s(`
    `),i(`span`,{class:`hljs-attr`},`overlay-class`),s(`=`),i(`span`,{class:`hljs-string`},`"popup-example-custom-overlay"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"overlayClass"`),s(`
  >`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"popup-example-block"`),s(`>`)]),s(`
      素胚勾勒出青花笔锋浓转淡,
      瓶身描绘的牡丹一如你初妆,
      冉冉檀香透过窗心事我了然,
      宣纸上走笔至此搁一半。
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-popup`),s(`>`)]),s(`

  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-popup`),s(`
    `),i(`span`,{class:`hljs-attr`},`:overlay-style`),s(`=`),i(`span`,{class:`hljs-string`},`"{backgroundColor: 'rgba(0, 0, 0, 0.3)'}"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"overlayStyle"`),s(`
  >`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"popup-example-block"`),s(`>`)]),s(`
      素胚勾勒出青花笔锋浓转淡,
      瓶身描绘的牡丹一如你初妆,
      冉冉檀香透过窗心事我了然,
      宣纸上走笔至此搁一半。
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-popup`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.popup-example-custom-overlay`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`background`),s(`: `),i(`span`,{class:`hljs-built_in`},`rgba`),s(`(`),i(`span`,{class:`hljs-number`},`0`),s(`, `),i(`span`,{class:`hljs-number`},`0`),s(`, `),i(`span`,{class:`hljs-number`},`0`),s(`, `),i(`span`,{class:`hljs-number`},`0.3`),s(`) `),i(`span`,{class:`hljs-meta`},`!important`),s(`;
}

`),i(`span`,{class:`hljs-selector-class`},`.popup-example-block`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`padding`),s(`: `),i(`span`,{class:`hljs-number`},`24px`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`width`),s(`: `),i(`span`,{class:`hljs-number`},`280px`),s(`;
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,_,[i(`h3`,v,[o(j,{to:`#zhu4ce4shi4jian4`},{default:t(()=>[...l[9]||=[s(`#`,-1)]]),_:1}),l[10]||=s(`注册事件`,-1)]),o(M,null,{default:t(()=>[...l[11]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Snackbar } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` event = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"event = true"`),s(`>`)]),s(`
    注册事件
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`

  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-popup`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"event"`),s(`
    @`),i(`span`,{class:`hljs-attr`},`open`),s(`=`),i(`span`,{class:`hljs-string`},`"Snackbar.info('open')"`),s(`
    @`),i(`span`,{class:`hljs-attr`},`opened`),s(`=`),i(`span`,{class:`hljs-string`},`"Snackbar.success('opened')"`),s(`
    @`),i(`span`,{class:`hljs-attr`},`close`),s(`=`),i(`span`,{class:`hljs-string`},`"Snackbar.warning('close')"`),s(`
    @`),i(`span`,{class:`hljs-attr`},`closed`),s(`=`),i(`span`,{class:`hljs-string`},`"Snackbar.error('closed')"`),s(`
  >`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"popup-example-block"`),s(`>`)]),s(`
      素胚勾勒出青花笔锋浓转淡,
      瓶身描绘的牡丹一如你初妆,
      冉冉檀香透过窗心事我了然,
      宣纸上走笔至此搁一半。
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-popup`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.popup-example-block`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`padding`),s(`: `),i(`span`,{class:`hljs-number`},`24px`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`width`),s(`: `),i(`span`,{class:`hljs-number`},`280px`),s(`;
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),l[25]||=i(`h2`,null,`API`,-1),i(`div`,y,[i(`h3`,b,[o(j,{to:`#shu3xing4`},{default:t(()=>[...l[12]||=[s(`#`,-1)]]),_:1}),l[13]||=s(`属性`,-1)]),l[14]||=c(`<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>是否显示弹出层</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>position</code></td><td>弹出位置，可选值为 <code>top</code> <code>bottom</code> <code>right</code> <code>left</code> <code>center</code></td><td><em>string</em></td><td><code>center</code></td></tr><tr><td><code>overlay</code></td><td>是否显示遮罩层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlay-class</code></td><td>自定义遮罩层的 class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay-style</code></td><td>自定义遮罩层的 style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>default-style</code></td><td>是否启用默认样式</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>transition</code></td><td>过渡动画的名称</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>是否禁止滚动穿透，禁止时滚动弹出层不会引发 body 的滚动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-overlay</code></td><td>是否点击遮罩层关闭弹出层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-key-escape</code></td><td>是否支持键盘 ESC 关闭弹出层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>弹出层挂载的位置</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>body</code></td></tr><tr><td><code>safe-area</code></td><td>是否开启底部安全区适配</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>safe-area-top</code></td><td>是否开启顶部安全区适配</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>z-index</code> <em><strong>3.3.10</strong></em></td><td>元素 z-index</td><td><em>number</em></td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,x,[i(`h3`,S,[o(j,{to:`#shi4jian4`},{default:t(()=>[...l[15]||=[s(`#`,-1)]]),_:1}),l[16]||=s(`事件`,-1)]),l[17]||=c(`<table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>open</code></td><td>打开弹出层时触发</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>打开弹出层动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>关闭弹出层时触发</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>关闭弹出层动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>click-overlay</code></td><td>点击遮罩层时触发</td><td><code>-</code></td></tr><tr><td><code>key-escape</code></td><td>点击键盘 ESC 时触发</td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,C,[i(`h3`,w,[o(j,{to:`#cha1cao2`},{default:t(()=>[...l[18]||=[s(`#`,-1)]]),_:1}),l[19]||=s(`插槽`,-1)]),l[20]||=i(`table`,null,[i(`thead`,null,[i(`tr`,null,[i(`th`,null,`插槽名`),i(`th`,null,`说明`),i(`th`,null,`参数`)])]),i(`tbody`,null,[i(`tr`,null,[i(`td`,null,[i(`code`,null,`default`)]),i(`td`,null,`弹出层内容`),i(`td`,null,[i(`code`,null,`-`)])])])],-1)]),i(`div`,T,[i(`h3`,E,[o(j,{to:`#yang4shi4bian4liang4`},{default:t(()=>[...l[21]||=[s(`#`,-1)]]),_:1}),l[22]||=s(`样式变量`,-1)]),l[23]||=c(`<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--popup-overlay-background-color</code></td><td><code>rgba(0, 0, 0, .6)</code></td></tr><tr><td><code>--popup-content-background-color</code></td><td><code>var(--color-surface-container-low)</code></td></tr></tbody></table>`,2)])])}var O=e(l,[[`render`,D]]);export{O as default};