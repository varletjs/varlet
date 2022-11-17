<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, useAttrs } from 'vue'
import { animationBoxData, animationEl, animationElClientRect, isMountedCount } from '../floating'

export default defineComponent({
  name: 'AnimationBox',
  setup() {
    const varletLogoAnimationRef = ref<HTMLElement>()
    const domObserve = new MutationObserver(_onDomChanged)
    animationBoxData.attrs = useAttrs()

    onMounted(() => {
      animationEl.value = varletLogoAnimationRef.value
      varletLogoAnimationRef.value && domObserve.observe(varletLogoAnimationRef.value, { childList: true })


      isMountedCount.value <= 2 && (isMountedCount.value += 1)
    })

    function _onDomChanged(mutations: MutationRecord[]) {
      if (!mutations.length || !varletLogoAnimationRef.value) return;
      const normal = animationEl.value?.getBoundingClientRect()
      const hasFloat: boolean = _onGetNodePosition(varletLogoAnimationRef.value);

      animationElClientRect.value = hasFloat ? normal : {
        top: (animationEl.value?.getBoundingClientRect().top || 0) + window.scrollY,
        left: (animationEl.value?.getBoundingClientRect().left || 0),
        width: animationEl.value?.getBoundingClientRect().width || 0,
        height: animationEl.value?.getBoundingClientRect().height || 0,
      }
    }

    function _onGetNodePosition(node: Element, stopNode = document.body): boolean {
      const css = window.getComputedStyle(node, null);
      if (css.position === 'fixed') {
        return true
      }
      if (node === stopNode) {
        return false
      }

      return _onGetNodePosition(node.parentElement || document.body)
    }

    onUnmounted(() => {
      varletLogoAnimationRef.value = undefined
      animationEl.value = undefined
      animationElClientRect.value = undefined
    })

    return {
      varletLogoAnimationRef,
    }
  },
})
</script>

<template>
  <div ref="varletLogoAnimationRef"></div>
</template>

