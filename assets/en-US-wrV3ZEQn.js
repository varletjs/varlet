import{b as o,m as p,p as t,q as n,Q as s,w as l,$ as r,e as d,h as i}from"./index-DtCrA0ro.js";const h={components:{}},j={class:"varlet-site-doc"},u={class:"card"},m={id:"Intro"},g={class:"card"},k={id:"SingleColumnPicker"},b={class:"card"},v={id:"MultipleColumnPicker"},x={class:"card"},y={id:"CascadeColumnPicker"},f={class:"card"},C={id:"AreaPicker"},w={class:"card"},S={id:"ColumnsCount"},P={class:"card"},$={id:"ValueMapping"},A={class:"card"},T={id:"SingleColumnPicker"},D={class:"card"},B={id:"MultipleColumnPicker"},O={class:"card"},V={id:"CascadeColumnPicker"},E={class:"card"},M={id:"AreaPicker"},N={class:"card"},W={id:"ColumnsCount"},z={class:"card"},I={id:"ValueMapping"},K={class:"card"},H={id:"Two-waybinding"},R={class:"card"},U={id:"Props"},q={class:"card"},F={id:"PickerOptions"},Q={class:"card"},G={id:"PickerColumnOption"},J={class:"card"},L={id:"Methods"},X={class:"card"},Y={id:"Events"},Z={class:"card"},_={id:"Slots"},ss={class:"card"},ts={id:"StyleVariables"};function as(ns,a,ls,es,cs,rs){const e=d("router-link"),c=d("var-site-code-example");return i(),p("div",j,[a[67]||(a[67]=t("h1",null,"Picker",-1)),t("div",u,[t("h3",m,[n(e,{to:"#Intro"},{default:l(()=>[...a[0]||(a[0]=[s("#",-1)])]),_:1}),a[1]||(a[1]=s("Intro",-1))]),a[2]||(a[2]=t("p",null,"Two calling methods, function and component, are provided. It also supports cascade mode and can handle multi-level linkage.",-1))]),a[68]||(a[68]=t("h2",null,"Function call",-1)),t("div",g,[t("h3",k,[n(e,{to:"#SingleColumnPicker"},{default:l(()=>[...a[3]||(a[3]=[s("#",-1)])]),_:1}),a[4]||(a[4]=s("Single Column Picker",-1))]),a[6]||(a[6]=t("p",null,[s("The function will return the information selected by the user and the user's last action "),t("code",null,"state"),s(". "),t("code",null,"state"),s(" may be "),t("code",null,"confirm"),s(", "),t("code",null,"cancel"),s(", "),t("code",null,"close"),s(".")],-1)),n(c,null,{default:l(()=>[...a[5]||(a[5]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
`)])],-1)])]),_:1})]),t("div",b,[t("h3",v,[n(e,{to:"#MultipleColumnPicker"},{default:l(()=>[...a[7]||(a[7]=[s("#",-1)])]),_:1}),a[8]||(a[8]=s("Multiple Column Picker",-1))]),n(c,null,{default:l(()=>[...a[9]||(a[9]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
`)])],-1)])]),_:1})]),t("div",x,[t("h3",y,[n(e,{to:"#CascadeColumnPicker"},{default:l(()=>[...a[10]||(a[10]=[s("#",-1)])]),_:1}),a[11]||(a[11]=s("Cascade Column Picker",-1))]),a[13]||(a[13]=t("p",null,[s("Set the "),t("code",null,"cascade"),s(" property to enable cascading scrolling.")],-1)),n(c,null,{default:l(()=>[...a[12]||(a[12]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
`)])],-1)])]),_:1})]),t("div",f,[t("h3",C,[n(e,{to:"#AreaPicker"},{default:l(()=>[...a[14]||(a[14]=[s("#",-1)])]),_:1}),a[15]||(a[15]=s("Area Picker",-1))]),a[17]||(a[17]=t("p",null,"The component library provides cascade data of Chinese provinces and cities, which can be used directly.",-1)),n(c,null,{default:l(()=>[...a[16]||(a[16]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
`)])],-1)])]),_:1})]),t("div",w,[t("h3",S,[n(e,{to:"#ColumnsCount"},{default:l(()=>[...a[18]||(a[18]=[s("#",-1)])]),_:1}),a[19]||(a[19]=s("Columns Count",-1))]),a[21]||(a[21]=t("p",null,[s("The maximum number of displayed columns can be set via "),t("code",null,"columnsCount"),s(", which is very useful in cascading mode.")],-1)),n(c,null,{default:l(()=>[...a[20]||(a[20]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
`)])],-1)])]),_:1})]),t("div",P,[t("h3",$,[n(e,{to:"#ValueMapping"},{default:l(()=>[...a[22]||(a[22]=[s("#",-1)])]),_:1}),a[23]||(a[23]=s("Value Mapping",-1))]),n(c,null,{default:l(()=>[...a[24]||(a[24]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
`)])],-1)])]),_:1})]),a[69]||(a[69]=t("h2",null,"Component Call",-1)),t("div",A,[t("h3",T,[n(e,{to:"#SingleColumnPicker"},{default:l(()=>[...a[25]||(a[25]=[s("#",-1)])]),_:1}),a[26]||(a[26]=s("Single Column Picker",-1))]),n(c,null,{default:l(()=>[...a[27]||(a[27]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
`)])],-1)])]),_:1})]),t("div",D,[t("h3",B,[n(e,{to:"#MultipleColumnPicker"},{default:l(()=>[...a[28]||(a[28]=[s("#",-1)])]),_:1}),a[29]||(a[29]=s("Multiple Column Picker",-1))]),n(c,null,{default:l(()=>[...a[30]||(a[30]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
`)])],-1)])]),_:1})]),t("div",O,[t("h3",V,[n(e,{to:"#CascadeColumnPicker"},{default:l(()=>[...a[31]||(a[31]=[s("#",-1)])]),_:1}),a[32]||(a[32]=s("Cascade Column Picker",-1))]),n(c,null,{default:l(()=>[...a[33]||(a[33]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
`)])],-1)])]),_:1})]),t("div",E,[t("h3",M,[n(e,{to:"#AreaPicker"},{default:l(()=>[...a[34]||(a[34]=[s("#",-1)])]),_:1}),a[35]||(a[35]=s("Area Picker",-1))]),n(c,null,{default:l(()=>[...a[36]||(a[36]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
`)])],-1)])]),_:1})]),t("div",N,[t("h3",W,[n(e,{to:"#ColumnsCount"},{default:l(()=>[...a[37]||(a[37]=[s("#",-1)])]),_:1}),a[38]||(a[38]=s("Columns Count",-1))]),n(c,null,{default:l(()=>[...a[39]||(a[39]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
`)])],-1)])]),_:1})]),t("div",z,[t("h3",I,[n(e,{to:"#ValueMapping"},{default:l(()=>[...a[40]||(a[40]=[s("#",-1)])]),_:1}),a[41]||(a[41]=s("Value Mapping",-1))]),n(c,null,{default:l(()=>[...a[42]||(a[42]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
`)])],-1)])]),_:1})]),t("div",K,[t("h3",H,[n(e,{to:"#Two-waybinding"},{default:l(()=>[...a[43]||(a[43]=[s("#",-1)])]),_:1}),a[44]||(a[44]=s("Two-way binding",-1))]),n(c,null,{default:l(()=>[...a[45]||(a[45]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
`)])],-1)])]),_:1})]),a[70]||(a[70]=t("h2",null,"API",-1)),t("div",R,[t("h3",U,[n(e,{to:"#Props"},{default:l(()=>[...a[46]||(a[46]=[s("#",-1)])]),_:1}),a[47]||(a[47]=s("Props",-1))]),a[48]||(a[48]=r("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>Selected values</td><td><em>(string | number)[]</em></td><td><code>[]</code></td></tr><tr><td><code>columns</code></td><td>Column content</td><td><em>PickerColumnOption[] | PickerColumnOption[][]</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>Title</td><td><em>string</em></td><td><code>Pick it</code></td></tr><tr><td><code>text-key</code></td><td>Text key</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>value-key</code></td><td>Value key</td><td><em>string</em></td><td><code>value</code></td></tr><tr><td><code>children-key</code></td><td>Children key</td><td><em>string</em></td><td><code>children</code></td></tr><tr><td><code>toolbar</code></td><td>Whether to display the upper toolbar</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>Whether to enable cascade mode</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>option-height</code></td><td>The height of the option</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>option-count</code></td><td>Number of visible columns</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>columns-count</code> <em><strong>3.3.11</strong></em></td><td>Number of visible columns</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>confirm-button-text</code></td><td>Confirm button text</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td><code>cancel-button-text</code></td><td>Cancel button text</td><td><em>string</em></td><td><code>Cancel</code></td></tr><tr><td><code>confirm-button-text-color</code></td><td>Confirm button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-text-color</code></td><td>Cancel button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>close-on-key-escape</code></td><td>Whether to support keyboard ESC to close the picker</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table>",1))]),t("div",q,[t("h3",F,[n(e,{to:"#PickerOptions"},{default:l(()=>[...a[49]||(a[49]=[s("#",-1)])]),_:1}),a[50]||(a[50]=s("Picker Options",-1))]),a[51]||(a[51]=r("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>columns</code></td><td>Column content</td><td><em>PickerColumnOption[] | PickerColumnOption[][]</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>Column content</td><td><em>string</em></td><td><code>Pick it</code></td></tr><tr><td><code>textKey</code></td><td>Text key</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>valueKey</code></td><td>Value key</td><td><em>string</em></td><td><code>value</code></td></tr><tr><td><code>childrenKey</code></td><td>Children key</td><td><em>string</em></td><td><code>children</code></td></tr><tr><td><code>toolbar</code></td><td>Whether to display the upper toolbar</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>Whether to enable cascade mode</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>optionHeight</code></td><td>The height of the option</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>optionCount</code></td><td>Number of visible options</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>columnsCount</code> <em><strong>3.3.11</strong></em></td><td>Number of visible columns(defaults to display total columns)</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>confirmButtonText</code></td><td>Confirm button text</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td><code>cancelButtonText</code></td><td>Cancel button text</td><td><em>string</em></td><td><code>Cancel</code></td></tr><tr><td><code>confirmButtonTextColor</code></td><td>Confirm button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonTextColor</code></td><td>Cancel button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>closeOnClickOverlay</code></td><td>Whether to click the overlay to close the picker</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnKeyEscape</code></td><td>Whether to support keyboard ESC to close the picker</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>safeArea</code></td><td>Whether to enable bottom safety zone adaptation</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onClickOverlay</code></td><td>Click overlay callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>Popup open callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Popup open-animation ends callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Popup close callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Close pop-up layer callback when animation ends</td><td><em>() =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onChange</code></td><td>Pick callbacks when content changes</td><td><em>(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onConfirm</code></td><td>Pick callbacks when confirm</td><td><em>(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onCancel</code></td><td>Pick callbacks when cancel</td><td><em>(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onKeyEscape</code></td><td>Triggered when click keyboard ESC</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table>",1))]),t("div",Q,[t("h3",G,[n(e,{to:"#PickerColumnOption"},{default:l(()=>[...a[52]||(a[52]=[s("#",-1)])]),_:1}),a[53]||(a[53]=s("PickerColumnOption",-1))]),a[54]||(a[54]=r("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>text</code></td><td>Text</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>Value</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>children</code></td><td>Children list</td><td><em>PickerColumnOption[]</em></td><td><code>-</code></td></tr><tr><td><code>className</code></td><td>Class name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>textClassName</code></td><td>Text Class Name</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table>",1))]),t("div",J,[t("h3",L,[n(e,{to:"#Methods"},{default:l(()=>[...a[55]||(a[55]=[s("#",-1)])]),_:1}),a[56]||(a[56]=s("Methods",-1))]),a[57]||(a[57]=r("<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>confirm</code></td><td>Immediately stop scrolling and trigger the <code>confirm</code> event</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>Immediately stop scrolling and trigger the <code>cancel</code> event</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>",1))]),t("div",X,[t("h3",Y,[n(e,{to:"#Events"},{default:l(()=>[...a[58]||(a[58]=[s("#",-1)])]),_:1}),a[59]||(a[59]=s("Events",-1))]),a[60]||(a[60]=r("<table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Triggered when the pick content changes</td><td><code>values: (string | number)[]</code> Selected Values <br> <code>indexes: number[]</code> Selected indexes <br> <code>options: PickerColumnOption[]</code> Selected options</td></tr><tr><td><code>cancel</code></td><td>Triggered when you click the cancel button</td><td><code>values: (string | number)[]</code> Selected Values <br> <code>indexes: number[]</code> Selected indexes <br> <code>options: PickerColumnOption[]</code> Selected options</td></tr><tr><td><code>confirm</code></td><td>Triggered when you click the confirm button</td><td><code>values: (string | number)[]</code> Selected Values <br> <code>indexes: number[]</code> Selected indexes <br> <code>options: PickerColumnOption[]</code> Selected options</td></tr><tr><td><code>key-escape</code></td><td>Triggered when click keyboard ESC</td><td><code>-</code></td></tr></tbody></table>",1))]),t("div",Z,[t("h3",_,[n(e,{to:"#Slots"},{default:l(()=>[...a[61]||(a[61]=[s("#",-1)])]),_:1}),a[62]||(a[62]=s("Slots",-1))]),a[63]||(a[63]=r("<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>title</code></td><td>Title content</td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>Cancel button content</td><td><code>-</code></td></tr><tr><td><code>confirm</code></td><td>Confirm button content</td><td><code>-</code></td></tr></tbody></table>",1))]),t("div",ss,[t("h3",ts,[n(e,{to:"#StyleVariables"},{default:l(()=>[...a[64]||(a[64]=[s("#",-1)])]),_:1}),a[65]||(a[65]=s("Style Variables",-1))]),a[66]||(a[66]=r('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--picker-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--picker-toolbar-height</code></td><td><code>44px</code></td></tr><tr><td><code>--picker-confirm-button-text-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--picker-cancel-button-text-color</code></td><td><code>#888</code></td></tr><tr><td><code>--picker-picked-border</code></td><td><code>1px solid var(--color-outline)</code></td></tr><tr><td><code>--picker-title-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--picker-title-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--picker-option-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--picker-option-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--picker-toolbar-padding</code></td><td><code>0 4px</code></td></tr><tr><td><code>--picker-mask-background-image</code></td><td><code>linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)),linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4))</code></td></tr></tbody></table>',2))])])}const os=o(h,[["render",as]]);export{os as default};
