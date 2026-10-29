import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`jie4shao4`},p={class:`card`},m={id:`biao3dan1shi4li4`},h={class:`card`},g={id:`biao3dan1shi4jian4`},_={class:`card`},v={id:`zi4ding4yi4biao3dan1zu3jian4`},y={class:`card`},b={id:`shu3xing4`},x={class:`card`},S={id:`fang1fa3`},C={class:`card`},w={id:`shi4jian4`},T={class:`card`},E={id:`cha1cao2`},D={class:`card`},O={id:`yang4shi4bian4liang4`};function k(e,l,k,A,j,M){let N=n(`router-link`),P=n(`var-site-code-example`);return r(),a(`div`,u,[l[29]||=i(`h1`,null,`表单`,-1),i(`div`,d,[i(`h3`,f,[o(N,{to:`#jie4shao4`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`介绍`,-1)]),l[2]||=i(`p`,null,`提供了对所有表单组件进行控制的能力。`,-1)]),i(`div`,p,[i(`h3`,m,[o(N,{to:`#biao3dan1shi4li4`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`表单示例`,-1)]),o(P,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { computed, reactive, ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` formData = reactive({
  `),i(`span`,{class:`hljs-attr`},`username`),s(`: `),i(`span`,{class:`hljs-string`},`''`),s(`,
  `),i(`span`,{class:`hljs-attr`},`password`),s(`: `),i(`span`,{class:`hljs-string`},`''`),s(`,
  `),i(`span`,{class:`hljs-attr`},`otp`),s(`: `),i(`span`,{class:`hljs-string`},`''`),s(`,
  `),i(`span`,{class:`hljs-attr`},`email`),s(`: `),i(`span`,{class:`hljs-string`},`''`),s(`,
  `),i(`span`,{class:`hljs-attr`},`date`),s(`: `),i(`span`,{class:`hljs-string`},`''`),s(`,
  `),i(`span`,{class:`hljs-attr`},`datetimeRange`),s(`: [],
  `),i(`span`,{class:`hljs-attr`},`department`),s(`: `),i(`span`,{class:`hljs-string`},`''`),s(`,
  `),i(`span`,{class:`hljs-attr`},`period`),s(`: `),i(`span`,{class:`hljs-literal`},`undefined`),s(`,
  `),i(`span`,{class:`hljs-attr`},`gender`),s(`: `),i(`span`,{class:`hljs-literal`},`undefined`),s(`,
  `),i(`span`,{class:`hljs-attr`},`license`),s(`: `),i(`span`,{class:`hljs-literal`},`false`),s(`,
  `),i(`span`,{class:`hljs-attr`},`range`),s(`: `),i(`span`,{class:`hljs-number`},`0`),s(`,
  `),i(`span`,{class:`hljs-attr`},`count`),s(`: `),i(`span`,{class:`hljs-number`},`0`),s(`,
  `),i(`span`,{class:`hljs-attr`},`group`),s(`: [],
  `),i(`span`,{class:`hljs-attr`},`score`),s(`: `),i(`span`,{class:`hljs-number`},`0`),s(`,
  `),i(`span`,{class:`hljs-attr`},`like`),s(`: [],
  `),i(`span`,{class:`hljs-attr`},`files`),s(`: [],
  `),i(`span`,{class:`hljs-attr`},`custom`),s(`: `),i(`span`,{class:`hljs-literal`},`false`),s(`,
})
`),i(`span`,{class:`hljs-keyword`},`const`),s(` form = ref(`),i(`span`,{class:`hljs-literal`},`null`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` disabled = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` readonly = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)

`),i(`span`,{class:`hljs-keyword`},`const`),s(` suggestions = computed(`),i(`span`,{class:`hljs-function`},`() =>`),s(`
  [`),i(`span`,{class:`hljs-string`},`'@qq.com'`),s(`, `),i(`span`,{class:`hljs-string`},`'@163.com'`),s(`, `),i(`span`,{class:`hljs-string`},`'@gmail.com'`),s(`].map(`),i(`span`,{class:`hljs-function`},[s(`(`),i(`span`,{class:`hljs-params`},`suffix`),s(`) =>`)]),s(` {
    `),i(`span`,{class:`hljs-keyword`},`const`),s(` [prefix] = formData.email.split(`),i(`span`,{class:`hljs-string`},`'@'`),s(`)
    `),i(`span`,{class:`hljs-keyword`},`return`),s(` {
      `),i(`span`,{class:`hljs-attr`},`label`),s(`: prefix + suffix,
      `),i(`span`,{class:`hljs-attr`},`value`),s(`: prefix + suffix,
    }
  })
)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-form`),s(` 
    `),i(`span`,{class:`hljs-attr`},`ref`),s(`=`),i(`span`,{class:`hljs-string`},`"form"`),s(` 
    `),i(`span`,{class:`hljs-attr`},`:disabled`),s(`=`),i(`span`,{class:`hljs-string`},`"disabled"`),s(`
    `),i(`span`,{class:`hljs-attr`},`:readonly`),s(`=`),i(`span`,{class:`hljs-string`},`"readonly"`),s(` 
    `),i(`span`,{class:`hljs-attr`},`scroll-to-error`),s(`=`),i(`span`,{class:`hljs-string`},`"start"`),s(`
    `),i(`span`,{class:`hljs-attr`},`scroll-to-error-offset-y`),s(`=`),i(`span`,{class:`hljs-string`},`"14.4vmin"`),s(`
  >`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(),i(`span`,{class:`hljs-attr`},`direction`),s(`=`),i(`span`,{class:`hljs-string`},`"column"`),s(),i(`span`,{class:`hljs-attr`},`:size`),s(`=`),i(`span`,{class:`hljs-string`},`"['4vmin', 0]"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-input`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.username"`),s(`
        `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"请输入用户名"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => !!v || '用户名不能为空']"`),s(`
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-input`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.password"`),s(`
        `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
        `),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"password"`),s(`
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"请输入密码"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => !!v || '密码不能为空', (v) => v.length >= 8 || '密码长度不能低于8位']"`),s(`
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-auto-complete`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.email"`),s(`
        `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"请输入邮箱"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => !!v || '邮箱不能为空']"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"suggestions"`),s(`
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.date"`),s(`
        `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"请选择日期"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => !!v || '必须选择一个日期']"`),s(`
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.datetimeRange"`),s(`
        `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
        `),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"datetime"`),s(`
        `),i(`span`,{class:`hljs-attr`},`range`),s(`
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"请选择日期时间范围"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => v.length === 2 || '必须选择一个日期时间范围']"`),s(`
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.department"`),s(`
        `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"请选择部门"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => !!v || '必须选一个部门']"`),s(`
      >`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭部"`),s(`  />`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉部"`),s(`  />`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"打游戏部"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-select`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.group"`),s(`
        `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
        `),i(`span`,{class:`hljs-attr`},`multiple`),s(`
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"请选择组织"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => v.length >= 1 || '至少选择一个组织']"`),s(`
      >`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"吃饭组"`),s(`  />`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"睡觉组"`),s(`  />`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-option`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`=`),i(`span`,{class:`hljs-string`},`"打游戏组"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-select`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-segmented-buttons`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.period"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => !!v || '必须选择一个周期']"`),s(`
      >`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-segmented-button`),s(),i(`span`,{class:`hljs-attr`},`checked-value`),s(`=`),i(`span`,{class:`hljs-string`},`"day"`),s(`>`)]),s(`天`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-segmented-button`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-segmented-button`),s(),i(`span`,{class:`hljs-attr`},`checked-value`),s(`=`),i(`span`,{class:`hljs-string`},`"week"`),s(`>`)]),s(`周`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-segmented-button`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-segmented-button`),s(),i(`span`,{class:`hljs-attr`},`checked-value`),s(`=`),i(`span`,{class:`hljs-string`},`"month"`),s(`>`)]),s(`月`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-segmented-button`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-segmented-buttons`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-radio-group`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.gender"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => !!v || '必须选择一个性别']"`),s(`
      >`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-radio`),s(),i(`span`,{class:`hljs-attr`},`:checked-value`),s(`=`),i(`span`,{class:`hljs-string`},`"1"`),s(`>`)]),s(`男`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-radio`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-radio`),s(),i(`span`,{class:`hljs-attr`},`:checked-value`),s(`=`),i(`span`,{class:`hljs-string`},`"2"`),s(`>`)]),s(`女`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-radio`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-radio-group`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-checkbox-group`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.like"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => v.length > 0 || '至少选择一个爱好']"`),s(`
      >`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-checkbox`),s(),i(`span`,{class:`hljs-attr`},`:checked-value`),s(`=`),i(`span`,{class:`hljs-string`},`"1"`),s(`>`)]),s(`吃饭`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-checkbox`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-checkbox`),s(),i(`span`,{class:`hljs-attr`},`:checked-value`),s(`=`),i(`span`,{class:`hljs-string`},`"2"`),s(`>`)]),s(`睡觉`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-checkbox`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-checkbox`),s(),i(`span`,{class:`hljs-attr`},`:checked-value`),s(`=`),i(`span`,{class:`hljs-string`},`"3"`),s(`>`)]),s(`打游戏`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-checkbox`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-checkbox-group`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-rate`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.score"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => v >= 3 || '必须大于2']"`),s(`
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-switch`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.license"`),s(`
        `),i(`span`,{class:`hljs-attr`},`variant`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => !!v || '您必须开启']"`),s(`
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-counter`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.count"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => v > 10 || '必须大于10']"`),s(`
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-slider`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.range"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => v > 10 || '必须大于10']"`),s(`
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-otp-input`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.otp"`),s(`
        `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[v => !!v || '验证码不能为空', (v) => v.length === 6 || '验证码长度必须为 6']"`),s(`
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-uploader`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.files"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => v.length >= 1 || '至少上传一张图片']"`),s(`
      />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`

    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-custom-form-component`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.custom"`),s(`
      `),i(`span`,{class:`hljs-attr`},`extra-message`),s(`=`),i(`span`,{class:`hljs-string`},`"附加信息"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => !!v || '必须是对勾']"`),s(`
    >`)]),s(`
      点我切换
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-custom-form-component`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-form`),s(`>`)]),s(`

  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(),i(`span`,{class:`hljs-attr`},`direction`),s(`=`),i(`span`,{class:`hljs-string`},`"column"`),s(),i(`span`,{class:`hljs-attr`},`:size`),s(`=`),i(`span`,{class:`hljs-string`},`"['4vmin', 0]"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`block`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"danger"`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"form.reset()"`),s(`>`)]),s(`
      清空表单
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`block`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"form.resetValidation()"`),s(`>`)]),s(`
      清空验证
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`block`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"success"`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"form.validate()"`),s(`>`)]),s(`
      触发验证
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`block`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"info"`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"disabled = !disabled"`),s(`>`)]),s(`
      表单禁用
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`block`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"readonly = !readonly"`),s(`>`)]),s(`
      表单只读
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(N,{to:`#biao3dan1shi4jian4`},{default:t(()=>[...l[6]||=[s(`#`,-1)]]),_:1}),l[7]||=s(`表单事件`,-1)]),l[9]||=i(`p`,null,`您也可以使用表单事件去处理表单行为`,-1),o(P,null,{default:t(()=>[...l[8]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { reactive } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Snackbar } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` formData = reactive({
  `),i(`span`,{class:`hljs-attr`},`username`),s(`: `),i(`span`,{class:`hljs-string`},`''`),s(`,
  `),i(`span`,{class:`hljs-attr`},`password`),s(`: `),i(`span`,{class:`hljs-string`},`''`),s(`,
})

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`handleSubmit`),s(`(`),i(`span`,{class:`hljs-params`},`valid`),s(`) `)]),s(`{
  Snackbar(`),i(`span`,{class:`hljs-string`},[s("`onSubmit: "),i(`span`,{class:`hljs-subst`},"${valid}"),s("`")]),s(`)
}

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`handleReset`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  Snackbar(`),i(`span`,{class:`hljs-string`},`'onReset'`),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-form`),s(` @`),i(`span`,{class:`hljs-attr`},`submit`),s(`=`),i(`span`,{class:`hljs-string`},`"handleSubmit"`),s(` @`),i(`span`,{class:`hljs-attr`},`reset`),s(`=`),i(`span`,{class:`hljs-string`},`"handleReset"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(),i(`span`,{class:`hljs-attr`},`direction`),s(`=`),i(`span`,{class:`hljs-string`},`"column"`),s(),i(`span`,{class:`hljs-attr`},`:size`),s(`=`),i(`span`,{class:`hljs-string`},`"[14, 0]"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-input`),s(`
        `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"请输入用户名"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"v => !!v || '用户名不能为空'"`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.username"`),s(`
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-input`),s(`
        `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
        `),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"password"`),s(`
        `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"请输入密码"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[v => !!v || '密码不能为空', (v) => v.length <= 8 || '密码长度不能低于8位']"`),s(`
        `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"formData.password"`),s(`
      />`)]),s(`

      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`native-type`),s(`=`),i(`span`,{class:`hljs-string`},`"submit"`),s(`>`)]),s(`
          提交
        `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`native-type`),s(`=`),i(`span`,{class:`hljs-string`},`"reset"`),s(`>`)]),s(`
          清空
        `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-form`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,_,[i(`h3`,v,[o(N,{to:`#zi4ding4yi4biao3dan1zu3jian4`},{default:t(()=>[...l[10]||=[s(`#`,-1)]]),_:1}),l[11]||=s(`自定义表单组件`,-1)]),l[13]||=i(`p`,null,`如果希望自定义组件并接入表单组件的能力，案例如下。`,-1),o(P,{"playground-ignore":``},{default:t(()=>[...l[12]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Form } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { nextTick } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` props = defineProps({
  `),i(`span`,{class:`hljs-attr`},`modelValue`),s(`: `),i(`span`,{class:`hljs-built_in`},`Boolean`),s(`,
  `),i(`span`,{class:`hljs-attr`},`disabled`),s(`: `),i(`span`,{class:`hljs-built_in`},`Boolean`),s(`,
  `),i(`span`,{class:`hljs-attr`},`readonly`),s(`: `),i(`span`,{class:`hljs-built_in`},`Boolean`),s(`,
  `),i(`span`,{class:`hljs-attr`},`rules`),s(`: {
    `),i(`span`,{class:`hljs-attr`},`type`),s(`: `),i(`span`,{class:`hljs-built_in`},`Array`),s(`
  },
  `),i(`span`,{class:`hljs-attr`},`validateTrigger`),s(`: {
    `),i(`span`,{class:`hljs-attr`},`type`),s(`: `),i(`span`,{class:`hljs-built_in`},`Array`),s(`,
    `),i(`span`,{class:`hljs-attr`},`default`),s(`: `),i(`span`,{class:`hljs-function`},`() =>`),s(` [`),i(`span`,{class:`hljs-string`},`'onToggle'`),s(`]
  },
  `),i(`span`,{class:`hljs-attr`},`extraMessage`),s(`: {
    `),i(`span`,{class:`hljs-attr`},`type`),s(`: `),i(`span`,{class:`hljs-built_in`},`String`),s(`
  }
})

`),i(`span`,{class:`hljs-keyword`},`const`),s(` emit = defineEmits([`),i(`span`,{class:`hljs-string`},`'update:modelValue'`),s(`])

`),i(`span`,{class:`hljs-keyword`},`const`),s(` { useForm, useValidation } = Form
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { errorMessage, `),i(`span`,{class:`hljs-attr`},`validateWithTrigger`),s(`: _validateWithTrigger, `),i(`span`,{class:`hljs-attr`},`validate`),s(`: _validate, resetValidation } = useValidation()
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { bindForm, form } = useForm()

`),i(`span`,{class:`hljs-keyword`},`const`),s(` validate = `),i(`span`,{class:`hljs-function`},`() =>`),s(` _validate(props.rules, props.modelValue)

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`reset`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  emit(`),i(`span`,{class:`hljs-string`},`'update:modelValue'`),s(`, `),i(`span`,{class:`hljs-literal`},`false`),s(`)
  resetValidation()
}

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`validateWithTrigger`),s(`(`),i(`span`,{class:`hljs-params`},`trigger`),s(`) `)]),s(`{
  nextTick(`),i(`span`,{class:`hljs-function`},`() =>`),s(` {
    `),i(`span`,{class:`hljs-keyword`},`const`),s(` { validateTrigger, rules, modelValue } = props
    _validateWithTrigger(validateTrigger, trigger, rules, modelValue)
  })
}

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`handleClick`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  `),i(`span`,{class:`hljs-keyword`},`if`),s(` (
    props.readonly ||
    props.disabled || 
    form?.readonly.value || 
    form?.disabled.value
  ) {
    `),i(`span`,{class:`hljs-keyword`},`return`),s(`
  }

  emit(`),i(`span`,{class:`hljs-string`},`'update:modelValue'`),s(`, !props.modelValue)
  validateWithTrigger(`),i(`span`,{class:`hljs-string`},`'onToggle'`),s(`)
}

`),i(`span`,{class:`hljs-keyword`},`const`),s(` apis = {
  reset,
  validate,
  resetValidation
}

defineExpose(apis)
bindForm?.(apis)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(`
    `),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"var-custom-form-component"`),s(`
    `),i(`span`,{class:`hljs-attr`},`:class`),s(`=`),i(`span`,{class:`hljs-string`},`"{
      'var-custom-form-component--disabled': disabled || form?.disabled.value,
      'var-custom-form-component--error': errorMessage,
    }"`),s(`
  >`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"var-custom-form-component__container"`),s(`  @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"handleClick"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(`
        `),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"var-custom-form-component__icon"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:name`),s(`=`),i(`span`,{class:`hljs-string`},`"modelValue ? 'checkbox-marked-circle' : 'close-circle'"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:transition`),s(`=`),i(`span`,{class:`hljs-string`},`"250"`),s(`
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`slot`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-form-details`),s(),i(`span`,{class:`hljs-attr`},`:error-message`),s(`=`),i(`span`,{class:`hljs-string`},`"errorMessage"`),s(),i(`span`,{class:`hljs-attr`},`:extra-message`),s(`=`),i(`span`,{class:`hljs-string`},`"extraMessage"`),s(` />`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.var-custom-form-component`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`cursor`),s(`: pointer;
}

`),i(`span`,{class:`hljs-selector-class`},`.var-custom-form-component__container`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`display`),s(`: flex;
  `),i(`span`,{class:`hljs-attribute`},`align-items`),s(`: center;
}

`),i(`span`,{class:`hljs-selector-class`},`.var-custom-form-component__icon`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`margin-right`),s(`: `),i(`span`,{class:`hljs-number`},`6px`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`font-size`),s(`: `),i(`span`,{class:`hljs-number`},`24px`),s(`;
}
  
