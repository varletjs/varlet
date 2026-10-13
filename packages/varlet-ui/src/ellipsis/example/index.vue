<script setup>
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { ref } from 'vue'
import { t, use } from './locale'

const expand = ref(false)
const narrow = ref(true)

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('line') }}</app-type>
  <var-ellipsis style="max-width: 50vmin">{{ t('text') }}</var-ellipsis>

  <app-type>{{ t('multipleLine') }}</app-type>
  <var-ellipsis style="max-width: 50vmin" :line-clamp="3">{{ t('text') }}</var-ellipsis>

  <app-type>{{ t('twoWayBinding') }}</app-type>
  <var-space direction="column" size="large">
    <var-button type="primary" @click="expand = !expand">{{ t('toggle') }}</var-button>
    <var-ellipsis v-model:expand="expand" style="max-width: 50vmin">{{ t('text') }}</var-ellipsis>
  </var-space>

  <app-type>{{ t('expand') }}</app-type>
  <var-ellipsis style="max-width: 50vmin" :line-clamp="3" expand-trigger="click" :tooltip="false">{{
    t('text')
  }}</var-ellipsis>

  <app-type>{{ t('overflowDetection') }}</app-type>
  <var-button type="primary" style="margin-bottom: 12px" @click="narrow = !narrow">{{
    t('toggleTextContainerSize')
  }}</var-button>
  <div style="color: var(--site-config-color-sub-text); font-size: 12px">{{ t('line') }}</div>
  <var-ellipsis
    expand-trigger="click"
    expandable-on-overflow
    tooltip-on-overflow
    :style="{ maxWidth: narrow ? '50%' : '100%' }"
  >
    {{ t('overflowSingleLineText') }}
  </var-ellipsis>
  <div style="margin-top: 12px; color: var(--site-config-color-sub-text); font-size: 12px">{{ t('multipleLine') }}</div>
  <var-ellipsis
    expand-trigger="click"
    expandable-on-overflow
    tooltip-on-overflow
    :line-clamp="2"
    :style="{ maxWidth: narrow ? '50%' : '100%' }"
  >
    {{ t('overflowMultipleLineText') }}
  </var-ellipsis>

  <app-type>{{ t('tooltip') }}</app-type>
  <var-ellipsis style="max-width: 50vmin" :tooltip="{ type: 'primary', sameWidth: false }">
    {{ t('text') }}

    <template #tooltip-content>
      <var-icon name="github" />
    </template>
  </var-ellipsis>
</template>
