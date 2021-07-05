<template>
  <div
    class="var-swipe-item"
    :style="{
      width: !vertical ? `${size}px` : null,
      height: vertical ? `${size}px` : null,
      transform: `translate${vertical ? 'Y' : 'X'}(${translate}px)`,
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useSwipe } from './provide'
import type { Ref } from 'vue'
import type { SwipeItemProvider } from './provide'

export default defineComponent({
  name: 'VarSwipeItem',
  setup() {
    const translate: Ref<number> = ref(0)
    const { swipe, bindSwipe, index } = useSwipe()
    const { size, vertical } = swipe

    const setTranslate = (x: number) => {
      translate.value = x
    }

    const swipeItemProvider: SwipeItemProvider = {
      index,
      setTranslate,
    }

    bindSwipe(swipeItemProvider)

    return {
      size,
      vertical,
      translate,
    }
  },
})
</script>

<style lang="less">
@import './swipeItem';
</style>
