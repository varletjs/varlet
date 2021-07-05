<template>
  <div class="var-time-picker-clock">
    <div class="var-time-picker-clock__hand" :style="handStyle"></div>
    <div
      class="var-time-picker-clock__item"
      :class="[
        isActive(index, false) ? 'var-time-picker-clock__item--active' : null,
        isDisable(timeScale) ? 'var-time-picker-clock__item--disable' : null,
      ]"
      v-for="(timeScale, index) in timeScales"
      :key="timeScale"
      :style="getStyle(index, timeScale, false)"
    >
      {{ timeScale }}
    </div>
    <div class="var-time-picker-clock__inner" ref="inner" v-if="format === '24hr' && type === 'hour'">
      <div
        class="var-time-picker-clock__item"
        :class="[
          isActive(index, true) ? 'var-time-picker-clock__item--active' : null,
          isDisable(hour) ? 'var-time-picker-clock__item--disable' : null,
        ]"
        v-for="(hour, index) in hours24"
        :key="hour"
        :style="getStyle(index, hour, true)"
      >
        {{ hour }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import dayjs from 'dayjs'
import { hoursAmpm, hours24, minSec } from './props'
import { notConvert, convertHour, getIsDisableMinute, getIsDisableSecond, getNumberTime } from './utils'
import { toNumber } from '../utils/shared'
import type { ComputedRef, Ref, PropType } from 'vue'
import type { Time, AmPm, Format } from './props'

export default defineComponent({
  name: 'Clock',
  props: {
    isInner: {
      type: Boolean,
      required: true,
    },
    rad: {
      type: Number,
    },
    format: {
      type: String as PropType<Format>,
      default: 'ampm',
    },
    time: {
      type: Object as PropType<Time>,
      required: true,
    },
    useSeconds: {
      type: Boolean,
      default: false,
    },
    preventNextUpdate: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String as PropType<keyof Time>,
      default: 'hour',
    },
    ampm: {
      type: String as PropType<AmPm>,
      default: 'am',
    },
    color: {
      type: String,
    },
    min: {
      type: String,
    },
    max: {
      type: String,
    },
  },
  emits: ['update', 'change-prevent-update'],
  setup(props, { emit }) {
    const inner: Ref<HTMLDivElement | null> = ref(null)
    const disableHour: Ref<Array<string>> = ref([])
    const disable24HourIndex: Ref<Array<number>> = ref([])

    const handStyle = computed(() => ({
      transform: `rotate(${toNumber(props.rad)}deg)`,
      height: props.isInner && props.type === 'hour' ? 'calc(50% - 40px)' : 'calc(50% - 4px)',
      backgroundColor: getHandleColor(),
      borderColor: getHandleColor(),
    }))

    const activeItemIndex: ComputedRef<number | undefined> = computed(() => {
      if (props.rad === undefined) return
      const value = props.rad / 30
      return value >= 0 ? value : value + 12
    })

    const timeScales: ComputedRef<Array<string>> = computed(() => {
      if (props.type === 'hour') return hoursAmpm

      return minSec
    })

    const getHandleColor = () => {
      if (activeItemIndex.value === undefined) return props.color
      const hour = props.isInner ? hours24[activeItemIndex.value] : timeScales.value[activeItemIndex.value]

      if (timeScales.value === minSec) {
        const time = props.type === 'minute' ? toNumber(props.time.minute) : toNumber(props.time.second)

        const disableMethod = props.type === 'minute' ? getIsDisableMinute : getIsDisableSecond

        const values = {
          time,
          format: props.format,
          ampm: props.ampm,
          minute: toNumber(props.time.minute),
          hour: props.time.hour,
          max: props.max,
          min: props.min,
          disableHour: disableHour.value,
        }

        return disableMethod(values) ? '#bdbdbd' : props.color
      }

      return isDisable(hour) ? '#bdbdbd' : props.color
    }

    const isActive = (index: number, inner: boolean): boolean => {
      if (inner) return activeItemIndex.value === index && props.isInner

      return activeItemIndex.value === index && (!props.isInner || props.type !== 'hour')
    }

    const isDisable = (time: string) => {
      if (props.type === 'hour') {
        if (notConvert(props.format, props.ampm)) return disableHour.value.includes(time)

        const timeIndex = hoursAmpm.findIndex((hour) => hour === time)
        return disable24HourIndex.value.includes(timeIndex)
      }

      if (props.type === 'minute') {
        const values = {
          time: toNumber(time),
          format: props.format,
          ampm: props.ampm,
          hour: props.time.hour,
          max: props.max,
          min: props.min,
          disableHour: disableHour.value,
        }

        return getIsDisableMinute(values)
      }

      if (props.type === 'second') {
        const values = {
          time: toNumber(time),
          format: props.format,
          ampm: props.ampm,
          hour: props.time.hour,
          minute: toNumber(props.time.minute),
          max: props.max,
          min: props.min,
          disableHour: disableHour.value,
        }

        return getIsDisableSecond(values)
      }
    }

    const getStyle = (index: number, hour: string, inner: boolean) => {
      const rad = ((2 * Math.PI) / 12) * index - Math.PI / 2
      const left = 50 * (1 + Math.cos(rad))
      const top = 50 * (1 + Math.sin(rad))

      const computedColor = () => {
        if (!isActive(index, inner)) {
          return {
            backgroundColor: null,
            color: null,
          }
        }
        if (isDisable(hour)) {
          return {
            backgroundColor: '#bdbdbd',
            color: '#fff',
          }
        }

        return {
          backgroundColor: props.color,
          color: null,
        }
      }

      const { backgroundColor, color } = computedColor()

      return {
        left: `${left}%`,
        top: `${top}%`,
        backgroundColor,
        color,
      }
    }

    const getSize = () => {
      const { width, height } = (inner.value as HTMLDivElement).getBoundingClientRect()

      return {
        width,
        height,
      }
    }

    const getHour = (): string | undefined => {
      if (activeItemIndex.value === undefined) return undefined
      const hours = props.ampm === 'am' ? hoursAmpm : hours24

      return hours[activeItemIndex.value].padStart(2, '0')
    }

    watch([activeItemIndex, () => props.isInner], ([index, inner], [oldIndex, oldInner]) => {
      const isSame = index === oldIndex && inner === oldInner
      if (isSame || props.type !== 'hour' || activeItemIndex.value === undefined) return

      const newHour = inner ? hours24[activeItemIndex.value] : getHour()
      const second = props.useSeconds ? `:${props.time.second}` : ''
      const newTime = `${newHour}:${props.time.minute}${second}`

      if (!props.preventNextUpdate) emit('update', newTime)

      emit('change-prevent-update')
    })

    watch(
      () => props.rad,
      (rad, oldRad) => {
        if (props.type === 'hour' || rad === undefined || oldRad === undefined) return

        const radToMinSec = rad / 6 >= 0 ? rad / 6 : rad / 6 + 60
        const oldRadToMinSec = oldRad / 6 >= 0 ? oldRad / 6 : oldRad / 6 + 60

        if (radToMinSec === oldRadToMinSec) return

        let newTime
        const { hourStr } = convertHour(props.format, props.ampm, props.time.hour)

        if (props.type === 'minute') {
          const newMinute = dayjs().minute(radToMinSec).format('mm')
          const second = props.useSeconds ? `:${props.time.second}` : ''

          newTime = `${hourStr}:${newMinute}${second}`
        }

        if (props.type === 'second') {
          const newSecond = dayjs().second(radToMinSec).format('ss')
          const second = props.useSeconds ? `:${newSecond}` : ''

          newTime = `${hourStr}:${props.time.minute}${second}`
        }

        emit('update', newTime)
      }
    )

    watch(
      [() => props.max, () => props.min],
      ([max, min]) => {
        disableHour.value = []
        if (max && !min) {
          const { hour: maxHour } = getNumberTime(max)

          const disableAmpmHours = hoursAmpm.filter((hour) => toNumber(hour) > maxHour)
          const disable24Hours = hours24.filter((hour) => toNumber(hour) > maxHour)
          disableHour.value = [...disableAmpmHours, ...disable24Hours]
        }

        if (!max && min) {
          const { hour: minHour } = getNumberTime(min)

          const disableAmpmHours = hoursAmpm.filter((hour) => toNumber(hour) < minHour)
          const disable24Hours = hours24.filter((hour) => toNumber(hour) < minHour)
          disableHour.value = [...disableAmpmHours, ...disable24Hours]
        }

        if (max && min) {
          const { hour: maxHour } = getNumberTime(max)
          const { hour: minHour } = getNumberTime(min)

          const disableAmpmHours = hoursAmpm.filter((hour) => toNumber(hour) < minHour || toNumber(hour) > maxHour)
          const disable24Hours = hours24.filter((hour) => toNumber(hour) < minHour || toNumber(hour) > maxHour)
          disableHour.value = [...disableAmpmHours, ...disable24Hours]
        }

        disable24HourIndex.value = disableHour.value
          .map((hour) => hours24.findIndex((hour24) => hour === hour24))
          .filter((hour) => hour >= 0)
      },
      { immediate: true }
    )

    return {
      hours24,
      timeScales,
      inner,
      handStyle,
      disableHour,
      isActive,
      isDisable,
      getSize,
      getStyle,
      activeItemIndex,
    }
  },
})
</script>
