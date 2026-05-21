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

    const checkboxes = wrapper.findAllComponents({ name: 'var-checkbox' })

    expect(checkboxes).toHaveLength(3)

    checkboxes[0].vm.$emit('update:modelValue', true)
    await wrapper.vm.$nextTick()
    expect(onUpdateCheckedRowKeys).toHaveBeenLastCalledWith([1])

    await wrapper.setProps({ checkedRowKeys: [1] })
    checkboxes[1].vm.$emit('update:modelValue', true)
    await wrapper.vm.$nextTick()
    expect(onUpdateCheckedRowKeys).toHaveBeenLastCalledWith([2])

    wrapper.unmount()
  })

  test('should support disabled selection column', async () => {
    const onUpdateCheckedRowKeys = vi.fn()
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [{ type: 'selection', disabled: true }, ...columns],
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

  test('should support row disabled selection column', async () => {
    const onUpdateCheckedRowKeys = vi.fn()
    const wrapper = mount(VarDataTable, {
      props: {
        columns: [
          {
            type: 'selection',
            disabled: ({ row }) => row.id === 2,
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
    expect(wrapper.text()).toContain('Ada')
    expect(wrapper.text()).toContain('Taylor')
    expect(wrapper.text()).toContain('Design')
    expect(wrapper.text()).toContain('Linus')

    const triggers = wrapper.findAll('.var-data-table__tree-trigger')
    expect(triggers).toHaveLength(2)

    await triggers[0].trigger('click')

    expect(wrapper.text()).not.toContain('Ada')
    expect(wrapper.text()).not.toContain('Taylor')
    expect(wrapper.text()).toContain('Linus')

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

  test('should count collapsed selected tree rows in header checkbox state', async () => {
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

    await wrapper.find('.var-data-table__tree-trigger').trigger('click')

    const checkboxes = wrapper.findAllComponents({ name: 'var-checkbox' })
    expect(checkboxes[0].vm.modelValue).toBe(false)
    expect(checkboxes[0].vm.indeterminate).toBe(true)

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

    expect(wrapper.find('.var-data-table__main').attributes('style')).toContain('max-height: 240px;')
    expect(wrapper.find('.var-data-table__main').classes()).toContain('var--scrollbar')
    expect(wrapper.find('.var-data-table__table').exists()).toBe(true)
    expect(wrapper.find('.var-data-table__body-scroller').exists()).toBe(false)
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
