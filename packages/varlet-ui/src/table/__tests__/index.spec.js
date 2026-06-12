import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vite-plus/test'
import { createApp } from 'vue'
import Table from '..'
import VarTable from '../Table'

test('table use', () => {
  const app = createApp({}).use(Table)
  expect(app.component(Table.name)).toBeTruthy()
})

describe('test table component props', () => {
  test('table default elevation', () => {
    const wrapper = mount(VarTable)

    expect(wrapper.classes()).toContain('var-elevation--1')
    expect(wrapper.classes()).not.toContain('var-table--plain')
    expect(wrapper.classes()).not.toContain('var-table--surface-low')

    wrapper.unmount()
  })

  test('table full-Width', async () => {
    const wrapper = mount(VarTable)

    expect(wrapper.find('.var-table__table').attributes('style')).toContain('width: 100%;')

    await wrapper.setProps({
      fullWidth: 200,
    })
    expect(wrapper.find('.var-table__table').attributes('style')).toContain('width: 200px;')

    wrapper.unmount()
  })

  test('table elevation', async () => {
    const wrapper = mount(VarTable, {
      props: {
        elevation: true,
      },
    })

    expect(wrapper.find('.var-elevation--1').exists()).toBe(true)

    await wrapper.setProps({
      elevation: 3,
    })
    expect(wrapper.find('.var-elevation--3').exists()).toBe(true)

    wrapper.unmount()
  })

  test('table plain', () => {
    const wrapper = mount(VarTable, {
      props: {
        plain: true,
      },
    })

    expect(wrapper.classes()).toContain('var-table--plain')
    expect(wrapper.classes()).not.toContain('var-elevation--1')

    wrapper.unmount()
  })

  test('table bordered', () => {
    const wrapper = mount(VarTable, {
      props: {
        bordered: true,
      },
    })

    expect(wrapper.classes()).toContain('var-table--bordered')

    wrapper.unmount()
  })

  test('table plain bordered', () => {
    const wrapper = mount(VarTable, {
      props: {
        plain: true,
        bordered: true,
      },
    })

    expect(wrapper.classes()).toContain('var-table--plain')
    expect(wrapper.classes()).toContain('var-table--bordered')

    wrapper.unmount()
  })

  test('table surface low', () => {
    const wrapper = mount(VarTable, {
      props: {
        surface: 'low',
      },
    })

    expect(wrapper.classes()).toContain('var-table--surface-low')

    wrapper.unmount()
  })

  test('table scroller height', () => {
    const wrapper = mount(VarTable, {
      props: {
        scrollerHeight: '300px',
      },
    })

    expect(wrapper.find('.var-table__main').attributes('style')).toContain('height: 300px;')

    wrapper.unmount()
  })

  test('table numeric scroller height', () => {
    const wrapper = mount(VarTable, {
      props: {
        scrollerHeight: 300,
      },
    })

    expect(wrapper.find('.var-table__main').attributes('style')).toContain('max-height: 300px;')

    wrapper.unmount()
  })
})

describe('test table component slots', () => {
  test('table default slot', () => {
    const wrapper = mount(VarTable, {
      slots: {
        default: () => 'table default slot',
      },
    })

    expect(wrapper.find('.var-table__table').text()).toBe('table default slot')

    wrapper.unmount()
  })

  test('table should not render footer without footer slot', () => {
    const wrapper = mount(VarTable, {
      slots: {
        default: () => '<tbody><tr><td>Body</td></tr></tbody>',
      },
    })

    expect(wrapper.find('.var-table__footer').exists()).toBe(false)

    wrapper.unmount()
  })

  test('table footer slot', () => {
    const wrapper = mount(VarTable, {
      slots: {
        footer: () => 'table footer slot',
      },
    })

    expect(wrapper.find('.var-table__footer').text()).toBe('table footer slot')

    wrapper.unmount()
  })

  test('table default and footer slots', () => {
    const wrapper = mount(VarTable, {
      slots: {
        default: () => '<tbody><tr><td>table body slot</td></tr></tbody>',
        footer: () => 'table footer slot',
      },
    })

    expect(wrapper.find('.var-table__table').text()).toContain('table body slot')
    expect(wrapper.find('.var-table__footer').text()).toBe('table footer slot')

    wrapper.unmount()
  })
})
