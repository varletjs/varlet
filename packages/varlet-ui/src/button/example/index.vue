<script setup>
import { Snackbar } from '@varlet/ui'
import { t, use } from './locale'
import { watchLang, onThemeChange, AppType } from '@varlet/cli/client'

watchLang(use)
onThemeChange()

function handleClick() {
  Snackbar.success(t('clickSuccess'))
}

function handleTouchstart() {
  Snackbar.success(t('touchstartSuccess'))
}

function handleAutoLoadingClick() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })
}
</script>

<template>
  <app-type>{{ t('themeColorButton') }}</app-type>
  <var-space :size="['2.666vmin', '2.666vmin']">
    <var-button>{{ t('defaultButton') }}</var-button>
    <var-button type="primary">{{ t('primaryButton') }}</var-button>
    <var-button type="info">{{ t('infoButton') }}</var-button>
    <var-button type="success">{{ t('successButton') }}</var-button>
    <var-button type="warning">{{ t('warningButton') }}</var-button>
    <var-button type="danger">{{ t('dangerButton') }}</var-button>
  </var-space>

  <app-type>{{ t('textButton') }}</app-type>
  <var-space :size="['2.666vmin', '2.666vmin']">
    <var-button text outline type="primary">{{ t('outlineButton') }}</var-button>
    <var-button text type="primary">{{ t('plainTextButton') }}</var-button>
  </var-space>

  <app-type>{{ t('disabledStatus') }}</app-type>
  <var-space :size="['2.666vmin', '2.666vmin']">
    <var-button disabled>{{ t('disabledStatus') }}</var-button>
    <var-button disabled text outline>{{ t('disabledStatus') }}</var-button>
    <var-button disabled text>{{ t('disabledStatus') }}</var-button>
  </var-space>

  <app-type>{{ t('loadingStatus') }}</app-type>
  <var-space :size="['2.666vmin', '2.666vmin']">
    <var-button loading type="primary">{{ t('loadingStatus') }}</var-button>
    <var-button loading type="info" loading-type="rect">{{ t('loadingStatus') }}</var-button>
    <var-button loading type="success" loading-type="disappear">{{ t('loadingStatus') }}</var-button>
    <var-button loading type="danger" loading-type="cube">{{ t('loadingStatus') }}</var-button>
    <var-button loading type="warning" loading-type="wave">{{ t('loadingStatus') }}</var-button>
  </var-space>

  <app-type>{{ t('buttonSize') }}</app-type>
  <var-space align="center" :size="['2.666vmin', '2.666vmin']">
    <var-button type="primary">{{ t('normalButton') }}</var-button>
    <var-button type="success" size="small">{{ t('smallButton') }}</var-button>
    <var-button type="warning" size="mini">{{ t('miniButton') }}</var-button>
    <var-button type="danger" size="large">{{ t('largeButton') }}</var-button>
  </var-space>

  <app-type>{{ t('blockButton') }}</app-type>
  <var-button block type="primary">{{ t('blockButton') }}</var-button>

  <app-type>{{ t('customColor') }}</app-type>
  <var-space :size="['2.666vmin', '2.666vmin']">
    <var-button color="#66bb6a" text-color="#fff">{{ t('backgroundTextColor') }}</var-button>
    <var-button color="linear-gradient(to bottom right, #6750A4, #D0BCFF)" text-color="#fff">
      {{ t('linearGradientColor') }}
    </var-button>
  </var-space>

  <app-type>{{ t('roundButton') }}</app-type>
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

  <app-type>{{ t('event') }}</app-type>
  <var-space :size="['2.666vmin', '2.666vmin']">
    <var-button type="success" @click="handleClick">{{ t('click') }}</var-button>
    <var-button type="success" @touchstart="handleTouchstart">{{ t('touchstart') }}</var-button>
    <var-button type="success" @click="handleAutoLoadingClick" auto-loading>{{ t('autoLoading') }}</var-button>
  </var-space>

  <app-type>{{ t('themeColorButtonGroup') }}</app-type>
  <var-space :size="['2.666vmin', '2.666vmin']">
    <var-button-group type="default">
      <var-button>{{ t('button') }}</var-button>
      <var-button>{{ t('button') }}</var-button>
      <var-button>{{ t('button') }}</var-button>
    </var-button-group>

    <var-button-group type="primary">
      <var-button type="primary">{{ t('button') }}</var-button>
      <var-button type="primary">{{ t('button') }}</var-button>
      <var-button type="primary">{{ t('button') }}</var-button>
    </var-button-group>
  </var-space>

  <app-type>{{ t('buttonGroupSize') }}</app-type>
  <var-space :size="['2.666vmin', '2.666vmin']">
    <var-button-group size="normal" type="primary">
      <var-button>{{ t('button') }}</var-button>
      <var-button>{{ t('button') }}</var-button>
      <var-button>{{ t('button') }}</var-button>
    </var-button-group>

    <var-button-group size="large" type="primary">
      <var-button>{{ t('button') }}</var-button>
      <var-button>{{ t('button') }}</var-button>
      <var-button>{{ t('button') }}</var-button>
    </var-button-group>
  </var-space>

  <app-type>{{ t('splitButton') }}</app-type>
  <var-menu placement="bottom" same-width :offset-y="6">
    <var-button-group type="primary">
      <var-button @click.stop>{{ t('splitButton') }}</var-button>
      <var-button style="padding: 0 6px">
        <var-icon name="menu-down" :size="24" />
      </var-button>
    </var-button-group>

    <template #menu>
      <var-cell ripple>{{ t('splitButton') }}</var-cell>
      <var-cell ripple>{{ t('splitButton') }}</var-cell>
      <var-cell ripple>{{ t('splitButton') }}</var-cell>
    </template>
  </var-menu>

  <app-type>{{ t('modeButtonGroup') }}</app-type>
  <var-space direction="column" :size="['3.666vmin', '3.666vmin']">
    <var-button-group type="primary" mode="text">
      <var-button>{{ t('button') }}</var-button>
      <var-button>{{ t('button') }}</var-button>
      <var-button>{{ t('button') }}</var-button>
    </var-button-group>

    <var-button-group type="primary" mode="outline">
      <var-button>{{ t('button') }}</var-button>
      <var-button>{{ t('button') }}</var-button>
      <var-button>{{ t('button') }}</var-button>
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
      <var-button>{{ t('button') }}</var-button>
      <var-button>{{ t('button') }}</var-button>
      <var-button>{{ t('button') }}</var-button>
    </var-button-group>
  </var-space>

  <app-type>{{ t('customButtonGroupColor') }}</app-type>
  <var-button-group type="primary" color="linear-gradient(to bottom right, #6750A4, #D0BCFF)">
    <var-button>{{ t('button') }}</var-button>
    <var-button>{{ t('button') }}</var-button>
    <var-button>{{ t('button') }}</var-button>
  </var-button-group>

  <app-type>{{ t('verticalButtonGroup') }}</app-type>
  <var-space :size="['5vmin', '5vmin']">
    <var-button-group type="primary" mode="text" vertical>
      <var-button>{{ t('button') }}</var-button>
      <var-button>{{ t('button') }}</var-button>
      <var-button>{{ t('button') }}</var-button>
    </var-button-group>

    <var-button-group type="primary" mode="outline" vertical>
      <var-button>{{ t('button') }}</var-button>
      <var-button>{{ t('button') }}</var-button>
      <var-button>{{ t('button') }}</var-button>
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
      <var-button>{{ t('button') }}</var-button>
      <var-button>{{ t('button') }}</var-button>
      <var-button>{{ t('button') }}</var-button>
    </var-button-group>
  </var-space>
</template>
