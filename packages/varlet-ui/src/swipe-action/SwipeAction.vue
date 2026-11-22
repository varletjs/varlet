<template>
  <div
    ref="host"
    :class="classes(n(), n('$--box'))"
    @touchstart="handleTouchstart"
    @touchmove="handleTouchmove"
    @touchend="handleTouchend"
    @touchcancel="handleTouchcancel"
    @click.capture="handleClickCapture"
    @focusout="handleFocusout"
    @keydown.esc="close"
  >
    <div
      :class="n('track')"
      :style="{
        transform: `translateX(${offset}px)`,
        transitionDuration: `${touching ? 0 : toNumber(duration)}ms`,
      }"
    >
      <div ref="left" :class="classes(n('actions'), n('--left'))" @click="handleClickActions" @focusin="open('left')">
        <slot name="left" :close="close">
          <var-button
            v-for="action in leftActions"
            :key="action.key"
            var-swipe-action-cover
            :class="n('action')"
            :type="action.type"
            :color="action.color"
            :text-color="action.textColor"
            :disabled="disabled || action.disabled"
            :elevation="false"
            @click="handleAction(action, 'left', $event)"
          >
            {{ action.text }}
          </var-button>
        </slot>
      </div>

      <div :class="n('content')" @click.capture="handleClickContent">
        <slot />
      </div>

      <div
        ref="right"
        :class="classes(n('actions'), n('--right'))"
        @click="handleClickActions"
        @focusin="open('right')"
      >
        <slot name="right" :close="close">
          <var-button
            v-for="action in rightActions"
            :key="action.key"
            var-swipe-action-cover
            :class="n('action')"
            :type="action.type"
            :color="action.color"
            :text-color="action.textColor"
            :disabled="disabled || action.disabled"
            :elevation="false"
            @click="handleAction(action, 'right', $event)"
          >
            {{ action.text }}
          </var-button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { call, clamp, preventDefault, toNumber } from '@varlet/shared'
import {
  onSmartMounted,
  onWindowResize,
  useClickOutside,
  useEventListener,
  useResizeObserver,
  useTouch,
} from '@varlet/use'
import { defineComponent, onUpdated, ref, watch } from 'vue'
import VarButton from '../button'
import { createNamespace } from '../utils/components'
import { props, type SwipeActionItem, type SwipeActionSide } from './props'

const { name, n, classes } = createNamespace('swipe-action')

const TOUCH_OFFSET = 5
const SWIPE_DELAY = 250
const SWIPE_OFFSET = 20

