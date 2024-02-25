<script setup>
import { Snackbar } from '@varlet/ui'
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { reactive, toRefs } from 'vue'
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
  <var-popup position="bottom" v-model:show="bottom">
    <div class="block">{{ t('text') }}</div>
  </var-popup>
  <var-popup position="top" v-model:show="top">
    <div class="block">{{ t('text') }}</div>
  </var-popup>
  <var-popup position="left" v-model:show="left">
    <div class="block">{{ t('text') }}</div>
  </var-popup>
  <var-popup position="right" v-model:show="right">
    <div class="block">{{ t('text') }}</div>
  </var-popup>

  <app-type>{{ t('overlayStyle') }}</app-type>

  <var-space direction="column" :size="['3vmin', '4vmin']">
    <var-button type="primary" block @click="overlayClass = true">{{ t('overlayClass') }}</var-button>
    <var-button type="primary" block @click="overlayStyle = true">{{ t('overlayStyles') }}</var-button>
  </var-space>

  <var-popup overlay-class="custom-overlay" v-model:show="overlayClass">
    <div class="block">{{ t('text') }}</div>
  </var-popup>
  <var-popup
    :overlay-style="{
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    }"
    v-model:show="overlayStyle"
  >
    <div class="block">{{ t('text') }}</div>
  </var-popup>

  <app-type>{{ t('event') }}</app-type>
  <var-button type="primary" block @click="event = true">{{ t('event') }}</var-button>
  <var-popup
    v-model:show="event"
    @open="() => Snackbar.info('open')"
    @opened="() => Snackbar.success('opened')"
    @close="() => Snackbar.warning('close')"
    @closed="() => Snackbar.error('closed')"
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
