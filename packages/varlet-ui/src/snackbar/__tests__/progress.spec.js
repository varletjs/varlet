import { config, mount } from '@vue/test-utils'
import { afterEach, beforeEach, expect, test, vi } from 'vite-plus/test'
import { h, KeepAlive, nextTick, ref } from 'vue'
import Snackbar from '../index'
import VarSnackbar from '../Snackbar'

let wrappers
let originalStubs

function mountSnackbar(props = {}) {
  const onUpdateShow = vi.fn((show) => wrapper.setProps({ show }))
  const wrapper = mount(VarSnackbar, {
    props: {
      teleport: false,
      show: true,
      duration: 1000,
      ...props,
      'onUpdate:show': onUpdateShow,
    },
  })
  wrappers.push(wrapper)

  return { wrapper, onUpdateShow }
}

beforeEach(() => {
  vi.useFakeTimers({
    toFake: [
      'setTimeout',
      'clearTimeout',
      'setInterval',
      'clearInterval',
      'Date',
      'requestAnimationFrame',
      'cancelAnimationFrame',
    ],
  })
  vi.setSystemTime(new Date('2026-01-01T00:00:00Z'))
  wrappers = []
  originalStubs = config.global.stubs
  config.global.stubs = { ...originalStubs, 'transition-group': false }
})

afterEach(async () => {
  try {
    wrappers.forEach((wrapper) => wrapper.unmount())
    Snackbar.clear()
    await nextTick()
    await vi.runAllTimersAsync()
    expect(document.querySelector('.var-transition-group')).toBeNull()
  } finally {
    Snackbar.allowMultiple(false)
    Snackbar.resetDefaultOptions()
    config.global.stubs = originalStubs
    vi.clearAllTimers()
    vi.useRealTimers()
    document.body.innerHTML = ''
  }
})

test('snackbar progress is disabled by default for component and function calls', async () => {
  const { wrapper } = mountSnackbar()
  Snackbar('Default message')
  await nextTick()

  expect(wrapper.find('.var-snackbar__progress').exists()).toBe(false)
  expect(document.querySelector('.var-snackbar__progress')).toBeNull()
})

test('snackbar progress is decorative and shares the automatic close duration', async () => {
  const { wrapper, onUpdateShow } = mountSnackbar({ progress: true })
  await nextTick()

  const progress = wrapper.get('.var-snackbar__progress')
  const bar = progress.get('.var-snackbar__progress-bar').element
  expect(progress.attributes('aria-hidden')).toBe('true')
  expect(bar.style.animationDuration).toBe('1000ms')
  expect(Number.parseFloat(bar.style.animationDelay)).toBe(0)
  expect(vi.getTimerCount()).toBe(1)

  await vi.advanceTimersByTimeAsync(999)
  expect(onUpdateShow).not.toHaveBeenCalled()
  expect(wrapper.get('.var-snackbar__progress-bar').element).toBe(bar)
  expect(vi.getTimerCount()).toBe(1)

  await vi.advanceTimersByTimeAsync(1)
  expect(onUpdateShow).toHaveBeenCalledExactlyOnceWith(false)
  expect(wrapper.find('.var-snackbar__progress').exists()).toBe(false)
  expect(wrapper.get('.var-snackbar').element.style.display).toBe('none')
})

test('snackbar progress resumes elapsed time without extending the close timer', async () => {
  const { wrapper, onUpdateShow } = mountSnackbar({ progress: true })
  await nextTick()
  await vi.advanceTimersByTimeAsync(400)
  await wrapper.setProps({ progress: false })
  expect(wrapper.find('.var-snackbar__progress').exists()).toBe(false)

  await vi.advanceTimersByTimeAsync(200)
  await wrapper.setProps({ progress: true })
  const bar = wrapper.get('.var-snackbar__progress-bar').element
  expect(bar.style.animationDuration).toBe('1000ms')
  expect(bar.style.animationDelay).toBe('-600ms')
  expect(vi.getTimerCount()).toBe(1)

  await vi.advanceTimersByTimeAsync(399)
  expect(onUpdateShow).not.toHaveBeenCalled()
  await vi.advanceTimersByTimeAsync(1)
  expect(onUpdateShow).toHaveBeenCalledExactlyOnceWith(false)
})

