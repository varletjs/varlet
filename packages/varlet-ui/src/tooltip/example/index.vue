<script setup>
import VarTooltip from '..'
import VarSpace from '../../space'
import VarButton from '../../button'
import VarSelect from '../../select'
import VarOption from '../../option'
import VarCell from '../../cell'
import Snackbar from '../../snackbar'
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import dark from '../../themes/dark'
import { ref } from 'vue'
import { pack, use } from './locale/index'

const show = ref(false)
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

const closeTootipVarTooltip = () => {
  show.value = false
}

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-tooltip :content="pack.basicUsage">
    <var-button type="primary">{{ pack.basicUsage }}</var-button>
  </var-tooltip>

  <app-type>{{ pack.slotTooLtip }}</app-type>
  <var-tooltip>
    <var-button type="primary">{{ pack.slotTooltip }}</var-button>
    <template #tooltip>
      <var-cell>{{ pack.slotTooltip }}</var-cell>
    </template>
  </var-tooltip>

  <app-type>{{ pack.placement }}</app-type>
  <var-select :hint="false" v-model="placementValue">
    <var-option v-for="(item, index) in placementOptions" :key="index" :label="item" />
  </var-select>
  <div class="placement-container">
    <var-tooltip :placement="placementValue">
      <var-button type="primary">
        <var-icon name="star" />
      </var-button>
    </var-tooltip>
  </div>

  <app-type>{{ pack.themeColorTooltip }}</app-type>
  <var-space :size="['2.666vw', '2.666vw']">
    <var-tooltip type="default">
      <var-button type="default">{{ pack.defaultTooltip }}</var-button>
    </var-tooltip>
    <var-tooltip type="primary">
      <var-button type="primary">{{ pack.primaryTooltip }}</var-button>
    </var-tooltip>
    <var-tooltip type="info">
      <var-button type="info">{{ pack.infoTooltip }}</var-button>
    </var-tooltip>
    <var-tooltip type="success">
      <var-button type="success">{{ pack.successTooltip }}</var-button>
    </var-tooltip>
    <var-tooltip type="warning">
      <var-button type="warning">{{ pack.warningTooltip }}</var-button>
    </var-tooltip>
    <var-tooltip type="danger">
      <var-button type="danger">{{ pack.dangerTooltip }}</var-button>
    </var-tooltip>
  </var-space>

  <app-type>{{ pack.customColor }}</app-type>
  <var-tooltip color="#69dbaa">
    <var-button type="primary">{{ pack.customColor }}</var-button>
  </var-tooltip>

  <app-type>{{ pack.offset }}</app-type>
  <var-tooltip offset-x="36px" offset-y="18px">
    <var-button type="primary">{{ pack.offset }}</var-button>
  </var-tooltip>

  <app-type>{{ pack.trigger }}</app-type>
  <var-select :hint="false" v-model="trigger">
    <var-option label="click" />
    <var-option label="hover" />
  </var-select>
  <var-tooltip style="margin-top: 15px" :trigger="trigger">
    <var-button type="primary">{{ pack.trigger }}</var-button>
  </var-tooltip>

  <app-type>{{ pack.events }}</app-type>
  <var-tooltip
    @open="() => Snackbar.info('open')"
    @opened="() => Snackbar.success('opened')"
    @close="() => Snackbar.warning('close')"
    @closed="() => Snackbar.error('closed')"
  >
    <var-button type="primary">{{ pack.events }}</var-button>
  </var-tooltip>

  <app-type>{{ pack.disabled }}</app-type>
  <var-space justify="space-between">
    <var-tooltip disabled>
      <var-button type="primary">{{ pack.disabled }}</var-button>
    </var-tooltip>
  </var-space>

  <app-type>{{ pack.twoWayBinding }}</app-type>
  <var-tooltip v-model:show="show">
    <var-button type="primary">{{ pack.twoWayBinding }}</var-button>
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
