<template>
  <div
    :class="n()"
    :style="{
      width: !vertical ? `${size}px` : undefined,
      height: vertical ? `${size}px` : undefined,
      transform: `translate${vertical ? 'Y' : 'X'}(${translate}px)`,
    }"
    tabindex="-1"
    :aria-hidden="currentIndex === index ? 'false' : 'true'"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useSwipe, type SwipeItemProvider } from './provide'
import { createNamespace } from '../utils/components'

const { name, n } = createNamespace('swipe-item')

export default defineComponent({
  name,
  setup() {
    const translate = ref(0)
    const { swipe, bindSwipe, index } = useSwipe()
    const { size, currentIndex, vertical } = swipe

    const swipeItemProvider: SwipeItemProvider = {
      index,
      setTranslate,
    }

    bindSwipe(swipeItemProvider)

    function setTranslate(x: number) {
      translate.value = x
    }

    return {
      n,
      size,
      index,
      currentIndex,
      vertical,
      translate,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './swipeItem';
</style>
