<script setup>
import { ref } from 'vue'
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { t, use } from './locale'

const loading = ref(false)

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('type') }}</app-type>
  <var-space align="center" justify="space-between">
    <var-loading type="circle" />
    <var-loading type="cube" />
    <var-loading type="wave" />
    <var-loading type="rect" />
    <var-loading type="disappear" />
  </var-space>

  <app-type>{{ t('color') }}</app-type>
  <var-space align="center" justify="space-between">
    <var-loading type="circle" color="var(--color-info)" />
    <var-loading type="cube" color="var(--color-success)" />
    <var-loading type="wave" color="var(--color-warning)" />
    <var-loading type="rect" color="var(--color-danger)" />
    <var-loading type="disappear" color="var(--color-text-disabled)" />
  </var-space>

  <app-type>{{ t('size') }}</app-type>
  <var-space align="center" justify="space-between">
    <var-loading type="circle" size="small" />
    <var-loading type="cube" size="small" />
    <var-loading type="wave" size="small" />
    <var-loading type="rect" size="small" />
    <var-loading type="disappear" size="small" />
  </var-space>

  <app-type>{{ t('wrap') }}</app-type>
  <var-button @click="loading = !loading" style="margin-bottom: 8px">
    {{ loading ? t('close') : t('open') }}
  </var-button>
  <var-loading description="LOADING" :loading="loading">
    <var-card :title="t('cardTitle')" :description="t('cardDesc')" />
  </var-loading>
</template>

<style>
.loading-demo .var-space {
  padding: 8px 0;
}
</style>
