<script setup>
import VarButton from '../../src/button'
import VarIcon from '../../src/icon'
import dark from '../../src/themes/dark'
import { watchLang, watchDarkMode } from '@varlet/cli/client'
import { pack, use } from './locale'

watchLang(use, 'pc')
watchDarkMode(dark)

function download() {
  window.location.href = 'https://raw.githubusercontent.com/varletjs/varlet-design-resources/main/components.sketch'
}
</script>

<template>
  <var-button
    type="primary"
    @click="download"
  >
    {{ pack.downloadResources }}
    <var-icon
      name="download"
      style="margin: 2px 0 0 6px"
    />
  </var-button>
</template>
