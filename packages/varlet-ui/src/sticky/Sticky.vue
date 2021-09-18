<template>
  <div
    class="var-sticky"
    ref="stickyEl"
    :class="[enableCSSMode ? 'var-sticky--css-mode' : null]"
    :style="{
      zIndex: toNumber(zIndex),
      top: enableCSSMode ? `${offsetTop}px` : null,
      width: enableFixedMode ? fixedWidth : null,
      height: enableFixedMode ? fixedHeight : null,
    }"
  >
    <div
      class="var-sticky__wrapper"
      ref="wrapperEl"
      :style="{
        zIndex: toNumber(zIndex),
        position: enableFixedMode ? 'fixed' : null,
        width: enableFixedMode ? fixedWrapperWidth : null,
        height: enableFixedMode ? fixedWrapperHeight : null,
        left: enableFixedMode ? fixedLeft : null,
        top: enableFixedMode ? fixedTop : null,
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, onActivated, onDeactivated, computed, watch } from 'vue'
import { props } from './props'
import { getParentScroller, toPxNum } from '../utils/elements'
import { toNumber } from '../utils/shared'
import type { Ref, ComputedRef } from 'vue'

export default defineComponent({
  name: 'VarSticky',
  props,
  setup(props) {
    const stickyEl: Ref<HTMLElement | null> = ref(null)
    const wrapperEl: Ref<HTMLElement | null> = ref(null)

    const isFixed: Ref<boolean> = ref(false)
    const fixedTop: Ref<string> = ref('0px')
    const fixedLeft: Ref<string> = ref('0px')
    const fixedWidth: Ref<string> = ref('auto')
    const fixedHeight: Ref<string> = ref('auto')
    const fixedWrapperWidth: Ref<string> = ref('auto')
    const fixedWrapperHeight: Ref<string> = ref('auto')

    const enableCSSMode: ComputedRef<boolean> = computed(() => !props.disabled && props.cssMode)
    const enableFixedMode: ComputedRef<boolean> = computed(() => !props.disabled && isFixed.value)
    const offsetTop: ComputedRef<number> = computed(() => toPxNum(props.offsetTop))

    let scroller: HTMLElement | Window = window

    const handleScroll = () => {
      const { onScroll, cssMode, disabled } = props

      if (disabled) {
        return
      }

      let scrollerTop = 0

      if (scroller !== window) {
        const { top } = (scroller as HTMLElement).getBoundingClientRect()
        scrollerTop = top
      }

      const wrapper = wrapperEl.value as HTMLElement
      const sticky = stickyEl.value as HTMLElement
      const { top: stickyTop, left: stickyLeft } = sticky.getBoundingClientRect()
      const currentOffsetTop = stickyTop - scrollerTop

      if (currentOffsetTop <= offsetTop.value) {
        if (!cssMode) {
          fixedWidth.value = `${sticky.offsetWidth}px`
          fixedHeight.value = `${sticky.offsetHeight}px`
          fixedTop.value = `${scrollerTop + offsetTop.value}px`
          fixedLeft.value = `${stickyLeft}px`
          fixedWrapperWidth.value = `${wrapper.offsetWidth}px`
          fixedWrapperHeight.value = `${wrapper.offsetHeight}px`
          isFixed.value = true
        }

        onScroll?.(offsetTop.value, true)
      } else {
        isFixed.value = false

        onScroll?.(currentOffsetTop, false)
      }
    }

    const addScrollListener = () => {
      scroller = getParentScroller(stickyEl.value as HTMLElement)
      scroller !== window && scroller.addEventListener('scroll', handleScroll)
      window.addEventListener('scroll', handleScroll)
      handleScroll()
    }

    const removeScrollListener = () => {
      scroller !== window && scroller.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleScroll)
    }

    watch(() => props.disabled, handleScroll)

    onActivated(addScrollListener)

    onDeactivated(removeScrollListener)

    onMounted(addScrollListener)

    onUnmounted(removeScrollListener)

    return {
      stickyEl,
      wrapperEl,
      isFixed,
      offsetTop,
      fixedTop,
      fixedLeft,
      fixedWidth,
      fixedHeight,
      fixedWrapperWidth,
      fixedWrapperHeight,
      enableCSSMode,
      enableFixedMode,
      toNumber,
    }
  },
})
</script>
<style lang="less">
@import '../styles/common';
@import './sticky';
</style>
