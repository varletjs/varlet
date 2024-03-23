import{_ as r,b as d,e as o,m as h,p as a,q as t,w as n,P as s,$ as c}from"./index-hvUEgl9w.js";const p={components:{}},i={class:"varlet-site-doc"},j=a("h1",null,"多列选择器",-1),u={class:"card"},m={id:"jie4shao4"},g=a("p",null,"提供了函数和组件两种调用方式。同时支持级联模式，可以处理多级联动。",-1),x=a("h2",null,"函数调用",-1),k={class:"card"},_={id:"dan1lie4xuan3ze2"},v=a("p",null,[s("函数会返回用户选择的信息和用户最后的动作 "),a("code",null,"state"),s("。 "),a("code",null,"state"),s(" 可能是 "),a("code",null,"confirm"),s(", "),a("code",null,"cancel"),s(", "),a("code",null,"close"),s("。")],-1),b=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Picker, Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"picker"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"const"),s(" { state, values, indexes, options } = "),a("span",{class:"hljs-keyword"},"await"),s(` Picker({ 
    `),a("span",{class:"hljs-attr"},"columns"),s(`: [
      [
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'A'"),s(` }, 
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'B'"),s(` }, 
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'C'"),s(` }, 
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'D'"),s(` }, 
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'E'"),s(` }
      ]
    ],
    `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"onChange"),s("("),a("span",{class:"hljs-params"},"values, indexes"),s(")")]),s(` {
      Snackbar(`),a("span",{class:"hljs-string"},[s("`values: "),a("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),a("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
    },
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"picker"'),s(">")]),s("单列选择"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y={class:"card"},f={id:"duo1lie4xuan3ze2"},w=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Picker, Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"picker"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"const"),s(" { state, values, indexes, options } = "),a("span",{class:"hljs-keyword"},"await"),s(` Picker({ 
    `),a("span",{class:"hljs-attr"},"columns"),s(`: [
      [
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'A'"),s(` }, 
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'B'"),s(` }, 
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'C'"),s(` }, 
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'D'"),s(` }, 
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'E'"),s(` }
      ],
       [
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'A'"),s(` }, 
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'B'"),s(` }, 
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'C'"),s(` }, 
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'D'"),s(` }, 
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'E'"),s(` }
      ],
       [
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'A'"),s(` }, 
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'B'"),s(` }, 
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'C'"),s(` }, 
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'D'"),s(` }, 
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'E'"),s(` }
      ]
    ],
    `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"onChange"),s("("),a("span",{class:"hljs-params"},"values, indexes"),s(")")]),s(` {
      Snackbar(`),a("span",{class:"hljs-string"},[s("`values: "),a("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),a("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
    },
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"picker"'),s(">")]),s("多列选择"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),C={class:"card"},S={id:"ji2lian2xuan3ze2"},P=a("p",null,[s("设置 "),a("code",null,"cascade"),s(" 属性开启级联滚动。")],-1),z=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Picker, Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"picker"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"const"),s(" { state, texts, indexes } = "),a("span",{class:"hljs-keyword"},"await"),s(` Picker({
    `),a("span",{class:"hljs-attr"},"cascade"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
    `),a("span",{class:"hljs-attr"},"columns"),s(`: [
      {
        `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'四川省'"),s(`,
        `),a("span",{class:"hljs-attr"},"children"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'成都市'"),s(`,
            `),a("span",{class:"hljs-attr"},"children"),s(`: [
              {
                `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'温江区'"),s(`,
              },
              {
                `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'青羊区'"),s(`,
              },
            ],
          },
        ],
      },
      {
        `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'江苏省'"),s(`,
        `),a("span",{class:"hljs-attr"},"children"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'无锡市'"),s(`,
            `),a("span",{class:"hljs-attr"},"children"),s(`: [
              {
                `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'新吴区'"),s(`,
              },
              {
                `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'滨湖区'"),s(`,
              },
            ],
          },
        ],
      },
    ],
    `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"onChange"),s("("),a("span",{class:"hljs-params"},"values, indexes"),s(")")]),s(` {
      Snackbar(`),a("span",{class:"hljs-string"},[s("`values: "),a("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),a("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
    },
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"picker"'),s(">")]),s("级联选择"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),$={class:"card"},B={id:"di4qu1xuan3ze2"},O=a("p",null,"组件库提供了中国省市区的级联数据，可以直接使用。",-1),A=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Picker, Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" columns "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui/json/area.json'"),s(`

`),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"picker"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"const"),s(" { state, texts, indexes } = "),a("span",{class:"hljs-keyword"},"await"),s(` Picker({
    `),a("span",{class:"hljs-attr"},"cascade"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
    columns,
    `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"onChange"),s("("),a("span",{class:"hljs-params"},"values, indexes"),s(")")]),s(` {
      Snackbar(`),a("span",{class:"hljs-string"},[s("`values: "),a("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),a("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
    },
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"picker"'),s(">")]),s("地区选择"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),E={class:"card"},D={id:"zhi2ying4she4"},N=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Picker, Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"picker"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"const"),s(" { state, values, indexes, options } = "),a("span",{class:"hljs-keyword"},"await"),s(` Picker({ 
    `),a("span",{class:"hljs-attr"},"columns"),s(`: [
      [
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'A'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'B'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'C'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'D'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
      ],
      [
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'A'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'B'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'C'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'D'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
      ],
      [
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'A'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'B'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'C'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
        { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'D'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
      ],
    ],
    `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"onChange"),s("("),a("span",{class:"hljs-params"},"values, indexes"),s(")")]),s(` {
      Snackbar(`),a("span",{class:"hljs-string"},[s("`values: "),a("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),a("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
    },
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"picker"'),s(">")]),s("值映射"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),V=a("h2",null,"组件调用",-1),q={class:"card"},K={id:"dan1lie4xuan3ze2"},T=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` columns = ref([
  [
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'A'"),s(` }, 
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'B'"),s(` }, 
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'C'"),s(` }, 
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'D'"),s(` }, 
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'E'"),s(` }     
  ]
])

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleChange"),s("("),a("span",{class:"hljs-params"},"values, indexes"),s(") ")]),s(`{
  Snackbar(`),a("span",{class:"hljs-string"},[s("`values: "),a("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),a("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-picker"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleChange"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),H={class:"card"},I={id:"duo1lie4xuan3ze2"},F=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` columns = ref([
  [
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'A'"),s(` }, 
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'B'"),s(` }, 
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'C'"),s(` }, 
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'D'"),s(` }, 
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'E'"),s(` }
  ],
  [
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'A'"),s(` }, 
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'B'"),s(` }, 
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'C'"),s(` }, 
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'D'"),s(` }, 
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'E'"),s(` }
  ],
  [
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'A'"),s(` }, 
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'B'"),s(` }, 
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'C'"),s(` }, 
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'D'"),s(` }, 
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'E'"),s(` }
  ]
])

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleChange"),s("("),a("span",{class:"hljs-params"},"values, indexes"),s(") ")]),s(`{
  Snackbar(`),a("span",{class:"hljs-string"},[s("`values: "),a("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),a("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-picker"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleChange"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),G={class:"card"},J={id:"ji2lian2xuan3ze2"},L=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` columns = ref([
  {
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'四川省'"),s(`,
    `),a("span",{class:"hljs-attr"},"children"),s(`: [
      {
        `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'成都市'"),s(`,
        `),a("span",{class:"hljs-attr"},"children"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'温江区'"),s(`,
          },
          {
            `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'青羊区'"),s(`,
          },
        ],
      },
    ],
  },
  {
    `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'江苏省'"),s(`,
    `),a("span",{class:"hljs-attr"},"children"),s(`: [
      {
        `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'无锡市'"),s(`,
        `),a("span",{class:"hljs-attr"},"children"),s(`: [
          {
            `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'新吴区'"),s(`,
          },
          {
            `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'滨湖区'"),s(`,
          },
        ],
      },
    ],
  },
])

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleChange"),s("("),a("span",{class:"hljs-params"},"values, indexes"),s(") ")]),s(`{
  Snackbar(`),a("span",{class:"hljs-string"},[s("`values: "),a("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),a("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-picker"),s(),a("span",{class:"hljs-attr"},"cascade"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleChange"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),M={class:"card"},Q={id:"di4qu1xuan3ze2"},R=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" area "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui/json/area.json'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` columns = ref(area)

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleChange"),s("("),a("span",{class:"hljs-params"},"values, indexes"),s(") ")]),s(`{
  Snackbar(`),a("span",{class:"hljs-string"},[s("`values: "),a("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),a("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-picker"),s(),a("span",{class:"hljs-attr"},"cascade"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleChange"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),U={class:"card"},W={id:"zhi2de0ying4she4"},X=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` columns = ref([
  [
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'A'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'B'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'C'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'D'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
  ],
  [
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'A'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'B'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'C'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'D'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
  ],
  [
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'A'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'B'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'C'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'D'"),s(", "),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
  ],
])

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleChange"),s("("),a("span",{class:"hljs-params"},"values, indexes"),s(") ")]),s(`{
  Snackbar(`),a("span",{class:"hljs-string"},[s("`values: "),a("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),a("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-picker"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleChange"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),Y={class:"card"},Z={id:"shuang1xiang4bang3ding4"},ss=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" values = ref(["),a("span",{class:"hljs-string"},"'A'"),s(", "),a("span",{class:"hljs-string"},"'B'"),s(", "),a("span",{class:"hljs-string"},"'C'"),s(`])
`),a("span",{class:"hljs-keyword"},"const"),s(` columns = ref([
  [
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'A'"),s(` }, 
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'B'"),s(` }, 
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'C'"),s(` }, 
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'D'"),s(` }, 
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'E'"),s(` }
  ],
  [
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'A'"),s(` }, 
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'B'"),s(` }, 
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'C'"),s(` }, 
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'D'"),s(` }, 
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'E'"),s(` }
  ],
  [
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'A'"),s(` }, 
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'B'"),s(` }, 
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'C'"),s(` }, 
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'D'"),s(` }, 
    { `),a("span",{class:"hljs-attr"},"text"),s(": "),a("span",{class:"hljs-string"},"'E'"),s(` }
  ]
])

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"resetValues"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  values.value = [`),a("span",{class:"hljs-string"},"'A'"),s(", "),a("span",{class:"hljs-string"},"'B'"),s(", "),a("span",{class:"hljs-string"},"'C'"),s(`]
}

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleChange"),s("("),a("span",{class:"hljs-params"},"values, indexes"),s(") ")]),s(`{
  Snackbar(`),a("span",{class:"hljs-string"},[s("`values: "),a("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),a("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"large"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"resetValues"'),s(">")]),s("values: {{ values }} 点击重置"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-picker"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"values"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleChange"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),as=a("h2",null,"API",-1),ts={class:"card"},ns={id:"shu3xing4"},ls=c("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>绑定的值</td><td><em>(string | number)[]</em></td><td><code>[]</code></td></tr><tr><td><code>columns</code></td><td>列内容</td><td><em>PickerColumnOption[] | PickerColumnOption[][]</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>标题</td><td><em>string</em></td><td><code>请选择</code></td></tr><tr><td><code>text-key</code></td><td>文本的属性 key</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>value-key</code></td><td>值的属性 key</td><td><em>string</em></td><td><code>value</code></td></tr><tr><td><code>children-key</code></td><td>级联子列表 key</td><td><em>string</em></td><td><code>children</code></td></tr><tr><td><code>toolbar</code></td><td>是否显示上方工具栏</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>是否开启级联模式</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>option-height</code></td><td>选项的高度(px rem)</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>option-count</code></td><td>可见的选项个数</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>confirm-button-text</code></td><td>确认按钮文字</td><td><em>string</em></td><td><code>确认</code></td></tr><tr><td><code>cancel-button-text</code></td><td>取消按钮文字</td><td><em>string</em></td><td><code>取消</code></td></tr><tr><td><code>confirm-button-text-color</code></td><td>确认按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-text-color</code></td><td>取消按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>close-on-key-escape</code></td><td>是否支持键盘 ESC 关闭选择器</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table>",1),es={class:"card"},cs={id:"PickerOptions"},ds=c("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>columns</code></td><td>列内容</td><td><em>PickerColumnOption[] | PickerColumnOption[][]</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>标题</td><td><em>string</em></td><td><code>请选择</code></td></tr><tr><td><code>textKey</code></td><td>文本的属性 key</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>valueKey</code></td><td>值的属性 key</td><td><em>string</em></td><td><code>value</code></td></tr><tr><td><code>childrenKey</code></td><td>级联子列表 key</td><td><em>string</em></td><td><code>children</code></td></tr><tr><td><code>toolbar</code></td><td>是否显示上方工具栏</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>是否开启级联模式</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>optionHeight</code></td><td>选项的高度</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>optionCount</code></td><td>可见的选项个数</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>confirmButtonText</code></td><td>确认按钮文字</td><td><em>string</em></td><td><code>确认</code></td></tr><tr><td><code>cancelButtonText</code></td><td>取消按钮文字</td><td><em>string</em></td><td><code>取消</code></td></tr><tr><td><code>confirmButtonTextColor</code></td><td>确认按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonTextColor</code></td><td>取消按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>closeOnClickOverlay</code></td><td>是否点击遮罩层关闭弹出层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnKeyEscape</code></td><td>是否支持键盘 ESC 关闭选择器</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>safeArea</code></td><td>是否开启底部安全区适配</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onClickOverlay</code></td><td>遮罩层点击回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>弹出层开启回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>弹出层开启动画结束回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>弹出层关闭回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>关闭弹出层动画结束时回调</td><td><em>() =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onChange</code></td><td>选择内容变化时回调</td><td><em>(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onConfirm</code></td><td>点击确认按钮时触发</td><td><em>(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onCancel</code></td><td>点击取消按钮时触发</td><td><em>(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onKeyEscape</code></td><td>点击键盘 ESC 时触发</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table>",1),rs={class:"card"},os={id:"PickerColumnOption"},hs=c("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>text</code></td><td>文本</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>值</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>children</code></td><td>子列表</td><td><em>PickerColumnOption[]</em></td><td><code>-</code></td></tr><tr><td><code>className</code></td><td>附加的类名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>textClassName</code></td><td>文本附加的类名</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table>",1),ps={class:"card"},is={id:"fang1fa3"},js=c("<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>confirm</code></td><td>立刻停止滚动并触发 confirm 事件</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>立刻停止滚动并触发 cancel 事件</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>",1),us={class:"card"},ms={id:"shi4jian4"},gs=c("<table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>change</code></td><td>选择内容变化时触发</td><td><code>values: (string | number)[]</code> 选择的值列表 <br> <code>indexes: number[]</code> 选择的下标列表 <br> <code>options: PickerColumnOption[]</code> 选择的选项对象列表</td></tr><tr><td><code>cancel</code></td><td>点击取消按钮时触发</td><td><code>values: (string | number)[]</code> 选择的值列表 <br> <code>indexes: number[]</code> 选择的下标列表 <br> <code>options: PickerColumnOption[]</code> 选择的选项对象列表</td></tr><tr><td><code>confirm</code></td><td>点击确认按钮时触发</td><td><code>values: (string | number)[]</code> 选择的值列表 <br> <code>indexes: number[]</code> 选择的下标列表 <br> <code>options: PickerColumnOption[]</code> 选择的选项对象列表</td></tr><tr><td><code>key-escape</code></td><td>点击键盘 ESC 时触发</td><td><code>-</code></td></tr></tbody></table>",1),xs={class:"card"},ks={id:"cha1cao2"},_s=c("<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>title</code></td><td>标题内容</td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>取消按钮内容</td><td><code>-</code></td></tr><tr><td><code>confirm</code></td><td>确认按钮内容</td><td><code>-</code></td></tr></tbody></table>",1),vs={class:"card"},bs={id:"yang4shi4bian4liang4"},ys=c('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--picker-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--picker-toolbar-height</code></td><td><code>44px</code></td></tr><tr><td><code>--picker-confirm-button-text-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--picker-cancel-button-text-color</code></td><td><code>#888</code></td></tr><tr><td><code>--picker-picked-border</code></td><td><code>1px solid var(--color-outline)</code></td></tr><tr><td><code>--picker-title-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--picker-title-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--picker-option-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--picker-option-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--picker-toolbar-padding</code></td><td><code>0 4px</code></td></tr><tr><td><code>--picker-mask-background-image</code></td><td><code>linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)),linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4))</code></td></tr></tbody></table>',2);function fs(ws,Cs,Ss,Ps,zs,$s){const l=d("router-link"),e=d("var-site-code-example");return o(),h("div",i,[j,a("div",u,[a("h3",m,[t(l,{to:"#jie4shao4"},{default:n(()=>[s("#")]),_:1}),s("介绍")]),g]),x,a("div",k,[a("h3",_,[t(l,{to:"#dan1lie4xuan3ze2"},{default:n(()=>[s("#")]),_:1}),s("单列选择")]),v,t(e,null,{default:n(()=>[b]),_:1})]),a("div",y,[a("h3",f,[t(l,{to:"#duo1lie4xuan3ze2"},{default:n(()=>[s("#")]),_:1}),s("多列选择")]),t(e,null,{default:n(()=>[w]),_:1})]),a("div",C,[a("h3",S,[t(l,{to:"#ji2lian2xuan3ze2"},{default:n(()=>[s("#")]),_:1}),s("级联选择")]),P,t(e,null,{default:n(()=>[z]),_:1})]),a("div",$,[a("h3",B,[t(l,{to:"#di4qu1xuan3ze2"},{default:n(()=>[s("#")]),_:1}),s("地区选择")]),O,t(e,null,{default:n(()=>[A]),_:1})]),a("div",E,[a("h3",D,[t(l,{to:"#zhi2ying4she4"},{default:n(()=>[s("#")]),_:1}),s("值映射")]),t(e,null,{default:n(()=>[N]),_:1})]),V,a("div",q,[a("h3",K,[t(l,{to:"#dan1lie4xuan3ze2"},{default:n(()=>[s("#")]),_:1}),s("单列选择")]),t(e,null,{default:n(()=>[T]),_:1})]),a("div",H,[a("h3",I,[t(l,{to:"#duo1lie4xuan3ze2"},{default:n(()=>[s("#")]),_:1}),s("多列选择")]),t(e,null,{default:n(()=>[F]),_:1})]),a("div",G,[a("h3",J,[t(l,{to:"#ji2lian2xuan3ze2"},{default:n(()=>[s("#")]),_:1}),s("级联选择")]),t(e,null,{default:n(()=>[L]),_:1})]),a("div",M,[a("h3",Q,[t(l,{to:"#di4qu1xuan3ze2"},{default:n(()=>[s("#")]),_:1}),s("地区选择")]),t(e,null,{default:n(()=>[R]),_:1})]),a("div",U,[a("h3",W,[t(l,{to:"#zhi2de0ying4she4"},{default:n(()=>[s("#")]),_:1}),s("值的映射")]),t(e,null,{default:n(()=>[X]),_:1})]),a("div",Y,[a("h3",Z,[t(l,{to:"#shuang1xiang4bang3ding4"},{default:n(()=>[s("#")]),_:1}),s("双向绑定")]),t(e,null,{default:n(()=>[ss]),_:1})]),as,a("div",ts,[a("h3",ns,[t(l,{to:"#shu3xing4"},{default:n(()=>[s("#")]),_:1}),s("属性")]),ls]),a("div",es,[a("h3",cs,[t(l,{to:"#PickerOptions"},{default:n(()=>[s("#")]),_:1}),s("Picker Options")]),ds]),a("div",rs,[a("h3",os,[t(l,{to:"#PickerColumnOption"},{default:n(()=>[s("#")]),_:1}),s("PickerColumnOption")]),hs]),a("div",ps,[a("h3",is,[t(l,{to:"#fang1fa3"},{default:n(()=>[s("#")]),_:1}),s("方法")]),js]),a("div",us,[a("h3",ms,[t(l,{to:"#shi4jian4"},{default:n(()=>[s("#")]),_:1}),s("事件")]),gs]),a("div",xs,[a("h3",ks,[t(l,{to:"#cha1cao2"},{default:n(()=>[s("#")]),_:1}),s("插槽")]),_s]),a("div",vs,[a("h3",bs,[t(l,{to:"#yang4shi4bian4liang4"},{default:n(()=>[s("#")]),_:1}),s("样式变量")]),ys])])}const Os=r(p,[["render",fs]]);export{Os as default};
