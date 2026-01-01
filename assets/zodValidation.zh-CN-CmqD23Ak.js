import{b as c,m as h,p as a,q as n,Q as s,w as t,e,h as j}from"./index-DtCrA0ro.js";const i={components:{}},o={class:"varlet-site-doc"},d={class:"card"},m={id:"jie4shao4"},g={class:"card"},u={id:"an1zhuang1Zo0d"},v={class:"card"},y={id:"ji1ben3shi3yong4"},w={class:"card"},f={id:"jie2he2Type0scri0ptshi3yong4"};function b(z,l,k,S,_,Z){const p=e("router-link"),r=e("var-site-code-example");return j(),h("div",o,[l[15]||(l[15]=a("h1",null,"Zod 验证",-1)),a("div",d,[a("h3",m,[n(p,{to:"#jie4shao4"},{default:t(()=>[...l[0]||(l[0]=[s("#",-1)])]),_:1}),l[1]||(l[1]=s("介绍",-1))]),l[2]||(l[2]=a("p",null,[s("我们在 "),a("code",null,"3.5.0+"),s(" 支持了基于 "),a("a",{href:"https://zod.dev/"},"Zod"),s(" 的表单验证方式，"),a("code",null,"Zod"),s(" 是一个非常强大的数据验证工具，并且对 "),a("code",null,"Typescript"),s(" 十分友好。")],-1))]),a("div",g,[a("h3",u,[n(p,{to:"#an1zhuang1Zo0d"},{default:t(()=>[...l[3]||(l[3]=[s("#",-1)])]),_:1}),l[4]||(l[4]=s("安装 Zod",-1))]),l[6]||(l[6]=a("p",null,[s("为了控制组件库的尺寸，我们不内置 "),a("code",null,"Zod"),s("，所以需要手动安装。")],-1)),n(r,null,{default:t(()=>[...l[5]||(l[5]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-meta"},"#"),a("span",{class:"bash"}," npm"),s(`
npm i zod -S   
`),a("span",{class:"hljs-meta"},`
#`),a("span",{class:"bash"}," yarn"),s(`
yarn add zod    
`),a("span",{class:"hljs-meta"},`
#`),a("span",{class:"bash"}," pnpm"),s(`
pnpm add zod
`)])],-1)])]),_:1})]),a("div",v,[a("h3",y,[n(p,{to:"#ji1ben3shi3yong4"},{default:t(()=>[...l[7]||(l[7]=[s("#",-1)])]),_:1}),l[8]||(l[8]=s("基本使用",-1))]),l[10]||(l[10]=a("p",null,[s("每个表单组件的 "),a("code",null,"rules"),s(" 属性支持传入一个或多个 "),a("code",null,"Zod Schema"),s("。 组件将使用该 "),a("code",null,"Schema"),s(" 的规则进行验证，验证失败时将使用其定义的错误信息作为用户提示。")],-1)),n(r,null,{default:t(()=>[...l[9]||(l[9]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1)])]),_:1})]),a("div",w,[a("h3",f,[n(p,{to:"#jie2he2Type0scri0ptshi3yong4"},{default:t(()=>[...l[11]||(l[11]=[s("#",-1)])]),_:1}),l[12]||(l[12]=s("结合 Typescript 使用",-1))]),l[14]||(l[14]=a("p",null,[s("如果您使用 "),a("code",null,"Typescript"),s("，定义一个 "),a("code",null,"Zod Schema"),s(" 可以同时得到 Typescript 类型和表单 rules。")],-1)),n(r,null,{default:t(()=>[...l[13]||(l[13]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1)])]),_:1})])])}const T=c(i,[["render",b]]);export{T as default};
