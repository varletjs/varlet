<script setup>
import VarAlert from '..'
import { watchLang, AppType, onThemeChange } from '@varlet/cli/client'
import { ref } from 'vue'
import { use, t } from './locale'

const options = ['info', 'success', 'warning', 'error'].map((value) => ({ label: value, value }))

const show = ref(true)
const type = ref('info')

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('title') }}</app-type>
  <var-alert :title="t('alertTitle')" />

  <app-type>{{ t('content') }}</app-type>
  <var-alert :message="t('alertText')" />

  <app-type>{{ t('type') }}</app-type>
  <var-space :size="[10, 10]">
    <var-alert :title="t('alertTitle')" :message="t('alertText')" />
    <var-alert :title="t('alertTitle')" :message="t('alertText')" type="success" style="margin-top: 10px" />
    <var-alert :title="t('alertTitle')" :message="t('alertText')" type="warning" style="margin-top: 10px" />
    <var-alert :title="t('alertTitle')" :message="t('alertText')" type="error" style="margin-top: 10px" />
  </var-space>

  <app-type>{{ t('variant') }}</app-type>
  <var-select v-model="type" :options="options" style="margin-bottom: 10px" />
  <var-space :size="[10, 10]">
    <var-alert :title="t('alertTitle')" :message="t('alertText')" :type="type" />
    <var-alert
      :title="t('alertTitle')"
      :message="t('alertText')"
      variant="outlined"
      :type="type"
      style="margin-top: 10px"
    />
    <var-alert
      :title="t('alertTitle')"
      :message="t('alertText')"
      variant="tonal"
      :type="type"
      style="margin-top: 10px"
    />
  </var-space>

  <app-type>{{ t('customIcon') }}</app-type>
  <var-alert :title="t('alertTitle')" :message="t('alertText')">
    <template #icon>
      <var-icon name="heart" />
    </template>
  </var-alert>

  <app-type>{{ t('allowToClose') }}</app-type>
  <var-alert v-if="show" :title="t('alertTitle')" :message="t('alertText')" closeable @click="show = false">
    <template #icon>
      <var-icon name="heart" />
    </template>
  </var-alert>
</template>
