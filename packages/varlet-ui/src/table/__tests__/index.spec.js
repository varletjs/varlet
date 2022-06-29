import Table from '..'
import VarTable from '../Table'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test table use', () => {
  const app = createApp({}).use(Table)
  expect(app.component(Table.name)).toBeTruthy()
})

describe('test table components props', () => {
  test('test table full-Width', () => {
    const wrapper = mount(VarTable, {
      props: {
        fullWidth: '100px',
      },
    })

    expect(wrapper.find('.var-table__table').attributes('style')).toContain('width: 100px;')
    wrapper.unmount()
  })
})
