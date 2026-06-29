import{B as j,O as o}from"./ResponsiveObject-G6wDS5Qi.js";import{_ as d,b as e,e as i,m,p as a,q as l,w as n,P as s,Z as p}from"./index-vwO9GBzB.js";const g={components:{BasicExample:j,ObjectExample:o}},u={class:"varlet-site-doc"},v=a("h1",null,"Layout",-1),f={class:"card"},b={id:"Intro"},_=a("p",null,[s("The component library provides two auxiliary layout components, "),a("code",null,"<var-row/>"),s(" and "),a("code",null,"<var-col/>"),s(", so that you can layout more efficiently.")],-1),x={class:"card"},y={id:"GirdSystem"},w=a("pre",{class:"hljs"},[a("code",null,[s("The `"),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s("/>")]),s("` component divides a row into 24 columns of grids (24 copies), `"),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s("/>")]),s("` provides the `span` attribute to set the number of copies of a column, and the `offset` attribute to set a column the number of copies offset,\nThe `gutter` property sets column spacing.\n")])],-1),S=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(),a("span",{class:"hljs-attr"},":gutter"),s("="),a("span",{class:"hljs-string"},'"[10, 10]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".item"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"36px"),s(`;
  `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#3a7afe"),s(`;
  `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),k={class:"card"},R={id:"Offset"},C=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(),a("span",{class:"hljs-attr"},":gutter"),s("="),a("span",{class:"hljs-string"},'"[10, 10]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"16"'),s(),a("span",{class:"hljs-attr"},":offset"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s("offset: 8 span: 16"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".item"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"36px"),s(`;
  `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#3a7afe"),s(`;
  `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),E={class:"card"},P={id:"Alignment"},T=a("p",null,[s("The layout component is laid out in "),a("code",null,"flex"),s(" by default, using the "),a("code",null,"<var-row/>"),s(),a("code",null,"justify"),s(" and "),a("code",null,"align"),s(" properties to set the alignment of the main and cross axes.")],-1),D=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(),a("span",{class:"hljs-attr"},":gutter"),s("="),a("span",{class:"hljs-string"},'"[20, 10]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"center"'),s(),a("span",{class:"hljs-attr"},":gutter"),s("="),a("span",{class:"hljs-string"},'"[20, 10]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"flex-end"'),s(),a("span",{class:"hljs-attr"},":gutter"),s("="),a("span",{class:"hljs-string"},'"[20, 10]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"space-around"'),s(),a("span",{class:"hljs-attr"},":gutter"),s("="),a("span",{class:"hljs-string"},'"[20, 10]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"space-between"'),s(),a("span",{class:"hljs-attr"},":gutter"),s("="),a("span",{class:"hljs-string"},'"[20, 10]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":span"),s("="),a("span",{class:"hljs-string"},'"8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s("span: 8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".item"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"36px"),s(`;
  `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#3a7afe"),s(`;
  `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),N={class:"card"},A={id:"ResponsiveLayout"},B=a("h4",null,"Basic Usage",-1),O={class:"varlet-component-preview"},V=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(),a("span",{class:"hljs-attr"},":gutter"),s("="),a("span",{class:"hljs-string"},'"10"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":xs"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},":sm"),s("="),a("span",{class:"hljs-string"},'"6"'),s(),a("span",{class:"hljs-attr"},":md"),s("="),a("span",{class:"hljs-string"},'"4"'),s(),a("span",{class:"hljs-attr"},":lg"),s("="),a("span",{class:"hljs-string"},'"3"'),s(),a("span",{class:"hljs-attr"},":xl"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s("1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":xs"),s("="),a("span",{class:"hljs-string"},'"4"'),s(),a("span",{class:"hljs-attr"},":sm"),s("="),a("span",{class:"hljs-string"},'"6"'),s(),a("span",{class:"hljs-attr"},":md"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},":lg"),s("="),a("span",{class:"hljs-string"},'"9"'),s(),a("span",{class:"hljs-attr"},":xl"),s("="),a("span",{class:"hljs-string"},'"11"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s("2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":xs"),s("="),a("span",{class:"hljs-string"},'"4"'),s(),a("span",{class:"hljs-attr"},":sm"),s("="),a("span",{class:"hljs-string"},'"6"'),s(),a("span",{class:"hljs-attr"},":md"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},":lg"),s("="),a("span",{class:"hljs-string"},'"9"'),s(),a("span",{class:"hljs-attr"},":xl"),s("="),a("span",{class:"hljs-string"},'"11"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s("3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(),a("span",{class:"hljs-attr"},":xs"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},":sm"),s("="),a("span",{class:"hljs-string"},'"6"'),s(),a("span",{class:"hljs-attr"},":md"),s("="),a("span",{class:"hljs-string"},'"4"'),s(),a("span",{class:"hljs-attr"},":lg"),s("="),a("span",{class:"hljs-string"},'"3"'),s(),a("span",{class:"hljs-attr"},":xl"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s("4"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".item"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"36px"),s(`;
  `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#3a7afe"),s(`;
  `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),I=a("h4",null,"Column Props Object",-1),L={class:"varlet-component-preview"},$=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(),a("span",{class:"hljs-attr"},":gutter"),s("="),a("span",{class:"hljs-string"},'"10"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(`
      `),a("span",{class:"hljs-attr"},":xs"),s("="),a("span",{class:"hljs-string"},'"{ span: 12, offset: 6 }"'),s(`
      `),a("span",{class:"hljs-attr"},":sm"),s("="),a("span",{class:"hljs-string"},'"{ span: 6 }"'),s(`
      `),a("span",{class:"hljs-attr"},":md"),s("="),a("span",{class:"hljs-string"},'"{ span: 4, offset: 4 }"'),s(`
      `),a("span",{class:"hljs-attr"},":lg"),s("="),a("span",{class:"hljs-string"},'"{ span: 3, offset: 3 }"'),s(`
      `),a("span",{class:"hljs-attr"},":xl"),s("="),a("span",{class:"hljs-string"},'"{ span: 2, offset: 2 }"'),s(`
    >`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s("1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(`
      `),a("span",{class:"hljs-attr"},":xs"),s("="),a("span",{class:"hljs-string"},'"{ span: 12, offset: 6 }"'),s(`
      `),a("span",{class:"hljs-attr"},":sm"),s("="),a("span",{class:"hljs-string"},'"{ span: 6 }"'),s(`
      `),a("span",{class:"hljs-attr"},":md"),s("="),a("span",{class:"hljs-string"},'"{ span: 4, offset: 4 }"'),s(`
      `),a("span",{class:"hljs-attr"},":lg"),s("="),a("span",{class:"hljs-string"},'"{ span: 3, offset: 3 }"'),s(`
      `),a("span",{class:"hljs-attr"},":xl"),s("="),a("span",{class:"hljs-string"},'"{ span: 2, offset: 2 }"'),s(`
    >`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s("2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(`
      `),a("span",{class:"hljs-attr"},":xs"),s("="),a("span",{class:"hljs-string"},'"{ span: 12, offset: 6 }"'),s(`
      `),a("span",{class:"hljs-attr"},":sm"),s("="),a("span",{class:"hljs-string"},'"{ span: 6 }"'),s(`
      `),a("span",{class:"hljs-attr"},":md"),s("="),a("span",{class:"hljs-string"},'"{ span: 4, offset: 4 }"'),s(`
      `),a("span",{class:"hljs-attr"},":lg"),s("="),a("span",{class:"hljs-string"},'"{ span: 3, offset: 3 }"'),s(`
      `),a("span",{class:"hljs-attr"},":xl"),s("="),a("span",{class:"hljs-string"},'"{ span: 2, offset: 2 }"'),s(`
    >`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s("3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-col"),s(`
      `),a("span",{class:"hljs-attr"},":xs"),s("="),a("span",{class:"hljs-string"},'"{ span: 12, offset: 6 }"'),s(`
      `),a("span",{class:"hljs-attr"},":sm"),s("="),a("span",{class:"hljs-string"},'"{ span: 6 }"'),s(`
      `),a("span",{class:"hljs-attr"},":md"),s("="),a("span",{class:"hljs-string"},'"{ span: 4, offset: 4 }"'),s(`
      `),a("span",{class:"hljs-attr"},":lg"),s("="),a("span",{class:"hljs-string"},'"{ span: 3, offset: 3 }"'),s(`
      `),a("span",{class:"hljs-attr"},":xl"),s("="),a("span",{class:"hljs-string"},'"{ span: 2, offset: 2 }"'),s(`
    >`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"item"'),s(">")]),s("4"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-col"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".item"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"36px"),s(`;
  `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#3a7afe"),s(`;
  `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),G=a("h2",null,"API",-1),z={class:"card"},U={id:"Props"},q=p("<h4>Row Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>gutter</code></td><td>Col gutter, default is horizontal spacing. Can be set to [Vertical, Horizontal](Support length unit)</td><td><em>string | number | [string | number, string | number]</em></td><td><code>0</code></td></tr><tr><td><code>justify</code></td><td>Spindle alignment, optional value is <code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code></td><td><em>string</em></td><td><code>flex-start</code></td></tr><tr><td><code>align</code></td><td>Cross axis alignment, optional value is <code>flex-start</code> <code>flex-end</code> <code>center</code></td><td><em>string</em></td><td><code>flex-start</code></td></tr></tbody></table><h4>Col Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>span</code></td><td>Number of grids occupied by columns</td><td><em>string | number</em></td><td><code>24</code></td></tr><tr><td><code>offset</code></td><td>Number of grids for column offsets</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>direction</code></td><td>The optional value of layout direction is <code>row</code> <code>column</code></td><td><em>string</em></td><td><code>row</code></td></tr><tr><td><code>justify</code></td><td>Main axis arrangement, can be set to <code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-around</code> <code>space-between</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>align</code></td><td>Cross axis arrangement, can be set to <code>stretch</code> <code>center</code> <code>flex-start</code> <code>flex-end</code> <code>baseline</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>xs</code></td><td><code>&lt;768px</code> Responsive columns or column props object</td><td><em>string | number | { span?: number | string, offset?: number | string }</em></td><td><code>-</code></td></tr><tr><td><code>sm</code></td><td><code>≥768px</code> Responsive columns or column props object</td><td><em>string | number | { span?: number | string, offset?: number | string }</em></td><td><code>-</code></td></tr><tr><td><code>md</code></td><td><code>≥992px</code> Responsive columns or column props object</td><td><em>string | number | { span?: number | string, offset?: number | string }</em></td><td><code>-</code></td></tr><tr><td><code>lg</code></td><td><code>≥1200px</code> Responsive columns or column props object</td><td><em>string | number | { span?: number | string, offset?: number | string }</em></td><td><code>-</code></td></tr><tr><td><code>xl</code></td><td><code>≥1920px</code> Responsive columns or column props object</td><td><em>string | number | { span?: number | string, offset?: number | string }</em></td><td><code>-</code></td></tr></tbody></table>",4),H={class:"card"},M={id:"Events"},Z=p("<h4>Row Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered when clicking Row</td><td><code>event: Event</code></td></tr></tbody></table><h4>Col Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered when clicking Col</td><td><code>event: Event</code></td></tr></tbody></table>",4),F={class:"card"},J={id:"Slots"},K=p("<h4>Row Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Row content</td><td><code>-</code></td></tr></tbody></table><h4>Col Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Col content</td><td><code>-</code></td></tr></tbody></table>",4);function Q(W,X,Y,ss,as,ls){const t=e("router-link"),c=e("var-site-code-example"),h=e("basic-example"),r=e("object-example");return i(),m("div",u,[v,a("div",f,[a("h3",b,[l(t,{to:"#Intro"},{default:n(()=>[s("#")]),_:1}),s("Intro")]),_]),a("div",x,[a("h3",y,[l(t,{to:"#GirdSystem"},{default:n(()=>[s("#")]),_:1}),s("Gird System")]),l(c,null,{default:n(()=>[w]),_:1}),l(c,null,{default:n(()=>[S]),_:1})]),a("div",k,[a("h3",R,[l(t,{to:"#Offset"},{default:n(()=>[s("#")]),_:1}),s("Offset")]),l(c,null,{default:n(()=>[C]),_:1})]),a("div",E,[a("h3",P,[l(t,{to:"#Alignment"},{default:n(()=>[s("#")]),_:1}),s("Alignment")]),T,l(c,null,{default:n(()=>[D]),_:1})]),a("div",N,[a("h3",A,[l(t,{to:"#ResponsiveLayout"},{default:n(()=>[s("#")]),_:1}),s("Responsive Layout")]),B,a("div",O,[l(h)]),l(c,null,{default:n(()=>[V]),_:1}),I,a("div",L,[l(r)]),l(c,null,{default:n(()=>[$]),_:1})]),G,a("div",z,[a("h3",U,[l(t,{to:"#Props"},{default:n(()=>[s("#")]),_:1}),s("Props")]),q]),a("div",H,[a("h3",M,[l(t,{to:"#Events"},{default:n(()=>[s("#")]),_:1}),s("Events")]),Z]),a("div",F,[a("h3",J,[l(t,{to:"#Slots"},{default:n(()=>[s("#")]),_:1}),s("Slots")]),K])])}const cs=d(g,[["render",Q]]);export{cs as default};
