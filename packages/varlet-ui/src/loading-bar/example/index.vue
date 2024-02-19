<script setup>
import { LoadingBar } from '@varlet/ui'
import { ref } from 'vue'
import { watchLang, AppType, onThemeChange } from '@varlet/cli/client'
import { use, t } from './locale'

const hasCustomStyle = ref(false)

onThemeChange()
watchLang(use)

LoadingBar.setDefaultOptions({
  top: '54px',
})

function setStyle() {
  if (hasCustomStyle.value) {
    LoadingBar.resetDefaultOptions()
  } else {
    LoadingBar.setDefaultOptions({
      errorColor: '#ff8800',
      color: '#10afef',
      height: '5px',
    })
  }

  hasCustomStyle.value = !hasCustomStyle.value
}
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-space direction="column" :size="['3vmin', '4vmin']">
    <var-button type="primary" block @click="LoadingBar.start()">{{ t('start') }}</var-button>
    <var-button type="primary" block @click="LoadingBar.finish()">{{ t('finish') }}</var-button>
    <var-button type="primary" block @click="LoadingBar.error()">{{ t('error') }}</var-button>
    <var-button type="primary" block @click="setStyle">{{ hasCustomStyle ? t('clear') : t('custom') }}</var-button>
  </var-space>
</template>
