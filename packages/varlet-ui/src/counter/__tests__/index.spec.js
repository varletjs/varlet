import Counter from '..'
import VarCounter from '../Counter'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay, trigger } from '../../utils/test'
import { expect, vi } from 'vitest'

test('test counter plugin', () => {
  const app = createApp({}).use(Counter)
  expect(app.component(Counter.name)).toBeTruthy()
})

const Wrapper = {
  components: {
    [VarCounter.name]: VarCounter,
  },
  data: () => ({
    value: 0,
  }),
  template: `<var-counter v-model="value" />`,
}

test('test counter increment & decrement', async () => {
  const wrapper = mount(Wrapper)

  await wrapper.find('.var-counter__increment-button').trigger('click')
  expect(wrapper.vm.value).toBe(1)
  await wrapper.find('.var-counter__decrement-button').trigger('click')
  expect(wrapper.vm.value).toBe(0)

  wrapper.unmount()
})

test('test counter initial value over max', async () => {
  const wrapper = mount({
    ...Wrapper,
    data: () => ({
      value: 11,
    }),
    template: `<var-counter :max="10" v-model="value" />`,
  })

  expect(wrapper.vm.value).toBe(10)

  wrapper.unmount()
})

test('test counter initial value less min', async () => {
  const wrapper = mount({
    ...Wrapper,
    data: () => ({
      value: -1,
    }),
    template: `<var-counter :min="0" v-model="value" />`,
  })

  expect(wrapper.vm.value).toBe(0)

  wrapper.unmount()
})

test('test counter press increment', async () => {
  const wrapper = mount(Wrapper)

  await trigger(wrapper.find('.var-counter__increment-button'), 'touchstart')
  await delay(800)

  const current = wrapper.vm.value
  expect(current).toBeGreaterThan(0)

  await trigger(wrapper.find('.var-counter__increment-button'), 'touchend')
  await delay(100)
  expect(wrapper.vm.value).toBe(current)

  wrapper.unmount()
})

test('test counter press decrement', async () => {
  const wrapper = mount(Wrapper)

  await trigger(wrapper.find('.var-counter__decrement-button'), 'touchstart')
  await delay(750)

  const current = wrapper.vm.value
  expect(current).toBeLessThan(0)

  await trigger(wrapper.find('.var-counter__decrement-button'), 'touchend')
  await delay(750)
  expect(wrapper.vm.value).toBe(current)

  wrapper.unmount()
})

test('test counter lazy change', async () => {
  const wrapper = mount({
    ...Wrapper,
    methods: {
      onBeforeChange(value, change) {
        const isInc = value > wrapper.vm.value
        change(isInc ? value + 1 : value - 1)
      },
    },
    template: `<var-counter lazy-change v-model="value" @before-change="onBeforeChange" />`,
  })

  await wrapper.find('.var-counter__increment-button').trigger('click')
  expect(wrapper.vm.value).toBe(2)

  await wrapper.find('.var-counter__decrement-button').trigger('click')
  expect(wrapper.vm.value).toBe(0)

  wrapper.unmount()
})

test('test counter disabled', async () => {
  const wrapper = mount({
    ...Wrapper,
    template: `<var-counter disabled v-model="value" />`,
  })

  expect(wrapper.find('.var-counter--disabled').exists()).toBeTruthy()

  await wrapper.find('.var-counter__increment-button').trigger('click')
  expect(wrapper.vm.value).toBe(0)

  await wrapper.find('.var-counter__decrement-button').trigger('click')
  expect(wrapper.vm.value).toBe(0)

  wrapper.unmount()
})

test('test counter readonly', async () => {
  const wrapper = mount({
    ...Wrapper,
    template: `<var-counter readonly v-model="value" />`,
  })

  await wrapper.find('.var-counter__increment-button').trigger('click')
  expect(wrapper.vm.value).toBe(0)

  await wrapper.find('.var-counter__decrement-button').trigger('click')
  expect(wrapper.vm.value).toBe(0)

  wrapper.unmount()
})

