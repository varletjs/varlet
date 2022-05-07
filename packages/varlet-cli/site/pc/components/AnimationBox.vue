<template>
  <div ref="varletLogoAnimationRef"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, useAttrs } from 'vue'
import { animationBoxData, animationEl } from '../floating'

export default defineComponent({
  name: 'AnimationBox',
  setup() {
    const varletLogoAnimationRef = ref<HTMLElement>()
    animationBoxData.attrs = useAttrs()

    onMounted(() => {
      animationEl.value = varletLogoAnimationRef.value
    })

    return {
      varletLogoAnimationRef,
    }
  },
})
</script>
