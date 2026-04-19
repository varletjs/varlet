import{L as e,N as t,W as n,c as r,d as i,g as a,h as o}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as s}from"./_plugin-vue_export-helper-V-yks4gF.js";var c={components:{}},l={class:`varlet-site-doc`},u={class:`card`},d={id:`jie4shao4`},f={class:`card`},p={id:`ji1ben3yong4fa3`};function m(s,c,m,h,g,_){let v=e(`router-link`),y=e(`var-site-code-example`);return t(),i(`div`,l,[c[10]||=r(`h1`,null,`默认值定制`,-1),r(`div`,u,[r(`h3`,d,[a(v,{to:`#jie4shao4`},{default:n(()=>[...c[0]||=[o(`#`,-1)]]),_:1}),c[1]||=o(`介绍`,-1)]),c[2]||=r(`p`,null,`组件库提供对组件属性的默认值进行定制的能力。`,-1)]),r(`div`,f,[r(`h3`,p,[a(v,{to:`#ji1ben3yong4fa3`},{default:n(()=>[...c[3]||=[o(`#`,-1)]]),_:1}),c[4]||=o(`基本用法`,-1)]),c[8]||=r(`p`,null,[o(`通过组件提供的静态方法 `),r(`code`,null,`setPropsDefaults`),o(` 对组件的属性定义进行定制。需要注意的是，属性定制只对声明式组件生效，并且定制行为应在组件初始化之前。`)],-1),a(y,{"playground-ignore":``},{default:n(()=>[...c[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-comment`},`// main.ts`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Button } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

Button.setPropsDefaults({
  `),r(`span`,{class:`hljs-attr`},`type`),o(`: `),r(`span`,{class:`hljs-string`},`'primary'`),o(`,
  `),r(`span`,{class:`hljs-attr`},`elevation`),o(`: `),r(`span`,{class:`hljs-number`},`10`),o(`
})
`)])],-1)]]),_:1}),c[9]||=r(`p`,null,`定制之后，下面两种写法将会是等价的。`,-1),a(y,{"playground-ignore":``},{default:n(()=>[...c[6]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-comment`},`<!-- App.vue -->`),o(`
`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`Hello`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1}),a(y,{"playground-ignore":``},{default:n(()=>[...c[7]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-comment`},`<!-- App.vue -->`),o(`
`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`:elevation`),o(`=`),r(`span`,{class:`hljs-string`},`"10"`),o(`>`)]),o(`Hello`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})])])}var h=s(c,[[`render`,m]]);export{h as default};