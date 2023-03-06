import Hover from '..'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { mockUserAgent } from '../../utils/jest'

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

test('test hover function binding', async () => {
  const handleHover = jest.fn()

  const Wrapper = {
    directives: { Hover },
    methods: {
      handleHover,
    },
    template: `<div v-hover="handleHover"></div>`,
  }

  const wrapper = mount(Wrapper)

  await wrapper.trigger('mouseenter')
  expect(handleHover).toBeCalledTimes(1)
  expect(handleHover).toBeCalledWith(true)

  await wrapper.trigger('mouseleave')
  expect(handleHover).toBeCalledTimes(2)
  expect(handleHover).toBeCalledWith(false)

  wrapper.unmount()
})

test('test hover style binding on update', async () => {
  const Wrapper = {
    data: () => ({
      count: 1,
    }),
    directives: { Hover },
    template: `<div v-hover="{ color: 'rgb(1, 1, 1)' }">{{ count }}</div>`,
  }

  const wrapper = mount(Wrapper)
  await wrapper.trigger('mouseenter')
  await wrapper.setData({ count: 2 })
  expect(wrapper.find('div').element.style.color).toBe('rgb(1, 1, 1)')
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test hover style binding restore', async () => {
  const Wrapper = {
    directives: { Hover },
    template: `<div style="color: rgb(255, 255, 255)" v-hover="{ color: 'rgb(1, 1, 1)' }"></div>`,
  }

  const wrapper = mount(Wrapper)
  expect(wrapper.find('div').element.style.color).toBe('rgb(255, 255, 255)')
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.trigger('mouseenter')
  expect(wrapper.find('div').element.style.color).toBe('rgb(1, 1, 1)')
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.trigger('mouseleave')
  expect(wrapper.find('div').element.style.color).toBe('rgb(255, 255, 255)')
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})

test('test hover desktop args', async () => {
  const { restore } = mockUserAgent(
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36'
  )

  const Wrapper = {
    directives: { Hover },
    template: `<div v-hover:desktop="{ color: 'rgb(1, 1, 1)' }"></div>`,
  }

  let wrapper = mount(Wrapper)
  await wrapper.trigger('mouseenter')
  expect(wrapper.find('div').element.style.color).toBe('rgb(1, 1, 1)')
  wrapper.unmount()
  restore()

  const { restore: restoreToRaw } = mockUserAgent(
    'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
  )

  wrapper = mount(Wrapper)
  await wrapper.trigger('mouseenter')
  expect(wrapper.find('div').element.style.color).toBe('')
  wrapper.unmount()
  restoreToRaw()
})

test('test hover mobile args', async () => {
  const { restore } = mockUserAgent(
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36'
  )

  const Wrapper = {
    directives: { Hover },
    template: `<div v-hover:mobile="{ color: 'rgb(1, 1, 1)' }"></div>`,
  }

  let wrapper = mount(Wrapper)
  await wrapper.trigger('mouseenter')
  expect(wrapper.find('div').element.style.color).toBe('')
  wrapper.unmount()
  restore()

  const { restore: restoreToRaw } = mockUserAgent(
    'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
  )

  wrapper = mount(Wrapper)
  await wrapper.trigger('mouseenter')
  expect(wrapper.find('div').element.style.color).toBe('rgb(1, 1, 1)')
  wrapper.unmount()
  restoreToRaw()
})
