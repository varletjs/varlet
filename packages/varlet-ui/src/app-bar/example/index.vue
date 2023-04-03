<script setup>
import dark from '../../themes/dark'
import VarAppBar from '..'
import VarIcon from '../../icon'
import VarMenu from '../../menu'
import VarButton from '../../button'
import VarCell from '../../cell'
import VarTabs from '../../tabs'
import VarTab from '../../tab'
import { pack, use } from './locale'
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import { ref } from 'vue'

const active = ref(0)

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
      <var-menu>
        <var-button round text color="transparent" text-color="#ffffff">
          <var-icon name="menu" :size="24" />
        </var-button>

        <template #menu>
          <var-cell ripple>{{ pack.option }}</var-cell>
          <var-cell ripple>{{ pack.option }}</var-cell>
          <var-cell ripple>{{ pack.option }}</var-cell>
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
    color="linear-gradient(90deg, rgba(72,176,221,1) 0%, rgba(0,208,161,1) 100%)"
  />

  <app-type>{{ pack.custom }}</app-type>
  <var-app-bar
    round
    image="https://varlet.gitee.io/varlet-ui/tree.jpeg"
    image-linear-gradient="to right top, rgba(29, 68, 147, 0.5) 0%, rgba(74, 198, 170, 0.9) 100%"
  >
    {{ pack.title }}
    <template #left>
      <var-button round text color="transparent" text-color="#fff">
        <var-icon name="menu" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-button round text color="transparent" text-color="#fff">
        <var-icon name="map-marker-radius" :size="24" />
      </var-button>
      <var-button round text color="transparent" text-color="#fff">
        <var-icon name="star" :size="24" />
      </var-button>
      <var-button round text color="transparent" text-color="#fff">
        <var-icon name="heart" :size="24" />
      </var-button>
    </template>

    <template #content>
      <var-tabs
        style="margin-top: 20vw"
        color="transparent"
        active-color="#fff"
        inactive-color="#ddd"
        v-model:active="active"
      >
        <var-tab>{{ pack.option }}</var-tab>
        <var-tab>{{ pack.option }}</var-tab>
        <var-tab>{{ pack.option }}</var-tab>
      </var-tabs>
    </template>
  </var-app-bar>
</template>
