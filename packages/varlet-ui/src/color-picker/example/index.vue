<script setup>
import VarColorPicker from '../index'
import { watchLang, AppType } from '@varlet/cli/client'
import { use, pack } from './locale'
import { color } from '../utils/color'
import { ref } from 'vue'

watchLang(use)
// console.log(Math.random() * 10)
function Rand() {
  const min = 0
  const max = 43
  return Math.floor(Math.random() * (max - min))
}
const colorDemo = ref(color[Rand()])
function changeColor() {
  colorDemo.value = color[Rand()]
}
const color1 = ref(null)
</script>

<template>
  <var-button type="primary" @click="changeColor">切换按钮</var-button>
  <var-button type="primary" block @click="color1 = null">null</var-button>
  <var-button type="primary" block @click="color1 = '#ff00ff'">hex</var-button>
  <var-button type="primary" block @click="color1 = '#ff00ffff'">hexa</var-button>
  <var-button type="primary" block @click="color1 = { r: 255, g: 0, b: 255, a: 1 }">rgba</var-button>
  <var-button type="primary" block @click="color1 = { h: 300, s: 1, l: 0.5, a: 1 }">hsla</var-button>
  <var-button type="primary" block @click="color1 = { h: 300, s: 1, v: 1, a: 1 }">hsva</var-button>
  <app-type>我是color picker</app-type>
  {{ color1 }}
  <var-color-picker v-model="color1" />
  <!-- <var-color-picker /> -->
</template>
