<script setup>
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { t, use } from './locale'

const lists = [...Array(100).keys()]

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <div>
    <var-cell v-for="list in lists" :key="list">Scroll to bottom {{ list }}</var-cell>
    <var-back-top :duration="300" />
  </div>
</template>
