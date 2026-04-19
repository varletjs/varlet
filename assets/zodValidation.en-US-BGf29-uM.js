import{L as e,N as t,W as n,c as r,d as i,g as a,h as o}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as s}from"./_plugin-vue_export-helper-V-yks4gF.js";var c={components:{}},l={class:`varlet-site-doc`},u={class:`card`},d={id:`Intro`},f={class:`card`},p={id:`InstallZod`},m={class:`card`},h={id:`BasicUsage`},g={class:`card`},_={id:`UseWithTypescript`};function v(s,c,v,y,b,x){let S=e(`router-link`),C=e(`var-site-code-example`);return t(),i(`div`,l,[c[15]||=r(`h1`,null,`Zod Validation`,-1),r(`div`,u,[r(`h3`,d,[a(S,{to:`#Intro`},{default:n(()=>[...c[0]||=[o(`#`,-1)]]),_:1}),c[1]||=o(`Intro`,-1)]),c[2]||=r(`p`,null,[o(`We support form validation based on `),r(`a`,{href:`https://zod.dev/`},`Zod`),o(` in `),r(`code`,null,`3.5.0+`),o(`. `),r(`code`,null,`Zod`),o(` is a very powerful data validation tool and is very friendly to `),r(`code`,null,`Typescript`),o(`.`)],-1)]),r(`div`,f,[r(`h3`,p,[a(S,{to:`#InstallZod`},{default:n(()=>[...c[3]||=[o(`#`,-1)]]),_:1}),c[4]||=o(`Install Zod`,-1)]),c[6]||=r(`p`,null,[o(`In order to control the size of the component library, we do not build-in `),r(`code`,null,`Zod`),o(`, so you need to install it manually.`)],-1),a(C,null,{default:n(()=>[...c[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-meta`},`#`),r(`span`,{class:`bash`},` npm`),o(`
npm i zod -S   
`),r(`span`,{class:`hljs-meta`},`
#`),r(`span`,{class:`bash`},` yarn`),o(`
yarn add zod    
`),r(`span`,{class:`hljs-meta`},`
#`),r(`span`,{class:`bash`},` pnpm`),o(`
pnpm add zod
`)])],-1)]]),_:1})]),r(`div`,m,[r(`h3`,h,[a(S,{to:`#BasicUsage`},{default:n(()=>[...c[7]||=[o(`#`,-1)]]),_:1}),c[8]||=o(`Basic Usage`,-1)]),c[10]||=r(`p`,null,[o(`The `),r(`code`,null,`rules`),o(` property of each form component supports passing in one or more `),r(`code`,null,`Zod Schema`),o(`. The component will use the rules of the `),r(`code`,null,`Schema`),o(` for validation, and when validation fails, the error message defined in it will be used as a user prompt.`)],-1),a(C,null,{default:n(()=>[...c[9]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { z } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'zod'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` user = ref({
  `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`''`),o(`,
  `),r(`span`,{class:`hljs-attr`},`email`),o(`: `),r(`span`,{class:`hljs-string`},`''`),o(`,
  `),r(`span`,{class:`hljs-attr`},`password`),o(`: `),r(`span`,{class:`hljs-string`},`''`),o(`,
  `),r(`span`,{class:`hljs-attr`},`repeatPassword`),o(`: `),r(`span`,{class:`hljs-string`},`''`),o(`
})

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`handleSubmit`),o(`(`),r(`span`,{class:`hljs-params`},`valid`),o(`) `)]),o(`{
  `),r(`span`,{class:`hljs-built_in`},`console`),o(`.log(valid)
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-form`),o(` @`),r(`span`,{class:`hljs-attr`},`submit`),o(`=`),r(`span`,{class:`hljs-string`},`"handleSubmit"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-space`),o(),r(`span`,{class:`hljs-attr`},`direction`),o(`=`),r(`span`,{class:`hljs-string`},`"column"`),o(),r(`span`,{class:`hljs-attr`},`size`),o(`=`),r(`span`,{class:`hljs-string`},`"large"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-input`),o(` 
        `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Name"`),o(` 
        `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"z.string().min(1, 'Name required')"`),o(` 
        `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"user.name"`),o(`
       />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-input`),o(` 
        `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Email"`),o(` 
        `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"z.string().email('Email format error')"`),o(` 
        `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"user.email"`),o(` 
      />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-input`),o(` 
        `),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"password"`),o(`
        `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Password"`),o(` 
        `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"z.string().min(6, 'Password must be at least 6 characters')"`),o(`
        `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"user.password"`),o(` 
      />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-input`),o(` 
        `),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"password"`),o(` 
        `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Confirmation Password"`),o(`
        `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"[z.string().min(6, 'Confirmation password must be at least 6 characters'), v => v === user.password || 'Does not match password']"`),o(` 
        `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"user.repeatPassword"`),o(` 
      />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`native-type`),o(`=`),r(`span`,{class:`hljs-string`},`"submit"`),o(`>`)]),o(`Submit`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-space`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-form`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,g,[r(`h3`,_,[a(S,{to:`#UseWithTypescript`},{default:n(()=>[...c[11]||=[o(`#`,-1)]]),_:1}),c[12]||=o(`Use With Typescript`,-1)]),c[14]||=r(`p`,null,[o(`If you use `),r(`code`,null,`Typescript`),o(`, define a `),r(`code`,null,`Zod Schema`),o(` to get both Typescript types and form rules.`)],-1),a(C,null,{default:n(()=>[...c[13]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(),r(`span`,{class:`hljs-attr`},`lang`),o(`=`),r(`span`,{class:`hljs-string`},`"ts"`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { z } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'zod'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` UserSchema = z.object({
  `),r(`span`,{class:`hljs-attr`},`name`),o(`: z.string().min(`),r(`span`,{class:`hljs-number`},`1`),o(`, `),r(`span`,{class:`hljs-string`},`'Name required'`),o(`),
  `),r(`span`,{class:`hljs-attr`},`email`),o(`: z.string().email(`),r(`span`,{class:`hljs-string`},`'Email format error'`),o(`),
  `),r(`span`,{class:`hljs-attr`},`password`),o(`: z.string().min(`),r(`span`,{class:`hljs-number`},`6`),o(`, `),r(`span`,{class:`hljs-string`},`'Password must be at least 6 characters'`),o(`),
  `),r(`span`,{class:`hljs-attr`},`repeatPassword`),o(`: z.string().min(`),r(`span`,{class:`hljs-number`},`6`),o(`, `),r(`span`,{class:`hljs-string`},`'Confirmation password must be at least 6 characters'`),o(`),
})

`),r(`span`,{class:`hljs-keyword`},`const`),o(` user = ref<z.infer<`),r(`span`,{class:`hljs-keyword`},`typeof`),o(` UserSchema>>({
  `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`''`),o(`,
  `),r(`span`,{class:`hljs-attr`},`email`),o(`: `),r(`span`,{class:`hljs-string`},`''`),o(`,
  `),r(`span`,{class:`hljs-attr`},`password`),o(`: `),r(`span`,{class:`hljs-string`},`''`),o(`,
  `),r(`span`,{class:`hljs-attr`},`repeatPassword`),o(`: `),r(`span`,{class:`hljs-string`},`''`),o(`
})

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`handleSubmit`),o(`(`),r(`span`,{class:`hljs-params`},`valid`),o(`) `)]),o(`{
  `),r(`span`,{class:`hljs-built_in`},`console`),o(`.log(valid)
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-form`),o(` @`),r(`span`,{class:`hljs-attr`},`submit`),o(`=`),r(`span`,{class:`hljs-string`},`"handleSubmit"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-space`),o(),r(`span`,{class:`hljs-attr`},`direction`),o(`=`),r(`span`,{class:`hljs-string`},`"column"`),o(),r(`span`,{class:`hljs-attr`},`size`),o(`=`),r(`span`,{class:`hljs-string`},`"large"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-input`),o(` 
        `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Name"`),o(` 
        `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"UserSchema.shape.name"`),o(` 
        `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"user.name"`),o(`
       />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-input`),o(` 
        `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Email"`),o(` 
        `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"UserSchema.shape.email"`),o(` 
        `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"user.email"`),o(` 
      />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-input`),o(` 
        `),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"password"`),o(`
        `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Password"`),o(` 
        `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"UserSchema.shape.password"`),o(`
        `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"user.password"`),o(` 
      />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-input`),o(` 
        `),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"password"`),o(` 
        `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"Confirmation Password"`),o(`
        `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"[UserSchema.shape.repeatPassword, v => v === user.password || 'Does not match password']"`),o(` 
        `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"user.repeatPassword"`),o(` 
      />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`native-type`),o(`=`),r(`span`,{class:`hljs-string`},`"submit"`),o(`>`)]),o(`Submit`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-space`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-form`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})])])}var y=s(c,[[`render`,v]]);export{y as default};