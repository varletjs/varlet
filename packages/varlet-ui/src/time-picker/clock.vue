<template>
  <div class="var-time-picker-clock">
    <div class="var-time-picker-clock__hand" :style="handStyle"></div>
    <div
      class="var-time-picker-clock__item"
      :class="[
        isActive(index, false) ? 'var-time-picker-clock__item--active' : null,
        isDisable(time) ? 'var-time-picker-clock__item--disable' : null,
      ]"
      v-for="(time, index) in timeList"
      :key="time"
      :style="getStyle(index, false)"
    >
      {{ time }}
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
        :style="getStyle(index, true)"
      >
        {{ hour }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, PropType, ref, Ref, watch } from 'vue'
import dayjs from 'dayjs'
import { hoursAmpm, hours24, minSec, Time, AmPm, Format } from './props'
import { notConvert, convertHour, getIsDisableMinute, getIsDisableSecond, getNumberTime } from './utils'
import { toNumber } from '../utils/shared'

export default defineComponent({
  name: 'Clock',
  props: {
    isInner: {
      type: Boolean,
      required: true,
    },
    rad: {
      type: Number,
      required: true,
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
    type: {
      type: String as PropType<keyof Time>,
      default: 'hour',
    },
    ampm: {
      type: String as PropType<AmPm>,
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
  setup(props, { emit }) {
    const inner: Ref<HTMLDivElement | null> = ref(null)
    const disableHour: Ref<Array<string>> = ref([])
    const disable24HourIndex: Ref<Array<number>> = ref([])

    const handStyle = computed(() => ({
      transform: `rotate(${props.rad}deg)`,
      height: props.isInner && props.type === 'hour' ? 'calc(50% - 40px)' : 'calc(50% - 4px)',
      backgroundColor: props.color,
      borderColor: props.color,
    }))

    const activeItemIndex: ComputedRef<number> = computed(() => {
      const value = props.rad / 30
      return value >= 0 ? value : value + 12
    })

    const timeList: ComputedRef<Array<string>> = computed(() => {
      if (props.type === 'hour') return hoursAmpm

      return minSec
    })

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

    const getStyle = (index: number, inner: boolean) => {
      const rad = ((2 * Math.PI) / 12) * index - Math.PI / 2
      const left = 50 * (1 + Math.cos(rad))
      const top = 50 * (1 + Math.sin(rad))

      return {
        left: `${left}%`,
        top: `${top}%`,
        backgroundColor: isActive(index, inner) ? props.color : null,
      }
    }

    const getSize = () => {
      const { width, height } = (inner.value as HTMLDivElement).getBoundingClientRect()
      return {
        width,
        height,
        handStyle,
      }
    }

    const getHour = (): string => {
      if (props.ampm === 'am') {
        const hour = toNumber(hoursAmpm[activeItemIndex.value])
        return dayjs().hour(hour).format('hh')
      }

      return hours24[activeItemIndex.value]
    }

    watch([activeItemIndex, () => props.isInner], ([index, inner], [oldIndex, oldInner]) => {
      const isSame = index === oldIndex && inner === oldInner
      if (isSame || props.type !== 'hour') return

      const newHour = inner ? hours24[activeItemIndex.value] : getHour()
      const second = props.useSeconds ? `:${props.time.second}` : ''
      const newTime = `${newHour}:${props.time.minute}${second}`

      emit('update', newTime)
    })

    watch(
      () => props.rad,
      (rad, oldRad) => {
        if (props.type === 'hour') return

        const radToMinSec = rad / 6 >= 0 ? rad / 6 : rad / 6 + 60
        const oldRadToMinSec = oldRad / 6 >= 0 ? oldRad / 6 : oldRad / 6 + 60

        if (radToMinSec === oldRadToMinSec) return

        if (props.type === 'minute') {
          const { hourStr } = convertHour(props.format, props.ampm, props.time.hour)
          const newMinute = dayjs().minute(radToMinSec).format('mm')
          const second = props.useSeconds ? `:${props.time.second}` : ''

          const newTime = `${hourStr}:${newMinute}${second}`

          emit('update', newTime)
        }

        if (props.type === 'second') {
          const { hourStr } = convertHour(props.format, props.ampm, props.time.hour)
          const newSecond = dayjs().second(radToMinSec).format('ss')
          const second = props.useSeconds ? `:${newSecond}` : ''

          const newTime = `${hourStr}:${props.time.minute}${second}`
          emit('update', newTime)
        }
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
          return
        }

        if (!max && min) {
          const { hour: minHour } = getNumberTime(min)

          const disableAmpmHours = hoursAmpm.filter((hour) => toNumber(hour) < minHour)
          const disable24Hours = hours24.filter((hour) => toNumber(hour) < minHour)
          disableHour.value = [...disableAmpmHours, ...disable24Hours]
          return
        }

        if (max && min) {
          const { hour: maxHour } = getNumberTime(max)
          const { hour: minHour } = getNumberTime(max)

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
      timeList,
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
