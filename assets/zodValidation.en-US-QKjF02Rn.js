import{_ as p,m as c,p as a,q as n,w as l,Q as s,b as r,e as h}from"./index-D7J0Ej29.js";const o={components:{}},i={class:"varlet-site-doc"},j=a("h1",null,"Zod Validation",-1),d={class:"card"},m={id:"Intro"},u=a("p",null,[s("We support form validation based on "),a("a",{href:"https://zod.dev/"},"Zod"),s(" in "),a("code",null,"3.5.0+"),s(". "),a("code",null,"Zod"),s(" is a very powerful data validation tool and is very friendly to "),a("code",null,"Typescript"),s(".")],-1),g={class:"card"},_={id:"InstallZod"},v=a("p",null,[s("In order to control the size of the component library, we do not build-in "),a("code",null,"Zod"),s(", so you need to install it manually.")],-1),f=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-meta"},"#"),a("span",{class:"bash"}," npm"),s(`
npm i zod -S   
`),a("span",{class:"hljs-meta"},`
#`),a("span",{class:"bash"}," yarn"),s(`
yarn add zod    
`),a("span",{class:"hljs-meta"},`
#`),a("span",{class:"bash"}," pnpm"),s(`
pnpm add zod
`)])],-1),w={class:"card"},y={id:"BasicUsage"},b=a("p",null,[s("The "),a("code",null,"rules"),s(" property of each form component supports passing in one or more "),a("code",null,"Zod Schema"),s(". The component will use the rules of the "),a("code",null,"Schema"),s(" for validation, and when validation fails, the error message defined in it will be used as a user prompt.")],-1),z=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Name"'),s(` 
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"z.string().min(1, 'Name required')"`),s(` 
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"user.name"'),s(`
       />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-input"),s(` 
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Email"'),s(` 
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"z.string().email('Email format error')"`),s(` 
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"user.email"'),s(` 
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-input"),s(` 
        `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"password"'),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Password"'),s(` 
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"z.string().min(6, 'Password must be at least 6 characters')"`),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"user.password"'),s(` 
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-input"),s(` 
        `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"password"'),s(` 
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Confirmation Password"'),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[z.string().min(6, 'Confirmation password must be at least 6 characters'), v => v === user.password || 'Does not match password']"`),s(` 
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"user.repeatPassword"'),s(` 
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"native-type"),s("="),a("span",{class:"hljs-string"},'"submit"'),s(">")]),s("Submit"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-form"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),k={class:"card"},S={id:"UseWithTypescript"},U=a("p",null,[s("If you use "),a("code",null,"Typescript"),s(", define a "),a("code",null,"Zod Schema"),s(" to get both Typescript types and form rules.")],-1),P=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { z } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'zod'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` UserSchema = z.object({
  `),a("span",{class:"hljs-attr"},"name"),s(": z.string().min("),a("span",{class:"hljs-number"},"1"),s(", "),a("span",{class:"hljs-string"},"'Name required'"),s(`),
  `),a("span",{class:"hljs-attr"},"email"),s(": z.string().email("),a("span",{class:"hljs-string"},"'Email format error'"),s(`),
  `),a("span",{class:"hljs-attr"},"password"),s(": z.string().min("),a("span",{class:"hljs-number"},"6"),s(", "),a("span",{class:"hljs-string"},"'Password must be at least 6 characters'"),s(`),
  `),a("span",{class:"hljs-attr"},"repeatPassword"),s(": z.string().min("),a("span",{class:"hljs-number"},"6"),s(", "),a("span",{class:"hljs-string"},"'Confirmation password must be at least 6 characters'"),s(`),
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
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Name"'),s(` 
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},'"UserSchema.shape.name"'),s(` 
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"user.name"'),s(`
       />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-input"),s(` 
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Email"'),s(` 
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},'"UserSchema.shape.email"'),s(` 
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"user.email"'),s(` 
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-input"),s(` 
        `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"password"'),s(`
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Password"'),s(` 
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},'"UserSchema.shape.password"'),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"user.password"'),s(` 
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-input"),s(` 
        `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"password"'),s(` 
        `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Confirmation Password"'),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[UserSchema.shape.repeatPassword, v => v === user.password || 'Does not match password']"`),s(` 
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"user.repeatPassword"'),s(` 
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"native-type"),s("="),a("span",{class:"hljs-string"},'"submit"'),s(">")]),s("Submit"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-form"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1);function T(Z,I,x,N,B,C){const t=r("router-link"),e=r("var-site-code-example");return h(),c("div",i,[j,a("div",d,[a("h3",m,[n(t,{to:"#Intro"},{default:l(()=>[s("#")]),_:1}),s("Intro")]),u]),a("div",g,[a("h3",_,[n(t,{to:"#InstallZod"},{default:l(()=>[s("#")]),_:1}),s("Install Zod")]),v,n(e,null,{default:l(()=>[f]),_:1})]),a("div",w,[a("h3",y,[n(t,{to:"#BasicUsage"},{default:l(()=>[s("#")]),_:1}),s("Basic Usage")]),b,n(e,null,{default:l(()=>[z]),_:1})]),a("div",k,[a("h3",S,[n(t,{to:"#UseWithTypescript"},{default:l(()=>[s("#")]),_:1}),s("Use With Typescript")]),U,n(e,null,{default:l(()=>[P]),_:1})])])}const V=p(o,[["render",T]]);export{V as default};
