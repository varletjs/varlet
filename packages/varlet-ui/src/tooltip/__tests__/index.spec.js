import { createApp } from 'vue'
import { doubleRaf } from '@varlet/shared'
import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import VarTooltip from '..'
import { delay, mockStubs, trigger } from '../../utils/test'

test('tooltip plugin', () => {
  const app = createApp({}).use(VarTooltip)
  expect(app.component(VarTooltip.name)).toBeTruthy()
})

test('tooltip placement', () => {
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
  ].forEach((placement) => {
    const { mockRestore } = mockStubs()
    const root = document.createElement('div')

    const wrapper = mount(VarTooltip, {
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

test('tooltip click trigger', async () => {
  const { mockRestore } = mockStubs()

  const wrapper = mount(VarTooltip, {
    attachTo: document.body,
    props: {
      trigger: 'click',
    },
  })

  await wrapper.trigger('click')
  await delay(300)
  expect(document.body.innerHTML).toMatchSnapshot()

  await trigger(document, 'click')
  await delay(300)
  expect(document.body.innerHTML).toMatchSnapshot()

  document.body.innerHTML = ''

  mockRestore()
  wrapper.unmount()
})

test('tooltip hover trigger and events', async () => {
  const { mockRestore } = mockStubs()

  const onOpen = vi.fn()
  const onOpened = vi.fn()
  const onClose = vi.fn()
  const onClosed = vi.fn()

  const root = document.createElement('div')

  const wrapper = mount(VarTooltip, {
    props: {
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

test('tooltip type', () => {
  ;['default', 'primary', 'info', 'success', 'warning', 'danger'].forEach((type) => {
    const { mockRestore } = mockStubs()
    const root = document.createElement('div')

    const wrapper = mount(VarTooltip, {
      props: {
        type,
        teleport: root,
      },
    })

    expect(root.innerHTML).toMatchSnapshot()

    wrapper.unmount()
    mockRestore()
  })
})

test('tooltip content', async () => {
  const { mockRestore } = mockStubs()

  const root = document.createElement('div')

  const wrapper = mount(VarTooltip, {
    props: {
      content: 'test tooltip',
      teleport: root,
    },
  })

  await doubleRaf()

  expect(root.innerHTML).toMatchSnapshot()

  wrapper.unmount()
  mockRestore()
})

test('tooltip color', async () => {
  const { mockRestore } = mockStubs()

  const root = document.createElement('div')

  const wrapper = mount(VarTooltip, {
    props: {
      color: '#000',
      teleport: root,
    },
  })

  await doubleRaf()

  expect(root.innerHTML).toMatchSnapshot()

  wrapper.unmount()
  mockRestore()
})

test('tooltip text-color', async () => {
  const { mockRestore } = mockStubs()

  const root = document.createElement('div')

  const wrapper = mount(VarTooltip, {
    props: {
      textColor: '#fff',
      teleport: root,
    },
  })

  await doubleRaf()

  expect(root.innerHTML).toMatchSnapshot()

  wrapper.unmount()
  mockRestore()
})

test('tooltip offset', async () => {
  const { mockRestore } = mockStubs()

  const root = document.createElement('div')

  const wrapper = mount(VarTooltip, {
    props: {
      offsetX: 100,
      offsetY: 100,
      teleport: root,
    },
  })

  await doubleRaf()

  expect(root.innerHTML).toMatchSnapshot()

  wrapper.unmount()
  mockRestore()
})

test('tooltip hover the tooltip list', async () => {
  const { mockRestore } = mockStubs()

  const root = document.createElement('div')

  const wrapper = mount(VarTooltip, {
    props: {
      show: true,
      trigger: 'hover',
      teleport: root,
    },
  })

  await doubleRaf()
  await trigger(root.querySelector('.var-tooltip__tooltip'), 'mouseenter')
  await trigger(root.querySelector('.var-tooltip__tooltip'), 'mouseleave')
  await delay(300)
  expect(root.innerHTML).toMatchSnapshot()

  wrapper.unmount()
  mockRestore()
})
