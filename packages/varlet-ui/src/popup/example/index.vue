<script setup>
import VarPopup from '..'
import VarButton from '../../button'
import VarSpace from '../../space'
import Snackbar from '../../snackbar'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import dark from '../../themes/dark'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'
import { reactive, toRefs } from 'vue'
import { pack, use } from './locale'

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
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.popupPosition }}</app-type>
  <var-space direction="column" :size="[10, 0]">
    <var-button type="primary" block @click="center = true">{{ pack.centerPopup }}</var-button>
    <var-button type="primary" block @click="bottom = true">{{ pack.belowPopup }}</var-button>
    <var-button type="primary" block @click="top = true">{{ pack.abovePopup }}</var-button>
    <var-button type="primary" block @click="left = true">{{ pack.leftPopup }}</var-button>
    <var-button type="primary" block @click="right = true">{{ pack.rightPopup }}</var-button>
  </var-space>

  <var-popup v-model:show="center">
    <div class="block">{{ pack.text }}</div>
  </var-popup>
  <var-popup position="bottom" v-model:show="bottom">
    <div class="block">{{ pack.text }}</div>
  </var-popup>
  <var-popup position="top" v-model:show="top">
    <div class="block">{{ pack.text }}</div>
  </var-popup>
  <var-popup position="left" v-model:show="left">
    <div class="block">{{ pack.text }}</div>
  </var-popup>
  <var-popup position="right" v-model:show="right">
    <div class="block">{{ pack.text }}</div>
  </var-popup>

  <app-type>{{ pack.overlayStyle }}</app-type>

  <var-space direction="column" :size="[10, 0]">
    <var-button type="primary" block @click="overlayClass = true">{{ pack.overlayClass }}</var-button>
    <var-button type="primary" block @click="overlayStyle = true">{{ pack.overlayStyles }}</var-button>
  </var-space>

  <var-popup overlay-class="custom-overlay" v-model:show="overlayClass">
    <div class="block">{{ pack.text }}</div>
  </var-popup>
  <var-popup
    :overlay-style="{
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    }"
    v-model:show="overlayStyle"
  >
    <div class="block">{{ pack.text }}</div>
  </var-popup>

  <app-type>{{ pack.event }}</app-type>
  <var-button type="primary" block @click="event = true">{{ pack.event }}</var-button>
  <var-popup
    v-model:show="event"
    @open="() => Snackbar.info('open')"
    @opened="() => Snackbar.success('opened')"
    @close="() => Snackbar.warning('close')"
    @closed="() => Snackbar.error('closed')"
  >
    <div class="block">{{ pack.text }}</div>
  </var-popup>
</template>

<style>
.custom-overlay {
  background: rgba(0, 0, 0, 0.3);
}
</style>

<style scoped lang="less">
.block {
  padding: 20px 24px;
  width: 250px;
  color: var(--site-config-color-text);
}
</style>
