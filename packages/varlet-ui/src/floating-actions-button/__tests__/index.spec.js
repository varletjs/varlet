import FloatingActionsButton from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test floating-actions-button plugin', () => {
  const app = createApp({}).use(FloatingActionsButton)
  expect(app.component(FloatingActionsButton.name)).toBeTruthy()
})

test('test floating-actions-button snapshot', () => {
  const wrapper = mount(FloatingActionsButton)
  expect(wrapper.html()).toMatchSnapshot()
})
