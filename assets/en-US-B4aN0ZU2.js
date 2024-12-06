import{_ as r,m as o,p as t,q as a,w as n,Q as s,a1 as c,b as d,e as p}from"./index-Dp-m0_HZ.js";const h={components:{}},i={class:"varlet-site-doc"},j=t("h1",null,"Picker",-1),u={class:"card"},m={id:"Intro"},g=t("p",null,"Two calling methods, function and component, are provided. It also supports cascade mode and can handle multi-level linkage.",-1),k=t("h2",null,"Function call",-1),b={class:"card"},v={id:"SingleColumnPicker"},_=t("p",null,[s("The function will return the information selected by the user and the user's last action "),t("code",null,"state"),s(". "),t("code",null,"state"),s(" may be "),t("code",null,"confirm"),s(", "),t("code",null,"cancel"),s(", "),t("code",null,"close"),s(".")],-1),x=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Picker, Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"async"),s(),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"picker"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),t("span",{class:"hljs-keyword"},"const"),s(" { state, values, indexes, options } = "),t("span",{class:"hljs-keyword"},"await"),s(` Picker({ 
    `),t("span",{class:"hljs-attr"},"columns"),s(`: [
      [
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'E'"),s(` }
      ]
    ],
    `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"onChange"),s("("),t("span",{class:"hljs-params"},"values, indexes"),s(")")]),s(` {
      Snackbar(`),t("span",{class:"hljs-string"},[s("`values: "),t("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),t("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
    },
  })
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"picker"'),s(">")]),s("Single Column Picker"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y={class:"card"},f={id:"MultipleColumnPicker"},C=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Picker, Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"async"),s(),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"picker"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),t("span",{class:"hljs-keyword"},"const"),s(" { state, values, indexes, options } = "),t("span",{class:"hljs-keyword"},"await"),s(` Picker({ 
    `),t("span",{class:"hljs-attr"},"columns"),s(`: [
      [
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'E'"),s(` }
      ],
       [
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'E'"),s(` }
      ],
       [
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(` }, 
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'E'"),s(` }
      ]
    ],
    `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"onChange"),s("("),t("span",{class:"hljs-params"},"values, indexes"),s(")")]),s(` {
      Snackbar(`),t("span",{class:"hljs-string"},[s("`values: "),t("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),t("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
    },
  })
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"picker"'),s(">")]),s("Multiple Column Picker"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),w={class:"card"},S={id:"CascadeColumnPicker"},P=t("p",null,[s("Set the "),t("code",null,"cascade"),s(" property to enable cascading scrolling.")],-1),A=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Picker, Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"async"),s(),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"picker"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),t("span",{class:"hljs-keyword"},"const"),s(" { state, texts, indexes } = "),t("span",{class:"hljs-keyword"},"await"),s(` Picker({
    `),t("span",{class:"hljs-attr"},"cascade"),s(": "),t("span",{class:"hljs-literal"},"true"),s(`,
    `),t("span",{class:"hljs-attr"},"columns"),s(`: [
      {
        `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'四川省'"),s(`,
        `),t("span",{class:"hljs-attr"},"children"),s(`: [
          {
            `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'成都市'"),s(`,
            `),t("span",{class:"hljs-attr"},"children"),s(`: [
              {
                `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'温江区'"),s(`,
              },
              {
                `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'青羊区'"),s(`,
              },
            ],
          },
        ],
      },
      {
        `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'江苏省'"),s(`,
        `),t("span",{class:"hljs-attr"},"children"),s(`: [
          {
            `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'无锡市'"),s(`,
            `),t("span",{class:"hljs-attr"},"children"),s(`: [
              {
                `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'新吴区'"),s(`,
              },
              {
                `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'滨湖区'"),s(`,
              },
            ],
          },
        ],
      },
    ],
    `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"onChange"),s("("),t("span",{class:"hljs-params"},"values, indexes"),s(")")]),s(` {
      Snackbar(`),t("span",{class:"hljs-string"},[s("`values: "),t("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),t("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
    },
  })
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"picker"'),s(">")]),s("Cascade Column Picker"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),$={class:"card"},T={id:"AreaPicker"},D=t("p",null,"The component library provides cascade data of Chinese provinces and cities, which can be used directly.",-1),B=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Picker, Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" columns "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui/json/area.json'"),s(`

