<script setup>
import { reactive, ref } from 'vue'
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { t, use } from './locale'

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

watchLang(use)
onThemeChange()

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

function closeAll() {
  collapseRef.value.toggleAll({ expand: false })
}

function closeAllSkipDisabled() {
  collapseRef.value.toggleAll({ expand: false, skipDisabled: true })
}
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-collapse v-model="values.value" @change="handleChange">
    <var-collapse-item :title="t('title')" name="1">{{ t('text') }}</var-collapse-item>
    <var-collapse-item :title="t('title')" name="2">{{ t('text') }}</var-collapse-item>
  </var-collapse>

  <app-type>{{ t('hideMargin') }}</app-type>
  <var-collapse v-model="values.value4" :offset="false">
    <var-collapse-item :title="t('title')" name="1">{{ t('text') }}</var-collapse-item>
    <var-collapse-item :title="t('title')" name="2">{{ t('text') }}</var-collapse-item>
  </var-collapse>

  <app-type>{{ t('controlledDivider') }}</app-type>
  <var-button style="margin-bottom: 8px" @click="divider = !divider">{{
    divider ? t('hideDivider') : t('showDivider')
  }}</var-button>
  <var-collapse v-model="values.value5" :divider="divider">
    <var-collapse-item :title="t('title')" name="1">{{ t('text') }}</var-collapse-item>
    <var-collapse-item :title="t('title')" name="2">{{ t('text') }}</var-collapse-item>
    <var-collapse-item :title="t('title')" name="3">{{ t('text') }}</var-collapse-item>
  </var-collapse>

  <app-type>{{ t('accordionMode') }}</app-type>
  <var-collapse v-model="values.value1" accordion :offset="false">
    <var-collapse-item :title="t('title')" name="1">{{ t('text') }}</var-collapse-item>
    <var-collapse-item :title="t('title')" name="2">{{ t('text') }}</var-collapse-item>
  </var-collapse>

  <app-type>{{ t('disabled') }}</app-type>
  <var-space direction="column" :size="[8, 8]">
    <var-button @click="disabled = !disabled">
      {{ disabled ? t('enable') : t('disabled') }}
    </var-button>
    <var-collapse v-model="values.value2">
      <var-collapse-item :title="t('title')" :name="1" :disabled="disabled">{{ t('text') }}</var-collapse-item>
      <var-collapse-item :title="t('title')" :name="2" :disabled="disabled">{{ t('text') }}</var-collapse-item>
    </var-collapse>
  </var-space>

  <app-type>{{ t('customContent') }}</app-type>
  <var-collapse v-model="values.value3">
    <var-collapse-item :title="t('slotTitle')" name="1" icon="account-circle">{{ t('text') }}</var-collapse-item>
    <var-collapse-item name="2">
      <template #title>{{ t('slotTitle') }}</template>
      <template #icon>^_^</template>
      {{ t('slotContent') }}
    </var-collapse-item>
  </var-collapse>

  <app-type>{{ t('toggleAll') }}</app-type>
  <var-button style="margin: 8px" @click="toggleAll">{{ t('toggleAll') }}</var-button>
  <var-button style="margin: 8px" @click="toggleAllSkipDisabled">{{ t('toggleAllSkipDisabled') }}</var-button>
  <var-button style="margin: 8px" @click="openAll">{{ t('openAll') }}</var-button>
  <var-button style="margin: 8px" @click="openAllSkipDisabled">{{ t('openAllSkipDisabled') }}</var-button>
  <var-button style="margin: 8px" @click="closeAll">{{ t('closeAll') }}</var-button>
  <var-button style="margin: 8px 8px 16px 8px" @click="closeAllSkipDisabled">{{
    t('closeAllSkipDisabled')
  }}</var-button>
  <var-collapse ref="collapseRef" v-model="values.value6" style="margin-bottom: 40px">
    <var-collapse-item :title="t('slotTitle')" name="1">{{ t('text') }}</var-collapse-item>
    <var-collapse-item :title="t('slotTitle')" name="2"> {{ t('text') }}</var-collapse-item>
    <var-collapse-item :title="t('slotTitle')" disabled name="3"> {{ t('text') }}</var-collapse-item>
    <var-collapse-item :title="t('slotTitle')" disabled name="4"> {{ t('text') }}</var-collapse-item>
  </var-collapse>
</template>
