<script setup>
import { watchLang } from '@varlet/cli/client'
import VaButton from '..'
import { t, use } from './locale'

watchLang(use, 'pc')
</script>

<template>
  <va-button color="#03A9F4">{{ t('start') }}</va-button>
</template>
