<template>
  <teleport to="body" :disabled="disabled">
    <div
      ref="backTopEl"
      :class="classes(n(), [show, n('--active')])"
      :style="{
        right: toSizeUnit(right),
        bottom: toSizeUnit(bottom),
      }"
      v-bind="$attrs"
      @click.stop="handleClick"
    >
      <slot>
        <var-button :elevation="elevation" type="primary" var-back-top-cover>
          <var-icon name="chevron-up" />
        </var-button>
      </slot>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, onActivated, onMounted, ref, type TeleportProps } from 'vue'
import { call, getScrollLeft, getScrollTop, throttle } from '@varlet/shared'
import { onSmartUnmounted } from '@varlet/use'
import VarButton from '../button'
import VarIcon from '../icon'
import { createNamespace } from '../utils/components'
import { getParentScroller, getTarget, scrollTo, toPxNum, toSizeUnit } from '../utils/elements'
import { easeInOutCubic } from '../utils/shared'
import { props } from './props'

const { name, n, classes } = createNamespace('back-top')

export default defineComponent({
  name,
  components: {
    VarButton,
    VarIcon,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const show = ref(false)
    const backTopEl = ref<HTMLElement | null>(null)
    const disabled = ref<TeleportProps['disabled']>(true)

    let scroller: HTMLElement | Window

    const handleScroll = throttle(() => {
      setBackTopVisibility()
    }, 200)

    onMounted(() => {
      setScroller()
      addScrollerEventListener()
      setBackTopVisibility()
      disabled.value = false
    })

    onActivated(addScrollerEventListener)
    onSmartUnmounted(removeScrollerEventListener)

    function setBackTopVisibility() {
      show.value = getScrollTop(scroller) >= toPxNum(props.visibilityHeight)
    }

    function handleClick(event: Event) {
      call(props.onClick, event)

      const left = getScrollLeft(scroller)

      scrollTo(scroller, {
        left,
        duration: props.duration,
        animation: easeInOutCubic,
      })
    }

    function setScroller() {
      scroller = props.target ? getTarget(props.target, 'BackTop') : getParentScroller(backTopEl.value!)
    }

    function addScrollerEventListener() {
      scroller.addEventListener('scroll', handleScroll)
    }

    function removeScrollerEventListener() {
      if (!scroller) {
        // may be null in nuxt
        return
      }

      scroller.removeEventListener('scroll', handleScroll)
    }

    return {
      disabled,
      show,
      backTopEl,
      toSizeUnit,
      n,
      classes,
      handleClick,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../button/button';
@import '../icon/icon';
@import './backTop';
</style>
