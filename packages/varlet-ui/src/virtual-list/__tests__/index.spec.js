import { enableAutoUnmount, mount } from '@vue/test-utils'
import { afterEach, beforeEach, expect, test, vi } from 'vite-plus/test'
import { createApp, createSSRApp, defineComponent, h, KeepAlive, nextTick, ref } from 'vue'
import { renderToString } from 'vue/server-renderer'
import VirtualList, { virtualListProps } from '..'
import List from '../../list'
import TabItem from '../../tab-item'
import TabsItems from '../../tabs-items'
import { getVirtualListRange } from '../range'

enableAutoUnmount(afterEach)

const items = Array.from({ length: 10000 }, (_, id) => ({ id, label: `Item ${id}` }))
let frames
let observers
let pageStart

const rect = (top, height) => ({ top, bottom: top + height, left: 0, right: 320, width: 320, height })
const totalHeight = (element) => parseFloat(element.querySelector('.var-virtual-list__spacer')?.style.height) || 0

beforeEach(() => {
  frames = new Map()
  observers = []
  pageStart = 400
  let frameId = 0
  vi.stubGlobal(
    'requestAnimationFrame',
    vi.fn((callback) => {
      frames.set(++frameId, callback)
      return frameId
    }),
  )
  vi.stubGlobal(
    'cancelAnimationFrame',
    vi.fn((id) => frames.delete(id)),
  )
  vi.stubGlobal(
    'ResizeObserver',
    class {
      elements = new Set()
      constructor(callback) {
        this.callback = callback
        this.observe = vi.fn((element) => this.elements.add(element))
        this.unobserve = vi.fn((element) => this.elements.delete(element))
        this.disconnect = vi.fn(() => this.elements.clear())
        observers.push(this)
      }
    },
  )
  vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(300)
  vi.spyOn(window, 'scrollY', 'get').mockReturnValue(0)
  vi.spyOn(window, 'scrollTo').mockImplementation(({ top }) => {
    vi.spyOn(window, 'scrollY', 'get').mockReturnValue(top)
  })
  vi.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockImplementation(function () {
    return Number(this.dataset.viewportHeight ?? parseFloat(this.style.height)) || 0
  })
  vi.spyOn(HTMLElement.prototype, 'clientTop', 'get').mockImplementation(function () {
    return this.hasAttribute('data-scroll-fixture') ? 2 : 0
  })
  vi.spyOn(HTMLElement.prototype, 'scrollHeight', 'get').mockImplementation(function () {
    if (this === document.documentElement) {
      return 600000
    }
    return totalHeight(this) + Number(this.dataset.header ?? 0) + Number(this.dataset.footer ?? 0)
  })
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(function () {
    if (this.classList.contains('var-virtual-list__item')) {
      return rect(0, Number(this.firstElementChild?.dataset.rowHeight ?? parseFloat(this.style.height)) || 0)
    }
    if (this.hasAttribute('data-scroll-fixture')) {
      return rect(Number(this.dataset.top ?? 100), this.clientHeight + 4)
    }
    if (this.classList.contains('var-virtual-list')) {
      if (this.classList.contains('var-virtual-list--scrollable')) {
        return rect(0, this.clientHeight)
      }
      const target = this.closest('[data-scroll-fixture]')
      return rect(
        target
          ? target.getBoundingClientRect().top +
              target.clientTop +
              Number(target.dataset.header ?? 0) -
              target.scrollTop
          : pageStart - window.scrollY,
        totalHeight(this),
      )
    }
    if (this.classList.contains('var-virtual-list__spacer')) {
      const root = this.parentElement
      return rect(
        root.getBoundingClientRect().top -
          (root.classList.contains('var-virtual-list--scrollable') ? root.scrollTop : 0),
        parseFloat(this.style.height),
      )
    }
    if (this.classList.contains('var-list__detector')) {
      const root = this.parentElement.querySelector('.var-virtual-list')
      return rect(root.getBoundingClientRect().top + totalHeight(root), 0)
    }
    return rect(0, this.clientHeight)
  })
  vi.spyOn(HTMLElement.prototype, 'getClientRects').mockImplementation(function () {
    return this.closest('[data-hidden]') ? [] : [this.getBoundingClientRect()]
  })
})

