<script setup>
import VarButton from '..'
import { watchLang } from '@varlet/cli/site/utils'
import { pack, use } from './locale'

watchLang(use)
</script>

<template>
  <var-button>{{ pack.start }}</var-button>
</template>
