import { mount } from '@vue/test-utils'
import { afterEach, expect, test, vi } from 'vite-plus/test'
import { createApp, h, nextTick } from 'vue'
import SwipeAction from '..'
import VarButton from '../../button'
import { trigger, triggerDrag } from '../../utils/test'
import VarSwipeAction from '../SwipeAction.vue'

const wrappers = []
const leftActions = [{ key: 'read', text: 'Read', type: 'primary' }]
const rightActions = [
  { key: 'edit', text: 'Edit', type: 'info' },
  { key: 'delete', text: 'Delete', type: 'danger' },
]

function mountSwipeAction(options = {}) {
  const wrapper = mount(VarSwipeAction, {
    attachTo: document.body,
    ...options,
    props: { leftActions, rightActions, ...options.props },
    slots: { default: 'Content', ...options.slots },
  })
  const widths = { left: 75, right: 150 }

  for (const side of ['left', 'right']) {
    Object.defineProperty(wrapper.find(`.var-swipe-action--${side}`).element, 'offsetWidth', {
      get: () => widths[side],
    })
  }

  wrapper.vm.resize()
  wrappers.push(wrapper)
  return { wrapper, widths }
}

function getOffset(wrapper) {
  return wrapper.find('.var-swipe-action__track').element.style.transform
}

afterEach(() => {
  wrappers.splice(0).forEach((wrapper) => wrapper.unmount())
  vi.restoreAllMocks()
})

test('swipe-action plugin and default props setter', () => {
  const app = createApp({}).use(SwipeAction)
  expect(app.component(SwipeAction.name)).toBeTruthy()
  expect(SwipeAction.setPropsDefaults).toBeTypeOf('function')
})

test('swipe-action renders actions with existing button props', () => {
  const { wrapper } = mountSwipeAction({
    props: {
      rightActions: [
        { key: 'delete', text: 'Delete', type: 'danger', color: '#123', textColor: '#fff', disabled: true },
      ],
    },
  })
  const button = wrapper.find('.var-swipe-action--right').findComponent(VarButton)
  expect(button.props()).toMatchObject({
    type: 'danger',
    color: '#123',
    textColor: '#fff',
    disabled: true,
    elevation: false,
  })
  expect(wrapper.find('.var-swipe-action__content').text()).toBe('Content')
})

test('swipe-action open and close methods emit only state changes', async () => {
  const onOpen = vi.fn()
  const onClose = vi.fn()
  const { wrapper } = mountSwipeAction({ props: { onOpen: [onOpen], onClose: [onClose] } })

  wrapper.vm.open()
  await nextTick()
  expect(getOffset(wrapper)).toBe('translateX(-150px)')
  expect(onOpen).toHaveBeenLastCalledWith('right')
  wrapper.vm.open()
  expect(onOpen).toHaveBeenCalledTimes(1)

  wrapper.vm.open('left')
  await nextTick()
  expect(getOffset(wrapper)).toBe('translateX(75px)')
  expect(onOpen).toHaveBeenLastCalledWith('left')

  wrapper.vm.close()
  wrapper.vm.close()
  await nextTick()
  expect(getOffset(wrapper)).toBe('translateX(0px)')
  expect(onClose).toHaveBeenCalledTimes(1)
})

test('swipe-action settles slow swipes at half the action width', async () => {
  const now = vi.spyOn(performance, 'now').mockReturnValue(0)
  const { wrapper } = mountSwipeAction()

  await trigger(wrapper, 'touchstart')
  await trigger(wrapper, 'touchmove', -60, 0)
  expect(getOffset(wrapper)).toBe('translateX(-60px)')
  expect(wrapper.find('.var-swipe-action__track').element.style.transitionDuration).toBe('0ms')
  now.mockReturnValue(300)
  await trigger(wrapper, 'touchend', -60, 0)
  expect(getOffset(wrapper)).toBe('translateX(0px)')

  await trigger(wrapper, 'touchstart')
  await trigger(wrapper, 'touchmove', -90, 0)
  now.mockReturnValue(600)
  await trigger(wrapper, 'touchend', -90, 0)
  expect(getOffset(wrapper)).toBe('translateX(-150px)')
})

test('swipe-action quick swipes open and reverse swipes close', async () => {
  vi.spyOn(performance, 'now').mockReturnValue(0)
  const { wrapper } = mountSwipeAction()

  await triggerDrag(wrapper, -30, 0)
  expect(getOffset(wrapper)).toBe('translateX(-150px)')
  await triggerDrag(wrapper, 30, 0)
  expect(getOffset(wrapper)).toBe('translateX(0px)')
  await triggerDrag(wrapper, 30, 0)
  expect(getOffset(wrapper)).toBe('translateX(75px)')
})

test('swipe-action clamps dragging to the measured action widths', async () => {
  const { wrapper } = mountSwipeAction()
  await trigger(wrapper, 'touchstart')
  await trigger(wrapper, 'touchmove', 500, 0)
  expect(getOffset(wrapper)).toBe('translateX(75px)')
  await trigger(wrapper, 'touchmove', -500, 0)
  expect(getOffset(wrapper)).toBe('translateX(-150px)')
})

