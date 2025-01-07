<template>
  <div
    v-show="showContent"
    ref="contentEl"
    :class="n('content')"
    @transitionend="handleTransitionEnd"
    @transitionstart="handleTransitionStart"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { createNamespace } from '../utils/components'
import { props } from './props'
import { useCollapseTransition } from './useCollapseTransition'

const { name, n } = createNamespace('collapse-transition')

export default defineComponent({
  name,
  props,
  setup(props) {
    const showContent = ref(false)
    const contentEl = ref<HTMLDivElement | null>(null)
    const expand = computed(() => props.expand)

    const { handleTransitionEnd, handleTransitionStart } = useCollapseTransition({
      contentEl,
      showContent,
      expand,
    })

    return {
      showContent,
      contentEl,
      n,
      handleTransitionEnd,
      handleTransitionStart,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './collapseTransition';
</style>
