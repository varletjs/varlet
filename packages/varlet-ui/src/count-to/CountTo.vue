<template>
  <div :class="n()">
    <slot :value="value"> {{ value }} </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, watch } from 'vue'
import { props } from './props'
import { createNamespace } from '../utils/components'
import { useMotion } from '@varlet/use'
import { call, floor, toNumber } from '@varlet/shared'

const { name, n } = createNamespace('count-to')

export default defineComponent({
  name,
  props,
  setup(props) {
    const {
      value: _value,
      reset: _reset,
      // expose
      start,
      // expose
      pause,
    } = useMotion({
      from: () => toNumber(props.from),
      to: () => toNumber(props.to),
      duration: () => toNumber(props.duration),
      timingFunction: props.timingFunction,
      onFinished() {
        call(props.onEnd)
      },
    })

    const value = computed(() => floor(_value.value, toNumber(props.precision)))

    watch(() => [props.from, props.to, props.duration], reset)
    onMounted(reset)

    // expose
    function reset() {
      _reset()
      if (props.autoStart) {
        start()
      }
    }

    return {
      value,
      n,
      start,
      pause,
      reset,
      toNumber,
      floor,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './countTo';
</style>
