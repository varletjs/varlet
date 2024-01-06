<script setup>
import { Themes } from '@varlet/ui'
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import { ref } from 'vue'
import { pack, use } from './locale'

watchLang(use)
watchDarkMode(Themes.dark)

const expand = ref(true)
const appear = ref(false)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-switch v-model="expand"></var-switch>
  <var-collapse-transition :expand="expand" :appear="appear">
    {{ pack.textContent }}
  </var-collapse-transition>
</template>
