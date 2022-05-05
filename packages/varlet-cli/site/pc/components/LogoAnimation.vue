<template>
  <img
    v-bind="animationBoxData.attrs"
    :style="styles"
    :src="logo"
    alt="logo"
    v-if="logo"
    class="logo-animation"
    :class="{ 'logo-transition': transition }"
  />
</template>

<script lang="ts">
import config from '@config'
import { get } from 'lodash-es'
import { computed, defineComponent, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { animationBoxData, animationEl } from '../floating'
import type {  Ref, StyleValue } from 'vue'

export default defineComponent({
  name: 'LogoAnimation',
  setup() {
    watch(animationEl, (newEl) => {
      const newElBRect = newEl?.getBoundingClientRect()
      if (newElBRect) {
        proxyRect.value = newElBRect
      }
    })

    onMounted(() => {
      window.addEventListener('resize', resetPosition)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', resetPosition)
    })

    const proxyRect: Ref<DOMRect | undefined> = ref<DOMRect>()
    const logo: Ref<string> = get(config, 'logo')
    const transition: Ref<boolean> = ref<boolean>(true)

    const styles: Ref<StyleValue | undefined> = computed(() => ({
      width: `${proxyRect.value?.width}px`,
      height: `${proxyRect.value?.height}px`,
      top: `${proxyRect.value?.top}px`,
      left: `${proxyRect.value?.left}px`,
    }))

    const resetPosition = () => {
      transition.value = false
      const newBRect = animationEl.value?.getBoundingClientRect()

      if (newBRect) {
        proxyRect.value = newBRect
        setTimeout(() => {
          transition.value = true
        }, 200)
      }
    }

    return {
      logo,
      animationBoxData,
      styles,
      transition,
    }
  },
})
</script>

<style lang="less" scoped>
.logo-transition {
  transition: 0.5s all ease-in-out;
}

.logo-animation {
  position: absolute;
  z-index: 10;
  pointer-events: none;
}
</style>
