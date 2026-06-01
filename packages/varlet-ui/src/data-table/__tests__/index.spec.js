import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vite-plus/test'
import { createApp, h } from 'vue'
import DataTable from '..'
import VarDataTable from '../DataTable'

test('data-table use', () => {
  const app = createApp({}).use(DataTable)
  expect(app.component(DataTable.name)).toBeTruthy()
})

const columns = [
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
]

const data = [
  { id: 1, name: 'Ada', role: 'Admin' },
  { id: 2, name: 'Linus', role: 'Maintainer' },
  { id: 3, name: 'Taylor', role: 'Designer' },
]

const treeData = [
  {
    id: 1,
    name: 'Frontend',
    role: 'Team',
    nodes: [
      { id: 11, name: 'Ada', role: 'Lead' },
      { id: 12, name: 'Taylor', role: 'Engineer' },
    ],
  },
  {
    id: 2,
    name: 'Design',
    role: 'Team',
    nodes: [{ id: 21, name: 'Linus', role: 'Designer' }],
  },
]

describe('test data-table component props', () => {
  test('should render basic table content', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns,
        data,
        pagination: false,
      },
    })

    expect(wrapper.findAll('thead th')).toHaveLength(2)
    expect(wrapper.findAll('tbody tr')).toHaveLength(3)
    expect(wrapper.text()).toContain('Ada')
    wrapper.unmount()
  })

  test('should slice data in local pagination mode', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns,
        data,
        page: 2,
        pageSize: 2,
      },
    })

    expect(wrapper.text()).not.toContain('Ada')
    expect(wrapper.text()).toContain('Taylor')
    wrapper.unmount()
  })

  test('should update local pagination internally when page is uncontrolled', async () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns,
        data,
        pageSize: 2,
      },
    })

    wrapper.findComponent({ name: 'var-pagination' }).vm.$emit('change', 2, 2)
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).not.toContain('Ada')
    expect(wrapper.text()).toContain('Taylor')
    wrapper.unmount()
  })

  test('should hide page size changer by default', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns,
        data,
      },
    })

    expect(wrapper.findComponent({ name: 'var-pagination' }).props('showSizeChanger')).toBe(false)
    wrapper.unmount()
  })

  test('should not slice data in remote pagination mode', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns,
        data: [data[2]],
        page: 2,
        pageSize: 2,
        total: 3,
        remote: true,
      },
    })

    expect(wrapper.findAll('tbody tr')).toHaveLength(1)
    expect(wrapper.text()).toContain('Taylor')
    wrapper.unmount()
  })

  test('should disable pagination while loading', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns,
        data,
        loading: true,
      },
    })

    expect(wrapper.findComponent({ name: 'var-pagination' }).props('disabled')).toBe(true)
    wrapper.unmount()
  })

  test('should support render function', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [
          {
            key: 'name',
            title: 'Name',
            render: ({ row }) => h('strong', row.name),
          },
        ],
        data: [data[0]],
        pagination: false,
      },
    })

    expect(wrapper.find('strong').text()).toBe('Ada')
    wrapper.unmount()
  })

  test('should support row class', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns,
        data,
        pagination: false,
        rowClass: ({ row }) => (row.id === 1 ? 'active-row' : undefined),
      },
    })

    expect(wrapper.findAll('tbody tr')[0].classes()).toContain('active-row')
    expect(wrapper.findAll('tbody tr')[1].classes()).not.toContain('active-row')

    wrapper.unmount()
  })

  test('should support summary row', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [
          { key: 'name', title: 'Name' },
          { key: 'score', title: 'Score' },
          { key: 'tasks', title: 'Tasks' },
        ],
        data: [
          { id: 1, name: 'Ada', score: 92, tasks: 16 },
          { id: 2, name: 'Linus', score: 78, tasks: 24 },
        ],
        pagination: false,
        summary: ({ data }) => ({
          name: {
            value: 'Total',
            colSpan: 2,
          },
          tasks: {
            value: data.reduce((total, row) => total + row.tasks, 0),
          },
        }),
      },
    })

    const summaryCells = wrapper.findAll('tfoot td')

    expect(summaryCells).toHaveLength(2)
    expect(summaryCells[0].attributes('colspan')).toBe('2')
    expect(summaryCells[0].text()).toBe('Total')
    expect(summaryCells[1].text()).toBe('40')

    wrapper.unmount()
  })

  test('should support multiple summary rows with row span', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [
          { key: 'name', title: 'Name' },
          { key: 'score', title: 'Score' },
          { key: 'tasks', title: 'Tasks' },
        ],
        data: [
          { id: 1, name: 'Ada', score: 92, tasks: 16 },
          { id: 2, name: 'Linus', score: 78, tasks: 24 },
        ],
        pagination: false,
        summary: ({ data }) => [
          {
            name: {
              value: 'Total',
              rowSpan: 2,
            },
            score: {
              value: data.reduce((total, row) => total + row.score, 0),
            },
            tasks: {
              value: data.reduce((total, row) => total + row.tasks, 0),
            },
          },
          {
            score: {
              value: 'Average',
            },
            tasks: {
              value: data.reduce((total, row) => total + row.tasks, 0) / data.length,
            },
          },
        ],
      },
    })

    const summaryRows = wrapper.findAll('tfoot tr')
    const firstRowCells = summaryRows[0].findAll('td')
    const secondRowCells = summaryRows[1].findAll('td')

    expect(summaryRows).toHaveLength(2)
    expect(firstRowCells).toHaveLength(3)
    expect(firstRowCells[0].attributes('rowspan')).toBe('2')
    expect(firstRowCells[0].text()).toBe('Total')
    expect(firstRowCells[1].text()).toBe('170')
    expect(firstRowCells[2].text()).toBe('40')
    expect(secondRowCells).toHaveLength(2)
    expect(secondRowCells[0].text()).toBe('Average')
    expect(secondRowCells[1].text()).toBe('20')

    wrapper.unmount()
  })

  test('should normalize summary cell spans', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [
          { key: 'name', title: 'Name' },
          { key: 'score', title: 'Score' },
          { key: 'tasks', title: 'Tasks' },
        ],
        data,
        pagination: false,
        summary: () => [
          {
            name: {
              value: 'Total',
              colSpan: 2.8,
            },
            tasks: {
              value: '40',
              rowSpan: 8,
            },
          },
          {
            name: {
              value: 'Hidden',
              colSpan: 0,
            },
            score: {
              value: 'Average',
            },
            tasks: {
              value: '20',
            },
          },
        ],
      },
    })

    const summaryRows = wrapper.findAll('tfoot tr')
    const firstRowCells = summaryRows[0].findAll('td')
    const secondRowCells = summaryRows[1].findAll('td')

    expect(firstRowCells).toHaveLength(2)
    expect(firstRowCells[0].attributes('colspan')).toBe('2')
    expect(firstRowCells[0].text()).toBe('Total')
    expect(firstRowCells[1].attributes('rowspan')).toBe('2')
    expect(firstRowCells[1].text()).toBe('40')
    expect(secondRowCells).toHaveLength(1)
    expect(secondRowCells[0].text()).toBe('Average')

    wrapper.unmount()
  })

  test('should support plain table mode', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns,
        data,
        pagination: false,
        plain: true,
      },
    })

    expect(wrapper.classes()).toContain('var-data-table--plain')
    expect(wrapper.classes()).not.toContain('var-elevation--1')
    wrapper.unmount()
  })

  test('should support grouped header columns', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [
          {
            title: 'Profile',
            children: [
              { key: 'name', title: 'Name' },
              { key: 'role', title: 'Role' },
            ],
          },
          {
            title: 'State',
            children: [{ key: 'status', title: 'Status' }],
          },
        ],
        data,
        pagination: false,
      },
    })

    expect(wrapper.findAll('thead tr')).toHaveLength(2)
    expect(wrapper.findAll('thead tr')[0].findAll('th')).toHaveLength(2)
    expect(wrapper.findAll('thead tr')[1].findAll('th')).toHaveLength(3)
    expect(wrapper.findAll('colgroup col')).toHaveLength(3)
    wrapper.unmount()
  })

  test('should support single sorter cycle', async () => {
    const onUpdateSorters = vi.fn()
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [
          { key: 'name', title: 'Name', sorter: true },
          { key: 'role', title: 'Role' },
        ],
        data,
        pagination: false,
        sorters: [],
        'onUpdate:sorters': onUpdateSorters,
      },
    })

    const sortTrigger = wrapper.find('.var-data-table__sort-trigger')

    await sortTrigger.trigger('click')
    expect(onUpdateSorters).toHaveBeenLastCalledWith([{ key: 'name', order: 'asc' }])

    await wrapper.setProps({ sorters: [{ key: 'name', order: 'asc' }] })
    await sortTrigger.trigger('click')
    expect(onUpdateSorters).toHaveBeenLastCalledWith([{ key: 'name', order: 'desc' }])

    await wrapper.setProps({ sorters: [{ key: 'name', order: 'desc' }] })
    await sortTrigger.trigger('click')
    expect(onUpdateSorters).toHaveBeenLastCalledWith([])

    wrapper.unmount()
  })

  test('should render sorter icons with explicit size', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [{ key: 'name', title: 'Name', sorter: true }],
        data,
        pagination: false,
      },
    })

    expect(wrapper.find('.var-data-table__sort-trigger-icon-up').attributes('style')).toContain('font-size: 18px;')
    expect(wrapper.find('.var-data-table__sort-trigger-icon-down').attributes('style')).toContain('font-size: 18px;')

    wrapper.unmount()
  })

  test('should support multiple sorters', async () => {
    const onUpdateSorters = vi.fn()
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [
          { key: 'name', title: 'Name', sorter: true },
          { key: 'role', title: 'Role', sorter: true },
        ],
        data,
        pagination: false,
        sorters: [{ key: 'name', order: 'asc' }],
        sortMode: 'multiple',
        'onUpdate:sorters': onUpdateSorters,
      },
    })

    const sortTriggers = wrapper.findAll('.var-data-table__sort-trigger')

    await sortTriggers[1].trigger('click')

    expect(onUpdateSorters).toHaveBeenLastCalledWith([
      { key: 'name', order: 'asc' },
      { key: 'role', order: 'asc' },
    ])

    wrapper.unmount()
  })

  test('should cycle sorter in multiple mode', async () => {
    const onUpdateSorters = vi.fn()
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [
          { key: 'name', title: 'Name', sorter: true },
          { key: 'role', title: 'Role', sorter: true },
        ],
        data,
        pagination: false,
        sorters: [{ key: 'name', order: 'asc' }],
        sortMode: 'multiple',
        'onUpdate:sorters': onUpdateSorters,
      },
    })

    const sortTrigger = wrapper.findAll('.var-data-table__sort-trigger')[0]

    await sortTrigger.trigger('click')
    expect(onUpdateSorters).toHaveBeenLastCalledWith([{ key: 'name', order: 'desc' }])

    await wrapper.setProps({ sorters: [{ key: 'name', order: 'desc' }] })
    await sortTrigger.trigger('click')
    expect(onUpdateSorters).toHaveBeenLastCalledWith([])

    wrapper.unmount()
  })

  test('should only render sorter trigger for sortable field columns', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [
          { type: 'selection' },
          { key: 'name', title: 'Name', sorter: true },
          {
            type: 'expand',
            renderExpand: ({ row }) => h('div', row.role),
          },
          { key: 'role', title: 'Role' },
        ],
        data,
        pagination: false,
      },
    })

    expect(wrapper.findAll('.var-data-table__sort-trigger')).toHaveLength(1)

    wrapper.unmount()
  })

  test('should not render sorter trigger for grouped header parents', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [
          {
            title: 'Profile',
            children: [
              { key: 'name', title: 'Name', sorter: true },
              { key: 'role', title: 'Role', sorter: true },
            ],
          },
        ],
        data,
        pagination: false,
      },
    })

    expect(wrapper.findAll('.var-data-table__sort-trigger')).toHaveLength(2)
    expect(wrapper.findAll('thead tr')).toHaveLength(2)

    wrapper.unmount()
  })

  test('should support selection column', async () => {
    const onUpdateCheckedRowKeys = vi.fn()
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [{ type: 'selection' }, ...columns],
        data,
        pagination: false,
        checkedRowKeys: [],
        'onUpdate:checkedRowKeys': onUpdateCheckedRowKeys,
      },
    })

    const checkboxes = wrapper.findAllComponents({ name: 'var-checkbox' })

    checkboxes[1].vm.$emit('update:modelValue', true)
    await wrapper.vm.$nextTick()

    expect(onUpdateCheckedRowKeys).toHaveBeenLastCalledWith([1])

    checkboxes[0].vm.$emit('update:modelValue', true)
    await wrapper.vm.$nextTick()

    expect(onUpdateCheckedRowKeys).toHaveBeenLastCalledWith([1, 2, 3])
    wrapper.unmount()
  })

  test('should support expand column', async () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [
          {
            type: 'expand',
            renderExpand: ({ row }) => h('div', { class: 'expanded-content' }, row.role),
          },
          ...columns,
        ],
        data,
        pagination: false,
      },
    })

    expect(wrapper.findAll('tbody tr')).toHaveLength(3)

    await wrapper.find('.var-data-table__expand-trigger').trigger('click')

    expect(wrapper.find('.expanded-content').text()).toBe('Admin')
    expect(wrapper.findAll('tbody tr')).toHaveLength(4)
    wrapper.unmount()
  })

  test('should support controlled expanded row keys', async () => {
    const onUpdateExpandedRowKeys = vi.fn()
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [
          {
            type: 'expand',
            renderExpand: ({ row }) => h('div', { class: 'expanded-content' }, row.role),
          },
          ...columns,
        ],
        data,
        pagination: false,
        expandedRowKeys: [1],
        'onUpdate:expandedRowKeys': onUpdateExpandedRowKeys,
      },
    })

    expect(wrapper.find('.expanded-content').text()).toBe('Admin')

    await wrapper.find('.var-data-table__expand-trigger').trigger('click')
    expect(onUpdateExpandedRowKeys).toHaveBeenLastCalledWith([])

    wrapper.unmount()
  })

  test('should support uncontrolled expanded row keys', async () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [
          {
            type: 'expand',
            renderExpand: ({ row }) => h('div', { class: 'expanded-content' }, row.role),
          },
          ...columns,
        ],
        data,
        pagination: false,
      },
    })

    expect(wrapper.find('.expanded-content').exists()).toBe(false)

    await wrapper.find('.var-data-table__expand-trigger').trigger('click')
    expect(wrapper.find('.expanded-content').text()).toBe('Admin')

    await wrapper.find('.var-data-table__expand-trigger').trigger('click')
    expect(wrapper.find('.expanded-content').exists()).toBe(false)

    wrapper.unmount()
  })

  test('should support expandable in expand column', async () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [
          {
            type: 'expand',
            expandable: ({ row }) => row.id !== 1,
            renderExpand: ({ row }) => h('div', { class: 'expanded-content' }, row.role),
          },
          ...columns,
        ],
        data,
        pagination: false,
      },
    })

    const triggers = wrapper.findAll('.var-data-table__expand-trigger')

    expect(triggers[0].attributes('disabled')).toBeDefined()
    expect(triggers[1].attributes('disabled')).toBeUndefined()

    await triggers[0].trigger('click')
    expect(wrapper.find('.expanded-content').exists()).toBe(false)

    await triggers[1].trigger('click')
    expect(wrapper.find('.expanded-content').text()).toBe('Maintainer')
    wrapper.unmount()
  })

  test('should support single selection column', async () => {
    const onUpdateCheckedRowKeys = vi.fn()
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [{ type: 'selection', multiple: false }, ...columns],
        data,
        pagination: false,
        checkedRowKeys: [],
        'onUpdate:checkedRowKeys': onUpdateCheckedRowKeys,
      },
    })

    const radios = wrapper.findAllComponents({ name: 'var-radio' })

    expect(wrapper.findAllComponents({ name: 'var-checkbox' })).toHaveLength(0)
    expect(radios).toHaveLength(3)

    radios[0].vm.$emit('update:modelValue', true)
    await wrapper.vm.$nextTick()
    expect(onUpdateCheckedRowKeys).toHaveBeenLastCalledWith([1])

    await wrapper.setProps({ checkedRowKeys: [1] })
    radios[1].vm.$emit('update:modelValue', true)
    await wrapper.vm.$nextTick()
    expect(onUpdateCheckedRowKeys).toHaveBeenLastCalledWith([2])

    wrapper.unmount()
  })

  test('should support non-selectable selection column', async () => {
    const onUpdateCheckedRowKeys = vi.fn()
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [{ type: 'selection', selectable: false }, ...columns],
        data,
        pagination: false,
        checkedRowKeys: [],
        'onUpdate:checkedRowKeys': onUpdateCheckedRowKeys,
      },
    })

    const checkboxes = wrapper.findAllComponents({ name: 'var-checkbox' })

    expect(checkboxes[0].vm.disabled).toBe(true)
    expect(checkboxes[1].vm.disabled).toBe(true)

    checkboxes[1].vm.$emit('update:modelValue', true)
    checkboxes[0].vm.$emit('update:modelValue', true)
    await wrapper.vm.$nextTick()

    expect(onUpdateCheckedRowKeys).not.toHaveBeenCalled()
    wrapper.unmount()
  })

  test('should support row non-selectable selection column', async () => {
    const onUpdateCheckedRowKeys = vi.fn()
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [
          {
            type: 'selection',
            selectable: ({ row }) => row.id !== 2,
          },
          ...columns,
        ],
        data,
        pagination: false,
        checkedRowKeys: [],
        'onUpdate:checkedRowKeys': onUpdateCheckedRowKeys,
      },
    })

    const checkboxes = wrapper.findAllComponents({ name: 'var-checkbox' })

    expect(checkboxes[0].vm.disabled).toBe(false)
    expect(checkboxes[1].vm.disabled).toBe(false)
    expect(checkboxes[2].vm.disabled).toBe(true)
    expect(checkboxes[3].vm.disabled).toBe(false)

    checkboxes[2].vm.$emit('update:modelValue', true)
    await wrapper.vm.$nextTick()
    expect(onUpdateCheckedRowKeys).not.toHaveBeenCalled()

    checkboxes[0].vm.$emit('update:modelValue', true)
    await wrapper.vm.$nextTick()
    expect(onUpdateCheckedRowKeys).toHaveBeenLastCalledWith([1, 3])

    wrapper.unmount()
  })

  test('should support tree data with custom children key', async () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns,
        data: treeData,
        pagination: false,
        tree: true,
        childrenKey: 'nodes',
      },
    })

    expect(wrapper.text()).toContain('Frontend')
    expect(wrapper.text()).toContain('Design')
    expect(wrapper.text()).not.toContain('Ada')
    expect(wrapper.text()).not.toContain('Taylor')
    expect(wrapper.text()).not.toContain('Linus')

    const triggers = wrapper.findAll('.var-data-table__tree-trigger')
    expect(triggers).toHaveLength(2)

    await triggers[0].trigger('click')

    expect(wrapper.text()).toContain('Ada')
    expect(wrapper.text()).toContain('Taylor')
    expect(wrapper.text()).not.toContain('Linus')

    wrapper.unmount()
  })

  test('should support controlled expanded tree row keys', async () => {
    const onUpdateExpandedTreeRowKeys = vi.fn()
    const wrapper = mount(VarDataTable, {
      props: {
        columns,
        data: treeData,
        pagination: false,
        tree: true,
        childrenKey: 'nodes',
        expandedTreeRowKeys: [1],
        'onUpdate:expandedTreeRowKeys': onUpdateExpandedTreeRowKeys,
      },
    })

    expect(wrapper.text()).toContain('Ada')
    expect(wrapper.text()).toContain('Taylor')
    expect(wrapper.text()).not.toContain('Linus')

    await wrapper.find('.var-data-table__tree-trigger').trigger('click')
    expect(onUpdateExpandedTreeRowKeys).toHaveBeenLastCalledWith([])

    wrapper.unmount()
  })

  test('should cascade tree selection in multiple mode by default', async () => {
    const onUpdateCheckedRowKeys = vi.fn()
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [{ type: 'selection' }, ...columns],
        data: treeData,
        pagination: false,
        tree: true,
        childrenKey: 'nodes',
        expandedTreeRowKeys: [1, 2],
        checkedRowKeys: [],
        'onUpdate:checkedRowKeys': onUpdateCheckedRowKeys,
      },
    })

    const checkboxes = wrapper.findAllComponents({ name: 'var-checkbox' })

    checkboxes[1].vm.$emit('update:modelValue', true)
    await wrapper.vm.$nextTick()
    expect(onUpdateCheckedRowKeys).toHaveBeenLastCalledWith([1, 11, 12])

    wrapper.unmount()
  })

  test('should support non-cascading tree selection when cascade is false', async () => {
    const onUpdateCheckedRowKeys = vi.fn()
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [{ type: 'selection' }, ...columns],
        data: treeData,
        pagination: false,
        tree: true,
        cascade: false,
        childrenKey: 'nodes',
        expandedTreeRowKeys: [1, 2],
        checkedRowKeys: [],
        'onUpdate:checkedRowKeys': onUpdateCheckedRowKeys,
      },
    })

    const checkboxes = wrapper.findAllComponents({ name: 'var-checkbox' })

    checkboxes[1].vm.$emit('update:modelValue', true)
    await wrapper.vm.$nextTick()
    expect(onUpdateCheckedRowKeys).toHaveBeenLastCalledWith([1])

    wrapper.unmount()
  })

  test('should not cascade tree selection in single selection mode', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [{ type: 'selection', multiple: false }, ...columns],
        data: treeData,
        pagination: false,
        tree: true,
        childrenKey: 'nodes',
        expandedTreeRowKeys: [1, 2],
        checkedRowKeys: [11],
      },
    })

    const radios = wrapper.findAllComponents({ name: 'var-radio' })

    expect(radios[0].vm.modelValue).toBe(false)
    expect(radios[1].vm.modelValue).toBe(true)
    expect(radios[2].vm.modelValue).toBe(false)
    expect(radios[3].vm.modelValue).toBe(false)
    expect(radios[4].vm.modelValue).toBe(false)

    wrapper.unmount()
  })

  test('should replace checked key instead of cascading in single tree selection mode', async () => {
    const onUpdateCheckedRowKeys = vi.fn()
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [{ type: 'selection', multiple: false }, ...columns],
        data: treeData,
        pagination: false,
        tree: true,
        childrenKey: 'nodes',
        expandedTreeRowKeys: [1, 2],
        checkedRowKeys: [11],
        'onUpdate:checkedRowKeys': onUpdateCheckedRowKeys,
      },
    })

    const radios = wrapper.findAllComponents({ name: 'var-radio' })

    radios[3].vm.$emit('update:modelValue', true)
    await wrapper.vm.$nextTick()

    expect(onUpdateCheckedRowKeys).toHaveBeenLastCalledWith([2])

    wrapper.unmount()
  })

  test('should count collapsed selected tree rows in header checkbox state', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [{ type: 'selection' }, ...columns],
        data: treeData,
        pagination: false,
        tree: true,
        childrenKey: 'nodes',
        checkedRowKeys: [11],
      },
    })

    const checkboxes = wrapper.findAllComponents({ name: 'var-checkbox' })
    expect(checkboxes[0].vm.modelValue).toBe(false)
    expect(checkboxes[0].vm.indeterminate).toBe(true)

    wrapper.unmount()
  })

  test('should ignore non-selectable rows when toggling all current rows', async () => {
    const onUpdateCheckedRowKeys = vi.fn()
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [
          {
            type: 'selection',
            selectable: ({ row }) => row.id !== 2,
          },
          ...columns,
        ],
        data,
        pagination: false,
        checkedRowKeys: [],
        'onUpdate:checkedRowKeys': onUpdateCheckedRowKeys,
      },
    })

    const checkboxes = wrapper.findAllComponents({ name: 'var-checkbox' })

    checkboxes[0].vm.$emit('update:modelValue', true)
    await wrapper.vm.$nextTick()

    expect(onUpdateCheckedRowKeys).toHaveBeenLastCalledWith([1, 3])

    wrapper.unmount()
  })

  test('should support maxHeight with sticky header', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns,
        data,
        pagination: false,
        maxHeight: 240,
      },
    })

    expect(wrapper.find('.var-data-table__container').attributes('style')).toContain('max-height: 240px;')
    expect(wrapper.find('.var-data-table__container').classes()).toContain('var--scrollbar')
    expect(wrapper.find('.var-data-table__table').exists()).toBe(true)
    expect(wrapper.find('.var-data-table__body-scroller').exists()).toBe(false)
    wrapper.unmount()
  })

  test('should support scrollX with horizontal scrolling', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns,
        data,
        pagination: false,
        scrollX: 640,
      },
    })

    expect(wrapper.find('.var-data-table__container').attributes('style')).toContain('overflow-x: auto;')
    expect(wrapper.find('.var-data-table__table').attributes('style')).toContain('min-width: 100%;')
    expect(wrapper.find('.var-data-table__table').attributes('style')).toContain('width: 640px;')
    wrapper.unmount()
  })

  test('should support scrollX together with maxHeight', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns,
        data,
        pagination: false,
        maxHeight: 240,
        scrollX: 640,
      },
    })

    const mainStyle = wrapper.find('.var-data-table__container').attributes('style')

    expect(mainStyle).toContain('max-height: 240px;')
    expect(mainStyle).toContain('overflow: auto;')
    expect(mainStyle).toContain('overflow-x: auto;')
    wrapper.unmount()
  })

  test('should keep sticky header above fixed body cells', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [
          { key: 'name', title: 'Name', fixed: 'left', width: 120 },
          { key: 'role', title: 'Role', width: 120 },
          { key: 'status', title: 'Status', fixed: 'right', width: 120 },
        ],
        data,
        pagination: false,
        maxHeight: 240,
        scrollX: 640,
      },
    })

    const headerCells = wrapper.findAll('thead th')
    const bodyCells = wrapper.findAll('tbody td')

    expect(headerCells[0].attributes('style')).toContain('z-index: 3;')
    expect(headerCells[1].attributes('style')).toContain('z-index: 2;')
    expect(bodyCells[0].attributes('style')).toContain('z-index: 1;')
    expect(bodyCells[2].attributes('style')).toContain('z-index: 1;')

    wrapper.unmount()
  })

  test('should support loading description slot', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns,
        data,
        loading: true,
      },
      slots: {
        'loading-description': () => h('span', { class: 'loading-text' }, 'Loading rows'),
      },
    })

    expect(wrapper.find('.loading-text').text()).toBe('Loading rows')

    wrapper.unmount()
  })

  test('should support column maxWidth', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [
          { key: 'name', title: 'Name', maxWidth: 120 },
          { key: 'role', title: 'Role' },
        ],
        data,
        pagination: false,
      },
    })

    expect(wrapper.find('col').attributes('style')).toContain('max-width: 120px;')
    wrapper.unmount()
  })

  test('should support resizable columns and respect maxWidth', async () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [
          { key: 'name', title: 'Name', width: 120, maxWidth: 160, resizable: true },
          { key: 'role', title: 'Role' },
        ],
        data,
        pagination: false,
      },
    })

    const resizeTrigger = wrapper.find('.var-data-table__resize-trigger')
    const firstHeaderCell = wrapper.find('thead th').element

    firstHeaderCell.getBoundingClientRect = () => ({
      width: 120,
      height: 46,
      top: 0,
      right: 120,
      bottom: 46,
      left: 0,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    })

    await resizeTrigger.trigger('mousedown', { clientX: 100 })
    document.dispatchEvent(new MouseEvent('mousemove', { clientX: 130 }))
    await wrapper.vm.$nextTick()

    expect(wrapper.find('col').attributes('style')).toContain('width: 150px;')

    document.dispatchEvent(new MouseEvent('mousemove', { clientX: 200 }))
    await wrapper.vm.$nextTick()

    expect(wrapper.find('col').attributes('style')).toContain('width: 160px;')

    document.dispatchEvent(new MouseEvent('mouseup'))
    wrapper.unmount()
  })

  test('should not render resize trigger for the last leaf column', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [
          { key: 'name', title: 'Name', resizable: true },
          { key: 'role', title: 'Role', resizable: true },
        ],
        data,
        pagination: false,
      },
    })

    expect(wrapper.findAll('.var-data-table__resize-trigger')).toHaveLength(1)

    wrapper.unmount()
  })

  test('should resolve grouped header fixed side from child columns', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [
          {
            title: 'Left Group',
            children: [
              { key: 'name', title: 'Name', fixed: 'left' },
              { key: 'role', title: 'Role', fixed: 'left' },
            ],
          },
          { key: 'status', title: 'Status' },
        ],
        data,
        pagination: false,
      },
    })

    expect(wrapper.findAll('thead tr')[0].find('th').classes()).toContain('var-data-table__fixed-cell')

    wrapper.unmount()
  })

  test('should not resolve grouped header fixed side when child columns differ', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [
          {
            title: 'Mixed Group',
            children: [
              { key: 'name', title: 'Name', fixed: 'left' },
              { key: 'role', title: 'Role' },
            ],
          },
          { key: 'status', title: 'Status' },
        ],
        data,
        pagination: false,
      },
    })

    expect(wrapper.findAll('thead tr')[0].find('th').classes()).not.toContain('var-data-table__fixed-cell')

    wrapper.unmount()
  })

  test('should support tableLayout prop', async () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns,
        data,
        pagination: false,
      },
    })

    expect(wrapper.find('.var-data-table__table').attributes('style')).toContain('table-layout: auto;')

    await wrapper.setProps({ tableLayout: 'fixed' })

    expect(wrapper.find('.var-data-table__table').attributes('style')).toContain('table-layout: fixed;')
    wrapper.unmount()
  })

  test('should support rowProps and cellProps', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [
          {
            key: 'name',
            title: 'Name',
            cellProps: ({ row, rowIndex }) => ({
              class: 'custom-cell',
              'data-name': row.name,
              'data-row-index': rowIndex,
            }),
          },
        ],
        data: [data[0]],
        pagination: false,
        rowProps: ({ row, rowIndex }) => ({
          class: 'custom-row',
          'data-id': row.id,
          'data-row-index': rowIndex,
        }),
      },
    })

    expect(wrapper.find('tbody tr').classes()).toContain('custom-row')
    expect(wrapper.find('tbody tr').attributes('data-id')).toBe('1')
    expect(wrapper.find('tbody td').classes()).toContain('custom-cell')
    expect(wrapper.find('tbody td').attributes('data-name')).toBe('Ada')
    wrapper.unmount()
  })

  test('should support titleColSpan colSpan and rowSpan', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [
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
          {
            key: 'status',
            title: 'Status',
          },
        ],
        data: [
          { id: 1, name: 'Ada', role: 'Admin', status: 'Online' },
          { id: 2, name: 'Linus', role: 'Maintainer', status: 'Offline' },
        ],
        pagination: false,
      },
    })

    const headerCells = wrapper.findAll('thead th')
    const firstRowCells = wrapper.findAll('tbody tr')[0].findAll('td')
    const secondRowCells = wrapper.findAll('tbody tr')[1].findAll('td')

    expect(headerCells).toHaveLength(2)
    expect(headerCells[0].attributes('colspan')).toBe('2')
    expect(headerCells[0].text()).toContain('Identity')
    expect(headerCells[1].text()).toContain('Status')

    expect(firstRowCells).toHaveLength(2)
    expect(firstRowCells[0].attributes('rowspan')).toBe('2')
    expect(firstRowCells[1].attributes('colspan')).toBe('2')
    expect(firstRowCells[1].text()).toContain('Admin')

    expect(secondRowCells).toHaveLength(2)
    expect(secondRowCells[0].text()).toContain('Maintainer')
    expect(secondRowCells[1].text()).toContain('Offline')
    wrapper.unmount()
  })

  test('should render default empty text', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns,
        data: [],
        pagination: false,
      },
    })

    expect(wrapper.find('.var-data-table__empty').text()).toBeTruthy()
    wrapper.unmount()
  })

  test('should render empty slot', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns,
        data: [],
        pagination: false,
      },
      slots: {
        empty: () => h('span', 'Nothing here'),
      },
    })

    expect(wrapper.find('.var-data-table__empty').text()).toBe('Nothing here')
    wrapper.unmount()
  })

  test('should render loading state', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns,
        data: [],
        loading: true,
      },
    })

    expect(wrapper.find('.var-loading__body').exists()).toBe(true)
    wrapper.unmount()
  })

  test('should not render table when no normalized columns exist', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [],
        data,
        pagination: false,
      },
    })

    expect(wrapper.find('.var-data-table__table').exists()).toBe(false)
    expect(wrapper.find('.var-data-table__empty').exists()).toBe(false)

    wrapper.unmount()
  })

  test('should keep footer inside loading content', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns,
        data,
        loading: true,
      },
    })

    expect(wrapper.find('.var-loading__content .var-data-table__footer').exists()).toBe(true)
    wrapper.unmount()
  })

  test('should emit pagination updates', async () => {
    const onUpdatePage = vi.fn()
    const onUpdatePageSize = vi.fn()

    const wrapper = mount(VarDataTable, {
      props: {
        columns,
        data,
        'onUpdate:page': onUpdatePage,
        'onUpdate:pageSize': onUpdatePageSize,
      },
    })

    wrapper.findComponent({ name: 'var-pagination' }).vm.$emit('change', 2, 20)
    await wrapper.vm.$nextTick()

    expect(onUpdatePage).toHaveBeenCalledWith(2)
    expect(onUpdatePageSize).toHaveBeenCalledWith(20)
    wrapper.unmount()
  })
})
