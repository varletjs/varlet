<script setup>
import Picker from '../index'
import Snackbar from '../../snackbar/index'
import VarSpace from '../../space'
import VarButton from '../../button'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import area from '../../../json/area.json'
import dark from '../../themes/dark'
import { computed, ref } from 'vue'
import { use, pack } from './locale'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'

const VarPicker = Picker.Component

const VarSnackbar = Snackbar.Component

const columns = ref([Array.from({ length: 20 }).map((_, index) => index)])

const columns2 = ref([
  Array.from({ length: 20 }).map((_, index) => index),
  Array.from({ length: 20 }).map((_, index) => index),
  Array.from({ length: 20 }).map((_, index) => index),
])

const columns3 = ref(area)

const months = genCounts(12)

const leapYearFebruaryDates = genCounts(29)

const februaryDates = genCounts(28)

const oddMonthDates = genCounts(31)

const evenMonthDates = genCounts(30)

function isBigMonth(month) {
  return [1, 3, 5, 7, 8, 10, 12].includes(month)
}

function genCounts(length) {
  return Array.from({ length }, (_, index) => index + 1)
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

function genDates(year, month) {
  if (isLeapYear(year) && month === 2) {
    return leapYearFebruaryDates
  }

  if (!isLeapYear(year) && month === 2) {
    return februaryDates
  }

  if (isBigMonth(month)) {
    return oddMonthDates
  }

  return evenMonthDates
}

function genColumns(startYear, endYear) {
  const columns = []
  for (let i = startYear; i < endYear; i++) {
    columns.push({
      text: i,
      children: months.map((month) => {
        return {
          text: month,
          children: genDates(i, month).map((date) => {
            return { text: date }
          }),
        }
      }),
    })
  }

  return columns
}

const columns4 = ref(genColumns(1970, 2100))

const formatter = (text, columnIndex) => {
  if (columnIndex === 0) return `${text}年`
  if (columnIndex === 1) return `${text}月`
  if (columnIndex === 2) return `${text}日`
}

const columns5 = ref([
  [
    { label: '灰烬之灵', id: 1 },
    { label: '风暴之灵', id: 2 },
    { label: '大地之灵', id: 3 },
    { label: '虚空之灵', id: 4 },
  ],
  [
    { label: '灰烬之灵', id: 1 },
    { label: '风暴之灵', id: 2 },
    { label: '大地之灵', id: 3 },
    { label: '虚空之灵', id: 4 },
  ],
  [
    { label: '灰烬之灵', id: 1 },
    { label: '风暴之灵', id: 2 },
    { label: '大地之灵', id: 3 },
    { label: '虚空之灵', id: 4 },
  ],
])

const columnsMap = ref({})

const columns6 = computed(() => {
  return columns5.value.map((column, index) => {
    columnsMap.value[index] = {}
    return column.map((item) => {
      columnsMap.value[index][item.id] = item.label
      return item.id
    })
  })
})

const formatter2 = (text, columnIndex) => {
  return columnsMap.value[columnIndex][text]
}

const change = (texts) => {
  Snackbar({
    content: columns6.value.map((item, index) => texts[index]).join(','),
  })
}

const picker = async () => {
  await Picker({
    columns: columns.value,
  })
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

const picker4 = async () => {
  await Picker({
    cascade: true,
    columns: columns4.value,
    textFormatter: formatter,
  })
}

const picker5 = async () => {
  await Picker({
    onChange: change,
    columns: columns6.value,
    textFormatter: formatter2,
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
    <var-button type="primary" block @click="picker4">{{ pack.textFormatter }}</var-button>
    <var-button type="primary" block @click="picker5">{{ pack.extension }}</var-button>
  </var-space>

  <app-type>{{ pack.componentCall }}</app-type>

  <app-type>{{ pack.singlePicker }}</app-type>
  <var-picker :columns="columns" />

  <app-type>{{ pack.multiplePicker }}</app-type>
  <var-picker :columns="columns2" />

  <app-type>{{ pack.cascadePicker }}</app-type>
  <var-picker cascade :columns="columns3" />

  <app-type>{{ pack.textFormatter }}</app-type>
  <var-picker cascade :columns="columns4" :text-formatter="formatter" />

  <app-type>{{ pack.extension }}</app-type>
  <var-picker :columns="columns6" :text-formatter="formatter2" @change="change" />
</template>
