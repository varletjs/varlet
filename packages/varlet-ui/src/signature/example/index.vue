<script setup>
import { ref } from 'vue'
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { Snackbar } from '@varlet/ui'
import { t, use } from './locale'

const signature = ref('')

watchLang(use)
onThemeChange()

const onSubmit = () => {
  Snackbar.success(t('submitSuccess'))
}
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-signature v-model="signature" />

  <app-type>{{ t('customLineWidth') }}</app-type>
  <var-signature v-model="signature" :line-width="4" />

  <app-type>{{ t('customStrokeStyle') }}</app-type>
  <var-signature v-model="signature" stroke-style="#f44336" />

  <app-type>{{ t('customHeight') }}</app-type>
  <var-signature v-model="signature" :height="300" />

  <app-type>{{ t('customOutputType') }}</app-type>
  <var-signature v-model="signature" type="jpg" />

  <app-type>{{ t('formValidation') }}</app-type>
  <var-form @submit="onSubmit">
    <var-signature v-model="signature" :rules="[(v) => !!v || t('signatureRequired')]" />
    <var-button type="primary" native-type="submit">
      {{ t('submit') }}
    </var-button>
  </var-form>
</template>

<style lang="less">
.var-signature {
  margin-bottom: 16px;
}
</style>
