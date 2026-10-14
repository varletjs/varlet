import { mount, flushPromises } from '@vue/test-utils'
import { afterEach, expect, test, vi } from 'vite-plus/test'
import { createApp, defineComponent, h, KeepAlive, nextTick, ref } from 'vue'
import { renderToString } from 'vue/server-renderer'
import Tour from '..'
import { use } from '../../locale'
import VarLocaleProvider from '../../locale-provider'
import { triggerKeyboard } from '../../utils/test'
import VarTour from '../Tour.vue'

const wrappers = []
const targets = []
const steps = [
  { target: '#tour-target', title: 'Create', description: 'Create a project' },
  { title: 'Ready', description: 'You can now start working' },
]

function createTarget(rect = { x: 100, y: 100, width: 100, height: 40 }) {
  const element = document.createElement('button')
  element.id = 'tour-target'
  element.textContent = 'Target'
  element.getBoundingClientRect = vi.fn(() => ({
    ...rect,
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height,
    toJSON: () => ({}),
  }))
  element.scrollIntoView = vi.fn()
  document.body.appendChild(element)
  targets.push(element)
  return element
}

async function mountTour(options = {}) {
  const wrapper = mount(VarTour, {
    attachTo: document.body,
    ...options,
    props: {
      steps,
      show: true,
      teleport: false,
      'onUpdate:show': vi.fn(),
      'onUpdate:current': vi.fn(),
      ...options.props,
    },
  })
  wrappers.push(wrapper)
  await flushPromises()
  return wrapper
}

afterEach(() => {
  wrappers.splice(0).forEach((wrapper) => wrapper.unmount())
  targets.splice(0).forEach((target) => target.remove())
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
  use('zh-CN')
})

test('tour plugin and default props setter', () => {
  const app = createApp({}).use(Tour)
  expect(app.component(Tour.name)).toBeTruthy()
  expect(Tour.setPropsDefaults).toBeTypeOf('function')
})

test('tour does not render when closed or steps are empty', async () => {
  const wrapper = await mountTour({ props: { show: false } })
  expect(wrapper.find('[role="dialog"]').exists()).toBe(false)
  await wrapper.setProps({ show: true, steps: [] })
  expect(wrapper.find('[role="dialog"]').exists()).toBe(false)
})

test('tour highlights targets with a padded mask and follows placement', async () => {
  createTarget()
  const wrapper = await mountTour({ props: { placement: 'top', gap: 10, gapRadius: 6 } })
  const highlight = wrapper.find('.var-tour__highlight')
  expect(highlight.element.style).toMatchObject({
    left: '90px',
    top: '90px',
    width: '120px',
    height: '60px',
    borderRadius: '6px',
  })
  expect(wrapper.find('path').attributes('fill-rule')).toBe('evenodd')
  expect(wrapper.find('[role="dialog"]').attributes('data-popper-placement')).toMatch(/top|bottom/)
  expect(wrapper.find('.var-tour__title').text()).toBe('Create')
  expect(wrapper.find('.var-tour__progress').text()).toBe('1 / 2')
})

test('tour next, previous, and finish update models and emit events', async () => {
  const onChange = vi.fn()
  const onFinish = vi.fn()
  const wrapper = await mountTour({ props: { onChange: [onChange], onFinish: [onFinish] } })
  await wrapper.find('.var-tour__next').trigger('click')
  await flushPromises()
  expect(wrapper.props('onUpdate:current').mock.calls).toEqual([[1]])
  expect(onChange).toHaveBeenLastCalledWith(1, 0)
  expect(wrapper.find('.var-tour__title').text()).toBe('Ready')
  await wrapper.find('.var-tour__prev').trigger('click')
  expect(onChange).toHaveBeenLastCalledWith(0, 1)
  wrapper.vm.next()
  await flushPromises()
  await wrapper.find('.var-tour__next').trigger('click')
  expect(onFinish).toHaveBeenCalledTimes(1)
  expect(wrapper.props('onUpdate:show').mock.calls).toEqual([[false]])
  expect(wrapper.find('[role="dialog"]').exists()).toBe(false)
})

test('tour skip closes without finishing', async () => {
  const onOpen = vi.fn()
  const onClose = vi.fn()
  const onFinish = vi.fn()
  const wrapper = await mountTour({ props: { onOpen, onClose, onFinish } })
  expect(onOpen).toHaveBeenCalledTimes(1)
  await wrapper.find('.var-tour__close').trigger('click')
  expect(onClose).toHaveBeenCalledTimes(1)
  expect(onFinish).not.toHaveBeenCalled()
})

