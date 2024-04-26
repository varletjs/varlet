import Switch from '..'
import VarSwitch from '../Switch'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay, triggerKeyboard } from '../../utils/test'
import { expect, vi, test, describe } from 'vitest'

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

  test('test switch buttonElevation', async () => {
    const wrapper = mount(VarSwitch)

    expect(wrapper.find('.var-elevation--2').exists()).toBeTruthy()

    await wrapper.setProps({
      buttonElevation: 4,
    })

    expect(wrapper.find('.var-elevation--4').exists()).toBeTruthy()
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

  test('test variant mode', async () => {
    const wrapper = mount({
      components: {
        [VarSwitch.name]: VarSwitch,
      },
      data() {
        return {
          value: true,
          variant: false,
        }
      },
      template: `<var-switch :variant="variant" v-model="value" />`,
    })

    expect(wrapper.html()).toMatchSnapshot()
    await wrapper.setData({ variant: true })
    expect(wrapper.html()).toMatchSnapshot()
    wrapper.unmount()
  })
})

describe('test switch events', () => {
  test('test switch v-model and events', async () => {
    const clickFn = vi.fn()
    const changeFn = vi.fn()

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
    const clickFn = vi.fn()
    const changeFn = vi.fn()
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

    expect(clickFn).toHaveBeenCalledTimes(0)
    expect(changeFn).toHaveBeenCalledTimes(0)
    expect(wrapper.vm.value).toBe(true)

    await wrapper.setData({
      disabled: false,
      readonly: true,
    })

    await wrapper.find('.var-switch__block').trigger('click')
    expect(clickFn).toHaveBeenCalledTimes(1)
    expect(changeFn).toHaveBeenCalledTimes(0)
    expect(wrapper.vm.value).toBe(true)

    wrapper.unmount()
  })

  test('test counter lazy change', async () => {
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
        async onBeforeChange(value, change) {
          await delay(500)
          change(value)
        },
      },
      template: `<var-switch lazy-change v-model="value" @before-change="onBeforeChange" />`,
    })

    await wrapper.find('.var-switch__block').trigger('click')
    expect(wrapper.vm.value).toBe(true)

    await delay(600)
    expect(wrapper.vm.value).toBe(false)

    wrapper.unmount()
  })

  test('test switch keyboard enter for switch', async () => {
    const click = vi.fn()
    const origin = HTMLElement.prototype.click
    HTMLElement.prototype.click = click

    const wrapper = mount(VarSwitch, {
      props: {
        modelValue: true,
      },
    })

    await wrapper.find('.var-switch__ripple').trigger('focus')
    await triggerKeyboard(window, 'keydown', { key: 'Enter' })
    expect(click).toHaveBeenCalledTimes(1)

    HTMLElement.prototype.click = origin
    wrapper.unmount()
  })

  test('test switch keyboard space for switch', async () => {
    const click = vi.fn()
    const origin = HTMLElement.prototype.click
    HTMLElement.prototype.click = click

    const wrapper = mount(VarSwitch, {
      props: {
        modelValue: true,
      },
    })

    await wrapper.find('.var-switch__ripple').trigger('focus')
    await triggerKeyboard(window, 'keydown', { key: ' ' })
    await triggerKeyboard(window, 'keyup', { key: ' ' })
    expect(click).toHaveBeenCalledTimes(1)

    HTMLElement.prototype.click = origin
    wrapper.unmount()
  })
})