test('test counter validation', async () => {
  const wrapper = mount({
    ...Wrapper,
    template: `<var-counter ref="counter" :rules="[v => v > 0 || '必须大于0']" v-model="value" />`,
  })

  const { counter } = wrapper.vm.$refs

  counter.validate()
  await delay(16)

  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.var-form-details__error-message').text()).toBe('必须大于0')

  await wrapper.find('.var-counter__increment-button').trigger('click')
  await delay(16)
  expect(wrapper.find('.var-form-details__error-message').exists()).toBeFalsy()

  counter.reset()
  await delay(16)
  expect(wrapper.vm.value).toBe(0)

  wrapper.unmount()
})

test('test counter step', async () => {
  const wrapper = mount({
    ...Wrapper,
    template: `<var-counter :step="2" v-model="value" />`,
  })

  await wrapper.find('.var-counter__increment-button').trigger('click')
  expect(wrapper.vm.value).toBe(2)

  await wrapper.find('.var-counter__increment-button').trigger('click')
  expect(wrapper.vm.value).toBe(4)

  await wrapper.find('.var-counter__decrement-button').trigger('click')
  expect(wrapper.vm.value).toBe(2)

  await wrapper.find('.var-counter__decrement-button').trigger('click')
  expect(wrapper.vm.value).toBe(0)

  wrapper.unmount()
})

test('test counter disableIncrement', async () => {
  const wrapper = mount({
    ...Wrapper,
    template: `<var-counter disableIncrement v-model="value" />`,
  })

  await wrapper.find('.var-counter__increment-button').trigger('click')
  expect(wrapper.vm.value).toBe(0)

  await wrapper.setProps({
    disableIncrement: false,
  })

  await wrapper.find('.var-counter__increment-button').trigger('click')
  expect(wrapper.vm.value).toBe(1)

  wrapper.unmount()
})

test('test counter disableDecrement', async () => {
  const wrapper = mount({
    ...Wrapper,
    template: `<var-counter disableDecrement v-model="value" />`,
  })

  await wrapper.find('.var-counter__decrement-button').trigger('click')
  expect(wrapper.vm.value).toBe(0)

  await wrapper.setProps({
    disableDecrement: false,
  })

  await wrapper.find('.var-counter__decrement-button').trigger('click')
  expect(wrapper.vm.value).toBe(-1)

  wrapper.unmount()
})

test('test counter color', async () => {
  const wrapper = mount({
    ...Wrapper,
    template: `<var-counter color="red" v-model="value" />`,
  })

  expect(wrapper.find('.var-counter__controller').attributes('style')).toContain('background: red')

  await wrapper.setProps({
    color: 'green',
  })
  expect(wrapper.find('.var-counter__controller').attributes('style')).toContain('background: green')

  wrapper.unmount()
})

test('test counter elevation', async () => {
  const wrapper = mount({
    ...Wrapper,
    template: `<var-counter v-model="value" />`,
  })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({
    elevation: false,
  })
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})

test('test counter decimalLength', async () => {
  const wrapper = mount({
    ...Wrapper,
    template: `<var-counter v-model="value" />`,
  })

  expect(wrapper.vm.value).toBe(0)
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({
    decimalLength: 1,
  })
  expect(wrapper.vm.value).toBe(0.0)
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.var-counter__increment-button').trigger('click')
  expect(wrapper.vm.value).toBe(1.0)

  wrapper.unmount()
})

test('test counter disableInput', async () => {
  const wrapper = mount({
    ...Wrapper,
    template: `<var-counter v-model="value" :disableInput="false" />`,
  })

  wrapper.find('.var-counter__input').setValue('1')
  await wrapper.find('.var-counter__input').trigger('change')
  expect(wrapper.vm.value).toBe(1)

  await wrapper.setProps({
    disableInput: true,
  })

  wrapper.find('.var-counter__input').setValue('2')
  await wrapper.find('.var-counter__input').trigger('change')
  expect(wrapper.vm.value).toBe(1)

  wrapper.unmount()
})

