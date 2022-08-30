import example from '../example'
import Slider from '..'
import VarSlider from '../Slider'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay, trigger, mockConsole } from '../../utils/test'

test('test slider example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test slider plugin', () => {
  const app = createApp({}).use(Slider)
  expect(app.component(Slider.name)).toBeTruthy()
})

test('test slider style', async () => {
  const template = `
     <var-slider
      v-model="value"
      label-color="purple"
      active-color="#e0732c"
      track-color="#3a68b4"
      thumb-color="#e25241"
      label-text-color="#ededed"
      track-height="4"
      thumb-size="8"
    />
  `

  const wrapper = mount({
    components: {
      [VarSlider.name]: VarSlider,
    },
    data() {
      return {
        value: 30,
      }
    },
    template,
  })

  await delay(0)

  expect(wrapper.html()).toMatchSnapshot()
})

test('test slider range prop', async () => {
  const template = `
    <var-slider v-model="value" range />
  `
  const wrapper = mount({
    components: {
      [VarSlider.name]: VarSlider,
    },
    data() {
      return {
        value: [30, 50],
      }
    },
    template,
  })

  expect(wrapper.findAll('.var-slider__thumb').length).toBe(2)
})

test('test slider labelVisible prop', async () => {
  const template = ` <var-slider v-model="value" :label-visible="visible"/> `

  const wrapper = mount({
    components: {
      [VarSlider.name]: VarSlider,
    },
    data() {
      return {
        value: 0,
        visible: 'normal',
      }
    },
    template,
  })

  const el = wrapper.find('.var-slider__thumb-label')
  expect(el.classes()).not.toContain('var-slider__thumb-label--active')

  await trigger(el, 'touchstart', 0, 0)
  await trigger(el, 'touchmove', 0, 0)

  expect(el.classes()).toContain('var-slider__thumb-label--active')

  await trigger(el, 'touchend', 0, 0)

  expect(el.classes()).not.toContain('var-slider__thumb-label--active')

  await wrapper.setData({ visible: 'never' })

  expect(el.classes()).not.toContain('var-slider__thumb-label--active')

  await trigger(el, 'touchstart', 0, 0)
  await trigger(el, 'touchmove', 0, 0)
  expect(el.classes()).not.toContain('var-slider__thumb-label--active')

  await wrapper.setData({ visible: 'always' })

  expect(el.classes()).toContain('var-slider__thumb-label--active')

  await trigger(el, 'touchstart', 0, 0)
  await trigger(el, 'touchmove', 0, 0)
  expect(el.classes()).toContain('var-slider__thumb-label--active')

  await trigger(el, 'touchend', 0, 0)
  expect(el.classes()).toContain('var-slider__thumb-label--active')
})

test('test step prop', async () => {
  const fn = vi.fn()
  const { mockRestore } = mockConsole('warn', fn)
  const template = `<var-slider v-model="value" :step="step"/> `

  const wrapper = mount({
    components: {
      [VarSlider.name]: VarSlider,
    },
    data() {
      return {
        value: 0,
        step: NaN,
      }
    },
    template,
  })

  await wrapper.setData({ step: -1 })
  await wrapper.setData({ step: 1.23 })
  await wrapper.setData({ step: 10, value: 0 })

  const el = wrapper.find('.var-slider__thumb')

  await trigger(el, 'touchstart', 0, 0)
  await trigger(el, 'touchmove', 50, 0)
  await trigger(el, 'touchend', 50, 0)

  expect(wrapper.vm.value).not.toBe(0)
  expect(fn).toHaveBeenCalledTimes(3)

  mockRestore()
})

test('test slider value legal', async () => {
  const fn = vi.fn()
  const { mockRestore } = mockConsole('error', fn)
  const template = `<var-slider v-model="value" :range="range" /> `

  const wrapper = mount({
    components: {
      [VarSlider.name]: VarSlider,
    },
    data() {
      return {
        value: 0,
        range: true,
      }
    },
    template,
  })

  await delay(0)
  await wrapper.setData({ value: [] })
  await wrapper.setData({ range: false, value: [] })
  expect(fn).toHaveBeenCalledTimes(3)

  mockRestore()
})

test('test slider not available', async () => {
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

  const el = wrapper.find('.var-slider__thumb')

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
})

test('test slider events', async () => {
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

  const el = wrapper.find('.var-slider__thumb')
  const blockEl = wrapper.find('.var-slider__block')

  await trigger(el, 'touchstart', 0, 0)

  expect(startFn).toHaveBeenCalledTimes(1)

  await trigger(el, 'touchmove', 0, 50)
  await trigger(el, 'touchend', 0, 50)

  expect(changeFn).toHaveBeenCalled()
  expect(endFn).toHaveBeenCalledTimes(1)
  expect(wrapper.vm.value).not.toBe(10)

  await wrapper.setData({
    range: true,
    value: [20, 30],
  })

  const el1 = wrapper.findAll('.var-slider__thumb')[1]

  await trigger(el1, 'touchstart', 0, 0)
  await trigger(el1, 'touchmove', 0, 50)
  await trigger(el1, 'touchend', 0, 50)

  expect(wrapper.vm.value[1]).not.toBe(30)

  await wrapper.setData({
    range: true,
    value: [20, 30],
  })
  await blockEl.trigger('click')

  expect(wrapper.vm.value).not.toEqual([20, 30])
})
test('test slider rules prop', async () => {
  const template = `<var-slider v-model="value" :rules="[(v) => !Number.isNaN(v) || 'error message']" />`
  const wrapper = mount({
    components: {
      [VarSlider.name]: VarSlider,
    },
    data() {
      return {
        value: 0,
      }
    },
    template,
  })

  expect(wrapper.html()).toMatchSnapshot()

  const el = wrapper.find('.var-slider__thumb')

  await trigger(el, 'touchstart', 0, 0)
  await trigger(el, 'touchmove', 0, 50)
  await trigger(el, 'touchend', 0, 50)

  expect(wrapper.html()).toMatchSnapshot()
})
