<script lang="ts">
import config from '@config'
import { get } from 'lodash-es'
import { computed, defineComponent, onBeforeMount, onMounted, onBeforeUnmount, ref, watch, nextTick } from 'vue'
import { animationBoxData, animationEl, animationElClientRect } from '../floating'
import type { Ref, StyleValue } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'LogoAnimation',
  setup() {
    const logo: Ref<string> = get(config, 'logo')
    const proxyRect: Ref<DOMRect | undefined> = ref<DOMRect>()
    const floatingState: Ref<boolean> = ref<boolean>(false)

    watch(animationElClientRect, async (newClientRect) => {
      if (newClientRect) {
        proxyRect.value = newClientRect
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

    onBeforeMount(() => {
      floatingState.value = false
    })

    onMounted(() => {
      window.addEventListener('resize', resetPosition, false);
    })

    onBeforeUnmount(() => {
      resetTimer && clearTimeout(resetTimer)
      window.removeEventListener('resize', resetPosition);
    })

    const land = () => {
      floatingState.value = false;
    }

    let resetTimer: number;

    const resetPosition = async () => {
      if (floatingState.value) {
        floatingState.value = false
        await nextTick();
      }
      clearTimeout(resetTimer);
      const newBRect = animationEl.value?.getBoundingClientRect()
      if (newBRect) {
        resetTimer = window.setTimeout(() => {
          proxyRect.value = newBRect
        }, 200)
      }
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

<template>
  <Teleport :to="animationEl" v-if="animationEl">
    <img v-show="!floatingState" v-bind="animationBoxData.attrs" :style="styles" :src="logo" alt="logo"
      v-if="logo && animationEl" class="varlet-cli-logo-animation" />
  </Teleport>
  <div v-show="floatingState">
    <img @transitionend="land" v-bind="animationBoxData.attrs" :style="styles" :src="logo" alt="logo"
      v-if="logo && animationEl"
      class="varlet-cli-logo-animation varlet-cli-logo-position varlet-cli-logo-transition" />
  </div>
</template>

<style lang="less">
.varlet-cli-logo-transition {
  transition: 0.5s all ease-in-out;
  width: 100%;
  height: 100%;
  display: block;
}

.varlet-cli-logo-animation {
  z-index: 10;
  pointer-events: none;
}

.varlet-cli-logo-position {
  position: fixed;
}
</style>
