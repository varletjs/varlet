<template>
  <div
    ref="stickyEl"
    :class="classes(n(), [enableCSSMode, n('--css-mode')])"
    :style="{
      zIndex: toNumber(zIndex),
      top: enableCSSMode ? `${offsetTop}px` : undefined,
      width: enableFixedMode ? fixedWidth : undefined,
      height: enableFixedMode ? fixedHeight : undefined,
    }"
  >
    <div
      ref="wrapperEl"
      :class="n('wrapper')"
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
import { computed, defineComponent, ref, watch } from 'vue'
import { call, doubleRaf, getRect, raf, toNumber } from '@varlet/shared'
import { onSmartMounted, onSmartUnmounted, onWindowResize, useEventListener } from '@varlet/use'
import { createNamespace } from '../utils/components'
import { getParentScroller, toPxNum } from '../utils/elements'
import { props } from './props'

const { name, n, classes } = createNamespace('sticky')

export interface StickyFixedParams {
  offsetTop: number
  isFixed: boolean
}

export default defineComponent({
  name,
  props,
  setup(props) {
    const stickyEl = ref<HTMLElement | null>(null)
    const wrapperEl = ref<HTMLElement | null>(null)
    const isFixed = ref(false)
    const fixedTop = ref('0px')
    const fixedLeft = ref('0px')
    const fixedWidth = ref('auto')
    const fixedHeight = ref('auto')
    const fixedWrapperWidth = ref('auto')
    const fixedWrapperHeight = ref('auto')
    const enableCSSMode = computed(() => !props.disabled && props.cssMode)
    const enableFixedMode = computed(() => !props.disabled && !props.cssMode && isFixed.value)
    const offsetTop = computed(() => toPxNum(props.offsetTop))

    let scroller: HTMLElement | Window

    watch(() => props.disabled, resize)

    onSmartMounted(async () => {
      await doubleRaf()
      setupScroller()
      handleScroll()
    })

    onSmartUnmounted(removeScrollListener)

    onWindowResize(resize)

    useEventListener(() => window, 'scroll', handleScroll)

    function computeFixedParams(): StickyFixedParams | undefined {
      const { cssMode, disabled } = props

      if (disabled) {
        return
      }

      let scrollerTop = 0

      if (scroller && scroller !== window) {
        const { top } = getRect(scroller as HTMLElement)
        scrollerTop = top
      }

      const wrapper = wrapperEl.value as HTMLElement
      const sticky = stickyEl.value as HTMLElement
      const { top: stickyTop, left: stickyLeft } = getRect(sticky)
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

    function setupScroller() {
      scroller = getParentScroller(stickyEl.value as HTMLElement)

      if (scroller !== window) {
        scroller.addEventListener('scroll', handleScroll)
      }
    }

    function handleScroll() {
      // returns undefined when disabled = true
      const fixedParams = computeFixedParams()

      if (fixedParams) {
        call(props.onScroll, fixedParams.offsetTop, fixedParams.isFixed)
      }
    }

    function removeScrollListener() {
      if (!scroller || scroller === window) {
        // may be null in nuxt
        return
      }

      scroller.removeEventListener('scroll', handleScroll)
    }

    // expose
    async function resize() {
      isFixed.value = false
      await raf()
      computeFixedParams()
    }

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
      n,
      classes,
      resize,
      toNumber,
    }
  },
})
</script>
<style lang="less">
@import '../styles/common';
@import './sticky';
</style>
