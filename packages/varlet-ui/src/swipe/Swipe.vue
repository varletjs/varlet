<template>
  <div class="var-swipe" ref="swipeEl" v-bind="$attrs">
    <div
      class="var-swipe__track"
      :class="[vertical ? 'var-swipe--vertical' : null]"
      :style="{
        width: !vertical ? `${trackSize}px` : null,
        height: vertical ? `${trackSize}px` : null,
        transform: `translate${vertical ? 'Y' : 'X'}(${translate}px)`,
        transitionDuration: lockDuration ? `0ms` : `${duration}ms`,
      }"
      @touchstart="handleTouchstart"
      @touchmove.prevent="handleTouchmove"
      @touchend="handleTouchend"
    >
      <slot />
    </div>

    <div
      class="var-swipe__indicators"
      :class="[vertical ? 'var-swipe--indicators-vertical' : null]"
      v-if="indicator || length"
    >
      <div
        class="var-swipe__indicator"
        :class="[
          index === idx ? 'var-swipe--indicator-active' : null,
          vertical ? 'var-swipe--indicator-vertical' : null,
        ]"
        :style="{ background: indicatorColor }"
        v-for="(l, idx) in length"
        :key="l"
        @click="to(idx)"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, computed, ComputedRef, watch, onUnmounted } from 'vue'
import { useAtChildrenCounter, useChildren } from '../utils/components'
import { SWIPE_BIND_SWIPE_ITEM_KEY, SWIPE_COUNT_SWIPE_ITEM_KEY, SwipeProvider } from './provide'
import { nextTickFrame } from '../utils/elements'
import { SwipeItemProvider } from '../swipe-item/provide'
import { props } from './props'
import { isNumber } from '../utils/shared'

const SWIPE_DELAY = 250
const SWIPE_DISTANCE = 20

