import Hover from '..'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

test('test hover use', () => {
  const app = createApp({}).use(Hover)
  expect(app.directive('hover')).toBeTruthy()
})

test('test hover style binding', async () => {
  const Wrapper = {
    directives: { Hover },
    template: `<div v-hover="{ color: 'rgb(1, 1, 1)' }"></div>`,
  }

  const wrapper = mount(Wrapper)
  await wrapper.trigger('mouseenter')
  expect(wrapper.find('div').element.style.color).toBe('rgb(1, 1, 1)')
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.trigger('mouseleave')
  expect(wrapper.find('div').element.style.color).toBe('')
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})
