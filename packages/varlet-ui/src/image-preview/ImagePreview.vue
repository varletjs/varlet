<template>
  <var-popup
    :class="n('popup')"
    var-image-preview-cover
    :transition="n('$-fade')"
    :show="popupShow"
    :overlay="false"
    :close-on-click-overlay="false"
    :lock-scroll="lockScroll"
    :teleport="teleport"
    @open="onOpen"
    @close="onClose"
    @closed="onClosed"
    @opened="onOpened"
    @route-change="onRouteChange"
  >
    <var-swipe
      ref="swipeRef"
      :class="n('swipe')"
      var-image-preview-cover
      :touchable="canSwipe"
      :indicator="indicator && images.length > 1"
      :initial-index="toNumber(initialIndex)"
      :loop="loop"
      @change="onChange"
      v-bind="$attrs"
    >
      <template #default>
        <var-swipe-item :class="n('swipe-item')" var-image-preview-cover v-for="(image, idx) in images" :key="image">
          <div
            :class="n('zoom-container')"
            :style="{
              transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
              transitionTimingFunction,
              transitionDuration,
            }"
            @touchstart="handleTouchstart($event, idx)"
            @touchmove="handleTouchmove"
            @touchend="handleTouchend"
            @touchcancel="handleTouchcancel"
          >
            <img :class="classes(n('image'), [isPreventDefault, n('--prevent')])" :src="image" :alt="image" />
          </div>
        </var-swipe-item>
      </template>

      <template #indicator="{ index, length }">
        <slot name="indicator" :index="index" :length="length">
          <div :class="n('indicators')" v-if="indicator && images.length > 1">{{ index + 1 }} / {{ length }}</div>
        </slot>
      </template>
    </var-swipe>

    <slot name="close-icon">
      <var-icon :class="n('close-icon')" name="close-circle" var-image-preview-cover v-if="closeable" @click="close" />
    </slot>

    <div :class="n('extra')" v-if="$slots.extra">
      <slot name="extra" />
    </div>
  </var-popup>
</template>

<script lang="ts">
import VarSwipe from '../swipe'
import VarSwipeItem from '../swipe-item'
import VarIcon from '../icon'
import VarPopup from '../popup'
import { defineComponent, ref, computed, watch } from 'vue'
import { toNumber, clamp, preventDefault, call } from '@varlet/shared'
import { useEventListener, useTouch } from '@varlet/use'
import { props } from './props'
import { createNamespace } from '../utils/components'
import { type SwipeToOptions } from '../swipe/props'

const { name, n, classes } = createNamespace('image-preview')

const DISTANCE_OFFSET = 12
const EVENT_DELAY = 200
const TAP_DELAY = 350
const ANIMATION_DURATION = 200
const LONG_PRESS_DELAY = 500
const BASE_RATIO = 1