test('test counter incrementButton', async () => {
  const wrapper = mount({
    ...Wrapper,
    template: `<var-counter incrementButton v-model="value" />`,
  })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({
    incrementButton: false,
  })
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})

test('test counter decrementButton', async () => {
  const wrapper = mount({
    ...Wrapper,
    template: `<var-counter decrementButton v-model="value" />`,
  })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setProps({
    decrementButton: false,
  })
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})

test('test counter buttonSize', async () => {
  const wrapper = mount({
    ...Wrapper,
    template: `<var-counter :button-size="36" v-model="value" />`,
  })

  expect(wrapper.find('.var-counter__decrement-button').attributes('style')).toContain('width: 36px; height: 36px')
  expect(wrapper.find('.var-counter__increment-button').attributes('style')).toContain('width: 36px; height: 36px')

  await wrapper.setProps({
    buttonSize: 40,
  })
  expect(wrapper.find('.var-counter__decrement-button').attributes('style')).toContain('width: 40px; height: 40px')
  expect(wrapper.find('.var-counter__increment-button').attributes('style')).toContain('width: 40px; height: 40px')

  wrapper.unmount()
})

test('test counter inputWidth', async () => {
  const wrapper = mount({
    ...Wrapper,
    template: `<var-counter :input-width="36" v-model="value" />`,
  })

  expect(wrapper.find('.var-counter__input').attributes('style')).toContain('width: 36px')

  await wrapper.setProps({
    inputWidth: 40,
  })
  expect(wrapper.find('.var-counter__input').attributes('style')).toContain('width: 40px')

  wrapper.unmount()
})

test('test counter inputTextSize', async () => {
  const wrapper = mount({
    ...Wrapper,
    template: `<var-counter :input-text-size="36" v-model="value" />`,
  })

  expect(wrapper.find('.var-counter__input').attributes('style')).toContain('font-size: 36px')

  await wrapper.setProps({
    inputTextSize: 40,
  })
  expect(wrapper.find('.var-counter__input').attributes('style')).toContain('font-size: 40px')

  wrapper.unmount()
})

test('test counter onChange', async () => {
  const onChange = vi.fn()

  const wrapper = mount({
    ...Wrapper,
    methods: {
      onChange,
    },
    template: `<var-counter v-model="value" @change="onChange" />`,
  })

  wrapper.find('.var-counter__input').setValue('1')
  await wrapper.find('.var-counter__input').trigger('change')
  expect(onChange).lastCalledWith(1)

  await delay(100)
  wrapper.find('.var-counter__input').setValue('2')
  await wrapper.find('.var-counter__input').trigger('change')
  expect(onChange).lastCalledWith(2)

  wrapper.unmount()
})

test('test counter onIncrement & onDecrement', async () => {
  const onIncrement = vi.fn()
  const onDecrement = vi.fn()

  const wrapper = mount({
    ...Wrapper,
    methods: {
      onIncrement,
      onDecrement,
    },
    template: `<var-counter v-model="value" @increment="onIncrement" @decrement="onDecrement"/>`,
  })

  await delay(100)
  await wrapper.find('.var-counter__increment-button').trigger('click')
  expect(onIncrement).toBeCalledTimes(1)

  await delay(100)
  await wrapper.find('.var-counter__increment-button').trigger('click')
  expect(onIncrement).toBeCalledTimes(2)

  await delay(100)
  await wrapper.find('.var-counter__decrement-button').trigger('click')
  expect(onDecrement).toBeCalledTimes(1)

  await delay(100)
  await wrapper.find('.var-counter__decrement-button').trigger('click')
  expect(onDecrement).toBeCalledTimes(2)

  wrapper.unmount()
})
