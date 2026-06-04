<script setup>
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { Snackbar } from '@varlet/ui'
import { ref } from 'vue'
import { t, use } from './locale'

const basicUsageActive = ref(0)
const matchByNameActive = ref('home')
const disabledActive = ref(0)
const badgeActive = ref(0)
const changeEventActive = ref(0)
const clickEventActive = ref(0)
const slotsActive = ref(0)
const profileAction = ref()
const customNavigationActive = ref('tooltip')

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
  <var-rail-navigation v-model:active="basicUsageActive">
    <var-rail-navigation-item :label="t('home')" icon="home" />
    <var-rail-navigation-item :label="t('search')" icon="magnify" />
    <var-rail-navigation-item :label="t('favorite')" icon="heart" />
    <var-rail-navigation-item :label="t('account')" icon="account-circle" />
  </var-rail-navigation>

  <app-type>{{ t('matchByName') }}</app-type>
  <var-rail-navigation v-model:active="matchByNameActive">
    <var-rail-navigation-item name="home" :label="t('home')" icon="home" />
    <var-rail-navigation-item name="search" :label="t('search')" icon="magnify" />
    <var-rail-navigation-item name="favorite" :label="t('favorite')" icon="heart" />
    <var-rail-navigation-item name="account" :label="t('account')" icon="account-circle" />
  </var-rail-navigation>

  <app-type>{{ t('disabled') }}</app-type>
  <var-rail-navigation v-model:active="disabledActive">
    <var-rail-navigation-item :label="t('home')" icon="home" />
    <var-rail-navigation-item :label="t('search')" icon="magnify" disabled />
    <var-rail-navigation-item :label="t('favorite')" icon="heart" />
    <var-rail-navigation-item :label="t('account')" icon="account-circle" />
  </var-rail-navigation>

  <app-type>{{ t('badge') }}</app-type>
  <var-rail-navigation v-model:active="badgeActive">
    <var-rail-navigation-item :label="t('home')" icon="home" />
    <var-rail-navigation-item :label="t('search')" icon="magnify" badge />
    <var-rail-navigation-item :label="t('favorite')" icon="heart" :badge="{ type: 'primary', value: 6 }" />
    <var-rail-navigation-item :label="t('account')" icon="account-circle" />
  </var-rail-navigation>

  <app-type>{{ t('changeEvent') }}</app-type>
  <var-rail-navigation v-model:active="changeEventActive" @change="handleChange">
    <var-rail-navigation-item :label="t('home')" icon="home" />
    <var-rail-navigation-item :label="t('search')" icon="magnify" />
    <var-rail-navigation-item :label="t('favorite')" icon="heart" />
    <var-rail-navigation-item :label="t('account')" icon="account-circle" />
  </var-rail-navigation>

  <app-type>{{ t('clickEvent') }}</app-type>
  <var-rail-navigation v-model:active="clickEventActive">
    <var-rail-navigation-item :label="t('home')" icon="home" @click="handleClick" />
    <var-rail-navigation-item :label="t('search')" icon="magnify" @click="handleClick" />
    <var-rail-navigation-item :label="t('favorite')" icon="heart" @click="handleClick" />
    <var-rail-navigation-item :label="t('account')" icon="account-circle" @click="handleClick" />
  </var-rail-navigation>

  <app-type>{{ t('slots') }}</app-type>
  <var-rail-navigation v-model:active="slotsActive" class="rail-navigation-example__slots">
    <template #start>
      <var-button type="primary" fab tonal>
        <var-icon name="magnify" :size="24" />
      </var-button>
    </template>

    <var-rail-navigation-item :label="t('home')" icon="home" />
    <var-rail-navigation-item :label="t('favorite')" icon="heart" />
    <var-rail-navigation-item :label="t('account')" icon="account-circle" />

    <template #end>
      <var-menu-select v-model="profileAction" placement="right" :offset-x="12">
        <span v-ripple class="rail-navigation-example__profile">
          <var-avatar class="rail-navigation-example__avatar" src="cat.jpg" :size="32" />
        </span>

        <template #options>
          <var-menu-option :label="t('profile')" />
          <var-menu-option :label="t('settings')" />
          <var-menu-option :label="t('logout')" />
        </template>
      </var-menu-select>
    </template>
  </var-rail-navigation>

  <app-type>{{ t('customNavigation') }}</app-type>
  <var-rail-navigation v-model:active="customNavigationActive">
    <var-tooltip :content="t('tooltip')" placement="right">
      <var-rail-navigation-item name="tooltip" :label="t('tooltip')" icon="information" />
    </var-tooltip>

    <router-link class="rail-navigation-example__link" to="/button">
      <var-rail-navigation-item name="router-link" :label="t('routerLink')" icon="account-circle" />
    </router-link>

    <a class="rail-navigation-example__link" href="https://github.com/varletjs/varlet" target="_blank" rel="noreferrer">
      <var-rail-navigation-item name="anchor" :label="t('anchor')" icon="github" />
    </a>
  </var-rail-navigation>
</template>

<style>
.rail-navigation-example__link {
  display: block;
  width: 100%;
  color: inherit;
  text-decoration: none;
}

.rail-navigation-example__slots {
  min-height: 360px;
}

.rail-navigation-example__avatar {
  flex: 0 0 auto;
}

.rail-navigation-example__profile {
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  border-radius: 50%;
  overflow: hidden;
}
</style>
