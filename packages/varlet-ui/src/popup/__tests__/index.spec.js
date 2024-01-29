import Popup from '..'
import VarPopup from '../Popup'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { expect, vi } from 'vitest'

test('test popup plugin', () => {
  const app = createApp({}).use(Popup)
  expect(app.component(Popup.name)).toBeTruthy()
})

const Wrapper = {
  components: {
    [VarPopup.name]: VarPopup,
  },
  props: ['closeOnClickOverlay', 'onOpen', 'onClose', 'onClickOverlay', 'defaultStyle'],
  data: () => ({
    show: false,
  }),
  template: `
    <var-popup v-model:show="show" v-bind="$props" :teleport="null">
      default slot content
    </var-popup>
  `,
}

test('test popup show', async () => {
  const wrapper = mount(Wrapper)
  expect(wrapper.find('.var-popup').isVisible()).toBeFalsy()
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setData({ show: true })
  expect(wrapper.find('.var-popup').isVisible()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.setData({ show: false })
  expect(wrapper.find('.var-popup').isVisible()).toBeFalsy()
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})

test('test popup onOpen & onClose', async () => {
  const onOpen = vi.fn()
  const onClose = vi.fn()

  const wrapper = mount(Wrapper, {
    props: {
      onOpen,
      onClose,
    },
  })
  await wrapper.setData({ show: true })
  expect(onOpen).toHaveBeenCalledTimes(1)

  await wrapper.setData({ show: false })
  expect(onClose).toHaveBeenCalledTimes(1)

  wrapper.unmount()
})

test('test popup close on clickOverlay', async () => {
  const onClose = vi.fn()
  const onClickOverlay = vi.fn()

  const wrapper = mount(Wrapper, {
    props: {
      onClose,
      onClickOverlay,
    },
  })

  await wrapper.setData({ show: true })

  await wrapper.find('.var-popup__overlay').trigger('click')
  expect(onClickOverlay).toHaveBeenCalledTimes(1)
  expect(onClose).toHaveBeenCalledTimes(1)

  await wrapper.setData({ show: true })
  await wrapper.setProps({ closeOnClickOverlay: false })
  await wrapper.find('.var-popup__overlay').trigger('click')
  expect(onClickOverlay).toHaveBeenCalledTimes(2)
  expect(onClose).toHaveBeenCalledTimes(1)

  wrapper.unmount()
})

test('test popup default style', async () => {
  const wrapper = mount(Wrapper, {
    props: {
      show: true,
      defaultStyle: true,
    },
  })

  expect(wrapper.find('.var-popup--content-background-color').exists()).toBe(true)
  expect(wrapper.find('.var-elevation--3').exists()).toBe(true)

  await wrapper.setProps({
    defaultStyle: false,
  })
  expect(wrapper.find('.var-popup--content-background-color').exists()).toBe(false)
  expect(wrapper.find('.var-elevation--3').exists()).toBe(false)

  wrapper.unmount()
})

test('test popup safeArea prop', async () => {
  const wrapper = mount(Wrapper, {
    props: {
      show: true,
      safeArea: true,
    },
  })

  expect(wrapper.find('.var-popup--safe-area').exists()).toBe(true)

  await wrapper.setProps({
    safeArea: false,
  })
  expect(wrapper.find('.var-popup--safe-area').exists()).toBe(false)

  wrapper.unmount()
})

test('test popup safeAreaTop prop', async () => {
  const wrapper = mount(Wrapper, {
    props: {
      show: true,
      safeAreaTop: true,
    },
  })

  expect(wrapper.find('.var-popup--safe-area-top').exists()).toBe(true)

  await wrapper.setProps({
    safeAreaTop: false,
  })
  expect(wrapper.find('.var-popup--safe-area-top').exists()).toBe(false)

  wrapper.unmount()
})

test('test popup overlayClass prop', () => {
  const wrapper = mount(Wrapper, {
    props: {
      show: true,
      overlayClass: 'test-class',
    },
  })

  expect(wrapper.find('.test-class').exists()).toBe(true)

  wrapper.unmount()
})

test('test popup overlayStyle prop', () => {
  const wrapper = mount(Wrapper, {
    props: {
      show: true,
      overlayStyle: {
        background: 'red',
      },
    },
  })

  expect(wrapper.find('.var-popup__overlay').attributes('style')).toContain('background: red;')

  wrapper.unmount()
})

test('test popup position prop', () => {
  ;['top', 'bottom', 'right', 'left', 'center'].forEach((position) => {
    const wrapper = mount(Wrapper, {
      props: {
        show: true,
        position,
      },
    })

    expect(wrapper.find(`.var-popup--${position}`).exists()).toBe(true)

    wrapper.unmount()
  })
})
