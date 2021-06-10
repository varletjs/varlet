import VarDivider from '../Divider'
import example from '../example'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

test('test divider plugin', () => {
  const app = createApp({}).use(VarDivider)
  expect(app.component(VarDivider.name)).toBeTruthy()
})

test('test divider example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test divider description prop', () => {
  const text = '文字描述'
  const wrapper = mount(VarDivider, {
    props: {
      inset: 36,
      vertical: true,
      description: text,
      margin: '10',
    },
  })
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})