export default defineComponent({
  name: 'VarSwipe',
  inheritAttrs: false,
  props,
  setup(props) {
    const { bindChildren: bindSwipeItem, childProviders: swipeItemProviders } = useChildren<
      SwipeProvider,
      SwipeItemProvider
    >(SWIPE_BIND_SWIPE_ITEM_KEY)
    const { length } = useAtChildrenCounter(SWIPE_COUNT_SWIPE_ITEM_KEY)

    const swipeEl: Ref<HTMLElement | null> = ref(null)
    const size: Ref<number> = ref(0)
    const vertical: ComputedRef<boolean> = computed(() => props.vertical)
    const trackSize: Ref<number> = ref(0)
    const translate: Ref<number> = ref(0)
    const lockDuration: Ref<boolean> = ref(false)
    const index: Ref<number> = ref(0)
    let touching = false
    let timer = -1
    let startX: number
    let startY: number
    let startTime: number
    let prevX: number | undefined
    let prevY: number | undefined

    const findSwipeItemProvider = (idx: number) =>
      swipeItemProviders.find(({ index }) => index.value === idx) as SwipeItemProvider

    const dispatchBorrower = () => {
      if (!props.loop) {
        return
      }
      // track越左边界
      if (translate.value >= 0) {
        findSwipeItemProvider(length.value - 1).setTranslate(-trackSize.value)
      }
      // track越右边界
      if (translate.value <= -(trackSize.value - size.value)) {
        findSwipeItemProvider(0).setTranslate(trackSize.value)
      }
      // track没越界
      if (translate.value > -(trackSize.value - size.value) && translate.value < 0) {
        findSwipeItemProvider(length.value - 1).setTranslate(0)
        findSwipeItemProvider(0).setTranslate(0)
      }
    }

    const getSwipeIndex = (targetSwipeIndex?: number) => {
      const swipeIndex = isNumber(targetSwipeIndex)
        ? targetSwipeIndex
        : Math.floor((translate.value - size.value / 2) / -size.value)

      if (swipeIndex <= -1) {
        return props.loop ? -1 : 0
      }
      if (swipeIndex >= length.value) {
        return props.loop ? length.value : length.value - 1
      }

      return swipeIndex
    }

    const swipeIndexToIndex = (swipeIndex: number) => {
      if (swipeIndex === -1) {
        return props.loop ? length.value - 1 : 0
      }
      if (swipeIndex === length.value) {
        return props.loop ? 0 : length.value - 1
      }

      return swipeIndex
    }

    const boundaryIndex = (index: number) => {
      if (index < 0) {
        return props.loop ? length.value - 1 : 0
      }
      if (index > length.value - 1) {
        return props.loop ? 0 : length.value - 1
      }

      return index
    }

    const resetPosition = (fn?: () => void) => {
      const exceedLeft = translate.value >= size.value
      const exceedRight = translate.value <= -trackSize.value
      const leftTranslate = 0
      const rightTranslate = -(trackSize.value - size.value)

      lockDuration.value = true
      // 检测是否有越界情况 越界修正
      if (exceedLeft || exceedRight) {
        lockDuration.value = true
        translate.value = exceedRight ? leftTranslate : rightTranslate
        findSwipeItemProvider(0).setTranslate(0)
        findSwipeItemProvider(length.value - 1).setTranslate(0)
      }

      nextTickFrame(() => {
        lockDuration.value = false
        fn?.()
      })
    }

    const initialIndex = () => {
      lockDuration.value = true
      index.value = boundaryIndex(props.initialIndex)
      translate.value = index.value * -size.value
      nextTickFrame(() => {
        lockDuration.value = false
      })
    }

    const next = () => {
      if (length.value <= 1) {
        return
      }
      const currentIndex = index.value
      index.value = boundaryIndex(currentIndex + 1)
      props.onChange?.(index.value)

      resetPosition(() => {
        if (currentIndex === length.value - 1 && props.loop) {
          findSwipeItemProvider(0).setTranslate(trackSize.value)
          translate.value = length.value * -size.value
          return
        }

        if (currentIndex !== length.value - 1) {
          translate.value = index.value * -size.value
        }
      })
    }

    const prev = () => {
      if (length.value <= 1) {
        return
      }

      const currentIndex = index.value
      index.value = boundaryIndex(currentIndex - 1)
      props.onChange?.(index.value)

      resetPosition(() => {
        if (currentIndex === 0 && props.loop) {
          findSwipeItemProvider(length.value - 1).setTranslate(-trackSize.value)
          translate.value = size.value
          return
        }

        if (currentIndex !== 0) {
          translate.value = index.value * -size.value
        }
      })
    }

    const to = (idx: number) => {
      if (length.value <= 1 || idx === index.value) {
        return
      }

      idx = idx < 0 ? 0 : idx
      idx = idx >= length.value ? length.value : idx

      const task = idx > index.value ? next : prev

      Array.from({ length: Math.abs(idx - index.value) }).forEach(task)
    }

    const startAutoplay = () => {
      if (!props.autoplay || length.value <= 1) {
        return
      }

      stopAutoplay()

      timer = window.setTimeout(() => {
        next()
        startAutoplay()
      }, Number(props.autoplay))
    }

    const stopAutoplay = () => {
      timer && clearInterval(timer)
    }

    const handleTouchstart = (event: TouchEvent) => {
      if (length.value <= 1 || !props.touchable) {
        return
      }

      const { clientX, clientY } = event.touches[0]
      startX = clientX
      startY = clientY
      startTime = performance.now()
      touching = true
      stopAutoplay()

      resetPosition(() => {
        lockDuration.value = true
      })
    }

    const handleTouchmove = (event: TouchEvent) => {
      if (!touching) {
        return
      }

      const { clientX, clientY } = event.touches[0]
      const moveX = prevX !== undefined ? clientX - prevX : 0
      const moveY = prevY !== undefined ? clientY - prevY : 0
      prevX = clientX
      prevY = clientY

      translate.value += props.vertical ? moveY : moveX

      dispatchBorrower()
    }

    const handleTouchend = () => {
      if (!touching) {
        return
      }

      const positive = props.vertical ? (prevY as number) < startY : (prevX as number) < startX
      const distance = props.vertical ? Math.abs(startY - (prevY as number)) : Math.abs(startX - (prevX as number))
      const quickSwiping = performance.now() - startTime <= SWIPE_DELAY && distance >= SWIPE_DISTANCE
      const swipeIndex = quickSwiping
        ? positive
          ? getSwipeIndex(index.value + 1)
          : getSwipeIndex(index.value - 1)
        : getSwipeIndex()

      touching = false
      lockDuration.value = false
      prevX = undefined
      prevY = undefined

      translate.value = swipeIndex * -size.value
      index.value = swipeIndexToIndex(swipeIndex)
      startAutoplay()

      props.onChange?.(index.value)
    }

    const resize = () => {
      size.value = props.vertical
        ? (swipeEl.value as HTMLElement).offsetHeight
        : (swipeEl.value as HTMLElement).offsetWidth
      trackSize.value = size.value * length.value
      initialIndex()
      startAutoplay()
    }

    watch(() => length.value, resize)

    onUnmounted(stopAutoplay)

    const swipeProvider: SwipeProvider = {
      size,
      vertical,
    }

    bindSwipeItem(swipeProvider)

    return {
      length,
      index,
      swipeEl,
      trackSize,
      translate,
      lockDuration,
      handleTouchstart,
      handleTouchmove,
      handleTouchend,
      next,
      prev,
      to,
      resize,
    }
  },
})
</script>

<style lang="less">
@import './swipe';
</style>
