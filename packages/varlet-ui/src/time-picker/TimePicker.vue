<template>
  <div class="var-time-picker" :class="[shadow ? 'var-elevation--2' : null]">
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
            :rad="getRad"
            :time="time"
            :use-seconds="useSeconds"
            :max="max"
            :min="min"
            @update="update"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  ComputedRef,
  defineComponent,
  onMounted,
  reactive,
  ref,
  Ref,
  watch,
  DefineComponent,
  UnwrapRef,
} from 'vue'
import dayjs from 'dayjs'
import Clock from './clock.vue'
import { props, Time, AmPm, hoursAmpm, hours24 } from './props'
import { convertHour } from './utils'

export default defineComponent({
  name: 'VarTimePicker',
  components: {
    [Clock.name]: Clock,
  },
  props,
  setup(props) {
    const container: Ref<HTMLDivElement | null> = ref(null)
    const inner: Ref<DefineComponent | null> = ref(null)
    const isInner: Ref<boolean> = ref(false)
    const isActualInner: Ref<boolean> = ref(false)
    const hourRad: Ref<number> = ref(0)
    const minuteRad: Ref<number> = ref(0)
    const secondRad: Ref<number> = ref(0)
    const type: Ref<keyof Time> = ref('hour')
    const ampm: Ref<AmPm> = ref('am')
    const isDisableHour: Ref<boolean> = ref(false)
    const isDisableMinute: Ref<boolean> = ref(false)

    const center: UnwrapRef<Record<string, number>> = reactive({
      x: 0,
      y: 0,
    })
    const innerRange: UnwrapRef<Record<string, Array<number>>> = reactive({
      x: [],
      y: [],
    })

    const time: ComputedRef<Time> = computed(() => {
      const hourFormat = props.format === '24hr' ? 'HH' : 'hh'
      if (!props.modelValue) {
        return {
          hour: '00',
          minute: '00',
          second: '00',
        }
      }
      const [hour, minute, second] = props.modelValue.split(':')
      return {
        hour: dayjs()
          .hour(+hour)
          .format(hourFormat),
        minute: dayjs()
          .minute(+minute)
          .format('mm'),
        second: dayjs()
          .second(+second)
          .format('ss'),
      }
    })

    const getRad: ComputedRef<number> = computed(() => {
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
      type.value = panelType
    }
    const checkAmpm = (ampmType: AmPm) => {
      ampm.value = ampmType
    }

    const getInner = (clientX: number, clientY: number): boolean => {
      const xIsInRange = clientX >= innerRange.x[0] && clientX <= innerRange.x[1]
      const yIsInRange = clientY >= innerRange.y[0] && clientY <= innerRange.y[1]
      return xIsInRange && yIsInRange
    }

    const getHourIndex = (rad: number): number => {
      const value = rad / 30
      return value >= 0 ? value : value + 12
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
    }

    const setMinuteRad = (roundDeg: number) => {
      const { disableHour } = inner.value as DefineComponent
      const rad = Math.round(roundDeg / 6) * 6 + 90
      const radToMin = rad / 6 >= 0 ? rad / 6 : rad / 6 + 60
      const hour = convertHour(props.format, ampm.value, time.value.hour)
      if (disableHour.includes(hour)) return true

      if (props.max && !props.min) {
        const [maxHour, maxMinute] = props.max.split(':')
        if (+maxHour === +hour && radToMin > +maxMinute) {
          isDisableMinute.value = true
          return
        }
      } else if (!props.max && props.min) {
        const [minHour, minMinute] = props.min.split(':')
        if (+minHour === +hour && radToMin < +minMinute) {
          isDisableMinute.value = true
          return
        }
      } else if (props.max && props.min) {
        const [maxHour, maxMinute] = props.max.split(':')
        const [minHour, minMinute] = props.min.split(':')
        if ((+minHour === +hour && radToMin < +minMinute) || (+maxHour === +hour && radToMin > +maxMinute)) {
          isDisableMinute.value = true
          return
        }
      }
      isDisableMinute.value = false
      minuteRad.value = rad
    }

    const setSecondRad = (roundDeg: number) => {
      const { disableHour } = inner.value as DefineComponent
      const rad = Math.round(roundDeg / 6) * 6 + 90
      const radToSec = rad / 6 >= 0 ? rad / 6 : rad / 6 + 60
      const hour = convertHour(props.format, ampm.value, time.value.hour)
      if (disableHour.includes(hour)) return true

      if (props.max && !props.min) {
        const [maxHour, maxMinute, maxSecond] = props.max.split(':')
        if (
          (+maxHour === +hour && +maxMinute < +time.value.minute) ||
          (+maxHour === +hour && +maxMinute === +time.value.minute && radToSec > +maxSecond)
        )
          return
      } else if (!props.max && props.min) {
        const [minHour, minMinute, minSecond] = props.min.split(':')
        if (
          (+minHour === +hour && +minMinute > +time.value.minute) ||
          (+minHour === +hour && +minMinute === +time.value.minute && radToSec > +minSecond)
        )
          return
      } else if (props.max && props.min) {
        const [maxHour, maxMinute, maxSecond] = props.max.split(':')
        const [minHour, minMinute, minSecond] = props.min.split(':')

        if (
          (+maxHour === +hour && +maxMinute < +time.value.minute) ||
          (+minHour === +hour && +minMinute > +time.value.minute) ||
          (+maxHour === +hour && +maxMinute === +time.value.minute && radToSec > +maxSecond) ||
          (+minHour === +hour && +minMinute === +time.value.minute && radToSec < +minSecond)
        )
          return
      }
      secondRad.value = rad
    }

    const moveHand = (event: TouchEvent) => {
      event.preventDefault()
      if (props.readonly) return
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

      if (type.value === 'hour') {
        if (isDisableHour.value || isInner.value !== isActualInner.value) return
        type.value = 'minute'
        return
      }
      if (type.value === 'minute' && props.useSeconds && !isDisableMinute.value) type.value = 'second'
    }

    onMounted(() => {
      const { left, top, width, height } = (container.value as HTMLDivElement).getBoundingClientRect()

      center.x = left + width / 2
      center.y = top + height / 2
      if (props.format === '24hr') {
        const { width: innerWidth, height: innerHeight } = (inner.value as DefineComponent).getSize()
        innerRange.x = [center.x - innerWidth / 2 - 8, center.x + innerWidth / 2 + 8]
        innerRange.y = [center.y - innerHeight / 2 - 8, center.y + innerHeight / 2 + 8]
      }
    })

    watch(
      () => props.modelValue,
      (value) => {
        if (value) {
          const [hour, minute, second] = value.split(':')
          const formatHour = dayjs()
            .hour(+hour)
            .format('hh')
          const formatMinute = dayjs()
            .minute(+minute)
            .format('mm')
          const formatSecond = dayjs()
            .second(+second)
            .format('ss')
          hourRad.value = (formatHour === '12' ? 0 : +formatHour) * 30
          minuteRad.value = +formatMinute * 6
          secondRad.value = +formatSecond * 6
          isInner.value =
            props.format === '24hr' &&
            hours24.includes(
              dayjs()
                .hour(+hour)
                .format('HH')
            )
        }
      },
      { immediate: true }
    )

    watch(ampm, (newAmpm) => {
      let newTime
      if (newAmpm === 'pm') {
        const index = hoursAmpm.findIndex((hour) => +hour === +time.value.hour)
        const pmHour = hours24[index]
        const second = props.useSeconds ? `:${time.value.second}` : ''
        newTime = `${pmHour}:${time.value.minute}${second}`
      } else {
        const second = props.useSeconds ? `:${time.value.second}` : ''
        newTime = `${time.value.hour}:${time.value.minute}${second}`
      }
      props['onUpdate:modelValue']?.(newTime)
      props.onChange?.(newTime)
    })

    return {
      getRad,
      time,
      container,
      inner,
      isInner,
      type,
      ampm,
      moveHand,
      checkPanel,
      checkAmpm,
      end,
      update,
    }
  },
})
</script>

<style lang="less">
@import './timePicker';
</style>
