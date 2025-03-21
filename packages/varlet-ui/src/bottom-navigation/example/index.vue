<script setup>
import { ref } from 'vue'
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { Snackbar } from '@varlet/ui'
import { t, use } from './locale'

const basicUsage = ref(0)
const matchByName = ref('home')
const showBadge = ref(0)
const badgeProps = {
  type: 'primary',
  value: '66',
}
const customColor = ref(0)
const changeEvent = ref(0)
const clickEvent = ref(0)
const fab = ref(0)
const isEven = ref(true)
const variant = ref(0)

watchLang(use)
onThemeChange()

function handleChange(active) {
  Snackbar.info(`changed to ${active}`)
}

function handleClick(active) {
  Snackbar.success(`clicked ${active}`)
}
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-bottom-navigation v-model:active="basicUsage">
    <var-bottom-navigation-item :label="t('label')" icon="home" />
    <var-bottom-navigation-item :label="t('label')" icon="magnify" />
    <var-bottom-navigation-item :label="t('label')" icon="heart" />
    <var-bottom-navigation-item :label="t('label')" icon="account-circle" />
  </var-bottom-navigation>

  <app-type>{{ t('matchByName') }}</app-type>
  <var-bottom-navigation v-model:active="matchByName">
    <var-bottom-navigation-item name="home" :label="t('label')" icon="home" />
    <var-bottom-navigation-item name="search" :label="t('label')" icon="magnify" />
    <var-bottom-navigation-item name="heart" :label="t('label')" icon="heart" />
    <var-bottom-navigation-item name="user" :label="t('label')" icon="account-circle" />
  </var-bottom-navigation>

  <app-type>{{ t('showBadge') }}</app-type>
  <var-bottom-navigation v-model:active="showBadge">
    <var-bottom-navigation-item :label="t('label')" icon="home" />
    <var-bottom-navigation-item :label="t('label')" icon="magnify" badge />
    <var-bottom-navigation-item :label="t('label')" icon="heart" :badge="badgeProps" />
    <var-bottom-navigation-item :label="t('label')" icon="account-circle" />
  </var-bottom-navigation>

  <app-type>{{ t('customColor') }}</app-type>
  <var-bottom-navigation v-model:active="customColor" active-color="var(--color-warning)">
    <var-bottom-navigation-item :label="t('label')" icon="home" />
    <var-bottom-navigation-item :label="t('label')" icon="magnify" />
    <var-bottom-navigation-item :label="t('label')" icon="heart" />
    <var-bottom-navigation-item :label="t('label')" icon="account-circle" />
  </var-bottom-navigation>

  <app-type>{{ t('changeEvent') }}</app-type>
  <var-bottom-navigation v-model:active="changeEvent" @change="handleChange">
    <var-bottom-navigation-item :label="t('label')" icon="home" />
    <var-bottom-navigation-item :label="t('label')" icon="magnify" />
    <var-bottom-navigation-item :label="t('label')" icon="heart" />
    <var-bottom-navigation-item :label="t('label')" icon="account-circle" />
  </var-bottom-navigation>

  <app-type>{{ t('clickEvent') }}</app-type>
  <var-bottom-navigation v-model:active="clickEvent">
    <var-bottom-navigation-item :label="t('label')" icon="home" @click="handleClick" />
    <var-bottom-navigation-item :label="t('label')" icon="magnify" @click="handleClick" />
    <var-bottom-navigation-item :label="t('label')" icon="heart" @click="handleClick" />
    <var-bottom-navigation-item :label="t('label')" icon="account-circle" @click="handleClick" />
  </var-bottom-navigation>

  <app-type>{{ t('fab') }}</app-type>
  <var-bottom-navigation v-model:active="fab" style="margin-top: 10px" @fab-click="isEven = !isEven">
    <template #fab>
      <var-icon name="heart" />
    </template>
    <var-bottom-navigation-item :label="t('label')" icon="home" />
    <var-bottom-navigation-item :label="t('label')" icon="magnify" />
    <var-bottom-navigation-item :label="t('label')" icon="heart" />
    <var-bottom-navigation-item :label="t('label')" icon="bell" />
    <var-bottom-navigation-item v-if="!isEven" :label="t('label')" icon="account-circle" />
  </var-bottom-navigation>

  <app-type>{{ t('variant') }}</app-type>
  <var-bottom-navigation v-model:active="variant" variant>
    <var-bottom-navigation-item :label="t('label')" icon="home" />
    <var-bottom-navigation-item :label="t('label')" icon="magnify" />
    <var-bottom-navigation-item :label="t('label')" icon="heart" />
    <var-bottom-navigation-item :label="t('label')" icon="account-circle" />
  </var-bottom-navigation>
</template>
