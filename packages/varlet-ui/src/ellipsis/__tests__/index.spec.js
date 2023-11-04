import VarEllipsis from '../Ellipsis.vue'
import Ellipsis from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, vi } from 'vitest'

test('test ellipsis plugin', () => {
  const app = createApp({}).use(Ellipsis)
  expect(app.component(Ellipsis.name)).toBeTruthy()
})

test('test ellipsis single line', () => {
  const wrapper = mount(VarEllipsis, {
    slots: {
      default: () => 'hello',
    },
  })

  expect(wrapper.find('.var-ellipsis--line').exists()).toBeTruthy()
  expect(wrapper.find('.var-ellipsis--line').text()).toBe('hello')
  wrapper.unmount()
})

test('test ellipsis lineClamp', async () => {
  const wrapper = mount(VarEllipsis, {
    props: {
      lineClamp: 3,
    },
    slots: {
      default: () => 'hello',
    },
  })

  expect(wrapper.find('.var-ellipsis--clamp').exists()).toBeTruthy()
  expect(wrapper.find('.var-ellipsis--line').exists()).toBeFalsy()
  expect(wrapper.find('.var-ellipsis').attributes('style')).toContain('-webkit-line-clamp: 3')

  await wrapper.setProps({
    lineClamp: 2,
  })
  expect(wrapper.find('.var-ellipsis--clamp').exists()).toBeTruthy()
  expect(wrapper.find('.var-ellipsis--line').exists()).toBeFalsy()
  expect(wrapper.find('.var-ellipsis').attributes('style')).toContain('-webkit-line-clamp: 2')

  wrapper.unmount()
})

test('test ellipsis expandTrigger', async () => {
  const wrapper = mount(VarEllipsis, {
    props: {
      expandTrigger: 'click',
    },
    slots: {
      default: () => 'hello',
    },
  })

  expect(wrapper.find('.var-ellipsis--cursor').exists()).toBeTruthy()
  await wrapper.find('.var-ellipsis').trigger('click')
  expect(wrapper.find('.var-ellipsis--expand').exists()).toBeTruthy()

  await wrapper.setProps({
    expandTrigger: undefined,
  })
  expect(wrapper.find('.var-ellipsis--cursor').exists()).toBeFalsy()
  await wrapper.find('.var-ellipsis').trigger('click')
  expect(wrapper.find('.var-ellipsis--expand').exists()).toBeTruthy()

  wrapper.unmount()
})

test('test ellipsis tooltip equals false', () => {
  const wrapper = mount(VarEllipsis, {
    props: {
      tooltip: false,
    },
  })

  expect(wrapper.vm.tooltipProps).toStrictEqual({ disabled: true })
  wrapper.unmount()
})

test('test ellipsis tooltip equals true', () => {
  const wrapper = mount(VarEllipsis, {
    props: {
      tooltip: true,
    },
  })

  expect(wrapper.vm.tooltipProps).toStrictEqual({ sameWidth: true })
  wrapper.unmount()
})

test('test ellipsis tooltip equals object', async () => {
  const container = document.createElement('div')
  const wrapper = mount(VarEllipsis, {
    props: {
      tooltip: { type: 'primary' },
    },
  })

  expect(wrapper.vm.tooltipProps).toStrictEqual({ sameWidth: true, type: 'primary' })

  await wrapper.setProps({
    tooltip: {
      type: 'info',
    },
  })
  expect(wrapper.vm.tooltipProps).toStrictEqual({ sameWidth: true, type: 'info' })

  await wrapper.setProps({
    tooltip: {
      show: true,
      teleport: container,
      content: 'Tooltip',
    },
  })
  expect(container.innerHTML).toMatchSnapshot()

  wrapper.unmount()
})

test('test ellipsis expand', async () => {
  const onUpdateExpand = vi.fn()

  const wrapper = mount(VarEllipsis, {
    props: {
      expand: true,
      expandTrigger: 'click',
      'onUpdate:expand': onUpdateExpand,
    },
    slots: {
      default: () => 'hello',
    },
  })

  expect(wrapper.find('.var-ellipsis--expand').exists()).toBeTruthy()

  await wrapper.find('.var-ellipsis').trigger('click')
  expect(onUpdateExpand).toBeCalledTimes(1)
  expect(wrapper.find('.var-ellipsis--expand').exists()).toBeFalsy()

  await wrapper.find('.var-ellipsis').trigger('click')
  expect(onUpdateExpand).toBeCalledTimes(2)
  expect(wrapper.find('.var-ellipsis--expand').exists()).toBeTruthy()

  wrapper.unmount()
})
