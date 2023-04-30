<script setup>
import { watchLang, AppType } from '@varlet/cli/client'
import { use } from './locale'

watchLang(use)
</script>

<template>
  <app-type>Mobile phone example code</app-type>
  <var-breadcrumb />
</template>
