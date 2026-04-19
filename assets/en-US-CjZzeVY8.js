import{L as e,N as t,W as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as c}from"./_plugin-vue_export-helper-V-yks4gF.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`FormExample`},h={class:`card`},g={id:`FormEvents`},_={class:`card`},v={id:`CustomFormComponent`},y={class:`card`},b={id:`Props`},x={class:`card`},S={id:`Methods`},C={class:`card`},w={id:`Events`},T={class:`card`},E={id:`Slots`},D={class:`card`},O={id:`StyleVariables`};function k(c,l,k,A,j,M){let N=e(`router-link`),P=e(`var-site-code-example`);return t(),i(`div`,u,[l[29]||=r(`h1`,null,`Form`,-1),r(`div`,d,[r(`h3`,f,[a(N,{to:`#Intro`},{default:n(()=>[...l[0]||=[o(`#`,-1)]]),_:1}),l[1]||=o(`Intro`,-1)]),l[2]||=r(`p`,null,`Provides the ability to control all form components.`,-1)]),r(`div`,p,[r(`h3`,m,[a(N,{to:`#FormExample`},{default:n(()=>[...l[3]||=[o(`#`,-1)]]),_:1}),l[4]||=o(`Form Example`,-1)]),a(P,null,{default:n(()=>[...l[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { reactive, ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` formData = reactive({
  `),r(`span`,{class:`hljs-attr`},`username`),o(`: `),r(`span`,{class:`hljs-string`},`''`),o(`,
  `),r(`span`,{class:`hljs-attr`},`password`),o(`: `),r(`span`,{class:`hljs-string`},`''`),o(`,
  `),r(`span`,{class:`hljs-attr`},`department`),o(`: `),r(`span`,{class:`hljs-string`},`''`),o(`,
  `),r(`span`,{class:`hljs-attr`},`gender`),o(`: `),r(`span`,{class:`hljs-literal`},`undefined`),o(`,
  `),r(`span`,{class:`hljs-attr`},`license`),o(`: `),r(`span`,{class:`hljs-literal`},`false`),o(`,
  `),r(`span`,{class:`hljs-attr`},`range`),o(`: `),r(`span`,{class:`hljs-number`},`10`),o(`,
  `),r(`span`,{class:`hljs-attr`},`count`),o(`: `),r(`span`,{class:`hljs-number`},`0`),o(`,
  `),r(`span`,{class:`hljs-attr`},`group`),o(`: [],
  `),r(`span`,{class:`hljs-attr`},`score`),o(`: `),r(`span`,{class:`hljs-number`},`0`),o(`,
  `),r(`span`,{class:`hljs-attr`},`like`),o(`: [],
  `),r(`span`,{class:`hljs-attr`},`files`),o(`: []
})
`),r(`span`,{class:`hljs-keyword`},`const`),o(` form = ref(`),r(`span`,{class:`hljs-literal`},`null`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` disabled = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` readonly = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-form`),o(`
    `),r(`span`,{class:`hljs-attr`},`ref`),o(`=`),r(`span`,{class:`hljs-string`},`"form"`),o(`
    `),r(`span`,{class:`hljs-attr`},`:disabled`),o(`=`),r(`span`,{class:`hljs-string`},`"disabled"`),o(`
    `),r(`span`,{class:`hljs-attr`},`:readonly`),o(`=`),r(`span`,{class:`hljs-string`},`"readonly"`),o(`
    `),r(`span`,{class:`hljs-attr`},`scroll-to-error`),o(`=`),r(`span`,{class:`hljs-string`},`"start"`),o(`
  >`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-space`),o(),r(`span`,{class:`hljs-attr`},`direction`),o(`=`),r(`span`,{class:`hljs-string`},`"column"`),o(),r(`span`,{class:`hljs-attr`},`:size`),o(`=`),r(`span`,{class:`hljs-string`},`"[14, 0]"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-input`),o(`
        `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Please input username"`),o(`
        `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"v => !!v || 'The username cannot be empty'"`),o(`
        `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"formData.username"`),o(`
      />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-input`),o(`
        `),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"password"`),o(`
        `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Please input password"`),o(`
        `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"[v => !!v || 'The password cannot be empty', (v) => v.length >= 8 || 'The password cannot be less than 8 characters']"`),o(`
        `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"formData.password"`),o(`
      />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(`
        `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Please select department"`),o(`
        `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"v => !!v || 'The select cannot be empty'"`),o(`
        `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"formData.department"`),o(`
      >`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Eat department"`),o(`  />`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Sleep department"`),o(`  />`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Play game department"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(`
        `),r(`span`,{class:`hljs-attr`},`multiple`),o(`
        `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Please select group"`),o(`
        `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"v => v.length >= 1 || 'The select cannot be empty'"`),o(`
        `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"formData.group"`),o(`
      >`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Eat group"`),o(`  />`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Sleep group"`),o(`  />`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"Play game group"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-radio-group`),o(`
        `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"v => !!v || 'The gender cannot be empty'"`),o(`
        `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"formData.gender"`),o(`
      >`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-radio`),o(),r(`span`,{class:`hljs-attr`},`:checked-value`),o(`=`),r(`span`,{class:`hljs-string`},`"1"`),o(`>`)]),o(`Male`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-radio`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-radio`),o(),r(`span`,{class:`hljs-attr`},`:checked-value`),o(`=`),r(`span`,{class:`hljs-string`},`"2"`),o(`>`)]),o(`Female`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-radio`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-radio-group`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-checkbox-group`),o(`
        `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"v => v.length > 0 || 'The select cannot be empty'"`),o(`
        `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"formData.like"`),o(`
      >`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-checkbox`),o(),r(`span`,{class:`hljs-attr`},`:checked-value`),o(`=`),r(`span`,{class:`hljs-string`},`"1"`),o(`>`)]),o(`Eat`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-checkbox`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-checkbox`),o(),r(`span`,{class:`hljs-attr`},`:checked-value`),o(`=`),r(`span`,{class:`hljs-string`},`"2"`),o(`>`)]),o(`Sleep`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-checkbox`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-checkbox`),o(),r(`span`,{class:`hljs-attr`},`:checked-value`),o(`=`),r(`span`,{class:`hljs-string`},`"3"`),o(`>`)]),o(`Play game`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-checkbox`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-checkbox-group`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-rate`),o(`
        `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"v => v >= 3 || 'It has to be greater than 2'"`),o(`
        `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"formData.score"`),o(`
      />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-switch`),o(`
        `),r(`span`,{class:`hljs-attr`},`variant`),o(`
        `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"v => !!v || 'You must turn on'"`),o(`
        `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"formData.license"`),o(`
      />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-counter`),o(`
        `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"v => v > 10 || 'It has to be greater than 10'"`),o(`
        `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"formData.count"`),o(`
      />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-slider`),o(`
        `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"v => v > 10 || 'It has to be greater than 10'"`),o(`
        `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"formData.range"`),o(`
      />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-uploader`),o(`
        `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"v => v.length >= 1 || 'Upload at least one picture'"`),o(`
        `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"formData.files"`),o(`
      />`)]),o(`

      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-space`),o(),r(`span`,{class:`hljs-attr`},`direction`),o(`=`),r(`span`,{class:`hljs-string`},`"column"`),o(),r(`span`,{class:`hljs-attr`},`:size`),o(`=`),r(`span`,{class:`hljs-string`},`"[14, 0]"`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`block`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"danger"`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"form.reset()"`),o(`>`)]),o(`
          Empty form
        `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`block`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"warning"`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"form.resetValidation()"`),o(`>`)]),o(`
          Empty the validation
        `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`block`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"success"`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"form.validate()"`),o(`>`)]),o(`
          Trigger validation
        `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`block`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"info"`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"disabled = !disabled"`),o(`>`)]),o(`
          Form disabled
        `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`block`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"readonly = !readonly"`),o(`>`)]),o(`
          Form readonly
        `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-space`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-space`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-form`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[a(N,{to:`#FormEvents`},{default:n(()=>[...l[6]||=[o(`#`,-1)]]),_:1}),l[7]||=o(`Form Events`,-1)]),l[9]||=r(`p`,null,`You can also use form events to handle form behavior.`,-1),a(P,null,{default:n(()=>[...l[8]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { reactive } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` formData = reactive({
  `),r(`span`,{class:`hljs-attr`},`username`),o(`: `),r(`span`,{class:`hljs-string`},`''`),o(`,
  `),r(`span`,{class:`hljs-attr`},`password`),o(`: `),r(`span`,{class:`hljs-string`},`''`),o(`,
})

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`handleSubmit`),o(`(`),r(`span`,{class:`hljs-params`},`valid`),o(`) `)]),o(`{
  Snackbar(`),r(`span`,{class:`hljs-string`},[o("`onSubmit: "),r(`span`,{class:`hljs-subst`},"${valid}"),o("`")]),o(`)
}

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`handleReset`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  Snackbar(`),r(`span`,{class:`hljs-string`},`'onReset'`),o(`)
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-form`),o(` @`),r(`span`,{class:`hljs-attr`},`submit`),o(`=`),r(`span`,{class:`hljs-string`},`"handleSubmit"`),o(` @`),r(`span`,{class:`hljs-attr`},`reset`),o(`=`),r(`span`,{class:`hljs-string`},`"handleReset"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-space`),o(),r(`span`,{class:`hljs-attr`},`direction`),o(`=`),r(`span`,{class:`hljs-string`},`"column"`),o(),r(`span`,{class:`hljs-attr`},`:size`),o(`=`),r(`span`,{class:`hljs-string`},`"[14, 0]"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-input`),o(`
        `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Please input username"`),o(`
        `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"v => !!v || 'The username cannot be empty'"`),o(`
        `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"formData.username"`),o(`
      />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-input`),o(`
        `),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"password"`),o(`
        `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Please input password"`),o(`
        `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"[v => !!v || 'The password cannot be empty', (v) => v.length >= 8 || 'The password cannot be less than 8 characters']"`),o(`
        `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"formData.password"`),o(`
      />`)]),o(`

      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-space`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`native-type`),o(`=`),r(`span`,{class:`hljs-string`},`"submit"`),o(`>`)]),o(`
          Submit
        `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`native-type`),o(`=`),r(`span`,{class:`hljs-string`},`"reset"`),o(`>`)]),o(`
          Reset
        `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-space`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-space`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-form`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,_,[r(`h3`,v,[a(N,{to:`#CustomFormComponent`},{default:n(()=>[...l[10]||=[o(`#`,-1)]]),_:1}),l[11]||=o(`Custom Form Component`,-1)]),l[13]||=r(`p`,null,`If you want to customize the component and access the ability of the form component, the case is as follows.`,-1),a(P,{"playground-ignore":``},{default:n(()=>[...l[12]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Form } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { nextTick } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` props = defineProps({
  `),r(`span`,{class:`hljs-attr`},`modelValue`),o(`: `),r(`span`,{class:`hljs-built_in`},`Boolean`),o(`,
  `),r(`span`,{class:`hljs-attr`},`disabled`),o(`: `),r(`span`,{class:`hljs-built_in`},`Boolean`),o(`,
  `),r(`span`,{class:`hljs-attr`},`readonly`),o(`: `),r(`span`,{class:`hljs-built_in`},`Boolean`),o(`,
  `),r(`span`,{class:`hljs-attr`},`rules`),o(`: {
    `),r(`span`,{class:`hljs-attr`},`type`),o(`: `),r(`span`,{class:`hljs-built_in`},`Array`),o(`
  },
  `),r(`span`,{class:`hljs-attr`},`validateTrigger`),o(`: {
    `),r(`span`,{class:`hljs-attr`},`type`),o(`: `),r(`span`,{class:`hljs-built_in`},`Array`),o(`,
    `),r(`span`,{class:`hljs-attr`},`default`),o(`: `),r(`span`,{class:`hljs-function`},`() =>`),o(` [`),r(`span`,{class:`hljs-string`},`'onToggle'`),o(`]
  },
  `),r(`span`,{class:`hljs-attr`},`extraMessage`),o(`: {
    `),r(`span`,{class:`hljs-attr`},`type`),o(`: `),r(`span`,{class:`hljs-built_in`},`String`),o(`
  }
})

