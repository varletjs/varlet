import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vite-plus/test'
import { createApp } from 'vue'
import Paper from '..'
import { delay, trigger } from '../../utils/test'
import VarPaper from '../Paper'

test('paper use', () => {
  const app = createApp({}).use(Paper)
  expect(app.component(Paper.name)).toBeTruthy()
})

test('paper elevation', async () => {
  const wrapper = mount(VarPaper, {
    props: {
      elevation: 2,
    },
  })

  expect(wrapper.find('.var-elevation--2').exists()).toBeTruthy()

  await wrapper.setProps({
    elevation: 3,
  })
  expect(wrapper.find('.var-elevation--3').exists()).toBeTruthy()
  wrapper.unmount()
})

test('paper size', async () => {
  const wrapper = mount(VarPaper, {
    props: {
      width: 100,
      height: 100,
    },
  })

  expect(wrapper.find('.var-paper').attributes('style')).toContain('width: 100px; height: 100px')

  await wrapper.setProps({
    width: 200,
    height: 200,
  })
  expect(wrapper.find('.var-paper').attributes('style')).toContain('width: 200px; height: 200px')
  wrapper.unmount()
})

test('paper round', async () => {
  const wrapper = mount(VarPaper, {
    props: {
      round: false,
    },
  })

  expect(wrapper.find('.var-paper--round').exists()).toBeFalsy()

  await wrapper.setProps({
    round: true,
  })
  expect(wrapper.find('.var-paper--round').exists()).toBeTruthy()
  wrapper.unmount()
})

test('paper inline', async () => {
  const wrapper = mount(VarPaper, {
    props: {
      inline: false,
    },
  })

  expect(wrapper.find('.var--inline-flex').exists()).toBeFalsy()

  await wrapper.setProps({
    inline: true,
  })
  expect(wrapper.find('.var--inline-flex').exists()).toBeTruthy()
  wrapper.unmount()
})

test('paper variant', async () => {
  const wrapper = mount(VarPaper, {
    props: {
      elevation: 2,
      variant: 'standard',
    },
  })

  expect(wrapper.find('.var-paper--outlined').exists()).toBeFalsy()
  expect(wrapper.find('.var-paper--filled').exists()).toBeFalsy()
  expect(wrapper.find('.var-elevation--2').exists()).toBeTruthy()

  await wrapper.setProps({
    variant: 'outlined',
  })
  expect(wrapper.find('.var-paper--outlined').exists()).toBeTruthy()
  expect(wrapper.find('.var-paper--filled').exists()).toBeFalsy()
  expect(wrapper.find('.var-elevation--2').exists()).toBeFalsy()

  await wrapper.setProps({
    variant: 'filled',
  })
  expect(wrapper.find('.var-paper--outlined').exists()).toBeFalsy()
  expect(wrapper.find('.var-paper--filled').exists()).toBeTruthy()
  expect(wrapper.find('.var-elevation--2').exists()).toBeFalsy()
  wrapper.unmount()
})

test('paper radius', async () => {
  const wrapper = mount(VarPaper, {
    props: {
      radius: 10,
    },
  })

  expect(wrapper.find('.var-paper').attributes('style')).toContain('border-radius: 10px')

  await wrapper.setProps({
    radius: 20,
  })
  expect(wrapper.find('.var-paper').attributes('style')).toContain('border-radius: 20px')
  wrapper.unmount()
})

test('paper hoverable', async () => {
  const wrapper = mount(VarPaper, {
    props: {
      hoverable: true,
    },
  })

  expect(wrapper.find('.var-hover-overlay--hovering').exists()).toBeFalsy()

  await wrapper.trigger('mouseenter')
  expect(wrapper.find('.var-hover-overlay--hovering').exists()).toBeTruthy()

  await wrapper.trigger('mouseleave')
  expect(wrapper.find('.var-hover-overlay--hovering').exists()).toBeFalsy()
  wrapper.unmount()
})

test('paper hoverable object', async () => {
  const wrapper = mount(VarPaper, {
    props: {
      hoverable: {
        color: '#f00',
      },
    },
  })

  await wrapper.trigger('mouseenter')
  const overlay = wrapper.find('.var-hover-overlay')
  expect(overlay.classes()).toContain('var-hover-overlay--hovering')
  expect(overlay.attributes('style')).toContain('color: rgb(255, 0, 0)')

  await wrapper.setProps({
    hoverable: {
      disabled: true,
      color: '#0f0',
    },
  })
  await wrapper.trigger('mouseleave')
  await wrapper.trigger('mouseenter')
  expect(wrapper.find('.var-hover-overlay--hovering').exists()).toBeFalsy()
  wrapper.unmount()
})

test('paper ripple object', async () => {
  const wrapper = mount(VarPaper, {
    props: {
      ripple: {
        color: 'green',
      },
    },
  })

  await trigger(wrapper, 'touchstart')
  await delay(250)
  expect(wrapper.find('.var-ripple').element.style.backgroundColor).toBe('green')

  await wrapper.setProps({
    ripple: {
      disabled: true,
      color: 'red',
    },
  })
  await trigger(document, 'touchend')
  await delay(500)
  await trigger(wrapper, 'touchstart')
  await delay(250)
  expect(wrapper.find('.var-ripple').exists()).toBeFalsy()
  wrapper.unmount()
})

test('paper surface low', async () => {
  const wrapper = mount(VarPaper, {
    props: {
      surface: 'low',
    },
  })

  expect(wrapper.find('.var-paper--surface-low').exists()).toBeTruthy()

  await wrapper.setProps({
    variant: 'filled',
  })

  expect(wrapper.find('.var-paper--surface-low').exists()).toBeFalsy()
  expect(wrapper.find('.var-paper--filled').exists()).toBeTruthy()

  await wrapper.setProps({
    variant: 'standard',
    surface: undefined,
  })

  expect(wrapper.find('.var-paper--surface-low').exists()).toBeFalsy()
  wrapper.unmount()
})

test('paper onClick', () => {
  const onClick = vi.fn()

  const wrapper = mount(VarPaper, {
    props: {
      onClick,
    },
  })

  wrapper.trigger('click')
  expect(onClick).toBeCalledTimes(1)
  wrapper.unmount()
})
