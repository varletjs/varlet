<script setup>
import { watchLang, AppType } from '@varlet/cli/client'
import { use, pack } from './locale'
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const date = ref('2023-11-14')
const time = ref('12:34')

const confirm = () => {
  Snackbar(`${date.value} ${time.value}`)
}

watchLang(use)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-date-time-picker @confirm="confirm">
    <var-date-picker v-model="date" />
    <var-time-picker v-model="time" />
  </var-date-time-picker>
</template>
