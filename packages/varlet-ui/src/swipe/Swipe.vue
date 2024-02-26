<template>
  <div :class="n()" ref="swipeEl" v-hover="handleHovering">
    <div
      :class="classes(n('track'), [vertical, n('--vertical')])"
      :style="{
        width: !vertical ? `${trackSize}px` : undefined,
        height: vertical ? `${trackSize}px` : undefined,
        transform: `translate${vertical ? 'Y' : 'X'}(${trackTranslate}px)`,
        transitionDuration: lockDuration ? `0ms` : `${toNumber(duration)}ms`,
      }"
      @touchstart="handleTouchstart"
      @touchmove="handleTouchmove"
      @touchend="handleTouchend"
    >
      <slot />
    </div>

    <slot
      v-if="navigation"
      name="prev"
      v-bind="{
        index,
        length,
        prev,
        next,
        to,
        hovering,
      }"
    >
      <transition :name="getNavigationAnimation('prev')">
        <div
          v-if="navigation === true || hovering"
          :class="classes(n('navigation'), n('navigation-prev'), [vertical, n('--navigation-vertical-prev')])"
        >
          <var-button
            var-swipe-cover
            :disabled="!loop && index === 0"
            :class="n('navigation-prev-button')"
            @click="prev()"
          >
            <var-icon
              var-swipe-cover
              :class="n('navigation-prev-button-icon')"
              :name="vertical ? 'chevron-up' : 'chevron-left'"
            />
          </var-button>
        </div>
      </transition>
    </slot>

    <slot
      v-if="navigation"
      name="next"
      v-bind="{
        index,
        length,
        hovering,
        prev,
        next,
        to,
      }"
    >
      <transition :name="getNavigationAnimation('next')">
        <div
          v-if="navigation === true || hovering"
          :class="classes(n('navigation'), n('navigation-next'), [vertical, n('--navigation-vertical-next')])"
        >
          <var-button
            var-swipe-cover
            :class="n('navigation-next-button')"
            :disabled="!loop && index === length - 1"
            @click="next()"
          >
            <var-icon
              var-swipe-cover
              :class="n('navigation-next-button-icon')"
              :name="vertical ? 'chevron-down' : 'chevron-right'"
            />
          </var-button>
        </div>
      </transition>
    </slot>

    <slot
      name="indicator"
      v-bind="{
        index,
        length,
        hovering,
        prev,
        next,
        to,
      }"
    >
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
import VarButton from '../button'
import VarIcon from '../icon'
import Hover from '../hover'
import { defineComponent, ref, computed, watch, onActivated } from 'vue'
import { useSwipeItems, type SwipeProvider } from './provide'
import { props, type SwipeToOptions } from './props'
import { clamp, isNumber, toNumber, doubleRaf, preventDefault, call } from '@varlet/shared'
import { createNamespace } from '../utils/components'
import { onSmartUnmounted, onWindowResize, useTouch } from '@varlet/use'
import { usePopup } from '../popup/provide'
import { type SwipeItemProvider } from '../swipe-item/provide'

const SWIPE_DELAY = 250
const SWIPE_OFFSET = 20

const { name, n, classes } = createNamespace('swipe')

