<script setup>
import { Snackbar } from '@varlet/ui'
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { ref } from 'vue'
import { t, use } from './locale/index'

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
onThemeChange()
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-tooltip content="Tooltip">
    <var-button type="primary">{{ t('basicUsage') }}</var-button>
  </var-tooltip>

  <app-type>{{ t('contentSlot') }}</app-type>
  <var-tooltip>
    <var-button type="primary">{{ t('contentSlot') }}</var-button>

    <template #content>
      <var-icon name="star" />
    </template>
  </var-tooltip>

  <app-type>{{ t('placement') }}</app-type>
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

  <app-type>{{ t('themeColorTooltip') }}</app-type>
  <var-space :size="['14vmin', '2.666vmin']">
    <var-tooltip content="Tooltip">
      <var-button>{{ t('defaultTooltip') }}</var-button>
    </var-tooltip>
    <var-tooltip type="primary" content="Tooltip">
      <var-button type="primary">{{ t('primaryTooltip') }}</var-button>
    </var-tooltip>
    <var-tooltip type="info" content="Tooltip">
      <var-button type="info">{{ t('infoTooltip') }}</var-button>
    </var-tooltip>
    <var-tooltip type="success" content="Tooltip">
      <var-button type="success">{{ t('successTooltip') }}</var-button>
    </var-tooltip>
    <var-tooltip type="warning" content="Tooltip">
      <var-button type="warning">{{ t('warningTooltip') }}</var-button>
    </var-tooltip>
    <var-tooltip type="danger" content="Tooltip">
      <var-button type="danger">{{ t('dangerTooltip') }}</var-button>
    </var-tooltip>
  </var-space>

  <app-type>{{ t('customColor') }}</app-type>
  <var-tooltip content="Tooltip" color="#d81b60">
    <var-button type="primary">{{ t('customColor') }}</var-button>
  </var-tooltip>

  <app-type>{{ t('offset') }}</app-type>
  <var-tooltip content="Tooltip" :offset-x="64" :offset-y="-10">
    <var-button type="primary">{{ t('offset') }}</var-button>
  </var-tooltip>

  <app-type>{{ t('trigger') }}</app-type>
  <var-select :hint="false" v-model="trigger">
    <var-option label="click" />
    <var-option label="hover" />
  </var-select>
  <var-tooltip content="Tooltip" style="margin-top: 15px" :trigger="trigger">
    <var-button type="primary">{{ t('trigger') }}</var-button>
  </var-tooltip>

  <app-type>{{ t('events') }}</app-type>
  <var-tooltip
    content="Tooltip"
    @open="() => Snackbar.info('open')"
    @opened="() => Snackbar.success('opened')"
    @close="() => Snackbar.warning('close')"
    @closed="() => Snackbar.error('closed')"
  >
    <var-button type="primary">{{ t('events') }}</var-button>
  </var-tooltip>

  <app-type>{{ t('disabled') }}</app-type>
  <var-tooltip content="Tooltip" disabled>
    <var-button type="primary" disabled>{{ t('disabled') }}</var-button>
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
