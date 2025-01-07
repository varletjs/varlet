<script setup>
import { watchLang } from '@varlet/cli/client'
import VaButton from '..'
import { t, use } from './locale'

watchLang(use, 'pc')
</script>

<template>
  <va-button>{{ t('start') }}</va-button>
</template>
