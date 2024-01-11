<template>
  <Teleport :to="teleport === false ? undefined : teleport" :disabled="teleportDisabled || teleport === false">
    <div
      :class="classes(n(), [safeArea, n('--safe-area')], formatElevation(elevation, 3))"
      :style="{
        height: `${toSizeUnit(maxAnchor)}`,
        transform: `translateY(calc(100% - ${toSizeUnit(visibleHeight)}))`,
        transition: touching
          ? 'none'
          : `transform ${toNumber(
              duration
            )}ms var(--floating-panel-transition-timing-function), background-color 0.25s`,
      }"
      @touchstart="handleTouchstart"
      @touchmove="handleTouchmove"
      @touchend="handleTouchend"
      @touchcancel="handleTouchend"
    >
      <div :class="n('header')">
        <div :class="n('header-toolbar')"></div>
      </div>
      <div :class="n('content')" ref="contentRef">
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue'
import { props } from './props'
import { useLock } from '../context/lock'
import { createNamespace, formatElevation, useTeleport } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { useTouch, useWindowSize, useVModel } from '@varlet/use'
import { toNumber, isEmpty, preventDefault, call } from '@varlet/shared'

const { name, n, classes } = createNamespace('floating-panel')

const DEFAULT_START_ANCHOR = 100
const OVERFLOW_REDUCE_RATIO = 0.2

export default defineComponent({
  name,
  props,
  setup(props) {
    const visibleHeight = ref<number>(0)
    const contentRef = ref<HTMLElement | null>(null)
    const { height: windowHeight } = useWindowSize()
    const defaultEndAnchor = computed(() => windowHeight.value * 0.6)
    const anchor = useVModel(props, 'anchor')
    const anchors = computed<number[]>(() => {
      const defaultAnchors = [DEFAULT_START_ANCHOR, defaultEndAnchor.value]
      const { anchors } = props
      return isEmpty(anchors) ? defaultAnchors : anchors!
    })
    const minAnchor = computed<number>(() => Math.min(...anchors.value))
    const maxAnchor = computed<number>(() => Math.max(...anchors.value))
    const { disabled: teleportDisabled } = useTeleport()
    const { deltaY, touching, startTouch, moveTouch, endTouch, isReachTop, isReachBottom } = useTouch()

    let startVisibleHeight: number

    useLock(() => touching.value)

    watch(() => anchor.value, matchAnchor, { immediate: true })

    watch(
      () => anchors.value,
      () => {
        matchAnchor(anchor.value)
      },
      { immediate: true }
    )

    function matchAnchor(anchor: number | undefined | null) {
      setVisibleHeight(anchor != null ? anchor : minAnchor.value)
    }

    function handleTouchstart(event: TouchEvent) {
      startTouch(event)

      startVisibleHeight = visibleHeight.value
    }

    function handleTouchmove(event: TouchEvent) {
      moveTouch(event)

      const target = event.target as Element
      const eventFromContent = contentRef.value === target || contentRef.value?.contains(target)

      if (eventFromContent && !props.contentDraggable) {
        return
      }

      if (
        eventFromContent &&
        props.contentDraggable &&
        visibleHeight.value >= maxAnchor.value &&
        !isReachTop(contentRef.value!)
      ) {
        if (isReachBottom(contentRef.value!)) {
          preventDefault(event)
        }
        return
      }

      const targetVisibleHeight = startVisibleHeight - deltaY.value
      setVisibleHeight(clampVisibleHeight(targetVisibleHeight))
      preventDefault(event)
    }

    function handleTouchend() {
      endTouch()

      const oldAnchor = anchor.value
      setVisibleHeight(visibleHeight.value)
      anchor.value = visibleHeight.value

      if (anchor.value !== oldAnchor) {
        call(props.onAnchorChange, visibleHeight.value)
      }
    }

    function setVisibleHeight(targetVisibleHeight: number) {
      visibleHeight.value = touching.value ? targetVisibleHeight : findNearestAnchor(targetVisibleHeight)
    }

    function clampVisibleHeight(visibleHeight: number): number {
      if (visibleHeight > maxAnchor.value) {
        // overflow top
        const overflowHeight = visibleHeight - maxAnchor.value
        return maxAnchor.value + overflowHeight * OVERFLOW_REDUCE_RATIO
      }

      if (visibleHeight < minAnchor.value) {
        // overflow bottom
        const overflowHeight = minAnchor.value - visibleHeight
        return minAnchor.value - overflowHeight * OVERFLOW_REDUCE_RATIO
      }

      return visibleHeight
    }

    function findNearestAnchor(targetAnchor: number): number {
      if (anchors.value.includes(targetAnchor)) {
        return targetAnchor
      }

      let minDifference = Infinity
      let nearestAnchor = 0

      anchors.value.forEach((anchor) => {
        const difference = Math.abs(anchor - targetAnchor)
        if (difference < minDifference) {
          minDifference = difference
          nearestAnchor = anchor
        }
      })

      return nearestAnchor
    }

    return {
      contentRef,
      teleportDisabled,
      touching,
      minAnchor,
      maxAnchor,
      visibleHeight,
      n,
      classes,
      toSizeUnit,
      toNumber,
      formatElevation,
      handleTouchstart,
      handleTouchmove,
      handleTouchend,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import './floatingPanel.less';
</style>
