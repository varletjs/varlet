<script setup>
import { t, use } from './locale'
import { watchLang, onThemeChange, AppType } from '@varlet/cli/client'

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('themeColorLink') }}</app-type>
  <var-space :size="['2.666vmin', '2.666vmin']">
    <var-link>{{ t('defaultLink') }}</var-link>
    <var-link type="primary">{{ t('primaryLink') }}</var-link>
    <var-link type="info">{{ t('infoLink') }}</var-link>
    <var-link type="success">{{ t('successLink') }}</var-link>
    <var-link type="warning">{{ t('warningLink') }}</var-link>
    <var-link type="danger">{{ t('dangerLink') }}</var-link>
  </var-space>

  <app-type>{{ t('mode') }}</app-type>
  <var-space :size="['2.666vmin', '2.666vmin']">
    <var-link type="primary" :href="t('hrefLink')" target="_blank">{{ t('withHref') }}</var-link>
    <var-link type="primary" :to="t('toLink')">{{ t('withRouterLink') }}</var-link>
  </var-space>

  <app-type>{{ t('underline') }}</app-type>
  <var-space :size="['2.666vmin', '2.666vmin']">
    <var-link type="primary">{{ t('useUnderlineAlways') }}</var-link>
    <var-link type="primary" underline="hover">{{ t('useUnderlineHove') }}</var-link>
    <var-link type="primary" underline="none">{{ t('notUseUnderline') }}</var-link>
  </var-space>

  <app-type>{{ t('disabledStatus') }}</app-type>
  <var-link disabled>{{ t('disabledStatus') }}</var-link>

  <app-type>{{ t('customColor') }}</app-type>
  <var-space :size="['2.666vmin', '2.666vmin']">
    <var-link text-color="#009688">{{ t('linkText') }}</var-link>
    <var-link text-color="#ab47bc">{{ t('linkText') }}</var-link>
  </var-space>

  <app-type>{{ t('slots') }}</app-type>
  <var-link :href="t('hrefLink')" target="_blank" underline="none">
    <var-button type="primary">{{ t('buttonText') }}</var-button>
  </var-link>
</template>
