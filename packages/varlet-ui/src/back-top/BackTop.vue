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
      @click.stop="click"
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
  onMounted,
  onBeforeUnmount,
  onActivated,
  onDeactivated,
  watch,
  type Ref,
  type TeleportProps,
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

    let target: HTMLElement | Window

    const click = (event: MouseEvent) => {
      call(props.onClick, event)
      const left = getScrollLeft(target)

      scrollTo(target, {
        left,
        duration: props.duration,
        animation: easeInOutCubic,
      })
    }

    const scroll = () => {
      show.value = getScrollTop(target) >= toPxNum(props.visibilityHeight)
    }

    const throttleScroll = throttle(scroll, 200)

    const setTarget = () => {
      target = props.target ? getTarget(props.target, 'BackTop') : getParentScroller(backTopEl.value!)
    }

    const addTargetEventListener = () => {
      target.addEventListener('scroll', throttleScroll)
      disabled.value = false
    }

    const removeTargetEventListener = () => {
      target.removeEventListener('scroll', throttleScroll)
    }

    watch(
      () => props.target,
      () => {
        removeTargetEventListener()
        setTarget()
        addTargetEventListener()
      }
    )

    onMounted(() => {
      setTarget()
      addTargetEventListener()
    })
    onActivated(() => {
      setTarget()
      addTargetEventListener()
    })

    onBeforeUnmount(removeTargetEventListener)
    onDeactivated(removeTargetEventListener)

    return {
      disabled,
      show,
      backTopEl,
      toSizeUnit,
      n,
      classes,
      click,
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
