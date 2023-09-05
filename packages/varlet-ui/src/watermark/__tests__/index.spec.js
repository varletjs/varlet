import Watermark from '..'
import VarWatermark from '../Watermark'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { mockCanvas } from '../../utils/test'
import { expect, vi } from 'vitest'

global.URL.createObjectURL = vi.fn()
global.URL.revokeObjectURL = vi.fn()

mockCanvas()

test('test watermark plugin', () => {
  const app = createApp({}).use(Watermark)
  expect(app.component(Watermark.name)).toBeTruthy()
})

test('test watermark content', async () => {
  const wrapper = mount(VarWatermark, {
    props: {
      content: 'Varlet',
    },
  })

  await wrapper.vm.$nextTick()

  expect(wrapper.find('svg span').text()).toBe('Varlet')
  wrapper.unmount()
})

test('test watermark font', async () => {
  const wrapper = mount(VarWatermark, {
    props: {
      content: 'Varlet',
      font: {
        fontSize: 15,
        fontWeight: 700,
      },
    },
  })

  await wrapper.vm.$nextTick()

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test watermark z-index', async () => {
  const wrapper = mount(VarWatermark, {
    props: {
      zIndex: 100,
    },
  })

  await wrapper.vm.$nextTick()

  expect(wrapper.find('.var-watermark__container').attributes('style')).toContain('z-index: 100')
  wrapper.unmount()
})

test('test watermark fullscreen', async () => {
  const wrapper = mount(VarWatermark, {
    props: {
      fullscreen: true,
    },
  })

  await wrapper.vm.$nextTick()
  expect(document.querySelector('.var-watermark--fullscreen')).toBeTruthy()
  wrapper.unmount()
})

test('test watermark opacity', async () => {
  const wrapper = mount(VarWatermark, {
    props: {
      opacity: 1,
    },
  })

  await wrapper.vm.$nextTick()

  expect(wrapper.find('svg').attributes('style')).toContain('opacity: 1')
  wrapper.unmount()
})

test('test watermark image', async () => {
  const wrapper = mount(VarWatermark, {
    props: {
      image: 'https://varlet.gitee.io/varlet-ui/varlet_icon.png',
    },
  })

  await wrapper.vm.$nextTick()

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test watermark content rotate', async () => {
  const wrapper = mount(VarWatermark, {
    props: {
      rotate: 20,
      content: 'Varlet',
    },
  })

  await wrapper.vm.$nextTick()

  expect(wrapper.find('svg div').attributes('style').includes('rotate(20deg)')).toBeTruthy()
  await wrapper.setProps({
    rotate: 30,
  })
  await wrapper.vm.$nextTick()
  expect(wrapper.find('svg div').attributes('style').includes('rotate(30deg)')).toBeTruthy()
  wrapper.unmount()
})

test('test watermark image rotate', async () => {
  const wrapper = mount(VarWatermark, {
    props: {
      rotate: 20,
      image: 'https://varlet.gitee.io/varlet-ui/varlet_icon.png',
    },
  })

  await wrapper.vm.$nextTick()

  expect(wrapper.find('svg image').attributes('style').includes('rotate(20deg)')).toBeTruthy()
  await wrapper.setProps({
    rotate: 30,
  })

  await wrapper.vm.$nextTick()
  expect(wrapper.find('svg image').attributes('style').includes('rotate(30deg)')).toBeTruthy()
  wrapper.unmount()
})

test('test watermark width', async () => {
  const wrapper = mount(VarWatermark, {
    props: {
      width: 150,
    },
  })

  await wrapper.vm.$nextTick()

  expect(wrapper.html()).toMatchSnapshot()
  await wrapper.setProps({
    width: 200,
  })

  await wrapper.vm.$nextTick()

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test watermark height', async () => {
  const wrapper = mount(VarWatermark, {
    props: {
      height: 150,
    },
  })

  await wrapper.vm.$nextTick()

  expect(wrapper.html()).toMatchSnapshot()
  await wrapper.setProps({
    height: 200,
  })

  await wrapper.vm.$nextTick()
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test watermark gapX', async () => {
  const wrapper = mount(VarWatermark, {
    props: {
      gapX: 20,
    },
  })

  await wrapper.vm.$nextTick()

  expect(wrapper.find('svg').attributes('style')).toContain('padding: 0px 20px 0px 0px')
  await wrapper.setProps({
    gapX: 30,
  })

  await wrapper.vm.$nextTick()
  expect(wrapper.find('svg').attributes('style')).toContain('padding: 0px 30px 0px 0px')
  wrapper.unmount()
})

