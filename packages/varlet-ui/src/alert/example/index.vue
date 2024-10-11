<script setup>
import VarAlert from '..'
import { watchLang, AppType, onThemeChange } from '@varlet/cli/client'
import { ref } from 'vue'
import { use, t } from './locale'

const options = ['info', 'success', 'warning', 'danger'].map((value) => ({ label: value, value }))
const show = ref(true)
const type = ref('info')

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('title') }}</app-type>
  <var-alert :title="t('alertTitle')" />

  <app-type>{{ t('message') }}</app-type>
  <var-alert :message="t('alertText')" />

  <app-type>{{ t('type') }}</app-type>
  <var-space direction="column" size="large">
    <var-alert :title="t('alertTitle')" :message="t('alertText')" />
    <var-alert :title="t('alertTitle')" :message="t('alertText')" type="success" />
    <var-alert :title="t('alertTitle')" :message="t('alertText')" type="warning" />
    <var-alert :title="t('alertTitle')" :message="t('alertText')" type="danger" />
  </var-space>

  <app-type>{{ t('variant') }}</app-type>
  <var-space direction="column" size="large">
    <var-select variant="outlined" size="small" v-model="type" :options="options" />
    <var-alert :title="t('alertTitle')" :message="t('alertText')" :type="type" />
    <var-alert variant="tonal" :title="t('alertTitle')" :message="t('alertText')" :type="type" />
    <var-alert variant="outlined" :title="t('alertTitle')" :message="t('alertText')" :type="type" />
  </var-space>

  <app-type>{{ t('customIcon') }}</app-type>
  <var-alert :title="t('alertTitle')" :message="t('alertText')">
    <template #icon>
      <var-icon name="heart" />
    </template>
  </var-alert>

  <app-type>{{ t('allowToClose') }}</app-type>
  <var-alert v-if="show" :title="t('alertTitle')" :message="t('alertText')" closeable @close="show = false" />
</template>
