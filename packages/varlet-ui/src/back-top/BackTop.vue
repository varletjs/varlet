<template>
  <teleport to="body" :disabled="disabled">
    <div
      class="var-back-top"
      ref="backTopEl"
      :class="[show ? 'var-back-top--active' : null]"
      :style="{
        right: toSizeUnit(right),
        bottom: toSizeUnit(bottom),
      }"
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
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'
import VarButton from '../button'
import VarIcon from '../icon'
import { props } from './props'
import { isString, easeInOutCubic, throttle, isObject } from '../utils/shared'
import { getScrollTop, getScrollLeft, scrollTo, getParentScroller, toPxNum, toSizeUnit } from '../utils/elements'
import type { Ref, TeleportProps } from 'vue'

export default defineComponent({
  name: 'VarBackTop',
  components: {
    VarButton,
    VarIcon,
  },
  props,
  setup(props) {
    const show: Ref<boolean> = ref(false)
    const backTopEl: Ref<HTMLDivElement | null> = ref(null)
    const disabled: Ref<TeleportProps['disabled']> = ref(true)

    let target: HTMLElement | Window

    const click = (event: MouseEvent) => {
      props.onClick?.(event)
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

    const getTarget = () => {
      const { target } = props

      if (isString(target)) {
        const el = document.querySelector(props.target as string)

        if (!el) {
          throw Error('[Varlet] BackTop: target element cannot found')
        }

        return el as HTMLElement
      }

      if (isObject(target)) return target

      throw Error('[Varlet] BackTop: type of prop "target" should be a selector or an element object')
    }

    onMounted(() => {
      target = props.target ? getTarget() : getParentScroller(backTopEl.value!)
      target.addEventListener('scroll', throttleScroll)
      disabled.value = false
    })

    onBeforeUnmount(() => {
      target.removeEventListener('scroll', throttleScroll)
    })

    return {
      disabled,
      show,
      backTopEl,
      toSizeUnit,
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