test('tour open resets the step and guards navigation while closed', async () => {
  const wrapper = await mountTour({ props: { show: false } })
  wrapper.vm.next()
  wrapper.vm.prev()
  wrapper.vm.finish()
  expect(wrapper.emitted('finish')).toBeUndefined()
  wrapper.vm.open(1)
  await flushPromises()
  expect(wrapper.find('.var-tour__title').text()).toBe('Ready')
  wrapper.vm.close()
  await nextTick()
  wrapper.vm.open()
  await flushPromises()
  expect(wrapper.find('.var-tour__title').text()).toBe('Create')
})

test('tour clamps invalid indices and shrinking steps', async () => {
  const wrapper = await mountTour({ props: { current: 99 } })
  expect(wrapper.find('.var-tour__progress').text()).toBe('2 / 2')
  await wrapper.setProps({ steps: [steps[0]] })
  await flushPromises()
  expect(wrapper.find('.var-tour__progress').text()).toBe('1 / 1')
  await wrapper.setProps({ current: NaN })
  expect(wrapper.find('.var-tour__progress').text()).toBe('1 / 1')
  wrapper.vm.open(-3)
  await flushPromises()
  expect(wrapper.find('.var-tour__progress').text()).toBe('1 / 1')
})

test.each([undefined, '#missing', '[', () => null])('tour centers when target is absent: %s', async (target) => {
  const wrapper = await mountTour({ props: { steps: [{ ...steps[0], target }] } })
  expect(wrapper.find('.var-tour--center').exists()).toBe(true)
  expect(wrapper.find('.var-tour__highlight').exists()).toBe(false)
})

test('tour accepts elements and resolver functions and tracks replacement', async () => {
  let target = createTarget()
  const wrapper = await mountTour({ props: { steps: [{ ...steps[0], target: () => target }] } })
  expect(wrapper.find('.var-tour__highlight').element.style.left).toBe('92px')
  target.remove()
  target = createTarget({ x: 200, y: 200, width: 50, height: 30 })
  wrapper.vm.resize()
  await flushPromises()
  expect(wrapper.find('.var-tour__highlight').element.style.left).toBe('192px')
  await wrapper.setProps({ steps: [{ ...steps[0], target }] })
  await flushPromises()
  expect(wrapper.find('.var-tour__highlight').exists()).toBe(true)
})

test('tour centers when target is hidden, removed, or outside the viewport', async () => {
  const target = createTarget()
  const wrapper = await mountTour()
  target.getBoundingClientRect.mockReturnValue({
    x: 0,
    y: 0,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: 0,
    height: 0,
  })
  wrapper.vm.resize()
  await flushPromises()
  expect(wrapper.find('.var-tour--center').exists()).toBe(true)
  target.getBoundingClientRect.mockReturnValue({
    x: -1000,
    y: 0,
    left: -1000,
    top: 0,
    right: -900,
    bottom: 40,
    width: 100,
    height: 40,
  })
  wrapper.vm.resize()
  await nextTick()
  expect(wrapper.find('.var-tour__highlight').exists()).toBe(false)
  target.remove()
  wrapper.vm.resize()
  await nextTick()
  expect(wrapper.find('.var-tour--center').exists()).toBe(true)
})

test('tour scrolls offscreen targets into view unless disabled', async () => {
  const target = createTarget({ x: 100, y: 2000, width: 100, height: 40 })
  const wrapper = await mountTour()
  expect(target.scrollIntoView).toHaveBeenCalledWith({ block: 'nearest', inline: 'nearest', behavior: 'instant' })
  target.scrollIntoView.mockClear()
  await wrapper.setProps({ scrollIntoView: false })
  await flushPromises()
  expect(target.scrollIntoView).not.toHaveBeenCalled()
})

test('tour overlay clicks close only when enabled', async () => {
  const onClickOverlay = vi.fn()
  const wrapper = await mountTour({ props: { onClickOverlay } })
  await wrapper.find('path').trigger('click')
  expect(onClickOverlay).toHaveBeenCalledTimes(1)
  expect(wrapper.find('[role="dialog"]').exists()).toBe(true)
  await wrapper.setProps({ closeOnClickOverlay: true })
  await wrapper.find('path').trigger('click')
  expect(wrapper.props('onUpdate:show').mock.calls).toEqual([[false]])
})

test('tour allows target interaction and supports an overlay-free guide', async () => {
  createTarget()
  const wrapper = await mountTour()
  expect(wrapper.find('.var-tour__highlight').classes()).not.toContain('var-tour--interactive')
  expect(wrapper.find('[role="dialog"]').attributes('aria-modal')).toBe('true')
  await wrapper.setProps({ allowTargetInteraction: true })
  expect(wrapper.find('.var-tour__highlight').classes()).toContain('var-tour--interactive')
  expect(wrapper.find('[role="dialog"]').attributes('aria-modal')).toBeUndefined()
  await wrapper.setProps({ overlay: false })
  expect(wrapper.find('svg').exists()).toBe(false)
})

