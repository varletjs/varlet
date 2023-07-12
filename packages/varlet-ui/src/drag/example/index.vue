<script setup>
import VarDrag from '..'
import VarButton from '../../button'
import dark from '../../themes/dark'
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import { pack, use } from './locale'

watchLang(use)
watchDarkMode(dark)

watchLang(use)
</script>

<template>
  <app-type>Mobile phone example code</app-type>
  <var-drag style="left: 40px; top: 80px" :boundary="{ top: 54 }">
    <var-button type="primary">Drag Me</var-button>
  </var-drag>

  <div style="position: relative; width: 200px; height: 200px; background-color: blueviolet">
    <var-drag :fixed="false" style="left: 50px; top: 50px">
      <var-button style="width: 140px" type="primary">Drag Me</var-button>
    </var-drag>
  </div>
</template>
