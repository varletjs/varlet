<template>
  <div ref="varletLogoAnimationRef"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, useAttrs } from "vue"
import { animationBoxData, animationEl } from "../floating"
export default defineComponent({
  name: "AnimationBox",
  setup() {
    onMounted(() => {
      animationEl.value = varletLogoAnimationRef.value;
    })

    const varletLogoAnimationRef = ref<HTMLElement>();
    const attrs = useAttrs();
    animationBoxData.attrs = attrs;

    return {
      varletLogoAnimationRef
    }
  }
})
</script>
<style></style>