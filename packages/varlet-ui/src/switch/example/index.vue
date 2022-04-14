<script setup>
import AppType from '@varlet/cli/site/mobile/components/AppType'
import VarSwitch from '..'
import VarSpace from '../../space'
import dark from '../../themes/dark'
import { reactive, toRefs } from 'vue'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'

const values = reactive({
  value: true,
  value1: true,
  value2: true,
  value3: true,
  value4: true,
})

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-space :size="[10, 10]">
    <var-switch v-model="values.value" />
  </var-space>
  <app-type>{{ pack.notAvailable }}</app-type>
  <var-space :size="[10, 10]">
    <var-switch v-model="values.value1" disabled />
    <var-switch v-model="values.value1" readonly />
  </var-space>
  <app-type>{{ pack.customColor }}</app-type>
  <var-space :size="[10, 10]">
    <var-switch v-model="values.value2" :ripple="false" />
    <var-switch v-model="values.value2" color="#ff9f00" close-color="#f5cb90" />
  </var-space>
  <app-type>{{ pack.size }}</app-type>
  <var-space :size="[10, 10]">
    <var-switch v-model="values.value3" size="15" />
    <var-switch v-model="values.value3" />
    <var-switch v-model="values.value3" size="25" />
  </var-space>
  <app-type>{{ pack.loading }}</app-type>
  <var-space :size="[10, 10]">
    <var-switch :model-value="true" loading />
    <var-switch :model-value="true" size="25" loading loading-color="#ff9f00" />
  </var-space>
  <app-type>{{ pack.validateValue }}</app-type>
  <var-space :size="[10, 10]">
    <var-switch v-model="values.value4" :rules="[(v) => v === true || pack.state]" />
  </var-space>
</template>

<style scoped lang="less">
.var-switch {
  margin-right: 30px;
}
</style>
