<script setup>
import VarButton from '..'
import { watchLang, AppType } from '@varlet/cli/client'
import { pack, use } from './locale'

watchLang(use)
</script>

<template>
  <app-type>{{ pack.basicUse }}</app-type>
  <var-button>{{ pack.start }}</var-button>

  <app-type>{{ pack.modifyColor }}</app-type>
  <var-button color="#03A9F4">{{ pack.start }}</var-button>
</template>
