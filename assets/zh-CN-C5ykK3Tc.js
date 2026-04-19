import{L as e,N as t,W as n,c as r,d as ee,g as i,h as a,m as o}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as s}from"./_plugin-vue_export-helper-V-yks4gF.js";var c={components:{}},te={class:`varlet-site-doc`},l={class:`card`},u={id:`jie4shao4`},d={class:`card`},f={id:`dan1lie4xuan3ze2`},p={class:`card`},m={id:`duo1lie4xuan3ze2`},h={class:`card`},g={id:`ji2lian2xuan3ze2`},_={class:`card`},v={id:`di4qu1xuan3ze2`},y={class:`card`},b={id:`lie4shu4liang4`},x={class:`card`},S={id:`zhi2ying4she4`},C={class:`card`},w={id:`dan1lie4xuan3ze2`},T={class:`card`},E={id:`duo1lie4xuan3ze2`},D={class:`card`},O={id:`ji2lian2xuan3ze2`},k={class:`card`},A={id:`di4qu1xuan3ze2`},j={class:`card`},ne={id:`lie4shu4liang4`},M={class:`card`},N={id:`zhi2de0ying4she4`},P={class:`card`},F={id:`shuang1xiang4bang3ding4`},I={class:`card`},L={id:`shu3xing4`},R={class:`card`},z={id:`PickerOptions`},B={class:`card`},V={id:`PickerColumnOption`},H={class:`card`},U={id:`fang1fa3`},W={class:`card`},G={id:`shi4jian4`},K={class:`card`},q={id:`cha1cao2`},J={class:`card`},Y={id:`yang4shi4bian4liang4`};function X(s,c,X,Z,re,ie){let Q=e(`router-link`),$=e(`var-site-code-example`);return t(),ee(`div`,te,[c[67]||=r(`h1`,null,`多列选择器`,-1),r(`div`,l,[r(`h3`,u,[i(Q,{to:`#jie4shao4`},{default:n(()=>[...c[0]||=[a(`#`,-1)]]),_:1}),c[1]||=a(`介绍`,-1)]),c[2]||=r(`p`,null,`提供了函数和组件两种调用方式。同时支持级联模式，可以处理多级联动。`,-1)]),c[68]||=r(`h2`,null,`函数调用`,-1),r(`div`,d,[r(`h3`,f,[i(Q,{to:`#dan1lie4xuan3ze2`},{default:n(()=>[...c[3]||=[a(`#`,-1)]]),_:1}),c[4]||=a(`单列选择`,-1)]),c[6]||=r(`p`,null,[a(`函数会返回用户选择的信息和用户最后的动作 `),r(`code`,null,`state`),a(`。 `),r(`code`,null,`state`),a(` 可能是 `),r(`code`,null,`confirm`),a(`, `),r(`code`,null,`cancel`),a(`, `),r(`code`,null,`close`),a(`。`)],-1),i($,null,{default:n(()=>[...c[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { Picker, Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),a(`

`),r(`span`,{class:`hljs-keyword`},`async`),a(),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),a(),r(`span`,{class:`hljs-title`},`picker`),a(`(`),r(`span`,{class:`hljs-params`}),a(`) `)]),a(`{
  `),r(`span`,{class:`hljs-keyword`},`const`),a(` { state, values, indexes, options } = `),r(`span`,{class:`hljs-keyword`},`await`),a(` Picker({ 
    `),r(`span`,{class:`hljs-attr`},`columns`),a(`: [
      [
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'A'`),a(` }, 
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'B'`),a(` }, 
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'C'`),a(` }, 
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'D'`),a(` }, 
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'E'`),a(` }
      ]
    ],
    `),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-title`},`onChange`),a(`(`),r(`span`,{class:`hljs-params`},`values, indexes`),a(`)`)]),a(` {
      Snackbar(`),r(`span`,{class:`hljs-string`},[a("`values: "),r(`span`,{class:`hljs-subst`},"${values.toString()}"),a(`, indexes: `),r(`span`,{class:`hljs-subst`},"${indexes.toString()}"),a("`")]),a(`)
    },
  })
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"primary"`),a(),r(`span`,{class:`hljs-attr`},`block`),a(` @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"picker"`),a(`>`)]),a(`单列选择`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,p,[r(`h3`,m,[i(Q,{to:`#duo1lie4xuan3ze2`},{default:n(()=>[...c[7]||=[a(`#`,-1)]]),_:1}),c[8]||=a(`多列选择`,-1)]),i($,null,{default:n(()=>[...c[9]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { Picker, Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),a(`

`),r(`span`,{class:`hljs-keyword`},`async`),a(),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),a(),r(`span`,{class:`hljs-title`},`picker`),a(`(`),r(`span`,{class:`hljs-params`}),a(`) `)]),a(`{
  `),r(`span`,{class:`hljs-keyword`},`const`),a(` { state, values, indexes, options } = `),r(`span`,{class:`hljs-keyword`},`await`),a(` Picker({ 
    `),r(`span`,{class:`hljs-attr`},`columns`),a(`: [
      [
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'A'`),a(` }, 
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'B'`),a(` }, 
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'C'`),a(` }, 
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'D'`),a(` }, 
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'E'`),a(` }
      ],
       [
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'A'`),a(` }, 
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'B'`),a(` }, 
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'C'`),a(` }, 
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'D'`),a(` }, 
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'E'`),a(` }
      ],
       [
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'A'`),a(` }, 
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'B'`),a(` }, 
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'C'`),a(` }, 
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'D'`),a(` }, 
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'E'`),a(` }
      ]
    ],
    `),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-title`},`onChange`),a(`(`),r(`span`,{class:`hljs-params`},`values, indexes`),a(`)`)]),a(` {
      Snackbar(`),r(`span`,{class:`hljs-string`},[a("`values: "),r(`span`,{class:`hljs-subst`},"${values.toString()}"),a(`, indexes: `),r(`span`,{class:`hljs-subst`},"${indexes.toString()}"),a("`")]),a(`)
    },
  })
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"primary"`),a(),r(`span`,{class:`hljs-attr`},`block`),a(` @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"picker"`),a(`>`)]),a(`多列选择`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[i(Q,{to:`#ji2lian2xuan3ze2`},{default:n(()=>[...c[10]||=[a(`#`,-1)]]),_:1}),c[11]||=a(`级联选择`,-1)]),c[13]||=r(`p`,null,[a(`设置 `),r(`code`,null,`cascade`),a(` 属性开启级联滚动。`)],-1),i($,null,{default:n(()=>[...c[12]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { Picker, Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),a(`

`),r(`span`,{class:`hljs-keyword`},`async`),a(),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),a(),r(`span`,{class:`hljs-title`},`picker`),a(`(`),r(`span`,{class:`hljs-params`}),a(`) `)]),a(`{
  `),r(`span`,{class:`hljs-keyword`},`const`),a(` { state, texts, indexes } = `),r(`span`,{class:`hljs-keyword`},`await`),a(` Picker({
    `),r(`span`,{class:`hljs-attr`},`cascade`),a(`: `),r(`span`,{class:`hljs-literal`},`true`),a(`,
    `),r(`span`,{class:`hljs-attr`},`columns`),a(`: [
      {
        `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'四川省'`),a(`,
        `),r(`span`,{class:`hljs-attr`},`children`),a(`: [
          {
            `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'成都市'`),a(`,
            `),r(`span`,{class:`hljs-attr`},`children`),a(`: [
              {
                `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'温江区'`),a(`,
              },
              {
                `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'青羊区'`),a(`,
              },
            ],
          },
        ],
      },
      {
        `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'江苏省'`),a(`,
        `),r(`span`,{class:`hljs-attr`},`children`),a(`: [
          {
            `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'无锡市'`),a(`,
            `),r(`span`,{class:`hljs-attr`},`children`),a(`: [
              {
                `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'新吴区'`),a(`,
              },
              {
                `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'滨湖区'`),a(`,
              },
            ],
          },
        ],
      },
    ],
    `),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-title`},`onChange`),a(`(`),r(`span`,{class:`hljs-params`},`values, indexes`),a(`)`)]),a(` {
      Snackbar(`),r(`span`,{class:`hljs-string`},[a("`values: "),r(`span`,{class:`hljs-subst`},"${values.toString()}"),a(`, indexes: `),r(`span`,{class:`hljs-subst`},"${indexes.toString()}"),a("`")]),a(`)
    },
  })
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"primary"`),a(),r(`span`,{class:`hljs-attr`},`block`),a(` @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"picker"`),a(`>`)]),a(`级联选择`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,_,[r(`h3`,v,[i(Q,{to:`#di4qu1xuan3ze2`},{default:n(()=>[...c[14]||=[a(`#`,-1)]]),_:1}),c[15]||=a(`地区选择`,-1)]),c[17]||=r(`p`,null,`组件库提供了中国省市区的级联数据，可以直接使用。`,-1),i($,null,{default:n(()=>[...c[16]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { Picker, Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` columns `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'@varlet/ui/json/area.json'`),a(`

`),r(`span`,{class:`hljs-keyword`},`async`),a(),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),a(),r(`span`,{class:`hljs-title`},`picker`),a(`(`),r(`span`,{class:`hljs-params`}),a(`) `)]),a(`{
  `),r(`span`,{class:`hljs-keyword`},`const`),a(` { state, texts, indexes } = `),r(`span`,{class:`hljs-keyword`},`await`),a(` Picker({
    `),r(`span`,{class:`hljs-attr`},`cascade`),a(`: `),r(`span`,{class:`hljs-literal`},`true`),a(`,
    columns,
    `),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-title`},`onChange`),a(`(`),r(`span`,{class:`hljs-params`},`values, indexes`),a(`)`)]),a(` {
      Snackbar(`),r(`span`,{class:`hljs-string`},[a("`values: "),r(`span`,{class:`hljs-subst`},"${values.toString()}"),a(`, indexes: `),r(`span`,{class:`hljs-subst`},"${indexes.toString()}"),a("`")]),a(`)
    },
  })
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"primary"`),a(),r(`span`,{class:`hljs-attr`},`block`),a(` @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"picker"`),a(`>`)]),a(`地区选择`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,y,[r(`h3`,b,[i(Q,{to:`#lie4shu4liang4`},{default:n(()=>[...c[18]||=[a(`#`,-1)]]),_:1}),c[19]||=a(`列数量`,-1)]),c[21]||=r(`p`,null,[a(`通过 `),r(`code`,null,`columnsCount`),a(` 设置最大显示列的数量，在级联模式下十分有用。`)],-1),i($,null,{default:n(()=>[...c[20]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { Picker, Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` columns `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'@varlet/ui/json/area.json'`),a(`

`),r(`span`,{class:`hljs-keyword`},`async`),a(),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),a(),r(`span`,{class:`hljs-title`},`picker`),a(`(`),r(`span`,{class:`hljs-params`}),a(`) `)]),a(`{
  `),r(`span`,{class:`hljs-keyword`},`const`),a(` { state, texts, indexes } = `),r(`span`,{class:`hljs-keyword`},`await`),a(` Picker({
    `),r(`span`,{class:`hljs-attr`},`cascade`),a(`: `),r(`span`,{class:`hljs-literal`},`true`),a(`,
    columns,
    `),r(`span`,{class:`hljs-attr`},`columnsCount`),a(`: `),r(`span`,{class:`hljs-number`},`2`),a(`,
    `),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-title`},`onChange`),a(`(`),r(`span`,{class:`hljs-params`},`values, indexes`),a(`)`)]),a(` {
      Snackbar(`),r(`span`,{class:`hljs-string`},[a("`values: "),r(`span`,{class:`hljs-subst`},"${values.toString()}"),a(`, indexes: `),r(`span`,{class:`hljs-subst`},"${indexes.toString()}"),a("`")]),a(`)
    },
  })
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"primary"`),a(),r(`span`,{class:`hljs-attr`},`block`),a(` @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"picker"`),a(`>`)]),a(`配置显示列`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,x,[r(`h3`,S,[i(Q,{to:`#zhi2ying4she4`},{default:n(()=>[...c[22]||=[a(`#`,-1)]]),_:1}),c[23]||=a(`值映射`,-1)]),i($,null,{default:n(()=>[...c[24]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { Picker, Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),a(`

`),r(`span`,{class:`hljs-keyword`},`async`),a(),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),a(),r(`span`,{class:`hljs-title`},`picker`),a(`(`),r(`span`,{class:`hljs-params`}),a(`) `)]),a(`{
  `),r(`span`,{class:`hljs-keyword`},`const`),a(` { state, values, indexes, options } = `),r(`span`,{class:`hljs-keyword`},`await`),a(` Picker({ 
    `),r(`span`,{class:`hljs-attr`},`columns`),a(`: [
      [
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'A'`),a(`, `),r(`span`,{class:`hljs-attr`},`value`),a(`: `),r(`span`,{class:`hljs-number`},`1`),a(` },
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'B'`),a(`, `),r(`span`,{class:`hljs-attr`},`value`),a(`: `),r(`span`,{class:`hljs-number`},`2`),a(` },
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'C'`),a(`, `),r(`span`,{class:`hljs-attr`},`value`),a(`: `),r(`span`,{class:`hljs-number`},`3`),a(` },
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'D'`),a(`, `),r(`span`,{class:`hljs-attr`},`value`),a(`: `),r(`span`,{class:`hljs-number`},`4`),a(` },
      ],
      [
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'A'`),a(`, `),r(`span`,{class:`hljs-attr`},`value`),a(`: `),r(`span`,{class:`hljs-number`},`1`),a(` },
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'B'`),a(`, `),r(`span`,{class:`hljs-attr`},`value`),a(`: `),r(`span`,{class:`hljs-number`},`2`),a(` },
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'C'`),a(`, `),r(`span`,{class:`hljs-attr`},`value`),a(`: `),r(`span`,{class:`hljs-number`},`3`),a(` },
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'D'`),a(`, `),r(`span`,{class:`hljs-attr`},`value`),a(`: `),r(`span`,{class:`hljs-number`},`4`),a(` },
      ],
      [
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'A'`),a(`, `),r(`span`,{class:`hljs-attr`},`value`),a(`: `),r(`span`,{class:`hljs-number`},`1`),a(` },
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'B'`),a(`, `),r(`span`,{class:`hljs-attr`},`value`),a(`: `),r(`span`,{class:`hljs-number`},`2`),a(` },
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'C'`),a(`, `),r(`span`,{class:`hljs-attr`},`value`),a(`: `),r(`span`,{class:`hljs-number`},`3`),a(` },
        { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'D'`),a(`, `),r(`span`,{class:`hljs-attr`},`value`),a(`: `),r(`span`,{class:`hljs-number`},`4`),a(` },
      ],
    ],
    `),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-title`},`onChange`),a(`(`),r(`span`,{class:`hljs-params`},`values, indexes`),a(`)`)]),a(` {
      Snackbar(`),r(`span`,{class:`hljs-string`},[a("`values: "),r(`span`,{class:`hljs-subst`},"${values.toString()}"),a(`, indexes: `),r(`span`,{class:`hljs-subst`},"${indexes.toString()}"),a("`")]),a(`)
    },
  })
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"primary"`),a(),r(`span`,{class:`hljs-attr`},`block`),a(` @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"picker"`),a(`>`)]),a(`值映射`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),c[69]||=r(`h2`,null,`组件调用`,-1),r(`div`,C,[r(`h3`,w,[i(Q,{to:`#dan1lie4xuan3ze2`},{default:n(()=>[...c[25]||=[a(`#`,-1)]]),_:1}),c[26]||=a(`单列选择`,-1)]),i($,null,{default:n(()=>[...c[27]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` columns = ref([
  [
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'A'`),a(` }, 
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'B'`),a(` }, 
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'C'`),a(` }, 
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'D'`),a(` }, 
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'E'`),a(` }     
  ]
])

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),a(),r(`span`,{class:`hljs-title`},`handleChange`),a(`(`),r(`span`,{class:`hljs-params`},`values, indexes`),a(`) `)]),a(`{
  Snackbar(`),r(`span`,{class:`hljs-string`},[a("`values: "),r(`span`,{class:`hljs-subst`},"${values.toString()}"),a(`, indexes: `),r(`span`,{class:`hljs-subst`},"${indexes.toString()}"),a("`")]),a(`)
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-picker`),a(),r(`span`,{class:`hljs-attr`},`:columns`),a(`=`),r(`span`,{class:`hljs-string`},`"columns"`),a(` @`),r(`span`,{class:`hljs-attr`},`change`),a(`=`),r(`span`,{class:`hljs-string`},`"handleChange"`),a(`/>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,T,[r(`h3`,E,[i(Q,{to:`#duo1lie4xuan3ze2`},{default:n(()=>[...c[28]||=[a(`#`,-1)]]),_:1}),c[29]||=a(`多列选择`,-1)]),i($,null,{default:n(()=>[...c[30]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` columns = ref([
  [
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'A'`),a(` }, 
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'B'`),a(` }, 
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'C'`),a(` }, 
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'D'`),a(` }, 
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'E'`),a(` }
  ],
  [
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'A'`),a(` }, 
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'B'`),a(` }, 
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'C'`),a(` }, 
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'D'`),a(` }, 
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'E'`),a(` }
  ],
  [
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'A'`),a(` }, 
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'B'`),a(` }, 
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'C'`),a(` }, 
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'D'`),a(` }, 
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'E'`),a(` }
  ]
])

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),a(),r(`span`,{class:`hljs-title`},`handleChange`),a(`(`),r(`span`,{class:`hljs-params`},`values, indexes`),a(`) `)]),a(`{
  Snackbar(`),r(`span`,{class:`hljs-string`},[a("`values: "),r(`span`,{class:`hljs-subst`},"${values.toString()}"),a(`, indexes: `),r(`span`,{class:`hljs-subst`},"${indexes.toString()}"),a("`")]),a(`)
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-picker`),a(),r(`span`,{class:`hljs-attr`},`:columns`),a(`=`),r(`span`,{class:`hljs-string`},`"columns"`),a(` @`),r(`span`,{class:`hljs-attr`},`change`),a(`=`),r(`span`,{class:`hljs-string`},`"handleChange"`),a(` />`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,D,[r(`h3`,O,[i(Q,{to:`#ji2lian2xuan3ze2`},{default:n(()=>[...c[31]||=[a(`#`,-1)]]),_:1}),c[32]||=a(`级联选择`,-1)]),i($,null,{default:n(()=>[...c[33]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` columns = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'四川省'`),a(`,
    `),r(`span`,{class:`hljs-attr`},`children`),a(`: [
      {
        `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'成都市'`),a(`,
        `),r(`span`,{class:`hljs-attr`},`children`),a(`: [
          {
            `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'温江区'`),a(`,
          },
          {
            `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'青羊区'`),a(`,
          },
        ],
      },
    ],
  },
  {
    `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'江苏省'`),a(`,
    `),r(`span`,{class:`hljs-attr`},`children`),a(`: [
      {
        `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'无锡市'`),a(`,
        `),r(`span`,{class:`hljs-attr`},`children`),a(`: [
          {
            `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'新吴区'`),a(`,
          },
          {
            `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'滨湖区'`),a(`,
          },
        ],
      },
    ],
  },
])

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),a(),r(`span`,{class:`hljs-title`},`handleChange`),a(`(`),r(`span`,{class:`hljs-params`},`values, indexes`),a(`) `)]),a(`{
  Snackbar(`),r(`span`,{class:`hljs-string`},[a("`values: "),r(`span`,{class:`hljs-subst`},"${values.toString()}"),a(`, indexes: `),r(`span`,{class:`hljs-subst`},"${indexes.toString()}"),a("`")]),a(`)
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-picker`),a(),r(`span`,{class:`hljs-attr`},`cascade`),a(),r(`span`,{class:`hljs-attr`},`:columns`),a(`=`),r(`span`,{class:`hljs-string`},`"columns"`),a(` @`),r(`span`,{class:`hljs-attr`},`change`),a(`=`),r(`span`,{class:`hljs-string`},`"handleChange"`),a(` />`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,k,[r(`h3`,A,[i(Q,{to:`#di4qu1xuan3ze2`},{default:n(()=>[...c[34]||=[a(`#`,-1)]]),_:1}),c[35]||=a(`地区选择`,-1)]),i($,null,{default:n(()=>[...c[36]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` area `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'@varlet/ui/json/area.json'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` columns = ref(area)

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),a(),r(`span`,{class:`hljs-title`},`handleChange`),a(`(`),r(`span`,{class:`hljs-params`},`values, indexes`),a(`) `)]),a(`{
  Snackbar(`),r(`span`,{class:`hljs-string`},[a("`values: "),r(`span`,{class:`hljs-subst`},"${values.toString()}"),a(`, indexes: `),r(`span`,{class:`hljs-subst`},"${indexes.toString()}"),a("`")]),a(`)
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-picker`),a(),r(`span`,{class:`hljs-attr`},`cascade`),a(),r(`span`,{class:`hljs-attr`},`:columns`),a(`=`),r(`span`,{class:`hljs-string`},`"columns"`),a(` @`),r(`span`,{class:`hljs-attr`},`change`),a(`=`),r(`span`,{class:`hljs-string`},`"handleChange"`),a(` />`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,j,[r(`h3`,ne,[i(Q,{to:`#lie4shu4liang4`},{default:n(()=>[...c[37]||=[a(`#`,-1)]]),_:1}),c[38]||=a(`列数量`,-1)]),i($,null,{default:n(()=>[...c[39]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` area `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'@varlet/ui/json/area.json'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` columns = ref(area)

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),a(),r(`span`,{class:`hljs-title`},`handleChange`),a(`(`),r(`span`,{class:`hljs-params`},`values, indexes`),a(`) `)]),a(`{
  Snackbar(`),r(`span`,{class:`hljs-string`},[a("`values: "),r(`span`,{class:`hljs-subst`},"${values.toString()}"),a(`, indexes: `),r(`span`,{class:`hljs-subst`},"${indexes.toString()}"),a("`")]),a(`)
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-picker`),a(),r(`span`,{class:`hljs-attr`},`cascade`),a(),r(`span`,{class:`hljs-attr`},`:columns`),a(`=`),r(`span`,{class:`hljs-string`},`"columns"`),a(),r(`span`,{class:`hljs-attr`},`:columns-count`),a(`=`),r(`span`,{class:`hljs-string`},`"2"`),a(` @`),r(`span`,{class:`hljs-attr`},`change`),a(`=`),r(`span`,{class:`hljs-string`},`"handleChange"`),a(` />`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,M,[r(`h3`,N,[i(Q,{to:`#zhi2de0ying4she4`},{default:n(()=>[...c[40]||=[a(`#`,-1)]]),_:1}),c[41]||=a(`值的映射`,-1)]),i($,null,{default:n(()=>[...c[42]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` columns = ref([
  [
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'A'`),a(`, `),r(`span`,{class:`hljs-attr`},`value`),a(`: `),r(`span`,{class:`hljs-number`},`1`),a(` },
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'B'`),a(`, `),r(`span`,{class:`hljs-attr`},`value`),a(`: `),r(`span`,{class:`hljs-number`},`2`),a(` },
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'C'`),a(`, `),r(`span`,{class:`hljs-attr`},`value`),a(`: `),r(`span`,{class:`hljs-number`},`3`),a(` },
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'D'`),a(`, `),r(`span`,{class:`hljs-attr`},`value`),a(`: `),r(`span`,{class:`hljs-number`},`4`),a(` },
  ],
  [
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'A'`),a(`, `),r(`span`,{class:`hljs-attr`},`value`),a(`: `),r(`span`,{class:`hljs-number`},`1`),a(` },
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'B'`),a(`, `),r(`span`,{class:`hljs-attr`},`value`),a(`: `),r(`span`,{class:`hljs-number`},`2`),a(` },
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'C'`),a(`, `),r(`span`,{class:`hljs-attr`},`value`),a(`: `),r(`span`,{class:`hljs-number`},`3`),a(` },
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'D'`),a(`, `),r(`span`,{class:`hljs-attr`},`value`),a(`: `),r(`span`,{class:`hljs-number`},`4`),a(` },
  ],
  [
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'A'`),a(`, `),r(`span`,{class:`hljs-attr`},`value`),a(`: `),r(`span`,{class:`hljs-number`},`1`),a(` },
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'B'`),a(`, `),r(`span`,{class:`hljs-attr`},`value`),a(`: `),r(`span`,{class:`hljs-number`},`2`),a(` },
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'C'`),a(`, `),r(`span`,{class:`hljs-attr`},`value`),a(`: `),r(`span`,{class:`hljs-number`},`3`),a(` },
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'D'`),a(`, `),r(`span`,{class:`hljs-attr`},`value`),a(`: `),r(`span`,{class:`hljs-number`},`4`),a(` },
  ],
])

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),a(),r(`span`,{class:`hljs-title`},`handleChange`),a(`(`),r(`span`,{class:`hljs-params`},`values, indexes`),a(`) `)]),a(`{
  Snackbar(`),r(`span`,{class:`hljs-string`},[a("`values: "),r(`span`,{class:`hljs-subst`},"${values.toString()}"),a(`, indexes: `),r(`span`,{class:`hljs-subst`},"${indexes.toString()}"),a("`")]),a(`)
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-picker`),a(),r(`span`,{class:`hljs-attr`},`:columns`),a(`=`),r(`span`,{class:`hljs-string`},`"columns"`),a(` @`),r(`span`,{class:`hljs-attr`},`change`),a(`=`),r(`span`,{class:`hljs-string`},`"handleChange"`),a(` />`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,P,[r(`h3`,F,[i(Q,{to:`#shuang1xiang4bang3ding4`},{default:n(()=>[...c[43]||=[a(`#`,-1)]]),_:1}),c[44]||=a(`双向绑定`,-1)]),i($,null,{default:n(()=>[...c[45]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` values = ref([`),r(`span`,{class:`hljs-string`},`'A'`),a(`, `),r(`span`,{class:`hljs-string`},`'B'`),a(`, `),r(`span`,{class:`hljs-string`},`'C'`),a(`])
`),r(`span`,{class:`hljs-keyword`},`const`),a(` columns = ref([
  [
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'A'`),a(` }, 
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'B'`),a(` }, 
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'C'`),a(` }, 
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'D'`),a(` }, 
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'E'`),a(` }
  ],
  [
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'A'`),a(` }, 
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'B'`),a(` }, 
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'C'`),a(` }, 
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'D'`),a(` }, 
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'E'`),a(` }
  ],
  [
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'A'`),a(` }, 
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'B'`),a(` }, 
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'C'`),a(` }, 
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'D'`),a(` }, 
    { `),r(`span`,{class:`hljs-attr`},`text`),a(`: `),r(`span`,{class:`hljs-string`},`'E'`),a(` }
  ]
])

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),a(),r(`span`,{class:`hljs-title`},`resetValues`),a(`(`),r(`span`,{class:`hljs-params`}),a(`) `)]),a(`{
  values.value = [`),r(`span`,{class:`hljs-string`},`'A'`),a(`, `),r(`span`,{class:`hljs-string`},`'B'`),a(`, `),r(`span`,{class:`hljs-string`},`'C'`),a(`]
}

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),a(),r(`span`,{class:`hljs-title`},`handleChange`),a(`(`),r(`span`,{class:`hljs-params`},`values, indexes`),a(`) `)]),a(`{
  Snackbar(`),r(`span`,{class:`hljs-string`},[a("`values: "),r(`span`,{class:`hljs-subst`},"${values.toString()}"),a(`, indexes: `),r(`span`,{class:`hljs-subst`},"${indexes.toString()}"),a("`")]),a(`)
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-space`),a(),r(`span`,{class:`hljs-attr`},`direction`),a(`=`),r(`span`,{class:`hljs-string`},`"column"`),a(),r(`span`,{class:`hljs-attr`},`size`),a(`=`),r(`span`,{class:`hljs-string`},`"large"`),a(`>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"primary"`),a(` @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"resetValues"`),a(`>`)]),a(`values: {{ values }} 点击重置`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-picker`),a(),r(`span`,{class:`hljs-attr`},`:columns`),a(`=`),r(`span`,{class:`hljs-string`},`"columns"`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"values"`),a(` @`),r(`span`,{class:`hljs-attr`},`change`),a(`=`),r(`span`,{class:`hljs-string`},`"handleChange"`),a(` />`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-space`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),c[70]||=r(`h2`,null,`API`,-1),r(`div`,I,[r(`h3`,L,[i(Q,{to:`#shu3xing4`},{default:n(()=>[...c[46]||=[a(`#`,-1)]]),_:1}),c[47]||=a(`属性`,-1)]),c[48]||=o(`<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>绑定的值</td><td><em>(string | number)[]</em></td><td><code>[]</code></td></tr><tr><td><code>columns</code></td><td>列内容</td><td><em>PickerColumnOption[] | PickerColumnOption[][]</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>标题</td><td><em>string</em></td><td><code>请选择</code></td></tr><tr><td><code>text-key</code></td><td>文本的属性 key</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>value-key</code></td><td>值的属性 key</td><td><em>string</em></td><td><code>value</code></td></tr><tr><td><code>children-key</code></td><td>级联子列表 key</td><td><em>string</em></td><td><code>children</code></td></tr><tr><td><code>toolbar</code></td><td>是否显示上方工具栏</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>是否开启级联模式</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>option-height</code></td><td>选项的高度(px rem)</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>option-count</code></td><td>可见的选项个数</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>columns-count</code> <em><strong>3.3.11</strong></em></td><td>最大显示列数</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>confirm-button-text</code></td><td>确认按钮文字</td><td><em>string</em></td><td><code>确认</code></td></tr><tr><td><code>cancel-button-text</code></td><td>取消按钮文字</td><td><em>string</em></td><td><code>取消</code></td></tr><tr><td><code>confirm-button-text-color</code></td><td>确认按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-text-color</code></td><td>取消按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>close-on-key-escape</code></td><td>是否支持键盘 ESC 关闭选择器</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table>`,1)]),r(`div`,R,[r(`h3`,z,[i(Q,{to:`#PickerOptions`},{default:n(()=>[...c[49]||=[a(`#`,-1)]]),_:1}),c[50]||=a(`Picker Options`,-1)]),c[51]||=o(`<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>columns</code></td><td>列内容</td><td><em>PickerColumnOption[] | PickerColumnOption[][]</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>标题</td><td><em>string</em></td><td><code>请选择</code></td></tr><tr><td><code>textKey</code></td><td>文本的属性 key</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>valueKey</code></td><td>值的属性 key</td><td><em>string</em></td><td><code>value</code></td></tr><tr><td><code>childrenKey</code></td><td>级联子列表 key</td><td><em>string</em></td><td><code>children</code></td></tr><tr><td><code>toolbar</code></td><td>是否显示上方工具栏</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>是否开启级联模式</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>optionHeight</code></td><td>选项的高度</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>optionCount</code></td><td>可见的选项个数</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>columnsCount</code> <em><strong>3.3.11</strong></em></td><td>最大显示列数</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>confirmButtonText</code></td><td>确认按钮文字</td><td><em>string</em></td><td><code>确认</code></td></tr><tr><td><code>cancelButtonText</code></td><td>取消按钮文字</td><td><em>string</em></td><td><code>取消</code></td></tr><tr><td><code>confirmButtonTextColor</code></td><td>确认按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonTextColor</code></td><td>取消按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>closeOnClickOverlay</code></td><td>是否点击遮罩层关闭弹出层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnKeyEscape</code></td><td>是否支持键盘 ESC 关闭选择器</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>safeArea</code></td><td>是否开启底部安全区适配</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onClickOverlay</code></td><td>遮罩层点击回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>弹出层开启回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>弹出层开启动画结束回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>弹出层关闭回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>关闭弹出层动画结束时回调</td><td><em>() =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onChange</code></td><td>选择内容变化时回调</td><td><em>(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onConfirm</code></td><td>点击确认按钮时触发</td><td><em>(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onCancel</code></td><td>点击取消按钮时触发</td><td><em>(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onKeyEscape</code></td><td>点击键盘 ESC 时触发</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,B,[r(`h3`,V,[i(Q,{to:`#PickerColumnOption`},{default:n(()=>[...c[52]||=[a(`#`,-1)]]),_:1}),c[53]||=a(`PickerColumnOption`,-1)]),c[54]||=o(`<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>text</code></td><td>文本</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>值</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>children</code></td><td>子列表</td><td><em>PickerColumnOption[]</em></td><td><code>-</code></td></tr><tr><td><code>className</code></td><td>附加的类名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>textClassName</code></td><td>文本附加的类名</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,H,[r(`h3`,U,[i(Q,{to:`#fang1fa3`},{default:n(()=>[...c[55]||=[a(`#`,-1)]]),_:1}),c[56]||=a(`方法`,-1)]),c[57]||=o(`<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>confirm</code></td><td>立刻停止滚动并触发 confirm 事件</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>立刻停止滚动并触发 cancel 事件</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,W,[r(`h3`,G,[i(Q,{to:`#shi4jian4`},{default:n(()=>[...c[58]||=[a(`#`,-1)]]),_:1}),c[59]||=a(`事件`,-1)]),c[60]||=o(`<table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>change</code></td><td>选择内容变化时触发</td><td><code>values: (string | number)[]</code> 选择的值列表 <br> <code>indexes: number[]</code> 选择的下标列表 <br> <code>options: PickerColumnOption[]</code> 选择的选项对象列表</td></tr><tr><td><code>cancel</code></td><td>点击取消按钮时触发</td><td><code>values: (string | number)[]</code> 选择的值列表 <br> <code>indexes: number[]</code> 选择的下标列表 <br> <code>options: PickerColumnOption[]</code> 选择的选项对象列表</td></tr><tr><td><code>confirm</code></td><td>点击确认按钮时触发</td><td><code>values: (string | number)[]</code> 选择的值列表 <br> <code>indexes: number[]</code> 选择的下标列表 <br> <code>options: PickerColumnOption[]</code> 选择的选项对象列表</td></tr><tr><td><code>key-escape</code></td><td>点击键盘 ESC 时触发</td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,K,[r(`h3`,q,[i(Q,{to:`#cha1cao2`},{default:n(()=>[...c[61]||=[a(`#`,-1)]]),_:1}),c[62]||=a(`插槽`,-1)]),c[63]||=o(`<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>title</code></td><td>标题内容</td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>取消按钮内容</td><td><code>-</code></td></tr><tr><td><code>confirm</code></td><td>确认按钮内容</td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,J,[r(`h3`,Y,[i(Q,{to:`#yang4shi4bian4liang4`},{default:n(()=>[...c[64]||=[a(`#`,-1)]]),_:1}),c[65]||=a(`样式变量`,-1)]),c[66]||=o(`<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--picker-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--picker-toolbar-height</code></td><td><code>44px</code></td></tr><tr><td><code>--picker-confirm-button-text-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--picker-cancel-button-text-color</code></td><td><code>#888</code></td></tr><tr><td><code>--picker-picked-border</code></td><td><code>1px solid var(--color-outline)</code></td></tr><tr><td><code>--picker-title-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--picker-title-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--picker-option-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--picker-option-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--picker-toolbar-padding</code></td><td><code>0 4px</code></td></tr><tr><td><code>--picker-mask-background-image</code></td><td><code>linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)),linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4))</code></td></tr></tbody></table>`,2)])])}var Z=s(c,[[`render`,X]]);export{Z as default};