<script setup>
import { ref } from 'vue'
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import VarInputOtpItem from '../../input-otp-item/InputOtpItem.vue'
import VarInputOtp from '../InputOtp.vue'
import { t, use } from './locale'

watchLang(use)
onThemeChange()

const standardValue = ref('')
const standardValue2 = ref('123')
const standardValue3 = ref('123')
const standardValue4 = ref('')
const variantValue = ref('')
const variantValue2 = ref('')

const otpInput = ref()

const validate = async () => {
  const res = await otpInput.value.validate()
  console.log(res)
}

const reset = () => {
  otpInput.value.reset()
}
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>

  <var-input-otp ref="otpInput" v-model="standardValue">
    <var-input-otp-item />
    <var-input-otp-item />
    <var-input-otp-item />
    <var-input-otp-item />
  </var-input-otp>
  <var-divider />
  <div>输入的值：{{ standardValue }}</div>
  <var-button @click="validate">{{ t('validate') }}</var-button>
  <var-button @click="reset">{{ t('reset') }}</var-button>

  <app-type>{{ t('readonly') }}</app-type>
  <var-input-otp v-model="standardValue2" readonly>
    <var-input-otp-item />
    <var-input-otp-item />
    <var-input-otp-item />
    <var-input-otp-item />
  </var-input-otp>

  <app-type>{{ t('disabled') }}</app-type>
  <var-input-otp v-model="standardValue3" disabled>
    <var-input-otp-item />
    <var-input-otp-item />
    <var-input-otp-item />
    <var-input-otp-item />
  </var-input-otp>

  <app-type>{{ t('validate') }}</app-type>
  <var-input-otp v-model="standardValue4" :rules="[(v) => v.length === 6 || t('errorMessage')]">
    <var-input-otp-item />
    <var-input-otp-item />
    <var-input-otp-item />
    <var-input-otp-item />
  </var-input-otp>

  <app-type>{{ t('variant') }}</app-type>
  <var-input-otp v-model="variantValue" variant="outlined">
    <var-input-otp-item />
    <var-input-otp-item />
    <var-input-otp-item />
    <var-input-otp-item />
  </var-input-otp>

  <app-type>{{ t('smallSize') }}</app-type>
  <var-input-otp v-model="variantValue2" variant="outlined" size="small">
    <var-input-otp-item />
    <var-input-otp-item />
    <var-input-otp-item />
    <var-input-otp-item />
  </var-input-otp>

  <div style="height: 40px"></div>
</template>
