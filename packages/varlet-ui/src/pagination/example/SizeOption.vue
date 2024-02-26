<script setup>
import { watchLang, onThemeChange } from '@varlet/cli/client'
import { use } from './locale'

watchLang(use, 'pc')
onThemeChange()
</script>

<template>
  <var-pagination :current="3" :total="120" :simple="false" :show-size-changer="false" />
  <var-pagination :current="3" :total="120" :simple="false" :size-option="[10, 20, 30, 40]" />
</template>
