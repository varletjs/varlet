import FloatingPanel from '..'
import VarFloatingPanel from '../FloatingPanel.vue'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, vi } from 'vitest'
import { delay, triggerDrag } from '../../utils/test'

test('test floating-panel plugin', () => {
  const app = createApp({}).use(FloatingPanel)
  expect(app.component(FloatingPanel.name)).toBeTruthy()
})

describe('test floating-panel components props', () => {
  test('test floating-panel anchor', async () => {
    const onUpdateAnchor = vi.fn()
    const wrapper = mount(VarFloatingPanel, {
      props: {
        anchor: 100,
        'onUpdate:anchor': onUpdateAnchor,
      },
    })

    const panel = wrapper.find('.var-floating-panel')

    await delay(50)
    await triggerDrag(panel, 0, 600)
    expect(onUpdateAnchor).toHaveBeenCalled(true)
    expect(wrapper.html()).toMatchSnapshot()

    await delay(50)
    await triggerDrag(panel, 0, 200)
    expect(onUpdateAnchor).toHaveBeenCalled(true)
    expect(wrapper.vm.anchor).toEqual(100)
    expect(wrapper.html()).toMatchSnapshot()

    wrapper.unmount()
  })

  test('test floating-panel contentDraggable', async () => {
    const wrapper = mount(VarFloatingPanel, {
      props: {
        contentDraggable: true,
      },
    })

    const content = wrapper.find('.var-floating-panel__content')

    await delay(50)
    await triggerDrag(content, 0, 600)
    expect(wrapper.html()).toMatchSnapshot()

    await delay(50)
    await wrapper.setProps({ contentDraggable: false })
    await triggerDrag(content, 0, 200)
    expect(wrapper.html()).toMatchSnapshot()

    wrapper.unmount()
  })

  test('test floating-panel safeArea', async () => {
    const wrapper = mount(VarFloatingPanel, {
      props: {
        safeArea: true,
      },
    })

    expect(wrapper.find('.var-floating-panel--safe-area').exists()).toBeTruthy()

    await wrapper.setProps({
      safeArea: false,
    })

    expect(wrapper.find('.var-floating-panel--safe-area').exists()).toBeFalsy()

    wrapper.unmount()
  })

  test('test floating-panel elevation', async () => {
    const wrapper = mount(VarFloatingPanel, {
      props: {
        elevation: true,
      },
    })

    expect(wrapper.classes().includes('var-elevation--2')).toBe(true)

    await wrapper.setProps({
      elevation: false,
    })

    expect(wrapper.classes().includes('var-elevation--2')).toBe(false)

    wrapper.unmount()
  })

  test('test floating-panel duration', () => {
    const wrapper = mount(VarFloatingPanel, {
      props: {
        duration: 0.4,
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
    wrapper.unmount()
  })
})

describe('test floating-panel component slots', () => {
  test('test floating-panel component default', () => {
    const wrapper = mount(VarFloatingPanel, {
      slots: { default: () => 'Hello Varlet!' },
    })

    expect(wrapper.html()).toMatchSnapshot()
    wrapper.unmount()
  })
})

describe('test floating-panel component methods', () => {
  test('test floating-panel component onAnchorChange', async () => {
    const onAnchorChange = vi.fn()
    const wrapper = mount(VarFloatingPanel, {
      props: {
        onAnchorChange,
      },
    })

    const panel = wrapper.find('.var-floating-panel')

    await delay(50)
    await triggerDrag(panel, 0, 100)
    expect(onAnchorChange).toHaveBeenCalledTimes(1)

    await delay(50)
    await triggerDrag(panel, 0, 600)
    expect(onAnchorChange).toHaveBeenCalledTimes(2)

    await delay(50)
    await triggerDrag(panel, 0, 100)
    expect(onAnchorChange).toHaveBeenCalledTimes(3)

    wrapper.unmount()
  })
})
