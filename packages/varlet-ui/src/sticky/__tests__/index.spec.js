import Sticky from '..'
import VarSticky from '../Sticky'
import { delay, mockDoubleRaf, trigger } from '../../utils/jest'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

mockDoubleRaf()

test('test sticky plugin', () => {
  const app = createApp({}).use(Sticky)
  expect(app.component(Sticky.name)).toBeTruthy()
})

test('test sticky z-index', async () => {
  const wrapper = mount(VarSticky, {
    props: {
      zIndex: 100,
    },
    attachTo: document.body,
  })
  await delay(100)

  expect(wrapper.element.style.zIndex).toBe('100')
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test sticky onScroll', async () => {
  const onScroll = jest.fn()

  const wrapper = mount(VarSticky, {
    props: {
      onScroll,
    },
    slots: {
      default: () => 'sticky content',
    },
    attachTo: document.body,
  })
  await delay(100)

  expect(onScroll).toHaveBeenCalledTimes(1)
  await trigger(window, 'scroll')
  expect(onScroll).toHaveBeenCalledTimes(2)
  wrapper.unmount()
})

test('test sticky scrolling with css sticky position', async () => {
  const mockGetComputedStyle = jest.spyOn(window, 'getComputedStyle').mockReturnValue({ position: 'sticky' })

  const wrapper = mount(VarSticky, {
    props: {
      offsetTop: 100,
      cssMode: true,
    },
    slots: {
      default: () => 'sticky content',
    },
    attachTo: document.body,
  })
  await delay(100)

  const mockGetBoundingClientRect = jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({ top: 200 })
  await trigger(window, 'scroll')
  expect(wrapper.html()).toMatchSnapshot()

  jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({
    top: 100,
  })
  await trigger(window, 'scroll')
  expect(wrapper.html()).toMatchSnapshot()

  mockGetComputedStyle.mockRestore()
  mockGetBoundingClientRect.mockRestore()
  wrapper.unmount()
})

test('test sticky scrolling without css sticky position', async () => {
  const mockGetComputedStyle = jest.spyOn(window, 'getComputedStyle').mockReturnValue({ position: 'relative' })

  const wrapper = mount(VarSticky, {
    props: {
      offsetTop: 100,
    },
    slots: {
      default: () => 'sticky content',
    },
    attachTo: document.body,
  })
  await delay(100)

  const mockGetBoundingClientRect = jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({ top: 200 })

  await trigger(window, 'scroll')
  expect(wrapper.html()).toMatchSnapshot()

  jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({ top: 100 })
  await trigger(window, 'scroll')
  expect(wrapper.html()).toMatchSnapshot()

  mockGetComputedStyle.mockRestore()
  mockGetBoundingClientRect.mockRestore()
  wrapper.unmount()
})

test('test sticky disabled with css sticky position', async () => {
  const mockGetComputedStyle = jest.spyOn(window, 'getComputedStyle').mockReturnValue({ position: 'sticky' })

  const wrapper = mount(VarSticky, {
    props: {
      offsetTop: 100,
      cssMode: true,
      disabled: true,
    },
    slots: {
      default: () => 'sticky content',
    },
    attachTo: document.body,
  })
  await delay(100)

  const mockGetBoundingClientRect = jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({ top: 200 })
  await trigger(window, 'scroll')
  expect(wrapper.html()).toMatchSnapshot()

  jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({
    top: 100,
  })
  await trigger(window, 'scroll')
  expect(wrapper.html()).toMatchSnapshot()

  mockGetComputedStyle.mockRestore()
  mockGetBoundingClientRect.mockRestore()
  wrapper.unmount()
})

test('test sticky disabled without css sticky position', async () => {
  const mockGetComputedStyle = jest.spyOn(window, 'getComputedStyle').mockReturnValue({ position: 'relative' })

  const wrapper = mount(VarSticky, {
    props: {
      offsetTop: 100,
      disabled: true,
    },
    slots: {
      default: () => 'sticky content',
    },
    attachTo: document.body,
  })
  await delay(100)

  const mockGetBoundingClientRect = jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({ top: 200 })

  await trigger(window, 'scroll')
  expect(wrapper.html()).toMatchSnapshot()

  jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({ top: 100 })
  await trigger(window, 'scroll')
  expect(wrapper.html()).toMatchSnapshot()

  mockGetComputedStyle.mockRestore()
  mockGetBoundingClientRect.mockRestore()
  wrapper.unmount()
})
