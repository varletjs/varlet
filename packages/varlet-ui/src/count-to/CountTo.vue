<template>
  <div :class="n()">
    <slot v-bind="numberData"> {{ numberData.value }} </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
import { props, type NumberData } from './props'
import { createNamespace } from '../utils/components'
import { useMotion } from '@varlet/use'
import { floor } from '@varlet/shared'

const { name, n } = createNamespace('count-to')

export default defineComponent({
  name,
  props,
  setup(props) {
    const {
      value: _value,
      state,
      start,
      pause,
      reset: _reset,
    } = useMotion({
      from: Number(props.from),
      to: Number(props.to),
      duration: Number(props.duration),
      timingFunction: props.timingFunction,
      onFinished: props.onFinished,
    })

    const numberData = computed<NumberData>(() => ({
      value: floor(_value.value),
      state: state.value,
    }))

    onMounted(() => {
      if (props.autoStart) {
        start()
      }
    })

    function reset() {
      _reset()
      if (props.autoStart) {
        start()
      }
    }

    return {
      numberData,
      n,
      start,
      pause,
      reset,
    }
  },
})
</script>
