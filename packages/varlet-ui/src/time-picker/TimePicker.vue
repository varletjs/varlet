<template>
  <div ref="picker" :class="classes(n(), formatElevation(elevation, 2))">
    <div :class="n('title')" :style="{ background: titleColor || color }">
      <div :class="n('title-hint')">{{ hint ?? (pt ? pt : t)('timePickerHint') }}</div>
      <div :class="n('title-time-container')">
        <div :class="n('title-time')">
          <div :class="classes(n('title-btn'), [type === 'hour', n('title-btn--active')])" @click="checkPanel('hour')">
            {{ time.hour }}
          </div>
          <span :class="n('title-splitter')">:</span>
          <div
            :class="classes(n('title-btn'), [type === 'minute', n('title-btn--active')])"
            @click="checkPanel('minute')"
          >
            {{ time.minute }}
          </div>
          <span v-if="useSeconds" :class="n('title-splitter')">:</span>
          <div
            v-if="useSeconds"
            :class="classes(n('title-btn'), [type === 'second', n('title-btn--active')])"
            @click="checkPanel('second')"
          >
            {{ time.second }}
          </div>
        </div>
        <div v-if="format === 'ampm'" :class="n('title-ampm')">
          <div :class="classes(n('title-btn'), [ampm === 'am', n('title-btn--active')])" @click="checkAmpm('am')">
            AM
          </div>
          <div :class="classes(n('title-btn'), [ampm === 'pm', n('title-btn--active')])" @click="checkAmpm('pm')">
            PM
          </div>
        </div>
      </div>
    </div>
    <div :class="n('body')">
      <div ref="container" :class="n('clock-container')" @touchstart="moveHand" @touchmove="moveHand" @touchend="end">
        <transition :name="`${n()}-panel-fade`">
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
    <div v-if="$slots.actions" :class="n('actions')">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, watch, type DefineComponent } from 'vue'
import { call, getRect, preventDefault, toNumber } from '@varlet/shared'
import dayjs from 'dayjs/esm/index.js'
import { t } from '../locale'
import { injectLocaleProvider } from '../locale-provider/provide'
import { createNamespace, formatElevation } from '../utils/components'
import { padStart } from '../utils/shared'
import Clock from './clock.vue'
import { hours24, hoursAmpm, props, type AmPm, type Time } from './props'
import { getIsDisableMinute, getIsDisableSecond, getNumberTime } from './utils'

const { name, n, classes } = createNamespace('time-picker')

