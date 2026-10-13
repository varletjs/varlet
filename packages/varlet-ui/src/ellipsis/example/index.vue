<script setup>
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { ref } from 'vue'
import { t, use } from './locale'

const expand = ref(false)
const width = ref(100)

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

  <app-type>{{ t('expandOnOverflow') }}</app-type>
  <var-ellipsis expand-trigger="click" expand-on-overflow style="max-width: 50vmin" :tooltip="false">{{
    t('text')
  }}</var-ellipsis>

  <app-type>{{ t('overflowOnResize') }}</app-type>
  <var-space direction="column" size="large">
    <var-ellipsis expand-trigger="click" expand-on-overflow :style="{ maxWidth: `${width}%` }" :tooltip="false">
      {{ t('text') }}
    </var-ellipsis>
    <var-slider v-model="width" :min="30" :max="100" />
  </var-space>

  <app-type>{{ t('tooltip') }}</app-type>
  <var-ellipsis style="max-width: 50vmin" :tooltip="{ type: 'primary', sameWidth: false }">
    {{ t('text') }}

    <template #tooltip-content>
      <var-icon name="github" />
    </template>
  </var-ellipsis>
</template>
