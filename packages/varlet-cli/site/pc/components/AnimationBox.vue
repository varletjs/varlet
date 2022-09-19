<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, useAttrs } from 'vue'
import { animationBoxData, animationEl, animationElClientRect, isMountedCount } from '../floating'

export default defineComponent({
  name: 'AnimationBox',
  setup() {
    const varletLogoAnimationRef = ref<HTMLElement>()
    animationBoxData.attrs = useAttrs()

    onMounted(() => {
      animationEl.value = varletLogoAnimationRef.value
      animationElClientRect.value = varletLogoAnimationRef?.value?.getBoundingClientRect();

      isMountedCount.value <= 2 && (isMountedCount.value += 1)
    })

    onUnmounted(() => {
      animationEl.value = undefined
      animationElClientRect.value = undefined
    })

    return {
      varletLogoAnimationRef,
    }
  },
})
</script>

<template>
  <div ref="varletLogoAnimationRef" data-animation="port"></div>
</template>

