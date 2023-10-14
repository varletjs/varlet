<script setup>
import VarPickerGroup from '../index'
import { watchLang, AppType } from '@varlet/cli/client'
import { use, pack } from './locale'
import { ref } from 'vue'
import Snackbar from '../../snackbar'

const date = ref('2021-04-08')
const time = ref('11:20')

const onConfirm = () => {
  Snackbar(date.value + ' ' + time.value)
}

const onCancel = () => {
  Snackbar('cancel')
}

watchLang(use)
</script>

<template>
  <app-type>基本使用</app-type>
  <var-picker-group :tabs="['选择日期', '选择时间']" @confirm="onConfirm" @cancel="onCancel">
    <var-date-picker v-model="date" />
    <var-time-picker v-model="time" />
  </var-picker-group>
</template>
