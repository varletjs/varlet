import Lazy, { imageCache } from '..'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay, mockDoubleRaf, trigger } from '../../utils/test'
import { expect, test, describe } from 'vitest'

test('test lazy use', () => {
  const app = createApp({}).use(Lazy)
  expect(app.directive('lazy')).toBeTruthy()
})

const Wrapper = {
  directives: { Lazy },
  data: () => ({
    src: 'https://varletjs.org/varlet/cat.jpg',
  }),
  template: `
    <img
      lazy-error="https://varletjs.org/varlet/error.jpg"
      v-lazy="src"
      lazy-loading="https://xxx.cn/loading.png"
      lazy-attempt="3"
      lazy-throttle-wait="500"
    >
  `,
}

describe('test lazy component props', () => {
  test('test lazy loading', async () => {
    const { mockRestore } = mockDoubleRaf()
    const wrapper = mount(Wrapper)

    await delay(80)
    expect(wrapper.find('img').attributes('src')).toBe('https://xxx.cn/loading.png')

    await trigger(wrapper.element._lazy.preloadImage, 'load')
    await delay(80)
    expect(wrapper.find('img').attributes('src')).toBe('https://varletjs.org/varlet/cat.jpg')

    wrapper.unmount()
    imageCache.clear()
    mockRestore()
  })

  test('test lazy error', () => {
    const { mockRestore } = mockDoubleRaf()
    const wrapper = mount(Wrapper)
    expect(wrapper.find('img').attributes('lazy-error')).toBe('https://varletjs.org/varlet/error.jpg')
    wrapper.unmount()
    imageCache.clear()
    mockRestore()
  })

  test('test lazy attempt', async () => {
    const { mockRestore } = mockDoubleRaf()
    const wrapper = mount(Wrapper)

    await delay(80)
    await trigger(wrapper.element._lazy.preloadImage, 'error')
    expect(wrapper.find('img').attributes('lazy-attempt')).toBe('3')

    wrapper.unmount()
    imageCache.clear()
    mockRestore()
  })

  test('test lazy throttleWait', () => {
    const { mockRestore } = mockDoubleRaf()
    const wrapper = mount(Wrapper)
    expect(wrapper.find('img').attributes('lazy-throttle-wait')).toBe('500')
    wrapper.unmount()
    imageCache.clear()
    mockRestore()
  })

  test('test lazy update', async () => {
    const { mockRestore } = mockDoubleRaf()
    const wrapper = mount(Wrapper)

    await delay(80)
    expect(wrapper.find('img').attributes('src')).toBe('https://xxx.cn/loading.png')

    await delay(80)
    await trigger(wrapper.element._lazy.preloadImage, 'load')
    expect(wrapper.find('img').attributes('src')).toBe('https://varletjs.org/varlet/cat.jpg')

    await wrapper.setData({ src: 'https://varletjs.org/varlet/dog.jpg' })
    await delay(80)
    await trigger(wrapper.element._lazy.preloadImage, 'load')
    expect(wrapper.find('img').attributes('src')).toBe('https://varletjs.org/varlet/dog.jpg')

    wrapper.unmount()
    imageCache.clear()
    mockRestore()
  })
})
