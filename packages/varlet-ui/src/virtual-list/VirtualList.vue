<template>
  <div
    ref="root"
    role="list"
    :tabindex="external ? undefined : 0"
    :class="classes(n(), n('$--box'), [!external, n('--scrollable')], [dynamic, n('--dynamic')])"
    :style="{ height: external ? undefined : toSizeUnit(height) }"
  >
    <div ref="spacer" :class="n('spacer')" :style="{ height: `${totalSize}px` }">
      <div
        :class="n('items')"
        :style="{ transform: `translateY(${getItemOffset(layout.sizes, Math.max(0, range.start))}px)` }"
      >
        <div
          v-for="entry in entries"
          :key="entry.key"
          :ref="(element) => setItemRef(element, entry.key)"
          role="listitem"
          :aria-posinset="entry.index + 1"
          :aria-setsize="items.length"
          :class="n('item')"
          :style="dynamic ? undefined : { height: `${entry.size}px` }"
        >
          <slot :item="entry.item" :index="entry.index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { call, inBrowser, isWindow, warn } from '@varlet/shared'
import { onSmartMounted } from '@varlet/use'
import {
  computed,
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onDeactivated,
  ref,
  watch,
  type ComponentPublicInstance,
} from 'vue'
import { useTabItem } from '../tab-item/provide'
import { createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { isDevelopment } from './environment'
import { props, type VirtualListKey, type VirtualListRange, type VirtualListScrollToOptions } from './props'
import { getItemOffset, getVirtualListRange, type VirtualListSizes } from './range'

const { name, n, classes } = createNamespace('virtual-list')

export default defineComponent({
  name,
  props,
  setup(props) {
    const root = ref<HTMLElement>()
    const spacer = ref<HTMLElement>()
    const external = computed(() => props.scrollTarget != null)
    type RowKey = VirtualListKey | symbol
    const measurements = new Map<RowKey, { item: any; size: number }>()
    const itemElements = new Map<RowKey, HTMLElement>()
    const measurementVersion = ref(0)
    let warnedKey = false
    let warnedSize = false
    const rows = computed(() => {
      const keys = new Set<VirtualListKey>()
      return props.items.map((item, index) => {
        const key = typeof props.itemKey === 'function' ? props.itemKey(item, index) : item?.[props.itemKey!]
        const valid = (typeof key === 'string' || (typeof key === 'number' && Number.isFinite(key))) && !keys.has(key)
        keys.add(key)
        if (!valid && !warnedKey && isDevelopment()) {
          warnedKey = true
          warn('VirtualList', '"item-key" must return a unique, stable string or finite number for every item.')
        }
        // Invalid keys must not share DOM nodes or measurement cache entries.
        return { item, index, key: valid ? key : Symbol(index), valid }
      })
    })
    const layout = computed(() => {
      const version = measurementVersion.value
      const currentRows = rows.value
      const estimate = (item: any, index: number) => {
        const value = typeof props.itemSize === 'function' ? props.itemSize(item, index) : props.itemSize
        if (Number.isFinite(value) && value! > 0) {
          return value!
        }
        if (!warnedSize && isDevelopment()) {
          warnedSize = true
          warn('VirtualList', '"item-size" must return a finite positive number. Falling back to 1px.')
        }
        return 1
      }
      let sizes: VirtualListSizes
      if (!props.dynamic && typeof props.itemSize !== 'function') {
        sizes = estimate(undefined, 0)
      } else {
        const offsets = [0]
        currentRows.forEach(({ item, index, key }) => {
          const cached = props.dynamic ? measurements.get(key) : undefined
          const size = cached && cached.item === item ? cached.size : estimate(item, index)
          offsets.push(offsets[index] + size)
        })
        sizes = offsets
      }
      return {
        rows: currentRows,
        sizes,
        version,
        indices: new Map(currentRows.map((row) => [row.key, row.index])),
        total: getItemOffset(sizes, currentRows.length),
      }
    })
    const buffer = computed(() => (Number.isFinite(props.overscan) ? Math.max(0, Math.floor(props.overscan)) : 5))
    const totalSize = computed(() => layout.value.total)
    // CSS-relative units cannot be resolved on the server. Keep hydration deterministic.
    const initialHeight =
      props.ssrHeight ??
      (typeof props.height === 'number'
        ? props.height
        : /^\d+(\.\d+)?px$/.test(props.height)
          ? parseFloat(props.height)
          : 300)
    const viewportStart = ref(0)
    const viewportEnd = ref(Number.isFinite(initialHeight) ? Math.max(0, initialHeight) : 300)
    const range = computed(() =>
      getVirtualListRange(props.items.length, layout.value.sizes, viewportStart.value, viewportEnd.value, buffer.value),
    )
    const entries = computed(() => {
      const result = []
      for (let index = range.value.start; index >= 0 && index <= range.value.end; index++) {
        result.push({
          ...layout.value.rows[index],
          size: getItemOffset(layout.value.sizes, index + 1) - getItemOffset(layout.value.sizes, index),
        })
      }
      return result
    })
    const { tabItem } = useTabItem()

    let running = false
    let scroller: HTMLElement | Window | null = null
    let observer: ResizeObserver | undefined
    let frame: number | undefined
    let previousRange: VirtualListRange | undefined
    let measuredWidth: number | undefined
    let scrollSnapshot: typeof layout.value | undefined
    let pendingAnchor: { key: RowKey; offset: number; target: HTMLElement | Window } | undefined

    function setItemRef(element: Element | ComponentPublicInstance | null, key: RowKey) {
      const previous = itemElements.get(key)
      if (previous && previous !== element) {
        observer?.unobserve(previous)
        itemElements.delete(key)
      }
      if (element instanceof HTMLElement) {
        itemElements.set(key, element)
        if (props.dynamic) {
          observer?.observe(element)
        }
      }
    }

    function measureItems() {
      if (!props.dynamic) {
        return
      }
      let changed = false
      itemElements.forEach((element, key) => {
        const index = layout.value.indices.get(key)
        if (index == null) {
          return
        }
        const item = props.items[index]
        const size = element.getBoundingClientRect().height
        const cached = measurements.get(key)
        if (Number.isFinite(size) && size > 0 && (cached?.size !== size || cached?.item !== item)) {
          measurements.set(key, { item, size })
          changed = true
        }
      })
      if (changed) {
        measurementVersion.value++
      }
    }

    // expose: invalidate heights for offscreen content changed by the application.
    function resetMeasurements() {
      measurements.clear()
      measurementVersion.value++
      nextTick(resize)
    }

    watch(rows, (currentRows) => {
      const current = new Map(currentRows.map((row) => [row.key, row.item]))
      measurements.forEach((cached, key) => {
        if (!current.has(key) || current.get(key) !== cached.item) {
          measurements.delete(key)
        }
      })
    })
    watch(
      () => [props.itemSize, props.itemKey, props.dynamic],
      () => {
        resetMeasurements()
        itemElements.forEach((element) => {
          if (props.dynamic) {
            observer?.observe(element)
          } else {
            observer?.unobserve(element)
          }
        })
      },
    )
    watch(layout, (current, previousLayout) => {
      // A public scroll may already use measurements queued for this watcher.
      const previous = scrollSnapshot ?? previousLayout
      scrollSnapshot = undefined
      if (
        current === previous ||
        !running ||
        !scroller ||
        !spacer.value ||
        tabItem?.current.value === false ||
        (!props.preserveScrollPosition && current.version === previous.version) ||
        root.value?.getClientRects().length === 0
      ) {
        nextTick(resize)
        return
      }
      if (!pendingAnchor) {
        const start = getViewport().top - spacer.value.getBoundingClientRect().top
        const visible = getVirtualListRange(
          previous.rows.length,
          previous.sizes,
          start,
          start + getViewport().height,
          0,
        )
        const row = previous.rows[visible.visibleStart]
        // Do not pull an external viewport into a list that is currently outside it.
        if (start < 0 || !row?.valid) {
          nextTick(resize)
          return
        }
        const anchor = { key: row.key, offset: start - getItemOffset(previous.sizes, row.index), target: scroller }
        pendingAnchor = anchor
        nextTick(() => {
          // A newer explicit scroll or anchor invalidates this queued correction.
          if (pendingAnchor !== anchor) {
            return
          }
          pendingAnchor = undefined
          if (!running || scroller !== anchor.target) {
            return
          }
          const index = layout.value.indices.get(anchor.key)
          if (index != null) {
            setScrollOffset(getItemOffset(layout.value.sizes, index) + anchor.offset)
          }
          resize()
        })
      }
    })

    function resolveTarget(): HTMLElement | Window | null {
      if (!inBrowser()) {
        return null
      }
      if (!external.value) {
        return root.value ?? null
      }
      try {
        const target = typeof props.scrollTarget === 'function' ? props.scrollTarget() : props.scrollTarget
        if (target === 'window' || isWindow(target)) {
          return window
        }
        const element = typeof target === 'string' ? document.querySelector(target) : target
        return element instanceof HTMLElement ? element : null
      } catch {
        return null
      }
    }

    function getViewport() {
      if (isWindow(scroller)) {
        return { top: 0, height: window.innerHeight }
      }
      const element = scroller as HTMLElement
      return { top: element.getBoundingClientRect().top + element.clientTop, height: element.clientHeight }
    }

    function notifyRange() {
      if (!running || tabItem?.current.value === false) {
        return
      }
      const value = range.value
      if (
        !previousRange ||
        Object.keys(value).some(
          (key) => value[key as keyof VirtualListRange] !== previousRange![key as keyof VirtualListRange],
        )
      ) {
        previousRange = { ...value }
        call(props.onRangeChange, { ...value })
      }
    }

    function removeListeners() {
      scroller?.removeEventListener('scroll', scheduleResize)
      window.removeEventListener('resize', scheduleResize)
      window.removeEventListener('scroll', scheduleResize, true)
      observer?.disconnect()
      observer = undefined
      scroller = null
    }

    function bindScroller() {
      const target = resolveTarget()
      if (target === scroller) {
        return
      }
      removeListeners()
      scroller = target
      if (!target) {
        return
      }
      target.addEventListener('scroll', scheduleResize, { passive: true })
      window.addEventListener('resize', scheduleResize, { passive: true })
      if (external.value && !isWindow(target)) {
        window.addEventListener('scroll', scheduleResize, { passive: true, capture: true })
      }
      if (typeof ResizeObserver !== 'undefined') {
        observer = new ResizeObserver(scheduleResize)
        let element: HTMLElement | null | undefined = root.value
        while (element) {
          observer.observe(element)
          if (element === target) {
            break
          }
          element = element.parentElement
        }
        if (props.dynamic) {
          itemElements.forEach((element) => observer!.observe(element))
        }
      }
    }

    // expose
    function resize() {
      if (!running || !root.value || !spacer.value || tabItem?.current.value === false) {
        return
      }
      bindScroller()
      if (!scroller || root.value.getClientRects().length === 0) {
        viewportStart.value = 0
        viewportEnd.value = 0
        notifyRange()
        return
      }
      const viewport = getViewport()
      if (!external.value) {
        const element = scroller as HTMLElement
        element.scrollTop = Math.min(element.scrollTop, Math.max(0, element.scrollHeight - element.clientHeight))
      }
      const top = spacer.value.getBoundingClientRect().top
      viewportStart.value = viewport.top - top
      viewportEnd.value = viewport.top + viewport.height - top
      const width = root.value.clientWidth
      if (props.dynamic && width > 0) {
        if (measuredWidth != null && measuredWidth !== width) {
          measurements.clear()
          measurementVersion.value++
        }
        measuredWidth = width
      }
      measureItems()
      notifyRange()
    }

    function scheduleResize() {
      if (!running || frame != null) {
        return
      }
      frame = window.requestAnimationFrame(() => {
        frame = undefined
        resize()
      })
    }

    // Offsets are relative to the list, even when the scroll container has a header.
    function cancelPendingAnchor() {
      scrollSnapshot = layout.value
      pendingAnchor = undefined
    }

    function scrollToOffset(offset: number, behavior: ScrollBehavior = 'auto') {
      if (!running || !Number.isFinite(offset)) {
        return
      }
      resize()
      if (!scroller || !spacer.value || root.value?.getClientRects().length === 0) {
        return
      }
      cancelPendingAnchor()
      setScrollOffset(offset, behavior)
      resize()
      scheduleResize()
    }

    function setScrollOffset(offset: number, behavior: ScrollBehavior = 'auto') {
      if (!scroller || !spacer.value) {
        return
      }
      const viewport = getViewport()
      const scrollTop = isWindow(scroller) ? window.scrollY : scroller.scrollTop
      const origin = scrollTop + spacer.value.getBoundingClientRect().top - viewport.top
      const max = isWindow(scroller)
        ? (document.scrollingElement ?? document.documentElement).scrollHeight - window.innerHeight
        : scroller.scrollHeight - scroller.clientHeight
      const top = Math.max(0, Math.min(Math.max(0, max), origin + Math.max(0, Math.min(totalSize.value, offset))))
      if (typeof scroller.scrollTo === 'function') {
        scroller.scrollTo({ top, behavior })
      } else if (!isWindow(scroller)) {
        scroller.scrollTop = top
      }
    }

    // expose
    function scrollToIndex(index: number, { align = 'start', behavior = 'auto' }: VirtualListScrollToOptions = {}) {
      if (!running || !props.items.length || !Number.isFinite(index)) {
        return
      }
      resize()
      if (!scroller) {
        return
      }
      cancelPendingAnchor()
      const targetIndex = Math.min(props.items.length - 1, Math.max(0, Math.floor(index)))
      const start = getItemOffset(layout.value.sizes, targetIndex)
      const end = getItemOffset(layout.value.sizes, targetIndex + 1)
      const size = end - start
      const { height } = getViewport()
      let offset = start
      if (align === 'center') {
        offset = start - (height - size) / 2
      } else if (align === 'end') {
        offset = end - height
      } else if (align === 'auto') {
        if (
          (start >= viewportStart.value && end <= viewportEnd.value) ||
          (start <= viewportStart.value && end >= viewportEnd.value)
        ) {
          return
        }
        offset = start < viewportStart.value ? start : end - height
      }
      scrollToOffset(offset, behavior)
    }

    onSmartMounted(() => {
      running = true
      resize()
    })

    function stop() {
      running = false
      pendingAnchor = undefined
      scrollSnapshot = undefined
      removeListeners()
      if (frame != null) {
        window.cancelAnimationFrame(frame)
        frame = undefined
      }
    }

    onBeforeUnmount(stop)
    onDeactivated(stop)
    watch(resolveTarget, () => nextTick(resize), { flush: 'post' })
    watch(
      () => [props.items.length, props.itemSize, props.height, props.overscan],
      () => nextTick(resize),
      { flush: 'post' },
    )
    if (tabItem) {
      watch(
        () => tabItem.current.value,
        () => nextTick(resize),
        { flush: 'post' },
      )
    }
    watch(range, notifyRange, { flush: 'post' })
    watch(
      entries,
      () => {
        if (props.dynamic) {
          nextTick(resize)
        }
      },
      { flush: 'post' },
    )

    return {
      root,
      spacer,
      external,
      layout,
      getItemOffset,
      setItemRef,
      totalSize,
      range,
      entries,
      n,
      classes,
      toSizeUnit,
      resize,
      scrollToIndex,
      scrollToOffset,
      resetMeasurements,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './virtualList';
</style>
