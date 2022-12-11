<script setup>
import VarOverlay from '../Overlay'
import VarButton from '../../button'
import Snackbar from '../../snackbar'
import dark from '../../themes/dark'
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import { reactive, toRefs } from 'vue'
import { pack, use } from './locale'

const values = reactive({
  baseOverlay: false,
  contentOverlay: false,
  clickOverlay: false,
})

const { baseOverlay, contentOverlay, clickOverlay } = toRefs(values)

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.overlayBase }}</app-type>
  <var-button type="primary" block @click="baseOverlay = true">
    {{ pack.showOverlay }}
  </var-button>

  <app-type>{{ pack.overlayContent }}</app-type>
  <var-button type="primary" block @click="contentOverlay = true">
    {{ pack.overlayContent }}
  </var-button>

  <app-type>{{ pack.event }}</app-type>
  <var-button type="primary" block @click="clickOverlay = true">
    {{ pack.clickOverlay }}
  </var-button>

  <var-overlay v-model:show="baseOverlay" />
  <var-overlay v-model:show="contentOverlay">
    <div class="overlay-content" @click.stop>
      {{ pack.text }}
    </div>
  </var-overlay>
  <var-overlay v-model:show="clickOverlay" @click="Snackbar.success('click')" />
</template>

<style lang="less" scoped>
.overlay-content {
  padding: 20px 24px;
  width: 250px;
  background: var(--button-default-color);
}
</style>
