<script setup>
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { t, use } from './locale'

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-paper :elevation="2" width="25vmin" height="25vmin" />

  <app-type>{{ t('ripple') }}</app-type>
  <var-paper :elevation="2" ripple width="25vmin" height="25vmin" />

  <app-type>{{ t('round') }}</app-type>
  <var-paper :elevation="2" width="25vmin" height="25vmin" round />

  <app-type>{{ t('radius') }}</app-type>
  <var-paper :elevation="2" :radius="8" width="25vmin" height="25vmin" />

  <app-type>{{ t('slot') }}</app-type>
  <var-paper :elevation="2">
    <var-cell>{{ t('paper') }}</var-cell>
    <var-cell>{{ t('paper') }}</var-cell>
    <var-cell>{{ t('paper') }}</var-cell>
  </var-paper>
</template>
