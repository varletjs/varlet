<script setup>
import { pack, use } from './locale'
import { onThemeChange, AppType, watchLang } from '@varlet/cli/client'

const lists = [...Array(100).keys()]

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <div>
    <var-cell v-for="list in lists" :key="list">Scroll to bottom {{ list }}</var-cell>
    <var-back-top :duration="300" />
  </div>
</template>
