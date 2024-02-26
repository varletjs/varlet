<script setup>
import { onThemeChange } from '@varlet/cli/client'

const elevations = Array.from({ length: 25 }).map((_, index) => index)

onThemeChange()
</script>

<template>
  <var-space class="elevation-example-list" :size="['10vmin', 0]" justify="space-between">
    <div
      class="elevation-example-item"
      :class="`var-elevation--${e}`"
      :style="{ background: 'var(--paper-background)' }"
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
  padding: 8vmin 4vmin;
}

.elevation-example-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24vmin;
  height: 24vmin;
  border-radius: 4px;
}
</style>
