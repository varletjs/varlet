import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s}from"./runtime-core.esm-bundler-DUghkl6b.js";var c={components:{}},l={class:`varlet-site-doc`},u={class:`card`},d={id:`Intro`},f={class:`card`},p={id:`InstallZod`},m={class:`card`},h={id:`BasicUsage`},g={class:`card`},_={id:`UseWithTypescript`};function v(e,c,v,y,b,x){let S=n(`router-link`),C=n(`var-site-code-example`);return r(),a(`div`,l,[c[15]||=i(`h1`,null,`Zod Validation`,-1),i(`div`,u,[i(`h3`,d,[o(S,{to:`#Intro`},{default:t(()=>[...c[0]||=[s(`#`,-1)]]),_:1}),c[1]||=s(`Intro`,-1)]),c[2]||=i(`p`,null,[s(`We support form validation based on `),i(`a`,{href:`https://zod.dev/`},`Zod`),s(` in `),i(`code`,null,`3.5.0+`),s(`. `),i(`code`,null,`Zod`),s(` is a very powerful data validation tool and is very friendly to `),i(`code`,null,`Typescript`),s(`.`)],-1)]),i(`div`,f,[i(`h3`,p,[o(S,{to:`#InstallZod`},{default:t(()=>[...c[3]||=[s(`#`,-1)]]),_:1}),c[4]||=s(`Install Zod`,-1)]),c[6]||=i(`p`,null,[s(`In order to control the size of the component library, we do not build-in `),i(`code`,null,`Zod`),s(`, so you need to install it manually.`)],-1),o(C,null,{default:t(()=>[...c[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-meta`},`#`),i(`span`,{class:`bash`},` npm`),s(`
npm i zod -S   
`),i(`span`,{class:`hljs-meta`},`
#`),i(`span`,{class:`bash`},` yarn`),s(`
yarn add zod    
`),i(`span`,{class:`hljs-meta`},`
#`),i(`span`,{class:`bash`},` pnpm`),s(`
pnpm add zod
`)])],-1)]]),_:1})]),i(`div`,m,[i(`h3`,h,[o(S,{to:`#BasicUsage`},{default:t(()=>[...c[7]||=[s(`#`,-1)]]),_:1}),c[8]||=s(`Basic Usage`,-1)]),c[10]||=i(`p`,null,[s(`The `),i(`code`,null,`rules`),s(` property of each form component supports passing in one or more `),i(`code`,null,`Zod Schema`),s(`. The component will use the rules of the `),i(`code`,null,`Schema`),s(` for validation, and when validation fails, the error message defined in it will be used as a user prompt.`)],-1),o(C,null,{default:t(()=>[...c[9]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { z } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'zod'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` user = ref({
  `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`''`),s(`,
  `),i(`span`,{class:`hljs-attr`},`email`),s(`: `),i(`span`,{class:`hljs-string`},`''`),s(`,
  `),i(`span`,{class:`hljs-attr`},`password`),s(`: `),i(`span`,{class:`hljs-string`},`''`),s(`,
  `),i(`span`,{class:`hljs-attr`},`repeatPassword`),s(`: `),i(`span`,{class:`hljs-string`},`''`),s(`
})

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`handleSubmit`),s(`(`),i(`span`,{class:`hljs-params`},`valid`),s(`) `)]),s(`{
  `),i(`span`,{class:`hljs-built_in`},`console`),s(`.log(valid)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-form`),s(` @`),i(`span`,{class:`hljs-attr`},`submit`),s(`=`),i(`span`,{class:`hljs-string`},`"handleSubmit"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(),i(`span`,{class:`hljs-attr`},`direction`),s(`=`),i(`span`,{class:`hljs-string`},`"column"`),s(),i(`span`,{class:`hljs-attr`},`size`),s(`=`),i(`span`,{class:`hljs-string`},`"large"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-input`),s(` 
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Name"`),s(` 
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"z.string().min(1, 'Name required')"`),s(` 
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"user.name"`),s(`
       />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-input`),s(` 
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Email"`),s(` 
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"z.string().email('Email format error')"`),s(` 
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"user.email"`),s(` 
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-input`),s(` 
        `),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"password"`),s(`
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Password"`),s(` 
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"z.string().min(6, 'Password must be at least 6 characters')"`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"user.password"`),s(` 
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-input`),s(` 
        `),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"password"`),s(` 
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Confirmation Password"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[z.string().min(6, 'Confirmation password must be at least 6 characters'), v => v === user.password || 'Does not match password']"`),s(` 
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"user.repeatPassword"`),s(` 
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`native-type`),s(`=`),i(`span`,{class:`hljs-string`},`"submit"`),s(`>`)]),s(`Submit`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-form`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,g,[i(`h3`,_,[o(S,{to:`#UseWithTypescript`},{default:t(()=>[...c[11]||=[s(`#`,-1)]]),_:1}),c[12]||=s(`Use With Typescript`,-1)]),c[14]||=i(`p`,null,[s(`If you use `),i(`code`,null,`Typescript`),s(`, define a `),i(`code`,null,`Zod Schema`),s(` to get both Typescript types and form rules.`)],-1),o(C,null,{default:t(()=>[...c[13]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(),i(`span`,{class:`hljs-attr`},`lang`),s(`=`),i(`span`,{class:`hljs-string`},`"ts"`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { z } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'zod'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` UserSchema = z.object({
  `),i(`span`,{class:`hljs-attr`},`name`),s(`: z.string().min(`),i(`span`,{class:`hljs-number`},`1`),s(`, `),i(`span`,{class:`hljs-string`},`'Name required'`),s(`),
  `),i(`span`,{class:`hljs-attr`},`email`),s(`: z.string().email(`),i(`span`,{class:`hljs-string`},`'Email format error'`),s(`),
  `),i(`span`,{class:`hljs-attr`},`password`),s(`: z.string().min(`),i(`span`,{class:`hljs-number`},`6`),s(`, `),i(`span`,{class:`hljs-string`},`'Password must be at least 6 characters'`),s(`),
  `),i(`span`,{class:`hljs-attr`},`repeatPassword`),s(`: z.string().min(`),i(`span`,{class:`hljs-number`},`6`),s(`, `),i(`span`,{class:`hljs-string`},`'Confirmation password must be at least 6 characters'`),s(`),
})

`),i(`span`,{class:`hljs-keyword`},`const`),s(` user = ref<z.infer<`),i(`span`,{class:`hljs-keyword`},`typeof`),s(` UserSchema>>({
  `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`''`),s(`,
  `),i(`span`,{class:`hljs-attr`},`email`),s(`: `),i(`span`,{class:`hljs-string`},`''`),s(`,
  `),i(`span`,{class:`hljs-attr`},`password`),s(`: `),i(`span`,{class:`hljs-string`},`''`),s(`,
  `),i(`span`,{class:`hljs-attr`},`repeatPassword`),s(`: `),i(`span`,{class:`hljs-string`},`''`),s(`
})

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`handleSubmit`),s(`(`),i(`span`,{class:`hljs-params`},`valid`),s(`) `)]),s(`{
  `),i(`span`,{class:`hljs-built_in`},`console`),s(`.log(valid)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-form`),s(` @`),i(`span`,{class:`hljs-attr`},`submit`),s(`=`),i(`span`,{class:`hljs-string`},`"handleSubmit"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(),i(`span`,{class:`hljs-attr`},`direction`),s(`=`),i(`span`,{class:`hljs-string`},`"column"`),s(),i(`span`,{class:`hljs-attr`},`size`),s(`=`),i(`span`,{class:`hljs-string`},`"large"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-input`),s(` 
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Name"`),s(` 
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"UserSchema.shape.name"`),s(` 
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"user.name"`),s(`
       />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-input`),s(` 
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Email"`),s(` 
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"UserSchema.shape.email"`),s(` 
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"user.email"`),s(` 
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-input`),s(` 
        `),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"password"`),s(`
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Password"`),s(` 
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"UserSchema.shape.password"`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"user.password"`),s(` 
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-input`),s(` 
        `),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"password"`),s(` 
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Confirmation Password"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[UserSchema.shape.repeatPassword, v => v === user.password || 'Does not match password']"`),s(` 
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"user.repeatPassword"`),s(` 
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`native-type`),s(`=`),i(`span`,{class:`hljs-string`},`"submit"`),s(`>`)]),s(`Submit`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-form`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})])])}var y=e(c,[[`render`,v]]);export{y as default};