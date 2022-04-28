import Progress from '..'
import VarProgress from '../Progress'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

test('test progress use', () => {
  const app = createApp({}).use(Progress)
  expect(app.component(Progress.name)).toBeTruthy()
})

describe('test progress component props', () => {
  test('test progress mode', async () => {
    const wrapper = mount(VarProgress, {
      props: { mode: 'linear' },
    })

    expect(wrapper.find('.var-progress__linear').exists()).toBe(true)
    await wrapper.setProps({ mode: 'circle' })
    expect(wrapper.find('.var-progress__circle').exists()).toBe(true)
    wrapper.unmount()
  })

  test('test progress value', () => {
    const wrapper = mount(VarProgress, {
      props: {
        value: 20,
      },
    })

    expect(wrapper.find('.var-progress__linear-certain').attributes('style')).toContain('width: 20%;')
    wrapper.unmount()
  })

  test('test progress line-width', () => {
    const wrapper = mount(VarProgress, {
      props: {
        lineWidth: 5,
      },
    })

    expect(wrapper.find('.var-progress__linear-block').attributes('style')).toContain('height: 5px;')
    wrapper.unmount()
  })

  test('test progress color', () => {
    const wrapper = mount(VarProgress, {
      props: {
        color: 'red',
      },
    })

    expect(wrapper.find('.var-progress__linear-certain').attributes('style')).toContain('background: red;')
    wrapper.unmount()
  })

  test('test progress track-color', () => {
    const wrapper = mount(VarProgress, {
      props: {
        trackColor: 'red',
      },
    })

    expect(wrapper.find('.var-progress__linear-background').attributes('style')).toContain('background: red;')
    wrapper.unmount()
  })

  test('test progress label', async () => {
    const wrapper = mount(VarProgress, {
      props: {
        label: true,
      },
    })

    expect(wrapper.find('.var-progress__linear-label').exists()).toBe(true)
    await wrapper.setProps({ label: false })
    expect(wrapper.find('.var-progress__linear-label').exists()).toBe(false)
    wrapper.unmount()
  })

  test('test progress track', async () => {
    const wrapper = mount(VarProgress, {
      props: {
        track: true,
      },
    })

    expect(wrapper.find('.var-progress__linear-background').exists()).toBe(true)
    await wrapper.setProps({ track: false })
    expect(wrapper.find('.var-progress__linear-background').exists()).toBe(false)
    wrapper.unmount()
  })

  test('test progress ripple', async () => {
    const wrapper = mount(VarProgress, {
      props: {
        ripple: true,
      },
    })

    expect(wrapper.find('.var-progress__linear-ripple').exists()).toBe(true)
    await wrapper.setProps({ ripple: false })
    expect(wrapper.find('.var-progress__linear-ripple').exists()).toBe(false)
    wrapper.unmount()
  })

  test('test progress size', () => {
    const wrapper = mount(VarProgress, {
      props: {
        size: 20,
        mode: 'circle',
      },
    })

    expect(wrapper.find('.var-progress__circle').attributes('style')).toContain('width: 20px; height: 20px;')
    wrapper.unmount()
  })

  test('test progress rotate', () => {
    const wrapper = mount(VarProgress, {
      props: {
        rotate: 10,
        mode: 'circle',
      },
    })

    expect(wrapper.find('.var-progress__circle-svg').attributes('style')).toContain('transform: rotate(-80deg);')
    wrapper.unmount()
  })
})

test('test progress component default slots', () => {
  const wrapper = mount(VarProgress, {
    props: {
      label: true,
    },
    slots: {
      default: () => 'This is default slots',
    },
  })

  expect(wrapper.find('.var-progress__linear-label').element.textContent).toBe('This is default slots')
  wrapper.unmount()
})
