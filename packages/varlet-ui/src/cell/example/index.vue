<script setup>
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import VarIcon from '../../icon'
import VarCell from '..'
import dark from '../../themes/dark'
import { pack, use } from './locale'

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-cell> {{ pack.content }} </var-cell>
  <var-cell> {{ pack.content }} </var-cell>

  <app-type>{{ pack.showIcon }}</app-type>
  <var-cell icon="fire" :title="pack.content">
    <template #extra>
      <var-icon name="information" />
    </template>
  </var-cell>
  <var-cell icon="fire" :title="pack.content">
    <template #extra>
      <var-icon name="information" />
    </template>
  </var-cell>

  <app-type>{{ pack.showDesc }}</app-type>
  <var-cell icon="fire" :title="pack.content" :description="pack.description">
    <template #extra>
      <var-icon name="information" />
    </template>
  </var-cell>
  <var-cell :title="pack.content" :description="pack.description" />

  <app-type>{{ pack.showBorder }}</app-type>
  <var-cell border> {{ pack.content }} </var-cell>
  <var-cell border> {{ pack.content }} </var-cell>
</template>