`),t("span",{class:"hljs-keyword"},"async"),s(),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"picker"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),t("span",{class:"hljs-keyword"},"const"),s(" { state, texts, indexes } = "),t("span",{class:"hljs-keyword"},"await"),s(` Picker({
    `),t("span",{class:"hljs-attr"},"cascade"),s(": "),t("span",{class:"hljs-literal"},"true"),s(`,
    columns,
    `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"onChange"),s("("),t("span",{class:"hljs-params"},"values, indexes"),s(")")]),s(` {
      Snackbar(`),t("span",{class:"hljs-string"},[s("`values: "),t("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),t("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
    },
  })
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"picker"'),s(">")]),s("Area Picker"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),O={class:"card"},V={id:"ColumnsCount"},E=t("p",null,[s("The maximum number of displayed columns can be set via "),t("code",null,"columnsCount"),s(", which is very useful in cascading mode.")],-1),M=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Picker, Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" columns "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui/json/area.json'"),s(`

`),t("span",{class:"hljs-keyword"},"async"),s(),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"picker"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),t("span",{class:"hljs-keyword"},"const"),s(" { state, texts, indexes } = "),t("span",{class:"hljs-keyword"},"await"),s(` Picker({
    `),t("span",{class:"hljs-attr"},"cascade"),s(": "),t("span",{class:"hljs-literal"},"true"),s(`,
    columns,
    `),t("span",{class:"hljs-attr"},"columnsCount"),s(": "),t("span",{class:"hljs-number"},"2"),s(`,
    `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"onChange"),s("("),t("span",{class:"hljs-params"},"values, indexes"),s(")")]),s(` {
      Snackbar(`),t("span",{class:"hljs-string"},[s("`values: "),t("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),t("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
    },
  })
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"picker"'),s(">")]),s("Columns Count"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),N={class:"card"},W={id:"ValueMapping"},z=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Picker, Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"async"),s(),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"picker"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),t("span",{class:"hljs-keyword"},"const"),s(" { state, values, indexes, options } = "),t("span",{class:"hljs-keyword"},"await"),s(` Picker({ 
    `),t("span",{class:"hljs-attr"},"columns"),s(`: [
      [
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"1"),s(` },
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"2"),s(` },
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"3"),s(` },
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"4"),s(` },
      ],
      [
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"1"),s(` },
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"2"),s(` },
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"3"),s(` },
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"4"),s(` },
      ],
      [
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"1"),s(` },
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"2"),s(` },
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"3"),s(` },
        { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"4"),s(` },
      ],
    ],
    `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"onChange"),s("("),t("span",{class:"hljs-params"},"values, indexes"),s(")")]),s(` {
      Snackbar(`),t("span",{class:"hljs-string"},[s("`values: "),t("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),t("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
    },
  })
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"picker"'),s(">")]),s("Value Mapping"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),I=t("h2",null,"Component Call",-1),K={class:"card"},H={id:"SingleColumnPicker"},R=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` columns = ref([
  [
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'E'"),s(` }     
  ]
])

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleChange"),s("("),t("span",{class:"hljs-params"},"values, indexes"),s(") ")]),s(`{
  Snackbar(`),t("span",{class:"hljs-string"},[s("`values: "),t("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),t("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-picker"),s(),t("span",{class:"hljs-attr"},":columns"),s("="),t("span",{class:"hljs-string"},'"columns"'),s(" @"),t("span",{class:"hljs-attr"},"change"),s("="),t("span",{class:"hljs-string"},'"handleChange"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),U={class:"card"},q={id:"MultipleColumnPicker"},F=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` columns = ref([
  [
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'E'"),s(` }
  ],
  [
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'E'"),s(` }
  ],
  [
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'E'"),s(` }
  ]
])

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleChange"),s("("),t("span",{class:"hljs-params"},"values, indexes"),s(") ")]),s(`{
  Snackbar(`),t("span",{class:"hljs-string"},[s("`values: "),t("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),t("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-picker"),s(),t("span",{class:"hljs-attr"},":columns"),s("="),t("span",{class:"hljs-string"},'"columns"'),s(" @"),t("span",{class:"hljs-attr"},"change"),s("="),t("span",{class:"hljs-string"},'"handleChange"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),Q={class:"card"},G={id:"CascadeColumnPicker"},J=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` columns = ref([
  {
    `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'四川省'"),s(`,
    `),t("span",{class:"hljs-attr"},"children"),s(`: [
      {
        `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'成都市'"),s(`,
        `),t("span",{class:"hljs-attr"},"children"),s(`: [
          {
            `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'温江区'"),s(`,
          },
          {
            `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'青羊区'"),s(`,
          },
        ],
      },
    ],
  },
  {
    `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'江苏省'"),s(`,
    `),t("span",{class:"hljs-attr"},"children"),s(`: [
      {
        `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'无锡市'"),s(`,
        `),t("span",{class:"hljs-attr"},"children"),s(`: [
          {
            `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'新吴区'"),s(`,
          },
          {
            `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'滨湖区'"),s(`,
          },
        ],
      },
    ],
  },
])

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleChange"),s("("),t("span",{class:"hljs-params"},"values, indexes"),s(") ")]),s(`{
  Snackbar(`),t("span",{class:"hljs-string"},[s("`values: "),t("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),t("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-picker"),s(),t("span",{class:"hljs-attr"},"cascade"),s(),t("span",{class:"hljs-attr"},":columns"),s("="),t("span",{class:"hljs-string"},'"columns"'),s(" @"),t("span",{class:"hljs-attr"},"change"),s("="),t("span",{class:"hljs-string"},'"handleChange"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),L={class:"card"},X={id:"AreaPicker"},Y=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" area "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui/json/area.json'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` columns = ref(area)

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleChange"),s("("),t("span",{class:"hljs-params"},"values, indexes"),s(") ")]),s(`{
  Snackbar(`),t("span",{class:"hljs-string"},[s("`values: "),t("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),t("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-picker"),s(),t("span",{class:"hljs-attr"},"cascade"),s(),t("span",{class:"hljs-attr"},":columns"),s("="),t("span",{class:"hljs-string"},'"columns"'),s(" @"),t("span",{class:"hljs-attr"},"change"),s("="),t("span",{class:"hljs-string"},'"handleChange"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),Z={class:"card"},ss={id:"ColumnsCount"},ts=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" area "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui/json/area.json'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` columns = ref(area)

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleChange"),s("("),t("span",{class:"hljs-params"},"values, indexes"),s(") ")]),s(`{
  Snackbar(`),t("span",{class:"hljs-string"},[s("`values: "),t("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),t("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-picker"),s(),t("span",{class:"hljs-attr"},"cascade"),s(),t("span",{class:"hljs-attr"},":columns"),s("="),t("span",{class:"hljs-string"},'"columns"'),s(),t("span",{class:"hljs-attr"},":columns-count"),s("="),t("span",{class:"hljs-string"},'"2"'),s(" @"),t("span",{class:"hljs-attr"},"change"),s("="),t("span",{class:"hljs-string"},'"handleChange"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),as={class:"card"},ns={id:"ValueMapping"},ls=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` columns = ref([
  [
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"1"),s(` },
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"2"),s(` },
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"3"),s(` },
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"4"),s(` },
  ],
  [
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"1"),s(` },
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"2"),s(` },
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"3"),s(` },
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"4"),s(` },
  ],
  [
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"1"),s(` },
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"2"),s(` },
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"3"),s(` },
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(", "),t("span",{class:"hljs-attr"},"value"),s(": "),t("span",{class:"hljs-number"},"4"),s(` },
  ],
])

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleChange"),s("("),t("span",{class:"hljs-params"},"values, indexes"),s(") ")]),s(`{
  Snackbar(`),t("span",{class:"hljs-string"},[s("`values: "),t("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),t("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-picker"),s(),t("span",{class:"hljs-attr"},":columns"),s("="),t("span",{class:"hljs-string"},'"columns"'),s(" @"),t("span",{class:"hljs-attr"},"change"),s("="),t("span",{class:"hljs-string"},'"handleChange"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),es={class:"card"},cs={id:"Two-waybinding"},ds=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" values = ref(["),t("span",{class:"hljs-string"},"'A'"),s(", "),t("span",{class:"hljs-string"},"'B'"),s(", "),t("span",{class:"hljs-string"},"'C'"),s(`])
`),t("span",{class:"hljs-keyword"},"const"),s(` columns = ref([
  [
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'E'"),s(` }
  ],
  [
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'E'"),s(` }
  ],
  [
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'A'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'B'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'C'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'D'"),s(` }, 
    { `),t("span",{class:"hljs-attr"},"text"),s(": "),t("span",{class:"hljs-string"},"'E'"),s(` }
  ]
])

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"resetValues"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  values.value = [`),t("span",{class:"hljs-string"},"'A'"),s(", "),t("span",{class:"hljs-string"},"'B'"),s(", "),t("span",{class:"hljs-string"},"'C'"),s(`]
}

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleChange"),s("("),t("span",{class:"hljs-params"},"values, indexes"),s(") ")]),s(`{
  Snackbar(`),t("span",{class:"hljs-string"},[s("`values: "),t("span",{class:"hljs-subst"},"${values.toString()}"),s(", indexes: "),t("span",{class:"hljs-subst"},"${indexes.toString()}"),s("`")]),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-space"),s(),t("span",{class:"hljs-attr"},"direction"),s("="),t("span",{class:"hljs-string"},'"column"'),s(),t("span",{class:"hljs-attr"},"size"),s("="),t("span",{class:"hljs-string"},'"large"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"resetValues"'),s(">")]),s("values: {{ values }} Click Reset"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-picker"),s(),t("span",{class:"hljs-attr"},":columns"),s("="),t("span",{class:"hljs-string"},'"columns"'),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"values"'),s(" @"),t("span",{class:"hljs-attr"},"change"),s("="),t("span",{class:"hljs-string"},'"handleChange"'),s(" />")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),rs=t("h2",null,"API",-1),os={class:"card"},ps={id:"Props"},hs=c("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>Selected values</td><td><em>(string | number)[]</em></td><td><code>[]</code></td></tr><tr><td><code>columns</code></td><td>Column content</td><td><em>PickerColumnOption[] | PickerColumnOption[][]</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>Title</td><td><em>string</em></td><td><code>Pick it</code></td></tr><tr><td><code>text-key</code></td><td>Text key</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>value-key</code></td><td>Value key</td><td><em>string</em></td><td><code>value</code></td></tr><tr><td><code>children-key</code></td><td>Children key</td><td><em>string</em></td><td><code>children</code></td></tr><tr><td><code>toolbar</code></td><td>Whether to display the upper toolbar</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>Whether to enable cascade mode</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>option-height</code></td><td>The height of the option</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>option-count</code></td><td>Number of visible columns</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>columns-count</code> <em><strong>3.3.11</strong></em></td><td>Number of visible columns</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>confirm-button-text</code></td><td>Confirm button text</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td><code>cancel-button-text</code></td><td>Cancel button text</td><td><em>string</em></td><td><code>Cancel</code></td></tr><tr><td><code>confirm-button-text-color</code></td><td>Confirm button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-text-color</code></td><td>Cancel button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>close-on-key-escape</code></td><td>Whether to support keyboard ESC to close the picker</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table>",1),is={class:"card"},js={id:"PickerOptions"},us=c("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>columns</code></td><td>Column content</td><td><em>PickerColumnOption[] | PickerColumnOption[][]</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>Column content</td><td><em>string</em></td><td><code>Pick it</code></td></tr><tr><td><code>textKey</code></td><td>Text key</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>valueKey</code></td><td>Value key</td><td><em>string</em></td><td><code>value</code></td></tr><tr><td><code>childrenKey</code></td><td>Children key</td><td><em>string</em></td><td><code>children</code></td></tr><tr><td><code>toolbar</code></td><td>Whether to display the upper toolbar</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>Whether to enable cascade mode</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>optionHeight</code></td><td>The height of the option</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>optionCount</code></td><td>Number of visible options</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>columnsCount</code> <em><strong>3.3.11</strong></em></td><td>Number of visible columns(defaults to display total columns)</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>confirmButtonText</code></td><td>Confirm button text</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td><code>cancelButtonText</code></td><td>Cancel button text</td><td><em>string</em></td><td><code>Cancel</code></td></tr><tr><td><code>confirmButtonTextColor</code></td><td>Confirm button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonTextColor</code></td><td>Cancel button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>closeOnClickOverlay</code></td><td>Whether to click the overlay to close the picker</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnKeyEscape</code></td><td>Whether to support keyboard ESC to close the picker</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>safeArea</code></td><td>Whether to enable bottom safety zone adaptation</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onClickOverlay</code></td><td>Click overlay callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>Popup open callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Popup open-animation ends callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Popup close callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Close pop-up layer callback when animation ends</td><td><em>() =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onChange</code></td><td>Pick callbacks when content changes</td><td><em>(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onConfirm</code></td><td>Pick callbacks when confirm</td><td><em>(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onCancel</code></td><td>Pick callbacks when cancel</td><td><em>(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onKeyEscape</code></td><td>Triggered when click keyboard ESC</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table>",1),ms={class:"card"},gs={id:"PickerColumnOption"},ks=c("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>text</code></td><td>Text</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>Value</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>children</code></td><td>Children list</td><td><em>PickerColumnOption[]</em></td><td><code>-</code></td></tr><tr><td><code>className</code></td><td>Class name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>textClassName</code></td><td>Text Class Name</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table>",1),bs={class:"card"},vs={id:"Methods"},_s=c("<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>confirm</code></td><td>Immediately stop scrolling and trigger the <code>confirm</code> event</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>Immediately stop scrolling and trigger the <code>cancel</code> event</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>",1),xs={class:"card"},ys={id:"Events"},fs=c("<table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Triggered when the pick content changes</td><td><code>values: (string | number)[]</code> Selected Values <br> <code>indexes: number[]</code> Selected indexes <br> <code>options: PickerColumnOption[]</code> Selected options</td></tr><tr><td><code>cancel</code></td><td>Triggered when you click the cancel button</td><td><code>values: (string | number)[]</code> Selected Values <br> <code>indexes: number[]</code> Selected indexes <br> <code>options: PickerColumnOption[]</code> Selected options</td></tr><tr><td><code>confirm</code></td><td>Triggered when you click the confirm button</td><td><code>values: (string | number)[]</code> Selected Values <br> <code>indexes: number[]</code> Selected indexes <br> <code>options: PickerColumnOption[]</code> Selected options</td></tr><tr><td><code>key-escape</code></td><td>Triggered when click keyboard ESC</td><td><code>-</code></td></tr></tbody></table>",1),Cs={class:"card"},ws={id:"Slots"},Ss=c("<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>title</code></td><td>Title content</td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>Cancel button content</td><td><code>-</code></td></tr><tr><td><code>confirm</code></td><td>Confirm button content</td><td><code>-</code></td></tr></tbody></table>",1),Ps={class:"card"},As={id:"StyleVariables"},$s=c('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--picker-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--picker-toolbar-height</code></td><td><code>44px</code></td></tr><tr><td><code>--picker-confirm-button-text-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--picker-cancel-button-text-color</code></td><td><code>#888</code></td></tr><tr><td><code>--picker-picked-border</code></td><td><code>1px solid var(--color-outline)</code></td></tr><tr><td><code>--picker-title-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--picker-title-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--picker-option-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--picker-option-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--picker-toolbar-padding</code></td><td><code>0 4px</code></td></tr><tr><td><code>--picker-mask-background-image</code></td><td><code>linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)),linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4))</code></td></tr></tbody></table>',2);function Ts(Ds,Bs,Os,Vs,Es,Ms){const l=d("router-link"),e=d("var-site-code-example");return p(),o("div",i,[j,t("div",u,[t("h3",m,[a(l,{to:"#Intro"},{default:n(()=>[s("#")]),_:1}),s("Intro")]),g]),k,t("div",b,[t("h3",v,[a(l,{to:"#SingleColumnPicker"},{default:n(()=>[s("#")]),_:1}),s("Single Column Picker")]),_,a(e,null,{default:n(()=>[x]),_:1})]),t("div",y,[t("h3",f,[a(l,{to:"#MultipleColumnPicker"},{default:n(()=>[s("#")]),_:1}),s("Multiple Column Picker")]),a(e,null,{default:n(()=>[C]),_:1})]),t("div",w,[t("h3",S,[a(l,{to:"#CascadeColumnPicker"},{default:n(()=>[s("#")]),_:1}),s("Cascade Column Picker")]),P,a(e,null,{default:n(()=>[A]),_:1})]),t("div",$,[t("h3",T,[a(l,{to:"#AreaPicker"},{default:n(()=>[s("#")]),_:1}),s("Area Picker")]),D,a(e,null,{default:n(()=>[B]),_:1})]),t("div",O,[t("h3",V,[a(l,{to:"#ColumnsCount"},{default:n(()=>[s("#")]),_:1}),s("Columns Count")]),E,a(e,null,{default:n(()=>[M]),_:1})]),t("div",N,[t("h3",W,[a(l,{to:"#ValueMapping"},{default:n(()=>[s("#")]),_:1}),s("Value Mapping")]),a(e,null,{default:n(()=>[z]),_:1})]),I,t("div",K,[t("h3",H,[a(l,{to:"#SingleColumnPicker"},{default:n(()=>[s("#")]),_:1}),s("Single Column Picker")]),a(e,null,{default:n(()=>[R]),_:1})]),t("div",U,[t("h3",q,[a(l,{to:"#MultipleColumnPicker"},{default:n(()=>[s("#")]),_:1}),s("Multiple Column Picker")]),a(e,null,{default:n(()=>[F]),_:1})]),t("div",Q,[t("h3",G,[a(l,{to:"#CascadeColumnPicker"},{default:n(()=>[s("#")]),_:1}),s("Cascade Column Picker")]),a(e,null,{default:n(()=>[J]),_:1})]),t("div",L,[t("h3",X,[a(l,{to:"#AreaPicker"},{default:n(()=>[s("#")]),_:1}),s("Area Picker")]),a(e,null,{default:n(()=>[Y]),_:1})]),t("div",Z,[t("h3",ss,[a(l,{to:"#ColumnsCount"},{default:n(()=>[s("#")]),_:1}),s("Columns Count")]),a(e,null,{default:n(()=>[ts]),_:1})]),t("div",as,[t("h3",ns,[a(l,{to:"#ValueMapping"},{default:n(()=>[s("#")]),_:1}),s("Value Mapping")]),a(e,null,{default:n(()=>[ls]),_:1})]),t("div",es,[t("h3",cs,[a(l,{to:"#Two-waybinding"},{default:n(()=>[s("#")]),_:1}),s("Two-way binding")]),a(e,null,{default:n(()=>[ds]),_:1})]),rs,t("div",os,[t("h3",ps,[a(l,{to:"#Props"},{default:n(()=>[s("#")]),_:1}),s("Props")]),hs]),t("div",is,[t("h3",js,[a(l,{to:"#PickerOptions"},{default:n(()=>[s("#")]),_:1}),s("Picker Options")]),us]),t("div",ms,[t("h3",gs,[a(l,{to:"#PickerColumnOption"},{default:n(()=>[s("#")]),_:1}),s("PickerColumnOption")]),ks]),t("div",bs,[t("h3",vs,[a(l,{to:"#Methods"},{default:n(()=>[s("#")]),_:1}),s("Methods")]),_s]),t("div",xs,[t("h3",ys,[a(l,{to:"#Events"},{default:n(()=>[s("#")]),_:1}),s("Events")]),fs]),t("div",Cs,[t("h3",ws,[a(l,{to:"#Slots"},{default:n(()=>[s("#")]),_:1}),s("Slots")]),Ss]),t("div",Ps,[t("h3",As,[a(l,{to:"#StyleVariables"},{default:n(()=>[s("#")]),_:1}),s("Style Variables")]),$s])])}const Ws=r(h,[["render",Ts]]);export{Ws as default};
