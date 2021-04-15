<template>
  <div class="var-countdown">
    <slot v-bind="timeData">
      {{ showTime }}
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, watch } from 'vue'
import { props } from './props'
import { requestAnimationFrame, cancelAnimationFrame } from '../utils/elements'
import { toNumber, parseFormat, Time } from '../utils/shared'

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

export default defineComponent({
  name: 'VarCountdown',
  props,
  setup(props) {
    const endTime: Ref<number> = ref(0)
    const isStart: Ref<boolean> = ref(false)
    const showTime: Ref<string> = ref('')
    const handle: Ref<number> = ref(0)
    const pauseTime: Ref<number> = ref(0)
    const timeData: Ref<Partial<Record<keyof Time, number>>> = ref({})

    const formatTime = (durationTime: number) => {
      const days = Math.floor(durationTime / DAY)
      const hours = Math.floor((durationTime % DAY) / HOUR)
      const minutes = Math.floor((durationTime % HOUR) / MINUTE)
      const seconds = Math.floor((durationTime % MINUTE) / SECOND)
      const milliseconds = Math.floor(durationTime % SECOND)

      const time = {
        days,
        hours,
        minutes,
        seconds,
        milliseconds,
      }
      timeData.value = time

      props.onChange?.(timeData.value)
      showTime.value = parseFormat(props.format, time)
    }

    const countdown = () => {
      const { time, onEnd, autoStart } = props
      const now = Date.now()

      if (!endTime.value) endTime.value = now + toNumber(time)

      let durationTime = endTime.value - now
      if (durationTime < 0) durationTime = 0
      pauseTime.value = durationTime

      formatTime(durationTime)

      if (durationTime === 0) {
        onEnd?.()
        return
      }

      if (autoStart || isStart.value) handle.value = requestAnimationFrame(countdown)
    }

    // expose
    const start = () => {
      if (isStart.value) return

      isStart.value = true
      endTime.value = Date.now() + (pauseTime.value || toNumber(props.time))
      countdown()
    }

    // expose
    const pause = () => {
      isStart.value = false
    }

    // expose
    const reset = () => {
      endTime.value = 0
      isStart.value = false
      cancelAnimationFrame(handle.value)
      countdown()
    }

    watch(
      () => props.time,
      () => reset(),
      { immediate: true }
    )

    return {
      showTime,
      timeData,
      start,
      pause,
      reset,
    }
  },
})
</script>
