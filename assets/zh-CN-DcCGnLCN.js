import{b as d,m as r,p as a,q as l,Q as s,w as n,$ as c,e as o,h}from"./index-CV30L7Tu.js";const j={components:{}},i={class:"varlet-site-doc"},m={class:"card"},u={id:"jie4shao4"},g={class:"card"},v={id:"biao1zhun3wai4guan1"},b={class:"card"},y={id:"wai4bian0kuang4wai4guan1"},f={class:"card"},k={id:"shu3xing4"},w={class:"card"},C={id:"fang1fa3"},A={class:"card"},x={id:"shi4jian4"},z={class:"card"},$={id:"cha1cao2"},N={class:"card"},_={id:"yang4shi4bian4liang4"};function V(q,t,T,B,E,P){const e=o("router-link"),p=o("var-site-code-example");return h(),r("div",i,[t[24]||(t[24]=a("h1",null,"自动完成",-1)),a("div",m,[a("h3",u,[l(e,{to:"#jie4shao4"},{default:n(()=>t[0]||(t[0]=[s("#")])),_:1}),t[1]||(t[1]=s("介绍"))]),t[2]||(t[2]=a("p",null,"输入框自动完成功能。",-1))]),a("div",g,[a("h3",v,[l(e,{to:"#biao1zhun3wai4guan1"},{default:n(()=>t[3]||(t[3]=[s("#")])),_:1}),t[4]||(t[4]=s("标准外观"))]),l(p,null,{default:n(()=>t[5]||(t[5]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref, computed } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { z } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'zod'"),s(`

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
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入文本"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(),a("span",{class:"hljs-attr"},"readonly"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"只读"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options2"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value2"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(),a("span",{class:"hljs-attr"},"disabled"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"禁用"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options3"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value3"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(),a("span",{class:"hljs-attr"},"clearable"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"可清除"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options4"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value4"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(),a("span",{class:"hljs-attr"},"clearable"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"使用插槽自定义清除图标"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options5"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value5"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"clear-icon"),s("="),a("span",{class:"hljs-string"},'"{ clear }"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"error"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"clear"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-auto-complete"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"字段校验"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options6"'),s(`
      `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"v => v.length > 6 || '文本长度必须大于6'"`),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value6"'),s(`
    />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"使用 Zod 进行校验"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options12"'),s(`
      `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"z.string().min(7, '文本长度必须大于6')"`),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value12"'),s(`
    />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"显示图标"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options7"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value7"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"prepend-icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"prepend-icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"github"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"append-icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"append-icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"github"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-auto-complete"),s(">")]),s(`  
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"自定义图标尺寸"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options8"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"prepend-icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"prepend-icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"github"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"28"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"append-icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"append-icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"github"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"42"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-auto-complete"),s(">")]),s(`  
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"最大长度"'),s(`
      `),a("span",{class:"hljs-attr"},":maxlength"),s("="),a("span",{class:"hljs-string"},'"10"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options9"'),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value9"'),s(`
    />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"自定义菜单显示时机"'),s(`
      `),a("span",{class:"hljs-attr"},":get-show"),s("="),a("span",{class:"hljs-string"},'"(value) => value.length > 3"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options10"'),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value10"'),s(`
    />`)]),s(`  
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(`
      `),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"小尺寸"'),s(`
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
`)])],-1)])),_:1})]),a("div",b,[a("h3",y,[l(e,{to:"#wai4bian0kuang4wai4guan1"},{default:n(()=>t[6]||(t[6]=[s("#")])),_:1}),t[7]||(t[7]=s("外边框外观"))]),l(p,null,{default:n(()=>t[8]||(t[8]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref, computed } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { z } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'zod'"),s(`

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
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入文本"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(),a("span",{class:"hljs-attr"},"readonly"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"只读"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options2"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value2"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(),a("span",{class:"hljs-attr"},"disabled"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"禁用"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options3"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value3"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(),a("span",{class:"hljs-attr"},"clearable"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"可清除"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options4"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value4"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(),a("span",{class:"hljs-attr"},"clearable"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"使用插槽自定义清除图标"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options5"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value5"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"clear-icon"),s("="),a("span",{class:"hljs-string"},'"{ clear }"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"error"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"clear"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-auto-complete"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(`
      `),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"字段校验"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options6"'),s(`
      `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"v => v.length > 6 || '文本长度必须大于6'"`),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value6"'),s(`
    />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(`
      `),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"使用 Zod 进行校验"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options12"'),s(`
      `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"z.string().min(7, '文本长度必须大于6')"`),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value12"'),s(`
    />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"显示图标"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options7"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value7"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"prepend-icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"prepend-icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"github"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"append-icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"append-icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"github"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-auto-complete"),s(">")]),s(`  
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"自定义图标尺寸"'),s(),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options8"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"prepend-icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"prepend-icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"github"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"28"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"append-icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"append-icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"github"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"42"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-auto-complete"),s(">")]),s(`  
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(`
      `),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"最大长度"'),s(`
      `),a("span",{class:"hljs-attr"},":maxlength"),s("="),a("span",{class:"hljs-string"},'"10"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options9"'),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value9"'),s(`
    />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(`
      `),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"自定义菜单显示时机"'),s(`
      `),a("span",{class:"hljs-attr"},":get-show"),s("="),a("span",{class:"hljs-string"},'"(value) => value.length > 3"'),s(`
      `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options10"'),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value10"'),s(`
    />`)]),s(`  
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-auto-complete"),s(`
      `),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(`
      `),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"小尺寸"'),s(`
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
`)])],-1)])),_:1})]),t[25]||(t[25]=a("h2",null,"API",-1)),a("div",f,[a("h3",k,[l(e,{to:"#shu3xing4"},{default:n(()=>t[9]||(t[9]=[s("#")])),_:1}),t[10]||(t[10]=s("属性"))]),t[11]||(t[11]=c('<h4>AutoComplete Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>绑定的值</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>variant</code></td><td>输入框风格, 可选值为 <code>standard</code> <code>outlined</code></td><td><em>string</em></td><td><code>standard</code></td></tr><tr><td><code>size</code></td><td>输入框尺寸，可选值 <code>normal</code> <code>small</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>placeholder</code></td><td>占位符</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>options</code></td><td>指定可选项</td><td><em>AutoCompleteOption[]</em></td><td><code>[]</code></td></tr><tr><td><code>label-key</code></td><td>作为 label 唯一标识的键名</td><td><em>string</em></td><td><code>label</code></td></tr><tr><td><code>value-key</code></td><td>作为 value 唯一标识的键名</td><td><em>string</em></td><td><code>value</code></td></tr><tr><td><code>maxlength</code></td><td>最大长度</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>是否只读</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>validate-trigger</code></td><td>触发验证的时机，可选值为 <code>onFocus</code> <code>onBlur</code> <code>onChange</code> <code>onClick</code> <code>onClear</code> <code>onInput</code></td><td><em>AutoCompleteValidateTrigger[]</em></td><td><code>[&#39;onInput&#39;, &#39;onClear&#39;, &#39;onChange&#39;]</code></td></tr><tr><td><code>rules</code></td><td>验证规则，返回 <code>true</code> 表示验证通过，其余的值则转换为文本作为用户提示</td><td><em>((v: string) =&gt; any) | ZodType | Array&lt;((v: string) =&gt; any) | ZodType&gt;</em></td><td><code>-</code></td></tr><tr><td><code>enterkeyhint</code></td><td>定制回车键样式，参见 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint">MDN</a></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>clearable</code></td><td>是否可清除</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>line</code></td><td>是否显示分割线</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hint</code></td><td>是否使用占位符作为提示</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>text-color</code></td><td>文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>focus-color</code></td><td>聚焦时的主要颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>blur-color</code></td><td>失焦时的主要颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>get-show</code></td><td>根据输入值决定是否显示菜单</td><td><em>(v: string) =&gt; boolean</em></td><td><code>-</code></td></tr></tbody></table><h4>AutoCompleteOption</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>label</code></td><td>选项的标签</td><td><em>string | VNode | (option: AutoCompleteOption, checked: boolean) =&gt; VNodeChild</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>选项的值</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><em>boolean</em></td><td><code>-</code></td></tr></tbody></table>',4))]),a("div",w,[a("h3",C,[l(e,{to:"#fang1fa3"},{default:n(()=>t[12]||(t[12]=[s("#")])),_:1}),t[13]||(t[13]=s("方法"))]),t[14]||(t[14]=c("<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>focus</code></td><td>聚焦</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>blur</code></td><td>失焦</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>validate</code></td><td>触发校验</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>清空校验信息</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>清空绑定的值和校验信息</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>",1))]),a("div",A,[a("h3",x,[l(e,{to:"#shi4jian4"},{default:n(()=>t[15]||(t[15]=[s("#")])),_:1}),t[16]||(t[16]=s("事件"))]),t[17]||(t[17]=c("<table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>focus</code></td><td>聚焦时触发</td><td><code>-</code></td></tr><tr><td><code>blur</code></td><td>失焦时触发</td><td><code>-</code></td></tr><tr><td><code>click</code></td><td>点击时触发</td><td><code>event: Event</code></td></tr><tr><td><code>clear</code></td><td>清除时触发</td><td><code>value: string</code></td></tr><tr><td><code>input</code></td><td>输入时触发</td><td><code>value: string</code>, <code>event: Event</code></td></tr><tr><td><code>change</code></td><td>更新时触发</td><td><code>value: string</code></td></tr></tbody></table>",1))]),a("div",z,[a("h3",$,[l(e,{to:"#cha1cao2"},{default:n(()=>t[18]||(t[18]=[s("#")])),_:1}),t[19]||(t[19]=s("插槽"))]),t[20]||(t[20]=c("<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>prepend-icon</code></td><td>前置图标</td><td><code>-</code></td></tr><tr><td><code>append-icon</code></td><td>后置图标</td><td><code>-</code></td></tr><tr><td><code>clear-icon</code></td><td>清除图标</td><td><code>clear: (e: Event) =&gt; void</code> 清除函数(在使用插槽时, 可用于清除输入框内容)</td></tr><tr><td><code>extra-message</code></td><td>附加信息</td><td><code>-</code></td></tr></tbody></table>",1))]),a("div",N,[a("h3",_,[l(e,{to:"#yang4shi4bian4liang4"},{default:n(()=>t[21]||(t[21]=[s("#")])),_:1}),t[22]||(t[22]=s("样式变量"))]),t[23]||(t[23]=c('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--auto-complete-options-padding</code></td><td><code>6px 0</code></td></tr></tbody></table>',2))])])}const I=d(j,[["render",V]]);export{I as default};
