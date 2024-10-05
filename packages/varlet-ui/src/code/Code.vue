<template>
  <div :class="n()">
    <div :class="n('content')" v-html="highlightedCode"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { codeToHtml } from 'shiki'
import { createNamespace } from '../utils/components'
import { props } from './props'

const { name, n } = createNamespace('code')

export default defineComponent({
  name,
  props,
  setup(props) {
    const highlightedCode = ref<string | undefined>(undefined)

    watch(
      () => [props.content, props.lang, props.theme],
      async ([code, lang, theme]) => {
        highlightedCode.value = await codeToHtml(code, { lang, theme })
      },
      { immediate: true }
    )

    return {
      highlightedCode,
      n,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './code';
</style>
