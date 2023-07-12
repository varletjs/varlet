<script setup>
import VarDrag from '..'
import VarButton from '../../button'
import dark from '../../themes/dark'
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import { pack, use } from './locale'

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type style="height: 50px">{{ pack.basicUse }}</app-type>
  <var-drag style="left: 15px; top: 105px" :boundary="{ top: 54 }">
    <var-button type="primary">{{ pack.basicUse }}</var-button>
  </var-drag>

  <app-type style="height: 50px; margin-top: 40px">{{ pack.direction }}</app-type>
  <var-drag style="left: 15px; top: 195px" direction="x" :boundary="{ top: 54 }">
    <var-button type="primary">{{ pack.direction }}</var-button>
  </var-drag>

  <app-type style="height: 50px; margin-top: 40px">{{ pack.attraction }}</app-type>
  <var-drag style="left: 15px; top: 285px" attraction="x" :boundary="{ top: 54 }">
    <var-button type="primary">{{ pack.xAttraction }}</var-button>
  </var-drag>
  <var-drag style="left: 132px; top: 285px" attraction="y" :boundary="{ top: 54 }">
    <var-button type="primary">{{ pack.yAttraction }}</var-button>
  </var-drag>

  <app-type style="height: 50px; margin-top: 40px">{{ pack.disabled }}</app-type>
  <var-drag style="left: 15px; top: 375px" disabled attraction="x" :boundary="{ top: 54 }">
    <var-button type="primary" disabled>{{ pack.disabled }}</var-button>
  </var-drag>

  <app-type style="height: 50px; margin-top: 40px">{{ pack.boundary }}</app-type>
  <var-drag style="left: 15px; top: 465px" attraction="x" :boundary="{ top: 465, bottom: 15, left: 15, right: 15 }">
    <var-button type="primary">{{ pack.boundary }}</var-button>
  </var-drag>
</template>
