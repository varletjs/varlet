import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`jie4shao4`},p={class:`card`},m={id:`biao1zhun3wai4guan1`},h={class:`card`},g={id:`wai4bian0kuang4wai4guan1`},_={class:`card`},v={id:`tian2chong1wai4guan1`},y={class:`card`},b={id:`cai4dan1yuan2jiao3`},x={class:`card`},S={id:`shu3xing4`},C={class:`card`},w={id:`fang1fa3`},T={class:`card`},E={id:`shi4jian4`},D={class:`card`},O={id:`cha1cao2`},k={class:`card`},A={id:`yang4shi4bian4liang4`};function j(e,l,j,M,N,P){let F=n(`router-link`),I=n(`var-site-code-example`);return r(),a(`div`,u,[l[31]||=i(`h1`,null,`自动完成`,-1),i(`div`,d,[i(`h3`,f,[o(F,{to:`#jie4shao4`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`介绍`,-1)]),l[2]||=i(`p`,null,`输入框自动完成功能。`,-1)]),i(`div`,p,[i(`h3`,m,[o(F,{to:`#biao1zhun3wai4guan1`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`标准外观`,-1)]),o(I,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref, computed } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { z } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'zod'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` { value, options } = useAutoComplete()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { `),i(`span`,{class:`hljs-attr`},`value`),s(`: value2, `),i(`span`,{class:`hljs-attr`},`options`),s(`: options2 } = useAutoComplete()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { `),i(`span`,{class:`hljs-attr`},`value`),s(`: value3, `),i(`span`,{class:`hljs-attr`},`options`),s(`: options3 } = useAutoComplete()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { `),i(`span`,{class:`hljs-attr`},`value`),s(`: value4, `),i(`span`,{class:`hljs-attr`},`options`),s(`: options4 } = useAutoComplete()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { `),i(`span`,{class:`hljs-attr`},`value`),s(`: value5, `),i(`span`,{class:`hljs-attr`},`options`),s(`: options5 } = useAutoComplete()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { `),i(`span`,{class:`hljs-attr`},`value`),s(`: value6, `),i(`span`,{class:`hljs-attr`},`options`),s(`: options6 } = useAutoComplete()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { `),i(`span`,{class:`hljs-attr`},`value`),s(`: value7, `),i(`span`,{class:`hljs-attr`},`options`),s(`: options7 } = useAutoComplete()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { `),i(`span`,{class:`hljs-attr`},`value`),s(`: value8, `),i(`span`,{class:`hljs-attr`},`options`),s(`: options8 } = useAutoComplete()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { `),i(`span`,{class:`hljs-attr`},`value`),s(`: value9, `),i(`span`,{class:`hljs-attr`},`options`),s(`: options9 } = useAutoComplete()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { `),i(`span`,{class:`hljs-attr`},`value`),s(`: value10, `),i(`span`,{class:`hljs-attr`},`options`),s(`: options10 } = useAutoComplete()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { `),i(`span`,{class:`hljs-attr`},`value`),s(`: value11, `),i(`span`,{class:`hljs-attr`},`options`),s(`: options11 } = useAutoComplete()

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`useAutoComplete`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  `),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref(`),i(`span`,{class:`hljs-string`},`''`),s(`)
  `),i(`span`,{class:`hljs-keyword`},`const`),s(` options = computed(`),i(`span`,{class:`hljs-function`},`() =>`),s(`
    [`),i(`span`,{class:`hljs-string`},`'@qq.com'`),s(`, `),i(`span`,{class:`hljs-string`},`'@163.com'`),s(`, `),i(`span`,{class:`hljs-string`},`'@gmail.com'`),s(`].map(`),i(`span`,{class:`hljs-function`},[s(`(`),i(`span`,{class:`hljs-params`},`suffix`),s(`) =>`)]),s(` {
      `),i(`span`,{class:`hljs-keyword`},`const`),s(` [prefix] = value.value.split(`),i(`span`,{class:`hljs-string`},`'@'`),s(`)
      `),i(`span`,{class:`hljs-keyword`},`return`),s(` {
        `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},[s("`"),i(`span`,{class:`hljs-subst`},"${prefix}"),i(`span`,{class:`hljs-subst`},"${suffix}"),s("`")]),s(`,
        `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},[s("`"),i(`span`,{class:`hljs-subst`},"${prefix}"),i(`span`,{class:`hljs-subst`},"${suffix}"),s("`")]),s(`,
      }
    })
  )

  `),i(`span`,{class:`hljs-keyword`},`return`),s(` {
    value,
    options,
  }
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(),i(`span`,{class:`hljs-attr`},`direction`),s(`=`),i(`span`,{class:`hljs-string`},`"column"`),s(),i(`span`,{class:`hljs-attr`},`size`),s(`=`),i(`span`,{class:`hljs-string`},`"large"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"请输入文本"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`readonly`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"只读"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options2"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value2"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`disabled`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"禁用"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options3"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value3"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`clearable`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"可清除"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options4"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value4"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`clearable`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"使用插槽自定义清除图标"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options5"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value5"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`clear-icon`),s(`=`),i(`span`,{class:`hljs-string`},`"{ clear }"`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"error"`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"clear"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"字段校验"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options6"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"v => v.length > 6 || '文本长度必须大于6'"`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value6"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"使用 Zod 进行校验"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options7"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"z.string().min(7, '文本长度必须大于6')"`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value7"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"显示图标"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options8"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value8"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`prepend-icon`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"prepend-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"github"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`append-icon`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"append-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"github"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`>`)]),s(`  
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"最大长度"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:maxlength`),s(`=`),i(`span`,{class:`hljs-string`},`"10"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options9"`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value9"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"自定义菜单显示时机"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:get-show`),s(`=`),i(`span`,{class:`hljs-string`},`"(value) => value10.length > 3"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options10"`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value10"`),s(`
    />`)]),s(`  
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`size`),s(`=`),i(`span`,{class:`hljs-string`},`"small"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"小尺寸"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options11"`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value11"`),s(`
    />`)]),s(`  
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.prepend-icon`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`margin-right`),s(`: `),i(`span`,{class:`hljs-number`},`6px`),s(`;
}

`),i(`span`,{class:`hljs-selector-class`},`.append-icon`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`margin-left`),s(`: `),i(`span`,{class:`hljs-number`},`6px`),s(`;
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(F,{to:`#wai4bian0kuang4wai4guan1`},{default:t(()=>[...l[6]||=[s(`#`,-1)]]),_:1}),l[7]||=s(`外边框外观`,-1)]),o(I,null,{default:t(()=>[...l[8]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref, computed } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { z } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'zod'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` { value, options } = useAutoComplete()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { `),i(`span`,{class:`hljs-attr`},`value`),s(`: value2, `),i(`span`,{class:`hljs-attr`},`options`),s(`: options2 } = useAutoComplete()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { `),i(`span`,{class:`hljs-attr`},`value`),s(`: value3, `),i(`span`,{class:`hljs-attr`},`options`),s(`: options3 } = useAutoComplete()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { `),i(`span`,{class:`hljs-attr`},`value`),s(`: value4, `),i(`span`,{class:`hljs-attr`},`options`),s(`: options4 } = useAutoComplete()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { `),i(`span`,{class:`hljs-attr`},`value`),s(`: value5, `),i(`span`,{class:`hljs-attr`},`options`),s(`: options5 } = useAutoComplete()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { `),i(`span`,{class:`hljs-attr`},`value`),s(`: value6, `),i(`span`,{class:`hljs-attr`},`options`),s(`: options6 } = useAutoComplete()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { `),i(`span`,{class:`hljs-attr`},`value`),s(`: value7, `),i(`span`,{class:`hljs-attr`},`options`),s(`: options7 } = useAutoComplete()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { `),i(`span`,{class:`hljs-attr`},`value`),s(`: value8, `),i(`span`,{class:`hljs-attr`},`options`),s(`: options8 } = useAutoComplete()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { `),i(`span`,{class:`hljs-attr`},`value`),s(`: value9, `),i(`span`,{class:`hljs-attr`},`options`),s(`: options9 } = useAutoComplete()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { `),i(`span`,{class:`hljs-attr`},`value`),s(`: value10, `),i(`span`,{class:`hljs-attr`},`options`),s(`: options10 } = useAutoComplete()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { `),i(`span`,{class:`hljs-attr`},`value`),s(`: value11, `),i(`span`,{class:`hljs-attr`},`options`),s(`: options11 } = useAutoComplete()

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`useAutoComplete`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  `),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref(`),i(`span`,{class:`hljs-string`},`''`),s(`)
  `),i(`span`,{class:`hljs-keyword`},`const`),s(` options = computed(`),i(`span`,{class:`hljs-function`},`() =>`),s(`
    [`),i(`span`,{class:`hljs-string`},`'@qq.com'`),s(`, `),i(`span`,{class:`hljs-string`},`'@163.com'`),s(`, `),i(`span`,{class:`hljs-string`},`'@gmail.com'`),s(`].map(`),i(`span`,{class:`hljs-function`},[s(`(`),i(`span`,{class:`hljs-params`},`suffix`),s(`) =>`)]),s(` {
      `),i(`span`,{class:`hljs-keyword`},`const`),s(` [prefix] = value.value.split(`),i(`span`,{class:`hljs-string`},`'@'`),s(`)
      `),i(`span`,{class:`hljs-keyword`},`return`),s(` {
        `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},[s("`"),i(`span`,{class:`hljs-subst`},"${prefix}"),i(`span`,{class:`hljs-subst`},"${suffix}"),s("`")]),s(`,
        `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},[s("`"),i(`span`,{class:`hljs-subst`},"${prefix}"),i(`span`,{class:`hljs-subst`},"${suffix}"),s("`")]),s(`,
      }
    })
  )

  `),i(`span`,{class:`hljs-keyword`},`return`),s(` {
    value,
    options,
  }
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(),i(`span`,{class:`hljs-attr`},`direction`),s(`=`),i(`span`,{class:`hljs-string`},`"column"`),s(),i(`span`,{class:`hljs-attr`},`size`),s(`=`),i(`span`,{class:`hljs-string`},`"large"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"请输入文本"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`readonly`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"只读"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options2"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value2"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`disabled`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"禁用"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options3"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value3"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`clearable`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"可清除"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options4"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value4"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`clearable`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"使用插槽自定义清除图标"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options5"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value5"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`clear-icon`),s(`=`),i(`span`,{class:`hljs-string`},`"{ clear }"`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"error"`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"clear"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"字段校验"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options6"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"v => v.length > 6 || '文本长度必须大于6'"`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value6"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"使用 Zod 进行校验"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options7"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"z.string().min(7, '文本长度必须大于6')"`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value7"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"显示图标"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options8"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value8"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`prepend-icon`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"prepend-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"github"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`append-icon`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"append-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"github"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`>`)]),s(`  
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"最大长度"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:maxlength`),s(`=`),i(`span`,{class:`hljs-string`},`"10"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options9"`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value9"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"自定义菜单显示时机"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:get-show`),s(`=`),i(`span`,{class:`hljs-string`},`"(value) => value.length > 3"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options10"`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value10"`),s(`
    />`)]),s(`  
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
      `),i(`span`,{class:`hljs-attr`},`size`),s(`=`),i(`span`,{class:`hljs-string`},`"small"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"小尺寸"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options11"`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value11"`),s(`
    />`)]),s(`  
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.prepend-icon`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`margin-right`),s(`: `),i(`span`,{class:`hljs-number`},`6px`),s(`;
}

