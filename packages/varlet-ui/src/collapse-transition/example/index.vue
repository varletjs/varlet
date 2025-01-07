<script setup>
import { ref } from 'vue'
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { t, use } from './locale'

const expand = ref(true)

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-switch v-model="expand" />
  <var-divider />
  <var-collapse-transition :expand="expand">
    {{ t('textContent') }}
  </var-collapse-transition>
</template>
