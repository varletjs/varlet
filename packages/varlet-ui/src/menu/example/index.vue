<script setup>
import VarMenu from '..'
import VarSpace from '../../space'
import VarButton from '../../button'
import VarSelect from '../../select'
import VarOption from '../../option'
import VarCell from '../../cell'
import Snackbar from '../../snackbar'
import dark from '../../themes/dark'
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import { ref } from 'vue'
import { pack, use } from './locale/index'

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

const closeMenu = () => {
  show.value = false
}

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-menu>
    <var-button type="primary">{{ pack.basicUsage }}</var-button>
    <template #menu>
      <var-cell>{{ pack.menuOption }}</var-cell>
      <var-cell>{{ pack.menuOption }}</var-cell>
      <var-cell>{{ pack.menuOption }}</var-cell>
    </template>
  </var-menu>

  <app-type>{{ pack.placement }}</app-type>
  <var-select :hint="false" v-model="placementValue">
    <var-option v-for="(item, index) in placementOptions" :key="index" :label="item" />
  </var-select>
  <div class="placement-container">
    <var-menu :placement="placementValue">
      <var-button type="primary">
        <var-icon name="star" />
      </var-button>
      <template #menu>
        <var-cell>{{ pack.menuOption }}</var-cell>
        <var-cell>{{ pack.menuOption }}</var-cell>
        <var-cell>{{ pack.menuOption }}</var-cell>
      </template>
    </var-menu>
  </div>

  <app-type>{{ pack.offset }}</app-type>
  <var-menu offset-x="36px" offset-y="18px">
    <var-button type="primary">{{ pack.offset }}</var-button>
    <template #menu>
      <var-cell>{{ pack.menuOption }}</var-cell>
      <var-cell>{{ pack.menuOption }}</var-cell>
      <var-cell>{{ pack.menuOption }}</var-cell>
    </template>
  </var-menu>

  <app-type>{{ pack.trigger }}</app-type>
  <var-select :hint="false" v-model="trigger">
    <var-option label="click" />
    <var-option label="hover" />
  </var-select>
  <var-menu style="margin-top: 15px" :trigger="trigger">
    <var-button type="primary">{{ pack.trigger }}</var-button>

    <template #menu>
      <var-cell>{{ pack.menuOption }}</var-cell>
      <var-cell>{{ pack.menuOption }}</var-cell>
      <var-cell>{{ pack.menuOption }}</var-cell>
    </template>
  </var-menu>

  <app-type>{{ pack.events }}</app-type>
  <var-menu
    @open="() => Snackbar.info('open')"
    @opened="() => Snackbar.success('opened')"
    @close="() => Snackbar.warning('close')"
    @closed="() => Snackbar.error('closed')"
  >
    <var-button type="primary">{{ pack.events }}</var-button>

    <template #menu>
      <var-cell>{{ pack.menuOption }}</var-cell>
      <var-cell>{{ pack.menuOption }}</var-cell>
      <var-cell>{{ pack.menuOption }}</var-cell>
    </template>
  </var-menu>

  <app-type>{{ pack.disabled }}</app-type>
  <var-space justify="space-between">
    <var-menu disabled>
      <var-button type="primary" disabled>{{ pack.disabled }}</var-button>

      <template #menu>
        <var-cell>{{ pack.menuOption }}</var-cell>
        <var-cell>{{ pack.menuOption }}</var-cell>
        <var-cell>{{ pack.menuOption }}</var-cell>
      </template>
    </var-menu>
  </var-space>

  <app-type>{{ pack.twoWayBinding }}</app-type>
  <var-menu v-model:show="show">
    <var-button type="primary">{{ pack.twoWayBinding }}</var-button>

    <template #menu>
      <var-cell @click="closeMenu">{{ pack.menuOption }}</var-cell>
      <var-cell @click="closeMenu">{{ pack.menuOption }}</var-cell>
      <var-cell @click="closeMenu">{{ pack.menuOption }}</var-cell>
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
