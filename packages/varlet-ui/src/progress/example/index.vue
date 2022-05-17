<script setup>
import VarProgress from '..'
import VarSpace from '../../space'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import dark from '../../themes/dark'
import { ref, onMounted, onUnmounted } from 'vue'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'

const value = ref(0)
const interval = ref(0)

onMounted(() => {
  interval.value = window.setInterval(() => {
    if (value.value >= 100) value.value = 0
    else value.value += 20
  }, 1000)
})

watchLang(use)
watchDarkMode(dark)

onUnmounted(() => {
  window.clearInterval(interval.value)
})
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-space direction="column" :size="['3vh', '3vh']">
    <var-progress :value="20" :track="false" />
    <var-progress :value="value" :track="false" />
    <var-progress :value="100" :track="false" />
  </var-space>

  <app-type>{{ pack.showLabel }}</app-type>
  <var-space direction="column" :size="['3vh', '3vh']">
    <var-progress :value="30" label />
    <var-progress :value="value" label />
    <var-progress :value="100" label>success</var-progress>
  </var-space>

  <app-type>{{ pack.style }}</app-type>
  <var-space direction="column" :size="['3vh', '3vh']">
    <var-progress :value="30" line-width="8" color="#ff9f00" />
    <var-progress :value="60" line-width="8" color="#ff9f00" track-color="#f5cb90" />
    <var-progress :value="80" ripple line-width="8" color="#ff9f00" track-color="#f5cb90" />
  </var-space>

  <app-type>{{ pack.circle }}</app-type>
  <var-space :size="['8vw', '8vw']">
    <var-progress mode="circle" :value="30" line-width="5" size="18vw" />
    <var-progress mode="circle" label :value="value" line-width="5" size="18vw" />
    <var-progress mode="circle" label :value="100" line-width="5" size="18vw" />
  </var-space>

  <app-type>{{ pack.hideTrack }}</app-type>
  <var-progress mode="circle" :value="50" size="18vw" :track="false" />
</template>
