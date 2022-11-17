<script lang="ts">
import config from '@config'
import { get, pick } from 'lodash-es'
import { computed, defineComponent, onMounted, onBeforeUnmount, ref, watch, nextTick } from 'vue'
import { animationBoxData, animationEl, isMountedCount } from '../floating'
import type { Ref, StyleValue } from 'vue'

type Rect = Pick<DOMRect, 'width' | 'height' | 'top' | 'left'>

export default defineComponent({
  name: 'LogoAnimation',
  setup() {
    const logo: Ref<string> = get(config, 'logo')
    const proxyRect: Ref<Rect | undefined> = ref()
    const floatingState: Ref<boolean> = ref<boolean>(false)

    watch(animationEl, async (newEl) => {
      if (!newEl) return
      const newClientRect = newEl.getBoundingClientRect()
      isMountedCount.value > 1 && (floatingState.value = true)
      proxyRect.value = {
        ...pick(newClientRect, 'width', 'height', 'left'),
        // when routing changes, vue router `scrollBehavior` takes effect
        // after the component is rendered,
        // we need to correct to `top` when the page has a scroll distance.
        top: newClientRect.top + (newEl.dataset.fixed === 'true' ? 0 : window.scrollY)
      }
    })

    const styles: Ref<StyleValue | undefined> = computed(() => ({
      width: `${proxyRect.value?.width}px`,
      height: `${proxyRect.value?.height}px`,
      top: `${proxyRect.value?.top}px`,
      left: `${proxyRect.value?.left}px`,
    }))

    onMounted(() => {
      window.addEventListener('resize', resetPosition, false)
    })

    onBeforeUnmount(() => {
      resetTimer && clearTimeout(resetTimer)
      window.removeEventListener('resize', resetPosition)
    })

    const land = () => {
      floatingState.value = false
    }

    let resetTimer: number

    const resetPosition = async () => {
      if (floatingState.value) {
        floatingState.value = false
        await nextTick()
      }
      clearTimeout(resetTimer)
      resetTimer = window.setTimeout(() => {
        const newBRect = animationEl.value?.getBoundingClientRect()
        if (newBRect) proxyRect.value = pick(newBRect, 'width', 'height', 'left', 'top')
      }, 200)
    }

    return {
      logo,
      animationBoxData,
      styles,
      animationEl,
      floatingState,
      land,
    }
  },
})
</script>

<template>
  <Teleport :to="animationEl || 'body'">
    <img 
      v-if="logo && animationEl"
      v-bind="animationBoxData.attrs" 
      :class="{ 'varlet-cli-logo-position': !animationEl, 'varlet-cli-logo-show': !floatingState }" 
      :style="styles" 
      :src="logo" 
      class="varlet-cli-logo-entity"
      alt="logo" 
    />
  </Teleport>
  <img 
    v-if="logo && animationEl"
    v-bind="animationBoxData.attrs" 
    :class="{ 'varlet-cli-logo-show': floatingState }" 
    :style="styles" 
    :src="logo" 
    @transitionend="land" 
    class="varlet-cli-logo-entity varlet-cli-logo-position varlet-cli-logo-transition"
    alt="logo"
  />
</template>

<style lang="less">
.varlet-cli-logo-transition {
  width: 100%;
  height: 100%;
}

.varlet-cli-logo-entity {
  z-index: 10;
  pointer-events: none;
  opacity: 0;
}

.varlet-cli-logo-position {
  position: fixed;
  transition: 0.5s ease-in-out;
  transition-property: left, top, height, width;
}

.varlet-cli-logo-show {
  opacity: 1;
}
</style>
