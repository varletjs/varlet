<script setup>
import VarAppBar from '..'
import VarIcon from '../../icon'
import vRipple from '../../ripple'
import VarMenu from '../../menu'
import VarButton from '../../button'
import VarCell from '../../cell'
import dark from '../../themes/dark'
import { pack, use } from './locale'
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-app-bar :title="pack.title" />

  <app-type>{{ pack.addSlotsAtTitle }}</app-type>
  <var-app-bar>{{ pack.addSlotsAtTitle }}</var-app-bar>

  <app-type>{{ pack.addLeftAndRightSlot }}</app-type>
  <var-app-bar :title="pack.title">
    <template #left>
      <var-button round text color="transparent" text-color="#ffffff">
        <var-icon name="chevron-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-menu placement="bottom-start" :offset-y="12">
        <var-button round text color="transparent" text-color="#ffffff">
          <var-icon name="menu" :size="24" />
        </var-button>

        <template #menu>
          <var-cell v-ripple>{{ pack.option }}</var-cell>
          <var-cell v-ripple>{{ pack.option }}</var-cell>
          <var-cell v-ripple>{{ pack.option }}</var-cell>
        </template>
      </var-menu>
    </template>
  </var-app-bar>

  <app-type>{{ pack.round }}</app-type>
  <var-app-bar :title="pack.round" title-position="center" round />

  <app-type>{{ pack.customStyle }}</app-type>
  <var-app-bar
    :title="pack.title"
    title-position="center"
    color="linear-gradient(var(--color-primary), var(--color-info))"
  />
</template>
