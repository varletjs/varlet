<script setup>
import { Themes } from '@varlet/ui'
import { watchLang, onThemeChange } from '@varlet/cli/client'
import { use } from './locale'

watchLang(use, 'pc')
onThemeChange()
</script>

<template>
  <var-pagination :current="3" :total="120" :simple="false" show-quick-jumper />
</template>
