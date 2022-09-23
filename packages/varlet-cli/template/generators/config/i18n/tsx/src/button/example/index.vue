<script setup>
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { watchLang } from '@varlet/cli/site/utils'
import BasicUse from './BasicUse'
import { pack, use } from './locale'

watchLang(use)
</script>

<template>
  <app-type>{{ pack.basicUse }}</app-type>
  <basic-use />
</template>
