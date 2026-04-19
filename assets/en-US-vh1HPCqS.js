import{L as e,N as t,W as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as c}from"./_plugin-vue_export-helper-V-yks4gF.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`BasicUsage`},h={class:`card`},g={id:`SelectedEvent`},_={class:`card`},v={id:`Size`},y={class:`card`},b={id:`ValueMapping`},x={class:`card`},S={id:`Scrollable`},C={class:`card`},w={id:`OptionDisabled`},T={class:`card`},E={id:`Multiple`},D={class:`card`},O={id:`DisableCloseOnSelect`},k={class:`card`},A={id:`OptionsAPI`},j={class:`card`},M={id:`Cascade`},N={class:`card`},P={id:`MultipleCascade`},F={class:`card`},I={id:`OptionsAPIWithCustomizedKey`},L={class:`card`},R={id:`Props`},z={class:`card`},B={id:`Placement`},V={class:`card`},H={id:`Methods`},U={class:`card`},W={id:`Events`},G={class:`card`},K={id:`Slots`},q={class:`card`},J={id:`StyleVariables`};function Y(c,l,Y,X,Z,ee){let Q=e(`router-link`),$=e(`var-site-code-example`);return t(),i(`div`,u,[l[63]||=r(`h1`,null,`MenuSelect`,-1),r(`div`,d,[r(`h3`,f,[a(Q,{to:`#Intro`},{default:n(()=>[...l[0]||=[o(`#`,-1)]]),_:1}),l[1]||=o(`Intro`,-1)]),l[2]||=r(`p`,null,[o(`Menu with selector function, some functions are used in the same way as `),r(`a`,{href:`#/en-US/menu`},`Menu`),o(`.`)],-1)]),r(`div`,p,[r(`h3`,m,[a(Q,{to:`#BasicUsage`},{default:n(()=>[...l[3]||=[o(`#`,-1)]]),_:1}),l[4]||=o(`Basic Usage`,-1)]),a($,null,{default:n(()=>[...l[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref()
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(`>`)]),o(`{{ value ? value : 'Please Select' }}`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`

    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`options`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Eat"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Sleep"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Play game"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-menu-select`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[a(Q,{to:`#SelectedEvent`},{default:n(()=>[...l[6]||=[o(`#`,-1)]]),_:1}),l[7]||=o(`Selected Event`,-1)]),a($,null,{default:n(()=>[...l[8]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`handleSelect`),o(`(`),r(`span`,{class:`hljs-params`},`value`),o(`) `)]),o(`{
  Snackbar(`),r(`span`,{class:`hljs-string`},[o("`Select: "),r(`span`,{class:`hljs-subst`},"${value}"),o("`")]),o(`)
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-select`),o(` @`),r(`span`,{class:`hljs-attr`},`select`),o(`=`),r(`span`,{class:`hljs-string`},`"handleSelect"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(`>`)]),o(`Please Select`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`

    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`options`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Eat"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Sleep"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Play game"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-menu-select`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,_,[r(`h3`,v,[a(Q,{to:`#Size`},{default:n(()=>[...l[9]||=[o(`#`,-1)]]),_:1}),l[10]||=o(`Size`,-1)]),a($,null,{default:n(()=>[...l[11]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
  
`),r(`span`,{class:`hljs-keyword`},`const`),o(` valueNormal = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` valueSmall = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` valueMini = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` valueLarge = ref()
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-space`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"valueNormal"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(`>`)]),o(`
        {{ valueNormal ? valueNormal : 'Normal Size' }}
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`

      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`options`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Eat"`),o(` />`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Sleep"`),o(` />`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Play game"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-menu-select`),o(`>`)]),o(`

    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-select`),o(),r(`span`,{class:`hljs-attr`},`size`),o(`=`),r(`span`,{class:`hljs-string`},`"small"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"valueSmall"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(`>`)]),o(`
        {{ valueSmall ? valueSmall : 'Small Size' }}
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`

      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`options`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Eat"`),o(` />`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Sleep"`),o(` />`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Play game"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-menu-select`),o(`>`)]),o(`

    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-select`),o(),r(`span`,{class:`hljs-attr`},`size`),o(`=`),r(`span`,{class:`hljs-string`},`"mini"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"valueMini"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(`>`)]),o(`
        {{ valueMini ? valueMini : 'Mini Size' }}
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`

      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`options`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Eat"`),o(` />`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Sleep"`),o(` />`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Play game"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-menu-select`),o(`>`)]),o(`

    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-select`),o(),r(`span`,{class:`hljs-attr`},`size`),o(`=`),r(`span`,{class:`hljs-string`},`"large"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"valueLarge"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(`>`)]),o(`
        {{ valueLarge ? valueLarge : 'Large Size' }}
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`

      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`options`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Eat"`),o(` />`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Sleep"`),o(` />`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Play game"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-menu-select`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-space`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,y,[r(`h3`,b,[a(Q,{to:`#ValueMapping`},{default:n(()=>[...l[12]||=[o(`#`,-1)]]),_:1}),l[13]||=o(`Value Mapping`,-1)]),a($,null,{default:n(()=>[...l[14]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref()
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(`>`)]),o("{{ value ? `value: ${value}` : 'Please Select' }}"),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`

    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`options`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Eat"`),o(),r(`span`,{class:`hljs-attr`},`:value`),o(`=`),r(`span`,{class:`hljs-string`},`"1"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Sleep"`),o(),r(`span`,{class:`hljs-attr`},`:value`),o(`=`),r(`span`,{class:`hljs-string`},`"2"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Play game"`),o(),r(`span`,{class:`hljs-attr`},`:value`),o(`=`),r(`span`,{class:`hljs-string`},`"3"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-menu-select`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,x,[r(`h3`,S,[a(Q,{to:`#Scrollable`},{default:n(()=>[...l[15]||=[o(`#`,-1)]]),_:1}),l[16]||=o(`Scrollable`,-1)]),l[18]||=r(`p`,null,[o(`Make the menu scrollable by turning on `),r(`code`,null,`scrollable`),o(`.`)],-1),a($,null,{default:n(()=>[...l[17]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` options = ref(`),r(`span`,{class:`hljs-built_in`},`Array`),o(`.from(
  { `),r(`span`,{class:`hljs-attr`},`length`),o(`: `),r(`span`,{class:`hljs-number`},`30`),o(` }, 
  `),r(`span`,{class:`hljs-function`},[o(`(`),r(`span`,{class:`hljs-params`},`_, index`),o(`) =>`)]),o(` ({ `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},[o("`Option "),r(`span`,{class:`hljs-subst`},[o("${index + "),r(`span`,{class:`hljs-number`},`1`),o(`}`)]),o("`")]),o(`, `),r(`span`,{class:`hljs-attr`},`value`),o(`: index }))
)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-select`),o(),r(`span`,{class:`hljs-attr`},`scrollable`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(`>`)]),o(`{{ value ? value : 'Please Select' }}`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`

    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`options`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(` 
        `),r(`span`,{class:`hljs-attr`},`v-for`),o(`=`),r(`span`,{class:`hljs-string`},`"option in options"`),o(` 
        `),r(`span`,{class:`hljs-attr`},`:key`),o(`=`),r(`span`,{class:`hljs-string`},`"option.value"`),o(` 
        `),r(`span`,{class:`hljs-attr`},`:label`),o(`=`),r(`span`,{class:`hljs-string`},`"option.label"`),o(` 
      />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-menu-select`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,C,[r(`h3`,w,[a(Q,{to:`#OptionDisabled`},{default:n(()=>[...l[19]||=[o(`#`,-1)]]),_:1}),l[20]||=o(`Option Disabled`,-1)]),a($,null,{default:n(()=>[...l[21]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref()
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-select`),o(),r(`span`,{class:`hljs-attr`},`scrollable`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(`>`)]),o(`{{ value ? value : 'Please Select' }}`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`

    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`options`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Eat"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Sleep"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Play game"`),o(),r(`span`,{class:`hljs-attr`},`disabled`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-menu-select`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,T,[r(`h3`,E,[a(Q,{to:`#Multiple`},{default:n(()=>[...l[22]||=[o(`#`,-1)]]),_:1}),l[23]||=o(`Multiple`,-1)]),a($,null,{default:n(()=>[...l[24]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref([])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-select`),o(),r(`span`,{class:`hljs-attr`},`multiple`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(`>`)]),o(`{{ value.length ? value : 'Please Select' }}`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`

    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`options`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Eat"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Sleep"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Play game"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Coding"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Rest"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-menu-select`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,D,[r(`h3`,O,[a(Q,{to:`#DisableCloseOnSelect`},{default:n(()=>[...l[25]||=[o(`#`,-1)]]),_:1}),l[26]||=o(`Disable Close On Select`,-1)]),l[28]||=r(`p`,null,[o(`Close `),r(`code`,null,`close-on-select`),o(` disables closing the menu when selecting an option. The default behavior is to close the menu when selecting an option, which is not allowed in multi-select mode.`)],-1),a($,null,{default:n(()=>[...l[27]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref()
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-select`),o(),r(`span`,{class:`hljs-attr`},`:close-on-select`),o(`=`),r(`span`,{class:`hljs-string`},`"false"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(`>`)]),o(`{{ value ? value : 'Please Select' }}`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`

    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`options`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Eat"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Sleep"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Play game"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-menu-select`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,k,[r(`h3`,A,[a(Q,{to:`#OptionsAPI`},{default:n(()=>[...l[29]||=[o(`#`,-1)]]),_:1}),l[30]||=o(`Options API`,-1)]),l[32]||=r(`p`,null,[o(`You can pass the options as an array to the `),r(`code`,null,`options`),o(` property.`)],-1),a($,null,{default:n(()=>[...l[31]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` options = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Eat'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-number`},`1`),o(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Sleep'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-number`},`2`),o(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Play game'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-number`},`3`),o(`,
    `),r(`span`,{class:`hljs-attr`},`disabled`),o(`: `),r(`span`,{class:`hljs-literal`},`true`),o(`,
  },
])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(`>`)]),o(`{{ value ? value : 'Please Select' }}`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-menu-select`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,j,[r(`h3`,M,[a(Q,{to:`#Cascade`},{default:n(()=>[...l[33]||=[o(`#`,-1)]]),_:1}),l[34]||=o(`Cascade`,-1)]),l[36]||=r(`p`,null,[o(`An array of options may be passed to the `),r(`code`,null,`children`),o(` attribute of options to achieve a cascading effect.`)],-1),a($,null,{default:n(()=>[...l[35]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` options = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'1'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-number`},`1`),o(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'2'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-number`},`2`),o(`,
    `),r(`span`,{class:`hljs-attr`},`children`),o(`: [
      {
        `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'2-1'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-number`},`21`),o(`,
        `),r(`span`,{class:`hljs-attr`},`children`),o(`: [
          {
            `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'2-1-1'`),o(`,
            `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-number`},`211`),o(`,
          },
          {
            `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'2-1-2'`),o(`,
            `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-number`},`212`),o(`,
          },
        ],
      },
      {
        `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'2-2'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-number`},`22`),o(`,
      },
    ],
  },
  {
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'3'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-number`},`3`),o(`,
  },
])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(`>`)]),o(`{{ value ? value : 'Please Select' }}`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-menu-select`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,N,[r(`h3`,P,[a(Q,{to:`#MultipleCascade`},{default:n(()=>[...l[37]||=[o(`#`,-1)]]),_:1}),l[38]||=o(`Multiple Cascade`,-1)]),l[40]||=r(`p`,null,[o(`Cascading multiple selections can be achieved by setting the `),r(`code`,null,`multiple`),o(` attribute on the basis of cascading single selections.`)],-1),a($,null,{default:n(()=>[...l[39]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` options = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'1'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-number`},`1`),o(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'2'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-number`},`2`),o(`,
    `),r(`span`,{class:`hljs-attr`},`children`),o(`: [
      {
        `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'2-1'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-number`},`21`),o(`,
        `),r(`span`,{class:`hljs-attr`},`children`),o(`: [
          {
            `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'2-1-1'`),o(`,
            `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-number`},`211`),o(`,
          },
          {
            `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'2-1-2'`),o(`,
            `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-number`},`212`),o(`,
          },
        ],
      },
      {
        `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'2-2'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-number`},`22`),o(`,
      },
    ],
  },
  {
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'3'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-number`},`3`),o(`,
  },
])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-select`),o(),r(`span`,{class:`hljs-attr`},`multiple`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(`>`)]),o(`{{ value ? value : 'Please Select' }}`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-menu-select`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,F,[r(`h3`,I,[a(Q,{to:`#OptionsAPIWithCustomizedKey`},{default:n(()=>[...l[41]||=[o(`#`,-1)]]),_:1}),l[42]||=o(`Options API With Customized Key`,-1)]),l[44]||=r(`p`,null,[o(`You can pass the options as an array of objects to the `),r(`code`,null,`options`),o(` property. Use the `),r(`code`,null,`label-key`),o(` and `),r(`code`,null,`value-key`),o(` properties to specify the fields for the label and value within the options array.`)],-1),a($,null,{default:n(()=>[...l[43]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` options = ref([
   {
    `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Eat'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`id`),o(`: `),r(`span`,{class:`hljs-number`},`1`),o(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Sleep'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`id`),o(`: `),r(`span`,{class:`hljs-number`},`2`),o(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Play game'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`id`),o(`: `),r(`span`,{class:`hljs-number`},`3`),o(`,
    `),r(`span`,{class:`hljs-attr`},`disabled`),o(`: `),r(`span`,{class:`hljs-literal`},`true`),o(`,
  },
])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(),r(`span`,{class:`hljs-attr`},`label-key`),o(`=`),r(`span`,{class:`hljs-string`},`"name"`),o(),r(`span`,{class:`hljs-attr`},`value-key`),o(`=`),r(`span`,{class:`hljs-string`},`"id"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(`>`)]),o(`{{ value ? value : 'Please Select' }}`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-menu-select`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),l[64]||=r(`h2`,null,`API`,-1),r(`div`,L,[r(`h3`,R,[a(Q,{to:`#Props`},{default:n(()=>[...l[45]||=[o(`#`,-1)]]),_:1}),l[46]||=o(`Props`,-1)]),l[47]||=s(`<h4>MenuSelect Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of the binding</td><td><em>any | any[]</em></td><td><code>-</code></td></tr><tr><td><code>v-model:show</code></td><td>Whether to show the menu</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>size</code></td><td>Menu size, optional values <code>normal</code> <code>mini</code> <code>small</code> <code>large</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>multiple</code></td><td>Whether to select multiple</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>scrollable</code></td><td>Whether to enable scrolling</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>close-on-select</code></td><td>Whether to close the menu when selected (selected options in multi-select mode never close the menu)</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>placement</code></td><td>Menu popup placement</td><td><em>Placement</em></td><td><code>cover-top-start</code></td></tr><tr><td><code>strategy</code></td><td>Menu position strategy, optional value is <code>absolute</code> <code>fixed</code></td><td><em>string</em></td><td><code>absolute</code></td></tr><tr><td><code>offset-x</code></td><td>The x-axis offset, relative to the menu-aligned position</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>offset-y</code></td><td>The y-axis offset, relative to the menu-aligned position</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>teleport</code></td><td>The location of the menu mount</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>body</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable the menu</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>trigger</code></td><td>Menu trigger method, optional value is <code>click</code> <code>hover</code> <code>manual</code></td><td><em>string</em></td><td><code>click</code></td></tr><tr><td><code>reference</code></td><td>The trigger element associated with the menu, the <code>string</code> type is the descendant element selector of the menu component, the <code>HTMLElement</code> type is any specified element node</td><td><em>string | HTMLElement</em></td><td><code>-</code></td></tr><tr><td><code>elevation</code></td><td>Elevation level, options <code>true</code> <code>false</code> and level of <code>0-24</code></td><td><em>string | number | boolean</em></td><td><code>true</code></td></tr><tr><td><code>same-width</code></td><td>Whether to same width as trigger element</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>popover-class</code></td><td>Class of the popover</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>close-on-click-reference</code></td><td>Whether to close the menu when clicking the reference element</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>options</code> <em><strong>3.3.7</strong></em></td><td>Specifies options</td><td><em>MenuSelectOption[]</em></td><td><code>[]</code></td></tr><tr><td><code>label-key</code> <em><strong>3.3.7</strong></em></td><td>As the key that uniquely identifies label</td><td><em>string</em></td><td><code>label</code></td></tr><tr><td><code>value-key</code> <em><strong>3.3.7</strong></em></td><td>As the key that uniquely identifies value</td><td><em>string</em></td><td><code>value</code></td></tr><tr><td><code>children-key</code> <em><strong>3.8.0</strong></em></td><td>As the key that uniquely identifies children</td><td><em>string</em></td><td><code>children</code></td></tr></tbody></table><h4>MenuSelectOption</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>label</code></td><td>The text of option</td><td><em>string | VNode | (option: MenuSelectOption, selected: boolean) =&gt; VNodeChild</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>The value of option</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>children</code> <em><strong>3.8.0</strong></em></td><td>The children options of option</td><td><em>MenuSelectOption[]</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable option</td><td><em>boolean</em></td><td><code>-</code></td></tr><tr><td><code>ripple</code></td><td>Whether to enable ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table><h4>MenuOption Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>label</code></td><td>The text that the option displays</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>The value of the option binding</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code> <em><strong>3.3.0</strong></em></td><td>Whether to enable ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table>`,6)]),r(`div`,z,[r(`h3`,B,[a(Q,{to:`#Placement`},{default:n(()=>[...l[48]||=[o(`#`,-1)]]),_:1}),l[49]||=o(`Placement`,-1)]),l[50]||=s(`<table><thead><tr><th>Prop</th><th>Description</th></tr></thead><tbody><tr><td><code>top</code></td><td>Top center position</td></tr><tr><td><code>top-start</code></td><td>Top left position</td></tr><tr><td><code>top-end</code></td><td>Top right position</td></tr><tr><td><code>bottom</code></td><td>Bottom center position</td></tr><tr><td><code>bottom-start</code></td><td>Bottom left position</td></tr><tr><td><code>bottom-end</code></td><td>Bottom right position</td></tr><tr><td><code>right</code></td><td>Right center position</td></tr><tr><td><code>right-start</code></td><td>Top right position</td></tr><tr><td><code>right-end</code></td><td>Bottom right position</td></tr><tr><td><code>left</code></td><td>Left center position</td></tr><tr><td><code>left-start</code></td><td>Top left position</td></tr><tr><td><code>left-end</code></td><td>Bottom left position</td></tr><tr><td><code>cover-top</code></td><td>Top center position, overlay trigger</td></tr><tr><td><code>cover-top-start</code></td><td>Top left position, overlay trigger</td></tr><tr><td><code>cover-top-end</code></td><td>Top right position, overlay trigger</td></tr><tr><td><code>cover-bottom</code></td><td>Bottom center position, overlay trigger</td></tr><tr><td><code>cover-bottom-start</code></td><td>Bottom left position, overlay trigger</td></tr><tr><td><code>cover-bottom-end</code></td><td>Bottom right position, overlay trigger</td></tr><tr><td><code>cover-left</code></td><td>Left center position, overlay trigger</td></tr><tr><td><code>cover-right</code></td><td>Right center position, overlay trigger</td></tr></tbody></table>`,1)]),r(`div`,V,[r(`h3`,H,[a(Q,{to:`#Methods`},{default:n(()=>[...l[51]||=[o(`#`,-1)]]),_:1}),l[52]||=o(`Methods`,-1)]),l[53]||=s(`<h4>MenuSelect Methods</h4><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>open</code></td><td>Open Menu</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Close Menu</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>resize</code></td><td>This method can be called to redraw when the default slot element of Menu select changes its position and size</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>setReference</code> <em><strong>3.7.2</strong></em></td><td>Set the trigger element associated with the menu</td><td><code>reference: consistent with the reference of the component attribute</code></td><td><code>-</code></td></tr></tbody></table>`,2)]),r(`div`,U,[r(`h3`,W,[a(Q,{to:`#Events`},{default:n(()=>[...l[54]||=[o(`#`,-1)]]),_:1}),l[55]||=o(`Events`,-1)]),l[56]||=s(`<h4>MenuSelect Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>open</code></td><td>Triggered when the menu is opened</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered when the open menu animation ends</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Triggered when the menu is closed</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the closing menu animation ends</td><td><code>-</code></td></tr><tr><td><code>click-outside</code></td><td>Triggered when clicking outside the menu</td><td><code>event: Event</code></td></tr><tr><td><code>select</code> <em><strong>3.8.0</strong></em></td><td>Triggered when selecting a option</td><td><code>value: any, option: MenuSelectOption</code></td></tr></tbody></table>`,2)]),r(`div`,G,[r(`h3`,K,[a(Q,{to:`#Slots`},{default:n(()=>[...l[57]||=[o(`#`,-1)]]),_:1}),l[58]||=o(`Slots`,-1)]),l[59]||=s(`<h4>MenuSelect Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Menu select trigger element</td><td><code>-</code></td></tr><tr><td><code>options</code></td><td>Menu select options</td><td><code>-</code></td></tr></tbody></table><h4>MenuOption Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Options to display the content</td><td><code>-</code></td></tr></tbody></table>`,4)]),r(`div`,q,[r(`h3`,J,[a(Q,{to:`#StyleVariables`},{default:n(()=>[...l[60]||=[o(`#`,-1)]]),_:1}),l[61]||=o(`Style Variables`,-1)]),l[62]||=s(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><h4>MenuSelect Variables</h4><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--menu-select-menu-max-height</code></td><td><code>278px</code></td></tr><tr><td><code>--menu-select-menu-padding</code></td><td><code>0</code></td></tr><tr><td><code>--menu-select-menu-border-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--menu-select-menu-background-color</code></td><td><code>var(--color-surface-container-high)</code></td></tr></tbody></table><h4>MenuOption Variables</h4><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--menu-option-normal-height</code></td><td><code>38px</code></td></tr><tr><td><code>--menu-option-small-height</code></td><td><code>30px</code></td></tr><tr><td><code>--menu-option-mini-height</code></td><td><code>24px</code></td></tr><tr><td><code>--menu-option-large-height</code></td><td><code>46px</code></td></tr><tr><td><code>--menu-option-padding</code></td><td><code>0 12px</code></td></tr><tr><td><code>--menu-option-normal-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--menu-option-small-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--menu-option-mini-font-size</code></td><td><code>var(--font-size-xs)</code></td></tr><tr><td><code>--menu-option-large-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--menu-option-selected-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--menu-option-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--menu-option-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr></tbody></table>`,5)])])}var X=c(l,[[`render`,Y]]);export{X as default};