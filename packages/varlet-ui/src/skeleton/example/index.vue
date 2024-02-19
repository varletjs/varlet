<script setup>
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { ref } from 'vue'
import { use, t } from './locale'

const loading = ref(true)
const fullscreenLoading = ref(false)

watchLang(use)
onThemeChange()

function fullscreen() {
  fullscreenLoading.value = true

  setTimeout(() => {
    fullscreenLoading.value = false
  }, 2000)
}
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-skeleton :loading="loading">{{ t('loadingData') }}</var-skeleton>

  <app-type>{{ t('displayTitle') }}</app-type>
  <var-skeleton title :loading="loading">{{ t('loadingData') }}</var-skeleton>

  <app-type>{{ t('customRowsWidth') }}</app-type>
  <var-skeleton title :rows="3" :loading="loading" :rows-width="['200px', '100px', '50px']">
    {{ t('loadingData') }}
  </var-skeleton>

  <app-type>{{ t('displayAvatar') }}</app-type>
  <var-skeleton title avatar :rows="3" :loading="loading">
    {{ t('loadingData') }}
  </var-skeleton>

  <app-type>{{ t('displayCard') }}</app-type>
  <var-skeleton title avatar card :rows="3" :loading="loading">
    {{ t('loadingData') }}
  </var-skeleton>

  <app-type>{{ t('fullscreenMode') }}</app-type>
  <var-button type="danger" class="button" @click="fullscreen">
    {{ t('toggleFullscreenMode') }}
  </var-button>
  <var-skeleton fullscreen :loading="fullscreenLoading" />
</template>
