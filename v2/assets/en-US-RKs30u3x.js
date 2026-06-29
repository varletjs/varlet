import{_ as o,b as d,e as h,m as p,p as a,q as t,w as l,P as s,Z as e}from"./index-vwO9GBzB.js";const r={components:{}},j={class:"varlet-site-doc"},i=a("h1",null,"Table",-1),m={class:"card"},g={id:"Intro"},b=a("p",null,"A minimal table, when you need to display some data in the form of a table, you may use it.",-1),u={class:"card"},_={id:"BasicUsage"},f=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-table"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"thead"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"th"),s(">")]),s("Name"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"th"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"th"),s(">")]),s("Math"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"th"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"th"),s(">")]),s("English"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"th"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"thead"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"tbody"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("Jerry"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("124"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("38"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(` 
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("Tom"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("100"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("135"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"tbody"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-table"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y={class:"card"},v={id:"FooterSlots"},x=a("p",null,[s("You can insert something in the tail slot, the most common is to insert a "),a("code",null,"Pagination"),s(".")],-1),w=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" list = ref(gen("),a("span",{class:"hljs-number"},"1"),s(", "),a("span",{class:"hljs-number"},"10"),s(`))

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"gen"),s("("),a("span",{class:"hljs-params"},"current, size"),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": size }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(" id = (current - "),a("span",{class:"hljs-number"},"1"),s(") * size + index + "),a("span",{class:"hljs-number"},"1"),s(`

    `),a("span",{class:"hljs-keyword"},"return"),s(` {
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},[s("`Name "),a("span",{class:"hljs-subst"},"${id}"),s("`")]),s(`,
      `),a("span",{class:"hljs-attr"},"math"),s(`: id,
      `),a("span",{class:"hljs-attr"},"english"),s(`: id,
    }
  })
}

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"get"),s("("),a("span",{class:"hljs-params"},"current, size"),s(") ")]),s(`{
  list.value = gen(current, size)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-table"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"thead"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"th"),s(">")]),s("Name"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"th"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"th"),s(">")]),s("Math"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"th"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"th"),s(">")]),s("English"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"th"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"thead"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"tbody"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"tr"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"l in list"'),s(),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"l.name"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("{{ l.name }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("{{ l.math }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("{{ l.english }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"tbody"),s(">")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"footer"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"table-example-footer"'),s(">")]),s(`
        `),a("span",{class:"hljs-comment"},"<!-- Paging in the mobile preview mode uses the simple true mode, which is more friendly to small screen devices -->"),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-pagination"),s(`
          `),a("span",{class:"hljs-attr"},":simple"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
          `),a("span",{class:"hljs-attr"},":current"),s("="),a("span",{class:"hljs-string"},'"1"'),s(`
          `),a("span",{class:"hljs-attr"},":total"),s("="),a("span",{class:"hljs-string"},'"100"'),s(`
          `),a("span",{class:"hljs-attr"},":size-option"),s("="),a("span",{class:"hljs-string"},'"[5, 10]"'),s(`
          @`),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"get"'),s(`
        />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-table"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".table-example-footer"),s(`  {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: flex-end;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"60px"),s(`;
  `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"0"),s(),a("span",{class:"hljs-number"},"16px"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),S=a("h2",null,"API",-1),k={class:"card"},P={id:"Props"},z=e("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>full-width</code></td><td>The width of the <code>table</code> (including the scrollable part)</td><td><em>string | number</em></td><td><code>100%</code></td></tr><tr><td><code>elevation</code></td><td>Elevation level, options <code>true</code> <code>false</code> and level of <code>0-24</code></td><td><em>string | number | boolean</em></td><td><code>true</code></td></tr></tbody></table>",1),N={class:"card"},V={id:"Slots"},B=e("<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Content of <code>table</code></td><td><code>-</code></td></tr><tr><td><code>footer</code></td><td>Footer of <code>table</code></td><td><code>-</code></td></tr></tbody></table>",1),T={class:"card"},U={id:"StyleVariables"},$=e('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--table-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--table-border-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--table-thead-border-bottom</code></td><td><code>thin solid rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--table-thead-th-text-color</code></td><td><code>rgba(0, 0, 0, 0.6)</code></td></tr><tr><td><code>--table-thead-th-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--table-thead-tr-border-bottom</code></td><td><code>thin solid rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--table-tbody-tr-hover-background</code></td><td><code>#eee</code></td></tr><tr><td><code>--table-tbody-tr-border-bottom</code></td><td><code>thin solid rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--table-tbody-td-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--table-tbody-td-font-size</code></td><td><code>16px</code></td></tr><tr><td><code>--table-row-height</code></td><td><code>46px</code></td></tr><tr><td><code>--table-row-padding</code></td><td><code>0 16px</code></td></tr><tr><td><code>--table-footer-border-top</code></td><td><code>thin solid rgba(0, 0, 0, 0.12)</code></td></tr></tbody></table>',2);function C(D,E,F,I,A,M){const n=d("router-link"),c=d("var-site-code-example");return h(),p("div",j,[i,a("div",m,[a("h3",g,[t(n,{to:"#Intro"},{default:l(()=>[s("#")]),_:1}),s("Intro")]),b]),a("div",u,[a("h3",_,[t(n,{to:"#BasicUsage"},{default:l(()=>[s("#")]),_:1}),s("Basic Usage")]),t(c,null,{default:l(()=>[f]),_:1})]),a("div",y,[a("h3",v,[t(n,{to:"#FooterSlots"},{default:l(()=>[s("#")]),_:1}),s("Footer Slots")]),x,t(c,null,{default:l(()=>[w]),_:1})]),S,a("div",k,[a("h3",P,[t(n,{to:"#Props"},{default:l(()=>[s("#")]),_:1}),s("Props")]),z]),a("div",N,[a("h3",V,[t(n,{to:"#Slots"},{default:l(()=>[s("#")]),_:1}),s("Slots")]),B]),a("div",T,[a("h3",U,[t(n,{to:"#StyleVariables"},{default:l(()=>[s("#")]),_:1}),s("Style Variables")]),$])])}const H=o(r,[["render",C]]);export{H as default};
