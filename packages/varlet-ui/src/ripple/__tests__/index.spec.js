import example from '../example'
import Ripple from '..'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay, mockOffset, trigger, triggerDrag } from '../../utils/jest'

mockOffset()

test('test ripple example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test ripple plugin', () => {
  const app = createApp({}).use(Ripple)
  expect(app.directive('ripple')).toBeTruthy()
})

const Wrapper = {
  directives: { Ripple },
  data: () => ({
    color: 'yellow',
    disabled: false,
  }),
  template: `
    <div class="ripple-container" style="width: 100px; height: 100px" v-ripple="{ color, disabled }"></div>
  `,
}

test('test ripple show & hide', async () => {
  const wrapper = mount(Wrapper, { attachTo: document.body })
  await trigger(wrapper, 'touchstart')
  await delay(60)
  expect(wrapper.find('.var-ripple').exists()).toBeTruthy()

  await trigger(wrapper, 'touchend')
  await delay(1000)
  expect(wrapper.find('.var-ripple').exists()).toBeFalsy()
  wrapper.unmount()
})

test('test ripple update & color', async () => {
  const wrapper = mount(Wrapper, { attachTo: document.body })
  await wrapper.setData({ color: 'green' })

  await trigger(wrapper, 'touchstart')
  await delay(60)
  expect(wrapper.find('.var-ripple').exists()).toBeTruthy()
  expect(wrapper.find('.var-ripple').element.style.backgroundColor).toBe('green')

  wrapper.unmount()
})

test('test ripple disabled', async () => {
  const wrapper = mount(Wrapper, { attachTo: document.body })
  await wrapper.setData({ disabled: true })

  await trigger(wrapper, 'touchstart')
  await delay(60)
  expect(wrapper.find('.var-ripple').exists()).toBeFalsy()

  wrapper.unmount()
})

test('test ripple touchmove', async () => {
  const wrapper = mount(Wrapper, { attachTo: document.body })

  await triggerDrag(wrapper, 0, 20)
  await delay(60)
  expect(wrapper.find('.var-ripple').exists()).toBeFalsy()

  wrapper.unmount()
})
