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

test('ellipsis tooltipOnOverflow only enables the tooltip for truncated single-line content', async () => {
  const nonOverflowingWrapper = mount(VarEllipsis, {
    props: {
      tooltipOnOverflow: true,
    },
  })

  await nextTick()
  expect(nonOverflowingWrapper.vm.tooltipProps).toStrictEqual({ disabled: true })
  nonOverflowingWrapper.unmount()

  vi.spyOn(HTMLElement.prototype, 'scrollWidth', 'get').mockReturnValue(200)
  vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(100)

  const overflowingWrapper = mount(VarEllipsis, {
    props: {
      tooltipOnOverflow: true,
    },
  })

  await nextTick()
  expect(overflowingWrapper.vm.tooltipProps).toStrictEqual({ sameWidth: true })
  overflowingWrapper.unmount()
})

test('ellipsis tooltipOnOverflow enables the tooltip for truncated line-clamped content', async () => {
  vi.spyOn(HTMLElement.prototype, 'scrollHeight', 'get').mockReturnValue(200)
  vi.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockReturnValue(100)

  const wrapper = mount(VarEllipsis, {
    props: {
      lineClamp: 2,
      tooltipOnOverflow: true,
    },
  })

  await nextTick()
  expect(wrapper.vm.tooltipProps).toStrictEqual({ sameWidth: true })
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

test('ellipsis expandableOnOverflow does not expand when the text is not overflowed', async () => {
  const onUpdateExpand = vi.fn()

  const wrapper = mount(VarEllipsis, {
    props: {
      expandTrigger: 'click',
      expandableOnOverflow: true,
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

test('ellipsis expandableOnOverflow expands when the text is overflowed', async () => {
  vi.spyOn(HTMLElement.prototype, 'scrollWidth', 'get').mockReturnValue(200)
  vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(100)

  const onUpdateExpand = vi.fn()

  const wrapper = mount(VarEllipsis, {
    props: {
      expandTrigger: 'click',
      expandableOnOverflow: true,
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

test('ellipsis expandableOnOverflow can collapse single-line content after expanding', async () => {
  vi.spyOn(HTMLElement.prototype, 'scrollWidth', 'get').mockImplementation(function () {
    return this.classList.contains('var-ellipsis--expand') ? 100 : 200
  })
  vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(100)

  const onUpdateExpand = vi.fn()
  const wrapper = mount(VarEllipsis, {
    props: {
      expandTrigger: 'click',
      expandableOnOverflow: true,
      'onUpdate:expand': onUpdateExpand,
    },
    slots: {
      default: () => 'hello',
    },
  })

  await nextTick()
  await wrapper.find('.var-ellipsis').trigger('click')
  await nextTick()

  expect(wrapper.find('.var-ellipsis--cursor').exists()).toBeTruthy()

  await wrapper.find('.var-ellipsis').trigger('click')
  expect(onUpdateExpand).toBeCalledTimes(2)
  expect(wrapper.find('.var-ellipsis--expand').exists()).toBeFalsy()

  wrapper.unmount()
})

test('ellipsis expandableOnOverflow detects the overflow by the height when lineClamp is set', async () => {
  vi.spyOn(HTMLElement.prototype, 'scrollHeight', 'get').mockReturnValue(300)
  vi.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockReturnValue(100)

  const onUpdateExpand = vi.fn()

  const wrapper = mount(VarEllipsis, {
    props: {
      lineClamp: 3,
      expandTrigger: 'click',
      expandableOnOverflow: true,
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

test('ellipsis expandableOnOverflow does not expand when the lineClamp content is not overflowed', async () => {
  vi.spyOn(HTMLElement.prototype, 'scrollHeight', 'get').mockReturnValue(100)
  vi.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockReturnValue(100)

  const onUpdateExpand = vi.fn()

  const wrapper = mount(VarEllipsis, {
    props: {
      lineClamp: 3,
      expandTrigger: 'click',
      expandableOnOverflow: true,
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

test('ellipsis expandableOnOverflow can collapse line-clamped content after expanding', async () => {
  vi.spyOn(HTMLElement.prototype, 'scrollHeight', 'get').mockImplementation(function () {
    return this.classList.contains('var-ellipsis--expand') ? 100 : 200
  })
  vi.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockReturnValue(100)

  const onUpdateExpand = vi.fn()
  const wrapper = mount(VarEllipsis, {
    props: {
      lineClamp: 3,
      expandTrigger: 'click',
      expandableOnOverflow: true,
      'onUpdate:expand': onUpdateExpand,
    },
    slots: {
      default: () => 'hello',
    },
  })

  await nextTick()
  await wrapper.find('.var-ellipsis').trigger('click')
  await nextTick()

  expect(wrapper.find('.var-ellipsis--cursor').exists()).toBeTruthy()

  await wrapper.find('.var-ellipsis').trigger('click')
  expect(onUpdateExpand).toBeCalledTimes(2)
  expect(wrapper.find('.var-ellipsis--expand').exists()).toBeFalsy()

  wrapper.unmount()
})

test('ellipsis collapses expanded line-clamped content when its width changes', async () => {
  let clientHeight = 100

  vi.spyOn(HTMLElement.prototype, 'scrollHeight', 'get').mockImplementation(function () {
    return this.classList.contains('var-ellipsis--expand') ? clientHeight : 200
  })
  vi.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockImplementation(() => clientHeight)

  const wrapper = mount(VarEllipsis, {
    props: {
      lineClamp: 2,
      expandTrigger: 'click',
      expandableOnOverflow: true,
    },
  })

  await nextTick()
  wrapper.vm.handleResize([{ contentRect: { width: 100 } }])
  await wrapper.find('.var-ellipsis').trigger('click')
  await nextTick()

  expect(wrapper.find('.var-ellipsis--expand').exists()).toBeTruthy()

  clientHeight = 200
  wrapper.vm.handleResize([{ contentRect: { width: 200 } }])
  await nextTick()

  expect(wrapper.find('.var-ellipsis--expand').exists()).toBeFalsy()
  expect(wrapper.find('.var-ellipsis--cursor').exists()).toBeFalsy()

  wrapper.unmount()
})

test('ellipsis keeps the expand behavior when expandableOnOverflow is disabled', async () => {
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
