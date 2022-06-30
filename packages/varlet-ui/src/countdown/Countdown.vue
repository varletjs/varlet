<template>
  <div :class="n()">
    <slot v-bind="timeData">
      {{ showTime }}
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { props } from './props'
import { requestAnimationFrame, cancelAnimationFrame } from '../utils/elements'
import { toNumber } from '@varlet/shared'
import type { Ref } from 'vue'
import type { TimeData } from './props'
import { call, createNamespace } from '../utils/components'

const { n } = createNamespace('countdown')

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
    const timeData: Ref<TimeData> = ref({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    })

    const parseFormat = (format: string, time: TimeData): string => {
      const scannedTimes = Object.values(time)
      const scannedFormats = ['DD', 'HH', 'mm', 'ss']
      const padValues = [24, 60, 60, 1000]

      scannedFormats.forEach((scannedFormat, index) => {
        if (!format.includes(scannedFormat)) {
          scannedTimes[index + 1] += scannedTimes[index] * padValues[index]
        } else {
          format = format.replace(scannedFormat, String(scannedTimes[index]).padStart(2, '0'))
        }
      })

      if (format.includes('S')) {
        const ms = String(scannedTimes[scannedTimes.length - 1]).padStart(3, '0')

        if (format.includes('SSS')) {
          format = format.replace('SSS', ms)
        } else if (format.includes('SS')) {
          format = format.replace('SS', ms.slice(0, 2))
        } else {
          format = format.replace('S', ms.slice(0, 1))
        }
      }

      return format
    }

    const formatTime = (durationTime: number) => {
      const days = Math.floor(durationTime / DAY)
      const hours = Math.floor((durationTime % DAY) / HOUR)
      const minutes = Math.floor((durationTime % HOUR) / MINUTE)
      const seconds = Math.floor((durationTime % MINUTE) / SECOND)
      const milliseconds = Math.floor(durationTime % SECOND)

      const time: TimeData = {
        days,
        hours,
        minutes,
        seconds,
        milliseconds,
      }
      timeData.value = time

      call(props.onChange, timeData.value)
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
        call(onEnd)
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
      n,
      start,
      pause,
      reset,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
</style>
