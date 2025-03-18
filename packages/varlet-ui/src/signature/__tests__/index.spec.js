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

describe('test signature component events', () => {
  test('signature start event', async () => {
    const onStart = vi.fn()
    const wrapper = mount(VarSignature, {
      props: { onStart },
    })

    await wrapper.find('canvas').trigger('touchstart', {
      touches: [{ clientX: 0, clientY: 0 }],
    })
    expect(onStart).toHaveBeenCalled()
    wrapper.unmount()
  })

  test('signature signing event', async () => {
    const onSigning = vi.fn()
    const wrapper = mount(VarSignature, {
      props: { onSigning },
    })

    await wrapper.find('canvas').trigger('touchstart', {
      touches: [{ clientX: 0, clientY: 0 }],
    })

    await wrapper.find('canvas').trigger('touchmove', {
      touches: [{ clientX: 10, clientY: 10 }],
    })

    expect(onSigning).toHaveBeenCalled()
    wrapper.unmount()
  })

  test('signature end event', async () => {
    const onEnd = vi.fn()
    const wrapper = mount(VarSignature, {
      props: { onEnd },
    })

    await wrapper.find('canvas').trigger('touchend')
    expect(onEnd).toHaveBeenCalled()
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

test('signature props validation', () => {
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
