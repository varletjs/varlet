<script setup>
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { ref } from 'vue'
import { pack, use } from './locale'

const expand = ref(true)

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-switch v-model="expand" />
  <var-divider />
  <var-collapse-transition :expand="expand">
    {{ pack.textContent }}
  </var-collapse-transition>
</template>
