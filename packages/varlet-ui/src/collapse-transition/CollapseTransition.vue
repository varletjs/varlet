<template>
  <div :class="classes(n())">
    <div
      :class="n('content')"
      v-show="showContent"
      ref="contentEl"
      @transitionend="transitionend"
      @transitionstart="start"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed, onMounted } from 'vue'
import { doubleRaf, raf } from '@varlet/shared'
import { createNamespace } from '../utils/components'
import { props } from './props'

const { name, n, classes } = createNamespace('collapse-transition')

export default defineComponent({
  name,
  props,
  setup(props) {
    const showContent = ref(false)
    const contentEl = ref<HTMLDivElement | null>(null)
    const expand = computed(() => props.expand)
    const appear = computed(() => props.appear)

    onMounted(() => {
      if (expand.value) {
        appear.value ? openPanel() : (showContent.value = true)
      }
    })

    // ensure to trigger transitionend
    let isInitToTrigger = true

    watch(expand, (value) => {
      value ? openPanel() : closePanel()
    })

    async function openPanel() {
      if (!contentEl.value) {
        return
      }

      contentEl.value.style.height = ''
      showContent.value = true
      await raf()

      if (!contentEl.value) {
        return
      }

      const { offsetHeight } = contentEl.value
      contentEl.value.style.height = 0 + 'px'
      await raf()

      if (!contentEl.value) {
        return
      }

      contentEl.value.style.height = offsetHeight + 'px'

      if (!isInitToTrigger) {
        return
      }

      await doubleRaf()

      if (isInitToTrigger) {
        transitionend()
      }
    }

    async function closePanel() {
      if (!contentEl.value) {
        return
      }

      const { offsetHeight } = contentEl.value
      contentEl.value.style.height = offsetHeight + 'px'
      await raf()
      contentEl.value.style.height = 0 + 'px'
    }

    function start() {
      isInitToTrigger = false
    }

    function transitionend() {
      if (!expand.value) {
        showContent.value = false
      }

      contentEl.value!.style.height = ''
    }

    return {
      expand,
      showContent,
      contentEl,
      n,
      start,
      classes,
      transitionend,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './collapseTransition';
</style>
