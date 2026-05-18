import{_ as r,b as d,e as o,m as h,p as a,q as l,w as t,P as s,Z as c}from"./index-vwO9GBzB.js";const p={components:{}},i={class:"varlet-site-doc"},j=a("h1",null,"Slider",-1),u={class:"card"},m={id:"Intro"},g=a("p",null,"Used to take values within a given range.",-1),_={class:"card"},b={id:"BasicUsage"},v=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-number"},"3"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-slider"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),f={class:"card"},y={id:"StepSize"},k=a("p",null,[s("Set step increment by "),a("code",null,"step"),s(".")],-1),w=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-number"},"25"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-slider"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"step"),s("="),a("span",{class:"hljs-string"},'"10"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),S={class:"card"},x={id:"DualThumbs"},V=a("p",null,[s("Open the double slider mode through the "),a("code",null,"range"),s(" attribute. Make sure the "),a("code",null,"value"),s(" is an array.")],-1),z=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref(["),a("span",{class:"hljs-number"},"24"),s(", "),a("span",{class:"hljs-number"},"50"),s(`])

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleChange"),s("("),a("span",{class:"hljs-params"},"value"),s(") ")]),s(`{
  `),a("span",{class:"hljs-built_in"},"console"),s(`.log(value)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-slider"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"range"),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleChange"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),C={class:"card"},B={id:"Range"},D=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-slider"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"max"),s("="),a("span",{class:"hljs-string"},'"210"'),s(),a("span",{class:"hljs-attr"},"min"),s("="),a("span",{class:"hljs-string"},'"-50"'),s(),a("span",{class:"hljs-attr"},"label-visible"),s("="),a("span",{class:"hljs-string"},'"always"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),T={class:"card"},E={id:"Disable"},P=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-number"},"40"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-slider"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"disabled"),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),R={class:"card"},U={id:"Readonly"},N=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-number"},"40"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-slider"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"readonly"),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),I={class:"card"},W={id:"SliderSize"},$=a("p",null,[s("Control the size of slider through "),a("code",null,"track-height"),s(" and "),a("code",null,"thumb-size"),s(".")],-1),L=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref(["),a("span",{class:"hljs-number"},"7"),s(", "),a("span",{class:"hljs-number"},"64"),s(`])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-slider"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"track-height"),s("="),a("span",{class:"hljs-string"},'"4"'),s(),a("span",{class:"hljs-attr"},"thumb-size"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},"range"),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),A={class:"card"},H={id:"CustomStyle"},q=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-number"},"20"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-slider"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(`
    `),a("span",{class:"hljs-attr"},"label-color"),s("="),a("span",{class:"hljs-string"},'"purple"'),s(`
    `),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#e0732c"'),s(`
    `),a("span",{class:"hljs-attr"},"track-color"),s("="),a("span",{class:"hljs-string"},'"#3a68b4"'),s(`
    `),a("span",{class:"hljs-attr"},"thumb-color"),s("="),a("span",{class:"hljs-string"},'"#e25241"'),s(`
    `),a("span",{class:"hljs-attr"},"label-text-color"),s("="),a("span",{class:"hljs-string"},'"#ededed"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),F={class:"card"},M={id:"CustomButton"},O=a("p",null,[s("The props such as "),a("code",null,"label-visible"),s(", "),a("code",null,"label-text-color"),s(", "),a("code",null,"thumb-size"),s(" are invalid when using slot custom buttons.")],-1),Z=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref(["),a("span",{class:"hljs-number"},"5"),s(", "),a("span",{class:"hljs-number"},"38"),s(`])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-slider"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"range"),s(),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#52af77"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"button"),s("="),a("span",{class:"hljs-string"},'"{ currentValue }"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"slider-example__block"'),s(">")]),s("{{ currentValue }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-slider"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".slider-example__block"),s(` {
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"24px"),s(`;
  `),a("span",{class:"hljs-attribute"},"border"),s(": "),a("span",{class:"hljs-number"},"1px"),s(" solid "),a("span",{class:"hljs-number"},"#52af77"),s(`;
  `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#52af77"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"24px"),s(`;
  `),a("span",{class:"hljs-attribute"},"margin"),s(": "),a("span",{class:"hljs-number"},"0"),s(" -"),a("span",{class:"hljs-number"},"12px"),s(`;
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"box-shadow"),s(": "),a("span",{class:"hljs-number"},"#ebebeb"),s(),a("span",{class:"hljs-number"},"0"),s(),a("span",{class:"hljs-number"},"2px"),s(),a("span",{class:"hljs-number"},"2px"),s(`;
  `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"50%"),s(`;
  `),a("span",{class:"hljs-attribute"},"font-size"),s(": "),a("span",{class:"hljs-number"},"12px"),s(`;
  `),a("span",{class:"hljs-attribute"},"background-color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),G={class:"card"},J={id:"ShowLabel"},K=a("p",null,[s("Control the display of labels through the "),a("code",null,"label-visible"),s(" attribute.")],-1),Q=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-number"},"20"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" value1 = ref("),a("span",{class:"hljs-number"},"70"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" value2 = ref("),a("span",{class:"hljs-number"},"50"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-slider"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"label-visible"),s("="),a("span",{class:"hljs-string"},'"never"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-slider"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-slider"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value2"'),s(),a("span",{class:"hljs-attr"},"label-visible"),s("="),a("span",{class:"hljs-string"},'"always"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),X={class:"card"},Y={id:"ValidateValue"},ss=c('<p>Verify the value through the <code>rules</code> attribute.</p><p><span style="font-size:12px;"><code>rules</code> is an array that accepts <code>functions</code>, <code>boolean</code>, and <code>string</code>. Functions pass an input value as an argument and must return either <code>true</code> / <code>false</code> or a <code>string</code> containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) <code>false</code> or is a <code>string</code>.</span></p>',2),as=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-number"},"20"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-slider"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[(v) => v > 35 || 'error message']"`),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),ls={class:"card"},ts={id:"Vertical"},es=a("p",null,[s("Set the "),a("code",null,"direction"),s(" attribute value to "),a("code",null,"vertical"),s(" to make the slider display vertically.")],-1),ns=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value1 = ref("),a("span",{class:"hljs-number"},"50"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" value2 = ref(["),a("span",{class:"hljs-number"},"7"),s(", "),a("span",{class:"hljs-number"},"64"),s(`])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"space-around"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"height: 300px"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-slider"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"vertical"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"height: 300px"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-slider"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value2"'),s(),a("span",{class:"hljs-attr"},"range"),s(),a("span",{class:"hljs-attr"},"label-visible"),s("="),a("span",{class:"hljs-string"},'"always"'),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"vertical"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),cs=a("h2",null,"API",-1),ds={class:"card"},rs={id:"Props"},os=c("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of slider</td><td><em>number | [number, number]</em></td><td><code>0</code></td></tr><tr><td><code>step</code></td><td>Step size. The value must greater than 0</td><td><em>string | number</em></td><td><code>1</code></td></tr><tr><td><code>range</code></td><td>Whether open the dual thumb mode</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>max</code></td><td>The maximum value the slider can slide to</td><td><em>string | number</em></td><td><code>100</code></td></tr><tr><td><code>min</code></td><td>The minimum value the slider can slide to</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>label-visible</code></td><td>Whether to display labels, the optional value is <code>always, normal, never</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>label-text-color</code></td><td>Color of label text</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>label-color</code></td><td>Background color of label</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>active-color</code></td><td>Background color of actived track</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>track-color</code></td><td>Background color of track</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>track-height</code></td><td>Height of track</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>thumb-size</code></td><td>Size of thumb</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>thumb-color</code></td><td>Background color of thumb</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable slider</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>readonly</code></td><td>Whether to readonly slider</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>direction</code></td><td>Direction of slider, Can be set to <code>vertical horizontal</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>rules</code></td><td>Validation rules</td><td><em>Array&lt;(v: number | number[]) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table>",1),hs={class:"card"},ps={id:"Events"},is=c("<table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Emitted after slider changed</td><td><code>value</code>: current value</td></tr><tr><td><code>start</code></td><td>Emitted when start dragged</td><td><code>-</code></td></tr><tr><td><code>end</code></td><td>Emitted when end dragged</td><td><code>value</code>: current value</td></tr></tbody></table>",1),js={class:"card"},us={id:"Slots"},ms=c("<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>button</code></td><td>Custom button</td><td><code>currentValue</code>: current value</td></tr></tbody></table>",1),gs={class:"card"},_s={id:"StyleVariables"},bs=c('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--slider-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--slider-track-background</code></td><td><code>#bdbdbd</code></td></tr><tr><td><code>--slider-track-height</code></td><td><code>2px</code></td></tr><tr><td><code>--slider-track-border-radius</code></td><td><code>0</code></td></tr><tr><td><code>--slider-track-fill-border-radius</code></td><td><code>0</code></td></tr><tr><td><code>--slider-track-fill-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--slider-thumb-block-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--slider-thumb-ripple-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--slider-thumb-label-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--slider-thumb-label-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--slider-thumb-label-text-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--slider-thumb-size</code></td><td><code>12px</code></td></tr><tr><td><code>--slider-disabled-opacity</code></td><td><code>var(--opacity-disabled)</code></td></tr></tbody></table>',2);function vs(fs,ys,ks,ws,Ss,xs){const e=d("router-link"),n=d("var-site-code-example");return o(),h("div",i,[j,a("div",u,[a("h3",m,[l(e,{to:"#Intro"},{default:t(()=>[s("#")]),_:1}),s("Intro")]),g]),a("div",_,[a("h3",b,[l(e,{to:"#BasicUsage"},{default:t(()=>[s("#")]),_:1}),s("Basic Usage")]),l(n,null,{default:t(()=>[v]),_:1})]),a("div",f,[a("h3",y,[l(e,{to:"#StepSize"},{default:t(()=>[s("#")]),_:1}),s("Step Size")]),k,l(n,null,{default:t(()=>[w]),_:1})]),a("div",S,[a("h3",x,[l(e,{to:"#DualThumbs"},{default:t(()=>[s("#")]),_:1}),s("Dual Thumbs")]),V,l(n,null,{default:t(()=>[z]),_:1})]),a("div",C,[a("h3",B,[l(e,{to:"#Range"},{default:t(()=>[s("#")]),_:1}),s("Range")]),l(n,null,{default:t(()=>[D]),_:1})]),a("div",T,[a("h3",E,[l(e,{to:"#Disable"},{default:t(()=>[s("#")]),_:1}),s("Disable")]),l(n,null,{default:t(()=>[P]),_:1})]),a("div",R,[a("h3",U,[l(e,{to:"#Readonly"},{default:t(()=>[s("#")]),_:1}),s("Readonly")]),l(n,null,{default:t(()=>[N]),_:1})]),a("div",I,[a("h3",W,[l(e,{to:"#SliderSize"},{default:t(()=>[s("#")]),_:1}),s("Slider Size")]),$,l(n,null,{default:t(()=>[L]),_:1})]),a("div",A,[a("h3",H,[l(e,{to:"#CustomStyle"},{default:t(()=>[s("#")]),_:1}),s("Custom Style")]),l(n,null,{default:t(()=>[q]),_:1})]),a("div",F,[a("h3",M,[l(e,{to:"#CustomButton"},{default:t(()=>[s("#")]),_:1}),s("Custom Button")]),O,l(n,null,{default:t(()=>[Z]),_:1})]),a("div",G,[a("h3",J,[l(e,{to:"#ShowLabel"},{default:t(()=>[s("#")]),_:1}),s("Show Label")]),K,l(n,null,{default:t(()=>[Q]),_:1})]),a("div",X,[a("h3",Y,[l(e,{to:"#ValidateValue"},{default:t(()=>[s("#")]),_:1}),s("Validate Value")]),ss,l(n,null,{default:t(()=>[as]),_:1})]),a("div",ls,[a("h3",ts,[l(e,{to:"#Vertical"},{default:t(()=>[s("#")]),_:1}),s("Vertical")]),es,l(n,null,{default:t(()=>[ns]),_:1})]),cs,a("div",ds,[a("h3",rs,[l(e,{to:"#Props"},{default:t(()=>[s("#")]),_:1}),s("Props")]),os]),a("div",hs,[a("h3",ps,[l(e,{to:"#Events"},{default:t(()=>[s("#")]),_:1}),s("Events")]),is]),a("div",js,[a("h3",us,[l(e,{to:"#Slots"},{default:t(()=>[s("#")]),_:1}),s("Slots")]),ms]),a("div",gs,[a("h3",_s,[l(e,{to:"#StyleVariables"},{default:t(()=>[s("#")]),_:1}),s("Style Variables")]),bs])])}const zs=r(p,[["render",vs]]);export{zs as default};
