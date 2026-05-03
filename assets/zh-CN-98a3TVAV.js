import{L as e,N as t,W as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as c}from"./_plugin-vue_export-helper-V-yks4gF.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`jie4shao4`},p={class:`card`},m={id:`biao1zhun3wai4guan1`},h={class:`card`},g={id:`wai4bian0kuang4wai4guan1`},_={class:`card`},v={id:`tian2chong1wai4guan1`},y={class:`card`},b={id:`shu3xing4`},x={class:`card`},S={id:`fang1fa3`},C={class:`card`},w={id:`shi4jian4`},T={class:`card`},E={id:`cha1cao2`},D={class:`card`},O={id:`yang4shi4bian4liang4`};function k(c,l,k,A,j,M){let N=e(`router-link`),P=e(`var-site-code-example`);return t(),i(`div`,u,[l[27]||=r(`h1`,null,`选择框`,-1),r(`div`,d,[r(`h3`,f,[a(N,{to:`#jie4shao4`},{default:n(()=>[...l[0]||=[o(`#`,-1)]]),_:1}),l[1]||=o(`介绍`,-1)]),l[2]||=r(`p`,null,`通过下拉菜单展示并选择内容。`,-1)]),r(`div`,p,[r(`h3`,m,[a(N,{to:`#biao1zhun3wai4guan1`},{default:n(()=>[...l[3]||=[o(`#`,-1)]]),_:1}),l[4]||=o(`标准外观`,-1)]),a(P,null,{default:n(()=>[...l[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref, computed } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { z } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'zod'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` standardValue = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` standardValue2 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` standardValue3 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` standardValue4 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` standardValue5 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` standardValue6 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` standardValue7 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` standardValue8 = ref([])
`),r(`span`,{class:`hljs-keyword`},`const`),o(` standardValue9 = ref([])
`),r(`span`,{class:`hljs-keyword`},`const`),o(` standardValue10 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` standardValue11 = ref([])
`),r(`span`,{class:`hljs-keyword`},`const`),o(` standardValue12 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` standardValue13 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` standardValue14 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` standardValue15 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` standardValue16 = ref([])

`),r(`span`,{class:`hljs-keyword`},`const`),o(` options = computed(`),r(`span`,{class:`hljs-function`},`() =>`),o(` [
  { `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'吃饭'`),o(`, `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-number`},`1`),o(` },
  { `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'睡觉'`),o(`, `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-number`},`2`),o(` },
  { `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'打游戏'`),o(`, `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-number`},`3`),o(`, `),r(`span`,{class:`hljs-attr`},`disabled`),o(`: `),r(`span`,{class:`hljs-literal`},`true`),o(` },
])

`),r(`span`,{class:`hljs-keyword`},`const`),o(` keyOptions = computed(`),r(`span`,{class:`hljs-function`},`() =>`),o(` [
  { `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'吃饭'`),o(`, `),r(`span`,{class:`hljs-attr`},`id`),o(`: `),r(`span`,{class:`hljs-number`},`1`),o(` },
  { `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'睡觉'`),o(`, `),r(`span`,{class:`hljs-attr`},`id`),o(`: `),r(`span`,{class:`hljs-number`},`2`),o(` },
  { `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'打游戏'`),o(`, `),r(`span`,{class:`hljs-attr`},`id`),o(`: `),r(`span`,{class:`hljs-number`},`3`),o(`, `),r(`span`,{class:`hljs-attr`},`disabled`),o(`: `),r(`span`,{class:`hljs-literal`},`true`),o(` },
])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-space`),o(),r(`span`,{class:`hljs-attr`},`direction`),o(`=`),r(`span`,{class:`hljs-string`},`"column"`),o(),r(`span`,{class:`hljs-attr`},`size`),o(`=`),r(`span`,{class:`hljs-string`},`"large"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"standardValue"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"请选择一个选项"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"standardValue2"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"文本关联值"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(),r(`span`,{class:`hljs-attr`},`:value`),o(`=`),r(`span`,{class:`hljs-string`},`"1"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(),r(`span`,{class:`hljs-attr`},`:value`),o(`=`),r(`span`,{class:`hljs-string`},`"2"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"relation"`),o(`>`)]),o(`当前选择的是: {{ standardValue2 }}`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"standardValue3"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"只读"`),o(),r(`span`,{class:`hljs-attr`},`readonly`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"standardValue4"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"禁用"`),o(),r(`span`,{class:`hljs-attr`},`disabled`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"standardValue5"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"可清除"`),o(),r(`span`,{class:`hljs-attr`},`clearable`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"standardValue6"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"使用插槽自定义清除图标"`),o(),r(`span`,{class:`hljs-attr`},`clearable`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`clear-icon`),o(`=`),r(`span`,{class:`hljs-string`},`"{ clear }"`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"clear-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"github"`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"clear"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"standardValue7"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"自定义图标"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`default`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(`>`)]),o(`
          `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"selected-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"cake-variant"`),o(` />`)]),o(`
          `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`span`),o(`>`)]),o(`吃饭`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`span`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-option`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(`>`)]),o(`
          `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"selected-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"weather-night"`),o(` />`)]),o(`
          `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`span`),o(`>`)]),o(`睡觉`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`span`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-option`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`selected`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"selected-icon"`),o(),r(`span`,{class:`hljs-attr`},`:name`),o(`=`),r(`span`,{class:`hljs-string`},`"standardValue7 === '吃饭' ? 'cake-variant' : 'weather-night'"`),o(` />`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`span`),o(`>`)]),o(`{{ standardValue7 }}`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`span`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`prepend-icon`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"prepend-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"github"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`append-icon`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"append-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"github"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`arrow-icon`),o(`=`),r(`span`,{class:`hljs-string`},`"{ focus }"`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"chevron-down"`),o(),r(`span`,{class:`hljs-attr`},`:transition`),o(`=`),r(`span`,{class:`hljs-string`},`"300"`),o(),r(`span`,{class:`hljs-attr`},`:class`),o(`=`),r(`span`,{class:`hljs-string`},`"{ 'arrow-icon-rotate': focus }"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"standardValue8"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"多选"`),o(),r(`span`,{class:`hljs-attr`},`multiple`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"打游戏"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"写代码"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"standardValue9"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"纸片风格的多选"`),o(),r(`span`,{class:`hljs-attr`},`chip`),o(),r(`span`,{class:`hljs-attr`},`multiple`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"打游戏"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"写代码"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"standardValue10"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"单选值校验"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"v => v === '摸鱼' || '您一定得选择摸鱼'"`),o(`
    >`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"摸鱼"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"standardValue11"`),o(`
      `),r(`span`,{class:`hljs-attr`},`multiple`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"多选值校验"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"v => v.length >= 2 || '您至少选择两个选项'"`),o(`
    >`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"打游戏"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"写代码"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"standardValue12"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"使用 Zod 校验单选值"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"z.string().refine(v => v === '摸鱼', '您一定得选择摸鱼')"`),o(`
    >`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"摸鱼"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"standardValue13"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"选项式 API"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"standardValue14"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"自定义字段"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"keyOptions"`),o(`
      `),r(`span`,{class:`hljs-attr`},`label-key`),o(`=`),r(`span`,{class:`hljs-string`},`"name"`),o(`
      `),r(`span`,{class:`hljs-attr`},`value-key`),o(`=`),r(`span`,{class:`hljs-string`},`"id"`),o(`
    />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"standardValue15"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"小尺寸"`),o(),r(`span`,{class:`hljs-attr`},`size`),o(`=`),r(`span`,{class:`hljs-string`},`"small"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"standardValue16"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"使用 Zod 校验多选值"`),o(`
      `),r(`span`,{class:`hljs-attr`},`multiple`),o(`
      `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"z.array(z.string()).min(2, '您至少选择两个选项')"`),o(`
    >`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"打游戏"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"写代码"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-space`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),r(`span`,{class:`css`},[o(`
`),r(`span`,{class:`hljs-selector-class`},`.selected-icon`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`margin-right`),o(`: `),r(`span`,{class:`hljs-number`},`6px`),o(`;
}

`),r(`span`,{class:`hljs-selector-class`},`.prepend-icon`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`margin-right`),o(`: `),r(`span`,{class:`hljs-number`},`6px`),o(`;
}

`),r(`span`,{class:`hljs-selector-class`},`.append-icon`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`margin-left`),o(`: `),r(`span`,{class:`hljs-number`},`6px`),o(`;
}

`),r(`span`,{class:`hljs-selector-class`},`.arrow-icon-rotate`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`transform`),o(`: `),r(`span`,{class:`hljs-built_in`},`rotate`),o(`(`),r(`span`,{class:`hljs-number`},`180deg`),o(`);
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[a(N,{to:`#wai4bian0kuang4wai4guan1`},{default:n(()=>[...l[6]||=[o(`#`,-1)]]),_:1}),l[7]||=o(`外边框外观`,-1)]),a(P,null,{default:n(()=>[...l[8]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref, computed } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { z } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'zod'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` outlinedValue = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` outlinedValue2 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` outlinedValue3 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` outlinedValue4 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` outlinedValue5 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` outlinedValue6 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` outlinedValue7 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` outlinedValue8 = ref([])
`),r(`span`,{class:`hljs-keyword`},`const`),o(` outlinedValue9 = ref([])
`),r(`span`,{class:`hljs-keyword`},`const`),o(` outlinedValue10 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` outlinedValue11 = ref([])
`),r(`span`,{class:`hljs-keyword`},`const`),o(` outlinedValue12 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` outlinedValue13 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` outlinedValue14 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` outlinedValue15 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` outlinedValue16 = ref([])

`),r(`span`,{class:`hljs-keyword`},`const`),o(` options = computed(`),r(`span`,{class:`hljs-function`},`() =>`),o(` [
  { `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'吃饭'`),o(`, `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-number`},`1`),o(` },
  { `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'睡觉'`),o(`, `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-number`},`2`),o(` },
  { `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'打游戏'`),o(`, `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-number`},`3`),o(`, `),r(`span`,{class:`hljs-attr`},`disabled`),o(`: `),r(`span`,{class:`hljs-literal`},`true`),o(` },
])

`),r(`span`,{class:`hljs-keyword`},`const`),o(` keyOptions = computed(`),r(`span`,{class:`hljs-function`},`() =>`),o(` [
  { `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'吃饭'`),o(`, `),r(`span`,{class:`hljs-attr`},`id`),o(`: `),r(`span`,{class:`hljs-number`},`1`),o(` },
  { `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'睡觉'`),o(`, `),r(`span`,{class:`hljs-attr`},`id`),o(`: `),r(`span`,{class:`hljs-number`},`2`),o(` },
  { `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'打游戏'`),o(`, `),r(`span`,{class:`hljs-attr`},`id`),o(`: `),r(`span`,{class:`hljs-number`},`3`),o(`, `),r(`span`,{class:`hljs-attr`},`disabled`),o(`: `),r(`span`,{class:`hljs-literal`},`true`),o(` },
])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-space`),o(),r(`span`,{class:`hljs-attr`},`direction`),o(`=`),r(`span`,{class:`hljs-string`},`"column"`),o(),r(`span`,{class:`hljs-attr`},`size`),o(`=`),r(`span`,{class:`hljs-string`},`"large"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"outlinedValue"`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"请选择一个选项"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"outlinedValue2"`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"文本关联值"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(),r(`span`,{class:`hljs-attr`},`:value`),o(`=`),r(`span`,{class:`hljs-string`},`"1"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(),r(`span`,{class:`hljs-attr`},`:value`),o(`=`),r(`span`,{class:`hljs-string`},`"2"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"relation"`),o(`>`)]),o(`当前选择的是: {{ outlinedValue2 }}`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"outlinedValue3"`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"只读"`),o(),r(`span`,{class:`hljs-attr`},`readonly`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"outlinedValue4"`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"禁用"`),o(),r(`span`,{class:`hljs-attr`},`disabled`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"outlinedValue5"`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"可清除"`),o(),r(`span`,{class:`hljs-attr`},`clearable`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"outlinedValue6"`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"使用插槽自定义清除图标"`),o(),r(`span`,{class:`hljs-attr`},`clearable`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`clear-icon`),o(`=`),r(`span`,{class:`hljs-string`},`"{ clear }"`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"clear-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"github"`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"clear"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"outlinedValue7"`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"自定义图标"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`default`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(`>`)]),o(`
          `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"selected-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"cake-variant"`),o(` />`)]),o(`
          `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`span`),o(`>`)]),o(`吃饭`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`span`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-option`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(`>`)]),o(`
          `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"selected-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"weather-night"`),o(` />`)]),o(`
          `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`span`),o(`>`)]),o(`睡觉`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`span`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-option`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`selected`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"selected-icon"`),o(),r(`span`,{class:`hljs-attr`},`:name`),o(`=`),r(`span`,{class:`hljs-string`},`"outlinedValue7 === '吃饭' ? 'cake-variant' : 'weather-night'"`),o(` />`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`span`),o(`>`)]),o(`{{ outlinedValue7 }}`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`span`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`prepend-icon`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"prepend-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"github"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`append-icon`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"append-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"github"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`arrow-icon`),o(`=`),r(`span`,{class:`hljs-string`},`"{ focus }"`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"chevron-down"`),o(),r(`span`,{class:`hljs-attr`},`:transition`),o(`=`),r(`span`,{class:`hljs-string`},`"300"`),o(),r(`span`,{class:`hljs-attr`},`:class`),o(`=`),r(`span`,{class:`hljs-string`},`"{ 'arrow-icon-rotate': focus }"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"outlinedValue8"`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"多选"`),o(),r(`span`,{class:`hljs-attr`},`multiple`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"打游戏"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"写代码"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"outlinedValue9"`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"纸片风格的多选"`),o(),r(`span`,{class:`hljs-attr`},`chip`),o(),r(`span`,{class:`hljs-attr`},`multiple`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"打游戏"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"写代码"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"outlinedValue10"`),o(`
      `),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"单选值校验"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"v => v === '摸鱼' || '您一定得选择摸鱼'"`),o(`
    >`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"摸鱼"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"outlinedValue11"`),o(`
      `),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(`
      `),r(`span`,{class:`hljs-attr`},`multiple`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"多选值校验"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"v => v.length >= 2 || '您至少选择两个选项'"`),o(`
    >`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"打游戏"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"写代码"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"outlinedValue12"`),o(`
      `),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"使用 Zod 校验单选值"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"z.string().refine(v => v === '摸鱼', '您一定得选择摸鱼')"`),o(`
    >`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"摸鱼"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"outlinedValue13"`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"选项式 API"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"outlinedValue14"`),o(`
      `),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"自定义字段"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"keyOptions"`),o(`
      `),r(`span`,{class:`hljs-attr`},`label-key`),o(`=`),r(`span`,{class:`hljs-string`},`"name"`),o(`
      `),r(`span`,{class:`hljs-attr`},`value-key`),o(`=`),r(`span`,{class:`hljs-string`},`"id"`),o(`
    />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"outlinedValue15"`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"小尺寸"`),o(),r(`span`,{class:`hljs-attr`},`size`),o(`=`),r(`span`,{class:`hljs-string`},`"small"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"outlinedValue16"`),o(`
      `),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"outlined"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"使用 Zod 校验多选值"`),o(`
      `),r(`span`,{class:`hljs-attr`},`multiple`),o(`
      `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"z.array(z.string()).min(2, '您至少选择两个选项')"`),o(`
    >`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"打游戏"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"写代码"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-space`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),r(`span`,{class:`css`},[o(`
`),r(`span`,{class:`hljs-selector-class`},`.selected-icon`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`margin-right`),o(`: `),r(`span`,{class:`hljs-number`},`6px`),o(`;
}

