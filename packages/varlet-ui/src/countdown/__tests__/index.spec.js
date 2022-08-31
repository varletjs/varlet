import Countdown from '..'
import VarCountdown from '../Countdown'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay } from '../../utils/test'

test('test countdown plugin', () => {
  const app = createApp({}).use(Countdown)
  expect(app.component(Countdown.name)).toBeTruthy()
})

describe('test countdown props', () => {
  test('test format prop', () => {
    const wrapper = mount(VarCountdown, {
      props: {
        time: 108000000,
        format: 'HH-mm-ss-SS',
      },
    })

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
    const wrapper = mount(Wrapper)
    const text = wrapper.text()

    await delay(50)
    expect(wrapper.text()).toBe(text)

    wrapper.vm.$refs.countdown.start()

    await delay(100)
    expect(wrapper.text()).not.toBe(text)

    wrapper.unmount()
  })

  test('test countdown start method', async () => {
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
    const wrapper = mount(Wrapper)
    const text = wrapper.text()

    wrapper.vm.$refs.countdown.start()

    await delay(50)

    wrapper.vm.$refs.countdown.reset()

    await delay(50)
    expect(wrapper.text()).toBe(text)

    wrapper.unmount()
  })
})
