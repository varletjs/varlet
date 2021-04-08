<template>
  <app-type>{{ pack.popupPosition }}</app-type>
  <var-button class="mt-10" type="primary" block @click="center = true">{{ pack.centerPopup }}</var-button>
  <var-button class="mt-10" type="primary" block @click="bottom = true">{{ pack.belowPopup }}</var-button>
  <var-button class="mt-10" type="primary" block @click="top = true">{{ pack.abovePopup }}</var-button>
  <var-button class="mt-10" type="primary" block @click="left = true">{{ pack.leftPopup }}</var-button>
  <var-button class="mt-10" type="primary" block @click="right = true">{{ pack.rightPopup }}</var-button>
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
  <var-button class="mt-10" type="primary" block @click="overlayClass = true">{{ pack.overlayClass }}</var-button>
  <var-popup overlay-class="custom-overlay" v-model:show="overlayClass">
    <div class="block">{{ pack.text }}</div>
  </var-popup>
  <var-button class="mt-10" type="primary" block @click="overlayStyle = true">{{ pack.overlayStyles }}</var-button>
  <var-popup
    :overlay-style="{
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    }"
    v-model:show="overlayStyle"
  >
    <div class="block">{{ pack.text }}</div>
  </var-popup>

  <app-type>{{ pack.event }}</app-type>
  <var-button class="mt-10" type="primary" block @click="event = true">{{ pack.event }}</var-button>
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

<script>
import Popup from '..'
import Button from '../../button'
import Snackbar from '../../snackbar'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { watchLang } from '../../utils/components'
import { ref } from 'vue'
import { pack, use } from './locale'

export default {
  name: 'PopupExample',
  components: {
    [Popup.name]: Popup,
    [Button.name]: Button,
    AppType,
  },
  setup() {
    const center = ref(false)
    const top = ref(false)
    const bottom = ref(false)
    const left = ref(false)
    const right = ref(false)
    const overlayClass = ref(false)
    const overlayStyle = ref(false)
    const event = ref(false)

    watchLang(use)

    return {
      pack,
      center,
      top,
      bottom,
      left,
      right,
      overlayClass,
      overlayStyle,
      event,
      Snackbar,
    }
  },
}
</script>

<style>
.custom-overlay {
  background: rgba(0, 0, 0, 0.3);
}
</style>

<style scoped lang="less">
.mt-10 {
  margin-top: 10px;
}

.block {
  padding: 20px 24px;
  width: 250px;
  color: #555;
}
</style>