test('tour Escape respects configuration and only closes the top tour', async () => {
  const first = await mountTour()
  const second = await mountTour({ props: { closeOnKeyEscape: false } })
  await triggerKeyboard(window, 'keydown', { key: 'Escape', cancelable: true })
  expect(first.props('onUpdate:show')).not.toHaveBeenCalled()
  expect(second.props('onUpdate:show')).not.toHaveBeenCalled()
  await second.setProps({ closeOnKeyEscape: true })
  await triggerKeyboard(window, 'keydown', { key: 'Escape', cancelable: true })
  expect(second.props('onUpdate:show').mock.calls).toEqual([[false]])
  expect(first.props('onUpdate:show')).not.toHaveBeenCalled()
})

test('tour traps focus and restores the trigger after closing', async () => {
  const target = createTarget()
  target.focus()
  const wrapper = await mountTour()
  const panel = wrapper.find('[role="dialog"]').element
  const first = wrapper.find('.var-tour__close').element
  const last = wrapper.find('.var-tour__next').element
  expect(document.activeElement).toBe(panel)
  await triggerKeyboard(window, 'keydown', { key: 'Tab', cancelable: true })
  expect(document.activeElement).toBe(first)
  await triggerKeyboard(window, 'keydown', { key: 'Tab', shiftKey: true, cancelable: true })
  expect(document.activeElement).toBe(last)
  await triggerKeyboard(window, 'keydown', { key: 'Tab', cancelable: true })
  expect(document.activeElement).toBe(first)
  target.focus()
  expect(document.activeElement).toBe(panel)
  wrapper.vm.close()
  await flushPromises()
  expect(document.activeElement).toBe(target)
})

test('tour restores focus on unmount and has accessible labels without a title', async () => {
  const target = createTarget()
  target.focus()
  const wrapper = await mountTour({ props: { steps: [{ description: 'Welcome' }] } })
  expect(wrapper.find('[role="dialog"]').attributes('aria-label')).toBeTruthy()
  wrapper.unmount()
  wrappers.splice(wrappers.indexOf(wrapper), 1)
  expect(document.activeElement).toBe(target)
})

test('tour uses scoped locale messages and custom button labels', async () => {
  const wrapper = mount(VarLocaleProvider, {
    attachTo: document.body,
    props: { messages: { 'zh-CN': { tourNextButtonText: 'Continue' } } },
    slots: { default: () => h(VarTour, { show: true, teleport: false, steps }) },
  })
  wrappers.push(wrapper)
  await flushPromises()
  expect(wrapper.find('.var-tour__next').text()).toBe('Continue')
  const custom = await mountTour({
    props: { nextButtonText: 'Custom', closeButtonText: 'Dismiss', showProgress: false },
  })
  expect(custom.find('.var-tour__next').text()).toBe('Custom')
  expect(custom.find('.var-tour__close').text()).toBe('Dismiss')
  expect(custom.find('.var-tour__progress').exists()).toBe(false)
})

test('tour slots receive the current step and navigation methods', async () => {
  const wrapper = await mountTour({
    slots: {
      title: ({ current }) => `Step ${current + 1}`,
      default: ({ step }) => h('strong', step.description),
      actions: ({ next }) => h('button', { onClick: next }, 'Continue'),
    },
  })
  expect(wrapper.find('.var-tour__title').text()).toBe('Step 1')
  expect(wrapper.find('strong').text()).toBe('Create a project')
  await wrapper.find('.var-tour__footer button').trigger('click')
  expect(wrapper.find('.var-tour__title').text()).toBe('Step 2')
})

test('tour disconnects observers and cancels pending layout work when closed', async () => {
  const observers = []
  vi.stubGlobal(
    'ResizeObserver',
    class {
      observe = vi.fn()
      disconnect = vi.fn()
      constructor(callback) {
        this.callback = callback
        observers.push(this)
      }
    },
  )
  const raf = vi.spyOn(window, 'requestAnimationFrame').mockReturnValue(123)
  const cancel = vi.spyOn(window, 'cancelAnimationFrame')
  createTarget()
  const wrapper = await mountTour()
  expect(observers[0].observe).toHaveBeenCalledTimes(2)
  observers[0].callback()
  observers[0].callback()
  expect(raf).toHaveBeenCalledTimes(1)
  wrapper.vm.close()
  await flushPromises()
  expect(observers[0].disconnect).toHaveBeenCalled()
  expect(cancel).toHaveBeenCalledWith(123)
})

