import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import Alert from '..'
import VarAlert from '../Alert'

test('alert plugin', () => {
  const app = createApp({}).use(Alert)
  expect(app.component(Alert.name)).toBeTruthy()
})

describe('test alert component props', () => {
  test('alert title', async () => {
    const wrapper = mount(VarAlert, {
      props: {
        title: 'Pride And Prejudice',
      },
    })

    expect(wrapper.find('.var-alert__title').text()).toBe('Pride And Prejudice')

    await wrapper.setProps({
      title: 'Jane Eyre',
    })

    expect(wrapper.find('.var-alert__title').text()).toBe('Jane Eyre')

    await wrapper.setProps({
      title: undefined,
    })

    expect(wrapper.find('.var-alert__title').exists()).toBe(false)

    wrapper.unmount()
  })

  test('alert type', () => {
    const ICON_TYPE_MAP = {
      success: 'checkbox-marked-circle',
      warning: 'warning',
      info: 'information',
      danger: 'error',
    }

    ;['info', 'success', 'warning', 'danger'].forEach((type) => {
      const wrapper = mount(VarAlert, {
        props: { type },
      })

      expect(wrapper.find('.var-alert--' + type).exists()).toBe(true)
      expect(wrapper.find('.var-icon-' + ICON_TYPE_MAP[type]).exists()).toBe(true)

      wrapper.unmount()
    })
  })

  test('alert message', async () => {
    const wrapper = mount(VarAlert, {
      props: {
        message: 'Pride And Prejudice',
      },
    })

    expect(wrapper.find('.var-alert__message').text()).toBe('Pride And Prejudice')

    await wrapper.setProps({
      message: 'Jane Eyre',
    })

    expect(wrapper.find('.var-alert__message').text()).toBe('Jane Eyre')

    await wrapper.setProps({
      message: undefined,
    })

    expect(wrapper.find('.var-alert__message').exists()).toBe(false)

    wrapper.unmount()
  })

  test('alert color', async () => {
    const wrapper = mount(VarAlert, {
      props: {
        color: 'red',
      },
    })

    expect(wrapper.find('.var-alert').attributes('style')).toContain('background-color: red')

    await wrapper.setProps({
      color: 'green',
    })

    expect(wrapper.find('.var-alert').attributes('style')).toContain('background-color: green')

    wrapper.unmount()
  })

  test('alert closeable', async () => {
    const wrapper = mount(VarAlert)

    expect(wrapper.find('.var-alert--close').exists()).toBe(false)

    await wrapper.setProps({
      closeable: true,
    })

    expect(wrapper.find('.var-alert__close-icon').exists()).toBe(true)

    wrapper.unmount()
  })

  test('alert variant', () => {
    ;['tonal', 'outlined', 'standard'].forEach((variant) => {
      const wrapper = mount(VarAlert, {
        props: { variant },
      })

      expect(wrapper.find('.var-alert--' + variant).exists()).toBe(true)

      wrapper.unmount()
    })
  })

  test('alert elevation', async () => {
    const wrapper = mount(VarAlert)

    expect(wrapper.find('.var-elevation--2').exists()).toBe(false)

    await wrapper.setProps({
      elevation: true,
    })

    expect(wrapper.find('.var-elevation--2').exists()).toBe(true)

    await wrapper.setProps({
      elevation: 4,
    })

    expect(wrapper.find('.var-elevation--4').exists()).toBe(true)

    wrapper.unmount()
  })
})

describe('test alert component events', () => {
  test('alert close', async () => {
    const onClose = vi.fn()
    const wrapper = mount(VarAlert, {
      props: {
        closeable: true,
        onClose,
      },
    })

    const closeIcon = wrapper.find('.var-alert__close-icon')

    expect(closeIcon.exists()).toBe(true)

    await closeIcon.trigger('click')

    expect(onClose).toHaveBeenCalledTimes(1)

    wrapper.unmount()
  })
})

describe('test alert component slots', () => {
  test('alert icon slot', () => {
    const wrapper = mount(VarAlert, {
      slots: {
        icon: () => 'Pride And Prejudice',
      },
    })

    expect(wrapper.find('.var-alert__icon').text()).toBe('Pride And Prejudice')

    wrapper.unmount()
  })

  test('alert default slot', () => {
    const wrapper = mount(VarAlert, {
      slots: {
        default: () => 'Pride And Prejudice',
      },
    })

    expect(wrapper.find('.var-alert__message').text()).toBe('Pride And Prejudice')

    wrapper.unmount()
  })

  test('alert title slot', () => {
    const wrapper = mount(VarAlert, {
      slots: {
        title: () => 'Pride And Prejudice',
      },
    })

    expect(wrapper.find('.var-alert__title').text()).toBe('Pride And Prejudice')

    wrapper.unmount()
  })

  test('alert content slot', () => {
    const wrapper = mount(VarAlert, {
      slots: {
        content: () => 'Pride And Prejudice',
      },
    })

    expect(wrapper.find('.var-alert').text()).toBe('Pride And Prejudice')

    wrapper.unmount()
  })

  test('alert close icon slot', () => {
    const wrapper = mount(VarAlert, {
      props: {
        closeable: true,
      },
      slots: {
        'close-icon': () => 'Pride And Prejudice',
      },
    })

    expect(wrapper.find('.var-alert__close-icon').text()).toBe('Pride And Prejudice')

    wrapper.unmount()
  })
})
