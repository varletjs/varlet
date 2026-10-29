import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`FormExample`},h={class:`card`},g={id:`FormEvents`},_={class:`card`},v={id:`CustomFormComponent`},y={class:`card`},b={id:`Props`},x={class:`card`},S={id:`Methods`},C={class:`card`},w={id:`Events`},T={class:`card`},E={id:`Slots`},D={class:`card`},O={id:`StyleVariables`};function k(e,l,k,A,j,M){let N=n(`router-link`),P=n(`var-site-code-example`);return r(),a(`div`,u,[l[29]||=i(`h1`,null,`Form`,-1),i(`div`,d,[i(`h3`,f,[o(N,{to:`#Intro`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`Intro`,-1)]),l[2]||=i(`p`,null,`Provides the ability to control all form components.`,-1)]),i(`div`,p,[i(`h3`,m,[o(N,{to:`#FormExample`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`Form Example`,-1)]),o(P,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { computed, reactive, ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` formData = reactive({
  `),i(`span`,{class:`hljs-attr`},`username`),s(`: `),i(`span`,{class:`hljs-string`},`''`),s(`,
  `),i(`span`,{class:`hljs-attr`},`password`),s(`: `),i(`span`,{class:`hljs-string`},`''`),s(`,
  `),i(`span`,{class:`hljs-attr`},`otp`),s(`: `),i(`span`,{class:`hljs-string`},`''`),s(`,
  `),i(`span`,{class:`hljs-attr`},`email`),s(`: `),i(`span`,{class:`hljs-string`},`''`),s(`,
  `),i(`span`,{class:`hljs-attr`},`date`),s(`: `),i(`span`,{class:`hljs-string`},`''`),s(`,
  `),i(`span`,{class:`hljs-attr`},`datetimeRange`),s(`: [],
  `),i(`span`,{class:`hljs-attr`},`department`),s(`: `),i(`span`,{class:`hljs-string`},`''`),s(`,
  `),i(`span`,{class:`hljs-attr`},`period`),s(`: `),i(`span`,{class:`hljs-literal`},`undefined`),s(`,
  `),i(`span`,{class:`hljs-attr`},`gender`),s(`: `),i(`span`,{class:`hljs-literal`},`undefined`),s(`,
  `),i(`span`,{class:`hljs-attr`},`license`),s(`: `),i(`span`,{class:`hljs-literal`},`false`),s(`,
  `),i(`span`,{class:`hljs-attr`},`range`),s(`: `),i(`span`,{class:`hljs-number`},`0`),s(`,
  `),i(`span`,{class:`hljs-attr`},`count`),s(`: `),i(`span`,{class:`hljs-number`},`0`),s(`,
  `),i(`span`,{class:`hljs-attr`},`group`),s(`: [],
  `),i(`span`,{class:`hljs-attr`},`score`),s(`: `),i(`span`,{class:`hljs-number`},`0`),s(`,
  `),i(`span`,{class:`hljs-attr`},`like`),s(`: [],
  `),i(`span`,{class:`hljs-attr`},`files`),s(`: [],
  `),i(`span`,{class:`hljs-attr`},`custom`),s(`: `),i(`span`,{class:`hljs-literal`},`false`),s(`,
})
`),i(`span`,{class:`hljs-keyword`},`const`),s(` form = ref(`),i(`span`,{class:`hljs-literal`},`null`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` disabled = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` readonly = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)

`),i(`span`,{class:`hljs-keyword`},`const`),s(` suggestions = computed(`),i(`span`,{class:`hljs-function`},`() =>`),s(`
  [`),i(`span`,{class:`hljs-string`},`'@qq.com'`),s(`, `),i(`span`,{class:`hljs-string`},`'@163.com'`),s(`, `),i(`span`,{class:`hljs-string`},`'@gmail.com'`),s(`].map(`),i(`span`,{class:`hljs-function`},[s(`(`),i(`span`,{class:`hljs-params`},`suffix`),s(`) =>`)]),s(` {
    `),i(`span`,{class:`hljs-keyword`},`const`),s(` [prefix] = formData.email.split(`),i(`span`,{class:`hljs-string`},`'@'`),s(`)
    `),i(`span`,{class:`hljs-keyword`},`return`),s(` {
      `),i(`span`,{class:`hljs-attr`},`label`),s(`: prefix + suffix,
      `),i(`span`,{class:`hljs-attr`},`value`),s(`: prefix + suffix,
    }
  }),
)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-form`),s(`
    `),i(`span`,{class:`hljs-attr`},`ref`),s(`=`),i(`span`,{class:`hljs-string`},`"form"`),s(`
    `),i(`span`,{class:`hljs-attr`},`:disabled`),s(`=`),i(`span`,{class:`hljs-string`},`"disabled"`),s(`
    `),i(`span`,{class:`hljs-attr`},`:readonly`),s(`=`),i(`span`,{class:`hljs-string`},`"readonly"`),s(`
    `),i(`span`,{class:`hljs-attr`},`scroll-to-error`),s(`=`),i(`span`,{class:`hljs-string`},`"start"`),s(`
    `),i(`span`,{class:`hljs-attr`},`scroll-to-error-offset-y`),s(`=`),i(`span`,{class:`hljs-string`},`"14.4vmin"`),s(`
  >`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(),i(`span`,{class:`hljs-attr`},`direction`),s(`=`),i(`span`,{class:`hljs-string`},`"column"`),s(),i(`span`,{class:`hljs-attr`},`:size`),s(`=`),i(`span`,{class:`hljs-string`},`"['4vmin', 0]"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-input`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.username"`),s(`
        `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Please input username"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => !!v || 'The username cannot be empty']"`),s(`
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-input`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.password"`),s(`
        `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
        `),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"password"`),s(`
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Please input password"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[v => !!v || 'The password cannot be empty', (v) => v.length >= 8 || 'The password cannot be less than 8 characters']"`),s(`
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.email"`),s(`
        `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Please input email"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => !!v || 'The email cannot be empty']"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"suggestions"`),s(`
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.date"`),s(`
        `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Please select date"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => !!v || 'A date must be selected']"`),s(`
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.datetimeRange"`),s(`
        `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
        `),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"datetime"`),s(`
        `),i(`span`,{class:`hljs-attr`},`range`),s(`
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Please select datetime range"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => v.length === 2 || 'A datetime range must be selected']"`),s(`
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.department"`),s(`
        `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Please select department"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => !!v || 'The select cannot be empty']"`),s(`
      >`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Eat department"`),s(`  />`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Sleep department"`),s(`  />`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Play game department"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.group"`),s(`
        `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
        `),i(`span`,{class:`hljs-attr`},`multiple`),s(`
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Please select group"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => v.length >= 1 || 'The select cannot be empty']"`),s(`
      >`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Eat group"`),s(`  />`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Sleep group"`),s(`  />`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"Play game group"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-segmented-buttons`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.period"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => !!v || 'A period must be selected']"`),s(`
      >`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-segmented-button`),s(),i(`span`,{class:`hljs-attr`},`checked-value`),s(`=`),i(`span`,{class:`hljs-string`},`"day"`),s(`>`)]),s(`Day`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-segmented-button`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-segmented-button`),s(),i(`span`,{class:`hljs-attr`},`checked-value`),s(`=`),i(`span`,{class:`hljs-string`},`"week"`),s(`>`)]),s(`Week`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-segmented-button`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-segmented-button`),s(),i(`span`,{class:`hljs-attr`},`checked-value`),s(`=`),i(`span`,{class:`hljs-string`},`"month"`),s(`>`)]),s(`Month`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-segmented-button`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-segmented-buttons`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-radio-group`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.gender"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => !!v || 'The gender cannot be empty']"`),s(`
      >`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-radio`),s(),i(`span`,{class:`hljs-attr`},`:checked-value`),s(`=`),i(`span`,{class:`hljs-string`},`"1"`),s(`>`)]),s(`Male`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-radio`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-radio`),s(),i(`span`,{class:`hljs-attr`},`:checked-value`),s(`=`),i(`span`,{class:`hljs-string`},`"2"`),s(`>`)]),s(`Female`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-radio`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-radio-group`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-checkbox-group`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.like"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => v.length > 0 || 'The select cannot be empty']"`),s(`
      >`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-checkbox`),s(),i(`span`,{class:`hljs-attr`},`:checked-value`),s(`=`),i(`span`,{class:`hljs-string`},`"1"`),s(`>`)]),s(`Eat`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-checkbox`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-checkbox`),s(),i(`span`,{class:`hljs-attr`},`:checked-value`),s(`=`),i(`span`,{class:`hljs-string`},`"2"`),s(`>`)]),s(`Sleep`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-checkbox`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-checkbox`),s(),i(`span`,{class:`hljs-attr`},`:checked-value`),s(`=`),i(`span`,{class:`hljs-string`},`"3"`),s(`>`)]),s(`Play game`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-checkbox`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-checkbox-group`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-rate`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.score"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => v >= 3 || 'It has to be greater than 2']"`),s(`
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-switch`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.license"`),s(`
        `),i(`span`,{class:`hljs-attr`},`variant`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => !!v || 'You must turn on']"`),s(`
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-counter`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.count"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => v > 10 || 'It has to be greater than 10']"`),s(`
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-slider`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.range"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => v > 10 || 'It has to be greater than 10']"`),s(`
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-otp-input`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.otp"`),s(`
        `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[v => !!v || 'The OTP cannot be empty', (v) => v.length === 6 || 'The OTP length must be 6']"`),s(`
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-uploader`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.files"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => v.length >= 1 || 'Upload at least one picture']"`),s(`
      />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`

    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-custom-form-component`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.custom"`),s(`
      `),i(`span`,{class:`hljs-attr`},`extra-message`),s(`=`),i(`span`,{class:`hljs-string`},`"Extra message"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => !!v || 'Please check it']"`),s(`
    >`)]),s(`
      Click toggle
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-custom-form-component`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-form`),s(`>`)]),s(`

  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(),i(`span`,{class:`hljs-attr`},`direction`),s(`=`),i(`span`,{class:`hljs-string`},`"column"`),s(),i(`span`,{class:`hljs-attr`},`:size`),s(`=`),i(`span`,{class:`hljs-string`},`"['4vmin', 0]"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`block`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"danger"`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"form.reset()"`),s(`>`)]),s(`
      Empty form
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`block`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"form.resetValidation()"`),s(`>`)]),s(`
      Empty the validation
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`block`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"success"`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"form.validate()"`),s(`>`)]),s(`
      Trigger validation
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`block`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"info"`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"disabled = !disabled"`),s(`>`)]),s(`
      Form disabled
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`block`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"readonly = !readonly"`),s(`>`)]),s(`
      Form readonly
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(N,{to:`#FormEvents`},{default:t(()=>[...l[6]||=[s(`#`,-1)]]),_:1}),l[7]||=s(`Form Events`,-1)]),l[9]||=i(`p`,null,`You can also use form events to handle form behavior.`,-1),o(P,null,{default:t(()=>[...l[8]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { reactive } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Snackbar } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` formData = reactive({
  `),i(`span`,{class:`hljs-attr`},`username`),s(`: `),i(`span`,{class:`hljs-string`},`''`),s(`,
  `),i(`span`,{class:`hljs-attr`},`password`),s(`: `),i(`span`,{class:`hljs-string`},`''`),s(`,
})

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`handleSubmit`),s(`(`),i(`span`,{class:`hljs-params`},`valid`),s(`) `)]),s(`{
  Snackbar(`),i(`span`,{class:`hljs-string`},[s("`onSubmit: "),i(`span`,{class:`hljs-subst`},"${valid}"),s("`")]),s(`)
}

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`handleReset`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  Snackbar(`),i(`span`,{class:`hljs-string`},`'onReset'`),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-form`),s(` @`),i(`span`,{class:`hljs-attr`},`submit`),s(`=`),i(`span`,{class:`hljs-string`},`"handleSubmit"`),s(` @`),i(`span`,{class:`hljs-attr`},`reset`),s(`=`),i(`span`,{class:`hljs-string`},`"handleReset"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(),i(`span`,{class:`hljs-attr`},`direction`),s(`=`),i(`span`,{class:`hljs-string`},`"column"`),s(),i(`span`,{class:`hljs-attr`},`:size`),s(`=`),i(`span`,{class:`hljs-string`},`"[14, 0]"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-input`),s(`
        `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Please input username"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"v => !!v || 'The username cannot be empty'"`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.username"`),s(`
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-input`),s(`
        `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
        `),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"password"`),s(`
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Please input password"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[v => !!v || 'The password cannot be empty', (v) => v.length >= 8 || 'The password cannot be less than 8 characters']"`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.password"`),s(`
      />`)]),s(`

      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`native-type`),s(`=`),i(`span`,{class:`hljs-string`},`"submit"`),s(`>`)]),s(`
          Submit
        `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`native-type`),s(`=`),i(`span`,{class:`hljs-string`},`"reset"`),s(`>`)]),s(`
          Reset
        `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-form`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,_,[i(`h3`,v,[o(N,{to:`#CustomFormComponent`},{default:t(()=>[...l[10]||=[s(`#`,-1)]]),_:1}),l[11]||=s(`Custom Form Component`,-1)]),l[13]||=i(`p`,null,`If you want to customize the component and access the ability of the form component, the case is as follows.`,-1),o(P,{"playground-ignore":``},{default:t(()=>[...l[12]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Form } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { nextTick } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` props = defineProps({
  `),i(`span`,{class:`hljs-attr`},`modelValue`),s(`: `),i(`span`,{class:`hljs-built_in`},`Boolean`),s(`,
  `),i(`span`,{class:`hljs-attr`},`disabled`),s(`: `),i(`span`,{class:`hljs-built_in`},`Boolean`),s(`,
  `),i(`span`,{class:`hljs-attr`},`readonly`),s(`: `),i(`span`,{class:`hljs-built_in`},`Boolean`),s(`,
  `),i(`span`,{class:`hljs-attr`},`rules`),s(`: {
    `),i(`span`,{class:`hljs-attr`},`type`),s(`: `),i(`span`,{class:`hljs-built_in`},`Array`),s(`
  },
  `),i(`span`,{class:`hljs-attr`},`validateTrigger`),s(`: {
    `),i(`span`,{class:`hljs-attr`},`type`),s(`: `),i(`span`,{class:`hljs-built_in`},`Array`),s(`,
    `),i(`span`,{class:`hljs-attr`},`default`),s(`: `),i(`span`,{class:`hljs-function`},`() =>`),s(` [`),i(`span`,{class:`hljs-string`},`'onToggle'`),s(`]
  },
  `),i(`span`,{class:`hljs-attr`},`extraMessage`),s(`: {
    `),i(`span`,{class:`hljs-attr`},`type`),s(`: `),i(`span`,{class:`hljs-built_in`},`String`),s(`
  }
})

`),i(`span`,{class:`hljs-keyword`},`const`),s(` emit = defineEmits([`),i(`span`,{class:`hljs-string`},`'update:modelValue'`),s(`])

`),i(`span`,{class:`hljs-keyword`},`const`),s(` { useForm, useValidation } = Form
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { errorMessage, `),i(`span`,{class:`hljs-attr`},`validateWithTrigger`),s(`: _validateWithTrigger, `),i(`span`,{class:`hljs-attr`},`validate`),s(`: _validate, resetValidation } = useValidation()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { bindForm, form } = useForm()

`),i(`span`,{class:`hljs-keyword`},`const`),s(` reset = `),i(`span`,{class:`hljs-function`},`() =>`),s(` {
  emit(`),i(`span`,{class:`hljs-string`},`'update:modelValue'`),s(`, `),i(`span`,{class:`hljs-literal`},`false`),s(`)
  resetValidation()
}

`),i(`span`,{class:`hljs-keyword`},`const`),s(` validate = `),i(`span`,{class:`hljs-function`},`() =>`),s(` _validate(props.rules, props.modelValue)

`),i(`span`,{class:`hljs-keyword`},`const`),s(` validateWithTrigger = `),i(`span`,{class:`hljs-function`},[s(`(`),i(`span`,{class:`hljs-params`},`trigger`),s(`) =>`)]),s(` {
  nextTick(`),i(`span`,{class:`hljs-function`},`() =>`),s(` {
    `),i(`span`,{class:`hljs-keyword`},`const`),s(` { validateTrigger, rules, modelValue } = props
    _validateWithTrigger(validateTrigger, trigger, rules, modelValue)
  })
}

`),i(`span`,{class:`hljs-keyword`},`const`),s(` handleClick = `),i(`span`,{class:`hljs-function`},`() =>`),s(` {
  `),i(`span`,{class:`hljs-keyword`},`if`),s(` (
    props.readonly ||
    props.disabled ||
    form?.readonly.value ||
    form?.disabled.value
  ) {
    `),i(`span`,{class:`hljs-keyword`},`return`),s(`
  }

  emit(`),i(`span`,{class:`hljs-string`},`'update:modelValue'`),s(`, !props.modelValue)
  validateWithTrigger(`),i(`span`,{class:`hljs-string`},`'onToggle'`),s(`)
}

`),i(`span`,{class:`hljs-keyword`},`const`),s(` apis = {
  reset,
  validate,
  resetValidation
}

defineExpose(apis)
bindForm?.(apis)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(`
    `),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"var-custom-form-component"`),s(`
    `),i(`span`,{class:`hljs-attr`},`:class`),s(`=`),i(`span`,{class:`hljs-string`},`"{
      'var-custom-form-component--disabled': disabled || form?.disabled.value,
      'var-custom-form-component--error': errorMessage,
    }"`),s(`
  >`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"var-custom-form-component__container"`),s(`  @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"handleClick"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(`
        `),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"var-custom-form-component__icon"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:name`),s(`=`),i(`span`,{class:`hljs-string`},`"modelValue ? 'checkbox-marked-circle' : 'close-circle'"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:transition`),s(`=`),i(`span`,{class:`hljs-string`},`"250"`),s(`
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`slot`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-form-details`),s(),i(`span`,{class:`hljs-attr`},`:error-message`),s(`=`),i(`span`,{class:`hljs-string`},`"errorMessage"`),s(),i(`span`,{class:`hljs-attr`},`:extra-message`),s(`=`),i(`span`,{class:`hljs-string`},`"extraMessage"`),s(` />`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.var-custom-form-component`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`cursor`),s(`: pointer;
}

`),i(`span`,{class:`hljs-selector-class`},`.var-custom-form-component__container`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`display`),s(`: flex;
  `),i(`span`,{class:`hljs-attribute`},`align-items`),s(`: center;
}

`),i(`span`,{class:`hljs-selector-class`},`.var-custom-form-component__icon`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`margin-right`),s(`: `),i(`span`,{class:`hljs-number`},`6px`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`font-size`),s(`: `),i(`span`,{class:`hljs-number`},`24px`),s(`;
}

`),i(`span`,{class:`hljs-selector-class`},`.var-custom-form-component--disabled`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`color`),s(`: `),i(`span`,{class:`hljs-built_in`},`var`),s(`(--color-text-disabled);
  `),i(`span`,{class:`hljs-attribute`},`cursor`),s(`: not-allowed;
}

`),i(`span`,{class:`hljs-selector-class`},`.var-custom-form-component--error`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`color`),s(`: `),i(`span`,{class:`hljs-built_in`},`var`),s(`(--color-danger);
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),l[30]||=i(`h2`,null,`API`,-1),i(`div`,y,[i(`h3`,b,[o(N,{to:`#Props`},{default:t(()=>[...l[14]||=[s(`#`,-1)]]),_:1}),l[15]||=s(`Props`,-1)]),l[16]||=c(`<h4>Form Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>scroll-to-error</code></td><td>Whether to scroll to the failed form item when the validation fails, the optional value is <code>start</code> <code>end</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>scroll-to-error-offset-y</code></td><td>Scroll to the position offset of the form item that fails validation</td><td><em>number | string</em></td><td><code>0</code></td></tr></tbody></table><h4>FormDetails Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>error-message</code></td><td>Error message</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>extra-message</code></td><td>Extra message</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table>`,4)]),i(`div`,x,[i(`h3`,S,[o(N,{to:`#Methods`},{default:t(()=>[...l[17]||=[s(`#`,-1)]]),_:1}),l[18]||=s(`Methods`,-1)]),l[19]||=c(`<h4>Form Methods</h4><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>validate</code></td><td>Trigger validation for all form components</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clear the validation messages for all form components</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear all form component bindings of values and validation messages</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>`,2)]),i(`div`,C,[i(`h3`,w,[o(N,{to:`#Events`},{default:t(()=>[...l[20]||=[s(`#`,-1)]]),_:1}),l[21]||=s(`Events`,-1)]),l[22]||=c(`<h4>Form Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>submit</code></td><td>Triggered when the form is submitted</td><td><code>valid: boolean</code> Whether to pass the form verification</td></tr><tr><td><code>reset</code></td><td>Fired when the form is reset</td><td><code>-</code></td></tr></tbody></table>`,2)]),i(`div`,T,[i(`h3`,E,[o(N,{to:`#Slots`},{default:t(()=>[...l[23]||=[s(`#`,-1)]]),_:1}),l[24]||=s(`Slots`,-1)]),l[25]||=c(`<h4>Form Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Form content</td><td><code>-</code></td></tr></tbody></table>`,2)]),i(`div`,D,[i(`h3`,O,[o(N,{to:`#StyleVariables`},{default:t(()=>[...l[26]||=[s(`#`,-1)]]),_:1}),l[27]||=s(`Style Variables`,-1)]),l[28]||=c(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><h4>FormDetails Variables</h4><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--form-details-error-message-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--form-details-extra-message-color</code></td><td><code>#888</code></td></tr><tr><td><code>--form-details-margin-top</code></td><td><code>6px</code></td></tr><tr><td><code>--form-details-font-size</code></td><td><code>12px</code></td></tr><tr><td><code>--form-details-message-margin-right</code></td><td><code>4px</code></td></tr></tbody></table>`,3)])])}var A=e(l,[[`render`,k]]);export{A as default};