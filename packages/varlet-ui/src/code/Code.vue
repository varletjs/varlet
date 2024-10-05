<template>
  <div :class="n()">
    <div :class="n('content')" v-html="highlightedCode"></div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import { createNamespace } from '../utils/components'
import { props } from './props'
import { injectHighlighterProvider } from '../highlighter-provider/provide'
import { isFunction } from '@varlet/shared'

const { name, n } = createNamespace('code')

export default defineComponent({
  name,
  props,
  setup(props) {
    const { highlighter, theme } = injectHighlighterProvider()

    const highlightedCode = ref<string | undefined>(props.code)
    const getTheme = computed(() => props.theme || theme)

    isFunction(highlighter?.codeToHtml) &&
      watch(
        () => [props.code, props.language, getTheme.value],
        async ([code, lang, theme]) => {
          highlightedCode.value = await highlighter.codeToHtml(code || '', { lang, theme })
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