test('snackbar progress enabled after opening starts from the remaining duration', async () => {
  const { wrapper, onUpdateShow } = mountSnackbar()
  await vi.advanceTimersByTimeAsync(250)
  await wrapper.setProps({ progress: true })

  const bar = wrapper.get('.var-snackbar__progress-bar').element
  expect(bar.style.animationDuration).toBe('1000ms')
  expect(bar.style.animationDelay).toBe('-250ms')

  await vi.advanceTimersByTimeAsync(750)
  expect(onUpdateShow).toHaveBeenCalledExactlyOnceWith(false)
})

test('snackbar type changes preserve progress timing until the bar is recreated', async () => {
  const { wrapper, onUpdateShow } = mountSnackbar({ progress: true, duration: 2000, type: 'info' })
  await nextTick()
  const originalBar = wrapper.get('.var-snackbar__progress-bar').element
  const originalDelay = originalBar.style.animationDelay

  await vi.advanceTimersByTimeAsync(1000)
  await wrapper.setProps({ type: 'success' })
  expect(wrapper.get('.var-snackbar__progress-bar').element).toBe(originalBar)
  expect(originalBar.style.animationDelay).toBe(originalDelay)

  await wrapper.setProps({ progress: false })
  await vi.advanceTimersByTimeAsync(200)
  await wrapper.setProps({ progress: true })
  const resumedBar = wrapper.get('.var-snackbar__progress-bar').element
  expect(resumedBar).not.toBe(originalBar)
  expect(resumedBar.style.animationDuration).toBe('2000ms')
  expect(resumedBar.style.animationDelay).toBe('-1200ms')

  await vi.advanceTimersByTimeAsync(799)
  expect(onUpdateShow).not.toHaveBeenCalled()
  await vi.advanceTimersByTimeAsync(1)
  expect(onUpdateShow).toHaveBeenCalledExactlyOnceWith(false)
})

test('snackbar duration changes apply to the next opening', async () => {
  const { wrapper, onUpdateShow } = mountSnackbar({ progress: true })
  await vi.advanceTimersByTimeAsync(400)
  await wrapper.setProps({ duration: 2000 })
  expect(wrapper.get('.var-snackbar__progress-bar').element.style.animationDuration).toBe('1000ms')

  await vi.advanceTimersByTimeAsync(600)
  expect(onUpdateShow).toHaveBeenCalledExactlyOnceWith(false)
  onUpdateShow.mockClear()

  await wrapper.setProps({ show: true })
  const bar = wrapper.get('.var-snackbar__progress-bar').element
  expect(bar.style.animationDuration).toBe('2000ms')
  expect(Number.parseFloat(bar.style.animationDelay)).toBe(0)

  await vi.advanceTimersByTimeAsync(1999)
  expect(onUpdateShow).not.toHaveBeenCalled()
  await vi.advanceTimersByTimeAsync(1)
  expect(onUpdateShow).toHaveBeenCalledExactlyOnceWith(false)
})

test('snackbar closing and unmounting cancel the current countdown', async () => {
  const { wrapper, onUpdateShow } = mountSnackbar({ progress: true })
  await nextTick()
  const originalBar = wrapper.get('.var-snackbar__progress-bar').element
  await vi.advanceTimersByTimeAsync(250)
  await wrapper.setProps({ show: false })
  expect(wrapper.find('.var-snackbar__progress').exists()).toBe(false)
  expect(vi.getTimerCount()).toBe(0)

  await vi.advanceTimersByTimeAsync(1000)
  expect(onUpdateShow).not.toHaveBeenCalled()
  await wrapper.setProps({ show: true })
  const bar = wrapper.get('.var-snackbar__progress-bar').element
  expect(bar).not.toBe(originalBar)
  expect(Number.parseFloat(bar.style.animationDelay)).toBe(0)

  wrapper.unmount()
  wrappers = []
  expect(vi.getTimerCount()).toBe(0)
  await vi.advanceTimersByTimeAsync(1000)
  expect(onUpdateShow).not.toHaveBeenCalled()
})

