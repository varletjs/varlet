<script setup>
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { t, use } from './locale'

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('baseUse') }}</app-type>
  <var-space>
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
    <var-button>Button3</var-button>
  </var-space>

  <app-type>{{ t('vertical') }}</app-type>
  <var-space direction="column" size="large">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
    <var-button>Button3</var-button>
  </var-space>

  <app-type>{{ t('space') }}</app-type>
  <var-space :size="[20, 20]">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
    <var-button>Button3</var-button>
    <var-button>Button4</var-button>
    <var-button>Button5</var-button>
    <var-button>Button6</var-button>
  </var-space>

  <app-type>{{ t('rightAlign') }}</app-type>
  <var-space justify="end" :size="['2.666vmin', '2.666vmin']">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
  </var-space>

  <app-type>{{ t('around') }}</app-type>
  <var-space justify="space-around" :size="['2.666vmin', '2.666vmin']">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
  </var-space>

  <app-type>{{ t('center') }}</app-type>
  <var-space justify="center" :size="['2.666vmin', '2.666vmin']">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
  </var-space>

  <app-type>{{ t('between') }}</app-type>
  <var-space justify="space-between" :size="['2.666vmin', '2.666vmin']">
    <var-button>Button1</var-button>
    <var-button>Button2</var-button>
  </var-space>
</template>
