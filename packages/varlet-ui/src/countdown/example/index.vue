<script setup>
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import VarCountdown from '..'
import Snackbar from '../../snackbar'
import VarButton from '../../button'
import VarRow from '../../row'
import dark from '../../themes/dark'
import { ref } from 'vue'
import { pack, use } from './locale'

const countdown = ref(null)
const time = ref(3000)

const end = () => {
  Snackbar.info('end!')
}

const change = () => {
  console.log('change')
}

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-countdown time="108000000" />

  <app-type>{{ pack.customFormat }}</app-type>
  <var-countdown time="108000000" :format="pack.format" />

  <app-type>{{ pack.showMillisecond }}</app-type>
  <var-countdown time="108000000" format="HH : mm : ss : SS" />

  <app-type>{{ pack.customStyle }}</app-type>
  <var-countdown time="108000000">
    <template #default="timeData">
      <span class="countdown-example-block">{{ timeData.hours }}</span>
      <span class="countdown-example-colon">:</span>
      <span class="countdown-example-block">{{ timeData.minutes }}</span>
      <span class="countdown-example-colon">:</span>
      <span class="countdown-example-block">{{ timeData.seconds }}</span>
    </template>
  </var-countdown>

  <app-type>{{ pack.manualControl }}</app-type>
  <var-countdown :time="time" ref="countdown" :auto-start="false" format="ss : SSS" @end="end" @change="change" />
  <var-row justify="space-between" align="center" style="margin-top: 10px">
    <var-button type="primary" @click="$refs.countdown.start()">{{ pack.startText }}</var-button>
    <var-button @click="$refs.countdown.pause()">{{ pack.pauseText }}</var-button>
    <var-button @click="$refs.countdown.reset()">{{ pack.resetText }}</var-button>
  </var-row>
</template>

<style scoped>
.countdown-example-block {
  background: #ff9f00;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.countdown-example-colon {
  margin: 0 5px;
  font-size: 18px;
  font-weight: 500;
}
</style>
