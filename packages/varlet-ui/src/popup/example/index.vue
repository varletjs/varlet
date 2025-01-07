<script setup>
import { reactive, toRefs } from 'vue'
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { Snackbar } from '@varlet/ui'
import { t, use } from './locale'

const values = reactive({
  center: false,
  top: false,
  bottom: false,
  left: false,
  right: false,
  overlayClass: false,
  overlayStyle: false,
  event: false,
})

const { center, top, bottom, left, right, overlayClass, overlayStyle, event } = toRefs(values)

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('popupPosition') }}</app-type>
  <var-space direction="column" :size="['3vmin', '4vmin']">
    <var-button type="primary" block @click="center = true">{{ t('centerPopup') }}</var-button>
    <var-button type="primary" block @click="bottom = true">{{ t('belowPopup') }}</var-button>
    <var-button type="primary" block @click="top = true">{{ t('abovePopup') }}</var-button>
    <var-button type="primary" block @click="left = true">{{ t('leftPopup') }}</var-button>
    <var-button type="primary" block @click="right = true">{{ t('rightPopup') }}</var-button>
  </var-space>

  <var-popup v-model:show="center">
    <div class="block">{{ t('text') }}</div>
  </var-popup>
  <var-popup v-model:show="bottom" position="bottom">
    <div class="block">{{ t('text') }}</div>
  </var-popup>
  <var-popup v-model:show="top" position="top">
    <div class="block">{{ t('text') }}</div>
  </var-popup>
  <var-popup v-model:show="left" position="left">
    <div class="block">{{ t('text') }}</div>
  </var-popup>
  <var-popup v-model:show="right" position="right">
    <div class="block">{{ t('text') }}</div>
  </var-popup>

  <app-type>{{ t('overlayStyle') }}</app-type>

  <var-space direction="column" :size="['3vmin', '4vmin']">
    <var-button type="primary" block @click="overlayClass = true">{{ t('overlayClass') }}</var-button>
    <var-button type="primary" block @click="overlayStyle = true">{{ t('overlayStyles') }}</var-button>
  </var-space>

  <var-popup v-model:show="overlayClass" overlay-class="custom-overlay">
    <div class="block">{{ t('text') }}</div>
  </var-popup>
  <var-popup
    v-model:show="overlayStyle"
    :overlay-style="{
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    }"
  >
    <div class="block">{{ t('text') }}</div>
  </var-popup>

  <app-type>{{ t('event') }}</app-type>
  <var-button type="primary" block @click="event = true">{{ t('event') }}</var-button>
  <var-popup
    v-model:show="event"
    @open="Snackbar.info('open')"
    @opened="Snackbar.success('opened')"
    @close="Snackbar.warning('close')"
    @closed="Snackbar.error('closed')"
  >
    <div class="block">{{ t('text') }}</div>
  </var-popup>
</template>

<style>
.custom-overlay {
  background: rgba(0, 0, 0, 0.3);
}
</style>

<style scoped lang="less">
.block {
  padding: 24px;
  width: 280px;
}
</style>
