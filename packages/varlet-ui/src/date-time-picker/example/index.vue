<script setup>
import VarDateTimePicker from '../index'
import { watchLang, AppType } from '@varlet/cli/client'
import { use, pack } from './locale'
import { ref } from 'vue'

const date = ref('2021-04-08 12:24')
const cancel = () => {
  console.log('cancel')
}
const confirm = (data) => {
  console.log('confirm', data)
}

watchLang(use)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-date-time-picker v-model="date" @cancel="cancel" @confirm="confirm" />
</template>
