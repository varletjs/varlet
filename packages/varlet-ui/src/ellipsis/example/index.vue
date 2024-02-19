<script setup>
import { watchLang, AppType, onThemeChange } from '@varlet/cli/client'
import { use, t } from './locale'
import { ref } from 'vue'

const expand = ref(false)

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
    <var-ellipsis style="max-width: 50vmin" v-model:expand="expand">{{ t('text') }}</var-ellipsis>
  </var-space>

  <app-type>{{ t('expand') }}</app-type>
  <var-ellipsis style="max-width: 50vmin" :line-clamp="3" expand-trigger="click" :tooltip="false">{{
    t('text')
  }}</var-ellipsis>

  <app-type>{{ t('tooltip') }}</app-type>
  <var-ellipsis style="max-width: 50vmin" :tooltip="{ type: 'primary', sameWidth: false }">
    {{ t('text') }}

    <template #tooltip-content>
      <var-icon name="github" />
    </template>
  </var-ellipsis>
</template>
