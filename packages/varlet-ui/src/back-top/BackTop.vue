<template>
  <div class="var-back-top" :class="[show ? 'var-back-top--active' : null]" @click.stop="click">
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
import { isString, easeInOutCubic, throttle, toNumber } from '../utils/shared'
import { getScrollTop, getScrollLeft, scrollTo } from '../utils/elements'
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

    const click = () => {
      props.onClick?.()
      const left = getScrollLeft(element as HTMLElement)

      scrollTo(element, {
        left,
        duration: props.duration,
        animation: easeInOutCubic,
      })
    }

    const scroll = () => {
      show.value = getScrollTop(element as HTMLElement) >= toNumber(props.visibilityHeight)
    }

    const throttleScroll = throttle(scroll, 200)

    const getHTMLElement = () => {
      if (!isString(props.target)) throw Error('[Varlet] BackTop: type of prop "target" should be a string')

      const el = document.querySelector(props.target)
      if (!el) throw Error('[Varlet] BackTop: "target" should be a selector')

      return el as HTMLElement
    }

    onMounted(() => {
      element = props.target ? getHTMLElement() : window
      element.addEventListener('scroll', throttleScroll)
    })

    onBeforeUnmount(() => {
      element.removeEventListener('scroll', throttleScroll)
    })

    return {
      show,
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
