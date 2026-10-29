import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`jie4shao4`},p={class:`card`},m={id:`biao1zhun3wai4guan1`},h={class:`card`},g={id:`wai4bian0kuang4wai4guan1`},_={class:`card`},v={id:`tian2chong1wai4guan1`},y={class:`card`},b={id:`cai4dan1yuan2jiao3`},x={class:`card`},S={id:`shu3xing4`},C={class:`card`},w={id:`fang1fa3`},T={class:`card`},E={id:`shi4jian4`},D={class:`card`},O={id:`cha1cao2`},k={class:`card`},A={id:`yang4shi4bian4liang4`};function j(e,l,j,M,N,P){let F=n(`router-link`),I=n(`var-site-code-example`);return r(),a(`div`,u,[l[31]||=i(`h1`,null,`选择框`,-1),i(`div`,d,[i(`h3`,f,[o(F,{to:`#jie4shao4`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`介绍`,-1)]),l[2]||=i(`p`,null,`通过下拉菜单展示并选择内容。`,-1)]),i(`div`,p,[i(`h3`,m,[o(F,{to:`#biao1zhun3wai4guan1`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`标准外观`,-1)]),o(I,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref, computed } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { z } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'zod'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue2 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue3 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue4 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue5 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue6 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue7 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue8 = ref([])
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue9 = ref([])
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue10 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue11 = ref([])
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue12 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue13 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue14 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue15 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue16 = ref([])

`),i(`span`,{class:`hljs-keyword`},`const`),s(` options = computed(`),i(`span`,{class:`hljs-function`},`() =>`),s(` [
  { `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'吃饭'`),s(`, `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-number`},`1`),s(` },
  { `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'睡觉'`),s(`, `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-number`},`2`),s(` },
  { `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'打游戏'`),s(`, `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-number`},`3`),s(`, `),i(`span`,{class:`hljs-attr`},`disabled`),s(`: `),i(`span`,{class:`hljs-literal`},`true`),s(` },
])

`),i(`span`,{class:`hljs-keyword`},`const`),s(` keyOptions = computed(`),i(`span`,{class:`hljs-function`},`() =>`),s(` [
  { `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'吃饭'`),s(`, `),i(`span`,{class:`hljs-attr`},`id`),s(`: `),i(`span`,{class:`hljs-number`},`1`),s(` },
  { `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'睡觉'`),s(`, `),i(`span`,{class:`hljs-attr`},`id`),s(`: `),i(`span`,{class:`hljs-number`},`2`),s(` },
  { `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'打游戏'`),s(`, `),i(`span`,{class:`hljs-attr`},`id`),s(`: `),i(`span`,{class:`hljs-number`},`3`),s(`, `),i(`span`,{class:`hljs-attr`},`disabled`),s(`: `),i(`span`,{class:`hljs-literal`},`true`),s(` },
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(),i(`span`,{class:`hljs-attr`},`direction`),s(`=`),i(`span`,{class:`hljs-string`},`"column"`),s(),i(`span`,{class:`hljs-attr`},`size`),s(`=`),i(`span`,{class:`hljs-string`},`"large"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"请选择一个选项"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue2"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"文本关联值"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(),i(`span`,{class:`hljs-attr`},`:value`),s(`=`),i(`span`,{class:`hljs-string`},`"1"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(),i(`span`,{class:`hljs-attr`},`:value`),s(`=`),i(`span`,{class:`hljs-string`},`"2"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"relation"`),s(`>`)]),s(`当前选择的是: {{ standardValue2 }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue3"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"只读"`),s(),i(`span`,{class:`hljs-attr`},`readonly`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue4"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"禁用"`),s(),i(`span`,{class:`hljs-attr`},`disabled`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue5"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"可清除"`),s(),i(`span`,{class:`hljs-attr`},`clearable`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue6"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"使用插槽自定义清除图标"`),s(),i(`span`,{class:`hljs-attr`},`clearable`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`clear-icon`),s(`=`),i(`span`,{class:`hljs-string`},`"{ clear }"`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"clear-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"github"`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"clear"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue7"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"自定义图标"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`default`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(`>`)]),s(`
          `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"selected-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"cake-variant"`),s(` />`)]),s(`
          `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`span`),s(`>`)]),s(`吃饭`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`span`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-option`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(`>`)]),s(`
          `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"selected-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"weather-night"`),s(` />`)]),s(`
          `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`span`),s(`>`)]),s(`睡觉`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`span`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-option`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`selected`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"selected-icon"`),s(),i(`span`,{class:`hljs-attr`},`:name`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue7 === '吃饭' ? 'cake-variant' : 'weather-night'"`),s(` />`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`span`),s(`>`)]),s(`{{ standardValue7 }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`span`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`prepend-icon`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"prepend-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"github"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`append-icon`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"append-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"github"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`arrow-icon`),s(`=`),i(`span`,{class:`hljs-string`},`"{ focus }"`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"chevron-down"`),s(),i(`span`,{class:`hljs-attr`},`:transition`),s(`=`),i(`span`,{class:`hljs-string`},`"300"`),s(),i(`span`,{class:`hljs-attr`},`:class`),s(`=`),i(`span`,{class:`hljs-string`},`"{ 'arrow-icon-rotate': focus }"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue8"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"多选"`),s(),i(`span`,{class:`hljs-attr`},`multiple`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"打游戏"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"写代码"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue9"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"纸片风格的多选"`),s(),i(`span`,{class:`hljs-attr`},`chip`),s(),i(`span`,{class:`hljs-attr`},`multiple`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"打游戏"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"写代码"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue10"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"单选值校验"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"v => v === '摸鱼' || '您一定得选择摸鱼'"`),s(`
    >`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"摸鱼"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue11"`),s(`
      `),i(`span`,{class:`hljs-attr`},`multiple`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"多选值校验"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"v => v.length >= 2 || '您至少选择两个选项'"`),s(`
    >`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"打游戏"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"写代码"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue12"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"使用 Zod 校验单选值"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"z.string().refine(v => v === '摸鱼', '您一定得选择摸鱼')"`),s(`
    >`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"摸鱼"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue13"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"选项式 API"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue14"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"自定义字段"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"keyOptions"`),s(`
      `),i(`span`,{class:`hljs-attr`},`label-key`),s(`=`),i(`span`,{class:`hljs-string`},`"name"`),s(`
      `),i(`span`,{class:`hljs-attr`},`value-key`),s(`=`),i(`span`,{class:`hljs-string`},`"id"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue15"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"小尺寸"`),s(),i(`span`,{class:`hljs-attr`},`size`),s(`=`),i(`span`,{class:`hljs-string`},`"small"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue16"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"使用 Zod 校验多选值"`),s(`
      `),i(`span`,{class:`hljs-attr`},`multiple`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"z.array(z.string()).min(2, '您至少选择两个选项')"`),s(`
    >`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"打游戏"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"写代码"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.selected-icon`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`margin-right`),s(`: `),i(`span`,{class:`hljs-number`},`6px`),s(`;
}

`),i(`span`,{class:`hljs-selector-class`},`.prepend-icon`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`margin-right`),s(`: `),i(`span`,{class:`hljs-number`},`6px`),s(`;
}

