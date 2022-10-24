<script setup>
import { reactive } from 'vue'
import { AppType , watchLang, watchDarkMode } from '@varlet/cli/client'
import VarTimePicker from '..'
import dark from '../../themes/dark'
import { pack, use } from './locale'

const dates = reactive({
  date: '11:20',
  date1: '15:10',
  date2: '07:10',
  date3: '07:10:12',
  date4: '05:10',
  date5: '17:36:22',
})

const allowedTime = {
  hours: (hour) => hour % 2 === 0,
  minutes: (minute) => minute % 15 !== 0,
  seconds: (second) => second % 2 !== 0,
}

const change = (time) => {
  console.log(time)
}

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-time-picker v-model="dates.date" />

  <app-type>{{ pack.hour24 }}</app-type>
  <var-time-picker v-model="dates.date1" format="24hr" elevation />

  <app-type>{{ pack.showSecond }}</app-type>
  <var-time-picker v-model="dates.date5" format="24hr" use-seconds />

  <app-type>{{ pack.readonly }}</app-type>
  <var-time-picker v-model="dates.date2" readonly elevation />

  <app-type>{{ pack.timeLimit }}</app-type>
  <var-time-picker
    v-model="dates.date3"
    format="24hr"
    use-seconds
    min="2:28:38"
    max="19:40:22"
    :allowed-time="allowedTime"
  />

  <app-type>{{ pack.custom }}</app-type>
  <var-time-picker
    v-model="dates.date4"
    elevation
    header-color="purple"
    color="#7bb872"
    min="2:28:38"
    max="19:40:22"
    @change="change"
  />
</template>
