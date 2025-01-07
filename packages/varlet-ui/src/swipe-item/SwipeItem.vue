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
    @focus="isFocusing = true"
    @blur="isFocusing = false"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { createNamespace } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import { useSwipe, type SwipeItemProvider } from './provide'

const { name, n } = createNamespace('swipe-item')

export default defineComponent({
  name,
  setup() {
    const translate = ref(0)
    const isFocusing = ref(false)
    const { swipe, bindSwipe, index } = useSwipe()
    const { size, currentIndex, vertical } = swipe

    const swipeItemProvider: SwipeItemProvider = {
      index,
      isFocusing: computed(() => isFocusing.value),
      setTranslate,
    }

    bindSwipe(swipeItemProvider)

    function setTranslate(x: number) {
      translate.value = x
    }

    return {
      isFocusing,
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
