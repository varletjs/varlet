import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`StandardVariant`},h={class:`card`},g={id:`OutlinedVariant`},_={class:`card`},v={id:`FilledVariant`},y={class:`card`},b={id:`MenuRadius`},x={class:`card`},S={id:`Props`},C={class:`card`},w={id:`Methods`},T={class:`card`},E={id:`Events`},D={class:`card`},O={id:`Slots`},k={class:`card`},A={id:`StyleVariables`};function j(e,l,j,M,N,P){let F=n(`router-link`),I=n(`var-site-code-example`);return r(),a(`div`,u,[l[31]||=i(`h1`,null,`AutoComplete`,-1),i(`div`,d,[i(`h3`,f,[o(F,{to:`#Intro`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`Intro`,-1)]),l[2]||=i(`p`,null,`Autocomplete function of input field.`,-1)]),i(`div`,p,[i(`h3`,m,[o(F,{to:`#StandardVariant`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`Standard Variant`,-1)]),o(I,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
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
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Please enter text"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`readonly`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Readonly"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options2"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value2"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`disabled`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Disabled"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options3"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value3"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`clearable`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Clearable"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options4"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value4"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`clearable`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Use the clear icon slot"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options5"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value5"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`clear-icon`),s(`=`),i(`span`,{class:`hljs-string`},`"{ clear }"`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"error"`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"clear"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Validate"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options6"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"v => v.length > 6 || 'Text length must be greater than 6'"`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value6"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Validate With Zod"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options7"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"z.string().min(7, 'Text length must be greater than 6')"`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value7"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Display Icon"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options8"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value8"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`prepend-icon`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"prepend-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"github"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`append-icon`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"append-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"github"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`>`)]),s(`  
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Maxlength"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:maxlength`),s(`=`),i(`span`,{class:`hljs-string`},`"10"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options9"`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value9"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Custom Menu Show Timing"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:get-show`),s(`=`),i(`span`,{class:`hljs-string`},`"(value) => value.length > 3"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options10"`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value10"`),s(`
    />`)]),s(`  
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`size`),s(`=`),i(`span`,{class:`hljs-string`},`"small"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Small Size"`),s(`
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
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(F,{to:`#OutlinedVariant`},{default:t(()=>[...l[6]||=[s(`#`,-1)]]),_:1}),l[7]||=s(`Outlined Variant`,-1)]),o(I,null,{default:t(()=>[...l[8]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
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
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Please enter text"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`readonly`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Readonly"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options2"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value2"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`disabled`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Disabled"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options3"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value3"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`clearable`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Clearable"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options4"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value4"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`clearable`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Use the clear icon slot"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options5"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value5"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`clear-icon`),s(`=`),i(`span`,{class:`hljs-string`},`"{ clear }"`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"error"`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"clear"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Validate"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options6"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"v => v.length > 6 || 'Text length must be greater than 6'"`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value6"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Validate With Zod"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options7"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"z.string().min(7, 'Text length must be greater than 6')"`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value7"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Display Icon"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options8"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value8"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`prepend-icon`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"prepend-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"github"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`append-icon`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"append-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"github"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`>`)]),s(`  
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Maxlength"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:maxlength`),s(`=`),i(`span`,{class:`hljs-string`},`"10"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options9"`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value9"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Custom Menu Show Timing"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:get-show`),s(`=`),i(`span`,{class:`hljs-string`},`"(value) => value.length > 3"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options10"`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value10"`),s(`
    />`)]),s(`  
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
      `),i(`span`,{class:`hljs-attr`},`size`),s(`=`),i(`span`,{class:`hljs-string`},`"small"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Small Size"`),s(`
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
`)])],-1)]]),_:1})]),i(`div`,_,[i(`h3`,v,[o(F,{to:`#FilledVariant`},{default:t(()=>[...l[9]||=[s(`#`,-1)]]),_:1}),l[10]||=s(`Filled Variant`,-1)]),o(I,null,{default:t(()=>[...l[11]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
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

  retu drn {
    value,
    options,
  }
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(),i(`span`,{class:`hljs-attr`},`direction`),s(`=`),i(`span`,{class:`hljs-string`},`"column"`),s(),i(`span`,{class:`hljs-attr`},`size`),s(`=`),i(`span`,{class:`hljs-string`},`"large"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Please enter text"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`readonly`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Readonly"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options2"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value2"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`disabled`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Disabled"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options3"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value3"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`clearable`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Clearable"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options4"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value4"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`clearable`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Use the clear icon slot"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options5"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value5"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`clear-icon`),s(`=`),i(`span`,{class:`hljs-string`},`"{ clear }"`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"error"`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"clear"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Validate"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options6"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"v => v.length > 6 || 'Text length must be greater than 6'"`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value6"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Validate With Zod"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options7"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"z.string().min(7, 'Text length must be greater than 6')"`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value7"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Display Icon"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options8"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value8"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`prepend-icon`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"prepend-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"github"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`append-icon`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"append-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"github"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`>`)]),s(`  
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Maxlength"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:maxlength`),s(`=`),i(`span`,{class:`hljs-string`},`"10"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options9"`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value9"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Custom Menu Show Timing"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:get-show`),s(`=`),i(`span`,{class:`hljs-string`},`"(value) => value.length > 3"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options10"`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value10"`),s(`
    />`)]),s(`  
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(`
      `),i(`span`,{class:`hljs-attr`},`size`),s(`=`),i(`span`,{class:`hljs-string`},`"small"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Small Size"`),s(`
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
`)])],-1)]]),_:1})]),i(`div`,y,[i(`h3`,b,[o(F,{to:`#MenuRadius`},{default:t(()=>[...l[12]||=[s(`#`,-1)]]),_:1}),l[13]||=s(`Menu Radius`,-1)]),l[15]||=i(`p`,null,[s(`Use `),i(`code`,null,`menu-radius="large"`),s(` to display the popup menu with large rounded corners.`)],-1),o(I,null,{default:t(()=>[...l[14]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
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
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Normal Menu Radius"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"largeRadiusValue"`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
      `),i(`span`,{class:`hljs-attr`},`menu-radius`),s(`=`),i(`span`,{class:`hljs-string`},`"large"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Large Menu Radius"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(`
    />`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),l[32]||=i(`h2`,null,`API`,-1),i(`div`,x,[i(`h3`,S,[o(F,{to:`#Props`},{default:t(()=>[...l[16]||=[s(`#`,-1)]]),_:1}),l[17]||=s(`Props`,-1)]),l[18]||=c(`<h4>AutoComplete Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of the binding</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>variant</code></td><td>Input variants, The optional value is <code>standard</code> <code>outlined</code> <code>filled</code></td><td><em>string</em></td><td><code>standard</code></td></tr><tr><td><code>size</code></td><td>Input size, The optional value is <code>normal</code> <code>small</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>placeholder</code></td><td>placeholder</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>menu-radius</code> <em><strong>3.20.9</strong></em></td><td>Popup menu radius, optional values are <code>normal</code> <code>large</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>options</code></td><td>Specifies options</td><td><em>AutoCompleteOption[]</em></td><td><code>[]</code></td></tr><tr><td><code>label-key</code></td><td>As the key that uniquely identifies label</td><td><em>string</em></td><td><code>label</code></td></tr><tr><td><code>value-key</code></td><td>As the key that uniquely identifies value</td><td><em>string</em></td><td><code>value</code></td></tr><tr><td><code>maxlength</code></td><td>Maxlength</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>validate-trigger</code></td><td>Timing to trigger validation, The optional value is <code>onFocus</code> <code>onBlur</code> <code>onChange</code> <code>onClick</code> <code>onClear</code> <code>onInput</code></td><td><em>AutoCompleteValidateTrigger[]</em></td><td><code>[&#39;onInput&#39;, &#39;onClear&#39;, &#39;onChange&#39;]</code></td></tr><tr><td><code>rules</code></td><td>Validation rules, return <code>true</code> to indicate verification passes, other types of values ​​will be converted into text as user prompts. <a href="#/en-US/zodValidation">Zod validation</a> is supported since <code>3.5.0</code></td><td><em>((v: string) =&gt; any) | ZodType | Array&lt;((v: string) =&gt; any) | ZodType&gt;</em></td><td><code>-</code></td></tr><tr><td><code>enterkeyhint</code></td><td>Customize the enter key style, See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint">MDN</a></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>clearable</code></td><td>Whether the clearable</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>line</code></td><td>Whether to display a dividing line</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hint</code></td><td>Whether to use placeholder as hint</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>text-color</code></td><td>Text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>focus-color</code></td><td>The primary color in focus</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>blur-color</code></td><td>The primary color in blur</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>get-show</code></td><td>Determine whether the menu is displayed according to the input value</td><td><em>(v: string) =&gt; boolean</em></td><td><code>-</code></td></tr><tr><td><code>tabindex</code> <em><strong>3.12.1</strong></em></td><td>Consistent with the tabindex property of native input</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table><h4>AutoCompleteOption</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>label</code></td><td>The text of option</td><td><em>string | VNode | (option: AutoCompleteOption, checked: boolean) =&gt; VNodeChild</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>The value of option</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable option</td><td><em>boolean</em></td><td><code>-</code></td></tr></tbody></table>`,4)]),i(`div`,C,[i(`h3`,w,[o(F,{to:`#Methods`},{default:t(()=>[...l[19]||=[s(`#`,-1)]]),_:1}),l[20]||=s(`Methods`,-1)]),l[21]||=c(`<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>focus</code></td><td>Focus</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>blur</code></td><td>Blur</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clear validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,T,[i(`h3`,E,[o(F,{to:`#Events`},{default:t(()=>[...l[22]||=[s(`#`,-1)]]),_:1}),l[23]||=s(`Events`,-1)]),l[24]||=c(`<table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>focus</code></td><td>Triggered while focusing</td><td><code>-</code></td></tr><tr><td><code>blur</code></td><td>Triggered when out of focus</td><td><code>-</code></td></tr><tr><td><code>click</code></td><td>Triggered on Click</td><td><code>event: Event</code></td></tr><tr><td><code>clear</code></td><td>Triggered on Clearance</td><td><code>value: string</code></td></tr><tr><td><code>input</code></td><td>Triggered on input</td><td><code>value: string</code>, <code>event: Event</code></td></tr><tr><td><code>change</code></td><td>Triggered on change</td><td><code>value: string</code></td></tr></tbody></table>`,1)]),i(`div`,D,[i(`h3`,O,[o(F,{to:`#Slots`},{default:t(()=>[...l[25]||=[s(`#`,-1)]]),_:1}),l[26]||=s(`Slots`,-1)]),l[27]||=c(`<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>prepend-icon</code></td><td>Prepend Icon</td><td><code>-</code></td></tr><tr><td><code>append-icon</code></td><td>Append Icon</td><td><code>-</code></td></tr><tr><td><code>clear-icon</code></td><td>Clear Icon</td><td><code>clear: (e: Event) =&gt; void</code> clear function (can be used to clear input box contents when using slots)</td></tr><tr><td><code>extra-message</code></td><td>Extra message</td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,k,[i(`h3`,A,[o(F,{to:`#StyleVariables`},{default:t(()=>[...l[28]||=[s(`#`,-1)]]),_:1}),l[29]||=s(`Style Variables`,-1)]),l[30]||=c(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><h4>AutoComplete Variables</h4><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--auto-complete-options-padding</code></td><td><code>6px 0</code></td></tr></tbody></table><h4>Variant Variables</h4><p>For style variables related to variant, please refer to the style variables of the <a href="#/en-US/input#yang4shi4bian4liang4">Input component</a>.</p>`,5)])])}var M=e(l,[[`render`,j]]);export{M as default};