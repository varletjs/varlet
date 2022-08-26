<script setup>
import VarMenuV2 from '..'
import VarButton from '../../button'
import VarCell from '../../cell'
import dark from '../../themes/dark/index'
import { watchDarkMode } from '@varlet/cli/site/utils'

watchDarkMode(dark)
</script>

<template>
  <var-menu-v2>
    <var-button type="primary">触发</var-button>

    <template #menu>
      <var-cell>菜单项</var-cell>
      <var-cell>菜单项</var-cell>
      <var-cell>菜单项</var-cell>
    </template>
  </var-menu-v2>
</template>
