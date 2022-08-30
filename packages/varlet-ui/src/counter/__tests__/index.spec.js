import example from '../example'
import Counter from '..'
import VarCounter from '../Counter'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay, trigger } from '../../utils/test'

test('test counter example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

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

  await wrapper.find('.var-counter__increment-button').trigger('click')
  expect(wrapper.vm.value).toBe(0)

  await wrapper.find('.var-counter__decrement-button').trigger('click')
  expect(wrapper.vm.value).toBe(0)
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
  expect(wrapper.find('.var-form-details__message').text()).toBe('必须大于0')

  await wrapper.find('.var-counter__increment-button').trigger('click')
  await delay(16)
  expect(wrapper.find('.var-form-details__message').exists()).toBeFalsy()

  counter.reset()
  await delay(16)
  expect(wrapper.vm.value).toBe(0)
})
