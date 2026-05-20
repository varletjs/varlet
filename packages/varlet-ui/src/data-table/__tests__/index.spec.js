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

  test('should render empty text', () => {
    const wrapper = mount(VarDataTable, {
      props: {
        columns,
        data: [],
        pagination: false,
        emptyText: 'Nothing here',
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
