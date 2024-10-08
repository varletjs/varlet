<script setup>
import { t, use } from './locale'
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { codeToHtml } from 'shiki'

function createShikiHighlighter() {
  return {
    codeToHtml,
  }
}

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-highlighter-provider :highlighter="createShikiHighlighter()" theme="nord">
    <var-code code="console.log('varlet')" language="javascript" />
    <var-code code="console.log('varlet')" language="javascript" theme="monokai" />
    <var-code code="console.log('varlet')" language="javascript" theme="one-dark-pro" />
  </var-highlighter-provider>
</template>
