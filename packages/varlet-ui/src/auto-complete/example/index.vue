<script setup>
import VarAutoComplete from '..'
import { watchLang, AppType } from '@varlet/cli/client'
import { use } from './locale'
import { ref, computed } from 'vue'

watchLang(use)

const value = ref('')
const options = computed(() =>
  ['@qq.com', '@163.com', '@gmail.com'].map((suffix) => {
    const [prefix] = value.value.split('@')
    return {
      label: prefix + suffix,
      value: prefix + suffix,
    }
  })
)
</script>

<template>
  <app-type>Mobile phone example code</app-type>
  <var-auto-complete placeholder="auto" clearable :options="options" v-model="value" />

  <app-type>Mobile phone example code</app-type>
  <var-auto-complete variant="outlined" clearable placeholder="auto" :options="options" v-model="value" />
</template>
