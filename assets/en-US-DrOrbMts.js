import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`BasicUsage`},h={class:`card`},g={id:`SelectedEvent`},_={class:`card`},v={id:`Radius`},y={class:`card`},b={id:`Size`},x={class:`card`},S={id:`ValueMapping`},C={class:`card`},w={id:`Scrollable`},T={class:`card`},E={id:`OptionDisabled`},D={class:`card`},O={id:`Multiple`},k={class:`card`},ee={id:`DisableCloseOnSelect`},A={class:`card`},j={id:`OptionsAPI`},M={class:`card`},N={id:`Cascade`},P={class:`card`},F={id:`MultipleCascade`},I={class:`card`},L={id:`OptionsAPIWithCustomizedKey`},R={class:`card`},z={id:`Props`},B={class:`card`},V={id:`Placement`},H={class:`card`},U={id:`Methods`},W={class:`card`},G={id:`Events`},K={class:`card`},q={id:`Slots`},J={class:`card`},Y={id:`StyleVariables`};function X(e,l,X,Z,te,ne){let Q=n(`router-link`),$=n(`var-site-code-example`);return r(),a(`div`,u,[l[67]||=i(`h1`,null,`MenuSelect`,-1),i(`div`,d,[i(`h3`,f,[o(Q,{to:`#Intro`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`Intro`,-1)]),l[2]||=i(`p`,null,[s(`Menu with selector function, some functions are used in the same way as `),i(`a`,{href:`#/en-US/menu`},`Menu`),s(`.`)],-1)]),i(`div`,p,[i(`h3`,m,[o(Q,{to:`#BasicUsage`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`Basic Usage`,-1)]),o($,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref()
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(`>`)]),s(`{{ value ? value : 'Please Select' }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`

    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`options`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Eat"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Sleep"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Play game"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(Q,{to:`#SelectedEvent`},{default:t(()=>[...l[6]||=[s(`#`,-1)]]),_:1}),l[7]||=s(`Selected Event`,-1)]),o($,null,{default:t(()=>[...l[8]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Snackbar } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`handleSelect`),s(`(`),i(`span`,{class:`hljs-params`},`value`),s(`) `)]),s(`{
  Snackbar(`),i(`span`,{class:`hljs-string`},[s("`Select: "),i(`span`,{class:`hljs-subst`},"${value}"),s("`")]),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(` @`),i(`span`,{class:`hljs-attr`},`select`),s(`=`),i(`span`,{class:`hljs-string`},`"handleSelect"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(`>`)]),s(`Please Select`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`

    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`options`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Eat"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Sleep"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Play game"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,_,[i(`h3`,v,[o(Q,{to:`#Radius`},{default:t(()=>[...l[9]||=[s(`#`,-1)]]),_:1}),l[10]||=s(`Radius`,-1)]),l[12]||=i(`p`,null,[s(`Use `),i(`code`,null,`radius="large"`),s(` to display the popup menu with large rounded corners.`)],-1),o($,null,{default:t(()=>[...l[11]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` normalRadiusValue = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` largeRadiusValue = ref()
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"normalRadiusValue"`),s(),i(`span`,{class:`hljs-attr`},`radius`),s(`=`),i(`span`,{class:`hljs-string`},`"normal"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(`>`)]),s(`{{ normalRadiusValue || 'Normal Radius' }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`options`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Eat"`),s(` />`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Sleep"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"largeRadiusValue"`),s(),i(`span`,{class:`hljs-attr`},`radius`),s(`=`),i(`span`,{class:`hljs-string`},`"large"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(`>`)]),s(`{{ largeRadiusValue || 'Large Radius' }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`options`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Eat"`),s(` />`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Sleep"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,y,[i(`h3`,b,[o(Q,{to:`#Size`},{default:t(()=>[...l[13]||=[s(`#`,-1)]]),_:1}),l[14]||=s(`Size`,-1)]),o($,null,{default:t(()=>[...l[15]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
  
`),i(`span`,{class:`hljs-keyword`},`const`),s(` valueNormal = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` valueSmall = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` valueMini = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` valueLarge = ref()
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"valueNormal"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(`>`)]),s(`
        {{ valueNormal ? valueNormal : 'Normal Size' }}
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`

      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`options`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Eat"`),s(` />`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Sleep"`),s(` />`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Play game"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(`>`)]),s(`

    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(),i(`span`,{class:`hljs-attr`},`size`),s(`=`),i(`span`,{class:`hljs-string`},`"small"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"valueSmall"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(`>`)]),s(`
        {{ valueSmall ? valueSmall : 'Small Size' }}
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`

      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`options`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Eat"`),s(` />`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Sleep"`),s(` />`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Play game"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(`>`)]),s(`

    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(),i(`span`,{class:`hljs-attr`},`size`),s(`=`),i(`span`,{class:`hljs-string`},`"mini"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"valueMini"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(`>`)]),s(`
        {{ valueMini ? valueMini : 'Mini Size' }}
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`

      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`options`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Eat"`),s(` />`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Sleep"`),s(` />`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Play game"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(`>`)]),s(`

    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(),i(`span`,{class:`hljs-attr`},`size`),s(`=`),i(`span`,{class:`hljs-string`},`"large"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"valueLarge"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(`>`)]),s(`
        {{ valueLarge ? valueLarge : 'Large Size' }}
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`

      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`options`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Eat"`),s(` />`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Sleep"`),s(` />`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Play game"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,x,[i(`h3`,S,[o(Q,{to:`#ValueMapping`},{default:t(()=>[...l[16]||=[s(`#`,-1)]]),_:1}),l[17]||=s(`Value Mapping`,-1)]),o($,null,{default:t(()=>[...l[18]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref()
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(`>`)]),s("{{ value ? `value: ${value}` : 'Please Select' }}"),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`

    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`options`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Eat"`),s(),i(`span`,{class:`hljs-attr`},`:value`),s(`=`),i(`span`,{class:`hljs-string`},`"1"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Sleep"`),s(),i(`span`,{class:`hljs-attr`},`:value`),s(`=`),i(`span`,{class:`hljs-string`},`"2"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Play game"`),s(),i(`span`,{class:`hljs-attr`},`:value`),s(`=`),i(`span`,{class:`hljs-string`},`"3"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,C,[i(`h3`,w,[o(Q,{to:`#Scrollable`},{default:t(()=>[...l[19]||=[s(`#`,-1)]]),_:1}),l[20]||=s(`Scrollable`,-1)]),l[22]||=i(`p`,null,[s(`Make the menu scrollable by turning on `),i(`code`,null,`scrollable`),s(`.`)],-1),o($,null,{default:t(()=>[...l[21]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` options = ref(`),i(`span`,{class:`hljs-built_in`},`Array`),s(`.from(
  { `),i(`span`,{class:`hljs-attr`},`length`),s(`: `),i(`span`,{class:`hljs-number`},`30`),s(` }, 
  `),i(`span`,{class:`hljs-function`},[s(`(`),i(`span`,{class:`hljs-params`},`_, index`),s(`) =>`)]),s(` ({ `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},[s("`Option "),i(`span`,{class:`hljs-subst`},[s("${index + "),i(`span`,{class:`hljs-number`},`1`),s(`}`)]),s("`")]),s(`, `),i(`span`,{class:`hljs-attr`},`value`),s(`: index }))
)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(),i(`span`,{class:`hljs-attr`},`scrollable`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(`>`)]),s(`{{ value ? value : 'Please Select' }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`

    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`options`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(` 
        `),i(`span`,{class:`hljs-attr`},`v-for`),s(`=`),i(`span`,{class:`hljs-string`},`"option in options"`),s(` 
        `),i(`span`,{class:`hljs-attr`},`:key`),s(`=`),i(`span`,{class:`hljs-string`},`"option.value"`),s(` 
        `),i(`span`,{class:`hljs-attr`},`:label`),s(`=`),i(`span`,{class:`hljs-string`},`"option.label"`),s(` 
      />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,T,[i(`h3`,E,[o(Q,{to:`#OptionDisabled`},{default:t(()=>[...l[23]||=[s(`#`,-1)]]),_:1}),l[24]||=s(`Option Disabled`,-1)]),o($,null,{default:t(()=>[...l[25]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref()
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(),i(`span`,{class:`hljs-attr`},`scrollable`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(`>`)]),s(`{{ value ? value : 'Please Select' }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`

    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`options`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Eat"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Sleep"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Play game"`),s(),i(`span`,{class:`hljs-attr`},`disabled`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,D,[i(`h3`,O,[o(Q,{to:`#Multiple`},{default:t(()=>[...l[26]||=[s(`#`,-1)]]),_:1}),l[27]||=s(`Multiple`,-1)]),o($,null,{default:t(()=>[...l[28]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref([])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(),i(`span`,{class:`hljs-attr`},`multiple`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(`>`)]),s(`{{ value.length ? value : 'Please Select' }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`

    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`options`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Eat"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Sleep"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Play game"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Coding"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Rest"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,k,[i(`h3`,ee,[o(Q,{to:`#DisableCloseOnSelect`},{default:t(()=>[...l[29]||=[s(`#`,-1)]]),_:1}),l[30]||=s(`Disable Close On Select`,-1)]),l[32]||=i(`p`,null,[s(`Close `),i(`code`,null,`close-on-select`),s(` disables closing the menu when selecting an option. The default behavior is to close the menu when selecting an option, which is not allowed in multi-select mode.`)],-1),o($,null,{default:t(()=>[...l[31]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref()
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(),i(`span`,{class:`hljs-attr`},`:close-on-select`),s(`=`),i(`span`,{class:`hljs-string`},`"false"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(`>`)]),s(`{{ value ? value : 'Please Select' }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`

    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`options`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Eat"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Sleep"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Play game"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,A,[i(`h3`,j,[o(Q,{to:`#OptionsAPI`},{default:t(()=>[...l[33]||=[s(`#`,-1)]]),_:1}),l[34]||=s(`Options API`,-1)]),l[36]||=i(`p`,null,[s(`You can pass the options as an array to the `),i(`code`,null,`options`),s(` property.`)],-1),o($,null,{default:t(()=>[...l[35]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` options = ref([
  {
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Eat'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-number`},`1`),s(`,
  },
  {
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Sleep'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-number`},`2`),s(`,
  },
  {
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Play game'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-number`},`3`),s(`,
    `),i(`span`,{class:`hljs-attr`},`disabled`),s(`: `),i(`span`,{class:`hljs-literal`},`true`),s(`,
  },
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(`>`)]),s(`{{ value ? value : 'Please Select' }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,M,[i(`h3`,N,[o(Q,{to:`#Cascade`},{default:t(()=>[...l[37]||=[s(`#`,-1)]]),_:1}),l[38]||=s(`Cascade`,-1)]),l[40]||=i(`p`,null,[s(`An array of options may be passed to the `),i(`code`,null,`children`),s(` attribute of options to achieve a cascading effect.`)],-1),o($,null,{default:t(()=>[...l[39]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` options = ref([
  {
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'1'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-number`},`1`),s(`,
  },
  {
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'2'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-number`},`2`),s(`,
    `),i(`span`,{class:`hljs-attr`},`children`),s(`: [
      {
        `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'2-1'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-number`},`21`),s(`,
        `),i(`span`,{class:`hljs-attr`},`children`),s(`: [
          {
            `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'2-1-1'`),s(`,
            `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-number`},`211`),s(`,
          },
          {
            `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'2-1-2'`),s(`,
            `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-number`},`212`),s(`,
          },
        ],
      },
      {
        `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'2-2'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-number`},`22`),s(`,
      },
    ],
  },
  {
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'3'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-number`},`3`),s(`,
  },
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(`>`)]),s(`{{ value ? value : 'Please Select' }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,P,[i(`h3`,F,[o(Q,{to:`#MultipleCascade`},{default:t(()=>[...l[41]||=[s(`#`,-1)]]),_:1}),l[42]||=s(`Multiple Cascade`,-1)]),l[44]||=i(`p`,null,[s(`Cascading multiple selections can be achieved by setting the `),i(`code`,null,`multiple`),s(` attribute on the basis of cascading single selections.`)],-1),o($,null,{default:t(()=>[...l[43]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` options = ref([
  {
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'1'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-number`},`1`),s(`,
  },
  {
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'2'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-number`},`2`),s(`,
    `),i(`span`,{class:`hljs-attr`},`children`),s(`: [
      {
        `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'2-1'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-number`},`21`),s(`,
        `),i(`span`,{class:`hljs-attr`},`children`),s(`: [
          {
            `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'2-1-1'`),s(`,
            `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-number`},`211`),s(`,
          },
          {
            `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'2-1-2'`),s(`,
            `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-number`},`212`),s(`,
          },
        ],
      },
      {
        `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'2-2'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-number`},`22`),s(`,
      },
    ],
  },
  {
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'3'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-number`},`3`),s(`,
  },
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(),i(`span`,{class:`hljs-attr`},`multiple`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(`>`)]),s(`{{ value ? value : 'Please Select' }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,I,[i(`h3`,L,[o(Q,{to:`#OptionsAPIWithCustomizedKey`},{default:t(()=>[...l[45]||=[s(`#`,-1)]]),_:1}),l[46]||=s(`Options API With Customized Key`,-1)]),l[48]||=i(`p`,null,[s(`You can pass the options as an array of objects to the `),i(`code`,null,`options`),s(` property. Use the `),i(`code`,null,`label-key`),s(` and `),i(`code`,null,`value-key`),s(` properties to specify the fields for the label and value within the options array.`)],-1),o($,null,{default:t(()=>[...l[47]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` options = ref([
   {
    `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Eat'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`id`),s(`: `),i(`span`,{class:`hljs-number`},`1`),s(`,
  },
  {
    `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Sleep'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`id`),s(`: `),i(`span`,{class:`hljs-number`},`2`),s(`,
  },
  {
    `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Play game'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`id`),s(`: `),i(`span`,{class:`hljs-number`},`3`),s(`,
    `),i(`span`,{class:`hljs-attr`},`disabled`),s(`: `),i(`span`,{class:`hljs-literal`},`true`),s(`,
  },
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(),i(`span`,{class:`hljs-attr`},`label-key`),s(`=`),i(`span`,{class:`hljs-string`},`"name"`),s(),i(`span`,{class:`hljs-attr`},`value-key`),s(`=`),i(`span`,{class:`hljs-string`},`"id"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(`>`)]),s(`{{ value ? value : 'Please Select' }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-menu-select`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),l[68]||=i(`h2`,null,`API`,-1),i(`div`,R,[i(`h3`,z,[o(Q,{to:`#Props`},{default:t(()=>[...l[49]||=[s(`#`,-1)]]),_:1}),l[50]||=s(`Props`,-1)]),l[51]||=c(`<h4>MenuSelect Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of the binding</td><td><em>any | any[]</em></td><td><code>-</code></td></tr><tr><td><code>v-model:show</code></td><td>Whether to show the menu</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>size</code></td><td>Menu size, optional values <code>normal</code> <code>mini</code> <code>small</code> <code>large</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>multiple</code></td><td>Whether to select multiple</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>scrollable</code></td><td>Whether to enable scrolling</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>close-on-select</code></td><td>Whether to close the menu when selected (selected options in multi-select mode never close the menu)</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>placement</code></td><td>Menu popup placement</td><td><em>Placement</em></td><td><code>cover-top-start</code></td></tr><tr><td><code>strategy</code></td><td>Menu position strategy, optional value is <code>absolute</code> <code>fixed</code></td><td><em>string</em></td><td><code>absolute</code></td></tr><tr><td><code>offset-x</code></td><td>The x-axis offset, relative to the menu-aligned position</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>offset-y</code></td><td>The y-axis offset, relative to the menu-aligned position</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>teleport</code></td><td>The location of the menu mount</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>body</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable the menu</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>trigger</code></td><td>Menu trigger method, optional value is <code>click</code> <code>hover</code> <code>manual</code></td><td><em>string</em></td><td><code>click</code></td></tr><tr><td><code>reference</code></td><td>The trigger element associated with the menu, the <code>string</code> type is the descendant element selector of the menu component, the <code>HTMLElement</code> type is any specified element node</td><td><em>string | HTMLElement</em></td><td><code>-</code></td></tr><tr><td><code>elevation</code></td><td>Elevation level, options <code>true</code> <code>false</code> and level of <code>0-24</code></td><td><em>string | number | boolean</em></td><td><code>true</code></td></tr><tr><td><code>radius</code> <em><strong>3.20.9</strong></em></td><td>Popup menu radius, optional values are <code>normal</code> <code>large</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>same-width</code></td><td>Whether to same width as trigger element</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>popover-class</code></td><td>Class of the popover</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>close-on-click-reference</code></td><td>Whether to close the menu when clicking the reference element</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>options</code> <em><strong>3.3.7</strong></em></td><td>Specifies options</td><td><em>MenuSelectOption[]</em></td><td><code>[]</code></td></tr><tr><td><code>label-key</code> <em><strong>3.3.7</strong></em></td><td>As the key that uniquely identifies label</td><td><em>string</em></td><td><code>label</code></td></tr><tr><td><code>value-key</code> <em><strong>3.3.7</strong></em></td><td>As the key that uniquely identifies value</td><td><em>string</em></td><td><code>value</code></td></tr><tr><td><code>children-key</code> <em><strong>3.8.0</strong></em></td><td>As the key that uniquely identifies children</td><td><em>string</em></td><td><code>children</code></td></tr></tbody></table><h4>MenuSelectOption</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>label</code></td><td>The text of option</td><td><em>string | VNode | (option: MenuSelectOption, selected: boolean) =&gt; VNodeChild</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>The value of option</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>children</code> <em><strong>3.8.0</strong></em></td><td>The children options of option</td><td><em>MenuSelectOption[]</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable option</td><td><em>boolean</em></td><td><code>-</code></td></tr><tr><td><code>ripple</code></td><td>Whether to enable ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table><h4>MenuOption Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>label</code></td><td>The text that the option displays</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>The value of the option binding</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code> <em><strong>3.3.0</strong></em></td><td>Whether to enable ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table>`,6)]),i(`div`,B,[i(`h3`,V,[o(Q,{to:`#Placement`},{default:t(()=>[...l[52]||=[s(`#`,-1)]]),_:1}),l[53]||=s(`Placement`,-1)]),l[54]||=c(`<table><thead><tr><th>Prop</th><th>Description</th></tr></thead><tbody><tr><td><code>top</code></td><td>Top center position</td></tr><tr><td><code>top-start</code></td><td>Top left position</td></tr><tr><td><code>top-end</code></td><td>Top right position</td></tr><tr><td><code>bottom</code></td><td>Bottom center position</td></tr><tr><td><code>bottom-start</code></td><td>Bottom left position</td></tr><tr><td><code>bottom-end</code></td><td>Bottom right position</td></tr><tr><td><code>right</code></td><td>Right center position</td></tr><tr><td><code>right-start</code></td><td>Top right position</td></tr><tr><td><code>right-end</code></td><td>Bottom right position</td></tr><tr><td><code>left</code></td><td>Left center position</td></tr><tr><td><code>left-start</code></td><td>Top left position</td></tr><tr><td><code>left-end</code></td><td>Bottom left position</td></tr><tr><td><code>cover-top</code></td><td>Top center position, overlay trigger</td></tr><tr><td><code>cover-top-start</code></td><td>Top left position, overlay trigger</td></tr><tr><td><code>cover-top-end</code></td><td>Top right position, overlay trigger</td></tr><tr><td><code>cover-bottom</code></td><td>Bottom center position, overlay trigger</td></tr><tr><td><code>cover-bottom-start</code></td><td>Bottom left position, overlay trigger</td></tr><tr><td><code>cover-bottom-end</code></td><td>Bottom right position, overlay trigger</td></tr><tr><td><code>cover-left</code></td><td>Left center position, overlay trigger</td></tr><tr><td><code>cover-right</code></td><td>Right center position, overlay trigger</td></tr></tbody></table>`,1)]),i(`div`,H,[i(`h3`,U,[o(Q,{to:`#Methods`},{default:t(()=>[...l[55]||=[s(`#`,-1)]]),_:1}),l[56]||=s(`Methods`,-1)]),l[57]||=c(`<h4>MenuSelect Methods</h4><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>open</code></td><td>Open Menu</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Close Menu</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>resize</code></td><td>This method can be called to redraw when the default slot element of Menu select changes its position and size</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>setReference</code> <em><strong>3.7.2</strong></em></td><td>Set the trigger element associated with the menu</td><td><code>reference: consistent with the reference of the component attribute</code></td><td><code>-</code></td></tr></tbody></table>`,2)]),i(`div`,W,[i(`h3`,G,[o(Q,{to:`#Events`},{default:t(()=>[...l[58]||=[s(`#`,-1)]]),_:1}),l[59]||=s(`Events`,-1)]),l[60]||=c(`<h4>MenuSelect Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>open</code></td><td>Triggered when the menu is opened</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered when the open menu animation ends</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Triggered when the menu is closed</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the closing menu animation ends</td><td><code>-</code></td></tr><tr><td><code>click-outside</code></td><td>Triggered when clicking outside the menu</td><td><code>event: Event</code></td></tr><tr><td><code>select</code> <em><strong>3.8.0</strong></em></td><td>Triggered when selecting a option</td><td><code>value: any, option: MenuSelectOption</code></td></tr></tbody></table>`,2)]),i(`div`,K,[i(`h3`,q,[o(Q,{to:`#Slots`},{default:t(()=>[...l[61]||=[s(`#`,-1)]]),_:1}),l[62]||=s(`Slots`,-1)]),l[63]||=c(`<h4>MenuSelect Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Menu select trigger element</td><td><code>-</code></td></tr><tr><td><code>options</code></td><td>Menu select options</td><td><code>-</code></td></tr></tbody></table><h4>MenuOption Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Options to display the content</td><td><code>-</code></td></tr></tbody></table>`,4)]),i(`div`,J,[i(`h3`,Y,[o(Q,{to:`#StyleVariables`},{default:t(()=>[...l[64]||=[s(`#`,-1)]]),_:1}),l[65]||=s(`Style Variables`,-1)]),l[66]||=c(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><h4>MenuSelect Variables</h4><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--menu-select-menu-max-height</code></td><td><code>278px</code></td></tr><tr><td><code>--menu-select-menu-padding</code></td><td><code>0</code></td></tr><tr><td><code>--menu-select-menu-border-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--menu-select-menu-large-border-radius</code></td><td><code>8px</code></td></tr><tr><td><code>--menu-select-menu-background-color</code></td><td><code>var(--color-surface-container-high)</code></td></tr></tbody></table><h4>MenuOption Variables</h4><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--menu-option-normal-height</code></td><td><code>38px</code></td></tr><tr><td><code>--menu-option-small-height</code></td><td><code>30px</code></td></tr><tr><td><code>--menu-option-mini-height</code></td><td><code>24px</code></td></tr><tr><td><code>--menu-option-large-height</code></td><td><code>46px</code></td></tr><tr><td><code>--menu-option-padding</code></td><td><code>0 12px</code></td></tr><tr><td><code>--menu-option-normal-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--menu-option-small-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--menu-option-mini-font-size</code></td><td><code>var(--font-size-xs)</code></td></tr><tr><td><code>--menu-option-large-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--menu-option-selected-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--menu-option-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--menu-option-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr></tbody></table>`,5)])])}var Z=e(l,[[`render`,X]]);export{Z as default};