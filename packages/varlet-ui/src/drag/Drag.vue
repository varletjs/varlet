<template>
  <Teleport :to="teleport">
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
      v-bind="getAttrs()"
    >
      <slot />
    </div>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, watch, type Ref } from 'vue'
import { props } from './props'
import { createNamespace } from '../utils/components'
import { getRect, toPxNum } from '../utils/elements'
import { onSmartMounted, onWindowResize } from '@varlet/use'
import { clamp } from '@varlet/shared'

const { n, classes } = createNamespace('drag')

export default defineComponent({
  name: 'VarDrag',
  inheritAttrs: false,
  props,
  setup(props, { attrs }) {
    const drag: Ref<HTMLElement | null> = ref(null)
    const x = ref(0)
    const y = ref(0)
    const boundary = reactive({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    })
    const dragged = ref(false)
    const enableTransition = ref(false)
    const dragging = ref(false)

    let touching = false
    let prevX = 0
    let prevY = 0
    let draggingRunner: number | null = null

    const handleTouchstart = (event: TouchEvent) => {
      if (props.disabled) {
        return
      }

      draggingRunner && window.clearTimeout(draggingRunner)

      const { clientX, clientY } = event.touches[0]

      saveXY()
      prevX = clientX
      prevY = clientY
      touching = true
      dragging.value = false
    }

    const handleTouchmove = async (event: TouchEvent) => {
      if (!touching || props.disabled) {
        return
      }

      event.preventDefault()
      enableTransition.value = false
      dragged.value = true
      dragging.value = true

      const { clientX, clientY } = event.touches[0]
      const deltaX = clientX - prevX
      const deltaY = clientY - prevY
      prevX = clientX
      prevY = clientY

      if (props.direction.includes('x')) {
        x.value += deltaX
      }

      if (props.direction.includes('y')) {
        y.value += deltaY
      }

      clampToBoundary()
    }

    const handleTouchend = () => {
      if (props.disabled) {
        return
      }

      touching = false
      enableTransition.value = true
      attract()

      draggingRunner = window.setTimeout(() => {
        dragging.value = false
      }, 0)
    }

    const saveXY = () => {
      const { left, top } = getOffset()
      x.value = left
      y.value = top
    }

    const getOffset = () => {
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

    const getRange = () => {
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

    const attract = () => {
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

    const clampToBoundary = () => {
      const { minX, minY, maxX, maxY } = getRange()
      x.value = clamp(x.value, minX, maxX)
      y.value = clamp(y.value, minY, maxY)
    }

    const toPxBoundary = () => {
      const { top = 0, bottom = 0, left = 0, right = 0 } = props.boundary

      boundary.top = toPxNum(top)
      boundary.bottom = toPxNum(bottom)
      boundary.left = toPxNum(left)
      boundary.right = toPxNum(right)
    }

    const getAttrs = () => {
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
    const resize = () => {
      if (!dragged.value) {
        return
      }

      saveXY()
      clampToBoundary()
    }

    // expose
    const reset = () => {
      enableTransition.value = false
      dragged.value = false
      x.value = 0
      y.value = 0
    }

    watch(() => props.boundary, toPxBoundary)
    onWindowResize(resize)
    onSmartMounted(() => {
      toPxBoundary()
      resize()
    })

    return {
      drag,
      x,
      y,
      enableTransition,
      dragging,
      n,
      classes,
      getAttrs,
      handleTouchstart,
      handleTouchmove,
      handleTouchend,
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
