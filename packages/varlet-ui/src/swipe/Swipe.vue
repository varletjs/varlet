<template>
  <div class="var-swipe" ref="swipeEl">
    <div
      class="var-swipe__track"
      :class="[vertical ? 'var-swipe--vertical' : null]"
      :style="{
        width: !vertical ? `${trackSize}px` : null,
        height: vertical ? `${trackSize}px` : null,
        transform: `translate${vertical ? 'Y' : 'X'}(${translate}px)`,
        transitionDuration: lockDuration ? `0ms` : `${toNumber(duration)}ms`,
      }"
      @touchstart="handleTouchstart"
      @touchmove.prevent="handleTouchmove"
      @touchend="handleTouchend"
    >
      <slot />
    </div>

    <slot name="indicator" :index="index" :length="length">
      <div
        class="var-swipe__indicators"
        :class="[vertical ? 'var-swipe--indicators-vertical' : null]"
        v-if="indicator && length"
      >
        <div
          class="var-swipe__indicator"
          :class="[
            index === idx ? 'var-swipe--indicator-active' : null,
            vertical ? 'var-swipe--indicator-vertical' : null,
          ]"
          :style="{ background: indicatorColor }"
          :key="l"
          v-for="(l, idx) in length"
          @click="to(idx)"
        ></div>
      </div>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch, onUnmounted } from 'vue'
import { useSwipeItems } from './provide'
import { nextTickFrame } from '../utils/elements'
import { props } from './props'
import { isNumber, toNumber } from '../utils/shared'
import type { Ref, ComputedRef } from 'vue'
import type { SwipeProvider } from './provide'
import type { SwipeItemProvider } from '../swipe-item/provide'

const SWIPE_DELAY = 250
const SWIPE_DISTANCE = 20

