import example from '../example'
import CollapseMenuItem from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test collapse-menu-item example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test collapse-menu-item plugin', () => {
  const app = createApp({}).use(CollapseMenuItem)
  expect(app.component(CollapseMenuItem.name)).toBeTruthy()
})
