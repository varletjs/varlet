import{G as e,L as t,N as n,c as r,d as ee,g as i,h as a,m as o}from"./runtime-core.esm-bundler-5xw830oL.js";import{t as te}from"./_plugin-vue_export-helper-V-yks4gF.js";var s={components:{}},c={class:`varlet-site-doc`},l={class:`card`},u={id:`Intro`},d={class:`card`},f={id:`SingleColumnPicker`},p={class:`card`},m={id:`MultipleColumnPicker`},h={class:`card`},g={id:`CascadeColumnPicker`},_={class:`card`},v={id:`AreaPicker`},y={class:`card`},b={id:`ColumnsCount`},x={class:`card`},S={id:`ValueMapping`},C={class:`card`},w={id:`SingleColumnPicker`},T={class:`card`},E={id:`MultipleColumnPicker`},D={class:`card`},O={id:`CascadeColumnPicker`},k={class:`card`},A={id:`AreaPicker`},j={class:`card`},ne={id:`ColumnsCount`},M={class:`card`},N={id:`ValueMapping`},P={class:`card`},F={id:`Two-waybinding`},I={class:`card`},L={id:`Props`},R={class:`card`},z={id:`PickerOptions`},B={class:`card`},V={id:`PickerColumnOption`},H={class:`card`},U={id:`Methods`},W={class:`card`},G={id:`Events`},K={class:`card`},q={id:`Slots`},J={class:`card`},Y={id:`StyleVariables`};function X(te,s,X,Z,re,ie){let Q=t(`router-link`),$=t(`var-site-code-example`);return n(),ee(`div`,c,[s[67]||=r(`h1`,null,`Picker`,-1),r(`div`,l,[r(`h3`,u,[i(Q,{to:`#Intro`},{default:e(()=>[...s[0]||=[a(`#`,-1)]]),_:1}),s[1]||=a(`Intro`,-1)]),s[2]||=r(`p`,null,`Two calling methods, function and component, are provided. It also supports cascade mode and can handle multi-level linkage.`,-1)]),s[68]||=r(`h2`,null,`Function call`,-1),r(`div`,d,[r(`h3`,f,[i(Q,{to:`#SingleColumnPicker`},{default:e(()=>[...s[3]||=[a(`#`,-1)]]),_:1}),s[4]||=a(`Single Column Picker`,-1)]),s[6]||=r(`p`,null,[a(`The function will return the information selected by the user and the user's last action `),r(`code`,null,`state`),a(`. `),r(`code`,null,`state`),a(` may be `),r(`code`,null,`confirm`),a(`, `),r(`code`,null,`cancel`),a(`, `),r(`code`,null,`close`),a(`.`)],-1),i($,null,{default:e(()=>[...s[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
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
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"primary"`),a(),r(`span`,{class:`hljs-attr`},`block`),a(` @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"picker"`),a(`>`)]),a(`Single Column Picker`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,p,[r(`h3`,m,[i(Q,{to:`#MultipleColumnPicker`},{default:e(()=>[...s[7]||=[a(`#`,-1)]]),_:1}),s[8]||=a(`Multiple Column Picker`,-1)]),i($,null,{default:e(()=>[...s[9]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
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
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"primary"`),a(),r(`span`,{class:`hljs-attr`},`block`),a(` @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"picker"`),a(`>`)]),a(`Multiple Column Picker`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[i(Q,{to:`#CascadeColumnPicker`},{default:e(()=>[...s[10]||=[a(`#`,-1)]]),_:1}),s[11]||=a(`Cascade Column Picker`,-1)]),s[13]||=r(`p`,null,[a(`Set the `),r(`code`,null,`cascade`),a(` property to enable cascading scrolling.`)],-1),i($,null,{default:e(()=>[...s[12]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
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
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"primary"`),a(),r(`span`,{class:`hljs-attr`},`block`),a(` @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"picker"`),a(`>`)]),a(`Cascade Column Picker`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,_,[r(`h3`,v,[i(Q,{to:`#AreaPicker`},{default:e(()=>[...s[14]||=[a(`#`,-1)]]),_:1}),s[15]||=a(`Area Picker`,-1)]),s[17]||=r(`p`,null,`The component library provides cascade data of Chinese provinces and cities, which can be used directly.`,-1),i($,null,{default:e(()=>[...s[16]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
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
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"primary"`),a(),r(`span`,{class:`hljs-attr`},`block`),a(` @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"picker"`),a(`>`)]),a(`Area Picker`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,y,[r(`h3`,b,[i(Q,{to:`#ColumnsCount`},{default:e(()=>[...s[18]||=[a(`#`,-1)]]),_:1}),s[19]||=a(`Columns Count`,-1)]),s[21]||=r(`p`,null,[a(`The maximum number of displayed columns can be set via `),r(`code`,null,`columnsCount`),a(`, which is very useful in cascading mode.`)],-1),i($,null,{default:e(()=>[...s[20]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
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
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"primary"`),a(),r(`span`,{class:`hljs-attr`},`block`),a(` @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"picker"`),a(`>`)]),a(`Columns Count`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,x,[r(`h3`,S,[i(Q,{to:`#ValueMapping`},{default:e(()=>[...s[22]||=[a(`#`,-1)]]),_:1}),s[23]||=a(`Value Mapping`,-1)]),i($,null,{default:e(()=>[...s[24]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
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
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"primary"`),a(),r(`span`,{class:`hljs-attr`},`block`),a(` @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"picker"`),a(`>`)]),a(`Value Mapping`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),s[69]||=r(`h2`,null,`Component Call`,-1),r(`div`,C,[r(`h3`,w,[i(Q,{to:`#SingleColumnPicker`},{default:e(()=>[...s[25]||=[a(`#`,-1)]]),_:1}),s[26]||=a(`Single Column Picker`,-1)]),i($,null,{default:e(()=>[...s[27]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
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
`)])],-1)]]),_:1})]),r(`div`,T,[r(`h3`,E,[i(Q,{to:`#MultipleColumnPicker`},{default:e(()=>[...s[28]||=[a(`#`,-1)]]),_:1}),s[29]||=a(`Multiple Column Picker`,-1)]),i($,null,{default:e(()=>[...s[30]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
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
`)])],-1)]]),_:1})]),r(`div`,D,[r(`h3`,O,[i(Q,{to:`#CascadeColumnPicker`},{default:e(()=>[...s[31]||=[a(`#`,-1)]]),_:1}),s[32]||=a(`Cascade Column Picker`,-1)]),i($,null,{default:e(()=>[...s[33]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
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
`)])],-1)]]),_:1})]),r(`div`,k,[r(`h3`,A,[i(Q,{to:`#AreaPicker`},{default:e(()=>[...s[34]||=[a(`#`,-1)]]),_:1}),s[35]||=a(`Area Picker`,-1)]),i($,null,{default:e(()=>[...s[36]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
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
`)])],-1)]]),_:1})]),r(`div`,j,[r(`h3`,ne,[i(Q,{to:`#ColumnsCount`},{default:e(()=>[...s[37]||=[a(`#`,-1)]]),_:1}),s[38]||=a(`Columns Count`,-1)]),i($,null,{default:e(()=>[...s[39]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
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
`)])],-1)]]),_:1})]),r(`div`,M,[r(`h3`,N,[i(Q,{to:`#ValueMapping`},{default:e(()=>[...s[40]||=[a(`#`,-1)]]),_:1}),s[41]||=a(`Value Mapping`,-1)]),i($,null,{default:e(()=>[...s[42]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
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
`)])],-1)]]),_:1})]),r(`div`,P,[r(`h3`,F,[i(Q,{to:`#Two-waybinding`},{default:e(()=>[...s[43]||=[a(`#`,-1)]]),_:1}),s[44]||=a(`Two-way binding`,-1)]),i($,null,{default:e(()=>[...s[45]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
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
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"primary"`),a(` @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"resetValues"`),a(`>`)]),a(`values: {{ values }} Click Reset`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-picker`),a(),r(`span`,{class:`hljs-attr`},`:columns`),a(`=`),r(`span`,{class:`hljs-string`},`"columns"`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"values"`),a(` @`),r(`span`,{class:`hljs-attr`},`change`),a(`=`),r(`span`,{class:`hljs-string`},`"handleChange"`),a(` />`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-space`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),s[70]||=r(`h2`,null,`API`,-1),r(`div`,I,[r(`h3`,L,[i(Q,{to:`#Props`},{default:e(()=>[...s[46]||=[a(`#`,-1)]]),_:1}),s[47]||=a(`Props`,-1)]),s[48]||=o(`<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>Selected values</td><td><em>(string | number)[]</em></td><td><code>[]</code></td></tr><tr><td><code>columns</code></td><td>Column content</td><td><em>PickerColumnOption[] | PickerColumnOption[][]</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>Title</td><td><em>string</em></td><td><code>Pick it</code></td></tr><tr><td><code>text-key</code></td><td>Text key</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>value-key</code></td><td>Value key</td><td><em>string</em></td><td><code>value</code></td></tr><tr><td><code>children-key</code></td><td>Children key</td><td><em>string</em></td><td><code>children</code></td></tr><tr><td><code>toolbar</code></td><td>Whether to display the upper toolbar</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>Whether to enable cascade mode</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>option-height</code></td><td>The height of the option</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>option-count</code></td><td>Number of visible columns</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>columns-count</code> <em><strong>3.3.11</strong></em></td><td>Number of visible columns</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>confirm-button-text</code></td><td>Confirm button text</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td><code>cancel-button-text</code></td><td>Cancel button text</td><td><em>string</em></td><td><code>Cancel</code></td></tr><tr><td><code>confirm-button-text-color</code></td><td>Confirm button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-text-color</code></td><td>Cancel button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>close-on-key-escape</code></td><td>Whether to support keyboard ESC to close the picker</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table>`,1)]),r(`div`,R,[r(`h3`,z,[i(Q,{to:`#PickerOptions`},{default:e(()=>[...s[49]||=[a(`#`,-1)]]),_:1}),s[50]||=a(`Picker Options`,-1)]),s[51]||=o(`<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>columns</code></td><td>Column content</td><td><em>PickerColumnOption[] | PickerColumnOption[][]</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>Column content</td><td><em>string</em></td><td><code>Pick it</code></td></tr><tr><td><code>textKey</code></td><td>Text key</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>valueKey</code></td><td>Value key</td><td><em>string</em></td><td><code>value</code></td></tr><tr><td><code>childrenKey</code></td><td>Children key</td><td><em>string</em></td><td><code>children</code></td></tr><tr><td><code>toolbar</code></td><td>Whether to display the upper toolbar</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>Whether to enable cascade mode</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>optionHeight</code></td><td>The height of the option</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>optionCount</code></td><td>Number of visible options</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>columnsCount</code> <em><strong>3.3.11</strong></em></td><td>Number of visible columns(defaults to display total columns)</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>confirmButtonText</code></td><td>Confirm button text</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td><code>cancelButtonText</code></td><td>Cancel button text</td><td><em>string</em></td><td><code>Cancel</code></td></tr><tr><td><code>confirmButtonTextColor</code></td><td>Confirm button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonTextColor</code></td><td>Cancel button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>closeOnClickOverlay</code></td><td>Whether to click the overlay to close the picker</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnKeyEscape</code></td><td>Whether to support keyboard ESC to close the picker</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>safeArea</code></td><td>Whether to enable bottom safety zone adaptation</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onClickOverlay</code></td><td>Click overlay callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>Popup open callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Popup open-animation ends callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Popup close callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Close pop-up layer callback when animation ends</td><td><em>() =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onChange</code></td><td>Pick callbacks when content changes</td><td><em>(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onConfirm</code></td><td>Pick callbacks when confirm</td><td><em>(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onCancel</code></td><td>Pick callbacks when cancel</td><td><em>(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onKeyEscape</code></td><td>Triggered when click keyboard ESC</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,B,[r(`h3`,V,[i(Q,{to:`#PickerColumnOption`},{default:e(()=>[...s[52]||=[a(`#`,-1)]]),_:1}),s[53]||=a(`PickerColumnOption`,-1)]),s[54]||=o(`<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>text</code></td><td>Text</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>Value</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>children</code></td><td>Children list</td><td><em>PickerColumnOption[]</em></td><td><code>-</code></td></tr><tr><td><code>className</code></td><td>Class name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>textClassName</code></td><td>Text Class Name</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,H,[r(`h3`,U,[i(Q,{to:`#Methods`},{default:e(()=>[...s[55]||=[a(`#`,-1)]]),_:1}),s[56]||=a(`Methods`,-1)]),s[57]||=o(`<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>confirm</code></td><td>Immediately stop scrolling and trigger the <code>confirm</code> event</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>Immediately stop scrolling and trigger the <code>cancel</code> event</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,W,[r(`h3`,G,[i(Q,{to:`#Events`},{default:e(()=>[...s[58]||=[a(`#`,-1)]]),_:1}),s[59]||=a(`Events`,-1)]),s[60]||=o(`<table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Triggered when the pick content changes</td><td><code>values: (string | number)[]</code> Selected Values <br> <code>indexes: number[]</code> Selected indexes <br> <code>options: PickerColumnOption[]</code> Selected options</td></tr><tr><td><code>cancel</code></td><td>Triggered when you click the cancel button</td><td><code>values: (string | number)[]</code> Selected Values <br> <code>indexes: number[]</code> Selected indexes <br> <code>options: PickerColumnOption[]</code> Selected options</td></tr><tr><td><code>confirm</code></td><td>Triggered when you click the confirm button</td><td><code>values: (string | number)[]</code> Selected Values <br> <code>indexes: number[]</code> Selected indexes <br> <code>options: PickerColumnOption[]</code> Selected options</td></tr><tr><td><code>key-escape</code></td><td>Triggered when click keyboard ESC</td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,K,[r(`h3`,q,[i(Q,{to:`#Slots`},{default:e(()=>[...s[61]||=[a(`#`,-1)]]),_:1}),s[62]||=a(`Slots`,-1)]),s[63]||=o(`<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>title</code></td><td>Title content</td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>Cancel button content</td><td><code>-</code></td></tr><tr><td><code>confirm</code></td><td>Confirm button content</td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,J,[r(`h3`,Y,[i(Q,{to:`#StyleVariables`},{default:e(()=>[...s[64]||=[a(`#`,-1)]]),_:1}),s[65]||=a(`Style Variables`,-1)]),s[66]||=o(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--picker-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--picker-toolbar-height</code></td><td><code>44px</code></td></tr><tr><td><code>--picker-confirm-button-text-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--picker-cancel-button-text-color</code></td><td><code>#888</code></td></tr><tr><td><code>--picker-picked-border</code></td><td><code>1px solid var(--color-outline)</code></td></tr><tr><td><code>--picker-title-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--picker-title-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--picker-option-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--picker-option-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--picker-toolbar-padding</code></td><td><code>0 4px</code></td></tr><tr><td><code>--picker-mask-background-image</code></td><td><code>linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)),linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4))</code></td></tr></tbody></table>`,2)])])}var Z=te(s,[[`render`,X]]);export{Z as default};