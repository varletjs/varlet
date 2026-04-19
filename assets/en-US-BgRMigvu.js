import{L as e,N as t,W as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as c}from"./_plugin-vue_export-helper-V-yks4gF.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`StandardVariant`},h={class:`card`},g={id:`OutlinedVariant`},_={class:`card`},v={id:`FilledVariant`},y={class:`card`},b={id:`Props`},x={class:`card`},S={id:`Methods`},C={class:`card`},w={id:`Events`},T={class:`card`},E={id:`Slots`},D={class:`card`},O={id:`StyleVariables`};function k(c,l,k,A,j,M){let N=e(`router-link`),P=e(`var-site-code-example`);return t(),i(`div`,u,[l[27]||=r(`h1`,null,`AutoComplete`,-1),r(`div`,d,[r(`h3`,f,[a(N,{to:`#Intro`},{default:n(()=>[...l[0]||=[o(`#`,-1)]]),_:1}),l[1]||=o(`Intro`,-1)]),l[2]||=r(`p`,null,`Autocomplete function of input field.`,-1)]),r(`div`,p,[r(`h3`,m,[a(N,{to:`#StandardVariant`},{default:n(()=>[...l[3]||=[o(`#`,-1)]]),_:1}),l[4]||=o(`Standard Variant`,-1)]),a(P,null,{default:n(()=>[...l[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
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
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Please enter text"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`readonly`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Readonly"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options2"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value2"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`disabled`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Disabled"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options3"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value3"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`clearable`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Clearable"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options4"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value4"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`clearable`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Use the clear icon slot"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options5"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value5"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`clear-icon`),o(`=`),r(`span`,{class:`hljs-string`},`"{ clear }"`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"error"`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"clear"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Validate"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options6"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"v => v.length > 6 || 'Text length must be greater than 6'"`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value6"`),o(`
    />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Validate With Zod"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options7"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"z.string().min(7, 'Text length must be greater than 6')"`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value7"`),o(`
    />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Display Icon"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options8"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value8"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`prepend-icon`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"prepend-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"github"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`append-icon`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"append-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"github"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`>`)]),o(`  
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Maxlength"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:maxlength`),o(`=`),r(`span`,{class:`hljs-string`},`"10"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options9"`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value9"`),o(`
    />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Custom Menu Show Timing"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:get-show`),o(`=`),r(`span`,{class:`hljs-string`},`"(value) => value.length > 3"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options10"`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value10"`),o(`
    />`)]),o(`  
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`
      `),r(`span`,{class:`hljs-attr`},`size`),o(`=`),r(`span`,{class:`hljs-string`},`"small"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Small Size"`),o(`
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
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[a(N,{to:`#OutlinedVariant`},{default:n(()=>[...l[6]||=[o(`#`,-1)]]),_:1}),l[7]||=o(`Outlined Variant`,-1)]),a(P,null,{default:n(()=>[...l[8]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
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
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Please enter text"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(),r(`span`,{class:`hljs-attr`},`readonly`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Readonly"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options2"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value2"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(),r(`span`,{class:`hljs-attr`},`disabled`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Disabled"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options3"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value3"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(),r(`span`,{class:`hljs-attr`},`clearable`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Clearable"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options4"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value4"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(),r(`span`,{class:`hljs-attr`},`clearable`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Use the clear icon slot"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options5"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value5"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`clear-icon`),o(`=`),r(`span`,{class:`hljs-string`},`"{ clear }"`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"error"`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"clear"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`
      `),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Validate"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options6"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"v => v.length > 6 || 'Text length must be greater than 6'"`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value6"`),o(`
    />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`
      `),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Validate With Zod"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options7"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"z.string().min(7, 'Text length must be greater than 6')"`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value7"`),o(`
    />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Display Icon"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options8"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value8"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`prepend-icon`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"prepend-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"github"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`append-icon`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"append-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"github"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`>`)]),o(`  
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`
      `),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Maxlength"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:maxlength`),o(`=`),r(`span`,{class:`hljs-string`},`"10"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options9"`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value9"`),o(`
    />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`
      `),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Custom Menu Show Timing"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:get-show`),o(`=`),r(`span`,{class:`hljs-string`},`"(value) => value.length > 3"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options10"`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value10"`),o(`
    />`)]),o(`  
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`
      `),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(`
      `),r(`span`,{class:`hljs-attr`},`size`),o(`=`),r(`span`,{class:`hljs-string`},`"small"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Small Size"`),o(`
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
`)])],-1)]]),_:1})]),r(`div`,_,[r(`h3`,v,[a(N,{to:`#FilledVariant`},{default:n(()=>[...l[9]||=[o(`#`,-1)]]),_:1}),l[10]||=o(`Filled Variant`,-1)]),a(P,null,{default:n(()=>[...l[11]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
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

  retu drn {
    value,
    options,
  }
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-space`),o(),r(`span`,{class:`hljs-attr`},`direction`),o(`=`),r(`span`,{class:`hljs-string`},`"column"`),o(),r(`span`,{class:`hljs-attr`},`size`),o(`=`),r(`span`,{class:`hljs-string`},`"large"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Please enter text"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(),r(`span`,{class:`hljs-attr`},`readonly`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Readonly"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options2"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value2"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(),r(`span`,{class:`hljs-attr`},`disabled`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Disabled"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options3"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value3"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(),r(`span`,{class:`hljs-attr`},`clearable`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Clearable"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options4"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value4"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(),r(`span`,{class:`hljs-attr`},`clearable`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Use the clear icon slot"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options5"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value5"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`clear-icon`),o(`=`),r(`span`,{class:`hljs-string`},`"{ clear }"`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"error"`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"clear"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`
      `),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Validate"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options6"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"v => v.length > 6 || 'Text length must be greater than 6'"`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value6"`),o(`
    />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`
      `),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Validate With Zod"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options7"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"z.string().min(7, 'Text length must be greater than 6')"`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value7"`),o(`
    />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Display Icon"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options8"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value8"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`prepend-icon`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"prepend-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"github"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`append-icon`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"append-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"github"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`>`)]),o(`  
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`
      `),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Maxlength"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:maxlength`),o(`=`),r(`span`,{class:`hljs-string`},`"10"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options9"`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value9"`),o(`
    />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`
      `),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Custom Menu Show Timing"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:get-show`),o(`=`),r(`span`,{class:`hljs-string`},`"(value) => value.length > 3"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options10"`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value10"`),o(`
    />`)]),o(`  
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-auto-complete`),o(`
      `),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(`
      `),r(`span`,{class:`hljs-attr`},`size`),o(`=`),r(`span`,{class:`hljs-string`},`"small"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Small Size"`),o(`
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
`)])],-1)]]),_:1})]),l[28]||=r(`h2`,null,`API`,-1),r(`div`,y,[r(`h3`,b,[a(N,{to:`#Props`},{default:n(()=>[...l[12]||=[o(`#`,-1)]]),_:1}),l[13]||=o(`Props`,-1)]),l[14]||=s(`<h4>AutoComplete Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of the binding</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>variant</code></td><td>Input variants, The optional value is <code>standard</code> <code>outlined</code> <code>filled</code></td><td><em>string</em></td><td><code>standard</code></td></tr><tr><td><code>size</code></td><td>Input size, The optional value is <code>normal</code> <code>small</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>placeholder</code></td><td>placeholder</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>options</code></td><td>Specifies options</td><td><em>AutoCompleteOption[]</em></td><td><code>[]</code></td></tr><tr><td><code>label-key</code></td><td>As the key that uniquely identifies label</td><td><em>string</em></td><td><code>label</code></td></tr><tr><td><code>value-key</code></td><td>As the key that uniquely identifies value</td><td><em>string</em></td><td><code>value</code></td></tr><tr><td><code>maxlength</code></td><td>Maxlength</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>validate-trigger</code></td><td>Timing to trigger validation, The optional value is <code>onFocus</code> <code>onBlur</code> <code>onChange</code> <code>onClick</code> <code>onClear</code> <code>onInput</code></td><td><em>AutoCompleteValidateTrigger[]</em></td><td><code>[&#39;onInput&#39;, &#39;onClear&#39;, &#39;onChange&#39;]</code></td></tr><tr><td><code>rules</code></td><td>Validation rules, return <code>true</code> to indicate verification passes, other types of values ​​will be converted into text as user prompts. <a href="#/en-US/zodValidation">Zod validation</a> is supported since <code>3.5.0</code></td><td><em>((v: string) =&gt; any) | ZodType | Array&lt;((v: string) =&gt; any) | ZodType&gt;</em></td><td><code>-</code></td></tr><tr><td><code>enterkeyhint</code></td><td>Customize the enter key style, See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint">MDN</a></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>clearable</code></td><td>Whether the clearable</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>line</code></td><td>Whether to display a dividing line</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hint</code></td><td>Whether to use placeholder as hint</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>text-color</code></td><td>Text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>focus-color</code></td><td>The primary color in focus</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>blur-color</code></td><td>The primary color in blur</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>get-show</code></td><td>Determine whether the menu is displayed according to the input value</td><td><em>(v: string) =&gt; boolean</em></td><td><code>-</code></td></tr><tr><td><code>tabindex</code> <em><strong>3.12.1</strong></em></td><td>Consistent with the tabindex property of native input</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table><h4>AutoCompleteOption</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>label</code></td><td>The text of option</td><td><em>string | VNode | (option: AutoCompleteOption, checked: boolean) =&gt; VNodeChild</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>The value of option</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable option</td><td><em>boolean</em></td><td><code>-</code></td></tr></tbody></table>`,4)]),r(`div`,x,[r(`h3`,S,[a(N,{to:`#Methods`},{default:n(()=>[...l[15]||=[o(`#`,-1)]]),_:1}),l[16]||=o(`Methods`,-1)]),l[17]||=s(`<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>focus</code></td><td>Focus</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>blur</code></td><td>Blur</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clear validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,C,[r(`h3`,w,[a(N,{to:`#Events`},{default:n(()=>[...l[18]||=[o(`#`,-1)]]),_:1}),l[19]||=o(`Events`,-1)]),l[20]||=s(`<table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>focus</code></td><td>Triggered while focusing</td><td><code>-</code></td></tr><tr><td><code>blur</code></td><td>Triggered when out of focus</td><td><code>-</code></td></tr><tr><td><code>click</code></td><td>Triggered on Click</td><td><code>event: Event</code></td></tr><tr><td><code>clear</code></td><td>Triggered on Clearance</td><td><code>value: string</code></td></tr><tr><td><code>input</code></td><td>Triggered on input</td><td><code>value: string</code>, <code>event: Event</code></td></tr><tr><td><code>change</code></td><td>Triggered on change</td><td><code>value: string</code></td></tr></tbody></table>`,1)]),r(`div`,T,[r(`h3`,E,[a(N,{to:`#Slots`},{default:n(()=>[...l[21]||=[o(`#`,-1)]]),_:1}),l[22]||=o(`Slots`,-1)]),l[23]||=s(`<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>prepend-icon</code></td><td>Prepend Icon</td><td><code>-</code></td></tr><tr><td><code>append-icon</code></td><td>Append Icon</td><td><code>-</code></td></tr><tr><td><code>clear-icon</code></td><td>Clear Icon</td><td><code>clear: (e: Event) =&gt; void</code> clear function (can be used to clear input box contents when using slots)</td></tr><tr><td><code>extra-message</code></td><td>Extra message</td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,D,[r(`h3`,O,[a(N,{to:`#StyleVariables`},{default:n(()=>[...l[24]||=[o(`#`,-1)]]),_:1}),l[25]||=o(`Style Variables`,-1)]),l[26]||=s(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><h4>AutoComplete Variables</h4><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--auto-complete-options-padding</code></td><td><code>6px 0</code></td></tr></tbody></table><h4>Variant Variables</h4><p>For style variables related to variant, please refer to the style variables of the <a href="#/en-US/input#yang4shi4bian4liang4">Input component</a>.</p>`,5)])])}var A=c(l,[[`render`,k]]);export{A as default};