<template>
  <div
    ref="root"
    role="list"
    :tabindex="external ? undefined : 0"
    :class="classes(n(), n('$--box'), [!external, n('--scrollable')])"
    :style="{ height: external ? undefined : toSizeUnit(height) }"
  >
    <div ref="spacer" :class="n('spacer')" :style="{ height: `${totalSize}px` }">
      <div :class="n('items')" :style="{ transform: `translateY(${Math.max(0, range.start) * size}px)` }">
        <div
          v-for="entry in entries"
          :key="entry.key"
          role="listitem"
          :aria-posinset="entry.index + 1"
          :aria-setsize="items.length"
          :class="n('item')"
          :style="{ height: `${size}px` }"
        >
          <slot :item="entry.item" :index="entry.index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { call, inBrowser, isWindow } from '@varlet/shared'
import { onSmartMounted } from '@varlet/use'
import { computed, defineComponent, nextTick, onBeforeUnmount, onDeactivated, ref, watch } from 'vue'
import { useTabItem } from '../list/provide'
import { createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { props, type VirtualListKey, type VirtualListRange, type VirtualListScrollToOptions } from './props'
import { getVirtualListRange } from './range'

const { name, n, classes } = createNamespace('virtual-list')

export default defineComponent({
  name,
  props,
  setup(props) {
    const root = ref<HTMLElement>()
    const spacer = ref<HTMLElement>()
    const external = computed(() => props.scrollTarget != null)
    const size = computed(() => (Number.isFinite(props.itemSize) && props.itemSize! > 0 ? props.itemSize! : 1))
    const buffer = computed(() => (Number.isFinite(props.overscan) ? Math.max(0, Math.floor(props.overscan)) : 5))
    const totalSize = computed(() => props.items.length * size.value)
    // A bounded, deterministic initial window also works during server rendering.
    const initialHeight =
      typeof props.height === 'number'
        ? props.height
        : /^\d+(\.\d+)?px$/.test(props.height)
          ? parseFloat(props.height)
          : 300
    const viewportStart = ref(0)
    const viewportEnd = ref(Number.isFinite(initialHeight) ? Math.max(0, initialHeight) : 300)
    const range = computed(() =>
      getVirtualListRange(props.items.length, size.value, viewportStart.value, viewportEnd.value, buffer.value),
    )
    const entries = computed(() => {
      const result: Array<{ item: any; index: number; key: VirtualListKey }> = []
      if (range.value.start < 0) {
        return result
      }
      for (let index = range.value.start; index <= range.value.end; index++) {
        const item = props.items[index]
        const key = typeof props.itemKey === 'function' ? props.itemKey(item, index) : item?.[props.itemKey!]
        result.push({ item, index, key })
      }
      return result
    })
    const { tabItem } = useTabItem()

    let running = false
    let scroller: HTMLElement | Window | null = null
    let observer: ResizeObserver | undefined
    let frame: number | undefined
    let previousRange: VirtualListRange | undefined

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
    function scrollToOffset(offset: number, behavior: ScrollBehavior = 'auto') {
      if (!running || !Number.isFinite(offset)) {
        return
      }
      resize()
      if (!scroller || !spacer.value || root.value?.getClientRects().length === 0) {
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
      resize()
      scheduleResize()
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
      const targetIndex = Math.min(props.items.length - 1, Math.max(0, Math.floor(index)))
      const start = targetIndex * size.value
      const end = start + size.value
      const { height } = getViewport()
      let offset = start
      if (align === 'center') {
        offset = start - (height - size.value) / 2
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

    return {
      root,
      spacer,
      external,
      size,
      totalSize,
      range,
      entries,
      n,
      classes,
      toSizeUnit,
      resize,
      scrollToIndex,
      scrollToOffset,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './virtualList';
</style>
