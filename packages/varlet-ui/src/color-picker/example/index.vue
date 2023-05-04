<script setup>
import VarColorPicker from '../index'
import VarSelect from '../../select'
import VarInput from '../../input'
import VarOption from '../../option'
import dark from '../../themes/dark'
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import { use, pack } from './locale'
import { ref } from 'vue'

watchLang(use)
watchDarkMode(dark)
const color = ref('#AAFFBB')
const value = ref('hex')
const modes = ['rgba', 'hsla', 'hex']
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-color-picker />

  <app-type>{{ pack.swatches }}</app-type>
  <var-color-picker swatches-layout />

  <app-type>{{ pack.modes }}</app-type>
  <var-select :placeholder="pack.placeholder" v-model="value">
    <var-option v-for="item in modes" :key="item" :label="item" />
  </var-select>
  <var-color-picker :mode="value" />

  <app-type>{{ pack.disabled }}</app-type>
  <var-color-picker disabled />

  <app-type>{{ pack.model }}</app-type>
  <var-input v-model="color" style="margin-bottom: 12px" />
  <var-color-picker v-model="color" />
</template>
