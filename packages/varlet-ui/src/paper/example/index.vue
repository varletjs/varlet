<script setup>
import VarPaper from '../Paper.vue'
import VarCell from '../../cell'
import dark from '../../themes/dark'
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import { pack, use } from './locale'

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-paper :elevation="2" width="20vw" height="20vw" />

  <app-type>{{ pack.ripple }}</app-type>
  <var-paper :elevation="2" ripple width="20vw" height="20vw" />

  <app-type>{{ pack.round }}</app-type>
  <var-paper :elevation="2" width="20vw" height="20vw" />

  <app-type>{{ pack.radius }}</app-type>
  <var-paper :elevation="2" :radius="8" width="20vw" height="20vw" />

  <app-type>{{ pack.slot }}</app-type>
  <var-paper :elevation="2">
    <var-cell>{{ pack.paper }}</var-cell>
    <var-cell>{{ pack.paper }}</var-cell>
    <var-cell>{{ pack.paper }}</var-cell>
  </var-paper>
</template>
