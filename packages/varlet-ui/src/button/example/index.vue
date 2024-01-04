<script setup>
import { Snackbar } from '@varlet/ui'
import { pack, use } from './locale'
import { watchLang, onThemeChange, AppType } from '@varlet/cli/client'

watchLang(use)
onThemeChange()

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
</script>

<template>
  <app-type>{{ pack.themeColorButton }}</app-type>
  <var-space :size="['2.666vmin', '2.666vmin']">
    <var-button>{{ pack.defaultButton }}</var-button>
    <var-button type="primary">{{ pack.primaryButton }}</var-button>
    <var-button type="info">{{ pack.infoButton }}</var-button>
    <var-button type="success">{{ pack.successButton }}</var-button>
    <var-button type="warning">{{ pack.warningButton }}</var-button>
    <var-button type="danger">{{ pack.dangerButton }}</var-button>
  </var-space>

  <app-type>{{ pack.textButton }}</app-type>
  <var-space :size="['2.666vmin', '2.666vmin']">
    <var-button text outline type="primary">{{ pack.outlineButton }}</var-button>
    <var-button text type="primary">{{ pack.plainTextButton }}</var-button>
  </var-space>

  <app-type>{{ pack.disabledStatus }}</app-type>
  <var-space :size="['2.666vmin', '2.666vmin']">
    <var-button disabled>{{ pack.disabledStatus }}</var-button>
    <var-button disabled text outline>{{ pack.disabledStatus }}</var-button>
    <var-button disabled text>{{ pack.disabledStatus }}</var-button>
  </var-space>

  <app-type>{{ pack.loadingStatus }}</app-type>
  <var-space :size="['2.666vmin', '2.666vmin']">
    <var-button loading type="primary">{{ pack.loadingStatus }}</var-button>
    <var-button loading type="info" loading-type="rect">{{ pack.loadingStatus }}</var-button>
    <var-button loading type="success" loading-type="disappear">{{ pack.loadingStatus }}</var-button>
    <var-button loading type="danger" loading-type="cube">{{ pack.loadingStatus }}</var-button>
    <var-button loading type="warning" loading-type="wave">{{ pack.loadingStatus }}</var-button>
  </var-space>

  <app-type>{{ pack.buttonSize }}</app-type>
  <var-space align="center" :size="['2.666vmin', '2.666vmin']">
    <var-button type="primary">{{ pack.normalButton }}</var-button>
    <var-button type="success" size="small">{{ pack.smallButton }}</var-button>
    <var-button type="warning" size="mini">{{ pack.miniButton }}</var-button>
    <var-button type="danger" size="large">{{ pack.largeButton }}</var-button>
  </var-space>

  <app-type>{{ pack.blockButton }}</app-type>
  <var-button block type="primary">{{ pack.blockButton }}</var-button>

  <app-type>{{ pack.customColor }}</app-type>
  <var-space :size="['2.666vmin', '2.666vmin']">
    <var-button color="#66bb6a" text-color="#fff">{{ pack.backgroundTextColor }}</var-button>
    <var-button color="linear-gradient(to bottom right, #6750A4, #D0BCFF)" text-color="#fff">
      {{ pack.linearGradientColor }}
    </var-button>
  </var-space>

  <app-type>{{ pack.roundButton }}</app-type>
  <var-space :size="['2.666vmin', '2.666vmin']">
    <var-button round icon-container>
      <var-icon name="bookmark" />
    </var-button>
    <var-button type="primary" round icon-container>
      <var-icon name="plus" />
    </var-button>
    <var-button type="info" round icon-container>
      <var-icon name="information" />
    </var-button>
    <var-button type="success" round icon-container>
      <var-icon name="check" />
    </var-button>
    <var-button type="warning" round icon-container>
      <var-icon name="warning" />
    </var-button>
    <var-button type="danger" round icon-container>
      <var-icon name="window-close" />
    </var-button>
  </var-space>

  <app-type>{{ pack.event }}</app-type>
  <var-space :size="['2.666vmin', '2.666vmin']">
    <var-button type="success" @click="handleClick">{{ pack.click }}</var-button>
    <var-button type="success" @touchstart="handleTouchstart">{{ pack.touchstart }}</var-button>
    <var-button type="success" @click="handleAutoLoadingClick" auto-loading>{{ pack.autoLoading }}</var-button>
  </var-space>

  <app-type>{{ pack.themeColorButtonGroup }}</app-type>
  <var-space :size="['2.666vmin', '2.666vmin']">
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
  <var-space :size="['2.666vmin', '2.666vmin']">
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
      <var-button style="padding: 0 6px">
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
  <var-space direction="column" :size="['3.666vmin', '3.666vmin']">
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

    <var-button-group mode="icon-container">
      <var-button type="warning">
        <var-icon name="warning" />
      </var-button>
      <var-button type="info">
        <var-icon name="information" />
      </var-button>
      <var-button type="success">
        <var-icon name="check" />
      </var-button>
    </var-button-group>

    <var-button-group type="primary">
      <var-button>{{ pack.button }}</var-button>
      <var-button>{{ pack.button }}</var-button>
      <var-button>{{ pack.button }}</var-button>
    </var-button-group>
  </var-space>

  <app-type>{{ pack.customButtonGroupColor }}</app-type>
  <var-button-group type="primary" color="linear-gradient(to bottom right, #6750A4, #D0BCFF)">
    <var-button>{{ pack.button }}</var-button>
    <var-button>{{ pack.button }}</var-button>
    <var-button>{{ pack.button }}</var-button>
  </var-button-group>

  <app-type>{{ pack.verticalButtonGroup }}</app-type>
  <var-space :size="['5vmin', '5vmin']">
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

    <var-button-group mode="icon-container" vertical>
      <var-button type="warning">
        <var-icon name="warning" />
      </var-button>
      <var-button type="info">
        <var-icon name="information" />
      </var-button>
      <var-button type="success">
        <var-icon name="check" />
      </var-button>
    </var-button-group>

    <var-button-group type="primary" vertical>
      <var-button>{{ pack.button }}</var-button>
      <var-button>{{ pack.button }}</var-button>
      <var-button>{{ pack.button }}</var-button>
    </var-button-group>
  </var-space>
</template>
