<template>
  <div class="var-time-picker" ref="picker" :class="[shadow ? 'var-elevation--2' : null]">
    <div class="var-time-picker-title" :style="{ background: headerColor || color }">
      <div class="var-time-picker-title__time">
        <div
          class="var-time-picker-title__btn"
          :class="type === 'hour' ? 'var-time-picker-title__btn--active' : null"
          @click="checkPanel('hour')"
        >
          {{ time.hour }}
        </div>
        <span>:</span>
        <div
          class="var-time-picker-title__btn"
          :class="type === 'minute' ? 'var-time-picker-title__btn--active' : null"
          @click="checkPanel('minute')"
        >
          {{ time.minute }}
        </div>
        <span v-if="useSeconds">:</span>
        <div
          v-if="useSeconds"
          class="var-time-picker-title__btn"
          :class="type === 'second' ? 'var-time-picker-title__btn--active' : null"
          @click="checkPanel('second')"
        >
          {{ time.second }}
        </div>
      </div>
      <div class="var-time-picker-title__ampm" v-if="format === 'ampm'">
        <div
          class="var-time-picker-title__btn"
          :class="ampm === 'am' ? 'var-time-picker-title__btn--active' : null"
          @click="checkAmpm('am')"
        >
          AM
        </div>
        <div
          class="var-time-picker-title__btn"
          :class="ampm === 'pm' ? 'var-time-picker-title__btn--active' : null"
          @click="checkAmpm('pm')"
        >
          PM
        </div>
      </div>
    </div>
    <div class="var-time-picker-body">
      <div
        class="var-time-picker-clock__container"
        @touchstart="moveHand"
        @touchmove="moveHand"
        @touchend="end"
        ref="container"
      >
        <transition name="var-time-picker-panel-fade">
          <clock
            :key="type"
            ref="inner"
            :type="type"
            :ampm="ampm"
            :color="color"
            :is-inner="isInner"
            :format="format"
            :allowed-time="allowedTime"
            :rad="getRad"
            :time="time"
            :prevent-next-update="isPreventNextUpdate"
            :use-seconds="useSeconds"
            :max="max"
            :min="min"
            @update="update"
            @change-prevent-update="changePreventUpdate"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, watch } from 'vue'
import dayjs from 'dayjs'
import Clock from './clock.vue'
import { props, hoursAmpm, hours24 } from './props'
import { toNumber } from '../utils/shared'
import { getNumberTime, getIsDisableMinute, getIsDisableSecond } from './utils'
import type { ComputedRef, Ref, DefineComponent, UnwrapRef } from 'vue'
import type { Time, AmPm } from './props'

