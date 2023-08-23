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
      :initial-index="initialIndex"
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

    <div :class="n('extra')">
      <slot name="extra" />
    </div>
  </var-popup>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch, type Ref, type ComputedRef } from 'vue'
import { toNumber, clamp } from '@varlet/shared'
import { useEventListener, useTouch } from '@varlet/use'
import VarSwipe from '../swipe'
import VarSwipeItem from '../swipe-item'
import VarIcon from '../icon'
import VarPopup from '../popup'
import { props } from './props'
import { call, createNamespace } from '../utils/components'
import { type SwipeToOptions } from '../swipe/props'

const { n, classes } = createNamespace('image-preview')

const DISTANCE_OFFSET = 12
const EVENT_DELAY = 200
const TAP_DELAY = 350
const ANIMATION_DURATION = 200
const LONG_PRESS_DELAY = 500

export default defineComponent({
  name: 'VarImagePreview',
  components: {
    VarSwipe,
    VarSwipeItem,
    VarPopup,
    VarIcon,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const popupShow: Ref<boolean> = ref(false)
    const scale: Ref<number> = ref(1)
    const translateX: Ref<number> = ref(0)
    const translateY: Ref<number> = ref(0)
    const transitionTimingFunction: Ref<string | undefined> = ref(undefined)
    const transitionDuration: Ref<string | undefined> = ref(undefined)
    const canSwipe: Ref<boolean> = ref(true)
    const swipeRef: Ref<InstanceType<typeof VarSwipe> | null> = ref(null)
    const { moveX, moveY, distance, startTime, startTouch, moveTouch } = useTouch()

    const targets: Record<string, HTMLElement | null> = {
      start: null,
      prev: null,
    }
    let closeRunner: number | null = null
    let longPressRunner: number | null = null
    let isLongPress = false

    const initialIndex: ComputedRef<number> = computed(() => {
      // For compatibility with current, temporarily keep this computed method
      // Current will be replaced by initialIndex in the future
      const { images, current, initialIndex } = props

      if (initialIndex != null) {
        return toNumber(initialIndex)
      }

      const index = images.findIndex((image: string) => image === current)

      return Math.max(index, 0)
    })

    const isPreventDefault: ComputedRef<boolean> = computed(() => {
      const { imagePreventDefault, show } = props
      return show && imagePreventDefault
    })

    const zoomIn = () => {
      scale.value = toNumber(props.zoom)
      canSwipe.value = false
      targets.prev = null

      window.setTimeout(() => {
        transitionTimingFunction.value = 'linear'
        transitionDuration.value = '0s'
      }, ANIMATION_DURATION)
    }

    const zoomOut = () => {
      scale.value = 1
      translateX.value = 0
      translateY.value = 0
      canSwipe.value = true
      targets.prev = null
      transitionTimingFunction.value = undefined
      transitionDuration.value = undefined
    }

    const isDoubleTouch = (currentTouch: HTMLElement) => {
      if (!targets.prev) {
        return false
      }

      return (
        distance.value <= DISTANCE_OFFSET &&
        performance.now() - startTime.value <= EVENT_DELAY &&
        targets.prev === currentTouch
      )
    }

    const isTapTouch = (target: HTMLElement) => {
      if (!target || !targets.start || !targets.prev) {
        return false
      }

      return (
        distance.value <= DISTANCE_OFFSET &&
        performance.now() - startTime.value < TAP_DELAY &&
        (target === targets.start || target.parentNode === targets.start)
      )
    }

    const handleTouchcancel = () => {
      window.clearTimeout(longPressRunner as number)
      isLongPress = false
      targets.start = null
    }

    const handleTouchend = (event: TouchEvent) => {
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

    const handleTouchstart = (event: TouchEvent, idx: number) => {
      window.clearTimeout(closeRunner as number)
      window.clearTimeout(longPressRunner as number)

      const currentTouch = event.currentTarget as HTMLElement
      targets.start = currentTouch

      longPressRunner = window.setTimeout(() => {
        isLongPress = true
        call(props.onLongPress, idx)
      }, LONG_PRESS_DELAY)

      if (isDoubleTouch(currentTouch)) {
        scale.value > 1 ? zoomOut() : zoomIn()
        return
      }

      startTouch(event)
      targets.prev = currentTouch
    }

    const getZoom = (target: HTMLElement) => {
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

    const getLimitX = (target: HTMLElement) => {
      const { zoom, imageRadio, rootRadio, width, height } = getZoom(target)

      if (!imageRadio) {
        return 0
      }

      const displayWidth = imageRadio > rootRadio ? height / imageRadio : width

      return Math.max(0, (zoom * displayWidth - width) / 2) / zoom
    }

    const getLimitY = (target: HTMLElement) => {
      const { zoom, imageRadio, rootRadio, width, height } = getZoom(target)

      if (!imageRadio) {
        return 0
      }

      const displayHeight = imageRadio > rootRadio ? height : width * imageRadio

      return Math.max(0, (zoom * displayHeight - height) / 2) / zoom
    }

    const handleTouchmove = (event: TouchEvent) => {
      if (!targets.prev) {
        return
      }

      moveTouch(event)

      const target = event.currentTarget as HTMLElement
      const currentTouch = target

      if (distance.value > DISTANCE_OFFSET) {
        window.clearTimeout(longPressRunner as number)
      }

      if (scale.value > 1) {
        const limitX = getLimitX(target)
        const limitY = getLimitY(target)

        translateX.value = clamp(translateX.value + moveX.value, -limitX, limitX)
        translateY.value = clamp(translateY.value + moveY.value, -limitY, limitY)
      }

      targets.prev = currentTouch
    }

    const close = () => {
      if (scale.value > 1) {
        zoomOut()
        setTimeout(() => call(props['onUpdate:show'], false), ANIMATION_DURATION)
        return
      }

      call(props['onUpdate:show'], false)
    }

    // expose
    const prev = (options?: SwipeToOptions) => {
      swipeRef.value?.prev(options)
    }

    // expose
    const next = (options?: SwipeToOptions) => {
      swipeRef.value?.next(options)
    }

    // expose
    const to = (idx: number, options?: SwipeToOptions) => {
      swipeRef.value?.to(idx, options)
    }

    const preventImageDefault = (event: Event) => {
      props.imagePreventDefault && props.show && event.preventDefault()
    }

    useEventListener(() => document, 'contextmenu', preventImageDefault)

    watch(
      () => props.show,
      (newShow) => {
        popupShow.value = newShow
      },
      { immediate: true }
    )

    return {
      n,
      classes,
      swipeRef,
      isPreventDefault,
      initialIndex,
      popupShow,
      scale,
      translateX,
      translateY,
      canSwipe,
      transitionTimingFunction,
      transitionDuration,
      handleTouchstart,
      handleTouchmove,
      handleTouchend,
      handleTouchcancel,
      close,
      prev,
      next,
      to,
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
