import{_ as p,m as r,p as a,q as t,w as l,Q as s,a1 as e,b as o,e as d}from"./index-D7J0Ej29.js";const h={components:{}},i={class:"varlet-site-doc"},j=a("h1",null,"AutoComplete",-1),u={class:"card"},m={id:"Intro"},g=a("p",null,"Autocomplete function of input field.",-1),v={class:"card"},b={id:"StandardVariant"},y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref, computed } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` { value, options } = useAutoComplete()
`),a("span",{class:"hljs-keyword"},"const"),s(" { "),a("span",{class:"hljs-attr"},"value"),s(": value2, "),a("span",{class:"hljs-attr"},"options"),s(`: options2 } = useAutoComplete()
`),a("span",{class:"hljs-keyword"},"const"),s(" { "),a("span",{class:"hljs-attr"},"value"),s(": value3, "),a("span",{class:"hljs-attr"},"options"),s(`: options3 } = useAutoComplete()
`),a("span",{class:"hljs-keyword"},"const"),s(" { "),a("span",{class:"hljs-attr"},"value"),s(": value4, "),a("span",{class:"hljs-attr"},"options"),s(`: options4 } = useAutoComplete()
`),a("span",{class:"hljs-keyword"},"const"),s(" { "),a("span",{class:"hljs-attr"},"value"),s(": value5, "),a("span",{class:"hljs-attr"},"options"),s(`: options5 } = useAutoComplete()
`),a("span",{class:"hljs-keyword"},"const"),s(" { "),a("span",{class:"hljs-attr"},"value"),s(": value6, "),a("span",{class:"hljs-attr"},"options"),s(`: options6 } = useAutoComplete()
`),a("span",{class:"hljs-keyword"},"const"),s(" { "),a("span",{class:"hljs-attr"},"value"),s(": value7, "),a("span",{class:"hljs-attr"},"options"),s(`: options7 } = useAutoComplete()
`),a("span",{class:"hljs-keyword"},"const"),s(" { "),a("span",{class:"hljs-attr"},"value"),s(": value8, "),a("span",{class:"hljs-attr"},"options"),s(`: options8 } = useAutoComplete()
`),a("span",{class:"hljs-keyword"},"const"),s(" { "),a("span",{class:"hljs-attr"},"value"),s(": value9, "),a("span",{class:"hljs-attr"},"options"),s(`: options9 } = useAutoComplete()
`),a("span",{class:"hljs-keyword"},"const"),s(" { "),a("span",{class:"hljs-attr"},"value"),s(": value10, "),a("span",{class:"hljs-attr"},"options"),s(`: options10 } = useAutoComplete()
`),a("span",{class:"hljs-keyword"},"const"),s(" { "),a("span",{class:"hljs-attr"},"value"),s(": value11, "),a("span",{class:"hljs-attr"},"options"),s(`: options11 } = useAutoComplete()
`),a("span",{class:"hljs-keyword"},"const"),s(" { "),a("span",{class:"hljs-attr"},"value"),s(": value12, "),a("span",{class:"hljs-attr"},"options"),s(`: options12 } = useAutoComplete()

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"useAutoComplete"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-string"},"''"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" options = computed("),a("span",{class:"hljs-function"},"() =>"),s(`
    [`),a("span",{class:"hljs-string"},"'@qq.com'"),s(", "),a("span",{class:"hljs-string"},"'@163.com'"),s(", "),a("span",{class:"hljs-string"},"'@gmail.com'"),s("].map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"suffix"),s(") =>")]),s(` {
      `),a("span",{class:"hljs-keyword"},"const"),s(" [prefix] = value.value.split("),a("span",{class:"hljs-string"},"'@'"),s(`)
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${prefix}"),a("span",{class:"hljs-subst"},"${suffix}"),s("`")]),s(`,
        `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${prefix}"),a("span",{class:"hljs-subst"},"${suffix}"),s("`")]),s(`,
      }
    })
  )

  `),a("span",{class:"hljs-keyword"},"return"),s(` {
    value,
    options,
  }
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"large"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Please enter text"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(),a("span",{class:"hljs-attr"},"readonly"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Readonly"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options2"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value2"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(),a("span",{class:"hljs-attr"},"disabled"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Disabled"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options3"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value3"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(),a("span",{class:"hljs-attr"},"clearable"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Clearable"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options4"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value4"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(),a("span",{class:"hljs-attr"},"clearable"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Use the clear icon slot"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options5"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value5"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"clear-icon"),s("="),a("span",{class:"hljs-string"},'"{ clear }"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"error"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"clear"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-auto-complete"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Validate"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options6"'),s(`
      `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"v => v.length > 6 || 'Text length must be greater than 6'"`),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value6"'),s(`
    />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"validate With Zod"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options12"'),s(`
      `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"z.string().min(7, 'Text length must be greater than 6')"`),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value12"'),s(`
    />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Display Icon"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options7"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value7"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"prepend-icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"prepend-icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"github"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"append-icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"append-icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"github"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-auto-complete"),s(">")]),s(`  
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Custom Icon Size"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options8"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"prepend-icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"prepend-icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"github"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"28"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"append-icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"append-icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"github"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"42"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-auto-complete"),s(">")]),s(`  
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Maxlength"'),s(`
      `),a("span",{class:"hljs-attr"},":maxlength"),s("="),a("span",{class:"hljs-string"},'"10"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options9"'),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value9"'),s(`
    />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Custom Menu Show Timing"'),s(`
      `),a("span",{class:"hljs-attr"},":get-show"),s("="),a("span",{class:"hljs-string"},'"(value) => value.length > 3"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options10"'),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value10"'),s(`
    />`)]),s(`  
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(`
      `),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Small Size"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options11"'),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value11"'),s(`
    />`)]),s(`  
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".prepend-icon"),s(` {
  `),a("span",{class:"hljs-attribute"},"margin-right"),s(": "),a("span",{class:"hljs-number"},"6px"),s(`;
}

`),a("span",{class:"hljs-selector-class"},".append-icon"),s(` {
  `),a("span",{class:"hljs-attribute"},"margin-left"),s(": "),a("span",{class:"hljs-number"},"6px"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),_={class:"card"},f={id:"OutlinedVariant"},k=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref, computed } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` { value, options } = useAutoComplete()
`),a("span",{class:"hljs-keyword"},"const"),s(" { "),a("span",{class:"hljs-attr"},"value"),s(": value2, "),a("span",{class:"hljs-attr"},"options"),s(`: options2 } = useAutoComplete()
`),a("span",{class:"hljs-keyword"},"const"),s(" { "),a("span",{class:"hljs-attr"},"value"),s(": value3, "),a("span",{class:"hljs-attr"},"options"),s(`: options3 } = useAutoComplete()
`),a("span",{class:"hljs-keyword"},"const"),s(" { "),a("span",{class:"hljs-attr"},"value"),s(": value4, "),a("span",{class:"hljs-attr"},"options"),s(`: options4 } = useAutoComplete()
`),a("span",{class:"hljs-keyword"},"const"),s(" { "),a("span",{class:"hljs-attr"},"value"),s(": value5, "),a("span",{class:"hljs-attr"},"options"),s(`: options5 } = useAutoComplete()
`),a("span",{class:"hljs-keyword"},"const"),s(" { "),a("span",{class:"hljs-attr"},"value"),s(": value6, "),a("span",{class:"hljs-attr"},"options"),s(`: options6 } = useAutoComplete()
`),a("span",{class:"hljs-keyword"},"const"),s(" { "),a("span",{class:"hljs-attr"},"value"),s(": value7, "),a("span",{class:"hljs-attr"},"options"),s(`: options7 } = useAutoComplete()
`),a("span",{class:"hljs-keyword"},"const"),s(" { "),a("span",{class:"hljs-attr"},"value"),s(": value8, "),a("span",{class:"hljs-attr"},"options"),s(`: options8 } = useAutoComplete()
`),a("span",{class:"hljs-keyword"},"const"),s(" { "),a("span",{class:"hljs-attr"},"value"),s(": value9, "),a("span",{class:"hljs-attr"},"options"),s(`: options9 } = useAutoComplete()
`),a("span",{class:"hljs-keyword"},"const"),s(" { "),a("span",{class:"hljs-attr"},"value"),s(": value10, "),a("span",{class:"hljs-attr"},"options"),s(`: options10 } = useAutoComplete()
`),a("span",{class:"hljs-keyword"},"const"),s(" { "),a("span",{class:"hljs-attr"},"value"),s(": value11, "),a("span",{class:"hljs-attr"},"options"),s(`: options11 } = useAutoComplete()
`),a("span",{class:"hljs-keyword"},"const"),s(" { "),a("span",{class:"hljs-attr"},"value"),s(": value12, "),a("span",{class:"hljs-attr"},"options"),s(`: options12 } = useAutoComplete()

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"useAutoComplete"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-string"},"''"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" options = computed("),a("span",{class:"hljs-function"},"() =>"),s(`
    [`),a("span",{class:"hljs-string"},"'@qq.com'"),s(", "),a("span",{class:"hljs-string"},"'@163.com'"),s(", "),a("span",{class:"hljs-string"},"'@gmail.com'"),s("].map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"suffix"),s(") =>")]),s(` {
      `),a("span",{class:"hljs-keyword"},"const"),s(" [prefix] = value.value.split("),a("span",{class:"hljs-string"},"'@'"),s(`)
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${prefix}"),a("span",{class:"hljs-subst"},"${suffix}"),s("`")]),s(`,
        `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${prefix}"),a("span",{class:"hljs-subst"},"${suffix}"),s("`")]),s(`,
      }
    })
  )

  `),a("span",{class:"hljs-keyword"},"return"),s(` {
    value,
    options,
  }
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"large"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Please enter text"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(),a("span",{class:"hljs-attr"},"readonly"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Readonly"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options2"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value2"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(),a("span",{class:"hljs-attr"},"disabled"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Disabled"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options3"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value3"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(),a("span",{class:"hljs-attr"},"clearable"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Clearable"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options4"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value4"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(),a("span",{class:"hljs-attr"},"clearable"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Use the clear icon slot"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options5"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value5"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"clear-icon"),s("="),a("span",{class:"hljs-string"},'"{ clear }"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"error"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"clear"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-auto-complete"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(`
      `),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Validate"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options6"'),s(`
      `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"v => v.length > 6 || 'Text length must be greater than 6'"`),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value6"'),s(`
    />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(`
      `),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"validate With Zod"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options12"'),s(`
      `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"z.string().min(7, 'Text length must be greater than 6')"`),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value12"'),s(`
    />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Display Icon"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options7"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value7"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"prepend-icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"prepend-icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"github"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"append-icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"append-icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"github"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-auto-complete"),s(">")]),s(`  
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Custom Icon Size"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options8"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"prepend-icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"prepend-icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"github"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"28"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"append-icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"append-icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"github"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"42"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-auto-complete"),s(">")]),s(`  
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(`
      `),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Maxlength"'),s(`
      `),a("span",{class:"hljs-attr"},":maxlength"),s("="),a("span",{class:"hljs-string"},'"10"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options9"'),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value9"'),s(`
    />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(`
      `),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Custom Menu Show Timing"'),s(`
      `),a("span",{class:"hljs-attr"},":get-show"),s("="),a("span",{class:"hljs-string"},'"(value) => value.length > 3"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options10"'),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value10"'),s(`
    />`)]),s(`  
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(`
      `),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(`
      `),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Small Size"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options11"'),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value11"'),s(`
    />`)]),s(`  
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".prepend-icon"),s(` {
  `),a("span",{class:"hljs-attribute"},"margin-right"),s(": "),a("span",{class:"hljs-number"},"6px"),s(`;
}

`),a("span",{class:"hljs-selector-class"},".append-icon"),s(` {
  `),a("span",{class:"hljs-attribute"},"margin-left"),s(": "),a("span",{class:"hljs-number"},"6px"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),C=a("h2",null,"API",-1),w={class:"card"},x={id:"Props"},A=e('<h4>AutoComplete Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of the binding</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>variant</code></td><td>Input variants, The optional value is <code>standard</code> <code>outlined</code></td><td><em>string</em></td><td><code>standard</code></td></tr><tr><td><code>size</code></td><td>Input size, The optional value is <code>normal</code> <code>small</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>placeholder</code></td><td>placeholder</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>options</code></td><td>Specifies options</td><td><em>AutoCompleteOption[]</em></td><td><code>[]</code></td></tr><tr><td><code>label-key</code></td><td>As the key that uniquely identifies label</td><td><em>string</em></td><td><code>label</code></td></tr><tr><td><code>value-key</code></td><td>As the key that uniquely identifies value</td><td><em>string</em></td><td><code>value</code></td></tr><tr><td><code>maxlength</code></td><td>Maxlength</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>validate-trigger</code></td><td>Timing to trigger validation, The optional value is <code>onFocus</code> <code>onBlur</code> <code>onChange</code> <code>onClick</code> <code>onClear</code> <code>onInput</code></td><td><em>AutoCompleteValidateTrigger[]</em></td><td><code>[&#39;onInput&#39;, &#39;onClear&#39;, &#39;onChange&#39;]</code></td></tr><tr><td><code>rules</code></td><td>Validation rules, return <code>true</code> to indicate verification passes, other types of values ​​will be converted into text as user prompts. <a href="#/en-US/zodValidation">Zod validation</a> is supported since <code>3.5.0</code></td><td><em>((v: string) =&gt; any) | ZodType | Array&lt;((v: string) =&gt; any) | ZodType&gt;</em></td><td><code>-</code></td></tr><tr><td><code>enterkeyhint</code></td><td>Customize the enter key style, See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint">MDN</a></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>clearable</code></td><td>Whether the clearable</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>line</code></td><td>Whether to display a dividing line</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hint</code></td><td>Whether to use placeholder as hint</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>text-color</code></td><td>Text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>focus-color</code></td><td>The primary color in focus</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>blur-color</code></td><td>The primary color in blur</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>get-show</code></td><td>Determine whether the menu is displayed according to the input value</td><td><em>(v: string) =&gt; boolean</em></td><td><code>-</code></td></tr></tbody></table><h4>AutoCompleteOption</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>label</code></td><td>The text of option</td><td><em>string | VNode | (option: AutoCompleteOption, checked: boolean) =&gt; VNodeChild</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>The value of option</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable option</td><td><em>boolean</em></td><td><code>-</code></td></tr></tbody></table>',4),T={class:"card"},S={id:"Methods"},V=e("<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>focus</code></td><td>Focus</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>blur</code></td><td>Blur</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clear validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>",1),z={class:"card"},I={id:"Events"},D=e("<table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>focus</code></td><td>Triggered while focusing</td><td><code>-</code></td></tr><tr><td><code>blur</code></td><td>Triggered when out of focus</td><td><code>-</code></td></tr><tr><td><code>click</code></td><td>Triggered on Click</td><td><code>event: Event</code></td></tr><tr><td><code>clear</code></td><td>Triggered on Clearance</td><td><code>value: string</code></td></tr><tr><td><code>input</code></td><td>Triggered on input</td><td><code>value: string</code>, <code>event: Event</code></td></tr><tr><td><code>change</code></td><td>Triggered on change</td><td><code>value: string</code></td></tr></tbody></table>",1),P={class:"card"},$={id:"Slots"},M=e("<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>prepend-icon</code></td><td>Prepend Icon</td><td><code>-</code></td></tr><tr><td><code>append-icon</code></td><td>Append Icon</td><td><code>-</code></td></tr><tr><td><code>clear-icon</code></td><td>Clear Icon</td><td><code>clear: (e: Event) =&gt; void</code> clear function (can be used to clear input box contents when using slots)</td></tr><tr><td><code>extra-message</code></td><td>Extra message</td><td><code>-</code></td></tr></tbody></table>",1),E={class:"card"},W={id:"StyleVariables"},N=e('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--auto-complete-options-padding</code></td><td><code>6px 0</code></td></tr></tbody></table>',2);function q(O,U,B,Z,R,F){const n=o("router-link"),c=o("var-site-code-example");return d(),r("div",i,[j,a("div",u,[a("h3",m,[t(n,{to:"#Intro"},{default:l(()=>[s("#")]),_:1}),s("Intro")]),g]),a("div",v,[a("h3",b,[t(n,{to:"#StandardVariant"},{default:l(()=>[s("#")]),_:1}),s("Standard Variant")]),t(c,null,{default:l(()=>[y]),_:1})]),a("div",_,[a("h3",f,[t(n,{to:"#OutlinedVariant"},{default:l(()=>[s("#")]),_:1}),s("Outlined Variant")]),t(c,null,{default:l(()=>[k]),_:1})]),C,a("div",w,[a("h3",x,[t(n,{to:"#Props"},{default:l(()=>[s("#")]),_:1}),s("Props")]),A]),a("div",T,[a("h3",S,[t(n,{to:"#Methods"},{default:l(()=>[s("#")]),_:1}),s("Methods")]),V]),a("div",z,[a("h3",I,[t(n,{to:"#Events"},{default:l(()=>[s("#")]),_:1}),s("Events")]),D]),a("div",P,[a("h3",$,[t(n,{to:"#Slots"},{default:l(()=>[s("#")]),_:1}),s("Slots")]),M]),a("div",E,[a("h3",W,[t(n,{to:"#StyleVariables"},{default:l(()=>[s("#")]),_:1}),s("Style Variables")]),N])])}const G=p(h,[["render",q]]);export{G as default};
