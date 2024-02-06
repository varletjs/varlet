<script setup>
import area from '../../../json/area.json'
import { Snackbar, Picker } from '@varlet/ui'
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { ref } from 'vue'
import { use, t } from './locale'

const VarPicker = Picker.Component

const columns = ref([[{ text: 'A' }, { text: 'B' }, { text: 'C' }, { text: 'D' }, { text: 'E' }]])
const columns2 = ref([
  [{ text: 'A' }, { text: 'B' }, { text: 'C' }, { text: 'D' }, { text: 'E' }],
  [{ text: 'A' }, { text: 'B' }, { text: 'C' }, { text: 'D' }, { text: 'E' }],
  [{ text: 'A' }, { text: 'B' }, { text: 'C' }, { text: 'D' }, { text: 'E' }],
])
const columns3 = ref([
  {
    text: '四川省',
    children: [
      {
        text: '成都市',
        children: [
          {
            text: '温江区',
          },
          {
            text: '青羊区',
          },
        ],
      },
    ],
  },
  {
    text: '江苏省',
    children: [
      {
        text: '无锡市',
        children: [
          {
            text: '新吴区',
          },
          {
            text: '滨湖区',
          },
        ],
      },
    ],
  },
])
const columns4 = ref(area)
const columns5 = ref([
  [
    { text: 'A', value: 1 },
    { text: 'B', value: 2 },
    { text: 'C', value: 3 },
    { text: 'D', value: 4 },
  ],
  [
    { text: 'A', value: 1 },
    { text: 'B', value: 2 },
    { text: 'C', value: 3 },
    { text: 'D', value: 4 },
  ],
  [
    { text: 'A', value: 1 },
    { text: 'B', value: 2 },
    { text: 'C', value: 3 },
    { text: 'D', value: 4 },
  ],
])

const values = ref(['A', 'B', 'C'])

watchLang(use)
onThemeChange()

async function picker() {
  await Picker({
    columns: columns.value,
    onChange(values, indexes) {
      Snackbar(`values: ${values.toString()}, indexes: ${indexes.toString()}`)
    },
  })
}

async function picker2() {
  await Picker({
    columns: columns2.value,
    onChange(values, indexes) {
      Snackbar(`values: ${values.toString()}, indexes: ${indexes.toString()}`)
    },
  })
}

async function picker3() {
  await Picker({
    cascade: true,
    columns: columns3.value,
    onChange(values, indexes) {
      Snackbar(`values: ${values.toString()}, indexes: ${indexes.toString()}`)
    },
  })
}

async function picker4() {
  await Picker({
    columns: columns4.value,
    cascade: true,
    onChange(values, indexes) {
      Snackbar(`values: ${values.toString()}, indexes: ${indexes.toString()}`)
    },
  })
}

async function picker5() {
  await Picker({
    columns: columns5.value,
    onChange(values, indexes) {
      Snackbar(`values: ${values.toString()}, indexes: ${indexes.toString()}`)
    },
  })
}

function handleChange(values, indexes) {
  Snackbar(`values: ${values.toString()}, indexes: ${indexes.toString()}`)
}
</script>

<template>
  <app-type>{{ t('functionCall') }}</app-type>
  <var-space direction="column" :size="['3vmin', '4vmin']">
    <var-button type="primary" block @click="picker">{{ t('singlePicker') }}</var-button>
    <var-button type="primary" block @click="picker2">{{ t('multiplePicker') }}</var-button>
    <var-button type="primary" block @click="picker3">{{ t('cascadePicker') }}</var-button>
    <var-button type="primary" block @click="picker4">{{ t('areaPicker') }}</var-button>
    <var-button type="primary" block @click="picker5">{{ t('apping') }}</var-button>
  </var-space>

  <app-type>{{ t('componentCall') }}</app-type>

  <app-type>{{ t('singlePicker') }}</app-type>
  <var-picker :columns="columns" @change="handleChange" />

  <app-type>{{ t('multiplePicker') }}</app-type>
  <var-picker :columns="columns2" @change="handleChange" />

  <app-type>{{ t('cascadePicker') }}</app-type>
  <var-picker :columns="columns3" cascade @change="handleChange" />

  <app-type>{{ t('areaPicker') }}</app-type>
  <var-picker :columns="columns4" cascade @change="handleChange" />

  <app-type>{{ t('apping') }}</app-type>
  <var-picker :columns="columns5" @change="handleChange" />

  <app-type>{{ t('twoWayBinding') }}</app-type>
  <var-space direction="column" size="large">
    <var-button type="primary" @click="values = ['A', 'B', 'C']">values: {{ values }} {{ t('reset') }}</var-button>
    <var-picker :columns="columns2" v-model="values" @change="handleChange" />
  </var-space>
</template>