test('test watermark gapY', async () => {
  const wrapper = mount(VarWatermark, {
    props: {
      gapY: 20,
    },
  })

  await wrapper.vm.$nextTick()

  expect(wrapper.find('svg').attributes('style')).toContain('padding: 0px 0px 20px 0px')
  await wrapper.setProps({
    gapY: 30,
  })

  await wrapper.vm.$nextTick()
  expect(wrapper.find('svg').attributes('style')).toContain('padding: 0px 0px 30px 0px')
  wrapper.unmount()
})

test('test watermark content offsetX', async () => {
  const wrapper = mount(VarWatermark, {
    props: {
      offsetX: 20,
      content: 'Varlet',
    },
  })

  await wrapper.vm.$nextTick()

  expect(wrapper.find('svg div').attributes('style')).toContain('transform: translate(20px, 0px)')
  await wrapper.setProps({
    offsetX: 30,
  })

  await wrapper.vm.$nextTick()
  expect(wrapper.find('svg div').attributes('style')).toContain('transform: translate(30px, 0px)')
  wrapper.unmount()
})

test('test watermark content offsetY', async () => {
  const wrapper = mount(VarWatermark, {
    props: {
      offsetY: 20,
      content: 'Varlet',
    },
  })

  await wrapper.vm.$nextTick()

  expect(wrapper.find('svg div').attributes('style')).toContain('transform: translate(0px, 20px)')
  await wrapper.setProps({
    offsetY: 30,
  })

  await wrapper.vm.$nextTick()
  expect(wrapper.find('svg div').attributes('style')).toContain('transform: translate(0px, 30px)')
  wrapper.unmount()
})

test('test watermark image offsetX', async () => {
  const wrapper = mount(VarWatermark, {
    props: {
      offsetX: 20,
      image: 'https://varlet.gitee.io/varlet-ui/varlet_icon.png',
    },
  })

  await wrapper.vm.$nextTick()

  expect(wrapper.html()).toMatchSnapshot()
  await wrapper.setProps({
    offsetX: 30,
  })

  await wrapper.vm.$nextTick()
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test watermark image offsetY', async () => {
  const wrapper = mount(VarWatermark, {
    props: {
      offsetY: 20,
      image: 'https://varlet.gitee.io/varlet-ui/varlet_icon.png',
    },
  })

  await wrapper.vm.$nextTick()

  expect(wrapper.html()).toMatchSnapshot()
  await wrapper.setProps({
    offsetY: 30,
  })

  await wrapper.vm.$nextTick()
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test watermark content slot', async () => {
  const wrapper = mount(VarWatermark, {
    slots: {
      content: () => 'Varlet UI',
    },
  })

  await wrapper.vm.$nextTick()

  expect(wrapper.find('svg div').text()).toBe('Varlet UI')
  wrapper.unmount()
})

test('test watermark priority between image and content', async () => {
  const wrapper = mount(VarWatermark, {
    props: {
      image: 'https://varlet.gitee.io/varlet-ui/varlet_icon.png',
      content: 'Varlet UI',
    },
  })

  await wrapper.vm.$nextTick()

  expect(wrapper.find('svg image').exists()).toBeTruthy()
  expect(wrapper.find('svg span').exists()).toBe(false)
  wrapper.unmount()
})

test('test watermark priority between image and content slot', async () => {
  const wrapper = mount(VarWatermark, {
    props: {
      image: 'https://varlet.gitee.io/varlet-ui/varlet_icon.png',
    },
    slots: {
      content: () => 'Varlet UI',
    },
  })

  await wrapper.vm.$nextTick()

  expect(wrapper.find('svg image').exists()).toBe(false)
  expect(wrapper.find('svg div').text()).toBe('Varlet UI')
  wrapper.unmount()
})
