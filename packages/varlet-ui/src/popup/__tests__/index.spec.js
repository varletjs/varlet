import Popup from '..'
import VarPopup from '../Popup'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

test('test popup plugin', () => {
  const app = createApp({}).use(Popup)
  expect(app.component(Popup.name)).toBeTruthy()
})

const Wrapper = {
  components: {
    [VarPopup.name]: VarPopup,
  },
  props: ['closeOnClickOverlay', 'onOpen', 'onClose', 'onClickOverlay'],
  data: () => ({
    show: false,
  }),
  template: `
    <var-popup v-model:show="show" v-bind="$props">
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
  const onOpen = jest.fn()
  const onClose = jest.fn()

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
  const onClose = jest.fn()
  const onClickOverlay = jest.fn()

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

test('test popup z-index', async () => {
  const wrapper = mount(Wrapper)

  await wrapper.setData({ show: true })

  const prevPopupZIndex = window.getComputedStyle(wrapper.find('.var-popup').element).zIndex
  const prevOverlayZIndex = window.getComputedStyle(wrapper.find('.var-popup__overlay').element).zIndex

  await wrapper.setData({ show: false })
  await wrapper.setData({ show: true })
  expect(window.getComputedStyle(wrapper.find('.var-popup').element).zIndex).toBe(String(+prevPopupZIndex + 3))
  expect(window.getComputedStyle(wrapper.find('.var-popup__overlay').element).zIndex).toBe(
    String(+prevOverlayZIndex + 3)
  )

  wrapper.unmount()
})
