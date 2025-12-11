import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import Drag from '..'
import { delay, trigger, triggerDrag } from '../../utils/test'

test('drag plugin', () => {
  const app = createApp({}).use(Drag)
  expect(app.component(Drag.name)).toBeTruthy()
})

test('drag direction', async () => {
  const container = document.createElement('div')
  const wrapper = mount(Drag, {
    props: {
      teleport: container,
    },
  })

  await triggerDrag(container.childNodes[1], 10, 10)
  expect(container.innerHTML).toMatchSnapshot()

  wrapper.setProps({ direction: 'x' })
  await triggerDrag(container.childNodes[1], 10, 10)
  expect(container.innerHTML).toMatchSnapshot()

  wrapper.setProps({ direction: 'y' })
  await triggerDrag(container.childNodes[1], 10, 10)
  expect(container.innerHTML).toMatchSnapshot()

  wrapper.unmount()
})

test('drag attraction', async () => {
  const container = document.createElement('div')
  const wrapper = mount(Drag, {
    props: {
      teleport: container,
      attraction: 'x',
    },
  })
  await triggerDrag(container.childNodes[1], 10, 10)
  expect(container.innerHTML).toMatchSnapshot()

  wrapper.setProps({ attraction: 'y' })
  await triggerDrag(container.childNodes[1], 10, 10)
  expect(container.innerHTML).toMatchSnapshot()

  wrapper.setProps({ attraction: 'xy' })
  await triggerDrag(container.childNodes[1], 10, 10)
  expect(container.innerHTML).toMatchSnapshot()

  wrapper.unmount()
})

test('drag disabled', async () => {
  const container = document.createElement('div')
  const wrapper = mount(Drag, {
    props: {
      disabled: true,
      teleport: container,
    },
  })

  await triggerDrag(container.childNodes[1], 10, 10)
  expect(container.innerHTML).toMatchSnapshot()

  wrapper.unmount()
})

test('drag boundary', async () => {
  const container = document.createElement('div')
  const wrapper = mount(Drag, {
    props: {
      teleport: container,
      boundary: {
        top: 10,
        left: 10,
      },
    },
  })

  const el = container.childNodes[1]
  await trigger(el, 'touchstart', 0, 0)
  await trigger(el, 'touchmove', 1, 1)
  await trigger(el, 'touchend', 1, 1)
  expect(container.innerHTML).toMatchSnapshot()

  wrapper.unmount()
})

test('drag reset', async () => {
  const container = document.createElement('div')
  const wrapper = mount(Drag, {
    props: {
      teleport: container,
    },
  })

  await triggerDrag(container.childNodes[1], 10, 10)
  expect(container.innerHTML).toMatchSnapshot()

  wrapper.vm.reset()
  await delay()
  expect(container.innerHTML).toMatchSnapshot()

  wrapper.unmount()
})

test('drag click method', async () => {
  const container = document.createElement('div')
  const onClick = vi.fn()

  const wrapper = mount(Drag, {
    props: {
      teleport: container,
      onClick,
    },
  })

  await delay(16)
  const dragElement = container.querySelector('.var-drag')
  await trigger(dragElement, 'click')
  expect(onClick).toHaveBeenCalledTimes(1)

  wrapper.unmount()
})
