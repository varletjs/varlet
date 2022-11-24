import ResultItem from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test result-item plugin', () => {
  const app = createApp({}).use(ResultItem)
  expect(app.component(ResultItem.name)).toBeTruthy()
})

test('test result-item snapshot', () => {
  const wrapper = mount(ResultItem)
  expect(wrapper.html()).toMatchSnapshot()
})
