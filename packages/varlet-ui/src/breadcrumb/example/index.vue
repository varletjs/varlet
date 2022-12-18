<script setup>
import { watchLang, AppType } from '@varlet/cli/client'
import VarBreadcrumb from '..'
import VarBreadcrumbItem from '../../breadcrumb-item'
import { use, pack } from './locale'

watchLang(use)
</script>

<template>
  <app-type>Mobile phone example code</app-type>
  <var-breadcrumb>
    <var-breadcrumb-item>一级</var-breadcrumb-item>
    <var-breadcrumb-item separator="->">二级</var-breadcrumb-item>
    <var-breadcrumb-item>
      <template #separator> 分割符 </template>
      三级
    </var-breadcrumb-item>
    <var-breadcrumb-item>四级</var-breadcrumb-item>
  </var-breadcrumb>
</template>
