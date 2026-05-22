<script setup>
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { times } from '@varlet/shared'
import { computed, h, ref, watch } from 'vue'
import { use as useVarletLocale } from '../../locale'
import { t, use } from './locale'

watchLang((lang) => {
  use(lang)
  useVarletLocale(lang)
})
onThemeChange()

const columns = [
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
  { key: 'status', title: 'Status' },
]

const data = [
  { id: 1, name: 'Ada', role: 'Admin', status: 'Online' },
  { id: 2, name: 'Linus', role: 'Maintainer', status: 'Offline' },
  { id: 3, name: 'Taylor', role: 'Designer', status: 'Online' },
  { id: 4, name: 'Evan', role: 'Reviewer', status: 'Busy' },
]

const renderStatus = ({ row }) =>
  h(
    'span',
    {
      style: {
        color: row.status === 'Online' ? 'var(--color-success)' : 'var(--color-text-disabled)',
      },
    },
    row.status,
  )

const renderColumns = [
  { key: 'name', title: 'Name' },
  { key: 'status', title: 'Status', render: renderStatus },
]
const surfaceColumns = [
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
  { key: 'status', title: 'Status' },
]

const spanColumns = [
  {
    key: 'name',
    title: 'Identity',
    titleColSpan: 2,
    rowSpan: ({ rowIndex }) => (rowIndex === 0 ? 2 : 1),
  },
  {
    key: 'role',
    title: 'Role',
    colSpan: ({ rowIndex }) => (rowIndex === 0 ? 2 : 1),
  },
  { key: 'status', title: 'Status' },
]

const spanData = [
  { id: 1, name: 'Ada', role: 'Admin', status: 'Online' },
  { id: 2, name: 'Linus', role: 'Maintainer', status: 'Offline' },
]

const scrollColumns = [
  { key: 'name', title: 'Name', fixed: 'left', width: 104 },
  { key: 'role', title: 'Role', width: 126 },
  { key: 'department', title: 'Dept', width: 120 },
  { key: 'location', title: 'City', width: 120 },
  { key: 'status', title: 'Status', fixed: 'right', width: 96 },
]

const scrollData = [
  {
    id: 1,
    name: 'Ada',
    role: 'FE Lead',
    department: 'Exp',
    location: 'HZ',
    status: 'Online',
  },
  {
    id: 2,
    name: 'Linus',
    role: 'Platform',
    department: 'Infra',
    location: 'SH',
    status: 'Offline',
  },
  {
    id: 3,
    name: 'Taylor',
    role: 'Designer',
    department: 'Design',
    location: 'SZ',
    status: 'Busy',
  },
]

const resizableColumns = [
  { key: 'name', title: 'Name', width: 180, minWidth: 120, maxWidth: 260, resizable: true },
  { key: 'role', title: 'Role', width: 220, minWidth: 160, resizable: true },
  { key: 'status', title: 'Status', width: 140, maxWidth: 180, resizable: true },
]

const checkedRowKeys = ref([1, 3])
const singleCheckedRowKeys = ref([2])
const treeCheckedRowKeys = ref([1, 11, 12])
const treeNonCascadeCheckedRowKeys = ref([12])
const treeSingleCheckedRowKeys = ref([21])
const selectionColumns = [
  { type: 'selection' },
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
  { key: 'status', title: 'Status' },
]
const singleSelectionColumns = [
  { type: 'selection', multiple: false },
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
  { key: 'status', title: 'Status' },
]

function renderExpandContent({ row }) {
  return h('div', { style: { padding: '4px 0', display: 'grid', gap: '12px' } }, [
    h('div', { style: { fontSize: '14px', fontWeight: '600' } }, `${row.name} Details`),
    h('div', { style: { color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: '1.6' } }, [
      h('div', `Current Role: ${row.role}`),
      h('div', `Current Status: ${row.status}`),
      h('div', `Last Updated: 2026-05-21`),
    ]),
  ])
}

const expandColumns = [
  {
    type: 'expand',
    expandable: ({ row }) => row.status !== 'Busy',
    renderExpand: renderExpandContent,
  },
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
  { key: 'status', title: 'Status' },
]
const treeColumns = [
  { type: 'selection' },
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
  { key: 'status', title: 'Status' },
]
const treeSingleColumns = [
  { type: 'selection', multiple: false },
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
  { key: 'status', title: 'Status' },
]
const treeData = [
  {
    id: 1,
    name: 'Frontend',
    role: 'Team',
    status: 'Online',
    nodes: [
      { id: 11, name: 'Ada', role: 'Lead', status: 'Online' },
      { id: 12, name: 'Taylor', role: 'Engineer', status: 'Busy' },
    ],
  },
  {
    id: 2,
    name: 'Design',
    role: 'Team',
    status: 'Offline',
    nodes: [{ id: 21, name: 'Linus', role: 'Designer', status: 'Offline' }],
  },
]

const selectedRowNames = computed(() =>
  data
    .filter((row) => checkedRowKeys.value.includes(row.id))
    .map((row) => row.name)
    .join(', '),
)

const alignedColumns = [
  { key: 'name', title: 'Name', minWidth: 140 },
  { key: 'role', title: 'Role', titleAlign: 'center', align: 'center', width: 120 },
  { key: 'status', title: 'Status', titleAlign: 'right', align: 'right', width: 100 },
]

const getStatusCellProps = ({ row }) => ({
  style: {
    color: row.status === 'Online' ? 'var(--color-success)' : 'var(--color-warning)',
    fontWeight: '600',
  },
})

const cellPropsColumns = [
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
  { key: 'status', title: 'Status', cellProps: getStatusCellProps },
]

const customRowProps = ({ row, rowIndex }) => ({
  style: {
    backgroundColor: rowIndex === 0 ? 'hsla(var(--hsl-primary), 0.08)' : undefined,
  },
  title: row.name,
})