afterEach(() => {
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
  document.body.innerHTML = ''
})

async function flush() {
  await nextTick()
  const callbacks = [...frames.values()]
  frames.clear()
  callbacks.forEach((callback) => callback())
  await nextTick()
}

function mountList(props = {}, options = {}) {
  return mount(VirtualList, {
    props: { items, itemSize: 50, itemKey: 'id', height: 300, overscan: 2, ...props },
    slots: { default: ({ item, index }) => `${index}:${item.label}` },
    attachTo: document.body,
    ...options,
  })
}

function indices(wrapper) {
  return wrapper.findAll('.var-virtual-list__item').map((row) => Number(row.attributes('aria-posinset')) - 1)
}

function createScroller(header = 60) {
  const element = document.createElement('div')
  element.id = `scroller-${document.body.children.length}`
  element.setAttribute('data-scroll-fixture', '')
  element.dataset.viewportHeight = '200'
  element.dataset.header = String(header)
  element.style.overflowY = 'auto'
  document.body.appendChild(element)
  return element
}

test('virtual list plugin and default props setter', () => {
  const app = createApp({}).use(VirtualList)
  expect(app.component(VirtualList.name)).toBeTruthy()
  VirtualList.setPropsDefaults({ overscan: 3 })
  expect(virtualListProps.overscan.default).toBe(3)
  VirtualList.setPropsDefaults({ overscan: 5 })
})

test.each([
  [0, 50, 0, 300, 2, [-1, -1, -1, -1]],
  [100, 50, 50, 100, 2, [0, 3, 1, 1]],
  [100, 50, 50.5, 100.5, 0, [1, 2, 1, 2]],
  [100, 50, -100, -10, 2, [-1, -1, -1, -1]],
  [100, 50, 5000, 5300, 2, [-1, -1, -1, -1]],
  [2, 50, 0, 300, 5, [0, 1, 0, 1]],
])('range boundaries: count %s, size %s, viewport %s..%s', (count, size, start, end, overscan, expected) => {
  expect(Object.values(getVirtualListRange(count, size, start, end, overscan))).toEqual(expected)
})

test('renders a bounded window with the original indices and accessible positions', () => {
  const wrapper = mountList()
  expect(indices(wrapper)).toEqual([0, 1, 2, 3, 4, 5, 6, 7])
  expect(wrapper.find('.var-virtual-list__spacer').element.style.height).toBe('500000px')
  expect(wrapper.find('.var-virtual-list__item').text()).toBe('0:Item 0')
  expect(wrapper.find('.var-virtual-list__item').attributes('aria-setsize')).toBe('10000')
  expect(wrapper.attributes('role')).toBe('list')
  expect(wrapper.attributes('tabindex')).toBe('0')
})

test('scrolling updates the window and coalesces events into one animation frame', async () => {
  const onRangeChange = vi.fn()
  const wrapper = mountList({ onRangeChange })
  await flush()
  onRangeChange.mockClear()
  wrapper.element.scrollTop = 1000
  for (let i = 0; i < 10; i++) {
    wrapper.element.dispatchEvent(new Event('scroll'))
  }
  expect(frames.size).toBe(1)
  await flush()
  expect(indices(wrapper)).toEqual([18, 19, 20, 21, 22, 23, 24, 25, 26, 27])
  expect(wrapper.find('.var-virtual-list__items').element.style.transform).toBe('translateY(900px)')
  expect(onRangeChange).toHaveBeenCalledExactlyOnceWith({ start: 18, end: 27, visibleStart: 20, visibleEnd: 25 })
  wrapper.element.dispatchEvent(new Event('scroll'))
  await flush()
  expect(onRangeChange).toHaveBeenCalledTimes(1)
})

