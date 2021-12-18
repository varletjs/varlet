import example from '../example'
import CollapseMenu from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test collapse-menu example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test collapse-menu plugin', () => {
  const app = createApp({}).use(CollapseMenu)
  expect(app.component(CollapseMenu.name)).toBeTruthy()
})