test('tour follows nested scrolling and resizing in a single frame', async () => {
  const target = createTarget()
  const wrapper = await mountTour()
  const frames = []
  vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
    frames.push(callback)
    return 1
  })
  target.getBoundingClientRect.mockReturnValue({
    x: 300,
    y: 100,
    left: 300,
    top: 100,
    right: 400,
    bottom: 140,
    width: 100,
    height: 40,
  })
  target.dispatchEvent(new Event('scroll'))
  window.dispatchEvent(new Event('resize'))
  expect(frames).toHaveLength(1)
  frames[0]()
  await flushPromises()
  expect(wrapper.find('.var-tour__highlight').element.style.left).toBe('292px')
})

test('tour clips highlights to scroll containers and centers when the target is fully clipped', async () => {
  const target = createTarget()
  const container = document.createElement('div')
  container.style.overflow = 'auto'
  container.getBoundingClientRect = () => ({ left: 120, top: 110, right: 180, bottom: 130, width: 60, height: 20 })
  document.body.appendChild(container)
  container.appendChild(target)
  targets.push(container)
  const wrapper = await mountTour({ props: { scrollIntoView: false } })
  expect(wrapper.find('.var-tour__highlight').element.style).toMatchObject({
    left: '120px',
    top: '110px',
    width: '60px',
    height: '20px',
  })
  target.getBoundingClientRect.mockReturnValue({ left: 100, top: 130, right: 200, bottom: 170, width: 100, height: 40 })
  wrapper.vm.resize()
  await flushPromises()
  expect(wrapper.find('.var-tour__highlight').exists()).toBe(false)
  expect(wrapper.find('.var-tour--center').exists()).toBe(true)
})

test('tour releases scroll locks when closed', async () => {
  const wrapper = await mountTour({ props: { lockScroll: true } })
  expect(document.body.classList.contains('var--lock')).toBe(true)
  wrapper.vm.close()
  await nextTick()
  expect(document.body.classList.contains('var--lock')).toBe(false)
})

test('tour hides while deactivated and returns on activation', async () => {
  const visible = ref(true)
  const Host = defineComponent({
    setup: () => () => h(KeepAlive, () => (visible.value ? h(VarTour, { show: true, steps, teleport: false }) : null)),
  })
  const wrapper = mount(Host, { attachTo: document.body })
  wrappers.push(wrapper)
  await flushPromises()
  expect(wrapper.find('[role="dialog"]').exists()).toBe(true)
  visible.value = false
  await flushPromises()
  expect(document.querySelector('[role="dialog"]')).toBeNull()
  visible.value = true
  await flushPromises()
  expect(wrapper.find('[role="dialog"]').exists()).toBe(true)
})

test('tour synchronizes controlled visibility and step models without duplicate change events', async () => {
  const show = ref(false)
  const current = ref(0)
  const onChange = vi.fn()
  const wrapper = mount(
    {
      setup: () => () =>
        h(VarTour, {
          show: show.value,
          current: current.value,
          steps,
          teleport: false,
          onChange,
          'onUpdate:show': (value) => {
            show.value = value
          },
          'onUpdate:current': (value) => {
            current.value = value
          },
        }),
    },
    { attachTo: document.body },
  )
  wrappers.push(wrapper)
  show.value = true
  await flushPromises()
  await wrapper.find('.var-tour__next').trigger('click')
  await flushPromises()
  expect(current.value).toBe(1)
  expect(onChange).toHaveBeenCalledTimes(1)
  await wrapper.find('.var-tour__next').trigger('click')
  await flushPromises()
  expect(show.value).toBe(false)
  expect(wrapper.find('[role="dialog"]').exists()).toBe(false)
})

test('tour normalizes invalid indices without duplicate change notifications', async () => {
  const onChange = vi.fn()
  const wrapper = await mountTour({ props: { onChange } })
  await wrapper.setProps({ current: 99 })
  await flushPromises()
  expect(wrapper.find('.var-tour__progress').text()).toBe('2 / 2')
  expect(onChange).toHaveBeenCalledTimes(1)
  expect(onChange).toHaveBeenLastCalledWith(1, 0)
})

test('tour supports server rendering without resolving browser targets', async () => {
  const target = vi.fn(() => {
    throw new Error('must not resolve targets during SSR')
  })
  const html = await renderToString(h(VarTour, { show: true, steps: [{ target }], teleport: false }))
  expect(html).not.toContain('role="dialog"')
  expect(target).not.toHaveBeenCalled()
})
