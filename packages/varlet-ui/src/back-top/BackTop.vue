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
        <var-button type="primary" round var-back-top-cover>
          <var-icon name="chevron-up" />
        </var-button>
      </slot>
    </div>
  </teleport>
</template>
<script lang="ts">
import VarButton from '../button'
import VarIcon from '../icon'
import {
  defineComponent,
  ref,
  onBeforeUnmount,
  onDeactivated,
  onMounted,
  type Ref,
  type TeleportProps,
  onActivated,
} from 'vue'
import { props } from './props'
import { throttle } from '@varlet/shared'
import { easeInOutCubic } from '../utils/shared'
import {
  getScrollTop,
  getScrollLeft,
  scrollTo,
  getParentScroller,
  toPxNum,
  toSizeUnit,
  getTarget,
} from '../utils/elements'
import { call, createNamespace } from '../utils/components'

const { n, classes } = createNamespace('back-top')

export default defineComponent({
  name: 'VarBackTop',
  components: {
    VarButton,
    VarIcon,
  },
  inheritAttrs: false,
  props,
  setup(props) {
    const show: Ref<boolean> = ref(false)
    const backTopEl: Ref<HTMLDivElement | null> = ref(null)
    const disabled: Ref<TeleportProps['disabled']> = ref(true)

    let scroller: HTMLElement | Window

    const handleClick = (event: MouseEvent) => {
      call(props.onClick, event)

      const left = getScrollLeft(scroller)

      scrollTo(scroller, {
        left,
        duration: props.duration,
        animation: easeInOutCubic,
      })
    }

    const handleScroll = throttle(() => {
      show.value = getScrollTop(scroller) >= toPxNum(props.visibilityHeight)
    }, 200)

    const setScroller = () => {
      scroller = props.target ? getTarget(props.target, 'BackTop') : getParentScroller(backTopEl.value!)
    }

    const addScrollerEventListener = () => {
      scroller.addEventListener('scroll', handleScroll)
    }

    const removeScrollerEventListener = () => {
      scroller.removeEventListener('scroll', handleScroll)
    }

    onMounted(() => {
      setScroller()
      addScrollerEventListener()
      disabled.value = false
    })

    onActivated(addScrollerEventListener)
    onBeforeUnmount(removeScrollerEventListener)
    onDeactivated(removeScrollerEventListener)

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
