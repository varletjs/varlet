import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import Signature from '..'
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

    await wrapper.find('.var-signature__button').trigger('click')
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

    await wrapper.findAll('.var-signature__button')[1].trigger('click')
    expect(onConfirm).toHaveBeenCalled()
    wrapper.unmount()
  })
})

test('signature canvas operations', async () => {
  // 由于 JSDOM 环境下 canvas 操作有限，这里只做简单测试
  const wrapper = mount(VarSignature)

  const canvas = wrapper.find('canvas').element
  expect(canvas).toBeTruthy()

  // 模拟 canvas 上下文
  const mockContext = {
    beginPath: vi.fn(),
    lineTo: vi.fn(),
    stroke: vi.fn(),
    clearRect: vi.fn(),
    closePath: vi.fn(),
  }

  // 保存原始方法
  const originalGetContext = canvas.getContext

  // 模拟 getContext 方法
  canvas.getContext = () => mockContext

  // 触发 mousedown 事件
  await wrapper.find('canvas').trigger('mousedown', {
    clientX: 10,
    clientY: 10,
  })

  expect(mockContext.beginPath).toHaveBeenCalled()

  // 恢复原始方法
  canvas.getContext = originalGetContext

  wrapper.unmount()
})
