<script setup>
import { watchLang, AppType } from '@varlet/cli/client'
import { use, pack } from './locale'
import { ref } from 'vue'

watchLang(use)

const expand = ref(false)
</script>

<template>
  <app-type>{{ pack.line }}</app-type>
  <var-ellipsis style="max-width: 50vmin">{{ pack.text }}</var-ellipsis>

  <app-type>{{ pack.multipleLine }}</app-type>
  <var-ellipsis style="max-width: 50vmin" :line-clamp="3">{{ pack.text }}</var-ellipsis>

  <app-type>{{ pack.twoWayBinding }}</app-type>
  <var-space direction="column" size="large">
    <var-button type="primary" @click="expand = !expand">{{ pack.toggle }}</var-button>
    <var-ellipsis style="max-width: 50vmin" v-model:expand="expand">{{ pack.text }}</var-ellipsis>
  </var-space>

  <app-type>{{ pack.expand }}</app-type>
  <var-ellipsis style="max-width: 50vmin" :line-clamp="3" expand-trigger="click" :tooltip="false">{{
    pack.text
  }}</var-ellipsis>

  <app-type>{{ pack.tooltip }}</app-type>
  <var-ellipsis style="max-width: 50vmin" :tooltip="{ type: 'primary', sameWidth: false }">
    {{ pack.text }}

    <template #tooltip-content>
      <var-icon name="github" />
    </template>
  </var-ellipsis>
</template>
