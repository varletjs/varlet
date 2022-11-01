<script setup>
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import VarDatePicker from '..'
import dark from '../../themes/dark'
import { reactive } from 'vue'
import { pack, use } from './locale'

const dates = reactive({
  date: '2021-04',
  date1: '2021-04-08',
  date2: ['', ''],
  date3: ['2021-02-01', '2021-02-15'],
  date4: '2020-11-11',
  date5: '2021-05',
})

const allowedDates = (date) => {
  return parseInt(date.split('-')[1], 10) % 2 === 1
}
const allowedDates1 = (date) => {
  return parseInt(date.split('-')[2], 10) % 2 === 1
}
const change = (date) => {
  console.log(date)
}
const preview = (year, month) => {
  console.log(year, month)
}

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-date-picker v-model="dates.date1" />

  <app-type>{{ pack.monthPicker }}</app-type>
  <var-date-picker type="month" v-model="dates.date" elevation />

  <app-type>{{ pack.multiple }}</app-type>
  <var-date-picker type="date" v-model="dates.date2" multiple />

  <app-type>{{ pack.range }}</app-type>
  <var-date-picker type="date" v-model="dates.date3" range />

  <app-type>{{ pack.dateLimit }}</app-type>
  <var-date-picker type="date" v-model="dates.date4" min="2020-10-15" max="2021-01-15" :allowed-dates="allowedDates1" />

  <app-type>{{ pack.custom }}</app-type>
  <var-date-picker
    type="month"
    :allowed-dates="allowedDates"
    v-model="dates.date5"
    max="2022-01"
    min="2016-07"
    elevation
    header-color="purple"
    color="#7bb872"
    first-day-of-week="1"
    @preview="preview"
    @change="change"
  >
    <template #year="{ year }">
      <span>{{ year }}{{ pack.year }}</span>
    </template>
    <template #month="{ year, month }">
      <span>{{ year }}{{ pack.divider }}{{ month }}{{ pack.month }}</span>
    </template>
  </var-date-picker>
</template>
