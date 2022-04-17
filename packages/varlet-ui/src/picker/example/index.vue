<script setup>
import Picker from '../index'
import VarSpace from '../../space'
import VarButton from '../../button'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import area from '../../../json/area.json'
import dark from '../../themes/dark'
import { ref } from 'vue'
import { use, pack } from './locale'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'

const VarPicker = Picker.Component

const columns = ref([Array.from({ length: 20 }).map((_, index) => index)])

const columns2 = ref([
  Array.from({ length: 20 }).map((_, index) => index),
  Array.from({ length: 20 }).map((_, index) => index),
  Array.from({ length: 20 }).map((_, index) => index),
])

const columns3 = ref(area)

const picker = async () => {
  await Picker(columns.value)
}

const picker2 = async () => {
  await Picker(columns2.value)
}

const picker3 = async () => {
  await Picker({
    cascade: true,
    columns: columns3.value,
  })
}

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.functionCall }}</app-type>
  <var-space direction="column" :size="[10, 10]">
    <var-button type="primary" block @click="picker">{{ pack.singlePicker }}</var-button>
    <var-button type="primary" block @click="picker2">{{ pack.multiplePicker }}</var-button>
    <var-button type="primary" block @click="picker3">{{ pack.cascadePicker }}</var-button>
  </var-space>

  <app-type>{{ pack.componentCall }}</app-type>

  <app-type>{{ pack.singlePicker }}</app-type>
  <var-picker :columns="columns" />

  <app-type>{{ pack.multiplePicker }}</app-type>
  <var-picker :columns="columns2" />

  <app-type>{{ pack.cascadePicker }}</app-type>
  <var-picker cascade :columns="columns3" />
</template>
