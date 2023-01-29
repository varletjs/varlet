<script setup>
import VarColorPicker from '../index'
import { watchLang, AppType } from '@varlet/cli/client'
import { use, pack } from './locale'
import { ref } from 'vue'

watchLang(use)
const color = ref('#f00')
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-color-picker v-model="color" />
  <app-type>{{ pack.disabled }}</app-type>
  <var-color-picker v-model="color" disabled />
  <app-type>{{ pack.swatches }}</app-type>
  <var-color-picker v-model="color" swatches-layout />
  <app-type>{{ pack.modes }}</app-type>
  <var-color-picker v-model="color" />
  <app-type>{{ pack.model }}</app-type>
  <var-color-picker v-model="color" disabled />
</template>
