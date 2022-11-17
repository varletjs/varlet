<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, useAttrs } from 'vue'
import { animationBoxData, animationEl, isMountedCount } from '../floating'

export default defineComponent({
  name: 'AnimationBox',
  props: {
    /**
     * If this component is in a `position: fixed` container,
     * this value must be to set `true`
     */
    fixed: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const varletLogoAnimationRef = ref<HTMLElement>()
    animationBoxData.attrs = useAttrs()

    onMounted(() => {
      animationEl.value = varletLogoAnimationRef.value

      isMountedCount.value <= 2 && (isMountedCount.value += 1)
    })

    onUnmounted(() => {
      animationEl.value = undefined
    })

    return {
      varletLogoAnimationRef,
    }
  },
})
</script>

<template>
  <div ref="varletLogoAnimationRef" data-animation="port" :data-fixed="fixed"></div>
</template>
