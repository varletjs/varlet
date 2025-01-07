import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Table from '..'
import VarTable from '../Table'

test('test table use', () => {
  const app = createApp({}).use(Table)
  expect(app.component(Table.name)).toBeTruthy()
})

describe('test table component props', () => {
  test('test table full-Width', async () => {
    const wrapper = mount(VarTable)

    expect(wrapper.find('.var-table__table').attributes('style')).toContain('width: 100%;')

    await wrapper.setProps({
      fullWidth: 200,
    })
    expect(wrapper.find('.var-table__table').attributes('style')).toContain('width: 200px;')

    wrapper.unmount()
  })

  test('test table elevation', async () => {
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

  test('test table scroller height', () => {
    const wrapper = mount(VarTable, {
      props: {
        scrollerHeight: '300px',
      },
    })

    expect(wrapper.find('.var-table__main').attributes('style')).toContain('height: 300px;')

    wrapper.unmount()
  })
})

describe('test table component slots', () => {
  test('test table default slot', () => {
    const wrapper = mount(VarTable, {
      slots: {
        default: () => 'table default slot',
      },
    })

    expect(wrapper.find('.var-table__table').text()).toBe('table default slot')

    wrapper.unmount()
  })

  test('test table footer slot', () => {
    const wrapper = mount(VarTable, {
      slots: {
        footer: () => 'table footer slot',
      },
    })

    expect(wrapper.find('.var-table__footer').text()).toBe('table footer slot')

    wrapper.unmount()
  })
})