`),i(`span`,{class:`hljs-selector-class`},`.var-custom-form-component--disabled`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`color`),s(`: `),i(`span`,{class:`hljs-built_in`},`var`),s(`(--color-text-disabled);
  `),i(`span`,{class:`hljs-attribute`},`cursor`),s(`: not-allowed;
}
  
`),i(`span`,{class:`hljs-selector-class`},`.var-custom-form-component--error`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`color`),s(`: `),i(`span`,{class:`hljs-built_in`},`var`),s(`(--color-danger);
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),l[30]||=i(`h2`,null,`API`,-1),i(`div`,y,[i(`h3`,b,[o(N,{to:`#shu3xing4`},{default:t(()=>[...l[14]||=[s(`#`,-1)]]),_:1}),l[15]||=s(`属性`,-1)]),l[16]||=c(`<h4>Form Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>readonly</code></td><td>是否只读</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>scroll-to-error</code></td><td>是否在校验不通过时滚动到不通过的表单项，可选值为 <code>start</code> <code>end</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>scroll-to-error-offset-y</code></td><td>滚动到校验不通过的表单项的位置偏移量</td><td><em>number | string</em></td><td><code>0</code></td></tr></tbody></table><h4>FormDetails Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>error-message</code></td><td>错误信息</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>extra-message</code></td><td>附加信息</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table>`,4)]),i(`div`,x,[i(`h3`,S,[o(N,{to:`#fang1fa3`},{default:t(()=>[...l[17]||=[s(`#`,-1)]]),_:1}),l[18]||=s(`方法`,-1)]),l[19]||=c(`<h4>Form Methods</h4><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>validate</code></td><td>触发所有表单组件的校验</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>清空所有表单组件的校验信息</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>清空所有表单组件绑定的值和校验信息</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>`,2)]),i(`div`,C,[i(`h3`,w,[o(N,{to:`#shi4jian4`},{default:t(()=>[...l[20]||=[s(`#`,-1)]]),_:1}),l[21]||=s(`事件`,-1)]),l[22]||=c(`<h4>Form Events</h4><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>submit</code></td><td>表单提交时触发</td><td><code>valid: boolean</code> 是否通过表单验证</td></tr><tr><td><code>reset</code></td><td>表单清空时触发</td><td><code>-</code></td></tr></tbody></table>`,2)]),i(`div`,T,[i(`h3`,E,[o(N,{to:`#cha1cao2`},{default:t(()=>[...l[23]||=[s(`#`,-1)]]),_:1}),l[24]||=s(`插槽`,-1)]),l[25]||=c(`<h4>Form Slots</h4><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>表单内容</td><td><code>-</code></td></tr></tbody></table>`,2)]),i(`div`,D,[i(`h3`,O,[o(N,{to:`#yang4shi4bian4liang4`},{default:t(()=>[...l[26]||=[s(`#`,-1)]]),_:1}),l[27]||=s(`样式变量`,-1)]),l[28]||=c(`<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><h4>FormDetails Variables</h4><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--form-details-error-message-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--form-details-extra-message-color</code></td><td><code>#888</code></td></tr><tr><td><code>--form-details-margin-top</code></td><td><code>6px</code></td></tr><tr><td><code>--form-details-font-size</code></td><td><code>12px</code></td></tr><tr><td><code>--form-details-message-margin-right</code></td><td><code>4px</code></td></tr></tbody></table>`,3)])])}var A=e(l,[[`render`,k]]);export{A as default};