<script setup>
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { reactive, ref } from 'vue'
import { t, use } from './locale'

const dates = reactive({
  date: '2021-04',
  date1: '2021-04-08',
  date2: [],
  date3: ['2021-02-01', '2021-02-15'],
  date9: ['2021-02', '2021-05'],
  date10: ['2021', '2025'],
  date4: '2020-11-11',
  date5: '2021-05',
  date6: '2021',
  date7: '2021-04-08',
  date8: '2021-04-08',
})

const datePicker = ref()

watchLang(use)
onThemeChange()

const allowedDates = (date) => parseInt(date.split('-')[2], 10) % 2 === 1
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-date-picker v-model="dates.date1" />

  <app-type>{{ t('multiple') }}</app-type>
  <var-date-picker v-model="dates.date2" type="date" multiple />

  <app-type>{{ t('range') }}</app-type>
  <var-date-picker v-model="dates.date3" type="date" range />

  <app-type>{{ t('monthRange') }}</app-type>
  <var-date-picker v-model="dates.date9" type="month" range />

  <app-type>{{ t('yearRange') }}</app-type>
  <var-date-picker v-model="dates.date10" type="year" range />

  <app-type>{{ t('dateLimit') }}</app-type>
  <var-date-picker v-model="dates.date4" type="date" min="2020-10-15" max="2021-01-15" :allowed-dates="allowedDates" />

  <app-type>{{ t('hideTitle') }}</app-type>
  <var-date-picker v-model="dates.date7" :show-title="false" />

  <app-type>{{ t('actionsSlot') }}</app-type>
  <var-date-picker ref="datePicker" v-model="dates.date8">
    <template #actions>
      <var-button tonal type="primary" @click="datePicker.resetPreview()">{{ t('resetPreview') }}</var-button>
    </template>
  </var-date-picker>

  <app-type>{{ t('monthPicker') }}</app-type>
  <var-date-picker v-model="dates.date" type="month" />

  <app-type>{{ t('yearPicker') }}</app-type>
  <var-date-picker v-model="dates.date6" type="year" />
</template>
