import * as shared from '@varlet/shared'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vite-plus/test'
import { createApp, nextTick, ref } from 'vue'
import CollapseTransition from '..'
import { delay } from '../../utils/test'
import VarCollapseTransition from '../CollapseTransition'
import { useCollapseTransition } from '../useCollapseTransition'

describe('test collapseTransition render', () => {
  test('collapseTransition use', () => {
    const app = createApp({}).use(CollapseTransition)

    expect(app.component(CollapseTransition.name)).toBeTruthy()
  })
})

describe('test collapseTransition props', () => {
  test('collapseTransition expand', async () => {
    const expand = ref(true)
    const template = `
     <var-collapse-transition :expand="expand">
      test
     </var-collapse-transition>
    `

    const wrapper = mount({
      components: {
        [VarCollapseTransition.name]: VarCollapseTransition,
      },
      template,
      setup() {
        return {
          expand,
        }
      },
    })

    await delay(0)
    expect(wrapper.vm.expand).toBeTruthy()
    expect(wrapper.find('.var-collapse-transition__content').attributes('style')).toBe('')

    const content = wrapper.find('.var-collapse-transition__content')

    expand.value = false
    await delay(50)
    const transitionStartEvent = new Event('transitionstart')
    Object.assign(transitionStartEvent, { propertyName: 'height' })
    content.element.dispatchEvent(transitionStartEvent)

    const transitionEndEvent = new Event('transitionend')
    Object.assign(transitionEndEvent, { propertyName: 'height' })
    content.element.dispatchEvent(transitionEndEvent)
    await delay(0)
    expect(wrapper.vm.expand).toBeFalsy()
    expect(content.attributes('style')).toBe('display: none;')

    wrapper.unmount()
  })
})