`),r(`span`,{class:`hljs-selector-class`},`.prepend-icon`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`margin-right`),o(`: `),r(`span`,{class:`hljs-number`},`6px`),o(`;
}

`),r(`span`,{class:`hljs-selector-class`},`.append-icon`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`margin-left`),o(`: `),r(`span`,{class:`hljs-number`},`6px`),o(`;
}

`),r(`span`,{class:`hljs-selector-class`},`.arrow-icon-rotate`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`transform`),o(`: `),r(`span`,{class:`hljs-built_in`},`rotate`),o(`(`),r(`span`,{class:`hljs-number`},`180deg`),o(`);
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,_,[r(`h3`,v,[a(N,{to:`#tian2chong1wai4guan1`},{default:n(()=>[...l[9]||=[o(`#`,-1)]]),_:1}),l[10]||=o(`填充外观`,-1)]),a(P,null,{default:n(()=>[...l[11]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref, computed } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { z } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'zod'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` filledValue = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` filledValue2 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` filledValue3 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` filledValue4 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` filledValue5 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` filledValue6 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` filledValue7 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` filledValue8 = ref([])
`),r(`span`,{class:`hljs-keyword`},`const`),o(` filledValue9 = ref([])
`),r(`span`,{class:`hljs-keyword`},`const`),o(` filledValue10 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` filledValue11 = ref([])
`),r(`span`,{class:`hljs-keyword`},`const`),o(` filledValue12 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` filledValue13 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` filledValue14 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` filledValue15 = ref()
`),r(`span`,{class:`hljs-keyword`},`const`),o(` filledValue16 = ref([])

`),r(`span`,{class:`hljs-keyword`},`const`),o(` options = computed(`),r(`span`,{class:`hljs-function`},`() =>`),o(` [
  { `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'吃饭'`),o(`, `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-number`},`1`),o(` },
  { `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'睡觉'`),o(`, `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-number`},`2`),o(` },
  { `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'打游戏'`),o(`, `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-number`},`3`),o(`, `),r(`span`,{class:`hljs-attr`},`disabled`),o(`: `),r(`span`,{class:`hljs-literal`},`true`),o(` },
])

`),r(`span`,{class:`hljs-keyword`},`const`),o(` keyOptions = computed(`),r(`span`,{class:`hljs-function`},`() =>`),o(` [
  { `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'吃饭'`),o(`, `),r(`span`,{class:`hljs-attr`},`id`),o(`: `),r(`span`,{class:`hljs-number`},`1`),o(` },
  { `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'睡觉'`),o(`, `),r(`span`,{class:`hljs-attr`},`id`),o(`: `),r(`span`,{class:`hljs-number`},`2`),o(` },
  { `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'打游戏'`),o(`, `),r(`span`,{class:`hljs-attr`},`id`),o(`: `),r(`span`,{class:`hljs-number`},`3`),o(`, `),r(`span`,{class:`hljs-attr`},`disabled`),o(`: `),r(`span`,{class:`hljs-literal`},`true`),o(` },
])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-space`),o(),r(`span`,{class:`hljs-attr`},`direction`),o(`=`),r(`span`,{class:`hljs-string`},`"column"`),o(),r(`span`,{class:`hljs-attr`},`size`),o(`=`),r(`span`,{class:`hljs-string`},`"large"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"filledValue"`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"请选择一个选项"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"filledValue2"`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"文本关联值"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(),r(`span`,{class:`hljs-attr`},`:value`),o(`=`),r(`span`,{class:`hljs-string`},`"1"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(),r(`span`,{class:`hljs-attr`},`:value`),o(`=`),r(`span`,{class:`hljs-string`},`"2"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"relation"`),o(`>`)]),o(`当前选择的是: {{ filledValue2 }}`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"filledValue3"`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"只读"`),o(),r(`span`,{class:`hljs-attr`},`readonly`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"filledValue4"`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"禁用"`),o(),r(`span`,{class:`hljs-attr`},`disabled`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"filledValue5"`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"可清除"`),o(),r(`span`,{class:`hljs-attr`},`clearable`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"filledValue6"`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"使用插槽自定义清除图标"`),o(),r(`span`,{class:`hljs-attr`},`clearable`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`clear-icon`),o(`=`),r(`span`,{class:`hljs-string`},`"{ clear }"`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"clear-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"github"`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"clear"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"filledValue7"`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"自定义图标"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`default`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(`>`)]),o(`
          `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"selected-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"cake-variant"`),o(` />`)]),o(`
          `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`span`),o(`>`)]),o(`吃饭`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`span`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-option`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(`>`)]),o(`
          `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"selected-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"weather-night"`),o(` />`)]),o(`
          `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`span`),o(`>`)]),o(`睡觉`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`span`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-option`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`selected`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"selected-icon"`),o(),r(`span`,{class:`hljs-attr`},`:name`),o(`=`),r(`span`,{class:`hljs-string`},`"filledValue7 === '吃饭' ? 'cake-variant' : 'weather-night'"`),o(` />`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`span`),o(`>`)]),o(`{{ filledValue7 }}`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`span`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`prepend-icon`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"prepend-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"github"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`append-icon`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"append-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"github"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`arrow-icon`),o(`=`),r(`span`,{class:`hljs-string`},`"{ focus }"`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"chevron-down"`),o(),r(`span`,{class:`hljs-attr`},`:transition`),o(`=`),r(`span`,{class:`hljs-string`},`"300"`),o(),r(`span`,{class:`hljs-attr`},`:class`),o(`=`),r(`span`,{class:`hljs-string`},`"{ 'arrow-icon-rotate': focus }"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"filledValue8"`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"多选"`),o(),r(`span`,{class:`hljs-attr`},`multiple`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"打游戏"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"写代码"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"filledValue9"`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"纸片风格的多选"`),o(),r(`span`,{class:`hljs-attr`},`chip`),o(),r(`span`,{class:`hljs-attr`},`multiple`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"打游戏"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"写代码"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"filledValue10"`),o(`
      `),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"单选值校验"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"v => v === '摸鱼' || '您一定得选择摸鱼'"`),o(`
    >`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"摸鱼"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"filledValue11"`),o(`
      `),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(`
      `),r(`span`,{class:`hljs-attr`},`multiple`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"多选值校验"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"v => v.length >= 2 || '您至少选择两个选项'"`),o(`
    >`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"打游戏"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"写代码"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"filledValue12"`),o(`
      `),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"使用 Zod 校验单选值"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"z.string().refine(v => v === '摸鱼', '您一定得选择摸鱼')"`),o(`
    >`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"摸鱼"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"filledValue13"`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"选项式 API"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"filledValue14"`),o(`
      `),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"自定义字段"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"keyOptions"`),o(`
      `),r(`span`,{class:`hljs-attr`},`label-key`),o(`=`),r(`span`,{class:`hljs-string`},`"name"`),o(`
      `),r(`span`,{class:`hljs-attr`},`value-key`),o(`=`),r(`span`,{class:`hljs-string`},`"id"`),o(`
    />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"filledValue15"`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"小尺寸"`),o(),r(`span`,{class:`hljs-attr`},`size`),o(`=`),r(`span`,{class:`hljs-string`},`"small"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"filledValue16"`),o(`
      `),r(`span`,{class:`hljs-attr`},`variant`),o(`=`),r(`span`,{class:`hljs-string`},`"filled"`),o(`
      `),r(`span`,{class:`hljs-attr`},`placeholder`),o(`=`),r(`span`,{class:`hljs-string`},`"使用 Zod 校验多选值"`),o(`
      `),r(`span`,{class:`hljs-attr`},`multiple`),o(`
      `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"z.array(z.string()).min(2, '您至少选择两个选项')"`),o(`
    >`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"吃饭"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"睡觉"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"打游戏"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`=`),r(`span`,{class:`hljs-string`},`"写代码"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-space`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),r(`span`,{class:`css`},[o(`
`),r(`span`,{class:`hljs-selector-class`},`.selected-icon`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`margin-right`),o(`: `),r(`span`,{class:`hljs-number`},`6px`),o(`;
}

