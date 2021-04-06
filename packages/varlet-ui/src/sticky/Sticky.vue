<template>
  <div
    class="var-sticky"
    ref="stickyEl"
    :style="{
      zIndex: toNumber(zIndex),
      top: !isFixed ? `${offsetTop}px` : null,
      width: isFixed ? fixedWidth : null,
      height: isFixed ? fixedHeight : null,
    }"
  >
    <div
      class="var-sticky__wrapper"
      ref="wrapperEl"
      :style="{
        zIndex: toNumber(zIndex),
        position: isFixed ? 'fixed' : null,
        width: isFixed ? fixedWrapperWidth : null,
        height: isFixed ? fixedWrapperHeight : null,
        left: isFixed ? fixedLeft : null,
        top: isFixed ? fixedTop : null,
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, onMounted, onUnmounted, computed, ComputedRef } from 'vue'
import { props } from './props'
import { getParentScroller, toPxNum } from '../utils/elements'
import { toNumber } from '../utils/shared'

export default defineComponent({
  name: 'VarSticky',
  props,
  setup(props) {
    const stickyEl: Ref<HTMLElement | null> = ref(null)
    const wrapperEl: Ref<HTMLElement | null> = ref(null)

    let isSupportCSSSticky = false

    const isFixed: Ref<boolean> = ref(false)
    const fixedTop: Ref<string> = ref('0px')
    const fixedLeft: Ref<string> = ref('0px')
    const fixedWidth: Ref<string> = ref('auto')
    const fixedHeight: Ref<string> = ref('auto')
    const fixedWrapperWidth: Ref<string> = ref('auto')
    const fixedWrapperHeight: Ref<string> = ref('auto')

    const offsetTop: ComputedRef<number> = computed(() => toPxNum(props.offsetTop))

    let scroller: HTMLElement | Window = window

    const handleScroll = () => {
      let scrollerTop = 0

      if (scroller !== window) {
        const { top } = (scroller as HTMLElement).getBoundingClientRect()
        scrollerTop = top
      }

      const sticky = stickyEl.value as HTMLElement
      const wrapper = wrapperEl.value as HTMLElement

      const { top: stickyTop, left: stickyLeft } = sticky.getBoundingClientRect()
      const currentOffsetTop = stickyTop - scrollerTop
      const { onScroll } = props

      if (currentOffsetTop <= offsetTop.value) {
        if (!isSupportCSSSticky) {
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

    onMounted(() => {
      const sticky = stickyEl.value as HTMLInputElement

      isSupportCSSSticky = ['sticky', '-webkit-sticky'].includes(window.getComputedStyle(sticky).position)

      window.addEventListener('scroll', handleScroll)
      scroller = getParentScroller(sticky)
      scroller !== window && scroller.addEventListener('scroll', handleScroll)

      handleScroll()
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
      scroller !== window && scroller.removeEventListener('scroll', handleScroll)
    })

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
      toNumber,
    }
  },
})
</script>
<style lang="less">
@import './sticky';
</style>
