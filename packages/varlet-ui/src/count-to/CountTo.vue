<template>
  <div :class="n()">
    <div :style="{ transform: `translateX(${value}px)` }">{{ value }}: {{ state }}</div>
    <button @click="start">Start</button>
    <button @click="pause">Pause</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { props } from './props'
import { createNamespace } from '../utils/components'
import { useMotion } from '@varlet/use'
import { floor } from '@varlet/shared'

const { name, n } = createNamespace('count-to')

export default defineComponent({
  name,
  props,
  setup() {
    const {
      value: _value,
      state,
      start,
      pause,
      reset,
    } = useMotion({
      from: 0,
      to: 200,
      duration: 2000,
    })

    const value = computed(() => floor(_value.value))

    return {
      n,
      start,
      pause,
      reset,
      state,
      value,
    }
  },
})
</script>

<style lang="less">
@import './countTo';
</style>