`),i(`span`,{class:`hljs-selector-class`},`.append-icon`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`margin-left`),s(`: `),i(`span`,{class:`hljs-number`},`6px`),s(`;
}

`),i(`span`,{class:`hljs-selector-class`},`.arrow-icon-rotate`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`transform`),s(`: `),i(`span`,{class:`hljs-built_in`},`rotate`),s(`(`),i(`span`,{class:`hljs-number`},`180deg`),s(`);
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(F,{to:`#wai4bian0kuang4wai4guan1`},{default:t(()=>[...l[6]||=[s(`#`,-1)]]),_:1}),l[7]||=s(`外边框外观`,-1)]),o(I,null,{default:t(()=>[...l[8]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref, computed } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { z } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'zod'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue2 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue3 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue4 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue5 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue6 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue7 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue8 = ref([])
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue9 = ref([])
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue10 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue11 = ref([])
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue12 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue13 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue14 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue15 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue16 = ref([])

`),i(`span`,{class:`hljs-keyword`},`const`),s(` options = computed(`),i(`span`,{class:`hljs-function`},`() =>`),s(` [
  { `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'吃饭'`),s(`, `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-number`},`1`),s(` },
  { `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'睡觉'`),s(`, `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-number`},`2`),s(` },
  { `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'打游戏'`),s(`, `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-number`},`3`),s(`, `),i(`span`,{class:`hljs-attr`},`disabled`),s(`: `),i(`span`,{class:`hljs-literal`},`true`),s(` },
])

`),i(`span`,{class:`hljs-keyword`},`const`),s(` keyOptions = computed(`),i(`span`,{class:`hljs-function`},`() =>`),s(` [
  { `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'吃饭'`),s(`, `),i(`span`,{class:`hljs-attr`},`id`),s(`: `),i(`span`,{class:`hljs-number`},`1`),s(` },
  { `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'睡觉'`),s(`, `),i(`span`,{class:`hljs-attr`},`id`),s(`: `),i(`span`,{class:`hljs-number`},`2`),s(` },
  { `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'打游戏'`),s(`, `),i(`span`,{class:`hljs-attr`},`id`),s(`: `),i(`span`,{class:`hljs-number`},`3`),s(`, `),i(`span`,{class:`hljs-attr`},`disabled`),s(`: `),i(`span`,{class:`hljs-literal`},`true`),s(` },
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(),i(`span`,{class:`hljs-attr`},`direction`),s(`=`),i(`span`,{class:`hljs-string`},`"column"`),s(),i(`span`,{class:`hljs-attr`},`size`),s(`=`),i(`span`,{class:`hljs-string`},`"large"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"请选择一个选项"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue2"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"文本关联值"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(),i(`span`,{class:`hljs-attr`},`:value`),s(`=`),i(`span`,{class:`hljs-string`},`"1"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(),i(`span`,{class:`hljs-attr`},`:value`),s(`=`),i(`span`,{class:`hljs-string`},`"2"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"relation"`),s(`>`)]),s(`当前选择的是: {{ outlinedValue2 }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue3"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"只读"`),s(),i(`span`,{class:`hljs-attr`},`readonly`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue4"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"禁用"`),s(),i(`span`,{class:`hljs-attr`},`disabled`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue5"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"可清除"`),s(),i(`span`,{class:`hljs-attr`},`clearable`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue6"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"使用插槽自定义清除图标"`),s(),i(`span`,{class:`hljs-attr`},`clearable`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`clear-icon`),s(`=`),i(`span`,{class:`hljs-string`},`"{ clear }"`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"clear-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"github"`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"clear"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue7"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"自定义图标"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`default`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(`>`)]),s(`
          `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"selected-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"cake-variant"`),s(` />`)]),s(`
          `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`span`),s(`>`)]),s(`吃饭`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`span`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-option`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(`>`)]),s(`
          `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"selected-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"weather-night"`),s(` />`)]),s(`
          `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`span`),s(`>`)]),s(`睡觉`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`span`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-option`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`selected`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"selected-icon"`),s(),i(`span`,{class:`hljs-attr`},`:name`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue7 === '吃饭' ? 'cake-variant' : 'weather-night'"`),s(` />`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`span`),s(`>`)]),s(`{{ outlinedValue7 }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`span`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`prepend-icon`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"prepend-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"github"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`append-icon`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"append-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"github"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`arrow-icon`),s(`=`),i(`span`,{class:`hljs-string`},`"{ focus }"`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"chevron-down"`),s(),i(`span`,{class:`hljs-attr`},`:transition`),s(`=`),i(`span`,{class:`hljs-string`},`"300"`),s(),i(`span`,{class:`hljs-attr`},`:class`),s(`=`),i(`span`,{class:`hljs-string`},`"{ 'arrow-icon-rotate': focus }"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue8"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"多选"`),s(),i(`span`,{class:`hljs-attr`},`multiple`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"打游戏"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"写代码"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue9"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"纸片风格的多选"`),s(),i(`span`,{class:`hljs-attr`},`chip`),s(),i(`span`,{class:`hljs-attr`},`multiple`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"打游戏"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"写代码"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue10"`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"单选值校验"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"v => v === '摸鱼' || '您一定得选择摸鱼'"`),s(`
    >`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"摸鱼"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue11"`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
      `),i(`span`,{class:`hljs-attr`},`multiple`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"多选值校验"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"v => v.length >= 2 || '您至少选择两个选项'"`),s(`
    >`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"打游戏"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"写代码"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue12"`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"使用 Zod 校验单选值"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"z.string().refine(v => v === '摸鱼', '您一定得选择摸鱼')"`),s(`
    >`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"摸鱼"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue13"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"选项式 API"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue14"`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"自定义字段"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"keyOptions"`),s(`
      `),i(`span`,{class:`hljs-attr`},`label-key`),s(`=`),i(`span`,{class:`hljs-string`},`"name"`),s(`
      `),i(`span`,{class:`hljs-attr`},`value-key`),s(`=`),i(`span`,{class:`hljs-string`},`"id"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue15"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"小尺寸"`),s(),i(`span`,{class:`hljs-attr`},`size`),s(`=`),i(`span`,{class:`hljs-string`},`"small"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue16"`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"使用 Zod 校验多选值"`),s(`
      `),i(`span`,{class:`hljs-attr`},`multiple`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"z.array(z.string()).min(2, '您至少选择两个选项')"`),s(`
    >`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"打游戏"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"写代码"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.selected-icon`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`margin-right`),s(`: `),i(`span`,{class:`hljs-number`},`6px`),s(`;
}

`),i(`span`,{class:`hljs-selector-class`},`.prepend-icon`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`margin-right`),s(`: `),i(`span`,{class:`hljs-number`},`6px`),s(`;
}

`),i(`span`,{class:`hljs-selector-class`},`.append-icon`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`margin-left`),s(`: `),i(`span`,{class:`hljs-number`},`6px`),s(`;
}

`),i(`span`,{class:`hljs-selector-class`},`.arrow-icon-rotate`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`transform`),s(`: `),i(`span`,{class:`hljs-built_in`},`rotate`),s(`(`),i(`span`,{class:`hljs-number`},`180deg`),s(`);
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,_,[i(`h3`,v,[o(F,{to:`#tian2chong1wai4guan1`},{default:t(()=>[...l[9]||=[s(`#`,-1)]]),_:1}),l[10]||=s(`填充外观`,-1)]),o(I,null,{default:t(()=>[...l[11]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref, computed } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { z } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'zod'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue2 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue3 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue4 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue5 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue6 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue7 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue8 = ref([])
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue9 = ref([])
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue10 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue11 = ref([])
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue12 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue13 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue14 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue15 = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue16 = ref([])

`),i(`span`,{class:`hljs-keyword`},`const`),s(` options = computed(`),i(`span`,{class:`hljs-function`},`() =>`),s(` [
  { `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'吃饭'`),s(`, `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-number`},`1`),s(` },
  { `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'睡觉'`),s(`, `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-number`},`2`),s(` },
  { `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'打游戏'`),s(`, `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-number`},`3`),s(`, `),i(`span`,{class:`hljs-attr`},`disabled`),s(`: `),i(`span`,{class:`hljs-literal`},`true`),s(` },
])

`),i(`span`,{class:`hljs-keyword`},`const`),s(` keyOptions = computed(`),i(`span`,{class:`hljs-function`},`() =>`),s(` [
  { `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'吃饭'`),s(`, `),i(`span`,{class:`hljs-attr`},`id`),s(`: `),i(`span`,{class:`hljs-number`},`1`),s(` },
  { `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'睡觉'`),s(`, `),i(`span`,{class:`hljs-attr`},`id`),s(`: `),i(`span`,{class:`hljs-number`},`2`),s(` },
  { `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'打游戏'`),s(`, `),i(`span`,{class:`hljs-attr`},`id`),s(`: `),i(`span`,{class:`hljs-number`},`3`),s(`, `),i(`span`,{class:`hljs-attr`},`disabled`),s(`: `),i(`span`,{class:`hljs-literal`},`true`),s(` },
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(),i(`span`,{class:`hljs-attr`},`direction`),s(`=`),i(`span`,{class:`hljs-string`},`"column"`),s(),i(`span`,{class:`hljs-attr`},`size`),s(`=`),i(`span`,{class:`hljs-string`},`"large"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"请选择一个选项"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue2"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"文本关联值"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(),i(`span`,{class:`hljs-attr`},`:value`),s(`=`),i(`span`,{class:`hljs-string`},`"1"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(),i(`span`,{class:`hljs-attr`},`:value`),s(`=`),i(`span`,{class:`hljs-string`},`"2"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"relation"`),s(`>`)]),s(`当前选择的是: {{ filledValue2 }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue3"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"只读"`),s(),i(`span`,{class:`hljs-attr`},`readonly`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue4"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"禁用"`),s(),i(`span`,{class:`hljs-attr`},`disabled`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue5"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"可清除"`),s(),i(`span`,{class:`hljs-attr`},`clearable`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue6"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"使用插槽自定义清除图标"`),s(),i(`span`,{class:`hljs-attr`},`clearable`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`clear-icon`),s(`=`),i(`span`,{class:`hljs-string`},`"{ clear }"`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"clear-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"github"`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"clear"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue7"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"自定义图标"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`default`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(`>`)]),s(`
          `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"selected-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"cake-variant"`),s(` />`)]),s(`
          `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`span`),s(`>`)]),s(`吃饭`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`span`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-option`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(`>`)]),s(`
          `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"selected-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"weather-night"`),s(` />`)]),s(`
          `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`span`),s(`>`)]),s(`睡觉`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`span`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-option`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`selected`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"selected-icon"`),s(),i(`span`,{class:`hljs-attr`},`:name`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue7 === '吃饭' ? 'cake-variant' : 'weather-night'"`),s(` />`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`span`),s(`>`)]),s(`{{ filledValue7 }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`span`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`prepend-icon`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"prepend-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"github"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`append-icon`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"append-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"github"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`arrow-icon`),s(`=`),i(`span`,{class:`hljs-string`},`"{ focus }"`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"chevron-down"`),s(),i(`span`,{class:`hljs-attr`},`:transition`),s(`=`),i(`span`,{class:`hljs-string`},`"300"`),s(),i(`span`,{class:`hljs-attr`},`:class`),s(`=`),i(`span`,{class:`hljs-string`},`"{ 'arrow-icon-rotate': focus }"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue8"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"多选"`),s(),i(`span`,{class:`hljs-attr`},`multiple`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"打游戏"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"写代码"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue9"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"纸片风格的多选"`),s(),i(`span`,{class:`hljs-attr`},`chip`),s(),i(`span`,{class:`hljs-attr`},`multiple`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"打游戏"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"写代码"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue10"`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"单选值校验"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"v => v === '摸鱼' || '您一定得选择摸鱼'"`),s(`
    >`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"摸鱼"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue11"`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(`
      `),i(`span`,{class:`hljs-attr`},`multiple`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"多选值校验"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"v => v.length >= 2 || '您至少选择两个选项'"`),s(`
    >`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"打游戏"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"写代码"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue12"`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"使用 Zod 校验单选值"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"z.string().refine(v => v === '摸鱼', '您一定得选择摸鱼')"`),s(`
    >`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"摸鱼"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue13"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"选项式 API"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue14"`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"自定义字段"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"keyOptions"`),s(`
      `),i(`span`,{class:`hljs-attr`},`label-key`),s(`=`),i(`span`,{class:`hljs-string`},`"name"`),s(`
      `),i(`span`,{class:`hljs-attr`},`value-key`),s(`=`),i(`span`,{class:`hljs-string`},`"id"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue15"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"小尺寸"`),s(),i(`span`,{class:`hljs-attr`},`size`),s(`=`),i(`span`,{class:`hljs-string`},`"small"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue16"`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"使用 Zod 校验多选值"`),s(`
      `),i(`span`,{class:`hljs-attr`},`multiple`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"z.array(z.string()).min(2, '您至少选择两个选项')"`),s(`
    >`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"打游戏"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"写代码"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.selected-icon`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`margin-right`),s(`: `),i(`span`,{class:`hljs-number`},`6px`),s(`;
}

`),i(`span`,{class:`hljs-selector-class`},`.prepend-icon`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`margin-right`),s(`: `),i(`span`,{class:`hljs-number`},`6px`),s(`;
}

`),i(`span`,{class:`hljs-selector-class`},`.append-icon`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`margin-left`),s(`: `),i(`span`,{class:`hljs-number`},`6px`),s(`;
}

`),i(`span`,{class:`hljs-selector-class`},`.arrow-icon-rotate`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`transform`),s(`: `),i(`span`,{class:`hljs-built_in`},`rotate`),s(`(`),i(`span`,{class:`hljs-number`},`180deg`),s(`);
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,y,[i(`h3`,b,[o(F,{to:`#cai4dan1yuan2jiao3`},{default:t(()=>[...l[12]||=[s(`#`,-1)]]),_:1}),l[13]||=s(`菜单圆角`,-1)]),l[15]||=i(`p`,null,[s(`通过 `),i(`code`,null,`menu-radius="large"`),s(` 设置弹出菜单为大圆角。`)],-1),o(I,null,{default:t(()=>[...l[14]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` normalRadiusValue = ref()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` largeRadiusValue = ref()
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(),i(`span`,{class:`hljs-attr`},`direction`),s(`=`),i(`span`,{class:`hljs-string`},`"column"`),s(),i(`span`,{class:`hljs-attr`},`size`),s(`=`),i(`span`,{class:`hljs-string`},`"large"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"normalRadiusValue"`),s(),i(`span`,{class:`hljs-attr`},`menu-radius`),s(`=`),i(`span`,{class:`hljs-string`},`"normal"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"常规圆角"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"largeRadiusValue"`),s(),i(`span`,{class:`hljs-attr`},`menu-radius`),s(`=`),i(`span`,{class:`hljs-string`},`"large"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"大圆角"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),l[32]||=i(`h2`,null,`API`,-1),i(`div`,x,[i(`h3`,S,[o(F,{to:`#shu3xing4`},{default:t(()=>[...l[16]||=[s(`#`,-1)]]),_:1}),l[17]||=s(`属性`,-1)]),l[18]||=c(`<h4>Select Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>绑定的值</td><td><em>any | any[]</em></td><td><code>-</code></td></tr><tr><td><code>size</code></td><td>选择框尺寸，可选值 <code>normal</code> <code>small</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>variant</code></td><td>选择框风格, 可选值为 <code>standard</code> <code>outlined</code> <code>filled</code></td><td><em>string</em></td><td><code>standard</code></td></tr><tr><td><code>placeholder</code></td><td>占位符</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>multiple</code></td><td>是否开启多选</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset-y</code></td><td>下拉菜单的垂直偏移量</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>menu-radius</code> <em><strong>3.20.9</strong></em></td><td>弹出菜单圆角，可选值 <code>normal</code> <code>large</code>，不影响选择框</td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>chip</code></td><td>是否使用纸片风格(仅限多选)</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>line</code></td><td>是否显示分割线</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hint</code></td><td>是否使用占位符作为提示</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>text-color</code></td><td>文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>focus-color</code></td><td>聚焦时的主要颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>blur-color</code></td><td>失焦时的主要颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>是否只读</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>clearable</code></td><td>是否可清除</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>options</code> <em><strong>3.3.4</strong></em></td><td>指定可选项</td><td><em>SelectOption[]</em></td><td><code>[]</code></td></tr><tr><td><code>label-key</code> <em><strong>3.3.4</strong></em></td><td>作为 label 唯一标识的键名</td><td><em>string</em></td><td><code>label</code></td></tr><tr><td><code>value-key</code> <em><strong>3.3.4</strong></em></td><td>作为 value 唯一标识的键名</td><td><em>string</em></td><td><code>value</code></td></tr><tr><td><code>validate-trigger</code></td><td>触发验证的时机，可选值为 <code>onFocus</code> <code>onBlur</code> <code>onChange</code> <code>onClick</code> <code>onClear</code> <code>onClose</code></td><td><em>SelectValidateTrigger[]</em></td><td><code>[&#39;onChange&#39;, &#39;onClear&#39;, &#39;onClose&#39;]</code></td></tr><tr><td><code>rules</code></td><td>验证规则，返回 <code>true</code> 表示验证通过，其它类型的值将转换为文本作为用户提示。自 <code>3.5.0</code> 开始支持 <a href="#/zh-CN/zodValidation">Zod 验证</a></td><td><em>((v: any) =&gt; any) | ZodType | Array&lt;((v: any) =&gt; any) | ZodType&gt;</em></td><td><code>-</code></td></tr><tr><td><code>tabindex</code> <em><strong>3.12.1</strong></em></td><td>与原生 select 的 tabindex 属性一致</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>filterable</code> <em><strong>3.14.0</strong></em></td><td>是否可以过滤</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>filter</code> <em><strong>3.14.0</strong></em></td><td>自定义过滤方法</td><td><em>(pattern: string, option: SelectOption) =&gt; boolean</em></td><td><code>-</code></td></tr></tbody></table><h4>SelectOption</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>label</code></td><td>选项的标签</td><td><em>string | VNode | (option: SelectOption, selected: boolean) =&gt; VNodeChild</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>选项的值</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><em>boolean</em></td><td><code>-</code></td></tr></tbody></table><h4>Option Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>label</code></td><td>选项显示的文本</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>选项绑定的值</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code> <em><strong>3.8.0</strong></em></td><td>是否启用水波效果</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table>`,6)]),i(`div`,C,[i(`h3`,w,[o(F,{to:`#fang1fa3`},{default:t(()=>[...l[19]||=[s(`#`,-1)]]),_:1}),l[20]||=s(`方法`,-1)]),l[21]||=c(`<h4>Select Methods</h4><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>focus</code></td><td>聚焦</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>blur</code></td><td>失焦</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>validate</code></td><td>触发校验</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>清空校验信息</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>清空绑定的值(单选设置为 <code>undefined</code>，多选设置为 <code>[]</code>)和校验信息</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>`,2)]),i(`div`,T,[i(`h3`,E,[o(F,{to:`#shi4jian4`},{default:t(()=>[...l[22]||=[s(`#`,-1)]]),_:1}),l[23]||=s(`事件`,-1)]),l[24]||=c(`<h4>Select Events</h4><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>focus</code></td><td>聚焦时触发</td><td><code>event: Event</code></td></tr><tr><td><code>blur</code></td><td>失焦时触发</td><td><code>event: Event</code></td></tr><tr><td><code>click</code></td><td>点击时触发</td><td><code>event: Event</code></td></tr><tr><td><code>clear</code></td><td>清除时触发</td><td><code>value: any | any[]</code></td></tr><tr><td><code>close</code></td><td>关闭时触发</td><td><code>value: any[]</code></td></tr><tr><td><code>change</code></td><td>更新时触发</td><td><code>value: any | any[]</code></td></tr></tbody></table>`,2)]),i(`div`,D,[i(`h3`,O,[o(F,{to:`#cha1cao2`},{default:t(()=>[...l[25]||=[s(`#`,-1)]]),_:1}),l[26]||=s(`插槽`,-1)]),l[27]||=c(`<h4>Select Slots</h4><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>selected</code></td><td>选择区域的内容</td><td><code>-</code></td></tr><tr><td><code>prepend-icon</code></td><td>前置图标</td><td><code>-</code></td></tr><tr><td><code>clear-icon</code></td><td>清除图标</td><td><code>clear: (e: Event) =&gt; void</code> 清除函数(在使用插槽时, 可用于清除选择框内容)</td></tr><tr><td><code>append-icon</code></td><td>后置图标</td><td><code>-</code></td></tr><tr><td><code>arrow-icon</code></td><td>箭头图标</td><td><code>focus: boolean</code> 是否处于聚焦状态, <code>menu-open: boolean</code> 是否菜单被打开</td></tr><tr><td><code>empty</code> <em><strong>3.14.0</strong></em></td><td>无选项或过滤无结果时展示的内容，可完全定制整个空状态容器；未使用时为带国际化默认文案的默认空状态</td><td><code>-</code></td></tr></tbody></table><h4>Option Slots</h4><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>选项显示的内容</td><td><code>selected: boolean</code> 是否选中</td></tr></tbody></table>`,4)]),i(`div`,k,[i(`h3`,A,[o(F,{to:`#yang4shi4bian4liang4`},{default:t(()=>[...l[28]||=[s(`#`,-1)]]),_:1}),l[29]||=s(`样式变量`,-1)]),l[30]||=c(`<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><h4>Select Variables</h4><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--select-scroller-background</code></td><td><code>var(--color-surface-container-high)</code></td></tr><tr><td><code>--select-scroller-padding</code></td><td><code>6px 0</code></td></tr><tr><td><code>--select-scroller-max-height</code></td><td><code>278px</code></td></tr><tr><td><code>--select-scroller-border-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--select-scroller-large-border-radius</code></td><td><code>8px</code></td></tr><tr><td><code>--select-label-font-size</code></td><td><code>16px</code></td></tr><tr><td><code>--select-chips-margin</code></td><td><code>-5px 0 0 0</code></td></tr><tr><td><code>--select-chips-padding</code></td><td><code>2px 0</code></td></tr><tr><td><code>--select-chip-margin</code></td><td><code>5px 5px 0 0</code></td></tr><tr><td><code>--select-arrow-size</code></td><td><code>20px</code></td></tr><tr><td><code>--select-standard-menu-margin</code></td><td><code>calc(var(--field-decorator-placeholder-size) * 0.75 + 14px) 0 0 0</code></td></tr><tr><td><code>--select-empty-text-color</code></td><td><code>rgba(0, 0, 0, 0.6)</code></td></tr><tr><td><code>--select-empty-height</code></td><td><code>38px</code></td></tr><tr><td><code>--select-empty-font-size</code></td><td><code>14px</code></td></tr></tbody></table><h4>Option Variables</h4><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--option-height</code></td><td><code>38px</code></td></tr><tr><td><code>--option-padding</code></td><td><code>0 12px</code></td></tr><tr><td><code>--option-font-size</code></td><td><code>16px</code></td></tr><tr><td><code>--option-selected-background</code></td><td><code>var(--input-decorator-focus-color)</code></td></tr><tr><td><code>--option-text-color</code></td><td><code>#555</code></td></tr></tbody></table><h4>Variant Variables</h4><p>外观相关的样式变量请参考 <a href="#/zh-CN/input#yang4shi4bian4liang4">Input 组件</a> 的样式变量</p>`,7)])])}var M=e(l,[[`render`,j]]);export{M as default};