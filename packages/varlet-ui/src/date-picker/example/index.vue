<script setup>
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { reactive } from 'vue'
import { t, use } from './locale'

const dates = reactive({
  date: '2021-04',
  date1: '2021-04-08',
  date2: ['', ''],
  date3: ['2021-02-01', '2021-02-15'],
  date4: '2020-11-11',
  date5: '2021-05',
})

watchLang(use)
onThemeChange()

const allowedDates = (date) => {
  const month = date.split('-')[1]
  if (!month) return true

  return parseInt(month, 10) % 2 === 1
}

const allowedDates1 = (date) => parseInt(date.split('-')[2], 10) % 2 === 1
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-date-picker v-model="dates.date1" />

  <app-type>{{ t('monthPicker') }}</app-type>
  <var-date-picker type="month" v-model="dates.date" />

  <app-type>{{ t('multiple') }}</app-type>
  <var-date-picker type="date" v-model="dates.date2" multiple />

  <app-type>{{ t('range') }}</app-type>
  <var-date-picker type="date" v-model="dates.date3" range />

  <app-type>{{ t('dateLimit') }}</app-type>
  <var-date-picker type="date" v-model="dates.date4" min="2020-10-15" max="2021-01-15" :allowed-dates="allowedDates1" />
</template>
