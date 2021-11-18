import example from '../example'
import Switch from '..'
import VarSwitch from '../Switch'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay } from '../../utils/jest'

test('test switch example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test switch plugin', () => {
  const app = createApp({}).use(Switch)
  expect(app.component(Switch.name)).toBeTruthy()
})

test('test switch value props and events', async () => {
  const clickFn = jest.fn()
  const changeFn = jest.fn()
  const template = `
    <var-switch v-model="value" @click="clickFn" @change="changeFn" :active-value="2" :inactive-value="1" />
  `

  const wrapper = mount({
    components: {
      [VarSwitch.name]: VarSwitch,
    },
    data() {
      return {
        value: 2,
      }
    },
    methods: {
      clickFn,
      changeFn,
    },
    template,
  })

  await delay(0)

  expect(wrapper.find('.var-switch__track').classes()).toContain('var-switch__track-active')

  await wrapper.find('.var-switch-block').trigger('click')

  expect(clickFn).toHaveBeenCalledTimes(1)
  expect(changeFn).toHaveBeenCalledTimes(1)

  await delay(0)

  expect(wrapper.vm.value).toBe(1)
  expect(wrapper.find('.var-switch__track').classes()).not.toContain('var-switch__track-active')
})

test('test switch not available', async () => {
  const clickFn = jest.fn()
  const changeFn = jest.fn()
  const template = `
    <var-switch v-model="value" @click="clickFn" @change="changeFn" :disabled="disabled" :readonly="readonly" />
  `

  const wrapper = mount({
    components: {
      [VarSwitch.name]: VarSwitch,
    },
    data() {
      return {
        value: true,
        disabled: true,
        readonly: false,
      }
    },
    methods: {
      clickFn,
      changeFn,
    },
    template,
  })

  await delay(0)

  expect(wrapper.find('.var-switch__disable')).toBeTruthy()

  await wrapper.find('.var-switch-block').trigger('click')

  expect(clickFn).toHaveBeenCalledTimes(1)
  expect(changeFn).toHaveBeenCalledTimes(0)
  expect(wrapper.vm.value).toBe(true)

  await wrapper.setData({
    disabled: false,
    readonly: true,
  })

  await wrapper.find('.var-switch-block').trigger('click')
  expect(clickFn).toHaveBeenCalledTimes(2)
  expect(changeFn).toHaveBeenCalledTimes(0)
  expect(wrapper.vm.value).toBe(true)
})

test('test switch color and size', async () => {
  const template = `
    <var-switch v-model="value" color="indigo" close-color="#89ddff" size="15" :ripple="false" />
  `
  const wrapper = mount({
    components: {
      [VarSwitch.name]: VarSwitch,
    },
    data() {
      return {
        value: true,
      }
    },
    template,
  })

  await delay(0)

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setData({ value: false })

  await delay(0)

  expect(wrapper.html()).toMatchSnapshot()
})

test('test switch loading prop', () => {
  const wrapper = mount(VarSwitch, {
    props: {
      loading: true,
      modelValue: true,
      loadingColor: '#ff9800',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test switch rules prop', async () => {
  const template = `<var-switch v-model="value" :rules="[(v) => v === true || '错误！']"/>`
  const wrapper = mount({
    components: {
      [VarSwitch.name]: VarSwitch,
    },
    data() {
      return {
        value: true,
      }
    },
    template,
  })

  await delay(0)

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.var-switch-block').trigger('click')

  await delay(0)

  expect(wrapper.html()).toMatchSnapshot()
})
