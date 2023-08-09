<script setup>
import { onMounted, ref } from 'vue'
import { watchLang, AppType, watchDarkMode } from '@varlet/cli/client'

import { use, pack } from './locale'
import VarWatermark from '../index'
import dark from '../../themes/dark'

const fullscreen = ref(false)
const watermarkRef = ref(null)
const watermarkRef2 = ref(null)
const watermarkRef3 = ref(null)
const watermarkRef4 = ref(null)
const watermarkRef5 = ref(null)

const toggle = () => {
  fullscreen.value = !fullscreen.value
}

watchLang(use)

onMounted(() => {
  watchDarkMode(dark, () => {
    watermarkRef.value.resize()
    watermarkRef2.value.resize()
    watermarkRef3.value.resize()
    watermarkRef4.value.resize()
    watermarkRef5.value.resize()
  })
})
</script>

<template>
  <app-type>{{ pack.textWatermark }}</app-type>
  <var-watermark content="Varlet" ref="watermarkRef">
    <div class="watermark-wrapper"></div>
  </var-watermark>

  <app-type>{{ pack.imageWatermark }}</app-type>
  <var-watermark image="./varlet_icon.png">
    <div class="watermark-wrapper"></div>
  </var-watermark>

  <app-type>{{ pack.customGap }}</app-type>
  <var-watermark content="Varlet" :gap-x="40" :gap-y="40" ref="watermarkRef2">
    <div class="watermark-wrapper"></div>
  </var-watermark>

  <app-type>{{ pack.customOffset }}</app-type>
  <var-watermark content="Varlet" :offset-x="20" :offset-y="20" ref="watermarkRef3">
    <div class="watermark-wrapper"></div>
  </var-watermark>

  <app-type>{{ pack.customRotate }}</app-type>
  <var-watermark content="Varlet" :rotate="22" :offset-x="20" :offset-y="20" ref="watermarkRef4">
    <div class="watermark-wrapper"></div>
  </var-watermark>

  <app-type>{{ pack.fullscreen }}</app-type>
  <var-watermark
    content="Varlet UI"
    :fullscreen="fullscreen"
    opacity="0.1"
    :offset-x="10"
    :offset-y="10"
    ref="watermarkRef5"
  >
    <div class="watermark-wrapper">
      <var-button type="primary" @click="toggle">{{ pack.switch }}</var-button>
    </div>
  </var-watermark>

  <app-type>{{ pack.customContentSlot }}</app-type>
  <var-watermark :offset-x="10" :offset-y="10">
    <div class="watermark-wrapper"></div>
    <template #content>
      <span style="font-size: 20px; color: #fefefe; text-shadow: 0 0 0.5em #4a7afe, 0 0 0.2em #5c5c5c">Varlet UI</span>
    </template>
  </var-watermark>
</template>

<style scoped>
.watermark-wrapper {
  width: 100%;
  height: 200px;
}
</style>
