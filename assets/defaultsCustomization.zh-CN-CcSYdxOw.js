import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s}from"./runtime-core.esm-bundler-DUghkl6b.js";var c={components:{}},l={class:`varlet-site-doc`},u={class:`card`},d={id:`jie4shao4`},f={class:`card`},p={id:`ji1ben3yong4fa3`};function m(e,c,m,h,g,_){let v=n(`router-link`),y=n(`var-site-code-example`);return r(),a(`div`,l,[c[10]||=i(`h1`,null,`默认值定制`,-1),i(`div`,u,[i(`h3`,d,[o(v,{to:`#jie4shao4`},{default:t(()=>[...c[0]||=[s(`#`,-1)]]),_:1}),c[1]||=s(`介绍`,-1)]),c[2]||=i(`p`,null,`组件库提供对组件属性的默认值进行定制的能力。`,-1)]),i(`div`,f,[i(`h3`,p,[o(v,{to:`#ji1ben3yong4fa3`},{default:t(()=>[...c[3]||=[s(`#`,-1)]]),_:1}),c[4]||=s(`基本用法`,-1)]),c[8]||=i(`p`,null,[s(`通过组件提供的静态方法 `),i(`code`,null,`setPropsDefaults`),s(` 对组件的属性定义进行定制。需要注意的是，属性定制只对声明式组件生效，并且定制行为应在组件初始化之前。`)],-1),o(y,{"playground-ignore":``},{default:t(()=>[...c[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-comment`},`// main.ts`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Button } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

Button.setPropsDefaults({
  `),i(`span`,{class:`hljs-attr`},`type`),s(`: `),i(`span`,{class:`hljs-string`},`'primary'`),s(`,
  `),i(`span`,{class:`hljs-attr`},`elevation`),s(`: `),i(`span`,{class:`hljs-number`},`10`),s(`
})
`)])],-1)]]),_:1}),c[9]||=i(`p`,null,`定制之后，下面两种写法将会是等价的。`,-1),o(y,{"playground-ignore":``},{default:t(()=>[...c[6]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-comment`},`<!-- App.vue -->`),s(`
`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`Hello`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1}),o(y,{"playground-ignore":``},{default:t(()=>[...c[7]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-comment`},`<!-- App.vue -->`),s(`
`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`:elevation`),s(`=`),i(`span`,{class:`hljs-string`},`"10"`),s(`>`)]),s(`Hello`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})])])}var h=e(c,[[`render`,m]]);export{h as default};