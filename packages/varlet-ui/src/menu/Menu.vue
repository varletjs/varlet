<template>
  <div class="var-menu" ref="host" @click="handleClick">
    <slot />

    <teleport :to="teleport">
      <transition name="var-menu" @after-enter="onOpened" @after-leave="onClosed">
        <div
          class="var-menu__menu var-elevation--3"
          ref="menu"
          :style="{
            top: `calc(${top}px + ${toSizeUnit(offsetY)})`,
            left: `calc(${left}px + ${toSizeUnit(offsetX)})`,
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
import { defineComponent, ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { props } from './props'
import { getLeft, getTop, toSizeUnit } from '../utils/elements'
import { useZIndex } from '../context/zIndex'
import type { Ref } from 'vue'

export default defineComponent({
  name: 'VarMenu',
  props,
  setup(props) {
    const host: Ref<null | HTMLElement> = ref(null)
    const menu: Ref<null | HTMLElement> = ref(null)
    const top: Ref<number> = ref(0)
    const left: Ref<number> = ref(0)
    const { zIndex } = useZIndex(() => props.show, 1)
    let clickSelf = false

    const computeTop = (alignment: string): number => {
      return alignment === 'top'
        ? getTop(host.value as HTMLElement)
        : getTop(host.value as HTMLElement) - (menu.value as HTMLElement).offsetHeight
    }

    const handleClick = () => {
      clickSelf = true
    }

    const handleMenuClose = () => {
      if (clickSelf) {
        clickSelf = false
        return
      }

      if (!props.show) {
        return
      }

      props['onUpdate:show']?.(false)
    }

    // expose
    const resize = () => {
      top.value = computeTop(props.alignment)
      left.value = getLeft(host.value as HTMLElement)
    }

    watch(() => props.alignment, resize)

    watch(
      () => props.show,
      async (newValue: boolean) => {
        const { onOpen, onClose } = props

        await nextTick()
        newValue && resize()

        newValue ? onOpen?.() : onClose?.()
      }
    )

    onMounted(() => {
      resize()

      document.addEventListener('click', handleMenuClose)
      window.addEventListener('resize', resize)
    })

    onUnmounted(() => {
      document.removeEventListener('click', handleMenuClose)
      window.removeEventListener('resize', resize)
    })

    return {
      zIndex,
      host,
      menu,
      top,
      left,
      toSizeUnit,
      handleClick,
      resize,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import './menu';
</style>
