<script setup>
import VarColorPicker from '../index'
import { watchLang, AppType } from '@varlet/cli/client'
import { use, pack } from './locale'
import { color } from '../utils/color'
import { ref } from 'vue'

watchLang(use)
console.log(Math.random() * 10)
function Rand() {
  const min = 0
  const max = 43
  return Math.floor(Math.random() * (max - min))
}
const colorDemo = ref(color[Rand()])
function changeColor() {
  colorDemo.value = color[Rand()]
}
</script>

<template>
  <var-button type="primary" @click="changeColor">切换按钮</var-button>
  <app-type>我是color picker</app-type>
  {{ colorDemo }}
  <var-color-picker v-model="colorDemo" />
</template>
