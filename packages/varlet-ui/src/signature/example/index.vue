<script setup>
import { ref } from 'vue'
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { Snackbar } from '@varlet/ui'
import { t, use } from './locale'

const signature = ref('')
const signatureRef = ref(null)

watchLang(use)
onThemeChange()

const clear = () => {
  signatureRef.value?.clear()
}

const save = () => {
  if (signatureRef.value?.isEmpty()) {
    // 修改这里，添加括号调用函数
    Snackbar.warning(t('pleaseSignFirst'))
    return
  }
  signatureRef.value?.confirm()
  Snackbar.success(t('saveSuccess'))
}
</script>

<template>
  <!-- Basic Usage -->
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-signature ref="signatureRef" v-model="signature" />
  <var-space class="signature-actions">
    <var-button type="primary" size="small" @click="save">{{ t('save') }}</var-button>
    <var-button size="small" @click="clear">{{ t('clear') }}</var-button>
  </var-space>
  <img v-if="signature" :src="signature" alt="Signature Preview" style="margin-top: 10px" />

  <!-- Custom Style -->
  <app-type>{{ t('customStyle') }}</app-type>
  <var-signature v-model="signature" stroke-style="#2979ff" :line-width="3" background="#f5f5f5" />

  <!-- Disabled State -->
  <app-type>{{ t('disabledState') }}</app-type>
  <var-signature v-model="signature" disabled />
</template>

<style lang="less">
.signature-actions {
  display: flex;
  justify-content: flex-end !important;
  margin-top: 6px !important;

  :deep(.var-button) {
    padding: 0 16px;
    height: 32px;
  }
}
</style>
