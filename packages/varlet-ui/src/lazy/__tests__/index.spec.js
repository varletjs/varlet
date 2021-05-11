import example from '../example'
import Lazy, { imageCache } from '..'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { mockIntersectionObserver, trigger } from '../../utils/jest'

test('test lazy example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test lazy plugin', () => {
  const app = createApp({}).use(Lazy)
  expect(app.directive('lazy')).toBeTruthy()
})

const Wrapper = {
  directives: { Lazy },
  data: () => ({
    src: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
    error: 'https://varlet.gitee.io/varlet-ui/error.jpg',
  }),
  template: `
    <img
      :lazy-error="error"
      v-lazy="src"
    >
  `,
}

test('test lazy load use io', async () => {
  const { mockRestore, trigger: triggerCheck } = mockIntersectionObserver()
  const wrapper = mount(Wrapper)
  expect(wrapper.html()).toMatchSnapshot()

  const el = triggerCheck(1)
  await trigger(el._lazy.preloadImage, 'load')
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
  imageCache.clear()
  mockRestore()
})

test('test lazy error use io', async () => {
  const { mockRestore, trigger: triggerCheck } = mockIntersectionObserver()
  const wrapper = mount(Wrapper)
  expect(wrapper.html()).toMatchSnapshot()

  const el = triggerCheck(1)
  await trigger(el._lazy.preloadImage, 'error')
  await trigger(el._lazy.preloadImage, 'error')
  await trigger(el._lazy.preloadImage, 'error')
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
  imageCache.clear()
  mockRestore()
})

test('test lazy updated use io', async () => {
  const { mockRestore, trigger: triggerCheck } = mockIntersectionObserver()
  const wrapper = mount(Wrapper)
  expect(wrapper.html()).toMatchSnapshot()

  let el = triggerCheck(1)
  await trigger(el._lazy.preloadImage, 'load')
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setData({ src: 'https://varlet.gitee.io/varlet-ui/dog.jpg' })
  el = triggerCheck(1)
  await trigger(el._lazy.preloadImage, 'load')
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
  imageCache.clear()
  mockRestore()
})

test('test lazy background-image load use io', async () => {
  const { mockRestore, trigger: triggerCheck } = mockIntersectionObserver()
  const wrapper = mount({
    directives: { Lazy },
    template: `
      <img v-lazy:background-image="'https://varlet.gitee.io/varlet-ui/cat.jpg'">
    `,
  })
  expect(wrapper.html()).toMatchSnapshot()

  const el = triggerCheck(1)
  await trigger(el._lazy.preloadImage, 'load')
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
  imageCache.clear()
  mockRestore()
})
