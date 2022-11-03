<script setup>
import VarButton from '../../button'
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import dark from '../../themes/dark'
import { use, pack } from './locale'

const toggleTheme = () => window.toggleTheme()

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.toggleTheme }}</app-type>
  <var-button block @click="toggleTheme">{{ pack.toggleTheme }}</var-button>
</template>
