<script setup>
import VirtualList from '..'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { watchLang } from '@varlet/cli/site/utils'
import { use, pack } from './locale'

watchLang(use)
</script>

<template>
  <app-type></app-type>
  <var-virtualList/>
</template>
    