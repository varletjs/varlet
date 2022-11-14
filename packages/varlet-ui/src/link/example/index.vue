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
    <var-link :href="pack.hrefLink" target="_blank">{{ pack.defaultLink }}</var-link>
    <var-link type="primary">{{ pack.primaryLink }}</var-link>
    <var-link type="info">{{ pack.infoLink }}</var-link>
    <var-link type="success">{{ pack.successLink }}</var-link>
    <var-link type="warning">{{ pack.warningLink }}</var-link>
    <var-link type="danger">{{ pack.dangerLink }}</var-link>
  </var-space>

  <app-type>{{ pack.basicUsage }}</app-type>
  <var-space :size="['2.666vw', '2.666vw']">
    <var-link :href="pack.hrefLink" target="_blank" type="primary">{{ pack.withHref }}</var-link>
    <var-link :to="pack.toLink" type="primary">{{ pack.withRouterLink }}</var-link>
  </var-space>

  <app-type>{{ pack.underline }}</app-type>
  <var-space :size="['2.666vw', '2.666vw']">
    <var-link underline="always" type="primary">{{ pack.useUnderlineAlways }}</var-link>
    <var-link underline="hover" type="primary">{{ pack.useUnderlineHove }}</var-link>
    <var-link underline="none" type="primary">{{ pack.notUseUnderline }}</var-link>
  </var-space>

  <app-type>{{ pack.disabledStatus }}</app-type>
  <var-space :size="['2.666vw', '2.666vw']">
    <var-link disabled>{{ pack.disabledStatus }}</var-link>
  </var-space>

  <app-type>{{ pack.customColor }}</app-type>
  <var-space :size="['2.666vw', '2.666vw']">
    <var-link text-color="#01847f">{{ pack.linkText }}</var-link>
    <var-link text-color="#f9d2e4">{{ pack.linkText }}</var-link>
  </var-space>

  <app-type>{{ pack.defaultStyle }}</app-type>
  <var-space :size="['2.666vw', '2.666vw']">
    <var-link :href="pack.hrefLink" target="_blank" default-style>
      <var-button type="primary">{{ pack.buttonText }}</var-button>
    </var-link>
  </var-space>
</template>
