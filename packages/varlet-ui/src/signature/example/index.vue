<script setup>
import { ref } from 'vue'
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { t, use } from './locale'

const signature = ref('')
const signatureRef = ref()

const customStyleSignature = ref('')
const customStyleSignatureRef = ref()

watchLang(use)
onThemeChange(() => {
  signatureRef.value?.reset()
  customStyleSignatureRef.value?.reset()
  signature.value = ''
  customStyleSignature.value = ''
})

function confirmSignature() {
  signature.value = signatureRef.value.confirm()
}

function resetSignature() {
  signature.value = ''
  signatureRef.value.reset()
}

function confirmCustomStyleSignature() {
  customStyleSignature.value = customStyleSignatureRef.value.confirm()
}

function clearCustomStyleSignature() {
  customStyleSignature.value = ''
  customStyleSignatureRef.value.reset()
}
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-signature ref="signatureRef" />
  <var-space class="gap">
    <var-button type="primary" @click="confirmSignature">{{ t('confirm') }}</var-button>
    <var-button type="primary" @click="resetSignature">{{ t('reset') }}</var-button>
  </var-space>
  <img v-if="signature" class="gap" :src="signature" />

  <app-type>{{ t('customStyle') }}</app-type>
  <var-signature ref="customStyleSignatureRef" style="color: var(--color-primary)" :line-width="4" />
  <var-space class="gap">
    <var-button type="primary" @click="confirmCustomStyleSignature">{{ t('confirm') }}</var-button>
    <var-button type="primary" @click="clearCustomStyleSignature">{{ t('reset') }}</var-button>
  </var-space>
  <img v-if="customStyleSignature" :src="customStyleSignature" class="gap" />
</template>

<style scoped>
.gap {
  margin-top: 10px !important;
}
</style>
