<script setup>
import { AppType, watchLang } from '@varlet/cli/client'
import VaButton from '..'
import { t, use } from './locale'

watchLang(use)
</script>

<template>
  <app-type>{{ t('basicUse') }}</app-type>
  <va-button>{{ t('start') }}</va-button>

  <app-type>{{ t('modifyColor') }}</app-type>
  <va-button color="#03A9F4">{{ t('start') }}</va-button>
</template>