test.each([true, false])(
  'snackbar KeepAlive reactivation resets its close timer with progress %s',
  async (progress) => {
    const active = ref(true)
    const show = ref(true)
    const onUpdateShow = vi.fn((value) => {
      show.value = value
    })
    const wrapper = mount({
      setup: () => () =>
        h(KeepAlive, null, {
          default: () =>
            active.value
              ? h(VarSnackbar, {
                  teleport: false,
                  show: show.value,
                  progress,
                  duration: 1000,
                  'onUpdate:show': onUpdateShow,
                })
              : null,
        }),
    })
    wrappers.push(wrapper)
    await nextTick()

    await vi.advanceTimersByTimeAsync(250)
    active.value = false
    await nextTick()
    await vi.advanceTimersByTimeAsync(250)
    active.value = true
    await nextTick()

    if (progress) {
      const bar = wrapper.get('.var-snackbar__progress-bar').element
      expect(bar.style.animationDuration).toBe('1000ms')
      expect(Number.parseFloat(bar.style.animationDelay)).toBe(0)
    } else {
      expect(wrapper.find('.var-snackbar__progress').exists()).toBe(false)
    }

    await vi.advanceTimersByTimeAsync(500)
    expect(onUpdateShow).not.toHaveBeenCalled()
    expect(wrapper.get('.var-snackbar').element.style.display).toBe('')
    await vi.advanceTimersByTimeAsync(499)
    expect(onUpdateShow).not.toHaveBeenCalled()
    await vi.advanceTimersByTimeAsync(1)
    expect(onUpdateShow).toHaveBeenCalledExactlyOnceWith(false)
  },
)

test('snackbar loading does not display progress or close automatically', async () => {
  const { wrapper, onUpdateShow } = mountSnackbar({ progress: true, type: 'loading' })
  await nextTick()
  expect(wrapper.find('.var-snackbar__progress').exists()).toBe(false)
  expect(vi.getTimerCount()).toBe(0)

  await vi.advanceTimersByTimeAsync(2000)
  expect(onUpdateShow).not.toHaveBeenCalled()
  expect(wrapper.get('.var-snackbar').element.style.display).toBe('')
})

test.each([true, false])('snackbar starts a fresh countdown after loading with progress %s', async (progress) => {
  const { wrapper, onUpdateShow } = mountSnackbar({ progress, type: 'loading' })
  await vi.advanceTimersByTimeAsync(2000)
  await wrapper.setProps({ duration: 1500, type: 'success' })

  expect(vi.getTimerCount()).toBe(1)
  if (progress) {
    const bar = wrapper.get('.var-snackbar__progress-bar').element
    expect(bar.style.animationDuration).toBe('1500ms')
    expect(Number.parseFloat(bar.style.animationDelay)).toBe(0)
  }

  await vi.advanceTimersByTimeAsync(1499)
  expect(onUpdateShow).not.toHaveBeenCalled()
  await vi.advanceTimersByTimeAsync(1)
  expect(onUpdateShow).toHaveBeenCalledExactlyOnceWith(false)
})

test.each([true, false])(
  'snackbar cancels and clears its countdown when entering loading with progress %s',
  async (progress) => {
    const { wrapper, onUpdateShow } = mountSnackbar({ progress })
    await vi.advanceTimersByTimeAsync(400)
    await wrapper.setProps({ type: 'loading' })
    expect(vi.getTimerCount()).toBe(0)
    expect(wrapper.find('.var-snackbar__progress').exists()).toBe(false)

    await vi.advanceTimersByTimeAsync(2000)
    expect(onUpdateShow).not.toHaveBeenCalled()
    await wrapper.setProps({ type: 'info' })
    if (progress) {
      const bar = wrapper.get('.var-snackbar__progress-bar').element
      expect(bar.style.animationDuration).toBe('1000ms')
      expect(Number.parseFloat(bar.style.animationDelay)).toBe(0)
    }

    await vi.advanceTimersByTimeAsync(999)
    expect(onUpdateShow).not.toHaveBeenCalled()
    await vi.advanceTimersByTimeAsync(1)
    expect(onUpdateShow).toHaveBeenCalledExactlyOnceWith(false)
  },
)

test('snackbar type changes while hidden do not start a countdown', async () => {
  const { wrapper, onUpdateShow } = mountSnackbar({ progress: true, show: false, type: 'loading' })
  await wrapper.setProps({ type: 'success' })
  expect(vi.getTimerCount()).toBe(0)
  expect(wrapper.find('.var-snackbar__progress').exists()).toBe(false)
  await vi.advanceTimersByTimeAsync(2000)
  expect(onUpdateShow).not.toHaveBeenCalled()

  await wrapper.setProps({ show: true })
  expect(Number.parseFloat(wrapper.get('.var-snackbar__progress-bar').element.style.animationDelay)).toBe(0)
  await vi.advanceTimersByTimeAsync(1000)
  expect(onUpdateShow).toHaveBeenCalledExactlyOnceWith(false)
})

