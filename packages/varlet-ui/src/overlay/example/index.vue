<script setup>
import { Snackbar } from '@varlet/ui'
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { reactive, toRefs } from 'vue'
import { t, use } from './locale'

const values = reactive({
  baseOverlay: false,
  contentOverlay: false,
  clickOverlay: false,
})

const { baseOverlay, contentOverlay, clickOverlay } = toRefs(values)

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('overlayBase') }}</app-type>
  <var-button type="primary" block @click="baseOverlay = true">
    {{ t('showOverlay') }}
  </var-button>

  <app-type>{{ t('overlayContent') }}</app-type>
  <var-button type="primary" block @click="contentOverlay = true">
    {{ t('overlayContent') }}
  </var-button>

  <app-type>{{ t('clickEvent') }}</app-type>
  <var-button type="primary" block @click="clickOverlay = true">
    {{ t('clickOverlay') }}
  </var-button>

  <var-overlay v-model:show="baseOverlay" />
  <var-overlay v-model:show="contentOverlay">
    <div class="overlay-content" @click.stop>
      {{ t('text') }}
    </div>
  </var-overlay>
  <var-overlay v-model:show="clickOverlay" @click="Snackbar.success('click')" />
</template>

<style lang="less" scoped>
.overlay-content {
  padding: 24px;
  width: 312px;
  background: var(--color-surface-container-highest);
  border-radius: 28px;
}
</style>
