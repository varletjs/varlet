<script setup>
import VarButton from '../index'
import VarIcon from '../../icon'
import VarSpace from '../../space'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import Snackbar from '../../snackbar'
import dark from '../../themes/dark'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'

const handleClick = () => {
  Snackbar.success(pack.value.clickSuccess)
}

const handleTouchstart = () => {
  Snackbar.success(pack.value.touchstartSuccess)
}

const handleAutoLoadingClick = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })
}

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.themeColorButton }}</app-type>
  <var-space :size="[10, 10]">
    <var-button>{{ pack.defaultButton }}</var-button>
    <var-button type="primary">{{ pack.primaryButton }}</var-button>
    <var-button type="info">{{ pack.infoButton }}</var-button>
    <var-button type="success">{{ pack.successButton }}</var-button>
    <var-button type="warning">{{ pack.warningButton }}</var-button>
    <var-button type="danger">{{ pack.dangerButton }}</var-button>
  </var-space>

  <app-type>{{ pack.textButton }}</app-type>
  <var-space :size="[10, 10]">
    <var-button text outline type="primary">{{ pack.outlineButton }}</var-button>
    <var-button text type="primary">{{ pack.plainTextButton }}</var-button>
  </var-space>

  <app-type>{{ pack.disabledStatus }}</app-type>
  <var-space :size="[10, 10]">
    <var-button disabled>{{ pack.disabledStatus }}</var-button>
    <var-button disabled text outline>{{ pack.disabledStatus }}</var-button>
    <var-button disabled text>{{ pack.disabledStatus }}</var-button>
  </var-space>

  <app-type>{{ pack.loadingStatus }}</app-type>
  <var-space :size="[10, 10]">
    <var-button loading type="primary">{{ pack.loadingStatus }}</var-button>
    <var-button loading type="info" loading-type="rect">{{ pack.loadingStatus }}</var-button>
    <var-button loading type="success" loading-type="disappear">{{ pack.loadingStatus }}</var-button>
    <var-button loading type="danger" loading-type="cube">{{ pack.loadingStatus }}</var-button>
    <var-button loading type="warning" loading-type="wave">{{ pack.loadingStatus }}</var-button>
  </var-space>

  <app-type>{{ pack.buttonSize }}</app-type>
  <var-space align="center" :size="[10, 10]">
    <var-button type="primary">{{ pack.normalButton }}</var-button>
    <var-button type="success" size="small">{{ pack.smallButton }}</var-button>
    <var-button type="warning" size="mini">{{ pack.miniButton }}</var-button>
    <var-button type="danger" size="large">{{ pack.largeButton }}</var-button>
  </var-space>

  <app-type>{{ pack.blockButton }}</app-type>
  <var-button block type="primary">{{ pack.blockButton }}</var-button>

  <app-type>{{ pack.customColor }}</app-type>
  <var-space :size="[10, 10]">
    <var-button color="#69dbaa" text-color="#eee">{{ pack.backgroundTextColor }}</var-button>
    <var-button color="linear-gradient(to right, #69dbaa, #3a7afe)" text-color="#fff">
      {{ pack.linearGradientColor }}
    </var-button>
  </var-space>

  <app-type>{{ pack.roundButton }}</app-type>
  <var-space :size="[10, 10]">
    <var-button type="primary" round>
      <var-icon name="plus" />
    </var-button>
    <var-button type="info" round>
      <var-icon name="information" />
    </var-button>
    <var-button type="success" round>
      <var-icon name="check" />
    </var-button>
    <var-button type="warning" round>
      <var-icon name="warning" />
    </var-button>
    <var-button type="danger" round>
      <var-icon name="window-close" />
    </var-button>
  </var-space>

  <app-type>{{ pack.event }}</app-type>
  <var-space :size="[10, 10]">
    <var-button type="success" @click="handleClick">{{ pack.click }}</var-button>
    <var-button type="success" @touchstart="handleTouchstart">{{ pack.touchstart }}</var-button>
    <var-button type="success" @click="handleAutoLoadingClick" auto-loading>{{ pack.autoLoading }}</var-button>
  </var-space>
</template>