`),r(`span`,{class:`hljs-keyword`},`const`),o(` emit = defineEmits([`),r(`span`,{class:`hljs-string`},`'update:modelValue'`),o(`])

`),r(`span`,{class:`hljs-keyword`},`const`),o(` { useForm, useValidation } = Form
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { errorMessage, `),r(`span`,{class:`hljs-attr`},`validateWithTrigger`),o(`: _validateWithTrigger, `),r(`span`,{class:`hljs-attr`},`validate`),o(`: _validate, resetValidation } = useValidation()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { bindForm, form } = useForm()

`),r(`span`,{class:`hljs-keyword`},`const`),o(` reset = `),r(`span`,{class:`hljs-function`},`() =>`),o(` {
  emit(`),r(`span`,{class:`hljs-string`},`'update:modelValue'`),o(`, `),r(`span`,{class:`hljs-literal`},`false`),o(`)
  resetValidation()
}

`),r(`span`,{class:`hljs-keyword`},`const`),o(` validate = `),r(`span`,{class:`hljs-function`},`() =>`),o(` _validate(props.rules, props.modelValue)

`),r(`span`,{class:`hljs-keyword`},`const`),o(` validateWithTrigger = `),r(`span`,{class:`hljs-function`},[o(`(`),r(`span`,{class:`hljs-params`},`trigger`),o(`) =>`)]),o(` {
  nextTick(`),r(`span`,{class:`hljs-function`},`() =>`),o(` {
    `),r(`span`,{class:`hljs-keyword`},`const`),o(` { validateTrigger, rules, modelValue } = props
    _validateWithTrigger(validateTrigger, trigger, rules, modelValue)
  })
}

