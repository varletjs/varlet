import Fab from '..'
import { createApp, h, Fragment } from 'vue'
import { mount } from '@vue/test-utils'
import { triggerDrag, delay, mockStubs, trigger } from '../../utils/test'
import { expect, vi } from 'vitest'

mockStubs()

test('test fab plugin', () => {
  const app = createApp({}).use(Fab)
  expect(app.component(Fab.name)).toBeTruthy()
})

test('test fab drag', async () => {
  const container = document.createElement('div')
  const wrapper = mount(Fab, {
    props: {
      teleport: container,
      drag: false,
    },
  })

  expect(container.innerHTML).toMatchSnapshot()

  await wrapper.setProps({ drag: true })
  await triggerDrag(container.childNodes[0], 10, 10)
  expect(container.innerHTML).toMatchSnapshot()

  wrapper.unmount()
})

test('test fab type', () => {
  ;['default', 'primary', 'warning', 'info', 'danger', 'success'].forEach((type) => {
    const container = document.createElement('div')
    const wrapper = mount(Fab, {
      props: {
        teleport: container,
        type,
      },
    })

    expect(container.innerHTML).toMatchSnapshot()

    wrapper.unmount()
  })
})

test('test fab position', () => {
  ;['left-top', 'right-top', 'left-bottom', 'right-bottom'].forEach((position) => {
    const container = document.createElement('div')
    const wrapper = mount(Fab, {
      props: {
        teleport: container,
        position,
      },
    })

    expect(container.innerHTML).toMatchSnapshot()

    wrapper.unmount()
  })
})

test('test fab direction', () => {
  ;['top', 'right', 'bottom', 'left'].forEach((direction) => {
    const container = document.createElement('div')
    const wrapper = mount(Fab, {
      props: {
        teleport: container,
        direction,
      },
    })

    expect(container.innerHTML).toMatchSnapshot()

    wrapper.unmount()
  })
})

test('test fab fixed equals false', () => {
  const container = document.createElement('div')
  const wrapper = mount(Fab, {
    props: {
      teleport: container,
      fixed: false,
    },
  })

  expect(container.innerHTML).toMatchSnapshot()

  wrapper.unmount()
})

test('test fab zIndex and inset', () => {
  const container = document.createElement('div')
  const wrapper = mount(Fab, {
    props: {
      teleport: container,
      zIndex: 999,
      top: 10,
      bottom: 10,
      left: 10,
      right: 10,
    },
  })

  expect(container.innerHTML).toMatchSnapshot()

  wrapper.unmount()
})

test('test fab color', () => {
  const container = document.createElement('div')
  const wrapper = mount(Fab, {
    props: {
      teleport: container,
      color: 'yellow',
    },
  })

  expect(container.innerHTML).toMatchSnapshot()

  wrapper.unmount()
})

test('test fab trigger equals click', async () => {
  const container = document.createElement('div')
  const wrapper = mount(Fab, {
    props: {
      teleport: container,
    },
    slots: {
      default: () => h('div', 'action'),
    },
  })

  const actions = container.querySelector('.var-fab__actions')
  const button = container.querySelector('.var-button')

  expect(container.innerHTML).toMatchSnapshot()
  expect(actions.style.display).toBe('none')

  await trigger(button, 'click')
  await delay(300)

  expect(container.innerHTML).toMatchSnapshot()
  expect(actions.style.display).toBe('')

  await trigger(button, 'click')
  await delay(300)

  expect(container.innerHTML).toMatchSnapshot()
  expect(actions.style.display).toBe('none')

  wrapper.unmount()
})

test('test fab trigger equals hover', async () => {
  const container = document.createElement('div')
  const wrapper = mount(Fab, {
    props: {
      teleport: container,
      trigger: 'hover',
    },
    slots: {
      default: () => h('div', 'action'),
    },
  })

  const actions = container.querySelector('.var-fab__actions')
  expect(container.innerHTML).toMatchSnapshot()
  expect(actions.style.display).toBe('none')

  await trigger(actions, 'mouseenter')
  await delay(300)

  expect(container.innerHTML).toMatchSnapshot()
  expect(actions.style.display).toBe('')

  await trigger(actions, 'mouseleave')
  await delay(300)

  expect(container.innerHTML).toMatchSnapshot()
  expect(actions.style.display).toBe('none')

  wrapper.unmount()
})

