<script setup>
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { ref } from 'vue'
import { z } from 'zod'
import { t, use } from './locale'

const value = ref(true)
const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(true)
const value4 = ref(true)
const value5 = ref(true)
const value6 = ref(true)
const value7 = ref(true)

function handleBeforeChange(value, change) {
  setTimeout(() => {
    change(value)
  }, 500)
}

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-space :size="['3vmin', '9vmin']">
    <var-switch v-model="value" />
  </var-space>

  <app-type>{{ t('disabled') }}</app-type>
  <var-switch v-model="value1" disabled />

  <app-type>{{ t('readonly') }}</app-type>
  <var-switch v-model="value1" readonly />

  <app-type>{{ t('customColor') }}</app-type>
  <var-switch v-model="value2" color="var(--color-warning)" close-color="var(--color-info)" />

  <app-type>{{ t('size') }}</app-type>
  <var-space :size="['3vmin', '11vmin']" align="center">
    <var-switch v-model="value3" size="4.266vmin" />
    <var-switch v-model="value3" />
    <var-switch v-model="value3" size="6.4vmin" />
  </var-space>

  <app-type>{{ t('loading') }}</app-type>
  <var-switch :model-value="true" loading />

  <app-type>{{ t('validateValue') }}</app-type>
  <var-space :size="['3vmin', '9vmin']">
    <var-switch v-model="value4" :rules="[(v) => v === true || t('state')]" />
  </var-space>

  <app-type>{{ t('validateWithZod') }}</app-type>
  <var-space :size="['3vmin', '9vmin']">
    <var-switch v-model="value7" :rules="z.boolean().refine((val) => val === true, { message: t('state') })" />
  </var-space>

  <app-type>{{ t('lazyChange') }}</app-type>
  <var-space :size="['3vmin', '9vmin']">
    <var-switch v-model="value5" lazy-change @before-change="handleBeforeChange" />
  </var-space>

  <app-type>{{ t('variant') }}</app-type>
  <var-switch variant v-model="value6" />
</template>
