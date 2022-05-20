<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount, ref, useAttrs } from 'vue'
import { animationBoxData, animationEl, animationElClientRect } from '../floating'

export default defineComponent({
  name: 'AnimationBox',
  setup() {
    const mutationObserver = ref<MutationObserver>()
    const varletLogoAnimationRef = ref<HTMLElement>()
    animationBoxData.attrs = useAttrs()

    onMounted(() => {
      animationEl.value = varletLogoAnimationRef.value
      animationElClientRect.value = varletLogoAnimationRef?.value?.getBoundingClientRect();
      mutationObserver.value = new MutationObserver(() => {
        animationElClientRect.value = varletLogoAnimationRef?.value?.getBoundingClientRect();
      });
      const logoContainer = varletLogoAnimationRef.value?.parentNode?.parentNode
      mutationObserver.value.observe(logoContainer || document.body, {
        attributes: true, 
        subtree: true, 
        childList:true 
      });
    })

    onBeforeUnmount(() => {
      mutationObserver.value?.disconnect();
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

