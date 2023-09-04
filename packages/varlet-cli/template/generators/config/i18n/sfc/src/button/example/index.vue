<script setup>
import VaButton from '..'
import { watchLang, AppType } from '@varlet/cli/client'
import { pack, use } from './locale'

watchLang(use)
</script>

<template>
  <app-type>{{ pack.basicUse }}</app-type>
  <va-button>{{ pack.start }}</va-button>

  <app-type>{{ pack.modifyColor }}</app-type>
  <va-button color="#03A9F4">{{ pack.start }}</va-button>
</template>
