import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Ripple from '..'
import { delay, mockOffset, trigger, triggerDrag, triggerKeyboard } from '../../utils/test'

mockOffset()

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

test('ripple use', () => {
  const app = createApp({}).use(Ripple)
  expect(app.directive('ripple')).toBeTruthy()
})

describe('test ripple component props', () => {
  test('ripple show & hide', async () => {
    const wrapper = mount(Wrapper, { attachTo: document.body })
    await trigger(wrapper, 'touchstart')
    await delay(60)
    expect(wrapper.find('.var-ripple').exists()).toBeTruthy()

    await trigger(wrapper, 'touchend')
    await delay(1000)
    expect(wrapper.find('.var-ripple').exists()).toBeFalsy()
    wrapper.unmount()
  })

  test('ripple show & hide via keydown and keyup and enter', async () => {
    const wrapper = mount(Wrapper, { attachTo: document.body })
    await triggerKeyboard(wrapper, 'keydown', { key: 'Enter' })
    await delay(60)
    expect(wrapper.find('.var-ripple').exists()).toBeTruthy()

    await triggerKeyboard(wrapper, 'keyup', { key: 'Enter' })
    await delay(1000)
    expect(wrapper.find('.var-ripple').exists()).toBeFalsy()
    wrapper.unmount()
  })

  test('ripple show & hide via keydown and blur and space', async () => {
    const wrapper = mount(Wrapper, { attachTo: document.body })
    await triggerKeyboard(wrapper, 'keydown', { key: ' ' })
    await delay(60)
    expect(wrapper.find('.var-ripple').exists()).toBeTruthy()

    await trigger(wrapper, 'blur')
    await delay(1000)
    expect(wrapper.find('.var-ripple').exists()).toBeFalsy()
    wrapper.unmount()
  })

  test('ripple update & color', async () => {
    const wrapper = mount(Wrapper, { attachTo: document.body })
    await wrapper.setData({ color: 'green' })

    await trigger(wrapper, 'touchstart')
    await delay(60)
    expect(wrapper.find('.var-ripple').exists()).toBeTruthy()
    expect(wrapper.find('.var-ripple').element.style.backgroundColor).toBe('green')

    wrapper.unmount()
  })

  test('ripple disabled', async () => {
    const wrapper = mount(Wrapper, { attachTo: document.body })
    await wrapper.setData({ disabled: true })

    await trigger(wrapper, 'touchstart')
    await delay(60)
    expect(wrapper.find('.var-ripple').exists()).toBeFalsy()

    wrapper.unmount()
  })

  test('ripple touchmove', async () => {
    const wrapper = mount(Wrapper, { attachTo: document.body })

    await triggerDrag(wrapper, 0, 20)
    await delay(60)
    expect(wrapper.find('.var-ripple').exists()).toBeFalsy()

    wrapper.unmount()
  })
})