export default defineComponent({
  name: 'VarTimePicker',
  components: {
    Clock,
  },
  props,
  setup(props) {
    const container: Ref<HTMLDivElement | null> = ref(null)
    const picker: Ref<HTMLElement | null> = ref(null)
    const inner: Ref<DefineComponent | null> = ref(null)
    const isInner: Ref<boolean> = ref(false)
    const isPreventNextUpdate: Ref<boolean> = ref(false)
    const isActualInner: Ref<boolean> = ref(false)
    const isChosenUsableHour: Ref<boolean> = ref(false)
    const isChosenUsableMinute: Ref<boolean> = ref(false)
    const hourRad: Ref<number | undefined> = ref(undefined)
    const minuteRad: Ref<number> = ref(0)
    const secondRad: Ref<number> = ref(0)
    const type: Ref<keyof Time> = ref('hour')
    const ampm: Ref<AmPm> = ref('am')
    const isDisableHour: Ref<boolean> = ref(false)
    const isDisableMinute: Ref<boolean> = ref(false)
    const time: Ref<Time> = ref({
      hour: '00',
      minute: '00',
      second: '00',
    })

    const center: UnwrapRef<Record<string, number>> = reactive({
      x: 0,
      y: 0,
    })
    const innerRange: UnwrapRef<Record<string, Array<number>>> = reactive({
      x: [],
      y: [],
    })

    const getRad: ComputedRef<number | undefined> = computed(() => {
      if (type.value === 'hour') return hourRad.value
      if (type.value === 'minute') return minuteRad.value

      return secondRad.value
    })

    const update = (newTime: string) => {
      props['onUpdate:modelValue']?.(newTime)
      props.onChange?.(newTime)
    }

    const rad2deg = (rad: number): number => {
      return rad * 57.29577951308232
    }

    const checkPanel = (panelType: keyof Time) => {
      isChosenUsableHour.value = false
      isDisableMinute.value = false
      type.value = panelType
    }

    const findAvailableHour = (ampm: string): string | undefined => {
      const { disableHour } = inner.value as DefineComponent

      const index = hoursAmpm.findIndex((hour) => toNumber(hour) === toNumber(time.value.hour))
      const hours = ampm === 'am' ? hoursAmpm : hours24
      const realignmentHours = [...hours.slice(index), ...hours.slice(0, index)]

      return realignmentHours.find((hour, index) => {
        isPreventNextUpdate.value = index !== 0

        return !disableHour.includes(hour)
      })
    }

    const checkAmpm = (ampmType: AmPm) => {
      if (props.readonly) return

      ampm.value = ampmType
      const newHour = findAvailableHour(ampmType)
      if (!newHour) return

      const second = props.useSeconds ? `:${time.value.second}` : ''
      const newTime = `${newHour.padStart(2, '0')}:${time.value.minute}${second}`

      update(newTime)
    }

    const getInner = (clientX: number, clientY: number): boolean => {
      const xIsInRange = clientX >= innerRange.x[0] && clientX <= innerRange.x[1]
      const yIsInRange = clientY >= innerRange.y[0] && clientY <= innerRange.y[1]

      return xIsInRange && yIsInRange
    }

    const getTime = (value: string): Time => {
      const hourFormat = props.format === '24hr' ? 'HH' : 'hh'
      const { hour, minute, second } = getNumberTime(value)

      return {
        hour: dayjs().hour(hour).format(hourFormat),
        minute: dayjs().minute(minute).format('mm'),
        second: dayjs().second(second).format('ss'),
      }
    }

    const getHourIndex = (rad: number): number => {
      const value = rad / 30
      return value >= 0 ? value : value + 12
    }

    const getRangeSize = () => {
      const { width: innerWidth, height: innerHeight } = (inner.value as DefineComponent).getSize()

      const rangeXMin = center.x - innerWidth / 2 - 8
      const rangeXMax = center.x + innerWidth / 2 + 8

      const rangeYMin = center.y - innerHeight / 2 - 8
      const rangeYMax = center.y + innerHeight / 2 + 8

      return {
        rangeXMin,
        rangeXMax,
        rangeYMin,
        rangeYMax,
      }
    }

    const setHourRad = (clientX: number, clientY: number, roundDeg: number) => {
      const { disableHour } = inner.value as DefineComponent
      isActualInner.value = getInner(clientX, clientY)
      const rad = Math.round(roundDeg / 30) * 30 + 90
      const index = getHourIndex(rad)

      const anotherHour = isInner.value ? hoursAmpm[index] : hours24[index]
      if (!disableHour.includes(anotherHour)) {
        isInner.value = props.format === '24hr' ? getInner(clientX, clientY) : false
      }
      if (isInner.value !== isActualInner.value) return

      const newHour = isInner.value || ampm.value === 'pm' ? hours24[index] : hoursAmpm[index]
      isDisableHour.value = disableHour.includes(newHour)
      if (isDisableHour.value) return
      hourRad.value = rad
      isChosenUsableHour.value = true
    }

    const setMinuteRad = (roundDeg: number) => {
      const { disableHour } = inner.value as DefineComponent
      const rad = Math.round(roundDeg / 6) * 6 + 90
      const radToMin = rad / 6 >= 0 ? rad / 6 : rad / 6 + 60

      const values = {
        time: radToMin,
        format: props.format,
        ampm: ampm.value,
        hour: time.value.hour,
        max: props.max,
        min: props.min,
        disableHour,
        allowedTime: props.allowedTime,
      }
      isDisableMinute.value = getIsDisableMinute(values)

      if (isDisableMinute.value) return
      minuteRad.value = rad
      isChosenUsableMinute.value = true
    }

    const setSecondRad = (roundDeg: number) => {
      const { disableHour } = inner.value as DefineComponent
      const rad = Math.round(roundDeg / 6) * 6 + 90
      const radToSec = rad / 6 >= 0 ? rad / 6 : rad / 6 + 60

      const values = {
        time: radToSec,
        format: props.format,
        ampm: ampm.value,
        hour: time.value.hour,
        minute: toNumber(time.value.minute),
        max: props.max,
        min: props.min,
        disableHour,
        allowedTime: props.allowedTime,
      }

      if (!getIsDisableSecond(values)) secondRad.value = rad
    }

    const setCenterAndRange = () => {
      const { left, top, width, height } = (container.value as HTMLDivElement).getBoundingClientRect()

      center.x = left + width / 2
      center.y = top + height / 2

      if (type.value === 'hour' && props.format === '24hr') {
        const { rangeXMin, rangeXMax, rangeYMin, rangeYMax } = getRangeSize()

        innerRange.x = [rangeXMin, rangeXMax]
        innerRange.y = [rangeYMin, rangeYMax]
      }
    }

    const moveHand = (event: TouchEvent) => {
      event.preventDefault()
      if (props.readonly) return

      setCenterAndRange()

      const { clientX, clientY } = event.touches[0]

      const x = clientX - center.x
      const y = clientY - center.y
      const roundDeg = Math.round(rad2deg(Math.atan2(y, x)))

      if (type.value === 'hour') setHourRad(clientX, clientY, roundDeg)
      else if (type.value === 'minute') setMinuteRad(roundDeg)
      else setSecondRad(roundDeg)
    }

    const end = () => {
      if (props.readonly) return

      if (type.value === 'hour' && isChosenUsableHour.value) {
        type.value = 'minute'
        return
      }

      if (type.value === 'minute' && props.useSeconds && isChosenUsableMinute.value) {
        type.value = 'second'
      }
    }

    const changePreventUpdate = () => {
      isPreventNextUpdate.value = false
    }

    watch(
      () => props.modelValue,
      (value) => {
        if (value) {
          const { hour, minute, second } = getNumberTime(value)

          const formatHour12 = dayjs().hour(hour).format('hh')
          const formatHour24 = dayjs().hour(hour).format('HH')
          const formatMinute = dayjs().minute(minute).format('mm')
          const formatSecond = dayjs().second(second).format('ss')

          hourRad.value = (formatHour12 === '12' ? 0 : toNumber(formatHour12)) * 30
          minuteRad.value = toNumber(formatMinute) * 6
          secondRad.value = toNumber(formatSecond) * 6

          time.value = getTime(value)

          if (props.format !== '24hr') {
            ampm.value = `${hour}`.padStart(2, '0') === formatHour24 && hours24.includes(formatHour24) ? 'pm' : 'am'
          }

          isInner.value = props.format === '24hr' && hours24.includes(formatHour24)
        }
      },
      { immediate: true }
    )

    return {
      getRad,
      time,
      container,
      inner,
      picker,
      isInner,
      type,
      ampm,
      isPreventNextUpdate,
      moveHand,
      checkPanel,
      checkAmpm,
      end,
      update,
      changePreventUpdate,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import './timePicker';
</style>
