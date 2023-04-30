<script setup>
import VarBreadcrumbs from '..'
import VarBreadcrumb from '../../breadcrumb'
import VarIcon from '../../icon'
import Snackbar from '../../snackbar'
import dark from '../../themes/dark/index'
import { use, pack } from './locale'
import { watchLang, AppType, watchDarkMode } from '@varlet/cli/client'

watchDarkMode(dark)
watchLang(use)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-breadcrumbs>
    <var-breadcrumb>{{ pack.level1 }}</var-breadcrumb>
    <var-breadcrumb>{{ pack.level2 }}</var-breadcrumb>
    <var-breadcrumb>{{ pack.level3 }}</var-breadcrumb>
  </var-breadcrumbs>

  <app-type>{{ pack.separator }}</app-type>
  <var-breadcrumbs separator="\">
    <var-breadcrumb>{{ pack.level1 }}</var-breadcrumb>
    <var-breadcrumb>{{ pack.level2 }}</var-breadcrumb>
    <var-breadcrumb>{{ pack.level3 }}</var-breadcrumb>
  </var-breadcrumbs>

  <app-type>{{ pack.childSeparator }}</app-type>
  <var-breadcrumbs>
    <var-breadcrumb>{{ pack.level1 }}</var-breadcrumb>
    <var-breadcrumb separator="~">{{ pack.level2 }}</var-breadcrumb>
    <var-breadcrumb>{{ pack.level3 }}</var-breadcrumb>
  </var-breadcrumbs>

  <app-type>{{ pack.separatorSlot }}</app-type>
  <var-breadcrumbs>
    <var-breadcrumb>
      <template #separator>
        <var-icon name="menu-right" style="margin: 1px 4px 0" />
      </template>
      {{ pack.level1 }}
    </var-breadcrumb>
    <var-breadcrumb>
      <template #separator>
        <var-icon name="menu-right" style="margin: 1px 4px 0" />
      </template>
      {{ pack.level2 }}
    </var-breadcrumb>
    <var-breadcrumb>{{ pack.level3 }}</var-breadcrumb>
  </var-breadcrumbs>

  <app-type>{{ pack.events }}</app-type>
  <var-breadcrumbs>
    <var-breadcrumb @click="Snackbar(pack.level1)">{{ pack.level1 }}</var-breadcrumb>
    <var-breadcrumb @click="Snackbar(pack.level2)">{{ pack.level2 }}</var-breadcrumb>
    <var-breadcrumb @click="Snackbar(pack.level3)">{{ pack.level3 }}</var-breadcrumb>
  </var-breadcrumbs>
</template>
