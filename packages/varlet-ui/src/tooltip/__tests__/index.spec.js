import VarTooltip from '..'
import { createApp, h } from 'vue'
import { mount } from '@vue/test-utils'
import { delay, mockStubs, trigger } from '../../utils/jest'
import { doubleRaf } from '../../utils/elements'

test('test tooltip plugin', () => {
  const app = createApp({}).use(VarTooltip)
  expect(app.component(VarTooltip.name)).toBeTruthy()
})

test('test tooltip placement', async () => {
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
  ]) {
    const root = document.createElement('div')

    mount(VarTooltip, {
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

test('test tooltip click trigger', async () => {
  const { mockRestore } = mockStubs()

  const wrapper = mount(VarTooltip, {
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

test('test tooltip hover trigger and events', async () => {
  const { mockRestore } = mockStubs()

  const onOpen = jest.fn()
  const onOpened = jest.fn()
  const onClose = jest.fn()
  const onClosed = jest.fn()

  const root = document.createElement('div')

  const wrapper = mount(VarTooltip, {
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

test('test tooltip type', async () => {
  const { mockRestore } = mockStubs()

  for (const type of ['default', 'primary', 'info', 'success', 'warning', 'danger']) {
    const root = document.createElement('div')

    mount(VarTooltip, {
      props: {
        type,
        teleport: root,
      },
    })

    await doubleRaf()

    expect(root.innerHTML).toMatchSnapshot()
  }

  mockRestore()
})

test('test tooltip content', async () => {
  const { mockRestore } = mockStubs()

  const root = document.createElement('div')

  mount(VarTooltip, {
    props: {
      content: 'test tooltip',
      teleport: root,
    },
  })

  await doubleRaf()

  expect(root.innerHTML).toMatchSnapshot()

  mockRestore()
})

test('test tooltip color', async () => {
  const { mockRestore } = mockStubs()

  const root = document.createElement('div')

  mount(VarTooltip, {
    props: {
      color: '#000',
      teleport: root,
    },
  })

  await doubleRaf()

  expect(root.innerHTML).toMatchSnapshot()

  mockRestore()
})

test('test tooltip offset', async () => {
  const { mockRestore } = mockStubs()

  const root = document.createElement('div')

  mount(VarTooltip, {
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

test('test tooltip hover the tooltip list', async () => {
  const { mockRestore } = mockStubs()

  const root = document.createElement('div')

  mount(VarTooltip, {
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

  mockRestore()
})
