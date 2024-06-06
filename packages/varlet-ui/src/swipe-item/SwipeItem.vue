<template>
  <div
    :class="n()"
    :style="{
      width: !vertical ? toSizeUnit(size) : undefined,
      height: vertical ? toSizeUnit(size) : undefined,
      transform: `translate${vertical ? 'Y' : 'X'}(${toSizeUnit(translate)})`,
    }"
    tabindex="-1"
    :aria-hidden="currentIndex !== index"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useSwipe, type SwipeItemProvider } from './provide'
import { createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'

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
      size,
      index,
      currentIndex,
      vertical,
      translate,
      n,
      toSizeUnit,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './swipeItem';
</style>
