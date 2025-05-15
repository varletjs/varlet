<script setup>
import { reactive, ref } from 'vue'
import { AppType, watchLang } from '@varlet/cli/client'
import { t, use } from './locale'

const state = reactive({
  score: 5,
  license: true,
})

const styleVars = ref(null)

const successTheme = {
  '--rate-primary-color': 'var(--color-success)',
  '--button-primary-color': 'var(--color-success)',
  '--switch-handle-active-background': 'var(--color-success)',
  '--switch-track-active-background': 'var(--color-success)',
}

watchLang(use)

function toggleTheme() {
  styleVars.value = styleVars.value ? null : successTheme
}
</script>

<template>
  <app-type>{{ t('componentCall') }}</app-type>
  <var-style-provider :style-vars="styleVars">
    <var-rate v-model="state.score" />
    <var-switch v-model="state.license" />
    <var-button style="margin-top: 10px" type="primary" block @click="toggleTheme">{{ t('toggleTheme') }}</var-button>
  </var-style-provider>
</template>
