import Watermark from '..'
import VarWatermark from '../Watermark'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

// simulate URL.createObjectURL() method
global.URL.createObjectURL = jest.fn()

test('test watermark plugin', () => {
  const app = createApp({}).use(Watermark)
  expect(app.component(Watermark.name)).toBeTruthy()
})

test('test watermark content', () => {
  const wrapper = mount(VarWatermark, {
    props: {
      content: 'Varlet',
    },
  })

  expect(wrapper.find('.var-watermark__content-color').text()).toBe('Varlet')
  wrapper.unmount()
})

test('test watermark font', () => {
  const wrapper = mount(VarWatermark, {
    props: {
      content: 'Varlet',
      font: {
        fontSize: 15,
        fontWeight: 700,
      },
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test watermark z-index', () => {
  const wrapper = mount(VarWatermark, {
    props: {
      zIndex: 100,
    },
  })

  expect(wrapper.find('.var-watermark__container').attributes('style')).toContain('z-index: 100')
  wrapper.unmount()
})

test('test watermark fullscreen', () => {
  const wrapper = mount(VarWatermark, {
    props: {
      fullscreen: true,
    },
  })

  expect(wrapper.find('.var-watermark__full')).toBeTruthy()
  wrapper.unmount()
})

test('test watermark opacity', () => {
  const wrapper = mount(VarWatermark, {
    props: {
      opacity: 1,
    },
  })

  expect(wrapper.find('svg').attributes('style')).toContain('opacity: 1')
  wrapper.unmount()
})

test('test watermark image', () => {
  const wrapper = mount(VarWatermark, {
    props: {
      image: 'https://varlet.gitee.io/varlet-ui/varlet_icon.png',
    },
  })

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

  expect(wrapper.find('.var-watermark__content div').attributes('style')).toContain('transform: rotate(20deg)')
  await wrapper.setProps({
    rotate: 30,
  })
  expect(wrapper.find('.var-watermark__content div').attributes('style')).toContain('transform: rotate(30deg)')
  wrapper.unmount()
})

test('test watermark image rotate', async () => {
  const wrapper = mount(VarWatermark, {
    props: {
      rotate: 20,
      image: 'https://varlet.gitee.io/varlet-ui/varlet_icon.png',
    },
  })

  expect(wrapper.find('svg image').attributes('style')).toContain('transform: rotate(20deg)')
  await wrapper.setProps({
    rotate: 30,
  })
  expect(wrapper.find('svg image').attributes('style')).toContain('transform: rotate(30deg)')
  wrapper.unmount()
})

test('test watermark width', async () => {
  const wrapper = mount(VarWatermark, {
    props: {
      width: 150,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  await wrapper.setProps({
    width: 200,
  })
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test watermark height', async () => {
  const wrapper = mount(VarWatermark, {
    props: {
      height: 150,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  await wrapper.setProps({
    height: 200,
  })
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test watermark gapX', async () => {
  const wrapper = mount(VarWatermark, {
    props: {
      gapX: 20,
    },
  })

  expect(wrapper.find('svg').attributes('style')).toContain('padding: 0px 20px 0px 0px')
  await wrapper.setProps({
    gapX: 30,
  })
  expect(wrapper.find('svg').attributes('style')).toContain('padding: 0px 30px 0px 0px')
  wrapper.unmount()
})

test('test watermark gapY', async () => {
  const wrapper = mount(VarWatermark, {
    props: {
      gapY: 20,
    },
  })

  expect(wrapper.find('svg').attributes('style')).toContain('padding: 0px 0px 20px 0px')
  await wrapper.setProps({
    gapY: 30,
  })
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

  expect(wrapper.find('.var-watermark__content div').attributes('style')).toContain('left: 20px')
  await wrapper.setProps({
    offsetX: 30,
  })
  expect(wrapper.find('.var-watermark__content div').attributes('style')).toContain('left: 30px')
  wrapper.unmount()
})

test('test watermark content offsetY', async () => {
  const wrapper = mount(VarWatermark, {
    props: {
      offsetY: 20,
      content: 'Varlet',
    },
  })

  expect(wrapper.find('.var-watermark__content div').attributes('style')).toContain('top: 20px')
  await wrapper.setProps({
    offsetY: 30,
  })
  expect(wrapper.find('.var-watermark__content div').attributes('style')).toContain('top: 30px')
  wrapper.unmount()
})

test('test watermark image offsetX', async () => {
  const wrapper = mount(VarWatermark, {
    props: {
      offsetX: 20,
      image: 'https://varlet.gitee.io/varlet-ui/varlet_icon.png',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  await wrapper.setProps({
    offsetX: 30,
  })
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

  expect(wrapper.html()).toMatchSnapshot()
  await wrapper.setProps({
    offsetY: 30,
  })
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test watermark content slot', () => {
  const wrapper = mount(VarWatermark, {
    slots: {
      content: () => 'Varlet UI',
    },
  })

  expect(wrapper.find('.var-watermark__content div').text()).toBe('Varlet UI')
  wrapper.unmount()
})
