import{_ as r,m as o,p as a,q as t,w as n,Q as s,a1 as c,b as d,e as h}from"./index-Dp-m0_HZ.js";const p={components:{}},i={class:"varlet-site-doc"},j=a("h1",null,"多列选择器",-1),u={class:"card"},m={id:"jie4shao4"},g=a("p",null,"提供了函数和组件两种调用方式。同时支持级联模式，可以处理多级联动。",-1),k=a("h2",null,"函数调用",-1),x={class:"card"},_={id:"dan1lie4xuan3ze2"},v=a("p",null,[s("函数会返回用户选择的信息和用户最后的动作 "),a("code",null,"state"),s("。 "),a("code",null,"state"),s(" 可能是 "),a("code",null,"confirm"),s(", "),a("code",null,"cancel"),s(", "),a("code",null,"close"),s("。")],-1),b=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1),C={class:"card"},S={id:"ji2lian2xuan3ze2"},P=a("p",null,[s("设置 "),a("code",null,"cascade"),s(" 属性开启级联滚动。")],-1),$=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1),z={class:"card"},B={id:"di4qu1xuan3ze2"},O=a("p",null,"组件库提供了中国省市区的级联数据，可以直接使用。",-1),A=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1),E={class:"card"},D={id:"lie4shu4liang4"},N=a("p",null,[s("通过 "),a("code",null,"columnsCount"),s(" 设置最大显示列的数量，在级联模式下十分有用。")],-1),V=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Picker, Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" columns "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui/json/area.json'"),s(`

