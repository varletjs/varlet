<script setup>
import { Snackbar } from '@varlet/ui'
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { ref } from 'vue'
import { t, use } from './locale/index'

const show = ref(false)
const trigger = ref('click')
const placementValue = ref('cover-top-start')
const placementOptions = ref([
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'right',
  'right-start',
  'right-end',
  'left',
  'left-start',
  'left-end',
  'cover-top',
  'cover-top-start',
  'cover-top-end',
  'cover-bottom',
  'cover-bottom-start',
  'cover-bottom-end',
  'cover-left',
  'cover-right',
])

function closeMenu() {
  show.value = false
}

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-menu>
    <var-button type="primary">{{ t('basicUsage') }}</var-button>
    <template #menu>
      <var-cell>{{ t('menuOption') }}</var-cell>
      <var-cell>{{ t('menuOption') }}</var-cell>
      <var-cell>{{ t('menuOption') }}</var-cell>
    </template>
  </var-menu>

  <app-type>{{ t('placement') }}</app-type>
  <var-select :hint="false" v-model="placementValue">
    <var-option v-for="(item, index) in placementOptions" :key="index" :label="item" />
  </var-select>
  <div class="placement-container">
    <var-menu :placement="placementValue">
      <var-button type="primary">
        <var-icon name="star" />
      </var-button>
      <template #menu>
        <var-cell>{{ t('menuOption') }}</var-cell>
        <var-cell>{{ t('menuOption') }}</var-cell>
        <var-cell>{{ t('menuOption') }}</var-cell>
      </template>
    </var-menu>
  </div>

  <app-type>{{ t('offset') }}</app-type>
  <var-menu offset-x="36px" offset-y="18px">
    <var-button type="primary">{{ t('offset') }}</var-button>
    <template #menu>
      <var-cell>{{ t('menuOption') }}</var-cell>
      <var-cell>{{ t('menuOption') }}</var-cell>
      <var-cell>{{ t('menuOption') }}</var-cell>
    </template>
  </var-menu>

  <app-type>{{ t('sameWidth') }}</app-type>
  <var-menu same-width>
    <var-button type="primary">{{ t('sameWidth') }}</var-button>

    <template #menu>
      <var-cell>{{ t('menuOption') }}</var-cell>
      <var-cell>{{ t('menuOption') }}</var-cell>
      <var-cell>{{ t('menuOption') }}</var-cell>
    </template>
  </var-menu>

  <app-type>{{ t('trigger') }}</app-type>
  <var-select :hint="false" v-model="trigger">
    <var-option label="click" />
    <var-option label="hover" />
  </var-select>
  <var-menu style="margin-top: 15px" :trigger="trigger">
    <var-button type="primary">{{ t('trigger') }}</var-button>

    <template #menu>
      <var-cell>{{ t('menuOption') }}</var-cell>
      <var-cell>{{ t('menuOption') }}</var-cell>
      <var-cell>{{ t('menuOption') }}</var-cell>
    </template>
  </var-menu>

  <app-type>{{ t('events') }}</app-type>
  <var-menu
    @open="() => Snackbar.info('open')"
    @opened="() => Snackbar.success('opened')"
    @close="() => Snackbar.warning('close')"
    @closed="() => Snackbar.error('closed')"
  >
    <var-button type="primary">{{ t('events') }}</var-button>

    <template #menu>
      <var-cell>{{ t('menuOption') }}</var-cell>
      <var-cell>{{ t('menuOption') }}</var-cell>
      <var-cell>{{ t('menuOption') }}</var-cell>
    </template>
  </var-menu>

  <app-type>{{ t('disabled') }}</app-type>
  <var-space justify="space-between">
    <var-menu disabled>
      <var-button type="primary" disabled>{{ t('disabled') }}</var-button>

      <template #menu>
        <var-cell>{{ t('menuOption') }}</var-cell>
        <var-cell>{{ t('menuOption') }}</var-cell>
        <var-cell>{{ t('menuOption') }}</var-cell>
      </template>
    </var-menu>
  </var-space>

  <app-type>{{ t('twoWayBinding') }}</app-type>
  <var-menu v-model:show="show">
    <var-button type="primary">{{ t('twoWayBinding') }}</var-button>

    <template #menu>
      <var-cell @click="closeMenu">{{ t('menuOption') }}</var-cell>
      <var-cell @click="closeMenu">{{ t('menuOption') }}</var-cell>
      <var-cell @click="closeMenu">{{ t('menuOption') }}</var-cell>
    </template>
  </var-menu>

  <div style="margin-bottom: 100px"></div>
</template>

<style scoped lang="less">
.placement-container {
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
