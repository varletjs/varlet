<template>
  <img v-bind="animationBoxData.attrs" :style="styles" :src="logo" alt="logo" v-if="logo" class="logo-animation" />
</template>
<script lang="ts">
import config from '@config'
import { get } from "lodash-es"
import { computed, defineComponent, onBeforeUnmount, onMounted, ref, Ref, StyleValue, watch } from "vue"
import { animationBoxData, animationEl } from "../floating"

export default defineComponent({
  name: "LogoAnimation",
  setup() {
    watch(animationEl, (newEl) => {
      const newElBRect = newEl?.getBoundingClientRect();
      if (newElBRect) {
        proxyRect.value = newElBRect;
      }
    });

    onMounted(() => {
      window.addEventListener('resize', resetPostion)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', resetPostion);
    })

    const proxyRect: Ref<DOMRect | undefined> = ref<DOMRect>();
    const logo: Ref<string> = get(config, 'logo')
    const styles: Ref<StyleValue | undefined> = computed(() => {
      return {
        width: `${proxyRect.value?.width}px`,
        height: `${proxyRect.value?.height}px`,
        top: `${proxyRect.value?.top}px`,
        left: `${proxyRect.value?.left}px`,
      }
    })

    const resetPostion = () => {
      const newBRect = animationEl.value?.getBoundingClientRect();
      if (newBRect) {
        proxyRect.value = newBRect;
      }
    }

    return {
      logo,
      animationBoxData,
      styles
    }
  }
})
</script>
<style lang="less" scoped>.logo-animation {
  position: fixed;
  z-index: 10;
  transition: .5s all ease-in-out;
}</style>