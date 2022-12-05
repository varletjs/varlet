<script setup>
import VarLink from '../index'
import VarSpace from '../../space'
import VarButton from '../../button'
import dark from '../../themes/dark'
import { pack, use } from './locale'
import { watchLang, watchDarkMode, AppType } from '@varlet/cli/client'

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.themeColorLink }}</app-type>
  <var-space :size="['2.666vw', '2.666vw']">
    <var-link>{{ pack.defaultLink }}</var-link>
    <var-link type="primary">{{ pack.primaryLink }}</var-link>
    <var-link type="info">{{ pack.infoLink }}</var-link>
    <var-link type="success">{{ pack.successLink }}</var-link>
    <var-link type="warning">{{ pack.warningLink }}</var-link>
    <var-link type="danger">{{ pack.dangerLink }}</var-link>
  </var-space>

  <app-type>{{ pack.mode }}</app-type>
  <var-space :size="['2.666vw', '2.666vw']">
    <var-link type="primary" :href="pack.hrefLink" target="_blank">{{ pack.withHref }}</var-link>
    <var-link type="primary" :to="pack.toLink">{{ pack.withRouterLink }}</var-link>
  </var-space>

  <app-type>{{ pack.underline }}</app-type>
  <var-space :size="['2.666vw', '2.666vw']">
    <var-link type="primary">{{ pack.useUnderlineAlways }}</var-link>
    <var-link type="primary" underline="hover">{{ pack.useUnderlineHove }}</var-link>
    <var-link type="primary" underline="none">{{ pack.notUseUnderline }}</var-link>
  </var-space>

  <app-type>{{ pack.disabledStatus }}</app-type>
  <var-link disabled>{{ pack.disabledStatus }}</var-link>

  <app-type>{{ pack.customColor }}</app-type>
  <var-space :size="['2.666vw', '2.666vw']">
    <var-link text-color="#009688">{{ pack.linkText }}</var-link>
    <var-link text-color="#ab47bc">{{ pack.linkText }}</var-link>
  </var-space>

  <app-type>{{ pack.slots }}</app-type>
  <var-link :href="pack.hrefLink" target="_blank" underline="none">
    <var-button type="primary">{{ pack.buttonText }}</var-button>
  </var-link>
</template>
