<template>
  <Teleport :to="animationEl" v-if="animationEl && !floatingState">
    <img 
      v-bind="animationBoxData.attrs" 
      :style="styles" 
      :src="logo" 
      alt="logo" 
      v-if="logo && animationEl"
      class="varlet-cli-logo-animation" 
    />
  </Teleport>
  <div v-else>
    <img 
      @transitionend="land" 
      v-bind="animationBoxData.attrs" 
      :style="styles" 
      :src="logo" 
      alt="logo" 
      v-if="logo && animationEl"
      class="varlet-cli-logo-animation varlet-cli-logo-position varlet-cli-logo-transition" 
    />
  </div>
</template>

<script lang="ts">
import config from '@config'
import { get } from 'lodash-es'
import { computed, defineComponent, ref, watch, nextTick } from 'vue'
import { animationBoxData, animationEl } from '../floating'
import type { Ref, StyleValue } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'LogoAnimation',
  setup() {
    const logo: Ref<string> = get(config, 'logo')
    const proxyRect: Ref<DOMRect | undefined> = ref<DOMRect>()
    const floatingState: Ref<boolean> = ref<boolean>(false)

    watch(animationEl, async (newEl) => {
      const newElBRect = newEl?.getBoundingClientRect()
      if (newElBRect) {
        proxyRect.value = newElBRect
      }
    })

    const styles: Ref<StyleValue | undefined> = computed(() => ({
      width: `${proxyRect.value?.width}px`,
      height: `${proxyRect.value?.height}px`,
      top: `${proxyRect.value?.top}px`,
      left: `${proxyRect.value?.left}px`,
    }))

    const router = useRouter()
    router.beforeEach(async () => {
      if (!floatingState.value) {
        floatingState.value = true
      }
      await nextTick();
    })
    
    const land = () => {
      floatingState.value = false;
    }

    return {
      logo,
      animationBoxData,
      styles,
      animationEl,
      floatingState,
      land
    }
  },
})
</script>

<style lang="less">
.varlet-cli-logo-transition {
  transition: 0.5s all ease-in-out;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.varlet-cli-logo-animation {
  z-index: 10;
  pointer-events: none;
}

.varlet-cli-logo-position {
  position: absolute;
}
</style>
