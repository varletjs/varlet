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
import { isString, easeInOutCubic, throttle } from '../utils/shared'
import { getScrollTop, requestAnimationFrame } from '../utils/elements'

export default defineComponent({
  name: 'VarBackTop',
  components: {
    [Button.name]: Button,
    [Icon.name]: Icon,
  },
  props,
  setup(props) {
    const element: Ref<Element | null> = ref(null)
    const show: Ref<boolean> = ref(false)

    const click = () => {
      props.onClick?.()
      const top = getScrollTop(element.value as Element)
      const startTime = Date.now()

      const frameFunc = () => {
        const progress = (Date.now() - startTime) / props.duration
        if (progress < 1) {
          ;(element.value as Element).scrollTop = top * (1 - easeInOutCubic(progress))
          requestAnimationFrame(frameFunc)
        } else {
          ;(element.value as Element).scrollTop = 0
        }
      }
      requestAnimationFrame(frameFunc)
    }

    const scroll = () => {
      show.value = getScrollTop(element.value as Element) >= +props.visibilityHeight
    }

    const throttleScroll = throttle(scroll, 200)

    const getElement = () => {
      if (!isString(props.target)) throw Error('[Varlet] BackTop: type of prop "target" should be a string')
      const el = document.querySelector(props.target)
      if (!el) throw Error('[Varlet] BackTop: "target" should be a selector')
      return el
    }

    onMounted(() => {
      element.value = getElement()
      if (!element.value) return
      element.value.addEventListener('scroll', throttleScroll)
    })

    onBeforeUnmount(() => {
      if (!element.value) return
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
.var {
  &-back-top {
    position: fixed;
    right: 50px;
    bottom: 50px;
    transform: scale(0);
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);

    &__button {
      width: 54px;
      height: 54px;
    }

    &--active {
      transform: scale(1);
    }
  }
}
</style>
