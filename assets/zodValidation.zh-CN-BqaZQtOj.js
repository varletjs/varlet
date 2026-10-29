import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s}from"./runtime-core.esm-bundler-DUghkl6b.js";var c={components:{}},l={class:`varlet-site-doc`},u={class:`card`},d={id:`jie4shao4`},f={class:`card`},p={id:`an1zhuang1Zo0d`},m={class:`card`},h={id:`ji1ben3shi3yong4`},g={class:`card`},_={id:`jie2he2Type0scri0ptshi3yong4`};function v(e,c,v,y,b,x){let S=n(`router-link`),C=n(`var-site-code-example`);return r(),a(`div`,l,[c[15]||=i(`h1`,null,`Zod 验证`,-1),i(`div`,u,[i(`h3`,d,[o(S,{to:`#jie4shao4`},{default:t(()=>[...c[0]||=[s(`#`,-1)]]),_:1}),c[1]||=s(`介绍`,-1)]),c[2]||=i(`p`,null,[s(`我们在 `),i(`code`,null,`3.5.0+`),s(` 支持了基于 `),i(`a`,{href:`https://zod.dev/`},`Zod`),s(` 的表单验证方式，`),i(`code`,null,`Zod`),s(` 是一个非常强大的数据验证工具，并且对 `),i(`code`,null,`Typescript`),s(` 十分友好。`)],-1)]),i(`div`,f,[i(`h3`,p,[o(S,{to:`#an1zhuang1Zo0d`},{default:t(()=>[...c[3]||=[s(`#`,-1)]]),_:1}),c[4]||=s(`安装 Zod`,-1)]),c[6]||=i(`p`,null,[s(`为了控制组件库的尺寸，我们不内置 `),i(`code`,null,`Zod`),s(`，所以需要手动安装。`)],-1),o(C,null,{default:t(()=>[...c[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-meta`},`#`),i(`span`,{class:`bash`},` npm`),s(`
npm i zod -S   
`),i(`span`,{class:`hljs-meta`},`
#`),i(`span`,{class:`bash`},` yarn`),s(`
yarn add zod    
`),i(`span`,{class:`hljs-meta`},`
#`),i(`span`,{class:`bash`},` pnpm`),s(`
pnpm add zod
`)])],-1)]]),_:1})]),i(`div`,m,[i(`h3`,h,[o(S,{to:`#ji1ben3shi3yong4`},{default:t(()=>[...c[7]||=[s(`#`,-1)]]),_:1}),c[8]||=s(`基本使用`,-1)]),c[10]||=i(`p`,null,[s(`每个表单组件的 `),i(`code`,null,`rules`),s(` 属性支持传入一个或多个 `),i(`code`,null,`Zod Schema`),s(`。 组件将使用该 `),i(`code`,null,`Schema`),s(` 的规则进行验证，验证失败时将使用其定义的错误信息作为用户提示。`)],-1),o(C,null,{default:t(()=>[...c[9]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
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
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"名称"`),s(` 
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"z.string().min(1, '名称不能为空')"`),s(` 
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"user.name"`),s(`
       />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-input`),s(` 
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"邮箱"`),s(` 
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"z.string().email('邮箱格式有误')"`),s(` 
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"user.email"`),s(` 
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-input`),s(` 
        `),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"password"`),s(`
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"密码"`),s(` 
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"z.string().min(6, '密码最少6位')"`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"user.password"`),s(` 
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-input`),s(` 
        `),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"password"`),s(` 
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"确认密码"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[z.string().min(6, '密码最少6位'), v => v === user.password || '与密码不一致']"`),s(` 
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"user.repeatPassword"`),s(` 
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`native-type`),s(`=`),i(`span`,{class:`hljs-string`},`"submit"`),s(`>`)]),s(`提交`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-form`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,g,[i(`h3`,_,[o(S,{to:`#jie2he2Type0scri0ptshi3yong4`},{default:t(()=>[...c[11]||=[s(`#`,-1)]]),_:1}),c[12]||=s(`结合 Typescript 使用`,-1)]),c[14]||=i(`p`,null,[s(`如果您使用 `),i(`code`,null,`Typescript`),s(`，定义一个 `),i(`code`,null,`Zod Schema`),s(` 可以同时得到 Typescript 类型和表单 rules。`)],-1),o(C,null,{default:t(()=>[...c[13]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(),i(`span`,{class:`hljs-attr`},`lang`),s(`=`),i(`span`,{class:`hljs-string`},`"ts"`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { z } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'zod'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` UserSchema = z.object({
  `),i(`span`,{class:`hljs-attr`},`name`),s(`: z.string().min(`),i(`span`,{class:`hljs-number`},`1`),s(`, `),i(`span`,{class:`hljs-string`},`'名称不能为空'`),s(`),
  `),i(`span`,{class:`hljs-attr`},`email`),s(`: z.string().email(`),i(`span`,{class:`hljs-string`},`'邮箱格式有误'`),s(`),
  `),i(`span`,{class:`hljs-attr`},`password`),s(`: z.string().min(`),i(`span`,{class:`hljs-number`},`6`),s(`, `),i(`span`,{class:`hljs-string`},`'密码最少6位'`),s(`),
  `),i(`span`,{class:`hljs-attr`},`repeatPassword`),s(`: z.string().min(`),i(`span`,{class:`hljs-number`},`6`),s(`, `),i(`span`,{class:`hljs-string`},`'确认密码最少6位'`),s(`),
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
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"名称"`),s(` 
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"UserSchema.shape.name"`),s(` 
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"user.name"`),s(`
       />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-input`),s(` 
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"邮箱"`),s(` 
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"UserSchema.shape.email"`),s(` 
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"user.email"`),s(` 
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-input`),s(` 
        `),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"password"`),s(`
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"密码"`),s(` 
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"UserSchema.shape.password"`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"user.password"`),s(` 
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-input`),s(` 
        `),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"password"`),s(` 
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"确认密码"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[UserSchema.shape.repeatPassword, v => v === user.password || '与密码不一致']"`),s(` 
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"user.repeatPassword"`),s(` 
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`native-type`),s(`=`),i(`span`,{class:`hljs-string`},`"submit"`),s(`>`)]),s(`提交`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-form`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})])])}var y=e(c,[[`render`,v]]);export{y as default};