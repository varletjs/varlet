<script setup>
import AppType from '@varlet/cli/site/mobile/components/AppType'
import VarCollapse from '..'
import VarCollapseItem from '../../collapse-item'
import VarButton from '../../button'
import VarSpace from '../../space'
import dark from '../../themes/dark'
import { reactive, ref } from 'vue'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'

const disabled = ref(false)

const values = reactive({
  value: ['1'],
  value1: '',
  value2: [1],
  value3: ['1'],
  value4: ['2'],
})

const changeHandle = (val) => {
  console.log(val)
}

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-collapse v-model="values.value" @change="changeHandle">
    <var-collapse-item :title="pack.title" name="1">{{ pack.text }}</var-collapse-item>
    <var-collapse-item :title="pack.title" name="2">{{ pack.text }}</var-collapse-item>
  </var-collapse>

  <app-type>{{ pack.hideMargin }}</app-type>
  <var-collapse v-model="values.value4" :offset="false">
    <var-collapse-item :title="pack.title" name="1">{{ pack.text }}</var-collapse-item>
    <var-collapse-item :title="pack.title" name="2">{{ pack.text }}</var-collapse-item>
  </var-collapse>

  <app-type>{{ pack.accordionMode }}</app-type>
  <var-collapse v-model="values.value1" accordion :offset="false">
    <var-collapse-item :title="pack.title" name="1">{{ pack.text }}</var-collapse-item>
    <var-collapse-item :title="pack.title" name="2">{{ pack.text }}</var-collapse-item>
  </var-collapse>

  <app-type>{{ pack.disabled }}</app-type>
  <var-space direction="column" :size="[8, 8]">
    <var-button @click="disabled = !disabled">
      {{ disabled ? pack.enable : pack.disabled }}
    </var-button>
    <var-collapse v-model="values.value2">
      <var-collapse-item :title="pack.title" :name="1" :disabled="disabled">{{ pack.text }}</var-collapse-item>
      <var-collapse-item :title="pack.title" :name="2" :disabled="disabled">{{ pack.text }}</var-collapse-item>
    </var-collapse>
  </var-space>

  <app-type>{{ pack.customContent }}</app-type>
  <var-collapse v-model="values.value3">
    <var-collapse-item :title="pack.slotTitle" name="1" icon="account-circle">{{ pack.text }}</var-collapse-item>
    <var-collapse-item name="2">
      <template #title>{{ pack.slotTitle }}</template>
      <template #icon>^_^</template>
      {{ pack.slotContent }}
    </var-collapse-item>
  </var-collapse>
</template>
