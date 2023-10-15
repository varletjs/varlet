<template>
  <Teleport v-if="teleport" :to="teleport">
    <div
      :class="classes(n(), [safeArea, n('--safe-area')], formatElevation(elevation, 2))"
      :style="rootStyle"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @touchcancel="handleTouchEnd"
    >
      <div :class="n('header')">
        <div :class="n('header-toolbar')"></div>
      </div>
      <div :class="n('content')" ref="contentRef">
        <slot></slot>
      </div>
    </div>
  </Teleport>
  <div
    v-else
    :class="classes(n(), [safeArea, n('--safe-area')], formatElevation(elevation, 2))"
    :style="rootStyle"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    @touchcancel="handleTouchEnd"
  >
    <div :class="n('header')">
      <div :class="n('header-toolbar')"></div>
    </div>
    <div :class="n('content')" ref="contentRef">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch, type CSSProperties } from 'vue'
import { props } from './props'
import { useLock } from '../context/lock'
import { call, createNamespace, useVModel, formatElevation } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { onWindowResize, useTouch } from '@varlet/use'
import { toNumber, preventDefault } from '@varlet/shared'

const { name, n, classes } = createNamespace('floating-panel')

const MIN_FLOATING_PANEL_HEIGHT = 100
const MAX_OFFSET_RATIO = 0.2

export default defineComponent({
  name,
  props,
  setup(props) {
    const height = ref<number>(0)
    const contentRef = ref<HTMLDivElement | null>(null)
    const maxHeight = ref<number>(window.innerHeight * 0.6)
    const anchor = useVModel(props, 'anchor')
    const boundary = computed<{ min: number; max: number }>(() => {
      const min = Math.min(MIN_FLOATING_PANEL_HEIGHT, maxHeight.value)
      const max = Math.max(MIN_FLOATING_PANEL_HEIGHT, maxHeight.value)

      return {
        min: props.anchors ? Math.min(...props.anchors) : min,
        max: props.anchors ? Math.max(...props.anchors) : max,
      }
    })
    const anchors = computed<number[]>(() => {
      const { max, min } = boundary.value
      return props.anchors && props.anchors.length >= 1 ? props.anchors : [min, max]
    })
    const rootStyle = computed<CSSProperties>(() => ({
      height: `${toSizeUnit(boundary.value.max)}`,
      transform: `translateY(calc(100% - ${toSizeUnit(height.value)}))`,
      transition: dragging.value
        ? 'none'
        : `transform ${toNumber(props.duration)}ms cubic-bezier(0.18, 0.89, 0.32, 1.28)`,
    }))

    const { deltaY, dragging, startTouch, moveTouch, endTouch } = useTouch()

    useLock(() => props.lockScroll || dragging.value)

    let startY: number

    function handleTouchStart(event: TouchEvent) {
      startTouch(event)

      startY = height.value
    }

    function getMoveDistance(moveY: number): number {
      const offsetY = Math.abs(moveY)
      const { max, min } = boundary.value

      if (offsetY > max) {
        return max + (offsetY - max) * MAX_OFFSET_RATIO
      }

      if (offsetY < min) {
        return min - (min - offsetY) * MAX_OFFSET_RATIO
      }

      return moveY
    }

    function handleTouchMove(event: TouchEvent) {
      moveTouch(event)

      const target = event.target as Element
      if (contentRef.value === target || contentRef.value?.contains(target)) {
        if (!props.contentDraggable) {
          return
        }

        if (startY < boundary.value.max) {
          preventDefault(event)
        }
      }

      const moveY = startY - deltaY.value
      height.value = getMoveDistance(moveY)
    }

    function findNearestAnchor(anchors: number[], height: number): number {
      let minDifference = Infinity
      let index = 0

      for (let i = 0; i < anchors.length; i++) {
        const difference = Math.abs(anchors[i] - height)
        if (difference < minDifference) {
          minDifference = difference
          index = i
        }
      }

      return anchors[index]
    }

    function updateAnchor() {
      if (props.anchor) {
        anchor.value = height.value
      }
      call(props.onAnchorChange, height.value)
    }

    function handleTouchEnd() {
      endTouch()

      height.value = findNearestAnchor(anchors.value, height.value)
      updateAnchor()
    }

    // expose
    function resize() {
      maxHeight.value = window.innerHeight * 0.6

      height.value = findNearestAnchor(anchors.value, height.value)
      updateAnchor()
    }

    onWindowResize(resize)

    watch(
      () => props.anchor,
      (newAnchor: number | undefined) => {
        if (!props.anchors || props.anchors.length === 0) {
          height.value = MIN_FLOATING_PANEL_HEIGHT
          return
        }

        if (!newAnchor) {
          height.value = props.anchors[0]
          return
        }

        height.value = props.anchors.includes(newAnchor) ? newAnchor : props.anchors[0]
      },
      { immediate: true }
    )

    watch(
      () => props.anchors,
      (newAnchors: number[] | undefined) => {
        height.value = MIN_FLOATING_PANEL_HEIGHT

        if (newAnchors && newAnchors.length > 0) {
          height.value = newAnchors[0]
        }

        updateAnchor()
      }
    )

    return {
      rootStyle,
      contentRef,
      n,
      classes,
      formatElevation,
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd,
      resize,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import './floatingPanel.less';
</style>
