import Result from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test result plugin', () => {
  const app = createApp({}).use(Result)
  expect(app.component(Result.name)).toBeTruthy()
})

test('test result snapshot', () => {
  const wrapper = mount(Result)
  expect(wrapper.html()).toMatchSnapshot()
})
