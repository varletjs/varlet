<script setup>
import { AppType, watchLang } from '@varlet/cli/client'
import { ref } from 'vue'
import { pack, use } from './locale'

watchLang(use)

const expand = ref(true)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-switch v-model="expand"></var-switch>
  <var-collapse-transition :expand="expand">
    {{ pack.textContent }}
  </var-collapse-transition>
</template>
