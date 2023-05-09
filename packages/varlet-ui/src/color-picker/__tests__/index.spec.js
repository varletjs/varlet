import ColorPicker from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test color-picker plugin', () => {
  const app = createApp({}).use(ColorPicker)
  expect(app.component(ColorPicker.name)).toBeTruthy()
})

test('test color-picker snapshot', () => {
  const wrapper = mount(ColorPicker)
  expect(wrapper.html()).toMatchSnapshot()
})
