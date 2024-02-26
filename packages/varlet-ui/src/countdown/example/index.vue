<script setup>
import { Snackbar } from '@varlet/ui'
import { AppType, watchLang, onThemeChange } from '@varlet/cli/client'
import { ref } from 'vue'
import { t, use } from './locale'

const countdown = ref(null)
const time = ref(3000)

watchLang(use)
onThemeChange()

function end() {
  Snackbar.info('end!')
}

function change() {
  console.log('change')
}
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-countdown time="108000000" />

  <app-type>{{ t('customFormat') }}</app-type>
  <var-countdown time="108000000" :format="t('format')" />

  <app-type>{{ t('showMillisecond') }}</app-type>
  <var-countdown time="108000000" format="HH : mm : ss : SS" />

  <app-type>{{ t('customStyle') }}</app-type>
  <var-countdown time="108000000">
    <template #default="timeData">
      <span class="countdown-example-block">{{ timeData.hours }}</span>
      <span class="countdown-example-colon">:</span>
      <span class="countdown-example-block">{{ timeData.minutes }}</span>
      <span class="countdown-example-colon">:</span>
      <span class="countdown-example-block">{{ timeData.seconds }}</span>
    </template>
  </var-countdown>

  <app-type>{{ t('manualControl') }}</app-type>
  <var-countdown :time="time" ref="countdown" :auto-start="false" format="ss : SSS" @end="end" @change="change" />
  <var-row justify="space-between" align="center" style="margin-top: 10px">
    <var-button type="primary" @click="$refs.countdown.start()">{{ t('startText') }}</var-button>
    <var-button @click="$refs.countdown.pause()">{{ t('pauseText') }}</var-button>
    <var-button @click="$refs.countdown.reset()">{{ t('resetText') }}</var-button>
  </var-row>
</template>

<style scoped>
.countdown-example-block {
  background: var(--color-primary);
  color: var(--color-on-primary);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 18px;
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
