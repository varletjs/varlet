<script setup>
import { Themes } from '@varlet/ui'
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import { reactive, ref } from 'vue'
import { pack, use } from './locale'

const disabled = ref(false)
const divider = ref(false)
const collapseRef = ref(null)

const values = reactive({
  value: ['1'],
  value1: '',
  value2: [1],
  value3: ['1'],
  value4: ['2'],
  value5: [],
  value6: ['2', '4'],
})

function handleChange(val) {
  console.log(val)
}

function toggleAll() {
  collapseRef.value.toggleAll({ expand: 'inverse' })
}
function toggleAllSkipDisabled() {
  collapseRef.value.toggleAll({ expand: 'inverse', skipDisabled: true })
}

function openAll() {
  collapseRef.value.toggleAll({ expand: true })
}
function openAllSkipDisabled() {
  collapseRef.value.toggleAll({ expand: true, skipDisabled: true })
}

function expandAll() {
  collapseRef.value.toggleAll({ expand: false })
}
function expandAllSkipDisabled() {
  collapseRef.value.toggleAll({ expand: false, skipDisabled: true })
}

watchLang(use)
watchDarkMode(Themes.dark)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-collapse v-model="values.value" @change="handleChange">
    <var-collapse-item :title="pack.title" name="1">{{ pack.text }}</var-collapse-item>
    <var-collapse-item :title="pack.title" name="2">{{ pack.text }}</var-collapse-item>
  </var-collapse>

  <app-type>{{ pack.hideMargin }}</app-type>
  <var-collapse v-model="values.value4" :offset="false">
    <var-collapse-item :title="pack.title" name="1">{{ pack.text }}</var-collapse-item>
    <var-collapse-item :title="pack.title" name="2">{{ pack.text }}</var-collapse-item>
  </var-collapse>

  <app-type>{{ pack.controlledDivider }}</app-type>
  <var-button @click="divider = !divider" style="margin-bottom: 8px">{{
    divider ? pack.hideDivider : pack.showDivider
  }}</var-button>
  <var-collapse v-model="values.value5" :divider="divider">
    <var-collapse-item :title="pack.title" name="1">{{ pack.text }}</var-collapse-item>
    <var-collapse-item :title="pack.title" name="2">{{ pack.text }}</var-collapse-item>
    <var-collapse-item :title="pack.title" name="3">{{ pack.text }}</var-collapse-item>
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

  <app-type>{{ pack.toggleAll }}</app-type>
  <var-button @click="toggleAll" style="margin: 8px">{{ pack.toggleAll }}</var-button>
  <var-button @click="toggleAllSkipDisabled" style="margin: 8px">{{ pack.toggleAllSkipDisabled }}</var-button>
  <var-button @click="openAll" style="margin: 8px">{{ pack.openAll }}</var-button>
  <var-button @click="openAllSkipDisabled" style="margin: 8px">{{ pack.openAllSkipDisabled }}</var-button>
  <var-button @click="expandAll" style="margin: 8px">{{ pack.expandAll }}</var-button>
  <var-button @click="expandAllSkipDisabled" style="margin: 8px">{{ pack.expandAllSkipDisabled }}</var-button>
  <var-collapse v-model="values.value6" ref="collapseRef">
    <var-collapse-item :title="pack.slotTitle" name="1">{{ pack.text }}</var-collapse-item>
    <var-collapse-item :title="pack.slotTitle" name="2"> {{ pack.text }}</var-collapse-item>
    <var-collapse-item :title="pack.slotTitle" disabled name="3"> {{ pack.text }}</var-collapse-item>
    <var-collapse-item :title="pack.slotTitle" disabled name="4"> {{ pack.text }}</var-collapse-item>
  </var-collapse>
</template>
