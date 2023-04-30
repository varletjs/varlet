<script setup>
import VarEllipsis from '../index'
import VarIcon from '../../icon'
import { watchLang, AppType } from '@varlet/cli/client'
import { use, pack } from './locale'

watchLang(use)
</script>

<template>
  <app-type>{{ pack.line }}</app-type>
  <var-ellipsis style="max-width: 50vw">{{ pack.text }}</var-ellipsis>

  <app-type>{{ pack.multipleLine }}</app-type>
  <var-ellipsis style="max-width: 50vw" :line-clamp="3">{{ pack.text }}</var-ellipsis>

  <app-type>{{ pack.expand }}</app-type>
  <var-ellipsis style="max-width: 50vw" :line-clamp="3" expand-trigger="click" :tooltip="false">{{
    pack.text
  }}</var-ellipsis>

  <app-type>{{ pack.tooltip }}</app-type>
  <var-ellipsis style="max-width: 50vw" :tooltip="{ type: 'primary', sameWidth: false }">
    {{ pack.text }}

    <template #tooltip-content>
      <var-icon name="github" />
    </template>
  </var-ellipsis>
</template>
