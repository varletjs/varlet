import{_ as o,b as c,e as r,m as p,p as t,q as a,w as e,P as s,Z as d}from"./index-vwO9GBzB.js";const h={components:{}},i={class:"varlet-site-doc"},j=t("h1",null,"Input",-1),g={class:"card"},m={id:"Intro"},u=t("p",null,[s("The behavior of the input box is consistent with the basic content, and the user can always get a string that conforms to the "),t("code",null,"type"),s(" rule when inputting.")],-1),v={class:"card"},f={id:"StandardVariant"},b=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" value = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(" value2 = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(" value3 = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(" value4 = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(" value5 = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(" value6 = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(" value7 = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(" value8 = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(" value9 = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(" value10 = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-space"),s(),t("span",{class:"hljs-attr"},"direction"),s("="),t("span",{class:"hljs-string"},'"column"'),s(),t("span",{class:"hljs-attr"},"size"),s("="),t("span",{class:"hljs-string"},'"large"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Please enter text"'),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(" />")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Readonly"'),s(),t("span",{class:"hljs-attr"},"readonly"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value2"'),s(" />")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Disabled"'),s(),t("span",{class:"hljs-attr"},"disabled"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value3"'),s(" />")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Clearable"'),s(),t("span",{class:"hljs-attr"},"clearable"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value4"'),s(" />")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(`
      `),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Validate"'),s(`
      `),t("span",{class:"hljs-attr"},":rules"),s("="),t("span",{class:"hljs-string"},`"[(v) => v.length > 6 || 'Text length must be greater than 6']"`),s(`
      `),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value5"'),s(`
    />`)]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Display Icon"'),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value6"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"prepend-icon"),s(">")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"prepend-icon"'),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"github"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"append-icon"),s(">")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"append-icon"'),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"github"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-input"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Custom Icon Size"'),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value7"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"prepend-icon"),s(">")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"prepend-icon"'),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"github"'),s(),t("span",{class:"hljs-attr"},":size"),s("="),t("span",{class:"hljs-string"},'"28"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"append-icon"),s(">")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"append-icon"'),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"github"'),s(),t("span",{class:"hljs-attr"},":size"),s("="),t("span",{class:"hljs-string"},'"42"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-input"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Maxlength"'),s(),t("span",{class:"hljs-attr"},":maxlength"),s("="),t("span",{class:"hljs-string"},'"10"'),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value8"'),s(" />")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Textarea"'),s(),t("span",{class:"hljs-attr"},"textarea"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value9"'),s(" />")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Small Size"'),s(),t("span",{class:"hljs-attr"},"size"),s("="),t("span",{class:"hljs-string"},'"small"'),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value10"'),s(" />")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"style"),s(">")]),t("span",{class:"css"},[s(`
`),t("span",{class:"hljs-selector-class"},".prepend-icon"),s(` {
  `),t("span",{class:"hljs-attribute"},"margin-right"),s(": "),t("span",{class:"hljs-number"},"6px"),s(`;
}

`),t("span",{class:"hljs-selector-class"},".append-icon"),s(` {
  `),t("span",{class:"hljs-attribute"},"margin-left"),s(": "),t("span",{class:"hljs-number"},"6px"),s(`;
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),_={class:"card"},y={id:"OutlinedVariant"},x=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" value = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(" value2 = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(" value3 = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(" value4 = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(" value5 = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(" value6 = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(" value7 = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(" value8 = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(" value9 = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(" value10 = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-space"),s(),t("span",{class:"hljs-attr"},"direction"),s("="),t("span",{class:"hljs-string"},'"column"'),s(),t("span",{class:"hljs-attr"},"size"),s("="),t("span",{class:"hljs-string"},'"large"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(),t("span",{class:"hljs-attr"},"variant"),s("="),t("span",{class:"hljs-string"},'"outlined"'),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Please enter text"'),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(" />")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(),t("span",{class:"hljs-attr"},"variant"),s("="),t("span",{class:"hljs-string"},'"outlined"'),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Readonly"'),s(),t("span",{class:"hljs-attr"},"readonly"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value2"'),s(" />")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(),t("span",{class:"hljs-attr"},"variant"),s("="),t("span",{class:"hljs-string"},'"outlined"'),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Disabled"'),s(),t("span",{class:"hljs-attr"},"disabled"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value3"'),s(" />")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(),t("span",{class:"hljs-attr"},"variant"),s("="),t("span",{class:"hljs-string"},'"outlined"'),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Clearable"'),s(),t("span",{class:"hljs-attr"},"clearable"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value4"'),s(" />")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(`
      `),t("span",{class:"hljs-attr"},"variant"),s("="),t("span",{class:"hljs-string"},'"outlined"'),s(`
      `),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Validate"'),s(`
      `),t("span",{class:"hljs-attr"},":rules"),s("="),t("span",{class:"hljs-string"},`"[(v) => v.length > 6 || 'Text length must be greater than 6']"`),s(`
      `),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value5"'),s(`
    />`)]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(),t("span",{class:"hljs-attr"},"variant"),s("="),t("span",{class:"hljs-string"},'"outlined"'),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Display Icon"'),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value6"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"prepend-icon"),s(">")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"prepend-icon"'),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"github"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"append-icon"),s(">")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"append-icon"'),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"github"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-input"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(` 
      `),t("span",{class:"hljs-attr"},"variant"),s("="),t("span",{class:"hljs-string"},'"outlined"'),s(` 
      `),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Custom Icon Size"'),s(`
      `),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value7"'),s(`
    >`)]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"prepend-icon"),s(">")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"prepend-icon"'),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"github"'),s(),t("span",{class:"hljs-attr"},":size"),s("="),t("span",{class:"hljs-string"},'"28"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"append-icon"),s(">")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"append-icon"'),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"github"'),s(),t("span",{class:"hljs-attr"},":size"),s("="),t("span",{class:"hljs-string"},'"42"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-input"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(),t("span",{class:"hljs-attr"},"variant"),s("="),t("span",{class:"hljs-string"},'"outlined"'),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Maxlength"'),s(),t("span",{class:"hljs-attr"},":maxlength"),s("="),t("span",{class:"hljs-string"},'"10"'),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value8"'),s(" />")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(),t("span",{class:"hljs-attr"},"variant"),s("="),t("span",{class:"hljs-string"},'"outlined"'),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Textarea"'),s(),t("span",{class:"hljs-attr"},"textarea"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value9"'),s(" />")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(),t("span",{class:"hljs-attr"},"variant"),s("="),t("span",{class:"hljs-string"},'"outlined"'),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"Small Size"'),s(),t("span",{class:"hljs-attr"},"size"),s("="),t("span",{class:"hljs-string"},'"small"'),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value10"'),s(" />")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"style"),s(">")]),t("span",{class:"css"},[s(`
`),t("span",{class:"hljs-selector-class"},".prepend-icon"),s(` {
  `),t("span",{class:"hljs-attribute"},"margin-right"),s(": "),t("span",{class:"hljs-number"},"6px"),s(`;
}

`),t("span",{class:"hljs-selector-class"},".append-icon"),s(` {
  `),t("span",{class:"hljs-attribute"},"margin-left"),s(": "),t("span",{class:"hljs-number"},"6px"),s(`;
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),k=t("h2",null,"API",-1),w={class:"card"},T={id:"Props"},S=d('<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of the binding</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>placeholder</code></td><td>placeholder</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>type</code></td><td>Input type, The optional value is <code>text</code> <code>password</code> <code>number</code> <code>tel</code></td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>size</code></td><td>Input size, The optional value is <code>normal</code> <code>small</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>variant</code></td><td>Input variants, The optional value is <code>standard</code> <code>outlined</code></td><td><em>string</em></td><td><code>standard</code></td></tr><tr><td><code>maxlength</code></td><td>Maxlength</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>textarea</code></td><td>Is it a textarea</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>rows</code></td><td>Number of lines to display in the textarea</td><td><em>string | number</em></td><td><code>8</code></td></tr><tr><td><code>line</code></td><td>Whether to display a dividing line</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hint</code></td><td>Whether to use placeholder as hint</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>text-color</code></td><td>Text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>focus-color</code></td><td>The primary color in focus</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>blur-color</code></td><td>The primary color in blur</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>clearable</code></td><td>Whether the clearable</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>resize</code></td><td>Whether textarea can be dragged to resize</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>autofocus</code></td><td>Whether the autofocus</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>validate-trigger</code></td><td>Timing to trigger validation, The optional value is <code>onFocus</code> <code>onBlur</code> <code>onChange</code> <code>onClick</code> <code>onClear</code> <code>onInput</code></td><td><em>ValidateTriggers[]</em></td><td><code>[&#39;onInput&#39;, &#39;onClear&#39;]</code></td></tr><tr><td><code>rules</code></td><td>The validation rules, return <code>true</code> to indicate that the validation passed,The remaining values are converted to text as user prompts</td><td><em>Array&lt;(v: string) =&gt; any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>enterkeyhint</code></td><td>Customize the enter key style, See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint">MDN</a></td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table>',1),z={class:"card"},I={id:"Methods"},V=d("<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>focus</code></td><td>Focus</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>blur</code></td><td>Blur</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clear validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>",1),C={class:"card"},P={id:"Events"},D=d("<table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>focus</code></td><td>Triggered while focusing</td><td><code>event: Event</code></td></tr><tr><td><code>blur</code></td><td>Triggered when out of focus</td><td><code>event: Event</code></td></tr><tr><td><code>click</code></td><td>Triggered on Click</td><td><code>event: Event</code></td></tr><tr><td><code>clear</code></td><td>Triggered on Clearance</td><td><code>value: string</code></td></tr><tr><td><code>input</code></td><td>Triggered on input</td><td><code>value: string</code>, <code>event: Event</code></td></tr><tr><td><code>change</code></td><td>Triggered on change</td><td><code>value: string</code>, <code>event: Event</code></td></tr></tbody></table>",1),E={class:"card"},M={id:"Slots"},W=d("<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>prepend-icon</code></td><td>Prepend Icon</td><td><code>-</code></td></tr><tr><td><code>append-icon</code></td><td>Append Icon</td><td><code>-</code></td></tr><tr><td><code>clear-icon</code></td><td>Clear Icon</td><td><code>-</code></td></tr><tr><td><code>extra-message</code></td><td>Extra message</td><td><code>-</code></td></tr></tbody></table>",1),N={class:"card"},A={id:"StyleVariables"},B=d('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--field-decorator-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--field-decorator-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--field-decorator-placeholder-color</code></td><td><code>-</code></td></tr><tr><td><code>--field-decorator-blur-color</code></td><td><code>#888</code></td></tr><tr><td><code>--field-decorator-focus-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--field-decorator-placeholder-size</code></td><td><code>16px</code></td></tr><tr><td><code>--field-decorator-icon-size</code></td><td><code>20px</code></td></tr><tr><td><code>--field-decorator-line-size</code></td><td><code>1px</code></td></tr><tr><td><code>--field-decorator-line-focus-size</code></td><td><code>2px</code></td></tr><tr><td><code>--field-decorator-line-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--field-decorator-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--field-decorator-standard-normal-padding-top</code></td><td><code>22px</code></td></tr><tr><td><code>--field-decorator-standard-normal-padding-bottom</code></td><td><code>4px</code></td></tr><tr><td><code>--field-decorator-standard-normal-icon-padding</code></td><td><code>22px 0 4px</code></td></tr><tr><td><code>--field-decorator-standard-normal-non-hint-padding-top</code></td><td><code>4px</code></td></tr><tr><td><code>--field-decorator-standard-normal-placeholder-translate-y</code></td><td><code>var(--field-decorator-standard-normal-padding-top)</code></td></tr><tr><td><code>--field-decorator-standard-small-padding-top</code></td><td><code>18px</code></td></tr><tr><td><code>--field-decorator-standard-small-padding-bottom</code></td><td><code>4px</code></td></tr><tr><td><code>--field-decorator-standard-small-icon-padding</code></td><td><code>18px 0 4px</code></td></tr><tr><td><code>--field-decorator-standard-small-non-hint-padding-top</code></td><td><code>2px</code></td></tr><tr><td><code>--field-decorator-standard-small-placeholder-translate-y</code></td><td><code>var(--field-decorator-standard-small-padding-top)</code></td></tr><tr><td><code>--field-decorator-outlined-normal-padding-top</code></td><td><code>16px</code></td></tr><tr><td><code>--field-decorator-outlined-normal-padding-bottom</code></td><td><code>16px</code></td></tr><tr><td><code>--field-decorator-outlined-normal-padding-left</code></td><td><code>16px</code></td></tr><tr><td><code>--field-decorator-outlined-normal-padding-right</code></td><td><code>16px</code></td></tr><tr><td><code>--field-decorator-outlined-normal-placeholder-space</code></td><td><code>4px</code></td></tr><tr><td><code>--field-decorator-outlined-normal-icon-padding</code></td><td><code>16px 0 16px</code></td></tr><tr><td><code>--field-decorator-outlined-normal-placeholder-translate-y</code></td><td><code>var(--field-decorator-outlined-normal-padding-top)</code></td></tr><tr><td><code>--field-decorator-outlined-small-padding-top</code></td><td><code>8px</code></td></tr><tr><td><code>--field-decorator-outlined-small-padding-bottom</code></td><td><code>8px</code></td></tr><tr><td><code>--field-decorator-outlined-small-padding-left</code></td><td><code>12px</code></td></tr><tr><td><code>--field-decorator-outlined-small-padding-right</code></td><td><code>12px</code></td></tr><tr><td><code>--field-decorator-outlined-small-placeholder-space</code></td><td><code>2px</code></td></tr><tr><td><code>--field-decorator-outlined-small-icon-padding</code></td><td><code>8px 0 8px</code></td></tr><tr><td><code>--field-decorator-outlined-small-placeholder-translate-y</code></td><td><code>var(--field-decorator-outlined-small-padding-top)</code></td></tr><tr><td><code>--input-input-height</code></td><td><code>24px</code></td></tr><tr><td><code>--input-input-font-size</code></td><td><code>16px</code></td></tr><tr><td><code>--input-textarea-height</code></td><td><code>auto</code></td></tr></tbody></table>',2);function $(O,R,U,F,H,q){const l=c("router-link"),n=c("var-site-code-example");return r(),p("div",i,[j,t("div",g,[t("h3",m,[a(l,{to:"#Intro"},{default:e(()=>[s("#")]),_:1}),s("Intro")]),u]),t("div",v,[t("h3",f,[a(l,{to:"#StandardVariant"},{default:e(()=>[s("#")]),_:1}),s("Standard Variant")]),a(n,null,{default:e(()=>[b]),_:1})]),t("div",_,[t("h3",y,[a(l,{to:"#OutlinedVariant"},{default:e(()=>[s("#")]),_:1}),s("Outlined Variant")]),a(n,null,{default:e(()=>[x]),_:1})]),k,t("div",w,[t("h3",T,[a(l,{to:"#Props"},{default:e(()=>[s("#")]),_:1}),s("Props")]),S]),t("div",z,[t("h3",I,[a(l,{to:"#Methods"},{default:e(()=>[s("#")]),_:1}),s("Methods")]),V]),t("div",C,[t("h3",P,[a(l,{to:"#Events"},{default:e(()=>[s("#")]),_:1}),s("Events")]),D]),t("div",E,[t("h3",M,[a(l,{to:"#Slots"},{default:e(()=>[s("#")]),_:1}),s("Slots")]),W]),t("div",N,[t("h3",A,[a(l,{to:"#StyleVariables"},{default:e(()=>[s("#")]),_:1}),s("Style Variables")]),B])])}const L=o(h,[["render",$]]);export{L as default};