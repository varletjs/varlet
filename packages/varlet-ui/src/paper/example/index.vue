<script setup>
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { pack, use } from './locale'

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-paper :elevation="2" width="25vmin" height="25vmin" />

  <app-type>{{ pack.ripple }}</app-type>
  <var-paper :elevation="2" ripple width="25vmin" height="25vmin" />

  <app-type>{{ pack.round }}</app-type>
  <var-paper :elevation="2" width="25vmin" height="25vmin" round />

  <app-type>{{ pack.radius }}</app-type>
  <var-paper :elevation="2" :radius="8" width="25vmin" height="25vmin" />

  <app-type>{{ pack.slot }}</app-type>
  <var-paper :elevation="2">
    <var-cell>{{ pack.paper }}</var-cell>
    <var-cell>{{ pack.paper }}</var-cell>
    <var-cell>{{ pack.paper }}</var-cell>
  </var-paper>
</template>
