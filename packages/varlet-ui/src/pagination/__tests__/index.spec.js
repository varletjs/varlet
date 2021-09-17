import example from '../example'
import Pagination from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test pagination example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test pagination plugin', () => {
  const app = createApp({}).use(Pagination)
  expect(app.component(Pagination.name)).toBeTruthy()
})
