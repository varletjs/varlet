import{_ as o,b as d,e as p,m as h,p as a,q as t,w as l,P as s,Z as c}from"./index-vwO9GBzB.js";const r={components:{}},j={class:"varlet-site-doc"},i=a("h1",null,"菜单选择器",-1),m={class:"card"},u={id:"jie4shao4"},g=a("p",null,[s("具有选择器功能的菜单，部分功能的使用方式与 "),a("a",{href:"#/zh-CN/menu"},"菜单"),s(" 一致。")],-1),v={class:"card"},b={id:"ji1ben3shi3yong4"},_=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` value = ref()
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-select"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("{{ value ? value : '请选择' }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"options"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"吃饭"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"睡觉"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"打游戏"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),f={class:"card"},y={id:"chi3cun4"},k=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  
`),a("span",{class:"hljs-keyword"},"const"),s(` valueNormal = ref()
`),a("span",{class:"hljs-keyword"},"const"),s(` valueSmall = ref()
`),a("span",{class:"hljs-keyword"},"const"),s(` valueMini = ref()
`),a("span",{class:"hljs-keyword"},"const"),s(` valueLarge = ref()
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-select"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"valueNormal"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s(`
        {{ valueNormal ? valueNormal : '常规尺寸' }}
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"options"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"吃饭"'),s(" />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"睡觉"'),s(" />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"打游戏"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-select"),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"valueSmall"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s(`
        {{ valueSmall ? valueSmall : '小型尺寸' }}
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"options"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"吃饭"'),s(" />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"睡觉"'),s(" />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"打游戏"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-select"),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"mini"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"valueMini"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s(`
        {{ valueMini ? valueMini : '迷你尺寸' }}
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"options"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"吃饭"'),s(" />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"睡觉"'),s(" />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"打游戏"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-select"),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"large"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"valueLarge"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s(`
        {{ valueLarge ? valueLarge : '大型尺寸' }}
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"options"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"吃饭"'),s(" />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"睡觉"'),s(" />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"打游戏"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),x={class:"card"},w={id:"zhi2ying4she4"},z=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` value = ref()
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-select"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("{{ value ? `value: ${value}` : '请选择' }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"options"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"吃饭"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"1"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"睡觉"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"2"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"打游戏"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"3"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),S={class:"card"},M={id:"ke3gun3dong4"},N=a("p",null,[s("通过开启 "),a("code",null,"scrollable"),s(" 使菜单可以局部滚动。")],-1),P=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` value = ref()
`),a("span",{class:"hljs-keyword"},"const"),s(" options = ref("),a("span",{class:"hljs-built_in"},"Array"),s(`.from(
  { `),a("span",{class:"hljs-attr"},"length"),s(": "),a("span",{class:"hljs-number"},"30"),s(` }, 
  `),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(" ({ "),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},[s("`Option "),a("span",{class:"hljs-subst"},[s("${index + "),a("span",{class:"hljs-number"},"1"),s("}")]),s("`")]),s(", "),a("span",{class:"hljs-attr"},"value"),s(`: index }))
)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-select"),s(),a("span",{class:"hljs-attr"},"scrollable"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("{{ value ? value : '请选择' }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"options"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(` 
        `),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"option in options"'),s(` 
        `),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"option.value"'),s(` 
        `),a("span",{class:"hljs-attr"},":label"),s("="),a("span",{class:"hljs-string"},'"option.label"'),s(` 
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),V={class:"card"},$={id:"xuan3xiang4jin4yong4"},C=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` value = ref()
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-select"),s(),a("span",{class:"hljs-attr"},"scrollable"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("{{ value ? value : '请选择' }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"options"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"吃饭"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"睡觉"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"打游戏"'),s(),a("span",{class:"hljs-attr"},"disabled"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),L={class:"card"},O={id:"duo1xuan3"},B=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` value = ref([])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-select"),s(),a("span",{class:"hljs-attr"},"multiple"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("{{ value.length ? value : '请选择' }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"options"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"吃饭"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"睡觉"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"打游戏"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"写代码"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"摸鱼"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),E={class:"card"},A={id:"xuan3ze2xuan3xiang4shi2jin4zhi3guan1bi4cai4dan1"},T=a("p",null,[s("关闭 "),a("code",null,"close-on-select"),s(" 可以在选择选项时禁止关闭菜单。默认行为是在选择选项时关闭菜单，多选模式下不允许关闭此选项。")],-1),q=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` value = ref()
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-select"),s(),a("span",{class:"hljs-attr"},":close-on-select"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("{{ value ? value : '请选择' }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"options"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"吃饭"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"睡觉"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"打游戏"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu-select"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),I=a("h2",null,"API",-1),Z={class:"card"},D={id:"shu3xing4"},F=c("<h4>MenuSelect Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>绑定的值</td><td><em>any | any[]</em></td><td><code>-</code></td></tr><tr><td><code>v-model:show</code></td><td>是否显示菜单</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>size</code></td><td>菜单尺寸，可选值 <code>normal</code> <code>mini</code> <code>small</code> <code>large</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>multiple</code></td><td>是否多选</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>scrollable</code></td><td>是否可滚动</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>close-on-select</code></td><td>选中时是否关闭菜单(多选模式下选中选项始终不关闭菜单)</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>placement</code></td><td>菜单弹出位置</td><td><em>Placement</em></td><td><code>cover-top-start</code></td></tr><tr><td><code>strategy</code></td><td>菜单定位方式，可选值为 <code>absolute</code> <code>fixed</code></td><td><em>string</em></td><td><code>absolute</code></td></tr><tr><td><code>offset-x</code></td><td>x 轴偏移量， 相对于菜单对齐后的位置</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>offset-y</code></td><td>y 轴偏移量， 相对于菜单对齐后的位置</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>teleport</code></td><td>菜单挂载的位置</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>body</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用菜单</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>trigger</code></td><td>菜单触发方式，可选值为 <code>click</code> <code>hover</code>, <code>click</code> 为点击时触发, <code>hover</code> 为悬停时触发</td><td><em>string</em></td><td><code>click</code></td></tr><tr><td><code>reference</code></td><td>菜单关联的触发元素选择器，用于指定菜单的特定子元素为触发元素</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>elevation</code></td><td>海拔高度，可选值为 <code>true</code> <code>false</code> 和 <code>0-24</code> 的等级</td><td><em>string | number | boolean</em></td><td><code>true</code></td></tr><tr><td><code>same-width</code></td><td>是否与触发元素同宽</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>popover-class</code></td><td>弹出层的 class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>close-on-click-reference</code></td><td>是否在点击菜单触发元素后关闭菜单</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><h4>MenuOption Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>label</code></td><td>选项显示的文本</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>选项绑定的值</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>",4),G={class:"card"},H={id:"Placement"},J=c("<table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td><code>top</code></td><td>顶部中心位置</td></tr><tr><td><code>top-start</code></td><td>顶部左侧位置</td></tr><tr><td><code>top-end</code></td><td>顶部右侧位置</td></tr><tr><td><code>bottom</code></td><td>底部中心位置</td></tr><tr><td><code>bottom-start</code></td><td>底部左侧位置</td></tr><tr><td><code>bottom-end</code></td><td>底部右侧位置</td></tr><tr><td><code>right</code></td><td>右侧中心位置</td></tr><tr><td><code>right-start</code></td><td>右侧上方位置</td></tr><tr><td><code>right-end</code></td><td>右侧下方位置</td></tr><tr><td><code>left</code></td><td>左侧中心位置</td></tr><tr><td><code>left-start</code></td><td>左侧上方位置</td></tr><tr><td><code>left-end</code></td><td>左侧下方位置</td></tr><tr><td><code>cover-top</code></td><td>顶部中心位置, 覆盖触发器</td></tr><tr><td><code>cover-top-start</code></td><td>顶部左侧位置, 覆盖触发器</td></tr><tr><td><code>cover-top-end</code></td><td>顶部右侧位置, 覆盖触发器</td></tr><tr><td><code>cover-bottom</code></td><td>底部中心位置, 覆盖触发器</td></tr><tr><td><code>cover-bottom-start</code></td><td>底部左侧位置, 覆盖触发器</td></tr><tr><td><code>cover-bottom-end</code></td><td>底部右侧位置, 覆盖触发器</td></tr><tr><td><code>cover-left</code></td><td>左侧位置, 覆盖触发器</td></tr><tr><td><code>cover-right</code></td><td>右侧位置, 覆盖触发器</td></tr></tbody></table>",1),K={class:"card"},Q={id:"fang1fa3"},R=c("<h4>MenuSelect Methods</h4><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>open</code></td><td>打开 MenuSelect</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>关闭 MenuSelect</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>resize</code></td><td>MenuSelect 默认插槽元素产生位置大小变化时可以调用此方法进行重绘</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>",2),U={class:"card"},W={id:"shi4jian4"},X=c("<h4>MenuSelect Events</h4><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>open</code></td><td>打开菜单时触发</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>打开菜单动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>关闭菜单时触发</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>关闭菜单动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>click-outside</code></td><td>点击菜单外部时触发</td><td><code>event: Event</code></td></tr></tbody></table>",2),Y={class:"card"},ss={id:"cha1cao2"},as=c("<h4>MenuSelect Slots</h4><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>菜单关联的触发元素</td><td><code>-</code></td></tr><tr><td><code>options</code></td><td>菜单选项内容</td><td><code>-</code></td></tr></tbody></table><h4>MenuOption Slots</h4><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>选项显示的内容</td><td><code>-</code></td></tr></tbody></table>",4),ts={class:"card"},ls={id:"yang4shi4bian4liang4"},ns=c('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><h4>Select Variables</h4><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--menu-select-menu-max-height</code></td><td><code>278px</code></td></tr><tr><td><code>--menu-select-menu-padding</code></td><td><code>0</code></td></tr><tr><td><code>--menu-select-menu-border-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--menu-select-menu-background-color</code></td><td><code>#fff</code></td></tr></tbody></table><h4>Option Variables</h4><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--menu-option-normal-height</code></td><td><code>38px</code></td></tr><tr><td><code>--menu-option-small-height</code></td><td><code>30px</code></td></tr><tr><td><code>--menu-option-mini-height</code></td><td><code>24px</code></td></tr><tr><td><code>--menu-option-large-height</code></td><td><code>46px</code></td></tr><tr><td><code>--menu-option-padding</code></td><td><code>0 12px</code></td></tr><tr><td><code>--menu-option-normal-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--menu-option-small-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--menu-option-mini-font-size</code></td><td><code>var(--font-size-xs)</code></td></tr><tr><td><code>--menu-option-large-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--menu-option-selected-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--menu-option-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--menu-option-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr></tbody></table>',5);function es(cs,ds,os,ps,hs,rs){const n=d("router-link"),e=d("var-site-code-example");return p(),h("div",j,[i,a("div",m,[a("h3",u,[t(n,{to:"#jie4shao4"},{default:l(()=>[s("#")]),_:1}),s("介绍")]),g]),a("div",v,[a("h3",b,[t(n,{to:"#ji1ben3shi3yong4"},{default:l(()=>[s("#")]),_:1}),s("基本使用")]),t(e,null,{default:l(()=>[_]),_:1})]),a("div",f,[a("h3",y,[t(n,{to:"#chi3cun4"},{default:l(()=>[s("#")]),_:1}),s("尺寸")]),t(e,null,{default:l(()=>[k]),_:1})]),a("div",x,[a("h3",w,[t(n,{to:"#zhi2ying4she4"},{default:l(()=>[s("#")]),_:1}),s("值映射")]),t(e,null,{default:l(()=>[z]),_:1})]),a("div",S,[a("h3",M,[t(n,{to:"#ke3gun3dong4"},{default:l(()=>[s("#")]),_:1}),s("可滚动")]),N,t(e,null,{default:l(()=>[P]),_:1})]),a("div",V,[a("h3",$,[t(n,{to:"#xuan3xiang4jin4yong4"},{default:l(()=>[s("#")]),_:1}),s("选项禁用")]),t(e,null,{default:l(()=>[C]),_:1})]),a("div",L,[a("h3",O,[t(n,{to:"#duo1xuan3"},{default:l(()=>[s("#")]),_:1}),s("多选")]),t(e,null,{default:l(()=>[B]),_:1})]),a("div",E,[a("h3",A,[t(n,{to:"#xuan3ze2xuan3xiang4shi2jin4zhi3guan1bi4cai4dan1"},{default:l(()=>[s("#")]),_:1}),s("选择选项时禁止关闭菜单")]),T,t(e,null,{default:l(()=>[q]),_:1})]),I,a("div",Z,[a("h3",D,[t(n,{to:"#shu3xing4"},{default:l(()=>[s("#")]),_:1}),s("属性")]),F]),a("div",G,[a("h3",H,[t(n,{to:"#Placement"},{default:l(()=>[s("#")]),_:1}),s("Placement")]),J]),a("div",K,[a("h3",Q,[t(n,{to:"#fang1fa3"},{default:l(()=>[s("#")]),_:1}),s("方法")]),R]),a("div",U,[a("h3",W,[t(n,{to:"#shi4jian4"},{default:l(()=>[s("#")]),_:1}),s("事件")]),X]),a("div",Y,[a("h3",ss,[t(n,{to:"#cha1cao2"},{default:l(()=>[s("#")]),_:1}),s("插槽")]),as]),a("div",ts,[a("h3",ls,[t(n,{to:"#yang4shi4bian4liang4"},{default:l(()=>[s("#")]),_:1}),s("样式变量")]),ns])])}const is=o(r,[["render",es]]);export{is as default};