export default defineComponent({
  name,
  directives: { Hover },
  components: { VarButton, VarIcon },
  props,
  setup(props) {
    const swipeEl = ref<HTMLElement | null>(null)
    const size = ref(0)
    const vertical = computed(() => props.vertical)
    const trackSize = ref(0)
    const trackTranslate = ref(0)
    const lockDuration = ref(false)
    const index = ref(0)
    const hovering = ref(false)
    const { swipeItems, bindSwipeItems, length } = useSwipeItems()
    const { popup, bindPopup } = usePopup()
    const {
      deltaX,
      deltaY,
      moveX,
      moveY,
      offsetX,
      offsetY,
      touching,
      direction,
      startTime,
      startTouch,
      moveTouch,
      endTouch,
    } = useTouch()
    const isExpectDirection = computed(() => direction.value === (props.vertical ? 'vertical' : 'horizontal'))

    let initializedIndex = false
    let timer = -1
    const swipeProvider: SwipeProvider = {
      size,
      vertical,
    }

    bindSwipeItems(swipeProvider)

    call(bindPopup, null)

    watch(
      () => length.value,
      async () => {
        // In nuxt, the size of the swipe cannot got when the route is change, need double raf
        await doubleRaf()

        initialIndex()
        resize()
      }
    )

    if (popup) {
      // watch popup show again
      watch(
        () => popup.show.value,
        async (show) => {
          if (show) {
            await doubleRaf()
            resize()
          } else {
            stopAutoplay()
          }
        }
      )
    }

    onActivated(resize)
    onSmartUnmounted(stopAutoplay)
    onWindowResize(resize)

    function findSwipeItem(idx: number) {
      return swipeItems.find(({ index }) => index.value === idx) as SwipeItemProvider
    }

    function dispatchSwipeItems() {
      if (!props.loop) {
        return
      }

      // track out of bounds from left
      if (trackTranslate.value >= 0) {
        findSwipeItem(length.value - 1).setTranslate(-trackSize.value)
      }
      // track out of bounds from right
      if (trackTranslate.value <= -(trackSize.value - size.value)) {
        findSwipeItem(0).setTranslate(trackSize.value)
      }
      // track not out of bounds
      if (trackTranslate.value > -(trackSize.value - size.value) && trackTranslate.value < 0) {
        findSwipeItem(length.value - 1).setTranslate(0)
        findSwipeItem(0).setTranslate(0)
      }
    }

    function getSwipeIndex(targetSwipeIndex?: number) {
      const swipeIndex = isNumber(targetSwipeIndex)
        ? targetSwipeIndex
        : Math.floor((trackTranslate.value - size.value / 2) / -size.value)

      const { loop } = props

      if (swipeIndex <= -1) {
        return loop ? -1 : 0
      }

      if (swipeIndex >= length.value) {
        return loop ? length.value : length.value - 1
      }

      return swipeIndex
    }

    function swipeIndexToIndex(swipeIndex: number) {
      const { loop } = props

      if (swipeIndex === -1) {
        return loop ? length.value - 1 : 0
      }

      if (swipeIndex === length.value) {
        return loop ? 0 : length.value - 1
      }

      return swipeIndex
    }

    function clampIndex(index: number) {
      if (props.loop) {
        if (index < 0) {
          return length.value + index
        }

        if (index >= length.value) {
          return index - length.value
        }

        return index
      }

      return clamp(index, 0, length.value - 1)
    }

    async function fixPosition() {
      const overLeft = trackTranslate.value >= size.value
      const overRight = trackTranslate.value <= -trackSize.value
      const leftTranslate = 0
      const rightTranslate = -(trackSize.value - size.value)

      lockDuration.value = true

      if (overLeft || overRight) {
        lockDuration.value = true
        trackTranslate.value = overRight ? leftTranslate : rightTranslate
        findSwipeItem(0).setTranslate(0)
        findSwipeItem(length.value - 1).setTranslate(0)
      }

      await doubleRaf()
      lockDuration.value = false
    }

    function initialIndex() {
      if (initializedIndex) {
        return
      }

      index.value = clampIndex(toNumber(props.initialIndex))
      initializedIndex = true
    }

    function startAutoplay() {
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

    function stopAutoplay() {
      timer && clearTimeout(timer)
    }

    async function handleTouchstart(event: TouchEvent) {
      if (length.value <= 1 || !props.touchable) {
        return
      }

      startTouch(event)
      stopAutoplay()
      await fixPosition()
      lockDuration.value = true
    }

    function handleTouchmove(event: TouchEvent) {
      const { touchable, vertical } = props

      if (!touching.value || !touchable) {
        return
      }

      moveTouch(event)

      if (!isExpectDirection.value) {
        return
      }

      preventDefault(event)
      trackTranslate.value += vertical ? moveY.value : moveX.value
      dispatchSwipeItems()
    }

    function handleTouchend() {
      if (!touching.value) {
        return
      }

      endTouch()

      if (!isExpectDirection.value) {
        return
      }

      const { vertical, onChange } = props

      const positive = vertical ? deltaY.value < 0 : deltaX.value < 0
      const offset = vertical ? offsetY.value : offsetX.value
      const quickSwiping = performance.now() - startTime.value <= SWIPE_DELAY && offset >= SWIPE_OFFSET
      const swipeIndex = quickSwiping
        ? positive
          ? getSwipeIndex(index.value + 1)
          : getSwipeIndex(index.value - 1)
        : getSwipeIndex()

      lockDuration.value = false
      trackTranslate.value = swipeIndex * -size.value

      const prevIndex = index.value
      index.value = swipeIndexToIndex(swipeIndex)
      startAutoplay()

      if (prevIndex !== index.value) {
        call(onChange, index.value)
      }
    }

    function handleHovering(value: boolean) {
      if (props.navigation === 'hover') {
        hovering.value = value
      }
    }

    function getNavigationAnimation(type: 'prev' | 'next') {
      if (props.navigation !== 'hover') {
        return ''
      }

      return n(`--navigation${props.vertical ? '-vertical' : ''}-${type}-animation`)
    }

    // expose
    function resize() {
      if (!swipeEl.value) {
        return
      }

      lockDuration.value = true

      size.value = props.vertical ? swipeEl.value.offsetHeight : swipeEl.value.offsetWidth
      trackSize.value = size.value * length.value
      trackTranslate.value = index.value * -size.value

      swipeItems.forEach((swipeItem) => {
        swipeItem.setTranslate(0)
      })

      startAutoplay()

      setTimeout(() => {
        lockDuration.value = false
      })
    }

    // expose
    async function next(options?: SwipeToOptions) {
      if (length.value <= 1) {
        return
      }

      initialIndex()

      const { loop, onChange } = props
      const currentIndex = index.value
      index.value = clampIndex(currentIndex + 1)

      if (options?.event !== false) {
        call(onChange, index.value)
      }

      await fixPosition()

      if (currentIndex === length.value - 1 && loop) {
        findSwipeItem(0).setTranslate(trackSize.value)
        trackTranslate.value = length.value * -size.value
        return
      }

      if (currentIndex !== length.value - 1) {
        trackTranslate.value = index.value * -size.value
      }
    }

    // expose
    async function prev(options?: SwipeToOptions) {
      if (length.value <= 1) {
        return
      }

      initialIndex()

      const { loop, onChange } = props
      const currentIndex = index.value
      index.value = clampIndex(currentIndex - 1)

      if (options?.event !== false) {
        call(onChange, index.value)
      }

      await fixPosition()

      if (currentIndex === 0 && loop) {
        findSwipeItem(length.value - 1).setTranslate(-trackSize.value)
        trackTranslate.value = size.value
        return
      }

      if (currentIndex !== 0) {
        trackTranslate.value = index.value * -size.value
      }
    }

    // expose
    function to(idx: number, options?: SwipeToOptions) {
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

    return {
      length,
      index,
      swipeEl,
      trackSize,
      trackTranslate,
      lockDuration,
      hovering,
      n,
      classes,
      handleTouchstart,
      handleTouchmove,
      handleTouchend,
      next,
      prev,
      to,
      resize,
      toNumber,
      handleHovering,
      getNavigationAnimation,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../hover-overlay/hoverOverlay';
@import '../ripple/ripple';
@import '../loading/loading';
@import '../icon/icon';
@import './swipe';
</style>
