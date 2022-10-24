<script setup>
import VarSkeleton from '..'
import VarButton from '../../button'
import { AppType , watchLang, watchDarkMode } from '@varlet/cli/client'
import dark from '../../themes/dark'
import { ref } from 'vue'
import { use, pack } from './locale'

const loading = ref(true)
const fullscreenLoading = ref(false)

const fullscreen = () => {
  fullscreenLoading.value = true

  setTimeout(() => {
    fullscreenLoading.value = false
  }, 2000)
}

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-skeleton :loading="loading">{{ pack.loadingData }}</var-skeleton>

  <app-type>{{ pack.displayTitle }}</app-type>
  <var-skeleton title :loading="loading">{{ pack.loadingData }}</var-skeleton>

  <app-type>{{ pack.customRowsHeight }}</app-type>
  <var-skeleton title :rows="3" :loading="loading" :rows-width="['200px', '100px', '50px']">
    {{ pack.loadingData }}
  </var-skeleton>

  <app-type>{{ pack.displayAvatar }}</app-type>
  <var-skeleton title avatar :rows="3" :loading="loading">
    {{ pack.loadingData }}
  </var-skeleton>

  <app-type>{{ pack.displayCard }}</app-type>
  <var-skeleton title avatar card :rows="3" :loading="loading">
    {{ pack.loadingData }}
  </var-skeleton>

  <app-type>{{ pack.fullscreenMode }}</app-type>
  <var-button type="danger" class="button" @click="fullscreen">
    {{ pack.toggleFullscreenMode }}
  </var-button>
  <var-skeleton fullscreen :loading="fullscreenLoading" />
</template>
