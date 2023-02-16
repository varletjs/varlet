<script setup>
import VarColorPicker from '../index'
import VarSelect from '../../select'
import VarOption from '../../option'
import { watchLang, AppType } from '@varlet/cli/client'
import { use, pack } from './locale'
import { ref } from 'vue'

watchLang(use)
const color = ref('#BFFAFF')
const value = ref('')
const modes = ['rgba', 'hsla', 'hex']
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-color-picker />

  <app-type>{{ pack.swatches }}</app-type>
  <var-color-picker swatches-layout />

  <app-type>{{ pack.modes }}</app-type>
  <var-color-picker />
  <var-select placeholder="请选择一个Mode" v-model="value">
    <var-option v-for="item in modes" :key="item" :label="item" />
  </var-select>

  <app-type>{{ pack.disabled }}</app-type>
  <var-color-picker disabled />

  <app-type>{{ pack.model }}</app-type>
  <var-color-picker v-model="color" />
</template>