test('snackbar function loading replacement cancels and restarts the countdown', async () => {
  Snackbar({ content: 'First message', progress: true, duration: 1000 })
  await nextTick()
  await vi.advanceTimersByTimeAsync(400)
  Snackbar.loading({ content: 'Loading message', progress: true, duration: 1000 })
  await nextTick()
  expect(document.querySelector('.var-snackbar__progress')).toBeNull()

  await vi.advanceTimersByTimeAsync(2000)
  expect(document.querySelector('.var-snackbar__wrapper-loading')).not.toBeNull()
  expect(vi.getTimerCount()).toBe(0)
  Snackbar.success({ content: 'Complete message', progress: true, duration: 1500 })
  await nextTick()
  const bar = document.querySelector('.var-snackbar__progress-bar')
  expect(bar.style.animationDuration).toBe('1500ms')
  expect(Number.parseFloat(bar.style.animationDelay)).toBe(0)

  await vi.advanceTimersByTimeAsync(1499)
  expect(document.querySelector('.var-snackbar__progress-bar')).toBe(bar)
  await vi.advanceTimersByTimeAsync(1)
  expect(document.querySelector('.var-snackbar__progress')).toBeNull()
})

test.each([0, -100, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY])(
  'snackbar does not display progress for duration %s',
  async (duration) => {
    const { wrapper } = mountSnackbar({ progress: true, duration })
    await nextTick()
    expect(wrapper.find('.var-snackbar__progress').exists()).toBe(false)
  },
)

test.each([0, -100])('snackbar preserves immediate closing for duration %s', async (duration) => {
  const { onUpdateShow } = mountSnackbar({ progress: true, duration })
  await vi.advanceTimersByTimeAsync(0)
  expect(onUpdateShow).toHaveBeenCalledExactlyOnceWith(false)
})

test('snackbar function replacement restarts progress and the close timer together', async () => {
  Snackbar({ content: 'First message', progress: true, duration: 1000 })
  await nextTick()
  const originalBar = document.querySelector('.var-snackbar__progress-bar')
  expect(originalBar).not.toBeNull()

  await vi.advanceTimersByTimeAsync(400)
  Snackbar({ content: 'Replacement message', progress: true, duration: 1000 })
  await nextTick()
  const bar = document.querySelector('.var-snackbar__progress-bar')
  expect(bar).not.toBe(originalBar)
  expect(bar.style.animationDuration).toBe('1000ms')
  expect(Number.parseFloat(bar.style.animationDelay)).toBe(0)
  expect(document.querySelector('.var-snackbar__content').textContent).toBe('Replacement message')

  await vi.advanceTimersByTimeAsync(600)
  expect(document.querySelector('.var-snackbar__progress-bar')).toBe(bar)
  await vi.advanceTimersByTimeAsync(399)
  expect(document.querySelector('.var-snackbar__progress-bar')).toBe(bar)
  await vi.advanceTimersByTimeAsync(1)
  expect(document.querySelector('.var-snackbar__progress')).toBeNull()
})

test('snackbar function default options support progress and individual overrides', async () => {
  Snackbar.setDefaultOptions({ progress: true, duration: 1500 })
  Snackbar('Default progress')
  await nextTick()
  expect(document.querySelector('.var-snackbar__progress-bar').style.animationDuration).toBe('1500ms')

  Snackbar({ content: 'No progress', progress: false })
  await nextTick()
  expect(document.querySelector('.var-snackbar__progress')).toBeNull()

  Snackbar.resetDefaultOptions()
  Snackbar('Reset defaults')
  await nextTick()
  expect(document.querySelector('.var-snackbar__progress')).toBeNull()
})

test('snackbar function instances have independent progress and closing times', async () => {
  Snackbar.allowMultiple(true)
  Snackbar({ content: 'First message', progress: true, duration: 1000 })
  await nextTick()
  await vi.advanceTimersByTimeAsync(200)
  const second = Snackbar({ content: 'Second message', progress: true, duration: 2000 })
  await nextTick()

  const bars = document.querySelectorAll('.var-snackbar__progress-bar')
  expect(bars).toHaveLength(2)
  expect(bars[0].style.animationDuration).toBe('1000ms')
  expect(bars[1].style.animationDuration).toBe('2000ms')

  await vi.advanceTimersByTimeAsync(800)
  expect(document.querySelectorAll('.var-snackbar__progress-bar')).toHaveLength(1)
  expect(document.querySelector('.var-snackbar__progress-bar')).toBe(bars[1])

  second.clear()
  await nextTick()
  expect(document.querySelector('.var-snackbar__progress')).toBeNull()
  await vi.advanceTimersByTimeAsync(100)
  expect(document.querySelector('.var-snackbar')).toBeNull()
})