export default defineComponent({
  name,
  components: { Clock },
  props,
  setup(props) {
    const container = ref<HTMLElement | null>(null)
    const picker = ref<HTMLElement | null>(null)
    const inner = ref<DefineComponent | null>(null)
    const isInner = ref(false)
    const isPreventNextUpdate = ref(false)
    const isActualInner = ref(false)
    const isChosenUsableHour = ref(false)
    const isChosenUsableMinute = ref(false)
    const isDisableHour = ref(false)
    const isDisableMinute = ref(false)
    const minuteRad = ref(0)
    const secondRad = ref(0)
    const hourRad = ref<number | undefined>()
    const type = ref<keyof Time>('hour')
    const ampm = ref<AmPm>('am')
    const time = ref<Time>({
      hour: '00',
      minute: '00',
      second: '00',
    })
    const center = reactive<Record<string, number>>({
      x: 0,
      y: 0,
    })
    const innerRange = reactive<Record<string, number[]>>({
      x: [],
      y: [],
    })
    const getRad = computed(() => {
      if (type.value === 'hour') {
        return hourRad.value
      }
      if (type.value === 'minute') {
        return minuteRad.value
      }

      return secondRad.value
    })
    const { t: pt } = injectLocaleProvider()

    watch(
      () => props.modelValue,
      (value) => {
        if (value === undefined || value === '') {
          resetTime()
          return
        }

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
          ampm.value = padStart(`${hour}`, 2, '0') === formatHour24 && hours24.includes(formatHour24) ? 'pm' : 'am'
        }

        isInner.value = props.format === '24hr' && hours24.includes(formatHour24)
      },
      { immediate: true },
    )

    function resetTime() {
      hourRad.value = undefined
      minuteRad.value = 0
      secondRad.value = 0
      time.value = {
        hour: '00',
        minute: '00',
        second: '00',
      }
      ampm.value = 'am'
    }

    function update(newTime: string) {
      call(props['onUpdate:modelValue'], newTime)
      call(props.onChange, newTime)
    }

    function rad2deg(rad: number): number {
      return rad * 57.29577951308232
    }

    function checkPanel(panelType: keyof Time) {
      isChosenUsableHour.value = false
      isDisableMinute.value = false
      type.value = panelType
    }

    function findAvailableHour(ampm: string): string | undefined {
      const { disableHour } = inner.value as DefineComponent

      const index = hoursAmpm.findIndex((hour) => toNumber(hour) === toNumber(time.value.hour))
      const hours = ampm === 'am' ? hoursAmpm : hours24
      const realignmentHours = [...hours.slice(index), ...hours.slice(0, index)]

      return realignmentHours.find((hour, index) => {
        isPreventNextUpdate.value = index !== 0

        return !disableHour.includes(hour)
      })
    }

    function checkAmpm(ampmType: AmPm) {
      if (props.readonly) {
        return
      }

      ampm.value = ampmType
      const newHour = findAvailableHour(ampmType)
      if (!newHour) {
        return
      }

      const second = props.useSeconds ? `:${time.value.second}` : ''
      const newTime = `${padStart(newHour, 2, '0')}:${time.value.minute}${second}`

      update(newTime)
    }

    function getInner(clientX: number, clientY: number): boolean {
      const xIsInRange = clientX >= innerRange.x[0] && clientX <= innerRange.x[1]
      const yIsInRange = clientY >= innerRange.y[0] && clientY <= innerRange.y[1]

      return xIsInRange && yIsInRange
    }

    function getTime(value: string): Time {
      const hourFormat = props.format === '24hr' ? 'HH' : 'hh'
      const { hour, minute, second } = getNumberTime(value)

      return {
        hour: dayjs().hour(hour).format(hourFormat),
        minute: dayjs().minute(minute).format('mm'),
        second: dayjs().second(second).format('ss'),
      }
    }

    function getHourIndex(rad: number): number {
      const value = rad / 30
      return value >= 0 ? value : value + 12
    }

    function getRangeSize() {
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

    function setHourRad(clientX: number, clientY: number, roundDeg: number) {
      const { disableHour } = inner.value as DefineComponent
      isActualInner.value = getInner(clientX, clientY)
      const rad = Math.round(roundDeg / 30) * 30 + 90
      const index = getHourIndex(rad)

      const anotherHour = isInner.value ? hoursAmpm[index] : hours24[index]
      if (!disableHour.includes(anotherHour)) {
        isInner.value = props.format === '24hr' ? getInner(clientX, clientY) : false
      }
      if (isInner.value !== isActualInner.value) {
        return
      }

      const newHour = isInner.value || ampm.value === 'pm' ? hours24[index] : hoursAmpm[index]
      isDisableHour.value = disableHour.includes(newHour)
      if (isDisableHour.value) {
        return
      }
      hourRad.value = rad
      isChosenUsableHour.value = true
    }

    function setMinuteRad(roundDeg: number) {
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

      if (isDisableMinute.value) {
        return
      }
      minuteRad.value = rad
      isChosenUsableMinute.value = true
    }

    function setSecondRad(roundDeg: number) {
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

      if (!getIsDisableSecond(values)) {
        secondRad.value = rad
      }
    }

    function setCenterAndRange() {
      const { left, top, width, height } = getRect(container.value as HTMLElement)

      center.x = left + width / 2
      center.y = top + height / 2

      if (type.value === 'hour' && props.format === '24hr') {
        const { rangeXMin, rangeXMax, rangeYMin, rangeYMax } = getRangeSize()

        innerRange.x = [rangeXMin, rangeXMax]
        innerRange.y = [rangeYMin, rangeYMax]
      }
    }

    function moveHand(event: TouchEvent) {
      preventDefault(event)
      if (props.readonly) {
        return
      }

      setCenterAndRange()

      const { clientX, clientY } = event.touches[0]

      const x = clientX - center.x
      const y = clientY - center.y
      const roundDeg = Math.round(rad2deg(Math.atan2(y, x)))

      if (type.value === 'hour') {
        setHourRad(clientX, clientY, roundDeg)
      } else if (type.value === 'minute') {
        setMinuteRad(roundDeg)
      } else {
        setSecondRad(roundDeg)
      }
    }

    function end() {
      if (props.readonly) {
        return
      }

      if (type.value === 'hour' && isChosenUsableHour.value) {
        type.value = 'minute'
        return
      }

      if (type.value === 'minute' && props.useSeconds && isChosenUsableMinute.value) {
        type.value = 'second'
      }
    }

    function changePreventUpdate() {
      isPreventNextUpdate.value = false
    }

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
      n,
      classes,
      t,
      pt,
      moveHand,
      checkPanel,
      checkAmpm,
      end,
      update,
      changePreventUpdate,
      formatElevation,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import './timePicker';
</style>
