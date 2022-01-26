<template>
  <div
    class="var-back-top"
    ref="backTopEl"
    :class="[show ? 'var-back-top--active' : null]"
    :style="{
      right: right === undefined ? right : toPxNum(right),
      bottom: bottom === undefined ? bottom : toPxNum(bottom),
    }"
    @click.stop="click"
  >
    <slot>
      <var-button type="primary" round var-back-top-cover>
        <var-icon name="chevron-up" />
      </var-button>
    </slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'
import VarButton from '../button'
import VarIcon from '../icon'
import { props } from './props'
import { isString, easeInOutCubic, throttle, isPlainObject } from '../utils/shared'
import { getScrollTop, getScrollLeft, scrollTo, getParentScroller, toPxNum } from '../utils/elements'
import type { Ref } from 'vue'

export default defineComponent({
  name: 'VarBackTop',
  components: {
    VarButton,
    VarIcon,
  },
  props,
  setup(props) {
    let element: HTMLElement | Window
    const show: Ref<boolean> = ref(false)
    const backTopEl: Ref<HTMLDivElement | null> = ref(null)

    const click = (event: MouseEvent) => {
      props.onClick?.(event)
      const left = getScrollLeft(element as HTMLElement)

      scrollTo(element, {
        left,
        duration: props.duration,
        animation: easeInOutCubic,
      })
    }

    const scroll = () => {
      show.value = getScrollTop(element as HTMLElement) >= toPxNum(props.visibilityHeight)
    }

    const throttleScroll = throttle(scroll, 200)

    const getHTMLElement = () => {
      if (!isString(props.target) && !isPlainObject(props.target)) {
        throw Error('[Varlet] BackTop: type of prop "target" should be a string or an Object')
      }

      const el = isString(props.target) ? document.querySelector(props.target) : props.target
      if (!el) throw Error('[Varlet] BackTop: "target" should be a selector')

      return el as HTMLElement
    }

    onMounted(() => {
      element = props.target ? getHTMLElement() : getParentScroller(backTopEl.value!)
      element.addEventListener('scroll', throttleScroll)
    })

    onBeforeUnmount(() => {
      element.removeEventListener('scroll', throttleScroll)
    })

    return {
      show,
      backTopEl,
      toPxNum,
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
