<script setup>
import AppType from '@varlet/cli/site/mobile/components/AppType'
import VarSpace from '..'
import VarButton from '../../button'
import dark from '../../themes/dark'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.baseUse }}</app-type>
  <var-space>
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
    <var-button>Button3</var-button>
  </var-space>

  <app-type>{{ pack.vertical }}</app-type>
  <var-space direction="column" size="large">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
    <var-button>Button3</var-button>
  </var-space>

  <app-type>{{ pack.space }}</app-type>
  <var-space :size="[20, 20]">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
    <var-button>Button3</var-button>
    <var-button>Button4</var-button>
    <var-button>Button5</var-button>
    <var-button>Button6</var-button>
  </var-space>

  <app-type>{{ pack.rightAlign }}</app-type>
  <var-space justify="end">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
  </var-space>

  <app-type>{{ pack.around }}</app-type>
  <var-space justify="space-around">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
  </var-space>

  <app-type>{{ pack.center }}</app-type>
  <var-space justify="center">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
  </var-space>

  <app-type>{{ pack.between }}</app-type>
  <var-space justify="space-between">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
  </var-space>
</template>