export default defineComponent({
  name,
  components: {
    VarSwipe,
    VarSwipeItem,
    VarPopup,
    VarIcon,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const popupShow = ref(false)
    const scale = ref(1)
    const translateX = ref(0)
    const translateY = ref(0)
    const transitionTimingFunction = ref<string | undefined>()
    const transitionDuration = ref<string | undefined>()
    const canSwipe = ref(true)
    const swipeRef = ref<InstanceType<typeof VarSwipe> | null>(null)
    const { moveX, moveY, distance, startTime, startTouch, moveTouch, endTouch } = useTouch()
    const isPreventDefault = computed(() => {
      const { imagePreventDefault, show } = props
      return show && imagePreventDefault
    })

    let closeRunner: number | null = null
    let longPressRunner: number | null = null
    let isLongPress = false
    const targets: Record<string, HTMLElement | null> = {
      start: null,
      prev: null,
    }

    useEventListener(() => document, 'contextmenu', preventImageDefault)

    watch(
      () => props.show,
      (newShow) => {
        popupShow.value = newShow
      },
      { immediate: true }
    )

    function zoomIn(ratio: number | string) {
      scale.value = toNumber(ratio)
      canSwipe.value = false
      targets.prev = null

      window.setTimeout(() => {
        transitionTimingFunction.value = 'linear'
        transitionDuration.value = '0s'
      }, ANIMATION_DURATION)
    }

    function zoomOut() {
      scale.value = 1
      translateX.value = 0
      translateY.value = 0
      canSwipe.value = true
      targets.prev = null
      transitionTimingFunction.value = undefined
      transitionDuration.value = undefined
    }

    function isDoubleTouch(target: HTMLElement) {
      if (!targets.prev) {
        return false
      }

      return (
        distance.value <= DISTANCE_OFFSET &&
        performance.now() - startTime.value <= EVENT_DELAY &&
        targets.prev === target
      )
    }

    function isTapTouch(target: HTMLElement) {
      if (!target || !targets.start || !targets.prev) {
        return false
      }

      return (
        distance.value <= DISTANCE_OFFSET &&
        performance.now() - startTime.value < TAP_DELAY &&
        (target === targets.start || target.parentNode === targets.start)
      )
    }

    function handleTouchcancel() {
      endTouch()

      window.clearTimeout(longPressRunner as number)
      isLongPress = false
      targets.start = null
    }

    function handleTouchend(event: TouchEvent) {
      endTouch()

      window.clearTimeout(longPressRunner as number)

      // avoid triggering tap event sometimes
      if (isLongPress) {
        isLongPress = false
        return
      }

      const isTap = isTapTouch(event.target as HTMLElement)
      closeRunner = window.setTimeout(() => {
        isTap && close()
        targets.start = null
      }, EVENT_DELAY)
    }

    function handleTouchstart(event: TouchEvent, idx: number) {
      window.clearTimeout(closeRunner as number)
      window.clearTimeout(longPressRunner as number)

      const target = event.currentTarget as HTMLElement
      targets.start = target

      longPressRunner = window.setTimeout(() => {
        isLongPress = true
        call(props.onLongPress, idx)
      }, LONG_PRESS_DELAY)

      if (isDoubleTouch(target)) {
        scale.value > BASE_RATIO ? zoomOut() : zoomIn(props.zoom)
        return
      }

      startTouch(event)
      targets.prev = target
    }

    function getZoom(target: HTMLElement) {
      const { offsetWidth, offsetHeight } = target
      const { naturalWidth, naturalHeight } = target.querySelector(`.${n('image')}`) as HTMLImageElement

      return {
        width: offsetWidth,
        height: offsetHeight,
        imageRadio: naturalHeight / naturalWidth,
        rootRadio: offsetHeight / offsetWidth,
        zoom: toNumber(props.zoom),
      }
    }

    function getLimitX(target: HTMLElement) {
      const { zoom, imageRadio, rootRadio, width, height } = getZoom(target)

      if (!imageRadio) {
        return 0
      }

      const displayWidth = imageRadio > rootRadio ? height / imageRadio : width

      return Math.max(0, (zoom * displayWidth - width) / 2) / zoom
    }

    function getLimitY(target: HTMLElement) {
      const { zoom, imageRadio, rootRadio, width, height } = getZoom(target)

      if (!imageRadio) {
        return 0
      }

      const displayHeight = imageRadio > rootRadio ? height : width * imageRadio

      return Math.max(0, (zoom * displayHeight - height) / 2) / zoom
    }

    function handleTouchmove(event: TouchEvent) {
      if (!targets.prev) {
        return
      }

      moveTouch(event)

      const target = event.currentTarget as HTMLElement

      if (distance.value > DISTANCE_OFFSET) {
        window.clearTimeout(longPressRunner as number)
      }

      if (scale.value > BASE_RATIO) {
        const limitX = getLimitX(target)
        const limitY = getLimitY(target)

        translateX.value = clamp(translateX.value + moveX.value, -limitX, limitX)
        translateY.value = clamp(translateY.value + moveY.value, -limitY, limitY)
      }

      targets.prev = target
    }

    function close() {
      if (scale.value > BASE_RATIO) {
        zoomOut()
        setTimeout(() => call(props['onUpdate:show'], false), ANIMATION_DURATION)
        return
      }

      call(props['onUpdate:show'], false)
    }

    function preventImageDefault(event: Event) {
      if (isPreventDefault.value) {
        preventDefault(event)
      }
    }

    // expose
    function prev(options?: SwipeToOptions) {
      swipeRef.value?.prev(options)
    }

    // expose
    function next(options?: SwipeToOptions) {
      swipeRef.value?.next(options)
    }

    // expose
    function to(idx: number, options?: SwipeToOptions) {
      swipeRef.value?.to(idx, options)
    }

    // expose
    function zoom(ratio: number) {
      ratio <= BASE_RATIO ? zoomOut() : zoomIn(ratio)
    }

    return {
      swipeRef,
      isPreventDefault,
      popupShow,
      scale,
      translateX,
      translateY,
      canSwipe,
      transitionTimingFunction,
      transitionDuration,
      n,
      classes,
      toNumber,
      handleTouchstart,
      handleTouchmove,
      handleTouchend,
      handleTouchcancel,
      close,
      prev,
      next,
      to,
      zoom,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../icon/icon';
@import '../swipe/swipe';
@import '../swipe-item/swipeItem';
@import '../popup/popup';
@import './imagePreview';
</style>
