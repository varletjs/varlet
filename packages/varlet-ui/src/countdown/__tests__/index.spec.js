import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import Countdown from '..'
import { delay } from '../../utils/test'
import VarCountdown from '../Countdown'

test('test countdown plugin', () => {
  const app = createApp({}).use(Countdown)
  expect(app.component(Countdown.name)).toBeTruthy()
})

describe('test countdown props', () => {
  test('test format prop', async () => {
    const wrapper = mount(VarCountdown, {
      props: {
        time: 108000000,
        format: 'HH-mm-ss-SS',
      },
    })

    await delay(0)

    const reg = /(\d{2}-){3}\d{2}/
    expect(reg.test(wrapper.text())).toBe(true)

    wrapper.unmount()
  })

  test('test autostart prop', async () => {
    const wrapper = mount(VarCountdown, {
      props: {
        time: 10800,
        autoStart: false,
      },
    })

    await delay(0)
    const text = wrapper.text()

    await delay(100)
    expect(wrapper.text()).toBe(text)

    wrapper.unmount()
  })
})

describe('test countdown events', () => {
  const onEnd = vi.fn()
  const onChange = vi.fn()

  test('test onChange event', async () => {
    const wrapper = mount(VarCountdown, {
      props: {
        time: 1,
        onChange,
      },
    })

    await delay(10)
    expect(onChange).toHaveBeenCalled()
    expect(onChange.mock.calls[0][0]).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 1,
    })

    wrapper.unmount()
  })

  test('test onEnd event', async () => {
    const wrapper = mount(VarCountdown, {
      props: {
        time: 1,
        onEnd,
      },
    })

    await delay(100)
    expect(onEnd).toBeCalledTimes(1)

    wrapper.unmount()
  })
})

describe('test countdown methods', () => {
  const Wrapper = {
    components: {
      [VarCountdown.name]: VarCountdown,
    },
    data() {
      return {
        time: 108000,
      }
    },
    template: `
      <var-countdown :time="time" ref="countdown" :auto-start="false"/>`,
  }

  test('test countdown start method', async () => {
    let callCount = 0
    vi.spyOn(performance, 'now').mockImplementation(() => {
      callCount += 1
      return 1000 + 500 * callCount
    })

    const wrapper = mount(Wrapper)
    await delay(0)
    const text = wrapper.text()

    await delay(50)
    expect(wrapper.text()).toBe(text)

    wrapper.vm.$refs.countdown.start()

    await delay(600)
    expect(wrapper.text()).not.toBe(text)

    wrapper.unmount()
  })

  test('test countdown pause method', async () => {
    const wrapper = mount(Wrapper)
    wrapper.vm.$refs.countdown.start()

    await delay(50)

    wrapper.vm.$refs.countdown.pause()
    const text = wrapper.text()

    await delay(50)
    expect(wrapper.text()).toBe(text)

    wrapper.unmount()
  })

  test('test countdown reset method', async () => {
    vi.spyOn(performance, 'now').mockReturnValue(1000)

    const wrapper = mount(Wrapper)
    await delay(0)
    const text = wrapper.text()

    wrapper.vm.$refs.countdown.start()

    await delay(50)

    wrapper.vm.$refs.countdown.reset()

    await delay(50)
    expect(wrapper.text()).toBe(text)

    wrapper.unmount()
  })
})
