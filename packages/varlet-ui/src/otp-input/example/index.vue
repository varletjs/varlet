<script setup>
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { ref } from 'vue'
import { z } from 'zod'
import { t, use } from './locale'

const basicValue = ref('')
const digitValue = ref('')
const textValue = ref('')
const mixedValue = ref('')
const maskedValue = ref('')
const validatedValue = ref('')

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-otp-input v-model="basicValue" />

  <app-type style="margin-top: 10vmin">{{ t('typeVariants') }}</app-type>
  <var-space direction="column" :size="['4vmin', 0]">
    <var-otp-input v-model="digitValue" type="digit" />
    <var-otp-input v-model="textValue" type="text" />
    <var-otp-input v-model="mixedValue" type="alphanumeric" />
  </var-space>

  <app-type style="margin-top: 10vmin">{{ t('separatorSlot') }}</app-type>
  <var-otp-input v-model="mixedValue" type="alphanumeric">
    <template #separator="{ index }">
      <span v-if="index === 2">-</span>
    </template>
  </var-otp-input>

  <app-type style="margin-top: 10vmin">{{ t('validation') }}</app-type>
  <var-otp-input v-model="validatedValue" variant="filled" :rules="z.string().length(6, t('errorMessage'))" />

  <app-type style="margin-top: 10vmin">{{ t('mask') }}</app-type>
  <var-otp-input v-model="maskedValue" mask />

  <div style="height: 20px"></div>
</template>
