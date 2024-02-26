<script setup>
import { reactive } from 'vue'
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { t, use } from './locale'

const dates = reactive({
  date: '11:20',
  date1: '15:10',
  date2: '07:10',
  date3: '07:10:12',
  date4: '05:10',
  date5: '17:36:22',
  date6: '17:36:22',
})

const allowedTime = {
  hours: (hour) => hour % 2 === 0,
  minutes: (minute) => minute % 15 !== 0,
  seconds: (second) => second % 2 !== 0,
}

watchLang(use)
onThemeChange()
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-time-picker v-model="dates.date" />

  <app-type>{{ t('hour24') }}</app-type>
  <var-time-picker v-model="dates.date1" format="24hr" />

  <app-type>{{ t('showSecond') }}</app-type>
  <var-time-picker v-model="dates.date5" format="24hr" use-seconds />

  <app-type>{{ t('readonly') }}</app-type>
  <var-time-picker v-model="dates.date2" readonly />

  <app-type>{{ t('timeLimit') }}</app-type>
  <var-time-picker
    v-model="dates.date3"
    format="24hr"
    use-seconds
    min="2:28:38"
    max="19:40:22"
    :allowed-time="allowedTime"
  />

  <app-type>{{ t('actions') }}</app-type>
  <var-time-picker v-model="dates.date6">
    <template #actions>
      <var-space size="small">
        <var-button type="primary" text>{{ t('action') }}</var-button>
        <var-button type="primary" text>{{ t('action') }}</var-button>
      </var-space>
    </template>
  </var-time-picker>
</template>