test('test fab custom icon', async () => {
  const container = document.createElement('div')
  const wrapper = mount(Fab, {
    props: {
      teleport: container,
      inactiveIcon: 'check',
      activeIcon: 'fire',
      inactiveIconSize: 30,
      activeIconSize: 30,
    },
    slots: {
      default: () => h('div', 'action'),
    },
  })
  await delay(0)
  const button = container.querySelector('.var-button')

  expect(container.innerHTML).toMatchSnapshot()

  await trigger(button, 'click')
  await delay(300)

  expect(container.innerHTML).toMatchSnapshot()

  wrapper.unmount()
})

test('test fab disabled with trigger equals click', async () => {
  const onOpen = vi.fn()
  const container = document.createElement('div')

  const wrapper = mount(Fab, {
    props: {
      teleport: container,
      disabled: true,
      onOpen,
    },
    slots: {
      default: () => h('div', 'action'),
    },
  })

  const actions = container.querySelector('.var-fab__actions')
  const button = container.querySelector('.var-button')

  expect(actions.style.display).toBe('none')
  await trigger(button, 'click')
  expect(actions.style.display).toBe('none')
  expect(onOpen).toBeCalledTimes(0)

  wrapper.unmount()
})

test('test fab disabled with trigger equals hover', async () => {
  const onOpen = vi.fn()
  const container = document.createElement('div')

  const wrapper = mount(Fab, {
    props: {
      teleport: container,
      trigger: 'hover',
      disabled: true,
      onOpen,
    },
    slots: {
      default: () => h('div', 'action'),
    },
  })

  const actions = container.querySelector('.var-fab__actions')

  expect(actions.style.display).toBe('none')

  await trigger(actions, 'mouseenter')

  expect(actions.style.display).toBe('none')
  expect(onOpen).toBeCalledTimes(0)

  wrapper.unmount()
})

test('test fab events and fragment default slots and click outside close', async () => {
  const onOpen = vi.fn()
  const onOpened = vi.fn()
  const onClose = vi.fn()
  const onClosed = vi.fn()
  const onUpdateActive = vi.fn()
  const container = document.createElement('div')

  const wrapper = mount(Fab, {
    props: {
      teleport: container,
      onOpen,
      onOpened,
      onClose,
      onClosed,
      'onUpdate:active': onUpdateActive,
    },
    slots: {
      default: () => h(Fragment, {}, [h('div', 'action'), h('div', 'action'), h('div', 'action')]),
    },
  })

  const button = container.querySelector('.var-button')
  expect(container.innerHTML).toMatchSnapshot()
  await trigger(button, 'click')

  expect(onOpen).toBeCalledTimes(1)
  expect(onUpdateActive).toBeCalledWith(true)
  await delay(300)
  expect(onOpened).toBeCalledTimes(1)

  await trigger(document, 'click')
  expect(onClose).toBeCalledTimes(1)
  expect(onUpdateActive).toBeCalledWith(false)
  await delay(300)
  expect(onClosed).toBeCalledTimes(1)

  wrapper.unmount()
})

test('test fab trigger and disabled change', async () => {
  const container = document.createElement('div')
  const wrapper = mount(Fab, {
    props: {
      teleport: container,
      active: true,
    },
    slots: {
      default: () => h('div', 'action'),
    },
  })

  const actions = container.querySelector('.var-fab__actions')

  expect(actions.style.display).toBe('')
  await wrapper.setProps({ trigger: 'hover' })
  await delay(300)
  expect(actions.style.display).toBe('none')
  await wrapper.setProps({ active: false })
  await wrapper.setProps({ active: true })
  expect(actions.style.display).toBe('')
  await wrapper.setProps({ disabled: true })
  await delay(300)
  expect(actions.style.display).toBe('none')

  wrapper.unmount()
})

test('test fab trigger slot', () => {
  const container = document.createElement('div')
  const wrapper = mount(Fab, {
    props: {
      teleport: container,
    },
    slots: {
      trigger: () => h('div', 'trigger'),
    },
  })

  expect(container.innerHTML).toMatchSnapshot()

  wrapper.unmount()
})

test('test fab teleport', () => {
  const wrapper = mount(Fab, {
    props: {
      teleport: 'body',
    },
    slots: {
      default: () => h('div', 'action'),
    },
  })

  expect(document.body.innerHTML).toMatchSnapshot()
  wrapper.unmount()
})

test('test fab safeArea', () => {
  const container = document.createElement('div')
  const wrapper = mount(Fab, {
    props: {
      teleport: container,
      safeArea: true,
    },
  })

  expect(container.innerHTML).toMatchSnapshot()

  wrapper.unmount()
})
