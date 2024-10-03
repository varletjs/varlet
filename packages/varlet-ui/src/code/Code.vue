<template>
  <div :class="classes(n())">
    <div :class="classes(n('content'))" v-html="htmlCode"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { codeToHtml } from 'shiki'
import { createNamespace } from '../utils/components'
import { props } from './props'

const { name, n, classes } = createNamespace('code')

export default defineComponent({
  name,
  props,
  setup(props) {
    const htmlCode = ref<string | undefined>(undefined)

    watch(
      () => [props.content, props.lang, props.theme],
      async ([code, lang, theme]) => {
        htmlCode.value = await codeToHtml(code, { lang, theme })
      },
      { immediate: true }
    )

    return {
      htmlCode,
      n,
      classes,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './code.less';
</style>
