<script setup>
import { Snackbar } from '@varlet/ui'
import { use, t } from './locale'
import { watchLang, AppType, onThemeChange } from '@varlet/cli/client'

onThemeChange()
watchLang(use)
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-breadcrumbs>
    <var-breadcrumb>{{ t('level1') }}</var-breadcrumb>
    <var-breadcrumb>{{ t('level2') }}</var-breadcrumb>
    <var-breadcrumb>{{ t('level3') }}</var-breadcrumb>
  </var-breadcrumbs>

  <app-type>{{ t('separator') }}</app-type>
  <var-breadcrumbs separator="\">
    <var-breadcrumb>{{ t('level1') }}</var-breadcrumb>
    <var-breadcrumb>{{ t('level2') }}</var-breadcrumb>
    <var-breadcrumb>{{ t('level3') }}</var-breadcrumb>
  </var-breadcrumbs>

  <app-type>{{ t('childSeparator') }}</app-type>
  <var-breadcrumbs>
    <var-breadcrumb>{{ t('level1') }}</var-breadcrumb>
    <var-breadcrumb separator="~">{{ t('level2') }}</var-breadcrumb>
    <var-breadcrumb>{{ t('level3') }}</var-breadcrumb>
  </var-breadcrumbs>

  <app-type>{{ t('separatorSlot') }}</app-type>
  <var-breadcrumbs>
    <var-breadcrumb>
      <template #separator>
        <var-icon name="menu-right" style="margin: 1px 4px 0" />
      </template>
      {{ t('level1') }}
    </var-breadcrumb>
    <var-breadcrumb>
      <template #separator>
        <var-icon name="menu-right" style="margin: 1px 4px 0" />
      </template>
      {{ t('level2') }}
    </var-breadcrumb>
    <var-breadcrumb>{{ t('level3') }}</var-breadcrumb>
  </var-breadcrumbs>

  <app-type>{{ t('clickEvent') }}</app-type>
  <var-breadcrumbs>
    <var-breadcrumb @click="Snackbar(t('level1'))">{{ t('level1') }}</var-breadcrumb>
    <var-breadcrumb @click="Snackbar(t('level2'))">{{ t('level2') }}</var-breadcrumb>
    <var-breadcrumb @click="Snackbar(t('level3'))">{{ t('level3') }}</var-breadcrumb>
  </var-breadcrumbs>
</template>
