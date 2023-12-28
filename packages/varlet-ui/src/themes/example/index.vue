<script setup>
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { use, pack } from './locale'

const toggleTheme = () => window.toggleTheme()

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ pack.toggleTheme }}</app-type>
  <var-button block @click="toggleTheme">{{ pack.toggleTheme }}</var-button>
</template>
