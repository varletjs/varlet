<template>
  <div :class="n()">
    <div :class="n('content')">
      <transition :name="`${nDate()}${reverse ? '-reverse' : ''}-translatex`">
        <div :key="panelKey">
          <ul :class="n('head')">
            <li v-for="week in sortWeekList" :key="week">{{ getDayAbbr(week) }}</li>
          </ul>
          <ul :class="n('body')">
            <li v-for="(day, index) in days" :key="index">
              <var-button
                type="primary"
                var-day-picker-cover
                round
                :elevation="datePickerProps.buttonElevation"
                v-bind="{
                  ...buttonProps(day),
                }"
                @click="chooseDay(day)"
              >
                {{ filterDay(day) }}
              </var-button>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { toNumber } from '@varlet/shared'
import { onSmartMounted } from '@varlet/use'
import dayjs from 'dayjs/esm/index.js'
import isSameOrAfter from 'dayjs/esm/plugin/isSameOrAfter/index.js'
import isSameOrBefore from 'dayjs/esm/plugin/isSameOrBefore/index.js'
import { computed, defineComponent, ref, watch, type ComputedRef, type PropType, type Ref } from 'vue'
import VarButton from '../../button'
import { t } from '../../locale'
import { injectLocaleProvider } from '../../locale-provider/provide'
import { createNamespace } from '../../utils/components'
import { WEEK_HEADER, type Choose, type DatePickerProps, type Preview, type Week } from '../props'

dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)

const { n } = createNamespace('day-picker')
const { n: nDate } = createNamespace('date-picker')

export default defineComponent({
  name: 'DayPickerPanel',
  components: {
    VarButton,
  },
  props: {
    choose: {
      type: Object as PropType<Choose>,
      required: true,
    },
    preview: {
      type: Object as PropType<Preview>,
      required: true,
    },
    current: {
      type: String,
      required: true,
    },
    datePickerProps: {
      type: Object as PropType<DatePickerProps>,
      required: true,
    },
  },
  emits: ['choose-day'],

  setup(props, { emit }) {
    const [currentYear, currentMonth, currentDay] = props.current.split('-')
    const days: Ref<Array<number>> = ref([])
    const reverse: Ref<boolean> = ref(false)
    const panelKey: Ref<number> = ref(0)

    const { t: pt } = injectLocaleProvider()

    const isCurrent: ComputedRef<boolean> = computed(
      () => props.preview.previewYear === currentYear && props.preview.previewMonth === currentMonth,
    )

    const isSame: ComputedRef<boolean> = computed(
      () =>
        props.choose.chooseYear === props.preview.previewYear &&
        props.choose.chooseMonth === props.preview.previewMonth,
    )

    const sortWeekList: ComputedRef<Array<Week>> = computed(() => {
      const index = WEEK_HEADER.findIndex((week: Week) => week === props.datePickerProps.firstDayOfWeek)

      if (index === -1 || index === 0) {
        return WEEK_HEADER
      }

      return [...WEEK_HEADER.slice(index), ...WEEK_HEADER.slice(0, index)]
    })

    function getDayAbbr(key: Week): string {
      return (pt || t)('datePickerWeekDict')?.[key].abbr ?? ''
    }

    function filterDay(day: number): number | string {
      return day > 0 ? day : ''
    }

    function initDate() {
      const {
        preview: { previewMonth, previewYear },
      }: { preview: Preview } = props

      const monthNum = dayjs(`${previewYear}-${previewMonth}`).daysInMonth()
      const firstDayToWeek = dayjs(`${previewYear}-${previewMonth}-01`).day()
      const index = sortWeekList.value.findIndex((week: Week) => week === `${firstDayToWeek}`)
      days.value = [...Array(index).fill(-1), ...Array.from(Array(monthNum + 1).keys())].filter((value) => value)
    }

    function inRange(day: number) {
      const {
        preview: { previewYear, previewMonth },
        datePickerProps: { min, max },
      }: { preview: Preview; datePickerProps: DatePickerProps } = props

      let isBeforeMax = true
      let isAfterMin = true
      const previewDate = `${previewYear}-${previewMonth}-${day}`

      if (max) {
        isBeforeMax = dayjs(previewDate).isSameOrBefore(dayjs(max), 'day')
      }

      if (min) {
        isAfterMin = dayjs(previewDate).isSameOrAfter(dayjs(min), 'day')
      }

      return isBeforeMax && isAfterMin
    }

    function shouldChoose(val: string): boolean {
      const {
        choose: { chooseDays, chooseRangeDay },
        datePickerProps: { range },
      }: { choose: Choose; datePickerProps: DatePickerProps } = props

      if (range) {
        if (!chooseRangeDay.length) {
          return false
        }

        const isBeforeMax = dayjs(val).isSameOrBefore(dayjs(chooseRangeDay[1]), 'day')
        const isAfterMin = dayjs(val).isSameOrAfter(dayjs(chooseRangeDay[0]), 'day')
        return isBeforeMax && isAfterMin
      }

      return chooseDays.includes(val)
    }

    function buttonProps(day: number) {
      if (day < 0) {
        return {
          text: true,
          outline: false,
          textColor: '',
          class: n('button'),
          disabled: true,
        }
      }

      const {
        choose: { chooseDay },
        preview: { previewYear, previewMonth },
        datePickerProps: { allowedDates, color, multiple, range, showCurrent },
      }: { choose: Choose; preview: Preview; datePickerProps: DatePickerProps } = props

      const val = `${previewYear}-${previewMonth}-${day}`
      const selected = range || multiple ? shouldChoose(val) : toNumber(chooseDay) === day && isSame.value
      const disabled = !inRange(day) || (allowedDates ? !allowedDates(val) : false)
      const text = disabled || (range || multiple ? !selected : !isSame.value || toNumber(chooseDay) !== day)
      const current = isCurrent.value && toNumber(currentDay) === day && showCurrent
      const outline =
        current &&
        (((range || multiple || isSame.value) && disabled) ||
          (range || multiple ? !selected : isSame.value ? chooseDay !== currentDay : true))
      const cover = !disabled && !outline && !selected
      const textColor = !disabled && outline ? (color ?? '') : ''

      return {
        text,
        outline,
        textColor,
        [`${nDate()}-color-cover`]: cover,
        class: [n('button'), n('button--usable')],
        disabled,
      }
    }

    // expose for internal
    function shiftPreview(direction: string) {
      reverse.value = direction === 'prev'
      panelKey.value += direction === 'prev' ? -1 : 1
    }

    // expose for internal
    function shiftYearPreview(direction: string) {
      reverse.value = direction === 'prev'
      panelKey.value += direction === 'prev' ? -1 : 1
    }

    function chooseDay(day: number) {
      emit('choose-day', day)
    }

    onSmartMounted(() => {
      initDate()
    })

    watch(
      () => props.preview,
      () => {
        initDate()
      },
    )

    return {
      n,
      nDate,
      days,
      reverse,
      panelKey,
      sortWeekList,
      shiftPreview,
      shiftYearPreview,
      filterDay,
      getDayAbbr,
      chooseDay,
      buttonProps,
    }
  },
})
</script>