`),i(`span`,{class:`hljs-selector-class`},`.append-icon`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`margin-left`),s(`: `),i(`span`,{class:`hljs-number`},`6px`),s(`;
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,_,[i(`h3`,v,[o(F,{to:`#tian2chong1wai4guan1`},{default:t(()=>[...l[9]||=[s(`#`,-1)]]),_:1}),l[10]||=s(`填充外观`,-1)]),o(I,null,{default:t(()=>[...l[11]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref, computed } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { z } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'zod'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` { value, options } = useAutoComplete()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { `),i(`span`,{class:`hljs-attr`},`value`),s(`: value2, `),i(`span`,{class:`hljs-attr`},`options`),s(`: options2 } = useAutoComplete()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { `),i(`span`,{class:`hljs-attr`},`value`),s(`: value3, `),i(`span`,{class:`hljs-attr`},`options`),s(`: options3 } = useAutoComplete()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { `),i(`span`,{class:`hljs-attr`},`value`),s(`: value4, `),i(`span`,{class:`hljs-attr`},`options`),s(`: options4 } = useAutoComplete()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { `),i(`span`,{class:`hljs-attr`},`value`),s(`: value5, `),i(`span`,{class:`hljs-attr`},`options`),s(`: options5 } = useAutoComplete()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { `),i(`span`,{class:`hljs-attr`},`value`),s(`: value6, `),i(`span`,{class:`hljs-attr`},`options`),s(`: options6 } = useAutoComplete()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { `),i(`span`,{class:`hljs-attr`},`value`),s(`: value7, `),i(`span`,{class:`hljs-attr`},`options`),s(`: options7 } = useAutoComplete()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { `),i(`span`,{class:`hljs-attr`},`value`),s(`: value8, `),i(`span`,{class:`hljs-attr`},`options`),s(`: options8 } = useAutoComplete()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { `),i(`span`,{class:`hljs-attr`},`value`),s(`: value9, `),i(`span`,{class:`hljs-attr`},`options`),s(`: options9 } = useAutoComplete()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { `),i(`span`,{class:`hljs-attr`},`value`),s(`: value10, `),i(`span`,{class:`hljs-attr`},`options`),s(`: options10 } = useAutoComplete()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { `),i(`span`,{class:`hljs-attr`},`value`),s(`: value11, `),i(`span`,{class:`hljs-attr`},`options`),s(`: options11 } = useAutoComplete()

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`useAutoComplete`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  `),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref(`),i(`span`,{class:`hljs-string`},`''`),s(`)
  `),i(`span`,{class:`hljs-keyword`},`const`),s(` options = computed(`),i(`span`,{class:`hljs-function`},`() =>`),s(`
    [`),i(`span`,{class:`hljs-string`},`'@qq.com'`),s(`, `),i(`span`,{class:`hljs-string`},`'@163.com'`),s(`, `),i(`span`,{class:`hljs-string`},`'@gmail.com'`),s(`].map(`),i(`span`,{class:`hljs-function`},[s(`(`),i(`span`,{class:`hljs-params`},`suffix`),s(`) =>`)]),s(` {
      `),i(`span`,{class:`hljs-keyword`},`const`),s(` [prefix] = value.value.split(`),i(`span`,{class:`hljs-string`},`'@'`),s(`)
      `),i(`span`,{class:`hljs-keyword`},`return`),s(` {
        `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},[s("`"),i(`span`,{class:`hljs-subst`},"${prefix}"),i(`span`,{class:`hljs-subst`},"${suffix}"),s("`")]),s(`,
        `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},[s("`"),i(`span`,{class:`hljs-subst`},"${prefix}"),i(`span`,{class:`hljs-subst`},"${suffix}"),s("`")]),s(`,
      }
    })
  )

  `),i(`span`,{class:`hljs-keyword`},`return`),s(` {
    value,
    options,
  }
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(),i(`span`,{class:`hljs-attr`},`direction`),s(`=`),i(`span`,{class:`hljs-string`},`"column"`),s(),i(`span`,{class:`hljs-attr`},`size`),s(`=`),i(`span`,{class:`hljs-string`},`"large"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"请输入文本"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`readonly`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"只读"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options2"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value2"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`disabled`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"禁用"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options3"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value3"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`clearable`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"可清除"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options4"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value4"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`clearable`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"使用插槽自定义清除图标"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options5"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value5"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`clear-icon`),s(`=`),i(`span`,{class:`hljs-string`},`"{ clear }"`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"error"`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"clear"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"字段校验"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options6"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"v => v.length > 6 || '文本长度必须大于6'"`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value6"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"使用 Zod 进行校验"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options7"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"z.string().min(7, '文本长度必须大于6')"`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value7"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"显示图标"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options8"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value8"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`prepend-icon`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"prepend-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"github"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`append-icon`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"append-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"github"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`>`)]),s(`  
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"最大长度"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:maxlength`),s(`=`),i(`span`,{class:`hljs-string`},`"10"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options9"`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value9"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"自定义菜单显示时机"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:get-show`),s(`=`),i(`span`,{class:`hljs-string`},`"(value) => value.length > 3"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options10"`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value10"`),s(`
    />`)]),s(`  
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(`
      `),i(`span`,{class:`hljs-attr`},`size`),s(`=`),i(`span`,{class:`hljs-string`},`"small"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"小尺寸"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options11"`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value11"`),s(`
    />`)]),s(`  
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.prepend-icon`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`margin-right`),s(`: `),i(`span`,{class:`hljs-number`},`6px`),s(`;
}

