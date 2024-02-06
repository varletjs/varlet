<script setup>
import { t, use } from './locale'
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { ref } from 'vue'

const active = ref(0)

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-app-bar :title="t('title')" />

  <app-type>{{ t('round') }}</app-type>
  <var-app-bar :title="t('round')" title-position="center" round />

  <app-type>{{ t('customStyle') }}</app-type>
  <var-app-bar
    :title="t('title')"
    title-position="center"
    color="linear-gradient(90deg, rgba(72,176,221,1) 0%, rgba(0,208,161,1) 100%)"
  />

  <app-type>{{ t('addTitleSlot') }}</app-type>
  <var-app-bar>{{ t('addTitleSlot') }}</var-app-bar>

  <app-type>{{ t('addLeftAndRightSlot') }}</app-type>
  <var-app-bar :title="t('title')">
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
          <var-cell ripple>{{ t('option') }}</var-cell>
          <var-cell ripple>{{ t('option') }}</var-cell>
          <var-cell ripple>{{ t('option') }}</var-cell>
        </template>
      </var-menu>
    </template>
  </var-app-bar>

  <app-type>{{ t('custom') }}</app-type>
  <var-app-bar
    round
    image="https://varlet.gitee.io/varlet-ui/tree.jpeg"
    image-linear-gradient="to right top, rgba(29, 68, 147, 0.5) 0%, rgba(74, 198, 170, 0.9) 100%"
  >
    {{ t('title') }}
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
        style="margin-top: 20vmin"
        color="transparent"
        active-color="#fff"
        inactive-color="#ddd"
        v-model:active="active"
      >
        <var-tab>{{ t('option') }}</var-tab>
        <var-tab>{{ t('option') }}</var-tab>
        <var-tab>{{ t('option') }}</var-tab>
      </var-tabs>
    </template>
  </var-app-bar>
</template>
