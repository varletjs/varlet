import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vite-plus/test'
import { createApp } from 'vue'
import Counter from '..'
import { delay, trigger } from '../../utils/test'
import VarCounter from '../Counter'

test('counter plugin', () => {
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

test('counter increment & decrement', async () => {
  const wrapper = mount(Wrapper)

  await wrapper.find('.var-counter__increment-button').trigger('click')
  expect(wrapper.vm.value).toBe(1)
  await wrapper.find('.var-counter__decrement-button').trigger('click')
  expect(wrapper.vm.value).toBe(0)

  wrapper.unmount()
})

test('counter initial value over max', () => {
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

test('counter initial value less min', () => {
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

test('counter press increment', async () => {
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

test('counter press decrement', async () => {
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

test('counter lazy change', async () => {
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

test('counter disabled', async () => {
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

test('counter readonly', async () => {
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

test('counter validation', async () => {
  const wrapper = mount({
    ...Wrapper,
    template: `<var-counter ref="counter" :rules="[v => v > 0 || 'The value must be more than zero']" v-model="value" />`,
  })

  const { counter } = wrapper.vm.$refs

  counter.validate()
  await delay(16)

  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.var-form-details__error-message').text()).toBe('The value must be more than zero')

  await wrapper.find('.var-counter__increment-button').trigger('click')
  await delay(16)
  expect(wrapper.find('.var-form-details__error-message').exists()).toBeFalsy()

  counter.reset()
  await delay(16)
  expect(wrapper.vm.value).toBe(0)

  wrapper.unmount()
})

test('counter step', async () => {
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

test('counter disableIncrement', async () => {
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

test('counter disableDecrement', async () => {
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

test('counter color', async () => {
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

test('counter elevation', async () => {
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

test('counter decimalLength', async () => {
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

test('counter disableInput', async () => {
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

test('counter incrementButton', async () => {
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

test('counter decrementButton', async () => {
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

test('counter buttonSize', async () => {
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

test('counter inputWidth', async () => {
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

test('counter inputTextSize', async () => {
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

test('counter onChange', async () => {
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

test('counter onIncrement & onDecrement', async () => {
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

test('counter validate on increment trigger', async () => {
  const wrapper = mount({
    ...Wrapper,
    template: `<var-counter ref="counter" :rules="[v => v < 1 || 'Too big']" v-model="value" />`,
  })

  await wrapper.find('.var-counter__increment-button').trigger('click')
  await delay(16)

  expect(wrapper.find('.var-form-details__error-message').text()).toBe('Too big')

  wrapper.unmount()
})

test('counter validate on decrement trigger', async () => {
  const wrapper = mount({
    ...Wrapper,
    template: `<var-counter ref="counter" :rules="[v => v >= 0 || 'Too small']" v-model="value" />`,
  })

  await wrapper.find('.var-counter__decrement-button').trigger('click')
  await delay(16)

  expect(wrapper.find('.var-form-details__error-message').text()).toBe('Too small')

  wrapper.unmount()
})

test('counter press increment release stops timers', async () => {
  vi.useFakeTimers()
  const wrapper = mount(Wrapper)

  await trigger(wrapper.find('.var-counter__increment-button'), 'touchstart')
  vi.advanceTimersByTime(700)

  const current = wrapper.vm.value
  expect(current).toBeGreaterThan(0)

  await trigger(wrapper.find('.var-counter__increment-button'), 'touchend')
  vi.advanceTimersByTime(300)

  expect(wrapper.vm.value).toBe(current)

  wrapper.unmount()
  vi.useRealTimers()
})

test('counter validate on increment and decrement methods', async () => {
  const wrapper = mount({
    ...Wrapper,
    template: `<var-counter :rules="[v => v === 0 || 'Invalid']" v-model="value" />`,
  })

  const counter = wrapper.findComponent(VarCounter)

  counter.vm.increment()
  await delay(16)
  expect(wrapper.find('.var-form-details__error-message').text()).toBe('Invalid')

  counter.vm.decrement()
  await delay(16)
  expect(wrapper.find('.var-form-details__error-message').exists()).toBe(false)

  wrapper.unmount()
})

test('counter press increment and release methods', () => {
  vi.useFakeTimers()
  const wrapper = mount(Wrapper)
  const counter = wrapper.findComponent(VarCounter)

  counter.vm.pressIncrement()
  vi.advanceTimersByTime(700)

  const current = wrapper.vm.value
  counter.vm.releaseIncrement()
  vi.advanceTimersByTime(300)

  expect(wrapper.vm.value).toBe(current)

  wrapper.unmount()
  vi.useRealTimers()
})

test('counter press decrement and release methods', () => {
  vi.useFakeTimers()
  const wrapper = mount(Wrapper)
  const counter = wrapper.findComponent(VarCounter)

  counter.vm.pressDecrement()
  vi.advanceTimersByTime(700)

  const current = wrapper.vm.value
  counter.vm.releaseDecrement()
  vi.advanceTimersByTime(300)

  expect(wrapper.vm.value).toBe(current)

  wrapper.unmount()
  vi.useRealTimers()
})

test('counter touchcancel on increment', async () => {
  const wrapper = mount(Wrapper)

  await trigger(wrapper.find('.var-counter__increment-button'), 'touchstart')
  await delay(100)

  await trigger(wrapper.find('.var-counter__increment-button'), 'touchcancel')
  await delay(100)

  expect(wrapper.vm.value).toBe(0)

  wrapper.unmount()
})

test('counter touchcancel on decrement', async () => {
  const wrapper = mount(Wrapper)

  await trigger(wrapper.find('.var-counter__decrement-button'), 'touchstart')
  await delay(100)

  await trigger(wrapper.find('.var-counter__decrement-button'), 'touchcancel')
  await delay(100)

  expect(wrapper.vm.value).toBe(0)

  wrapper.unmount()
})

test('counter lazy change with decrement validation', async () => {
  const onBeforeChange = vi.fn((value, change) => change(value))

  const wrapper = mount({
    ...Wrapper,
    methods: {
      onBeforeChange,
    },
    template: `<var-counter lazy-change :rules="[v => v >= 0 || 'Invalid']" v-model="value" @before-change="onBeforeChange" />`,
  })

  await wrapper.find('.var-counter__decrement-button').trigger('click')
  await delay(16)

  expect(onBeforeChange).toHaveBeenCalled()
  expect(wrapper.find('.var-form-details__error-message').text()).toBe('Invalid')

  wrapper.unmount()
})

test('counter lazy change with increment validation', async () => {
  const onBeforeChange = vi.fn((value, change) => change(value))

  const wrapper = mount({
    ...Wrapper,
    methods: {
      onBeforeChange,
    },
    template: `<var-counter lazy-change :rules="[v => v <= 0 || 'Invalid']" v-model="value" @before-change="onBeforeChange" />`,
  })

  await wrapper.find('.var-counter__increment-button').trigger('click')
  await delay(16)

  expect(onBeforeChange).toHaveBeenCalled()
  expect(wrapper.find('.var-form-details__error-message').text()).toBe('Invalid')

  wrapper.unmount()
})

test('counter press increment long enough to set incrementTimer then release', async () => {
  const wrapper = mount({
    ...Wrapper,
    data: () => ({
      value: 0,
    }),
    template: `<var-counter press v-model="value" />`,
  })

  // Press and hold long enough for continuedIncrement to be called
  // DELAY is 600ms, SPEED is 100ms, so after 800ms incrementTimer should be set
  await trigger(wrapper.find('.var-counter__increment-button'), 'touchstart')
  await delay(800)

  const current = wrapper.vm.value
  expect(current).toBeGreaterThan(0)

  // Release should clear both incrementTimer and incrementDelayTimer (line 319-320)
  await trigger(wrapper.find('.var-counter__increment-button'), 'touchend')
  await delay(200)

  // Value should not change after release
  expect(wrapper.vm.value).toBe(current)

  wrapper.unmount()
})

test('counter press decrement long enough to set decrementTimer then release', async () => {
  const wrapper = mount({
    ...Wrapper,
    data: () => ({
      value: 0,
    }),
    template: `<var-counter press v-model="value" />`,
  })

  // Press and hold long enough for continuedDecrement to be called
  await trigger(wrapper.find('.var-counter__decrement-button'), 'touchstart')
  await delay(800)

  const current = wrapper.vm.value
  expect(current).toBeLessThan(0)

  // Release should clear both decrementTimer and decrementDelayTimer (line 314-315)
  await trigger(wrapper.find('.var-counter__decrement-button'), 'touchend')
  await delay(200)

  // Value should not change after release
  expect(wrapper.vm.value).toBe(current)

  wrapper.unmount()
})

test('counter reset with min resets to min', async () => {
  // reset() takes the `min != null ? toNumber(min) : 0` true branch at line 184
  const wrapper = mount({
    ...Wrapper,
    data: () => ({
      value: 5,
    }),
    template: `<var-counter ref="counter" :min="2" v-model="value" />`,
  })

  const { counter } = wrapper.vm.$refs
  counter.reset()
  await delay(16)
  expect(wrapper.vm.value).toBe(2)

  wrapper.unmount()
})

test('counter lazy change via input typing', async () => {
  // handleChange takes the lazyChange branch of the ternary at line 214
  const onBeforeChange = vi.fn((value, change) => change(value))

  const wrapper = mount({
    ...Wrapper,
    data: () => ({
      value: 0,
    }),
    methods: {
      onBeforeChange,
    },
    template: `<var-counter lazy-change v-model="value" @before-change="onBeforeChange" />`,
  })

  wrapper.find('.var-counter__input').setValue('5')
  await wrapper.find('.var-counter__input').trigger('change')

  expect(onBeforeChange).toHaveBeenCalledWith(5, expect.any(Function))
  expect(wrapper.vm.value).toBe(5)

  wrapper.unmount()
})

test('counter increment at max returns early', async () => {
  // increment() hits the `if (isMax.value) return` guard at line 272
  const wrapper = mount({
    ...Wrapper,
    data: () => ({
      value: 10,
    }),
    template: `<var-counter :max="10" v-model="value" />`,
  })

  await wrapper.find('.var-counter__increment-button').trigger('click')
  expect(wrapper.vm.value).toBe(10)

  wrapper.unmount()
})

test('counter decrement at min returns early', async () => {
  // decrement() hits the `if (isMin.value) return` guard at line 237
  const wrapper = mount({
    ...Wrapper,
    data: () => ({
      value: 0,
    }),
    template: `<var-counter :min="0" v-model="value" />`,
  })

  await wrapper.find('.var-counter__decrement-button').trigger('click')
  expect(wrapper.vm.value).toBe(0)

  wrapper.unmount()
})

test('counter press disabled does not increment or decrement', async () => {
  // pressIncrement (line 305) and pressDecrement (line 293) return early when press is false
  const wrapper = mount({
    ...Wrapper,
    data: () => ({
      value: 0,
    }),
    template: `<var-counter :press="false" v-model="value" />`,
  })

  await trigger(wrapper.find('.var-counter__increment-button'), 'touchstart')
  await delay(800)
  expect(wrapper.vm.value).toBe(0)

  await trigger(wrapper.find('.var-counter__decrement-button'), 'touchstart')
  await delay(800)
  expect(wrapper.vm.value).toBe(0)

  wrapper.unmount()
})

test('counter increment without lazyChange triggers validation', async () => {
  const wrapper = mount({
    ...Wrapper,
    data: () => ({
      value: 0,
    }),
    template: `<var-counter :rules="[v => v === 0 || 'error']" :lazy-change="false" v-model="value" />`,
  })

  // Increment should trigger validateWithTrigger at line 285
  await wrapper.find('.var-counter__increment-button').trigger('click')
  await delay(16)

  // Validation should have been triggered
  expect(wrapper.find('.var-form-details__error-message').text()).toBe('error')

  wrapper.unmount()
})

test('counter decrement without lazyChange triggers validation', async () => {
  const wrapper = mount({
    ...Wrapper,
    data: () => ({
      value: 0,
    }),
    template: `<var-counter :rules="[v => v === 0 || 'error']" :lazy-change="false" v-model="value" />`,
  })

  // Decrement should trigger validateWithTrigger at line 250
  await wrapper.find('.var-counter__decrement-button').trigger('click')
  await delay(16)

  // Validation should have been triggered
  expect(wrapper.find('.var-form-details__error-message').text()).toBe('error')

  wrapper.unmount()
})
