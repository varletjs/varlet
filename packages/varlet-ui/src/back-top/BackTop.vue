<template>
  <teleport to="body" :disabled="disabled">
    <div
      :class="classes(n(), [show, n('--active')])"
      ref="backTopEl"
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
import VarButton from '../button'
import VarIcon from '../icon'
import { defineComponent, ref, onMounted, onActivated, type TeleportProps } from 'vue'
import { props } from './props'
import { throttle, getScrollTop, getScrollLeft, call } from '@varlet/shared'
import { easeInOutCubic } from '../utils/shared'
import { scrollTo, getParentScroller, toPxNum, toSizeUnit, getTarget } from '../utils/elements'
import { createNamespace } from '../utils/components'
import { onSmartUnmounted } from '@varlet/use'

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
      show.value = getScrollTop(scroller) >= toPxNum(props.visibilityHeight)
    }, 200)

    onMounted(() => {
      setScroller()
      addScrollerEventListener()
      disabled.value = false
    })

    onActivated(addScrollerEventListener)
    onSmartUnmounted(removeScrollerEventListener)

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
