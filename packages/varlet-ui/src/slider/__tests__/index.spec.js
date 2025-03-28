import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { afterAll, beforeAll, describe, expect, test, vi } from 'vitest'
import { z } from 'zod'
import Slider from '..'
import { delay, mockConsole, trigger } from '../../utils/test'
import VarSlider from '../Slider'

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

test('slider plugin', () => {
  const app = createApp({}).use(Slider)
  expect(app.component(Slider.name)).toBeTruthy()
})

describe('test slider props', () => {
  test('slider direction prop', async () => {
    const wrapper = mount(VarSlider)

    expect(wrapper.find('.var-slider__horizontal').exists()).toBe(true)

    await wrapper.setProps({
      direction: 'vertical',
    })
    expect(wrapper.find('.var-slider__vertical').exists()).toBe(true)

    wrapper.unmount()
  })

  test('step prop', async () => {
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
        <var-slider v-model="value" :step="step" />`,
    })

    await wrapper.setData({ step: -1 })
    await wrapper.setData({ step: 3, value: 0 })

    const el = wrapper.find('.var-slider__horizontal-thumb')

    await trigger(el, 'touchstart', 0, 0)
    await trigger(document, 'touchmove', 50, 0)
    await trigger(document, 'touchend', 50, 0)

    expect(wrapper.vm.value).not.toBe(0)
    expect(wrapper.vm.value % 3).toBe(0)
    mockRestore()

    wrapper.unmount()
  })

  test('range prop', () => {
    const wrapper = mount(VarSlider, {
      props: {
        range: true,
        modelValue: [1, 2],
      },
    })

    expect(wrapper.findAll('.var-slider__horizontal-thumb').length).toBe(2)

    wrapper.unmount()
  })

  test('slider labelVisible prop', async () => {
    const wrapper = mount(VarSlider, {
      props: {
        modelValue: 20,
        labelVisible: 'never',
      },
    })
    const el = wrapper.find('.var-slider__horizontal-thumb-label')
    expect(el.classes()).not.toContain('var-slider__horizontal-thumb-label--active')
    await trigger(el, 'touchstart', 0, 0)
    await trigger(document, 'touchmove', 0, 0)
    expect(el.classes()).not.toContain('var-slider__horizontal-thumb-label--active')
    await trigger(document, 'touchend', 0, 0)

    await wrapper.setProps({ labelVisible: 'normal' })
    expect(el.classes()).not.toContain('var-slider__horizontal-thumb-label--active')
    await trigger(el, 'touchstart', 0, 0)
    await trigger(document, 'touchmove', 0, 0)
    expect(el.classes()).toContain('var-slider__horizontal-thumb-label--active')
    await trigger(document, 'touchend', 0, 0)
    expect(el.classes()).not.toContain('var-slider__horizontal-thumb-label--active')

    await wrapper.setProps({ labelVisible: 'always' })
    expect(el.classes()).toContain('var-slider__horizontal-thumb-label--active')
    await trigger(document, 'touchend', 0, 0)
    expect(el.classes()).toContain('var-slider__horizontal-thumb-label--active')

    wrapper.unmount()
  })

  describe('test slider color props', () => {
    test('activeColor prop', () => {
      const wrapper = mount(VarSlider, {
        props: {
          modelValue: 2,
          activeColor: 'red',
        },
      })

      expect(wrapper.find('.var-slider__horizontal-track-fill').attributes('style')).toContain('background: red;')

      wrapper.unmount()
    })

    test('trackColor prop', () => {
      const wrapper = mount(VarSlider, {
        props: {
          modelValue: 2,
          trackColor: 'red',
        },
      })

      expect(wrapper.find('.var-slider__horizontal-track-background').attributes('style')).toContain('background: red;')

      wrapper.unmount()
    })

    test('thumbColor prop', () => {
      const wrapper = mount(VarSlider, {
        props: {
          modelValue: 2,
          thumbColor: 'red',
        },
      })

      expect(wrapper.find('.var-slider__horizontal-thumb-block').attributes('style')).toContain('background: red;')

      wrapper.unmount()
    })

    test('labelColor and labelTextColor prop', () => {
      const wrapper = mount(VarSlider, {
        props: {
          modelValue: 2,
          labelColor: 'red',
          labelTextColor: 'blue',
        },
      })

      expect(wrapper.find('.var-slider__horizontal-thumb-label').attributes('style')).toContain('background: red;')
      expect(wrapper.find('.var-slider__horizontal-thumb-label').attributes('style')).toContain('color: blue;')

      wrapper.unmount()
    })
  })

  test('trackHeight prop', async () => {
    const wrapper = mount(VarSlider, {
      props: {
        modelValue: 2,
        trackHeight: '4',
      },
    })

    expect(wrapper.find('.var-slider__horizontal-track-background').attributes('style')).toContain('height: 4px;')

    await wrapper.setProps({
      trackHeight: 8,
    })
    expect(wrapper.find('.var-slider__horizontal-track-background').attributes('style')).toContain('height: 8px;')

    wrapper.unmount()
  })

  test('slider range', async () => {
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

    const el = wrapper.find('.var-slider__horizontal-thumb')
    await trigger(el, 'touchstart', 0, 0)
    await trigger(document, 'touchmove', 200, 0)
    await trigger(document, 'touchend', 200, 0)
    expect(wrapper.vm.value).toBe(50)

    await trigger(el, 'touchstart', 0, 0)
    await trigger(document, 'touchmove', -200, 0)
    await trigger(document, 'touchend', -200, 0)
    expect(wrapper.vm.value).toBe(-50)

    wrapper.unmount()
  })

  test('thumbSize prop', () => {
    const wrapper = mount(VarSlider, {
      props: {
        modelValue: 2,
        thumbSize: '20',
        labelVisible: 'always',
      },
    })

    expect(wrapper.find('.var-slider__horizontal-thumb-label--active').attributes('style')).toContain(
      'height: 20px; width: 20px;',
    )
    wrapper.unmount()
  })

  test('slider not available', async () => {
    const changeFn = vi.fn()
    const startFn = vi.fn()
    const endFn = vi.fn()

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

    expect(wrapper.find('.var-slider--disabled').exists()).toBe(true)
    expect(wrapper.find('.var-slider__horizontal-thumb').attributes('aria-disabled')).toBe('true')
    expect(wrapper.find('.var-slider__horizontal-thumb').attributes('tabindex')).toBe(undefined)

    const el = wrapper.find('.var-slider__horizontal-thumb')

    await trigger(el, 'touchstart', 0, 0)
    await trigger(el, 'touchmove', 0, 50)
    await trigger(el, 'touchend', 0, 50)

    await wrapper.setData({
      disabled: false,
      readonly: true,
    })

    expect(wrapper.find('.var-slider--disabled').exists()).toBe(false)
    expect(wrapper.find('.var-slider__horizontal-thumb').attributes('aria-disabled')).toBe(undefined)
    expect(wrapper.find('.var-slider__horizontal-thumb').attributes('tabindex')).toBe('0')

    await trigger(el, 'touchstart', 0, 0)
    await trigger(el, 'touchmove', 0, 50)
    await trigger(el, 'touchend', 0, 50)

    expect(startFn).toHaveBeenCalledTimes(0)
    expect(changeFn).toHaveBeenCalledTimes(0)
    expect(endFn).toHaveBeenCalledTimes(0)

    wrapper.unmount()
  })

  test('slider getValue function when the type of value is number', async () => {
    const wrapper = mount(VarSlider, {
      props: {
        modelValue: 2,
      },
    })

    expect(wrapper.find('.var-slider__horizontal-thumb').attributes('aria-valuemin')).toBe('0')
    expect(wrapper.find('.var-slider__horizontal-thumb').attributes('aria-valuemax')).toBe('100')
    expect(wrapper.find('.var-slider__horizontal-thumb').attributes('aria-valuenow')).toBe('2')

    await wrapper.setProps({
      modelValue: -1,
    })
    expect(wrapper.find('.var-slider__horizontal-thumb').attributes('aria-valuenow')).toBe('0')

    await wrapper.setProps({
      modelValue: 101,
    })
    expect(wrapper.find('.var-slider__horizontal-thumb').attributes('aria-valuenow')).toBe('100')

    wrapper.unmount()
  })

  test('slider getValue function when the type of value is array', async () => {
    const wrapper = mount(VarSlider, {
      props: {
        modelValue: [2, 4],
        range: true,
      },
    })

    expect(wrapper.findAll('.var-slider__horizontal-thumb')[0].attributes('aria-valuemin')).toBe('0')
    expect(wrapper.findAll('.var-slider__horizontal-thumb')[0].attributes('aria-valuemin')).toBe('0')
    expect(wrapper.findAll('.var-slider__horizontal-thumb')[1].attributes('aria-valuemax')).toBe('100')
    expect(wrapper.findAll('.var-slider__horizontal-thumb')[1].attributes('aria-valuemax')).toBe('100')
    expect(wrapper.findAll('.var-slider__horizontal-thumb')[0].attributes('aria-valuenow')).toBe('2')
    expect(wrapper.findAll('.var-slider__horizontal-thumb')[1].attributes('aria-valuenow')).toBe('4')

    await wrapper.setProps({
      modelValue: [-1, 4],
    })
    expect(wrapper.findAll('.var-slider__horizontal-thumb')[0].attributes('aria-valuenow')).toBe('0')
    expect(wrapper.findAll('.var-slider__horizontal-thumb')[1].attributes('aria-valuenow')).toBe('4')

    await wrapper.setProps({
      modelValue: [1, 400],
    })
    expect(wrapper.findAll('.var-slider__horizontal-thumb')[0].attributes('aria-valuenow')).toBe('1')
    expect(wrapper.findAll('.var-slider__horizontal-thumb')[1].attributes('aria-valuenow')).toBe('100')

    wrapper.unmount()
  })

  test('slider value legal', async () => {
    const fn = vi.fn()
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

  test('slider rules prop', async () => {
    const wrapper = mount({
      components: {
        [VarSlider.name]: VarSlider,
      },
      data: () => ({
        value: 0,
      }),
      template: `<var-slider v-model="value" :rules="[(v) => v > 10 || 'error message']" />`,
    })

    const el = wrapper.find('.var-slider__horizontal-thumb')

    await trigger(el, 'touchstart', 0, 0)
    await trigger(document, 'touchmove', 5, 0)
    await trigger(document, 'touchend', 5, 0)
    await delay(100)
    expect(wrapper.find('.var-slider__horizontal--error').exists()).toBeTruthy()

    await trigger(el, 'touchstart', 0, 0)
    await trigger(document, 'touchmove', 200, 0)
    await trigger(document, 'touchend', 200, 0)
    await delay(100)
    expect(wrapper.find('.var-slider__horizontal--error').exists()).toBeFalsy()

    wrapper.unmount()
  })
})

test('slider events', async () => {
  const changeFn = vi.fn()
  const startFn = vi.fn()
  const endFn = vi.fn()

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

  const el = wrapper.find('.var-slider__horizontal-thumb')
  const blockEl = wrapper.find('.var-slider__horizontal-block')

  await trigger(el, 'touchstart', 0, 0)

  expect(startFn).toHaveBeenCalledTimes(1)

  await trigger(document, 'touchmove', 50, 0)
  await trigger(document, 'touchend', 50, 0)

  expect(changeFn).toHaveBeenCalled()
  expect(endFn).toHaveBeenCalledTimes(1)
  expect(wrapper.vm.value).not.toBe(10)

  await wrapper.setData({
    range: true,
    value: [20, 30],
  })

  const el1 = wrapper.findAll('.var-slider__horizontal-thumb')[1]

  await trigger(el1, 'touchstart', 0, 0)
  await trigger(document, 'touchmove', 50, 0)
  await trigger(document, 'touchend', 50, 0)

  expect(wrapper.vm.value[1]).not.toBe(30)

  await wrapper.setData({
    range: true,
    value: [20, 30],
  })
  await blockEl.trigger('click')

  expect(wrapper.vm.value).not.toEqual([20, 30])

  wrapper.unmount()
})

test('slider validation with zod', async () => {
  const wrapper = mount({
    components: {
      [VarSlider.name]: VarSlider,
    },
    data: () => ({
      value: 0,
      rules: z.number().min(10, 'slider value must be greater than 10'),
    }),
    template: `<var-slider v-model="value" :rules="rules" />`,
  })

  const el = wrapper.find('.var-slider__horizontal-thumb')

  await trigger(el, 'touchstart', 0, 0)
  await trigger(document, 'touchmove', 5, 0)
  await trigger(document, 'touchend', 5, 0)
  await delay(100)

  expect(wrapper.find('.var-slider__horizontal--error').exists()).toBeTruthy()
  expect(wrapper.find('.var-form-details__error-message').text()).toBe('slider value must be greater than 10')
})
