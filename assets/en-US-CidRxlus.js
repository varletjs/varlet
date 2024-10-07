import{_ as d,m as p,p as t,q as a,w as e,Q as s,a1 as c,b as o,e as r}from"./index-D7J0Ej29.js";const h={components:{}},i={class:"varlet-site-doc"},j=t("h1",null,"MenuSelect",-1),m={class:"card"},u={id:"Intro"},g=t("p",null,[s("Menu with selector function, some functions are used in the same way as "),t("a",{href:"#/en-US/menu"},"Menu"),s(".")],-1),v={class:"card"},b={id:"BasicUsage"},_=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` value = ref()
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-select"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("{{ value ? value : 'Please Select' }}"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"options"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Play game"'),s(" />")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y={class:"card"},f={id:"Size"},S=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
  
`),t("span",{class:"hljs-keyword"},"const"),s(` valueNormal = ref()
`),t("span",{class:"hljs-keyword"},"const"),s(` valueSmall = ref()
`),t("span",{class:"hljs-keyword"},"const"),s(` valueMini = ref()
`),t("span",{class:"hljs-keyword"},"const"),s(` valueLarge = ref()
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-select"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"valueNormal"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s(`
        {{ valueNormal ? valueNormal : 'Normal Size' }}
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"options"),s(">")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Play game"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`

    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-select"),s(),t("span",{class:"hljs-attr"},"size"),s("="),t("span",{class:"hljs-string"},'"small"'),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"valueSmall"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s(`
        {{ valueSmall ? valueSmall : 'Small Size' }}
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"options"),s(">")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Play game"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`

    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-select"),s(),t("span",{class:"hljs-attr"},"size"),s("="),t("span",{class:"hljs-string"},'"mini"'),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"valueMini"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s(`
        {{ valueMini ? valueMini : 'Mini Size' }}
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"options"),s(">")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Play game"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`

    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-select"),s(),t("span",{class:"hljs-attr"},"size"),s("="),t("span",{class:"hljs-string"},'"large"'),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"valueLarge"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s(`
        {{ valueLarge ? valueLarge : 'Large Size' }}
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"options"),s(">")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Play game"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),k={class:"card"},w={id:"ValueMapping"},P=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` value = ref()
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-select"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("{{ value ? `value: ${value}` : 'Please Select' }}"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"options"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Eat"'),s(),t("span",{class:"hljs-attr"},":value"),s("="),t("span",{class:"hljs-string"},'"1"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Sleep"'),s(),t("span",{class:"hljs-attr"},":value"),s("="),t("span",{class:"hljs-string"},'"2"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Play game"'),s(),t("span",{class:"hljs-attr"},":value"),s("="),t("span",{class:"hljs-string"},'"3"'),s(" />")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),M={class:"card"},T={id:"Scrollable"},x=t("p",null,[s("Make the menu scrollable by turning on "),t("code",null,"scrollable"),s(".")],-1),z=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` value = ref()
`),t("span",{class:"hljs-keyword"},"const"),s(" options = ref("),t("span",{class:"hljs-built_in"},"Array"),s(`.from(
  { `),t("span",{class:"hljs-attr"},"length"),s(": "),t("span",{class:"hljs-number"},"30"),s(` }, 
  `),t("span",{class:"hljs-function"},[s("("),t("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(" ({ "),t("span",{class:"hljs-attr"},"label"),s(": "),t("span",{class:"hljs-string"},[s("`Option "),t("span",{class:"hljs-subst"},[s("${index + "),t("span",{class:"hljs-number"},"1"),s("}")]),s("`")]),s(", "),t("span",{class:"hljs-attr"},"value"),s(`: index }))
)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-select"),s(),t("span",{class:"hljs-attr"},"scrollable"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("{{ value ? value : 'Please Select' }}"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"options"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-option"),s(` 
        `),t("span",{class:"hljs-attr"},"v-for"),s("="),t("span",{class:"hljs-string"},'"option in options"'),s(` 
        `),t("span",{class:"hljs-attr"},":key"),s("="),t("span",{class:"hljs-string"},'"option.value"'),s(` 
        `),t("span",{class:"hljs-attr"},":label"),s("="),t("span",{class:"hljs-string"},'"option.label"'),s(` 
      />`)]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),O={class:"card"},D={id:"OptionDisabled"},E=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` value = ref()
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-select"),s(),t("span",{class:"hljs-attr"},"scrollable"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("{{ value ? value : 'Please Select' }}"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"options"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Play game"'),s(),t("span",{class:"hljs-attr"},"disabled"),s(" />")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),V={class:"card"},B={id:"Multiple"},C=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` value = ref([])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-select"),s(),t("span",{class:"hljs-attr"},"multiple"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("{{ value.length ? value : 'Please Select' }}"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"options"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Play game"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Coding"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Rest"'),s(" />")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),W={class:"card"},N={id:"DisableCloseOnSelect"},A=t("p",null,[s("Close "),t("code",null,"close-on-select"),s(" disables closing the menu when selecting an option. The default behavior is to close the menu when selecting an option, which is not allowed in multi-select mode.")],-1),I=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` value = ref()
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-select"),s(),t("span",{class:"hljs-attr"},":close-on-select"),s("="),t("span",{class:"hljs-string"},'"false"'),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("{{ value ? value : 'Please Select' }}"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"options"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-option"),s(),t("span",{class:"hljs-attr"},"label"),s("="),t("span",{class:"hljs-string"},'"Play game"'),s(" />")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),L={class:"card"},U={id:"OptionsAPI"},$=t("p",null,[s("You can pass the options as an array to the "),t("code",null,"options"),s(" property.")],-1),R=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` value = ref()
`),t("span",{class:"hljs-keyword"},"const"),s(` options = ref([
  {
    `),t("span",{class:"hljs-attr"},"label"),s(": "),t("span",{class:"hljs-string"},"'Eat'"),s(`,
    `),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"1"),s(`,
  },
  {
    `),t("span",{class:"hljs-attr"},"label"),s(": "),t("span",{class:"hljs-string"},"'Sleep'"),s(`,
    `),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"2"),s(`,
  },
  {
    `),t("span",{class:"hljs-attr"},"label"),s(": "),t("span",{class:"hljs-string"},"'Play game'"),s(`,
    `),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"3"),s(`,
    `),t("span",{class:"hljs-attr"},"disabled"),s(": "),t("span",{class:"hljs-literal"},"true"),s(`,
  },
])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-select"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(),t("span",{class:"hljs-attr"},":options"),s("="),t("span",{class:"hljs-string"},'"options"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("{{ value ? value : 'Please Select' }}"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),q={class:"card"},K={id:"OptionsAPIWithCustomizedKey"},Y=t("p",null,[s("You can pass the options as an array of objects to the "),t("code",null,"options"),s(" property. Use the "),t("code",null,"label-key"),s(" and "),t("code",null,"value-key"),s(" properties to specify the fields for the label and value within the options array.")],-1),H=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` value = ref()
`),t("span",{class:"hljs-keyword"},"const"),s(` options = ref([
   {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Eat'"),s(`,
    `),t("span",{class:"hljs-attr"},"id"),s(": "),t("span",{class:"hljs-number"},"1"),s(`,
  },
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Sleep'"),s(`,
    `),t("span",{class:"hljs-attr"},"id"),s(": "),t("span",{class:"hljs-number"},"2"),s(`,
  },
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Play game'"),s(`,
    `),t("span",{class:"hljs-attr"},"id"),s(": "),t("span",{class:"hljs-number"},"3"),s(`,
    `),t("span",{class:"hljs-attr"},"disabled"),s(": "),t("span",{class:"hljs-literal"},"true"),s(`,
  },
])
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-menu-select"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(),t("span",{class:"hljs-attr"},":options"),s("="),t("span",{class:"hljs-string"},'"options"'),s(),t("span",{class:"hljs-attr"},"label-key"),s("="),t("span",{class:"hljs-string"},'"name"'),s(),t("span",{class:"hljs-attr"},"value-key"),s("="),t("span",{class:"hljs-string"},'"id"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("{{ value ? value : 'Please Select' }}"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),Q=t("h2",null,"API",-1),F={class:"card"},G={id:"Props"},J=c("<h4>MenuSelect Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of the binding</td><td><em>any | any[]</em></td><td><code>-</code></td></tr><tr><td><code>v-model:show</code></td><td>Whether to show the menu</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>size</code></td><td>Menu size, optional values <code>normal</code> <code>mini</code> <code>small</code> <code>large</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>multiple</code></td><td>Whether to select multiple</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>scrollable</code></td><td>Whether to enable scrolling</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>close-on-select</code></td><td>Whether to close the menu when selected (selected options in multi-select mode never close the menu)</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>placement</code></td><td>Menu popup placement</td><td><em>Placement</em></td><td><code>cover-top-start</code></td></tr><tr><td><code>strategy</code></td><td>Menu position strategy, optional value is <code>absolute</code> <code>fixed</code></td><td><em>string</em></td><td><code>absolute</code></td></tr><tr><td><code>offset-x</code></td><td>The x-axis offset, relative to the menu-aligned position</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>offset-y</code></td><td>The y-axis offset, relative to the menu-aligned position</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>teleport</code></td><td>The location of the menu mount</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>body</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable the menu</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>trigger</code></td><td>Menu trigger method, optional value is <code>click</code> <code>hover</code> <code>manual</code></td><td><em>string</em></td><td><code>click</code></td></tr><tr><td><code>reference</code></td><td>The associated trigger element selector is used to specify specific child elements as trigger elements</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>elevation</code></td><td>Elevation level, options <code>true</code> <code>false</code> and level of <code>0-24</code></td><td><em>string | number | boolean</em></td><td><code>true</code></td></tr><tr><td><code>same-width</code></td><td>Whether to same width as trigger element</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>popover-class</code></td><td>Class of the popover</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>close-on-click-reference</code></td><td>Whether to close the menu when clicking the reference element</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>options</code> <em><strong>3.3.7</strong></em></td><td>Specifies options</td><td><em>MenuSelectOption[]</em></td><td><code>[]</code></td></tr><tr><td><code>label-key</code> <em><strong>3.3.7</strong></em></td><td>As the key that uniquely identifies label</td><td><em>string</em></td><td><code>label</code></td></tr><tr><td><code>value-key</code> <em><strong>3.3.7</strong></em></td><td>As the key that uniquely identifies value</td><td><em>string</em></td><td><code>value</code></td></tr></tbody></table><h4>MenuSelectOption</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>label</code></td><td>The text of option</td><td><em>string | VNode | (option: MenuSelectOption, selected: boolean) =&gt; VNodeChild</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>The value of option</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable option</td><td><em>boolean</em></td><td><code>-</code></td></tr><tr><td><code>ripple</code></td><td>Whether to enable ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table><h4>MenuOption Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>label</code></td><td>The text that the option displays</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>The value of the option binding</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code> <em><strong>3.3.0</strong></em></td><td>Whether to enable ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table>",6),X={class:"card"},Z={id:"Placement"},ss=c("<table><thead><tr><th>Prop</th><th>Description</th></tr></thead><tbody><tr><td><code>top</code></td><td>Top center position</td></tr><tr><td><code>top-start</code></td><td>Top left position</td></tr><tr><td><code>top-end</code></td><td>Top right position</td></tr><tr><td><code>bottom</code></td><td>Bottom center position</td></tr><tr><td><code>bottom-start</code></td><td>Bottom left position</td></tr><tr><td><code>bottom-end</code></td><td>Bottom right position</td></tr><tr><td><code>right</code></td><td>Right center position</td></tr><tr><td><code>right-start</code></td><td>Top right position</td></tr><tr><td><code>right-end</code></td><td>Bottom right position</td></tr><tr><td><code>left</code></td><td>Left center position</td></tr><tr><td><code>left-start</code></td><td>Top left position</td></tr><tr><td><code>left-end</code></td><td>Bottom left position</td></tr><tr><td><code>cover-top</code></td><td>Top center position, overlay trigger</td></tr><tr><td><code>cover-top-start</code></td><td>Top left position, overlay trigger</td></tr><tr><td><code>cover-top-end</code></td><td>Top right position, overlay trigger</td></tr><tr><td><code>cover-bottom</code></td><td>Bottom center position, overlay trigger</td></tr><tr><td><code>cover-bottom-start</code></td><td>Bottom left position, overlay trigger</td></tr><tr><td><code>cover-bottom-end</code></td><td>Bottom right position, overlay trigger</td></tr><tr><td><code>cover-left</code></td><td>Left center position, overlay trigger</td></tr><tr><td><code>cover-right</code></td><td>Right center position, overlay trigger</td></tr></tbody></table>",1),ts={class:"card"},as={id:"Methods"},es=c("<h4>MenuSelect Methods</h4><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>open</code></td><td>Open Menu</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Close Menu</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>resize</code></td><td>This method can be called to redraw when the default slot element of Menu select changes its position and size</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>",2),ls={class:"card"},ns={id:"Events"},cs=c("<h4>MenuSelect Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>open</code></td><td>Triggered when the menu is opened</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered when the open menu animation ends</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Triggered when the menu is closed</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the closing menu animation ends</td><td><code>-</code></td></tr><tr><td><code>click-outside</code></td><td>Triggered when clicking outside the menu</td><td><code>event: Event</code></td></tr></tbody></table>",2),os={class:"card"},ds={id:"Slots"},ps=c("<h4>MenuSelect Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Menu select trigger element</td><td><code>-</code></td></tr><tr><td><code>options</code></td><td>Menu select options</td><td><code>-</code></td></tr></tbody></table><h4>MenuOption Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Options to display the content</td><td><code>-</code></td></tr></tbody></table>",4),rs={class:"card"},hs={id:"StyleVariables"},is=c('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><h4>MenuSelect Variables</h4><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--menu-select-menu-max-height</code></td><td><code>278px</code></td></tr><tr><td><code>--menu-select-menu-padding</code></td><td><code>0</code></td></tr><tr><td><code>--menu-select-menu-border-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--menu-select-menu-background-color</code></td><td><code>var(--color-surface-container-high)</code></td></tr></tbody></table><h4>MenuOption Variables</h4><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--menu-option-normal-height</code></td><td><code>38px</code></td></tr><tr><td><code>--menu-option-small-height</code></td><td><code>30px</code></td></tr><tr><td><code>--menu-option-mini-height</code></td><td><code>24px</code></td></tr><tr><td><code>--menu-option-large-height</code></td><td><code>46px</code></td></tr><tr><td><code>--menu-option-padding</code></td><td><code>0 12px</code></td></tr><tr><td><code>--menu-option-normal-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--menu-option-small-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--menu-option-mini-font-size</code></td><td><code>var(--font-size-xs)</code></td></tr><tr><td><code>--menu-option-large-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--menu-option-selected-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--menu-option-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--menu-option-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr></tbody></table>',5);function js(ms,us,gs,vs,bs,_s){const l=o("router-link"),n=o("var-site-code-example");return r(),p("div",i,[j,t("div",m,[t("h3",u,[a(l,{to:"#Intro"},{default:e(()=>[s("#")]),_:1}),s("Intro")]),g]),t("div",v,[t("h3",b,[a(l,{to:"#BasicUsage"},{default:e(()=>[s("#")]),_:1}),s("Basic Usage")]),a(n,null,{default:e(()=>[_]),_:1})]),t("div",y,[t("h3",f,[a(l,{to:"#Size"},{default:e(()=>[s("#")]),_:1}),s("Size")]),a(n,null,{default:e(()=>[S]),_:1})]),t("div",k,[t("h3",w,[a(l,{to:"#ValueMapping"},{default:e(()=>[s("#")]),_:1}),s("Value Mapping")]),a(n,null,{default:e(()=>[P]),_:1})]),t("div",M,[t("h3",T,[a(l,{to:"#Scrollable"},{default:e(()=>[s("#")]),_:1}),s("Scrollable")]),x,a(n,null,{default:e(()=>[z]),_:1})]),t("div",O,[t("h3",D,[a(l,{to:"#OptionDisabled"},{default:e(()=>[s("#")]),_:1}),s("Option Disabled")]),a(n,null,{default:e(()=>[E]),_:1})]),t("div",V,[t("h3",B,[a(l,{to:"#Multiple"},{default:e(()=>[s("#")]),_:1}),s("Multiple")]),a(n,null,{default:e(()=>[C]),_:1})]),t("div",W,[t("h3",N,[a(l,{to:"#DisableCloseOnSelect"},{default:e(()=>[s("#")]),_:1}),s("Disable Close On Select")]),A,a(n,null,{default:e(()=>[I]),_:1})]),t("div",L,[t("h3",U,[a(l,{to:"#OptionsAPI"},{default:e(()=>[s("#")]),_:1}),s("Options API")]),$,a(n,null,{default:e(()=>[R]),_:1})]),t("div",q,[t("h3",K,[a(l,{to:"#OptionsAPIWithCustomizedKey"},{default:e(()=>[s("#")]),_:1}),s("Options API With Customized Key")]),Y,a(n,null,{default:e(()=>[H]),_:1})]),Q,t("div",F,[t("h3",G,[a(l,{to:"#Props"},{default:e(()=>[s("#")]),_:1}),s("Props")]),J]),t("div",X,[t("h3",Z,[a(l,{to:"#Placement"},{default:e(()=>[s("#")]),_:1}),s("Placement")]),ss]),t("div",ts,[t("h3",as,[a(l,{to:"#Methods"},{default:e(()=>[s("#")]),_:1}),s("Methods")]),es]),t("div",ls,[t("h3",ns,[a(l,{to:"#Events"},{default:e(()=>[s("#")]),_:1}),s("Events")]),cs]),t("div",os,[t("h3",ds,[a(l,{to:"#Slots"},{default:e(()=>[s("#")]),_:1}),s("Slots")]),ps]),t("div",rs,[t("h3",hs,[a(l,{to:"#StyleVariables"},{default:e(()=>[s("#")]),_:1}),s("Style Variables")]),is])])}const fs=d(h,[["render",js]]);export{fs as default};
