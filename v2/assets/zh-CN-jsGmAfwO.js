import{_ as o,b as d,e as p,m as h,p as t,q as a,w as l,P as s,Z as e}from"./index-vwO9GBzB.js";const r={components:{}},i={class:"varlet-site-doc"},j=t("h1",null,"提示",-1),g={class:"card"},m={id:"jie4shao4"},_=t("p",null,"当元素点击或悬停时显示一个提示，通过控制弹出位置和偏移量改变提示的显示位置。",-1),u={class:"card"},v={id:"ji1ben3shi3yong4"},b=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("基本使用"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),f={class:"card"},y={id:"nei4rong2cha1cao2"},T=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("内容插槽"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"content"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"star"'),s(" />")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),x={class:"card"},k={id:"tan2chu1wei4zhi4"},w=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" placement = ref("),t("span",{class:"hljs-string"},"'top'"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(` placementOptions = [
  `),t("span",{class:"hljs-string"},"'top'"),s(`,
  `),t("span",{class:"hljs-string"},"'top-start'"),s(`,
  `),t("span",{class:"hljs-string"},"'top-end'"),s(`,
  `),t("span",{class:"hljs-string"},"'bottom'"),s(`,
  `),t("span",{class:"hljs-string"},"'bottom-start'"),s(`,
  `),t("span",{class:"hljs-string"},"'bottom-end'"),s(`,
  `),t("span",{class:"hljs-string"},"'right'"),s(`,
  `),t("span",{class:"hljs-string"},"'right-start'"),s(`,
  `),t("span",{class:"hljs-string"},"'right-end'"),s(`,
  `),t("span",{class:"hljs-string"},"'left'"),s(`,
  `),t("span",{class:"hljs-string"},"'left-start'"),s(`,
  `),t("span",{class:"hljs-string"},"'left-end'"),s(`,
]
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-select"),s(),t("span",{class:"hljs-attr"},":hint"),s("="),t("span",{class:"hljs-string"},'"false"'),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"placement"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(` 
      `),t("span",{class:"hljs-attr"},"v-for"),s("="),t("span",{class:"hljs-string"},'"(item, index) in placementOptions"'),s(` 
      `),t("span",{class:"hljs-attr"},":key"),s("="),t("span",{class:"hljs-string"},'"index"'),s(`
      `),t("span",{class:"hljs-attr"},":label"),s("="),t("span",{class:"hljs-string"},'"item"'),s(` 
    />`)]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
  
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"placement-container"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(),t("span",{class:"hljs-attr"},":placement"),s("="),t("span",{class:"hljs-string"},'"placement"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"star"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"style"),s(">")]),t("span",{class:"css"},[s(`
`),t("span",{class:"hljs-selector-class"},".placement-container"),s(` {
  `),t("span",{class:"hljs-attribute"},"height"),s(": "),t("span",{class:"hljs-number"},"250px"),s(`;
  `),t("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),t("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),t("span",{class:"hljs-attribute"},"align-items"),s(`: center;
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),z={class:"card"},P={id:"zhu3ti2se4"},S=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-space"),s(),t("span",{class:"hljs-attr"},":size"),s("="),t("span",{class:"hljs-string"},'"[54, 10]"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s("默认"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("主要"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"info"'),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"info"'),s(">")]),s("信息"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"success"'),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"success"'),s(">")]),s("成功"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(">")]),s("警告"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"danger"'),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"danger"'),s(">")]),s("危险"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),N={class:"card"},C={id:"zi4ding4yi4yan2se4"},V=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(),t("span",{class:"hljs-attr"},"color"),s("="),t("span",{class:"hljs-string"},'"#d81b60"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("自定义颜色"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),$={class:"card"},B={id:"pian1yi2liang2"},E=t("p",null,[s("通过 "),t("code",null,"offset-x"),s(" 和 "),t("code",null,"offset-y"),s(" 设置 "),t("code",null,"Tooltip"),s(" 弹出的偏移量。")],-1),O=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(),t("span",{class:"hljs-attr"},":offset-x"),s("="),t("span",{class:"hljs-string"},'"64"'),s(),t("span",{class:"hljs-attr"},":offset-y"),s("="),t("span",{class:"hljs-string"},'"-10"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("偏移量"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),q={class:"card"},A={id:"chu4fa1fang1shi4"},I=t("p",null,[s("通过 "),t("code",null,"trigger"),s(" 改变 "),t("code",null,"Tooltip"),s(" 显示的触发方式，可选值为 "),t("code",null,"click"),s(" 和 "),t("code",null,"hover"),s("。")],-1),Z=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(),t("span",{class:"hljs-attr"},"trigger"),s("="),t("span",{class:"hljs-string"},'"hover"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("触发方式"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),D={class:"card"},F={id:"zhu4ce4shi4jian4"},G=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(`
    `),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(`
    @`),t("span",{class:"hljs-attr"},"open"),s("="),t("span",{class:"hljs-string"},`"Snackbar.info('open')"`),s(`
    @`),t("span",{class:"hljs-attr"},"opened"),s("="),t("span",{class:"hljs-string"},`"Snackbar.success('opened')"`),s(`
    @`),t("span",{class:"hljs-attr"},"close"),s("="),t("span",{class:"hljs-string"},`"Snackbar.warning('close')"`),s(`
    @`),t("span",{class:"hljs-attr"},"closed"),s("="),t("span",{class:"hljs-string"},`"Snackbar.error('closed')"`),s(`
  >`)]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("注册事件"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),H={class:"card"},J={id:"jin4yong4ti2shi4"},K=t("p",null,[s("在 "),t("code",null,"disabled"),s(" 状态下，"),t("code",null,"Tooltip"),s(" 将不再被打开。")],-1),L=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(),t("span",{class:"hljs-attr"},"disabled"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"disabled"),s(">")]),s("禁用提示"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),M=t("h2",null,"API",-1),Q={class:"card"},R={id:"shu3xing4"},U=e("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>是否显示</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>content</code></td><td>显示的内容</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>背景颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>type</code></td><td>类型，可选值为 <code>default</code> <code>primary</code> <code>info</code> <code>success</code> <code>warning</code> <code>danger</code></td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>placement</code></td><td>弹出位置</td><td><em>Placement</em></td><td><code>bottom</code></td></tr><tr><td><code>strategy</code></td><td>定位方式，可选值为 <code>absolute</code> <code>fixed</code></td><td><em>string</em></td><td><code>absolute</code></td></tr><tr><td><code>offset-x</code></td><td>x 轴偏移量， 相对于 <code>Tooltip</code> 对齐后的位置</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>offset-y</code></td><td>y 轴偏移量， 相对于 <code>Tooltip</code> 对齐后的位置</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>teleport</code></td><td>挂载的位置</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>body</code></td></tr><tr><td><code>same-width</code></td><td>是否与触发元素同宽</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用 Tooltip</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>trigger</code></td><td>触发方式，可选值为 <code>click</code> <code>hover</code>, <code>click</code> 为点击时触发, <code>hover</code> 为悬停时触发</td><td><em>string</em></td><td><code>hover</code></td></tr><tr><td><code>reference</code></td><td>关联的触发元素选择器，用于指定特定子元素为触发元素</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>close-on-click-reference</code></td><td>是否在点击菜单触发元素后关闭菜单</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>",1),W={class:"card"},X={id:"Placement"},Y=e("<table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td><code>top</code></td><td>顶部中心位置</td></tr><tr><td><code>top-start</code></td><td>顶部左侧位置</td></tr><tr><td><code>top-end</code></td><td>顶部右侧位置</td></tr><tr><td><code>bottom</code></td><td>底部中心位置</td></tr><tr><td><code>bottom-start</code></td><td>底部左侧位置</td></tr><tr><td><code>bottom-end</code></td><td>底部右侧位置</td></tr><tr><td><code>right</code></td><td>右侧中心位置</td></tr><tr><td><code>right-start</code></td><td>右侧上方位置</td></tr><tr><td><code>right-end</code></td><td>右侧下方位置</td></tr><tr><td><code>left</code></td><td>左侧中心位置</td></tr><tr><td><code>left-start</code></td><td>左侧上方位置</td></tr><tr><td><code>left-end</code></td><td>左侧下方位置</td></tr></tbody></table>",1),ss={class:"card"},ts={id:"fang1fa3"},as=e("<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>open</code></td><td>打开 <code>Tooltip</code></td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>关闭 <code>Tooltip</code></td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>resize</code></td><td><code>Tooltip</code> 默认插槽元素产生位置大小变化时可以调用此方法进行重绘</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>click-outside</code></td><td>点击菜单外部时触发</td><td><code>event: Event</code></td><td></td></tr></tbody></table>",1),ls={class:"card"},ns={id:"shi4jian4"},cs=e("<table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>open</code></td><td>打开 <code>Tooltip</code> 时触发</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>打开 <code>Tooltip</code> 动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>关闭 <code>Tooltip</code> 时触发</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>关闭 <code>Tooltip</code> 动画结束时触发</td><td><code>-</code></td></tr></tbody></table>",1),es={class:"card"},ds={id:"cha1cao2"},os=e("<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td><code>Tooltip</code> 关联的触发元素</td><td><code>-</code></td></tr><tr><td><code>content</code></td><td><code>Tooltip</code> 内容</td><td><code>-</code></td></tr></tbody></table>",1),ps={class:"card"},hs={id:"yang4shi4bian4liang4"},rs=e('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--tooltip-opacity</code></td><td><code>0.9</code></td></tr><tr><td><code>--tooltip-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--tooltip-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--tooltip-padding</code></td><td><code>8px 16px</code></td></tr><tr><td><code>--tooltip-default-color</code></td><td><code>#616161</code></td></tr><tr><td><code>--tooltip-offset</code></td><td><code>10px</code></td></tr><tr><td><code>--tooltip-primary-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--tooltip-info-color</code></td><td><code>var(--color-info)</code></td></tr><tr><td><code>--tooltip-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--tooltip-warning-color</code></td><td><code>var(--color-warning)</code></td></tr><tr><td><code>--tooltip-danger-color</code></td><td><code>var(--color-danger)</code></td></tr></tbody></table>',2);function is(js,gs,ms,_s,us,vs){const n=d("router-link"),c=d("var-site-code-example");return p(),h("div",i,[j,t("div",g,[t("h3",m,[a(n,{to:"#jie4shao4"},{default:l(()=>[s("#")]),_:1}),s("介绍")]),_]),t("div",u,[t("h3",v,[a(n,{to:"#ji1ben3shi3yong4"},{default:l(()=>[s("#")]),_:1}),s("基本使用")]),a(c,null,{default:l(()=>[b]),_:1})]),t("div",f,[t("h3",y,[a(n,{to:"#nei4rong2cha1cao2"},{default:l(()=>[s("#")]),_:1}),s("内容插槽")]),a(c,null,{default:l(()=>[T]),_:1})]),t("div",x,[t("h3",k,[a(n,{to:"#tan2chu1wei4zhi4"},{default:l(()=>[s("#")]),_:1}),s("弹出位置")]),a(c,null,{default:l(()=>[w]),_:1})]),t("div",z,[t("h3",P,[a(n,{to:"#zhu3ti2se4"},{default:l(()=>[s("#")]),_:1}),s("主题色")]),a(c,null,{default:l(()=>[S]),_:1})]),t("div",N,[t("h3",C,[a(n,{to:"#zi4ding4yi4yan2se4"},{default:l(()=>[s("#")]),_:1}),s("自定义颜色")]),a(c,null,{default:l(()=>[V]),_:1})]),t("div",$,[t("h3",B,[a(n,{to:"#pian1yi2liang2"},{default:l(()=>[s("#")]),_:1}),s("偏移量")]),E,a(c,null,{default:l(()=>[O]),_:1})]),t("div",q,[t("h3",A,[a(n,{to:"#chu4fa1fang1shi4"},{default:l(()=>[s("#")]),_:1}),s("触发方式")]),I,a(c,null,{default:l(()=>[Z]),_:1})]),t("div",D,[t("h3",F,[a(n,{to:"#zhu4ce4shi4jian4"},{default:l(()=>[s("#")]),_:1}),s("注册事件")]),a(c,null,{default:l(()=>[G]),_:1})]),t("div",H,[t("h3",J,[a(n,{to:"#jin4yong4ti2shi4"},{default:l(()=>[s("#")]),_:1}),s("禁用提示")]),K,a(c,null,{default:l(()=>[L]),_:1})]),M,t("div",Q,[t("h3",R,[a(n,{to:"#shu3xing4"},{default:l(()=>[s("#")]),_:1}),s("属性")]),U]),t("div",W,[t("h3",X,[a(n,{to:"#Placement"},{default:l(()=>[s("#")]),_:1}),s("Placement")]),Y]),t("div",ss,[t("h3",ts,[a(n,{to:"#fang1fa3"},{default:l(()=>[s("#")]),_:1}),s("方法")]),as]),t("div",ls,[t("h3",ns,[a(n,{to:"#shi4jian4"},{default:l(()=>[s("#")]),_:1}),s("事件")]),cs]),t("div",es,[t("h3",ds,[a(n,{to:"#cha1cao2"},{default:l(()=>[s("#")]),_:1}),s("插槽")]),os]),t("div",ps,[t("h3",hs,[a(n,{to:"#yang4shi4bian4liang4"},{default:l(()=>[s("#")]),_:1}),s("样式变量")]),rs])])}const fs=o(r,[["render",is]]);export{fs as default};