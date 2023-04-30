<script setup>
import VarButton from '../index'
import VarButtonGroup from '../../button-group'
import VarIcon from '../../icon'
import VarSpace from '../../space'
import VarMenu from '../../menu'
import VarCell from '../../cell'
import Snackbar from '../../snackbar'
import dark from '../../themes/dark'
import { pack, use } from './locale'
import { watchLang, watchDarkMode, AppType } from '@varlet/cli/client'

function handleClick() {
  Snackbar.success(pack.value.clickSuccess)
}

function handleTouchstart() {
  Snackbar.success(pack.value.touchstartSuccess)
}

function handleAutoLoadingClick() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })
}

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.themeColorButton }}</app-type>
  <var-space :size="['2.666vw', '2.666vw']">
    <var-button>{{ pack.defaultButton }}</var-button>
    <var-button type="primary">{{ pack.primaryButton }}</var-button>
    <var-button type="info">{{ pack.infoButton }}</var-button>
    <var-button type="success">{{ pack.successButton }}</var-button>
    <var-button type="warning">{{ pack.warningButton }}</var-button>
    <var-button type="danger">{{ pack.dangerButton }}</var-button>
  </var-space>

  <app-type>{{ pack.textButton }}</app-type>
  <var-space :size="['2.666vw', '2.666vw']">
    <var-button text outline type="primary">{{ pack.outlineButton }}</var-button>
    <var-button text type="primary">{{ pack.plainTextButton }}</var-button>
  </var-space>

  <app-type>{{ pack.disabledStatus }}</app-type>
  <var-space :size="['2.666vw', '2.666vw']">
    <var-button disabled>{{ pack.disabledStatus }}</var-button>
    <var-button disabled text outline>{{ pack.disabledStatus }}</var-button>
    <var-button disabled text>{{ pack.disabledStatus }}</var-button>
  </var-space>

  <app-type>{{ pack.loadingStatus }}</app-type>
  <var-space :size="['2.666vw', '2.666vw']">
    <var-button loading type="primary">{{ pack.loadingStatus }}</var-button>
    <var-button loading type="info" loading-type="rect">{{ pack.loadingStatus }}</var-button>
    <var-button loading type="success" loading-type="disappear">{{ pack.loadingStatus }}</var-button>
    <var-button loading type="danger" loading-type="cube">{{ pack.loadingStatus }}</var-button>
    <var-button loading type="warning" loading-type="wave">{{ pack.loadingStatus }}</var-button>
  </var-space>

  <app-type>{{ pack.buttonSize }}</app-type>
  <var-space align="center" :size="['2.666vw', '2.666vw']">
    <var-button type="primary">{{ pack.normalButton }}</var-button>
    <var-button type="success" size="small">{{ pack.smallButton }}</var-button>
    <var-button type="warning" size="mini">{{ pack.miniButton }}</var-button>
    <var-button type="danger" size="large">{{ pack.largeButton }}</var-button>
  </var-space>

  <app-type>{{ pack.blockButton }}</app-type>
  <var-button block type="primary">{{ pack.blockButton }}</var-button>

  <app-type>{{ pack.customColor }}</app-type>
  <var-space :size="['2.666vw', '2.666vw']">
    <var-button color="#66bb6a" text-color="#fff">{{ pack.backgroundTextColor }}</var-button>
    <var-button color="linear-gradient(to right, #69dbaa, #3a7afe)" text-color="#fff">
      {{ pack.linearGradientColor }}
    </var-button>
  </var-space>

  <app-type>{{ pack.roundButton }}</app-type>
  <var-space :size="['2.666vw', '2.666vw']">
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
  <var-space :size="['2.666vw', '2.666vw']">
    <var-button type="success" @click="handleClick">{{ pack.click }}</var-button>
    <var-button type="success" @touchstart="handleTouchstart">{{ pack.touchstart }}</var-button>
    <var-button type="success" @click="handleAutoLoadingClick" auto-loading>{{ pack.autoLoading }}</var-button>
  </var-space>

  <app-type>{{ pack.themeColorButtonGroup }}</app-type>
  <var-space :size="['2.666vw', '2.666vw']">
    <var-button-group type="default">
      <var-button>{{ pack.button }}</var-button>
      <var-button>{{ pack.button }}</var-button>
      <var-button>{{ pack.button }}</var-button>
    </var-button-group>

    <var-button-group type="primary">
      <var-button type="primary">{{ pack.button }}</var-button>
      <var-button type="primary">{{ pack.button }}</var-button>
      <var-button type="primary">{{ pack.button }}</var-button>
    </var-button-group>
  </var-space>

  <app-type>{{ pack.buttonGroupSize }}</app-type>
  <var-space :size="['2.666vw', '2.666vw']">
    <var-button-group size="normal" type="primary">
      <var-button>{{ pack.button }}</var-button>
      <var-button>{{ pack.button }}</var-button>
      <var-button>{{ pack.button }}</var-button>
    </var-button-group>

    <var-button-group size="large" type="primary">
      <var-button>{{ pack.button }}</var-button>
      <var-button>{{ pack.button }}</var-button>
      <var-button>{{ pack.button }}</var-button>
    </var-button-group>
  </var-space>

  <app-type>{{ pack.splitButton }}</app-type>
  <var-menu placement="bottom" same-width :offset-y="6">
    <var-button-group type="primary">
      <var-button @click.stop>{{ pack.splitButton }}</var-button>
      <var-button style="padding: 0 6px; border-left: thin solid #1976d2">
        <var-icon name="menu-down" :size="24" />
      </var-button>
    </var-button-group>

    <template #menu>
      <var-cell ripple>{{ pack.splitButton }}</var-cell>
      <var-cell ripple>{{ pack.splitButton }}</var-cell>
      <var-cell ripple>{{ pack.splitButton }}</var-cell>
    </template>
  </var-menu>

  <app-type>{{ pack.modeButtonGroup }}</app-type>
  <var-space :size="['2.666vw', '2.666vw']">
    <var-button-group type="primary" mode="text">
      <var-button>{{ pack.button }}</var-button>
      <var-button>{{ pack.button }}</var-button>
      <var-button>{{ pack.button }}</var-button>
    </var-button-group>

    <var-button-group type="primary" mode="outline">
      <var-button>{{ pack.button }}</var-button>
      <var-button>{{ pack.button }}</var-button>
      <var-button>{{ pack.button }}</var-button>
    </var-button-group>

    <var-button-group type="primary">
      <var-button>{{ pack.button }}</var-button>
      <var-button>{{ pack.button }}</var-button>
      <var-button>{{ pack.button }}</var-button>
    </var-button-group>
  </var-space>

  <app-type>{{ pack.customButtonGroupColor }}</app-type>
  <var-button-group type="primary" color="linear-gradient(to right, #69dbaa, #3a7afe)">
    <var-button>{{ pack.button }}</var-button>
    <var-button>{{ pack.button }}</var-button>
    <var-button>{{ pack.button }}</var-button>
  </var-button-group>

  <app-type>{{ pack.verticalButtonGroup }}</app-type>
  <var-space :size="['2.666vw', '2.666vw']">
    <var-button-group type="primary" mode="text" vertical>
      <var-button>{{ pack.button }}</var-button>
      <var-button>{{ pack.button }}</var-button>
      <var-button>{{ pack.button }}</var-button>
    </var-button-group>

    <var-button-group type="primary" mode="outline" vertical>
      <var-button>{{ pack.button }}</var-button>
      <var-button>{{ pack.button }}</var-button>
      <var-button>{{ pack.button }}</var-button>
    </var-button-group>

    <var-button-group type="primary" vertical>
      <var-button>{{ pack.button }}</var-button>
      <var-button>{{ pack.button }}</var-button>
      <var-button>{{ pack.button }}</var-button>
    </var-button-group>
  </var-space>
</template>
