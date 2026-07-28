<script setup>
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { t, use } from './locale'

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-shimmer-text>{{ t('generating') }}</var-shimmer-text>

  <app-type>{{ t('themeColor') }}</app-type>
  <var-space direction="column" align="flex-start" :size="[16, 0]">
    <var-shimmer-text>{{ t('generating') }}</var-shimmer-text>
    <var-shimmer-text type="primary">{{ t('generating') }}</var-shimmer-text>
    <var-shimmer-text type="info">{{ t('generating') }}</var-shimmer-text>
    <var-shimmer-text type="success">{{ t('generating') }}</var-shimmer-text>
    <var-shimmer-text type="warning">{{ t('generating') }}</var-shimmer-text>
    <var-shimmer-text type="danger">{{ t('generating') }}</var-shimmer-text>
  </var-space>
</template>
