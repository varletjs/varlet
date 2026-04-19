import{L as e,N as t,W as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as c}from"./_plugin-vue_export-helper-V-yks4gF.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`jie4shao4`},p={class:`card`},m={id:`biao1zhun3wai4guan1`},h={class:`card`},g={id:`wai4bian0kuang4wai4guan1`},_={class:`card`},v={id:`tian2chong1wai4guan1`},y={class:`card`},b={id:`shu3xing4`},x={class:`card`},S={id:`fang1fa3`},C={class:`card`},w={id:`shi4jian4`},T={class:`card`},E={id:`cha1cao2`},D={class:`card`},O={id:`yang4shi4bian4liang4`};function k(c,l,k,A,j,M){let N=e(`router-link`),P=e(`var-site-code-example`);return t(),i(`div`,u,[l[27]||=r(`h1`,null,`自动完成`,-1),r(`div`,d,[r(`h3`,f,[a(N,{to:`#jie4shao4`},{default:n(()=>[...l[0]||=[o(`#`,-1)]]),_:1}),l[1]||=o(`介绍`,-1)]),l[2]||=r(`p`,null,`输入框自动完成功能。`,-1)]),r(`div`,p,[r(`h3`,m,[a(N,{to:`#biao1zhun3wai4guan1`},{default:n(()=>[...l[3]||=[o(`#`,-1)]]),_:1}),l[4]||=o(`标准外观`,-1)]),a(P,null,{default:n(()=>[...l[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref, computed } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { z } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'zod'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` { value, options } = useAutoComplete()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { `),r(`span`,{class:`hljs-attr`},`value`),o(`: value2, `),r(`span`,{class:`hljs-attr`},`options`),o(`: options2 } = useAutoComplete()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { `),r(`span`,{class:`hljs-attr`},`value`),o(`: value3, `),r(`span`,{class:`hljs-attr`},`options`),o(`: options3 } = useAutoComplete()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { `),r(`span`,{class:`hljs-attr`},`value`),o(`: value4, `),r(`span`,{class:`hljs-attr`},`options`),o(`: options4 } = useAutoComplete()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { `),r(`span`,{class:`hljs-attr`},`value`),o(`: value5, `),r(`span`,{class:`hljs-attr`},`options`),o(`: options5 } = useAutoComplete()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { `),r(`span`,{class:`hljs-attr`},`value`),o(`: value6, `),r(`span`,{class:`hljs-attr`},`options`),o(`: options6 } = useAutoComplete()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { `),r(`span`,{class:`hljs-attr`},`value`),o(`: value7, `),r(`span`,{class:`hljs-attr`},`options`),o(`: options7 } = useAutoComplete()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { `),r(`span`,{class:`hljs-attr`},`value`),o(`: value8, `),r(`span`,{class:`hljs-attr`},`options`),o(`: options8 } = useAutoComplete()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { `),r(`span`,{class:`hljs-attr`},`value`),o(`: value9, `),r(`span`,{class:`hljs-attr`},`options`),o(`: options9 } = useAutoComplete()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { `),r(`span`,{class:`hljs-attr`},`value`),o(`: value10, `),r(`span`,{class:`hljs-attr`},`options`),o(`: options10 } = useAutoComplete()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { `),r(`span`,{class:`hljs-attr`},`value`),o(`: value11, `),r(`span`,{class:`hljs-attr`},`options`),o(`: options11 } = useAutoComplete()

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`useAutoComplete`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  `),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref(`),r(`span`,{class:`hljs-string`},`''`),o(`)
  `),r(`span`,{class:`hljs-keyword`},`const`),o(` options = computed(`),r(`span`,{class:`hljs-function`},`() =>`),o(`
    [`),r(`span`,{class:`hljs-string`},`'@qq.com'`),o(`, `),r(`span`,{class:`hljs-string`},`'@163.com'`),o(`, `),r(`span`,{class:`hljs-string`},`'@gmail.com'`),o(`].map(`),r(`span`,{class:`hljs-function`},[o(`(`),r(`span`,{class:`hljs-params`},`suffix`),o(`) =>`)]),o(` {
      `),r(`span`,{class:`hljs-keyword`},`const`),o(` [prefix] = value.value.split(`),r(`span`,{class:`hljs-string`},`'@'`),o(`)
      `),r(`span`,{class:`hljs-keyword`},`return`),o(` {
        `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},[o("`"),r(`span`,{class:`hljs-subst`},"${prefix}"),r(`span`,{class:`hljs-subst`},"${suffix}"),o("`")]),o(`,
        `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},[o("`"),r(`span`,{class:`hljs-subst`},"${prefix}"),r(`span`,{class:`hljs-subst`},"${suffix}"),o("`")]),o(`,
      }
    })
  )

  `),r(`span`,{class:`hljs-keyword`},`return`),o(` {
    value,
    options,
  }
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-space`),o(),r(`span`,{class:`hljs-attr`},`direction`),o(`=`),r(`span`,{class:`hljs-string`},`"column"`),o(),r(`span`,{class:`hljs-attr`},`size`),o(`=`),r(`span`,{class:`hljs-string`},`"large"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"请输入文本"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`readonly`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"只读"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options2"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value2"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`disabled`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"禁用"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options3"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value3"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`clearable`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"可清除"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options4"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value4"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`clearable`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"使用插槽自定义清除图标"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options5"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value5"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`clear-icon`),o(`=`),r(`span`,{class:`hljs-string`},`"{ clear }"`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"error"`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"clear"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"字段校验"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options6"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"v => v.length > 6 || '文本长度必须大于6'"`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value6"`),o(`
    />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"使用 Zod 进行校验"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options7"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"z.string().min(7, '文本长度必须大于6')"`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value7"`),o(`
    />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"显示图标"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options8"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value8"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`prepend-icon`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"prepend-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"github"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`append-icon`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"append-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"github"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`>`)]),o(`  
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"最大长度"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:maxlength`),o(`=`),r(`span`,{class:`hljs-string`},`"10"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options9"`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value9"`),o(`
    />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"自定义菜单显示时机"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:get-show`),o(`=`),r(`span`,{class:`hljs-string`},`"(value) => value10.length > 3"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options10"`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value10"`),o(`
    />`)]),o(`  
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`
      `),r(`span`,{class:`hljs-attr`},`size`),o(`=`),r(`span`,{class:`hljs-string`},`"small"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"小尺寸"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options11"`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value11"`),o(`
    />`)]),o(`  
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-space`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),r(`span`,{class:`css`},[o(`
`),r(`span`,{class:`hljs-selector-class`},`.prepend-icon`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`margin-right`),o(`: `),r(`span`,{class:`hljs-number`},`6px`),o(`;
}

