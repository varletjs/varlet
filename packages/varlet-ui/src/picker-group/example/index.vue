<script setup>
import VarPickerGroup from '../index'
import { watchLang, AppType } from '@varlet/cli/client'
import { use, pack } from './locale'
import { ref, watch } from 'vue'
import Snackbar from '../../snackbar'
import VarButton from '../../button'

const date = ref('2021-04-08')
const time = ref('11:20')

const onConfirm = () => {
  Snackbar(date.value + ' ' + time.value)
}

const onCancel = () => {
  Snackbar('cancel')
}

const active = ref(0)
const setActive = () => {
  active.value = active.value ? 0 : 1
}

watch(active, () => {})
watchLang(use)
</script>

<template>
  <app-type>基本使用</app-type>
  <var-picker-group :tabs="['选择日期', '选择时间']" @confirm="onConfirm" @cancel="onCancel">
    <var-date-picker v-model="date" />
    <var-time-picker v-model="time" />
  </var-picker-group>

  <app-type>下一步操作</app-type>
  <var-picker-group :tabs="['选择日期', '选择时间']" @confirm="onConfirm" @cancel="onCancel" next-step-text="下一步">
    <var-date-picker v-model="date" />
    <var-time-picker v-model="time" />
  </var-picker-group>

  <app-type>受控模式</app-type>

  <var-button type="primary" style="margin-bottom: 8px" @click="setActive">点击切换tab，当前为{{ active }}</var-button>
  <var-picker-group :tabs="['选择日期', '选择时间']" @confirm="onConfirm" @cancel="onCancel" :active="active">
    <var-date-picker v-model="date" />
    <var-time-picker v-model="time" />
  </var-picker-group>
</template>
