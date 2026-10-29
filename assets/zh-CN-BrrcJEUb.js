import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`jie4shao4`},p={class:`card`},m={id:`ji1ben3shi3yong4`},h={class:`card`},g={id:`lei4xing2`},_={class:`card`},v={id:`shu3xing4`},y={class:`card`},b={id:`cha1cao2`},x={class:`card`},S={id:`xiu1gai3bei4jing3yan2se4shi2zhu4yi4`},C={class:`card`},w={id:`yang4shi4bian4liang4`};function T(e,l,T,E,D,O){let k=n(`router-link`),A=n(`var-site-code-example`);return r(),a(`div`,u,[l[22]||=i(`h1`,null,`结果`,-1),i(`div`,d,[i(`h3`,f,[o(k,{to:`#jie4shao4`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`介绍`,-1)]),l[2]||=i(`p`,null,`用于向用户展示结果。`,-1)]),i(`div`,p,[i(`h3`,m,[o(k,{to:`#ji1ben3shi3yong4`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`基本使用`,-1)]),o(A,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-result`),s(` 
    `),i(`span`,{class:`hljs-attr`},`title`),s(`=`),i(`span`,{class:`hljs-string`},`"成功"`),s(`
    `),i(`span`,{class:`hljs-attr`},`description`),s(`=`),i(`span`,{class:`hljs-string`},`"嗨~ 我是结果页的一段描述~"`),s(`
  >`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`footer`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"success"`),s(`>`)]),s(`知道了`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-result`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(k,{to:`#lei4xing2`},{default:t(()=>[...l[6]||=[s(`#`,-1)]]),_:1}),l[7]||=s(`类型`,-1)]),l[9]||=c(`<p>结果类型，可选值为 <code>info</code>，<code>success</code>，<code>warning</code>，<code>error</code>，<code>question</code>，<code>empty</code>。</p>`,1),o(A,null,{default:t(()=>[...l[8]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` success = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` error = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` info = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` warning = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` question = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` empty = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(),i(`span`,{class:`hljs-attr`},`direction`),s(`=`),i(`span`,{class:`hljs-string`},`"column"`),s(),i(`span`,{class:`hljs-attr`},`size`),s(`=`),i(`span`,{class:`hljs-string`},`"large"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"success"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"success = true"`),s(`>`)]),s(`成功`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"warning = true"`),s(`>`)]),s(`警告`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"info"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"info = true"`),s(`>`)]),s(`信息`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"danger"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"error = true"`),s(`>`)]),s(`错误`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(` 
      `),i(`span`,{class:`hljs-attr`},`color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--result-question-color)"`),s(`
      `),i(`span`,{class:`hljs-attr`},`text-color`),s(`=`),i(`span`,{class:`hljs-string`},`"#fff"`),s(`
      `),i(`span`,{class:`hljs-attr`},`block`),s(` 
      @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"question = true"`),s(`
    >`)]),s(`
      疑问
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(` 
      `),i(`span`,{class:`hljs-attr`},`color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--result-empty-color)"`),s(` 
      `),i(`span`,{class:`hljs-attr`},`text-color`),s(`=`),i(`span`,{class:`hljs-string`},`"#fff"`),s(`
      `),i(`span`,{class:`hljs-attr`},`block`),s(`
      @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"empty = true"`),s(`
    >`)]),s(`
      空值
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
  
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-popup`),s(),i(`span`,{class:`hljs-attr`},`:default-style`),s(`=`),i(`span`,{class:`hljs-string`},`"false"`),s(),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"success"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-result`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"result"`),s(),i(`span`,{class:`hljs-attr`},`title`),s(`=`),i(`span`,{class:`hljs-string`},`"成功"`),s(),i(`span`,{class:`hljs-attr`},`description`),s(`=`),i(`span`,{class:`hljs-string`},`"嗨~ 我是结果页的一段描述~"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`footer`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"success"`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"success = false"`),s(`>`)]),s(`知道了`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-result`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-popup`),s(`>`)]),s(`

  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-popup`),s(),i(`span`,{class:`hljs-attr`},`:default-style`),s(`=`),i(`span`,{class:`hljs-string`},`"false"`),s(),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-result`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"result"`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(),i(`span`,{class:`hljs-attr`},`title`),s(`=`),i(`span`,{class:`hljs-string`},`"警告"`),s(),i(`span`,{class:`hljs-attr`},`description`),s(`=`),i(`span`,{class:`hljs-string`},`"嗨~ 我是结果页的一段描述~"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`footer`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"warning = false"`),s(`>`)]),s(`知道了`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-result`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-popup`),s(`>`)]),s(`

  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-popup`),s(),i(`span`,{class:`hljs-attr`},`:default-style`),s(`=`),i(`span`,{class:`hljs-string`},`"false"`),s(),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"info"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-result`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"result"`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"info"`),s(),i(`span`,{class:`hljs-attr`},`title`),s(`=`),i(`span`,{class:`hljs-string`},`"信息"`),s(),i(`span`,{class:`hljs-attr`},`description`),s(`=`),i(`span`,{class:`hljs-string`},`"嗨~ 我是结果页的一段描述~"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`footer`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"info"`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"info = false"`),s(`>`)]),s(`知道了`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-result`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-popup`),s(`>`)]),s(`

  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-popup`),s(),i(`span`,{class:`hljs-attr`},`:default-style`),s(`=`),i(`span`,{class:`hljs-string`},`"false"`),s(),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"error"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-result`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"result"`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"error"`),s(),i(`span`,{class:`hljs-attr`},`title`),s(`=`),i(`span`,{class:`hljs-string`},`"错误"`),s(),i(`span`,{class:`hljs-attr`},`description`),s(`=`),i(`span`,{class:`hljs-string`},`"嗨~ 我是结果页的一段描述~"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`footer`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"danger"`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"error = false"`),s(`>`)]),s(`知道了`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-result`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-popup`),s(`>`)]),s(`

  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-popup`),s(),i(`span`,{class:`hljs-attr`},`:default-style`),s(`=`),i(`span`,{class:`hljs-string`},`"false"`),s(),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"question"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-result`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"result"`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"question"`),s(),i(`span`,{class:`hljs-attr`},`title`),s(`=`),i(`span`,{class:`hljs-string`},`"疑问"`),s(),i(`span`,{class:`hljs-attr`},`description`),s(`=`),i(`span`,{class:`hljs-string`},`"嗨~ 我是结果页的一段描述~"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`footer`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(` 
          `),i(`span`,{class:`hljs-attr`},`color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--result-question-color)"`),s(` 
          `),i(`span`,{class:`hljs-attr`},`text-color`),s(`=`),i(`span`,{class:`hljs-string`},`"#fff"`),s(` 
          @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"question = false"`),s(`
        >`)]),s(`
          知道了
        `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-result`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-popup`),s(`>`)]),s(`

  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-popup`),s(),i(`span`,{class:`hljs-attr`},`:default-style`),s(`=`),i(`span`,{class:`hljs-string`},`"false"`),s(),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"empty"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-result`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"result"`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"empty"`),s(),i(`span`,{class:`hljs-attr`},`title`),s(`=`),i(`span`,{class:`hljs-string`},`"空值"`),s(),i(`span`,{class:`hljs-attr`},`description`),s(`=`),i(`span`,{class:`hljs-string`},`"嗨~ 我是结果页的一段描述~"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`footer`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(` 
          `),i(`span`,{class:`hljs-attr`},`color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--result-empty-color)"`),s(`
          `),i(`span`,{class:`hljs-attr`},`text-color`),s(`=`),i(`span`,{class:`hljs-string`},`"#fff"`),s(` 
          @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"empty = false"`),s(`>`)]),s(`
          知道了
        `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-result`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-popup`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.result`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`width`),s(`: `),i(`span`,{class:`hljs-number`},`75vw`),s(),i(`span`,{class:`hljs-meta`},`!important`),s(`;
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),l[23]||=i(`h2`,null,`API`,-1),i(`div`,_,[i(`h3`,v,[o(k,{to:`#shu3xing4`},{default:t(()=>[...l[10]||=[s(`#`,-1)]]),_:1}),l[11]||=s(`属性`,-1)]),l[12]||=c(`<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>type</code></td><td>结果状态，可选值为 <code>info</code> <code>success</code> <code>warning</code> <code>error</code> <code>question</code> <code>empty</code></td><td><em>string</em></td><td><code>success</code></td></tr><tr><td><code>title</code></td><td>标题</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>description</code></td><td>描述</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>image-size</code></td><td>图片尺寸</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>animation</code></td><td>是否开启动画，仅对 <code>success</code> 状态有效</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table>`,1)]),i(`div`,y,[i(`h3`,b,[o(k,{to:`#cha1cao2`},{default:t(()=>[...l[13]||=[s(`#`,-1)]]),_:1}),l[14]||=s(`插槽`,-1)]),l[15]||=c(`<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>image</code></td><td>自定义图标</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>自定义标题</td><td><code>-</code></td></tr><tr><td><code>description</code></td><td>自定义描述</td><td><code>-</code></td></tr><tr><td><code>footer</code></td><td>自定义底部内容</td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,x,[i(`h3`,S,[o(k,{to:`#xiu1gai3bei4jing3yan2se4shi2zhu4yi4`},{default:t(()=>[...l[16]||=[s(`#`,-1)]]),_:1}),l[17]||=s(`修改背景颜色时注意`,-1)]),l[18]||=i(`p`,null,`请尽可能不要修改背景色为透明或半透明，可能会影响成功状态的动画效果。`,-1)]),i(`div`,C,[i(`h3`,w,[o(k,{to:`#yang4shi4bian4liang4`},{default:t(()=>[...l[19]||=[s(`#`,-1)]]),_:1}),l[20]||=s(`样式变量`,-1)]),l[21]||=c(`<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--result-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--result-info-color</code></td><td><code>var(--color-info)</code></td></tr><tr><td><code>--result-info-border-color</code></td><td><code>rgba(0, 175, 239, 0.3)</code></td></tr><tr><td><code>--result-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--result-success-border-color</code></td><td><code>rgba(0, 196, 143, 0.3)</code></td></tr><tr><td><code>--result-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--result-error-border-color</code></td><td><code>rgba(244, 67, 54, 0.3)</code></td></tr><tr><td><code>--result-warning-color</code></td><td><code>var(--color-warning)</code></td></tr><tr><td><code>--result-warning-border-color</code></td><td><code>rgba(255, 159, 0, 0.3)</code></td></tr><tr><td><code>--result-question-color</code></td><td><code>#607d8b</code></td></tr><tr><td><code>--result-question-border-color</code></td><td><code>rgba(96, 125, 139, 0.3)</code></td></tr><tr><td><code>--result-empty-color</code></td><td><code>#9e9e9e</code></td></tr><tr><td><code>--result-empty-border-color</code></td><td><code>rgba(158, 158, 158, 0.3)</code></td></tr><tr><td><code>--result-padding</code></td><td><code>24px</code></td></tr><tr><td><code>--result-border-radius</code></td><td><code>3px</code></td></tr><tr><td><code>--result-title-color</code></td><td><code>#444</code></td></tr><tr><td><code>--result-title-font-size</code></td><td><code>32px</code></td></tr><tr><td><code>--result-title-margin</code></td><td><code>15px 0 0 0</code></td></tr><tr><td><code>--result-image-size</code></td><td><code>80px</code></td></tr><tr><td><code>--result-title-font-weight</code></td><td><code>500</code></td></tr><tr><td><code>--result-description-margin</code></td><td><code>10px 0 0 0</code></td></tr><tr><td><code>--result-description-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--result-description-color</code></td><td><code>rgba(0, 0, 0, 0.6)</code></td></tr><tr><td><code>--result-description-line-height</code></td><td><code>1.6</code></td></tr></tbody></table>`,2)])])}var E=e(l,[[`render`,T]]);export{E as default};