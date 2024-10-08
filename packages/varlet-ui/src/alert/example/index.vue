<script setup>
import VarAlert from '..'
import { watchLang, AppType } from '@varlet/cli/client'
import { ref } from 'vue'
import { use, t } from './locale'

const show = ref(true)

watchLang(use)
</script>

<template>
  <app-type>{{ t('title') }}</app-type>
  <var-alert :title="t('alertTitle')" />

  <app-type>{{ t('content') }}</app-type>
  <var-alert :text="t('alertText')" />

  <app-type>{{ t('type') }}</app-type>
  <var-alert :title="t('alertTitle')" :text="t('alertText')" />
  <var-alert :title="t('alertTitle')" :text="t('alertText')" type="success" style="margin-top: 10px" />
  <var-alert :title="t('alertTitle')" :text="t('alertText')" type="info" style="margin-top: 10px" />
  <var-alert :title="t('alertTitle')" :text="t('alertText')" type="danger" style="margin-top: 10px" />

  <app-type>{{ t('customIcon') }}</app-type>
  <var-alert :title="t('alertTitle')" :text="t('alertText')">
    <template #icon>
      <var-icon name="heart" />
    </template>
  </var-alert>

  <app-type>{{ t('allowToClose') }}</app-type>
  <var-alert v-if="show" :title="t('alertTitle')" :text="t('alertText')" closeable @click="show = false">
    <template #icon>
      <var-icon name="heart" />
    </template>
  </var-alert>
</template>