const pagerPagination = {
  simple: false,
  showSizeChanger: false,
  showQuickJumper: false,
  maxPagerCount: 2,
}

const defaultPagination = {
  showSizeChanger: false,
  showQuickJumper: false,
}

const localPage = ref(1)
const localPageSize = ref(10)

const manyRows = times(48, (index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  role: index % 2 === 0 ? 'Engineer' : 'Operator',
  status: index % 3 === 0 ? 'Online' : 'Offline',
}))

const compactPagedRows = times(12, (index) => ({
  id: index + 1,
  name: `Member ${index + 1}`,
  role: index % 2 === 0 ? 'Engineer' : 'Operator',
  status: index % 3 === 0 ? 'Online' : 'Offline',
}))

const remotePage = ref(1)
const remotePageSize = ref(10)
const remoteLoading = ref(false)
const remoteData = ref(manyRows.slice(0, remotePageSize.value))
let remoteTimer

watch(
  [remotePage, remotePageSize],
  ([page, pageSize]) => {
    remoteLoading.value = true

    if (remoteTimer) {
      clearTimeout(remoteTimer)
    }

    remoteTimer = setTimeout(() => {
      const start = (page - 1) * pageSize
      remoteData.value = manyRows.slice(start, start + pageSize)
      remoteLoading.value = false
    }, 400)
  },
  { immediate: true },
)
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-data-table :columns="columns" :data="data" />

  <app-type>{{ t('cellBordered') }}</app-type>
  <var-data-table :columns="columns" :data="data" cell-bordered />

  <app-type>{{ t('sizes') }}</app-type>
  <var-data-table :columns="columns" :data="data" size="small" />
  <div style="height: 12px"></div>
  <var-data-table :columns="columns" :data="data" size="large" />

  <app-type>{{ t('columnOptions') }}</app-type>
  <var-data-table :columns="alignedColumns" :data="data" />

  <app-type>{{ t('customProps') }}</app-type>
  <var-data-table :columns="cellPropsColumns" :data="data" :row-props="customRowProps" />

  <app-type>{{ t('customRender') }}</app-type>
  <var-data-table :columns="renderColumns" :data="data" />

  <app-type>{{ t('surfaceLow') }}</app-type>
  <var-data-table :columns="surfaceColumns" :data="data" surface="low" />

  <app-type>{{ t('flatTable') }}</app-type>
  <var-data-table :columns="columns" :data="data" :pagination="false" :elevation="0" />

  <app-type>{{ t('spans') }}</app-type>
  <var-data-table :columns="spanColumns" :data="spanData" :pagination="false" cell-bordered />

  <app-type>{{ t('selection') }}</app-type>
  <var-data-table v-model:checked-row-keys="checkedRowKeys" :columns="selectionColumns" :data="data" />
  <div style="margin-top: 8px; color: var(--color-text-secondary); font-size: 14px">
    {{ t('selectedRows') }}: {{ selectedRowNames || '-' }}
  </div>

  <app-type>{{ t('singleSelection') }}</app-type>
  <var-data-table v-model:checked-row-keys="singleCheckedRowKeys" :columns="singleSelectionColumns" :data="data" />

  <app-type>{{ t('tree') }}</app-type>
  <var-data-table
    v-model:checked-row-keys="treeCheckedRowKeys"
    :columns="treeColumns"
    :data="treeData"
    :pagination="false"
    tree
    children-key="nodes"
  />

  <app-type>{{ t('treeNonCascade') }}</app-type>
  <var-data-table
    v-model:checked-row-keys="treeNonCascadeCheckedRowKeys"
    :columns="treeColumns"
    :data="treeData"
    :pagination="false"
    :cascade="false"
    tree
    children-key="nodes"
  />

  <app-type>{{ t('treeSingleSelection') }}</app-type>
  <var-data-table
    v-model:checked-row-keys="treeSingleCheckedRowKeys"
    :columns="treeSingleColumns"
    :data="treeData"
    :pagination="false"
    tree
    children-key="nodes"
  />

  <app-type>{{ t('expand') }}</app-type>
  <var-data-table :columns="expandColumns" :data="data" :pagination="false" />

  <app-type>{{ t('pagerPagination') }}</app-type>
  <var-data-table :columns="columns" :data="compactPagedRows" :pagination="pagerPagination" />

  <app-type>{{ t('localPagination') }}</app-type>
  <var-data-table
    v-model:page="localPage"
    v-model:page-size="localPageSize"
    :columns="columns"
    :data="manyRows"
    :pagination="defaultPagination"
  />

  <app-type>{{ t('remotePagination') }}</app-type>
  <var-data-table
    v-model:page="remotePage"
    v-model:page-size="remotePageSize"
    :columns="columns"
    :data="remoteData"
    :loading="remoteLoading"
    :total="manyRows.length"
    :pagination="defaultPagination"
    remote
  />

  <app-type>{{ t('stickyHeader') }}</app-type>
  <var-data-table :columns="columns" :data="manyRows" :pagination="false" :max-height="320" />

  <app-type>{{ t('fixedColumns') }}</app-type>
  <var-data-table :columns="scrollColumns" :data="scrollData" :pagination="false" :scroll-x="566" />

  <app-type>{{ t('resizableColumns') }}</app-type>
  <var-data-table :columns="resizableColumns" :data="data" :pagination="false" :scroll-x="540" />

  <app-type>{{ t('emptyText') }}</app-type>
  <var-data-table :columns="columns" :data="[]" :pagination="false">
    <template #empty>{{ t('emptyTip') }}</template>
  </var-data-table>

  <app-type>{{ t('loading') }}</app-type>
  <var-data-table :columns="columns" :data="[]" loading />
</template>
