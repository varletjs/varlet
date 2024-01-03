<script setup>
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { use, pack } from './locale'

watchLang(use)
onThemeChange()

function setTheme(theme) {
  window.toggleTheme(theme)
}
</script>

<template>
  <app-type>{{ pack.toggleTheme }}</app-type>
  <var-space direction="column" size="large">
    <var-button type="primary" block @click="() => setTheme('lightTheme')"
      >Material Design 2 {{ pack.light }}</var-button
    >
    <var-button type="primary" block @click="() => setTheme('darkTheme')">Material Design 2 {{ pack.dark }}</var-button>
    <var-button type="primary" block @click="() => setTheme('md3LightTheme')"
      >Material Design 3 {{ pack.light }}</var-button
    >
    <var-button type="primary" block @click="() => setTheme('md3DarkTheme')"
      >Material Design 3 {{ pack.dark }}</var-button
    >
  </var-space>
</template>
