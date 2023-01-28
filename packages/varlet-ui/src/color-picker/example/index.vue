<script setup>
import VarColorPicker from '../index'
import { watchLang, AppType } from '@varlet/cli/client'
import { use, pack } from './locale'
import { ref } from 'vue'

watchLang(use)
const color = ref('#ff00ff')
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-color-picker v-model="color" mode="hsla" />
</template>
