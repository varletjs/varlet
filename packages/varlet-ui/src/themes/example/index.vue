<script setup>
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import { Themes } from '@varlet/ui'
import { use, pack } from './locale'

const toggleTheme = () => window.toggleTheme()

watchLang(use)
watchDarkMode(Themes.dark)
</script>

<template>
  <app-type>{{ pack.toggleTheme }}</app-type>
  <var-button block @click="toggleTheme">{{ pack.toggleTheme }}</var-button>
</template>
