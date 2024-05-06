<script setup>
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { ref } from 'vue'
import { use, t } from './locale'

const standardValue = ref('')
const standardValue2 = ref('123')
const standardValue3 = ref('123')
const standardValue4 = ref('')
const variantValue = ref('')
const variantValue2 = ref('')

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-otp-input v-model="standardValue" />

  <app-type>{{ t('readonly') }}</app-type>
  <var-otp-input v-model="standardValue2" readonly />

  <app-type>{{ t('disabled') }}</app-type>
  <var-otp-input v-model="standardValue3" disabled />

  <app-type>{{ t('validate') }}</app-type>
  <var-otp-input v-model="standardValue4" :rules="[(v) => v.length === 6 || t('errorMessage')]" />

  <app-type>{{ t('variant') }}</app-type>
  <var-otp-input v-model="variantValue" variant="outlined" />

  <app-type>{{ t('smallSize') }}</app-type>
  <var-otp-input v-model="variantValue2" variant="outlined" size="small" />

  <div style="height: 40px"></div>
</template>

<style scoped lang="less"></style>
