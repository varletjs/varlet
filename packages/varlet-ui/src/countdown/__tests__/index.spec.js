import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vite-plus/test'
import { createApp, defineComponent, KeepAlive } from 'vue'
import Countdown from '..'
import { delay } from '../../utils/test'
import VarCountdown from '../Countdown'

test('countdown plugin', () => {
  const app = createApp({}).use(Countdown)
  expect(app.component(Countdown.name)).toBeTruthy()
})

describe('test countdown props', () => {
  test('format prop', async () => {
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

  test('autostart prop', async () => {
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

  test('onChange event', async () => {
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

  test('onEnd event', async () => {
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

  test('countdown restarts when time changes', async () => {
    vi.spyOn(performance, 'now').mockReturnValue(0)

    const wrapper = mount(VarCountdown, {
      props: {
        time: 1000,
        format: 'ss',
        autoStart: false,
      },
    })

    await delay(0)
    expect(wrapper.text()).toBe('01')

    await wrapper.setProps({ time: 2000 })
    await delay(0)

    expect(wrapper.text()).toBe('02')

    wrapper.unmount()
  })

  test('countdown auto restarts on time change', async () => {
    const onChange = vi.fn()
    const wrapper = mount(VarCountdown, {
      props: {
        time: 1000,
        autoStart: true,
        onChange,
      },
    })

    await delay(0)
    const calledCount = onChange.mock.calls.length

    await wrapper.setProps({ time: 2000 })
    await delay(20)

    expect(onChange.mock.calls.length).toBeGreaterThan(calledCount)

    wrapper.unmount()
  })

  test('countdown start method', async () => {
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

  test('countdown pause method', async () => {
    const wrapper = mount(Wrapper)
    wrapper.vm.$refs.countdown.start()

    await delay(50)

    wrapper.vm.$refs.countdown.pause()
    const text = wrapper.text()

    await delay(50)
    expect(wrapper.text()).toBe(text)

    wrapper.unmount()
  })

  test('countdown reset method', async () => {
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

test('countdown format with milliseconds', async () => {
  const wrapper = mount(VarCountdown, {
    props: {
      time: 5432,
      format: 'ss-SSS',
      autoStart: false,
    },
  })

  await delay(0)
  expect(wrapper.text()).toMatch(/\d{2}-\d{3}/)

  wrapper.unmount()
})

test('countdown format with single S', async () => {
  const wrapper = mount(VarCountdown, {
    props: {
      time: 5432,
      format: 'ss-S',
      autoStart: false,
    },
  })

  await delay(0)
  expect(wrapper.text()).toMatch(/\d{2}-\d/)

  wrapper.unmount()
})

test('countdown keep-alive pause and resume', async () => {
  const onChange = vi.fn()

  const Wrapper = defineComponent({
    components: {
      KeepAlive,
      VarCountdown,
    },
    data: () => ({
      show: true,
    }),
    template: `
      <keep-alive>
        <var-countdown v-if="show" :time="1000" :auto-start="false" :on-change="onChange" />
      </keep-alive>
    `,
    methods: {
      onChange,
    },
  })

  const wrapper = mount(Wrapper)
  const countdown = wrapper.findComponent(VarCountdown)

  countdown.vm.start()
  await delay(20)
  const calledCount = onChange.mock.calls.length

  wrapper.vm.show = false
  await delay(0)

  await delay(20)
  expect(onChange.mock.calls.length).toBe(calledCount)

  wrapper.vm.show = true
  await delay(0)

  await delay(20)
  expect(onChange.mock.calls.length).toBeGreaterThan(calledCount)

  wrapper.unmount()
})

test('countdown keep-alive does not resume when it was not running', async () => {
  const onChange = vi.fn()

  const Wrapper = defineComponent({
    components: {
      KeepAlive,
      VarCountdown,
    },
    data: () => ({
      show: true,
    }),
    template: `
      <keep-alive>
        <var-countdown v-if="show" :time="1000" :auto-start="false" :on-change="onChange" />
      </keep-alive>
    `,
    methods: {
      onChange,
    },
  })

  const wrapper = mount(Wrapper)
  await delay(0)
  const calledCount = onChange.mock.calls.length

  // deactivate without starting, then reactivate -> must stay paused
  wrapper.vm.show = false
  await delay(0)

  wrapper.vm.show = true
  await delay(20)
  expect(onChange.mock.calls.length).toBe(calledCount)

  wrapper.unmount()
})

test('countdown restarts from full time after it ends', async () => {
  // earlier tests leave performance.now mocked, restore it so the countdown can actually end
  vi.restoreAllMocks()

  const onEnd = vi.fn()
  const onChange = vi.fn()

  const wrapper = mount(VarCountdown, {
    props: {
      time: 10,
      autoStart: true,
      onEnd,
      onChange,
    },
  })

  await delay(60)
  expect(onEnd).toHaveBeenCalled()

  const endedCalls = onChange.mock.calls.length

  // the remaining time is now 0, so starting again falls back to the full time prop
  wrapper.vm.pause()
  wrapper.vm.start()
  await delay(20)

  expect(onChange.mock.calls.length).toBeGreaterThan(endedCalls)

  wrapper.unmount()
})
