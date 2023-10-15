<template>
  <Teleport v-if="teleport" :to="teleport">
    <div
      :class="classes(n(), [safeArea, n('--safe-area')], formatElevation(elevation, 2))"
      :style="rootStyles"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
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
    :style="rootStyles"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <div :class="n('header')">
      <div :class="n('header-bar')"></div>
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
import { useTouch } from '@varlet/use'
import { toNumber } from '@varlet/shared'

const { name, n, classes } = createNamespace('floating-panel')

const MIN_FLOATING_PANEL_HEIGHT = 100
const MAX_FLOATING_PANEL_HEIGHT = window.innerHeight * 0.6
const MOVE_RATIO = 0.2

export default defineComponent({
  name,
  props,
  setup(props) {
    const height = ref<number>(0)
    const anchor = useVModel(props, 'anchor')
    const contentRef = ref<HTMLDivElement | null>(null)
    const boundary = computed<{ min: number; max: number }>(() => ({
      min: props.anchors ? Math.min(...props.anchors) : MIN_FLOATING_PANEL_HEIGHT,
      max: props.anchors ? Math.max(...props.anchors) : MAX_FLOATING_PANEL_HEIGHT,
    }))
    const anchors = computed<number[]>(() =>
      props.anchors && props.anchors.length >= 1 ? props.anchors : [boundary.value.min, boundary.value.max]
    )
    const rootStyles = computed<CSSProperties>(() => ({
      height: `${toSizeUnit(boundary.value.max)}`,
      transform: `translateY(calc(100% - ${toSizeUnit(height.value)}))`,
      transition: dragging.value
        ? 'none'
        : `transform ${toNumber(props.duration)}ms cubic-bezier(0.18, 0.89, 0.32, 1.28)`,
    }))

    const { deltaY, dragging, startTouch, moveTouch, endTouch } = useTouch()

    useLock(() => props.lockScroll || dragging.value)

    let startY: number
    let sortedAnchors: number[]

    function handleTouchStart(event: TouchEvent) {
      startTouch(event)

      startY = height.value
    }

    function getMoveDistance(moveY: number): number {
      const offsetY = Math.abs(moveY)
      const { max, min } = boundary.value

      if (offsetY > max) {
        return max + (offsetY - max) * MOVE_RATIO
      }

      if (offsetY < min) {
        return min - (min - offsetY) * MOVE_RATIO
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
      }

      const moveY = startY - deltaY.value
      height.value = getMoveDistance(moveY)
    }

    function findNearestAnchor(anchors: number[], height: number): number {
      if (!sortedAnchors) {
        sortedAnchors = anchors.sort((a, b) => a - b)
      }

      let leftIndex = 0
      let rightIndex = sortedAnchors.length - 1

      while (rightIndex - leftIndex > 1) {
        const midIndex = Math.floor((leftIndex + rightIndex) / 2)

        if (height < sortedAnchors[midIndex]) {
          rightIndex = midIndex
        } else {
          leftIndex = midIndex
        }
      }

      return Math.abs(height - sortedAnchors[leftIndex]) > Math.abs(height - sortedAnchors[rightIndex])
        ? sortedAnchors[rightIndex]
        : sortedAnchors[leftIndex]
    }

    function handleTouchEnd() {
      endTouch()

      height.value = findNearestAnchor(anchors.value, height.value)
      anchor.value = height.value
      call(props.onAnchorChange, height.value)
    }

    // expose
    function resize() {}

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

        anchor.value = height.value
        call(props.onAnchorChange, height.value)
      }
    )

    return {
      rootStyles,
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
