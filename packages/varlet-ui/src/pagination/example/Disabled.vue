<script setup>
import { onThemeChange, watchLang } from '@varlet/cli/client'
import { use } from './locale'

watchLang(use, 'pc')
onThemeChange()
</script>

<template>
  <var-pagination :current="6" :total="115" :simple="false" disabled />
</template>