`),r(`span`,{class:`hljs-keyword`},`const`),o(` handleClick = `),r(`span`,{class:`hljs-function`},`() =>`),o(` {
  `),r(`span`,{class:`hljs-keyword`},`if`),o(` (
    props.readonly ||
    props.disabled ||
    form?.readonly.value ||
    form?.disabled.value
  ) {
    `),r(`span`,{class:`hljs-keyword`},`return`),o(`
  }

  emit(`),r(`span`,{class:`hljs-string`},`'update:modelValue'`),o(`, !props.modelValue)
  validateWithTrigger(`),r(`span`,{class:`hljs-string`},`'onToggle'`),o(`)
}

`),r(`span`,{class:`hljs-keyword`},`const`),o(` apis = {
  reset,
  validate,
  resetValidation
}

defineExpose(apis)
bindForm?.(apis)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(`
    `),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"var-custom-form-component"`),o(`
    `),r(`span`,{class:`hljs-attr`},`:class`),o(`=`),r(`span`,{class:`hljs-string`},`"{
      'var-custom-form-component--disabled': disabled || form?.disabled.value,
      'var-custom-form-component--error': errorMessage,
    }"`),o(`
  >`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"var-custom-form-component__container"`),o(`  @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"handleClick"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(`
        `),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"var-custom-form-component__icon"`),o(`
        `),r(`span`,{class:`hljs-attr`},`:name`),o(`=`),r(`span`,{class:`hljs-string`},`"modelValue ? 'checkbox-marked-circle' : 'close-circle'"`),o(`
        `),r(`span`,{class:`hljs-attr`},`:transition`),o(`=`),r(`span`,{class:`hljs-string`},`"250"`),o(`
      />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`slot`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-form-details`),o(),r(`span`,{class:`hljs-attr`},`:error-message`),o(`=`),r(`span`,{class:`hljs-string`},`"errorMessage"`),o(),r(`span`,{class:`hljs-attr`},`:extra-message`),o(`=`),r(`span`,{class:`hljs-string`},`"extraMessage"`),o(` />`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),r(`span`,{class:`css`},[o(`
`),r(`span`,{class:`hljs-selector-class`},`.var-custom-form-component`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`cursor`),o(`: pointer;
}

`),r(`span`,{class:`hljs-selector-class`},`.var-custom-form-component__container`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`display`),o(`: flex;
  `),r(`span`,{class:`hljs-attribute`},`align-items`),o(`: center;
}

`),r(`span`,{class:`hljs-selector-class`},`.var-custom-form-component__icon`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`margin-right`),o(`: `),r(`span`,{class:`hljs-number`},`6px`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`font-size`),o(`: `),r(`span`,{class:`hljs-number`},`24px`),o(`;
}

`),r(`span`,{class:`hljs-selector-class`},`.var-custom-form-component--disabled`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`color`),o(`: `),r(`span`,{class:`hljs-built_in`},`var`),o(`(--color-text-disabled);
  `),r(`span`,{class:`hljs-attribute`},`cursor`),o(`: not-allowed;
}

`),r(`span`,{class:`hljs-selector-class`},`.var-custom-form-component--error`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`color`),o(`: `),r(`span`,{class:`hljs-built_in`},`var`),o(`(--color-danger);
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),l[30]||=r(`h2`,null,`API`,-1),r(`div`,y,[r(`h3`,b,[a(N,{to:`#Props`},{default:n(()=>[...l[14]||=[o(`#`,-1)]]),_:1}),l[15]||=o(`Props`,-1)]),l[16]||=s(`<h4>Form Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>scroll-to-error</code></td><td>Whether to scroll to the failed form item when the validation fails, the optional value is <code>start</code> <code>end</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>scroll-to-error-offset-y</code></td><td>Scroll to the position offset of the form item that fails validation</td><td><em>number | string</em></td><td><code>0</code></td></tr></tbody></table><h4>FormDetails Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>error-message</code></td><td>Error message</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>extra-message</code></td><td>Extra message</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table>`,4)]),r(`div`,x,[r(`h3`,S,[a(N,{to:`#Methods`},{default:n(()=>[...l[17]||=[o(`#`,-1)]]),_:1}),l[18]||=o(`Methods`,-1)]),l[19]||=s(`<h4>Form Methods</h4><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>validate</code></td><td>Trigger validation for all form components</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clear the validation messages for all form components</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear all form component bindings of values and validation messages</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>`,2)]),r(`div`,C,[r(`h3`,w,[a(N,{to:`#Events`},{default:n(()=>[...l[20]||=[o(`#`,-1)]]),_:1}),l[21]||=o(`Events`,-1)]),l[22]||=s(`<h4>Form Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>submit</code></td><td>Triggered when the form is submitted</td><td><code>valid: boolean</code> Whether to pass the form verification</td></tr><tr><td><code>reset</code></td><td>Fired when the form is reset</td><td><code>-</code></td></tr></tbody></table>`,2)]),r(`div`,T,[r(`h3`,E,[a(N,{to:`#Slots`},{default:n(()=>[...l[23]||=[o(`#`,-1)]]),_:1}),l[24]||=o(`Slots`,-1)]),l[25]||=s(`<h4>Form Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Form content</td><td><code>-</code></td></tr></tbody></table>`,2)]),r(`div`,D,[r(`h3`,O,[a(N,{to:`#StyleVariables`},{default:n(()=>[...l[26]||=[o(`#`,-1)]]),_:1}),l[27]||=o(`Style Variables`,-1)]),l[28]||=s(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><h4>FormDetails Variables</h4><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--form-details-error-message-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--form-details-extra-message-color</code></td><td><code>#888</code></td></tr><tr><td><code>--form-details-margin-top</code></td><td><code>6px</code></td></tr><tr><td><code>--form-details-font-size</code></td><td><code>12px</code></td></tr><tr><td><code>--form-details-message-margin-right</code></td><td><code>4px</code></td></tr></tbody></table>`,3)])])}var A=c(l,[[`render`,k]]);export{A as default};