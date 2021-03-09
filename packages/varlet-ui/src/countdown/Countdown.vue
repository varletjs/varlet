<template>
  <div class="var-countdown">
    <slot v-bind="timeData">
      {{ showTime }}
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, watch } from 'vue'
import dayjs, { UnitTypeLongPlural } from 'dayjs'
import duration, { Duration } from 'dayjs/plugin/duration'
import { props } from './props'
import { requestAnimationFrame, cancelAnimationFrame } from '../utils/elements'
import { toNumber } from '../utils/shared'

dayjs.extend(duration)

type Format = {
  DD: Duration['asDays']
  HH: Duration['asHours']
  mm: Duration['asMinutes']
  ss: Duration['asSeconds']
}

type TimeData = Exclude<UnitTypeLongPlural, 'months' | 'years' | 'dates'>

export default defineComponent({
  name: 'VarCountdown',
  props,
  setup(props) {
    const endTime: Ref<number> = ref(0)
    const isStart: Ref<boolean> = ref(false)
    const showTime: Ref<string> = ref('')
    const handle: Ref<number> = ref(0)
    const pauseTime: Ref<number> = ref(0)
    const timeData: Ref<Record<TimeData, number>> = ref({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    })

    const isSameTime = (durationTime: number, newFormat: string): boolean => {
      if (!showTime.value) return true
      return showTime.value === dayjs.duration(durationTime).format(newFormat)
    }

    const replaceValue = (milliseconds: number, fixedLength: number): string => {
      const len = `${milliseconds}`.length
      if (fixedLength === 3) {
        return len === 1 ? `00${milliseconds}` : len === 2 ? `0${milliseconds}` : `${milliseconds}`
      }
      const sliceMilliseconds = `${milliseconds}`.slice(0, 2)
      return len === 1 ? `0${sliceMilliseconds}` : `${sliceMilliseconds}`
    }

    const formatMilliseconds = (milliseconds: number, newFormat: string): string => {
      let time = newFormat
      if (time.includes('SSS')) time = time.replaceAll('SSS', replaceValue(milliseconds, 3))
      if (time.includes('SS')) time = (time || time).replaceAll('SS', replaceValue(milliseconds, 2))
      if (time.includes('S')) time = (time || time).replaceAll('S', `${milliseconds}`.slice(0, 1))
      return time
    }

    const formatTime = (type: keyof Format, durationTime: number) => {
      const duration = dayjs.duration(durationTime)
      const format: Format = {
        DD: duration.asDays,
        HH: duration.asHours,
        mm: duration.asMinutes,
        ss: duration.asSeconds,
      }
      const millis = duration.milliseconds()
      const method = format[type].bind(duration)

      let roundTime = `${Math.floor(method())}`
      roundTime = +roundTime < 10 ? `0${roundTime}` : roundTime

      let newFormat = props.format.replaceAll(type, roundTime)
      newFormat = formatMilliseconds(millis, newFormat)
      timeData.value = {
        days: duration.days(),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds(),
        milliseconds: duration.milliseconds(),
      }
      if (!isSameTime(durationTime, newFormat)) props.onChange?.(timeData.value)

      showTime.value = duration.format(newFormat)
    }

    const countdown = () => {
      const { format, time, onEnd, autoStart } = props
      const now = Date.now()
      if (!endTime.value) endTime.value = now + toNumber(time)
      let durationTime = endTime.value - now
      if (durationTime < 0) durationTime = 0
      pauseTime.value = durationTime

      if (format.includes('DD')) formatTime('DD', durationTime)
      else if (format.includes('HH')) formatTime('HH', durationTime)
      else if (format.includes('mm')) formatTime('mm', durationTime)
      else if (format.includes('ss')) formatTime('ss', durationTime)
      else showTime.value = `${durationTime}`

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
