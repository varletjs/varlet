<script setup>
import { onThemeChange, watchLang } from '@varlet/cli/client'
import VarButton from '../../src/button'
import VarIcon from '../../src/icon'
import { t, use } from './locale'

watchLang(use, 'pc')
onThemeChange()

function download() {
  window.location.href = 'https://raw.githubusercontent.com/varletjs/varlet-design-resources/main/components.sketch'
}
</script>

<template>
  <var-button type="primary" @click="download">
    {{ t('downloadResources') }}
    <var-icon name="download" style="margin: 2px 0 0 6px" />
  </var-button>
</template>
