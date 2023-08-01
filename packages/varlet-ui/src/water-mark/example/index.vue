<script setup>
import VarWaterMark from '../index'
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
  <var-water-mark content="varlet">
    <div class="water-mark-wrapper"></div>
  </var-water-mark>

  <app-type>{{ pack.customRotate }}</app-type>
  <var-water-mark content="varlet" :rotate="45">
    <div class="water-mark-wrapper"></div>
  </var-water-mark>

  <app-type>{{ pack.customGap }}</app-type>
  <var-water-mark content="varlet" :gap-x="20" :gap-y="20">
    <div class="water-mark-wrapper"></div>
  </var-water-mark>

  <app-type>{{ pack.imageWatermark }}</app-type>
  <var-water-mark
    image="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original"
  >
    <div class="water-mark-wrapper"></div>
  </var-water-mark>

  <app-type>{{ pack.fullScreen }}</app-type>
  <var-water-mark content="Varlet UI" :full-screen="fullScreen" opacity="0.3">
    <div class="water-mark-wrapper">
      <var-button type="primary" @click="toggle">{{ pack.switch }}</var-button>
    </div>
  </var-water-mark>
</template>

<style scoped>
.water-mark-wrapper {
  width: 100%;
  height: 200px;
}
</style>
