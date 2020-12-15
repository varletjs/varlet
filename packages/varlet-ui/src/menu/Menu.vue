<template>
  <div
    class="var-menu"
    v-bind="$attrs"
    @click.stop
  >
    <div
      class="var-menu__host"
      ref="host"
    >
      <slot/>
    </div>

    <teleport to="body">
      <transition name="var-menu">
        <div
          class="var-menu__menu var-elevation--3"
          ref="menu"
          :class="[
            alignment === 'top'
              ? 'var-menu--origin-top'
              : 'var-menu--origin-bottom'
          ]"
          :style="{
            'top': `calc(${top}px + ${offsetY})`,
            'left': `calc(${left}px + ${offsetX})`,
            'z-index': zIndex
          }"
          v-show="show"
          @click.stop
        >
          <slot name="menu"/>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { props } from './props'
import { getLeft, getTop } from '../utils/elements'
import { useZIndex } from '../context/zIndex'

export default defineComponent({
  name: 'VarMenu',
  inheritAttrs: false,
  props,
  setup(props) {
    // z-index
    const { zIndex } = useZIndex(props, 'show', 1)

    // element ref
    const host: Ref<null | HTMLElement> = ref(null)
    const menu: Ref<null | HTMLElement> = ref(null)

    // menu positions
    const top: Ref<number> = ref(0)
    const left: Ref<number> = ref(0)
    const computeTop = (alignment: string): number => {
      return alignment === 'top'
        ? getTop(host.value as HTMLElement)
        : getTop(host.value as HTMLElement) - (menu.value as HTMLElement).offsetHeight
    }

    // positions effect
    watch(() => props.alignment, (newValue: string) => {
      props.show === true && (top.value = computeTop(newValue))
    })
    watch(() => props.show, async (newValue: boolean) => {
      await nextTick()

      top.value = newValue === true ? computeTop(props.alignment) : top.value
    }, { immediate: true })

    // menu hidden
    const handleMenuBlur = () => props['onUpdate:show']?.()
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
      left
    }
  }
})
</script>

<style lang="less">
@import "../styles/elevation";
@import "./menu";
</style>