test('handles empty and short lists and clamps an owned viewport after shrink', async () => {
  const wrapper = mountList()
  wrapper.vm.scrollToIndex(9999)
  await flush()
  expect(indices(wrapper).at(-1)).toBe(9999)
  await wrapper.setProps({ items: items.slice(0, 2) })
  await flush()
  expect(wrapper.element.scrollTop).toBe(0)
  expect(indices(wrapper)).toEqual([0, 1])
  await wrapper.setProps({ items: [] })
  await flush()
  expect(indices(wrapper)).toEqual([])
  expect(wrapper.find('.var-virtual-list__spacer').element.style.height).toBe('0px')
})

test('updates data, item size, height, and overscan without deep watching items', async () => {
  const wrapper = mountList({ items: items.slice(0, 10) })
  await wrapper.setProps({ itemSize: 100, height: 200, overscan: -1 })
  await flush()
  expect(indices(wrapper)).toEqual([0, 1])
  expect(wrapper.find('.var-virtual-list__spacer').element.style.height).toBe('1000px')
  await wrapper.setProps({ items: [{ id: 0, label: 'Updated' }, ...items.slice(1, 20)] })
  expect(wrapper.find('.var-virtual-list__item').text()).toBe('0:Updated')
  expect(wrapper.find('.var-virtual-list__spacer').element.style.height).toBe('2000px')
  await wrapper.setProps({ overscan: 1.9 })
  await flush()
  expect(indices(wrapper)).toEqual([0, 1, 2])
})

test('keeps mounted row identity across reorder, prepend, and deletion using stable keys', async () => {
  const Row = defineComponent({
    props: ['item'],
    setup(props) {
      const initialId = props.item.id
      return () => h('input', { value: initialId, 'data-current-id': props.item.id })
    },
  })
  const wrapper = mountList(
    { items: items.slice(0, 5), itemKey: (item) => item.id },
    {
      slots: { default: ({ item }) => h(Row, { item }) },
    },
  )
  const original = wrapper.find('input[data-current-id="2"]').element
  await wrapper.setProps({ items: [items[2], items[0], items[1], items[4]] })
  expect(wrapper.find('input[data-current-id="2"]').element).toBe(original)
  await wrapper.setProps({ items: [{ id: 'new', label: 'New' }, items[2], items[0]] })
  expect(wrapper.find('input[data-current-id="2"]').element).toBe(original)
  expect(original.value).toBe('2')
})

test.each([
  ['start', 500],
  ['center', 375],
  ['end', 250],
])('scrollToIndex aligns with %s', (align, expected) => {
  const wrapper = mountList()
  wrapper.vm.scrollToIndex(10, { align })
  expect(wrapper.element.scrollTop).toBe(expected)
})

test('automatic alignment preserves visible items and moves the smallest distance', async () => {
  const wrapper = mountList()
  wrapper.vm.scrollToOffset(200)
  await flush()
  wrapper.vm.scrollToIndex(5, { align: 'auto' })
  expect(wrapper.element.scrollTop).toBe(200)
  wrapper.vm.scrollToIndex(20, { align: 'auto' })
  expect(wrapper.element.scrollTop).toBe(750)
  wrapper.vm.scrollToIndex(0, { align: 'auto' })
  expect(wrapper.element.scrollTop).toBe(0)
})

test('scroll methods clamp indices and offsets and ignore non-finite values', async () => {
  const wrapper = mountList()
  wrapper.vm.scrollToIndex(100000)
  expect(wrapper.element.scrollTop).toBe(499700)
  wrapper.vm.scrollToOffset(-1)
  expect(wrapper.element.scrollTop).toBe(0)
  wrapper.vm.scrollToIndex(NaN)
  wrapper.vm.scrollToOffset(Infinity)
  expect(wrapper.element.scrollTop).toBe(0)
  await wrapper.setProps({ items: [] })
  wrapper.vm.scrollToIndex(1)
  expect(wrapper.element.scrollTop).toBe(0)
})

test('automatic alignment does not oscillate when a row fills the viewport', () => {
  const wrapper = mountList({ itemSize: 500 })
  wrapper.vm.scrollToOffset(100)
  wrapper.vm.scrollToIndex(0, { align: 'auto' })
  wrapper.vm.scrollToIndex(0, { align: 'auto' })
  expect(wrapper.element.scrollTop).toBe(100)
})

