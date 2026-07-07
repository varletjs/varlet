import{G as e,L as t,N as ee,c as n,d as te,g as r,h as i,m as a}from"./runtime-core.esm-bundler-5xw830oL.js";import{t as ne}from"./_plugin-vue_export-helper-DAAOZMkq.js";var o={components:{}},s={class:`varlet-site-doc`},c={class:`card`},l={id:`Intro`},u={class:`card`},d={id:`BasicUsage`},f={class:`card`},p={id:`CustomColumnRender`},m={class:`card`},h={id:`CustomHeader`},g={class:`card`},_={id:`FrontendPagination`},v={class:`card`},y={id:`RemotePagination`},b={class:`card`},x={id:`SingleColumnSorting`},S={class:`card`},C={id:`MultipleColumnSorting`},w={class:`card`},T={id:`GroupedHeader`},E={class:`card`},D={id:`CustomRowProps`},O={class:`card`},k={id:`RowClass`},A={class:`card`},j={id:`Summary`},M={class:`card`},N={id:`CellSpans`},P={class:`card`},F={id:`Selection`},I={class:`card`},L={id:`SingleSelection`},R={class:`card`},z={id:`TreeData`},B={class:`card`},V={id:`TreeNon-Cascade`},H={class:`card`},re={id:`TreeSingleSelection`},U={class:`card`},W={id:`Expand`},G={class:`card`},K={id:`FixedHeader/Columns`},q={class:`card`},J={id:`ResizableColumns`},Y={class:`card`},X={id:`CustomEmptyContent`},ie={class:`card`},ae={id:`Loading`},oe={class:`card`},se={id:`Sizes`},ce={class:`card`},le={id:`SubtleBackground`},ue={class:`card`},de={id:`PlainTable`},fe={class:`card`},pe={id:`Plain+Bordered`},me={class:`card`},he={id:`Props`},Z={class:`card`},ge={id:`Slots`},_e={class:`card`},ve={id:`StyleVariables`};function ye(ne,o,ye,be,xe,Se){let Q=t(`router-link`),$=t(`var-site-code-example`);return ee(),te(`div`,s,[o[92]||=n(`h1`,null,`DataTable`,-1),n(`div`,c,[n(`h3`,l,[r(Q,{to:`#Intro`},{default:e(()=>[...o[0]||=[i(`#`,-1)]]),_:1}),o[1]||=i(`Intro`,-1)]),o[2]||=n(`p`,null,`Data-driven table.`,-1)]),n(`div`,u,[n(`h3`,d,[r(Q,{to:`#BasicUsage`},{default:e(()=>[...o[3]||=[i(`#`,-1)]]),_:1}),o[4]||=i(`Basic Usage`,-1)]),r($,null,{default:e(()=>[...o[5]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` columns = ref([
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'name'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Name'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'role'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Role'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'status'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Status'`),i(` },
])

`),n(`span`,{class:`hljs-keyword`},`const`),i(` data = ref([
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`1`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Ada'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Admin'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`2`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Linus'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Maintainer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Offline'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`3`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Taylor'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Designer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`4`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Evan'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Reviewer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Busy'`),i(` },
])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-data-table`),i(),n(`span`,{class:`hljs-attr`},`:columns`),i(`=`),n(`span`,{class:`hljs-string`},`"columns"`),i(),n(`span`,{class:`hljs-attr`},`:data`),i(`=`),n(`span`,{class:`hljs-string`},`"data"`),i(),n(`span`,{class:`hljs-attr`},`:pagination`),i(`=`),n(`span`,{class:`hljs-string`},`"{ showSizeChanger: true }"`),i(` />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,f,[n(`h3`,p,[r(Q,{to:`#CustomColumnRender`},{default:e(()=>[...o[6]||=[i(`#`,-1)]]),_:1}),o[7]||=i(`Custom Column Render`,-1)]),r($,null,{default:e(()=>[...o[8]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { h, ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` columns = ref([
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'name'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Name'`),i(` },
  {
    `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'status'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Status'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`render`),i(`: `),n(`span`,{class:`hljs-function`},[i(`(`),n(`span`,{class:`hljs-params`},`{ row }`),i(`) =>`)]),i(`
      h(
        `),n(`span`,{class:`hljs-string`},`'span'`),i(`,
        {
          `),n(`span`,{class:`hljs-attr`},`style`),i(`: {
            `),n(`span`,{class:`hljs-attr`},`color`),i(`: row.status === `),n(`span`,{class:`hljs-string`},`'Online'`),i(` ? `),n(`span`,{class:`hljs-string`},`'var(--color-success)'`),i(` : `),n(`span`,{class:`hljs-string`},`'var(--color-text-disabled)'`),i(`,
          },
        },
        row.status,
      ),
  },
])

`),n(`span`,{class:`hljs-keyword`},`const`),i(` data = ref([
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`1`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Ada'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Admin'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`2`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Linus'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Maintainer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Offline'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`3`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Taylor'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Designer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`4`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Evan'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Reviewer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Busy'`),i(` },
])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-data-table`),i(),n(`span`,{class:`hljs-attr`},`:columns`),i(`=`),n(`span`,{class:`hljs-string`},`"columns"`),i(),n(`span`,{class:`hljs-attr`},`:data`),i(`=`),n(`span`,{class:`hljs-string`},`"data"`),i(` />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,m,[n(`h3`,h,[r(Q,{to:`#CustomHeader`},{default:e(()=>[...o[9]||=[i(`#`,-1)]]),_:1}),o[10]||=i(`Custom Header`,-1)]),r($,null,{default:e(()=>[...o[11]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { h, ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` columns = ref([
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'name'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-function`},`() =>`),i(` h(`),n(`span`,{class:`hljs-string`},`'span'`),i(`, { `),n(`span`,{class:`hljs-attr`},`style`),i(`: { `),n(`span`,{class:`hljs-attr`},`color`),i(`: `),n(`span`,{class:`hljs-string`},`'var(--color-primary)'`),i(` } }, `),n(`span`,{class:`hljs-string`},`'Name'`),i(`) },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'role'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-function`},`() =>`),i(` h(`),n(`span`,{class:`hljs-string`},`'span'`),i(`, { `),n(`span`,{class:`hljs-attr`},`style`),i(`: { `),n(`span`,{class:`hljs-attr`},`color`),i(`: `),n(`span`,{class:`hljs-string`},`'var(--color-success)'`),i(` } }, `),n(`span`,{class:`hljs-string`},`'Role'`),i(`) },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'status'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-function`},`() =>`),i(` h(`),n(`span`,{class:`hljs-string`},`'span'`),i(`, { `),n(`span`,{class:`hljs-attr`},`style`),i(`: { `),n(`span`,{class:`hljs-attr`},`color`),i(`: `),n(`span`,{class:`hljs-string`},`'var(--color-warning)'`),i(` } }, `),n(`span`,{class:`hljs-string`},`'Status'`),i(`) },
])

`),n(`span`,{class:`hljs-keyword`},`const`),i(` data = ref([
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`1`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Ada'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Admin'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`2`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Linus'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Maintainer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Offline'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`3`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Taylor'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Designer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`4`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Evan'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Reviewer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Busy'`),i(` },
])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-data-table`),i(),n(`span`,{class:`hljs-attr`},`:columns`),i(`=`),n(`span`,{class:`hljs-string`},`"columns"`),i(),n(`span`,{class:`hljs-attr`},`:data`),i(`=`),n(`span`,{class:`hljs-string`},`"data"`),i(` />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,g,[n(`h3`,_,[r(Q,{to:`#FrontendPagination`},{default:e(()=>[...o[12]||=[i(`#`,-1)]]),_:1}),o[13]||=i(`Frontend Pagination`,-1)]),r($,null,{default:e(()=>[...o[14]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` columns = ref([
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'name'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Name'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'role'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Role'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'status'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Status'`),i(` },
])

`),n(`span`,{class:`hljs-keyword`},`const`),i(` data = ref(
  `),n(`span`,{class:`hljs-built_in`},`Array`),i(`.from({ `),n(`span`,{class:`hljs-attr`},`length`),i(`: `),n(`span`,{class:`hljs-number`},`48`),i(` }, `),n(`span`,{class:`hljs-function`},[i(`(`),n(`span`,{class:`hljs-params`},`_, index`),i(`) =>`)]),i(` ({
    `),n(`span`,{class:`hljs-attr`},`id`),i(`: index + `),n(`span`,{class:`hljs-number`},`1`),i(`,
    `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},[i("`User "),n(`span`,{class:`hljs-subst`},[i("${index + "),n(`span`,{class:`hljs-number`},`1`),i(`}`)]),i("`")]),i(`,
    `),n(`span`,{class:`hljs-attr`},`role`),i(`: index % `),n(`span`,{class:`hljs-number`},`2`),i(` === `),n(`span`,{class:`hljs-number`},`0`),i(` ? `),n(`span`,{class:`hljs-string`},`'Engineer'`),i(` : `),n(`span`,{class:`hljs-string`},`'Operator'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`status`),i(`: index % `),n(`span`,{class:`hljs-number`},`3`),i(` === `),n(`span`,{class:`hljs-number`},`0`),i(` ? `),n(`span`,{class:`hljs-string`},`'Online'`),i(` : `),n(`span`,{class:`hljs-string`},`'Offline'`),i(`,
  })),
)
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-data-table`),i(),n(`span`,{class:`hljs-attr`},`:columns`),i(`=`),n(`span`,{class:`hljs-string`},`"columns"`),i(),n(`span`,{class:`hljs-attr`},`:data`),i(`=`),n(`span`,{class:`hljs-string`},`"data"`),i(` />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,v,[n(`h3`,y,[r(Q,{to:`#RemotePagination`},{default:e(()=>[...o[15]||=[i(`#`,-1)]]),_:1}),o[16]||=i(`Remote Pagination`,-1)]),r($,null,{default:e(()=>[...o[17]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref, watch } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` page = ref(`),n(`span`,{class:`hljs-number`},`1`),i(`)
`),n(`span`,{class:`hljs-keyword`},`const`),i(` pageSize = ref(`),n(`span`,{class:`hljs-number`},`10`),i(`)
`),n(`span`,{class:`hljs-keyword`},`const`),i(` loading = ref(`),n(`span`,{class:`hljs-literal`},`false`),i(`)
`),n(`span`,{class:`hljs-keyword`},`const`),i(` data = ref([])
`),n(`span`,{class:`hljs-keyword`},`let`),i(` timer

`),n(`span`,{class:`hljs-keyword`},`const`),i(` columns = ref([
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'name'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Name'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'role'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Role'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'status'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Status'`),i(` },
])

`),n(`span`,{class:`hljs-keyword`},`const`),i(` allData = ref(
  `),n(`span`,{class:`hljs-built_in`},`Array`),i(`.from({ `),n(`span`,{class:`hljs-attr`},`length`),i(`: `),n(`span`,{class:`hljs-number`},`48`),i(` }, `),n(`span`,{class:`hljs-function`},[i(`(`),n(`span`,{class:`hljs-params`},`_, index`),i(`) =>`)]),i(` ({
    `),n(`span`,{class:`hljs-attr`},`id`),i(`: index + `),n(`span`,{class:`hljs-number`},`1`),i(`,
    `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},[i("`User "),n(`span`,{class:`hljs-subst`},[i("${index + "),n(`span`,{class:`hljs-number`},`1`),i(`}`)]),i("`")]),i(`,
    `),n(`span`,{class:`hljs-attr`},`role`),i(`: index % `),n(`span`,{class:`hljs-number`},`2`),i(` === `),n(`span`,{class:`hljs-number`},`0`),i(` ? `),n(`span`,{class:`hljs-string`},`'Engineer'`),i(` : `),n(`span`,{class:`hljs-string`},`'Operator'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`status`),i(`: index % `),n(`span`,{class:`hljs-number`},`3`),i(` === `),n(`span`,{class:`hljs-number`},`0`),i(` ? `),n(`span`,{class:`hljs-string`},`'Online'`),i(` : `),n(`span`,{class:`hljs-string`},`'Offline'`),i(`,
  })),
)

watch(
  [page, pageSize],
  `),n(`span`,{class:`hljs-function`},[i(`(`),n(`span`,{class:`hljs-params`},`[current, size]`),i(`) =>`)]),i(` {
    loading.value = `),n(`span`,{class:`hljs-literal`},`true`),i(`

    `),n(`span`,{class:`hljs-keyword`},`if`),i(` (timer) {
      `),n(`span`,{class:`hljs-built_in`},`clearTimeout`),i(`(timer)
    }

    timer = `),n(`span`,{class:`hljs-built_in`},`setTimeout`),i(`(`),n(`span`,{class:`hljs-function`},`() =>`),i(` {
      `),n(`span`,{class:`hljs-keyword`},`const`),i(` start = (current - `),n(`span`,{class:`hljs-number`},`1`),i(`) * size
      data.value = allData.value.slice(start, start + size)
      loading.value = `),n(`span`,{class:`hljs-literal`},`false`),i(`
    }, `),n(`span`,{class:`hljs-number`},`400`),i(`)
  },
  { `),n(`span`,{class:`hljs-attr`},`immediate`),i(`: `),n(`span`,{class:`hljs-literal`},`true`),i(` },
)
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-data-table`),i(`
    `),n(`span`,{class:`hljs-attr`},`v-model:page`),i(`=`),n(`span`,{class:`hljs-string`},`"page"`),i(`
    `),n(`span`,{class:`hljs-attr`},`v-model:page-size`),i(`=`),n(`span`,{class:`hljs-string`},`"pageSize"`),i(`
    `),n(`span`,{class:`hljs-attr`},`:columns`),i(`=`),n(`span`,{class:`hljs-string`},`"columns"`),i(`
    `),n(`span`,{class:`hljs-attr`},`:data`),i(`=`),n(`span`,{class:`hljs-string`},`"data"`),i(`
    `),n(`span`,{class:`hljs-attr`},`:loading`),i(`=`),n(`span`,{class:`hljs-string`},`"loading"`),i(`
    `),n(`span`,{class:`hljs-attr`},`:total`),i(`=`),n(`span`,{class:`hljs-string`},`"allData.length"`),i(`
    `),n(`span`,{class:`hljs-attr`},`remote`),i(`
  />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,b,[n(`h3`,x,[r(Q,{to:`#SingleColumnSorting`},{default:e(()=>[...o[18]||=[i(`#`,-1)]]),_:1}),o[19]||=i(`Single Column Sorting`,-1)]),r($,null,{default:e(()=>[...o[20]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { computed, ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` sorters = ref([])

`),n(`span`,{class:`hljs-keyword`},`const`),i(` columns = ref([
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'score'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Score'`),i(`, `),n(`span`,{class:`hljs-attr`},`sorter`),i(`: `),n(`span`,{class:`hljs-literal`},`true`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'tasks'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Tasks'`),i(`, `),n(`span`,{class:`hljs-attr`},`sorter`),i(`: `),n(`span`,{class:`hljs-literal`},`true`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'priority'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Priority'`),i(`, `),n(`span`,{class:`hljs-attr`},`sorter`),i(`: `),n(`span`,{class:`hljs-literal`},`true`),i(` },
])

`),n(`span`,{class:`hljs-keyword`},`const`),i(` data = computed(`),n(`span`,{class:`hljs-function`},`() =>`),i(` {
  `),n(`span`,{class:`hljs-keyword`},`const`),i(` data = [
    { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`1`),i(`, `),n(`span`,{class:`hljs-attr`},`score`),i(`: `),n(`span`,{class:`hljs-number`},`92`),i(`, `),n(`span`,{class:`hljs-attr`},`tasks`),i(`: `),n(`span`,{class:`hljs-number`},`16`),i(`, `),n(`span`,{class:`hljs-attr`},`priority`),i(`: `),n(`span`,{class:`hljs-number`},`2`),i(` },
    { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`2`),i(`, `),n(`span`,{class:`hljs-attr`},`score`),i(`: `),n(`span`,{class:`hljs-number`},`78`),i(`, `),n(`span`,{class:`hljs-attr`},`tasks`),i(`: `),n(`span`,{class:`hljs-number`},`24`),i(`, `),n(`span`,{class:`hljs-attr`},`priority`),i(`: `),n(`span`,{class:`hljs-number`},`3`),i(` },
    { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`3`),i(`, `),n(`span`,{class:`hljs-attr`},`score`),i(`: `),n(`span`,{class:`hljs-number`},`88`),i(`, `),n(`span`,{class:`hljs-attr`},`tasks`),i(`: `),n(`span`,{class:`hljs-number`},`12`),i(`, `),n(`span`,{class:`hljs-attr`},`priority`),i(`: `),n(`span`,{class:`hljs-number`},`1`),i(` },
    { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`4`),i(`, `),n(`span`,{class:`hljs-attr`},`score`),i(`: `),n(`span`,{class:`hljs-number`},`95`),i(`, `),n(`span`,{class:`hljs-attr`},`tasks`),i(`: `),n(`span`,{class:`hljs-number`},`18`),i(`, `),n(`span`,{class:`hljs-attr`},`priority`),i(`: `),n(`span`,{class:`hljs-number`},`2`),i(` },
  ]
  `),n(`span`,{class:`hljs-keyword`},`const`),i(` [sorter] = sorters.value

  `),n(`span`,{class:`hljs-keyword`},`if`),i(` (!sorter) {
    `),n(`span`,{class:`hljs-keyword`},`return`),i(` data
  }

  `),n(`span`,{class:`hljs-keyword`},`return`),i(` data.sort(`),n(`span`,{class:`hljs-function`},[i(`(`),n(`span`,{class:`hljs-params`},`a, b`),i(`) =>`)]),i(` {
    `),n(`span`,{class:`hljs-keyword`},`const`),i(` result = a[sorter.key] - b[sorter.key]
    `),n(`span`,{class:`hljs-keyword`},`return`),i(` sorter.order === `),n(`span`,{class:`hljs-string`},`'desc'`),i(` ? -result : result
  })
})
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-data-table`),i(`
    `),n(`span`,{class:`hljs-attr`},`v-model:sorters`),i(`=`),n(`span`,{class:`hljs-string`},`"sorters"`),i(`
    `),n(`span`,{class:`hljs-attr`},`:columns`),i(`=`),n(`span`,{class:`hljs-string`},`"columns"`),i(`
    `),n(`span`,{class:`hljs-attr`},`:data`),i(`=`),n(`span`,{class:`hljs-string`},`"data"`),i(`
    `),n(`span`,{class:`hljs-attr`},`:pagination`),i(`=`),n(`span`,{class:`hljs-string`},`"false"`),i(`
  />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,S,[n(`h3`,C,[r(Q,{to:`#MultipleColumnSorting`},{default:e(()=>[...o[21]||=[i(`#`,-1)]]),_:1}),o[22]||=i(`Multiple Column Sorting`,-1)]),r($,null,{default:e(()=>[...o[23]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { computed, ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` sorters = ref([])

`),n(`span`,{class:`hljs-keyword`},`const`),i(` columns = ref([
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'score'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Score'`),i(`, `),n(`span`,{class:`hljs-attr`},`sorter`),i(`: `),n(`span`,{class:`hljs-literal`},`true`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'tasks'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Tasks'`),i(`, `),n(`span`,{class:`hljs-attr`},`sorter`),i(`: `),n(`span`,{class:`hljs-literal`},`true`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'priority'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Priority'`),i(`, `),n(`span`,{class:`hljs-attr`},`sorter`),i(`: `),n(`span`,{class:`hljs-literal`},`true`),i(` },
])

`),n(`span`,{class:`hljs-keyword`},`const`),i(` data = computed(`),n(`span`,{class:`hljs-function`},`() =>`),i(` {
  `),n(`span`,{class:`hljs-keyword`},`const`),i(` data = [
    { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`1`),i(`, `),n(`span`,{class:`hljs-attr`},`score`),i(`: `),n(`span`,{class:`hljs-number`},`92`),i(`, `),n(`span`,{class:`hljs-attr`},`tasks`),i(`: `),n(`span`,{class:`hljs-number`},`16`),i(`, `),n(`span`,{class:`hljs-attr`},`priority`),i(`: `),n(`span`,{class:`hljs-number`},`2`),i(` },
    { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`2`),i(`, `),n(`span`,{class:`hljs-attr`},`score`),i(`: `),n(`span`,{class:`hljs-number`},`78`),i(`, `),n(`span`,{class:`hljs-attr`},`tasks`),i(`: `),n(`span`,{class:`hljs-number`},`24`),i(`, `),n(`span`,{class:`hljs-attr`},`priority`),i(`: `),n(`span`,{class:`hljs-number`},`3`),i(` },
    { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`3`),i(`, `),n(`span`,{class:`hljs-attr`},`score`),i(`: `),n(`span`,{class:`hljs-number`},`88`),i(`, `),n(`span`,{class:`hljs-attr`},`tasks`),i(`: `),n(`span`,{class:`hljs-number`},`12`),i(`, `),n(`span`,{class:`hljs-attr`},`priority`),i(`: `),n(`span`,{class:`hljs-number`},`1`),i(` },
    { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`4`),i(`, `),n(`span`,{class:`hljs-attr`},`score`),i(`: `),n(`span`,{class:`hljs-number`},`95`),i(`, `),n(`span`,{class:`hljs-attr`},`tasks`),i(`: `),n(`span`,{class:`hljs-number`},`18`),i(`, `),n(`span`,{class:`hljs-attr`},`priority`),i(`: `),n(`span`,{class:`hljs-number`},`2`),i(` },
  ]

  `),n(`span`,{class:`hljs-keyword`},`return`),i(` data.sort(`),n(`span`,{class:`hljs-function`},[i(`(`),n(`span`,{class:`hljs-params`},`a, b`),i(`) =>`)]),i(` {
    `),n(`span`,{class:`hljs-keyword`},`for`),i(` (`),n(`span`,{class:`hljs-keyword`},`const`),i(` sorter `),n(`span`,{class:`hljs-keyword`},`of`),i(` sorters.value) {
      `),n(`span`,{class:`hljs-keyword`},`const`),i(` result = a[sorter.key] - b[sorter.key]

      `),n(`span`,{class:`hljs-keyword`},`if`),i(` (result !== `),n(`span`,{class:`hljs-number`},`0`),i(`) {
        `),n(`span`,{class:`hljs-keyword`},`return`),i(` sorter.order === `),n(`span`,{class:`hljs-string`},`'desc'`),i(` ? -result : result
      }
    }

    `),n(`span`,{class:`hljs-keyword`},`return`),i(),n(`span`,{class:`hljs-number`},`0`),i(`
  })
})
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-data-table`),i(`
    `),n(`span`,{class:`hljs-attr`},`v-model:sorters`),i(`=`),n(`span`,{class:`hljs-string`},`"sorters"`),i(`
    `),n(`span`,{class:`hljs-attr`},`:columns`),i(`=`),n(`span`,{class:`hljs-string`},`"columns"`),i(`
    `),n(`span`,{class:`hljs-attr`},`:data`),i(`=`),n(`span`,{class:`hljs-string`},`"data"`),i(`
    `),n(`span`,{class:`hljs-attr`},`:pagination`),i(`=`),n(`span`,{class:`hljs-string`},`"false"`),i(`
    `),n(`span`,{class:`hljs-attr`},`sort-mode`),i(`=`),n(`span`,{class:`hljs-string`},`"multiple"`),i(`
  />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,w,[n(`h3`,T,[r(Q,{to:`#GroupedHeader`},{default:e(()=>[...o[24]||=[i(`#`,-1)]]),_:1}),o[25]||=i(`Grouped Header`,-1)]),r($,null,{default:e(()=>[...o[26]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` columns = ref([
  {
    `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'User Info'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`children`),i(`: [
      {
        `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Profile'`),i(`,
        `),n(`span`,{class:`hljs-attr`},`children`),i(`: [
          { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'name'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Name'`),i(` },
          { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'role'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Role'`),i(` },
        ],
      },
      {
        `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Work Info'`),i(`,
        `),n(`span`,{class:`hljs-attr`},`children`),i(`: [{ `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'department'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Dept'`),i(` }],
      },
    ],
  },
  {
    `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Activity'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`children`),i(`: [
      {
        `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'State'`),i(`,
        `),n(`span`,{class:`hljs-attr`},`children`),i(`: [{ `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'status'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Status'`),i(` }],
      },
    ],
  },
])

`),n(`span`,{class:`hljs-keyword`},`const`),i(` data = ref([
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`1`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Ada'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Admin'`),i(`, `),n(`span`,{class:`hljs-attr`},`department`),i(`: `),n(`span`,{class:`hljs-string`},`'Exp'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`2`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Linus'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Maintainer'`),i(`, `),n(`span`,{class:`hljs-attr`},`department`),i(`: `),n(`span`,{class:`hljs-string`},`'Infra'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Offline'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`3`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Taylor'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Designer'`),i(`, `),n(`span`,{class:`hljs-attr`},`department`),i(`: `),n(`span`,{class:`hljs-string`},`'Design'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`4`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Evan'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Reviewer'`),i(`, `),n(`span`,{class:`hljs-attr`},`department`),i(`: `),n(`span`,{class:`hljs-string`},`'Platform'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Busy'`),i(` },
])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-data-table`),i(),n(`span`,{class:`hljs-attr`},`:columns`),i(`=`),n(`span`,{class:`hljs-string`},`"columns"`),i(),n(`span`,{class:`hljs-attr`},`:data`),i(`=`),n(`span`,{class:`hljs-string`},`"data"`),i(),n(`span`,{class:`hljs-attr`},`:pagination`),i(`=`),n(`span`,{class:`hljs-string`},`"false"`),i(),n(`span`,{class:`hljs-attr`},`cell-bordered`),i(` />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,E,[n(`h3`,D,[r(Q,{to:`#CustomRowProps`},{default:e(()=>[...o[27]||=[i(`#`,-1)]]),_:1}),o[28]||=i(`Custom Row Props`,-1)]),r($,null,{default:e(()=>[...o[29]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` columns = ref([
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'name'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Name'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'role'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Role'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'status'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Status'`),i(` },
])

`),n(`span`,{class:`hljs-keyword`},`const`),i(` customRowProps = `),n(`span`,{class:`hljs-function`},[i(`(`),n(`span`,{class:`hljs-params`},`{ row, rowIndex }`),i(`) =>`)]),i(` ({
  `),n(`span`,{class:`hljs-attr`},`style`),i(`: {
    `),n(`span`,{class:`hljs-attr`},`backgroundColor`),i(`: rowIndex === `),n(`span`,{class:`hljs-number`},`0`),i(` ? `),n(`span`,{class:`hljs-string`},`'hsla(var(--hsl-primary), 0.08)'`),i(` : `),n(`span`,{class:`hljs-literal`},`undefined`),i(`,
  },
  `),n(`span`,{class:`hljs-attr`},`title`),i(`: row.name,
})

`),n(`span`,{class:`hljs-keyword`},`const`),i(` data = ref([
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`1`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Ada'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Admin'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`2`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Linus'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Maintainer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Offline'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`3`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Taylor'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Designer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`4`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Evan'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Reviewer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Busy'`),i(` },
])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-data-table`),i(),n(`span`,{class:`hljs-attr`},`:columns`),i(`=`),n(`span`,{class:`hljs-string`},`"columns"`),i(),n(`span`,{class:`hljs-attr`},`:data`),i(`=`),n(`span`,{class:`hljs-string`},`"data"`),i(),n(`span`,{class:`hljs-attr`},`:row-props`),i(`=`),n(`span`,{class:`hljs-string`},`"customRowProps"`),i(` />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,O,[n(`h3`,k,[r(Q,{to:`#RowClass`},{default:e(()=>[...o[30]||=[i(`#`,-1)]]),_:1}),o[31]||=i(`Row Class`,-1)]),r($,null,{default:e(()=>[...o[32]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` columns = ref([
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'name'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Name'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'role'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Role'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'status'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Status'`),i(` },
])

`),n(`span`,{class:`hljs-keyword`},`const`),i(` rowClass = `),n(`span`,{class:`hljs-function`},[i(`(`),n(`span`,{class:`hljs-params`},`{ row }`),i(`) =>`)]),i(` {
  `),n(`span`,{class:`hljs-keyword`},`return`),i(` row.status === `),n(`span`,{class:`hljs-string`},`'Busy'`),i(` ? `),n(`span`,{class:`hljs-string`},`'busy-row'`),i(` : `),n(`span`,{class:`hljs-literal`},`undefined`),i(`
}

`),n(`span`,{class:`hljs-keyword`},`const`),i(` data = ref([
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`1`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Ada'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Admin'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`2`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Linus'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Maintainer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Offline'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`3`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Taylor'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Designer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`4`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Evan'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Reviewer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Busy'`),i(` },
])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-data-table`),i(),n(`span`,{class:`hljs-attr`},`:columns`),i(`=`),n(`span`,{class:`hljs-string`},`"columns"`),i(),n(`span`,{class:`hljs-attr`},`:data`),i(`=`),n(`span`,{class:`hljs-string`},`"data"`),i(),n(`span`,{class:`hljs-attr`},`:row-class`),i(`=`),n(`span`,{class:`hljs-string`},`"rowClass"`),i(` />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`style`),i(`>`)]),n(`span`,{class:`css`},[i(`
`),n(`span`,{class:`hljs-selector-class`},`.busy-row`),i(),n(`span`,{class:`hljs-selector-class`},`.var-data-table__body-cell`),i(` {
  `),n(`span`,{class:`hljs-attribute`},`color`),i(`: `),n(`span`,{class:`hljs-built_in`},`var`),i(`(--color-warning);
}
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`style`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,A,[n(`h3`,j,[r(Q,{to:`#Summary`},{default:e(()=>[...o[33]||=[i(`#`,-1)]]),_:1}),o[34]||=i(`Summary`,-1)]),r($,null,{default:e(()=>[...o[35]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { h, ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` columns = ref([
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'name'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Name'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'score'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Score'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'tasks'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Tasks'`),i(` },
])

`),n(`span`,{class:`hljs-keyword`},`const`),i(` summary = `),n(`span`,{class:`hljs-function`},[i(`(`),n(`span`,{class:`hljs-params`},`{ data }`),i(`) =>`)]),i(` ({
  `),n(`span`,{class:`hljs-attr`},`name`),i(`: {
    `),n(`span`,{class:`hljs-attr`},`value`),i(`: h(`),n(`span`,{class:`hljs-string`},`'span'`),i(`, { `),n(`span`,{class:`hljs-attr`},`style`),i(`: { `),n(`span`,{class:`hljs-attr`},`color`),i(`: `),n(`span`,{class:`hljs-string`},`'var(--color-primary)'`),i(` } }, `),n(`span`,{class:`hljs-string`},`'Total'`),i(`),
    `),n(`span`,{class:`hljs-attr`},`colSpan`),i(`: `),n(`span`,{class:`hljs-number`},`2`),i(`,
  },
  `),n(`span`,{class:`hljs-attr`},`tasks`),i(`: {
    `),n(`span`,{class:`hljs-attr`},`value`),i(`: data.reduce(`),n(`span`,{class:`hljs-function`},[i(`(`),n(`span`,{class:`hljs-params`},`total, row`),i(`) =>`)]),i(` total + row.tasks, `),n(`span`,{class:`hljs-number`},`0`),i(`),
  },
})

`),n(`span`,{class:`hljs-keyword`},`const`),i(` data = ref([
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`1`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Ada'`),i(`, `),n(`span`,{class:`hljs-attr`},`score`),i(`: `),n(`span`,{class:`hljs-number`},`92`),i(`, `),n(`span`,{class:`hljs-attr`},`tasks`),i(`: `),n(`span`,{class:`hljs-number`},`16`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`2`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Linus'`),i(`, `),n(`span`,{class:`hljs-attr`},`score`),i(`: `),n(`span`,{class:`hljs-number`},`78`),i(`, `),n(`span`,{class:`hljs-attr`},`tasks`),i(`: `),n(`span`,{class:`hljs-number`},`24`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`3`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Taylor'`),i(`, `),n(`span`,{class:`hljs-attr`},`score`),i(`: `),n(`span`,{class:`hljs-number`},`88`),i(`, `),n(`span`,{class:`hljs-attr`},`tasks`),i(`: `),n(`span`,{class:`hljs-number`},`12`),i(` },
])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-data-table`),i(),n(`span`,{class:`hljs-attr`},`:columns`),i(`=`),n(`span`,{class:`hljs-string`},`"columns"`),i(),n(`span`,{class:`hljs-attr`},`:data`),i(`=`),n(`span`,{class:`hljs-string`},`"data"`),i(),n(`span`,{class:`hljs-attr`},`:summary`),i(`=`),n(`span`,{class:`hljs-string`},`"summary"`),i(),n(`span`,{class:`hljs-attr`},`:pagination`),i(`=`),n(`span`,{class:`hljs-string`},`"false"`),i(` />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,M,[n(`h3`,N,[r(Q,{to:`#CellSpans`},{default:e(()=>[...o[36]||=[i(`#`,-1)]]),_:1}),o[37]||=i(`Cell Spans`,-1)]),o[39]||=n(`p`,null,[n(`code`,null,`titleColSpan`),i(` only applies to leaf columns. For grouped headers, group column span is derived from its `),n(`code`,null,`children`),i(`.`)],-1),r($,null,{default:e(()=>[...o[38]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` columns = ref([
  {
    `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'name'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Identity'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`titleColSpan`),i(`: `),n(`span`,{class:`hljs-number`},`2`),i(`,
    `),n(`span`,{class:`hljs-attr`},`rowSpan`),i(`: `),n(`span`,{class:`hljs-function`},[i(`(`),n(`span`,{class:`hljs-params`},`{ rowIndex }`),i(`) =>`)]),i(` (rowIndex === `),n(`span`,{class:`hljs-number`},`0`),i(` ? `),n(`span`,{class:`hljs-number`},`2`),i(` : `),n(`span`,{class:`hljs-number`},`1`),i(`),
  },
  {
    `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'role'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Role'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`colSpan`),i(`: `),n(`span`,{class:`hljs-function`},[i(`(`),n(`span`,{class:`hljs-params`},`{ rowIndex }`),i(`) =>`)]),i(` (rowIndex === `),n(`span`,{class:`hljs-number`},`0`),i(` ? `),n(`span`,{class:`hljs-number`},`2`),i(` : `),n(`span`,{class:`hljs-number`},`1`),i(`),
  },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'status'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Status'`),i(` },
])

`),n(`span`,{class:`hljs-keyword`},`const`),i(` data = ref([
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`1`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Ada'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Admin'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`2`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Linus'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Maintainer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Offline'`),i(` },
])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-data-table`),i(),n(`span`,{class:`hljs-attr`},`:columns`),i(`=`),n(`span`,{class:`hljs-string`},`"columns"`),i(),n(`span`,{class:`hljs-attr`},`:data`),i(`=`),n(`span`,{class:`hljs-string`},`"data"`),i(),n(`span`,{class:`hljs-attr`},`:pagination`),i(`=`),n(`span`,{class:`hljs-string`},`"false"`),i(),n(`span`,{class:`hljs-attr`},`cell-bordered`),i(` />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,P,[n(`h3`,F,[r(Q,{to:`#Selection`},{default:e(()=>[...o[40]||=[i(`#`,-1)]]),_:1}),o[41]||=i(`Selection`,-1)]),r($,null,{default:e(()=>[...o[42]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` checkedRowKeys = ref([`),n(`span`,{class:`hljs-number`},`1`),i(`, `),n(`span`,{class:`hljs-number`},`3`),i(`])

`),n(`span`,{class:`hljs-keyword`},`const`),i(` columns = ref([
  { `),n(`span`,{class:`hljs-attr`},`type`),i(`: `),n(`span`,{class:`hljs-string`},`'selection'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'name'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Name'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'role'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Role'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'status'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Status'`),i(` },
])

`),n(`span`,{class:`hljs-keyword`},`const`),i(` data = ref([
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`1`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Ada'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Admin'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`2`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Linus'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Maintainer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Offline'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`3`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Taylor'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Designer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`4`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Evan'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Reviewer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Busy'`),i(` },
])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-data-table`),i(),n(`span`,{class:`hljs-attr`},`v-model:checked-row-keys`),i(`=`),n(`span`,{class:`hljs-string`},`"checkedRowKeys"`),i(),n(`span`,{class:`hljs-attr`},`:columns`),i(`=`),n(`span`,{class:`hljs-string`},`"columns"`),i(),n(`span`,{class:`hljs-attr`},`:data`),i(`=`),n(`span`,{class:`hljs-string`},`"data"`),i(` />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,I,[n(`h3`,L,[r(Q,{to:`#SingleSelection`},{default:e(()=>[...o[43]||=[i(`#`,-1)]]),_:1}),o[44]||=i(`Single Selection`,-1)]),r($,null,{default:e(()=>[...o[45]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` checkedRowKeys = ref([`),n(`span`,{class:`hljs-number`},`2`),i(`])

`),n(`span`,{class:`hljs-keyword`},`const`),i(` columns = ref([
  { `),n(`span`,{class:`hljs-attr`},`type`),i(`: `),n(`span`,{class:`hljs-string`},`'selection'`),i(`, `),n(`span`,{class:`hljs-attr`},`multiple`),i(`: `),n(`span`,{class:`hljs-literal`},`false`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'name'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Name'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'role'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Role'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'status'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Status'`),i(` },
])

`),n(`span`,{class:`hljs-keyword`},`const`),i(` data = ref([
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`1`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Ada'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Admin'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`2`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Linus'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Maintainer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Offline'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`3`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Taylor'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Designer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`4`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Evan'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Reviewer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Busy'`),i(` },
])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-data-table`),i(),n(`span`,{class:`hljs-attr`},`v-model:checked-row-keys`),i(`=`),n(`span`,{class:`hljs-string`},`"checkedRowKeys"`),i(),n(`span`,{class:`hljs-attr`},`:columns`),i(`=`),n(`span`,{class:`hljs-string`},`"columns"`),i(),n(`span`,{class:`hljs-attr`},`:data`),i(`=`),n(`span`,{class:`hljs-string`},`"data"`),i(` />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,R,[n(`h3`,z,[r(Q,{to:`#TreeData`},{default:e(()=>[...o[46]||=[i(`#`,-1)]]),_:1}),o[47]||=i(`Tree Data`,-1)]),r($,null,{default:e(()=>[...o[48]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` checkedRowKeys = ref([`),n(`span`,{class:`hljs-number`},`12`),i(`])

`),n(`span`,{class:`hljs-keyword`},`const`),i(` columns = ref([
  { `),n(`span`,{class:`hljs-attr`},`type`),i(`: `),n(`span`,{class:`hljs-string`},`'selection'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'name'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Name'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'role'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Role'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'status'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Status'`),i(` },
])

`),n(`span`,{class:`hljs-keyword`},`const`),i(` data = ref([
  {
    `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`1`),i(`,
    `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Frontend'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Team'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`children`),i(`: [
      { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`11`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Ada'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Lead'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(` },
      { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`12`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Taylor'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Engineer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Busy'`),i(` },
    ],
  },
  {
    `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`2`),i(`,
    `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Design'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Team'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Offline'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`children`),i(`: [{ `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`21`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Linus'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Designer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Offline'`),i(` }],
  },
])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-data-table`),i(`
    `),n(`span`,{class:`hljs-attr`},`v-model:checked-row-keys`),i(`=`),n(`span`,{class:`hljs-string`},`"checkedRowKeys"`),i(`
    `),n(`span`,{class:`hljs-attr`},`:columns`),i(`=`),n(`span`,{class:`hljs-string`},`"columns"`),i(`
    `),n(`span`,{class:`hljs-attr`},`:data`),i(`=`),n(`span`,{class:`hljs-string`},`"data"`),i(`
    `),n(`span`,{class:`hljs-attr`},`:pagination`),i(`=`),n(`span`,{class:`hljs-string`},`"false"`),i(`
    `),n(`span`,{class:`hljs-attr`},`tree`),i(`
  />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,B,[n(`h3`,V,[r(Q,{to:`#TreeNon-Cascade`},{default:e(()=>[...o[49]||=[i(`#`,-1)]]),_:1}),o[50]||=i(`Tree Non-Cascade`,-1)]),r($,null,{default:e(()=>[...o[51]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` checkedRowKeys = ref([`),n(`span`,{class:`hljs-number`},`12`),i(`])

`),n(`span`,{class:`hljs-keyword`},`const`),i(` columns = ref([
  { `),n(`span`,{class:`hljs-attr`},`type`),i(`: `),n(`span`,{class:`hljs-string`},`'selection'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'name'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Name'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'role'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Role'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'status'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Status'`),i(` },
])

`),n(`span`,{class:`hljs-keyword`},`const`),i(` data = ref([
  {
    `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`1`),i(`,
    `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Frontend'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Team'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`children`),i(`: [
      { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`11`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Ada'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Lead'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(` },
      { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`12`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Taylor'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Engineer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Busy'`),i(` },
    ],
  },
  {
    `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`2`),i(`,
    `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Design'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Team'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Offline'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`children`),i(`: [{ `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`21`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Linus'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Designer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Offline'`),i(` }],
  },
])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-data-table`),i(`
    `),n(`span`,{class:`hljs-attr`},`v-model:checked-row-keys`),i(`=`),n(`span`,{class:`hljs-string`},`"checkedRowKeys"`),i(`
    `),n(`span`,{class:`hljs-attr`},`:columns`),i(`=`),n(`span`,{class:`hljs-string`},`"columns"`),i(`
    `),n(`span`,{class:`hljs-attr`},`:data`),i(`=`),n(`span`,{class:`hljs-string`},`"data"`),i(`
    `),n(`span`,{class:`hljs-attr`},`:pagination`),i(`=`),n(`span`,{class:`hljs-string`},`"false"`),i(`
    `),n(`span`,{class:`hljs-attr`},`:cascade`),i(`=`),n(`span`,{class:`hljs-string`},`"false"`),i(`
    `),n(`span`,{class:`hljs-attr`},`tree`),i(`
  />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,H,[n(`h3`,re,[r(Q,{to:`#TreeSingleSelection`},{default:e(()=>[...o[52]||=[i(`#`,-1)]]),_:1}),o[53]||=i(`Tree Single Selection`,-1)]),r($,null,{default:e(()=>[...o[54]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` checkedRowKeys = ref([`),n(`span`,{class:`hljs-number`},`21`),i(`])

`),n(`span`,{class:`hljs-keyword`},`const`),i(` columns = ref([
  { `),n(`span`,{class:`hljs-attr`},`type`),i(`: `),n(`span`,{class:`hljs-string`},`'selection'`),i(`, `),n(`span`,{class:`hljs-attr`},`multiple`),i(`: `),n(`span`,{class:`hljs-literal`},`false`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'name'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Name'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'role'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Role'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'status'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Status'`),i(` },
])

`),n(`span`,{class:`hljs-keyword`},`const`),i(` data = ref([
  {
    `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`1`),i(`,
    `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Frontend'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Team'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`children`),i(`: [
      { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`11`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Ada'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Lead'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(` },
      { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`12`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Taylor'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Engineer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Busy'`),i(` },
    ],
  },
  {
    `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`2`),i(`,
    `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Design'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Team'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Offline'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`children`),i(`: [{ `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`21`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Linus'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Designer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Offline'`),i(` }],
  },
])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-data-table`),i(`
    `),n(`span`,{class:`hljs-attr`},`v-model:checked-row-keys`),i(`=`),n(`span`,{class:`hljs-string`},`"checkedRowKeys"`),i(`
    `),n(`span`,{class:`hljs-attr`},`:columns`),i(`=`),n(`span`,{class:`hljs-string`},`"columns"`),i(`
    `),n(`span`,{class:`hljs-attr`},`:data`),i(`=`),n(`span`,{class:`hljs-string`},`"data"`),i(`
    `),n(`span`,{class:`hljs-attr`},`:pagination`),i(`=`),n(`span`,{class:`hljs-string`},`"false"`),i(`
    `),n(`span`,{class:`hljs-attr`},`tree`),i(`
  />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,U,[n(`h3`,W,[r(Q,{to:`#Expand`},{default:e(()=>[...o[55]||=[i(`#`,-1)]]),_:1}),o[56]||=i(`Expand`,-1)]),r($,null,{default:e(()=>[...o[57]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { h, ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` columns = ref([
  {
    `),n(`span`,{class:`hljs-attr`},`type`),i(`: `),n(`span`,{class:`hljs-string`},`'expand'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`expandable`),i(`: `),n(`span`,{class:`hljs-function`},[i(`(`),n(`span`,{class:`hljs-params`},`{ row }`),i(`) =>`)]),i(` row.status !== `),n(`span`,{class:`hljs-string`},`'Busy'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`renderExpand`),i(`: `),n(`span`,{class:`hljs-function`},[i(`(`),n(`span`,{class:`hljs-params`},`{ row }`),i(`) =>`)]),i(` h(`),n(`span`,{class:`hljs-string`},`'div'`),i(`, { `),n(`span`,{class:`hljs-attr`},`style`),i(`: { `),n(`span`,{class:`hljs-attr`},`padding`),i(`: `),n(`span`,{class:`hljs-string`},`'4px 0'`),i(` } }, `),n(`span`,{class:`hljs-string`},[i("`"),n(`span`,{class:`hljs-subst`},"${row.name}"),i(" Details`")]),i(`),
  },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'name'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Name'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'role'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Role'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'status'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Status'`),i(` },
])

`),n(`span`,{class:`hljs-keyword`},`const`),i(` data = ref([
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`1`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Ada'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Admin'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`2`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Linus'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Maintainer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Offline'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`3`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Taylor'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Designer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`4`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Evan'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Reviewer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Busy'`),i(` },
])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-data-table`),i(),n(`span`,{class:`hljs-attr`},`:columns`),i(`=`),n(`span`,{class:`hljs-string`},`"columns"`),i(),n(`span`,{class:`hljs-attr`},`:data`),i(`=`),n(`span`,{class:`hljs-string`},`"data"`),i(),n(`span`,{class:`hljs-attr`},`:pagination`),i(`=`),n(`span`,{class:`hljs-string`},`"false"`),i(` />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,G,[n(`h3`,K,[r(Q,{to:`#FixedHeader/Columns`},{default:e(()=>[...o[58]||=[i(`#`,-1)]]),_:1}),o[59]||=i(`Fixed Header / Columns`,-1)]),o[61]||=n(`p`,null,[i(`Fixed columns must be used with an explicit `),n(`code`,null,`width`),i(`.`)],-1),r($,null,{default:e(()=>[...o[60]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` columns = ref([
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'name'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Name'`),i(`, `),n(`span`,{class:`hljs-attr`},`fixed`),i(`: `),n(`span`,{class:`hljs-string`},`'left'`),i(`, `),n(`span`,{class:`hljs-attr`},`width`),i(`: `),n(`span`,{class:`hljs-number`},`104`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'role'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Role'`),i(`, `),n(`span`,{class:`hljs-attr`},`width`),i(`: `),n(`span`,{class:`hljs-number`},`126`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'department'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Dept'`),i(`, `),n(`span`,{class:`hljs-attr`},`width`),i(`: `),n(`span`,{class:`hljs-number`},`120`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'location'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'City'`),i(`, `),n(`span`,{class:`hljs-attr`},`width`),i(`: `),n(`span`,{class:`hljs-number`},`120`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'status'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Status'`),i(`, `),n(`span`,{class:`hljs-attr`},`fixed`),i(`: `),n(`span`,{class:`hljs-string`},`'right'`),i(`, `),n(`span`,{class:`hljs-attr`},`width`),i(`: `),n(`span`,{class:`hljs-number`},`96`),i(` },
])

`),n(`span`,{class:`hljs-keyword`},`const`),i(` data = ref(
  `),n(`span`,{class:`hljs-built_in`},`Array`),i(`.from({ `),n(`span`,{class:`hljs-attr`},`length`),i(`: `),n(`span`,{class:`hljs-number`},`24`),i(` }, `),n(`span`,{class:`hljs-function`},[i(`(`),n(`span`,{class:`hljs-params`},`_, index`),i(`) =>`)]),i(` ({
    `),n(`span`,{class:`hljs-attr`},`id`),i(`: index + `),n(`span`,{class:`hljs-number`},`1`),i(`,
    `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},[i("`User "),n(`span`,{class:`hljs-subst`},[i("${index + "),n(`span`,{class:`hljs-number`},`1`),i(`}`)]),i("`")]),i(`,
    `),n(`span`,{class:`hljs-attr`},`role`),i(`: index % `),n(`span`,{class:`hljs-number`},`2`),i(` === `),n(`span`,{class:`hljs-number`},`0`),i(` ? `),n(`span`,{class:`hljs-string`},`'FE Lead'`),i(` : `),n(`span`,{class:`hljs-string`},`'Platform'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`department`),i(`: index % `),n(`span`,{class:`hljs-number`},`2`),i(` === `),n(`span`,{class:`hljs-number`},`0`),i(` ? `),n(`span`,{class:`hljs-string`},`'Exp'`),i(` : `),n(`span`,{class:`hljs-string`},`'Infra'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`location`),i(`: [`),n(`span`,{class:`hljs-string`},`'HZ'`),i(`, `),n(`span`,{class:`hljs-string`},`'SH'`),i(`, `),n(`span`,{class:`hljs-string`},`'SZ'`),i(`][index % `),n(`span`,{class:`hljs-number`},`3`),i(`],
    `),n(`span`,{class:`hljs-attr`},`status`),i(`: index % `),n(`span`,{class:`hljs-number`},`3`),i(` === `),n(`span`,{class:`hljs-number`},`0`),i(` ? `),n(`span`,{class:`hljs-string`},`'Online'`),i(` : index % `),n(`span`,{class:`hljs-number`},`3`),i(` === `),n(`span`,{class:`hljs-number`},`1`),i(` ? `),n(`span`,{class:`hljs-string`},`'Offline'`),i(` : `),n(`span`,{class:`hljs-string`},`'Busy'`),i(`,
  })),
)
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-data-table`),i(`
    `),n(`span`,{class:`hljs-attr`},`:columns`),i(`=`),n(`span`,{class:`hljs-string`},`"columns"`),i(`
    `),n(`span`,{class:`hljs-attr`},`:data`),i(`=`),n(`span`,{class:`hljs-string`},`"data"`),i(`
    `),n(`span`,{class:`hljs-attr`},`:pagination`),i(`=`),n(`span`,{class:`hljs-string`},`"false"`),i(`
    `),n(`span`,{class:`hljs-attr`},`:max-height`),i(`=`),n(`span`,{class:`hljs-string`},`"320"`),i(`
    `),n(`span`,{class:`hljs-attr`},`:scroll-x`),i(`=`),n(`span`,{class:`hljs-string`},`"566"`),i(`
  />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,q,[n(`h3`,J,[r(Q,{to:`#ResizableColumns`},{default:e(()=>[...o[62]||=[i(`#`,-1)]]),_:1}),o[63]||=i(`Resizable Columns`,-1)]),r($,null,{default:e(()=>[...o[64]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` columns = ref([
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'name'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Name'`),i(`, `),n(`span`,{class:`hljs-attr`},`width`),i(`: `),n(`span`,{class:`hljs-number`},`180`),i(`, `),n(`span`,{class:`hljs-attr`},`minWidth`),i(`: `),n(`span`,{class:`hljs-number`},`120`),i(`, `),n(`span`,{class:`hljs-attr`},`maxWidth`),i(`: `),n(`span`,{class:`hljs-number`},`260`),i(`, `),n(`span`,{class:`hljs-attr`},`resizable`),i(`: `),n(`span`,{class:`hljs-literal`},`true`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'role'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Role'`),i(`, `),n(`span`,{class:`hljs-attr`},`width`),i(`: `),n(`span`,{class:`hljs-number`},`220`),i(`, `),n(`span`,{class:`hljs-attr`},`minWidth`),i(`: `),n(`span`,{class:`hljs-number`},`160`),i(`, `),n(`span`,{class:`hljs-attr`},`resizable`),i(`: `),n(`span`,{class:`hljs-literal`},`true`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'status'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Status'`),i(`, `),n(`span`,{class:`hljs-attr`},`width`),i(`: `),n(`span`,{class:`hljs-number`},`140`),i(`, `),n(`span`,{class:`hljs-attr`},`maxWidth`),i(`: `),n(`span`,{class:`hljs-number`},`180`),i(`, `),n(`span`,{class:`hljs-attr`},`resizable`),i(`: `),n(`span`,{class:`hljs-literal`},`true`),i(` },
])

`),n(`span`,{class:`hljs-keyword`},`const`),i(` data = ref([
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`1`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Ada'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Admin'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`2`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Linus'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Maintainer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Offline'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`3`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Taylor'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Designer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`4`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Evan'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Reviewer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Busy'`),i(` },
])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-data-table`),i(),n(`span`,{class:`hljs-attr`},`:columns`),i(`=`),n(`span`,{class:`hljs-string`},`"columns"`),i(),n(`span`,{class:`hljs-attr`},`:data`),i(`=`),n(`span`,{class:`hljs-string`},`"data"`),i(),n(`span`,{class:`hljs-attr`},`:pagination`),i(`=`),n(`span`,{class:`hljs-string`},`"false"`),i(),n(`span`,{class:`hljs-attr`},`:scroll-x`),i(`=`),n(`span`,{class:`hljs-string`},`"540"`),i(` />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,Y,[n(`h3`,X,[r(Q,{to:`#CustomEmptyContent`},{default:e(()=>[...o[65]||=[i(`#`,-1)]]),_:1}),o[66]||=i(`Custom Empty Content`,-1)]),r($,null,{default:e(()=>[...o[67]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` columns = ref([
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'name'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Name'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'role'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Role'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'status'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Status'`),i(` },
])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-data-table`),i(),n(`span`,{class:`hljs-attr`},`:columns`),i(`=`),n(`span`,{class:`hljs-string`},`"columns"`),i(),n(`span`,{class:`hljs-attr`},`:data`),i(`=`),n(`span`,{class:`hljs-string`},`"[]"`),i(),n(`span`,{class:`hljs-attr`},`:pagination`),i(`=`),n(`span`,{class:`hljs-string`},`"false"`),i(`>`)]),i(`
    `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(` #`),n(`span`,{class:`hljs-attr`},`empty`),i(`>`)]),i(`
      `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`div`),i(),n(`span`,{class:`hljs-attr`},`class`),i(`=`),n(`span`,{class:`hljs-string`},`"custom-empty"`),i(`>`)]),i(`
        `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-icon`),i(),n(`span`,{class:`hljs-attr`},`name`),i(`=`),n(`span`,{class:`hljs-string`},`"information"`),i(),n(`span`,{class:`hljs-attr`},`:size`),i(`=`),n(`span`,{class:`hljs-string`},`"24"`),i(` />`)]),i(`
        `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`span`),i(`>`)]),i(`No matching data`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`span`),i(`>`)]),i(`
      `),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`div`),i(`>`)]),i(`
    `),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`var-data-table`),i(`>`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`style`),i(),n(`span`,{class:`hljs-attr`},`scoped`),i(`>`)]),n(`span`,{class:`css`},[i(`
`),n(`span`,{class:`hljs-selector-class`},`.custom-empty`),i(` {
  `),n(`span`,{class:`hljs-attribute`},`display`),i(`: inline-flex;
  `),n(`span`,{class:`hljs-attribute`},`align-items`),i(`: center;
  gap: `),n(`span`,{class:`hljs-number`},`8px`),i(`;
  `),n(`span`,{class:`hljs-attribute`},`color`),i(`: `),n(`span`,{class:`hljs-built_in`},`var`),i(`(--color-text-secondary);
}
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`style`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,ie,[n(`h3`,ae,[r(Q,{to:`#Loading`},{default:e(()=>[...o[68]||=[i(`#`,-1)]]),_:1}),o[69]||=i(`Loading`,-1)]),r($,null,{default:e(()=>[...o[70]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` columns = ref([
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'name'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Name'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'role'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Role'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'status'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Status'`),i(` },
])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-data-table`),i(),n(`span`,{class:`hljs-attr`},`:columns`),i(`=`),n(`span`,{class:`hljs-string`},`"columns"`),i(),n(`span`,{class:`hljs-attr`},`:data`),i(`=`),n(`span`,{class:`hljs-string`},`"[]"`),i(),n(`span`,{class:`hljs-attr`},`loading`),i(` />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,oe,[n(`h3`,se,[r(Q,{to:`#Sizes`},{default:e(()=>[...o[71]||=[i(`#`,-1)]]),_:1}),o[72]||=i(`Sizes`,-1)]),r($,null,{default:e(()=>[...o[73]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` columns = ref([
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'name'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Name'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'role'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Role'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'status'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Status'`),i(` },
])

`),n(`span`,{class:`hljs-keyword`},`const`),i(` data = ref([
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`1`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Ada'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Admin'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`2`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Linus'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Maintainer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Offline'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`3`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Taylor'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Designer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`4`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Evan'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Reviewer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Busy'`),i(` },
])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-data-table`),i(),n(`span`,{class:`hljs-attr`},`:columns`),i(`=`),n(`span`,{class:`hljs-string`},`"columns"`),i(),n(`span`,{class:`hljs-attr`},`:data`),i(`=`),n(`span`,{class:`hljs-string`},`"data"`),i(),n(`span`,{class:`hljs-attr`},`size`),i(`=`),n(`span`,{class:`hljs-string`},`"small"`),i(` />`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-data-table`),i(),n(`span`,{class:`hljs-attr`},`:columns`),i(`=`),n(`span`,{class:`hljs-string`},`"columns"`),i(),n(`span`,{class:`hljs-attr`},`:data`),i(`=`),n(`span`,{class:`hljs-string`},`"data"`),i(),n(`span`,{class:`hljs-attr`},`size`),i(`=`),n(`span`,{class:`hljs-string`},`"normal"`),i(` />`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-data-table`),i(),n(`span`,{class:`hljs-attr`},`:columns`),i(`=`),n(`span`,{class:`hljs-string`},`"columns"`),i(),n(`span`,{class:`hljs-attr`},`:data`),i(`=`),n(`span`,{class:`hljs-string`},`"data"`),i(),n(`span`,{class:`hljs-attr`},`size`),i(`=`),n(`span`,{class:`hljs-string`},`"large"`),i(` />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,ce,[n(`h3`,le,[r(Q,{to:`#SubtleBackground`},{default:e(()=>[...o[74]||=[i(`#`,-1)]]),_:1}),o[75]||=i(`Subtle Background`,-1)]),r($,null,{default:e(()=>[...o[76]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` columns = ref([
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'name'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Name'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'role'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Role'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'status'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Status'`),i(` },
])

`),n(`span`,{class:`hljs-keyword`},`const`),i(` data = ref(
  `),n(`span`,{class:`hljs-built_in`},`Array`),i(`.from({ `),n(`span`,{class:`hljs-attr`},`length`),i(`: `),n(`span`,{class:`hljs-number`},`48`),i(` }, `),n(`span`,{class:`hljs-function`},[i(`(`),n(`span`,{class:`hljs-params`},`_, index`),i(`) =>`)]),i(` ({
    `),n(`span`,{class:`hljs-attr`},`id`),i(`: index + `),n(`span`,{class:`hljs-number`},`1`),i(`,
    `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},[i("`User "),n(`span`,{class:`hljs-subst`},[i("${index + "),n(`span`,{class:`hljs-number`},`1`),i(`}`)]),i("`")]),i(`,
    `),n(`span`,{class:`hljs-attr`},`role`),i(`: index % `),n(`span`,{class:`hljs-number`},`2`),i(` === `),n(`span`,{class:`hljs-number`},`0`),i(` ? `),n(`span`,{class:`hljs-string`},`'Engineer'`),i(` : `),n(`span`,{class:`hljs-string`},`'Operator'`),i(`,
    `),n(`span`,{class:`hljs-attr`},`status`),i(`: index % `),n(`span`,{class:`hljs-number`},`3`),i(` === `),n(`span`,{class:`hljs-number`},`0`),i(` ? `),n(`span`,{class:`hljs-string`},`'Online'`),i(` : `),n(`span`,{class:`hljs-string`},`'Offline'`),i(`,
  })),
)
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-data-table`),i(),n(`span`,{class:`hljs-attr`},`:columns`),i(`=`),n(`span`,{class:`hljs-string`},`"columns"`),i(),n(`span`,{class:`hljs-attr`},`:data`),i(`=`),n(`span`,{class:`hljs-string`},`"data"`),i(),n(`span`,{class:`hljs-attr`},`surface`),i(`=`),n(`span`,{class:`hljs-string`},`"low"`),i(` />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,ue,[n(`h3`,de,[r(Q,{to:`#PlainTable`},{default:e(()=>[...o[77]||=[i(`#`,-1)]]),_:1}),o[78]||=i(`Plain Table`,-1)]),r($,null,{default:e(()=>[...o[79]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` columns = ref([
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'name'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Name'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'role'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Role'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'status'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Status'`),i(` },
])

`),n(`span`,{class:`hljs-keyword`},`const`),i(` data = ref([
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`1`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Ada'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Admin'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`2`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Linus'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Maintainer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Offline'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`3`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Taylor'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Designer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`4`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Evan'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Reviewer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Busy'`),i(` },
])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-data-table`),i(),n(`span`,{class:`hljs-attr`},`:columns`),i(`=`),n(`span`,{class:`hljs-string`},`"columns"`),i(),n(`span`,{class:`hljs-attr`},`:data`),i(`=`),n(`span`,{class:`hljs-string`},`"data"`),i(),n(`span`,{class:`hljs-attr`},`plain`),i(` />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),n(`div`,fe,[n(`h3`,pe,[r(Q,{to:`#Plain+Bordered`},{default:e(()=>[...o[80]||=[i(`#`,-1)]]),_:1}),o[81]||=i(`Plain + Bordered`,-1)]),r($,null,{default:e(()=>[...o[82]||=[n(`pre`,{class:`hljs`},[n(`code`,null,[n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`script`),i(),n(`span`,{class:`hljs-attr`},`setup`),i(`>`)]),n(`span`,{class:`javascript`},[i(`
`),n(`span`,{class:`hljs-keyword`},`import`),i(` { ref } `),n(`span`,{class:`hljs-keyword`},`from`),i(),n(`span`,{class:`hljs-string`},`'vue'`),i(`

`),n(`span`,{class:`hljs-keyword`},`const`),i(` columns = ref([
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'name'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Name'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'role'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Role'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`key`),i(`: `),n(`span`,{class:`hljs-string`},`'status'`),i(`, `),n(`span`,{class:`hljs-attr`},`title`),i(`: `),n(`span`,{class:`hljs-string`},`'Status'`),i(` },
])

`),n(`span`,{class:`hljs-keyword`},`const`),i(` data = ref([
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`1`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Ada'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Admin'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`2`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Linus'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Maintainer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Offline'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`3`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Taylor'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Designer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Online'`),i(` },
  { `),n(`span`,{class:`hljs-attr`},`id`),i(`: `),n(`span`,{class:`hljs-number`},`4`),i(`, `),n(`span`,{class:`hljs-attr`},`name`),i(`: `),n(`span`,{class:`hljs-string`},`'Evan'`),i(`, `),n(`span`,{class:`hljs-attr`},`role`),i(`: `),n(`span`,{class:`hljs-string`},`'Reviewer'`),i(`, `),n(`span`,{class:`hljs-attr`},`status`),i(`: `),n(`span`,{class:`hljs-string`},`'Busy'`),i(` },
])
`)]),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`script`),i(`>`)]),i(`

`),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
  `),n(`span`,{class:`hljs-tag`},[i(`<`),n(`span`,{class:`hljs-name`},`var-data-table`),i(),n(`span`,{class:`hljs-attr`},`:columns`),i(`=`),n(`span`,{class:`hljs-string`},`"columns"`),i(),n(`span`,{class:`hljs-attr`},`:data`),i(`=`),n(`span`,{class:`hljs-string`},`"data"`),i(),n(`span`,{class:`hljs-attr`},`plain`),i(),n(`span`,{class:`hljs-attr`},`bordered`),i(` />`)]),i(`
`),n(`span`,{class:`hljs-tag`},[i(`</`),n(`span`,{class:`hljs-name`},`template`),i(`>`)]),i(`
`)])],-1)]]),_:1})]),o[93]||=n(`h2`,null,`API`,-1),n(`div`,me,[n(`h3`,he,[r(Q,{to:`#Props`},{default:e(()=>[...o[83]||=[i(`#`,-1)]]),_:1}),o[84]||=i(`Props`,-1)]),o[85]||=a(`<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>data</code></td><td>Data source. Full data in local mode, current page data in remote mode</td><td><em>any[]</em></td><td><code>[]</code></td></tr><tr><td><code>columns</code></td><td>Column definitions</td><td><em>DataTableColumn[]</em></td><td><code>[]</code></td></tr><tr><td><code>row-key</code></td><td>Row key field or getter. Selection, detail expansion, and tree expansion rely on stable unique row keys; configure it explicitly when rows do not have <code>id</code></td><td><em>string | number | ((context: { row, rowIndex }) =&gt; string | number)</em></td><td><code>&#39;id&#39;</code></td></tr><tr><td><code>row-props</code></td><td>Custom row props, supports object or function</td><td><em>object | (context) =&gt; object</em></td><td><code>-</code></td></tr><tr><td><code>row-class</code></td><td>Custom row class, supports string, array, object, or function</td><td><em>string | array | object | (context) =&gt; string | array | object</em></td><td><code>-</code></td></tr><tr><td><code>summary</code></td><td>Summary row render function. Return an array to render multiple summary rows</td><td><em>(context) =&gt; Record&lt;string, DataTableSummaryCell&gt; | Array&lt;Record&lt;string, DataTableSummaryCell&gt;&gt;</em></td><td><code>-</code></td></tr><tr><td><code>loading</code></td><td>Whether to show loading overlay</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>pagination</code></td><td>Built-in pagination config</td><td><em>boolean | DataTablePagination</em></td><td><code>true</code></td></tr><tr><td><code>remote</code></td><td>Whether to enable remote pagination mode</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>v-model:page</code></td><td>Current page</td><td><em>number</em></td><td><code>1</code></td></tr><tr><td><code>v-model:page-size</code></td><td>Current page size</td><td><em>number</em></td><td><code>10</code></td></tr><tr><td><code>v-model:checked-row-keys</code></td><td>Selected row keys</td><td><em>Array&lt;string | number&gt;</em></td><td><code>[]</code></td></tr><tr><td><code>v-model:expanded-row-keys</code></td><td>Expanded detail row keys for <code>type: &#39;expand&#39;</code> columns</td><td><em>Array&lt;string | number&gt;</em></td><td><code>[]</code></td></tr><tr><td><code>v-model:expanded-tree-row-keys</code></td><td>Expanded tree row keys for <code>tree</code> mode</td><td><em>Array&lt;string | number&gt;</em></td><td><code>[]</code></td></tr><tr><td><code>total</code></td><td>Total item count in remote mode</td><td><em>number</em></td><td><code>-</code></td></tr><tr><td><code>max-height</code></td><td>Max height of the table body. When set, the header stays fixed and the body scrolls internally</td><td><em>number | string</em></td><td><code>-</code></td></tr><tr><td><code>scroll-x</code></td><td>Minimum table width used to enable horizontal scrolling. The table still fills its container when the container is wider</td><td><em>number | string</em></td><td><code>-</code></td></tr><tr><td><code>v-model:sorters</code></td><td>Controlled sorter states</td><td><em>DataTableSorter[]</em></td><td><code>[]</code></td></tr><tr><td><code>sort-mode</code></td><td>Sorter mode</td><td><em>&#39;single&#39; | &#39;multiple&#39;</em></td><td><code>&#39;single&#39;</code></td></tr><tr><td><code>plain</code></td><td>Whether to render as a plain table without card shadow, background, or radius</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>bordered</code></td><td>Whether to show outer border</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>table-layout</code></td><td>Native <code>table-layout</code> value</td><td><em>&#39;auto&#39; | &#39;fixed&#39;</em></td><td><code>&#39;auto&#39;</code></td></tr><tr><td><code>tree</code></td><td>Whether to explicitly enable tree data mode</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>cascade</code></td><td>Whether tree selection should cascade</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>children-key</code></td><td>Child node field name for tree rows</td><td><em>string</em></td><td><code>&#39;children&#39;</code></td></tr><tr><td><code>elevation</code></td><td>Elevation level</td><td><em>boolean | number | string</em></td><td><code>true</code></td></tr><tr><td><code>surface</code></td><td>Subtle background style</td><td><em>&#39;low&#39;</em></td><td><code>-</code></td></tr><tr><td><code>cell-bordered</code></td><td>Whether to show cell dividers</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>size</code></td><td>Table size</td><td><em>&#39;small&#39; | &#39;normal&#39; | &#39;large&#39;</em></td><td><code>&#39;normal&#39;</code></td></tr></tbody></table><h4>DataTableColumn</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>type</code></td><td>Column type. Supports <code>selection</code> and <code>expand</code></td><td><em>&#39;selection&#39; | &#39;expand&#39;</em></td><td><code>-</code></td></tr><tr><td><code>key</code></td><td>Unique column key</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>Column title. Supports render function. Has no effect on <code>selection</code> and <code>expand</code> columns</td><td><em>VNodeChild | () =&gt; VNodeChild</em></td><td><code>-</code></td></tr><tr><td><code>children</code></td><td>Child columns used to render a grouped header</td><td><em>DataTableColumn[]</em></td><td><code>-</code></td></tr><tr><td><code>sorter</code></td><td>Whether the field column shows sorter interaction</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>multiple</code></td><td>Whether the selection column allows multiple rows</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>selectable</code></td><td>Whether selection is enabled. Supports <code>boolean</code> or <code>(context) =&gt; boolean</code></td><td><em>boolean | (context) =&gt; boolean</em></td><td><code>true</code></td></tr><tr><td><code>expandable</code></td><td>Whether users can expand the row through the built-in expand button. Only works on expand columns; controlled <code>expanded-row-keys</code> takes precedence</td><td><em>(context) =&gt; boolean</em></td><td><code>-</code></td></tr><tr><td><code>renderExpand</code></td><td>Custom expanded content. Only works on expand columns</td><td><em>(context) =&gt; VNodeChild</em></td><td><code>-</code></td></tr><tr><td><code>resizable</code></td><td>Whether the column width can be resized by dragging</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>fixed</code></td><td>Fixed column position. Must be used with <code>width</code></td><td><em>&#39;left&#39; | &#39;right&#39;</em></td><td><code>-</code></td></tr><tr><td><code>width</code></td><td>Column width</td><td><em>number | string</em></td><td><code>-</code></td></tr><tr><td><code>minWidth</code></td><td>Column min width</td><td><em>number | string</em></td><td><code>-</code></td></tr><tr><td><code>maxWidth</code></td><td>Column max width. Also used as the upper resize limit when <code>resizable</code> is enabled</td><td><em>number | string</em></td><td><code>-</code></td></tr><tr><td><code>align</code></td><td>Body cell align</td><td><em>&#39;left&#39; | &#39;center&#39; | &#39;right&#39;</em></td><td><code>&#39;left&#39;</code></td></tr><tr><td><code>titleAlign</code></td><td>Header title align</td><td><em>&#39;left&#39; | &#39;center&#39; | &#39;right&#39;</em></td><td><code>align</code></td></tr><tr><td><code>titleColSpan</code></td><td>Header col span. Set to <code>0</code> to hide the current header cell</td><td><em>number</em></td><td><code>1</code></td></tr><tr><td><code>colSpan</code></td><td>Body cell col span. Supports a number or function. Return <code>0</code> to hide the current cell</td><td><em>number | (context) =&gt; number</em></td><td><code>1</code></td></tr><tr><td><code>rowSpan</code></td><td>Body cell row span. Supports a number or function. Return <code>0</code> to hide the current cell</td><td><em>number | (context) =&gt; number</em></td><td><code>1</code></td></tr><tr><td><code>cellProps</code></td><td>Custom cell props, supports object or function</td><td><em>object | (context) =&gt; object</em></td><td><code>-</code></td></tr><tr><td><code>render</code></td><td>Custom cell render</td><td><em>(context) =&gt; VNodeChild</em></td><td><code>-</code></td></tr></tbody></table><h4>DataTablePagination</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>simple</code></td><td>Whether to use simple pagination</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable pagination</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>showSizeChanger</code></td><td>Whether to show page size changer</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>showQuickJumper</code></td><td>Whether to show quick jumper</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>maxPagerCount</code></td><td>Max pager count</td><td><em>number</em></td><td><code>5</code></td></tr><tr><td><code>sizeOption</code></td><td>Page size options</td><td><em>number[]</em></td><td><code>[10, 20, 50, 100]</code></td></tr><tr><td><code>showTotal</code></td><td>Total text renderer</td><td><em>(total: number, range: [number, number]) =&gt; string</em></td><td><code>-</code></td></tr></tbody></table><h4>DataTableSummaryCell</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>value</code></td><td>Cell content</td><td><em>VNodeChild</em></td><td><code>-</code></td></tr><tr><td><code>colSpan</code></td><td>Cell col span</td><td><em>number</em></td><td><code>1</code></td></tr><tr><td><code>rowSpan</code></td><td>Cell row span</td><td><em>number</em></td><td><code>1</code></td></tr></tbody></table><h4>DataTableSorter</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>key</code></td><td>Target column key</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>order</code></td><td>Sort order</td><td><em>&#39;asc&#39; | &#39;desc&#39;</em></td><td><code>-</code></td></tr></tbody></table>`,9)]),n(`div`,Z,[n(`h3`,ge,[r(Q,{to:`#Slots`},{default:e(()=>[...o[86]||=[i(`#`,-1)]]),_:1}),o[87]||=i(`Slots`,-1)]),o[88]||=a(`<table><thead><tr><th>Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td><code>empty</code></td><td>Custom empty content</td><td><code>-</code></td></tr><tr><td><code>loading-description</code></td><td>Custom loading description</td><td><code>-</code></td></tr><tr><td><code>footer-prefix</code></td><td>Content before pagination</td><td><code>-</code></td></tr></tbody></table>`,1)]),n(`div`,_e,[n(`h3`,ve,[r(Q,{to:`#StyleVariables`},{default:e(()=>[...o[89]||=[i(`#`,-1)]]),_:1}),o[90]||=i(`Style Variables`,-1)]),o[91]||=a(`<table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--data-table-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--data-table-header-cell-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--data-table-surface-low-background</code></td><td><code>var(--color-surface-container-highest)</code></td></tr><tr><td><code>--data-table-header-cell-text-color</code></td><td><code>rgba(0, 0, 0, 0.6)</code></td></tr><tr><td><code>--data-table-body-cell-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--data-table-border-color</code></td><td><code>var(--color-outline)</code></td></tr><tr><td><code>--data-table-row-hover-background</code></td><td><code>#f5f5f5</code></td></tr><tr><td><code>--data-table-surface-low-row-hover-background</code></td><td><code>var(--color-surface-container-highest)</code></td></tr><tr><td><code>--data-table-plain-row-hover-background</code></td><td><code>hsla(var(--hsl-on-surface), 0.04)</code></td></tr><tr><td><code>--data-table-sort-trigger-color</code></td><td><code>hsla(var(--hsl-on-surface), 0.42)</code></td></tr><tr><td><code>--data-table-sort-trigger-active-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--data-table-sort-trigger-hover-background</code></td><td><code>hsla(var(--hsl-primary), 0.08)</code></td></tr><tr><td><code>--data-table-empty-text-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--data-table-resize-trigger-color</code></td><td><code>hsla(var(--hsl-on-surface-variant), 0.36)</code></td></tr><tr><td><code>--data-table-fixed-shadow-color</code></td><td><code>rgba(0, 0, 0, 0.04)</code></td></tr><tr><td><code>--data-table-border-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--data-table-cell-normal-padding</code></td><td><code>8px 16px</code></td></tr><tr><td><code>--data-table-cell-small-padding</code></td><td><code>4px 16px</code></td></tr><tr><td><code>--data-table-cell-large-padding</code></td><td><code>11px 16px</code></td></tr><tr><td><code>--data-table-selection-cell-normal-padding</code></td><td><code>8px 8px</code></td></tr><tr><td><code>--data-table-selection-cell-small-padding</code></td><td><code>4px 8px</code></td></tr><tr><td><code>--data-table-selection-cell-large-padding</code></td><td><code>11px 8px</code></td></tr><tr><td><code>--data-table-expand-cell-normal-padding</code></td><td><code>8px 8px</code></td></tr><tr><td><code>--data-table-expand-cell-small-padding</code></td><td><code>4px 8px</code></td></tr><tr><td><code>--data-table-expand-cell-large-padding</code></td><td><code>11px 8px</code></td></tr><tr><td><code>--data-table-cell-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--data-table-header-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--data-table-header-font-weight</code></td><td><code>500</code></td></tr><tr><td><code>--data-table-row-height</code></td><td><code>46px</code></td></tr><tr><td><code>--data-table-row-small-height</code></td><td><code>40px</code></td></tr><tr><td><code>--data-table-row-large-height</code></td><td><code>52px</code></td></tr><tr><td><code>--data-table-footer-padding</code></td><td><code>12px 16px</code></td></tr><tr><td><code>--data-table-empty-padding</code></td><td><code>48px 16px</code></td></tr></tbody></table>`,1)])])}var be=ne(o,[[`render`,ye]]);export{be as default};