`),r(`span`,{class:`hljs-selector-class`},`.prepend-icon`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`margin-right`),o(`: `),r(`span`,{class:`hljs-number`},`6px`),o(`;
}

`),r(`span`,{class:`hljs-selector-class`},`.append-icon`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`margin-left`),o(`: `),r(`span`,{class:`hljs-number`},`6px`),o(`;
}

`),r(`span`,{class:`hljs-selector-class`},`.arrow-icon-rotate`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`transform`),o(`: `),r(`span`,{class:`hljs-built_in`},`rotate`),o(`(`),r(`span`,{class:`hljs-number`},`180deg`),o(`);
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),l[28]||=r(`h2`,null,`API`,-1),r(`div`,y,[r(`h3`,b,[a(N,{to:`#shu3xing4`},{default:n(()=>[...l[12]||=[o(`#`,-1)]]),_:1}),l[13]||=o(`属性`,-1)]),l[14]||=s(`<h4>Select Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>绑定的值</td><td><em>any | any[]</em></td><td><code>-</code></td></tr><tr><td><code>size</code></td><td>选择框尺寸，可选值 <code>normal</code> <code>small</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>variant</code></td><td>选择框风格, 可选值为 <code>standard</code> <code>outlined</code> <code>filled</code></td><td><em>string</em></td><td><code>standard</code></td></tr><tr><td><code>placeholder</code></td><td>占位符</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>multiple</code></td><td>是否开启多选</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset-y</code></td><td>下拉菜单的垂直偏移量</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>chip</code></td><td>是否使用纸片风格(仅限多选)</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>line</code></td><td>是否显示分割线</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hint</code></td><td>是否使用占位符作为提示</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>text-color</code></td><td>文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>focus-color</code></td><td>聚焦时的主要颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>blur-color</code></td><td>失焦时的主要颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>是否只读</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>clearable</code></td><td>是否可清除</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>options</code> <em><strong>3.3.4</strong></em></td><td>指定可选项</td><td><em>SelectOption[]</em></td><td><code>[]</code></td></tr><tr><td><code>label-key</code> <em><strong>3.3.4</strong></em></td><td>作为 label 唯一标识的键名</td><td><em>string</em></td><td><code>label</code></td></tr><tr><td><code>value-key</code> <em><strong>3.3.4</strong></em></td><td>作为 value 唯一标识的键名</td><td><em>string</em></td><td><code>value</code></td></tr><tr><td><code>validate-trigger</code></td><td>触发验证的时机，可选值为 <code>onFocus</code> <code>onBlur</code> <code>onChange</code> <code>onClick</code> <code>onClear</code> <code>onClose</code></td><td><em>SelectValidateTrigger[]</em></td><td><code>[&#39;onChange&#39;, &#39;onClear&#39;, &#39;onClose&#39;]</code></td></tr><tr><td><code>rules</code></td><td>验证规则，返回 <code>true</code> 表示验证通过，其它类型的值将转换为文本作为用户提示。自 <code>3.5.0</code> 开始支持 <a href="#/zh-CN/zodValidation">Zod 验证</a></td><td><em>((v: any) =&gt; any) | ZodType | Array&lt;((v: any) =&gt; any) | ZodType&gt;</em></td><td><code>-</code></td></tr><tr><td><code>tabindex</code> <em><strong>3.12.1</strong></em></td><td>与原生 select 的 tabindex 属性一致</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>filterable</code> <em><strong>3.14.0</strong></em></td><td>是否可以过滤</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>filter</code> <em><strong>3.14.0</strong></em></td><td>自定义过滤方法</td><td><em>(pattern: string, option: SelectOption) =&gt; boolean</em></td><td><code>-</code></td></tr></tbody></table><h4>SelectOption</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>label</code></td><td>选项的标签</td><td><em>string | VNode | (option: SelectOption, selected: boolean) =&gt; VNodeChild</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>选项的值</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><em>boolean</em></td><td><code>-</code></td></tr></tbody></table><h4>Option Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>label</code></td><td>选项显示的文本</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>选项绑定的值</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code> <em><strong>3.8.0</strong></em></td><td>是否启用水波效果</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table>`,6)]),r(`div`,x,[r(`h3`,S,[a(N,{to:`#fang1fa3`},{default:n(()=>[...l[15]||=[o(`#`,-1)]]),_:1}),l[16]||=o(`方法`,-1)]),l[17]||=s(`<h4>Select Methods</h4><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>focus</code></td><td>聚焦</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>blur</code></td><td>失焦</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>validate</code></td><td>触发校验</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>清空校验信息</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>清空绑定的值(单选设置为 <code>undefined</code>，多选设置为 <code>[]</code>)和校验信息</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>`,2)]),r(`div`,C,[r(`h3`,w,[a(N,{to:`#shi4jian4`},{default:n(()=>[...l[18]||=[o(`#`,-1)]]),_:1}),l[19]||=o(`事件`,-1)]),l[20]||=s(`<h4>Select Events</h4><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>focus</code></td><td>聚焦时触发</td><td><code>event: Event</code></td></tr><tr><td><code>blur</code></td><td>失焦时触发</td><td><code>event: Event</code></td></tr><tr><td><code>click</code></td><td>点击时触发</td><td><code>event: Event</code></td></tr><tr><td><code>clear</code></td><td>清除时触发</td><td><code>value: any | any[]</code></td></tr><tr><td><code>close</code></td><td>关闭时触发</td><td><code>value: any[]</code></td></tr><tr><td><code>change</code></td><td>更新时触发</td><td><code>value: any | any[]</code></td></tr></tbody></table>`,2)]),r(`div`,T,[r(`h3`,E,[a(N,{to:`#cha1cao2`},{default:n(()=>[...l[21]||=[o(`#`,-1)]]),_:1}),l[22]||=o(`插槽`,-1)]),l[23]||=s(`<h4>Select Slots</h4><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>selected</code></td><td>选择区域的内容</td><td><code>-</code></td></tr><tr><td><code>prepend-icon</code></td><td>前置图标</td><td><code>-</code></td></tr><tr><td><code>clear-icon</code></td><td>清除图标</td><td><code>clear: (e: Event) =&gt; void</code> 清除函数(在使用插槽时, 可用于清除选择框内容)</td></tr><tr><td><code>append-icon</code></td><td>后置图标</td><td><code>-</code></td></tr><tr><td><code>arrow-icon</code></td><td>箭头图标</td><td><code>focus: boolean</code> 是否处于聚焦状态, <code>menu-open: boolean</code> 是否菜单被打开</td></tr><tr><td><code>empty</code> <em><strong>3.14.0</strong></em></td><td>无选项或过滤无结果时展示的内容，可完全定制整个空状态容器；未使用时为带国际化默认文案的默认空状态</td><td><code>-</code></td></tr></tbody></table><h4>Option Slots</h4><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>选项显示的内容</td><td><code>selected: boolean</code> 是否选中</td></tr></tbody></table>`,4)]),r(`div`,D,[r(`h3`,O,[a(N,{to:`#yang4shi4bian4liang4`},{default:n(()=>[...l[24]||=[o(`#`,-1)]]),_:1}),l[25]||=o(`样式变量`,-1)]),l[26]||=s(`<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><h4>Select Variables</h4><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--select-scroller-background</code></td><td><code>var(--color-surface-container-high)</code></td></tr><tr><td><code>--select-scroller-padding</code></td><td><code>6px 0</code></td></tr><tr><td><code>--select-scroller-max-height</code></td><td><code>278px</code></td></tr><tr><td><code>--select-scroller-border-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--select-label-font-size</code></td><td><code>16px</code></td></tr><tr><td><code>--select-chips-margin</code></td><td><code>-5px 0 0 0</code></td></tr><tr><td><code>--select-chips-padding</code></td><td><code>2px 0</code></td></tr><tr><td><code>--select-chip-margin</code></td><td><code>5px 5px 0 0</code></td></tr><tr><td><code>--select-arrow-size</code></td><td><code>20px</code></td></tr><tr><td><code>--select-standard-menu-margin</code></td><td><code>calc(var(--field-decorator-placeholder-size) * 0.75 + 14px) 0 0 0</code></td></tr><tr><td><code>--select-empty-text-color</code></td><td><code>rgba(0, 0, 0, 0.6)</code></td></tr><tr><td><code>--select-empty-height</code></td><td><code>38px</code></td></tr><tr><td><code>--select-empty-font-size</code></td><td><code>14px</code></td></tr></tbody></table><h4>Option Variables</h4><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--option-height</code></td><td><code>38px</code></td></tr><tr><td><code>--option-padding</code></td><td><code>0 12px</code></td></tr><tr><td><code>--option-font-size</code></td><td><code>16px</code></td></tr><tr><td><code>--option-selected-background</code></td><td><code>var(--input-decorator-focus-color)</code></td></tr><tr><td><code>--option-text-color</code></td><td><code>#555</code></td></tr></tbody></table><h4>Variant Variables</h4><p>外观相关的样式变量请参考 <a href="#/zh-CN/input#yang4shi4bian4liang4">Input 组件</a> 的样式变量</p>`,7)])])}var A=c(l,[[`render`,k]]);export{A as default};