export default defineComponent({
  name: 'VarSwipe',
  props,
  setup(props) {
    const swipeEl: Ref<HTMLElement | null> = ref(null)
    const size: Ref<number> = ref(0)
    const vertical: ComputedRef<boolean> = computed(() => props.vertical)
    const trackSize: Ref<number> = ref(0)
    const translate: Ref<number> = ref(0)
    const lockDuration: Ref<boolean> = ref(false)
    const index: Ref<number> = ref(0)
    const { swipeItems, bindSwipeItems, length } = useSwipeItems()
    let touching = false
    let timer = -1
    let startX: number
    let startY: number
    let startTime: number
    let prevX: number | undefined
    let prevY: number | undefined

    const findSwipeItem = (idx: number) => swipeItems.find(({ index }) => index.value === idx) as SwipeItemProvider

    const dispatchBorrower = () => {
      if (!props.loop) {
        return
      }
      // track越左边界
      if (translate.value >= 0) {
        findSwipeItem(length.value - 1).setTranslate(-trackSize.value)
      }
      // track越右边界
      if (translate.value <= -(trackSize.value - size.value)) {
        findSwipeItem(0).setTranslate(trackSize.value)
      }
      // track没越界
      if (translate.value > -(trackSize.value - size.value) && translate.value < 0) {
        findSwipeItem(length.value - 1).setTranslate(0)
        findSwipeItem(0).setTranslate(0)
      }
    }

    const getSwipeIndex = (targetSwipeIndex?: number) => {
      const swipeIndex = isNumber(targetSwipeIndex)
        ? targetSwipeIndex
        : Math.floor((translate.value - size.value / 2) / -size.value)

      const { loop } = props

      if (swipeIndex <= -1) {
        return loop ? -1 : 0
      }

      if (swipeIndex >= length.value) {
        return loop ? length.value : length.value - 1
      }

      return swipeIndex
    }

    const swipeIndexToIndex = (swipeIndex: number) => {
      const { loop } = props

      if (swipeIndex === -1) {
        return loop ? length.value - 1 : 0
      }

      if (swipeIndex === length.value) {
        return loop ? 0 : length.value - 1
      }

      return swipeIndex
    }

    const boundaryIndex = (index: number) => {
      const { loop } = props

      if (index < 0) {
        return loop ? length.value - 1 : 0
      }

      if (index > length.value - 1) {
        return loop ? 0 : length.value - 1
      }

      return index
    }

    const fixPosition = (fn?: () => void) => {
      const overLeft = translate.value >= size.value
      const overRight = translate.value <= -trackSize.value
      const leftTranslate = 0
      const rightTranslate = -(trackSize.value - size.value)

      lockDuration.value = true
      // 检测是否有越界情况 越界修正
      if (overLeft || overRight) {
        lockDuration.value = true
        translate.value = overRight ? leftTranslate : rightTranslate
        findSwipeItem(0).setTranslate(0)
        findSwipeItem(length.value - 1).setTranslate(0)
      }

      nextTickFrame(() => {
        lockDuration.value = false
        fn?.()
      })
    }

    const initialIndex = () => {
      lockDuration.value = true
      index.value = boundaryIndex(toNumber(props.initialIndex))
      translate.value = index.value * -size.value

      nextTickFrame(() => {
        lockDuration.value = false
      })
    }

    const startAutoplay = () => {
      const { autoplay } = props

      if (!autoplay || length.value <= 1) {
        return
      }

      stopAutoplay()

      timer = window.setTimeout(() => {
        next()
        startAutoplay()
      }, toNumber(autoplay))
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

      fixPosition(() => {
        lockDuration.value = true
      })
    }

    const handleTouchmove = (event: TouchEvent) => {
      if (!touching || !props.touchable) {
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

      const { vertical, onChange } = props

      const positive = vertical ? (prevY as number) < startY : (prevX as number) < startX
      const distance = vertical ? Math.abs(startY - (prevY as number)) : Math.abs(startX - (prevX as number))
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
      const prevIndex = index.value
      index.value = swipeIndexToIndex(swipeIndex)
      startAutoplay()

      prevIndex !== index.value && onChange?.(index.value)
    }

    // expose
    const resize = () => {
      size.value = props.vertical
        ? (swipeEl.value as HTMLElement).offsetHeight
        : (swipeEl.value as HTMLElement).offsetWidth

      trackSize.value = size.value * length.value

      initialIndex()
      startAutoplay()
    }
    // expose
    const next = () => {
      if (length.value <= 1) {
        return
      }

      const { loop, onChange } = props

      const currentIndex = index.value
      index.value = boundaryIndex(currentIndex + 1)
      onChange?.(index.value)

      fixPosition(() => {
        if (currentIndex === length.value - 1 && loop) {
          findSwipeItem(0).setTranslate(trackSize.value)
          translate.value = length.value * -size.value
          return
        }

        if (currentIndex !== length.value - 1) {
          translate.value = index.value * -size.value
        }
      })
    }
    // expose
    const prev = () => {
      if (length.value <= 1) {
        return
      }

      const { loop, onChange } = props

      const currentIndex = index.value
      index.value = boundaryIndex(currentIndex - 1)
      onChange?.(index.value)

      fixPosition(() => {
        if (currentIndex === 0 && loop) {
          findSwipeItem(length.value - 1).setTranslate(-trackSize.value)
          translate.value = size.value
          return
        }

        if (currentIndex !== 0) {
          translate.value = index.value * -size.value
        }
      })
    }
    // expose
    const to = (idx: number) => {
      if (length.value <= 1 || idx === index.value) {
        return
      }

      idx = idx < 0 ? 0 : idx
      idx = idx >= length.value ? length.value : idx

      const task = idx > index.value ? next : prev

      Array.from({ length: Math.abs(idx - index.value) }).forEach(task)
    }

    const swipeProvider: SwipeProvider = {
      size,
      vertical,
    }

    bindSwipeItems(swipeProvider)

    watch(() => length.value, resize)

    onUnmounted(stopAutoplay)

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
      toNumber,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './swipe';
</style>
