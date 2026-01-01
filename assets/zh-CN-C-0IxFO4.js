import{b as c,m as p,p as a,q as t,Q as s,w as n,$ as o,e as r,h as i}from"./index-DtCrA0ro.js";const j={components:{}},h={class:"varlet-site-doc"},m={class:"card"},u={id:"jie4shao4"},g={class:"card"},f={id:"ji1ben3shi3yong4"},y={class:"card"},v={id:"zi4ding4yi4ping2fen1zong3shu4"},b={class:"card"},k={id:"zi4ding4yi4ping2fen1tu2biao1yang4shi4"},w={class:"card"},z={id:"zi4ding4yi4ping2fen1tu2biao1chi3cun4yu3jian4ge2"},x={class:"card"},C={id:"shi3yong4ban4xing1"},N={class:"card"},Z={id:"jin4yong4yu3zhi1du2"},$={class:"card"},V={id:"ke3qing1kong1"},S={class:"card"},q={id:"jian1ting1shi4jian4"},B={class:"card"},T={id:"zi4duan4jiao4yan4"},A={class:"card"},P={id:"shi3yong4Zo0djiao4yan4"},E={class:"card"},I={id:"shu3xing4"},Q={class:"card"},D={id:"shi4jian4"},F={class:"card"},G={id:"yang4shi4bian4liang4"};function H(J,l,K,L,M,O){const e=r("router-link"),d=r("var-site-code-example");return i(),p("div",h,[l[50]||(l[50]=a("h1",null,"评分",-1)),a("div",m,[a("h3",u,[t(e,{to:"#jie4shao4"},{default:n(()=>[...l[0]||(l[0]=[s("#",-1)])]),_:1}),l[1]||(l[1]=s("介绍",-1))]),l[2]||(l[2]=a("p",null,"用于对事物进行评级操作。",-1))]),a("div",g,[a("h3",f,[t(e,{to:"#ji1ben3shi3yong4"},{default:n(()=>[...l[3]||(l[3]=[s("#",-1)])]),_:1}),l[4]||(l[4]=s("基本使用",-1))]),t(d,null,{default:n(()=>[...l[5]||(l[5]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s("/>")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"thumb-up"'),s(),a("span",{class:"hljs-attr"},"empty-icon"),s("="),a("span",{class:"hljs-string"},'"thumb-up-outline"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",y,[a("h3",v,[t(e,{to:"#zi4ding4yi4ping2fen1zong3shu4"},{default:n(()=>[...l[6]||(l[6]=[s("#",-1)])]),_:1}),l[7]||(l[7]=s("自定义评分总数",-1))]),l[9]||(l[9]=a("p",null,[s("通过 "),a("code",null,"count"),s(" 属性设置评分总数。")],-1)),t(d,null,{default:n(()=>[...l[8]||(l[8]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(),a("span",{class:"hljs-attr"},":count"),s("="),a("span",{class:"hljs-string"},'"8"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",b,[a("h3",k,[t(e,{to:"#zi4ding4yi4ping2fen1tu2biao1yang4shi4"},{default:n(()=>[...l[10]||(l[10]=[s("#",-1)])]),_:1}),l[11]||(l[11]=s("自定义评分图标样式",-1))]),l[13]||(l[13]=a("p",null,[s("通过 "),a("code",null,"icon"),s(" 和 "),a("code",null,"empty-icon"),s(" 属性设置选中和未选中时的图标。 通过 "),a("code",null,"color"),s(" 和 "),a("code",null,"empty-color"),s(" 属性设置选中和未选中时的颜色。")],-1)),t(d,null,{default:n(()=>[...l[12]||(l[12]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(` 
    `),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(` 
    `),a("span",{class:"hljs-attr"},"empty-icon"),s("="),a("span",{class:"hljs-string"},'"heart-outline"'),s(` 
    `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"red"'),s(` 
    `),a("span",{class:"hljs-attr"},"empty-color"),s("="),a("span",{class:"hljs-string"},'"red"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",w,[a("h3",z,[t(e,{to:"#zi4ding4yi4ping2fen1tu2biao1chi3cun4yu3jian4ge2"},{default:n(()=>[...l[14]||(l[14]=[s("#",-1)])]),_:1}),l[15]||(l[15]=s("自定义评分图标尺寸与间隔",-1))]),l[17]||(l[17]=a("p",null,[s("通过 "),a("code",null,"size"),s(" 属性设置评分图标的尺寸。 通过 "),a("code",null,"gap"),s(" 属性设置评分之间的间隔。")],-1)),t(d,null,{default:n(()=>[...l[16]||(l[16]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"28"'),s(),a("span",{class:"hljs-attr"},":gap"),s("="),a("span",{class:"hljs-string"},'"8"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",x,[a("h3",C,[t(e,{to:"#shi3yong4ban4xing1"},{default:n(()=>[...l[18]||(l[18]=[s("#",-1)])]),_:1}),l[19]||(l[19]=s("使用半星",-1))]),l[21]||(l[21]=a("p",null,[s("通过 "),a("code",null,"half"),s(" 属性将评分设置为可半选，"),a("code",null,"half-icon"),s(" 属性设置半选时的样式。")],-1)),t(d,null,{default:n(()=>[...l[20]||(l[20]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3.5"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"half"),s(),a("span",{class:"hljs-attr"},":count"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(`
    `),a("span",{class:"hljs-attr"},"half"),s(`
    `),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(`
    `),a("span",{class:"hljs-attr"},"half-icon"),s("="),a("span",{class:"hljs-string"},'"heart-half-full"'),s(`
    `),a("span",{class:"hljs-attr"},"empty-icon"),s("="),a("span",{class:"hljs-string"},'"heart-outline"'),s(`
    `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"red"'),s(`
    `),a("span",{class:"hljs-attr"},":count"),s("="),a("span",{class:"hljs-string"},'"8"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",N,[a("h3",Z,[t(e,{to:"#jin4yong4yu3zhi1du2"},{default:n(()=>[...l[22]||(l[22]=[s("#",-1)])]),_:1}),l[23]||(l[23]=s("禁用与只读",-1))]),l[25]||(l[25]=a("p",null,[s("通过 "),a("code",null,"disabled"),s(" 属性将评分设置为禁止点击状态，"),a("code",null,"disabled-color"),s(" 设置禁用时图标的颜色。 通过 "),a("code",null,"readonly"),s(" 属性将评分设置为只读状态。")],-1)),t(d,null,{default:n(()=>[...l[24]||(l[24]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(),a("span",{class:"hljs-attr"},"disabled"),s("/>")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(),a("span",{class:"hljs-attr"},"readonly"),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",$,[a("h3",V,[t(e,{to:"#ke3qing1kong1"},{default:n(()=>[...l[26]||(l[26]=[s("#",-1)])]),_:1}),l[27]||(l[27]=s("可清空",-1))]),l[29]||(l[29]=a("p",null,[s("通过 "),a("code",null,"clearable"),s(" 属性允许用户清空评分。")],-1)),t(d,null,{default:n(()=>[...l[28]||(l[28]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3.5"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(),a("span",{class:"hljs-attr"},"clearable"),s(),a("span",{class:"hljs-attr"},"half"),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",S,[a("h3",q,[t(e,{to:"#jian1ting1shi4jian4"},{default:n(()=>[...l[30]||(l[30]=[s("#",-1)])]),_:1}),l[31]||(l[31]=s("监听事件",-1))]),l[33]||(l[33]=a("p",null,[s("通过调用 "),a("code",null,"change"),s(" 事件完成其他交互逻辑。")],-1)),t(d,null,{default:n(()=>[...l[32]||(l[32]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3"),s(`)

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleChange"),s("("),a("span",{class:"hljs-params"},"score"),s(") ")]),s(`{
  Snackbar({
    `),a("span",{class:"hljs-attr"},"content"),s(": "),a("span",{class:"hljs-string"},[s("`click "),a("span",{class:"hljs-subst"},"${score}"),s("`")]),s(`,
    `),a("span",{class:"hljs-attr"},"position"),s(": "),a("span",{class:"hljs-string"},"'top'"),s(`
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleChange"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",B,[a("h3",T,[t(e,{to:"#zi4duan4jiao4yan4"},{default:n(()=>[...l[34]||(l[34]=[s("#",-1)])]),_:1}),l[35]||(l[35]=s("字段校验",-1))]),l[37]||(l[37]=a("p",null,[s("通过传入一个校验器数组可以对值进行校验，校验器返回 "),a("code",null,"true"),s(" 则为校验通过。 以外的值将转换为文本作为用户提示。")],-1)),t(d,null,{default:n(()=>[...l[36]||(l[36]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"v => v > 2 || '必须大于2'"`),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},"'score'"),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",A,[a("h3",P,[t(e,{to:"#shi3yong4Zo0djiao4yan4"},{default:n(()=>[...l[38]||(l[38]=[s("#",-1)])]),_:1}),l[39]||(l[39]=s("使用 Zod 校验",-1))]),t(d,null,{default:n(()=>[...l[40]||(l[40]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { z } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'zod'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"z.number().min(3, '必须大于2')"`),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},"'score'"),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),l[51]||(l[51]=a("h2",null,"API",-1)),a("div",E,[a("h3",I,[t(e,{to:"#shu3xing4"},{default:n(()=>[...l[41]||(l[41]=[s("#",-1)])]),_:1}),l[42]||(l[42]=s("属性",-1))]),l[43]||(l[43]=o('<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>当前分数</td><td><em>number</em></td><td><code>0</code></td></tr><tr><td><code>count</code></td><td>评分总数</td><td><em>number | string</em></td><td><code>5</code></td></tr><tr><td><code>color</code></td><td>选中时图标的颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>选中整个图标时的图标样式</td><td><em>string</em></td><td><code>star</code></td></tr><tr><td><code>empty-color</code></td><td>未选中时图标的颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>empty-icon</code></td><td>未选中时图标的样式</td><td><em>string</em></td><td><code>star-outline</code></td></tr><tr><td><code>size</code></td><td>图标大小，默认单位为 <code>px</code></td><td><em>number | string</em></td><td><code>-</code></td></tr><tr><td><code>gap</code></td><td>图标间隔，默认单位为 <code>px</code></td><td><em>number | string</em></td><td><code>-</code></td></tr><tr><td><code>half</code></td><td>是否允许半选</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>half-icon</code></td><td>半选时图标的样式，只有在 <code>half</code> 为 <code>true</code> 时才有效</td><td><em>string</em></td><td><code>star-half-full</code></td></tr><tr><td><code>namespace</code></td><td>图标的命名空间</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>empty-icon-namespace</code></td><td>未选中时图标的命名空间</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>half-icon-namespace</code></td><td>半选时图标的命名空间</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>disabled</code></td><td>是否禁止评分</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled-color</code></td><td>禁止评分时图标的颜色，只有在 <code>disabled</code> 为 <code>true</code> 时才有效，优先级高于 <code>color</code>、<code>empty-color</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>是否为只读状态，只读状态下无法修改评分</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>clearable</code></td><td>是否允许清空</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>是否使用水波纹</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>rules</code></td><td>验证规则，返回 <code>true</code> 表示验证通过，其它类型的值将转换为文本作为用户提示。自 <code>3.5.0</code> 开始支持 <a href="#/zh-CN/zodValidation">Zod 验证</a></td><td><em>((v: number) =&gt; any) | ZodType | Array&lt;((v: number) =&gt; any) | ZodType&gt;</em></td><td><code>-</code></td></tr></tbody></table>',1))]),a("div",Q,[a("h3",D,[t(e,{to:"#shi4jian4"},{default:n(()=>[...l[44]||(l[44]=[s("#",-1)])]),_:1}),l[45]||(l[45]=s("事件",-1))]),l[46]||(l[46]=a("table",null,[a("thead",null,[a("tr",null,[a("th",null,"事件名"),a("th",null,"说明"),a("th",null,"回调参数")])]),a("tbody",null,[a("tr",null,[a("td",null,[a("code",null,"change")]),a("td",null,"评分改变时触发"),a("td",null,[a("code",null,"value: number")])])])],-1))]),a("div",F,[a("h3",G,[t(e,{to:"#yang4shi4bian4liang4"},{default:n(()=>[...l[47]||(l[47]=[s("#",-1)])]),_:1}),l[48]||(l[48]=s("样式变量",-1))]),l[49]||(l[49]=o('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--rate-color</code></td><td><code>var(--color-text)</code></td></tr><tr><td><code>--rate-size</code></td><td><code>24px</code></td></tr><tr><td><code>--rate-primary-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--rate-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--rate-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--rate-action-padding</code></td><td><code>4px</code></td></tr></tbody></table>',2))])])}const U=c(j,[["render",H]]);export{U as default};