`),i(`span`,{class:`hljs-selector-class`},`.append-icon`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`margin-left`),s(`: `),i(`span`,{class:`hljs-number`},`6px`),s(`;
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,y,[i(`h3`,b,[o(F,{to:`#cai4dan1yuan2jiao3`},{default:t(()=>[...l[12]||=[s(`#`,-1)]]),_:1}),l[13]||=s(`菜单圆角`,-1)]),l[15]||=i(`p`,null,[s(`通过 `),i(`code`,null,`menu-radius="large"`),s(` 设置弹出菜单为大圆角。`)],-1),o(I,null,{default:t(()=>[...l[14]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` normalRadiusValue = ref(`),i(`span`,{class:`hljs-string`},`''`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` largeRadiusValue = ref(`),i(`span`,{class:`hljs-string`},`''`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` options = [
  { `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'JavaScript'`),s(`, `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'JavaScript'`),s(` },
  { `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'TypeScript'`),s(`, `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'TypeScript'`),s(` },
]
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(),i(`span`,{class:`hljs-attr`},`direction`),s(`=`),i(`span`,{class:`hljs-string`},`"column"`),s(),i(`span`,{class:`hljs-attr`},`size`),s(`=`),i(`span`,{class:`hljs-string`},`"large"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"normalRadiusValue"`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
      `),i(`span`,{class:`hljs-attr`},`menu-radius`),s(`=`),i(`span`,{class:`hljs-string`},`"normal"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"常规圆角"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"largeRadiusValue"`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
      `),i(`span`,{class:`hljs-attr`},`menu-radius`),s(`=`),i(`span`,{class:`hljs-string`},`"large"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"大圆角"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(`
    />`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),l[32]||=i(`h2`,null,`API`,-1),i(`div`,x,[i(`h3`,S,[o(F,{to:`#shu3xing4`},{default:t(()=>[...l[16]||=[s(`#`,-1)]]),_:1}),l[17]||=s(`属性`,-1)]),l[18]||=c(`<h4>AutoComplete Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>绑定的值</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>variant</code></td><td>输入框风格, 可选值为 <code>standard</code> <code>outlined</code> <code>filled</code></td><td><em>string</em></td><td><code>standard</code></td></tr><tr><td><code>size</code></td><td>输入框尺寸，可选值 <code>normal</code> <code>small</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>placeholder</code></td><td>占位符</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>menu-radius</code> <em><strong>3.20.9</strong></em></td><td>弹出菜单圆角，可选值 <code>normal</code> <code>large</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>options</code></td><td>指定可选项</td><td><em>AutoCompleteOption[]</em></td><td><code>[]</code></td></tr><tr><td><code>label-key</code></td><td>作为 label 唯一标识的键名</td><td><em>string</em></td><td><code>label</code></td></tr><tr><td><code>value-key</code></td><td>作为 value 唯一标识的键名</td><td><em>string</em></td><td><code>value</code></td></tr><tr><td><code>maxlength</code></td><td>最大长度</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>是否只读</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>validate-trigger</code></td><td>触发验证的时机，可选值为 <code>onFocus</code> <code>onBlur</code> <code>onChange</code> <code>onClick</code> <code>onClear</code> <code>onInput</code></td><td><em>AutoCompleteValidateTrigger[]</em></td><td><code>[&#39;onInput&#39;, &#39;onClear&#39;, &#39;onChange&#39;]</code></td></tr><tr><td><code>rules</code></td><td>验证规则，返回 <code>true</code> 表示验证通过，其余的值则转换为文本作为用户提示</td><td><em>((v: string) =&gt; any) | ZodType | Array&lt;((v: string) =&gt; any) | ZodType&gt;</em></td><td><code>-</code></td></tr><tr><td><code>enterkeyhint</code></td><td>定制回车键样式，参见 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint">MDN</a></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>clearable</code></td><td>是否可清除</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>line</code></td><td>是否显示分割线</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hint</code></td><td>是否使用占位符作为提示</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>text-color</code></td><td>文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>focus-color</code></td><td>聚焦时的主要颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>blur-color</code></td><td>失焦时的主要颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>get-show</code></td><td>根据输入值决定是否显示菜单</td><td><em>(v: string) =&gt; boolean</em></td><td><code>-</code></td></tr><tr><td><code>tabindex</code> <em><strong>3.12.1</strong></em></td><td>与原生 input 的 tabindex 属性一致</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table><h4>AutoCompleteOption</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>label</code></td><td>选项的标签</td><td><em>string | VNode | (option: AutoCompleteOption, checked: boolean) =&gt; VNodeChild</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>选项的值</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><em>boolean</em></td><td><code>-</code></td></tr></tbody></table>`,4)]),i(`div`,C,[i(`h3`,w,[o(F,{to:`#fang1fa3`},{default:t(()=>[...l[19]||=[s(`#`,-1)]]),_:1}),l[20]||=s(`方法`,-1)]),l[21]||=c(`<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>focus</code></td><td>聚焦</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>blur</code></td><td>失焦</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>validate</code></td><td>触发校验</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>清空校验信息</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>清空绑定的值和校验信息</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,T,[i(`h3`,E,[o(F,{to:`#shi4jian4`},{default:t(()=>[...l[22]||=[s(`#`,-1)]]),_:1}),l[23]||=s(`事件`,-1)]),l[24]||=c(`<table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>focus</code></td><td>聚焦时触发</td><td><code>-</code></td></tr><tr><td><code>blur</code></td><td>失焦时触发</td><td><code>-</code></td></tr><tr><td><code>click</code></td><td>点击时触发</td><td><code>event: Event</code></td></tr><tr><td><code>clear</code></td><td>清除时触发</td><td><code>value: string</code></td></tr><tr><td><code>input</code></td><td>输入时触发</td><td><code>value: string</code>, <code>event: Event</code></td></tr><tr><td><code>change</code></td><td>更新时触发</td><td><code>value: string</code></td></tr></tbody></table>`,1)]),i(`div`,D,[i(`h3`,O,[o(F,{to:`#cha1cao2`},{default:t(()=>[...l[25]||=[s(`#`,-1)]]),_:1}),l[26]||=s(`插槽`,-1)]),l[27]||=c(`<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>prepend-icon</code></td><td>前置图标</td><td><code>-</code></td></tr><tr><td><code>append-icon</code></td><td>后置图标</td><td><code>-</code></td></tr><tr><td><code>clear-icon</code></td><td>清除图标</td><td><code>clear: (e: Event) =&gt; void</code> 清除函数(在使用插槽时, 可用于清除输入框内容)</td></tr><tr><td><code>extra-message</code></td><td>附加信息</td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,k,[i(`h3`,A,[o(F,{to:`#yang4shi4bian4liang4`},{default:t(()=>[...l[28]||=[s(`#`,-1)]]),_:1}),l[29]||=s(`样式变量`,-1)]),l[30]||=c(`<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><h4>AutoComplete Variables</h4><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--auto-complete-options-padding</code></td><td><code>6px 0</code></td></tr></tbody></table><h4>Variant Variables</h4><p>外观相关的样式变量请参考 <a href="#/zh-CN/input#yang4shi4bian4liang4">Input 组件</a> 的样式变量</p>`,5)])])}var M=e(l,[[`render`,j]]);export{M as default};