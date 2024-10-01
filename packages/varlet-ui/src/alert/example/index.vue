<script setup>
import VarAlert from '..'
import { watchLang, AppType } from '@varlet/cli/client'
import { use, t } from './locale'

watchLang(use)
</script>

<template>
  <app-type>{{ t('title') }}</app-type>
  <var-alert title="Varlet UI" :text="t('alertText')" />

  <app-type>{{ t('content') }}</app-type>
  <var-alert title="Varlet UI" :text="t('alertText')" />
</template>
