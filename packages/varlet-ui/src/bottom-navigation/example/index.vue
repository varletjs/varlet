<script setup>
import VarBottomNavigation from '..'
import VarBottomNavigationItem from '../../bottom-navigation-item'
import VarIcon from '../../icon'
import Snackbar from '../../snackbar'
import dark from '../../themes/dark'
import { ref } from 'vue'
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import { use, pack } from './locale'

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

function handleChange(active) {
  Snackbar.info(`changed to ${active}`)
}

function handleClick(active) {
  Snackbar.success(`clicked ${active}`)
}

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-bottom-navigation v-model:active="basicUsage">
    <var-bottom-navigation-item :label="pack.label" icon="home" />
    <var-bottom-navigation-item :label="pack.label" icon="magnify" />
    <var-bottom-navigation-item :label="pack.label" icon="heart" />
    <var-bottom-navigation-item :label="pack.label" icon="account-circle" />
  </var-bottom-navigation>

  <app-type>{{ pack.matchByName }}</app-type>
  <var-bottom-navigation v-model:active="matchByName">
    <var-bottom-navigation-item name="home" :label="pack.label" icon="home" />
    <var-bottom-navigation-item name="search" :label="pack.label" icon="magnify" />
    <var-bottom-navigation-item name="heart" :label="pack.label" icon="heart" />
    <var-bottom-navigation-item name="user" :label="pack.label" icon="account-circle" />
  </var-bottom-navigation>

  <app-type>{{ pack.showBadge }}</app-type>
  <var-bottom-navigation v-model:active="showBadge">
    <var-bottom-navigation-item :label="pack.label" icon="home" />
    <var-bottom-navigation-item :label="pack.label" icon="magnify" badge />
    <var-bottom-navigation-item :label="pack.label" icon="heart" :badge="badgeProps" />
    <var-bottom-navigation-item :label="pack.label" icon="account-circle" />
  </var-bottom-navigation>

  <app-type>{{ pack.customColor }}</app-type>
  <var-bottom-navigation active-color="#ba68c8" v-model:active="customColor">
    <var-bottom-navigation-item :label="pack.label" icon="home" />
    <var-bottom-navigation-item :label="pack.label" icon="magnify" />
    <var-bottom-navigation-item :label="pack.label" icon="heart" />
    <var-bottom-navigation-item :label="pack.label" icon="account-circle" />
  </var-bottom-navigation>

  <app-type>{{ pack.changeEvent }}</app-type>
  <var-bottom-navigation v-model:active="changeEvent" @change="handleChange">
    <var-bottom-navigation-item :label="pack.label" icon="home" />
    <var-bottom-navigation-item :label="pack.label" icon="magnify" />
    <var-bottom-navigation-item :label="pack.label" icon="heart" />
    <var-bottom-navigation-item :label="pack.label" icon="account-circle" />
  </var-bottom-navigation>

  <app-type>{{ pack.clickEvent }}</app-type>
  <var-bottom-navigation v-model:active="clickEvent">
    <var-bottom-navigation-item @click="handleClick" :label="pack.label" icon="home" />
    <var-bottom-navigation-item @click="handleClick" :label="pack.label" icon="magnify" />
    <var-bottom-navigation-item @click="handleClick" :label="pack.label" icon="heart" />
    <var-bottom-navigation-item @click="handleClick" :label="pack.label" icon="account-circle" />
  </var-bottom-navigation>

  <app-type>{{ pack.fab }}</app-type>
  <var-bottom-navigation v-model:active="fab" @fab-click="isEven = !isEven" style="margin-top: 10px">
    <template #fab>
      <var-icon name="heart" />
    </template>
    <var-bottom-navigation-item :label="pack.label" icon="home" />
    <var-bottom-navigation-item :label="pack.label" icon="magnify" />
    <var-bottom-navigation-item :label="pack.label" icon="heart" />
    <var-bottom-navigation-item :label="pack.label" icon="bell" />
    <var-bottom-navigation-item v-if="!isEven" :label="pack.label" icon="account-circle" />
  </var-bottom-navigation>
</template>
