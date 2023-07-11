<template>
  <Teleport :to="teleport" :disabled="!fixed">
    <div
      ref="drag"
      :class="classes(n(), n('$--box'), [fixed, n('--fixed'), n('--absolute')])"
      :style="{
        transform: `translate(${x}px, ${y}px)`,
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
import { getRect, getRelatedParent, toPxNum } from '../utils/elements'
import { onSmartMounted, onWindowResize } from '@varlet/use'
import { clamp } from '@varlet/shared'

const { n, classes } = createNamespace('drag')

export default defineComponent({
  name: 'VarDrag',
  inheritAttrs: false,
  props,
  setup(props, { attrs }) {
    const touched = ref(false)
    const drag: Ref<HTMLElement | null> = ref(null)
    const x = ref(0)
    const y = ref(0)
    const boundary = reactive({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    })
    let touching = false
    let prevX = 0
    let prevY = 0

    const handleTouchstart = (event: TouchEvent) => {
      const offset = getOffset()
      const { clientX, clientY } = event.touches[0]

      x.value = offset.left
      y.value = offset.top
      prevX = clientX
      prevY = clientY
      touching = true
      touched.value = true
    }

    const handleTouchmove = async (event: TouchEvent) => {
      if (!touching || props.disabled) {
        return
      }

      const { clientX, clientY } = event.touches[0]
      const deltaX = clientX - prevX
      const deltaY = clientY - prevY
      prevX = clientX
      prevY = clientY

      const { minX, minY, maxX, maxY } = getRange()

      if (props.direction.includes('x')) {
        x.value = clamp(x.value + deltaX, minX, maxX)
      }

      if (props.direction.includes('y')) {
        y.value = clamp(y.value + deltaY, minY, maxY)
      }
    }

    const handleTouchend = () => {
      touching = false
    }

    const getOffset = () => {
      const dragRect = getRect(drag.value!)
      const relatedParentRect = getRect(getRelatedParent(drag.value!))
      const top = dragRect.top - relatedParentRect.top
      const bottom = relatedParentRect.bottom - dragRect.bottom
      const left = dragRect.left - relatedParentRect.left
      const right = relatedParentRect.right - dragRect.right

      return {
        top,
        bottom,
        left,
        right,
        width: dragRect.width,
        height: dragRect.height,
        parentWidth: relatedParentRect.width,
        parentHeight: relatedParentRect.height,
      }
    }

    const getRange = () => {
      const offset = getOffset()
      const x1 = boundary.left
      const x2 = offset.parentWidth - boundary.right - offset.width
      const y1 = boundary.top
      const y2 = offset.parentHeight - boundary.bottom - offset.height

      return {
        minX: Math.min(x1, x2),
        maxX: Math.max(x1, x2),
        minY: Math.min(y1, y2),
        maxY: Math.max(y1, y2),
      }
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
          // when the drag element is touched for the first time, the inset should be cleared to avoid affecting translateX and translateY.
          top: touched.value ? 0 : style.top,
          left: touched.value ? 0 : style.left,
          right: touched.value ? 'auto' : style.right,
          bottom: touched.value ? 'auto' : style.bottom,
        },
      }
    }

    watch(() => props.boundary, toPxBoundary)
    onSmartMounted(toPxBoundary)
    onWindowResize(toPxBoundary)

    return {
      drag,
      x,
      y,
      n,
      classes,
      getAttrs,
      handleTouchstart,
      handleTouchmove,
      handleTouchend,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common.less';
@import './drag.less';
</style>
