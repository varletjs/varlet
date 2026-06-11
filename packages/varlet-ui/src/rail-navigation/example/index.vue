<script setup>
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { Snackbar } from '@varlet/ui'
import { ref } from 'vue'
import { t, use } from './locale'

const basicUsageActive = ref(0)
const showLabelActive = ref(0)
const showLabel = ref(false)
const rippleActive = ref(0)
const matchByNameActive = ref('home')
const disabledActive = ref(0)
const badgeActive = ref(0)
const eventHandlingActive = ref(0)
const slotsActive = ref(0)
const customNavigationActive = ref('tooltip')

watchLang(use)
onThemeChange()

function handleChange(active) {
  Snackbar.info(`changed to ${active}`)
}

function handleClick(active) {
  Snackbar.success(`clicked ${active}`)
}

function handleMouseenter(active) {
  Snackbar.info(`mouseenter ${active}`)
}

function handleMouseleave(active) {
  Snackbar.info(`mouseleave ${active}`)
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

  <app-type>{{ t('ripple') }}</app-type>
  <var-rail-navigation v-model:active="rippleActive" ripple>
    <var-rail-navigation-item :label="t('home')" icon="home" />
    <var-rail-navigation-item :label="t('search')" icon="magnify" />
    <var-rail-navigation-item :label="t('favorite')" icon="heart" />
    <var-rail-navigation-item :label="t('account')" icon="account-circle" />
  </var-rail-navigation>

  <app-type>{{ t('showLabel') }}</app-type>
  <div class="rail-navigation-example__show-label">
    <var-switch v-model="showLabel" variant />
    <var-rail-navigation v-model:active="showLabelActive" :show-label="showLabel">
      <var-tooltip :content="t('home')" placement="right" :disabled="showLabel">
        <var-rail-navigation-item :label="t('home')" icon="home" />
      </var-tooltip>
      <var-tooltip :content="t('search')" placement="right" :disabled="showLabel">
        <var-rail-navigation-item :label="t('search')" icon="magnify" />
      </var-tooltip>
      <var-tooltip :content="t('favorite')" placement="right" :disabled="showLabel">
        <var-rail-navigation-item :label="t('favorite')" icon="heart" />
      </var-tooltip>
      <var-tooltip :content="t('account')" placement="right" :disabled="showLabel">
        <var-rail-navigation-item :label="t('account')" icon="account-circle" />
      </var-tooltip>
    </var-rail-navigation>
  </div>

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

  <app-type>{{ t('eventHandling') }}</app-type>
  <var-rail-navigation v-model:active="eventHandlingActive" @change="handleChange">
    <var-rail-navigation-item
      :label="t('home')"
      icon="home"
      @click="handleClick"
      @mouseenter="handleMouseenter"
      @mouseleave="handleMouseleave"
    />
    <var-rail-navigation-item
      :label="t('search')"
      icon="magnify"
      @click="handleClick"
      @mouseenter="handleMouseenter"
      @mouseleave="handleMouseleave"
    />
    <var-rail-navigation-item
      :label="t('favorite')"
      icon="heart"
      @click="handleClick"
      @mouseenter="handleMouseenter"
      @mouseleave="handleMouseleave"
    />
    <var-rail-navigation-item
      :label="t('account')"
      icon="account-circle"
      @click="handleClick"
      @mouseenter="handleMouseenter"
      @mouseleave="handleMouseleave"
    />
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
      <var-button outline text fab round>
        <var-icon name="cog" :size="24" />
      </var-button>
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

.rail-navigation-example__show-label {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}

.rail-navigation-example__slots {
  min-height: 400px;
}
</style>
