<template>
  <div :class="classes(n(), [wordWrap, n('--word-wrap')])" v-html="highlightedCode"></div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import { createNamespace } from '../utils/components'
import { props } from './props'
import { injectHighlighterProvider } from '../highlighter-provider/provide'

const { name, n, classes } = createNamespace('code')

export default defineComponent({
  name,
  props,
  setup(props) {
    const { highlighter, theme } = injectHighlighterProvider()
    const highlightedCode = ref('')
    const normalizedTheme = computed(() => props.theme ?? theme?.value)

    if (highlighter) {
      watch(
        () => [highlighter.value, props.code, props.language, normalizedTheme.value, props.trim] as const,
        async ([highlighter, code, lang = '', theme = '', trim]) => {
          if (!highlighter) {
            return
          }

          highlightedCode.value = await highlighter.codeToHtml(trim ? code.trim() : code, { lang, theme })
        },
        { immediate: true }
      )
    }

    return {
      n,
      classes,
      highlightedCode,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './code';
</style>
