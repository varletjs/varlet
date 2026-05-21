<script setup>
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { computed, h, ref } from 'vue'
import { t, use } from './locale'

watchLang(use)
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

const checkedRowKeys = ref([1, 3])
const singleCheckedRowKeys = ref([2])
const treeCheckedRowKeys = ref([12])
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

const expandColumns = [
  {
    type: 'expand',
    expandable: ({ row }) => row.status !== 'Busy',
    renderExpand: ({ row }) =>
      h(
        'div',
        {
          style: {
            display: 'grid',
            gap: '4px',
          },
        },
        [h('strong', `${row.name}`), h('span', `Role: ${row.role}`), h('span', `Status: ${row.status}`)],
      ),
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

const manyRows = Array.from({ length: 48 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  role: index % 2 === 0 ? 'Engineer' : 'Operator',
  status: index % 3 === 0 ? 'Online' : 'Offline',
}))

const compactPagedRows = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  name: `Member ${index + 1}`,
  role: index % 2 === 0 ? 'Engineer' : 'Operator',
  status: index % 3 === 0 ? 'Online' : 'Offline',
}))

const remotePage = ref(1)
const remotePageSize = ref(10)

const remoteData = computed(() => {
  const start = (remotePage.value - 1) * remotePageSize.value
  return manyRows.slice(start, start + remotePageSize.value)
})
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

  <app-type>{{ t('expand') }}</app-type>
  <var-data-table :columns="expandColumns" :data="data" :pagination="false" />

  <app-type>{{ t('pagerPagination') }}</app-type>
  <var-data-table :columns="columns" :data="compactPagedRows" :pagination="pagerPagination" />

  <app-type>{{ t('localPagination') }}</app-type>
  <var-data-table :columns="columns" :data="manyRows" :pagination="defaultPagination" />

  <app-type>{{ t('remotePagination') }}</app-type>
  <var-data-table
    v-model:page="remotePage"
    v-model:page-size="remotePageSize"
    :columns="columns"
    :data="remoteData"
    :total="manyRows.length"
    :pagination="defaultPagination"
    remote
  />

  <app-type>{{ t('stickyHeader') }}</app-type>
  <var-data-table :columns="columns" :data="manyRows" :pagination="false" :max-height="320" />

  <app-type>{{ t('emptyText') }}</app-type>
  <var-data-table :columns="columns" :data="[]" :pagination="false">
    <template #empty>{{ t('emptyTip') }}</template>
  </var-data-table>

  <app-type>{{ t('loading') }}</app-type>
  <var-data-table :columns="columns" :data="[]" loading />
</template>
