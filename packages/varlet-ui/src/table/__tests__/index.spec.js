import example from '../example'
import Table from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test table example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test table plugin', () => {
  const app = createApp({}).use(Table)
  expect(app.component(Table.name)).toBeTruthy()
})
