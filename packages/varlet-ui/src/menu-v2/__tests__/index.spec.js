import MenuV2 from '..'
import { createApp, h } from 'vue'
import { mount } from '@vue/test-utils'
import { delay, mockStubs, trigger } from '../../utils/jest'
import { doubleRaf } from '../../utils/elements'

test('test menu v2 plugin', () => {
  const app = createApp({}).use(MenuV2)
  expect(app.component(MenuV2.name)).toBeTruthy()
})

test('test menu v2 placement', async () => {
  const { mockRestore } = mockStubs()

  for (const placement of [
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
  ]) {
    const root = document.createElement('div')

    mount(MenuV2, {
      props: {
        placement,
        teleport: root,
      },
    })

    await doubleRaf()

    expect(root.innerHTML).toMatchSnapshot()
  }

  mockRestore()
})

test('test menu v2 click trigger', async () => {
  const { mockRestore } = mockStubs()

  const wrapper = mount(MenuV2, {
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

test('test menu v2 hover trigger and events', async () => {
  const { mockRestore } = mockStubs()

  const onOpen = jest.fn()
  const onOpened = jest.fn()
  const onClose = jest.fn()
  const onClosed = jest.fn()

  const root = document.createElement('div')

  const wrapper = mount(MenuV2, {
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

test('test menu v2 default style', async () => {
  const root = document.createElement('div')

  mount(MenuV2, {
    props: {
      defaultStyle: false,
      teleport: root,
    },
  })

  await doubleRaf()

  expect(root.innerHTML).toMatchSnapshot()
})

test('test menu v2 offset', async () => {
  const { mockRestore } = mockStubs()

  const root = document.createElement('div')

  mount(MenuV2, {
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

test('test menu v2 hover the menu list', async () => {
  const { mockRestore } = mockStubs()

  const root = document.createElement('div')

  mount(MenuV2, {
    props: {
      show: true,
      trigger: 'hover',
      teleport: root,
    },
  })

  await doubleRaf()
  await trigger(root.querySelector('.var-menu-v2__menu'), 'mouseenter')
  await trigger(root.querySelector('.var-menu-v2__menu'), 'mouseleave')
  await delay(300)
  expect(root.innerHTML).toMatchSnapshot()

  mockRestore()
})
