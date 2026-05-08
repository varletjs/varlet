<script setup>
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { Snackbar } from '@varlet/ui'
import { ref } from 'vue'
import { z } from 'zod'
import { t, use } from './locale'

const basicValue = ref('')
const digitValue = ref('')
const textValue = ref('')
const alphanumericValue = ref('')
const separatorValue = ref('')
const standardValue = ref('')
const outlinedValue = ref('')
const filledValue = ref('')
const readonlyValue = ref('123456')
const disabledValue = ref('123456')
const pasteValue = ref('')
const pasteTransformValue = ref('')
const pasteDisabledValue = ref('')
const completeValue = ref('')
const maskedValue = ref('')
const validatedValue = ref('')

watchLang(use)
onThemeChange()

function handleComplete(value) {
  Snackbar.success(`${t('completeMessage')}${value}`)
}
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-otp-input v-model="basicValue" />

  <app-type style="margin-top: 10vmin">{{ t('type') }}</app-type>
  <var-space direction="column" :size="['4vmin', 0]">
    <var-otp-input v-model="digitValue" type="digit" />
    <var-otp-input v-model="textValue" type="text" />
    <var-otp-input v-model="alphanumericValue" type="alphanumeric" />
  </var-space>

  <app-type style="margin-top: 10vmin">{{ t('variant') }}</app-type>
  <var-space direction="column" :size="['4vmin', 0]">
    <var-otp-input v-model="standardValue" variant="standard" />
    <var-otp-input v-model="outlinedValue" variant="outlined" />
    <var-otp-input v-model="filledValue" variant="filled" />
  </var-space>

  <app-type style="margin-top: 10vmin">{{ t('readonlyAndDisabled') }}</app-type>
  <var-space direction="column" :size="['4vmin', 0]">
    <var-otp-input v-model="readonlyValue" readonly />
    <var-otp-input v-model="disabledValue" disabled />
  </var-space>

  <app-type style="margin-top: 10vmin">{{ t('separatorSlot') }}</app-type>
  <var-otp-input v-model="separatorValue" type="alphanumeric">
    <template #separator="{ index }">
      <span v-if="index === 2" class="otp-input-example__separator">•</span>
    </template>
  </var-otp-input>

  <app-type style="margin-top: 10vmin">{{ t('paste') }}</app-type>
  <var-space direction="column" :size="['4vmin', 0]">
    <div class="otp-input-example__tip">
      {{ t('pasteBasicTip') }}
    </div>
    <var-otp-input v-model="pasteValue" />

    <div class="otp-input-example__tip">
      {{ t('pasteTransformTip') }}
    </div>
    <var-otp-input
      v-model="pasteTransformValue"
      type="alphanumeric"
      :paste-transform="(value) => value.replace(/[-\s]/g, '').toUpperCase()"
    />

    <div class="otp-input-example__tip">
      {{ t('pasteDisabledTip') }}
    </div>
    <var-otp-input v-model="pasteDisabledValue" :allow-paste="false" />
  </var-space>

  <app-type style="margin-top: 10vmin">{{ t('complete') }}</app-type>
  <var-otp-input v-model="completeValue" @complete="handleComplete" />

  <app-type style="margin-top: 10vmin">{{ t('validation') }}</app-type>
  <var-otp-input v-model="validatedValue" variant="filled" :rules="z.string().length(6, t('errorMessage'))" />

  <app-type style="margin-top: 10vmin">{{ t('mask') }}</app-type>
  <var-otp-input v-model="maskedValue" mask />

  <div style="height: 20px"></div>
</template>

<style>
.otp-input-example__tip {
  font-size: 12px;
  color: var(--site-config-color-sub-text);
}

.otp-input-example__separator {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  min-width: 1em;
  color: var(--color-text);
  font-size: 18px;
  font-weight: 600;
  line-height: 1;
}
</style>
