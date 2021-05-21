<template>
  <div class="var-back-top" :class="[show ? 'var-back-top--active' : null]" @click.stop="click">
    <slot>
      <var-button type="primary" round class="var-back-top__button">
        <var-icon name="chevron-up" />
      </var-button>
    </slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref, onMounted, onBeforeUnmount } from 'vue'
import Button from '../button'
import Icon from '../icon'
import { props } from './props'
import { isString, easeInOutCubic, throttle, toNumber } from '../utils/shared'
import { getScrollTop, getScrollLeft, requestAnimationFrame } from '../utils/elements'

export default defineComponent({
  name: 'VarBackTop',
  components: {
    [Button.name]: Button,
    [Icon.name]: Icon,
  },
  props,
  setup(props) {
    const element: Ref<Element | Window> = ref(window)
    const show: Ref<boolean> = ref(false)

    const click = () => {
      props.onClick?.()
      const top = getScrollTop(element.value as Element)
      const left = getScrollLeft(element.value as Element)

      const startTime = Date.now()

      const frameFunc = () => {
        const progress = (Date.now() - startTime) / props.duration
        if (progress < 1) {
          const nextTop = top * (1 - easeInOutCubic(progress))

          ;(element.value as Element).scrollTo(left, nextTop)
          requestAnimationFrame(frameFunc)
        } else {
          ;(element.value as Element).scrollTo(left, 0)
        }
      }
      requestAnimationFrame(frameFunc)
    }

    const scroll = () => {
      show.value = getScrollTop(element.value as Element) >= toNumber(props.visibilityHeight)
    }

    const throttleScroll = throttle(scroll, 200)

    const getElement = () => {
      if (!isString(props.target)) throw Error('[Varlet] BackTop: type of prop "target" should be a string')
      const el = document.querySelector(props.target)
      if (!el) throw Error('[Varlet] BackTop: "target" should be a selector')
      return el
    }

    onMounted(() => {
      if (props.target) element.value = getElement()
      element.value.addEventListener('scroll', throttleScroll)
    })

    onBeforeUnmount(() => {
      element.value.removeEventListener('scroll', throttleScroll)
    })

    return {
      show,
      click,
    }
  },
})
</script>

<style lang="less">
@import '../button/button';
@import '../icon/icon';
@import './backTop';
</style>
