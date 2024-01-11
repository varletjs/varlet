<script setup>
import { Themes } from '@varlet/ui'
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import { ref } from 'vue'
import { pack, use } from './locale'

const expand = ref(true)

watchLang(use)
watchDarkMode(Themes.dark)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-switch v-model="expand"></var-switch>
  <var-collapse-transition :expand="expand">
    {{ pack.textContent }}
  </var-collapse-transition>
</template>
