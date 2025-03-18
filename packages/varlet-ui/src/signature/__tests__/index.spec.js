import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { beforeAll, describe, expect, test, vi } from 'vitest'
import Signature from '..'
import VarSignature from '../Signature.vue'

// 模拟 Canvas API
beforeAll(() => {
  // 模拟 getContext
  HTMLCanvasElement.prototype.getContext = vi.fn(() => ({
    clearRect: vi.fn(),
    closePath: vi.fn(),
    beginPath: vi.fn(),
    moveTo: vi.fn(),
    lineTo: vi.fn(),
    stroke: vi.fn(),
  }))

  // 模拟 toDataURL
  HTMLCanvasElement.prototype.toDataURL = vi.fn((type) => {
    return type === 'image/jpeg' ? 'data:image/jpeg;base64,test' : 'data:image/png;base64,test'
  })
})

test('signature plugin', () => {
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

    expect(wrapper.find('.var-signature')).toBeTruthy()
    await wrapper.setProps({ lineWidth: 4 })
    wrapper.unmount()
  })

  test('signature strokeStyle', async () => {
    const wrapper = mount(VarSignature, {
      props: {
        strokeStyle: '#000',
      },
    })

    expect(wrapper.find('.var-signature')).toBeTruthy()
    await wrapper.setProps({ strokeStyle: '#f00' })
    wrapper.unmount()
  })

  test('signature dataUrlType', async () => {
    const wrapper = mount(VarSignature, {
      props: {
        dataUrlType: 'png',
      },
    })

    expect(wrapper.find('.var-signature')).toBeTruthy()
    await wrapper.setProps({ dataUrlType: 'jpg' })
    wrapper.unmount()
  })
})

describe('test signature component methods', () => {
  test('signature reset method', async () => {
    const wrapper = mount(VarSignature)
    await wrapper.vm.reset()
    wrapper.unmount()
  })

  test('signature confirm method', async () => {
    const wrapper = mount(VarSignature)
    const result = await wrapper.vm.confirm()
    expect(result).toBe('')
    wrapper.unmount()
  })
})
