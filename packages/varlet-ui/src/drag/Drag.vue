<template>
  <Teleport :to="teleport === false ? undefined : teleport" :disabled="teleportDisabled || teleport === false">
    <div
      ref="drag"
      :class="classes(n(), n('$--box'), [enableTransition, n('--transition')])"
      :style="{
        'z-index': zIndex,
      }"
      @touchstart="handleTouchstart"
      @touchmove="handleTouchmove"
      @touchend="handleTouchend"
      @touchcancel="handleTouchend"
      @click="handleClick"
      v-bind="getAttrs()"
    >
      <slot />
    </div>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, watch } from 'vue'
import { props } from './props'
import { createNamespace, useTeleport } from '../utils/components'
import { toPxNum } from '../utils/elements'
import { onSmartMounted, onWindowResize, useTouch } from '@varlet/use'
import { clamp, getRect, preventDefault, call } from '@varlet/shared'

const { name, n, classes } = createNamespace('drag')

export default defineComponent({
  name,
  inheritAttrs: false,
  props,
  setup(props, { attrs }) {
    const drag = ref<HTMLElement | null>(null)
    const x = ref(0)
    const y = ref(0)
    const dragged = ref(false)
    const enableTransition = ref(false)
    const { touching, dragging, moveX, moveY, startTouch, moveTouch, endTouch, resetTouch } = useTouch()
    const { disabled: teleportDisabled } = useTeleport()
    const boundary = reactive({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    })

    watch(() => props.boundary, toPxBoundary)

    onWindowResize(resize)

    onSmartMounted(() => {
      toPxBoundary()
      resize()
    })

    function handleTouchstart(event: TouchEvent) {
      if (props.disabled) {
        return
      }

      startTouch(event)
      saveXY()
    }

    async function handleTouchmove(event: TouchEvent) {
      if (!touching.value || props.disabled) {
        return
      }

      moveTouch(event)
      preventDefault(event)
      enableTransition.value = false
      dragged.value = true

      if (props.direction.includes('x')) {
        x.value += moveX.value
      }

      if (props.direction.includes('y')) {
        y.value += moveY.value
      }

      clampToBoundary()
    }

    function handleTouchend() {
      if (props.disabled) {
        return
      }

      endTouch()
      enableTransition.value = true
      attract()
    }

    function handleClick(event: Event) {
      if (dragging.value) {
        return
      }

      call(props.onClick, event)
    }

    function saveXY() {
      const { left, top } = getOffset()
      x.value = left
      y.value = top
    }

    function getOffset() {
      const dragRect = getRect(drag.value!)
      const windowRect = getRect(window)

      const top = dragRect.top - windowRect.top
      const bottom = windowRect.bottom - dragRect.bottom
      const left = dragRect.left - windowRect.left
      const right = windowRect.right - dragRect.right

      const { width, height } = dragRect
      const { width: windowWidth, height: windowHeight } = windowRect

      return {
        top,
        bottom,
        left,
        right,
        width,
        height,
        halfWidth: width / 2,
        halfHeight: height / 2,
        windowWidth,
        windowHeight,
      }
    }

    function getRange() {
      const offset = getOffset()
      const x1 = boundary.left
      const x2 = offset.windowWidth - boundary.right - offset.width
      const y1 = boundary.top
      const y2 = offset.windowHeight - boundary.bottom - offset.height

      return {
        minX: x1,
        minY: y1,
        // fallback the drag element overflows boundary
        maxX: x1 < x2 ? x2 : x1,
        maxY: y1 < y2 ? y2 : y1,
      }
    }

    function attract() {
      if (props.attraction == null) {
        return
      }

      const { halfWidth, halfHeight, top, bottom, left, right } = getOffset()
      const { minX, minY, maxX, maxY } = getRange()

      const leftDistance = left + halfWidth - boundary.left
      const rightDistance = right + halfWidth - boundary.right
      const topDistance = top + halfHeight - boundary.top
      const bottomDistance = bottom + halfHeight - boundary.bottom

      const nearLeft = leftDistance <= rightDistance
      const nearTop = topDistance <= bottomDistance

      if (props.attraction.includes('x')) {
        x.value = nearLeft ? minX : maxX
      }

      if (props.attraction.includes('y')) {
        y.value = nearTop ? minY : maxY
      }
    }

    function clampToBoundary() {
      const { minX, minY, maxX, maxY } = getRange()
      x.value = clamp(x.value, minX, maxX)
      y.value = clamp(y.value, minY, maxY)
    }

    function toPxBoundary() {
      const { top = 0, bottom = 0, left = 0, right = 0 } = props.boundary

      boundary.top = toPxNum(top)
      boundary.bottom = toPxNum(bottom)
      boundary.left = toPxNum(left)
      boundary.right = toPxNum(right)
    }

    function getAttrs() {
      const style = (attrs.style as Record<string, any>) ?? {}

      return {
        ...attrs,
        style: {
          ...style,
          // when the drag element is dragged for the first time, the inset should be cleared to avoid affecting translateX and translateY.
          top: dragged.value ? 0 : style.top,
          left: dragged.value ? 0 : style.left,
          right: dragged.value ? 'auto' : style.right,
          bottom: dragged.value ? 'auto' : style.bottom,
          transform: dragged.value ? `translate(${x.value}px, ${y.value}px)` : style.transform,
        },
      }
    }

    // expose
    function resize() {
      if (!dragged.value) {
        return
      }

      saveXY()
      clampToBoundary()
    }

    // expose
    function reset() {
      resetTouch()
      enableTransition.value = false
      dragged.value = false
      x.value = 0
      y.value = 0
    }

    return {
      drag,
      x,
      y,
      enableTransition,
      dragging,
      teleportDisabled,
      n,
      classes,
      getAttrs,
      handleTouchstart,
      handleTouchmove,
      handleTouchend,
      handleClick,
      resize,
      reset,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common.less';
@import './drag.less';
</style>
