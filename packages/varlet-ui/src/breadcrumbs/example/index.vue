<script setup>
import { watchLang, AppType } from '@varlet/cli/client'
import VarBreadcrumbs from '..'
import VarBreadcrumb from '../../breadcrumb'
import VarSpace from '../../space'
import VarIcon from '../../icon'
import { use, pack } from './locale'

watchLang(use)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-breadcrumbs>
    <var-breadcrumb :to="{ path: '/' }">{{ pack.level1 }}</var-breadcrumb>
    <var-breadcrumb>{{ pack.level2 }}</var-breadcrumb>
    <var-breadcrumb>{{ pack.level3 }}</var-breadcrumb>
  </var-breadcrumbs>

  <app-type>{{ pack.separator }}</app-type>
  <var-breadcrumbs separator="\">
    <var-breadcrumb>{{ pack.level1 }}</var-breadcrumb>
    <var-breadcrumb>{{ pack.level2 }}</var-breadcrumb>
    <var-breadcrumb>{{ pack.level3 }}</var-breadcrumb>
  </var-breadcrumbs>

  <app-type>{{ pack.eachLevelSeparator }}</app-type>
  <var-breadcrumbs>
    <var-breadcrumb>{{ pack.level1 }}</var-breadcrumb>
    <var-breadcrumb separator="~">{{ pack.level2 }}</var-breadcrumb>
    <var-breadcrumb>{{ pack.level3 }}</var-breadcrumb>
  </var-breadcrumbs>

  <app-type>{{ pack.separatorSlot }}</app-type>
  <var-breadcrumbs>
    <var-breadcrumb>
      <template #separator>
        <var-icon name="chevron-right" />
      </template>
      {{ pack.level1 }}
    </var-breadcrumb>
    <var-breadcrumb>
      <template #separator>
        <var-icon name="chevron-right" />
      </template>
      {{ pack.level2 }}
    </var-breadcrumb>
    <var-breadcrumb>
      <template #separator>
        <var-icon name="chevron-right" />
      </template>
      {{ pack.level3 }}
    </var-breadcrumb>
  </var-breadcrumbs>
</template>
