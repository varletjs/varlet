import example from '../example'
import CollapseMenuGroup from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test collapse-menu-group example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test collapse-menu-group plugin', () => {
  const app = createApp({}).use(CollapseMenuGroup)
  expect(app.component(CollapseMenuGroup.name)).toBeTruthy()
})
