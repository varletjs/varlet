import VarDivider from '../Divider'
import examlple from '../example'
import { mount } from '@vue/test-utils'

test('test divider examlple', () => {
  const wrapper = mount(examlple)
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
