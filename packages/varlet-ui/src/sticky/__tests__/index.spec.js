import example from '../example'
import Sticky from '..'
import VarSticky from '../Sticky'
import { trigger } from '../../utils/jest'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

test('test sticky example', () => {
  const wrapper = mount(example, { attachTo: document.body })
  expect(wrapper.html()).toMatchSnapshot()
})

test('test sticky plugin', () => {
  const app = createApp({}).use(Sticky)
  expect(app.component(Sticky.name)).toBeTruthy()
})

test('test sticky z-index', () => {
  const wrapper = mount(VarSticky, {
    props: {
      zIndex: 100,
    },
    attachTo: document.body,
  })

  expect(wrapper.element.style.zIndex).toBe('100')
  expect(wrapper.html()).toMatchSnapshot()
})

test('test sticky onScroll', async () => {
  const onScroll = jest.fn()

  mount(VarSticky, {
    props: {
      onScroll,
    },
    slots: {
      default: () => 'sticky content',
    },
    attachTo: document.body,
  })

  expect(onScroll).toHaveBeenCalledTimes(1)
  await trigger(window, 'scroll')
  expect(onScroll).toHaveBeenCalledTimes(2)
})

test('test sticky scrolling with css sticky position', async () => {
  const wrapper = mount(VarSticky, {
    props: {
      offsetTop: 100,
    },
    slots: {
      default: () => 'sticky content',
    },
    attachTo: document.body,
  })

  jest.spyOn(window, 'getComputedStyle').mockReturnValue({ position: 'sticky' })

  jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({ top: 200 })
  await trigger(window, 'scroll')
  expect(wrapper.html()).toMatchSnapshot()

  jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({
    top: 100,
  })
  await trigger(window, 'scroll')
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})

test('test sticky scrolling without css sticky position', async () => {
  const wrapper = mount(VarSticky, {
    props: {
      offsetTop: 100,
    },
    slots: {
      default: () => 'sticky content',
    },
    attachTo: document.body,
  })

  jest.spyOn(window, 'getComputedStyle').mockReturnValue({ position: 'relative' })

  jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({
    top: 200,
  })
  await trigger(window, 'scroll')
  expect(wrapper.html()).toMatchSnapshot()

  jest.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue({
    top: 100,
  })
  await trigger(window, 'scroll')
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})
