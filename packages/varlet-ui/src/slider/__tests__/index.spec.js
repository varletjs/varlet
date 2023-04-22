import Slider from '..'
import VarSlider from '../Slider'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay, trigger, mockConsole } from '../../utils/jest'

const originalOffsetWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetWidth')
beforeAll(() => {
  Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
    configurable: true,
    value: 200,
  })
})

afterAll(() => {
  Object.defineProperty(HTMLElement.prototype, 'offsetWidth', originalOffsetWidth)
})

test('test slider plugin', () => {
  const app = createApp({}).use(Slider)
  expect(app.component(Slider.name)).toBeTruthy()
})

describe('test slider props', () => {
  test('test step prop', async () => {
    const { mockRestore } = mockConsole('warn')

    const wrapper = mount({
      components: {
        [VarSlider.name]: VarSlider,
      },
      data: () => ({
        value: 0,
        step: NaN,
      }),
      template: `
        <var-slider v-model="value" :step="step"/>`,
    })

    await wrapper.setData({ step: -1 })
    await wrapper.setData({ step: 3, value: 0 })

    const el = wrapper.find('.var-slider__horizontal__thumb')

    await trigger(el, 'touchstart', 0, 0)
    await trigger(el, 'touchmove', 50, 0)
    await trigger(el, 'touchend', 50, 0)

    expect(wrapper.vm.value).not.toBe(0)
    expect(wrapper.vm.value % 3).toBe(0)
    mockRestore()

    wrapper.unmount()
  })

  test('test range prop', async () => {
    const wrapper = mount(VarSlider, {
      props: {
        range: true,
        modelValue: [1, 2],
      },
    })

    expect(wrapper.findAll('.var-slider__horizontal__thumb').length).toBe(2)

    wrapper.unmount()
  })

  test('test slider labelVisible prop', async () => {
    const wrapper = mount(VarSlider, {
      props: {
        modelValue: 20,
        labelVisible: 'never',
      },
    })
    const el = wrapper.find('.var-slider__horizontal__thumb-label')
    expect(el.classes()).not.toContain('var-slider__horizontal__thumb-label--active')
    await trigger(el, 'touchstart', 0, 0)
    await trigger(el, 'touchmove', 0, 0)
    expect(el.classes()).not.toContain('var-slider__horizontal__thumb-label--active')
    await trigger(el, 'touchend', 0, 0)

    await wrapper.setProps({ labelVisible: 'normal' })
    expect(el.classes()).not.toContain('var-slider__horizontal__thumb-label--active')
    await trigger(el, 'touchstart', 0, 0)
    await trigger(el, 'touchmove', 0, 0)
    expect(el.classes()).toContain('var-slider__horizontal__thumb-label--active')
    await trigger(el, 'touchend', 0, 0)
    expect(el.classes()).not.toContain('var-slider__horizontal__thumb-label--active')

    await wrapper.setProps({ labelVisible: 'always' })
    expect(el.classes()).toContain('var-slider__horizontal__thumb-label--active')
    await trigger(el, 'touchend', 0, 0)
    expect(el.classes()).toContain('var-slider__horizontal__thumb-label--active')

    wrapper.unmount()
  })

  describe('test slider color props', () => {
    test('test activeColor prop', () => {
      const wrapper = mount(VarSlider, {
        props: {
          modelValue: 2,
          activeColor: 'red',
        },
      })

      expect(wrapper.find('.var-slider__horizontal__track-fill').attributes('style')).toContain('background: red;')

      wrapper.unmount()
    })

    test('test trackColor prop', () => {
      const wrapper = mount(VarSlider, {
        props: {
          modelValue: 2,
          trackColor: 'red',
        },
      })

      expect(wrapper.find('.var-slider__horizontal__track-background').attributes('style')).toContain(
        'background: red;'
      )

      wrapper.unmount()
    })

    test('test thumbColor prop', () => {
      const wrapper = mount(VarSlider, {
        props: {
          modelValue: 2,
          thumbColor: 'red',
        },
      })

      expect(wrapper.find('.var-slider__horizontal__thumb-block').attributes('style')).toContain('background: red;')

      wrapper.unmount()
    })

    test('test labelColor and labelTextColor prop', () => {
      const wrapper = mount(VarSlider, {
        props: {
          modelValue: 2,
          labelColor: 'red',
          labelTextColor: 'blue',
        },
      })

      expect(wrapper.find('.var-slider__horizontal__thumb-label').attributes('style')).toContain('background: red;')
      expect(wrapper.find('.var-slider__horizontal__thumb-label').attributes('style')).toContain('color: blue;')

      wrapper.unmount()
    })
  })

  test('test trackHeight prop', () => {
    const wrapper = mount(VarSlider, {
      props: {
        modelValue: 2,
        trackHeight: '4',
      },
    })

    expect(wrapper.find('.var-slider__horizontal__track-background').attributes('style')).toContain('height: 4px;')

    wrapper.unmount()
  })

  test('test slider range', async () => {
    const wrapper = mount({
      components: {
        [VarSlider.name]: VarSlider,
      },
      data: () => ({
        value: 0,
      }),
      template: `
        <var-slider v-model="value" max="50" min="-50"/>`,
    })

    const el = wrapper.find('.var-slider__horizontal__thumb')

    await trigger(el, 'touchstart', 0, 0)
    await trigger(el, 'touchmove', 200, 0)
    await trigger(el, 'touchend', 200, 0)
    expect(wrapper.vm.value).toBe(50)

    await trigger(el, 'touchstart', 0, 0)
    await trigger(el, 'touchmove', -200, 0)
    await trigger(el, 'touchend', -200, 0)
    expect(wrapper.vm.value).toBe(-50)

    wrapper.unmount()
  })

  test('test thumbSize prop', () => {
    const wrapper = mount(VarSlider, {
      props: {
        modelValue: 2,
        thumbSize: '20',
        labelVisible: 'always',
      },
    })

    expect(wrapper.find('.var-slider__horizontal__thumb-label--active').attributes('style')).toContain('height: 40px;')
    wrapper.unmount()
  })

  test('test slider not available', async () => {
    const changeFn = jest.fn()
    const startFn = jest.fn()
    const endFn = jest.fn()

    const template = `
    <var-slider v-model="value" :disabled="disabled" :readonly="readonly" @change="changeFn" @start="startFn" @end="endFn" />
  `
    const wrapper = mount({
      components: {
        [VarSlider.name]: VarSlider,
      },
      data() {
        return {
          value: 10,
          disabled: true,
          readonly: false,
        }
      },
      methods: {
        changeFn,
        startFn,
        endFn,
      },
      template,
    })

    const el = wrapper.find('.var-slider__horizontal__thumb')

    await trigger(el, 'touchstart', 0, 0)
    await trigger(el, 'touchmove', 0, 50)
    await trigger(el, 'touchend', 0, 50)

    await wrapper.setData({
      disabled: false,
      readonly: true,
    })

    await trigger(el, 'touchstart', 0, 0)
    await trigger(el, 'touchmove', 0, 50)
    await trigger(el, 'touchend', 0, 50)

    expect(startFn).toHaveBeenCalledTimes(0)
    expect(changeFn).toHaveBeenCalledTimes(0)
    expect(endFn).toHaveBeenCalledTimes(0)

    wrapper.unmount()
  })

  test('test slider value legal', async () => {
    const fn = jest.fn()
    const { mockRestore } = mockConsole('error', fn)
    const template = `<var-slider v-model="value" :range="range" /> `

    const wrapper = mount({
      components: {
        [VarSlider.name]: VarSlider,
      },
      data: () => ({
        value: 0,
        range: true,
      }),
      template,
    })

    await wrapper.setData({ value: [] })
    await wrapper.setData({ range: false, value: [] })
    expect(fn).toHaveBeenCalledTimes(3)

    mockRestore()
  })

  test('test slider rules prop', async () => {
    const wrapper = mount({
      components: {
        [VarSlider.name]: VarSlider,
      },
      data: () => ({
        value: 0,
      }),
      template: `<var-slider v-model="value" :rules="[(v) => v > 10 || 'error message']" />`,
    })

    const el = wrapper.find('.var-slider__horizontal__thumb')

    await trigger(el, 'touchstart', 0, 0)
    await trigger(el, 'touchmove', 5, 0)
    await trigger(el, 'touchend', 5, 0)
    await delay(100)
    expect(wrapper.find('.var-slider--error').exists()).toBeTruthy()

    await trigger(el, 'touchstart', 0, 0)
    await trigger(el, 'touchmove', 200, 0)
    await trigger(el, 'touchend', 200, 0)
    await delay(100)
    expect(wrapper.find('.var-slider--error').exists()).toBeFalsy()

    wrapper.unmount()
  })
})

