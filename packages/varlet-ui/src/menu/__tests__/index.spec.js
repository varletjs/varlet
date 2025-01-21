import { createApp } from 'vue'
import { doubleRaf } from '@varlet/shared'
import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import Menu from '..'
import { delay, mockStubs, trigger, triggerKeyboard } from '../../utils/test'
import VarMenu from '../Menu'

test('menu plugin', () => {
  const app = createApp({}).use(Menu)
  expect(app.component(Menu.name)).toBeTruthy()
})

test('menu placement', () => {
  ;[
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'right',
    'right-start',
    'right-end',
    'left',
    'left-start',
    'left-end',
    'cover-top',
    'cover-top-start',
    'cover-top-end',
    'cover-bottom',
    'cover-bottom-start',
    'cover-bottom-end',
    'cover-left',
    'cover-right',
  ].forEach((placement) => {
    const { mockRestore } = mockStubs()

    const root = document.createElement('div')

    const wrapper = mount(VarMenu, {
      props: {
        placement,
        teleport: root,
      },
    })

    expect(root.innerHTML).toMatchSnapshot()

    wrapper.unmount()
    mockRestore()
  })
})

test('menu click trigger', async () => {
  const { mockRestore } = mockStubs()

  const wrapper = mount(VarMenu, {
    attachTo: document.body,
  })

  await wrapper.trigger('click')
  await delay(300)
  expect(document.body.innerHTML).toMatchSnapshot()

  await trigger(document, 'click')
  await delay(300)
  expect(document.body.innerHTML).toMatchSnapshot()

  document.body.innerHTML = ''

  mockRestore()
})

test('menu manual trigger', async () => {
  const { mockRestore } = mockStubs()

  const root = document.createElement('div')

  const wrapper = mount(VarMenu, {
    props: {
      trigger: 'manual',
      teleport: root,
    },
  })

  await doubleRaf()
  await wrapper.trigger('click')
  await trigger(root.querySelector('.var-menu__menu'), 'mouseenter')
  await delay(300)
  expect(root.innerHTML).toMatchSnapshot()

  mockRestore()
})

test('menu hover trigger and events', async () => {
  const { mockRestore } = mockStubs()

  const onOpen = vi.fn()
  const onOpened = vi.fn()
  const onClose = vi.fn()
  const onClosed = vi.fn()

  const root = document.createElement('div')

  const wrapper = mount(VarMenu, {
    props: {
      trigger: 'hover',
      teleport: root,
      onOpen,
      onOpened,
      onClose,
      onClosed,
    },
  })

  await wrapper.trigger('mouseenter')
  expect(onOpen).toHaveBeenCalledTimes(1)

  await delay(300)

  expect(onOpened).toHaveBeenCalledTimes(1)
  expect(root.innerHTML).toMatchSnapshot()

  await wrapper.trigger('mouseleave')

  await doubleRaf()
  await delay(0)
  expect(onClose).toHaveBeenCalledTimes(1)
  await delay(300)

  expect(onClosed).toHaveBeenCalledTimes(1)
  expect(root.innerHTML).toMatchSnapshot()

  wrapper.unmount()
  mockRestore()
})

test('menu close on escape', async () => {
  const { mockRestore } = mockStubs()

  const onClose = vi.fn()

  const root = document.createElement('div')

  const wrapper = mount(VarMenu, {
    props: {
      teleport: root,
      show: true,
      onClose,
    },
  })

  await wrapper.trigger('mouseenter')
  await triggerKeyboard(window, 'keydown', { key: 'Escape' })

  await doubleRaf()
  await delay(0)
  expect(onClose).toHaveBeenCalledTimes(1)

  wrapper.unmount()
  mockRestore()
})

test('menu default style', async () => {
  const root = document.createElement('div')

  mount(VarMenu, {
    props: {
      defaultStyle: false,
      teleport: root,
    },
  })

  await doubleRaf()

  expect(root.innerHTML).toMatchSnapshot()
})

test('menu offset', async () => {
  const { mockRestore } = mockStubs()

  const root = document.createElement('div')

  mount(VarMenu, {
    props: {
      offsetX: 100,
      offsetY: 100,
      teleport: root,
    },
  })

  await doubleRaf()

  expect(root.innerHTML).toMatchSnapshot()

  mockRestore()
})

test('menu hover the menu list', async () => {
  const { mockRestore } = mockStubs()

  const root = document.createElement('div')

  mount(VarMenu, {
    props: {
      show: true,
      trigger: 'hover',
      teleport: root,
    },
  })

  await doubleRaf()
  await trigger(root.querySelector('.var-menu__menu'), 'mouseenter')
  await trigger(root.querySelector('.var-menu__menu'), 'mouseleave')
  await delay(300)
  expect(root.innerHTML).toMatchSnapshot()

  mockRestore()
})

test('menu same width', async () => {
  const { mockRestore } = mockStubs()

  const root = document.createElement('div')

  mount(VarMenu, {
    props: {
      show: true,
      sameWidth: true,
      trigger: 'hover',
      teleport: root,
    },
  })

  await doubleRaf()
  expect(root.innerHTML).toMatchSnapshot()

  mockRestore()
})

test('menu elevation', async () => {
  const { mockRestore } = mockStubs()

  const root = document.createElement('div')

  const wrapper = mount(VarMenu, {
    props: {
      show: true,
      elevation: false,
      teleport: root,
    },
  })

  await doubleRaf()
  expect(root.innerHTML).toMatchSnapshot()
  await wrapper.setProps({
    elevation: 10,
  })
  expect(root.innerHTML).toMatchSnapshot()

  mockRestore()
  wrapper.unmount()
})
