import{_ as o,b as p,e as d,m as h,p as a,q as l,w as t,P as s,Z as c}from"./index-vwO9GBzB.js";const r={components:{}},i={class:"varlet-site-doc"},j=a("h1",null,"Collapse",-1),m={class:"card"},g={id:"Intro"},v=a("p",null,"A content area which can be collapsed and expanded.",-1),u={class:"card"},_={id:"BasicUsage"},b=a("p",null,[s("Use "),a("code",null,"v-model"),s(" to control the name of active panels. "),a("code",null,"value"),s(" is an Array.")],-1),f=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref(["),a("span",{class:"hljs-string"},"'1'"),s(`])

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleChange"),s("("),a("span",{class:"hljs-params"},"val"),s(") ")]),s(`{
  `),a("span",{class:"hljs-built_in"},"console"),s(`.log(val)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleChange"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Title"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("Text"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Title"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("Text"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y={class:"card"},k={id:"HideMargin"},T=a("p",null,[s("Use "),a("code",null,"offset"),s(" prop to hide the margin.")],-1),x=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref(["),a("span",{class:"hljs-string"},"'2'"),s(`])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},":offset"),s("="),a("span",{class:"hljs-string"},'"false"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Title"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("Text"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Title"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("Text"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),A={class:"card"},w={id:"ControlledDivider"},D=a("p",null,[s("Use "),a("code",null,"divider"),s(" prop to hide the divider.")],-1),C=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` value = ref([])
`),a("span",{class:"hljs-keyword"},"const"),s(" divider = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"divider = !divider"'),s(">")]),s(`
    {{ divider ? 'Hide Divider' : 'Show Divider' }}
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},":divider"),s("="),a("span",{class:"hljs-string"},'"divider"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Title"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("Text"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Title"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("Text"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Title"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"3"'),s(">")]),s("Text"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),S={class:"card"},P={id:"AccordionMode"},M=a("p",null,[s("Use "),a("code",null,"accordion"),s(" prop to open accordion mode, In this case "),a("code",null,"value"),s(" is a String.")],-1),U=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-string"},"''"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"accordion"),s(),a("span",{class:"hljs-attr"},":offset"),s("="),a("span",{class:"hljs-string"},'"false"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Title"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("Text"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Title"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("Text"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),V={class:"card"},E={id:"Disabled"},I=a("p",null,[s("Use the "),a("code",null,"disabled"),s(" prop to disable CollapseItem.")],-1),R=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref(["),a("span",{class:"hljs-number"},"1"),s(`])
`),a("span",{class:"hljs-keyword"},"const"),s(" disabled = ref("),a("span",{class:"hljs-literal"},"false"),s(`)  
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"[8, 8]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"disabled = !disabled"'),s(">")]),s(`
      {{ disabled ? 'enable' : 'disable' }}
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Title"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(),a("span",{class:"hljs-attr"},":disabled"),s("="),a("span",{class:"hljs-string"},'"disabled"'),s(">")]),s(`
        Text
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Title"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(),a("span",{class:"hljs-attr"},":disabled"),s("="),a("span",{class:"hljs-string"},'"disabled"'),s(">")]),s(`
        Text
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),N={class:"card"},O={id:"CustomContent"},z=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref(["),a("span",{class:"hljs-string"},"'1'"),s(`])  
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"This is a Title"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"account-circle"'),s(">")]),s(`
      Text
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"title"),s(">")]),s("This is a Title"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s("^_^"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      This is a content
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),B={class:"card"},H={id:"ToggleAll"},W=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" collapseRef = ref("),a("span",{class:"hljs-literal"},"null"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" toggleAllValue = ref(["),a("span",{class:"hljs-string"},"'2'"),s(", "),a("span",{class:"hljs-string"},"'4'"),s(`])  

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"toggleAll"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  collapseRef.value.toggleAll({ `),a("span",{class:"hljs-attr"},"expand"),s(": "),a("span",{class:"hljs-string"},"'inverse'"),s(` })
}

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"toggleAllSkipDisabled"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  collapseRef.value.toggleAll({ `),a("span",{class:"hljs-attr"},"expand"),s(": "),a("span",{class:"hljs-string"},"'inverse'"),s(", "),a("span",{class:"hljs-attr"},"skipDisabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(` })
}

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"openAll"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  collapseRef.value.toggleAll({ `),a("span",{class:"hljs-attr"},"expand"),s(": "),a("span",{class:"hljs-literal"},"true"),s(` })
}

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"openAllSkipDisabled"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  collapseRef.value.toggleAll({ `),a("span",{class:"hljs-attr"},"expand"),s(": "),a("span",{class:"hljs-literal"},"true"),s(", "),a("span",{class:"hljs-attr"},"skipDisabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(` })
}

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"closeAll"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  collapseRef.value.toggleAll({ `),a("span",{class:"hljs-attr"},"expand"),s(": "),a("span",{class:"hljs-literal"},"false"),s(` })
}

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"closeAllSkipDisabled"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  collapseRef.value.toggleAll({ `),a("span",{class:"hljs-attr"},"expand"),s(": "),a("span",{class:"hljs-literal"},"false"),s(", "),a("span",{class:"hljs-attr"},"skipDisabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(` })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"toggleAll"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin: 8px"'),s(">")]),s("Toggle All"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"toggleAllSkipDisabled"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin: 8px"'),s(">")]),s(`
    Toggle All(Skip Disabled)
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"openAll"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin: 8px"'),s(">")]),s("Open All"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"openAllSkipDisabled"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin: 8px"'),s(">")]),s(`
    Open All(Skip Disabled)
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"closeAll"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin: 8px"'),s(">")]),s("Close All"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"closeAllSkipDisabled"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin: 8px"'),s(">")]),s(`
    Close All(Skip Disabled)
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"toggleAllValue"'),s(),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"collapseRef"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("This is a content."),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("This is a content."),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(),a("span",{class:"hljs-attr"},"disabled"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"3"'),s(">")]),s("This is a content."),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(),a("span",{class:"hljs-attr"},"disabled"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"4"'),s(">")]),s("This is a content."),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),$=a("h2",null,"API",-1),q={class:"card"},Z={id:"Props"},F=c("<h4>Collapse Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>Names of current active panels</td><td>accordion mode： <em>string | number</em> <br> non-accordion mode：<em>string[] | number[]</em></td><td><code>-</code></td></tr><tr><td><code>accordion</code></td><td>Whether to be accordion mode</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>elevation</code></td><td>Elevation level, options <code>true</code> <code>false</code> and level of <code>0-24</code></td><td><em>string | number | boolean</em></td><td><code>true</code></td></tr><tr><td><code>offset</code></td><td>Whether to show margin</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>divider</code></td><td>Whether to show divider</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table><h4>CollapseItem Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name</code></td><td>Name</td><td><em>string | number</em></td><td><code>index</code></td></tr><tr><td><code>title</code></td><td>Title</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Icon name</td><td><em>string</em></td><td><code>chevron-down</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable collapse</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>",4),G={class:"card"},J={id:"Methods"},K=c("<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>toggleAll</code></td><td>Expand or close all items</td><td><code>options: CollapseToggleAllOptions</code></td><td><code>-</code></td></tr></tbody></table>",1),L={class:"card"},Q={id:"CollapseToggleAllOptions"},X=c("<table><thead><tr><th>Option</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>expand</code></td><td>Set <code>&#39;inverse&#39;</code> to switch the status of all items, including disabled items; set <code>boolean</code> to control the expansion or collapse of all items</td><td><em>&#39;inverse&#39; | boolean</em></td><td><code>-</code></td></tr><tr><td><code>skipDisabled</code></td><td>Skip the disabled item</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>",1),Y={class:"card"},ss={id:"Events"},as=c("<h4>Collapse Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Emitted when active index changed</td><td><code>value</code></td></tr></tbody></table>",2),ls={class:"card"},ts={id:"Slots"},ns=c("<h4>Collapse Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Content of collapse</td><td><code>-</code></td></tr></tbody></table><h4>CollapseItem Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Content</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>Title</td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Custom right icon</td><td><code>-</code></td></tr></tbody></table>",4),es={class:"card"},cs={id:"StyleVariables"},ps=c('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--collapse-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--collapse-text-color</code></td><td><code>#232222</code></td></tr><tr><td><code>--collapse-header-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--collapse-header-padding</code></td><td><code>10px 12px</code></td></tr><tr><td><code>--collapse-content-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--collapse-content-padding</code></td><td><code>0 12px 10px</code></td></tr><tr><td><code>--collapse-item-margin-top</code></td><td><code>16px</code></td></tr><tr><td><code>--collapse-disable-color</code></td><td><code>#bdbdbd</code></td></tr><tr><td><code>--collapse-divider-top</code></td><td><code>thin solid rgba(0, 0, 0, 0.12)</code></td></tr></tbody></table>',2);function os(ds,hs,rs,is,js,ms){const n=p("router-link"),e=p("var-site-code-example");return d(),h("div",i,[j,a("div",m,[a("h3",g,[l(n,{to:"#Intro"},{default:t(()=>[s("#")]),_:1}),s("Intro")]),v]),a("div",u,[a("h3",_,[l(n,{to:"#BasicUsage"},{default:t(()=>[s("#")]),_:1}),s("Basic Usage")]),b,l(e,null,{default:t(()=>[f]),_:1})]),a("div",y,[a("h3",k,[l(n,{to:"#HideMargin"},{default:t(()=>[s("#")]),_:1}),s("Hide Margin")]),T,l(e,null,{default:t(()=>[x]),_:1})]),a("div",A,[a("h3",w,[l(n,{to:"#ControlledDivider"},{default:t(()=>[s("#")]),_:1}),s("Controlled Divider")]),D,l(e,null,{default:t(()=>[C]),_:1})]),a("div",S,[a("h3",P,[l(n,{to:"#AccordionMode"},{default:t(()=>[s("#")]),_:1}),s("Accordion Mode")]),M,l(e,null,{default:t(()=>[U]),_:1})]),a("div",V,[a("h3",E,[l(n,{to:"#Disabled"},{default:t(()=>[s("#")]),_:1}),s("Disabled")]),I,l(e,null,{default:t(()=>[R]),_:1})]),a("div",N,[a("h3",O,[l(n,{to:"#CustomContent"},{default:t(()=>[s("#")]),_:1}),s("Custom Content")]),l(e,null,{default:t(()=>[z]),_:1})]),a("div",B,[a("h3",H,[l(n,{to:"#ToggleAll"},{default:t(()=>[s("#")]),_:1}),s("Toggle All")]),l(e,null,{default:t(()=>[W]),_:1})]),$,a("div",q,[a("h3",Z,[l(n,{to:"#Props"},{default:t(()=>[s("#")]),_:1}),s("Props")]),F]),a("div",G,[a("h3",J,[l(n,{to:"#Methods"},{default:t(()=>[s("#")]),_:1}),s("Methods")]),K]),a("div",L,[a("h3",Q,[l(n,{to:"#CollapseToggleAllOptions"},{default:t(()=>[s("#")]),_:1}),s("CollapseToggleAllOptions")]),X]),a("div",Y,[a("h3",ss,[l(n,{to:"#Events"},{default:t(()=>[s("#")]),_:1}),s("Events")]),as]),a("div",ls,[a("h3",ts,[l(n,{to:"#Slots"},{default:t(()=>[s("#")]),_:1}),s("Slots")]),ns]),a("div",es,[a("h3",cs,[l(n,{to:"#StyleVariables"},{default:t(()=>[s("#")]),_:1}),s("Style Variables")]),ps])])}const vs=o(r,[["render",os]]);export{vs as default};
