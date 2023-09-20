<script setup>
import VarProgress from '..'
import VarSpace from '../../space'
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import dark from '../../themes/dark'
import { ref, onMounted, onUnmounted } from 'vue'
import { pack, use } from './locale'

const value = ref(0)
let timer

watchLang(use)
watchDarkMode(dark)

onMounted(() => {
  timer = window.setInterval(() => {
    if (value.value >= 100) {
      value.value = 0
      return
    }

    value.value += 20
  }, 1000)
})

onUnmounted(() => {
  window.clearInterval(timer)
})
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-space direction="column" :size="['3vh', '3vh']">
    <var-progress :value="20" />
    <var-progress :value="value" :track="false" label />
    <var-progress :value="100" label>success</var-progress>
  </var-space>

  <app-type>{{ pack.style }}</app-type>
  <var-space direction="column" :size="['3vh', '3vh']">
    <var-progress :value="40" color="linear-gradient(131.53deg, #3fecff 0%, #6149f6 100%)" />
    <var-progress type="info" :value="40" />
    <var-progress type="success" :value="60" />
    <var-progress value="80" line-width="8" color="#ff9f00" track-color="#f5cb90" />
  </var-space>

  <app-type>{{ pack.circle }}</app-type>
  <var-space :size="['8vmin', '8vmin']">
    <var-progress
      mode="circle"
      size="18vmin"
      :value="100"
      :color="{
        '0%': '#3fecff',
        '100%': '#6149f6',
      }"
    />
    <var-progress mode="circle" :value="75" size="18vmin" :track="false" />
    <var-progress mode="circle" label :value="value" line-width="5" size="18vmin" />
    <var-progress mode="circle" type="success" label :value="100" line-width="5" size="18vmin"> success </var-progress>
  </var-space>

  <app-type>{{ pack.indeterminateProgress }}</app-type>
  <var-space direction="column" :size="['3vh', '3vh']">
    <var-progress indeterminate />
    <var-progress indeterminate type="info" />

    <var-space justify="space-between">
      <var-progress mode="circle" indeterminate size="18vmin" />
      <var-progress mode="circle" type="info" indeterminate size="18vmin" />
    </var-space>
  </var-space>
</template>
