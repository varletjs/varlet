<script setup>
import VarAutoComplete from '..'
import { watchLang, AppType } from '@varlet/cli/client'
import { use } from './locale'
import { ref, watch } from 'vue'

watchLang(use)

const options = ref([
  { label: 'Option1', value: 'Option1' },
  { label: 'Option2', value: 'Option2' },
  { label: 'Option3', value: 'Option3' },
  { label: 'Option4', value: 'Option4' },
  { label: 'Option5', value: 'Option5' },
  { label: 'Option6', value: 'Option6' },
])

const selectedAutoCompleted = ref('Option3')

watch(
  () => selectedAutoCompleted.value,
  (value) => {
    console.log('selectedAutoCompleted', value)
  }
)
</script>

<template>
  <app-type>Mobile phone example code</app-type>
  <var-auto-complete :options="options" v-model="selectedAutoCompleted" />
</template>
