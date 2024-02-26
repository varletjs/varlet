<script setup>
import VaButton from '..'
import { watchLang } from '@varlet/cli/client'
import { t, use } from './locale'

watchLang(use, 'pc')
</script>

<template>
  <va-button>{{ t('start') }}</va-button>
</template>
