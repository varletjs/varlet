<script setup>
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { use, t } from './locale'

watchLang(use)
onThemeChange()

function setTheme(theme) {
  window.toggleTheme(theme)
}
</script>

<template>
  <app-type>{{ t('toggleTheme') }}</app-type>
  <var-space direction="column" size="large">
    <var-button type="primary" block @click="() => setTheme('lightTheme')"
      >Material Design 2 {{ t('light') }}</var-button
    >
    <var-button type="primary" block @click="() => setTheme('darkTheme')">Material Design 2 {{ t('dark') }}</var-button>
    <var-button type="primary" block @click="() => setTheme('md3LightTheme')"
      >Material Design 3 {{ t('light') }}</var-button
    >
    <var-button type="primary" block @click="() => setTheme('md3DarkTheme')"
      >Material Design 3 {{ t('dark') }}</var-button
    >
  </var-space>
</template>
