import{_ as r,b as d,e as o,m as p,p as t,q as a,w as n,P as s,Z as c}from"./index-vwO9GBzB.js";const h={components:{}},i={class:"varlet-site-doc"},j=t("h1",null,"Picker",-1),u={class:"card"},m={id:"Intro"},g=t("p",null,"Two calling methods, function and component, are provided. It also supports cascade mode and can handle multi-level linkage.",-1),k={class:"card"},b={id:"Notice"},v=t("p",null,[s("In order to make the API more friendly, this component was refactored in "),t("code",null,"2.17.0"),s(", but break changes were introduced. For the old version documentation, please "),t("a",{href:"https://github.com/varletjs/varlet/blob/v2.16.7/packages/varlet-ui/src/picker/docs/en-US.md"},"check here"),s(".")],-1),x=t("h2",null,"Function call",-1),_={class:"card"},y={id:"SingleColumnPicker"},f=t("p",null,[s("The function will return the information selected by the user and the user's last action "),t("code",null,"state"),s(". "),t("code",null,"state"),s(" may be "),t("code",null,"confirm"),s(", "),t("code",null,"cancel"),s(", "),t("code",null,"close"),s(".")],-1),C=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
`)])],-1),w={class:"card"},S={id:"MultipleColumnPicker"},P=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
`)])],-1),A={class:"card"},D={id:"CascadeColumnPicker"},B=t("p",null,[s("Set the "),t("code",null,"cascade"),s(" property to enable cascading scrolling.")],-1),$=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
`)])],-1),T={class:"card"},V={id:"AreaPicker"},O=t("p",null,"The component library provides cascade data of Chinese provinces and cities, which can be used directly.",-1),M=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
`)])],-1),E={class:"card"},N={id:"ValueMapping"},I=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
`)])],-1),z=t("h2",null,"Component Call",-1),W={class:"card"},K={id:"SingleColumnPicker"},U=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
`)])],-1),F={class:"card"},H={id:"MultipleColumnPicker"},R=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
`)])],-1),q={class:"card"},Z={id:"CascadeColumnPicker"},G=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
`)])],-1),J={class:"card"},L={id:"AreaPicker"},Q=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
`)])],-1),X={class:"card"},Y={id:"ValueMapping"},ss=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
`)])],-1),ts={class:"card"},as={id:"Two-waybinding"},ns=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
`)])],-1),ls=t("h2",null,"API",-1),es={class:"card"},cs={id:"Props"},ds=c("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>Selected values</td><td><em>(string | number)[]</em></td><td><code>[]</code></td></tr><tr><td><code>columns</code></td><td>Column content</td><td><em>PickerColumnOption[] | PickerColumnOption[][]</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>Title</td><td><em>string</em></td><td><code>Pick it</code></td></tr><tr><td><code>text-key</code></td><td>Text key</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>value-key</code></td><td>Value key</td><td><em>string</em></td><td><code>value</code></td></tr><tr><td><code>children-key</code></td><td>Children key</td><td><em>string</em></td><td><code>children</code></td></tr><tr><td><code>toolbar</code></td><td>Whether to display the upper toolbar</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>Whether to enable cascade mode</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>option-height</code></td><td>The height of the option</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>option-count</code></td><td>Number of visible options</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>confirm-button-text</code></td><td>Confirm button text</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td><code>cancel-button-text</code></td><td>Cancel button text</td><td><em>string</em></td><td><code>Cancel</code></td></tr><tr><td><code>confirm-button-text-color</code></td><td>Confirm button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-text-color</code></td><td>Cancel button text color</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table>",1),rs={class:"card"},os={id:"PickerOptions"},ps=c("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>columns</code></td><td>Column content</td><td><em>PickerColumnOption[] | PickerColumnOption[][]</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>Column content</td><td><em>string</em></td><td><code>Pick it</code></td></tr><tr><td><code>textKey</code></td><td>Text key</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>valueKey</code></td><td>Value key</td><td><em>string</em></td><td><code>value</code></td></tr><tr><td><code>childrenKey</code></td><td>Children key</td><td><em>string</em></td><td><code>children</code></td></tr><tr><td><code>toolbar</code></td><td>Whether to display the upper toolbar</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>Whether to enable cascade mode</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>optionHeight</code></td><td>The height of the option</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>optionCount</code></td><td>Number of visible options</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>confirmButtonText</code></td><td>Confirm button text</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td><code>cancelButtonText</code></td><td>Cancel button text</td><td><em>string</em></td><td><code>Cancel</code></td></tr><tr><td><code>confirmButtonTextColor</code></td><td>Confirm button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonTextColor</code></td><td>Cancel button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>closeOnClickOverlay</code></td><td>Whether to click the overlay to close the picker</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>safeArea</code></td><td>Whether to enable bottom safety zone adaptation</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onClickOverlay</code></td><td>Click overlay callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>Popup open callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Popup open-animation ends callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Popup close callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Close pop-up layer callback when animation ends</td><td><em>() =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onChange</code></td><td>Pick callbacks when content changes</td><td><em>(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onConfirm</code></td><td>Pick callbacks when confirm</td><td><em>(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onCancel</code></td><td>Pick callbacks when cancel</td><td><em>(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr></tbody></table>",1),hs={class:"card"},is={id:"PickerColumnOption"},js=c("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>text</code></td><td>Text</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>Value</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>children</code></td><td>Children list</td><td><em>PickerColumnOption[]</em></td><td><code>-</code></td></tr><tr><td><code>className</code></td><td>Class name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>textClassName</code></td><td>Text Class Name</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table>",1),us={class:"card"},ms={id:"Methods"},gs=c("<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>confirm</code></td><td>Immediately stop scrolling and trigger the <code>confirm</code> event</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>Immediately stop scrolling and trigger the <code>cancel</code> event</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>",1),ks={class:"card"},bs={id:"Events"},vs=c("<table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Triggered when the pick content changes</td><td><code>values: (string | number)[]</code> Selected Values <br> <code>indexes: number[]</code> Selected indexes <br> <code>options: PickerColumnOption[]</code> Selected options</td></tr><tr><td><code>cancel</code></td><td>Triggered when you click the cancel button</td><td><code>values: (string | number)[]</code> Selected Values <br> <code>indexes: number[]</code> Selected indexes <br> <code>options: PickerColumnOption[]</code> Selected options</td></tr><tr><td><code>confirm</code></td><td>Triggered when you click the confirm button</td><td><code>values: (string | number)[]</code> Selected Values <br> <code>indexes: number[]</code> Selected indexes <br> <code>options: PickerColumnOption[]</code> Selected options</td></tr></tbody></table>",1),xs={class:"card"},_s={id:"Slots"},ys=c("<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>title</code></td><td>Title content</td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>Cancel button content</td><td><code>-</code></td></tr><tr><td><code>confirm</code></td><td>Confirm button content</td><td><code>-</code></td></tr></tbody></table>",1),fs={class:"card"},Cs={id:"StyleVariables"},ws=c('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--picker-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--picker-toolbar-height</code></td><td><code>44px</code></td></tr><tr><td><code>--picker-confirm-button-text-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--picker-cancel-button-text-color</code></td><td><code>#888</code></td></tr><tr><td><code>--picker-picked-border</code></td><td><code>1px solid rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--picker-title-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--picker-title-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--picker-option-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--picker-option-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--picker-toolbar-padding</code></td><td><code>0 4px</code></td></tr><tr><td><code>--picker-mask-background-image</code></td><td><code>linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)),linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4))</code></td></tr></tbody></table>',2);function Ss(Ps,As,Ds,Bs,$s,Ts){const l=d("router-link"),e=d("var-site-code-example");return o(),p("div",i,[j,t("div",u,[t("h3",m,[a(l,{to:"#Intro"},{default:n(()=>[s("#")]),_:1}),s("Intro")]),g]),t("div",k,[t("h3",b,[a(l,{to:"#Notice"},{default:n(()=>[s("#")]),_:1}),s("Notice")]),v]),x,t("div",_,[t("h3",y,[a(l,{to:"#SingleColumnPicker"},{default:n(()=>[s("#")]),_:1}),s("Single Column Picker")]),f,a(e,null,{default:n(()=>[C]),_:1})]),t("div",w,[t("h3",S,[a(l,{to:"#MultipleColumnPicker"},{default:n(()=>[s("#")]),_:1}),s("Multiple Column Picker")]),a(e,null,{default:n(()=>[P]),_:1})]),t("div",A,[t("h3",D,[a(l,{to:"#CascadeColumnPicker"},{default:n(()=>[s("#")]),_:1}),s("Cascade Column Picker")]),B,a(e,null,{default:n(()=>[$]),_:1})]),t("div",T,[t("h3",V,[a(l,{to:"#AreaPicker"},{default:n(()=>[s("#")]),_:1}),s("Area Picker")]),O,a(e,null,{default:n(()=>[M]),_:1})]),t("div",E,[t("h3",N,[a(l,{to:"#ValueMapping"},{default:n(()=>[s("#")]),_:1}),s("Value Mapping")]),a(e,null,{default:n(()=>[I]),_:1})]),z,t("div",W,[t("h3",K,[a(l,{to:"#SingleColumnPicker"},{default:n(()=>[s("#")]),_:1}),s("Single Column Picker")]),a(e,null,{default:n(()=>[U]),_:1})]),t("div",F,[t("h3",H,[a(l,{to:"#MultipleColumnPicker"},{default:n(()=>[s("#")]),_:1}),s("Multiple Column Picker")]),a(e,null,{default:n(()=>[R]),_:1})]),t("div",q,[t("h3",Z,[a(l,{to:"#CascadeColumnPicker"},{default:n(()=>[s("#")]),_:1}),s("Cascade Column Picker")]),a(e,null,{default:n(()=>[G]),_:1})]),t("div",J,[t("h3",L,[a(l,{to:"#AreaPicker"},{default:n(()=>[s("#")]),_:1}),s("Area Picker")]),a(e,null,{default:n(()=>[Q]),_:1})]),t("div",X,[t("h3",Y,[a(l,{to:"#ValueMapping"},{default:n(()=>[s("#")]),_:1}),s("Value Mapping")]),a(e,null,{default:n(()=>[ss]),_:1})]),t("div",ts,[t("h3",as,[a(l,{to:"#Two-waybinding"},{default:n(()=>[s("#")]),_:1}),s("Two-way binding")]),a(e,null,{default:n(()=>[ns]),_:1})]),ls,t("div",es,[t("h3",cs,[a(l,{to:"#Props"},{default:n(()=>[s("#")]),_:1}),s("Props")]),ds]),t("div",rs,[t("h3",os,[a(l,{to:"#PickerOptions"},{default:n(()=>[s("#")]),_:1}),s("Picker Options")]),ps]),t("div",hs,[t("h3",is,[a(l,{to:"#PickerColumnOption"},{default:n(()=>[s("#")]),_:1}),s("PickerColumnOption")]),js]),t("div",us,[t("h3",ms,[a(l,{to:"#Methods"},{default:n(()=>[s("#")]),_:1}),s("Methods")]),gs]),t("div",ks,[t("h3",bs,[a(l,{to:"#Events"},{default:n(()=>[s("#")]),_:1}),s("Events")]),vs]),t("div",xs,[t("h3",_s,[a(l,{to:"#Slots"},{default:n(()=>[s("#")]),_:1}),s("Slots")]),ys]),t("div",fs,[t("h3",Cs,[a(l,{to:"#StyleVariables"},{default:n(()=>[s("#")]),_:1}),s("Style Variables")]),ws])])}const Os=r(h,[["render",Ss]]);export{Os as default};
