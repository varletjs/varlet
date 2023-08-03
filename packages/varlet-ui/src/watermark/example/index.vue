<script setup>
import VarWatermark from '../index'
import { watchLang, AppType } from '@varlet/cli/client'
import { use, pack } from './locale'
import { ref } from 'vue'

const fullScreen = ref(false)

const toggle = () => {
  fullScreen.value = !fullScreen.value
}

watchLang(use)
</script>

<template>
  <app-type>{{ pack.textWatermark }}</app-type>
  <var-watermark content="Varlet">
    <div class="watermark-wrapper"></div>
  </var-watermark>

  <app-type>{{ pack.imageWatermark }}</app-type>
  <var-watermark image="./varlet_icon.png" :offset-x="20" :offset-y="20">
    <div class="watermark-wrapper"></div>
  </var-watermark>

  <app-type>{{ pack.customGap }}</app-type>
  <var-watermark content="Varlet" :gap-x="40" :gap-y="40">
    <div class="watermark-wrapper"></div>
  </var-watermark>

  <app-type>{{ pack.customOffset }}</app-type>
  <var-watermark content="Varlet" :offset-x="20" :offset-y="20">
    <div class="watermark-wrapper"></div>
  </var-watermark>

  <app-type>{{ pack.customRotate }}</app-type>
  <var-watermark content="Varlet" :rotate="22" :offset-x="20" :offset-y="20">
    <div class="watermark-wrapper"></div>
  </var-watermark>

  <app-type>{{ pack.fullScreen }}</app-type>
  <var-watermark content="Varlet UI" :full-screen="fullScreen" opacity="0.1" :offset-x="10" :offset-y="10">
    <div class="watermark-wrapper">
      <var-button type="primary" @click="toggle">{{ pack.switch }}</var-button>
    </div>
  </var-watermark>
</template>

<style scoped>
.watermark-wrapper {
  width: 100%;
  height: 200px;
}
</style>
