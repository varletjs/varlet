<template>
  <div :class="n()" ref="swipeEl">
    <div
      :class="classes(n('track'), [vertical, n('--vertical')])"
      :style="{
        width: !vertical ? `${trackSize}px` : undefined,
        height: vertical ? `${trackSize}px` : undefined,
        transform: `translate${vertical ? 'Y' : 'X'}(${translate}px)`,
        transitionDuration: lockDuration ? `0ms` : `${toNumber(duration)}ms`,
      }"
      @touchstart="handleTouchstart"
      @touchmove="handleTouchmove"
      @touchend="handleTouchend"
    >
      <slot />
    </div>

    <slot name="indicator" :index="index" :length="length">
      <div :class="classes(n('indicators'), [vertical, n('--indicators-vertical')])" v-if="indicator && length">
        <div
          :class="
            classes(n('indicator'), [index === idx, n('--indicator-active')], [vertical, n('--indicator-vertical')])
          "
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
import {
  defineComponent,
  ref,
  computed,
  watch,
  onUnmounted,
  type Ref,
  type ComputedRef,
  onDeactivated,
  onActivated,
} from 'vue'
import { useSwipeItems, type SwipeProvider } from './provide'
import { doubleRaf, nextTickFrame } from '../utils/elements'
import { props, type SwipeToOptions } from './props'
import { isNumber, toNumber } from '@varlet/shared'
import { call, createNamespace } from '../utils/components'
import { type SwipeItemProvider } from '../swipe-item/provide'
import { useEventListener } from '@varlet/use'

const SWIPE_DELAY = 250
const SWIPE_DISTANCE = 20

const { n, classes } = createNamespace('swipe')

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
      // track out of bounds from left
      if (translate.value >= 0) {
        findSwipeItem(length.value - 1).setTranslate(-trackSize.value)
      }
      // track out of bounds from right
      if (translate.value <= -(trackSize.value - size.value)) {
        findSwipeItem(0).setTranslate(trackSize.value)
      }
      // track not out of bounds
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
        call(fn)
      })
    }

    const initialIndex = () => {
      index.value = boundaryIndex(toNumber(props.initialIndex))
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
      timer && clearTimeout(timer)
    }

    const getDirection = (x: number, y: number) => {
      if (x > y && x > 10) {
        return 'horizontal'
      }
      if (y > x && y > 10) {
        return 'vertical'
      }
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
      const { touchable, vertical } = props

      if (!touching || !touchable) {
        return
      }

      const { clientX, clientY } = event.touches[0]
      const deltaX = Math.abs(clientX - startX)
      const deltaY = Math.abs(clientY - startY)
      const direction = getDirection(deltaX, deltaY)
      const expectDirection = vertical ? 'vertical' : 'horizontal'

      if (direction === expectDirection) {
        event.preventDefault()

        const moveX = prevX !== undefined ? clientX - prevX : 0
        const moveY = prevY !== undefined ? clientY - prevY : 0
        prevX = clientX
        prevY = clientY

        translate.value += vertical ? moveY : moveX

        dispatchBorrower()
      }
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

      prevIndex !== index.value && call(onChange, index.value)
    }

    // expose
    const resize = () => {
      if (!swipeEl.value) {
        return
      }

      lockDuration.value = true

      size.value = props.vertical ? swipeEl.value.offsetHeight : swipeEl.value.offsetWidth
      trackSize.value = size.value * length.value
      translate.value = index.value * -size.value

      swipeItems.forEach((swipeItem) => {
        swipeItem.setTranslate(0)
      })

      startAutoplay()

      setTimeout(() => {
        lockDuration.value = false
      })
    }
    // expose
    const next = (options?: SwipeToOptions) => {
      if (length.value <= 1) {
        return
      }

      const { loop, onChange } = props

      const currentIndex = index.value
      index.value = boundaryIndex(currentIndex + 1)

      if (options?.event !== false) {
        call(onChange, index.value)
      }

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
    const prev = (options?: SwipeToOptions) => {
      if (length.value <= 1) {
        return
      }

      const { loop, onChange } = props

      const currentIndex = index.value
      index.value = boundaryIndex(currentIndex - 1)

      if (options?.event !== false) {
        call(onChange, index.value)
      }

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
    const to = (idx: number, options?: SwipeToOptions) => {
      if (length.value <= 1 || idx === index.value) {
        return
      }

      idx = idx < 0 ? 0 : idx
      idx = idx >= length.value ? length.value : idx

      const task = idx > index.value ? next : prev
      const count = Math.abs(idx - index.value)

      Array.from({ length: count }).forEach((_, index) => {
        task({ event: index === count - 1 ? options?.event : false })
      })
    }

    const swipeProvider: SwipeProvider = {
      size,
      vertical,
    }

    bindSwipeItems(swipeProvider)

    watch(
      () => length.value,
      async () => {
        // In nuxt, the size of the swipe cannot got when the route is change, need double raf
        await doubleRaf()
        initialIndex()
        resize()
      }
    )

    onActivated(resize)
    onDeactivated(stopAutoplay)
    onUnmounted(stopAutoplay)

    useEventListener(window, 'resize', resize)

    return {
      n,
      classes,
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
