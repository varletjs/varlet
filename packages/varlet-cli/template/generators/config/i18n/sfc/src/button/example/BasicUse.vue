<script setup>
import VaButton from '..'
import { watchLang } from '@varlet/cli/client'
import { pack, use } from './locale'

watchLang(use, 'pc')
</script>

<template>
  <va-button>{{ pack.start }}</va-button>
</template>
