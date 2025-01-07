import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import CountTo from '..'
import { delay } from '../../utils/test'

test('test count-to plugin', () => {
  const app = createApp({}).use(CountTo)
  expect(app.component(CountTo.name)).toBeTruthy()
})

const DURATION = 100

test('test count-to basic animation', async () => {
  const wrapper = mount(CountTo, {
    props: {
      from: 0,
      to: 100,
      duration: DURATION,
    },
  })

  expect(wrapper.text()).toBe('0')
  await delay(DURATION + 20)
  expect(wrapper.text()).toBe('100')
  wrapper.unmount()
})

test('test count-to props change', async () => {
  const wrapper = mount(CountTo, {
    props: {
      from: 0,
      to: 100,
      duration: DURATION,
    },
  })

  expect(wrapper.text()).toBe('0')
  await delay(DURATION + 20)
  expect(wrapper.text()).toBe('100')
  await wrapper.setProps({ from: -200, to: 200 })
  expect(wrapper.text()).toBe('-200')
  await delay(DURATION + 20)
  expect(wrapper.text()).toBe('200')
  wrapper.unmount()
})

test('test count-to slot', async () => {
  const wrapper = mount(CountTo, {
    props: {
      from: 0,
      to: 100,
      duration: DURATION,
    },
    slots: {
      default: ({ value }) => value * 2,
    },
  })

  expect(wrapper.text()).toBe('0')
  await delay(DURATION + 20)
  expect(wrapper.text()).toBe('200')
  wrapper.unmount()
})

test('test count-to manual control', async () => {
  const wrapper = mount(CountTo, {
    props: {
      from: 0,
      to: 100,
      duration: DURATION,
      autoStart: false,
    },
  })

  expect(wrapper.text()).toBe('0')
  await delay(DURATION + 20)
  expect(wrapper.text()).toBe('0')
  await wrapper.vm.start()
  await delay(DURATION + 20)
  expect(wrapper.text()).toBe('100')
  await wrapper.vm.reset()
  expect(wrapper.text()).toBe('0')
  await wrapper.vm.pause()
  await delay(DURATION + 20)
  expect(wrapper.text()).toBe('0')
  await wrapper.vm.start()
  await delay(DURATION + 20)
  expect(wrapper.text()).toBe('100')

  wrapper.unmount()
})

test('test count-to precision', async () => {
  const wrapper = mount(CountTo, {
    props: {
      from: 0,
      to: 33.333,
      duration: DURATION,
      precision: 2,
    },
  })

  expect(wrapper.text()).toBe('0')
  await delay(DURATION + 20)
  expect(wrapper.text()).toBe('33.33')
  wrapper.unmount()
})

test('test count-to timing function', async () => {
  const wrapper = mount(CountTo, {
    props: {
      from: 0,
      to: 100,
      duration: DURATION,
      timingFunction: () => 1,
    },
  })

  await delay(20)
  expect(wrapper.text()).toBe('100')
  wrapper.unmount()
})

test('test count-to end event', async () => {
  const onEnd = vi.fn()

  const wrapper = mount(CountTo, {
    props: {
      from: 0,
      to: 100,
      duration: DURATION,
      onEnd,
    },
  })

  await delay(DURATION + 20)
  expect(onEnd).toHaveBeenCalled()
  wrapper.unmount()
})
