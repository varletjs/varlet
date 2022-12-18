<script setup>
import { watchLang, AppType } from '@varlet/cli/client'
import VarBreadcrumb from '..'
import VarBreadcrumbItem from '../../breadcrumb-item'
import VarSpace from '../../space'
import VarIcon from '../../icon'
import { use, pack } from './locale'

watchLang(use)
</script>

<template>
  <app-type>{{ pack.separator }}</app-type>
  <var-space direction="column" size="large">
    <var-breadcrumb>
      <var-breadcrumb-item>{{ pack.level1 }}</var-breadcrumb-item>
      <var-breadcrumb-item>{{ pack.level2 }}</var-breadcrumb-item>
      <var-breadcrumb-item>{{ pack.level3 }}</var-breadcrumb-item>
    </var-breadcrumb>

    <var-breadcrumb separator="\">
      <var-breadcrumb-item>{{ pack.level1 }}</var-breadcrumb-item>
      <var-breadcrumb-item>{{ pack.level2 }}</var-breadcrumb-item>
      <var-breadcrumb-item>{{ pack.level3 }}</var-breadcrumb-item>
    </var-breadcrumb>
  </var-space>

  <app-type>{{ pack.levelSeparator }}</app-type>
  <var-breadcrumb>
    <var-breadcrumb-item>{{ pack.level1 }}</var-breadcrumb-item>
    <var-breadcrumb-item separator="~">{{ pack.level2 }}</var-breadcrumb-item>
    <var-breadcrumb-item>{{ pack.level3 }}</var-breadcrumb-item>
  </var-breadcrumb>

  <app-type>{{ pack.slotSeparator }}</app-type>
  <var-breadcrumb>
    <var-breadcrumb-item>
      <template #separator>
        <var-icon name="chevron-right" />
      </template>
      {{ pack.level1 }}
    </var-breadcrumb-item>
    <var-breadcrumb-item>
      <template #separator>
        <var-icon name="chevron-right" />
      </template>
      {{ pack.level2 }}
    </var-breadcrumb-item>
    <var-breadcrumb-item>
      <template #separator>
        <var-icon name="chevron-right" />
      </template>
      {{ pack.level3 }}
    </var-breadcrumb-item>
  </var-breadcrumb>
</template>
