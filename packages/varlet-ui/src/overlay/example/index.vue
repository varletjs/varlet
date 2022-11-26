<script setup>
import VarOverlay from '../Overlay'
import VarButton from '../../button'
import VarSpace from '../../space'
import Snackbar from '../../snackbar'
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import dark from '../../themes/dark'
import { reactive, toRefs } from 'vue'
import { pack, use } from './local'

const values = reactive({
  baseOverlay: false,
  contentOverlay: false,
  overlayClass: false,
  overlayStyle: false,
  clickOverlay: false,
})

const { baseOverlay, contentOverlay, overlayClass, overlayStyle, clickOverlay } = toRefs(values)

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.overlayBase }}</app-type>
  <var-space direction="column" :size="[10, 0]">
    <var-button type="primary" block @click="baseOverlay = true">
      {{ pack.showOverlay }}
    </var-button>
  </var-space>

  <var-overlay v-model:show="baseOverlay" />

  <app-type>{{ pack.overlayContent }}</app-type>
  <var-space direction="column" :size="[10, 0]">
    <var-button type="primary" block @click="contentOverlay = true">
      {{ pack.overlayContent }}
    </var-button>
  </var-space>

  <var-overlay v-model:show="contentOverlay">
    <div class="popup-example-block">
      {{ pack.text }}
    </div>
  </var-overlay>

  <app-type>{{ pack.overlayStyles }}</app-type>
  <var-space direction="column" :size="[10, 0]">
    <var-button type="primary" block @click="overlayClass = true">
      {{ pack.overlayClass }}
    </var-button>
    <var-button type="primary" block @click="overlayStyle = true">
      {{ pack.overlayStyle }}
    </var-button>
  </var-space>

  <var-overlay v-model:show="overlayClass" overlay-class="popup-example-custom-overlay" />

  <var-overlay v-model:show="overlayStyle" :overlay-style="{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }" />

  <app-type>{{ pack.event }}</app-type>
  <var-space direction="column" :size="[10, 0]">
    <var-button type="primary" block @click="clickOverlay = true">
      {{ pack.clickOverlay }}
    </var-button>
  </var-space>

  <var-overlay v-model:show="clickOverlay" @click-overlay="() => Snackbar.success('click')" />
</template>

<style>
.popup-example-custom-overlay {
  background: rgba(0, 0, 0, 0.3) !important;
}
.popup-example-block {
  padding: 20px 24px;
  width: 250px;
  background: var(--button-default-color);
}
</style>
