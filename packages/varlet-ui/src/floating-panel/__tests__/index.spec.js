import FloatingPanel from '..'
import VarFloatingPanel from '../FloatingPanel.vue'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, vi } from 'vitest'
import { triggerDrag } from '../../utils/test'

test('test floating-panel plugin', () => {
  const app = createApp({}).use(FloatingPanel)
  expect(app.component(FloatingPanel.name)).toBeTruthy()
})

describe('test floating-panel components props', () => {
  test('test floating-panel anchor', async () => {
    const onUpdateAnchor = vi.fn()
    const root = document.createElement('div')
    const wrapper = mount(VarFloatingPanel, {
      props: {
        anchor: 100,
        anchors: [100, 200],
        teleport: root,
        'onUpdate:anchor': onUpdateAnchor,
      },
    })

    const panel = root.querySelector('.var-floating-panel')

    await triggerDrag(panel, 0, 50)
    expect(onUpdateAnchor).toHaveBeenCalledTimes(0)
    expect(panel.outerHTML).toMatchSnapshot()

    await triggerDrag(panel, 0, -200)
    expect(onUpdateAnchor).toHaveBeenCalledTimes(1)
    expect(onUpdateAnchor).toHaveBeenCalledWith(200)
    expect(panel.outerHTML).toMatchSnapshot()

    await triggerDrag(panel, 0, 100)
    expect(onUpdateAnchor).toHaveBeenCalledTimes(2)
    expect(onUpdateAnchor).toHaveBeenCalledWith(100)
    expect(panel.outerHTML).toMatchSnapshot()

    await triggerDrag(panel, 0, -80)
    expect(onUpdateAnchor).toHaveBeenCalledTimes(3)
    expect(onUpdateAnchor).toHaveBeenCalledWith(200)
    expect(panel.outerHTML).toMatchSnapshot()

    wrapper.unmount()
  })

  test('test floating-panel anchors changed', async () => {
    const root = document.createElement('div')
    const wrapper = mount(VarFloatingPanel, {
      props: {
        anchor: 100,
        anchors: [100, 200],
        teleport: root,
      },
    })

    const panel = root.querySelector('.var-floating-panel')

    expect(panel.outerHTML).toMatchSnapshot()

    await wrapper.setProps({
      anchors: [50, 200],
    })

    expect(panel.outerHTML).toMatchSnapshot()
    wrapper.unmount()
  })

  test('test floating-panel contentDraggable', async () => {
    const root = document.createElement('div')
    const wrapper = mount(VarFloatingPanel, {
      props: {
        anchor: 100,
        anchors: [100, 200],
        contentDraggable: true,
        teleport: root,
      },
    })

    const panel = root.querySelector('.var-floating-panel')
    const content = root.querySelector('.var-floating-panel__content')

    await triggerDrag(content, 0, 50)
    expect(panel.outerHTML).toMatchSnapshot()

    await triggerDrag(content, 0, -100)
    expect(panel.outerHTML).toMatchSnapshot()

    await wrapper.setProps({ contentDraggable: false })
    await triggerDrag(content, 0, 100)
    expect(panel.outerHTML).toMatchSnapshot()

    wrapper.unmount()
  })

  test('test floating-panel safeArea', async () => {
    const root = document.createElement('div')
    const wrapper = mount(VarFloatingPanel, {
      props: {
        safeArea: true,
        teleport: root,
      },
    })

    expect(root.querySelector('.var-floating-panel--safe-area')).toBeTruthy()
    await wrapper.setProps({
      safeArea: false,
    })
    expect(root.querySelector('.var-floating-panel--safe-area')).toBeFalsy()
    wrapper.unmount()
  })

  test('test floating-panel elevation', async () => {
    const root = document.createElement('div')
    const wrapper = mount(VarFloatingPanel, {
      props: {
        elevation: true,
        teleport: root,
      },
    })

    expect(root.querySelector('.var-floating-panel').classList.contains('var-elevation--3')).toBe(true)

    await wrapper.setProps({
      elevation: false,
    })

    expect(root.querySelector('.var-floating-panel').classList.contains('var-elevation--3')).toBe(false)

    wrapper.unmount()
  })

  test('test floating-panel duration', async () => {
    const wrapper = mount(VarFloatingPanel, {
      props: {
        duration: 0.4,
      },
    })

    expect(document.body).toMatchSnapshot()

    wrapper.unmount()
  })
})

describe('test floating-panel component slots', () => {
  test('test floating-panel component default', async () => {
    const root = document.createElement('div')
    const wrapper = mount(VarFloatingPanel, {
      props: {
        teleport: root,
      },
      slots: { default: () => 'Hello Varlet!' },
    })

    expect(root.innerHTML).toMatchSnapshot()

    wrapper.unmount()
  })
})

describe('test floating-panel component events', () => {
  test('test floating-panel component onAnchorChange', async () => {
    const onAnchorChange = vi.fn()
    const root = document.createElement('div')
    const wrapper = mount(VarFloatingPanel, {
      props: {
        anchor: 100,
        anchors: [100, 200],
        teleport: root,
        onAnchorChange,
      },
    })

    const panel = root.querySelector('.var-floating-panel')

    await triggerDrag(panel, 0, 50)
    expect(onAnchorChange).toHaveBeenCalledTimes(0)

    await triggerDrag(panel, 0, -200)
    expect(onAnchorChange).toHaveBeenCalledTimes(1)
    expect(onAnchorChange).toHaveBeenCalledWith(200)

    await triggerDrag(panel, 0, 100)
    expect(onAnchorChange).toHaveBeenCalledTimes(2)
    expect(onAnchorChange).toHaveBeenCalledWith(100)

    await triggerDrag(panel, 0, -80)
    expect(onAnchorChange).toHaveBeenCalledTimes(3)
    expect(onAnchorChange).toHaveBeenCalledWith(200)

    wrapper.unmount()
  })
})
