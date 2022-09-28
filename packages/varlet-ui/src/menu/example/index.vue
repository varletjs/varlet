<script setup>
import VarMenu from '..'
import VarSpace from '../../space'
import VarButton from '../../button'
import VarSelect from '../../select'
import VarOption from '../../option'
import VarCell from '../../cell'
import Snackbar from '../../snackbar'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { reactive, toRefs, ref, onMounted } from 'vue'
import { pack, use } from './locale/index'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'
import dark from '../../themes/dark'

const values = reactive({
  top: false,
  bottom: false,
  offsetX: false,
  offsetX1: false,
  offsetY: false,
  offsetY1: false,
  event: false,
  placement: true,
  trigger: false,
})
const bgColor = ref('#fff')
const { placement } = toRefs(values)
const placementValue = ref('cover-top-start')
const placementOption = ref([
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
const trigger = ref('click')

watchLang(use)
watchDarkMode(dark, (themes) => {
  bgColor.value = themes === 'darkThemes' ? '#272727' : '#fff'
})
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
    <var-option v-for="(item, index) in placementOption" :key="index" :label="item" />
  </var-select>
  <div class="flex-box">
    <var-menu :placement="placementValue">
      <var-button type="primary"><var-icon name="star" /></var-button>
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
  <div style="margin-bottom: 20px"></div>
  <var-menu :trigger="trigger">
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
      <var-button type="primary">{{ pack.disabled }}</var-button>

      <template #menu>
        <var-cell>{{ pack.menuOption }}</var-cell>
        <var-cell>{{ pack.menuOption }}</var-cell>
        <var-cell>{{ pack.menuOption }}</var-cell>
      </template>
    </var-menu>
  </var-space>

  <div style="margin-bottom: 100px"></div>
</template>

<style scoped lang="less">
.flex-box {
  height: 250px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
