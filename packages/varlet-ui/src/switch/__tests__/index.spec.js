import Switch from '..'
import VarSwitch from '../Switch'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay } from '../../utils/jest'

test('test switch plugin', () => {
  const app = createApp({}).use(Switch)
  expect(app.component(Switch.name)).toBeTruthy()
})

describe('test switch component props', () => {
  test('test switch value', () => {
    const wrapper = mount(VarSwitch, {
      props: {
        modelValue: true,
      },
    })

    expect(wrapper.find('.var-switch__track').classes()).toContain('var-switch__track--active')

    wrapper.unmount()
  })

  test('test switch activeValue and inactiveValue', async () => {
    const wrapper = mount(VarSwitch, {
      props: {
        modelValue: 1,
        activeValue: 1,
        inactiveValue: 2,
      },
    })

    expect(wrapper.find('.var-switch__track').classes()).toContain('var-switch__track--active')

    await wrapper.setProps({
      modelValue: 2,
    })

    expect(wrapper.find('.var-switch__track').classes().length).toBe(1)
    wrapper.unmount()
  })

  test('test switch disabled', () => {
    const wrapper = mount(VarSwitch, {
      props: {
        modelValue: true,
        disabled: true,
        readonly: false,
      },
    })

    expect(wrapper.find('.var-switch--disable')).toBeTruthy()
    wrapper.unmount()
  })

  test('test switch loading', () => {
    const wrapper = mount(VarSwitch, {
      props: {
        loading: true,
      },
    })

    expect(wrapper.find('.var-loading')).toBeTruthy()
    wrapper.unmount()
  })

  test('test switch color, loadingColor, closeColor', async () => {
    const wrapper = mount(VarSwitch, {
      props: {
        loading: true,
        modelValue: true,
        color: 'red',
        loadingColor: 'yellow',
        closeColor: 'blue',
      },
    })

    expect(wrapper.find('.var-switch__handle').attributes('style')).toContain('background-color: red; color: yellow;')

    await wrapper.setProps({
      modelValue: false,
    })
    await delay(200)

    expect(wrapper.find('.var-switch__handle').attributes('style')).toContain('background-color: blue;')
    wrapper.unmount()
  })

  test('test switch size', () => {
    const wrapper = mount(VarSwitch, {
      props: {
        size: '25px',
      },
    })

    expect(wrapper.find('.var-switch__handle').attributes('style')).toContain('width: 25px; height: 25px;')
    wrapper.unmount()
  })
})

describe('test switch events', () => {
  test('test switch v-model and events', async () => {
    const clickFn = jest.fn()
    const changeFn = jest.fn()

    const wrapper = mount({
      components: {
        [VarSwitch.name]: VarSwitch,
      },
      data() {
        return {
          value: true,
        }
      },
      methods: {
        clickFn,
        changeFn,
      },
      template: `<var-switch v-model="value" @click="clickFn" @change="changeFn" />`,
    })

    await wrapper.find('.var-switch__block').trigger('click')

    expect(clickFn).toHaveBeenCalledTimes(1)
    expect(changeFn).toHaveBeenCalledTimes(1)
    expect(wrapper.vm.value).toBe(false)

    wrapper.unmount()
  })

  test('test switch event not trigger', async () => {
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

    expect(wrapper.find('.var-switch--disable')).toBeTruthy()

    await wrapper.find('.var-switch__block').trigger('click')

    expect(clickFn).toHaveBeenCalledTimes(1)
    expect(changeFn).toHaveBeenCalledTimes(0)
    expect(wrapper.vm.value).toBe(true)

    await wrapper.setData({
      disabled: false,
      readonly: true,
    })

    await wrapper.find('.var-switch__block').trigger('click')
    expect(clickFn).toHaveBeenCalledTimes(2)
    expect(changeFn).toHaveBeenCalledTimes(0)
    expect(wrapper.vm.value).toBe(true)
  })
})