export default defineComponent({
  name,
  components: { VarButton },
  props,
  setup(props) {
    const host = ref<HTMLElement | null>(null)
    const left = ref<HTMLElement | null>(null)
    const right = ref<HTMLElement | null>(null)
    const offset = ref(0)
    const { deltaX, offsetX, offsetY, direction, touching, startTime, startTouch, moveTouch, endTouch } = useTouch()

    let leftWidth = 0
    let rightWidth = 0
    let openedSide: SwipeActionSide | undefined
    let startSide: SwipeActionSide | undefined
    let startOffset = 0
    let suppressClick = false
    let directionDetermined = false
    let endTime = 0

    onSmartMounted(resize)
    onWindowResize(resize)
    onUpdated(resize)
    useResizeObserver(left, resize)
    useResizeObserver(right, resize)
    useClickOutside(host, 'touchstart', handleClickOutside)
    useEventListener(() => document, 'click', handleDocumentClick, { capture: true })

    watch(
      () => props.disabled,
      (disabled) => disabled && close(),
    )

    function resize() {
      leftWidth = left.value?.offsetWidth ?? 0
      rightWidth = right.value?.offsetWidth ?? 0

      if (!touching.value && openedSide) {
        setPosition(openedSide)
      }
    }

    function setPosition(side?: SwipeActionSide) {
      const width = side === 'left' ? leftWidth : side === 'right' ? rightWidth : 0
      const nextSide = width ? side : undefined
      const previousSide = openedSide

      offset.value = nextSide === 'left' ? width : nextSide === 'right' ? -width : 0
      openedSide = nextSide

      if (nextSide !== previousSide) {
        nextSide ? call(props.onOpen, nextSide) : call(props.onClose)
      }
    }

    // expose
    function open(side: SwipeActionSide = 'right') {
      if (props.disabled) {
        return
      }

      if (touching.value) {
        endTouch()
      }

      resize()
      setPosition(side)
    }

    // expose
    function close() {
      if (touching.value) {
        endTouch()
      }

      setPosition()
    }

    function handleTouchstart(event: TouchEvent) {
      suppressClick = false

      if (props.disabled || event.touches.length !== 1) {
        return
      }

      resize()
      startOffset = offset.value
      startSide = openedSide
      directionDetermined = false
      startTouch(event)
    }

    function handleTouchmove(event: TouchEvent) {
      if (!touching.value || props.disabled) {
        return
      }

      if (event.touches.length !== 1) {
        handleTouchcancel()
        return
      }

      moveTouch(event)

      if (!directionDetermined) {
        if (Math.max(offsetX.value, offsetY.value) < TOUCH_OFFSET) {
          direction.value = undefined
          return
        }

        directionDetermined = true
      }

      if (direction.value !== 'horizontal') {
        return
      }

      const nextOffset = clamp(startOffset + deltaX.value, -rightWidth, leftWidth)

      if (!offset.value && !nextOffset) {
        return
      }

      preventDefault(event)
      event.stopPropagation()
      suppressClick = true
      offset.value = nextOffset
    }

    function handleTouchend() {
      if (!touching.value) {
        return
      }

      endTime = performance.now()
      endTouch()

      if (direction.value !== 'horizontal' || !suppressClick) {
        return
      }

      const side = offset.value > 0 ? 'left' : 'right'
      const width = side === 'left' ? leftWidth : rightWidth
      const quickSwiping = performance.now() - startTime.value <= SWIPE_DELAY && offsetX.value >= SWIPE_OFFSET
      const opening = quickSwiping
        ? (offset.value > 0 && deltaX.value > 0) || (offset.value < 0 && deltaX.value < 0)
        : Math.abs(offset.value) > width / 2

      setPosition(opening ? side : undefined)
    }

    function handleTouchcancel() {
      if (!touching.value) {
        return
      }

      endTime = performance.now()
      endTouch()
      setPosition(startSide)
    }

    function handleClickCapture(event: Event) {
      const preventClick = suppressClick && (touching.value || performance.now() - endTime <= SWIPE_DELAY)
      suppressClick = false

      if (preventClick) {
        preventDefault(event)
        event.stopPropagation()
      }
    }

    function handleClickContent(event: Event) {
      if (offset.value) {
        preventDefault(event)
        event.stopPropagation()
        close()
      }
    }

    function handleClickActions() {
      if (props.closeOnClickAction && !props.disabled) {
        close()
      }
    }

    function handleAction(action: SwipeActionItem, side: SwipeActionSide, event: Event) {
      if (!props.disabled && !action.disabled) {
        call(props.onAction, action, side, event)
      }
    }

    function handleClickOutside() {
      if (props.closeOnClickOutside && offset.value) {
        close()
      }
    }

    function handleDocumentClick(event: MouseEvent) {
      if (!host.value?.contains(event.target as Node)) {
        handleClickOutside()
      }
    }

    function handleFocusout(event: FocusEvent) {
      if (!host.value?.contains(event.relatedTarget as Node)) {
        handleClickOutside()
      }
    }

    return {
      host,
      left,
      right,
      offset,
      touching,
      n,
      classes,
      toNumber,
      resize,
      open,
      close,
      handleTouchstart,
      handleTouchmove,
      handleTouchend,
      handleTouchcancel,
      handleClickCapture,
      handleClickContent,
      handleClickActions,
      handleAction,
      handleFocusout,
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
@import '../button/button';
@import './swipeAction';
</style>
