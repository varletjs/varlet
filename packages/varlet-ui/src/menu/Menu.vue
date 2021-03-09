<template>
  <div class="var-menu" ref="host" v-bind="$attrs" @click="handleClick">
    <slot />

    <teleport to="body">
      <transition name="var-menu">
        <div
          class="var-menu__menu var-elevation--3"
          ref="menu"
          :class="[alignment === 'top' ? 'var-menu--origin-top' : 'var-menu--origin-bottom']"
          :style="{
            top: `calc(${top}px + ${toPx(offsetY)})`,
            left: `calc(${left}px + ${toPx(offsetX)})`,
            zIndex,
          }"
          v-show="show"
          @click.stop
        >
          <slot name="menu" />
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { props } from './props'
import { getLeft, getTop, toPx } from '../utils/elements'
import { useZIndex } from '../context/zIndex'

export default defineComponent({
  name: 'VarMenu',
  inheritAttrs: false,
  props,
  setup(props) {
    const host: Ref<null | HTMLElement> = ref(null)
    const menu: Ref<null | HTMLElement> = ref(null)
    const top: Ref<number> = ref(0)
    const left: Ref<number> = ref(0)
    const { zIndex } = useZIndex(props, 'show', 1)
    let clickSelf = false

    const computeTop = (alignment: string): number => {
      return alignment === 'top'
        ? getTop(host.value as HTMLElement)
        : getTop(host.value as HTMLElement) - (menu.value as HTMLElement).offsetHeight
    }

    const handleClick = () => {
      clickSelf = true
    }

    const handleMenuBlur = () => {
      if (clickSelf) {
        clickSelf = false
        return
      }

      const { show, onBlur } = props

      if (!show) {
        return
      }

      props['onUpdate:show']?.(false)
      onBlur?.()
    }

    watch(
      () => props.alignment,
      (newValue: string) => {
        props.show && (top.value = computeTop(newValue))
      }
    )

    watch(
      () => props.show,
      async (newValue: boolean) => {
        await nextTick()

        top.value = newValue ? computeTop(props.alignment) : top.value
      },
      { immediate: true }
    )

    onMounted(() => {
      top.value = computeTop(props.alignment)
      left.value = getLeft(host.value as HTMLElement)

      document.addEventListener('click', handleMenuBlur)
    })

    onUnmounted(() => {
      document.removeEventListener('click', handleMenuBlur)
    })

    return {
      zIndex,
      host,
      menu,
      top,
      left,
      toPx,
      handleClick,
    }
  },
})
</script>

<style lang="less">
@import './menu';
</style>