test('test slider events', async () => {
  const changeFn = jest.fn()
  const startFn = jest.fn()
  const endFn = jest.fn()

  const template = `
    <var-slider v-model="value" :range="range" @change="changeFn" @start="startFn" @end="endFn" />
  `
  const wrapper = mount({
    components: {
      [VarSlider.name]: VarSlider,
    },
    data() {
      return {
        value: 10,
        range: false,
      }
    },
    methods: {
      changeFn,
      startFn,
      endFn,
    },
    template,
  })

  const el = wrapper.find('.var-slider__horizontal__thumb')
  const blockEl = wrapper.find('.var-slider__horizontal__block')

  await trigger(el, 'touchstart', 0, 0)

  expect(startFn).toHaveBeenCalledTimes(1)

  await trigger(el, 'touchmove', 50, 0)
  await trigger(el, 'touchend', 50, 0)

  expect(changeFn).toHaveBeenCalled()
  expect(endFn).toHaveBeenCalledTimes(1)
  expect(wrapper.vm.value).not.toBe(10)

  await wrapper.setData({
    range: true,
    value: [20, 30],
  })

  const el1 = wrapper.findAll('.var-slider__horizontal__thumb')[1]

  await trigger(el1, 'touchstart', 0, 0)
  await trigger(el1, 'touchmove', 50, 0)
  await trigger(el1, 'touchend', 50, 0)

  expect(wrapper.vm.value[1]).not.toBe(30)

  await wrapper.setData({
    range: true,
    value: [20, 30],
  })
  await blockEl.trigger('click')

  expect(wrapper.vm.value).not.toEqual([20, 30])

  wrapper.unmount()
})
