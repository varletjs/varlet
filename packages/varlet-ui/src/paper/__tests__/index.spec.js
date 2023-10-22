import Paper from '..'
import VarPaper from '../Paper'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { expect, vi } from 'vitest'

test('test paper use', () => {
  const app = createApp({}).use(Paper)
  expect(app.component(Paper.name)).toBeTruthy()
})

test('test paper elevation', async () => {
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

test('test paper size', async () => {
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

test('test paper round', async () => {
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

test('test paper inline', async () => {
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

test('test paper radius', async () => {
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

test('test paper onClick', () => {
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
