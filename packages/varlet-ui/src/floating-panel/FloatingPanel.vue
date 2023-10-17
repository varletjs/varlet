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

const START_VISIBLE_HEIGHT = 100
const MAX_OFFSET_RATIO = 0.2

export default defineComponent({
  name,
  props,
  setup(props) {
    const visibleHeight = ref<number>(0)
    const contentRef = ref<HTMLDivElement | null>(null)
    const height = ref<number>(window.innerHeight * 0.6)

    const anchor = useVModel(props, 'anchor')
    const { deltaY, touching, startTouch, moveTouch, endTouch } = useTouch()

    const isEmptyAnchors = computed(() => props.anchors == null || props.anchors.length === 0)
    const start = computed<number>(() => (isEmptyAnchors.value ? START_VISIBLE_HEIGHT : Math.min(...props.anchors!)))
    const end = computed<number>(() => {
      const endHeight = height.value
      return isEmptyAnchors.value ? endHeight : Math.max(...props.anchors!)
    })
    const anchors = computed<number[]>(() => {
      const defaultAnchors = [START_VISIBLE_HEIGHT, height.value]
      return isEmptyAnchors.value ? defaultAnchors : props.anchors!
    })
    const rootStyle = computed<CSSProperties>(() => ({
      height: `${toSizeUnit(Math.max(start.value, end.value))}`,
      transform: `translateY(calc(100% - ${toSizeUnit(visibleHeight.value)}))`,
      transition: touching.value
        ? 'none'
        : `transform ${toNumber(props.duration)}ms var(--floating-panel-transition-timing-function)`,
    }))

    let startY: number

    useLock(
      () => touching.value,
      () => props.lockScroll
    )

    onWindowResize(resize)

    watch(
      () => props.anchor,
      (newAnchor: number | undefined) => {
        if (isEmptyAnchors.value) {
          updateVisibleHeight(START_VISIBLE_HEIGHT)
          return
        }

        if (newAnchor == null || !props.anchors!.includes(newAnchor)) {
          updateVisibleHeight(props.anchors![0])
          return
        }

        updateVisibleHeight(newAnchor)
      },
      { immediate: true }
    )

    watch(
      () => props.anchors,
      (newAnchors: number[] | undefined) => {
        updateVisibleHeight(START_VISIBLE_HEIGHT)

        if (!isEmptyAnchors.value) {
          updateVisibleHeight(newAnchors![0])
        }

        updateAnchor()
      }
    )

    function handleTouchStart(event: TouchEvent) {
      startTouch(event)

      startY = visibleHeight.value
    }

    function getMoveDistance(moveY: number): number {
      const offsetY = Math.abs(moveY)
      const maxAnchor = Math.max(start.value, end.value)
      const minAnchor = Math.min(start.value, end.value)

      if (offsetY > maxAnchor) {
        return maxAnchor + (offsetY - maxAnchor) * MAX_OFFSET_RATIO
      }

      if (offsetY < minAnchor) {
        return minAnchor - (minAnchor - offsetY) * MAX_OFFSET_RATIO
      }

      return moveY
    }

    function findNearestAnchor(anchor: number): number {
      if (anchors.value.includes(anchor)) {
        return anchor
      }

      let minDifference = Infinity
      let index = 0

      for (let i = 0; i < anchors.value.length; i++) {
        const difference = Math.abs(anchors.value[i] - anchor)
        if (difference < minDifference) {
          minDifference = difference
          index = i
        }
      }

      return anchors.value[index]
    }

    function updateVisibleHeight(distance: number, isTouching?: boolean) {
      if (isTouching) {
        visibleHeight.value = getMoveDistance(distance)
        return
      }

      visibleHeight.value = findNearestAnchor(visibleHeight.value)
    }

    function handleTouchMove(event: TouchEvent) {
      moveTouch(event)

      const target = event.target as Element
      if (contentRef.value === target || contentRef.value?.contains(target)) {
        if (!props.contentDraggable) {
          return
        }

        if (startY < Math.max(start.value, end.value)) {
          preventDefault(event)
        }
      }

      const moveY = startY - deltaY.value
      updateVisibleHeight(moveY, true)
    }

    function updateAnchor() {
      anchor.value = visibleHeight.value
      call(props.onAnchorChange, visibleHeight.value)
    }

    function handleTouchEnd() {
      endTouch()

      updateVisibleHeight(visibleHeight.value)
      updateAnchor()
    }

    // expose
    function resize() {
      height.value = window.innerHeight * 0.6

      updateVisibleHeight(visibleHeight.value)
      updateAnchor()
    }

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
