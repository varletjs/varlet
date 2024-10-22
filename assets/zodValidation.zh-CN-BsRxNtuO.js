import{_ as e,m as r,p as a,q as l,w as n,Q as s,b as c,e as h}from"./index-p72OOaSl.js";const j={components:{}},o={class:"varlet-site-doc"},i=a("h1",null,"Zod 验证",-1),d={class:"card"},m={id:"jie4shao4"},g=a("p",null,[s("我们在 "),a("code",null,"3.5.0+"),s(" 支持了基于 "),a("a",{href:"https://zod.dev/"},"Zod"),s(" 的表单验证方式，"),a("code",null,"Zod"),s(" 是一个非常强大的数据验证工具，并且对 "),a("code",null,"Typescript"),s(" 十分友好。")],-1),u={class:"card"},_={id:"an1zhuang1Zo0d"},v=a("p",null,[s("为了控制组件库的尺寸，我们不内置 "),a("code",null,"Zod"),s("，所以需要手动安装。")],-1),y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-meta"},"#"),a("span",{class:"bash"}," npm"),s(`
npm i zod -S   
`),a("span",{class:"hljs-meta"},`
#`),a("span",{class:"bash"}," yarn"),s(`
yarn add zod    
`),a("span",{class:"hljs-meta"},`
#`),a("span",{class:"bash"}," pnpm"),s(`
pnpm add zod
`)])],-1),w={class:"card"},f={id:"ji1ben3shi3yong4"},b=a("p",null,[s("每个表单组件的 "),a("code",null,"rules"),s(" 属性支持传入一个或多个 "),a("code",null,"Zod Schema"),s("。 组件将使用该 "),a("code",null,"Schema"),s(" 的规则进行验证，验证失败时将使用其定义的错误信息作为用户提示。")],-1),z=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { z } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'zod'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` user = ref({
  `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
  `),a("span",{class:"hljs-attr"},"email"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
  `),a("span",{class:"hljs-attr"},"password"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
  `),a("span",{class:"hljs-attr"},"repeatPassword"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
})

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleSubmit"),s("("),a("span",{class:"hljs-params"},"valid"),s(") ")]),s(`{
  `),a("span",{class:"hljs-built_in"},"console"),s(`.log(valid)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-form"),s(" @"),a("span",{class:"hljs-attr"},"submit"),s("="),a("span",{class:"hljs-string"},'"handleSubmit"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"large"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-input"),s(` 
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"名称"'),s(` 
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"z.string().min(1, '名称不能为空')"`),s(` 
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"user.name"'),s(`
       />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-input"),s(` 
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"邮箱"'),s(` 
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"z.string().email('邮箱格式有误')"`),s(` 
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"user.email"'),s(` 
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-input"),s(` 
        `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"password"'),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"密码"'),s(` 
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"z.string().min(6, '密码最少6位')"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"user.password"'),s(` 
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-input"),s(` 
        `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"password"'),s(` 
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"确认密码"'),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[z.string().min(6, '密码最少6位'), v => v === user.password || '与密码不一致']"`),s(` 
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"user.repeatPassword"'),s(` 
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"native-type"),s("="),a("span",{class:"hljs-string"},'"submit"'),s(">")]),s("提交"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-form"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),k={class:"card"},S={id:"jie2he2Type0scri0ptshi3yong4"},Z=a("p",null,[s("如果您使用 "),a("code",null,"Typescript"),s("，定义一个 "),a("code",null,"Zod Schema"),s(" 可以同时得到 Typescript 类型和表单 rules。")],-1),x=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { z } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'zod'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` UserSchema = z.object({
  `),a("span",{class:"hljs-attr"},"name"),s(": z.string().min("),a("span",{class:"hljs-number"},"1"),s(", "),a("span",{class:"hljs-string"},"'名称不能为空'"),s(`),
  `),a("span",{class:"hljs-attr"},"email"),s(": z.string().email("),a("span",{class:"hljs-string"},"'邮箱格式有误'"),s(`),
  `),a("span",{class:"hljs-attr"},"password"),s(": z.string().min("),a("span",{class:"hljs-number"},"6"),s(", "),a("span",{class:"hljs-string"},"'密码最少6位'"),s(`),
  `),a("span",{class:"hljs-attr"},"repeatPassword"),s(": z.string().min("),a("span",{class:"hljs-number"},"6"),s(", "),a("span",{class:"hljs-string"},"'确认密码最少6位'"),s(`),
})

`),a("span",{class:"hljs-keyword"},"const"),s(" user = ref<z.infer<"),a("span",{class:"hljs-keyword"},"typeof"),s(` UserSchema>>({
  `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
  `),a("span",{class:"hljs-attr"},"email"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
  `),a("span",{class:"hljs-attr"},"password"),s(": "),a("span",{class:"hljs-string"},"''"),s(`,
  `),a("span",{class:"hljs-attr"},"repeatPassword"),s(": "),a("span",{class:"hljs-string"},"''"),s(`
})

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleSubmit"),s("("),a("span",{class:"hljs-params"},"valid"),s(") ")]),s(`{
  `),a("span",{class:"hljs-built_in"},"console"),s(`.log(valid)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-form"),s(" @"),a("span",{class:"hljs-attr"},"submit"),s("="),a("span",{class:"hljs-string"},'"handleSubmit"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"large"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-input"),s(` 
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"名称"'),s(` 
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},'"UserSchema.shape.name"'),s(` 
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"user.name"'),s(`
       />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-input"),s(` 
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"邮箱"'),s(` 
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},'"UserSchema.shape.email"'),s(` 
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"user.email"'),s(` 
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-input"),s(` 
        `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"password"'),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"密码"'),s(` 
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},'"UserSchema.shape.password"'),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"user.password"'),s(` 
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-input"),s(` 
        `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"password"'),s(` 
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"确认密码"'),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[UserSchema.shape.repeatPassword, v => v === user.password || '与密码不一致']"`),s(` 
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"user.repeatPassword"'),s(` 
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"native-type"),s("="),a("span",{class:"hljs-string"},'"submit"'),s(">")]),s("提交"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-form"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1);function T(P,U,N,V,$,B){const t=c("router-link"),p=c("var-site-code-example");return h(),r("div",o,[i,a("div",d,[a("h3",m,[l(t,{to:"#jie4shao4"},{default:n(()=>[s("#")]),_:1}),s("介绍")]),g]),a("div",u,[a("h3",_,[l(t,{to:"#an1zhuang1Zo0d"},{default:n(()=>[s("#")]),_:1}),s("安装 Zod")]),v,l(p,null,{default:n(()=>[y]),_:1})]),a("div",w,[a("h3",f,[l(t,{to:"#ji1ben3shi3yong4"},{default:n(()=>[s("#")]),_:1}),s("基本使用")]),b,l(p,null,{default:n(()=>[z]),_:1})]),a("div",k,[a("h3",S,[l(t,{to:"#jie2he2Type0scri0ptshi3yong4"},{default:n(()=>[s("#")]),_:1}),s("结合 Typescript 使用")]),Z,l(p,null,{default:n(()=>[x]),_:1})])])}const q=e(j,[["render",T]]);export{q as default};
