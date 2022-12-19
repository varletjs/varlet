<script setup>
import { watchLang, AppType } from '@varlet/cli/client'
import VarBreadcrumb from '..'
import VarBreadcrumbs from '../../breadcrumbs'
import VarSpace from '../../space'
import VarIcon from '../../icon'
import { use, pack } from './locale'

watchLang(use)
</script>

<template>
  <app-type>{{ pack.separator }}</app-type>
  <var-space direction="column" size="large">
    <var-breadcrumb>
      <var-breadcrumbs>{{ pack.level1 }}</var-breadcrumbs>
      <var-breadcrumbs>{{ pack.level2 }}</var-breadcrumbs>
      <var-breadcrumbs>{{ pack.level3 }}</var-breadcrumbs>
    </var-breadcrumb>

    <var-breadcrumb separator="\">
      <var-breadcrumbs>{{ pack.level1 }}</var-breadcrumbs>
      <var-breadcrumbs>{{ pack.level2 }}</var-breadcrumbs>
      <var-breadcrumbs>{{ pack.level3 }}</var-breadcrumbs>
    </var-breadcrumb>
  </var-space>

  <app-type>{{ pack.levelSeparator }}</app-type>
  <var-breadcrumb>
    <var-breadcrumbs>{{ pack.level1 }}</var-breadcrumbs>
    <var-breadcrumbs separator="~">{{ pack.level2 }}</var-breadcrumbs>
    <var-breadcrumbs>{{ pack.level3 }}</var-breadcrumbs>
  </var-breadcrumb>

  <app-type>{{ pack.slotSeparator }}</app-type>
  <var-breadcrumb>
    <var-breadcrumbs>
      <template #separator>
        <var-icon name="chevron-right" />
      </template>
      {{ pack.level1 }}
    </var-breadcrumbs>
    <var-breadcrumbs>
      <template #separator>
        <var-icon name="chevron-right" />
      </template>
      {{ pack.level2 }}
    </var-breadcrumbs>
    <var-breadcrumbs>
      <template #separator>
        <var-icon name="chevron-right" />
      </template>
      {{ pack.level3 }}
    </var-breadcrumbs>
  </var-breadcrumb>
</template>
