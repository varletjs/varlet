<template>
  <div
    :class="classes(n(), [enableCSSMode, n('--css-mode')])"
    ref="stickyEl"
    :style="{
      zIndex: toNumber(zIndex),
      top: enableCSSMode ? `${offsetTop}px` : undefined,
      width: enableFixedMode ? fixedWidth : undefined,
      height: enableFixedMode ? fixedHeight : undefined,
    }"
  >
    <div
      :class="n('wrapper')"
      ref="wrapperEl"
      :style="{
        zIndex: toNumber(zIndex),
        position: enableFixedMode ? 'fixed' : undefined,
        width: enableFixedMode ? fixedWrapperWidth : undefined,
        height: enableFixedMode ? fixedWrapperHeight : undefined,
        left: enableFixedMode ? fixedLeft : undefined,
        top: enableFixedMode ? fixedTop : undefined,
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onUnmounted, onDeactivated, computed, watch, type Ref, type ComputedRef } from 'vue'
import { props } from './props'
import { doubleRaf, getParentScroller, raf, toPxNum } from '../utils/elements'
import { toNumber } from '@varlet/shared'
import { call, createNamespace } from '../utils/components'
import { useEventListener, useMounted } from '@varlet/use'

const { n, classes } = createNamespace('sticky')

export interface StickyFixedParams {
  offsetTop: number
  isFixed: boolean
}

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
    const enableFixedMode: ComputedRef<boolean> = computed(() => !props.disabled && !props.cssMode && isFixed.value)
    const offsetTop: ComputedRef<number> = computed(() => toPxNum(props.offsetTop))

    let scroller: HTMLElement | Window

    const computeFixedParams = (): StickyFixedParams | undefined => {
      const { cssMode, disabled } = props

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

        return {
          offsetTop: offsetTop.value,
          isFixed: true,
        }
      }

      isFixed.value = false

      return {
        offsetTop: currentOffsetTop,
        isFixed: false,
      }
    }

    const handleScroll = () => {
      if (!scroller) {
        return
      }

      // returns undefined when disabled = true
      const fixedParams = computeFixedParams()

      if (fixedParams) {
        call(props.onScroll, fixedParams.offsetTop, fixedParams.isFixed)
      }
    }

    // expose
    const resize = async () => {
      isFixed.value = false
      await raf()
      computeFixedParams()
    }

    const addScrollListener = async () => {
      await doubleRaf()
      scroller = getParentScroller(stickyEl.value as HTMLElement)
      scroller !== window && scroller.addEventListener('scroll', handleScroll)
      handleScroll()
    }

    const removeScrollListener = () => {
      scroller !== window && scroller.removeEventListener('scroll', handleScroll)
    }

    watch(() => props.disabled, resize)

    useMounted(addScrollListener)
    onUnmounted(removeScrollListener)
    onDeactivated(removeScrollListener)
    useEventListener(() => window, 'scroll', handleScroll)
    useEventListener(() => window, 'resize', resize)

    return {
      n,
      classes,
      resize,
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
