<template>
  <div ref="containerRef" :class="n()" :style="containerStyle" @scroll.passive="handleScroll">
    <!-- Phantom layer for scroll area -->
    <div :class="n('phantom')" :style="{ height: `${phantomHeight}px` }" />
    <!-- Content layer for actual rendering -->
    <div ref="contentRef" :class="n('content')" :style="{ transform: getTransform() }">
      <div v-for="(item, index) in visibleData" :key="index" :class="n('item')">
        <slot :item="item" :index="start + index" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref, toRefs, watch } from 'vue'
import { call, toNumber } from '@varlet/shared'
import { createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { props } from './props'

const { name, n, classes } = createNamespace('virtual-list')

interface CachedPosition {
  index: number
  top: number
  bottom: number
  height: number
  dValue: number
}

enum CompareResult {
  eq = 1,
  lt,
  gt,
}

// Binary search for fast index lookup
function binarySearch<T, VT>(list: T[], value: VT, compareFunc: (current: T, value: VT) => CompareResult): number {
  let start = 0
  let end = list.length - 1
  let tempIndex = 0

  while (start <= end) {
    tempIndex = Math.floor((start + end) / 2)
    const midValue = list[tempIndex]
    const compareRes = compareFunc(midValue, value)
    if (compareRes === CompareResult.eq) {
      return tempIndex
    }
    if (compareRes === CompareResult.lt) {
      start = tempIndex + 1
    } else {
      end = tempIndex - 1
    }
  }

  return tempIndex
}

export default defineComponent({
  name,
  props,
  setup(props) {
    // DOM refs
    const containerRef = ref<HTMLElement | null>(null)
    const contentRef = ref<HTMLElement | null>(null)

    // Virtual scroll state
    const state = reactive({
      start: 0,
      originStartIndex: 0,
      scrollTop: 0,
      cachePositions: [] as CachedPosition[],
      phantomHeight: 0,
    })

    // Computed container style
    const containerStyle = computed(() => {
      if (props.containerHeight) {
        return {
          height: toSizeUnit(props.containerHeight),
        }
      }
      return {}
    })

    // Number of visible items
    const visibleCount = computed(() => {
      if (!containerRef.value) {
        return 0
      }
      return Math.ceil(containerRef.value.clientHeight / toNumber(props.itemHeight))
    })

    // End index (start + visible + buffer)
    const end = computed(() => {
      return Math.min(state.originStartIndex + visibleCount.value + props.bufferSize, props.data.length)
    })

    // Visible data
    const visibleData = computed(() => {
      return props.data.slice(state.start, end.value)
    })

    // Get transform style for content layer
    const getTransform = () => {
      return `translate3d(0, ${state.start >= 1 ? state.cachePositions[state.start - 1].bottom : 0}px, 0)`
    }

    // Initialize cached positions
    function initCachedPosition() {
      state.cachePositions = []
      const itemHeight = toNumber(props.itemHeight)
      for (let i = 0; i < props.data.length; ++i) {
        state.cachePositions[i] = {
          index: i,
          height: itemHeight,
          top: i * itemHeight,
          bottom: (i + 1) * itemHeight,
          dValue: 0,
        }
      }
      state.phantomHeight = props.data.length * itemHeight
    }

    // Update cached positions based on actual DOM height
    function updateCachedPosition() {
      if (!contentRef.value) {
        return
      }
      const nodes = Array.from(contentRef.value.childNodes).filter(
        (node: Node) => node.nodeType === Node.ELEMENT_NODE,
      ) as HTMLElement[]
      nodes.forEach((node, index) => {
        const height = node.offsetHeight
        const pos = state.cachePositions[index + state.start]
        const dValue = pos.height - height
        if (dValue) {
          pos.bottom -= dValue
          pos.height = height
          pos.dValue = dValue
        }
      })
      // Update following positions
      const startIndex = state.start
      const len = state.cachePositions.length
      let cumulativeDiffHeight = state.cachePositions[startIndex].dValue
      state.cachePositions[startIndex].dValue = 0
      for (let i = startIndex + 1; i < len; ++i) {
        const prev = state.cachePositions[i - 1]
        const curr = state.cachePositions[i]
        curr.top = prev.bottom
        curr.bottom = curr.bottom - cumulativeDiffHeight
        if (curr.dValue !== 0) {
          cumulativeDiffHeight += curr.dValue
          curr.dValue = 0
        }
      }
      // Update phantom height
      state.phantomHeight = state.cachePositions[len - 1]?.bottom || 0
    }

    // Get start index for given scrollTop
    function getStartIndex(scrollTop = 0) {
      let idx = binarySearch<CachedPosition, number>(state.cachePositions, scrollTop, (current, target) => {
        const val = current.bottom
        if (val === target) {
          return CompareResult.eq
        }
        if (val < target) {
          return CompareResult.lt
        }
        return CompareResult.gt
      })
      const targetItem = state.cachePositions[idx]
      if (targetItem && targetItem.bottom < scrollTop) {
        idx += 1
      }
      return idx
    }

    // Reset all virtual scroll params
    function resetAllVirtualParam() {
      state.originStartIndex = 0
      state.start = 0
      state.scrollTop = 0
      if (containerRef.value) {
        containerRef.value.scrollTop = 0
      }
      initCachedPosition()
    }

    // Handle scroll event
    function handleScroll(e: Event) {
      if (!containerRef.value) {
        return
      }
      const scrollTop = containerRef.value.scrollTop
      const { originStartIndex } = state
      const currentIndex = getStartIndex(scrollTop)
      if (currentIndex !== originStartIndex) {
        state.originStartIndex = currentIndex
        state.start = Math.max(state.originStartIndex - props.bufferSize, 0)
      }
      state.scrollTop = scrollTop
      call(props.onScroll, e)
    }

    // Scroll to specified index
    function scrollTo(index: number) {
      if (!containerRef.value || index < 0 || index >= props.data.length) {
        return
      }
      if (state.cachePositions[index]) {
        containerRef.value.scrollTop = state.cachePositions[index].top
      } else {
        const itemHeight = toNumber(props.itemHeight)
        containerRef.value.scrollTop = index * itemHeight
      }
    }

    // Watch data changes, reset virtual params
    watch(
      () => props.data,
      (newVal, oldVal) => {
        if (newVal.length !== oldVal.length) {
          resetAllVirtualParam()
        }
      },
      { deep: true },
    )

    // Watch start index, update cached positions
    watch(
      () => state.start,
      () => {
        if (contentRef.value && props.data.length > 0) {
          updateCachedPosition()
        }
      },
    )

    // Init cached positions on mount
    onMounted(() => {
      initCachedPosition()
    })

    return {
      n,
      classes,
      containerRef,
      contentRef,
      containerStyle,
      scrollTo,
      handleScroll,
      visibleData,
      getTransform,
      ...toRefs(state),
    }
  },
})
</script>

<style lang="less">
@import './virtualList';
</style>
