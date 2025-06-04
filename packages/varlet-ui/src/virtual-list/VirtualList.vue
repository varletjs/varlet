<template>
  <div ref="containerRef" :class="n()" :style="containerStyle" @scroll.passive="handleScroll">
    <!-- 用于撑开滚动区域的幽灵层 -->
    <div :class="n('phantom')" :style="{ height: `${phantomHeight}px` }" />
    <!-- 实际渲染的内容层 -->
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
import { props } from './props'

// 定义缓存位置接口
interface CachedPosition {
  index: number // 列表项索引
  top: number // 距离顶部位置
  bottom: number // 距离底部位置
  height: number // 高度
  dValue: number // 高度差值
}

// 比较结果枚举
enum CompareResult {
  eq = 1, // 相等
  lt, // 小于
  gt, // 大于
}

/**
 * 二分查找算法
 * 用于快速定位滚动位置对应的列表项索引
 */
function binarySearch<T, VT>(list: T[], value: VT, compareFunc: (current: T, value: VT) => CompareResult) {
  let start = 0
  let end = list.length - 1
  let tempIndex = null

  while (start <= end) {
    tempIndex = Math.floor((start + end) / 2)
    const midValue = list[tempIndex]

    const compareRes: CompareResult = compareFunc(midValue, value)
    if (compareRes === CompareResult.eq) {
      return tempIndex
    }

    if (compareRes === CompareResult.lt) {
      start = tempIndex + 1
    } else if (compareRes === CompareResult.gt) {
      end = tempIndex - 1
    }
  }

  return tempIndex
}

const { name, n } = createNamespace('virtual-list')

export default defineComponent({
  name,
  props,
  setup(props) {
    // DOM引用
    const containerRef = ref<HTMLElement | null>(null) // 容器元素
    const contentRef = ref<HTMLElement | null>(null) // 内容元素

    // 虚拟滚动状态
    const state = reactive({
      start: 0, // 当前渲染的起始索引
      originStartIndex: 0, // 原始起始索引（不含缓冲区）
      scrollTop: 0, // 当前滚动位置
      cachePositions: [] as CachedPosition[], // 缓存的位置信息
      phantomHeight: 0, // 幽灵层高度
    })

    // 容器样式
    const containerStyle = computed(() => {
      if (props.containerHeight) {
        return {
          height: typeof props.containerHeight === 'number' ? `${props.containerHeight}px` : props.containerHeight,
        }
      }
      return {}
    })

    // 可见列表项数量
    const visibleCount = computed(() => {
      if (!containerRef.value) {
        return 0
      }
      return Math.ceil(containerRef.value.clientHeight / toNumber(props.itemHeight))
    })

    // 结束索引（起始索引 + 可见数量 + 缓冲区大小）
    const end = computed(() => {
      return Math.min(state.originStartIndex + visibleCount.value + props.bufferSize, props.data.length)
    })

    // 可见数据
    const visibleData = computed(() => {
      return props.data.slice(state.start, end.value)
    })

    /**
     * 获取内容层的变换样式
     * 根据起始索引计算偏移量
     */
    const getTransform = () => {
      if (contentRef.value) {
        return `translate3d(0, ${state.start >= 1 ? state.cachePositions[state.start - 1].bottom : 0}px, 0)`
      }
      return 'translate3d(0, 0, 0)'
    }

    /**
     * 初始化缓存位置
     * 根据列表项高度计算每项的位置信息
     */
    const initCachedPosition = () => {
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

    /**
     * 更新缓存位置
     * 根据实际渲染的DOM元素高度更新位置信息
     */
    const updateCachedPosition = () => {
      if (!contentRef.value) {
        return
      }

      // 获取内容层中的所有元素节点
      const nodes = Array.from(contentRef.value.childNodes).filter((node: Node) => node.nodeType === 1) as HTMLElement[]

      // 更新每个可见元素的高度信息
      nodes.forEach((node: HTMLElement, index: number) => {
        if (!node) {
          return
        }
        const height = node.offsetHeight
        const oldHeight = state.cachePositions[index + state.start].height
        const dValue = oldHeight - height

        if (dValue) {
          state.cachePositions[index + state.start].bottom -= dValue
          state.cachePositions[index + state.start].height = height
          state.cachePositions[index + state.start].dValue = dValue
        }
      })

      // 更新后续元素的位置信息
      const startIndex = state.start
      const cachedPositionsLen = state.cachePositions.length
      let cumulativeDiffHeight = state.cachePositions[startIndex].dValue
      state.cachePositions[startIndex].dValue = 0

      for (let i = startIndex + 1; i < cachedPositionsLen; ++i) {
        const item = state.cachePositions[i]

        state.cachePositions[i].top = state.cachePositions[i - 1].bottom
        state.cachePositions[i].bottom = state.cachePositions[i].bottom - cumulativeDiffHeight

        if (item.dValue !== 0) {
          cumulativeDiffHeight += item.dValue
          item.dValue = 0
        }
      }

      // 更新幽灵层高度
      const height = state.cachePositions[cachedPositionsLen - 1]?.bottom || 0
      state.phantomHeight = height
    }

    /**
     * 获取滚动位置对应的起始索引
     * 使用二分查找算法快速定位
     */
    const getStartIndex = (scrollTop = 0) => {
      let idx = binarySearch<CachedPosition, number>(
        state.cachePositions,
        scrollTop,
        (currentValue: CachedPosition, targetValue: number) => {
          const currentCompareValue = currentValue.bottom
          if (currentCompareValue === targetValue) {
            return CompareResult.eq
          }

          if (currentCompareValue < targetValue) {
            return CompareResult.lt
          }

          return CompareResult.gt
        },
      ) as number

      if (idx === null) {
        return 0
      }

      const targetItem = state.cachePositions[idx]
      if (targetItem && targetItem.bottom < scrollTop) {
        idx += 1
      }

      return idx
    }

    /**
     * 重置虚拟滚动参数
     * 当数据发生变化时调用
     */
    const resetAllVirtualParam = () => {
      state.originStartIndex = 0
      state.start = 0
      state.scrollTop = 0
      if (containerRef.value) {
        containerRef.value.scrollTop = 0
      }
      initCachedPosition()
    }

    /**
     * 处理滚动事件
     * 更新起始索引并触发回调
     */
    const handleScroll = (e: Event) => {
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

    /**
     * 滚动到指定索引位置
     * 对外暴露的方法
     */
    const scrollTo = (index: number) => {
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

    // 监听数据变化，重置虚拟滚动参数
    watch(
      () => props.data,
      (newVal, oldVal) => {
        if (newVal.length !== oldVal.length) {
          resetAllVirtualParam()
        }
      },
      { deep: true },
    )

    // 监听起始索引变化，更新缓存位置
    watch(
      () => state.start,
      () => {
        if (contentRef.value && props.data.length > 0) {
          updateCachedPosition()
        }
      },
    )

    // 组件挂载后初始化缓存位置
    onMounted(() => {
      initCachedPosition()
    })

    return {
      n,
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