test.each(['element', 'selector', 'resolver'])(
  'external %s target includes headers and container borders',
  async (kind) => {
    const target = createScroller()
    const scrollTarget = kind === 'element' ? target : kind === 'selector' ? `#${target.id}` : () => target
    const wrapper = mountList({ scrollTarget }, { attachTo: target })
    expect(wrapper.classes()).not.toContain('var-virtual-list--scrollable')
    expect(wrapper.element.style.height).toBe('')
    target.scrollTop = 310
    target.dispatchEvent(new Event('scroll'))
    await flush()
    expect(indices(wrapper)).toEqual([3, 4, 5, 6, 7, 8, 9, 10])
    wrapper.vm.scrollToIndex(10)
    expect(target.scrollTop).toBe(560)
  },
)

test('window scrolling measures the list origin and scrolls to the correct page offset', async () => {
  const wrapper = mountList({ scrollTarget: 'window' })
  await flush()
  expect(indices(wrapper)).toEqual([])
  vi.spyOn(window, 'scrollY', 'get').mockReturnValue(650)
  window.dispatchEvent(new Event('scroll'))
  await flush()
  expect(indices(wrapper)).toEqual([3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
  expect(document.documentElement.scrollHeight).toBe(600000)
  wrapper.vm.scrollToIndex(12)
  expect(window.scrollTo).toHaveBeenCalledWith({ top: 1000, behavior: 'auto' })
})

test.each(['#missing', '[', () => null])('missing external targets render no items: %s', async (scrollTarget) => {
  const wrapper = mountList({ scrollTarget })
  await flush()
  expect(indices(wrapper)).toEqual([])
  expect(() => wrapper.vm.scrollToIndex(5)).not.toThrow()
})

test('rebinds a reactive target resolver and removes old listeners', async () => {
  const target = ref(null)
  const wrapper = mountList({ scrollTarget: () => target.value })
  await flush()
  expect(indices(wrapper)).toEqual([])
  const first = createScroller(0)
  const remove = vi.spyOn(first, 'removeEventListener')
  first.appendChild(wrapper.element)
  target.value = first
  await flush()
  expect(indices(wrapper)).toEqual([0, 1, 2, 3, 4, 5])
  const second = createScroller(0)
  second.scrollTop = 500
  second.appendChild(wrapper.element)
  target.value = second
  await flush()
  expect(remove).toHaveBeenCalledWith('scroll', expect.any(Function))
  expect(indices(wrapper)[0]).toBe(8)
  target.value = null
  await flush()
  expect(indices(wrapper)).toEqual([])
})

test('resize observations recover hidden viewports and update changed geometry', async () => {
  const target = createScroller(0)
  const wrapper = mountList({ scrollTarget: target }, { attachTo: target })
  target.setAttribute('data-hidden', '')
  observers.at(-1).callback([])
  await flush()
  expect(indices(wrapper)).toEqual([])
  target.removeAttribute('data-hidden')
  target.dataset.viewportHeight = '400'
  observers.at(-1).callback([])
  await flush()
  expect(indices(wrapper)).toHaveLength(10)
  target.dataset.header = '100'
  wrapper.vm.resize()
  await nextTick()
  expect(indices(wrapper)).toHaveLength(8)
})

test('works without ResizeObserver and responds to a window resize', async () => {
  vi.stubGlobal('ResizeObserver', undefined)
  const wrapper = mountList()
  wrapper.element.style.height = '100px'
  window.dispatchEvent(new Event('resize'))
  await flush()
  expect(indices(wrapper)).toHaveLength(4)
})

test('disconnects observers, removes listeners, and cancels queued frames on unmount', () => {
  const wrapper = mountList()
  const remove = vi.spyOn(wrapper.element, 'removeEventListener')
  const observer = observers.at(-1)
  wrapper.element.dispatchEvent(new Event('scroll'))
  expect(frames.size).toBe(1)
  wrapper.unmount()
  expect(frames.size).toBe(0)
  expect(observer.disconnect).toHaveBeenCalled()
  expect(remove).toHaveBeenCalledWith('scroll', expect.any(Function))
})

test('KeepAlive detaches observers and restores the current window on activation', async () => {
  const shown = ref(true)
  const wrapper = mount(
    defineComponent({
      setup: () => () =>
        h(KeepAlive, null, {
          default: () => (shown.value ? h(VirtualList, { items, itemKey: 'id', itemSize: 50, overscan: 2 }) : null),
        }),
    }),
    { attachTo: document.body },
  )
  await flush()
  const list = wrapper.findComponent(VirtualList)
  list.vm.scrollToIndex(20)
  await flush()
  const observer = observers.at(-1)
  shown.value = false
  await flush()
  expect(observer.disconnect).toHaveBeenCalled()
  shown.value = true
  await flush()
  expect(indices(wrapper)[0]).toBe(18)
  expect(observers.at(-1)).not.toBe(observer)
})

test('TabItem activation measures the newly active viewport', async () => {
  const current = ref(0)
  const onRangeChange = vi.fn()
  mount(
    defineComponent({
      setup: () => () =>
        h(
          TabsItems,
          { active: current.value },
          {
            default: () => [
              h(TabItem, null, { default: () => 'First tab' }),
              h(TabItem, null, {
                default: () => h(VirtualList, { items, itemKey: 'id', itemSize: 50, onRangeChange }),
              }),
            ],
          },
        ),
    }),
    { attachTo: document.body },
  )
  await flush()
  onRangeChange.mockClear()
  current.value = 1
  await flush()
  expect(onRangeChange).toHaveBeenCalled()
})

test('List detects the full virtual content bottom in a shared scroll container', async () => {
  const target = createScroller(0)
  const data = ref(items.slice(0, 20))
  const loading = ref(false)
  const load = vi.fn(() => {
    loading.value = true
  })
  mount(
    defineComponent({
      setup: () => () =>
        h(
          List,
          { loading: loading.value, onLoad: load },
          { default: () => h(VirtualList, { items: data.value, itemKey: 'id', itemSize: 50, scrollTarget: target }) },
        ),
    }),
    { attachTo: target },
  )
  await flush()
  expect(load).not.toHaveBeenCalled()
  target.scrollTop = 800
  target.dispatchEvent(new Event('scroll'))
  await flush()
  expect(load).toHaveBeenCalledTimes(1)
  data.value = items.slice(0, 40)
  loading.value = false
  await flush()
  expect(load).toHaveBeenCalledTimes(1)
  target.scrollTop = 1800
  target.dispatchEvent(new Event('scroll'))
  await flush()
  expect(load).toHaveBeenCalledTimes(2)
})

test('server rendering uses a bounded initial window without resolving browser targets', async () => {
  const resolve = vi.fn(() => {
    throw new Error('Browser target must not be resolved')
  })
  vi.stubGlobal('window', undefined)
  const app = createSSRApp(VirtualList, {
    items,
    itemKey: 'id',
    itemSize: 50,
    height: 200,
    overscan: 2,
    scrollTarget: resolve,
  })
  const html = await renderToString(app)
  expect(html.match(/role="listitem"/g)).toHaveLength(6)
  expect(html).toContain('height:500000px')
  expect(resolve).not.toHaveBeenCalled()
})

test.each([
  [0, 20, [0, 0, 0, 0]],
  [20, 80, [1, 1, 1, 1]],
  [19.5, 80.5, [0, 2, 0, 2]],
  [-20, 10, [0, 0, 0, 0]],
  [110, 150, [-1, -1, -1, -1]],
])('variable range uses cumulative boundaries at %s..%s', (start, end, expected) => {
  expect(Object.values(getVirtualListRange(3, [0, 20, 80, 110], start, end, 0))).toEqual(expected)
})

test('binary range lookup agrees with intersecting unequal rows', () => {
  const offsets = [0]
  for (let index = 0; index < 200; index++) {
    offsets.push(offsets[index] + 1 + ((index * 17) % 93) / 2)
  }
  for (let start = -20; start < offsets.at(-1) + 100; start += 13.25) {
    const end = start + 79.5
    const visible = offsets
      .slice(0, -1)
      .flatMap((top, index) => (top < end && offsets[index + 1] > start ? [index] : []))
    const range = getVirtualListRange(200, offsets, start, end, 3)
    expect(range.visibleStart).toBe(visible[0] ?? -1)
    expect(range.visibleEnd).toBe(visible.at(-1) ?? -1)
  }
})

test('item-size functions support unequal known heights and scroll alignment', async () => {
  const wrapper = mountList({
    items: items.slice(0, 20),
    itemSize: (_, index) => (index % 2 ? 80 : 20),
    height: 100,
    overscan: 0,
  })
  expect(indices(wrapper)).toEqual([0, 1])
  expect(wrapper.findAll('.var-virtual-list__item').map((row) => row.element.style.height)).toEqual(['20px', '80px'])
  wrapper.vm.scrollToIndex(3, { align: 'end' })
  await flush()
  expect(wrapper.element.scrollTop).toBe(100)
  expect(indices(wrapper)).toEqual([2, 3])
  expect(wrapper.find('.var-virtual-list__items').element.style.transform).toBe('translateY(100px)')
})

test.each(['internal', 'element', 'selector', 'resolver', 'window'])(
  'anchors a partially visible item across prepends in the %s target',
  async (kind) => {
    const target = kind === 'internal' || kind === 'window' ? undefined : createScroller()
    const scrollTarget =
      kind === 'window' ? 'window' : kind === 'selector' ? `#${target.id}` : kind === 'resolver' ? () => target : target
    const data = ref(items.slice(0, 100))
    const onRangeChange = vi.fn()
    const wrapper = mount(
      defineComponent({
        setup: () => () =>
          h(VirtualList, {
            items: data.value,
            itemKey: 'id',
            itemSize: 50,
            preserveScrollPosition: true,
            scrollTarget,
            onRangeChange,
          }),
      }),
      { attachTo: target ?? document.body },
    )
    const list = wrapper.findComponent(VirtualList)
    list.vm.scrollToOffset(512)
    await flush()
    const before = kind === 'window' ? window.scrollY : (target ?? list.element).scrollTop
    data.value.unshift({ id: -2 }, { id: -1 })
    await flush()
    expect(kind === 'window' ? window.scrollY : (target ?? list.element).scrollTop).toBe(before + 100)
    expect(onRangeChange.mock.lastCall[0].visibleStart).toBe(12)
    data.value = data.value.slice(1)
    await flush()
    expect(kind === 'window' ? window.scrollY : (target ?? list.element).scrollTop).toBe(before + 50)
  },
)

test('position preservation is opt-in and deletion of the anchor is safe', async () => {
  const wrapper = mountList({ items: items.slice(0, 100) })
  wrapper.vm.scrollToOffset(512)
  await wrapper.setProps({ items: [{ id: -1 }, ...items.slice(0, 100)] })
  await flush()
  expect(wrapper.element.scrollTop).toBe(512)
  await wrapper.setProps({ preserveScrollPosition: true, items: [] })
  await flush()
  expect(wrapper.element.scrollTop).toBe(0)
})

test('prepending does not pull a window viewport into an offscreen list', async () => {
  const wrapper = mountList({ scrollTarget: 'window', preserveScrollPosition: true })
  await flush()
  window.scrollTo.mockClear()
  await wrapper.setProps({ items: [{ id: -1 }, ...items] })
  await flush()
  expect(window.scrollTo).not.toHaveBeenCalled()
})

test.each([
  [{}, {}],
  [{ id: 1 }, { id: 1 }],
  [{ id: NaN }, { id: 2 }],
])('warns once per instance for invalid keys and avoids sharing row identity', async (...data) => {
  const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
  const wrapper = mountList({ items: data, itemSize: 50 })
  await wrapper.setProps({ items: [...data, {}] })
  await flush()
  expect(warn).toHaveBeenCalledExactlyOnceWith(expect.stringContaining('"item-key"'))
  expect(indices(wrapper)).toHaveLength(data.length + 1)
})

test('checks function keys and invalid size results as well as property keys', () => {
  const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
  const wrapper = mountList({ items: items.slice(0, 2), itemKey: () => undefined, itemSize: () => NaN })
  expect(warn).toHaveBeenCalledTimes(2)
  expect(wrapper.find('.var-virtual-list__spacer').element.style.height).toBe('2px')
})

function mountDynamic(props = {}, options = {}) {
  return mountList(
    { items: items.slice(0, 100), dynamic: true, ...props },
    {
      slots: { default: ({ item }) => h('div', { 'data-row-height': item.height ?? 50 }, item.label) },
      ...options,
    },
  )
}

test('dynamic rows measure natural content and preserve the visible anchor when an earlier row grows', async () => {
  const data = items.slice(0, 100).map((item) => ({ ...item, height: 50 }))
  data[0].height = 100
  const onRangeChange = vi.fn()
  const wrapper = mountDynamic({ items: data, onRangeChange })
  await flush()
  expect(wrapper.find('.var-virtual-list__item').element.style.height).toBe('')
  expect(wrapper.find('.var-virtual-list__spacer').element.style.height).toBe('5050px')
  wrapper.vm.scrollToOffset(125)
  await flush()
  const row = wrapper.find('.var-virtual-list__item').element
  expect(observers.at(-1).elements.has(row)).toBe(true)
  row.firstElementChild.dataset.rowHeight = '150'
  observers.at(-1).callback([{ target: row }])
  await flush()
  await flush()
  expect(wrapper.element.scrollTop).toBe(175)
  expect(wrapper.find('.var-virtual-list__spacer').element.style.height).toBe('5100px')
  expect(onRangeChange.mock.lastCall[0].visibleStart).toBe(1)
})

test('dynamic heights are cached by key across scrolling and prepending', async () => {
  const data = items.slice(0, 100).map((item) => ({ ...item, height: item.id === 0 ? 100 : 50 }))
  const wrapper = mountDynamic({ items: data, overscan: 0, preserveScrollPosition: true })
  await flush()
  wrapper.vm.scrollToOffset(1000)
  await flush()
  expect(wrapper.find('.var-virtual-list__spacer').element.style.height).toBe('5050px')
  await wrapper.setProps({ items: [{ id: -1, height: 50 }, ...data] })
  await flush()
  expect(wrapper.element.scrollTop).toBe(1050)
  expect(wrapper.find('.var-virtual-list__spacer').element.style.height).toBe('5100px')
  wrapper.vm.resetMeasurements()
  await flush()
  expect(wrapper.find('.var-virtual-list__spacer').element.style.height).toBe('5050px')
  expect(wrapper.element.scrollTop).toBe(1000)
})

test('replacing a row invalidates its old measured height, even with the same key', async () => {
  const wrapper = mountDynamic({ items: [{ id: 0, height: 100 }, ...items.slice(1, 100)] })
  await flush()
  await wrapper.setProps({ items: [{ id: 0, height: 70 }, ...items.slice(1, 100)] })
  await flush()
  expect(wrapper.find('.var-virtual-list__spacer').element.style.height).toBe('5020px')
})

test('dynamic rows can be remeasured manually without ResizeObserver', async () => {
  vi.stubGlobal('ResizeObserver', undefined)
  const wrapper = mountDynamic()
  await flush()
  wrapper.find('.var-virtual-list__item').element.firstElementChild.dataset.rowHeight = '125'
  wrapper.vm.resize()
  await flush()
  expect(wrapper.find('.var-virtual-list__spacer').element.style.height).toBe('5075px')
})

test.each([
  ['50vh', undefined, 8],
  ['100%', undefined, 8],
  ['1rem', undefined, 8],
  ['50vh', 120, 5],
  ['200px', undefined, 6],
])('SSR height %s with estimate %s has a deterministic bounded window', async (height, ssrHeight, count) => {
  const browserWindow = window
  vi.stubGlobal('window', undefined)
  const props = { items, itemKey: 'id', itemSize: 50, height, ssrHeight, overscan: 2 }
  const html = await renderToString(createSSRApp(VirtualList, props))
  expect(html.match(/role="listitem"/g)).toHaveLength(count)
  vi.stubGlobal('window', browserWindow)
  const container = document.createElement('div')
  container.innerHTML = html
  container.firstElementChild.dataset.viewportHeight = '200'
  document.body.appendChild(container)
  const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
  const app = createSSRApp(VirtualList, props)
  app.mount(container)
  await flush()
  expect(container.querySelectorAll('[role="listitem"]')).toHaveLength(6)
  expect(warn).not.toHaveBeenCalled()
  app.unmount()
})

test.each(['element', 'window'])('dynamic measurements preserve the anchor for %s scrolling', async (kind) => {
  const target = kind === 'element' ? createScroller(60) : undefined
  const wrapper = mountDynamic({ scrollTarget: target ?? 'window' }, { attachTo: target ?? document.body })
  wrapper.vm.scrollToOffset(512)
  await flush()
  const before = target ? target.scrollTop : window.scrollY
  const first = wrapper.find('.var-virtual-list__item').element
  first.firstElementChild.dataset.rowHeight = '85'
  observers.at(-1).callback([{ target: first }])
  await flush()
  await flush()
  expect(target ? target.scrollTop : window.scrollY).toBe(before + 35)
})

test('width changes invalidate offscreen measurements while retaining the visible anchor', async () => {
  let width = 320
  vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockImplementation(() => width)
  const wrapper = mountDynamic({ items: [{ id: 0, height: 100 }, ...items.slice(1, 100)], overscan: 0 })
  await flush()
  wrapper.vm.scrollToOffset(1000)
  await flush()
  width = 240
  observers.at(-1).callback([])
  await flush()
  await flush()
  expect(wrapper.find('.var-virtual-list__spacer').element.style.height).toBe('5000px')
  expect(wrapper.element.scrollTop).toBe(950)
})

test.each(['internal', 'element', 'window'])(
  'explicit scrolling wins over initial measurement correction in the %s target',
  async (kind) => {
    const target = kind === 'element' ? createScroller(60) : undefined
    const wrapper = mountDynamic(
      {
        items: [{ id: 0, height: 100 }, ...items.slice(1, 100)],
        scrollTarget: target ?? (kind === 'window' ? 'window' : undefined),
      },
      { attachTo: target ?? document.body },
    )
    wrapper.vm.scrollToOffset(1000)
    const expected = kind === 'window' ? 1400 : kind === 'element' ? 1060 : 1000
    const scrollTop = () => (kind === 'window' ? window.scrollY : (target ?? wrapper.element).scrollTop)
    expect(scrollTop()).toBe(expected)
    await flush()
    await flush()
    expect(scrollTop()).toBe(expected)
  },
)

test.each(
  ['offset', 'index', 'auto', 'latest'].flatMap((method) => [
    [method, false],
    [method, true],
  ]),
)('explicit %s scrolling cancels anchor correction (after watcher: %s)', async (method, afterWatcher) => {
  const wrapper = mountDynamic()
  await flush()
  wrapper.find('.var-virtual-list__item').element.firstElementChild.dataset.rowHeight = '100'
  wrapper.vm.resize()
  if (afterWatcher) {
    await nextTick()
  }
  if (method === 'offset' || method === 'latest') {
    wrapper.vm.scrollToOffset(1000)
    if (method === 'latest') {
      wrapper.vm.scrollToOffset(1500)
    }
  } else {
    wrapper.vm.scrollToIndex(method === 'auto' ? 0 : 20, { align: method === 'auto' ? 'auto' : 'start' })
  }
  const expected = method === 'auto' ? 0 : method === 'index' ? 1050 : method === 'latest' ? 1500 : 1000
  expect(wrapper.element.scrollTop).toBe(expected)
  await flush()
  await flush()
  expect(wrapper.element.scrollTop).toBe(expected)
})

test('new measurements after an explicit scroll compensate from its layout snapshot', async () => {
  const wrapper = mountDynamic()
  await flush()
  const row = wrapper.find('.var-virtual-list__item').element.firstElementChild
  row.dataset.rowHeight = '100'
  wrapper.vm.resize()
  wrapper.vm.scrollToOffset(1000)
  row.dataset.rowHeight = '150'
  wrapper.vm.resize()
  await flush()
  await flush()
  expect(wrapper.element.scrollTop).toBe(1050)
})
