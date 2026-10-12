import { mount } from '@vue/test-utils'
import { afterEach, expect, test, vi } from 'vite-plus/test'
import { createApp, nextTick } from 'vue'
import Ellipsis from '..'
import VarEllipsis from '../Ellipsis.vue'

test('ellipsis plugin', () => {
  const app = createApp({}).use(Ellipsis)
  expect(app.component(Ellipsis.name)).toBeTruthy()
})

test('ellipsis single line', () => {
  const wrapper = mount(VarEllipsis, {
    slots: {
      default: () => 'hello',
    },
  })

  expect(wrapper.find('.var-ellipsis--line').exists()).toBeTruthy()
  expect(wrapper.find('.var-ellipsis--line').text()).toBe('hello')
  wrapper.unmount()
})

test('ellipsis lineClamp', async () => {
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

test('ellipsis expandTrigger', async () => {
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

test('ellipsis tooltip equals false', () => {
  const wrapper = mount(VarEllipsis, {
    props: {
      tooltip: false,
    },
  })

  expect(wrapper.vm.tooltipProps).toStrictEqual({ disabled: true })
  wrapper.unmount()
})

test('ellipsis tooltip equals true', () => {
  const wrapper = mount(VarEllipsis, {
    props: {
      tooltip: true,
    },
  })

  expect(wrapper.vm.tooltipProps).toStrictEqual({ sameWidth: true })
  wrapper.unmount()
})

test('ellipsis tooltip equals object', async () => {
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

test('ellipsis expand', async () => {
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

afterEach(() => {
  vi.restoreAllMocks()
})

test('ellipsis expandOnOverflow does not expand when the text is not overflowed', async () => {
  const onUpdateExpand = vi.fn()

  const wrapper = mount(VarEllipsis, {
    props: {
      expandTrigger: 'click',
      expandOnOverflow: true,
      'onUpdate:expand': onUpdateExpand,
    },
    slots: {
      default: () => 'hello',
    },
  })

  await nextTick()

  expect(wrapper.find('.var-ellipsis--cursor').exists()).toBeFalsy()

  await wrapper.find('.var-ellipsis').trigger('click')
  expect(onUpdateExpand).not.toBeCalled()

  wrapper.unmount()
})

test('ellipsis expandOnOverflow expands when the text is overflowed', async () => {
  vi.spyOn(HTMLElement.prototype, 'scrollWidth', 'get').mockReturnValue(200)
  vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(100)

  const onUpdateExpand = vi.fn()

  const wrapper = mount(VarEllipsis, {
    props: {
      expandTrigger: 'click',
      expandOnOverflow: true,
      'onUpdate:expand': onUpdateExpand,
    },
    slots: {
      default: () => 'hello',
    },
  })

  await nextTick()

  expect(wrapper.find('.var-ellipsis--cursor').exists()).toBeTruthy()

  await wrapper.find('.var-ellipsis').trigger('click')
  expect(onUpdateExpand).toBeCalledTimes(1)
  expect(wrapper.find('.var-ellipsis--expand').exists()).toBeTruthy()

  wrapper.unmount()
})

test('ellipsis expandOnOverflow detects the overflow by the height when lineClamp is set', async () => {
  vi.spyOn(HTMLElement.prototype, 'scrollHeight', 'get').mockReturnValue(300)
  vi.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockReturnValue(100)

  const onUpdateExpand = vi.fn()

  const wrapper = mount(VarEllipsis, {
    props: {
      lineClamp: 3,
      expandTrigger: 'click',
      expandOnOverflow: true,
      'onUpdate:expand': onUpdateExpand,
    },
    slots: {
      default: () => 'hello',
    },
  })

  await nextTick()

  expect(wrapper.find('.var-ellipsis--cursor').exists()).toBeTruthy()

  await wrapper.find('.var-ellipsis').trigger('click')
  expect(onUpdateExpand).toBeCalledTimes(1)

  wrapper.unmount()
})

test('ellipsis expandOnOverflow does not expand when the lineClamp content is not overflowed', async () => {
  vi.spyOn(HTMLElement.prototype, 'scrollHeight', 'get').mockReturnValue(100)
  vi.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockReturnValue(100)

  const onUpdateExpand = vi.fn()

  const wrapper = mount(VarEllipsis, {
    props: {
      lineClamp: 3,
      expandTrigger: 'click',
      expandOnOverflow: true,
      'onUpdate:expand': onUpdateExpand,
    },
    slots: {
      default: () => 'hello',
    },
  })

  await nextTick()

  expect(wrapper.find('.var-ellipsis--cursor').exists()).toBeFalsy()

  await wrapper.find('.var-ellipsis').trigger('click')
  expect(onUpdateExpand).not.toBeCalled()

  wrapper.unmount()
})

test('ellipsis keep the expand behaviour when expandOnOverflow is disabled', async () => {
  vi.spyOn(HTMLElement.prototype, 'scrollWidth', 'get').mockReturnValue(10)
  vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(100)

  const onUpdateExpand = vi.fn()

  const wrapper = mount(VarEllipsis, {
    props: {
      expandTrigger: 'click',
      'onUpdate:expand': onUpdateExpand,
    },
    slots: {
      default: () => 'hello',
    },
  })

  await nextTick()

  expect(wrapper.find('.var-ellipsis--cursor').exists()).toBeTruthy()

  await wrapper.find('.var-ellipsis').trigger('click')
  expect(onUpdateExpand).toBeCalledTimes(1)

  wrapper.unmount()
})
