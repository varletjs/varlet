import { doubleRaf } from '@varlet/shared'
import { flushPromises, mount } from '@vue/test-utils'
import { expect, test, vi } from 'vite-plus/test'
import { createApp } from 'vue'
import Menu from '..'
import { delay, mockStubs, trigger, triggerKeyboard } from '../../utils/test'
import VarMenu from '../Menu'

function mockViewport() {
  const width = vi.spyOn(document.documentElement, 'clientWidth', 'get').mockReturnValue(1024)
  const height = vi.spyOn(document.documentElement, 'clientHeight', 'get').mockReturnValue(768)

  return () => {
    width.mockRestore()
    height.mockRestore()
  }
}

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

test('menu coordinates support zero, updates, offsets and placement', async () => {
  const restoreViewport = mockViewport()
  const root = document.createElement('div')
  const wrapper = mount(VarMenu, {
    props: {
      show: true,
      trigger: 'manual',
      x: 0,
      y: 0,
      placement: 'bottom-start',
      strategy: 'fixed',
      teleport: root,
    },
  })
  const menu = root.querySelector('.var-menu__menu')
  const width = vi.spyOn(menu, 'offsetWidth', 'get').mockReturnValue(100)
  const height = vi.spyOn(menu, 'offsetHeight', 'get').mockReturnValue(40)
  const rect = vi.spyOn(menu, 'getBoundingClientRect').mockReturnValue(new DOMRect(0, 0, 100, 40))

  try {
    await flushPromises()
    expect(menu.style.position).toBe('fixed')
    expect(menu.style.left).toBe('0px')
    expect(menu.style.top).toBe('0px')

    await wrapper.setProps({ x: 180, y: 240 })
    await flushPromises()
    expect(menu.style.left).toBe('180px')
    expect(menu.style.top).toBe('240px')

    await wrapper.setProps({ offsetX: 12, offsetY: 8 })
    await flushPromises()
    expect(menu.style.left).toBe('192px')
    expect(menu.style.top).toBe('248px')

    await wrapper.setProps({ placement: 'left-start' })
    await flushPromises()
    expect(menu.getAttribute('data-popper-placement')).toBe('left-start')
    expect(menu.style.left).toBe('92px')
    expect(menu.style.top).toBe('248px')
  } finally {
    wrapper.unmount()
    rect.mockRestore()
    width.mockRestore()
    height.mockRestore()
    restoreViewport()
  }
})

test('menu coordinates use viewport positions on a scrolled page and flip at its edge', async () => {
  const restoreViewport = mockViewport()
  const { pageXOffset, pageYOffset } = window
  window.pageXOffset = 75
  window.pageYOffset = 300
  const documentRect = vi
    .spyOn(document.documentElement, 'getBoundingClientRect')
    .mockReturnValue(new DOMRect(-75, -300, 1024, 1200))
  const root = document.createElement('div')
  root.style.transform = 'none'
  root.style.perspective = 'none'
  document.body.append(root)
  const wrapper = mount(VarMenu, {
    global: {
      stubs: { transition: false },
    },
    props: {
      show: true,
      trigger: 'manual',
      x: 180,
      y: 240,
      placement: 'bottom-start',
      teleport: root,
    },
  })
  const menu = root.querySelector('.var-menu__menu')
  const width = vi.spyOn(menu, 'offsetWidth', 'get').mockReturnValue(100)
  const height = vi.spyOn(menu, 'offsetHeight', 'get').mockReturnValue(40)
  const rect = vi.spyOn(menu, 'getBoundingClientRect').mockReturnValue(new DOMRect(0, 0, 100, 40))

  try {
    await flushPromises()
    expect(menu.style.position).toBe('absolute')
    expect(menu.getAttribute('data-popper-placement')).toBe('bottom-start')
    expect(menu.style.left).toBe('255px')
    expect(menu.style.top).toBe('540px')

    await wrapper.setProps({ y: 760 })
    await flushPromises()
    expect(menu.getAttribute('data-popper-placement')).toBe('top-start')
    expect(menu.style.left).toBe('255px')
    expect(menu.style.top).toBe('1020px')
  } finally {
    wrapper.unmount()
    root.remove()
    rect.mockRestore()
    width.mockRestore()
    height.mockRestore()
    documentRect.mockRestore()
    window.pageXOffset = pageXOffset
    window.pageYOffset = pageYOffset
    restoreViewport()
  }
})

test.each(['x', 'y'])('menu falls back to its reference when %s is removed', async (coordinate) => {
  const restoreViewport = mockViewport()
  const root = document.createElement('div')
  const reference = document.createElement('button')
  reference.style.width = '120px'
  reference.style.height = '32px'
  const rect = vi.spyOn(reference, 'getBoundingClientRect').mockReturnValue(new DOMRect(40, 60, 120, 32))
  const wrapper = mount(VarMenu, {
    props: {
      show: true,
      trigger: 'manual',
      reference,
      x: 180,
      y: 240,
      sameWidth: true,
      placement: 'cover-top-start',
      strategy: 'fixed',
      teleport: root,
    },
  })
  const menu = root.querySelector('.var-menu__menu')

  try {
    await flushPromises()
    expect(menu.style.left).toBe('180px')
    expect(menu.style.top).toBe('240px')
    expect(menu.style.width).toBe('')

    await wrapper.setProps({ [coordinate]: undefined })
    await flushPromises()
    expect(menu.style.left).toBe('40px')
    expect(menu.style.top).toBe('60px')
    expect(menu.style.width).toBe('120px')

    await wrapper.setProps({ x: 180, y: 240 })
    await flushPromises()
    expect(menu.style.left).toBe('180px')
    expect(menu.style.top).toBe('240px')
    expect(menu.style.width).toBe('')
  } finally {
    wrapper.unmount()
    rect.mockRestore()
    restoreViewport()
  }
})
