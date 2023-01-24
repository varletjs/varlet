<script setup>
import VarColorPicker from '../index'
import { watchLang, AppType } from '@varlet/cli/client'
import { use, pack } from './locale'
import { ref } from 'vue'

watchLang(use)
const color = ref('#ff00ff')
</script>

<template>
  <var-button type="primary" @click="changeColor">切换按钮</var-button>
  <var-button type="primary" @click="color = null">null</var-button>
  <var-button type="primary" @click="color = '#ff00ff'">hex</var-button>
  <var-button type="primary" @click="color = '#ff00ffff'">hexa</var-button>
  <var-button type="primary" @click="color = { r: 255, g: 0, b: 255, a: 1 }">rgba</var-button>
  <var-button type="primary" @click="color = { h: 300, s: 1, l: 0.5, a: 1 }">hsla</var-button>
  <var-button type="primary" @click="color = { h: 300, s: 1, v: 1, a: 1 }">hsva</var-button>
  <app-type>我是color picker</app-type>
  {{ color }}
  <!-- <var-color-picker v-model="red" mode="hsla" /> -->
  <var-color-picker v-model="color" mode="hsla" />
</template>