test('swipe-action vertical scrolling is not prevented or moved', async () => {
  const { wrapper } = mountSwipeAction()
  await trigger(wrapper, 'touchstart')
  const event = new Event('touchmove', { bubbles: true, cancelable: true })
  Object.assign(event, { touches: [{ clientX: 4, clientY: 40 }] })
  wrapper.element.dispatchEvent(event)
  await nextTick()
  expect(event.defaultPrevented).toBe(false)
  expect(getOffset(wrapper)).toBe('translateX(0px)')
  await trigger(wrapper, 'touchmove', 80, 50)
  await trigger(wrapper, 'touchend', 80, 50)
  expect(getOffset(wrapper)).toBe('translateX(0px)')
})

test('swipe-action ignores initial jitter when choosing the gesture direction', async () => {
  const { wrapper } = mountSwipeAction()
  await trigger(wrapper, 'touchstart')
  await trigger(wrapper, 'touchmove', 0, 1)
  await trigger(wrapper, 'touchmove', -90, 2)
  await trigger(wrapper, 'touchend', -90, 2)
  expect(getOffset(wrapper)).toBe('translateX(-150px)')
})

test('swipe-action keeps the vertical direction when a gesture returns near its origin', async () => {
  const { wrapper } = mountSwipeAction()
  await trigger(wrapper, 'touchstart')
  await trigger(wrapper, 'touchmove', 1, 40)
  await trigger(wrapper, 'touchmove', 1, 1)
  await trigger(wrapper, 'touchmove', -100, 2)
  await trigger(wrapper, 'touchend', -100, 2)
  expect(getOffset(wrapper)).toBe('translateX(0px)')
})

test('swipe-action does not capture a swipe toward an absent action area', async () => {
  const { wrapper, widths } = mountSwipeAction({ props: { leftActions: [] } })
  widths.left = 0
  wrapper.vm.resize()
  await triggerDrag(wrapper, 100, 0)
  expect(getOffset(wrapper)).toBe('translateX(0px)')
  expect(wrapper.emitted('open')).toBeUndefined()
  wrapper.vm.open('left')
  expect(wrapper.emitted('open')).toBeUndefined()
})

test('swipe-action canceled touches restore the original state', async () => {
  const { wrapper } = mountSwipeAction()
  wrapper.vm.open('right')
  await trigger(wrapper, 'touchstart')
  await trigger(wrapper, 'touchmove', 100, 0)
  await trigger(wrapper, 'touchcancel', 100, 0)
  expect(getOffset(wrapper)).toBe('translateX(-150px)')
})

test('swipe-action multi-touch cancels a drag without moving again', async () => {
  const { wrapper } = mountSwipeAction()
  await trigger(wrapper, 'touchstart')
  await trigger(wrapper, 'touchmove', -80, 0)
  await wrapper.trigger('touchmove', {
    touches: [
      { clientX: -80, clientY: 0 },
      { clientX: 10, clientY: 10 },
    ],
  })
  await trigger(wrapper, 'touchmove', -100, 0)
  await trigger(wrapper, 'touchend')
  expect(getOffset(wrapper)).toBe('translateX(0px)')
})

test('swipe-action action callbacks and automatic close', async () => {
  const onAction = vi.fn()
  const { wrapper } = mountSwipeAction({ props: { onAction: [onAction] } })
  wrapper.vm.open('right')
  await wrapper.find('.var-swipe-action--right button').trigger('click')
  expect(onAction).toHaveBeenCalledWith(rightActions[0], 'right', expect.any(Event))
  expect(getOffset(wrapper)).toBe('translateX(0px)')

  await wrapper.setProps({ closeOnClickAction: false })
  wrapper.vm.open('left')
  await wrapper.find('.var-swipe-action--left button').trigger('click')
  expect(onAction).toHaveBeenLastCalledWith(leftActions[0], 'left', expect.any(Event))
  expect(getOffset(wrapper)).toBe('translateX(75px)')
})

test('swipe-action disabled action does not emit or close', async () => {
  const onAction = vi.fn()
  const { wrapper } = mountSwipeAction({ props: { rightActions: [{ ...rightActions[0], disabled: true }], onAction } })
  wrapper.vm.open('right')
  await wrapper.find('.var-swipe-action--right button').trigger('click')
  expect(onAction).not.toHaveBeenCalled()
  expect(getOffset(wrapper)).toBe('translateX(-150px)')
})

test('swipe-action disabled prevents opening and closes an existing action area', async () => {
  const { wrapper } = mountSwipeAction()
  wrapper.vm.open()
  await wrapper.setProps({ disabled: true })
  expect(getOffset(wrapper)).toBe('translateX(0px)')
  wrapper.vm.open()
  await triggerDrag(wrapper, -100, 0)
  expect(getOffset(wrapper)).toBe('translateX(0px)')
})

