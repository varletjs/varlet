<script setup>
import VarBreadcrumbItem from '../index'
import { watchLang, AppType } from '@varlet/cli/client'
import { use, pack } from './locale'

watchLang(use)
</script>

<template>
  <app-type>Mobile phone example code</app-type>
  <var-breadcrumb-item />
</template>
