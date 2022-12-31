<script setup>
import VarTooltip from '..'
import VarSpace from '../../space'
import VarButton from '../../button'
import VarSelect from '../../select'
import VarOption from '../../option'
import Snackbar from '../../snackbar'
import dark from '../../themes/dark'
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import { ref } from 'vue'
import { pack, use } from './locale/index'

const trigger = ref('click')
const placementValue = ref('top')
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
])

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-tooltip content="Tooltip">
    <var-button type="primary">{{ pack.basicUsage }}</var-button>
  </var-tooltip>

  <app-type>{{ pack.contentSlot }}</app-type>
  <var-tooltip>
    <var-button type="primary">{{ pack.contentSlot }}</var-button>

    <template #content>
      <var-icon name="star" />
    </template>
  </var-tooltip>

  <app-type>{{ pack.placement }}</app-type>
  <var-select :hint="false" v-model="placementValue">
    <var-option v-for="(item, index) in placementOptions" :key="index" :label="item" />
  </var-select>
  <div class="placement-container">
    <var-tooltip content="Tooltip" :placement="placementValue">
      <var-button type="primary">
        <var-icon name="star" />
      </var-button>
    </var-tooltip>
  </div>

  <app-type>{{ pack.themeColorTooltip }}</app-type>
  <var-space :size="['14vw', '2.666vw']">
    <var-tooltip type="default" content="Tooltip">
      <var-button type="default">{{ pack.defaultTooltip }}</var-button>
    </var-tooltip>
    <var-tooltip type="primary" content="Tooltip">
      <var-button type="primary">{{ pack.primaryTooltip }}</var-button>
    </var-tooltip>
    <var-tooltip type="info" content="Tooltip">
      <var-button type="info">{{ pack.infoTooltip }}</var-button>
    </var-tooltip>
    <var-tooltip type="success" content="Tooltip">
      <var-button type="success">{{ pack.successTooltip }}</var-button>
    </var-tooltip>
    <var-tooltip type="warning" content="Tooltip">
      <var-button type="warning">{{ pack.warningTooltip }}</var-button>
    </var-tooltip>
    <var-tooltip type="danger" content="Tooltip">
      <var-button type="danger">{{ pack.dangerTooltip }}</var-button>
    </var-tooltip>
  </var-space>

  <app-type>{{ pack.customColor }}</app-type>
  <var-tooltip content="Tooltip" color="#d81b60">
    <var-button type="primary">{{ pack.customColor }}</var-button>
  </var-tooltip>

  <app-type>{{ pack.offset }}</app-type>
  <var-tooltip content="Tooltip" :offset-x="64" :offset-y="-10">
    <var-button type="primary">{{ pack.offset }}</var-button>
  </var-tooltip>

  <app-type>{{ pack.trigger }}</app-type>
  <var-select :hint="false" v-model="trigger">
    <var-option label="click" />
    <var-option label="hover" />
  </var-select>
  <var-tooltip content="Tooltip" style="margin-top: 15px" :trigger="trigger">
    <var-button type="primary">{{ pack.trigger }}</var-button>
  </var-tooltip>

  <app-type>{{ pack.events }}</app-type>
  <var-tooltip
    content="Tooltip"
    @open="() => Snackbar.info('open')"
    @opened="() => Snackbar.success('opened')"
    @close="() => Snackbar.warning('close')"
    @closed="() => Snackbar.error('closed')"
  >
    <var-button type="primary">{{ pack.events }}</var-button>
  </var-tooltip>

  <app-type>{{ pack.disabled }}</app-type>
  <var-tooltip content="Tooltip" disabled>
    <var-button type="primary" disabled>{{ pack.disabled }}</var-button>
  </var-tooltip>

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
