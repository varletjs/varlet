import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import Signature from '..'
import { trigger } from '../../utils/test'
import VarSignature from '../Signature.vue'

test('signature use', () => {
  const app = createApp({}).use(Signature)
  expect(app.component(Signature.name)).toBeTruthy()
})

describe('test signature component props', () => {
  test('signature lineWidth', async () => {
    const wrapper = mount(VarSignature, {
      props: {
        lineWidth: 2,
      },
    })

    expect(wrapper.find('.var-signature__inner').exists()).toBe(true)
    await wrapper.setProps({ lineWidth: 4 })
    wrapper.unmount()
  })

  test('signature strokeStyle', async () => {
    const wrapper = mount(VarSignature, {
      props: {
        strokeStyle: '#000',
      },
    })

    expect(wrapper.find('.var-signature__inner').exists()).toBe(true)
    await wrapper.setProps({ strokeStyle: '#f00' })
    wrapper.unmount()
  })

  test('signature type', async () => {
    const wrapper = mount(VarSignature, {
      props: {
        type: 'png',
      },
    })

    expect(wrapper.find('.var-signature__inner').exists()).toBe(true)
    await wrapper.setProps({ type: 'jpg' })
    wrapper.unmount()
  })

  test('signature unsupportText', () => {
    // 模拟不支持 canvas 的环境
    const originalGetContext = HTMLCanvasElement.prototype.getContext
    HTMLCanvasElement.prototype.getContext = () => null

    const wrapper = mount(VarSignature, {
      props: {
        unsupportText: '自定义不支持提示',
      },
    })

    expect(wrapper.find('.var-signature__unsupport').text()).toBe('自定义不支持提示')

    // 恢复原始方法
    HTMLCanvasElement.prototype.getContext = originalGetContext
    wrapper.unmount()
  })

  test('signature customClass', async () => {
    const wrapper = mount(VarSignature, {
      props: {
        customClass: 'test-class',
      },
    })

    expect(wrapper.classes()).toContain('test-class')
    await wrapper.setProps({ customClass: 'another-class' })
    expect(wrapper.classes()).toContain('another-class')
    wrapper.unmount()
  })

  test('signature height', async () => {
    const wrapper = mount(VarSignature, {
      props: {
        height: 300,
      },
    })

    expect(wrapper.find('.var-signature__inner').exists()).toBe(true)
    await wrapper.setProps({ height: 400 })
    wrapper.unmount()
  })
})

describe('test signature component events', () => {
  test('signature clear event', async () => {
    const onClear = vi.fn()
    const onUpdateModelValue = vi.fn()

    const wrapper = mount(VarSignature, {
      props: {
        onClear,
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    await wrapper.find('.var-signature__actions .var-button').trigger('click')
    expect(onClear).toHaveBeenCalled()
    expect(onUpdateModelValue).toHaveBeenCalledWith('')
    wrapper.unmount()
  })

  test('signature confirm event', async () => {
    const onConfirm = vi.fn()
    const onUpdateModelValue = vi.fn()

    const wrapper = mount(VarSignature, {
      props: {
        onConfirm,
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    await wrapper.findAll('.var-signature__actions .var-button')[1].trigger('click')
    expect(onConfirm).toHaveBeenCalled()
    wrapper.unmount()
  })
})

test('signature canvas operations', async () => {
  const wrapper = mount(VarSignature)
  const canvas = wrapper.find('canvas').element

  // 模拟 canvas 上下文
  const mockContext = {
    beginPath: vi.fn(),
    moveTo: vi.fn(),
    lineTo: vi.fn(),
    stroke: vi.fn(),
    clearRect: vi.fn(),
    closePath: vi.fn(),
  }

  // 保存并替换 getContext 方法
  const originalGetContext = canvas.getContext
  canvas.getContext = () => mockContext

  // 模拟触摸事件
  const touchEvent = {
    touches: [{ clientX: 10, clientY: 10 }],
    preventDefault: vi.fn(),
  }

  await trigger(wrapper.find('canvas'), 'touchstart', touchEvent)
  expect(mockContext.beginPath).toHaveBeenCalled()
  expect(mockContext.moveTo).toHaveBeenCalled()

  // 恢复原始方法
  canvas.getContext = originalGetContext
  wrapper.unmount()
})

test('signature events', async () => {
  const onStart = vi.fn()
  const onSigning = vi.fn()
  const onEnd = vi.fn()

  const wrapper = mount(VarSignature, {
    props: {
      onStart,
      onSigning,
      onEnd,
    },
  })

  const canvas = wrapper.find('canvas')
  const touchEvent = {
    touches: [{ clientX: 10, clientY: 10 }],
    preventDefault: vi.fn(),
  }

  await trigger(canvas, 'touchstart', touchEvent)
  expect(onStart).toHaveBeenCalled()

  await trigger(canvas, 'touchmove', touchEvent)
  expect(onSigning).toHaveBeenCalled()

  await trigger(canvas, 'touchend')
  expect(onEnd).toHaveBeenCalled()

  wrapper.unmount()
})

test('signature clear and confirm', async () => {
  const onClear = vi.fn()
  const onConfirm = vi.fn()

  const wrapper = mount(VarSignature, {
    props: {
      onClear,
      onConfirm,
    },
  })

  await wrapper.vm.clear()
  expect(onClear).toHaveBeenCalled()
  expect(wrapper.vm.isEmpty).toBe(true)

  await wrapper.vm.confirm()
  expect(onConfirm).toHaveBeenCalled()

  wrapper.unmount()
})

test('signature disabled', async () => {
  const wrapper = mount(VarSignature, {
    props: {
      disabled: true,
    },
  })

  const canvas = wrapper.find('canvas')
  expect(canvas.element.classList.contains('var-signature--disabled')).toBe(true)

  const onStart = vi.fn()
  wrapper.vm.$on('start', onStart)

  const touchEvent = {
    touches: [{ clientX: 10, clientY: 10 }],
    preventDefault: vi.fn(),
  }

  await trigger(canvas, 'touchstart', touchEvent)
  expect(onStart).not.toHaveBeenCalled()

  wrapper.unmount()
})

test('signature props', () => {
  const wrapper = mount(VarSignature, {
    props: {
      lineWidth: 4,
      strokeStyle: '#ff0000',
      type: 'jpg',
      height: 300,
    },
  })

  expect(wrapper.props('lineWidth')).toBe(4)
  expect(wrapper.props('strokeStyle')).toBe('#ff0000')
  expect(wrapper.props('type')).toBe('jpg')
  expect(wrapper.props('height')).toBe(300)

  wrapper.unmount()
})