test('swipe-action closes on outside touch and click unless configured otherwise', async () => {
  const { wrapper } = mountSwipeAction()
  wrapper.vm.open()
  await trigger(document.body, 'touchstart')
  expect(getOffset(wrapper)).toBe('translateX(0px)')
  await wrapper.setProps({ closeOnClickOutside: false })
  wrapper.vm.open()
  await trigger(document.body, 'click')
  expect(getOffset(wrapper)).toBe('translateX(-150px)')
  await wrapper.setProps({ closeOnClickOutside: true })
  await trigger(document.body, 'click')
  expect(getOffset(wrapper)).toBe('translateX(0px)')
})

test('swipe-action content click closes without activating the child', async () => {
  const onClick = vi.fn()
  const { wrapper } = mountSwipeAction({ slots: { default: () => h('button', { onClick }, 'Content') } })
  wrapper.vm.open()
  await wrapper.find('.var-swipe-action__content button').trigger('click')
  expect(onClick).not.toHaveBeenCalled()
  expect(getOffset(wrapper)).toBe('translateX(0px)')
  await wrapper.find('.var-swipe-action__content button').trigger('click')
  expect(onClick).toHaveBeenCalledTimes(1)
})

test('swipe-action suppresses the click generated by dragging', async () => {
  const onClick = vi.fn()
  const { wrapper } = mountSwipeAction({ slots: { default: () => h('button', { onClick }, 'Content') } })
  await triggerDrag(wrapper, -100, 0)
  await wrapper.find('.var-swipe-action__content button').trigger('click')
  expect(onClick).not.toHaveBeenCalled()
  expect(getOffset(wrapper)).toBe('translateX(-150px)')
  await trigger(wrapper, 'touchstart')
  await trigger(wrapper, 'touchend')
  await wrapper.find('.var-swipe-action__content button').trigger('click')
  expect(getOffset(wrapper)).toBe('translateX(0px)')
})

test('swipe-action does not suppress a later mouse or keyboard action click', async () => {
  const now = vi.spyOn(performance, 'now').mockReturnValue(0)
  const onAction = vi.fn()
  const { wrapper } = mountSwipeAction({ props: { onAction } })
  await triggerDrag(wrapper, -100, 0)
  now.mockReturnValue(500)
  await wrapper.find('.var-swipe-action--right button').trigger('click')
  expect(onAction).toHaveBeenCalledTimes(1)
  expect(getOffset(wrapper)).toBe('translateX(0px)')
})

test('swipe-action resizes opened actions and closes when they disappear', async () => {
  const { wrapper, widths } = mountSwipeAction()
  wrapper.vm.open()
  widths.right = 200
  wrapper.vm.resize()
  await nextTick()
  expect(getOffset(wrapper)).toBe('translateX(-200px)')
  widths.right = 0
  await wrapper.setProps({ rightActions: [] })
  await nextTick()
  expect(getOffset(wrapper)).toBe('translateX(0px)')
})

test('swipe-action duration and custom action slots', async () => {
  const { wrapper } = mountSwipeAction({
    props: { duration: '100', closeOnClickAction: false },
    slots: {
      left: ({ close }) => h('button', { onClick: close }, 'Custom left'),
      right: () => 'Custom right',
    },
  })
  wrapper.vm.open('left')
  await nextTick()
  expect(wrapper.find('.var-swipe-action__track').element.style.transitionDuration).toBe('100ms')
  expect(wrapper.find('.var-swipe-action--right').text()).toBe('Custom right')
  await wrapper.find('.var-swipe-action--left button').trigger('click')
  expect(getOffset(wrapper)).toBe('translateX(0px)')
})

test('swipe-action keyboard focus reveals actions and Escape closes them', async () => {
  const { wrapper } = mountSwipeAction()
  await wrapper.find('.var-swipe-action--left button').trigger('focusin')
  expect(getOffset(wrapper)).toBe('translateX(75px)')
  await wrapper.trigger('keydown', { key: 'Escape' })
  expect(getOffset(wrapper)).toBe('translateX(0px)')
  wrapper.vm.open()
  await wrapper.trigger('focusout', { relatedTarget: document.body })
  expect(getOffset(wrapper)).toBe('translateX(0px)')
})

test('swipe-action opening another row closes the previous row', async () => {
  const first = mountSwipeAction().wrapper
  const second = mountSwipeAction().wrapper
  first.vm.open()
  await trigger(second, 'touchstart')
  expect(getOffset(first)).toBe('translateX(0px)')
})

test('swipe-action can be opened by an external button without closing on the same click', async () => {
  const { wrapper } = mountSwipeAction()
  const controls = mount(
    {
      render: () => h('button', { onClick: () => wrapper.vm.open('left') }, 'Open'),
    },
    { attachTo: document.body },
  )
  wrappers.push(controls)

  await controls.find('button').trigger('click')
  expect(getOffset(wrapper)).toBe('translateX(75px)')
  await controls.find('button').trigger('click')
  expect(getOffset(wrapper)).toBe('translateX(75px)')
})
