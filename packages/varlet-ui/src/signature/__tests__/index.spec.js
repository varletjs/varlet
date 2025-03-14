import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { beforeAll, describe, expect, test, vi } from 'vitest'
import Signature from '..'
import VarSignature from '../Signature.vue'

beforeAll(() => {
  const mockContext = {
    beginPath: vi.fn(),
    moveTo: vi.fn(),
    lineTo: vi.fn(),
    stroke: vi.fn(),
    clearRect: vi.fn(),
    closePath: vi.fn(),
    canvas: {
      width: 300,
      height: 150,
    },
    lineWidth: 2,
    strokeStyle: '#000',
  }

  HTMLCanvasElement.prototype.getContext = () => mockContext
})

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
        dataUrlType: 'png',
      },
    })

    expect(wrapper.find('.var-signature__inner').exists()).toBe(true)
    await wrapper.setProps({ dataUrlType: 'jpg' })
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
    const wrapper = mount(VarSignature, {
      props: { onClear },
    })

    await wrapper.vm.clear()
    expect(onClear).toHaveBeenCalled()
    wrapper.unmount()
  })

  test('signature confirm event', async () => {
    const onConfirm = vi.fn()
    const wrapper = mount(VarSignature, {
      props: { onConfirm },
    })

    await wrapper.vm.confirm()
    expect(onConfirm).toHaveBeenCalled()
    wrapper.unmount()
  })
})

test('signature canvas operations', async () => {
  const wrapper = mount(VarSignature)
  await wrapper.vm.clear()
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
  expect(wrapper.vm.isEmpty()).toBe(true)

  await wrapper.vm.confirm()
  expect(onConfirm).toHaveBeenCalled()

  wrapper.unmount()
})

test('signature props', () => {
  const wrapper = mount(VarSignature, {
    props: {
      lineWidth: 4,
      strokeStyle: '#ff0000',
      dataUrlType: 'jpg',
    },
  })

  expect(wrapper.props('lineWidth')).toBe(4)
  expect(wrapper.props('strokeStyle')).toBe('#ff0000')
  expect(wrapper.props('dataUrlType')).toBe('jpg')

  wrapper.unmount()
})
