<template>
  <div :class="classes(n())">
    <div :class="n('content')" v-show="showContent" ref="contentEl" @transitionend="transitionEnd">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, nextTick } from 'vue'
import { raf } from '@varlet/shared'
import { createNamespace } from '../utils/components'
import { props } from './props'

const { name, n, classes } = createNamespace('collapse-transition')

export default defineComponent({
  name,
  props,
  setup(props) {
    const showContent = ref(false)
    const contentEl = ref<HTMLDivElement | null>(null)

    watch(
      () => props.expand,
      (value) => {
        nextTick().then(() => {
          value ? openPanel() : closePanel()
        })
      },
      { immediate: true }
    )

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

    function transitionEnd() {
      if (!props.expand) {
        showContent.value = false
      }

      contentEl.value!.style.height = ''
    }

    return {
      showContent,
      contentEl,
      n,
      classes,
      transitionEnd,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './collapseTransition';
</style>
