<template>
  <div
    :class="n()"
    :style="{
      width: !vertical ? `${size}px` : undefined,
      height: vertical ? `${size}px` : undefined,
      transform: `translate${vertical ? 'Y' : 'X'}(${translate}px)`,
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useSwipe } from './provide'
import { createNamespace } from '../utils/components'
import type { Ref } from 'vue'
import type { SwipeItemProvider } from './provide'

const { n } = createNamespace('swipe-item')

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
      n,
      size,
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
