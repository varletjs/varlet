<template>
  <div :class="n()">
    <div
      :class="n('content')"
      v-show="showContent"
      ref="contentEl"
      @transitionend="handleTransitionEnd"
      @transitionstart="handleTransitionStart"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, nextTick, computed } from 'vue'
import { createNamespace } from '../utils/components'
import { props } from './props'
import { useCollapseTransition } from './useCollapseTransition'

const { name, n, classes } = createNamespace('collapse-transition')

export default defineComponent({
  name,
  props,
  setup(props) {
    const showContent = ref(false)
    const contentEl = ref<HTMLDivElement | null>(null)
    const expand = computed(() => props.expand)

    watch(
      expand,
      (value) => {
        nextTick().then(() => {
          value ? openPanel() : closePanel()
        })
      },
      { immediate: true }
    )

    const { openPanel, closePanel, handleTransitionEnd, handleTransitionStart } = useCollapseTransition(
      contentEl,
      showContent,
      expand
    )

    return {
      showContent,
      contentEl,
      n,
      classes,
      handleTransitionEnd,
      handleTransitionStart,
    }
  },
})
</script>

<style lang="less">
@import './collapseTransition';
</style>