`),r(`span`,{class:`hljs-selector-class`},`.append-icon`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`margin-left`),o(`: `),r(`span`,{class:`hljs-number`},`6px`),o(`;
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[a(N,{to:`#wai4bian0kuang4wai4guan1`},{default:n(()=>[...l[6]||=[o(`#`,-1)]]),_:1}),l[7]||=o(`外边框外观`,-1)]),a(P,null,{default:n(()=>[...l[8]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref, computed } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { z } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'zod'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` { value, options } = useAutoComplete()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { `),r(`span`,{class:`hljs-attr`},`value`),o(`: value2, `),r(`span`,{class:`hljs-attr`},`options`),o(`: options2 } = useAutoComplete()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { `),r(`span`,{class:`hljs-attr`},`value`),o(`: value3, `),r(`span`,{class:`hljs-attr`},`options`),o(`: options3 } = useAutoComplete()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { `),r(`span`,{class:`hljs-attr`},`value`),o(`: value4, `),r(`span`,{class:`hljs-attr`},`options`),o(`: options4 } = useAutoComplete()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { `),r(`span`,{class:`hljs-attr`},`value`),o(`: value5, `),r(`span`,{class:`hljs-attr`},`options`),o(`: options5 } = useAutoComplete()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { `),r(`span`,{class:`hljs-attr`},`value`),o(`: value6, `),r(`span`,{class:`hljs-attr`},`options`),o(`: options6 } = useAutoComplete()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { `),r(`span`,{class:`hljs-attr`},`value`),o(`: value7, `),r(`span`,{class:`hljs-attr`},`options`),o(`: options7 } = useAutoComplete()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { `),r(`span`,{class:`hljs-attr`},`value`),o(`: value8, `),r(`span`,{class:`hljs-attr`},`options`),o(`: options8 } = useAutoComplete()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { `),r(`span`,{class:`hljs-attr`},`value`),o(`: value9, `),r(`span`,{class:`hljs-attr`},`options`),o(`: options9 } = useAutoComplete()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { `),r(`span`,{class:`hljs-attr`},`value`),o(`: value10, `),r(`span`,{class:`hljs-attr`},`options`),o(`: options10 } = useAutoComplete()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { `),r(`span`,{class:`hljs-attr`},`value`),o(`: value11, `),r(`span`,{class:`hljs-attr`},`options`),o(`: options11 } = useAutoComplete()

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`useAutoComplete`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  `),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref(`),r(`span`,{class:`hljs-string`},`''`),o(`)
  `),r(`span`,{class:`hljs-keyword`},`const`),o(` options = computed(`),r(`span`,{class:`hljs-function`},`() =>`),o(`
    [`),r(`span`,{class:`hljs-string`},`'@qq.com'`),o(`, `),r(`span`,{class:`hljs-string`},`'@163.com'`),o(`, `),r(`span`,{class:`hljs-string`},`'@gmail.com'`),o(`].map(`),r(`span`,{class:`hljs-function`},[o(`(`),r(`span`,{class:`hljs-params`},`suffix`),o(`) =>`)]),o(` {
      `),r(`span`,{class:`hljs-keyword`},`const`),o(` [prefix] = value.value.split(`),r(`span`,{class:`hljs-string`},`'@'`),o(`)
      `),r(`span`,{class:`hljs-keyword`},`return`),o(` {
        `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},[o("`"),r(`span`,{class:`hljs-subst`},"${prefix}"),r(`span`,{class:`hljs-subst`},"${suffix}"),o("`")]),o(`,
        `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},[o("`"),r(`span`,{class:`hljs-subst`},"${prefix}"),r(`span`,{class:`hljs-subst`},"${suffix}"),o("`")]),o(`,
      }
    })
  )

  `),r(`span`,{class:`hljs-keyword`},`return`),o(` {
    value,
    options,
  }
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-space`),o(),r(`span`,{class:`hljs-attr`},`direction`),o(`=`),r(`span`,{class:`hljs-string`},`"column"`),o(),r(`span`,{class:`hljs-attr`},`size`),o(`=`),r(`span`,{class:`hljs-string`},`"large"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"请输入文本"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(),r(`span`,{class:`hljs-attr`},`readonly`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"只读"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options2"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value2"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(),r(`span`,{class:`hljs-attr`},`disabled`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"禁用"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options3"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value3"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(),r(`span`,{class:`hljs-attr`},`clearable`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"可清除"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options4"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value4"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(),r(`span`,{class:`hljs-attr`},`clearable`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"使用插槽自定义清除图标"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options5"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value5"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`clear-icon`),o(`=`),r(`span`,{class:`hljs-string`},`"{ clear }"`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"error"`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"clear"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`
      `),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"字段校验"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options6"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"v => v.length > 6 || '文本长度必须大于6'"`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value6"`),o(`
    />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`
      `),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"使用 Zod 进行校验"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options7"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"z.string().min(7, '文本长度必须大于6')"`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value7"`),o(`
    />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"显示图标"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options8"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value8"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`prepend-icon`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"prepend-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"github"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`append-icon`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"append-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"github"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`>`)]),o(`  
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`
      `),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"最大长度"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:maxlength`),o(`=`),r(`span`,{class:`hljs-string`},`"10"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options9"`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value9"`),o(`
    />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`
      `),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"自定义菜单显示时机"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:get-show`),o(`=`),r(`span`,{class:`hljs-string`},`"(value) => value.length > 3"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options10"`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value10"`),o(`
    />`)]),o(`  
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`
      `),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(`
      `),r(`span`,{class:`hljs-attr`},`size`),o(`=`),r(`span`,{class:`hljs-string`},`"small"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"小尺寸"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options11"`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value11"`),o(`
    />`)]),o(`  
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-space`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),r(`span`,{class:`css`},[o(`
`),r(`span`,{class:`hljs-selector-class`},`.prepend-icon`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`margin-right`),o(`: `),r(`span`,{class:`hljs-number`},`6px`),o(`;
}

`),r(`span`,{class:`hljs-selector-class`},`.append-icon`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`margin-left`),o(`: `),r(`span`,{class:`hljs-number`},`6px`),o(`;
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,_,[r(`h3`,v,[a(N,{to:`#tian2chong1wai4guan1`},{default:n(()=>[...l[9]||=[o(`#`,-1)]]),_:1}),l[10]||=o(`填充外观`,-1)]),a(P,null,{default:n(()=>[...l[11]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref, computed } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { z } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'zod'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` { value, options } = useAutoComplete()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { `),r(`span`,{class:`hljs-attr`},`value`),o(`: value2, `),r(`span`,{class:`hljs-attr`},`options`),o(`: options2 } = useAutoComplete()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { `),r(`span`,{class:`hljs-attr`},`value`),o(`: value3, `),r(`span`,{class:`hljs-attr`},`options`),o(`: options3 } = useAutoComplete()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { `),r(`span`,{class:`hljs-attr`},`value`),o(`: value4, `),r(`span`,{class:`hljs-attr`},`options`),o(`: options4 } = useAutoComplete()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { `),r(`span`,{class:`hljs-attr`},`value`),o(`: value5, `),r(`span`,{class:`hljs-attr`},`options`),o(`: options5 } = useAutoComplete()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { `),r(`span`,{class:`hljs-attr`},`value`),o(`: value6, `),r(`span`,{class:`hljs-attr`},`options`),o(`: options6 } = useAutoComplete()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { `),r(`span`,{class:`hljs-attr`},`value`),o(`: value7, `),r(`span`,{class:`hljs-attr`},`options`),o(`: options7 } = useAutoComplete()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { `),r(`span`,{class:`hljs-attr`},`value`),o(`: value8, `),r(`span`,{class:`hljs-attr`},`options`),o(`: options8 } = useAutoComplete()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { `),r(`span`,{class:`hljs-attr`},`value`),o(`: value9, `),r(`span`,{class:`hljs-attr`},`options`),o(`: options9 } = useAutoComplete()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { `),r(`span`,{class:`hljs-attr`},`value`),o(`: value10, `),r(`span`,{class:`hljs-attr`},`options`),o(`: options10 } = useAutoComplete()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { `),r(`span`,{class:`hljs-attr`},`value`),o(`: value11, `),r(`span`,{class:`hljs-attr`},`options`),o(`: options11 } = useAutoComplete()

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`useAutoComplete`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  `),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref(`),r(`span`,{class:`hljs-string`},`''`),o(`)
  `),r(`span`,{class:`hljs-keyword`},`const`),o(` options = computed(`),r(`span`,{class:`hljs-function`},`() =>`),o(`
    [`),r(`span`,{class:`hljs-string`},`'@qq.com'`),o(`, `),r(`span`,{class:`hljs-string`},`'@163.com'`),o(`, `),r(`span`,{class:`hljs-string`},`'@gmail.com'`),o(`].map(`),r(`span`,{class:`hljs-function`},[o(`(`),r(`span`,{class:`hljs-params`},`suffix`),o(`) =>`)]),o(` {
      `),r(`span`,{class:`hljs-keyword`},`const`),o(` [prefix] = value.value.split(`),r(`span`,{class:`hljs-string`},`'@'`),o(`)
      `),r(`span`,{class:`hljs-keyword`},`return`),o(` {
        `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},[o("`"),r(`span`,{class:`hljs-subst`},"${prefix}"),r(`span`,{class:`hljs-subst`},"${suffix}"),o("`")]),o(`,
        `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},[o("`"),r(`span`,{class:`hljs-subst`},"${prefix}"),r(`span`,{class:`hljs-subst`},"${suffix}"),o("`")]),o(`,
      }
    })
  )

  `),r(`span`,{class:`hljs-keyword`},`return`),o(` {
    value,
    options,
  }
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-space`),o(),r(`span`,{class:`hljs-attr`},`direction`),o(`=`),r(`span`,{class:`hljs-string`},`"column"`),o(),r(`span`,{class:`hljs-attr`},`size`),o(`=`),r(`span`,{class:`hljs-string`},`"large"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"请输入文本"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(),r(`span`,{class:`hljs-attr`},`readonly`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"只读"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options2"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value2"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(),r(`span`,{class:`hljs-attr`},`disabled`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"禁用"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options3"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value3"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(),r(`span`,{class:`hljs-attr`},`clearable`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"可清除"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options4"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value4"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(),r(`span`,{class:`hljs-attr`},`clearable`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"使用插槽自定义清除图标"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options5"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value5"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`clear-icon`),o(`=`),r(`span`,{class:`hljs-string`},`"{ clear }"`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"error"`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"clear"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`
      `),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"字段校验"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options6"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"v => v.length > 6 || '文本长度必须大于6'"`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value6"`),o(`
    />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`
      `),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"使用 Zod 进行校验"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options7"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"z.string().min(7, '文本长度必须大于6')"`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value7"`),o(`
    />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"显示图标"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options8"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value8"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`prepend-icon`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"prepend-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"github"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`append-icon`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"append-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"github"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`>`)]),o(`  
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`
      `),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"最大长度"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:maxlength`),o(`=`),r(`span`,{class:`hljs-string`},`"10"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options9"`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value9"`),o(`
    />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`
      `),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"自定义菜单显示时机"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:get-show`),o(`=`),r(`span`,{class:`hljs-string`},`"(value) => value.length > 3"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options10"`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value10"`),o(`
    />`)]),o(`  
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`
      `),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(`
      `),r(`span`,{class:`hljs-attr`},`size`),o(`=`),r(`span`,{class:`hljs-string`},`"small"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"小尺寸"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options11"`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value11"`),o(`
    />`)]),o(`  
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-space`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),r(`span`,{class:`css`},[o(`
`),r(`span`,{class:`hljs-selector-class`},`.prepend-icon`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`margin-right`),o(`: `),r(`span`,{class:`hljs-number`},`6px`),o(`;
}

`),r(`span`,{class:`hljs-selector-class`},`.append-icon`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`margin-left`),o(`: `),r(`span`,{class:`hljs-number`},`6px`),o(`;
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),l[28]||=r(`h2`,null,`API`,-1),r(`div`,y,[r(`h3`,b,[a(N,{to:`#shu3xing4`},{default:n(()=>[...l[12]||=[o(`#`,-1)]]),_:1}),l[13]||=o(`属性`,-1)]),l[14]||=s(`<h4>AutoComplete Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>绑定的值</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>variant</code></td><td>输入框风格, 可选值为 <code>standard</code> <code>outlined</code> <code>filled</code></td><td><em>string</em></td><td><code>standard</code></td></tr><tr><td><code>size</code></td><td>输入框尺寸，可选值 <code>normal</code> <code>small</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>placeholder</code></td><td>占位符</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>options</code></td><td>指定可选项</td><td><em>AutoCompleteOption[]</em></td><td><code>[]</code></td></tr><tr><td><code>label-key</code></td><td>作为 label 唯一标识的键名</td><td><em>string</em></td><td><code>label</code></td></tr><tr><td><code>value-key</code></td><td>作为 value 唯一标识的键名</td><td><em>string</em></td><td><code>value</code></td></tr><tr><td><code>maxlength</code></td><td>最大长度</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>是否只读</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>validate-trigger</code></td><td>触发验证的时机，可选值为 <code>onFocus</code> <code>onBlur</code> <code>onChange</code> <code>onClick</code> <code>onClear</code> <code>onInput</code></td><td><em>AutoCompleteValidateTrigger[]</em></td><td><code>[&#39;onInput&#39;, &#39;onClear&#39;, &#39;onChange&#39;]</code></td></tr><tr><td><code>rules</code></td><td>验证规则，返回 <code>true</code> 表示验证通过，其余的值则转换为文本作为用户提示</td><td><em>((v: string) =&gt; any) | ZodType | Array&lt;((v: string) =&gt; any) | ZodType&gt;</em></td><td><code>-</code></td></tr><tr><td><code>enterkeyhint</code></td><td>定制回车键样式，参见 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint">MDN</a></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>clearable</code></td><td>是否可清除</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>line</code></td><td>是否显示分割线</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hint</code></td><td>是否使用占位符作为提示</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>text-color</code></td><td>文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>focus-color</code></td><td>聚焦时的主要颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>blur-color</code></td><td>失焦时的主要颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>get-show</code></td><td>根据输入值决定是否显示菜单</td><td><em>(v: string) =&gt; boolean</em></td><td><code>-</code></td></tr><tr><td><code>tabindex</code> <em><strong>3.12.1</strong></em></td><td>与原生 input 的 tabindex 属性一致</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table><h4>AutoCompleteOption</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>label</code></td><td>选项的标签</td><td><em>string | VNode | (option: AutoCompleteOption, checked: boolean) =&gt; VNodeChild</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>选项的值</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><em>boolean</em></td><td><code>-</code></td></tr></tbody></table>`,4)]),r(`div`,x,[r(`h3`,S,[a(N,{to:`#fang1fa3`},{default:n(()=>[...l[15]||=[o(`#`,-1)]]),_:1}),l[16]||=o(`方法`,-1)]),l[17]||=s(`<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>focus</code></td><td>聚焦</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>blur</code></td><td>失焦</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>validate</code></td><td>触发校验</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>清空校验信息</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>清空绑定的值和校验信息</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,C,[r(`h3`,w,[a(N,{to:`#shi4jian4`},{default:n(()=>[...l[18]||=[o(`#`,-1)]]),_:1}),l[19]||=o(`事件`,-1)]),l[20]||=s(`<table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>focus</code></td><td>聚焦时触发</td><td><code>-</code></td></tr><tr><td><code>blur</code></td><td>失焦时触发</td><td><code>-</code></td></tr><tr><td><code>click</code></td><td>点击时触发</td><td><code>event: Event</code></td></tr><tr><td><code>clear</code></td><td>清除时触发</td><td><code>value: string</code></td></tr><tr><td><code>input</code></td><td>输入时触发</td><td><code>value: string</code>, <code>event: Event</code></td></tr><tr><td><code>change</code></td><td>更新时触发</td><td><code>value: string</code></td></tr></tbody></table>`,1)]),r(`div`,T,[r(`h3`,E,[a(N,{to:`#cha1cao2`},{default:n(()=>[...l[21]||=[o(`#`,-1)]]),_:1}),l[22]||=o(`插槽`,-1)]),l[23]||=s(`<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>prepend-icon</code></td><td>前置图标</td><td><code>-</code></td></tr><tr><td><code>append-icon</code></td><td>后置图标</td><td><code>-</code></td></tr><tr><td><code>clear-icon</code></td><td>清除图标</td><td><code>clear: (e: Event) =&gt; void</code> 清除函数(在使用插槽时, 可用于清除输入框内容)</td></tr><tr><td><code>extra-message</code></td><td>附加信息</td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,D,[r(`h3`,O,[a(N,{to:`#yang4shi4bian4liang4`},{default:n(()=>[...l[24]||=[o(`#`,-1)]]),_:1}),l[25]||=o(`样式变量`,-1)]),l[26]||=s(`<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><h4>AutoComplete Variables</h4><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--auto-complete-options-padding</code></td><td><code>6px 0</code></td></tr></tbody></table><h4>Variant Variables</h4><p>外观相关的样式变量请参考 <a href="#/zh-CN/input#yang4shi4bian4liang4">Input 组件</a> 的样式变量</p>`,5)])])}var A=c(l,[[`render`,k]]);export{A as default};