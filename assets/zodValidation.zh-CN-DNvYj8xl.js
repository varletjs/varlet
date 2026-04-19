import{L as e,N as t,W as n,c as r,d as i,g as a,h as o}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as s}from"./_plugin-vue_export-helper-V-yks4gF.js";var c={components:{}},l={class:`varlet-site-doc`},u={class:`card`},d={id:`jie4shao4`},f={class:`card`},p={id:`an1zhuang1Zo0d`},m={class:`card`},h={id:`ji1ben3shi3yong4`},g={class:`card`},_={id:`jie2he2Type0scri0ptshi3yong4`};function v(s,c,v,y,b,x){let S=e(`router-link`),C=e(`var-site-code-example`);return t(),i(`div`,l,[c[15]||=r(`h1`,null,`Zod 验证`,-1),r(`div`,u,[r(`h3`,d,[a(S,{to:`#jie4shao4`},{default:n(()=>[...c[0]||=[o(`#`,-1)]]),_:1}),c[1]||=o(`介绍`,-1)]),c[2]||=r(`p`,null,[o(`我们在 `),r(`code`,null,`3.5.0+`),o(` 支持了基于 `),r(`a`,{href:`https://zod.dev/`},`Zod`),o(` 的表单验证方式，`),r(`code`,null,`Zod`),o(` 是一个非常强大的数据验证工具，并且对 `),r(`code`,null,`Typescript`),o(` 十分友好。`)],-1)]),r(`div`,f,[r(`h3`,p,[a(S,{to:`#an1zhuang1Zo0d`},{default:n(()=>[...c[3]||=[o(`#`,-1)]]),_:1}),c[4]||=o(`安装 Zod`,-1)]),c[6]||=r(`p`,null,[o(`为了控制组件库的尺寸，我们不内置 `),r(`code`,null,`Zod`),o(`，所以需要手动安装。`)],-1),a(C,null,{default:n(()=>[...c[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-meta`},`#`),r(`span`,{class:`bash`},` npm`),o(`
npm i zod -S   
`),r(`span`,{class:`hljs-meta`},`
#`),r(`span`,{class:`bash`},` yarn`),o(`
yarn add zod    
`),r(`span`,{class:`hljs-meta`},`
#`),r(`span`,{class:`bash`},` pnpm`),o(`
pnpm add zod
`)])],-1)]]),_:1})]),r(`div`,m,[r(`h3`,h,[a(S,{to:`#ji1ben3shi3yong4`},{default:n(()=>[...c[7]||=[o(`#`,-1)]]),_:1}),c[8]||=o(`基本使用`,-1)]),c[10]||=r(`p`,null,[o(`每个表单组件的 `),r(`code`,null,`rules`),o(` 属性支持传入一个或多个 `),r(`code`,null,`Zod Schema`),o(`。 组件将使用该 `),r(`code`,null,`Schema`),o(` 的规则进行验证，验证失败时将使用其定义的错误信息作为用户提示。`)],-1),a(C,null,{default:n(()=>[...c[9]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
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
        `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"名称"`),o(` 
        `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"z.string().min(1, '名称不能为空')"`),o(` 
        `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"user.name"`),o(`
       />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-input`),o(` 
        `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"邮箱"`),o(` 
        `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"z.string().email('邮箱格式有误')"`),o(` 
        `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"user.email"`),o(` 
      />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-input`),o(` 
        `),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"password"`),o(`
        `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"密码"`),o(` 
        `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"z.string().min(6, '密码最少6位')"`),o(`
        `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"user.password"`),o(` 
      />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-input`),o(` 
        `),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"password"`),o(` 
        `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"确认密码"`),o(`
        `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"[z.string().min(6, '密码最少6位'), v => v === user.password || '与密码不一致']"`),o(` 
        `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"user.repeatPassword"`),o(` 
      />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`native-type`),o(`=`),r(`span`,{class:`hljs-string`},`"submit"`),o(`>`)]),o(`提交`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-space`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-form`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,g,[r(`h3`,_,[a(S,{to:`#jie2he2Type0scri0ptshi3yong4`},{default:n(()=>[...c[11]||=[o(`#`,-1)]]),_:1}),c[12]||=o(`结合 Typescript 使用`,-1)]),c[14]||=r(`p`,null,[o(`如果您使用 `),r(`code`,null,`Typescript`),o(`，定义一个 `),r(`code`,null,`Zod Schema`),o(` 可以同时得到 Typescript 类型和表单 rules。`)],-1),a(C,null,{default:n(()=>[...c[13]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(),r(`span`,{class:`hljs-attr`},`lang`),o(`=`),r(`span`,{class:`hljs-string`},`"ts"`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { z } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'zod'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` UserSchema = z.object({
  `),r(`span`,{class:`hljs-attr`},`name`),o(`: z.string().min(`),r(`span`,{class:`hljs-number`},`1`),o(`, `),r(`span`,{class:`hljs-string`},`'名称不能为空'`),o(`),
  `),r(`span`,{class:`hljs-attr`},`email`),o(`: z.string().email(`),r(`span`,{class:`hljs-string`},`'邮箱格式有误'`),o(`),
  `),r(`span`,{class:`hljs-attr`},`password`),o(`: z.string().min(`),r(`span`,{class:`hljs-number`},`6`),o(`, `),r(`span`,{class:`hljs-string`},`'密码最少6位'`),o(`),
  `),r(`span`,{class:`hljs-attr`},`repeatPassword`),o(`: z.string().min(`),r(`span`,{class:`hljs-number`},`6`),o(`, `),r(`span`,{class:`hljs-string`},`'确认密码最少6位'`),o(`),
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
        `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"名称"`),o(` 
        `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"UserSchema.shape.name"`),o(` 
        `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"user.name"`),o(`
       />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-input`),o(` 
        `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"邮箱"`),o(` 
        `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"UserSchema.shape.email"`),o(` 
        `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"user.email"`),o(` 
      />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-input`),o(` 
        `),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"password"`),o(`
        `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"密码"`),o(` 
        `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"UserSchema.shape.password"`),o(`
        `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"user.password"`),o(` 
      />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-input`),o(` 
        `),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"password"`),o(` 
        `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"确认密码"`),o(`
        `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"[UserSchema.shape.repeatPassword, v => v === user.password || '与密码不一致']"`),o(` 
        `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"user.repeatPassword"`),o(` 
      />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`native-type`),o(`=`),r(`span`,{class:`hljs-string`},`"submit"`),o(`>`)]),o(`提交`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-space`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-form`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})])])}var y=s(c,[[`render`,v]]);export{y as default};