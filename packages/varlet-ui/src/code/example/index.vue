<script setup>
import { ref } from 'vue'
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { codeToHtml } from 'shiki'
import { t, use } from './locale'

const rootTheme = ref('vitesse-light')
const customTheme = ref('github-light')

watchLang(use)
onThemeChange((theme) => {
  if (theme.toLocaleLowerCase().includes('dark')) {
    rootTheme.value = 'vitesse-dark'
    customTheme.value = 'github-dark'
  } else {
    rootTheme.value = 'vitesse-light'
    customTheme.value = 'github-light'
  }
})
</script>

<template>
  <var-highlighter-provider :highlighter="{ codeToHtml }" :theme="rootTheme">
    <app-type>{{ t('basicUsage') }}</app-type>

    <var-space direction="column" size="large">
      <var-code code="console.log('Hello Varlet UI')" language="javascript" />
      <var-code code="print('Hello Varlet UI')" language="python" />
      <var-code code="console.log('Hello Varlet UI')" language="javascript" :theme="customTheme" />
    </var-space>

    <app-type>{{ t('wordWrap') }}</app-type>
    <var-code code="console.log('Hello Varlet UI');console.log('Hello Varlet UI');" language="javascript" word-wrap />
  </var-highlighter-provider>
</template>
