<template>
  <img v-bind="animationBoxData.attrs" :style="styles" :src="logo" alt="logo" v-if="logo" class="logo-animation"
    :class="{ 'logo-transition': transition }" />
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
    const logo: Ref<string> = get(config, 'logo');
    const transition: Ref<boolean> = ref<boolean>(true);
    const styles: Ref<StyleValue | undefined> = computed(() => {
      return {
        width: `${proxyRect.value?.width}px`,
        height: `${proxyRect.value?.height}px`,
        top: `${proxyRect.value?.top}px`,
        left: `${proxyRect.value?.left}px`,
      }
    })

    const resetPostion = () => {
      transition.value = false;
      const newBRect = animationEl.value?.getBoundingClientRect();
      if (newBRect) {
        proxyRect.value = newBRect;
        setTimeout(() => {
          transition.value = true;
        }, 200);
      }
    }

    return {
      logo,
      animationBoxData,
      styles,
      transition
    }
  }
})
</script>
<style lang="less" scoped>
.logo-transition {
  transition: .5s all ease-in-out;
}

.logo-animation {
  position: absolute;
  z-index: 10;
  pointer-events:none;
}
</style>