describe('useCollapseTransition behaviors', () => {
  test('useCollapseTransition returns early when contentEl is missing', async () => {
    const contentEl = ref(null)
    const showContent = ref(false)
    const expand = ref(true)

    useCollapseTransition({ contentEl, showContent, expand })

    await nextTick()
    await Promise.resolve()

    expect(showContent.value).toBe(false)
  })

  test('useCollapseTransition skips init trigger after transition start', async () => {
    const rafSpy = vi.spyOn(shared, 'raf').mockResolvedValue()
    const doubleRafSpy = vi.spyOn(shared, 'doubleRaf').mockResolvedValue()

    const element = document.createElement('div')
    Object.defineProperty(element, 'offsetHeight', { value: 24, configurable: true })

    const contentEl = ref(element)
    const showContent = ref(false)
    const expand = ref(false)

    const { handleTransitionStart } = useCollapseTransition({ contentEl, showContent, expand })

    handleTransitionStart()
    expand.value = true
    await nextTick()
    await Promise.resolve()

    expect(showContent.value).toBe(true)

    rafSpy.mockRestore()
    doubleRafSpy.mockRestore()
  })

  test('useCollapseTransition handles transition end when still expanding', () => {
    const element = document.createElement('div')
    const contentEl = ref(element)
    const showContent = ref(true)
    const expand = ref(true)

    const { handleTransitionEnd } = useCollapseTransition({ contentEl, showContent, expand })

    handleTransitionEnd()
    expect(showContent.value).toBe(true)
  })

  test('useCollapseTransition triggers init transition end', async () => {
    const rafSpy = vi.spyOn(shared, 'raf').mockResolvedValue()
    const doubleRafSpy = vi.spyOn(shared, 'doubleRaf').mockResolvedValue()
    const element = document.createElement('div')
    Object.defineProperty(element, 'offsetHeight', { value: 24, configurable: true })

    const contentEl = ref(element)
    const showContent = ref(false)
    const expand = ref(true)

    useCollapseTransition({ contentEl, showContent, expand })

    await nextTick()
    for (let i = 0; i < 6; i += 1) {
      if (contentEl.value?.style.height === '') {
        break
      }
      await Promise.resolve()
    }

    expect(showContent.value).toBe(true)
    expect(contentEl.value?.style.height).toBe('')

    rafSpy.mockRestore()
    doubleRafSpy.mockRestore()
  })

  test('useCollapseTransition close returns early when contentEl is missing', async () => {
    const contentEl = ref(null)
    const showContent = ref(false)
    const expand = ref(false)

    useCollapseTransition({ contentEl, showContent, expand })

    await nextTick()
    await Promise.resolve()

    expect(showContent.value).toBe(false)
  })

  test('useCollapseTransition ignores transition events from other elements or properties', () => {
    const element = document.createElement('div')
    const contentEl = ref(element)
    const showContent = ref(true)
    const expand = ref(false)

    const { handleTransitionEnd, handleTransitionStart } = useCollapseTransition({ contentEl, showContent, expand })

    // Event from a different target is ignored (useCollapseTransition.ts lines 85, 101)
    const otherElement = document.createElement('div')
    const otherTargetEvent = new Event('transitionend')
    Object.defineProperty(otherTargetEvent, 'target', { value: otherElement })
    Object.assign(otherTargetEvent, { propertyName: 'height' })
    handleTransitionEnd(otherTargetEvent)

    // Event for a non-height property is ignored (useCollapseTransition.ts lines 85, 101)
    const otherPropEvent = new Event('transitionend')
    Object.defineProperty(otherPropEvent, 'target', { value: element })
    Object.assign(otherPropEvent, { propertyName: 'width' })
    handleTransitionEnd(otherPropEvent)

    const otherStartEvent = new Event('transitionstart')
    Object.defineProperty(otherStartEvent, 'target', { value: otherElement })
    Object.assign(otherStartEvent, { propertyName: 'height' })
    handleTransitionStart(otherStartEvent)

    // Since all events were ignored, the showContent collapse logic never ran
    expect(showContent.value).toBe(true)
  })

  test('useCollapseTransition ignores transition end from a stale version', async () => {
    const element = document.createElement('div')
    Object.defineProperty(element, 'offsetHeight', { value: 24, configurable: true })

    const contentEl = ref(element)
    const showContent = ref(true)
    const expand = ref(false)

    const { handleTransitionEnd, handleTransitionStart } = useCollapseTransition({ contentEl, showContent, expand })

    // startedTransitionVersion is captured here from the current transitionVersion
    handleTransitionStart()

    // Bumping expand increments transitionVersion, so the started version is now stale
    expand.value = true
    await nextTick()

    // Event-driven end with a stale startedTransitionVersion returns early
    // (useCollapseTransition.ts lines 89-90); showContent is not flipped to false
    const endEvent = new Event('transitionend')
    Object.defineProperty(endEvent, 'target', { value: element })
    Object.assign(endEvent, { propertyName: 'height' })
    handleTransitionEnd(endEvent)

    expect(showContent.value).toBe(true)
  })

  test('useCollapseTransition skips handleTransitionEnd when isInitToTrigger is false', async () => {
    const rafSpy = vi.spyOn(shared, 'raf').mockResolvedValue()

    let resolveDoubleRaf
    const doubleRafSpy = vi.spyOn(shared, 'doubleRaf').mockImplementation(
      () =>
        new Promise((resolve) => {
          resolveDoubleRaf = resolve
        }),
    )

    const element = document.createElement('div')
    Object.defineProperty(element, 'offsetHeight', { value: 24, configurable: true })

    const contentEl = ref(element)
    const showContent = ref(false)
    const expand = ref(true)

    const { handleTransitionStart } = useCollapseTransition({ contentEl, showContent, expand })

    await nextTick()
    await Promise.resolve()
    await Promise.resolve()
    await Promise.resolve()

    handleTransitionStart()
    resolveDoubleRaf?.()
    await Promise.resolve()
    await Promise.resolve()

    expect(showContent.value).toBe(true)
    expect(contentEl.value?.style.height).toBe('24px')

    rafSpy.mockRestore()
    doubleRafSpy.mockRestore()
  })
})
