<script setup>
import dark from '../../themes/dark'
import { ref } from 'vue'
import VarSpace from '../../space'
import { watchDarkMode } from '@varlet/cli/site/utils'

const elevations = Array.from({ length: 25 }).map((_, index) => index)
const background = ref(dark)

watchDarkMode(dark, (themes) => {
  background.value = themes === 'darkThemes' ? '#303030' : '#fff'
})
</script>

<template>
  <var-space class="elevation-demo" justify="space-between">
    <div
      class="elevation-demo__item"
      :class="`var-elevation--${e}`"
      :style="{ background }"
      v-for="e in elevations"
      :key="e"
    >
      {{ e }}
    </div>
  </var-space>
</template>

<style lang="less">
@import '../../styles/elevation';
</style>

<style>
.elevation-demo .elevation-demo__item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25vw;
  height: 25vw;
  color: var(--site-config-color-sub-text);
  transition: 0.25s background-color;
}
</style>