`),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"picker"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"const"),s(" { state, texts, indexes } = "),a("span",{class:"hljs-keyword"},"await"),s(` Picker({
    `),a("span",{class:"hljs-attr"},"cascade"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
    columns,
    `),a("span",{class:"hljs-attr"},"columnsCount"),s(": "),a("span",{class:"hljs-number"},"2"),s(`,
    `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"onChange"),s("("),a("span",{class:"hljs-params"},"values, indexes"),s(")")]),s(` {
      Snackbar(`),a("span",{class:"hljs-string"},[s("`values: "),a("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),a("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
    },
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"picker"'),s(">")]),s("配置显示列"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),q={class:"card"},K={id:"zhi2ying4she4"},T=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1),H=a("h2",null,"组件调用",-1),I={class:"card"},Q={id:"dan1lie4xuan3ze2"},F=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1),G={class:"card"},J={id:"duo1lie4xuan3ze2"},L=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1),M={class:"card"},R={id:"ji2lian2xuan3ze2"},U=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1),W={class:"card"},X={id:"di4qu1xuan3ze2"},Y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1),Z={class:"card"},ss={id:"lie4shu4liang4"},as=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" area "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui/json/area.json'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` columns = ref(area)

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleChange"),s("("),a("span",{class:"hljs-params"},"values, indexes"),s(") ")]),s(`{
  Snackbar(`),a("span",{class:"hljs-string"},[s("`values: "),a("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),a("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-picker"),s(),a("span",{class:"hljs-attr"},"cascade"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(),a("span",{class:"hljs-attr"},":columns-count"),s("="),a("span",{class:"hljs-string"},'"2"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleChange"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),ts={class:"card"},ns={id:"zhi2de0ying4she4"},ls=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1),es={class:"card"},cs={id:"shuang1xiang4bang3ding4"},ds=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1),rs=a("h2",null,"API",-1),os={class:"card"},hs={id:"shu3xing4"},ps=c("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>绑定的值</td><td><em>(string | number)[]</em></td><td><code>[]</code></td></tr><tr><td><code>columns</code></td><td>列内容</td><td><em>PickerColumnOption[] | PickerColumnOption[][]</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>标题</td><td><em>string</em></td><td><code>请选择</code></td></tr><tr><td><code>text-key</code></td><td>文本的属性 key</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>value-key</code></td><td>值的属性 key</td><td><em>string</em></td><td><code>value</code></td></tr><tr><td><code>children-key</code></td><td>级联子列表 key</td><td><em>string</em></td><td><code>children</code></td></tr><tr><td><code>toolbar</code></td><td>是否显示上方工具栏</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>是否开启级联模式</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>option-height</code></td><td>选项的高度(px rem)</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>option-count</code></td><td>可见的选项个数</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>columns-count</code> <em><strong>3.3.11</strong></em></td><td>最大显示列数</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>confirm-button-text</code></td><td>确认按钮文字</td><td><em>string</em></td><td><code>确认</code></td></tr><tr><td><code>cancel-button-text</code></td><td>取消按钮文字</td><td><em>string</em></td><td><code>取消</code></td></tr><tr><td><code>confirm-button-text-color</code></td><td>确认按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-text-color</code></td><td>取消按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>close-on-key-escape</code></td><td>是否支持键盘 ESC 关闭选择器</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table>",1),is={class:"card"},js={id:"PickerOptions"},us=c("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>columns</code></td><td>列内容</td><td><em>PickerColumnOption[] | PickerColumnOption[][]</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>标题</td><td><em>string</em></td><td><code>请选择</code></td></tr><tr><td><code>textKey</code></td><td>文本的属性 key</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>valueKey</code></td><td>值的属性 key</td><td><em>string</em></td><td><code>value</code></td></tr><tr><td><code>childrenKey</code></td><td>级联子列表 key</td><td><em>string</em></td><td><code>children</code></td></tr><tr><td><code>toolbar</code></td><td>是否显示上方工具栏</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>是否开启级联模式</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>optionHeight</code></td><td>选项的高度</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>optionCount</code></td><td>可见的选项个数</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>columnsCount</code> <em><strong>3.3.11</strong></em></td><td>最大显示列数</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>confirmButtonText</code></td><td>确认按钮文字</td><td><em>string</em></td><td><code>确认</code></td></tr><tr><td><code>cancelButtonText</code></td><td>取消按钮文字</td><td><em>string</em></td><td><code>取消</code></td></tr><tr><td><code>confirmButtonTextColor</code></td><td>确认按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonTextColor</code></td><td>取消按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>closeOnClickOverlay</code></td><td>是否点击遮罩层关闭弹出层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnKeyEscape</code></td><td>是否支持键盘 ESC 关闭选择器</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>safeArea</code></td><td>是否开启底部安全区适配</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onClickOverlay</code></td><td>遮罩层点击回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>弹出层开启回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>弹出层开启动画结束回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>弹出层关闭回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>关闭弹出层动画结束时回调</td><td><em>() =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onChange</code></td><td>选择内容变化时回调</td><td><em>(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onConfirm</code></td><td>点击确认按钮时触发</td><td><em>(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onCancel</code></td><td>点击取消按钮时触发</td><td><em>(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onKeyEscape</code></td><td>点击键盘 ESC 时触发</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table>",1),ms={class:"card"},gs={id:"PickerColumnOption"},ks=c("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>text</code></td><td>文本</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>值</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>children</code></td><td>子列表</td><td><em>PickerColumnOption[]</em></td><td><code>-</code></td></tr><tr><td><code>className</code></td><td>附加的类名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>textClassName</code></td><td>文本附加的类名</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table>",1),xs={class:"card"},_s={id:"fang1fa3"},vs=c("<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>confirm</code></td><td>立刻停止滚动并触发 confirm 事件</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>立刻停止滚动并触发 cancel 事件</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>",1),bs={class:"card"},ys={id:"shi4jian4"},fs=c("<table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>change</code></td><td>选择内容变化时触发</td><td><code>values: (string | number)[]</code> 选择的值列表 <br> <code>indexes: number[]</code> 选择的下标列表 <br> <code>options: PickerColumnOption[]</code> 选择的选项对象列表</td></tr><tr><td><code>cancel</code></td><td>点击取消按钮时触发</td><td><code>values: (string | number)[]</code> 选择的值列表 <br> <code>indexes: number[]</code> 选择的下标列表 <br> <code>options: PickerColumnOption[]</code> 选择的选项对象列表</td></tr><tr><td><code>confirm</code></td><td>点击确认按钮时触发</td><td><code>values: (string | number)[]</code> 选择的值列表 <br> <code>indexes: number[]</code> 选择的下标列表 <br> <code>options: PickerColumnOption[]</code> 选择的选项对象列表</td></tr><tr><td><code>key-escape</code></td><td>点击键盘 ESC 时触发</td><td><code>-</code></td></tr></tbody></table>",1),ws={class:"card"},Cs={id:"cha1cao2"},Ss=c("<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>title</code></td><td>标题内容</td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>取消按钮内容</td><td><code>-</code></td></tr><tr><td><code>confirm</code></td><td>确认按钮内容</td><td><code>-</code></td></tr></tbody></table>",1),Ps={class:"card"},$s={id:"yang4shi4bian4liang4"},zs=c('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--picker-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--picker-toolbar-height</code></td><td><code>44px</code></td></tr><tr><td><code>--picker-confirm-button-text-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--picker-cancel-button-text-color</code></td><td><code>#888</code></td></tr><tr><td><code>--picker-picked-border</code></td><td><code>1px solid var(--color-outline)</code></td></tr><tr><td><code>--picker-title-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--picker-title-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--picker-option-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--picker-option-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--picker-toolbar-padding</code></td><td><code>0 4px</code></td></tr><tr><td><code>--picker-mask-background-image</code></td><td><code>linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)),linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4))</code></td></tr></tbody></table>',2);function Bs(Os,As,Es,Ds,Ns,Vs){const l=d("router-link"),e=d("var-site-code-example");return h(),o("div",i,[j,a("div",u,[a("h3",m,[t(l,{to:"#jie4shao4"},{default:n(()=>[s("#")]),_:1}),s("介绍")]),g]),k,a("div",x,[a("h3",_,[t(l,{to:"#dan1lie4xuan3ze2"},{default:n(()=>[s("#")]),_:1}),s("单列选择")]),v,t(e,null,{default:n(()=>[b]),_:1})]),a("div",y,[a("h3",f,[t(l,{to:"#duo1lie4xuan3ze2"},{default:n(()=>[s("#")]),_:1}),s("多列选择")]),t(e,null,{default:n(()=>[w]),_:1})]),a("div",C,[a("h3",S,[t(l,{to:"#ji2lian2xuan3ze2"},{default:n(()=>[s("#")]),_:1}),s("级联选择")]),P,t(e,null,{default:n(()=>[$]),_:1})]),a("div",z,[a("h3",B,[t(l,{to:"#di4qu1xuan3ze2"},{default:n(()=>[s("#")]),_:1}),s("地区选择")]),O,t(e,null,{default:n(()=>[A]),_:1})]),a("div",E,[a("h3",D,[t(l,{to:"#lie4shu4liang4"},{default:n(()=>[s("#")]),_:1}),s("列数量")]),N,t(e,null,{default:n(()=>[V]),_:1})]),a("div",q,[a("h3",K,[t(l,{to:"#zhi2ying4she4"},{default:n(()=>[s("#")]),_:1}),s("值映射")]),t(e,null,{default:n(()=>[T]),_:1})]),H,a("div",I,[a("h3",Q,[t(l,{to:"#dan1lie4xuan3ze2"},{default:n(()=>[s("#")]),_:1}),s("单列选择")]),t(e,null,{default:n(()=>[F]),_:1})]),a("div",G,[a("h3",J,[t(l,{to:"#duo1lie4xuan3ze2"},{default:n(()=>[s("#")]),_:1}),s("多列选择")]),t(e,null,{default:n(()=>[L]),_:1})]),a("div",M,[a("h3",R,[t(l,{to:"#ji2lian2xuan3ze2"},{default:n(()=>[s("#")]),_:1}),s("级联选择")]),t(e,null,{default:n(()=>[U]),_:1})]),a("div",W,[a("h3",X,[t(l,{to:"#di4qu1xuan3ze2"},{default:n(()=>[s("#")]),_:1}),s("地区选择")]),t(e,null,{default:n(()=>[Y]),_:1})]),a("div",Z,[a("h3",ss,[t(l,{to:"#lie4shu4liang4"},{default:n(()=>[s("#")]),_:1}),s("列数量")]),t(e,null,{default:n(()=>[as]),_:1})]),a("div",ts,[a("h3",ns,[t(l,{to:"#zhi2de0ying4she4"},{default:n(()=>[s("#")]),_:1}),s("值的映射")]),t(e,null,{default:n(()=>[ls]),_:1})]),a("div",es,[a("h3",cs,[t(l,{to:"#shuang1xiang4bang3ding4"},{default:n(()=>[s("#")]),_:1}),s("双向绑定")]),t(e,null,{default:n(()=>[ds]),_:1})]),rs,a("div",os,[a("h3",hs,[t(l,{to:"#shu3xing4"},{default:n(()=>[s("#")]),_:1}),s("属性")]),ps]),a("div",is,[a("h3",js,[t(l,{to:"#PickerOptions"},{default:n(()=>[s("#")]),_:1}),s("Picker Options")]),us]),a("div",ms,[a("h3",gs,[t(l,{to:"#PickerColumnOption"},{default:n(()=>[s("#")]),_:1}),s("PickerColumnOption")]),ks]),a("div",xs,[a("h3",_s,[t(l,{to:"#fang1fa3"},{default:n(()=>[s("#")]),_:1}),s("方法")]),vs]),a("div",bs,[a("h3",ys,[t(l,{to:"#shi4jian4"},{default:n(()=>[s("#")]),_:1}),s("事件")]),fs]),a("div",ws,[a("h3",Cs,[t(l,{to:"#cha1cao2"},{default:n(()=>[s("#")]),_:1}),s("插槽")]),Ss]),a("div",Ps,[a("h3",$s,[t(l,{to:"#yang4shi4bian4liang4"},{default:n(()=>[s("#")]),_:1}),s("样式变量")]),zs])])}const Ks=r(p,[["render",Bs]]);export{Ks as default};
