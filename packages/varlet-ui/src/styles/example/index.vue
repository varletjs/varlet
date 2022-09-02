<script setup>
import dark from '../../themes/dark'
import { ref } from 'vue'
import VarSpace from '../../space'
import { watchDarkMode } from '@varlet/cli/site/utils'

const elevations = Array.from({ length: 25 }).map((_, index) => index)
const background = ref(dark)

watchDarkMode(dark, (theme) => {
  background.value = theme === 'darkTheme' ? '#303030' : '#fff'
})
</script>

<template>
  <var-space class="elevation-example-list" :size="['5.5vw', '5.5vw']">
    <div
      class="elevation-example-item"
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
.elevation-example-list {
  margin-top: 8px !important;
}

.elevation-example-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25vw;
  height: 25vw;
  transition: 0.25s background-color;
}
</style>
