import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as ee,c as r,d as te,g as i,h as a,m as o}from"./runtime-core.esm-bundler-DUghkl6b.js";var s={components:{}},c={class:`varlet-site-doc`},l={class:`card`},u={id:`Intro`},d={class:`card`},f={id:`BasicUsage`},p={class:`card`},m={id:`Multi-Line`},h={class:`card`},g={id:`BottomDisplay`},_={class:`card`},v={id:`DisplayDuration`},y={class:`card`},b={id:`TimeoutProgress`},x={class:`card`},S={id:`CustomIcon`},C={class:`card`},w={id:`ForbidClick`},T={class:`card`},E={id:`BasicUsage`},D={class:`card`},O={id:`DisplayDuration`},k={class:`card`},A={id:`TimeoutProgress`},j={class:`card`},ne={id:`BottomDisplay`},M={class:`card`},N={id:`Custom`},P={class:`card`},F={id:`SnackbarType`},I={class:`card`},L={id:`Multiple`},R={class:`card`},z={id:`Props`},B={class:`card`},V={id:`Events`},H={class:`card`},U={id:`Slots`},W={class:`card`},G={id:`Methods`},K={class:`card`},q={id:`SnackbarOptions`},J={class:`card`},Y={id:`StyleVariables`};function X(e,s,X,Z,re,ie){let Q=n(`router-link`),$=n(`var-site-code-example`);return ee(),te(`div`,c,[s[71]||=r(`h1`,null,`Snackbar`,-1),r(`div`,l,[r(`h3`,u,[i(Q,{to:`#Intro`},{default:t(()=>[...s[0]||=[a(`#`,-1)]]),_:1}),s[1]||=a(`Intro`,-1)]),s[2]||=r(`p`,null,`Used to display a quick message to a user.`,-1)]),s[72]||=r(`h2`,null,`Component Call`,-1),r(`div`,d,[r(`h3`,f,[i(Q,{to:`#BasicUsage`},{default:t(()=>[...s[3]||=[a(`#`,-1)]]),_:1}),s[4]||=a(`Basic Usage`,-1)]),i($,null,{default:t(()=>[...s[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` show = ref(`),r(`span`,{class:`hljs-literal`},`false`),a(`)
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"primary"`),a(),r(`span`,{class:`hljs-attr`},`block`),a(` @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"show = !show"`),a(`>`)]),a(`Basic Usage`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-snackbar`),a(),r(`span`,{class:`hljs-attr`},`v-model:show`),a(`=`),r(`span`,{class:`hljs-string`},`"show"`),a(`>`)]),a(` Hello, I'm a snackbar `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-snackbar`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,p,[r(`h3`,m,[i(Q,{to:`#Multi-Line`},{default:t(()=>[...s[6]||=[a(`#`,-1)]]),_:1}),s[7]||=a(`Multi-Line`,-1)]),s[9]||=r(`p`,null,[a(`Use `),r(`code`,null,`vertical`),a(` prop to change arrangement of `),r(`code`,null,`snackbar`),a(`. Use `),r(`code`,null,`Custom slot`),a(` create action of right.`)],-1),i($,null,{default:t(()=>[...s[8]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` show = ref(`),r(`span`,{class:`hljs-literal`},`false`),a(`)
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-snackbar`),a(),r(`span`,{class:`hljs-attr`},`v-model:show`),a(`=`),r(`span`,{class:`hljs-string`},`"show"`),a(),r(`span`,{class:`hljs-attr`},`:vertical`),a(`=`),r(`span`,{class:`hljs-string`},`"true"`),a(`>`)]),a(`
    Hello, I'm a snackbar
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(` #`),r(`span`,{class:`hljs-attr`},`action`),a(`>`)]),a(`
      `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"primary"`),a(),r(`span`,{class:`hljs-attr`},`:elevation`),a(`=`),r(`span`,{class:`hljs-string`},`"false"`),a(),r(`span`,{class:`hljs-attr`},`size`),a(`=`),r(`span`,{class:`hljs-string`},`"small"`),a(` @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"show = !show"`),a(`>`)]),a(`Close`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-snackbar`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"primary"`),a(),r(`span`,{class:`hljs-attr`},`block`),a(` @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"show = !show"`),a(`>`)]),a(`Multi-Line`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[i(Q,{to:`#BottomDisplay`},{default:t(()=>[...s[10]||=[a(`#`,-1)]]),_:1}),s[11]||=a(`Bottom Display`,-1)]),s[13]||=r(`p`,null,[a(`Use `),r(`code`,null,`position`),a(` prop to change position of `),r(`code`,null,`snackbar`),a(`.`)],-1),i($,null,{default:t(()=>[...s[12]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` show = ref(`),r(`span`,{class:`hljs-literal`},`false`),a(`)
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-snackbar`),a(),r(`span`,{class:`hljs-attr`},`v-model:show`),a(`=`),r(`span`,{class:`hljs-string`},`"show"`),a(),r(`span`,{class:`hljs-attr`},`position`),a(`=`),r(`span`,{class:`hljs-string`},`"bottom"`),a(`>`)]),a(`
    Hello, I'm a snackbar
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(` #`),r(`span`,{class:`hljs-attr`},`action`),a(`>`)]),a(`
      `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"primary"`),a(),r(`span`,{class:`hljs-attr`},`:elevation`),a(`=`),r(`span`,{class:`hljs-string`},`"false"`),a(),r(`span`,{class:`hljs-attr`},`size`),a(`=`),r(`span`,{class:`hljs-string`},`"small"`),a(` @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"show = false"`),a(`>`)]),a(`Close`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-snackbar`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"primary"`),a(),r(`span`,{class:`hljs-attr`},`block`),a(` @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"show = !show"`),a(`>`)]),a(`Bottom Display`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,_,[r(`h3`,v,[i(Q,{to:`#DisplayDuration`},{default:t(()=>[...s[14]||=[a(`#`,-1)]]),_:1}),s[15]||=a(`Display Duration`,-1)]),s[17]||=r(`p`,null,[a(`Use `),r(`code`,null,`duration`),a(` prop to change display duration of `),r(`code`,null,`snackbar`),a(`.`)],-1),i($,null,{default:t(()=>[...s[16]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` show = ref(`),r(`span`,{class:`hljs-literal`},`false`),a(`)
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-snackbar`),a(),r(`span`,{class:`hljs-attr`},`v-model:show`),a(`=`),r(`span`,{class:`hljs-string`},`"show"`),a(),r(`span`,{class:`hljs-attr`},`:duration`),a(`=`),r(`span`,{class:`hljs-string`},`"10000"`),a(`>`)]),a(`
    Hello, I'm a snackbar
  `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-snackbar`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"primary"`),a(),r(`span`,{class:`hljs-attr`},`block`),a(` @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"show = !show"`),a(`>`)]),a(`
    Display Duration
  `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,y,[r(`h3`,b,[i(Q,{to:`#TimeoutProgress`},{default:t(()=>[...s[18]||=[a(`#`,-1)]]),_:1}),s[19]||=a(`Timeout Progress`,-1)]),s[21]||=r(`p`,null,[a(`Set `),r(`code`,null,`progress`),a(` to display the countdown before automatic dismissal. The progress bar is not shown for the `),r(`code`,null,`loading`),a(` type.`)],-1),i($,null,{default:t(()=>[...s[20]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` show = ref(`),r(`span`,{class:`hljs-literal`},`false`),a(`)
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-snackbar`),a(),r(`span`,{class:`hljs-attr`},`v-model:show`),a(`=`),r(`span`,{class:`hljs-string`},`"show"`),a(),r(`span`,{class:`hljs-attr`},`:duration`),a(`=`),r(`span`,{class:`hljs-string`},`"4000"`),a(),r(`span`,{class:`hljs-attr`},`progress`),a(`>`)]),a(`Hello, I'm a snackbar`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-snackbar`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"primary"`),a(),r(`span`,{class:`hljs-attr`},`block`),a(` @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"show = !show"`),a(`>`)]),a(`Dismissal Countdown`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,x,[r(`h3`,S,[i(Q,{to:`#CustomIcon`},{default:t(()=>[...s[22]||=[a(`#`,-1)]]),_:1}),s[23]||=a(`Custom Icon`,-1)]),s[25]||=r(`p`,null,[a(`Use `),r(`code`,null,`icon`),a(` slot realization custom icons.`)],-1),i($,null,{default:t(()=>[...s[24]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` show = ref(`),r(`span`,{class:`hljs-literal`},`false`),a(`)
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-snackbar`),a(),r(`span`,{class:`hljs-attr`},`v-model:show`),a(`=`),r(`span`,{class:`hljs-string`},`"show"`),a(`>`)]),a(`
    Hello, I'm a snackbar
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(` #`),r(`span`,{class:`hljs-attr`},`icon`),a(`>`)]),a(`
      `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-icon`),a(),r(`span`,{class:`hljs-attr`},`name`),a(`=`),r(`span`,{class:`hljs-string`},`"heart-outline"`),a(` />`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-snackbar`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"primary"`),a(),r(`span`,{class:`hljs-attr`},`block`),a(` @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"show = !show"`),a(`>`)]),a(`
    Custom Icon
  `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,C,[r(`h3`,w,[i(Q,{to:`#ForbidClick`},{default:t(()=>[...s[26]||=[a(`#`,-1)]]),_:1}),s[27]||=a(`Forbid Click`,-1)]),s[29]||=r(`p`,null,[a(`Use `),r(`code`,null,`forbid-click`),a(` prop to control whether penetrating clicks are forbidden.`)],-1),i($,null,{default:t(()=>[...s[28]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` show = ref(`),r(`span`,{class:`hljs-literal`},`false`),a(`)
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-snackbar`),a(),r(`span`,{class:`hljs-attr`},`v-model:show`),a(`=`),r(`span`,{class:`hljs-string`},`"show"`),a(),r(`span`,{class:`hljs-attr`},`:forbid-click`),a(`=`),r(`span`,{class:`hljs-string`},`"true"`),a(`>`)]),a(`
    Hello, I'm a snackbar
  `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-snackbar`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"primary"`),a(),r(`span`,{class:`hljs-attr`},`block`),a(` @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"show = true"`),a(`>`)]),a(`
    Display Duration
  `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),s[73]||=r(`h2`,null,`Function Call`,-1),r(`div`,T,[r(`h3`,E,[i(Q,{to:`#BasicUsage`},{default:t(()=>[...s[30]||=[a(`#`,-1)]]),_:1}),s[31]||=a(`Basic Usage`,-1)]),i($,null,{default:t(()=>[...s[32]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),a(`
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"warning"`),a(),r(`span`,{class:`hljs-attr`},`block`),a(` @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"Snackbar('Hello, I\\'m a snackbar')"`),a(`>`)]),a(`Basic Usage`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,D,[r(`h3`,O,[i(Q,{to:`#DisplayDuration`},{default:t(()=>[...s[33]||=[a(`#`,-1)]]),_:1}),s[34]||=a(`Display Duration`,-1)]),i($,null,{default:t(()=>[...s[35]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),a(`

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),a(),r(`span`,{class:`hljs-title`},`createSnackbar`),a(`(`),r(`span`,{class:`hljs-params`}),a(`) `)]),a(`{
  Snackbar({
    `),r(`span`,{class:`hljs-attr`},`content`),a(`: `),r(`span`,{class:`hljs-string`},`"Hello, I'm a snackbar"`),a(`,
    `),r(`span`,{class:`hljs-attr`},`duration`),a(`: `),r(`span`,{class:`hljs-number`},`1000`),a(`
  })
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"warning"`),a(),r(`span`,{class:`hljs-attr`},`block`),a(` @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"createSnackbar"`),a(`>`)]),a(`Display Duration`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,k,[r(`h3`,A,[i(Q,{to:`#TimeoutProgress`},{default:t(()=>[...s[36]||=[a(`#`,-1)]]),_:1}),s[37]||=a(`Timeout Progress`,-1)]),s[39]||=r(`p`,null,[a(`Function calls also support the `),r(`code`,null,`progress`),a(` option.`)],-1),i($,null,{default:t(()=>[...s[38]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),a(`

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),a(),r(`span`,{class:`hljs-title`},`createSnackbar`),a(`(`),r(`span`,{class:`hljs-params`}),a(`) `)]),a(`{
  Snackbar({
    `),r(`span`,{class:`hljs-attr`},`content`),a(`: `),r(`span`,{class:`hljs-string`},`"Hello, I'm a snackbar"`),a(`,
    `),r(`span`,{class:`hljs-attr`},`duration`),a(`: `),r(`span`,{class:`hljs-number`},`4000`),a(`,
    `),r(`span`,{class:`hljs-attr`},`progress`),a(`: `),r(`span`,{class:`hljs-literal`},`true`),a(`,
  })
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"warning"`),a(),r(`span`,{class:`hljs-attr`},`block`),a(` @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"createSnackbar"`),a(`>`)]),a(`Dismissal Countdown`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,j,[r(`h3`,ne,[i(Q,{to:`#BottomDisplay`},{default:t(()=>[...s[40]||=[a(`#`,-1)]]),_:1}),s[41]||=a(`Bottom Display`,-1)]),i($,null,{default:t(()=>[...s[42]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),a(`

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),a(),r(`span`,{class:`hljs-title`},`createSnackbar`),a(`(`),r(`span`,{class:`hljs-params`}),a(`) `)]),a(`{
  Snackbar({
    `),r(`span`,{class:`hljs-attr`},`content`),a(`: `),r(`span`,{class:`hljs-string`},`"Hello, I'm a snackbar"`),a(`,
    `),r(`span`,{class:`hljs-attr`},`position`),a(`: `),r(`span`,{class:`hljs-string`},`'bottom'`),a(`
  })
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"warning"`),a(),r(`span`,{class:`hljs-attr`},`block`),a(` @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"createSnackbar"`),a(`>`)]),a(`Bottom Display`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,M,[r(`h3`,N,[i(Q,{to:`#Custom`},{default:t(()=>[...s[43]||=[a(`#`,-1)]]),_:1}),s[44]||=a(`Custom`,-1)]),i($,null,{default:t(()=>[...s[45]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { h } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { Snackbar, Icon, Button } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),a(`

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),a(),r(`span`,{class:`hljs-title`},`createSnackbar`),a(`(`),r(`span`,{class:`hljs-params`}),a(`) `)]),a(`{
  `),r(`span`,{class:`hljs-keyword`},`const`),a(` customSnackbar = Snackbar({
  `),r(`span`,{class:`hljs-attr`},`content`),a(`: `),r(`span`,{class:`hljs-string`},`'Hello, Varlet'`),a(`,
  `),r(`span`,{class:`hljs-attr`},`icon`),a(`: `),r(`span`,{class:`hljs-function`},`() =>`),a(`
    h(Icon, {
      `),r(`span`,{class:`hljs-attr`},`name`),a(`: `),r(`span`,{class:`hljs-string`},`'heart'`),a(`,
      `),r(`span`,{class:`hljs-attr`},`style`),a(`: { `),r(`span`,{class:`hljs-attr`},`paddingRight`),a(`: `),r(`span`,{class:`hljs-string`},`'12px'`),a(` },
    }),
  `),r(`span`,{class:`hljs-attr`},`action`),a(`: `),r(`span`,{class:`hljs-function`},`() =>`),a(`
    h(
      Button,
      {
        `),r(`span`,{class:`hljs-attr`},`size`),a(`: `),r(`span`,{class:`hljs-string`},`'small'`),a(`,
        `),r(`span`,{class:`hljs-attr`},`type`),a(`: `),r(`span`,{class:`hljs-string`},`'primary'`),a(`,
        `),r(`span`,{class:`hljs-attr`},`onClick`),a(`: `),r(`span`,{class:`hljs-function`},`() =>`),a(` customSnackbar.clear(),
      },
      { `),r(`span`,{class:`hljs-attr`},`default`),a(`: `),r(`span`,{class:`hljs-function`},`() =>`),a(),r(`span`,{class:`hljs-string`},`'Close'`),a(` }
    )
  })
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"warning"`),a(),r(`span`,{class:`hljs-attr`},`block`),a(` @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"createSnackbar"`),a(`>`)]),a(`Custom`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,P,[r(`h3`,F,[i(Q,{to:`#SnackbarType`},{default:t(()=>[...s[46]||=[a(`#`,-1)]]),_:1}),s[47]||=a(`Snackbar Type`,-1)]),i($,null,{default:t(()=>[...s[48]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),a(`

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),a(),r(`span`,{class:`hljs-title`},`createSnackbar`),a(`(`),r(`span`,{class:`hljs-params`},`type`),a(`) `)]),a(`{
  Snackbar[type](`),r(`span`,{class:`hljs-string`},`"Hello, I'm a snackbar"`),a(`)
  `),r(`span`,{class:`hljs-keyword`},`if`),a(` (type === `),r(`span`,{class:`hljs-string`},`'loading'`),a(`) {
    `),r(`span`,{class:`hljs-built_in`},`setTimeout`),a(`(`),r(`span`,{class:`hljs-function`},`() =>`),a(` {
      Snackbar.success(`),r(`span`,{class:`hljs-string`},`"loading success"`),a(`)
    }, `),r(`span`,{class:`hljs-number`},`2000`),a(`)
  }
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-space`),a(),r(`span`,{class:`hljs-attr`},`direction`),a(`=`),r(`span`,{class:`hljs-string`},`"column"`),a(),r(`span`,{class:`hljs-attr`},`size`),a(`=`),r(`span`,{class:`hljs-string`},`"large"`),a(`>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(` 
      `),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"success"`),a(` 
      `),r(`span`,{class:`hljs-attr`},`block`),a(` 
      @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"createSnackbar('success')"`),a(`
    >`)]),a(`
      success
    `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(` 
      `),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"warning"`),a(` 
      `),r(`span`,{class:`hljs-attr`},`block`),a(` 
      @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"createSnackbar('warning')"`),a(`
    >`)]),a(`
      warning
    `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(` 
      `),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"info"`),a(` 
      `),r(`span`,{class:`hljs-attr`},`block`),a(` 
      @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"createSnackbar('info')"`),a(`
    >`)]),a(`
      info
    `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(` 
      `),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"danger"`),a(` 
      `),r(`span`,{class:`hljs-attr`},`block`),a(` 
      @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"createSnackbar('error')"`),a(`
    >`)]),a(`
      error
    `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(` 
      `),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"primary"`),a(` 
      `),r(`span`,{class:`hljs-attr`},`block`),a(` 
      @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"createSnackbar('loading')"`),a(`
    >`)]),a(`
      loading
    `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-space`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,I,[r(`h3`,L,[i(Q,{to:`#Multiple`},{default:t(()=>[...s[49]||=[a(`#`,-1)]]),_:1}),s[50]||=a(`Multiple`,-1)]),s[52]||=r(`p`,null,`When using functional calls, Snackbar use singleton mode by default, if you need to pop multiple Snackbar at the same time, you can refer to the following example:`,-1),i($,null,{default:t(()=>[...s[51]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),a(`

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),a(),r(`span`,{class:`hljs-title`},`openMultiple`),a(`(`),r(`span`,{class:`hljs-params`}),a(`) `)]),a(`{
  Snackbar.allowMultiple(`),r(`span`,{class:`hljs-literal`},`true`),a(`)

  `),r(`span`,{class:`hljs-keyword`},`const`),a(` snackbar1 = Snackbar(`),r(`span`,{class:`hljs-string`},`'Snackbar 1'`),a(`);
  Snackbar.success(`),r(`span`,{class:`hljs-string`},`'Snackbar 2'`),a(`);

  `),r(`span`,{class:`hljs-built_in`},`setTimeout`),a(`(`),r(`span`,{class:`hljs-function`},`() =>`),a(` {
    snackbar1.clear()
  }, `),r(`span`,{class:`hljs-number`},`1000`),a(`)
}
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"primary"`),a(),r(`span`,{class:`hljs-attr`},`block`),a(` @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"openMultiple"`),a(`>`)]),a(`Multiple`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),s[74]||=r(`h2`,null,`API`,-1),r(`div`,R,[r(`h3`,z,[i(Q,{to:`#Props`},{default:t(()=>[...s[53]||=[a(`#`,-1)]]),_:1}),s[54]||=a(`Props`,-1)]),s[55]||=o(`<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>Whether to show <code>Snackbar</code></td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>type</code></td><td><code>Snackbar</code> type, Optional value is one of <code>success, warning, info, error, loading</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>position</code></td><td><code>Snackbar</code> position, Optional value is one of <code>top, center, bottom</code></td><td><em>string</em></td><td><code>top</code></td></tr><tr><td><code>duration</code></td><td>Display duration</td><td><em>number</em></td><td><code>3000</code></td></tr><tr><td><code>progress</code> <em><strong>3.20.8</strong></em></td><td>Whether to show dismissal countdown</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>elevation</code> <em><strong>3.3.0</strong></em></td><td>Elevation level, options <code>true</code> <code>false</code> and level of <code>0-24</code></td><td><em>string | number | boolean</em></td><td><code>true</code></td></tr><tr><td><code>content</code></td><td>Custom content</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>content-class</code></td><td>Class of custom content</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>vertical</code></td><td>Whether to use multi-line</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loading-type</code></td><td>Loading type (see <code>Loading</code> component)</td><td><em>string</em></td><td><code>circle</code></td></tr><tr><td><code>loading-size</code></td><td>Loading size (see <code>Loading</code> component)</td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>loading-color</code></td><td>Loading color (see <code>Loading</code> component)</td><td><em>string</em></td><td><code>currentColor</code></td></tr><tr><td><code>loading-radius</code></td><td>Loading radius (see <code>Loading</code> component)</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>Whether to disable rolling penetration</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>forbid-click</code></td><td>Whether to penetrating clicks are forbidden</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>teleport</code></td><td>The location of the Snackbar to mount</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>body</code></td></tr></tbody></table>`,1)]),r(`div`,B,[r(`h3`,V,[i(Q,{to:`#Events`},{default:t(()=>[...s[56]||=[a(`#`,-1)]]),_:1}),s[57]||=a(`Events`,-1)]),s[58]||=o(`<table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>open</code></td><td>Triggered when the <code>Snackbar</code> is open</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered when the <code>Snackbar</code> open-animation ends</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Triggered when the <code>Snackbar</code> is close</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the <code>Snackbar</code> close-animation ends</td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,H,[r(`h3`,U,[i(Q,{to:`#Slots`},{default:t(()=>[...s[59]||=[a(`#`,-1)]]),_:1}),s[60]||=a(`Slots`,-1)]),s[61]||=o(`<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td><code>Snackbar</code> content message</td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td><code>Snackbar</code> icon</td><td><code>-</code></td></tr><tr><td><code>action</code></td><td><code>Snackbar</code> action of right</td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,W,[r(`h3`,G,[i(Q,{to:`#Methods`},{default:t(()=>[...s[62]||=[a(`#`,-1)]]),_:1}),s[63]||=a(`Methods`,-1)]),s[64]||=o(`<p>The <code>clear</code> method on the instance can close the current instance, and the <code>clear</code> method on the Snackbar can close all message bars.</p><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>Snackbar</code></td><td>Show snackbar</td><td><em>options | string</em></td><td><code>snackbar instance</code></td></tr><tr><td><code>Snackbar.success</code></td><td>Show success snackbar</td><td><em>options | string</em></td><td><code>snackbar instance</code></td></tr><tr><td><code>Snackbar.info</code></td><td>Show info snackbar</td><td><em>options | string</em></td><td><code>snackbar instance</code></td></tr><tr><td><code>Snackbar.warning</code></td><td>Show warning snackbar</td><td><em>options | string</em></td><td><code>snackbar instance</code></td></tr><tr><td><code>Snackbar.error</code></td><td>Show error snackbar</td><td><em>options | string</em></td><td><code>snackbar instance</code></td></tr><tr><td><code>Snackbar.loading</code></td><td>Show loading snackbar</td><td><em>options | string</em></td><td><code>snackbar instance</code></td></tr><tr><td><code>Snackbar.clear</code></td><td>Close snackbar</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>Snackbar.allowMultiple</code></td><td>Whether to allow multi instance patterns</td><td><em>boolean</em></td><td><code>-</code></td></tr><tr><td><code>Snackbar.setDefaultOptions</code></td><td>Set default option configuration</td><td><em>options</em></td><td><code>-</code></td></tr><tr><td><code>Snackbar.resetDefaultOptions</code></td><td>Reset default option configuration</td><td><em>-</em></td><td><code>-</code></td></tr></tbody></table>`,2)]),r(`div`,K,[r(`h3`,q,[i(Q,{to:`#SnackbarOptions`},{default:t(()=>[...s[65]||=[a(`#`,-1)]]),_:1}),s[66]||=a(`Snackbar Options`,-1)]),s[67]||=o(`<h4>Options passed in for a functional call</h4><table><thead><tr><th>Option</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>type</code></td><td><code>Snackbar</code> type, Optional value is one of <code>success, warning, info, error, loading</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>position</code></td><td><code>Snackbar</code> position, Optional value is one of <code>top, center, bottom</code></td><td><em>string</em></td><td><code>top</code></td></tr><tr><td><code>duration</code></td><td>Display duration (Need to be closed manually when the <code>type</code> prop is <code>loading</code>)</td><td><em>number</em></td><td><code>3000</code></td></tr><tr><td><code>progress</code> <em><strong>3.20.8</strong></em></td><td>Whether to show dismissal countdown</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>elevation</code> <em><strong>3.3.0</strong></em></td><td>Elevation level, options <code>true</code> <code>false</code> and level of <code>0-24</code></td><td><em>string | number | boolean</em></td><td><code>true</code></td></tr><tr><td><code>content</code></td><td>Custom content</td><td><em>string | VNode | (() =&gt; VNode)</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Custom icon</td><td><em>string | VNode | (() =&gt; VNode)</em></td><td><code>-</code></td></tr><tr><td><code>action</code></td><td>Custom action of right</td><td><em>string | VNode | (() =&gt; VNode)</em></td><td><code>-</code></td></tr><tr><td><code>contentClass</code></td><td>Class of custom content</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>vertical</code></td><td>Whether to use multi-line</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loadingType</code></td><td>Loading type (see <code>Loading</code> component)</td><td><em>string</em></td><td><code>circle</code></td></tr><tr><td><code>loadingSize</code></td><td>Loading size (see <code>Loading</code> component)</td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>loadingColor</code></td><td>Loading color (see <code>Loading</code> component)</td><td><em>string</em></td><td><code>currentColor</code></td></tr><tr><td><code>loadingRadius</code></td><td>Loading radius (see <code>Loading</code> component)</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>lockScroll</code></td><td>Whether to disable rolling penetration</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>forbidClick</code></td><td>whether to penetrating clicks are forbidden (Value is <code>true</code> when the <code>type</code> prop is <code>loading</code>)</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onOpen</code></td><td>Triggered when the <code>Snackbar</code> is open</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Triggered when the <code>Snackbar</code> open-animation ends</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Triggered when the <code>Snackbar</code> is close</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Triggered when the <code>Snackbar</code> close-animation ends</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table>`,2)]),r(`div`,J,[r(`h3`,Y,[i(Q,{to:`#StyleVariables`},{default:t(()=>[...s[68]||=[a(`#`,-1)]]),_:1}),s[69]||=a(`Style Variables`,-1)]),s[70]||=o(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--snackbar-width</code></td><td><code>256px</code></td></tr><tr><td><code>--snackbar-color</code></td><td><code>rgba(255, 255, 255, .87)</code></td></tr><tr><td><code>--snackbar-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--snackbar-background</code></td><td><code>#333</code></td></tr><tr><td><code>--snackbar-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--snackbar-margin</code></td><td><code>6px 24px</code></td></tr><tr><td><code>--snackbar-border-color</code></td><td><code>currentColor</code></td></tr><tr><td><code>--snackbar-success-background</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--snackbar-info-background</code></td><td><code>var(--color-info)</code></td></tr><tr><td><code>--snackbar-error-background</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--snackbar-warning-background</code></td><td><code>var(--color-warning)</code></td></tr><tr><td><code>--snackbar-content-padding</code></td><td><code>14px 16px</code></td></tr><tr><td><code>--snackbar-action-margin</code></td><td><code>0 8px</code></td></tr><tr><td><code>--snackbar-icon-margin</code></td><td><code>0 8px</code></td></tr><tr><td><code>--snackbar-vertical-action-margin</code></td><td><code>0 8px 8px 0</code></td></tr><tr><td><code>--snackbar-progress-height</code></td><td><code>4px</code></td></tr><tr><td><code>--snackbar-progress-color</code></td><td><code>currentColor</code></td></tr></tbody></table>`,2)])])}var Z=e(s,[[`render`,X]]);export{Z as default};